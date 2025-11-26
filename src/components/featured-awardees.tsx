"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Trophy, User } from 'lucide-react'
import { ElegantBackground } from '@/components/ui/elegant-background'
import { appConfig } from '@/lib/config'

export function FeaturedAwardees() {
  // @ts-expect-error - Length check for safety even if typed as const
  if (!appConfig.certificateShowcase || appConfig.certificateShowcase.length === 0) {
    return null
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <ElegantBackground variant="subtle" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Trophy className="h-8 w-8 text-accent-gold" />
            Featured Awardees
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Recognizing excellence and outstanding contributions to the IGACMUN community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {appConfig.certificateShowcase.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl border border-accent-gold/20 bg-forest-900/30 backdrop-blur-sm p-8 transition-all hover:border-accent-gold/50 hover:bg-forest-900/50"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Image 
                  src={item.image || "/logo.png"} 
                  alt="Icon" 
                  width={120} 
                  height={120} 
                  className="object-contain"
                />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-accent-gold/30 bg-black/20 flex-shrink-0 flex items-center justify-center">
                    {item.recipientImage ? (
                      <Image 
                        src={item.recipientImage} 
                        alt={item.name} 
                        fill 
                        className="object-cover" 
                      />
                    ) : (
                      <User className="w-10 h-10 text-accent-gold/40" />
                    )}
                  </div>
                  
                  <div>
                    <h3 className={`text-xl font-bold font-display transition-colors ${item.name === "To Be Announced" ? "text-white/50 italic" : "text-white group-hover:text-accent-gold"}`}>
                      {item.name}
                    </h3>
                    <p className="text-base text-accent-gold/80 font-medium mb-1">
                      {item.school}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Awarded Title</p>
                  <p className="text-xl font-semibold text-white/90">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
