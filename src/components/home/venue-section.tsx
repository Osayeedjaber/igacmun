"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Calendar, MapPin, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BentoGrid, BentoCard } from '@/components/ui/magic-bento'
import { appConfig } from '@/lib/config'

export function VenueSection() {
  const { venue } = appConfig
  return (
    <section className="py-24 bg-gradient-to-br from-background to-forest-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Venue
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience diplomatic excellence at one of Bangladesh&apos;s premier educational institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Venue Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden group">
                {/* AIUB Image */}
                <Image 
                  src="/aiub.jpg" 
                  alt="American International University-Bangladesh Campus" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold bg-forest-900/60 px-3 py-2 rounded backdrop-blur-sm">
                    {venue.fullName}
                  </p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Venue Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                  {venue.fullName}
                </h3>
                <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5 text-accent-gold" />
                  <span className="text-lg">{venue.address}</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  State-of-the-art facilities designed to host international conferences with 
                  modern amenities and professional environments. AIUB provides the perfect 
                  setting for diplomatic excellence.
                </p>
              </div>

              {/* Venue Features */}
              <BentoGrid className="grid-cols-2 gap-3">
                {[
                  { icon: Users, label: "Conference Halls", desc: "Spacious venues" },
                  { icon: Award, label: "Modern AV Systems", desc: "Latest technology" },
                  { icon: Calendar, label: "Professional Setup", desc: "Expert arrangement" },
                  { icon: MapPin, label: "Central Location", desc: "Easy access" }
                ].map((feature, index) => (
                  <BentoCard key={feature.label} index={index} className="p-4">
                    <div className="flex flex-col space-y-2">
                      <feature.icon className="h-6 w-6 text-accent-gold" />
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">{feature.label}</h4>
                        <p className="text-xs text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  </BentoCard>
                ))}
              </BentoGrid>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <Button variant="outline" size="lg" asChild>
                  <Link href="/session-3/venue">
                    Explore Venue Details
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
