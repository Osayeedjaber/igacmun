"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Globe, Handshake, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ElegantBackground } from '@/components/ui/elegant-background'
import { ShinyText } from '@/components/ui/shiny-text'
import { SplitText } from '@/components/ui/split-text'

export function AboutSection() {
  return (
    <section className="py-24 relative">
        <ElegantBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <ShinyText className="text-accent-gold">IGAC</ShinyText>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-display mb-4">
              <SplitText>International Global Affairs Council</SplitText>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About IGAC Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 order-1"
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  About Us
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  The International Global Affairs Council (IGAC), founded on August 14, 2023, is a youth-led 
                  organization dedicated to empowering the next generation of leaders through diplomacy, 
                  entrepreneurship, and essential skills development.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  By fostering critical thinking, leadership, negotiation, and cross-cultural communication, 
                  IGAC equips young people to tackle global challenges and drive meaningful change.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  With a strong focus on collaboration, teamwork, and resilience, IGAC provides a platform 
                  for youth to engage in global discussions, overcome obstacles, and shape the future as 
                  confident change-makers.
                </p>
              </div>

              {/* IGAC Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Target, label: "Youth Leadership", desc: "Empowering next generation", color: "from-blue-500/20 to-blue-600/5", borderColor: "border-blue-400/40", iconBg: "bg-blue-500/20", iconColor: "text-blue-400", textColor: "text-blue-400" },
                  { icon: Globe, label: "Global Impact", desc: "Tackling world challenges", color: "from-green-500/20 to-green-600/5", borderColor: "border-green-400/40", iconBg: "bg-green-500/20", iconColor: "text-green-400", textColor: "text-green-400" },
                  { icon: Handshake, label: "Collaboration", desc: "Building partnerships", color: "from-purple-500/20 to-purple-600/5", borderColor: "border-purple-400/40", iconBg: "bg-purple-500/20", iconColor: "text-purple-400", textColor: "text-purple-400" },
                  { icon: Lightbulb, label: "Innovation", desc: "Creative solutions", color: "from-amber-500/20 to-amber-600/5", borderColor: "border-amber-400/40", iconBg: "bg-amber-500/20", iconColor: "text-amber-400", textColor: "text-amber-400" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center space-x-3 p-3 bg-gradient-to-br ${feature.color} border ${feature.borderColor} rounded-lg hover:shadow-lg transition-all duration-300 group`}
                  >
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 0.6 }}
                      className={`p-2 ${feature.iconBg} rounded-full group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className={`h-5 w-5 ${feature.iconColor} transition-colors duration-300`} />
                    </motion.div>
                    <div>
                      <div className={`font-semibold ${feature.textColor} text-sm`}>{feature.label}</div>
                      <div className="text-muted-foreground text-xs">{feature.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/about">
                      Learn More About IGAC
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* IGAC Members Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative order-2"
            >
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden group">
                <Image 
                  src="/events/members.jpg" 
                  alt="IGAC Team Members" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold bg-forest-900/60 px-3 py-2 rounded backdrop-blur-sm">
                    The IGAC Family
                  </p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
