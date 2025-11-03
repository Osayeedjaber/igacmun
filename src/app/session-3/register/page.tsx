"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Star, Clock, ExternalLink, CheckCircle, Award, X, CreditCard, Crown, DollarSign, Info, AlertCircle, Upload, LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ShinyText } from '@/components/ui/shiny-text'
import { appConfig } from '@/lib/config'

const iconMap: Record<string, LucideIcon> = {
  Star,
  CheckCircle,
  Users,
  Clock,
  Crown,
  Award,
  CreditCard
}

export default function RegisterPage() {
  const { forms, event, registrationTypes } = appConfig

  const handleRegistration = (formKey: string) => {
    const form = forms[formKey as keyof typeof forms]
    if (form && form.enabled && form.link) {
      window.open(form.link, '_blank')
    }
  }

  const sortedRegistrationTypes = registrationTypes
    .map(type => ({ 
      ...type, 
      form: forms[type.key as keyof typeof forms],
      icon: iconMap[type.icon] || Star,
      flashMode: false
    }))
    .filter(type => type.form)
    .sort((a, b) => {
      if (a.form.enabled && !b.form.enabled) return -1
      if (!a.form.enabled && b.form.enabled) return 1
      return 0
    })

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            <ShinyText className="text-foreground">Claim Your Seat</ShinyText>
          </h1>
          <p className="text-xl md:text-2xl text-accent-gold font-display mb-4">
            Register for {event.title}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Secure your place in the biggest Model United Nations conference in South East Asia. 
            Choose your registration Type and embark on a journey of diplomatic excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card border border-accent-gold/20 rounded-xl p-8 mb-12 max-w-4xl mx-auto"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 text-center">
            Registration Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto">
                <span className="font-bold text-accent-gold">1</span>
              </div>
              <h3 className="font-semibold text-foreground">Choose Types</h3>
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
              <h3 className="font-semibold text-foreground">Payment</h3>
              <p className="text-sm text-muted-foreground">Submit payment confirmation</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto">
                <span className="font-bold text-accent-gold">4</span>
              </div>
              <h3 className="font-semibold text-foreground">Confirmation</h3>
              <p className="text-sm text-muted-foreground">Receive confirmation and further details</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sortedRegistrationTypes.map((type) => {
            const { form } = type
            const Icon = type.icon
            
            return (
              <div
                key={type.key}
                className={`
                  relative bg-gradient-to-br from-card to-forest-900/20 border-2 border-accent-gold/30 
                  rounded-xl p-6 md:p-8 
                  ${form.enabled ? 'hover:shadow-2xl hover:shadow-accent-gold/20 hover:border-accent-gold/50' : 'opacity-60'} 
                  transition-all duration-300 group
                `}
              >

                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-accent-gold/20 group-hover:bg-accent-gold/30 transition-all duration-300">
                    <Icon className="h-8 w-8 text-accent-gold" />
                  </div>
                </div>


                <div className="text-center space-y-4">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {form.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {form.description}
                  </p>

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

                  <Button
                    variant={form.enabled ? "thorn" : "ghost"}
                    className={`w-full group/btn ${
                      type.flashMode
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white border-red-500 shadow-lg shadow-red-500/25'
                        : ''
                    }`}
                    disabled={!form.enabled}
                    onClick={() => handleRegistration(type.key)}
                  >
                    {form.enabled ? (
                      <>
                        {type.flashMode ? 'Flash Register Now!' :
                         'Register Now'}
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    ) : (
                      "Coming Soon"
                    )}
                  </Button>
                </div>

                <div className={`absolute top-4 right-4 w-2 h-2 ${
                  type.flashMode ? 'bg-red-400/50' :
                  'bg-accent-gold/30'
                } rounded-full animate-pulse`} />
                <div className={`absolute bottom-4 left-4 w-1 h-1 ${
                  type.flashMode ? 'bg-red-400/30' :
                  'bg-accent-gold/20'
                } rounded-full`} />
              </div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <DollarSign className="h-16 w-16 text-accent-gold" />
                <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl animate-pulse" />
              </div>
            </div>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Payment Confirmation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete your registration by submitting payment proof. Follow the instructions below for a smooth process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-forest-500/10 to-forest-600/5 border border-forest-400/30 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-forest-500/20 rounded-full mr-4">
                  <Info className="h-6 w-6 text-forest-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Payment Instructions
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent-gold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Complete Registration</p>
                    <p className="text-sm text-muted-foreground">Fill out your registration form first</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent-gold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Make Payment</p>
                    <p className="text-sm text-muted-foreground">Use the payment details provided in confirmation email</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent-gold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Submit Proof</p>
                    <p className="text-sm text-muted-foreground">Upload screenshot or receipt using the form</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent-gold">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Confirmation</p>
                    <p className="text-sm text-muted-foreground">Receive final confirmation within 24-48 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-700 dark:text-amber-300">Important Note</p>
                    <p className="text-sm text-amber-600 dark:text-amber-400 mt-1">
                      Payment confirmation must be submitted before the deadline. Late submissions may not be processed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 border border-accent-gold/30 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent-gold/20 rounded-full mr-4">
                  <Upload className="h-6 w-6 text-accent-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {appConfig.forms.paymentConfirmation.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {appConfig.forms.paymentConfirmation.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-card/50 rounded-lg border border-accent-gold/20">
                  <span className="text-sm font-medium text-foreground">Deadline:</span>
                  <span className="text-sm text-accent-gold font-bold">
                    {new Date(appConfig.forms.paymentConfirmation.deadline).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-card/50 rounded-lg border border-accent-gold/20">
                  <span className="text-sm font-medium text-foreground">Status:</span>
                  <div className="flex items-center space-x-2">
                    {appConfig.forms.paymentConfirmation.enabled ? (
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
                </div>
              </div>
              
              <Button
                variant="thorn"
                className="w-full group/btn"
                disabled={!appConfig.forms.paymentConfirmation.enabled}
                onClick={() => handleRegistration('paymentConfirmation')}
              >
                {appConfig.forms.paymentConfirmation.enabled ? (
                  <>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Submit Payment Proof
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </>
                ) : (
                  "Coming Soon"
                )}
              </Button>
            </div>
          </div>
        </motion.div>

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
                About IGACMUN Session III
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Session III is the next chapter of IGAC&apos;s flagship conference</li>
                <li>• Session II successfully hosted 1700+ delegates in 2024</li>
                <li>• Building on proven excellence with enhanced experiences</li>
                <li>• Taking place in December 2025 at AIUB Campus</li>
                <li>• All registrations processed through Google Forms</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center">
                <Award className="h-5 w-5 text-accent-gold mr-2" />
                What&apos;s Included
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Full access to all committee sessions</li>
                <li>• Conference materials and delegate handbook</li>
                <li>• Networking with delegates across the region</li>
                <li>• Certificate of participation</li>
                <li>• Opportunity for awards and recognition</li>
                <li>• Meals and refreshments during conference days</li>
              </ul>
            </div>
          </div>
        </motion.div>

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