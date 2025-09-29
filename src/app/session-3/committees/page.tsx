"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Users, Globe, Gavel, Award } from 'lucide-react'
import { Countdown } from '@/components/ui/countdown'
import { appConfig } from '@/lib/config'

export default function CommitteesPage() {
  const { reveals, committees } = appConfig

  interface Committee {
    name: string;
    sigilImage: string;
    difficulty: string;
    description: string;
  }

  const CommitteeCard = ({ committee, index }: { committee: Committee; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full max-w-sm mx-auto"
    >
      <div className="bg-card relative group hover:shadow-xl hover:shadow-accent-gold/20 border border-accent-gold/20 rounded-xl p-6 transition-all duration-300 hover:border-accent-gold/40 hover:-translate-y-1">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-800/30 to-forest-900/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Difficulty badge */}
        <div className="relative z-10 flex justify-center mb-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-gold/20 text-accent-gold border border-accent-gold/30">
            {committee.difficulty}
          </div>
        </div>

        {/* Committee sigil */}
        <div className="relative z-10 mb-6">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-forest-600/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
            <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-accent-gold/40 group-hover:border-accent-gold/60 transition-colors duration-300 bg-card flex items-center justify-center">
              <div className="text-accent-gold text-2xl font-bold font-display">
                {committee.name.split(' ').map((word: string) => word[0]).join('').slice(0, 3)}
              </div>
            </div>
          </div>
        </div>

        {/* Committee name */}
        <div className="relative z-10 text-center mb-3">
          <h3 className="text-lg font-bold text-foreground font-display leading-tight">
            {committee.name}
          </h3>
        </div>

        {/* Description */}
        <div className="relative z-10 text-center">
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
            {committee.description}
          </p>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-accent-gold/30 rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent-gold/20 rounded-full animate-pulse delay-1000 opacity-60" />
        
        {/* Border highlight */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-gold/5 via-transparent to-forest-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  )

  const CommitteesContent = () => (
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
              <Shield className="h-16 w-16 text-accent-gold" />
              <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Committees
          </h1>
          <p className="text-xl md:text-2xl text-accent-gold font-display mb-4">
            Diplomatic Battlegrounds Await
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Engage in high-level diplomatic discussions across diverse global issues. 
            Each committee offers unique challenges and opportunities for diplomatic excellence.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { icon: Users, label: "Total Committees", value: committees.length.toString() },
            { icon: Globe, label: "Global Issues", value: "Diverse" },
            { icon: Gavel, label: "Procedure", value: "Parliamentary" },
            { icon: Award, label: "Recognition", value: "Awards" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-accent-gold/20 rounded-full">
                  <stat.icon className="h-6 w-6 text-accent-gold" />
                </div>
              </div>
              <div className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Committees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {committees.map((committee, index) => (
            <CommitteeCard key={committee.name} committee={committee} index={index} />
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-card border border-accent-gold/20 rounded-xl p-8 max-w-4xl mx-auto"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Committee Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center">
                <Gavel className="h-5 w-5 text-accent-gold mr-2" />
                Procedure & Format
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Strict adherence to parliamentary procedure</li>
                <li>• Formal debate and negotiation sessions</li>
                <li>• Working paper and resolution drafting</li>
                <li>• Crisis scenarios in specialized committees</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center">
                <Award className="h-5 w-5 text-accent-gold mr-2" />
                Recognition & Awards
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Best Delegate awards per committee</li>
                <li>• Outstanding Delegate recognition</li>
                <li>• Honorable Mention certificates</li>
                <li>• Special awards for exceptional performance</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  const CommitteesPageContent = () => (
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
              <Shield className="h-16 w-16 text-accent-gold" />
              <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Committees
          </h1>
          <p className="text-xl md:text-2xl text-accent-gold font-display mb-4">
            Diplomatic Battlegrounds
          </p>
        </motion.div>

        {/* Check if countdown is enabled */}
        {reveals.committees.enableCountdown ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-forest-950/60 border border-accent-gold/20 rounded-xl p-8 backdrop-blur-sm">
              <p className="text-accent-gold font-semibold text-2xl mb-6 tracking-wide">
                COMMITTEES WILL BE REVEALED IN
              </p>
              
              <Countdown
                revealAt={reveals.committees.revealAt}
                title=""
                description=""
                className="[&>div]:bg-gradient-to-br [&>div]:from-forest-700 [&>div]:to-forest-800 [&>div]:border-accent-gold/30 [&>div]:text-accent-gold"
              />
              
              <p className="text-muted-foreground mt-6 text-lg">
                The diplomatic battlegrounds will be unveiled soon. Prepare for unprecedented challenges across diverse global issues.
              </p>
            </div>
          </motion.div>
        ) : (
          <CommitteesContent />
        )}
      </div>
    </div>
  )

  return <CommitteesPageContent />
}
