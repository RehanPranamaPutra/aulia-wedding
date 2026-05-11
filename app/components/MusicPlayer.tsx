'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer({ isPlaying: startPlaying }: { isPlaying: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (startPlaying) {
      setIsPlaying(true)
      audioRef.current?.play().catch(err => console.log("Autoplay blocked:", err))
    }
  }, [startPlaying])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/ssstik.io_1778480919285.mp3"
        loop
      />
      
      <AnimatePresence>
        {startPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-6 left-6 z-[60]"
          >
            <button
              onClick={togglePlay}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xl border-2 border-gold/30 transition-all duration-500 ${
                isPlaying ? 'bg-maroon rotate-360' : 'bg-maroon-dark opacity-80'
              }`}
              style={{ 
                animation: isPlaying ? 'spin 5s linear infinite' : 'none' 
              }}
            >
              {isPlaying ? (
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            
            {/* Pulsing Ring when playing */}
            {isPlaying && (
              <motion.div
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gold/30 -z-10"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}
