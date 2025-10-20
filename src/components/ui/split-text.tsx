"use client"

import { cn } from "@/lib/utils"

interface SplitTextProps {
  children: string
  className?: string
}

export function SplitText({ 
  children, 
  className
}: SplitTextProps) {
  return (
    <span className={cn("inline-block", className)}>
      {children}
    </span>
  )
}
