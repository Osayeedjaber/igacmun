"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Instagram, ExternalLink, Image as ImageIcon, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { appConfig } from '@/lib/config'

export default function GalleryPage() {
  const { social } = appConfig

  // Placeholder gallery categories
  const galleryCategories = [
    {
      title: "IGACMUN Session 2",
      description: "Highlights from our largest conference",
      imageCount: 150,
      featured: true
    },
    {
      title: "Opening Ceremonies",
      description: "Grand openings and formal proceedings",
      imageCount: 45,
      featured: false
    },
    {
      title: "Committee Sessions",
      description: "Delegates in action during debates",
      imageCount: 200,
      featured: false
    },
    {
      title: "Awards & Recognition",
      description: "Celebrating excellence and achievement",
      imageCount: 80,
      featured: false
    },
    {
      title: "Networking Events",
      description: "Building connections and friendships",
      imageCount: 120,
      featured: false
    },
    {
      title: "Behind the Scenes",
      description: "Secretariat and organizational moments",
      imageCount: 60,
      featured: false
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
              <Camera className="h-16 w-16 text-accent-gold" />
              <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl text-accent-gold font-display mb-4">
            Moments of Diplomatic Excellence
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore captured moments from our conferences, showcasing the passion, 
            dedication, and diplomatic excellence of our MUN community.
          </p>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 border border-pink-400/30 rounded-xl p-8 mb-16 text-center"
        >
          <div className="flex justify-center mb-4">
            <Instagram className="h-12 w-12 text-pink-400" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            For the latest photos, behind-the-scenes content, and real-time updates 
            from our conferences, follow us on Instagram.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a 
              href={social.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              @igac.official_
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        {/* Gallery Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Photo Collections
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`
                  bg-card border border-accent-gold/20 rounded-xl p-6 group 
                  hover:border-accent-gold/40 hover:shadow-lg hover:shadow-accent-gold/10 
                  transition-all duration-300 cursor-pointer relative
                  ${category.featured ? 'md:col-span-2 lg:col-span-1' : ''}
                `}
              >
                {/* Featured badge */}
                {category.featured && (
                  <div className="absolute -top-3 -right-3 bg-accent-gold text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}

                {/* Placeholder Image */}
                <div className={`
                  relative w-full rounded-lg overflow-hidden bg-gradient-to-br from-forest-700 to-forest-800 
                  flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300
                  ${category.featured ? 'h-48' : 'h-40'}
                `}>
                  <div className="text-center">
                    <ImageIcon className="h-12 w-12 text-accent-gold mx-auto mb-2" />
                    <p className="text-accent-gold font-medium text-sm">
                      {category.imageCount} Photos
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 to-transparent" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-accent-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="h-8 w-8 text-accent-gold mx-auto mb-2" />
                      <p className="text-accent-gold font-medium text-sm">View Collection</p>
                    </div>
                  </div>
                </div>

                {/* Category Info */}
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent-gold transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { icon: Camera, label: "Total Photos", value: "1000+" },
            { icon: Users, label: "Events Covered", value: "15+" },
            { icon: Award, label: "Memorable Moments", value: "Countless" },
            { icon: Instagram, label: "Social Reach", value: "10K+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center bg-card border border-accent-gold/20 rounded-xl p-6"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-accent-gold/20 rounded-full">
                  <stat.icon className="h-6 w-6 text-accent-gold" />
                </div>
              </div>
              <div className="font-display text-2xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-card border border-accent-gold/20 rounded-xl p-8"
        >
          <div className="flex justify-center mb-4">
            <Camera className="h-12 w-12 text-accent-gold" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Full Gallery Coming Soon
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We&apos;re currently organizing our extensive photo collection to provide you with 
            the best browsing experience. In the meantime, follow us on social media for 
            the latest updates and behind-the-scenes content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="thorn" size="lg" asChild>
              <a 
                href={social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow on Instagram
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/session-3/register">
                Be Part of Session III
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
