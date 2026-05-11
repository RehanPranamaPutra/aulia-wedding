'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

export default function WhatsAppGenerator() {
  const [namaTamu, setNamaTamu] = useState('')
  const [copied, setCopied] = useState(false)

  const siteUrl = typeof window !== 'undefined' ? window.location.origin : ''

  function generateMessage() {
    const guestName = namaTamu || 'Tamu Undangan'
    const guestSlug = namaTamu ? namaTamu.trim().replace(/\s+/g, '-') : ''
    const inviteLink = guestSlug ? `${siteUrl}/to/${encodeURIComponent(guestSlug)}` : siteUrl

    return `Bismillahirrahmanirrahim

Assalamu'alaikum Wr. Wb.

Kepada Yth. Bapak/Ibu/Saudara/i
*${guestName}*

Dengan segala kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:

👰 *Mona Aulia, S. Sos*
🤵 *Mahendra*

📅 Akad Nikah: Jum'at, 22 Mei 2026 | Pukul 13.00 WIB
📍 Masjid Baiturrahman

📅 Resepsi: Sabtu, 23 Mei 2026 | Pukul 09.00 WIB - Selesai
📍 Jln. Malai V Suku, Dusun Malai Mudo, Malai V Suku Timur, Batang Gasan, Kab. Padang Pariaman

Untuk info lebih lanjut, kunjungi undangan digital kami:
🔗 ${inviteLink}

Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.

Wassalamu'alaikum Wr. Wb.
_Mona & Hendra_`
  }

  function getWhatsAppUrl() {
    return `https://wa.me/?text=${encodeURIComponent(generateMessage())}`
  }

  function handleCopy() {
    navigator.clipboard.writeText(generateMessage()).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-6 relative bg-cream min-h-screen flex items-center">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/songket-pattern.png')] bg-repeat opacity-5 mix-blend-multiply" />
      
      <div className="max-w-md mx-auto relative z-10 w-full">
        <ScrollReveal animation="fadeUp">
          <div className="text-center space-y-4 mb-12">
            <p className="text-gold font-heading text-[10px] tracking-[0.5em] uppercase">Admin Tool</p>
            <h2 className="text-maroon font-script text-5xl">Link Generator</h2>
            <div className="w-16 h-px bg-gold/40 mx-auto" />
            <p className="text-brown/60 text-xs font-body italic">
              Masukkan nama tamu untuk membuat pesan undangan WhatsApp otomatis.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-maroon/5 space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-heading uppercase tracking-[0.2em] text-maroon/60 ml-1">Nama Lengkap Tamu</label>
              <input 
                type="text" 
                value={namaTamu} 
                onChange={(e) => setNamaTamu(e.target.value)} 
                placeholder="Contoh: Bapak Ahmad & Keluarga"
                className="w-full px-5 py-4 rounded-2xl border-b-2 border-maroon/10 bg-transparent text-maroon font-heading text-lg placeholder:text-maroon/20 focus:outline-none focus:border-maroon transition-all" 
              />
            </div>

            <div className="bg-maroon-dark/[0.03] rounded-2xl p-6 border border-maroon/5 space-y-3">
              <p className="text-[9px] font-heading text-gold-dark uppercase tracking-widest font-bold">Preview Pesan</p>
              <div className="max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                <pre className="text-xs text-brown/70 font-body whitespace-pre-wrap leading-relaxed italic">
                  {generateMessage()}
                </pre>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <motion.a 
                whileTap={{ scale: 0.98 }} 
                href={getWhatsAppUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl text-cream font-heading text-xs tracking-widest uppercase flex items-center justify-center gap-3 shadow-xl transition-all hover:brightness-110"
                style={{ background: '#25D366' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Kirim via WhatsApp
              </motion.a>
              <motion.button 
                whileTap={{ scale: 0.98 }} 
                onClick={handleCopy}
                className="w-full py-4 rounded-xl border border-maroon/20 text-maroon font-heading text-[10px] tracking-widest uppercase hover:bg-maroon/5 transition-all shadow-sm flex items-center justify-center gap-2"
              >
                {copied ? '✓ Berhasil Disalin' : 'Salin Pesan Undangan'}
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
