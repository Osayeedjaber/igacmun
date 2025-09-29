"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Instagram, Globe, Send, MessageCircle, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { appConfig } from '@/lib/config'

export default function ContactPage() {
  const { social } = appConfig

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      value: social.email,
      action: `mailto:${social.email}`,
      color: "from-blue-500/20 to-blue-600/5 border-blue-400/40"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: social.phone,
      action: `tel:${social.phone}`,
      color: "from-green-500/20 to-green-600/5 border-green-400/40"
    },
    {
      icon: Instagram,
      title: "Follow Us",
      description: "Stay updated with our latest news",
      value: "@igac.official_",
      action: social.instagram,
      color: "from-pink-500/20 to-pink-600/5 border-pink-400/40"
    },
    {
      icon: Globe,
      title: "Visit Website",
      description: "Explore our official website",
      value: "igac.info",
      action: "https://igac.info",
      color: "from-accent-gold/20 to-accent-gold/5 border-accent-gold/40"
    }
  ]

  const quickLinks = [
    { title: "Registration", href: "/session-3/register", description: "Register for Session III" },
    { title: "Committees", href: "/session-3/committees", description: "View available committees" },
    { title: "Schedule", href: "/session-3/schedule", description: "Conference timeline" },
    { title: "Venue", href: "/session-3/venue", description: "Location details" },
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
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <MessageCircle className="h-16 w-16 text-accent-gold" />
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl"
                animate={{ 
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
          
          <motion.h1 
            className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-accent-gold font-display mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get in Touch
          </motion.p>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Have questions about IGACMUN Session III? We&apos;re here to help. Reach out to us through 
            any of the channels below and we&apos;ll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                className={`
                  bg-gradient-to-br ${method.color} 
                  border rounded-xl p-6 group hover:shadow-xl hover:shadow-accent-gold/20 
                  transition-all duration-500 cursor-pointer relative overflow-hidden
                `}
                onClick={() => {
                  if (method.action.startsWith('http')) {
                    window.open(method.action, '_blank', 'noopener,noreferrer')
                  } else {
                    window.location.href = method.action
                  }
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="flex items-start space-x-4 relative z-10">
                  <motion.div 
                    className="p-3 bg-accent-gold/20 rounded-full group-hover:bg-accent-gold/30 transition-colors duration-300"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-6 w-6 text-accent-gold" />
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent-gold/90 transition-colors duration-300"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {method.title}
                    </motion.h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {method.description}
                    </p>
                    <motion.p 
                      className="text-accent-gold font-medium"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {method.value}
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Send className="h-4 w-4 text-accent-gold" />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Button
                  variant="outline"
                  className="w-full h-auto p-4 flex flex-col items-center space-y-2 group"
                  asChild
                >
                  <a href={link.href}>
                    <span className="font-semibold">{link.title}</span>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {link.description}
                    </span>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Office Hours & Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Support Hours */}
          <div className="bg-card border border-accent-gold/20 rounded-xl p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center">
              <Clock className="h-6 w-6 text-accent-gold mr-3" />
              Support Hours
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-accent-gold/10 rounded-lg">
                <span className="text-foreground font-medium">Monday - Friday</span>
                <span className="text-accent-gold font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent-gold/10 rounded-lg">
                <span className="text-foreground font-medium">Saturday</span>
                <span className="text-accent-gold font-semibold">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-muted-foreground font-medium">Sunday</span>
                <span className="text-muted-foreground">Closed</span>
              </div>
              <div className="mt-4 p-3 bg-forest-600/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> During conference periods, extended support hours may apply. 
                  Emergency contacts will be provided to registered delegates.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Quick Access */}
          <div className="bg-card border border-accent-gold/20 rounded-xl p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center">
              <Users className="h-6 w-6 text-accent-gold mr-3" />
              Frequently Asked
            </h3>
            <div className="space-y-4">
              {[
                {
                  question: "How do I register for the conference?",
                  answer: "Visit our registration page and select your preferred tier."
                },
                {
                  question: "What is the registration deadline?",
                  answer: "Registration deadlines vary by tier. Early bird offers limited availability."
                },
                {
                  question: "Are there accommodation arrangements?",
                  answer: "We provide guidance on nearby hotels and accommodation options."
                },
                {
                  question: "What should I bring to the conference?",
                  answer: "Formal attire, laptop/tablet, notebooks, and identification documents."
                }
              ].map((faq, index) => (
                <div key={index} className="p-3 bg-accent-gold/5 rounded-lg border border-accent-gold/20">
                  <h4 className="font-semibold text-foreground text-sm mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-muted-foreground text-xs">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-gradient-to-br from-accent-gold/10 to-forest-700/20 border border-accent-gold/30 rounded-xl p-8"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Ready to Begin Your Diplomatic Journey?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don&apos;t wait - secure your place in the most prestigious MUN conference in South East Asia. 
            Our team is standing by to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="thorn" size="lg" asChild>
              <a href="/session-3/register">
                Register Now
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`mailto:${social.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
