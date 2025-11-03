"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Heart, MessageCircle, Share2, Bookmark, ExternalLink } from 'lucide-react'
import { appConfig } from '@/lib/config'

export function SocialFeed() {
  const { social } = appConfig

  // Sample Instagram-style posts
  const instagramPosts = [
    {
      image: "/aiub.jpg",
      likes: "324",
      caption: "IGACMUN Session III venue reveal! 🏛️ Get ready for an unforgettable experience at AIUB. Registration now open!",
      time: "2 days ago"
    },
    {
      image: "/leadership/president.jpg", 
      likes: "567",
      caption: "Meet our President leading Session III! Excellence in diplomacy awaits. #IGACMUN2025",
      time: "5 days ago"
    }
  ]

  // Sample Facebook-style posts
  const facebookPosts = [
    {
      text: "📢 Registration for IGACMUN Session III is NOW OPEN! Don't miss your chance to be part of South East Asia's largest MUN conference. December 19-21, 2025 at AIUB. Register today!",
      reactions: 145,
      comments: 23,
      shares: 12,
      time: "3 days ago"
    },
    {
      text: "🎯 Session II was a massive success with 1700+ delegates! Session III is going to be even bigger. Are you ready to make history? #IGACMUN #DiplomacyMeetsDestiny",
      reactions: 298,
      comments: 41,
      shares: 28,
      time: "1 week ago"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Instagram Feed */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-orange-500/10 border border-pink-500/30 rounded-2xl overflow-hidden"
      >
        <div className="p-6 border-b border-pink-500/30 bg-card/50 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-xl">
                <Instagram className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Instagram</h3>
                <p className="text-sm text-muted-foreground">@igac.official_</p>
              </div>
            </div>
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-orange-500/20 hover:from-pink-500/30 hover:to-orange-500/30 border border-pink-500/30 rounded-lg transition-all duration-300 group"
            >
              <span className="text-sm font-medium text-foreground">Follow</span>
              <ExternalLink className="h-4 w-4 text-pink-500 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Instagram Posts */}
        <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
          {instagramPosts.map((post, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm border border-pink-500/20 rounded-xl overflow-hidden">
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-full flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">@igac.official_</p>
                    <p className="text-xs text-muted-foreground">{post.time}</p>
                  </div>
                </div>
              </div>
              
              {/* Post Image */}
              <div className="relative aspect-square bg-gradient-to-br from-pink-500/5 to-orange-500/5">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                  📸 {post.caption.split(' ').slice(0, 3).join(' ')}...
                </div>
              </div>
              
              {/* Post Actions */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Heart className="h-6 w-6 text-pink-500 hover:scale-110 transition-transform cursor-pointer" />
                    <MessageCircle className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                    <Share2 className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                  </div>
                  <Bookmark className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                </div>
                <p className="font-semibold text-foreground text-sm">{post.likes} likes</p>
                <p className="text-sm text-foreground">
                  <span className="font-semibold">@igac.official_ </span>
                  <span className="text-muted-foreground">{post.caption}</span>
                </p>
              </div>
            </div>
          ))}
          
          {/* View More */}
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 text-pink-500 hover:text-pink-400 font-semibold transition-colors"
          >
            View all posts on Instagram →
          </a>
        </div>
      </motion.div>

      {/* Facebook Feed */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-blue-700/10 border border-blue-500/30 rounded-2xl overflow-hidden"
      >
        <div className="p-6 border-b border-blue-500/30 bg-card/50 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Facebook className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Facebook</h3>
                <p className="text-sm text-muted-foreground">IGAC Official</p>
              </div>
            </div>
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-all duration-300 group"
            >
              <span className="text-sm font-medium text-foreground">Follow</span>
              <ExternalLink className="h-4 w-4 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Facebook Posts */}
        <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
          {facebookPosts.map((post, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden p-4">
              {/* Post Header */}
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full flex items-center justify-center">
                  <Facebook className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">IGAC Official</p>
                  <p className="text-xs text-muted-foreground">{post.time}</p>
                </div>
              </div>
              
              {/* Post Content */}
              <p className="text-sm text-foreground mb-4">{post.text}</p>
              
              {/* Post Stats */}
              <div className="flex items-center justify-between pt-3 border-t border-blue-500/20">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Heart className="h-4 w-4 text-blue-500" />
                    <span>{post.reactions}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Share2 className="h-4 w-4" />
                    <span>{post.shares}</span>
                  </span>
                </div>
              </div>
              
              {/* Post Actions */}
              <div className="flex items-center justify-around pt-3 mt-3 border-t border-blue-500/20">
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-blue-500 transition-colors px-4 py-2 rounded-lg hover:bg-blue-500/10">
                  <Heart className="h-5 w-5" />
                  <span className="text-sm font-medium">Like</span>
                </button>
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-blue-500 transition-colors px-4 py-2 rounded-lg hover:bg-blue-500/10">
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">Comment</span>
                </button>
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-blue-500 transition-colors px-4 py-2 rounded-lg hover:bg-blue-500/10">
                  <Share2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </div>
          ))}
          
          {/* View More */}
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 text-blue-500 hover:text-blue-400 font-semibold transition-colors"
          >
            View all posts on Facebook →
          </a>
        </div>
      </motion.div>
    </div>
  )
}
