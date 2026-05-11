'use client'

import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

const events = [
  {
    title: 'Akad Nikah',
    day: '22',
    month: 'MEI',
    year: '2026',
    time: 'Pukul 13.00 WIB',
    location: 'Masjid Baiturrahman',
    mapUrl: 'https://www.google.com/maps?q=Masjid+Baiturrahman+Sungai+Sariak&output=embed',
    googleMapsUrl: 'https://maps.app.goo.gl/1yFJqT8BSdky31cJ6'
  },
  {
    title: 'Resepsi',
    day: '23',
    month: 'MEI',
    year: '2026',
    time: 'Pukul 09.00 WIB - Selesai',
    location: 'Jln. Malai V Suku, Dusun Malai Mudo, Kab. Padang Pariaman',
    mapUrl: 'https://www.google.com/maps?q=-0.5694,100.0882&output=embed',
    googleMapsUrl: 'https://maps.app.goo.gl/Bch32PcSBugxFCPF8'
  },
]

export default function EventSchedule() {
  return (
    <section className="bg-cream relative py-24 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/songket-pattern.png')] bg-repeat opacity-5" />
      
      {/* Wavy Divider */}
      <div className="absolute top-0 w-full h-12 wavy-border opacity-30 rotate-180" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-24">
        <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 className="text-maroon font-script text-5xl">Waktu & Tempat</h2>
            <div className="w-24 h-px bg-gold mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16">
          {events.map((event, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="relative group">
                {/* Arched Card Frame */}
                <div className="arched-frame bg-white/50 backdrop-blur-sm p-8 md:p-12 text-center space-y-8 shadow-xl border-maroon/10">
                  <h3 className="text-maroon font-heading text-2xl font-bold border-b border-gold/30 pb-4">
                    {event.title}
                  </h3>

                  {/* Large Date Display */}
                  <div className="flex flex-col items-center justify-center py-4">
                    <p className="text-gold-dark font-heading text-sm tracking-[0.4em]">{event.month}</p>
                    <p className="text-maroon font-heading text-7xl font-bold my-2">{event.day}</p>
                    <p className="text-gold-dark font-heading text-sm tracking-[0.4em]">{event.year}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 text-brown/70 text-sm font-body">
                      <svg className="w-4 h-4 text-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                    
                    <p className="text-brown/80 text-xs font-body leading-relaxed max-w-[200px] mx-auto italic">
                      {event.location}
                    </p>
                  </div>

                  {/* Embedded Map - Cropped to hide Google UI */}
                  <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-gold/20 shadow-inner relative">
                    <iframe
                      src={event.mapUrl}
                      width="100%"
                      height="130%"
                      style={{ border: 0, marginTop: '-10%' }}
                      allowFullScreen={false}
                      loading="lazy"
                      className="pointer-events-none"
                    ></iframe>
                  </div>

                  <a
                    href={event.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-2 bg-maroon text-cream rounded-full text-[10px] font-heading tracking-widest uppercase hover:bg-maroon-dark transition-all shadow-lg"
                  >
                    Petunjuk Lokasi
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
