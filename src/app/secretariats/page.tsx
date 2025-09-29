"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Crown, Shield, Award } from 'lucide-react'
import { Countdown } from '@/components/ui/countdown'
import { Button } from '@/components/ui/button'
import { appConfig } from '@/lib/config'

export default function SecretariatsPage() {
  const { reveals } = appConfig

  // Placeholder secretariat data that would be revealed
  const secretariats = [
    {
      name: "Sarah Ahmed",
      role: "Secretary General",
      photo: "/secretariats/sg.jpg",
      description: "Leading the secretariat with diplomatic excellence and strategic vision",
      committee: "Executive Board",
      experience: "5+ years MUN experience"
    },
    {
      name: "Michael Chen",
      role: "Deputy Secretary General",
      photo: "/secretariats/dsg.jpg", 
      description: "Supporting operations and ensuring smooth conference execution",
      committee: "Executive Board",
      experience: "4+ years MUN experience"
    },
    {
      name: "Fatima Al-Rashid",
      role: "Director of UNSC",
      photo: "/secretariats/unsc-dir.jpg",
      description: "Overseeing Security Council proceedings and crisis management",
      committee: "UN Security Council",
      experience: "Expert in international security"
    },
    {
      name: "James Rodriguez",
      role: "Director of GA",
      photo: "/secretariats/ga-dir.jpg",
      description: "Facilitating General Assembly debates and resolutions",
      committee: "General Assembly", 
      experience: "Specialist in global governance"
    },
    {
      name: "Aisha Patel",
      role: "Crisis Director",
      photo: "/secretariats/crisis-dir.jpg",
      description: "Managing dynamic crisis scenarios and real-time developments",
      committee: "Crisis Committee",
      experience: "Crisis simulation expert"
    },
    {
      name: "David Kim",
      role: "Head of Logistics",
      photo: "/secretariats/logistics.jpg",
      description: "Coordinating venue operations and delegate services",
      committee: "Operations Team",
      experience: "Event management specialist"
    }
  ]

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
              <Crown className="h-16 w-16 text-accent-gold" />
              <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Secretariats
          </h1>
          <p className="text-xl md:text-2xl text-accent-gold font-display mb-4">
            The Architects of Diplomacy
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the experienced team of secretariats who will guide delegates through 
            complex diplomatic challenges and ensure the highest standards of MUN excellence.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { icon: Users, label: "Secretariats", value: secretariats.length.toString() },
            { icon: Crown, label: "Experience", value: "20+ Years" },
            { icon: Shield, label: "Committees", value: "All Covered" },
            { icon: Award, label: "Excellence", value: "Guaranteed" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-accent-gold/20 rounded-full">
                  <stat.icon className="h-6 w-6 text-accent-gold" />
                </div>
              </div>
              <div className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Secretariats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {secretariats.map((secretariat, index) => (
            <motion.div
              key={secretariat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full max-w-sm mx-auto"
            >
              <div className="bg-card relative group hover:shadow-2xl hover:shadow-accent-gold/25 border border-accent-gold/20 rounded-xl p-6 transition-all duration-300">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-forest-800/50 to-forest-900/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Committee badge */}
                <div className="relative z-10 mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-gold/20 text-accent-gold border border-accent-gold/30">
                    {secretariat.committee}
                  </div>
                </div>

                {/* Profile image placeholder */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/30 to-forest-600/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent-gold/40 group-hover:border-accent-gold/60 transition-colors duration-300 flex items-center justify-center bg-card">
                    <Users className="h-10 w-10 text-accent-gold" />
                  </div>
                </div>

                {/* Name and role */}
                <div className="relative z-10 text-center mb-4">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {secretariat.name}
                  </h3>
                  <p className="text-accent-gold font-medium text-sm mb-2">
                    {secretariat.role}
                  </p>
                  <p className="text-muted-foreground text-xs mb-3">
                    {secretariat.experience}
                  </p>
                </div>

                {/* Description */}
                <div className="relative z-10">
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">
                    {secretariat.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-accent-gold/40 rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent-gold/30 rounded-full animate-pulse delay-1000" />

                {/* Border effects */}
                <div className="absolute inset-0 rounded-xl border border-accent-gold/10 group-hover:border-accent-gold/30 transition-colors duration-300 pointer-events-none" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secretariat Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Roles & Responsibilities */}
          <div className="bg-card border border-accent-gold/20 rounded-xl p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center">
              <Shield className="h-6 w-6 text-accent-gold mr-3" />
              Roles & Responsibilities
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Committee Directors</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Guide committee proceedings and debates</li>
                  <li>• Ensure adherence to parliamentary procedure</li>
                  <li>• Facilitate resolution drafting and voting</li>
                  <li>• Manage crisis scenarios and developments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Executive Team</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Oversee overall conference operations</li>
                  <li>• Coordinate between committees and logistics</li>
                  <li>• Handle delegate concerns and queries</li>
                  <li>• Ensure quality and standards maintenance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Qualifications & Experience */}
          <div className="bg-card border border-accent-gold/20 rounded-xl p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center">
              <Award className="h-6 w-6 text-accent-gold mr-3" />
              Qualifications & Experience
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Academic Background</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• International Relations and Political Science</li>
                  <li>• Law and Diplomatic Studies</li>
                  <li>• Public Policy and Global Affairs</li>
                  <li>• Regional and Area Studies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">MUN Experience</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Extensive participation in national and international MUNs</li>
                  <li>• Previous secretariat roles at major conferences</li>
                  <li>• Training in crisis management and facilitation</li>
                  <li>• Awards and recognition in MUN community</li>
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
            Learn from the Best
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our experienced secretariats are here to guide you through every step of your diplomatic journey. 
            Join us for an unparalleled learning experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="thorn" size="lg" asChild>
              <a href="/session-3/register">
                Register Now
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">
                Contact Secretariats
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )

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
              <Users className="h-16 w-16 text-accent-gold" />
              <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Secretariats
          </h1>
          <p className="text-xl md:text-2xl text-accent-gold font-display mb-4">
            Distinguished Leadership Team
          </p>
        </motion.div>

        {/* Countdown Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-forest-950/60 border border-accent-gold/20 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-accent-gold font-semibold text-2xl mb-6 tracking-wide">
              THE SECRETARIATS WILL BE REVEALED SOON
            </p>
            
            <Countdown
              revealAt={reveals.secretariats.revealAt}
              title=""
              description=""
              className="[&>div]:bg-gradient-to-br [&>div]:from-forest-700 [&>div]:to-forest-800 [&>div]:border-accent-gold/30 [&>div]:text-accent-gold"
            />
            
            <p className="text-muted-foreground mt-6 text-lg">
              Meet the distinguished team that will guide your diplomatic journey. Excellence awaits.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
