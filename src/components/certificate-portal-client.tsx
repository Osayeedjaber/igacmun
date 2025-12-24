"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Loader2, Trophy, User, Users, Globe, School, FileCheck, ShieldCheck, Lock, Database, CheckCircle2 } from 'lucide-react';
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
          <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-6xl font-bold text-foreground mb-6">
            Certificate <span className="text-accent-gold">Portal</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Verify the authenticity of IGACMUN awards and certificates. 
            <br className="hidden sm:block" />
            Enter your unique Certificate ID below to access the digital record.
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <form onSubmit={handleSearch} className="relative flex items-center">
            <div className="relative w-full group">
              <div className="absolute inset-0 bg-accent-gold/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-40 group-hover:opacity-60" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Certificate ID (e.g. 123456)"
                className="w-full bg-forest-950/90 border border-accent-gold/30 text-foreground placeholder:text-muted-foreground/50 rounded-xl py-4 sm:py-5 pl-12 sm:pl-14 pr-32 sm:pr-36 focus:outline-none focus:border-accent-gold/60 focus:ring-1 focus:ring-accent-gold/60 transition-all backdrop-blur-xl relative z-10 font-mono text-base sm:text-lg shadow-2xl"
              />
              <Search className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 text-accent-gold/70 h-4 w-4 sm:h-5 sm:w-5 z-20" />
              
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20">
                <Button 
                  type="submit" 
                  disabled={loading}
                  size="lg"
                  className="bg-accent-gold text-forest-950 hover:bg-accent-gold/90 font-semibold shadow-lg shadow-accent-gold/20"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Verify ID'}
                </Button>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Stats Bar - Enhanced */}
        {!result && !loading && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20"
            >
                {[
                    { label: "Verified Delegates", value: "500+", icon: Users, desc: "Across 15+ Countries" },
                    { label: "Committees", value: "12+", icon: Globe, desc: "Specialized Agendas" },
                    { label: "Partner Institutions", value: "50+", icon: School, desc: "Global Recognition" },
                ].map((stat, i) => (
                    <div key={i} className="group relative bg-gradient-to-br from-forest-900/40 to-forest-800/40 border border-accent-gold/10 rounded-2xl p-6 text-center backdrop-blur-md hover:border-accent-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-gold/5">
                        <div className="absolute inset-0 bg-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <stat.icon className="w-6 h-6 text-accent-gold" />
                            </div>
                            <div className="text-3xl font-bold text-white font-[family-name:var(--font-cinzel)] mb-1">{stat.value}</div>
                            <div className="text-sm font-semibold text-accent-gold uppercase tracking-wider mb-2">{stat.label}</div>
                            <div className="text-xs text-muted-foreground">{stat.desc}</div>
                        </div>
                    </div>
                ))}
            </motion.div>
        )}

        {/* Error Message */}
        {!result && !loading && error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex justify-center mb-16"
          >
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-8 max-w-md backdrop-blur-sm text-center">
              <p className="text-lg text-destructive font-medium mb-4">{error}</p>
              <Button 
                variant="outline" 
                onClick={() => setError('')}
                className="border-destructive/30 text-destructive hover:bg-destructive/10"
              >
                Try Again
              </Button>
            </div>
          </motion.div>
        )}

        {/* Security Features - NEW SECTION */}
        {!result && !loading && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="max-w-5xl mx-auto mb-20"
            >
                <div className="text-center mb-10">
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest flex items-center justify-center gap-3">
                        <Lock className="h-5 w-5 text-accent-gold" /> 
                        Advanced Security Features
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Encrypted Database", desc: "All records are stored in a secure, immutable database to prevent tampering.", icon: Database },
                        { title: "Unique ID System", desc: "Instant verification via unique alphanumeric IDs assigned to every record.", icon: FileCheck },
                        { title: "Digital Signature", desc: "Cryptographically signed to ensure authenticity and validity.", icon: CheckCircle2 },
                    ].map((feature, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                            <feature.icon className="w-8 h-8 text-accent-gold/60 mb-4" />
                            <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        )}

        {/* Featured Certificates Showcase */}
        {!result && !loading && appConfig.certificateShowcase && appConfig.certificateShowcase.length > 0 && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-4xl mx-auto mb-20"
            >
                <div className="text-center mb-10">
                    <h2 className="text-xl font-bold text-accent-gold uppercase tracking-widest flex items-center justify-center gap-2">
                        <Trophy className="h-5 w-5" /> Hall of Excellence
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
