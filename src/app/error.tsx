"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Warning Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <AlertTriangle className="h-24 w-24 text-destructive" />
            <div className="absolute inset-0 bg-destructive/20 rounded-full blur-xl animate-pulse" />
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="font-display text-6xl md:text-7xl font-bold text-destructive mb-4">
            500
          </h1>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Diplomatic Crisis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            An unexpected diplomatic incident has occurred in our chambers. 
            Our secretariat is working to resolve this matter swiftly.
          </p>
          
          {/* Error Details (Development) */}
          {process.env.NODE_ENV === 'development' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card border border-destructive/20 rounded-lg p-4 text-left max-w-2xl mx-auto mb-6"
            >
              <h3 className="font-semibold text-destructive mb-2">Error Details:</h3>
              <code className="text-sm text-muted-foreground break-all">
                {error.message}
              </code>
              {error.digest && (
                <p className="text-xs text-muted-foreground mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex justify-center items-center space-x-4 text-destructive/30">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-destructive/30" />
            <AlertTriangle className="h-6 w-6" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-destructive/30" />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button 
            variant="thorn" 
            size="lg" 
            onClick={reset}
            className="group"
          >
            <RefreshCw className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
            Restore Order
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/" className="group">
              <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Return to Safety
            </Link>
          </Button>
        </motion.div>

        {/* Support Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-card border border-accent-gold/20 rounded-xl p-6 max-w-2xl mx-auto"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            If this error persists, please contact our technical secretariat with the error details above.
          </p>
          <Button variant="outline" size="sm" asChild>
            <Link href="/contact" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Contact Support
            </Link>
          </Button>
        </motion.div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-destructive/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
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
