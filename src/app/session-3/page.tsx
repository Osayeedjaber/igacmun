"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Shield, Users, Calendar, MapPin, Award, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Countdown } from '@/components/ui/countdown'
import { MagneticElement } from '@/components/ui/magnetic-element'
import { appConfig } from '@/lib/config'
import { isRevealed } from '@/lib/utils'

export default function Session3Page() {
  const { reveals, venue } = appConfig

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-forest-950/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(198,168,88,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(198,168,88,0.02)_50%,transparent_100%)]" />
        
        {/* Elegant Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: 'radial-gradient(circle, #c6a858 1px, transparent 1px)', backgroundSize: '50px 50px'}} />
        
        {/* Subtle Corner Accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-gold/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-forest-600/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            {/* Refined Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center"
            >
              <div className="px-8 py-3 bg-gradient-to-r from-accent-gold/10 via-accent-gold/5 to-accent-gold/10 border border-accent-gold/20 rounded-full backdrop-blur-sm">
                <span className="text-accent-gold text-base md:text-lg font-semibold tracking-wider">IGACMUN SESSION III</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none"
              >
                SESSION III
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-4 text-accent-gold text-xl md:text-2xl font-display tracking-widest">
                  <span>United</span>
                  <span className="text-muted-foreground">|</span>
                  <span>Transformation</span>
                  <span className="text-muted-foreground">|</span>
                  <span>Innovation</span>
                </div>
                <p className="text-muted-foreground mt-4 text-lg">December 2025</p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              >
                The next chapter of South East Asia&apos;s premier Model United Nations conference
              </motion.p>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <MagneticElement strength={0.2}>
                <Button variant="thorn" size="xl" asChild>
                  <Link href="/register" className="group">
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </MagneticElement>
              <MagneticElement strength={0.2}>
                <Button variant="outline" size="xl" asChild>
                  <Link href="/session-3/committees">
                    View Committees
                  </Link>
                </Button>
              </MagneticElement>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Conference Overview - Split Layout */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-forest-950/50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-block px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full mb-6">
                  <span className="text-accent-gold font-semibold text-sm tracking-wider">CONFERENCE OVERVIEW</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  The Next Chapter in Diplomatic Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Building on the success of IGACMUN Session II which hosted 1700+ delegates, Session III aims to set a new standard for Model United Nations conferences in South East Asia. Join us for an unprecedented diplomatic experience in December 2025.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "TBA", label: "Expected Delegates" },
                  { number: "10", label: "Committees" },
                  { number: "3", label: "Conference Days" },
                  { number: "AIUB", label: "Venue Location" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-gradient-to-br from-card to-forest-900/20 border border-accent-gold/20 rounded-xl"
                  >
                    <div className="text-3xl font-bold text-accent-gold mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image + Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-accent-gold/30">
                <Image
                  src="/aiub.jpg"
                  alt="AIUB Campus - Conference Venue"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-forest-900/60 backdrop-blur-md border border-accent-gold/30 rounded-xl p-4">
                    <div className="text-accent-gold font-semibold mb-1">December 2025</div>
                    <div className="text-foreground text-sm">American International University-Bangladesh</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Award, text: "Prestigious Awards & Recognition" },
                  { icon: Shield, text: "Professional Standards & Protocol" },
                  { icon: Users, text: "Network with Regional Leaders" }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-card border border-accent-gold/20 rounded-xl"
                  >
                    <div className="p-3 bg-accent-gold/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-accent-gold" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conference Information - Grid Layout */}
      <section className="py-32 bg-gradient-to-b from-forest-950/50 to-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Conference Information
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick access to all essential conference details
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Top Row: Venue (left) and Registration (right) */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Venue - BIGGER BOX with BIGGER IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card border border-accent-gold/20 rounded-xl overflow-hidden hover:border-accent-gold/40 transition-all duration-300"
              >
                {/* BIGGER Venue Image */}
                {isRevealed(reveals.venue.revealAt) && (
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="/aiub.jpg"
                      alt="AIUB Campus"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-accent-gold/30">
                        <p className="text-white font-display text-2xl font-bold mb-1">
                          {venue.fullName}
                        </p>
                        <p className="text-accent-gold text-sm">AIUB Campus, Dhaka</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Venue Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-accent-gold/20 rounded-lg">
                        <MapPin className="h-7 w-7 text-accent-gold" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">Conference Venue</h3>
                    </div>
                    {isRevealed(reveals.venue.revealAt) && (
                      <div className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded text-xs font-semibold text-green-600">
                        Confirmed
                      </div>
                    )}
                  </div>
                  
                  {!isRevealed(reveals.venue.revealAt) ? (
                    <Countdown
                      revealAt={reveals.venue.revealAt}
                      title=""
                      description=""
                    />
                  ) : (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        World-class venue for diplomatic excellence
                      </p>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/session-3/venue">
                          View Full Venue Details
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Registration */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-accent-gold/10 via-card to-forest-700/10 border border-accent-gold/30 rounded-xl overflow-hidden hover:border-accent-gold/50 transition-all duration-300"
              >
                <div className="p-6 border-b border-accent-gold/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-accent-gold/30 rounded-lg">
                        <Award className="h-7 w-7 text-accent-gold" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">Registration</h3>
                    </div>
                    <div className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded text-xs font-semibold text-green-600">
                      NOW OPEN
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground ml-16">Multiple tiers available</p>
                </div>
                
                <div className="p-6 space-y-3">
                  <div className="p-4 bg-card rounded-lg border border-accent-gold/30 hover:border-accent-gold/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground mb-1">Regular Delegates</p>
                        <p className="text-xs text-muted-foreground">Standard registration</p>
                      </div>
                      <span className="px-2 py-1 bg-green-500/10 text-xs font-semibold text-green-600 rounded">Open</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-accent-gold/30 hover:border-accent-gold/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground mb-1">Campus Ambassadors</p>
                        <p className="text-xs text-muted-foreground">Represent your institution</p>
                      </div>
                      <span className="px-2 py-1 bg-green-500/10 text-xs font-semibold text-green-600 rounded">Open</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-accent-gold/30 hover:border-accent-gold/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground mb-1">Executive Board</p>
                        <p className="text-xs text-muted-foreground">Leadership positions</p>
                      </div>
                      <span className="px-2 py-1 bg-green-500/10 text-xs font-semibold text-green-600 rounded">Open</span>
                    </div>
                  </div>

                  <Button variant="thorn" size="lg" asChild className="w-full mt-4">
                    <Link href="/register">
                      Register Now
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row: Schedule (left) and Committees (right) */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Schedule */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-accent-gold/20 rounded-xl overflow-hidden hover:border-accent-gold/40 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-accent-gold/20 rounded-lg">
                        <Calendar className="h-7 w-7 text-accent-gold" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground">Schedule</h3>
                        <p className="text-xs text-muted-foreground">3-Day Conference</p>
                      </div>
                    </div>
                    <div className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-xs font-semibold text-amber-600">
                      Coming Soon
                    </div>
                  </div>
                  <Countdown
                    revealAt={reveals.schedule.revealAt}
                    title=""
                    description=""
                  />
                </div>
              </motion.div>

              {/* Committees */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card border border-accent-gold/20 rounded-xl overflow-hidden hover:border-accent-gold/40 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-accent-gold/20 rounded-lg">
                        <Users className="h-7 w-7 text-accent-gold" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground">Committees</h3>
                        <p className="text-xs text-muted-foreground">10 Diplomatic Arenas</p>
                      </div>
                    </div>
                    <div className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-xs font-semibold text-amber-600">
                      Coming Soon
                    </div>
                  </div>
                  <Countdown
                    revealAt={reveals.committees.revealAt}
                    title=""
                    description=""
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Registration CTA - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-accent-gold/10 via-card to-forest-700/10 border-2 border-accent-gold/30 rounded-2xl p-12 text-center"
          >
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Join?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the next chapter. Registration is now open for delegates, campus ambassadors, and executive board positions for Session III in December 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="thorn" size="xl" asChild>
                <Link href="/register" className="group">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
