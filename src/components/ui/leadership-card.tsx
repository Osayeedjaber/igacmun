"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LeadershipCardProps {
  name: string
  role: string
  photo: string
  description?: string
  className?: string
  index?: number
}

export const LeadershipCard = React.memo<LeadershipCardProps>(({ 
  name, 
  role, 
  photo, 
  description, 
  className,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn("w-full max-w-sm mx-auto", className)}
    >
      <div className="bg-card relative group hover:shadow-xl hover:shadow-accent-gold/20 border border-accent-gold/20 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-accent-gold/40 hover:-translate-y-2">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-800/30 to-forest-900/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Role badge */}
        <div className="relative z-10 flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-accent-gold/15 text-accent-gold border border-accent-gold/30 backdrop-blur-sm">
            {role}
          </div>
        </div>

        {/* Profile image */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-forest-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 scale-110" />
          
          {/* Image container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent-gold/30 group-hover:border-accent-gold/50 transition-colors duration-500">
            <Image
              src={photo}
              alt={name}
              fill
              sizes="(max-width: 640px) 128px, 160px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              {...(index < 2 ? { priority: true } : { loading: "lazy" })}
            />
          </div>
        </div>

        {/* Name */}
        <div className="relative z-10 text-center mb-3 sm:mb-4">
          <h3 className="text-lg sm:text-2xl font-bold text-foreground font-display capitalize leading-tight group-hover:text-accent-gold/90 transition-colors duration-300">
            {name}
          </h3>
        </div>

        {/* Description */}
        {description && (
          <div className="relative z-10 text-center">
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
              {description}
            </p>
          </div>
        )}

        {/* Subtle decorative elements */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-2 h-2 bg-accent-gold/30 rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-1.5 h-1.5 bg-accent-gold/20 rounded-full animate-pulse delay-1000 opacity-60" />
        
        {/* Border highlight */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-gold/5 via-transparent to-forest-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  )
})

LeadershipCard.displayName = 'LeadershipCard'
