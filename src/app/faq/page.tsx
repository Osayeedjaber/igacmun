"use client"

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronDown, Users, CreditCard, Calendar, Shield, Award, Crown, HelpCircle, ExternalLink, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { appConfig } from '@/lib/config'

const iconMap: Record<string, React.ElementType> = {
  Users,
  CreditCard,
  Calendar,
  Shield,
  Award,
  Crown
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set())

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.toLowerCase()
    
    return appConfig.faqs.map(category => ({
      ...category,
      questions: category.questions.filter(q => 
        q.q.toLowerCase().includes(query) || q.a.toLowerCase().includes(query)
      )
    })).filter(category => 
      selectedCategory === null || category.category === selectedCategory
    ).filter(category => category.questions.length > 0)
  }, [searchQuery, selectedCategory])

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenQuestions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(key)) {
        newSet.delete(key)
      } else {
        newSet.add(key)
      }
      return newSet
    })
  }

  const isQuestionOpen = (categoryIndex: number, questionIndex: number) => {
    return openQuestions.has(`${categoryIndex}-${questionIndex}`)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <HelpCircle className="h-20 w-20 text-accent-gold" />
              <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Everything you need to know about IGACMUN Session III. Can't find your answer? 
            <a href="/contact" className="text-accent-gold hover:underline ml-1">
              Contact our team
            </a>
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto relative"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/20 via-accent-gold/5 to-accent-gold/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-card border-2 border-accent-gold/30 rounded-xl focus:border-accent-gold/50 focus:outline-none text-foreground placeholder-muted-foreground transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-gradient-to-r from-accent-gold to-accent-gold/80 text-forest-950 shadow-lg shadow-accent-gold/30'
                  : 'bg-card border border-accent-gold/30 text-foreground hover:border-accent-gold/50'
              }`}
            >
              All Topics
            </motion.button>
            {appConfig.faqs.map((category, index) => {
              const Icon = iconMap[category.icon] || HelpCircle
              return (
                <motion.button
                  key={category.category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  onClick={() => setSelectedCategory(category.category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.category
                      ? 'bg-gradient-to-r from-accent-gold to-accent-gold/80 text-forest-950 shadow-lg shadow-accent-gold/30'
                      : 'bg-card border border-accent-gold/30 text-foreground hover:border-accent-gold/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.category}</span>
                  <span className="sm:hidden">{category.category.split(' ')[0]}</span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* FAQ Content */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((category, categoryIndex) => {
                const Icon = iconMap[category.icon] || HelpCircle
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="relative"
                  >
                    {/* Category Header */}
                    <div className="bg-gradient-to-r from-accent-gold/10 via-accent-gold/5 to-transparent border-l-4 border-accent-gold rounded-xl p-6 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-accent-gold/20 rounded-xl">
                          <Icon className="h-6 w-6 text-accent-gold" />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-bold text-foreground">
                            {category.category}
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            {category.questions.length} {category.questions.length === 1 ? 'question' : 'questions'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Questions */}
                    <div className="space-y-4">
                      {category.questions.map((question, questionIndex) => {
                        const isOpen = isQuestionOpen(categoryIndex, questionIndex)
                        
                        return (
                          <motion.div
                            key={questionIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: questionIndex * 0.05 }}
                            className="group"
                          >
                            <button
                              onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                              className="w-full bg-card border border-accent-gold/20 rounded-xl p-6 hover:border-accent-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/10"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1 text-left">
                                  <h3 className="font-semibold text-foreground text-base sm:text-lg pr-4 group-hover:text-accent-gold transition-colors duration-300">
                                    {question.q}
                                  </h3>
                                </div>
                                <motion.div
                                  animate={{ rotate: isOpen ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="flex-shrink-0"
                                >
                                  <ChevronDown className="h-5 w-5 text-accent-gold" />
                                </motion.div>
                              </div>
                              
                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="pt-4 mt-4 border-t border-accent-gold/20">
                                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                        {question.a}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </button>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )
              })
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-16"
              >
                <div className="inline-block p-6 bg-card border border-accent-gold/20 rounded-2xl mb-6">
                  <Search className="h-16 w-16 text-muted-foreground mx-auto" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  No Results Found
                </h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any FAQs matching "{searchQuery}". Try different keywords or browse by category.
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-accent-gold/10 via-card to-forest-700/10 border-2 border-accent-gold/30 rounded-2xl p-8 sm:p-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-accent-gold/20 rounded-2xl">
              <Mail className="h-12 w-12 text-accent-gold" />
            </div>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is here to help! Reach out to us and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="thorn" size="lg" asChild>
              <a href="/contact" className="group">
                Contact Support
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/register">
                Register Now
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { title: "Registration Guide", href: "/register", icon: Users },
            { title: "Committee Information", href: "/session-3/committees", icon: Shield },
            { title: "Schedule", href: "/session-3/schedule", icon: Calendar },
            { title: "Contact Us", href: "/contact", icon: Mail }
          ].map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.title}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group p-6 bg-card border border-accent-gold/20 rounded-xl hover:border-accent-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/10"
              >
                <Icon className="h-8 w-8 text-accent-gold mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-foreground text-sm sm:text-base group-hover:text-accent-gold transition-colors duration-300">
                  {link.title}
                </h3>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
