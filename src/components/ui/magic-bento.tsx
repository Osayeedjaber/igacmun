"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagicBentoProps {
  children: React.ReactNode
  className?: string
}

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  index?: number
}

export function MagicBento({ children, className }: MagicBentoProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  )
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {children}
    </div>
  )
}

export function BentoCard({ children, className, index = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border-2 border-accent-gold/30 bg-gradient-to-br from-card to-forest-900/30 p-6 transition-all duration-300 hover:border-accent-gold/60 hover:shadow-2xl hover:shadow-accent-gold/20 hover:scale-[1.02]",
        className
      )}
    >
      {/* Prominent gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 via-accent-gold/5 to-forest-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Visible shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* More visible corner accent */}
      <div className="absolute bottom-0 right-0 h-32 w-32 bg-gradient-to-tl from-accent-gold/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-tl-3xl" />
      
      {/* Top corner accent */}
      <div className="absolute top-0 left-0 h-24 w-24 bg-gradient-to-br from-accent-gold/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-br-3xl" />
    </motion.div>
  )
}
