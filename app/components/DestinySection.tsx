'use client'

import ScrollReveal from './ScrollReveal'

export default function DestinySection() {
  return (
    <section className="bg-cream relative py-24 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/songket-pattern.png')] bg-repeat opacity-5" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-maroon font-script text-5xl">Takdir & Keyakinan</h2>
              <div className="w-24 h-px bg-gold mx-auto" />
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-brown/80 font-body italic text-base md:text-lg leading-relaxed">
                Tidak selalu mudah.<br />
                Tidak selalu setenang yang terlihat.
              </p>
              <p className="text-brown/90 font-body text-base md:text-lg leading-relaxed">
                Namun kami memilih percaya- bahwa Sang Maha Cinta tak pernah salah menuliskan takdir. Dengan segala harap dan pasrah, kami menanti hari di mana sebuah janji suci akan terucap, mengikat dua jiwa dalam satu arah.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
