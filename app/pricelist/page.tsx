import { Fa7SolidHandshakeAngle, MdiCheckDecagram } from '@/public/assets/icons'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Pricelist - Majakarsa Digital',
    description:
        'Daftar harga layanan pembuatan website, aplikasi, dan sistem informasi custom dari Majakarsa Digital.',
}

type PricelistItem = {
    name: string
    desc: string
    price: string
    popular?: boolean
}

type Category = {
    id: string
    title: string
    subtitle: string
    items: PricelistItem[]
}

const categories: Category[] = [
    {
        id: 'website',
        title: 'Website',
        subtitle: 'Company profile, landing page, hingga website dengan fitur dinamis.',
        items: [
            {
                name: 'Landing Page',
                desc: 'Satu halaman, fokus konversi - cocok untuk produk atau campaign.',
                price: 'Rp 1.500.000',
            },
            {
                name: 'Company Profile',
                desc: 'Multi-halaman (Beranda, Tentang, Layanan, Kontak) dengan CMS sederhana.',
                price: 'Rp 3.500.000',
                popular: true,
            },
            {
                name: 'E-Commerce',
                desc: 'Katalog produk, keranjang, pembayaran, dan dashboard admin.',
                price: 'Rp 7.500.000',
            },
            {
                name: 'Website Custom',
                desc: 'Fitur dan alur kerja dirancang sepenuhnya sesuai kebutuhan bisnis.',
                price: 'Hubungi Kami',
            },
        ],
    },
    {
        id: 'aplikasi',
        title: 'Aplikasi Mobile',
        subtitle: 'Aplikasi Android & iOS, native maupun cross-platform.',
        items: [
            {
                name: 'Aplikasi MVP',
                desc: 'Fitur inti untuk validasi ide produk dengan cepat.',
                price: 'Rp 6.000.000',
            },
            {
                name: 'Aplikasi Bisnis',
                desc: 'Autentikasi, integrasi API, notifikasi, dan panel admin.',
                price: 'Rp 12.000.000',
                popular: true,
            },
            {
                name: 'Aplikasi Enterprise',
                desc: 'Skala besar, multi-role, integrasi sistem internal perusahaan.',
                price: 'Hubungi Kami',
            },
        ],
    },
    {
        id: 'sistem-informasi',
        title: 'Sistem Informasi',
        subtitle: 'Sistem internal untuk mengelola data, proses, dan laporan bisnis.',
        items: [
            {
                name: 'Sistem Inventaris',
                desc: 'Pencatatan stok, transaksi keluar-masuk, dan laporan otomatis.',
                price: 'Rp 5.000.000',
            },
            {
                name: 'Sistem Akademik',
                desc: 'Manajemen data siswa/mahasiswa, nilai, dan jadwal - untuk institusi pendidikan.',
                price: 'Rp 8.500.000',
                popular: true,
            },
            {
                name: 'Sistem Manajemen Internal (ERP ringan)',
                desc: 'Modular: HR, keuangan, proyek - disesuaikan dengan struktur organisasi.',
                price: 'Hubungi Kami',
            },
        ],
    },
]

const addOns = [
    { name: 'Maintenance Bulanan', price: 'mulai Rp 300.000/bln' },
    { name: 'Desain UI/UX Tambahan', price: 'mulai Rp 1.000.000' },
    { name: 'Integrasi Payment Gateway', price: 'mulai Rp 750.000' },
    { name: 'Migrasi & Hosting Setup', price: 'mulai Rp 500.000' },
]

const included = [
    'Konsultasi kebutuhan sebelum mulai pengerjaan',
    'Revisi sesuai paket yang dipilih',
    'Source code sepenuhnya milik klien',
    'Dukungan teknis pasca-rilis',
]

export default function PricelistPage() {
    return (
        <main className="min-h-screen relative z-10 bg-white dark:bg-black">
            <div
                className="absolute inset-0 -z-50 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: "url('/assets/pictures/background2.jpg')",
                }}
            />
            <div className="absolute inset-0 -z-40 bg-white/90 dark:bg-black/80" />

            <div
                className="absolute inset-0 -z-40 pointer-events-none hidden dark:block"
                style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%)' }}
            />

            <section className="bg-gradient-to-b from-[#fafbff] to-white dark:from-black dark:to-black">
                <div className="mx-auto max-w-5xl px-6 py-24 pb-4 text-center">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400">
                        Pricelist
                    </p>
                    <h1 className="mb-6 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Harga yang Transparan, Tanpa Biaya Tersembunyi
                    </h1>
                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500 dark:text-gray-400">
                        Semua harga di bawah adalah estimasi mulai dari, tergantung kompleksitas
                        fitur dan kebutuhan spesifik proyek Anda. Hubungi kami untuk penawaran
                        yang lebih akurat.
                    </p>
                </div>
            </section>
            <div className="border-b border-slate-200/70 dark:border-white/5  h-20 sticky top-0 bg-white dark:bg-black">

            </div>
            <nav className="sticky top-17 z-10 border-b border-slate-200/70 dark:border-white/5 bg-white/90 dark:bg-black backdrop-blur">
                <div className="mx-auto max-w-5xl px-6 py-4 flex flex-wrap gap-3 justify-center">
                    {categories.map((c) => (
                        <a
                            key={c.id}
                            href={`#${c.id}`}
                            className="text-xs font-semibold px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                        >
                            {c.title}
                        </a>
                    ))}
                    <a
                        href="#tambahan"
                        className="text-xs font-semibold px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                    >
                        Layanan Tambahan
                    </a>
                </div>
            </nav>

            <div className="mx-auto max-w-5xl px-6 py-20 space-y-20">
                {categories.map((cat) => (
                    <section key={cat.id} id={cat.id} className="scroll-mt-24">
                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                                {cat.title}
                            </h2>
                            <p className="text-sm text-slate-500 dark:text-gray-500 leading-relaxed">
                                {cat.subtitle}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200/80 dark:border-white/5 overflow-hidden divide-y divide-slate-200/80 dark:divide-white/5">
                            {cat.items.map((item) => (
                                <div
                                    key={item.name}
                                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-5 ${item.popular
                                        ? 'bg-indigo-50/60 dark:bg-indigo-500/[0.06]'
                                        : 'bg-white dark:bg-white/[0.02]'
                                        }`}
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                                                {item.name}
                                            </h3>
                                            {item.popular && (
                                                <span className="text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-indigo-600 text-white">
                                                    Paling Populer
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-slate-500 dark:text-gray-500 leading-relaxed max-w-md">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between sm:justify-end gap-4 sm:min-w-[180px]">
                                        <div className="text-right">
                                            <p className="text-[10px] text-slate-400 dark:text-gray-600">mulai dari</p>
                                            <p className="font-bold text-slate-900 dark:text-white text-sm whitespace-nowrap">
                                                {item.price}
                                            </p>
                                        </div>
                                        <a
                                            href="https://wa.me/6281234567890"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-semibold px-4 py-2 rounded-full bg-slate-900 dark:bg-indigo-500 text-white hover:bg-slate-700 dark:hover:bg-indigo-600 transition-colors whitespace-nowrap"
                                        >
                                            Tanya
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                <section id="tambahan" className="scroll-mt-24">
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            Layanan Tambahan
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-gray-500 leading-relaxed">
                            Opsional, dapat ditambahkan ke paket manapun sesuai kebutuhan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {addOns.map((a) => (
                            <div
                                key={a.name}
                                className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl border border-slate-200/80 dark:border-white/5 bg-white dark:bg-white/[0.02]"
                            >
                                <span className="text-sm text-slate-700 dark:text-gray-300">{a.name}</span>
                                <span className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 whitespace-nowrap">
                                    {a.price}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <section className="border-y border-slate-200/70 dark:border-white/5 bg-[#fafbff] dark:bg-white/[0.01]">
                <div className="mx-auto max-w-5xl px-6 py-16">
                    <div className="flex items-start gap-3 mb-8">
                        <span className="text-2xl text-indigo-500"><Fa7SolidHandshakeAngle /></span>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                                Termasuk di Setiap Paket
                            </h2>
                            <p className="text-sm text-slate-500 dark:text-gray-500">
                                Standar layanan yang selalu kami berikan, apa pun paketnya.
                            </p>
                        </div>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {included.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-gray-400">
                                <span className="text-indigo-500 mt-0.5"><MdiCheckDecagram className="size-4" /></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="mx-auto max-w-3xl px-6 py-20 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Tidak Menemukan Paket yang Pas?
                </h2>
                <p className="text-slate-500 dark:text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                    Ceritakan kebutuhan proyek Anda, dan kami akan bantu rancang paket serta
                    estimasi harga yang sesuai.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
                    >
                        Konsultasi via WhatsApp →
                    </a>
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5 text-sm font-semibold transition-colors"
                    >
                        Lihat Portfolio
                    </Link>
                </div>
            </section>
        </main>
    )
}