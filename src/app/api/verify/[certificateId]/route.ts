import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ certificateId: string }> }
) {
  try {
    const { certificateId } = await params
    const supabase = await createClient()
    
    // Get certificate with all related data
    const { data: certificate, error } = await supabase
      .from('certificates')
      .select(`
        *,
        events (*),
        certificate_metadata (*)
      `)
      .eq('certificate_id', certificateId)
      .single() as { data: Record<string, unknown> | null; error: Error | null }
    
    if (error || !certificate) {
      return NextResponse.json(
        { 
          valid: false,
          error: 'Certificate not found' 
        },
        { status: 404 }
      )
    }

    const certId = (certificate.id as string)
    const verificationData = {
      certificate_id: certId,
      ip_address: (await headers()).get('x-forwarded-for') || (await headers()).get('x-real-ip') || null,
      user_agent: (await headers()).get('user-agent') || null
    }
    
    // Check if revoked
    if (certificate.status === 'revoked') {
      // Log verification attempt
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (supabase as any)
        .from('verification_logs')
        .insert(verificationData)
      
      return NextResponse.json({
        valid: false,
        status: 'revoked',
        revoked_at: certificate.revoked_at,
        revoked_reason: certificate.revoked_reason,
        contact_email: 'intlglobalaffairscouncil@gmail.com',
        certificate: formatCertificateResponse(certificate)
      })
    }
    
    // Log verification
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase as any)
      .from('verification_logs')
      .insert(verificationData)
    
    // Update verification count
    const verificationCount = (certificate.verification_count as number) || 0
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase as any)
      .from('certificates')
      .update({
        verification_count: verificationCount + 1,
        last_verified_at: new Date().toISOString()
      })
      .eq('id', certId)
    
    return NextResponse.json({
      valid: true,
      certificate: formatCertificateResponse(certificate)
    })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to verify certificate'
    return NextResponse.json(
      { 
        valid: false,
        error: errorMessage 
      },
      { status: 500 }
    )
  }
}

function formatCertificateResponse(certificate: Record<string, unknown>) {
  const metadata = (((certificate.certificate_metadata as unknown) as unknown[] | null) || []).reduce((acc: Record<string, unknown>, meta: unknown) => {
    const metaObj = meta as Record<string, unknown>
    acc[metaObj.field_name as string] = metaObj.field_type === 'json' || metaObj.field_type === 'array' 
      ? JSON.parse(metaObj.field_value as string) 
      : metaObj.field_value
    return acc
  }, {})
  
  return {
    certificate_id: certificate.certificate_id,
    participant_name: certificate.participant_name,
    school: certificate.school,
    certificate_type: certificate.certificate_type,
    event: ((certificate.events as unknown) as Record<string, unknown>)?.event_name || null,
    event_code: ((certificate.events as unknown) as Record<string, unknown>)?.event_code || null,
    date_issued: certificate.date_issued,
    status: certificate.status,
    pdf_available: certificate.pdf_available || false,
    pdf_download_url: certificate.pdf_storage_path || null,
    ...metadata
  }
}
