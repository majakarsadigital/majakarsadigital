'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { MingcuteSearchLine } from '@/public/assets/icons'


interface FAQItem {
    id: string
    category: 'Pemesanan' | 'Pembayaran' | 'Teknis' | 'Akun'
    question: string
    answer: string
}

const faqCategories = ['Semua', 'Pemesanan', 'Pembayaran', 'Teknis', 'Akun'] as const

const faqs: FAQItem[] = [
    {
        id: 'faq-1',
        category: 'Pemesanan',
        question: 'Bagaimana cara memesan produk di Majakarsa Digital?',
        answer:
            'Pilih produk di halaman Katalog, klik "Pesan Sekarang", lalu isi detail kebutuhan Anda (warna, jumlah halaman, deskripsi tambahan) lewat form pemesanan. Tim kami akan menghubungi Anda maksimal 1x24 jam untuk konfirmasi.',
    },
    {
        id: 'faq-2',
        category: 'Pemesanan',
        question: 'Apakah bisa request custom di luar produk yang tersedia?',
        answer:
            'Bisa. Gunakan halaman "Buat Custom" untuk menjelaskan kebutuhan spesifik Anda — kami akan bangun dari nol sesuai branding, alur kerja, dan kebutuhan teknis bisnis Anda.',
    },
    {
        id: 'faq-3',
        category: 'Pemesanan',
        question: 'Berapa lama waktu pengerjaan rata-rata?',
        answer:
            'Tergantung kompleksitas. Produk siap pakai biasanya 3-7 hari kerja untuk kustomisasi ringan, sementara proyek custom dari nol berkisar 2-6 minggu. Estimasi pasti akan disampaikan saat konfirmasi pesanan.',
    },
    {
        id: 'faq-4',
        category: 'Pembayaran',
        question: 'Metode pembayaran apa saja yang diterima?',
        answer:
            'Kami menerima transfer bank, e-wallet (OVO, DANA, GoPay), dan QRIS. Pembayaran umumnya dibagi dua tahap: DP di awal dan pelunasan sebelum serah terima proyek.',
    },
    {
        id: 'faq-5',
        category: 'Pembayaran',
        question: 'Apakah ada garansi revisi setelah pembayaran?',
        answer:
            'Ya, setiap paket menyertakan sesi revisi terbatas (biasanya 2-3x) yang berlaku 14 hari setelah serah terima. Revisi di luar cakupan awal akan dikenakan biaya tambahan sesuai kesepakatan.',
    },
    {
        id: 'faq-6',
        category: 'Teknis',
        question: 'Teknologi apa yang digunakan untuk membangun produk?',
        answer:
            'Sebagian besar produk web kami dibangun dengan Next.js, TypeScript, dan Tailwind CSS, dengan Supabase sebagai backend. Untuk aplikasi mobile, kami menggunakan Flutter. Stack bisa disesuaikan atas permintaan.',
    },
    {
        id: 'faq-7',
        category: 'Teknis',
        question: 'Apakah saya mendapat source code setelah proyek selesai?',
        answer:
            'Ya, source code lengkap diserahkan setelah pelunasan, disertai dokumentasi dasar untuk deployment dan maintenance.',
    },
    {
        id: 'faq-8',
        category: 'Akun',
        question: 'Bagaimana cara melacak status pesanan saya?',
        answer:
            'Status pesanan dikirimkan melalui email dan WhatsApp pada setiap tahap penting: konfirmasi, progres pengerjaan, dan serah terima. Fitur dashboard pelacakan mandiri sedang kami kembangkan.',
    },
    {
        id: 'faq-9',
        category: 'Akun',
        question: 'Saya lupa detail pesanan sebelumnya, harus bagaimana?',
        answer:
            'Hubungi tim support kami melalui WhatsApp atau email dengan menyertakan nama dan nomor kontak yang digunakan saat memesan, kami akan bantu carikan riwayatnya.',
    },
]

export default function SupportComponent() {
    const [activeCategory, setActiveCategory] =
        useState<(typeof faqCategories)[number]>('Semua')
    const [search, setSearch] = useState('')
    const [openId, setOpenId] = useState<string | null>(null)

    const searchTerm = search.trim().toLowerCase()

    const filtered = useMemo(() => {
        return faqs.filter((f) => {
            const matchCategory = activeCategory === 'Semua' || f.category === activeCategory
            const matchSearch =
                searchTerm === '' ||
                f.question.toLowerCase().includes(searchTerm) ||
                f.answer.toLowerCase().includes(searchTerm)
            return matchCategory && matchSearch
        })
    }, [activeCategory, searchTerm])

    const handleCategory = (cat: (typeof faqCategories)[number]) => {
        setActiveCategory(cat)
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const toggleOpen = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id))
    }

    return (
        <main className="min-h-screen bg-[#f4f5f7] dark:bg-black">
            {/* Header */}
            <div className="bg-white dark:bg-black">
                <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-10 sm:py-16 pb-0">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-900 dark:text-indigo-400 mb-3 sm:mb-4">
                                Pusat Bantuan
                            </p>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 leading-tight tracking-tight">
                                Ada yang Bisa
                                <br />
                                <span className="text-slate-900">Kami Bantu?</span>
                            </h1>
                            <p className="text-slate-600 dark:text-gray-500 text-sm max-w-md leading-relaxed">
                                Cari jawaban cepat lewat FAQ di bawah, atau hubungi tim kami
                                langsung kalau butuh bantuan lebih lanjut.
                            </p>
                        </div>

                        <div className="flex gap-6 sm:gap-8 md:gap-10 flex-shrink-0">
                            {[
                                { value: '<1 jam', label: 'Respon Rata²' },
                                { value: '24/7', label: 'WhatsApp' },
                                { value: '4', label: 'Kategori' },
                            ].map(({ value, label }) => (
                                <div key={label} className="text-center">
                                    <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                                        {value}
                                    </p>
                                    <p className="text-[10px] sm:text-xs text-slate-600 dark:text-gray-600 mt-0.5">
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer navbar */}
            <div className="h-14 dark:h-17 sm:h-20 sticky top-0 z-20 bg-white dark:bg-black border-b border-slate-200/60 dark:border-white/5" />

            {/* Filter bar */}
            <div className="bg-white dark:bg-black border-b border-slate-200/60 dark:border-white/5 sticky top-10 dark:top-17 sm:top-18 z-50 backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <div className="relative w-full sm:w-72">
                        <svg
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 dark:text-gray-500 pointer-events-none"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                            />
                        </svg>
                        <input
                            type="text"
                            value={search}
                            onChange={handleSearch}
                            placeholder="Cari pertanyaan..."
                            className="w-full pl-9 pr-9 py-2 text-sm rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-indigo-400/20 transition-all"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-gray-300 transition-colors"
                            >
                                <svg
                                    className="w-3.5 h-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    <div className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-white/10" />

                    <div className="flex gap-1 flex-wrap overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {faqCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategory(cat)}
                                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${activeCategory === cat
                                        ? 'bg-indigo-600 text-white shadow-sm'
                                        : 'text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-700 dark:hover:text-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {filtered.length > 0 && (
                        <p className="text-xs text-slate-400 dark:text-gray-600 sm:ml-auto flex-shrink-0">
                            {filtered.length} pertanyaan ditemukan
                        </p>
                    )}
                </div>
            </div>

            {/* Main content */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
                    {/* FAQ list */}
                    <div className="lg:col-span-2">
                        {filtered.length === 0 ? (
                            <div className="text-center py-24 sm:py-32">
                                <p className="text-4xl sm:text-5xl mb-5">
                                    <MingcuteSearchLine />
                                </p>
                                <p className="text-slate-900 dark:text-white font-bold text-lg mb-2">
                                    Pertanyaan tidak ditemukan
                                </p>
                                <p className="text-slate-400 dark:text-gray-600 text-sm mb-6">
                                    Coba kata kunci lain atau ubah filter kategori
                                </p>
                                <button
                                    onClick={() => {
                                        setSearch('')
                                        setActiveCategory('Semua')
                                    }}
                                    className="text-xs font-semibold px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                                >
                                    Reset Filter
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {filtered.map((faq) => {
                                    const isOpen = openId === faq.id
                                    return (
                                        <div
                                            key={faq.id}
                                            className="rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/[0.02] overflow-hidden transition-colors"
                                        >
                                            <button
                                                onClick={() => toggleOpen(faq.id)}
                                                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                                            >
                                                <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                                                    {faq.question}
                                                </span>
                                                <svg
                                                    className={`w-4 h-4 flex-shrink-0 text-slate-400 dark:text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''
                                                        }`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </button>

                                            <div
                                                className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                                    }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <p className="px-5 pb-5 text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>

                    {/* Contact sidebar */}
                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-36 space-y-4">
                            <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl p-6">
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400 mb-4">
                                    Masih Butuh Bantuan?
                                </p>

                                <Link
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    className="flex items-center gap-3 p-3 rounded-lg border border-slate-200/60 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors mb-3 group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.11-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.6 0-3.1-.43-4.4-1.18l-.32-.19-3.03.8.81-2.95-.2-.31A7.94 7.94 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            Chat WhatsApp
                                        </p>
                                        <p className="text-[10px] text-slate-400 dark:text-gray-500">Respon tercepat</p>
                                    </div>
                                </Link>

                                <Link
                                    href="mailto:support@majakarsa.digital"
                                    className="flex items-center gap-3 p-3 rounded-lg border border-slate-200/60 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-4 h-4 text-indigo-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            support@majakarsa.digital
                                        </p>
                                        <p className="text-[10px] text-slate-400 dark:text-gray-500">Balasan 1x24 jam</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="rounded-2xl border border-indigo-100/80 dark:border-white/5 bg-white dark:bg-white/[0.02] p-6 text-center">
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400 mb-3">
                                    Punya Kebutuhan Custom?
                                </p>
                                <p className="text-slate-500 dark:text-gray-500 text-xs leading-relaxed mb-5">
                                    Ceritakan detail proyek Anda, tim kami akan bantu bangun dari nol.
                                </p>
                                <Link
                                    href="/buat"
                                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors"
                                >
                                    Diskusikan Kebutuhan Anda →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}