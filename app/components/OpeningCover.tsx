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
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-cream overflow-hidden"
    >
      {/* Wavy Top Border */}
      <div className="w-full h-16 wavy-border relative z-20 flex justify-center pt-2">
         <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-8 bg-maroon-dark rounded-full opacity-30" />
            ))}
         </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center w-full px-6 space-y-8 relative z-10">
        
        <div className="text-center space-y-2">
          <p className="text-xs font-heading tracking-[0.4em] text-maroon uppercase">The Wedding of</p>
          <h1 className="text-5xl md:text-6xl font-heading text-maroon-dark gold-text-shimmer">
            MONA & HENDRA
          </h1>
        </div>

        {/* Oval Frame Image */}
        <div className="relative w-64 md:w-80">
          <div className="oval-frame relative">
            <Image
              src="/minang-couple.png"
              alt="Mona & Hendra"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Guest Name Pill */}
        <div className="space-y-3 text-center">
          <p className="text-[10px] font-heading uppercase tracking-[0.4em] text-maroon/40">Special to:</p>
          <div className="bg-white/80 backdrop-blur-sm px-10 py-3 rounded-full shadow-lg border border-gold/30 inline-block">
            <p className="text-maroon font-heading font-bold text-xl">{guestName}</p>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex gap-6 md:gap-10 py-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center relative">
              <p className="text-3xl md:text-4xl font-heading font-bold text-maroon-dark leading-none drop-shadow-sm">
                {value < 10 ? `0${value}` : value}
              </p>
              <p className="text-[9px] md:text-[11px] font-body uppercase tracking-[0.2em] text-gold-dark mt-2 font-bold">
                {unit === 'days' ? 'Hari' : unit === 'hours' ? 'Jam' : unit === 'minutes' ? 'Menit' : 'Detik'}
              </p>
            </div>
          ))}
        </div>

        {/* Open Button */}
        <button
          onClick={onOpen}
          className="px-12 py-4 bg-maroon text-cream rounded-full font-heading text-xs tracking-[0.3em] uppercase hover:bg-maroon-dark transition-all shadow-2xl flex items-center gap-3 group border border-gold/30"
        >
          <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          Buka Undangan
        </button>
      </div>

      {/* Bottom Rumah Gadang Silhouette */}
      <div className="w-full h-32 bg-rumah-gadang relative z-0 opacity-50" />
    </motion.section>
  )
}
