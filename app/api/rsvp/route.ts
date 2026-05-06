import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('rsvp')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50)

    if (error) {
      return NextResponse.json([], { status: 200 })
    }

    return NextResponse.json(data || [])
  } catch {
    return NextResponse.json([], { status: 200 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nama, kehadiran, jumlah_tamu, ucapan } = body

    if (!nama || !kehadiran) {
      return NextResponse.json(
        { error: 'Nama dan kehadiran wajib diisi' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('rsvp')
      .insert([{ nama, kehadiran, jumlah_tamu: jumlah_tamu || 1, ucapan: ucapan || '' }])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Gagal menyimpan data. Pastikan Supabase sudah dikonfigurasi.' },
        { status: 500 }
      )
    }

    return NextResponse.json(data, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}
