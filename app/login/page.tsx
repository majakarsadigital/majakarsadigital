'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { useRouter, useSearchParams } from 'next/navigation'
import { Eye, EyeOff, Rocket, Clock, Tag, FileText } from 'lucide-react'

const BENEFITS = [
    {
        icon: Rocket,
        title: 'Pantau proyek real-time',
        desc: 'Lihat progres pengerjaan, revisi, dan status proyek Anda kapan saja tanpa perlu menghubungi tim.',
    },
    {
        icon: Tag,
        title: 'Harga & promo khusus member',
        desc: 'Dapatkan penawaran dan diskon paket yang tidak ditampilkan untuk pengunjung umum.',
    },
    {
        icon: Clock,
        title: 'Proses order lebih cepat',
        desc: 'Data dan preferensi Anda tersimpan, jadi pemesanan proyek berikutnya jauh lebih singkat.',
    },
    {
        icon: FileText,
        title: 'Riwayat & invoice tersimpan',
        desc: 'Semua histori pesanan, brief proyek, dan invoice tersimpan rapi di satu dashboard.',
    },
]

export default function LoginPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const justRegistered = searchParams.get('registered') === '1'

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault()
        setErrorMsg('')
        setLoading(true)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        setLoading(false)

        if (error) {
            setErrorMsg(error.message)
            return
        }

        router.push('/')
        router.refresh()
    }

    return (
        <div className="min-h-screen bg-[#0c0e14] flex">
            {/* Left panel — brand & benefits */}
            <div className="hidden lg:flex lg:w-[45%] xl:w-[42%] relative border-r border-white/10 text-white flex-col justify-between p-12 xl:p-16 overflow-hidden">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 1px 1px, #818cf8 1px, transparent 0)',
                        backgroundSize: '28px 28px',
                    }}
                />
                <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl" />

                <div className="relative">
                    <Link href="/" className="inline-flex uppercase font-futura items-baseline text-lg font-bold text-white mb-16">
                        majakarsa<span className="text-white/40">digital</span>
                    </Link>

                    <h1 className="text-3xl xl:text-4xl font-bold leading-tight mb-4">
                        Selamat datang<br />kembali.
                    </h1>
                    <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-12">
                        Masuk ke akun Anda untuk melanjutkan mengelola proyek bersama
                        Majakarsa Digital.
                    </p>

                    <div className="space-y-6">
                        {BENEFITS.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center">
                                    <Icon className="w-4.5 h-4.5 text-indigo-300" strokeWidth={2} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white mb-0.5">{title}</p>
                                    <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="relative text-xs text-white/30">
                    © 2025 Majakarsa Digital. All rights reserved.
                </p>
            </div>

            {/* Right panel — form */}
            <div className="flex-1 flex items-center justify-center px-6 py-12 sm:px-10">
                <form
                    onSubmit={handleLogin}
                    className="w-full max-w-md rounded-3xl bg-white/[0.04] backdrop-blur-sm p-8 sm:p-10 shadow-sm border border-white/10"
                >
                    <Link href="/" className="lg:hidden inline-flex uppercase font-futura items-baseline text-base font-bold text-white mb-8">
                        majakarsa<span className="text-white/40">digital</span>
                    </Link>

                    <h2 className="text-2xl font-bold text-white mb-1">Masuk ke akun</h2>
                    <p className="text-sm text-gray-400 mb-8">
                        Belum punya akun?{' '}
                        <Link href="/register" className="text-indigo-400 font-medium hover:text-indigo-300">
                            Daftar di sini
                        </Link>
                    </p>

                    {justRegistered && (
                        <p className="mb-5 text-sm text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-xl px-4 py-2.5">
                            Registrasi berhasil. Silakan cek email Anda, lalu masuk di bawah ini.
                        </p>
                    )}

                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium text-gray-300">Email</label>
                        <input
                            type="email"
                            required
                            placeholder="nama@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] text-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15"
                        />
                    </div>

                    <div className="mb-2">
                        <div className="mb-2 flex items-center justify-between">
                            <label className="block text-sm font-medium text-gray-300">Password</label>
                            <Link href="/forgot-password" className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">
                                Lupa password?
                            </Link>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder="Masukkan password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] text-white px-4 py-3 pr-11 text-sm outline-none transition-colors placeholder:text-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((v) => !v)}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                                aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
                            >
                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    {errorMsg && (
                        <p className="mt-4 mb-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2.5">
                            {errorMsg}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-6 rounded-2xl bg-indigo-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
                    >
                        {loading ? 'Memproses...' : 'Masuk'}
                    </button>
                </form>
            </div>
        </div>
    )
}