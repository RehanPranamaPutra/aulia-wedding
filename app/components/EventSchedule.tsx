'use client'

import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

const events = [
  {
    title: 'Akad Nikah',
    date: "Jum'at, 22 Mei 2026",
    time: 'Pukul 13.00 WIB',
    location: 'Masjid Baiturrahman',
  },
  {
    title: 'Resepsi',
    date: 'Sabtu, 23 Mei 2026',
    time: 'Pukul 09.00 WIB - Selesai',
    location: 'Jln. Malai V Suku, Dusun Malai Mudo, Malai V Suku Timur, Batang Gasan, Kab. Padang Pariaman',
  },
]

export default function EventSchedule() {
  return (
    <section className="py-24 px-6 relative bg-maroon overflow-hidden">
      <div className="absolute inset-0 bg-[url('/songket-pattern.png')] bg-repeat mix-blend-overlay opacity-20" />

      <Image src="/ornament-corner.png" alt="" width={150} height={150} className="absolute top-0 left-0 opacity-40 pointer-events-none" />
      <Image src="/ornament-corner.png" alt="" width={150} height={150} className="absolute top-0 right-0 scale-x-[-1] opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        <ScrollReveal>
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-script text-gold-light gold-shimmer">Jadwal Acara</h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 text-center">
          {events.map((event, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="space-y-6">
                <h3 className="text-4xl font-heading font-bold text-cream mb-4">{event.title}</h3>
                
                <div className="space-y-2 text-gold-light font-body text-lg mb-6">
                  <p className="font-bold tracking-widest">{event.date}</p>
                  <p>{event.time}</p>
                </div>
                
                <p className="text-cream/80 text-sm leading-relaxed max-w-[280px] mx-auto mb-8">
                  {event.location}
                </p>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-3 border border-gold text-gold-light rounded-full text-xs font-body tracking-widest uppercase hover:bg-gold hover:text-maroon-dark transition-all"
                >
                  Buka Peta Lokasi
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      
      <Image src="/ornament-corner.png" alt="" width={150} height={150} className="absolute bottom-0 left-0 scale-y-[-1] opacity-40 pointer-events-none" />
      <Image src="/ornament-corner.png" alt="" width={150} height={150} className="absolute bottom-0 right-0 scale-x-[-1] scale-y-[-1] opacity-40 pointer-events-none" />
    </section>
  )
}
