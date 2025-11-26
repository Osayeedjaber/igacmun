"use client";

import { motion } from "framer-motion";
import { School, Download, Share2, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDateReadable } from "@/lib/utils";
import Image from "next/image";

type CertificateData = {
  certificate_id: string;
  participant_name: string;
  school: string;
  certificate_type: string;
  event: string | null;
  event_code: string | null;
  date_issued: string;
  status: string;
  pdf_available: boolean;
  pdf_download_url: string | null;
  country?: string;
  committee?: string;
  segment?: string;
  team_name?: string;
  level?: string;
  certificate_metadata?: Record<string, unknown>[];
  revoked_at?: string;
  revoked_reason?: string;
  [key: string]: string | number | boolean | null | undefined | Record<string, unknown>[];
};

export type { CertificateData };

interface CertificateDisplayProps {
  certificate: CertificateData;
  valid?: boolean;
  revoked?: boolean;
  revokedInfo?: {
    revoked_at: string;
    revoked_reason: string;
  } | null;
}

export function CertificateDisplay({ certificate, valid = true, revoked = false, revokedInfo }: CertificateDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto"
    >
        {/* Status Banner */}
        {revoked && (
            <div className="mb-8 p-4 rounded-xl border bg-destructive/10 border-destructive/30 text-destructive flex items-center gap-4 backdrop-blur-sm">
                <AlertTriangle className="h-6 w-6" />
                <div>
                    <p className="font-bold text-lg">Certificate Revoked</p>
                    {revokedInfo && (
                        <p className="text-sm opacity-90 mt-1">
                            Revoked on {formatDateReadable(revokedInfo.revoked_at)}: {revokedInfo.revoked_reason}
                        </p>
                    )}
                </div>
            </div>
        )}

        {/* Main Credential Card */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-forest-900/40 backdrop-blur-md shadow-2xl flex flex-col md:flex-row min-h-[500px]">
            
            {/* Left Sidebar - Brand & Verification */}
            <div className="w-full md:w-[35%] bg-black/20 border-b md:border-b-0 md:border-r border-white/10 p-8 flex flex-col items-center text-center justify-between relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-accent-gold/5" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
                
                <div className="relative z-10 flex flex-col items-center gap-6 mt-4">
                    <div className="w-40 h-40 relative drop-shadow-2xl">
                        <Image src="/logo.png" alt="IGACMUN Logo" fill className="object-contain" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-accent-gold font-bold tracking-[0.2em] uppercase text-lg">IGACMUN</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest">Official Credential</p>
                    </div>
                </div>

                <div className="relative z-10 mt-8 w-full space-y-6 mb-4">
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm">
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Certificate ID</p>
                        <code className="text-accent-gold font-mono text-sm break-all tracking-wider">{certificate.certificate_id}</code>
                    </div>
                    
                    <div className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 border ${valid ? 'bg-green-500/5 border-green-500/20 text-green-400' : 'bg-yellow-500/5 border-yellow-500/20 text-yellow-400'}`}>
                        {valid ? <><CheckCircle className="w-4 h-4" /> Verified</> : "Pending"}
                    </div>

                    <div className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">
                        Issued {formatDateReadable(certificate.date_issued)}
                    </div>
                </div>
            </div>

            {/* Right Content - Details */}
            <div className="w-full md:w-[65%] p-8 md:p-12 flex flex-col justify-center relative bg-gradient-to-br from-transparent to-black/20">
                 {/* Watermark */}
                 <div className="absolute right-0 bottom-0 opacity-[0.03] w-96 h-96 pointer-events-none translate-x-1/3 translate-y-1/3">
                    <Image src="/logo.png" alt="Watermark" fill className="object-contain" />
                 </div>

                 <div className="relative z-10 space-y-10">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-cinzel)] mb-6 leading-tight">
                            {certificate.participant_name}
                        </h1>
                        
                        {certificate.school && (
                            <div className="flex items-center gap-3 text-white/60 text-lg">
                                <School className="w-5 h-5 text-accent-gold/70" />
                                <span>{certificate.school}</span>
                            </div>
                        )}
                    </div>

                    <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Has been awarded the title of</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-accent-gold font-[family-name:var(--font-cinzel)] tracking-wide">
                            {certificate.certificate_type}
                        </h2>
                        <p className="text-sm text-white/40 mt-2 font-medium tracking-wide">
                            {certificate.event || "IGACMUN Conference"}
                        </p>
                    </div>

                    {/* Grid for extra details */}
                    {(certificate.committee || certificate.country || certificate.team_name || certificate.segment) && (
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-8 border-t border-white/10">
                            {certificate.committee && (
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Committee</p>
                                    <p className="font-medium text-white text-lg">{certificate.committee}</p>
                                </div>
                            )}
                            {certificate.country && (
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Country</p>
                                    <p className="font-medium text-white text-lg">{certificate.country}</p>
                                </div>
                            )}
                            {certificate.team_name && (
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Team</p>
                                    <p className="font-medium text-white text-lg">{certificate.team_name}</p>
                                </div>
                            )}
                            {certificate.segment && (
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Segment</p>
                                    <p className="font-medium text-white text-lg">{certificate.segment}</p>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="pt-8 flex flex-wrap gap-4">
                        {certificate.pdf_available && certificate.pdf_download_url && (
                            <Button
                                onClick={() => window.open(certificate.pdf_download_url!, "_blank")}
                                className="bg-accent-gold hover:bg-accent-gold/90 text-forest-950 font-semibold px-6"
                            >
                                <Download className="h-4 w-4 mr-2" />
                                Download PDF
                            </Button>
                        )}
                        <Button
                            onClick={() => {
                                navigator.clipboard.writeText(
                                `${window.location.origin}/certificate-portal/${certificate.certificate_id}`
                                );
                                alert("Link copied!");
                            }}
                            variant="outline"
                            className="border-white/10 hover:bg-white/5 text-white hover:text-accent-gold"
                        >
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                        </Button>
                    </div>
                 </div>
            </div>
        </div>
    </motion.div>
  );
}
