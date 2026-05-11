'use client'

import ScrollReveal from './ScrollReveal'

export default function Footer() {
  return (
    <footer className="py-24 px-6 relative overflow-hidden bg-maroon-dark text-center border-t-2 border-gold/20">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/songket-pattern.png')] bg-repeat opacity-5 mix-blend-overlay" />
      
      <div className="max-w-lg mx-auto relative z-10 space-y-8">
        <ScrollReveal animation="fadeUp">
          <div className="space-y-4">
            <p className="text-gold font-heading text-[10px] tracking-[0.5em] uppercase">Wassalamu&apos;alaikum Wr. Wb.</p>
            <h2 className="text-5xl md:text-6xl text-gold-light font-script gold-text-shimmer">
              Mona &amp; Hendra
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto" />
          </div>
          
          <p className="text-cream/70 text-sm font-body italic leading-relaxed max-w-xs mx-auto">
            "Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu."
          </p>
          
          <div className="pt-10 flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center">
              <span className="text-gold font-script text-2xl">M&H</span>
            </div>
            <div className="flex items-center gap-2 text-[8px] font-heading uppercase tracking-[0.4em] text-cream/30">
              <span>Aulia Wedding</span>
              <span className="text-gold/40">•</span>
              <span>2026</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
