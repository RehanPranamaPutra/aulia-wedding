'use client'

import { motion } from 'framer-motion'

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-maroon overflow-hidden"
    >
      {/* Background pattern layer */}
      <div className="absolute inset-0 bg-[url('/songket-pattern.png')] bg-repeat bg-fixed mix-blend-overlay opacity-60" />

      <div className="relative z-10 text-center space-y-8 bg-maroon-dark/50 backdrop-blur-sm p-12 rounded-full border-2 border-gold/30">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-8 bg-gold/50" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold fill-gold/20" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <div className="h-[1px] w-8 bg-gold/50" />
          </div>
          
          <div className="space-y-2">
            <p className="text-cream/80 font-body tracking-[0.3em] uppercase text-[10px]">
              Aulia Invitation
            </p>
            <h1 className="text-4xl font-script text-gold-light gold-shimmer drop-shadow-md">
              Mona & Hendra
            </h1>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
