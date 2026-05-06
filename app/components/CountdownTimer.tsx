'use client'

import { useState, useEffect } from 'react'
import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

export default function CountdownTimer() {
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

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-6 relative bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-[url('/songket-pattern.png')] bg-repeat mix-blend-multiply opacity-5" />

      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
          
          <div className="mb-8 flex justify-center">
             <Image src="/ornament-top.png" alt="" width={60} height={60} className="opacity-90 drop-shadow-md" />
          </div>

          <h2 className="text-5xl font-script text-maroon">
            Menuju Hari Bahagia
          </h2>

          <div className="flex justify-center gap-6">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border-2 border-gold/40 rounded-full bg-transparent mb-4">
                  <span className="text-3xl md:text-4xl font-heading font-bold text-maroon">
                    {value < 10 ? `0${value}` : value}
                  </span>
                </div>
                <span className="text-[10px] md:text-xs font-body uppercase tracking-[0.3em] text-brown font-bold">
                  {unit === 'days' ? 'Hari' : unit === 'hours' ? 'Jam' : unit === 'minutes' ? 'Menit' : 'Detik'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
