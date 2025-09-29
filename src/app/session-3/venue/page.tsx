"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Building, Car, Utensils, Wifi, Users, Phone } from 'lucide-react'
import { CountdownOverlay } from '@/components/ui/countdown'
import { Button } from '@/components/ui/button'
import { appConfig } from '@/lib/config'

export default function VenuePage() {
  const { reveals, venue } = appConfig

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Building className="h-16 w-16 text-accent-gold" />
              <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Conference Venue
          </h1>
          <p className="text-xl md:text-2xl text-accent-gold font-display mb-4">
            {venue.fullName}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A world-class educational institution providing the perfect setting for diplomatic excellence 
            and international discourse.
          </p>
        </motion.div>

        {/* Venue Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-center"
        >
          <div className="bg-card relative group hover:shadow-2xl hover:shadow-accent-gold/25 border border-accent-gold/20 w-full max-w-4xl h-auto rounded-xl p-8 transition-all duration-500 hover:border-accent-gold/40 hover:-translate-y-1">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-forest-800/30 to-forest-900/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* AIUB Venue Image */}
            <div className="w-full relative z-10 mb-8">
              <div className="relative w-full h-80 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500 border-2 border-accent-gold/30">
                <Image
                  src="/aiub.jpg"
                  alt="American International University-Bangladesh (AIUB) Campus"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-forest-900/60 backdrop-blur-sm border border-accent-gold/30 rounded-lg p-4">
                    <p className="text-accent-gold font-display text-xl font-bold mb-2">
                      {venue.fullName}
                    </p>
                    <p className="text-forest-100 text-sm">
                      📍 {venue.address}
                    </p>
                  </div>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg border-2 border-accent-gold/20 group-hover:border-accent-gold/50 transition-colors duration-500" />
              </div>
            </div>

            {/* Venue Details */}
            <div className="relative z-10 text-center space-y-6">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4 group-hover:text-accent-gold/90 transition-colors duration-300">
                  {venue.fullName}
                </h2>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5 text-accent-gold" />
                  <span className="text-lg">{venue.address}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
                  State-of-the-art facilities designed to host international conferences 
                  with modern amenities and professional environments. AIUB provides the perfect 
                  setting for diplomatic excellence and academic collaboration.
                </p>
              </div>
            </div>

            {/* Subtle decorative elements */}
            <div className="absolute top-6 right-6 w-2 h-2 bg-accent-gold/30 rounded-full animate-pulse opacity-60" />
            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-accent-gold/20 rounded-full animate-pulse delay-1000 opacity-60" />
            
            {/* Border highlight */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-gold/5 via-transparent to-forest-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            World-Class Facilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Conference Halls",
                description: "Multiple spacious halls equipped with modern audio-visual systems for committee sessions"
              },
              {
                icon: Wifi,
                title: "High-Speed Internet",
                description: "Reliable Wi-Fi connectivity throughout the campus for research and communication"
              },
              {
                icon: Utensils,
                title: "Dining Facilities",
                description: "On-campus restaurants and cafeterias offering diverse meal options"
              },
              {
                icon: Car,
                title: "Parking Available",
                description: "Ample parking space for delegates and visitors with security arrangements"
              },
              {
                icon: Building,
                title: "Modern Infrastructure",
                description: "Contemporary buildings with air conditioning and comfortable seating arrangements"
              },
              {
                icon: Phone,
                title: "Support Services",
                description: "Dedicated support staff and technical assistance throughout the event"
              }
            ].map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-card border border-accent-gold/20 rounded-xl p-6 text-center group hover:border-accent-gold/40 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent-gold/20 rounded-full group-hover:bg-accent-gold/30 transition-colors duration-300">
                    <facility.icon className="h-6 w-6 text-accent-gold" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location & Accessibility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Location Info */}
          <div className="bg-card border border-accent-gold/20 rounded-xl p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center">
              <MapPin className="h-6 w-6 text-accent-gold mr-3" />
              Location & Address
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Full Address</h4>
                <p className="text-muted-foreground">{venue.address}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Transportation</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Accessible by public transportation</li>
                  <li>• Taxi and rideshare services available</li>
                  <li>• Bus routes connecting to major areas</li>
                  <li>• Airport connectivity via direct routes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="bg-card border border-accent-gold/20 rounded-xl p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center">
              <Phone className="h-6 w-6 text-accent-gold mr-3" />
              Venue Support
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">On-Site Assistance</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Dedicated venue coordinators</li>
                  <li>• Technical support team</li>
                  <li>• Security and safety personnel</li>
                  <li>• Information desk and guidance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Emergency Services</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Medical assistance available</li>
                  <li>• Emergency contact protocols</li>
                  <li>• Safety evacuation procedures</li>
                  <li>• 24/7 security monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center bg-gradient-to-br from-accent-gold/10 to-forest-700/20 border border-accent-gold/30 rounded-xl p-8"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Ready to Experience Excellence?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us at this prestigious venue for an unforgettable diplomatic experience. 
            Register now to secure your place in history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="thorn" size="lg" asChild>
              <a href="/session-3/register">
                Register Now
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">
                Contact for Directions
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
