"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT"

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType
    containerClassName?: string
    className?: string
    duration?: number
    clockwise?: boolean
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false)
  const [direction, setDirection] = useState<Direction>("TOP")


  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, rgba(198, 168, 88, 1) 0%, rgba(198, 168, 88, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, rgba(198, 168, 88, 1) 0%, rgba(198, 168, 88, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, rgba(198, 168, 88, 1) 0%, rgba(198, 168, 88, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, rgba(198, 168, 88, 1) 0%, rgba(198, 168, 88, 0) 100%)",
  }

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"]
    const currentIndex = directions.indexOf(currentDirection)
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length
    return directions[nextIndex]
  }

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState))
      }, duration)
      return () => clearInterval(interval)
    }
  }, [hovered, duration, clockwise])

  return (
    <Tag
      onMouseEnter={() => {
        setHovered(true)
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center bg-forest-900/20 hover:bg-forest-800/10 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-accent-gold z-10 bg-forest-900 px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      {/* Normal directional animation */}
      {!hovered && (
        <motion.div
          className={cn(
            "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
          )}
          style={{
            filter: "blur(1px)",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          initial={{ background: movingMap[direction] }}
          animate={{ background: movingMap[direction] }}
          transition={{ ease: "linear", duration: duration ?? 1 }}
        />
      )}

      {/* Special hover animation - spinning conic gradient */}
      {hovered && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] z-0"
          style={{
            background: `conic-gradient(from 0deg, 
              rgba(198, 168, 88, 1) 0%, 
              rgba(198, 168, 88, 0.3) 25%, 
              rgba(198, 168, 88, 1) 50%, 
              rgba(198, 168, 88, 0.3) 75%, 
              rgba(198, 168, 88, 1) 100%)`,
            filter: "blur(1px)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Additional hover glow effect */}
      {hovered && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] z-0"
          style={{
            background: "radial-gradient(circle, rgba(198, 168, 88, 0.4) 0%, transparent 70%)",
            filter: "blur(3px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <div className="bg-forest-900 absolute z-1 flex-none inset-[2px] rounded-[inherit]" />
    </Tag>
  )
}
