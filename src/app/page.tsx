"use client"

import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Calendar, MapPin, Award, Target, Globe, Handshake, Lightbulb, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LeadershipCard } from '@/components/ui/leadership-card'
import { Countdown } from '@/components/ui/countdown'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import { ElegantBackground, ElegantDivider } from '@/components/ui/elegant-background'
import { Logo } from '@/components/ui/logo'
import { appConfig } from '@/lib/config'
import { isRevealed } from '@/lib/utils'

// Executive Team Component with Optimized Performance
interface ExecutiveTeamMember {
  name: string;
  title: string;
  image: string;
}

const ExecutiveTeamCard = React.memo<{ leader: ExecutiveTeamMember; index: number }>(({ leader, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true)
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex-shrink-0 w-72 sm:w-80 snap-center"
    >
      <div className="relative group cursor-pointer">
        <div className="relative h-96 rounded-2xl overflow-hidden bg-forest-800/50">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-gold"></div>
            </div>
          )}
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            sizes="(max-width: 768px) 280px, 320px"
            className={`object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            {...(index < 2 ? { priority: true } : { loading: "lazy" })}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/20 to-transparent" />
          
          {/* Text overlay with blur background */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <div className="backdrop-blur-md bg-forest-900/60 rounded-lg p-3 sm:p-4 border border-accent-gold/20">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {leader.name}
              </h3>
              <p className="text-accent-gold font-medium text-xs sm:text-sm">
                {leader.title}
              </p>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-accent-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </motion.div>
  )
})

ExecutiveTeamCard.displayName = 'ExecutiveTeamCard'

export default function Home() {
  const { leadership, event, reveals, venue, committees } = appConfig
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showScrollArrow, setShowScrollArrow] = useState(true)

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    // Hide arrow after scrolling 20% of viewport height
    setShowScrollArrow(scrollPosition < windowHeight * 0.2)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])


  // Memoized Executive Team Data for Performance
  const executiveTeam = useMemo(() => [
    {
      name: "ABID FAHAD KHAN",
      title: "GENERAL SECRETARY",
      image: "/Joint secretaries/GENERAL SECRETARY _ ABID FAHAD KHAN.jpg"
    },
    {
      name: "FARHAT LAMISHA",
      title: "JOINT SECRETARY",
      image: "/Joint secretaries/joint secretar Farhat lamisha.jpg"
    },
    {
      name: "HUZAIFA ABRAR SAHAL",
      title: "JOINT SECRETARY",
      image: "/Joint secretaries/joint secretary HUZAIFA ABRAR SAHAL.jpg"
    },
    {
      name: "NUSRAT JAHAN",
      title: "JOINT SECRETARY",
      image: "/Joint secretaries/joint secretary NUSRAT JAHAN.jpg"
    },
    {
      name: "RAIYAN ABDULLAH",
      title: "ORGANIZING SECRETARY",
      image: "/Joint secretaries/ORGANIZING SECRETARY RAIYAN ABDULLAH.jpg"
    },
    {
      name: "MIFTAHUL JANNAT MUNTAHA",
      title: "ORGANIZING SECRETARY",
      image: "/Joint secretaries/ORGANIZING SECRETARY _ miftahul Jannat muntaha.jpg"
    },
    {
      name: "AREFIN ABIR SAAD",
      title: "ORGANIZING SECRETARY",
      image: "/Joint secretaries/ORGANIZING SECRETARY arefin abir saad.jpg"
    },
    {
      name: "AFSAN TALUKDER",
      title: "ORGANIZING SECRETARY",
      image: "/Joint secretaries/afsan talukder  ORGANIZING SECRETARY.jpg"
    }
  ], [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ElegantBackground variant="hero" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* IGACMUN Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Logo size="5xl" animated={false} showText={false} />
              <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl animate-pulse" />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6"
          >
            {event.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-display text-2xl md:text-4xl text-accent-gold mb-6"
          >
            {event.subtitle}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            {event.tagline}
          </motion.p>

          {/* Conference Dates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-accent-gold/50"></div>
              <Calendar className="h-5 w-5 text-accent-gold/70" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent-gold/50"></div>
            </div>
            <p className="text-lg md:text-xl text-foreground font-display font-semibold">
              19 - 21 December 2025
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="xl" variant="default" asChild>
                  <Link href="/session-3/register">
                    Register Now
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button variant="outline" size="xl" asChild>
                  <Link href="/session-3">
                    Learn More
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
        </div>

        {/* Scroll Arrow */}
        {showScrollArrow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
            onClick={() => {
              const nextSection = document.querySelector('section:nth-child(2)');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatType: "reverse"
            }}
            className="flex flex-col items-center group"
          >
            <ChevronDown className="h-8 w-8 text-accent-gold/70 group-hover:text-accent-gold transition-colors duration-300" />
            <motion.div
              animate={{ 
                scaleY: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatType: "reverse"
              }}
              className="w-px h-6 bg-gradient-to-b from-accent-gold/70 to-transparent mt-1"
            />
          </motion.div>
          
          {/* Scroll text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="text-xs text-accent-gold/60 mt-2 font-medium tracking-wider text-center"
          >
            SCROLL
          </motion.p>
          </motion.div>
        )}
      </section>


      {/* Elegant Divider */}
      <ElegantDivider variant="ornate" />

      {/* About IGAC Section */}
      <section className="py-24 relative">
        <ElegantBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold text-accent-gold mb-6">
              IGAC
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-display mb-4">
              International Global Affairs Council
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About IGAC Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 order-1"
            >
              <div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-6">
                  About Us
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The International Global Affairs Council (IGAC), founded on August 14, 2023, is a youth-led 
                  organization dedicated to empowering the next generation of leaders through diplomacy, 
                  entrepreneurship, and essential skills development.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  By fostering critical thinking, leadership, negotiation, and cross-cultural communication, 
                  IGAC equips young people to tackle global challenges and drive meaningful change.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a strong focus on collaboration, teamwork, and resilience, IGAC provides a platform 
                  for youth to engage in global discussions, overcome obstacles, and shape the future as 
                  confident change-makers.
                </p>
              </div>

              {/* IGAC Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Target, label: "Youth Leadership", desc: "Empowering next generation" },
                  { icon: Globe, label: "Global Impact", desc: "Tackling world challenges" },
                  { icon: Handshake, label: "Collaboration", desc: "Building partnerships" },
                  { icon: Lightbulb, label: "Innovation", desc: "Creative solutions" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 bg-card border border-accent-gold/20 rounded-lg hover:border-accent-gold/40 transition-colors duration-300 group"
                  >
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 0.6 }}
                      className="p-2 bg-accent-gold/10 rounded-full group-hover:bg-accent-gold/20 transition-colors duration-300"
                    >
                      <feature.icon className="h-5 w-5 text-accent-gold/70 group-hover:text-accent-gold transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-accent-gold text-sm">{feature.label}</div>
                      <div className="text-muted-foreground text-xs">{feature.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/about">
                      Learn More About IGAC
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* IGAC Members Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative order-2"
            >
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden group">
                <Image 
                  src="/events/members.jpg" 
                  alt="IGAC Team Members" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold bg-forest-900/60 px-3 py-2 rounded backdrop-blur-sm">
                    IGAC Team
                  </p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section className="py-24 relative">
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0"
          className="opacity-60"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Message from the President
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-accent-gold/20 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-800/20 to-forest-900/20 rounded-2xl" />
              
              {/* Quote marks */}
              <div className="absolute top-6 left-6 text-6xl text-accent-gold/20 font-serif leading-none">&ldquo;</div>
              <div className="absolute bottom-6 right-6 text-6xl text-accent-gold/20 font-serif leading-none rotate-180">&rdquo;</div>
              
              <div className="relative z-10 text-center">
                {/* President's photo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent-gold/40 shadow-xl"
                >
                  <Image 
                    src="/leadership/president.jpg" 
                    alt="Al Rashedul Farabi Subaru - President" 
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                    &ldquo;Welcome to IGACMUN Session III: Game of Thorns. As we gather once again to engage in 
                    diplomatic discourse, we embark on a journey that will challenge our perspectives, 
                    sharpen our minds, and forge the leaders of tomorrow.&rdquo;
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                    &ldquo;This session represents not just a conference, but a crucible where young minds 
                    will grapple with the world&apos;s most pressing challenges. Together, we will navigate 
                    the thorns of global politics to reach the roses of understanding and cooperation.&rdquo;
                  </p>
                </motion.div>

                {/* Signature */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 pt-6 border-t border-accent-gold/20"
                >
                  <p className="font-display text-xl font-semibold text-accent-gold mb-1">
                    Al Rashedul Farabi Subaru
                  </p>
                  <p className="text-muted-foreground">
                    President, IGACMUN Session III
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elegant Divider */}
      <ElegantDivider variant="minimal" />

      {/* Leadership Section */}
      <section className="py-24 relative">
        <ElegantBackground variant="section" />
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0"
          className="opacity-30"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The visionary leaders driving diplomatic excellence and shaping the future of Model United Nations
            </p>
          </motion.div>

          {/* Leadership Grid with Better Spacing */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-20">
            {leadership.map((leader, index) => (
              <div key={leader.name} className="flex-shrink-0">
                <LeadershipCard
                  name={leader.name}
                  role={leader.role}
                  photo={leader.photo}
                  description={leader.description}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/* Leadership Quote/Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                &ldquo;Together, we forge the path toward diplomatic excellence, empowering the next generation 
                of global leaders to tackle the world&apos;s most pressing challenges.&rdquo;
              </blockquote>
              <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto"></div>
            </div>
          </motion.div>

          {/* Organizing & Joint Secretaries Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="text-center mb-16">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Core of International Global Affairs Council
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The dedicated leadership team that manages everything and drives our mission forward
              </p>
            </div>

            {/* Horizontal Scrolling Leadership Cards with Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >

              {/* Infinite Scrollable Container */}
              <div className="relative overflow-hidden">
                <motion.div 
                  ref={scrollRef}
                  className="flex gap-6 pb-6"
                  animate={{ 
                    x: [-320 * executiveTeam.length, 0]
                  }}
                  transition={{
                    duration: executiveTeam.length * 8,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                  style={{ 
                    width: `${(executiveTeam.length * 3) * 320}px`,
                    willChange: "transform"
                  }}
                >
                  {/* Triple set for seamless infinite scroll */}
                  {executiveTeam.map((leader, index) => (
                    <ExecutiveTeamCard key={`first-${leader.name}`} leader={leader} index={index} />
                  ))}
                  {executiveTeam.map((leader, index) => (
                    <ExecutiveTeamCard key={`second-${leader.name}`} leader={leader} index={index} />
                  ))}
                  {executiveTeam.map((leader, index) => (
                    <ExecutiveTeamCard key={`third-${leader.name}`} leader={leader} index={index} />
                  ))}
                </motion.div>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Elegant Divider */}
      <ElegantDivider variant="default" />

      {/* Quick Stats */}
      <section className="py-20 relative">
        <ElegantBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Expected Delegates", value: event.expectedDelegates },
              { icon: Award, label: "Committees", value: "TBA" },
              { icon: Calendar, label: "Days", value: "TBA" },
              { icon: MapPin, label: "Venue", value: venue.name },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className="bg-card border border-accent-gold/20 rounded-xl p-6 text-center hover:shadow-xl hover:shadow-accent-gold/20 transition-all duration-500 hover:border-accent-gold/40 group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-forest-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="p-4 bg-accent-gold/20 rounded-full group-hover:bg-accent-gold/30 transition-colors duration-300">
                      <stat.icon className="h-8 w-8 text-accent-gold" />
                    </div>
                  </motion.div>
                  <motion.div 
                    className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-accent-gold/90 transition-colors duration-300"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
                
                {/* Subtle decorative elements */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-accent-gold/20 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-accent-gold/30 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees Teaser */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Committees
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Engage in high-level diplomatic discussions across diverse global issues
            </p>
          </motion.div>

          {!isRevealed(reveals.committees.revealAt) ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              {/* Themed Committees Countdown */}
              <div className="bg-gradient-to-br from-forest-900/80 to-forest-800/80 border-2 border-accent-gold/30 rounded-2xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-forest-800/40 to-forest-900/40" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                      Committees
                    </h3>
                    <div className="w-16 h-px bg-accent-gold mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">
                      Select your arena for collaboration and impact
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <div className="bg-forest-950/60 border border-accent-gold/20 rounded-xl p-6 backdrop-blur-sm text-center">
                      {reveals.committees.enableCountdown ? (
                        <>
                          <p className="text-accent-gold font-semibold text-xl mb-4 tracking-wide">
                            COMMITTEES WILL BE REVEALED IN
                          </p>
                          
                          <Countdown
                            revealAt={reveals.committees.revealAt}
                            title=""
                            description=""
                            className="[&>div]:bg-gradient-to-br [&>div]:from-forest-700 [&>div]:to-forest-800 [&>div]:border-accent-gold/30 [&>div]:text-accent-gold"
                          />
                          
                          <p className="text-muted-foreground mt-6">
                            The diplomatic battlegrounds will be unveiled soon. Prepare for unprecedented challenges.
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-accent-gold font-semibold text-xl mb-4 tracking-wide">
                            COMMITTEES NOW AVAILABLE
                          </p>
                          <p className="text-muted-foreground mb-6">
                            Explore our diverse range of diplomatic committees and choose your battlefield.
                          </p>
                          
                          {/* Committees Preview */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {committees.slice(0, 3).map((committee, index) => (
                              <div key={committee.name} className="bg-forest-800/30 border border-accent-gold/20 rounded-lg p-4 hover:border-accent-gold/40 transition-colors duration-300">
                                <div className="text-center mb-3">
                                  <div className="w-8 h-8 mx-auto mb-2 rounded bg-accent-gold/20 flex items-center justify-center">
                                    <span className="text-accent-gold text-xs font-bold">
                                      {committee.name.split(' ').map((word) => word[0]).join('').slice(0, 2)}
                                    </span>
                                  </div>
                                  <h4 className="font-semibold text-foreground text-sm leading-tight">
                                    {committee.name}
                                  </h4>
                                </div>
                                <div className="text-center">
                                  <span className="text-xs text-accent-gold bg-accent-gold/10 px-2 py-1 rounded-full">
                                    {committee.difficulty}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <Button asChild variant="outline" className="border-accent-gold/30 text-accent-gold hover:bg-accent-gold/10">
                            <Link href="/session-3/committees">
                              View All Committees
                            </Link>
                          </Button>
                        </>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm"
                  >
                    {[
                      { icon: "🏛️", label: "10+ Committees", desc: "Diverse diplomatic arenas" },
                      { icon: "🌍", label: "Global Issues", desc: "Real-world challenges" },
                      { icon: "🎯", label: "All Levels", desc: "Beginner to Advanced" }
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-forest-800/40 border border-accent-gold/10 rounded-lg p-4 hover:border-accent-gold/30 transition-colors duration-300"
                      >
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <div className="font-semibold text-accent-gold mb-1">{item.label}</div>
                        <div className="text-muted-foreground text-xs">{item.desc}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Committee cards will be rendered here when revealed */}
            </div>
          )}
        </div>
      </section>

      {/* Venue Showcase */}
      <section className="py-24 bg-gradient-to-br from-background to-forest-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Venue
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience diplomatic excellence at one of Bangladesh&apos;s premier educational institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Venue Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden group">
                {/* AIUB Image */}
                <Image 
                  src="/aiub.jpg" 
                  alt="American International University-Bangladesh Campus" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold bg-forest-900/60 px-3 py-2 rounded backdrop-blur-sm">
                    {venue.fullName}
                  </p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Venue Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                  {venue.fullName}
                </h3>
                <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5 text-accent-gold" />
                  <span className="text-lg">{venue.address}</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  State-of-the-art facilities designed to host international conferences with 
                  modern amenities and professional environments. AIUB provides the perfect 
                  setting for diplomatic excellence.
                </p>
              </div>

              {/* Venue Features */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "Conference Halls" },
                  { icon: Award, label: "Modern AV Systems" },
                  { icon: Calendar, label: "Professional Setup" },
                  { icon: MapPin, label: "Central Location" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 bg-card border border-accent-gold/20 rounded-lg"
                  >
                    <feature.icon className="h-5 w-5 text-accent-gold" />
                    <span className="text-sm font-medium text-foreground">{feature.label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <Button variant="outline" size="lg" asChild>
                  <Link href="/session-3/venue">
                    Explore Venue Details
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Session II Legacy */}
      <section className="py-24 bg-forest-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building on Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              IGACMUN Session II set the gold standard for MUN conferences in South East Asia
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Session II Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-accent-gold/20 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/logo (1).png"
                    alt="IGACMUN Session 2 Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    IGACMUN Session II
                  </h3>
                  <p className="text-accent-gold font-medium">
                    The Largest MUN in South East Asia
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* IGACMUN II Image */}
                <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden mb-4 group">
                  <Image 
                    src="/events/igacmunbannerjpg.jpg" 
                    alt="IGACMUN Session II Conference" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-medium bg-forest-900/60 px-2 py-1 rounded backdrop-blur-sm">
                      IGACMUN Session II
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Our previous session broke all records, hosting over 1700 delegates from across 
                  the region. It established new benchmarks for diplomatic simulation and 
                  international cooperation among youth.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Delegates", value: "1700+" },
                    { label: "Committees", value: "12" },
                    { label: "Countries", value: "15+" },
                    { label: "Awards", value: "50+" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-3 bg-forest-950/30 rounded-lg"
                    >
                      <div className="font-display text-xl font-bold text-accent-gold">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-6 text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/events">
                        Explore Past Events
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}
