'use client'

import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

export default function CoupleProfile() {
  return (
    <section className="bg-maroon-dark relative overflow-hidden pb-24">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/songket-pattern.png')] bg-repeat opacity-10 mix-blend-overlay" />
      
      {/* Section Divider - Wavy Top */}
      <div className="w-full h-12 wavy-border mb-20 opacity-90" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-gold font-script text-5xl drop-shadow-lg">Sang Mempelai</h2>
            <p className="text-cream/70 text-sm font-body italic max-w-lg mx-auto">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri..."
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-32">
          {/* Mempelai Wanita */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
              <div className="w-64 md:w-72 arched-frame shadow-2xl relative group">
                <Image
                  src="/minang-couple.png" 
                  alt="Mona Aulia"
                  width={300}
                  height={400}
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 border-[10px] border-maroon/20 pointer-events-none" />
              </div>
              <div className="text-center md:text-left space-y-4 flex-1">
                <h3 className="text-gold font-script text-6xl">Mona</h3>
                <div className="space-y-1">
                  <h4 className="text-cream font-heading text-2xl font-bold tracking-wider">Mona Aulia, S. Sos</h4>
                  <p className="text-gold-light text-sm font-body italic">Putri dari Bapak Abdul Muis & Ibu Rosmani</p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-cream/60 hover:text-gold transition-colors text-xs font-heading">
                  <div className="w-6 h-6 border border-cream/20 rounded-md flex items-center justify-center">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </div>
                  @monaaulia
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Mempelai Pria */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
              <div className="w-64 md:w-72 arched-frame shadow-2xl relative group">
                <Image
                  src="/minang-couple.png" 
                  alt="Mahendra"
                  width={300}
                  height={400}
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 border-[10px] border-maroon/20 pointer-events-none" />
              </div>
              <div className="text-center md:text-right space-y-4 flex-1">
                <h3 className="text-gold font-script text-6xl">Mahendra</h3>
                <div className="space-y-1">
                  <h4 className="text-cream font-heading text-2xl font-bold tracking-wider">Mahendra</h4>
                  <p className="text-gold-light text-sm font-body italic">Putra dari Bapak Kandarini & Ibu Warni</p>
                </div>
                <a href="#" className="inline-flex flex-row-reverse items-center gap-2 text-cream/60 hover:text-gold transition-colors text-xs font-heading">
                  <div className="w-6 h-6 border border-cream/20 rounded-md flex items-center justify-center">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </div>
                  @mahendra
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
