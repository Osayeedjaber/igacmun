"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface BackgroundGradientAnimationProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  gradientBackgroundStart?: string
  gradientBackgroundEnd?: string
  firstColor?: string
  secondColor?: string
  thirdColor?: string
  fourthColor?: string
  fifthColor?: string
  pointerColor?: string
  size?: string
  blendingValue?: string
  interactive?: boolean
}

export function BackgroundGradientAnimation({
  children,
  className,
  containerClassName,
  colors,
  size,
  blendingValue,
  gradientBackgroundStart = "rgb(10, 18, 13)",
  gradientBackgroundEnd = "rgb(15, 27, 20)",
  firstColor = "31, 95, 70", // Emerald RGB
  secondColor = "47, 111, 85", // Moss RGB
  thirdColor = "58, 140, 106", // Jade RGB
  fourthColor = "198, 168, 88", // Antique Gold RGB
  fifthColor = "207, 214, 214", // Silver RGB
  pointerColor = "198, 168, 88", // Antique Gold RGB
  interactive = true,
}: BackgroundGradientAnimationProps) {
  const interactiveRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!interactive || !interactiveRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactiveRef.current) return
      
      const rect = interactiveRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      interactiveRef.current.style.setProperty('--mouse-x', `${x}px`)
      interactiveRef.current.style.setProperty('--mouse-y', `${y}px`)
    }

    interactiveRef.current.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      if (interactiveRef.current) {
        interactiveRef.current.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [interactive])

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        containerClassName
      )}
      ref={interactive ? interactiveRef : null}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      
      <div
        className={cn("absolute inset-0", className)}
        style={{
          background: `linear-gradient(40deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(at 30% 40%, rgba(198, 168, 88, 0.4) 0px, transparent 60%),
              radial-gradient(at 70% 60%, rgba(31, 95, 70, 0.3) 0px, transparent 60%),
              radial-gradient(at 50% 30%, rgba(198, 168, 88, 0.2) 0px, transparent 70%),
              radial-gradient(at 20% 70%, rgba(47, 111, 85, 0.3) 0px, transparent 60%)
            `,
            filter: 'blur(80px)',
            transform: 'translateZ(0)',
          }}
        />
        
        {/* Animated gradient orbs */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(${firstColor}, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(${secondColor}, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(${thirdColor}, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 60% 60%, rgba(${fourthColor}, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 90% 90%, rgba(${fifthColor}, 0.4) 0%, transparent 50%)
            `,
            animation: 'gradient-shift 15s ease infinite',
          }}
        />

        {interactive && (
          <div
            className="absolute opacity-30 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(${pointerColor}, 0.4), transparent 40%)`,
              width: '100%',
              height: '100%',
            }}
          />
        )}
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
      
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          33% {
            transform: rotate(120deg) scale(1.1);
          }
          66% {
            transform: rotate(240deg) scale(0.9);
          }
        }
      `}</style>
    </div>
  )
}

export default BackgroundGradientAnimation
