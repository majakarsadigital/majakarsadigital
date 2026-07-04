import { Fa7SolidHandshakeAngle, MaterialSymbolsRocket, MdiAccountStar, MdiEye, MdiGithub, MingcuteTargetFill, PepiconsPopStarFilled, StashDomain, StreamlinePlumpBrowserWebsite1Remix } from '@/public/assets/icons'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Sponsor - Majakarsa Digital',
    description: 'Sponsori Majakarsa Digital dan tampilkan brand Anda',
}

const stats = [
    { label: 'Pengunjung Bulanan', value: '12K', icon: <MdiEye /> },
    { label: 'GitHub Stars', value: '850', icon: <PepiconsPopStarFilled /> },
    { label: 'npm Downloads / bln', value: '4.2K', icon: <MdiAccountStar className='size-6' /> },
    { label: 'Domain Rating', value: 'DR 38', icon: <StashDomain className='size-6' /> },
]
const timestamp = new Date().toLocaleString('id-ID', {
  dateStyle: 'full',
  timeStyle: 'medium',
})

const tiers = [
    {
        name: 'Sponsor',
        price: 'Rp 100rb',
        period: '/bln',
        badge: null,
        benefits: [
            'Logo di halaman beranda Majakarsa',
            'Logo di halaman Sponsors',
            'Logo di GitHub BACKERS.md',
            'Logo di GitHub README.md',
        ],
    },
    {
        name: 'Gold Sponsor',
        price: 'Rp 250rb',
        period: '/bln',
        badge: 'Visibilitas Terbaik',
        benefits: [
            'Logo di navigasi samping website',
            'Logo di halaman beranda Majakarsa',
            'Logo di halaman Sponsors',
            'Logo di GitHub BACKERS.md',
            'Logo di GitHub README.md',
        ],
    },
    {
        name: 'Platinum Sponsor',
        price: 'Rp 500rb',
        period: '/bln',
        badge: 'Eksklusif',
        benefits: [
            'Logo besar di hero section beranda',
            'Logo di navigasi samping website',
            'Mention khusus di newsletter',
            'Logo di halaman Sponsors',
            'Logo di GitHub BACKERS.md & README.md',
            'Link backlink dofollow',
        ],
    },
]

export default function SponsorPage() {
    return (
        <main className="min-h-screen bg-[#f4f5f7] dark:bg-[#080808]">

            <section className="bg-white dark:bg-black border-b border-slate-200/60 dark:border-white/5">
                <div className="mx-auto max-w-5xl px-6 py-20">
                    <div className="flex items-start gap-5 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                            M
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                                Majakarsa Digital
                            </h1>
                            <p className="text-slate-500 dark:text-gray-500 text-sm max-w-xl leading-relaxed">
                                Agensi digital yang membangun website, aplikasi, dan sistem custom
                                untuk bisnis di seluruh Indonesia - dipercaya 30+ klien aktif.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 mb-10">
                        <Link href="/" className="text-xs flex gap-2 font-semibold px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                            <StreamlinePlumpBrowserWebsite1Remix className='size-4' /> Website
                        </Link>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs flex gap-2 font-semibold px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                            <MdiGithub className='size-4' /> GitHub
                        </a>
                        <span className="text-xs font-medium px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-gray-600">
                            majakarsadigital.com
                        </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((s) => (
                            <div key={s.label} className="p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 bg-[#f4f5f7] dark:bg-white/[0.02]">
                                <span className="text-xl block mb-2">{s.icon}</span>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">{s.value}</p>
                                <p className="text-[11px] text-slate-400 dark:text-gray-600 mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className=" max-w-full px-6 py-16 dark:bg-black">
                <div className='max-w-7xl mx-auto'>
                    <div className="text-center mb-12">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 dark:text-indigo-400 mb-3">
                            Kenapa Sponsor Kami
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                            Dukungan Anda, Pertumbuhan Bersama
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { icon: <MingcuteTargetFill />, title: 'Audiens Tertarget', desc: 'Pengunjung kami adalah pemilik bisnis dan developer yang aktif mencari solusi digital.' },
                            { icon: <MaterialSymbolsRocket />, title: 'Tumbuh Bersama', desc: 'Dukungan Anda membantu kami terus mengembangkan produk dan konten berkualitas.' },
                            { icon: <Fa7SolidHandshakeAngle />, title: 'Brand Awareness', desc: 'Logo dan tautan Anda tampil di halaman dengan traffic dan engagement tinggi.' },
                        ].map((f) => (
                            <div key={f.title} className="p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 bg-white dark:bg-white/[0.02]">
                                <span className="text-2xl block mb-3">{f.icon}</span>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2">{f.title}</h3>
                                <p className="text-xs text-slate-500 dark:text-gray-500 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="services" className="relative z-10 bg-slate-50 dark:bg-[#0a0a0a] py-20" >
                <div
                    className="absolute inset-0 -z-50 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: "url('/assets/pictures/background8.jpg')",
                    }}
                />
                <div className="absolute inset-0 -z-40 bg-white/90 dark:bg-black/80" />

                <div
                    className="absolute inset-0 -z-40 pointer-events-none hidden dark:block"
                    style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%)' }}
                />
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center mb-14">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 dark:text-indigo-400 mb-3">
                            Paket Sponsorship
                        </p>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Pilih Paket yang Sesuai</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {tiers.map((tier, i) => (
                            <div
                                key={tier.name}
                                className={`relative rounded-2xl p-7 flex flex-col ${i === 1
                                    ? 'border-2 border-indigo-500 bg-white dark:bg-white/[0.03] shadow-xl shadow-indigo-500/10 scale-[1.02]'
                                    : 'border border-slate-200/80 dark:border-white/5 bg-[#f4f5f7] dark:bg-white/[0.02]'
                                    }`}
                            >
                                {tier.badge && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-3 py-1 rounded-full bg-indigo-500 text-white whitespace-nowrap">
                                        {tier.badge}
                                    </span>
                                )}

                                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">{tier.name}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-3xl font-bold text-slate-900 dark:text-white">{tier.price}</span>
                                    <span className="text-sm text-slate-400 dark:text-gray-600">{tier.period}</span>
                                </div>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {tier.benefits.map((b) => (
                                        <li key={b} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                                            <svg className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {b}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`https://wa.me/628135382932?text=${encodeURIComponent(
`Halo Tim Majakarsa,

Waktu Pengajuan: ${timestamp}

Perkenalkan, saya tertarik untuk menjadi ${tier.name} dengan paket ${tier.price}${tier.period}.

Saya ingin mendapatkan informasi lebih lanjut mengenai:
• Benefit yang akan diperoleh
• Durasi sponsorship
• Mekanisme pembayaran
• Proses penayangan logo dan brand kami
• Ketentuan kerja sama lainnya

Informasi perusahaan/brand:
Nama Brand:
Website:
Bidang Usaha:

Mohon dapat menghubungi saya untuk diskusi lebih lanjut.
Terima kasih.`
)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full text-center py-3 rounded-xl text-sm font-semibold transition-colors ${i === 1
                                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                        : 'border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5'
                                        }`}
                                >
                                    Jadi {tier.name} →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className=" dark:bg-black px-6 py-20 text-center">
                <div className='mx-auto max-w-3xl'>
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 dark:text-indigo-400 mb-4">
                        Punya Pertanyaan?
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Hubungi Kami untuk Paket Custom
                    </h2>
                    <p className="text-slate-500 dark:text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                        Butuh penempatan logo khusus atau paket jangka panjang? Tim kami siap
                        mendiskusikan kebutuhan sponsorship Anda secara personal.
                    </p>
                    <a

                        href="https://wa.me/628135382932?text=Halo%20Tim%20Majakarsa,%0A%0ASaya%20tertarik%20untuk%20mendiskusikan%20paket%20sponsorship%20custom.%20Mohon%20dapat%20menghubungi%20saya%20untuk%20diskusi%20lebih%20lanjut.%0A%0ATerima%20kasih."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
                    >
                        Hubungi via WhatsApp →
                    </a>
                </div>
            </section>
        </main>
    )
}