"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  className?: string
  animated?: boolean
  showText?: boolean
}

const sizeClasses = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  md: 'w-10 h-10', 
  lg: 'w-16 h-16',
  xl: 'w-20 h-20',
  '2xl': 'w-24 h-24',
  '3xl': 'w-32 h-32',
  '4xl': 'w-40 h-40',
  '5xl': 'w-48 h-48'
}

export function Logo({ 
  size = 'md', 
  className, 
  animated = true,
  showText = false 
}: LogoProps) {
  const LogoImage = animated ? motion.div : 'div'
  
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <LogoImage
        {...(animated && {
          whileHover: { 
            rotate: [0, -2, 2, 0],
            scale: [1, 1.05, 1]
          },
          transition: { duration: 0.6 }
        })}
        className={cn(
          "relative rounded-full overflow-hidden bg-accent-gold/10 p-1",
          sizeClasses[size]
        )}
      >
        <Image
          src="/Untitled design (19).png"
          alt="IGACMUN Logo"
          width={
            size === '5xl' ? 192 : 
            size === '4xl' ? 160 : 
            size === '3xl' ? 128 : 
            size === '2xl' ? 96 : 
            size === 'xl' ? 80 : 
            size === 'lg' ? 64 : 
            size === 'md' ? 40 : 
            size === 'sm' ? 24 : 16
          }
          height={
            size === '5xl' ? 192 : 
            size === '4xl' ? 160 : 
            size === '3xl' ? 128 : 
            size === '2xl' ? 96 : 
            size === 'xl' ? 80 : 
            size === 'lg' ? 64 : 
            size === 'md' ? 40 : 
            size === 'sm' ? 24 : 16
          }
          className="object-contain w-full h-full hover:brightness-110 transition-all duration-300"
        />
      </LogoImage>
      
      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-bold text-lg text-foreground">
            IGACMUN
          </span>
          <span className="font-body text-xs text-muted-foreground -mt-1">
            Session III
          </span>
        </div>
      )}
    </div>
  )
}

export default Logo
