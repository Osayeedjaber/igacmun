"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, ArrowRight } from 'lucide-react'
import { appConfig } from '@/lib/config'
import { Button } from '@/components/ui/button'

export default function CommitteesPage() {
  const { committees } = appConfig

  interface Committee {
    name: string;
    sigilImage: string;
    difficulty: string;
    description: string;
  }

  const CommitteeCard = ({ committee, index }: { committee: Committee; index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group"
      >
        <motion.div
          className="relative bg-forest-950/40 backdrop-blur-md border border-accent-gold/20 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:border-accent-gold/50 h-full flex flex-col hover:shadow-2xl hover:shadow-accent-gold/5 overflow-hidden group-hover:scale-[1.02]"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-accent-gold/10 transition-colors duration-500" />
          
          {/* Header - Logo + Name */}
          <div className="flex flex-col items-center text-center gap-4 mb-6 relative z-10">
            {/* Sigil/Logo Placeholder */}
            <div className="relative">
              <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-forest-800 to-forest-950 border border-accent-gold/30 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl font-bold text-accent-gold font-display tracking-wider">
                  {committee.name
                    .split(' ')
                    .filter((word: string) => !['and', 'for', 'of', 'the'].includes(word.toLowerCase()))
                    .map((word: string) => word[0])
                    .join('')
                    .slice(0, 3)}
                </span>
              </div>
            </div>

            {/* Committee Name */}
            <div className="mt-2">
              <h3 className="text-xl font-bold font-display text-white leading-tight group-hover:text-accent-gold transition-colors duration-300">
                {committee.name}
              </h3>
              <div className="h-0.5 w-12 bg-accent-gold/30 mx-auto mt-3 group-hover:w-24 transition-all duration-500" />
            </div>
          </div>

          {/* Agenda Topic Section */}
          <div className="flex-grow relative z-10 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold">Agenda Topic</span>
              <div className="h-px flex-grow bg-accent-gold/10" />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed font-light italic">
              "{committee.description}"
            </p>
          </div>

          {/* Footer - Difficulty Badge */}
          <div className="mt-8 pt-6 border-t border-accent-gold/10 relative z-10 flex justify-between items-center">
            <div
              className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold border transition-colors duration-300 ${
                committee.difficulty === 'Advanced' 
                  ? 'text-red-400 border-red-400/30 bg-red-400/5' 
                  : committee.difficulty === 'Intermediate'
                  ? 'text-blue-400 border-blue-400/30 bg-blue-400/5'
                  : 'text-green-400 border-green-400/30 bg-green-400/5'
              }`}
            >
              {committee.difficulty}
            </div>
            <div className="flex items-center text-[10px] text-gray-500 uppercase tracking-tighter group-hover:text-accent-gold transition-colors gap-1">
              Details <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen py-16 relative">
      {/* Background gradient - subtle */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-accent-gold" />
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">
            Committees
          </h1>
          <p className="text-xl text-accent-gold font-display mb-2">
            {committees.length} Committees
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose your committee and engage in high-level diplomatic discussions.
          </p>
        </motion.div>

        {/* Committees Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20"
        >
          {committees.map((committee, index) => (
            <CommitteeCard
              key={committee.name}
              committee={committee}
              index={index}
            />
          ))}
        </motion.div>

        {/* Register CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-forest-950/40 border border-accent-gold/20 rounded-2xl p-12 backdrop-blur-sm max-w-3xl mx-auto relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <h2 className="font-display text-3xl font-bold text-white mb-4 relative z-10">
            Ready to Take the Floor?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
            Secure your spot in IGACMUN Session III and join delegates from around the world in these committees.
          </p>
          <div className="relative z-10">
            <Button variant="thorn" size="lg" asChild className="min-w-[200px]">
              <a href="/register">Register Now</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
