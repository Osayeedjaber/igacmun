"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Shield, Sword, Users, Calendar, MapPin, Award, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Countdown } from '@/components/ui/countdown'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import { appConfig } from '@/lib/config'
import { isRevealed } from '@/lib/utils'

export default function Session3Page() {
  const { event, reveals, venue, forms } = appConfig

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(198,168,88,0.1),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(31,95,70,0.2),transparent_50%)]" />
        
        {/* Thorny decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent-gold/20 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent-gold/15 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-5 w-16 h-16 border border-accent-gold/10 rounded-full animate-pulse delay-500" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            {/* Thematic Icons */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center items-center space-x-8"
            >
              <div className="relative">
                <Award className="h-12 w-12 text-accent-gold" />
                <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-lg animate-pulse" />
              </div>
              <div className="relative">
                <Shield className="h-16 w-16 text-accent-gold" />
                <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl animate-pulse delay-300" />
              </div>
              <div className="relative">
                <Sword className="h-12 w-12 text-accent-gold" />
                <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-lg animate-pulse delay-600" />
              </div>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground"
              >
                {event.subtitle}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-2xl md:text-3xl text-accent-gold font-display"
              >
                {event.tagline}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              >
                {event.description}
              </motion.p>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button variant="thorn" size="xl" asChild>
                <Link href="/session-3/register" className="group">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/session-3/committees">
                  View Committees
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gradient-to-b from-background to-forest-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              What to Expect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Immerse yourself in the ultimate diplomatic experience where strategy meets diplomacy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Diplomatic Excellence",
                description: "Engage with delegates from across the region in high-level diplomatic discussions and negotiations."
              },
              {
                icon: Award,
                title: "Recognition & Awards",
                description: "Outstanding delegates will be recognized with prestigious awards and certificates of excellence."
              },
              {
                icon: Shield,
                title: "Professional Standards",
                description: "Experience MUN at its finest with strict adherence to parliamentary procedure and diplomatic protocol."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card border border-accent-gold/20 rounded-xl p-8 text-center group hover:border-accent-gold/40 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-accent-gold/20 rounded-full group-hover:bg-accent-gold/30 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-accent-gold" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Config-Driven Callouts */}
      <section className="py-20 bg-forest-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Committees */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card border border-accent-gold/20 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent-gold/20 rounded-full mr-4">
                  <Users className="h-6 w-6 text-accent-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Committees
                </h3>
              </div>
              
              {!isRevealed(reveals.committees.revealAt) ? (
                <div className="text-center py-8">
                  <Countdown
                    revealAt={reveals.committees.revealAt}
                    title="Coming Soon"
                    description="Committee details will be announced"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Explore our diverse range of committees covering global issues and diplomatic challenges.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/session-3/committees">
                      View All Committees
                    </Link>
                  </Button>
                </div>
              )}
            </motion.div>

            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CardSpotlight className="h-full"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent-gold/20 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-accent-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Schedule
                </h3>
              </div>
              
              {!isRevealed(reveals.schedule.revealAt) ? (
                <div className="text-center py-8">
                  <Countdown
                    revealAt={reveals.schedule.revealAt}
                    title="Coming Soon"
                    description="Detailed schedule will be announced"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    View the complete conference schedule with session timings and activities.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/session-3/schedule">
                      View Schedule
                    </Link>
                  </Button>
                </div>
              )}
              </CardSpotlight>
            </motion.div>

            {/* Venue */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CardSpotlight className="h-full"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent-gold/20 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-accent-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Venue
                </h3>
              </div>
              
              {!isRevealed(reveals.venue.revealAt) ? (
                <div className="text-center py-8">
                  <Countdown
                    revealAt={reveals.venue.revealAt}
                    title="Location Reveal"
                    description="Conference venue will be announced"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  {/* AIUB Venue Image */}
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 group">
                    <Image
                      src="/aiub.jpg"
                      alt="American International University-Bangladesh (AIUB) Campus"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="bg-forest-900/60 backdrop-blur-sm border border-accent-gold/30 rounded-lg p-3">
                        <p className="text-accent-gold font-semibold text-sm">
                          {venue.fullName}
                        </p>
                        <p className="text-forest-100 text-xs">
                          World-class venue for diplomatic excellence
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {venue.fullName} - A world-class venue for diplomatic excellence.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/session-3/venue">
                      View Venue Details
                    </Link>
                  </Button>
                </div>
              )}
              </CardSpotlight>
            </motion.div>

            {/* Registration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent-gold/10 to-forest-700/20 border border-accent-gold/30 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent-gold/30 rounded-full mr-4">
                  <Award className="h-6 w-6 text-accent-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Registration
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Secure your spot at the biggest MUN conference in South East Asia.
                </p>
                
                {/* Registration Tiers */}
                <div className="space-y-3">
                  {Object.entries(forms)
                    .filter(([key]) => ['earlyBird', 'regular', 'campusAmbassadors', 'late'].includes(key))
                    .map(([key, form]) => (
                    form.enabled && (
                      <div key={key} className="flex items-center justify-between p-3 bg-card/50 rounded-lg border border-accent-gold/20">
                        <div>
                          <div className="font-medium text-foreground">{form.title}</div>
                          <div className="text-sm text-muted-foreground">{form.description}</div>
                        </div>
                        <Button variant="thorn" size="sm" asChild>
                          <Link href="/session-3/register">
                            Register
                          </Link>
                        </Button>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
