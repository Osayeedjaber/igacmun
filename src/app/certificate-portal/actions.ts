'use server'

import { createClient } from '@/lib/supabase/server'

export interface CertificateMetadata {
  id: string
  certificate_id: string
  field_name: string
  field_value: string
  field_type: 'text' | 'array' | 'json'
}

export interface Certificate {
  id: string
  certificate_id: string
  event_id: string
  certificate_type: string
  participant_name: string
  school: string
  date_issued: string
  status: 'active' | 'revoked'
  revoked_at: string | null
  revoked_reason: string | null
  qr_code_data: string
  pdf_available: boolean
  pdf_storage_path: string | null
  created_at: string
  verification_count: number
  last_verified_at: string | null
  // Joined data
  events?: {
    id: string
    event_code: string
    event_name: string
  } | null
  certificate_metadata?: CertificateMetadata[]
  // Flattened metadata fields
  cert_type?: string
  committee?: string
  country?: string
  department?: string
  designation?: string
  email?: string
}

/**
 * Safely parse JSON, returning the original value if parsing fails
 */
function safeJsonParse(value: string): unknown {
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

/**
 * Flatten certificate_metadata array into top-level fields
 * Handles: cert_type, committee, country, department, designation, email
 */
function flattenMetadata(certificate: Certificate): Certificate {
  if (!certificate.certificate_metadata || certificate.certificate_metadata.length === 0) {
    return certificate
  }
  
  const metadata = certificate.certificate_metadata.reduce((acc, meta) => {
    acc[meta.field_name] = (meta.field_type === 'json' || meta.field_type === 'array')
      ? safeJsonParse(meta.field_value)
      : meta.field_value
    return acc
  }, {} as Record<string, unknown>)
  
  return {
    ...certificate,
    cert_type: metadata.cert_type as string | undefined,
    committee: metadata.committee as string | undefined,
    country: metadata.country as string | undefined,
    department: metadata.department as string | undefined,
    designation: metadata.designation as string | undefined,
    email: metadata.email as string | undefined,
  }
}

export async function searchCertificate(query: string): Promise<{ success: boolean; data?: Certificate[]; error?: string }> {
  if (!query) {
    return { success: false, error: 'Please enter a certificate ID or name' }
  }

  // Sanitize input - remove any potentially dangerous characters
  const sanitizedQuery = query.trim().slice(0, 100)
  
  if (!sanitizedQuery) {
    return { success: false, error: 'Please enter a valid certificate ID or name' }
  }

  try {
    const supabase = await createClient()
    
    // Search by certificate_id only (exact match required)
    const { data: idData, error: idError } = await supabase
      .from('certificates')
      .select(`
        *,
        events (*),
        certificate_metadata (*)
      `)
      .eq('certificate_id', sanitizedQuery)
      .single()

    if (idData && !idError) {
      return { success: true, data: [flattenMetadata(idData as Certificate)] }
    }

    // If exact match not found, return error (no partial matching)
    if (idError?.code === 'PGRST116') {
      return { success: false, error: 'No certificate found with this ID' }
    }

    console.error('Supabase search error:', idError)
    return { success: false, error: 'Failed to search certificates' }
  } catch (error) {
    console.error('Search error:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}
