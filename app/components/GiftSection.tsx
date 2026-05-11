'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

export default function GiftSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('061601033689507')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-32 px-6 relative bg-maroon-dark overflow-hidden">
      <div className="absolute inset-0 bg-[url('/songket-pattern.png')] bg-repeat mix-blend-overlay opacity-10" />

      {/* Decorative Wavy Borders */}
      <div className="absolute top-0 w-full h-12 wavy-border opacity-20 rotate-180" />
      <div className="absolute bottom-0 w-full h-12 wavy-border opacity-20" />

      <ScrollReveal>
        <div className="max-w-2xl mx-auto text-center relative z-10 space-y-16">
          
          <div className="space-y-6">
            <h2 className="text-5xl font-script text-gold gold-text-shimmer">Kado Pernikahan</h2>
            <div className="w-24 h-px bg-gold/40 mx-auto" />
            <p className="text-cream/70 text-sm font-body leading-relaxed max-w-sm mx-auto italic">
              "Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika bermaksud memberikan tanda kasih, dapat melalui:"
            </p>
          </div>

          <div className="max-w-sm mx-auto bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-gold/20 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:bg-white/10">
            {/* Background Arch Ornament */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-8">
              <div className="flex justify-center">
                 <div className="w-16 h-10 bg-cream/10 rounded-lg flex items-center justify-center border border-cream/20">
                    <span className="text-gold font-heading font-bold text-xs">BRI</span>
                 </div>
              </div>

              <div className="space-y-2">
                <p className="text-gold-light font-heading text-2xl font-bold tracking-[0.2em]">061601033689507</p>
                <p className="text-cream/60 text-[10px] font-heading uppercase tracking-[0.3em]">a.n. Mona Aulia</p>
              </div>
              
              <button
                onClick={handleCopy}
                className="w-full px-8 py-3 bg-gold text-maroon-dark rounded-xl font-heading text-[10px] font-bold uppercase tracking-widest hover:bg-gold-light transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {copied ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  )}
                </svg>
                {copied ? 'Berhasil Disalin' : 'Salin Rekening'}
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
