'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface OpeningCoverProps {
  onOpen: () => void
  guestName: string
}

export default function OpeningCover({ onOpen, guestName }: OpeningCoverProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2026-05-22T13:00:00').getTime()
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex flex-col bg-cream overflow-hidden h-screen"
    >
      {/* Wavy Top Border */}
      <div className="w-full h-10 md:h-16 wavy-border shrink-0 relative z-20 flex justify-center pt-1">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-4 md:h-8 bg-maroon-dark rounded-full opacity-30" />
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-between w-full px-6 py-4 md:py-10 relative z-10 overflow-hidden">
        
        <div className="text-center space-y-0 md:space-y-2">
          <p className="text-[7px] md:text-[10px] font-heading tracking-[0.5em] text-maroon uppercase opacity-60">The Wedding of</p>
          <h1 className="text-3xl md:text-7xl font-heading text-maroon-dark gold-text-shimmer leading-tight">
            MONA & HENDRA
          </h1>
        </div>

        {/* Oval Frame Image - Shrunk for mobile */}
        <div className="relative w-40 md:w-80 shrink-0">
          <div className="oval-frame relative aspect-[4/5] w-full">
            <Image
              src="/minang-couple.png"
              alt="Mona & Hendra"
              fill
              priority
              sizes="(max-width: 768px) 160px, 320px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Guest Name Pill */}
        <div className="space-y-1 md:space-y-4 text-center">
          <p className="text-[7px] md:text-[10px] font-heading uppercase tracking-[0.4em] text-maroon/40">Special to:</p>
          <div className="bg-white/80 backdrop-blur-sm px-6 py-2 md:px-10 md:py-3 rounded-full shadow-xl border border-gold/30 inline-block">
            <p className="text-maroon font-heading font-bold text-sm md:text-2xl">{guestName}</p>
          </div>
        </div>

        {/* Open Button */}
        <div className="z-20">
          <button
            onClick={onOpen}
            className="px-10 py-3 md:px-14 md:py-4 bg-maroon text-cream rounded-full font-heading text-[10px] md:text-xs tracking-[0.3em] uppercase hover:bg-maroon-dark transition-all shadow-2xl flex items-center gap-3 group border border-gold/30 active:scale-95"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Buka Undangan
          </button>
        </div>
      </div>

      {/* Bottom Rumah Gadang Silhouette */}
      <div className="absolute bottom-0 w-full h-20 md:h-32 bg-rumah-gadang z-0 opacity-30 pointer-events-none" />
    </motion.section>
  )
}
