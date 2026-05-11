'use client'

import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

export default function QuranVerse() {
  return (
    <section className="py-32 px-6 relative bg-cream overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/songket-pattern.png')] bg-repeat opacity-5" />
      
      {/* Decorative Wavy Lines */}
      <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <ScrollReveal>
        <div className="max-w-2xl mx-auto text-center relative z-10 space-y-12">
          <div className="flex justify-center">
             <svg width="80" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                <path d="M60 5C65 15 75 20 85 20M60 5C55 15 45 20 35 20M60 5V35M60 35C65 25 75 20 85 20M60 35C55 25 45 20 35 20" stroke="#D4A843" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="60" cy="5" r="3" fill="#D4A843"/>
                <circle cx="60" cy="35" r="3" fill="#D4A843"/>
                <circle cx="85" cy="20" r="2" fill="#D4A843"/>
                <circle cx="35" cy="20" r="2" fill="#D4A843"/>
             </svg>
          </div>

          <p className="arabic-text text-3xl md:text-4xl text-maroon-dark leading-[2.5] drop-shadow-sm">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
          </p>
          
          <div className="space-y-8">
            <div className="w-12 h-px bg-gold mx-auto" />
            <p className="text-brown/80 text-sm md:text-base leading-relaxed font-body italic max-w-lg mx-auto">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."
            </p>
            <p className="text-maroon font-heading font-bold text-[10px] tracking-[0.5em] uppercase">
              (QS. Ar-Rum: 21)
            </p>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
