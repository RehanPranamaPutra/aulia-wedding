'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function OpeningCover({ onOpen, guestName }: { onOpen: () => void; guestName: string }) {
  const [isOpening, setIsOpening] = useState(false)

  const handleOpen = () => {
    setIsOpening(true)
    setTimeout(onOpen, 1500)
  }

  return (
    <AnimatePresence>
      {!isOpening ? (
        <motion.div
          key="opening"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-maroon-dark/90 backdrop-blur-sm"
        >
          {/* Top Logo text like in TikTok */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-12 text-center w-full z-10"
          >
            <p className="text-gold text-xs font-body tracking-[0.3em] uppercase mb-1">Aulia Invitation</p>
            <p className="text-cream text-sm font-body">Undangan Website</p>
          </motion.div>

          {/* Archway Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-10/12 max-w-sm mt-12 bg-maroon rounded-t-full border-[6px] border-gold-light shadow-2xl overflow-hidden aspect-[3/4] flex flex-col items-center justify-end"
          >
            {/* The Couple Illustration inside the arch */}
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="relative w-full h-[85%]">
                <Image 
                  src="/minang-couple.png" 
                  alt="Mona & Hendra" 
                  fill 
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* Golden gradient overlay at the bottom so text is readable */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-maroon-dark via-maroon-dark/80 to-transparent" />

            {/* Archway Content */}
            <div className="relative z-10 text-center pb-8 w-full px-4">
              <h1 className="text-4xl md:text-5xl text-gold-light font-script mb-2 drop-shadow-md">
                Mona & Hendra
              </h1>
              <p className="text-cream text-xs font-body tracking-[0.2em] uppercase mb-4 opacity-90">
                22 — 23 Mei 2026
              </p>
            </div>
          </motion.div>

          {/* Guest name & Open button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 text-center z-10 w-full"
          >
            <p className="text-gold/80 text-[10px] tracking-widest uppercase mb-1 font-body">Kepada Yth.</p>
            <p className="text-cream text-xl font-heading font-bold mb-6">{guestName}</p>

            <button
              onClick={handleOpen}
              className="px-10 py-3 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-maroon-dark rounded-full font-body text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,168,67,0.4)]"
            >
              Buka Undangan
            </button>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="transition"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-maroon-dark"
        />
      )}
    </AnimatePresence>
  )
}
