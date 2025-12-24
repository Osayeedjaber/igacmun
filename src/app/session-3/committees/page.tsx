"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { appConfig } from '@/lib/config'
import { Button } from '@/components/ui/button'
import { ElegantBackground } from '@/components/ui/elegant-background'

export default function CommitteesPage() {
  const { committees } = appConfig

  return (
    <div className="min-h-screen relative bg-background">
      <ElegantBackground variant="section" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Simple Header */}
        <div className="text-center mb-20">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Committees
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            A showcase of the twelve committees featured in IGACMUN Session III.
          </p>
        </div>

        {/* Normal Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committees.map((committee, index) => (
            <motion.div
              key={committee.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-forest-950/40 backdrop-blur-sm border border-accent-gold/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-accent-gold/30 transition-all duration-300 group"
            >
              {/* Committee Logo */}
              <div className="w-28 h-28 mb-6 relative">
                <div className="absolute inset-0 bg-accent-gold/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src={committee.sigilImage}
                  alt={committee.name}
                  width={112}
                  height={112}
                  className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Committee Info */}
              <div className="flex-grow space-y-3 mb-8">
                <h3 className="text-xl font-bold text-white group-hover:text-accent-gold transition-colors font-display">
                  {committee.name}
                </h3>
                <div className="h-px w-12 bg-accent-gold/20 mx-auto" />
                <p className="text-sm text-gray-400 font-light leading-relaxed italic">
                  "{committee.description}"
                </p>
              </div>

              {/* Action */}
              <Button variant="outline" asChild className="w-full border-accent-gold/20 text-accent-gold hover:bg-accent-gold hover:text-forest-950 transition-all">
                <a href="/register">Register Now</a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Simple Footer CTA */}
        <div className="mt-24 text-center">
          <Button variant="thorn" size="xl" asChild className="min-w-[240px]">
            <a href="/register">Join a Committee</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
