"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Users, MapPin, Award, ExternalLink, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { appConfig } from '@/lib/config'

export default function EventsPage() {
  const { social } = appConfig

  // Past events data
  const events = [
    {
      id: 1,
      title: "IGACMUN Session 2",
      subtitle: "",
      date: "March 2024",
      location: "Dhaka, Bangladesh",
      delegates: "1700+",
      committees: 12,
      description: "A groundbreaking conference that set new standards for MUN excellence in the region, featuring diverse committees and unprecedented participation.",
      highlights: [
        "Largest MUN conference in South East Asia",
        "International delegate participation",
        "Crisis committees with real-time scenarios",
        "Distinguished guest speakers"
      ],
      featured: true,
      image: "/events/igacmunbannerjpg.jpg"
    },
    {
      id: 2,
      title: "Imperial Model United Nations 2024 (IMUN'24)",
      subtitle: "Excellence in Diplomacy",
      date: "September 2024",
      location: "Dhaka, Bangladesh",
      delegates: "500+",
      committees: 8,
      description: "A prestigious conference focusing on contemporary global issues with high-level diplomatic simulations and expert guest speakers.",
      highlights: [
        "Contemporary global focus",
        "Expert guest speakers",
        "High-level simulations",
        "International recognition"
      ],
      featured: false,
      image: "/events/imun.jpg"
    },
    {
      id: 3,
      title: "Republic Model United Nations 2025 (RMUN'25)",
      subtitle: "Shaping Tomorrow's Leaders",
      date: "January 2025",
      location: "Dhaka, Bangladesh",
      delegates: "600+",
      committees: 10,
      description: "An innovative conference designed to prepare the next generation of global leaders through intensive diplomatic training and real-world scenario simulations.",
      highlights: [
        "Next-generation leadership focus",
        "Intensive diplomatic training",
        "Real-world scenarios",
        "Future leader development"
      ],
      featured: false,
      image: "/events/rmun.jpg"
    },
    {
      id: 4,
      title: "IGAC Model United Nations Session 1",
      subtitle: "The Foundation",
      date: "November 2023",
      location: "Dhaka, Bangladesh",
      delegates: "800+",
      committees: 8,
      description: "Our inaugural major conference that established IGAC as a leading MUN organization, setting the foundation for future diplomatic excellence.",
      highlights: [
        "First major IGAC conference",
        "Foundation establishment",
        "Strong delegate engagement",
        "Future growth platform"
      ],
      featured: false,
      image: "/events/igacmun.jpg"
    }
  ]

  interface Event {
    id: number;
    title: string;
    subtitle: string;
    date: string;
    location: string;
    delegates: string;
    committees: number;
    description: string;
    highlights: string[];
    featured: boolean;
    image: string;
  }

  const EventCard = ({ event, index }: { event: Event, index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`w-full ${event.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
      >
        <div className={`
          bg-card relative group hover:shadow-2xl hover:shadow-accent-gold/25 
          border border-accent-gold/20 w-full h-auto rounded-xl p-6 transition-all duration-500
          hover:border-accent-gold/40 hover:-translate-y-1
          ${event.featured ? 'lg:p-8' : ''}
        `}>
          {/* Featured badge */}
          {event.featured && (
            <div className="absolute -top-3 -right-3 z-40">
              <div className="bg-accent-gold text-forest-900 px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-xl border-2 border-background backdrop-blur-sm">
                <Star className="h-4 w-4 mr-1 text-forest-900" />
                <span className="text-forest-900 font-bold">FEATURED</span>
              </div>
            </div>
          )}

          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest-800/30 to-forest-900/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className={`grid ${event.featured ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-6 relative z-10`}>
            {/* Event Image */}
            <div className="relative">
              <div className={`
                relative w-full rounded-lg overflow-hidden transition-transform duration-500 group-hover:scale-105
                ${event.featured ? 'h-64 lg:h-80' : 'h-48'}
              `}>
                <Image 
                  src={event.image} 
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-medium bg-forest-900/60 px-2 py-1 rounded backdrop-blur-sm">
                    {event.date}
                  </p>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-4">
              <h3 className={`
                font-display font-bold text-foreground mb-2 group-hover:text-accent-gold/90 transition-colors duration-300
                ${event.featured ? 'text-2xl lg:text-3xl' : 'text-xl'}
              `}>
                {event.title}
              </h3>
              <p className="text-accent-gold font-medium mb-3">
                {event.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {event.description}
              </p>

              {/* Event Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4 text-accent-gold" />
                  <span className="text-muted-foreground">{event.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-accent-gold" />
                  <span className="text-muted-foreground">{event.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="h-4 w-4 text-accent-gold" />
                  <span className="text-muted-foreground">{event.delegates} Delegates</span>
                </div>
                {event.committees > 0 && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Award className="h-4 w-4 text-accent-gold" />
                    <span className="text-muted-foreground">{event.committees} Committees</span>
                  </div>
                )}
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">Key Highlights:</h4>
                <ul className="space-y-1">
                  {event.highlights.map((highlight: string, idx: number) => (
                    <li key={idx} className="text-muted-foreground text-xs flex items-start">
                      <span className="text-accent-gold mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Subtle decorative elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-accent-gold/30 rounded-full animate-pulse opacity-60" />
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent-gold/20 rounded-full animate-pulse delay-1000 opacity-60" />

          {/* Border highlight */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-gold/5 via-transparent to-forest-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </motion.div>
    )
  }

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
              <Calendar className="h-16 w-16 text-accent-gold" />
              <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Events Archive
          </h1>
          <p className="text-xl md:text-2xl text-accent-gold font-display mb-4">
            A Legacy of Diplomatic Excellence
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our journey through past conferences and events that have shaped 
            the MUN landscape in South East Asia and beyond.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { icon: Calendar, label: "Total Events", value: "15+" },
            { icon: Users, label: "Total Delegates", value: "5000+" },
            { icon: Award, label: "Committees Hosted", value: "50+" },
            { icon: MapPin, label: "Years Active", value: "8+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-br from-accent-gold/10 to-forest-700/20 border border-accent-gold/30 rounded-xl p-8"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Be Part of Our Next Chapter
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us for IGACMUN Session III and become part of our continuing legacy 
            of diplomatic excellence and international understanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="thorn" size="lg" asChild>
              <a href="/session-3/register">
                Register for Session III
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Follow Our Journey
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
