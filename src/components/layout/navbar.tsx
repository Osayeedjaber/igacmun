"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Session III', href: '/session-3' },
  { name: 'Committees', href: '/session-3/committees' },
  { name: 'Schedule', href: '/session-3/schedule' },
  { name: 'Venue', href: '/session-3/venue' },
  { name: 'Registration', href: '/session-3/register' },
  { name: 'Secretariats', href: '/secretariats' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-accent-gold/20 shadow-lg" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/" className="group">
              <div className="relative">
                <Logo size="lg" animated={true} showText={true} className="group-hover:text-accent-gold transition-all duration-300" />
                <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-lg group-hover:bg-accent-gold/40 transition-all duration-500 group-hover:scale-125" />
                
                {/* Pulse effect */}
                <div className="absolute inset-0 bg-accent-gold/10 rounded-full opacity-0 group-hover:opacity-100 animate-ping group-hover:animate-pulse transition-opacity duration-300" />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group overflow-hidden",
                    pathname === item.href
                      ? "text-accent-gold bg-accent-gold/10"
                      : "text-foreground hover:text-accent-gold"
                  )}
                >
                  {/* Background hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/0 via-accent-gold/10 to-accent-gold/0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -skew-x-12 group-hover:skew-x-0" />
                  
                  {/* Text with enhanced hover effect */}
                  <span className="relative z-10 group-hover:drop-shadow-sm transition-all duration-300">
                    {item.name}
                  </span>
                  
                  {/* Active indicator */}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover underline */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-gold/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="thorn" size="sm" asChild>
              <Link href="/session-3/register">
                Register Now
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent-gold"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-accent-gold/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 relative group overflow-hidden",
                      pathname === item.href
                        ? "text-accent-gold bg-accent-gold/15 border-l-2 border-accent-gold"
                        : "text-foreground hover:text-accent-gold hover:bg-accent-gold/10"
                    )}
                  >
                    {/* Mobile hover background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Mobile hover indicator */}
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-accent-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100" />
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2">
                <Button variant="thorn" className="w-full" asChild>
                  <Link href="/session-3/register" onClick={() => setIsOpen(false)}>
                    Register Now
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative thorn divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />
    </nav>
  )
}
