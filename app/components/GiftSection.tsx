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
    <section className="py-24 px-6 relative bg-maroon overflow-hidden">
      <div className="absolute inset-0 bg-[url('/songket-pattern.png')] bg-repeat mix-blend-overlay opacity-20" />

      <Image src="/ornament-corner.png" alt="" width={150} height={150} className="absolute top-0 left-0 opacity-40 pointer-events-none" />
      <Image src="/ornament-corner.png" alt="" width={150} height={150} className="absolute top-0 right-0 scale-x-[-1] opacity-40 pointer-events-none" />

      <ScrollReveal>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          
          <div className="space-y-6 mb-16">
            <div className="w-16 h-px bg-gold mx-auto" />
            <h2 className="text-5xl font-script text-gold-light gold-shimmer">Wedding Gift</h2>
            <div className="w-16 h-px bg-gold mx-auto" />
            <p className="text-cream/80 text-sm font-body leading-relaxed max-w-sm mx-auto pt-6">
              Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika bermaksud memberikan tanda kasih, dapat melalui:
            </p>
          </div>

          <div className="border border-gold/30 p-10 max-w-sm mx-auto relative group hover:bg-gold/5 transition-colors duration-500">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-maroon px-4">
              <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>

            <h3 className="text-2xl font-heading font-bold text-cream mb-2">BANK BRI</h3>
            <p className="text-gold-light font-mono text-2xl tracking-widest font-semibold mb-2">061601033689507</p>
            <p className="text-cream/60 text-xs font-body uppercase tracking-[0.3em] mb-10">a.n. Mona Aulia</p>
            
            <button
              onClick={handleCopy}
              className="w-full px-6 py-4 bg-gold text-maroon-dark rounded-full font-body text-xs font-bold uppercase tracking-widest hover:bg-gold-light transition-all flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {copied ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                )}
              </svg>
              {copied ? 'Tersalin' : 'Salin Rekening'}
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
