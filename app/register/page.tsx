'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Check, Rocket, Clock, Tag, FileText } from 'lucide-react'

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

export default function RegisterPage() {
    const router = useRouter()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [agreed, setAgreed] = useState(false)

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const passwordsMismatch = confirmPassword.length > 0 && password !== confirmPassword

    async function handleRegister(e: React.FormEvent) {
        e.preventDefault()
        setErrorMsg('')

        if (password !== confirmPassword) {
            setErrorMsg('Password dan konfirmasi password tidak cocok.')
            return
        }

        if (password.length < 6) {
            setErrorMsg('Password minimal 6 karakter.')
            return
        }

        if (!agreed) {
            setErrorMsg('Anda harus menyetujui Syarat & Ketentuan untuk mendaftar.')
            return
        }

        setLoading(true)

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: name,
                    },
                },
            })

            if (error) {
                setErrorMsg(error.message)
                return
            }

            router.push('/login?registered=1')
        } catch (err) {
            console.error(err)
            setErrorMsg('Terjadi kesalahan yang tidak terduga. Silakan coba lagi.')
        } finally {
            setLoading(false)
        }
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
                        Satu akun untuk<br />semua proyek Anda.
                    </h1>
                    <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-12">
                        Daftar sebagai klien Majakarsa Digital dan kelola website, aplikasi,
                        atau sistem custom Anda dari satu tempat.
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
                    onSubmit={handleRegister}
                    className="w-full max-w-md rounded-3xl bg-white/[0.04] backdrop-blur-sm p-8 sm:p-10 shadow-sm border border-white/10"
                >
                    <Link href="/" className="lg:hidden inline-flex uppercase font-futura items-baseline text-base font-bold text-white mb-8">
                        majakarsa<span className="text-white/40">digital</span>
                    </Link>

                    <h2 className="text-2xl font-bold text-white mb-1">Buat akun baru</h2>
                    <p className="text-sm text-gray-400 mb-8">
                        Sudah punya akun?{' '}
                        <Link href="/login" className="text-indigo-400 font-medium hover:text-indigo-300">
                            Masuk di sini
                        </Link>
                    </p>

                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium text-gray-300">Nama lengkap</label>
                        <input
                            type="text"
                            required
                            placeholder="Nama Anda"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] text-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15"
                        />
                    </div>

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

                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium text-gray-300">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                minLength={6}
                                placeholder="Minimal 6 karakter"
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

                    <div className="mb-2">
                        <label className="mb-2 block text-sm font-medium text-gray-300">Konfirmasi password</label>
                        <div className="relative">
                            <input
                                type={showConfirm ? 'text' : 'password'}
                                required
                                minLength={6}
                                placeholder="Ulangi password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={`w-full rounded-2xl border bg-white/[0.03] text-white px-4 py-3 pr-11 text-sm outline-none transition-colors placeholder:text-gray-600 focus:ring-2 ${passwordsMismatch
                                        ? 'border-red-500/40 focus:border-red-400 focus:ring-red-500/15'
                                        : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/15'
                                    }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirm((v) => !v)}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                                aria-label={showConfirm ? 'Sembunyikan password' : 'Tampilkan password'}
                            >
                                {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                        {passwordsMismatch && (
                            <p className="mt-1.5 text-xs text-red-400">Password tidak sama.</p>
                        )}
                    </div>

                    <label className="flex items-start gap-2.5 mt-6 mb-6 cursor-pointer select-none">
                        <span
                            onClick={() => setAgreed((v) => !v)}
                            className={`mt-0.5 shrink-0 w-4.5 h-4.5 rounded-md border flex items-center justify-center transition-colors ${agreed
                                    ? 'bg-indigo-600 border-indigo-600'
                                    : 'border-white/20 bg-white/[0.03]'
                                }`}
                        >
                            {agreed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                        </span>
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="sr-only"
                        />
                        <span className="text-xs text-gray-400 leading-relaxed">
                            Saya menyetujui{' '}
                            <Link href="/terms" className="text-indigo-400 hover:text-indigo-300 font-medium">
                                Syarat & Ketentuan
                            </Link>{' '}
                            dan{' '}
                            <Link href="/privacy" className="text-indigo-400 hover:text-indigo-300 font-medium">
                                Kebijakan Privasi
                            </Link>{' '}
                            Majakarsa Digital.
                        </span>
                    </label>

                    {errorMsg && (
                        <p className="mb-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2.5">
                            {errorMsg}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-2xl bg-indigo-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
                    >
                        {loading ? 'Memproses...' : 'Buat akun'}
                    </button>
                </form>
            </div>
        </div>
    )
}