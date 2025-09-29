"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Crown, Home, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Crown */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <Crown className="h-24 w-24 text-accent-gold" />
            <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl animate-pulse" />
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="font-display text-8xl md:text-9xl font-bold text-accent-gold mb-4">
            404
          </h1>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Throne Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The diplomatic chamber you&apos;re seeking has been relocated or may not exist in our realm. 
            Let us guide you back to familiar territory.
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex justify-center items-center space-x-4 text-accent-gold/30">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-accent-gold/30" />
            <Crown className="h-6 w-6" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-accent-gold/30" />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button variant="thorn" size="lg" asChild>
            <Link href="/" className="group">
              <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Return to Throne Room
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/session-3" className="group">
              <Search className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Explore Session III
            </Link>
          </Button>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-card border border-accent-gold/20 rounded-xl p-6 max-w-2xl mx-auto"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-4">
            Popular Destinations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Home", href: "/" },
              { name: "Register", href: "/session-3/register" },
              { name: "Committees", href: "/session-3/committees" },
              { name: "Contact", href: "/contact" }
            ].map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="block p-3 text-center text-sm font-medium text-muted-foreground hover:text-accent-gold hover:bg-accent-gold/10 rounded-lg transition-all duration-200"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-gold/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
