"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Loader2, Trophy, User, Globe, School, FileCheck, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ElegantBackground } from '@/components/ui/elegant-background';
import { searchCertificate } from '@/app/certificate-portal/actions';
import { CertificateDisplay } from '@/components/certificate-display';
import type { CertificateData } from '@/components/certificate-display';
import { appConfig } from '@/lib/config';
import Image from 'next/image';

interface CertificatePortalClientProps {
  initialCertificate?: CertificateData | null;
  initialId?: string;
}

export function CertificatePortalClient({ initialCertificate, initialId }: CertificatePortalClientProps) {
  const [query, setQuery] = useState(initialId || '');
  const [result, setResult] = useState<CertificateData | null>(initialCertificate ?? null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cache, setCache] = useState<Record<string, CertificateData>>(
    initialCertificate && initialId ? { [initialId]: initialCertificate } : {}
  );

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    setLoading(true);
    setError('');
    setResult(null);
    
    // Update URL without navigation
    window.history.pushState({}, '', `/certificate-portal/${trimmedQuery}`);

    // Check cache first
    if (cache[trimmedQuery]) {
        setResult(cache[trimmedQuery]);
        setLoading(false);
        return;
    }

    try {
      const response = await searchCertificate(trimmedQuery);
      if (response.success && response.data && response.data.length > 0) {
        const certData = response.data[0] as unknown as CertificateData;
        setResult(certData);
        setCache(prev => ({ ...prev, [trimmedQuery]: certData }));
      } else {
        setError(response.error || 'No certificate found with this ID');
      }
    } catch {
      setError('An error occurred while searching');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ElegantBackground variant="section" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certificate <span className="text-accent-gold">Portal</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verify and view IGACMUN certificates. Enter your Certificate ID below.
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <form onSubmit={handleSearch} className="relative flex items-center">
            <div className="relative w-full group">
              <div className="absolute inset-0 bg-accent-gold/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300 opacity-50" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Certificate ID (e.g. 123456)"
                className="w-full bg-forest-900/80 border border-accent-gold/30 text-foreground placeholder:text-muted-foreground/50 rounded-lg py-4 pl-12 pr-32 focus:outline-none focus:border-accent-gold/60 focus:ring-1 focus:ring-accent-gold/60 transition-all backdrop-blur-sm relative z-10 font-mono"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent-gold/70 h-5 w-5 z-20" />
              
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20">
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="bg-accent-gold/10 hover:bg-accent-gold/20 text-accent-gold border border-accent-gold/30"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Verify'}
                </Button>
              </div>
            </div>
          </form>

          {/* Recent Searches Removed */}
        </motion.div>

        {/* Stats Bar */}
        {!result && !loading && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16"
            >
                {[
                    { label: "Committees", value: "20+", icon: Globe },
                    { label: "Institutions", value: "50+", icon: School },
                    { label: "Certificates", value: "Issued", icon: FileCheck },
                ].map((stat, i) => (
                    <div key={i} className="bg-forest-900/30 border border-accent-gold/10 rounded-lg p-4 text-center backdrop-blur-sm hover:bg-forest-900/40 transition-colors">
                        <stat.icon className="w-6 h-6 text-accent-gold/60 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white font-[family-name:var(--font-cinzel)]">{stat.value}</div>
                        <div className="text-xs text-accent-gold/60 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </motion.div>
        )}

        {/* Featured Certificates Showcase */}
        {!result && !loading && appConfig.certificateShowcase && appConfig.certificateShowcase.length > 0 && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-4xl mx-auto mb-16"
            >
                <div className="text-center mb-8">
                    <h2 className="text-xl font-bold text-accent-gold uppercase tracking-widest flex items-center justify-center gap-2">
                        <Trophy className="h-5 w-5" /> Featured Awardees
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {appConfig.certificateShowcase.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className="group relative overflow-hidden rounded-xl border border-accent-gold/20 bg-forest-900/30 backdrop-blur-sm p-6 transition-all hover:border-accent-gold/50 hover:bg-forest-900/50"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                                <Image 
                                    src={item.image || "/logo.png"} 
                                    alt="Icon" 
                                    width={100} 
                                    height={100} 
                                    className="object-contain"
                                />
                            </div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent-gold/30 bg-black/20 flex-shrink-0 flex items-center justify-center">
                                        {item.recipientImage ? (
                                            <Image 
                                                src={item.recipientImage} 
                                                alt={item.name} 
                                                fill 
                                                className="object-cover" 
                                            />
                                        ) : (
                                            <User className="w-8 h-8 text-accent-gold/40" />
                                        )}
                                    </div>
                                    
                                    <div>
                                        <h3 className={`text-lg font-bold font-[family-name:var(--font-cinzel)] transition-colors ${item.name === "To Be Announced" ? "text-white/50 italic" : "text-white group-hover:text-accent-gold"}`}>
                                            {item.name}
                                        </h3>
                                        <p className="text-sm text-accent-gold/80 font-medium">
                                            {item.school}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="mt-auto pt-4 border-t border-white/10">
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Awarded Title</p>
                                    <p className="text-lg font-semibold text-white/90">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        )}

        {/* How It Works Section */}
        {!result && !loading && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-4xl mx-auto mb-16 border-t border-accent-gold/10 pt-12"
            >
                <div className="text-center mb-8">
                    <h3 className="text-lg font-semibold text-accent-gold/80 uppercase tracking-widest">Verification Process</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Enter ID", desc: "Input the unique Certificate ID found on the document.", icon: Search },
                        { title: "Verify", desc: "Our system instantly validates the authenticity against our records.", icon: ShieldCheck },
                        { title: "Confirm", desc: "View the official digital copy and verification details.", icon: FileCheck },
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className="w-12 h-12 rounded-full bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center mb-4 group-hover:bg-accent-gold/20 transition-colors">
                                <step.icon className="w-6 h-6 text-accent-gold" />
                            </div>
                            <h4 className="text-white font-bold mb-2">{step.title}</h4>
                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        )}

        {/* Results Section */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center py-12"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 border-4 border-accent-gold/20 border-t-accent-gold rounded-full animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
                    </div>
                  </div>
                  <p className="text-accent-gold/70 font-medium animate-pulse">Verifying ID...</p>
                </div>
              </motion.div>
            ) : error ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 max-w-md mx-auto backdrop-blur-sm">
                  <p className="text-destructive font-medium">{error}</p>
                  <Button 
                    variant="link" 
                    onClick={() => setError('')}
                    className="text-destructive/70 mt-2"
                  >
                    Try Again
                  </Button>
                </div>
              </motion.div>
            ) : result ? (
              <CertificateDisplay 
                certificate={result} 
                valid={result.status !== 'revoked'}
                revoked={result.status === 'revoked'}
                revokedInfo={result.status === 'revoked' && result.revoked_at && result.revoked_reason ? {
                  revoked_at: result.revoked_at,
                  revoked_reason: result.revoked_reason
                } : null}
              />
            ) : null}
          </AnimatePresence>
        </div>

        {/* Help Footer */}
        {!result && !loading && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-12 text-sm text-muted-foreground"
            >
                <p>Having trouble verifying your certificate?</p>
                <a href={`mailto:${appConfig.social.email}`} className="text-accent-gold hover:underline mt-1 inline-block">
                    Contact Support
                </a>
            </motion.div>
        )}
      </div>
    </div>
  );
}
