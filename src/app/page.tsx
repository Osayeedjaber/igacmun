"use client"

import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Calendar, MapPin, Award, Target, Globe, Handshake, Lightbulb, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LeadershipCard } from '@/components/ui/leadership-card'
import { Countdown } from '@/components/ui/countdown'
import { ElegantBackground } from '@/components/ui/elegant-background'
import { ShinyText } from '@/components/ui/shiny-text'
import { MagneticElement } from '@/components/ui/magnetic-element'
import { GlareCard } from '@/components/ui/glare-card'
import { SplitText } from '@/components/ui/split-text'
import { BentoGrid, BentoCard } from '@/components/ui/magic-bento'
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
      className="flex-shrink-0 w-64 sm:w-72 md:w-80 snap-center"
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
  const [mounted, setMounted] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showScrollArrow, setShowScrollArrow] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    // Hide arrow after scrolling 20% of viewport height
    setShowScrollArrow(scrollPosition < windowHeight * 0.2)
  }, [])

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    onResize()
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Memoized Executive Team Data for Performance
  const executiveTeam = useMemo(() => [
    {
      name: "ABID FAHAD KHAN",
      title: "GENERAL SECRETARY",
      image: "/Joint secretaries/GENERAL SECRETARY _ ABID FAHAD KHAN.jpg"
    },
    {
      name: "HUZAIFA ABRAR SAHAL",
      title: "ADDITIONAL GENERAL SECRETARY",
      image: "/Joint secretaries/joint secretary HUZAIFA ABRAR SAHAL.jpg"
    },
    {
      name: "AREEB FAROOQUI",
      title: "ADDITIONAL GENERAL SECRETARY",
      image: "/Joint secretaries/areeb farooqui.jpg ADDITIONAL GENERAL SECRETARY.JPG"
    },
    {
      name: "FARHAT LAMISHA",
      title: "JOINT SECRETARY",
      image: "/Joint secretaries/joint secretar Farhat lamisha.jpg"
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
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                <Image
                  src="/logo.png"
                  alt="IGACMUN Logo"
                  width={320}
                  height={320}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-2xl animate-pulse" />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 px-4"
          >
            {event.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-display text-lg sm:text-xl md:text-3xl text-accent-gold mb-6 px-4"
          >
            {event.subtitle}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-sm sm:text-base md:text-lg text-accent-gold font-semibold max-w-3xl mx-auto mb-8 px-4"
          >
            United | Transformation | Innovation
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
            <p className="text-sm sm:text-base md:text-lg text-foreground font-display font-semibold">
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
              <MagneticElement strength={0.15}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button size="xl" variant="default" asChild>
                    <Link href="/register">
                      Register Now
                    </Link>
                  </Button>
                </motion.div>
              </MagneticElement>
              <MagneticElement strength={0.15}>
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
              </MagneticElement>
            </motion.div>
        </div>

        {/* Scroll Arrow */}
        {showScrollArrow && !isMobile && (
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
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <ShinyText className="text-accent-gold">IGAC</ShinyText>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-display mb-4">
              <SplitText>International Global Affairs Council</SplitText>
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
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  About Us
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  The International Global Affairs Council (IGAC), founded on August 14, 2023, is a youth-led 
                  organization dedicated to empowering the next generation of leaders through diplomacy, 
                  entrepreneurship, and essential skills development.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  By fostering critical thinking, leadership, negotiation, and cross-cultural communication, 
                  IGAC equips young people to tackle global challenges and drive meaningful change.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  With a strong focus on collaboration, teamwork, and resilience, IGAC provides a platform 
                  for youth to engage in global discussions, overcome obstacles, and shape the future as 
                  confident change-makers.
                </p>
              </div>

              {/* IGAC Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Target, label: "Youth Leadership", desc: "Empowering next generation", color: "from-blue-500/20 to-blue-600/5", borderColor: "border-blue-400/40", iconBg: "bg-blue-500/20", iconColor: "text-blue-400", textColor: "text-blue-400" },
                  { icon: Globe, label: "Global Impact", desc: "Tackling world challenges", color: "from-green-500/20 to-green-600/5", borderColor: "border-green-400/40", iconBg: "bg-green-500/20", iconColor: "text-green-400", textColor: "text-green-400" },
                  { icon: Handshake, label: "Collaboration", desc: "Building partnerships", color: "from-purple-500/20 to-purple-600/5", borderColor: "border-purple-400/40", iconBg: "bg-purple-500/20", iconColor: "text-purple-400", textColor: "text-purple-400" },
                  { icon: Lightbulb, label: "Innovation", desc: "Creative solutions", color: "from-amber-500/20 to-amber-600/5", borderColor: "border-amber-400/40", iconBg: "bg-amber-500/20", iconColor: "text-amber-400", textColor: "text-amber-400" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center space-x-3 p-3 bg-gradient-to-br ${feature.color} border ${feature.borderColor} rounded-lg hover:shadow-lg transition-all duration-300 group`}
                  >
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 0.6 }}
                      className={`p-2 ${feature.iconBg} rounded-full group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className={`h-5 w-5 ${feature.iconColor} transition-colors duration-300`} />
                    </motion.div>
                    <div>
                      <div className={`font-semibold ${feature.textColor} text-sm`}>{feature.label}</div>
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
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold bg-forest-900/60 px-3 py-2 rounded backdrop-blur-sm">
                    The IGAC Family
                  </p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* President's Message - Clean & Mobile Optimized */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <ElegantBackground variant="section" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
              A Message from the President
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto"></div>
          </motion.div>

          {/* Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Card Container */}
            <div className="bg-gradient-to-br from-forest-900/40 to-forest-800/40 backdrop-blur-sm border border-accent-gold/30 rounded-2xl p-6 md:p-10 shadow-2xl">
              
              {/* President Photo */}
              <div className="flex justify-center mb-6">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-accent-gold/50 shadow-lg">
                  <Image 
                    src="/leadership/president.jpg" 
                    alt="Al Rashidus Sabru Farabi - President" 
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Message Content */}
              <div className="space-y-6 text-center max-w-4xl mx-auto">
                <div className="relative">
                  <span className="absolute -top-4 -left-2 md:-left-4 text-6xl md:text-7xl text-accent-gold/20 font-serif">&ldquo;</span>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-6 md:px-8">
                    Welcome to IGACMUN Session III. As we gather once again to engage in 
                    diplomatic discourse, we embark on a journey that will challenge our perspectives, 
                    sharpen our minds, and forge the leaders of tomorrow.
                  </p>
                </div>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-6 md:px-8">
                  This session represents not just a conference, but a crucible where young minds 
                  will grapple with the world&apos;s most pressing challenges. Together, we will navigate 
                  the thorns of global politics to reach the roses of understanding and cooperation.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-accent-gold/20 text-center">
                <p className="font-display text-xl md:text-2xl font-bold text-accent-gold mb-2">
                  Al Rashidus Sabru Farabi
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  General Secretary, IGACMUN SESSION III
                </p>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-accent-gold/30 rounded-tr"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-accent-gold/30 rounded-bl"></div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Leadership Section - Redesigned with President Center */}
      <section className="py-16 md:py-24 relative">
        <ElegantBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
              The visionary leaders driving diplomatic excellence and shaping the future of Model United Nations
            </p>
          </motion.div>

          {/* Leadership Layout - President in Center, Bigger */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Chairman - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full sm:w-80 lg:w-72"
            >
              <GlareCard>
                <LeadershipCard
                  name={leadership[1].name}
                  role={leadership[1].role}
                  photo={leadership[1].photo}
                  description={leadership[1].description}
                  index={1}
                />
              </GlareCard>
            </motion.div>

            {/* President - Center, Bigger */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full sm:w-96 lg:w-80 lg:scale-110 z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent-gold/20 rounded-2xl blur-2xl" />
                <GlareCard intensity={0.7}>
                  <LeadershipCard
                    name={leadership[0].name}
                    role={leadership[0].role}
                    photo={leadership[0].photo}
                    description={leadership[0].description}
                    index={0}
                  />
                </GlareCard>
              </div>
            </motion.div>

            {/* Co-chairman - Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full sm:w-80 lg:w-72"
            >
              <GlareCard>
                <LeadershipCard
                  name={leadership[2].name}
                  role={leadership[2].role}
                  photo={leadership[2].photo}
                  description={leadership[2].description}
                  index={2}
                />
              </GlareCard>
            </motion.div>
          </div>

          {/* Leadership Quote/Mission - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16 md:mt-20"
          >
            <div className="max-w-4xl mx-auto px-4">
              <blockquote className="text-sm sm:text-base md:text-lg text-muted-foreground italic leading-relaxed">
                &ldquo;Together, we forge the path toward diplomatic excellence, empowering the next generation 
                of global leaders to tackle the world&apos;s most pressing challenges.&rdquo;
              </blockquote>
              <div className="mt-4 sm:mt-6 h-px w-16 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto"></div>
            </div>
          </motion.div>

          {/* The Core Section - Infinite Carousel (disabled on mobile for smoother scroll) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 md:mt-32"
          >
            {/* Core Header with Hover Effect */}
            <div className="text-center mb-12">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 group cursor-default">
                The <span className="transition-colors duration-300 group-hover:text-accent-gold">Core</span> of IGAC
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-4" />
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                The dedicated leadership team at the heart of our mission
              </p>
            </div>

            {/* Infinite Scrolling Carousel (desktop) / Scrollable list (mobile) */}
            {isMobile ? (
              <div className="relative overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
                <div className="flex gap-4 will-change-transform">
                  {executiveTeam.map((leader, index) => (
                    <ExecutiveTeamCard key={`mobile-${leader.name}`} leader={leader} index={index} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden">
                <motion.div 
                  ref={carouselRef}
                  className="flex gap-4 sm:gap-6 pb-6 will-change-transform"
                  animate={{ 
                    x: [-(280 * executiveTeam.length), 0]
                  }}
                  transition={{
                    duration: executiveTeam.length * 8,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                  style={{ 
                    width: `${(executiveTeam.length * 3) * 280}px`
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
            )}
          </motion.div>
        </div>
      </section>



      {/* Quick Stats */}
      <section className="py-20 relative">
        <ElegantBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Total Delegates", value: "4,000+" },
              { icon: Award, label: "Committees", value: "10" },
              { icon: Calendar, label: "Days", value: "3" },
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

          {!(mounted && isRevealed(reveals.committees.revealAt)) ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-forest-900/80 to-forest-800/80 border border-accent-gold/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-forest-800/30 to-forest-900/30" />
                
                <div className="relative z-10 text-center">
                  {reveals.committees.enableCountdown ? (
                    <>
                      <p className="text-accent-gold font-semibold text-xl mb-4">
                        Committee Details Coming Soon
                      </p>
                      
                      <Countdown
                        revealAt={reveals.committees.revealAt}
                        title=""
                        description=""
                      />
                      
                      <p className="text-muted-foreground mt-6">
                        Information about all 10 committees will be announced soon.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-accent-gold font-semibold text-xl mb-4">
                        Committees Now Available
                      </p>
                      <p className="text-muted-foreground mb-6">
                        Explore our diverse range of diplomatic committees covering global issues.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {committees.slice(0, 3).map((committee) => (
                          <div key={committee.name} className="bg-forest-800/30 border border-accent-gold/20 rounded-lg p-4 hover:border-accent-gold/40 transition-colors">
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
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
              <BentoGrid className="grid-cols-2 gap-3">
                {[
                  { icon: Users, label: "Conference Halls", desc: "Spacious venues" },
                  { icon: Award, label: "Modern AV Systems", desc: "Latest technology" },
                  { icon: Calendar, label: "Professional Setup", desc: "Expert arrangement" },
                  { icon: MapPin, label: "Central Location", desc: "Easy access" }
                ].map((feature, index) => (
                  <BentoCard key={feature.label} index={index} className="p-4">
                    <div className="flex flex-col space-y-2">
                      <feature.icon className="h-6 w-6 text-accent-gold" />
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">{feature.label}</h4>
                        <p className="text-xs text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  </BentoCard>
                ))}
              </BentoGrid>

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
                    sizes="48px"
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
                    sizes="100vw"
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
