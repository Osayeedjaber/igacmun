"use client"

import React, { useRef, useState, useCallback, useMemo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

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

export function ExecutiveTeam() {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState(false)

    React.useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 768)
        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
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
    )
}
