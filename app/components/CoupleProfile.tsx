'use client'

import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

export default function CoupleProfile() {
  return (
    <section className="py-24 px-6 relative bg-maroon overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/songket-pattern.png')] bg-repeat mix-blend-overlay opacity-20" />
      
      {/* Huge Corner Ornaments */}
      <Image src="/ornament-corner.png" alt="" width={150} height={150} className="absolute top-0 left-0 opacity-40 pointer-events-none" />
      <Image src="/ornament-corner.png" alt="" width={150} height={150} className="absolute top-0 right-0 scale-x-[-1] opacity-40 pointer-events-none" />
      <Image src="/ornament-corner.png" alt="" width={150} height={150} className="absolute bottom-0 left-0 scale-y-[-1] opacity-40 pointer-events-none" />
      <Image src="/ornament-corner.png" alt="" width={150} height={150} className="absolute bottom-0 right-0 scale-x-[-1] scale-y-[-1] opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-20 relative z-10">
        
        <ScrollReveal>
          <div className="text-center space-y-6">
            <div className="w-16 h-px bg-gold mx-auto" />
            <h2 className="text-5xl font-script text-gold-light gold-shimmer">
              Sang Mempelai
            </h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h3 className="text-4xl font-heading font-bold text-cream mb-2">Mona Aulia, S. Sos</h3>
              <p className="text-gold-light text-xs font-body tracking-[0.3em] uppercase mb-6">Mempelai Wanita</p>
              <p className="text-cream/80 text-base font-body leading-relaxed">
                Putri dari Bapak Abdul Muis<br/>&amp; Ibu Rosmani
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center space-y-6">
              <h3 className="text-4xl font-heading font-bold text-cream mb-2">Mahendra</h3>
              <p className="text-gold-light text-xs font-body tracking-[0.3em] uppercase mb-6">Mempelai Pria</p>
              <p className="text-cream/80 text-base font-body leading-relaxed">
                Putra dari Bapak Kandarini<br/>&amp; Ibu Warni
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
