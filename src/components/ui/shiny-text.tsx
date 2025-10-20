"use client"

import { CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface ShinyTextProps {
  children: React.ReactNode
  className?: string
}

export function ShinyText({ 
  children, 
  className
}: ShinyTextProps) {
  return (
    <span 
      className={cn(
        "inline-block animate-shiny-text bg-clip-text text-transparent bg-[length:250%_auto]",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(90deg, currentColor 0%, currentColor 40%, rgba(255,255,255,0.9) 50%, currentColor 60%, currentColor 100%)`,
      } as CSSProperties}
    >
      {children}
    </span>
  )
}
