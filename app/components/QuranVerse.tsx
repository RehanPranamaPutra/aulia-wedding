'use client'

import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

export default function QuranVerse() {
  return (
    <section className="py-24 px-6 relative bg-cream overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/songket-pattern.png')] bg-repeat mix-blend-multiply opacity-5" />
      
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="mb-10 flex justify-center">
             <Image src="/ornament-top.png" alt="" width={50} height={50} className="opacity-90 drop-shadow-md" />
          </div>

          <p className="arabic-text text-3xl text-maroon mb-10">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
          </p>
          
          <div className="space-y-6">
            <p className="text-brown text-sm md:text-lg leading-relaxed font-body italic">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."
            </p>
            <p className="text-maroon font-heading font-bold text-xs tracking-[0.3em] uppercase pt-4">
              (QS. Ar-Rum: 21)
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
