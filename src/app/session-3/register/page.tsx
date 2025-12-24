"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle, X, CreditCard, Bird, Users, Crown, Award, Star, LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { appConfig } from '@/lib/config'
import { ElegantBackground } from '@/components/ui/elegant-background'

const iconMap: Record<string, LucideIcon> = {
  Bird,
  Users,
  Crown,
  Award,
  Star,
  CreditCard
}

export default function RegisterPage() {
  const { forms, registrationTypes } = appConfig

  const handleRegistration = (formKey: string) => {
    const form = forms[formKey as keyof typeof forms]
    if (form && form.enabled && form.link) {
      window.open(form.link, '_blank')
    }
  }

  return (
    <div className="min-h-screen relative bg-background">
      <ElegantBackground variant="section" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        {/* Simple Header */}
        <div className="mb-20 border-l-4 border-accent-gold pl-6">
          <h1 className="font-display text-5xl font-bold text-white tracking-tight">
            Registration
          </h1>
          <p className="text-gray-400 mt-2 text-lg font-light">
            Secure your seat in Session III. Select a category to begin.
          </p>
        </div>

        {/* Structured Horizontal Grid for Registration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16">
          {registrationTypes.map((type, index) => {
            const form = forms[type.key as keyof typeof forms]
            if (!form) return null
            const Icon = iconMap[type.icon] || Star

            return (
              <motion.div
                key={type.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`group flex items-center gap-5 p-5 bg-forest-950/40 backdrop-blur-md border border-accent-gold/15 rounded-2xl transition-all duration-300 ${form.enabled ? 'hover:bg-forest-900/40 hover:border-accent-gold/40' : 'opacity-50'}`}
              >
                {/* Compact Icon */}
                <div className="shrink-0 w-14 h-14 rounded-xl bg-forest-900 border border-accent-gold/20 flex items-center justify-center group-hover:border-accent-gold/40 transition-colors shadow-xl">
                  <Icon className="h-6 w-6 text-accent-gold" />
                </div>

                {/* Info */}
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-accent-gold transition-colors truncate">
                      {form.title}
                    </h3>
                    {form.enabled ? (
                      <CheckCircle className="h-3 w-3 text-green-500 shrink-0" />
                    ) : (
                      <X className="h-3 w-3 text-gray-500 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-1 font-light italic">
                    {form.description}
                  </p>
                </div>

                {/* Action */}
                <div className="shrink-0">
                  <Button 
                    variant={form.enabled ? "outline" : "ghost"} 
                    size="sm" 
                    disabled={!form.enabled}
                    onClick={() => handleRegistration(type.key)}
                    className="text-accent-gold border-accent-gold/20 hover:bg-accent-gold/10 px-4"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest">{form.enabled ? 'Register' : 'Soon'}</span>
                    {form.enabled && <ExternalLink className="ml-2 h-3 w-3" />}
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Payment Proof Section - Matching Grid Aesthetic */}
        <div className="bg-forest-900/20 border border-accent-gold/20 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/[0.03] to-transparent" />
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div className="shrink-0 p-6 bg-accent-gold/10 rounded-2xl border border-accent-gold/20 group-hover:bg-accent-gold/20 transition-colors">
              <CreditCard className="h-10 w-10 text-accent-gold" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-3">Payment Confirmation</h2>
              <p className="text-gray-400 font-light text-base max-w-xl">
                Already registered and paid? Submit your payment proof here to finalize your delegation and secure your chamber.
              </p>
            </div>
            <Button 
              variant="thorn" 
              size="xl" 
              className="w-full md:w-auto px-12"
              onClick={() => handleRegistration('paymentConfirmation')}
              disabled={!forms.paymentConfirmation.enabled}
            >
              Submit Proof
            </Button>
          </div>
        </div>

        {/* Simple Footer Note */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-black">
            IGACMUN SESSION III • AIUB
          </p>
          <p className="mt-4 text-gray-500 text-sm font-light">
            Need assistance? <a href="/contact" className="text-accent-gold hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  )
}