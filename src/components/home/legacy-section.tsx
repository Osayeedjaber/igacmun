"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function LegacySection() {
  return (
    <section className="py-24 bg-forest-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building on Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              IGACMUN Session II set the gold standard for MUN conferences in South East Asia
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Session II Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-accent-gold/20 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/logo (1).png"
                    alt="IGACMUN Session 2 Logo"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    IGACMUN Session II
                  </h3>
                  <p className="text-accent-gold font-medium">
                    The Largest MUN in South East Asia
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* IGACMUN II Image */}
                <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden mb-4 group">
                  <Image 
                    src="/events/igacmunbannerjpg.jpg" 
                    alt="IGACMUN Session II Conference" 
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-medium bg-forest-900/60 px-2 py-1 rounded backdrop-blur-sm">
                      IGACMUN Session II
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Our previous session broke all records, hosting over 1700 delegates from across 
                  the region. It established new benchmarks for diplomatic simulation and 
                  international cooperation among youth.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Delegates", value: "1700+" },
                    { label: "Committees", value: "12" },
                    { label: "Countries", value: "15+" },
                    { label: "Awards", value: "50+" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-3 bg-forest-950/30 rounded-lg"
                    >
                      <div className="font-display text-xl font-bold text-accent-gold">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-6 text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/events">
                        Explore Past Events
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
