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
      className="fixed inset-0 z-50 flex flex-col bg-cream overflow-hidden h-[100dvh]"
    >
      {/* Wavy Top Border */}
      <div className="w-full h-16 wavy-border shrink-0 relative z-20 flex justify-center pt-2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-8 bg-maroon-dark rounded-full opacity-30" />
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-between w-full px-6 pt-4 pb-12 md:py-10 relative z-10">
        
        <div className="text-center space-y-2 shrink-0">
          <p className="text-[10px] font-heading tracking-[0.5em] text-maroon uppercase opacity-60">The Wedding of</p>
          <h1 className="text-5xl md:text-7xl font-heading text-maroon-dark gold-text-shimmer leading-tight">
            MONA & HENDRA
          </h1>
        </div>

        {/* Oval Frame Image - Restored to original size but responsive */}
        <div className="relative w-64 md:w-80 shrink-0">
          <div className="oval-frame relative aspect-[4/5] w-full">
            <Image
              src="/minang-couple-v2.png"
              alt="Mona & Hendra"
              fill
              priority
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Guest Name Pill */}
        <div className="space-y-4 text-center shrink-0">
          <p className="text-[10px] font-heading uppercase tracking-[0.4em] text-maroon/40">Special to:</p>
          <div className="bg-white/80 backdrop-blur-sm px-10 py-3 rounded-full shadow-xl border border-gold/30 inline-block">
            <p className="text-maroon font-heading font-bold text-xl md:text-2xl">{guestName}</p>
          </div>
        </div>

        {/* Open Button */}
        <div className="shrink-0 z-20">
          <button
            onClick={onOpen}
            className="px-14 py-4 bg-maroon text-cream rounded-full font-heading text-xs tracking-[0.3em] uppercase hover:bg-maroon-dark transition-all shadow-2xl flex items-center gap-3 group border border-gold/30 active:scale-95"
          >
            <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Buka Undangan
          </button>
        </div>
      </div>

      {/* Bottom Rumah Gadang Silhouette */}
      <div className="absolute bottom-0 w-full h-32 bg-rumah-gadang z-0 opacity-40 pointer-events-none" />
    </motion.section>
  )
}
