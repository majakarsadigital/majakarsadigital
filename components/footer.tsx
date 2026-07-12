'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { LogosFacebook, LogosWhatsappIcon, SkillIconsInstagram } from '@/public/assets/icons'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth-provider'

export function Footer() {
    const { user } = useAuth()
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
        <footer className="relative z-10 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8 sm:pb-10">

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-8 sm:gap-10 mb-10 sm:mb-12">

                    <div className="col-span-2 md:col-span-4">
                        <Link href="/" className="inline-flex uppercase font-futura items-baseline text-lg font-bold text-white mb-4">
                            majakarsa<span className="text-white/40">digital</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
                            Agensi digital yang membangun website, aplikasi, dan sistem custom
                            berkualitas tinggi untuk bisnis yang ingin bertumbuh.
                        </p>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://wa.me/628135382932"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#25D366]/40 hover:text-[#25D366] hover:bg-[#25D366]/5 transition-colors"
                                aria-label="WhatsApp"
                            >
                                <LogosWhatsappIcon className="w-4 h-4" />
                            </a>
                            <a
                                href="https://instagram.com/majakarsadigital"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-pink-400/40 hover:text-pink-500 hover:bg-pink-500/5 transition-colors"
                                aria-label="Instagram"
                            >
                                <SkillIconsInstagram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://facebook.com/majakarsadigital"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#1877F2]/40 hover:text-[#1877F2] hover:bg-[#1877F2]/5 transition-colors"
                                aria-label="Facebook"
                            >
                                <LogosFacebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3 sm:mb-4">
                            Layanan
                        </h4>
                        <ul className="space-y-2 sm:space-y-2.5">
                            {['Website Development', 'Mobile App', 'E-Commerce', 'UI/UX Design', 'Custom System'].map((item) => (
                                <li key={item}>
                                    <a href="#services" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3 sm:mb-4">
                            Perusahaan
                        </h4>
                        <ul className="space-y-2 sm:space-y-2.5">
                            <li><Link href="/tentang" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">Tentang Kami</Link></li>
                            <li><Link href="/portfolio" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">Portfolio</Link></li>
                            <li><Link href="/produk" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">Produk</Link></li>
                            <li><Link href="/artikel" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">Artikel</Link></li>
                            <li><Link href="/sponsor" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">Sponsor</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3 sm:mb-4">
                            Mulai
                        </h4>
                        <ul className="space-y-2 sm:space-y-2.5">
                            <li><Link href="/buat" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">Buat Proyek</Link></li>
                            <li><Link href="/pricelist" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">Pricelist</Link></li>
                            <li><a href="#contact" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">Hubungi Kami</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3 sm:mb-4">
                            Kontak
                        </h4>
                        <ul className="space-y-2 sm:space-y-2.5 text-sm text-gray-500">
                            <li className="break-words">majakarsadigital@gmail.com</li>
                            <li>+62 813-5382-932</li>
                            <li>Mojokerto, Jawa Timur</li>
                        </ul>
                    </div>
                </div>

                <div id="login" className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-4 py-6 sm:py-8 border-t border-b border-white/5 mb-6 sm:mb-8">
                    <div>
                        <p className="text-sm font-semibold text-white mb-1">
                            {user ? 'Selamat datang kembali' : 'Sudah punya akun?'}
                        </p>
                        <p className="text-xs text-gray-600">
                            {user
                                ? 'Anda sudah masuk ke akun Anda.'
                                : 'Masuk untuk memantau proyek dan pesanan Anda.'}
                        </p>
                    </div>

                    {!user ? (
                        <form onSubmit={handleLogin} className="flex flex-col xs:flex-row w-full sm:w-auto gap-2">
                            <input
                                type="email"
                                placeholder="Email Anda"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 sm:w-48 px-4 py-2.5 text-sm rounded-full border border-white/10 bg-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400/20 transition-all min-w-0"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="flex-1 sm:w-48 px-4 py-2.5 text-sm rounded-full border border-white/10 bg-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400/20 transition-all min-w-0"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-indigo-400 hover:text-white transition-colors flex-shrink-0 disabled:opacity-50"
                            >
                                {loading ? 'Memproses...' : 'Login'}
                            </button>

                            {errorMsg && (
                                <p className="w-full text-xs text-red-400 mt-1">{errorMsg}</p>
                            )}
                        </form>
                    ) : (
                        <div className="w-full sm:w-auto p-5 rounded-3xl border border-white/10 bg-white/5">
                            <p className="text-sm font-semibold text-white mb-1">Logged in</p>
                            <p className="text-xs text-gray-400">
                                Masuk sebagai {user.email}.
                            </p>
                        </div>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
                    <p className="text-gray-600 text-xs">
                        © 2025 Majakarsa Digital. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5 sm:gap-6">
                        <Link href="/privacy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                            Kebijakan Privasi
                        </Link>
                        <Link href="/terms" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                            Syarat & Ketentuan
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}