"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CountdownProps {
  revealAt: string
  title?: string
  description?: string
  className?: string
  onReveal?: () => void
  showOverlay?: boolean
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isRevealed: boolean
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  try {
    const now = Date.now()
    const target = new Date(targetDate).getTime()
    const difference = target - now

    if (difference <= 0 || isNaN(target)) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isRevealed: true
      }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      isRevealed: false
    }
  } catch {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isRevealed: true
    }
  }
}

export function Countdown({ 
  revealAt, 
  title = "Coming Soon", 
  description,
  className,
  onReveal,
  showOverlay = false
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(revealAt))
  const [mounted, setMounted] = useState(false)

  const updateCountdown = useCallback(() => {
    const newTimeLeft = calculateTimeLeft(revealAt)
    setTimeLeft(prev => {
      // Only update if values actually changed to prevent unnecessary re-renders
      if (
        prev.days !== newTimeLeft.days ||
        prev.hours !== newTimeLeft.hours ||
        prev.minutes !== newTimeLeft.minutes ||
        prev.seconds !== newTimeLeft.seconds ||
        prev.isRevealed !== newTimeLeft.isRevealed
      ) {
        return newTimeLeft
      }
      return prev
    })
    
    if (newTimeLeft.isRevealed && onReveal) {
      onReveal()
    }
  }, [revealAt, onReveal])

  useEffect(() => {
    setMounted(true)
    updateCountdown()
  }, [updateCountdown])

  useEffect(() => {
    if (!mounted || timeLeft.isRevealed) return

    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [mounted, timeLeft.isRevealed, updateCountdown])

  // Loading state
  if (!mounted) {
    return (
      <div className={cn(
        "flex flex-col items-center justify-center space-y-8 p-8",
        showOverlay ? "min-h-screen" : "min-h-[400px]",
        className
      )}>
        <div className="text-center space-y-4">
          <div className="h-12 w-48 bg-accent-gold/20 rounded-lg animate-pulse"></div>
          <div className="h-4 w-32 bg-muted/20 rounded animate-pulse mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-20 w-20 bg-card/50 border border-accent-gold/20 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }

  // Don't render if revealed
  if (timeLeft.isRevealed) {
    return null
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  const CountdownContent = () => (
    <div className={cn(
      "flex flex-col items-center justify-center space-y-8 p-8 relative",
      showOverlay ? "min-h-screen" : "min-h-[400px]",
      className
    )}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 via-transparent to-forest-900/10 rounded-lg"></div>
      
      <div className="text-center space-y-4 relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-accent-gold">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative group">
              <div className="bg-card/80 backdrop-blur-sm border border-accent-gold/30 rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[90px] shadow-lg hover:border-accent-gold/50 transition-all duration-300 hover:shadow-xl">
                <div className="text-xl md:text-3xl font-bold text-accent-gold text-center font-display tabular-nums">
                  {unit.value.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-transparent rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-accent-gold/40 rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent-gold/30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent-gold/35 rounded-full"></div>
      </div>
    </div>
  )

  if (showOverlay) {
    return (
      <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center">
        <CountdownContent />
      </div>
    )
  }

  return <CountdownContent />
}

export function CountdownOverlay({ 
  revealAt, 
  title, 
  description, 
  children,
  className,
}: CountdownProps & { children: React.ReactNode }) {
  const [isRevealed, setIsRevealed] = useState(() => calculateTimeLeft(revealAt).isRevealed)
  const [mounted, setMounted] = useState(false)

  const checkReveal = useCallback(() => {
    const timeLeft = calculateTimeLeft(revealAt)
    if (timeLeft.isRevealed && !isRevealed) {
      setIsRevealed(true)
    }
  }, [revealAt, isRevealed])

  useEffect(() => {
    setMounted(true)
    checkReveal()
  }, [checkReveal])

  useEffect(() => {
    if (!mounted || isRevealed) return

    const timer = setInterval(checkReveal, 1000)
    return () => clearInterval(timer)
  }, [mounted, isRevealed, checkReveal])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-accent-gold font-medium">Loading...</div>
      </div>
    )
  }

  if (isRevealed) {
    return <>{children}</>
  }

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center">
      <Countdown
        revealAt={revealAt}
        title={title}
        description={description}
        className={className}
        onReveal={() => setIsRevealed(true)}
      />
    </div>
  )
}
