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
  event: string | null
  event_code: string | null
  status: string
  pdf_available: boolean
  pdf_download_url: string | null
  country?: string
  committee?: string
  segment?: string
  team_name?: string
  revoked_at?: string
  revoked_reason?: string
  [key: string]: string | number | boolean | null | undefined
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
    const { data: certificate, error } = await getCachedCertificate(query) as { data: Certificate | null; error: { code: string } | null }

    if (error || !certificate) {
      // If error is specifically a connection issue or 500, we might want to say "System busy"
      // But usually for single() it returns error if not found too (PGRST116)
      if (error && error.code !== 'PGRST116') {
         console.error('Supabase Error:', error)
      }
      return { success: false, error: 'Certificate not found. Please check the ID and try again.' }
    }

    // Format the response similar to the API
    const metadata = ((certificate.certificate_metadata as unknown) as Record<string, unknown>[] | null || []).reduce((acc: Record<string, unknown>, meta: unknown) => {
      const metaObj = meta as Record<string, unknown>
      acc[metaObj.field_name as string] = metaObj.field_type === 'json' || metaObj.field_type === 'array' 
        ? JSON.parse(metaObj.field_value as string) 
        : metaObj.field_value
      return acc
    }, {}) as Record<string, string | number | boolean | null | undefined | Record<string, unknown>[]>

    // Extract only the properties we need to avoid type conflicts
    const { events, pdf_storage_path, status, pdf_available, ...certificateBase } = certificate
    
    const eventsObj = events as Record<string, unknown> | null
    const eventName = typeof eventsObj?.event_name === 'string' ? eventsObj.event_name : null
    const eventCode = typeof eventsObj?.event_code === 'string' ? eventsObj.event_code : null
    const pdfUrl = typeof pdf_storage_path === 'string' ? pdf_storage_path : null
    
    const formattedCertificate: Certificate = {
      ...certificateBase,
      event: eventName,
      event_code: eventCode,
      pdf_download_url: pdfUrl,
      status: typeof status === 'string' ? status : 'valid',
      pdf_available: typeof pdf_available === 'boolean' ? pdf_available : true,
      ...metadata
    }

    return { success: true, data: [formattedCertificate] }
  } catch (error) {
    console.error('Search error:', error)
    return { success: false, error: 'An unexpected error occurred. Please try again later.' }
  }
}
