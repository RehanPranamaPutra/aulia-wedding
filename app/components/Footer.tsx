'use client'

import ScrollReveal from './ScrollReveal'

export default function Footer() {
  return (
    <footer className="py-16 px-6 relative overflow-hidden bg-maroon-dark/90 backdrop-blur-sm border-t-2 border-gold-dark/40">
      <div className="max-w-lg mx-auto text-center relative z-10">
        <ScrollReveal animation="fadeUp">
          <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4 font-body">
            Wassalamu&apos;alaikum Wr. Wb.
          </p>
          <h2 className="text-4xl md:text-5xl text-gold-light mb-5 font-script">
            Mona &amp; Hendra
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto mb-5" />
          <p className="text-cream/80 text-xs font-body leading-relaxed max-w-xs mx-auto mb-6">
            Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
          <div className="flex items-center justify-center gap-1.5 text-cream/40 text-[10px] font-body uppercase tracking-widest">
            <span>Aulia Invitation</span>
            <span className="text-gold">|</span>
            <span>2026</span>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
