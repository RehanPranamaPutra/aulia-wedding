import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type RSVPEntry = {
  id: string
  nama: string
  kehadiran: 'hadir' | 'tidak_hadir' | 'ragu'
  jumlah_tamu: number
  ucapan: string
  created_at: string
}
