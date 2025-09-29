"use client"

import React, { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface CardSpotlightProps {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
  radius?: number
}

export const CardSpotlight = React.forwardRef<HTMLDivElement, CardSpotlightProps>(
  ({ children, className, spotlightColor = "#c6a858", radius = 350 }, ref) => {
    const divRef = useRef<HTMLDivElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current || isFocused) return

      const div = divRef.current
      const rect = div.getBoundingClientRect()

      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleFocus = () => {
      setIsFocused(true)
      setOpacity(1)
    }

    const handleBlur = () => {
      setIsFocused(false)
      setOpacity(0)
    }

    const handleMouseEnter = () => {
      setOpacity(1)
    }

    const handleMouseLeave = () => {
      setOpacity(0)
    }

    return (
      <div
        ref={ref || divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative overflow-hidden rounded-xl border border-accent-gold/20 bg-card p-8",
          "hover:shadow-2xl hover:shadow-accent-gold/25 transition-all duration-500",
          className
        )}
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, ${spotlightColor}15, transparent 40%)`,
          }}
        />
        
        {/* Border spotlight effect */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition duration-300"
          style={{
            opacity: opacity * 0.5,
            background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, ${spotlightColor}40, transparent 40%)`,
            maskImage: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, black 0%, black 5%, transparent 50%)`,
          }}
        />
        
        {children}
      </div>
    )
  }
)

CardSpotlight.displayName = "CardSpotlight"

export default CardSpotlight
