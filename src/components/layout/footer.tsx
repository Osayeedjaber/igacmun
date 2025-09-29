"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Mail, Phone, MapPin, Globe, Heart } from 'lucide-react'
import { ElegantBackground } from '@/components/ui/elegant-background'
import { Logo } from '@/components/ui/logo'

export function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/igac.official_',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=100095775481124',
      color: 'hover:text-blue-400'
    }
  ]

  const quickLinks = [
    { name: 'About IGAC', href: '/about' },
    { name: 'Session III', href: '/session-3' },
    { name: 'Committees', href: '/session-3/committees' },
    { name: 'Registration', href: '/session-3/register' },
    { name: 'Venue', href: '/session-3/venue' },
    { name: 'Contact', href: '/contact' }
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: 'intlglobalaffairscouncil@gmail.com',
      href: 'mailto:intlglobalaffairscouncil@gmail.com'
    },
    {
      icon: Phone,
      text: '+880 18153-53082',
      href: 'tel:+8801815353082'
    },
    {
      icon: MapPin,
      text: 'Dhaka, Bangladesh',
      href: '#'
    }
  ]

  return (
    <footer className="relative bg-forest-950 border-t border-accent-gold/20">
      <ElegantBackground variant="subtle" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Logo showText={false} className="w-12 h-12" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-accent-gold mb-1">
                      IGACMUN
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Session III
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  International Global Affairs Council
                </p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Empowering youth through diplomatic education and fostering global understanding 
                through Model United Nations excellence.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                    className={`p-2 bg-forest-800/50 rounded-full border border-accent-gold/20 text-muted-foreground transition-all duration-300 ${social.color} hover:border-accent-gold/40 hover:bg-forest-700/50`}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display text-lg font-semibold text-foreground mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-accent-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display text-lg font-semibold text-foreground mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <contact.icon className="h-4 w-4 text-accent-gold flex-shrink-0" />
                    <a
                      href={contact.href}
                      className="text-muted-foreground hover:text-accent-gold transition-colors duration-300 text-sm"
                    >
                      {contact.text}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter/Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display text-lg font-semibold text-foreground mb-6">
                Stay Updated
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Get the latest updates about IGACMUN Session III and upcoming events.
              </p>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-accent-gold" />
                <span className="text-sm text-muted-foreground">
                  Follow our social media for announcements
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar with Credits */}
        <div className="border-t border-accent-gold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <p className="text-sm text-muted-foreground">
                  © 2025 International Global Affairs Council. All rights reserved.
                </p>
              </motion.div>

              {/* Developer Credit - Highlighted */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center md:text-right"
              >
                <div className="inline-flex items-center bg-gradient-to-r from-accent-gold/30 via-accent-gold/20 to-accent-gold/30 border border-accent-gold/50 rounded-full px-6 py-3 backdrop-blur-sm hover:border-accent-gold/70 transition-all duration-300 group shadow-lg shadow-accent-gold/20">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 bg-accent-gold/30 rounded-full group-hover:bg-accent-gold/40 transition-colors duration-300">
                      <Heart className="h-4 w-4 text-accent-gold animate-pulse" />
                    </div>
                    <span className="text-sm text-accent-gold font-semibold">CRAFTED WITH PASSION BY</span>
                    <span className="font-display text-sm font-bold text-accent-gold">
                      OSAYEED JABER
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
