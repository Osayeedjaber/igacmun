"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, Coffee, Award } from 'lucide-react'
import { Countdown } from '@/components/ui/countdown'
import { appConfig } from '@/lib/config'

export default function SchedulePage() {
  const { reveals, schedule } = appConfig

  // Convert schedule data to array format
  const scheduleData = Object.entries(schedule).map(([, data]) => ({
    day: data.date,
    title: data.title,
    date: "TBA",
    sessions: data.sessions
  }))

  const getSessionColor = (type: string) => {
    switch (type) {
      case 'registration': return 'bg-accent-gold/20 border-accent-gold/30 text-accent-gold'
      case 'ceremony': return 'bg-forest-600/20 border-forest-500/30 text-forest-200'
      case 'committee': return 'bg-emerald-500/20 border-emerald-400/30 text-emerald-200'
      case 'break': return 'bg-muted/20 border-muted/30 text-muted-foreground'
      case 'presentation': return 'bg-blue-500/20 border-blue-400/30 text-blue-200'
      case 'social': return 'bg-purple-500/20 border-purple-400/30 text-purple-200'
      default: return 'bg-card border-border text-foreground'
    }
  }

  const getSessionIcon = (type: string) => {
    switch (type) {
      case 'registration': return Users
      case 'ceremony': return Award
      case 'committee': return MapPin
      case 'break': return Coffee
      case 'presentation': return Calendar
      case 'social': return Users
      default: return Clock
    }
  }

  const ScheduleContent = () => (
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
            Schedule
          </h1>
          <p className="text-xl md:text-2xl text-accent-gold font-display mb-4">
            Your Diplomatic Journey Awaits
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A carefully crafted timeline of diplomatic excellence, designed to maximize 
            learning, networking, and meaningful discourse throughout the conference.
          </p>
        </motion.div>

        {/* Schedule Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: Calendar, label: "Conference Days", value: "3 Days" },
            { icon: Clock, label: "Total Hours", value: "24+ Hours" },
            { icon: MapPin, label: "Venue", value: "AIUB" },
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
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Daily Schedule */}
        <div className="space-y-12">
          {scheduleData.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: dayIndex % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + dayIndex * 0.2 }}
              className="bg-card border border-accent-gold/20 rounded-xl p-8"
            >
              {/* Day Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-display text-3xl font-bold text-foreground">
                    {day.day}
                  </h2>
                  <p className="text-accent-gold font-medium">
                    {day.date}
                  </p>
                </div>
                <div className="hidden md:flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span>{day.sessions.length} Sessions</span>
                </div>
              </div>

              {/* Sessions Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent-gold/30" />
                
                <div className="space-y-6">
                  {day.sessions.map((session, sessionIndex) => {
                    const Icon = getSessionIcon(session.type)
                    return (
                      <motion.div
                        key={sessionIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + dayIndex * 0.2 + sessionIndex * 0.1 }}
                        className="relative flex items-start space-x-6"
                      >
                        {/* Timeline dot */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-12 h-12 bg-accent-gold/20 border-2 border-accent-gold/40 rounded-full flex items-center justify-center">
                            <Icon className="h-5 w-5 text-accent-gold" />
                          </div>
                        </div>

                        {/* Session content */}
                        <div className="flex-1 min-w-0">
                          <div className={`
                            p-4 rounded-lg border transition-all duration-300 hover:shadow-lg
                            ${getSessionColor(session.type)}
                          `}>
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-lg">
                                {session.title}
                              </h3>
                              <div className="flex items-center space-x-2 text-sm opacity-75">
                                <Clock className="h-4 w-4" />
                                <span>{session.time}</span>
                              </div>
                            </div>
                            
                            {session.type === 'committee' && (
                              <p className="text-sm opacity-75">
                                All committees in session - Active debate and negotiation
                              </p>
                            )}
                            {session.type === 'ceremony' && (
                              <p className="text-sm opacity-75">
                                Formal proceedings with all delegates and guests
                              </p>
                            )}
                            {session.type === 'break' && (
                              <p className="text-sm opacity-75">
                                Networking opportunity and refreshments
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gradient-to-br from-accent-gold/10 to-forest-700/20 border border-accent-gold/30 rounded-xl p-8 max-w-4xl mx-auto"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Important Schedule Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center">
                <Clock className="h-5 w-5 text-accent-gold mr-2" />
                Timing Guidelines
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• All times are subject to minor adjustments</li>
                <li>• Delegates must arrive 15 minutes before sessions</li>
                <li>• Late arrivals may not be permitted during formal sessions</li>
                <li>• Break times are strictly observed for optimal flow</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center">
                <MapPin className="h-5 w-5 text-accent-gold mr-2" />
                Venue Information
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Detailed room assignments will be provided</li>
                <li>• Committee rooms are equipped with modern facilities</li>
                <li>• Refreshment areas are clearly marked</li>
                <li>• Emergency procedures will be briefed on arrival</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  // Check if countdown is enabled
  if (reveals.schedule.enableCountdown) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Countdown
          revealAt={reveals.schedule.revealAt}
          title="Schedule Reveal"
          description="The complete conference timeline will be unveiled soon. Prepare for an intensive diplomatic experience."
        />
      </div>
    )
  }

  return <ScheduleContent />
}
