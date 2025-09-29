"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Award, Target, Heart, Lightbulb, Shield, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ElegantBackground } from '@/components/ui/elegant-background'
import { appConfig } from '@/lib/config'

export default function AboutPage() {
  const { social } = appConfig

  return (
    <div className="min-h-screen py-20 relative">
      <ElegantBackground variant="section" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 relative">
                <Image
                  src="/logo (2).png"
                  alt="IGAC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            About IGAC
          </h1>
          <p className="text-xl md:text-2xl text-accent-gold font-display mb-4">
            International Global Affairs Council
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering youth through diplomatic education and fostering global understanding 
            through Model United Nations excellence.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-accent-gold/10 to-forest-700/20 border border-accent-gold/30 rounded-xl p-8 mb-16"
        >
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              To cultivate the next generation of global leaders by providing immersive diplomatic experiences 
              that enhance critical thinking, cross-cultural understanding, and collaborative problem-solving skills 
              through the Model United Nations platform.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Excellence",
                description: "Striving for the highest standards in all our diplomatic endeavors and educational programs."
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "Maintaining honesty, transparency, and ethical conduct in all our interactions and decisions."
              },
              {
                icon: Users,
                title: "Inclusivity",
                description: "Embracing diversity and ensuring equal opportunities for all participants regardless of background."
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Continuously evolving our methods and approaches to enhance the MUN experience."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-card border border-accent-gold/20 rounded-xl p-6 text-center group hover:border-accent-gold/40 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent-gold/20 rounded-full group-hover:bg-accent-gold/30 transition-colors duration-300">
                    <value.icon className="h-6 w-6 text-accent-gold" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Programs & Activities */}
          <div className="bg-card border border-accent-gold/20 rounded-xl p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center">
              <Shield className="h-6 w-6 text-accent-gold mr-3" />
              Programs & Activities
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Model United Nations Conferences</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Organizing high-quality MUN conferences that simulate real UN proceedings and global diplomatic challenges.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Training Workshops</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Conducting comprehensive training sessions on parliamentary procedure, research methods, and public speaking.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Educational Outreach</h4>
                <p className="text-muted-foreground text-sm">
                  Partnering with schools and universities to promote MUN education and diplomatic awareness.
                </p>
              </div>
            </div>
          </div>

          {/* Impact & Achievements */}
          <div className="bg-card border border-accent-gold/20 rounded-xl p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center">
              <Award className="h-6 w-6 text-accent-gold mr-3" />
              Impact & Achievements
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-accent-gold/10 rounded-lg">
                <span className="text-foreground font-medium">Delegates Trained</span>
                <span className="text-accent-gold font-bold text-xl">5000+</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-accent-gold/10 rounded-lg">
                <span className="text-foreground font-medium">Conferences Organized</span>
                <span className="text-accent-gold font-bold text-xl">15+</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-accent-gold/10 rounded-lg">
                <span className="text-foreground font-medium">Partner Institutions</span>
                <span className="text-accent-gold font-bold text-xl">50+</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-accent-gold/10 rounded-lg">
                <span className="text-foreground font-medium">Years of Excellence</span>
                <span className="text-accent-gold font-bold text-xl">8+</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* History & Legacy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-card border border-accent-gold/20 rounded-xl p-8 mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
            Our Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent-gold/30 hidden md:block" />
              
              <div className="space-y-8">
                {[
                  {
                    year: "2016",
                    title: "Foundation",
                    description: "IGAC was established with a vision to promote diplomatic education among youth in Bangladesh."
                  },
                  {
                    year: "2018",
                    title: "First Major Conference",
                    description: "Successfully organized our first large-scale MUN conference with 500+ delegates."
                  },
                  {
                    year: "2020",
                    title: "Digital Innovation",
                    description: "Adapted to virtual formats during the pandemic, pioneering online MUN experiences."
                  },
                  {
                    year: "2022",
                    title: "Regional Recognition",
                    description: "IGACMUN Session 2 became the largest MUN conference in South East Asia with 1700+ delegates."
                  },
                  {
                    year: "2025",
                    title: "Session III - Game of Thorns",
                    description: "Launching our most ambitious conference yet with enhanced diplomatic challenges and experiences."
                  }
                ].map((milestone, index) => (
                  <div key={milestone.year} className="relative flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0 hidden md:block">
                      <div className="w-12 h-12 bg-accent-gold/20 border-2 border-accent-gold/40 rounded-full flex items-center justify-center">
                        <Crown className="h-5 w-5 text-accent-gold" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 md:ml-0 ml-6">
                      <div className="bg-gradient-to-r from-accent-gold/10 to-transparent p-4 rounded-lg">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-accent-gold font-bold text-lg">{milestone.year}</span>
                          <h3 className="font-display text-lg font-semibold text-foreground">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of our continuing journey to shape future global leaders through 
            diplomatic education and international understanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="thorn" size="lg" asChild>
              <a href="/session-3/register">
                Register for Session III
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://igac.info" target="_blank" rel="noopener noreferrer">
                Visit Our Website
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
