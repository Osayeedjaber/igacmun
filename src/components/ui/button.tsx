"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { HoverBorderGradient } from "./hover-border-gradient"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border border-primary shadow hover:bg-primary/90 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-accent-gold/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-600",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-accent-gold text-accent-gold bg-transparent shadow-sm hover:bg-accent-gold hover:text-accent-foreground hover:shadow-lg hover:shadow-accent-gold/25",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        thorn: "bg-gradient-to-r from-forest-700 to-forest-600 text-forest-50 border border-accent-gold/30 shadow-lg hover:shadow-accent-gold/40 hover:border-accent-gold/50 transition-all duration-300",
        gradient: "bg-gradient-to-r from-forest-800 to-forest-600 text-foreground font-semibold"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  useGradientBorder?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, useGradientBorder = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Use HoverBorderGradient for special variants or when explicitly requested
    if (useGradientBorder || variant === "gradient") {
      return (
        <HoverBorderGradient
          as="button"
          containerClassName={cn(
            "rounded-full",
            size === "sm" && "h-8",
            size === "default" && "h-9", 
            size === "lg" && "h-10",
            size === "xl" && "h-12"
          )}
          className={cn(
            "bg-gradient-to-r from-forest-800 to-forest-600 text-foreground font-semibold border-0",
            size === "sm" && "px-3 py-1 text-xs",
            size === "default" && "px-4 py-2 text-sm",
            size === "lg" && "px-8 py-2 text-sm", 
            size === "xl" && "px-10 py-3 text-base",
            className
          )}
          duration={2}
          {...props}
        >
          {children}
        </HoverBorderGradient>
      )
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
