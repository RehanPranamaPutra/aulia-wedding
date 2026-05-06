'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function RSVPForm({ guestName }: { guestName: string }) {
  const [formData, setFormData] = useState({
    nama: guestName !== 'Tamu Undangan' ? guestName : '',
    kehadiran: 'hadir',
    jumlah_tamu: '1',
    ucapan: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const { error } = await supabase
        .from('rsvp')
        .insert([
          {
            nama: formData.nama,
            kehadiran: formData.kehadiran,
            jumlah_tamu: parseInt(formData.jumlah_tamu),
            ucapan: formData.ucapan
          }
        ])

      if (error) throw error
      setStatus('success')
      setFormData({ nama: '', kehadiran: 'hadir', jumlah_tamu: '1', ucapan: '' })
    } catch (error) {
      console.error('Error saving RSVP:', error)
      setStatus('error')
    }
  }

  return (
    <section className="py-24 px-6 relative bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-[url('/songket-pattern.png')] bg-repeat mix-blend-multiply opacity-5" />

      <ScrollReveal>
        <div className="max-w-xl mx-auto relative z-10">
          
          <div className="mb-10 flex justify-center">
             <Image src="/ornament-top.png" alt="" width={60} height={60} className="opacity-90 drop-shadow-md" />
          </div>

          <div className="text-center space-y-6 mb-16">
            <h2 className="text-5xl font-script text-maroon">
              Kehadiran & Doa
            </h2>
            <p className="text-brown/80 text-sm font-body max-w-md mx-auto leading-relaxed">
              Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.
            </p>
          </div>

          <div className="px-6 md:px-12">
            {status === 'success' ? (
              <div className="text-center py-16 space-y-6">
                <h3 className="text-3xl font-heading font-bold text-maroon">Pesan Terkirim!</h3>
                <p className="text-brown/80 font-body text-lg">Terima kasih atas doa dan konfirmasi kehadiran Anda.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-maroon font-body text-sm uppercase tracking-widest hover:text-gold-dark transition-colors border-b border-maroon pb-1"
                >
                  Kirim respons lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Modern minimalist inputs */}
                <div>
                  <input
                    type="text"
                    required
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="w-full py-4 bg-transparent border-b border-maroon/20 focus:outline-none focus:border-maroon transition-all text-brown font-body text-lg placeholder:text-brown/40"
                    placeholder="Nama Lengkap"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    value={formData.ucapan}
                    onChange={(e) => setFormData({ ...formData, ucapan: e.target.value })}
                    className="w-full py-4 bg-transparent border-b border-maroon/20 focus:outline-none focus:border-maroon transition-all text-brown font-body text-lg placeholder:text-brown/40 resize-none"
                    placeholder="Tuliskan ucapan & doa..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <select
                      value={formData.kehadiran}
                      onChange={(e) => setFormData({ ...formData, kehadiran: e.target.value })}
                      className="w-full py-4 bg-transparent border-b border-maroon/20 focus:outline-none focus:border-maroon transition-all text-brown font-body text-lg appearance-none"
                    >
                      <option value="hadir">Akan Hadir</option>
                      <option value="tidak_hadir">Tidak Hadir</option>
                      <option value="ragu">Masih Ragu</option>
                    </select>
                  </div>

                  {formData.kehadiran === 'hadir' && (
                    <div>
                      <select
                        value={formData.jumlah_tamu}
                        onChange={(e) => setFormData({ ...formData, jumlah_tamu: e.target.value })}
                        className="w-full py-4 bg-transparent border-b border-maroon/20 focus:outline-none focus:border-maroon transition-all text-brown font-body text-lg appearance-none"
                      >
                        <option value="1">1 Orang</option>
                        <option value="2">2 Orang</option>
                      </select>
                    </div>
                  )}
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-body text-center">Gagal mengirim. Silakan coba lagi.</p>
                )}

                <div className="pt-12 text-center">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-16 py-4 bg-maroon text-cream rounded-full text-xs font-body tracking-[0.3em] uppercase hover:bg-maroon-dark transition-all disabled:opacity-50"
                  >
                    {status === 'loading' ? 'MENGIRIM...' : 'Kirim Konfirmasi'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
