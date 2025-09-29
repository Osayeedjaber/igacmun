"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface ElegantBackgroundProps {
  variant?: 'hero' | 'section' | 'subtle'
  className?: string
}

export const ElegantBackground = React.memo<ElegantBackgroundProps>(({ 
  variant = 'section', 
  className = '' 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return 'from-forest-900 via-forest-800 to-forest-900'
      case 'subtle':
        return 'from-background via-forest-950/10 to-background'
      default:
        return 'from-forest-950/20 via-forest-900/10 to-forest-950/20'
    }
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base elegant gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getVariantStyles()}`} />
      
      {/* Subtle radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(198,168,88,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(31,95,70,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,168,88,0.02),transparent_70%)]" />

      {/* Elegant floating stars/particles */}
      <div className="absolute inset-0">
        {[...Array(variant === 'hero' ? 25 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            {/* Star shape */}
            <div className="relative w-1 h-1">
              <div className="absolute inset-0 bg-accent-gold/40 rounded-full" />
              <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-sm scale-150" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent-gold rounded-full" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-accent-gold rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-accent-gold rounded-full" />
      </div>

      {/* Elegant mesh overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(198,168,88,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(198,168,88,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Subtle gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/10 to-transparent" />
    </div>
  )
})

ElegantBackground.displayName = 'ElegantBackground'

export function ElegantDivider({ className = '', variant = 'default' }: { className?: string, variant?: 'default' | 'ornate' | 'minimal' }) {
  if (variant === 'ornate') {
    return (
      <div className={`relative w-full flex items-center justify-center py-6 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-accent-gold/20"></div>
          <div className="relative">
            <div className="w-3 h-3 bg-accent-gold/30 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-accent-gold/60 rounded-full animate-pulse"></div>
          </div>
          <div className="w-1.5 h-1.5 bg-accent-gold/50 rounded-full"></div>
          <div className="relative">
            <div className="w-4 h-4 border border-accent-gold/40 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-accent-gold/70 rounded-full"></div>
            </div>
          </div>
          <div className="w-1.5 h-1.5 bg-accent-gold/50 rounded-full"></div>
          <div className="relative">
            <div className="w-3 h-3 bg-accent-gold/30 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-accent-gold/60 rounded-full animate-pulse"></div>
          </div>
          <div className="w-20 h-px bg-gradient-to-l from-accent-gold/20 via-accent-gold/40 to-transparent"></div>
        </div>
      </div>
    )
  }

  if (variant === 'minimal') {
    return (
      <div className={`relative w-full flex items-center justify-center py-4 ${className}`}>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent"></div>
      </div>
    )
  }

  return (
    <div className={`relative w-full flex items-center justify-center py-6 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-accent-gold/40"></div>
        <div className="relative">
          <div className="w-2.5 h-2.5 bg-accent-gold/40 rounded-full"></div>
          <div className="absolute inset-0 w-2.5 h-2.5 bg-accent-gold/20 rounded-full blur-sm scale-150"></div>
        </div>
        <div className="w-1.5 h-1.5 bg-accent-gold/60 rounded-full"></div>
        <div className="relative">
          <div className="w-3 h-3 border border-accent-gold/50 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-accent-gold/80 rounded-full"></div>
          </div>
        </div>
        <div className="w-1.5 h-1.5 bg-accent-gold/60 rounded-full"></div>
        <div className="relative">
          <div className="w-2.5 h-2.5 bg-accent-gold/40 rounded-full"></div>
          <div className="absolute inset-0 w-2.5 h-2.5 bg-accent-gold/20 rounded-full blur-sm scale-150"></div>
        </div>
        <div className="w-24 h-px bg-gradient-to-l from-accent-gold/40 via-accent-gold/20 to-transparent"></div>
      </div>
    </div>
  )
}
