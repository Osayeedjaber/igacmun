'use server'

import { createClient } from '@supabase/supabase-js'
import { unstable_cache } from 'next/cache'

export interface Certificate {
  id: string
  certificate_id: string
  participant_name: string
  school: string
  certificate_type: string
  date_issued: string
  created_at: string
  event?: string | null
  event_code?: string | null
  status?: string
  pdf_available?: boolean
  pdf_download_url?: string | null
  country?: string
  committee?: string
  segment?: string
  team_name?: string
  revoked_at?: string
  revoked_reason?: string
  [key: string]: any
}

// Cache the certificate lookup to prevent Supabase rate limits
// This caches the result for 1 hour (3600 seconds)
const getCachedCertificate = unstable_cache(
  async (query: string) => {
    // Use a direct client without cookie overhead for public search
    // This avoids "Dynamic server usage" errors in cached functions
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    return await supabase
      .from('certificates')
      .select(`
        *,
        events (*),
        certificate_metadata (*)
      `)
      .eq('certificate_id', query)
      .single()
  },
  ['certificate-lookup-v1'],
  { revalidate: 3600, tags: ['certificates'] }
)

export async function searchCertificate(query: string): Promise<{ success: boolean; data?: Certificate[]; error?: string }> {
  if (!query) {
    return { success: false, error: 'Please enter a certificate ID' }
  }

  try {
    // Use the cached fetcher
    const { data: certificate, error } = await getCachedCertificate(query)

    if (error || !certificate) {
      // If error is specifically a connection issue or 500, we might want to say "System busy"
      // But usually for single() it returns error if not found too (PGRST116)
      if (error && error.code !== 'PGRST116') {
         console.error('Supabase Error:', error)
      }
      return { success: false, error: 'Certificate not found. Please check the ID and try again.' }
    }

    // Format the response similar to the API
    const metadata = (certificate.certificate_metadata || []).reduce((acc: any, meta: any) => {
      acc[meta.field_name] = meta.field_type === 'json' || meta.field_type === 'array' 
        ? JSON.parse(meta.field_value) 
        : meta.field_value
      return acc
    }, {})

    const formattedCertificate = {
      ...certificate,
      event: certificate.events?.event_name || null,
      event_code: certificate.events?.event_code || null,
      pdf_download_url: certificate.pdf_storage_path || null,
      ...metadata
    }

    return { success: true, data: [formattedCertificate] }
  } catch (error) {
    console.error('Search error:', error)
    return { success: false, error: 'An unexpected error occurred. Please try again later.' }
  }
}
