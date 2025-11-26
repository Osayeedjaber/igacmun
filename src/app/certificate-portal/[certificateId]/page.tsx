import { searchCertificate } from "../actions";
import { CertificatePortalClient } from "@/components/certificate-portal-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Certificate | IGACMUN",
  description: "Verify the authenticity of an IGACMUN certificate.",
};

export default async function CertificateVerifyPage({
  params,
}: {
  params: Promise<{ certificateId: string }>;
}) {
  const { certificateId } = await params;
  
  // Fetch certificate data on the server
  const result = await searchCertificate(certificateId);
  const certificate = result.success && result.data ? result.data[0] : undefined;

  return (
    <CertificatePortalClient 
      initialId={certificateId} 
      initialCertificate={certificate} 
    />
  );
}
