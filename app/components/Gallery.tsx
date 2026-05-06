'use client'

import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const images = [
  '/couple.png',
  '/couple.png',
  '/couple.png',
  '/couple.png',
  '/couple.png',
  '/couple.png'
]

export default function Gallery() {
  return (
    <section className="py-24 px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-script text-maroon">
              Galeri Cinta
            </h2>
            <div className="section-divider opacity-60" />
            <p className="text-brown text-sm font-body leading-relaxed mt-4 max-w-lg mx-auto">
              Momen-momen bahagia kebersamaan kami.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gold/30 shadow-xl group">
                <div className="absolute inset-0 bg-maroon/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 border border-gold/20 rounded-2xl z-20 pointer-events-none m-2" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
