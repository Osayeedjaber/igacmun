"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Star, Clock, ExternalLink, CheckCircle, Award, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { appConfig } from '@/lib/config'

export default function RegisterPage() {
  const { forms, event } = appConfig

  const handleRegistration = (formKey: string) => {
    const form = forms[formKey as keyof typeof forms]
    if (form && form.enabled && form.link) {
      window.open(form.link, '_blank')
    }
  }

  const registrationTiers = [
    {
      key: 'earlyBird',
      icon: Star,
      color: 'from-emerald-500/20 to-emerald-600/5',
      borderColor: 'border-emerald-400/40',
      priority: 'high' as const
    },
    {
      key: 'regular',
      icon: CheckCircle,
      color: 'from-forest-500/20 to-forest-600/5',
      borderColor: 'border-forest-400/40',
      priority: 'medium' as const
    },
    {
      key: 'campusAmbassadors',
      icon: Users,
      color: 'from-accent-gold/20 to-accent-gold/5',
      borderColor: 'border-accent-gold/40',
      priority: 'high' as const
    },
    {
      key: 'late',
      icon: Clock,
      color: 'from-destructive/20 to-destructive/5',
      borderColor: 'border-destructive/40',
      priority: 'low' as const
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Award className="h-16 w-16 text-accent-gold" />
              <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Join the Throne
          </h1>
          <p className="text-xl md:text-2xl text-accent-gold font-display mb-4">
            Register for {event.title}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Secure your place in the biggest Model United Nations conference in South East Asia. 
            Choose your registration tier and embark on a journey of diplomatic excellence.
          </p>
        </motion.div>

        {/* Registration Process Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card border border-accent-gold/20 rounded-xl p-8 mb-12 max-w-4xl mx-auto"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 text-center">
            Registration Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto">
                <span className="font-bold text-accent-gold">1</span>
              </div>
              <h3 className="font-semibold text-foreground">Choose Tier</h3>
              <p className="text-sm text-muted-foreground">Select your preferred registration category</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto">
                <span className="font-bold text-accent-gold">2</span>
              </div>
              <h3 className="font-semibold text-foreground">External Form</h3>
              <p className="text-sm text-muted-foreground">Complete registration via Google Forms</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto">
                <span className="font-bold text-accent-gold">3</span>
              </div>
              <h3 className="font-semibold text-foreground">Confirmation</h3>
              <p className="text-sm text-muted-foreground">Receive confirmation and further details</p>
            </div>
          </div>
        </motion.div>

        {/* Registration Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {registrationTiers.map((tier, index) => {
            const form = forms[tier.key as keyof typeof forms]
            const Icon = tier.icon
            
            return (
              <motion.div
                key={tier.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  relative bg-gradient-to-br ${tier.color} 
                  border ${tier.borderColor} rounded-xl p-8 
                  ${form.enabled ? 'hover:shadow-lg hover:shadow-accent-gold/10' : 'opacity-60'} 
                  transition-all duration-300 group
                `}
              >

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`
                    p-4 rounded-full 
                    ${form.enabled ? 'bg-accent-gold/20 group-hover:bg-accent-gold/30' : 'bg-muted/20'} 
                    transition-colors duration-300
                  `}>
                    <Icon className={`h-8 w-8 ${form.enabled ? 'text-accent-gold' : 'text-muted-foreground'}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {form.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {form.description}
                  </p>

                  {/* Status Indicator */}
                  <div className="flex items-center justify-center space-x-2">
                    {form.enabled ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-500 font-medium">Available</span>
                      </>
                    ) : (
                      <>
                        <X className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground font-medium">Not Available</span>
                      </>
                    )}
                  </div>

                  {/* Action Button */}
                  <Button
                    variant={form.enabled ? "thorn" : "ghost"}
                    className="w-full group/btn"
                    disabled={!form.enabled}
                    onClick={() => handleRegistration(tier.key)}
                  >
                    {form.enabled ? (
                      <>
                        Register Now
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    ) : (
                      "Coming Soon"
                    )}
                  </Button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-accent-gold/30 rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent-gold/20 rounded-full animate-pulse delay-1000" />
              </motion.div>
            )
          })}
        </div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-card border border-accent-gold/20 rounded-xl p-8 max-w-4xl mx-auto"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Important Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                Registration Guidelines
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• All registrations are processed through external Google Forms</li>
                <li>• Early registration is recommended for better committee preferences</li>
                <li>• Payment instructions will be provided after form submission</li>
                <li>• Registration confirmation will be sent via email</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center">
                <Award className="h-5 w-5 text-accent-gold mr-2" />
                What&apos;s Included
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Access to all committee sessions</li>
                <li>• Conference materials and resources</li>
                <li>• Networking opportunities with delegates</li>
                <li>• Certificate of participation</li>
                <li>• Awards ceremony and recognition</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need help with registration? Have questions about the conference?
          </p>
          <Button variant="outline" asChild>
            <a href="/contact">
              Contact Us
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
