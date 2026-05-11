'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

type RSVP = {
  id: number
  nama: string
  kehadiran: string
  jumlah_tamu: number
  ucapan: string
  created_at: string
}

export default function RSVPForm({ guestName }: { guestName: string }) {
  const [formData, setFormData] = useState({
    nama: guestName !== 'Tamu Undangan' ? guestName : '',
    kehadiran: 'hadir',
    jumlah_tamu: '1',
    ucapan: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [comments, setComments] = useState<RSVP[]>([])
  const [loadingComments, setLoadingComments] = useState(true)

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('aulia_rsvp')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      if (data) setComments(data)
    } catch (error) {
      console.error('Error fetching comments:', error)
    } finally {
      setLoadingComments(false)
    }
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const { error } = await supabase
        .from('aulia_rsvp')
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
      fetchComments()
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
             <svg width="80" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                <path d="M60 5C65 15 75 20 85 20M60 5C55 15 45 20 35 20M60 5V35M60 35C65 25 75 20 85 20M60 35C55 25 45 20 35 20" stroke="#D4A843" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="60" cy="5" r="3" fill="#D4A843"/>
                <circle cx="60" cy="35" r="3" fill="#D4A843"/>
                <circle cx="85" cy="20" r="2" fill="#D4A843"/>
                <circle cx="35" cy="20" r="2" fill="#D4A843"/>
             </svg>
          </div>

          <div className="text-center space-y-6 mb-16">
            <h2 className="text-5xl font-script text-maroon">
              Kehadiran & Doa
            </h2>
            <p className="text-brown/80 text-sm font-body max-w-md mx-auto leading-relaxed italic">
              Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.
            </p>
          </div>

          <div className="px-6 md:px-12 bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-maroon/5 shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-16 space-y-6">
                <h3 className="text-3xl font-heading font-bold text-maroon">Pesan Terkirim!</h3>
                <p className="text-brown/80 font-body text-lg">Terima kasih atas doa dan konfirmasi kehadiran Anda.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-maroon font-heading text-xs uppercase tracking-widest hover:text-gold-dark transition-colors border-b-2 border-maroon pb-1"
                >
                  Kirim respons lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="text-[10px] font-heading uppercase tracking-widest text-maroon/60 ml-1">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="w-full py-4 bg-transparent border-b-2 border-maroon/10 focus:outline-none focus:border-maroon transition-all text-maroon font-heading text-lg placeholder:text-maroon/20"
                    placeholder="Contoh: Rehan Pranama"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-heading uppercase tracking-widest text-maroon/60 ml-1">Ucapan & Doa</label>
                  <textarea
                    rows={3}
                    value={formData.ucapan}
                    onChange={(e) => setFormData({ ...formData, ucapan: e.target.value })}
                    className="w-full py-4 bg-transparent border-b-2 border-maroon/10 focus:outline-none focus:border-maroon transition-all text-maroon font-body text-lg placeholder:text-maroon/20 resize-none"
                    placeholder="Tuliskan pesan Anda..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] font-heading uppercase tracking-widest text-maroon/60 ml-1">Konfirmasi</label>
                    <select
                      value={formData.kehadiran}
                      onChange={(e) => setFormData({ ...formData, kehadiran: e.target.value })}
                      className="w-full py-4 bg-transparent border-b-2 border-maroon/10 focus:outline-none focus:border-maroon transition-all text-maroon font-body text-lg appearance-none cursor-pointer"
                    >
                      <option value="hadir">Insya Allah Hadir</option>
                      <option value="tidak_hadir">Maaf, Tidak Bisa Hadir</option>
                      <option value="ragu">Masih Ragu</option>
                    </select>
                  </div>

                  {formData.kehadiran === 'hadir' && (
                    <div>
                      <label className="text-[10px] font-heading uppercase tracking-widest text-maroon/60 ml-1">Jumlah Tamu</label>
                      <select
                        value={formData.jumlah_tamu}
                        onChange={(e) => setFormData({ ...formData, jumlah_tamu: e.target.value })}
                        className="w-full py-4 bg-transparent border-b-2 border-maroon/10 focus:outline-none focus:border-maroon transition-all text-maroon font-body text-lg appearance-none cursor-pointer"
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

                <div className="pt-8 text-center">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full md:w-auto px-16 py-4 bg-maroon text-cream rounded-xl text-xs font-heading tracking-[0.3em] uppercase hover:bg-maroon-dark transition-all disabled:opacity-50 shadow-xl"
                  >
                    {status === 'loading' ? 'MENGIRIM...' : 'Kirim Konfirmasi'}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="mt-32 pt-16 border-t border-maroon/10">
            <h3 className="text-4xl font-script text-maroon text-center mb-16">Pesan dari Tamu</h3>
            
            <div className="max-w-xl mx-auto space-y-8 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {loadingComments ? (
                <p className="text-center text-maroon/50 font-body animate-pulse">Memuat pesan...</p>
              ) : comments.length > 0 ? (
                comments.map((comment) => (
                  <div key={comment.id} className="bg-white/60 p-8 rounded-3xl border border-maroon/5 shadow-lg backdrop-blur-sm relative overflow-hidden group">
                    {/* Decorative Arch Background */}
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-maroon/5 rounded-full blur-3xl group-hover:bg-maroon/10 transition-colors" />
                    
                    <div className="flex items-center gap-5 mb-6 relative z-10">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-maroon to-maroon-dark text-gold flex items-center justify-center font-heading font-bold text-2xl shadow-xl border-2 border-gold/20">
                        {comment.nama.charAt(0).toUpperCase()}
                      </div>
                      
                      <div>
                        <p className="font-heading font-bold text-maroon text-xl">{comment.nama}</p>
                        <p className="text-[10px] font-body text-maroon/50 uppercase tracking-[0.2em] mt-1 font-bold">
                          {new Date(comment.created_at).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                      </div>

                      {comment.kehadiran === 'hadir' && (
                        <span className="ml-auto text-[9px] bg-green-50 text-green-700 border border-green-100 px-4 py-1.5 rounded-full font-heading uppercase tracking-widest font-bold">
                          Hadir
                        </span>
                      )}
                    </div>
                    
                    <p className="text-maroon/80 font-body text-base md:text-lg leading-relaxed whitespace-pre-wrap italic relative z-10 border-l-4 border-gold/20 pl-6 py-2">
                      "{comment.ucapan || 'Selamat berbahagia!'}"
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-maroon/40 font-body italic">Belum ada pesan. Jadilah yang pertama!</p>
              )}
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  )
}
