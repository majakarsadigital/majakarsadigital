'use client'

import Image from 'next/image'
import Link from 'next/link'
import { getProducts } from '@/lib/repositories/products.repository'
import { notFound, useParams } from 'next/navigation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { BxRevision, IconParkSolidPhoneTelephone, MaterialSymbolsEditSquare, MaterialSymbolsElectricBoltRounded, MaterialSymbolsLightWorkspacePremium, MaterialSymbolsResponsiveLayout, MaterialSymbolsRocket, RiRotateLockLine, StreamlineFlexWarrantyBadgeHighlight, StreamlineFreehandPhoneActions24HoursCall } from '@/public/assets/icons'
import { useEffect, useState } from 'react'
import { getProductImages } from '@/lib/repositories/product-images.repository'
import OrderModal from '@/components/OrderModal'

const categoryMeta: Record<string, { icon: string; color: string; bg: string; darkBg: string }> = {
    'Website': { icon: '🌐', color: 'text-blue-500', bg: 'bg-blue-50', darkBg: 'dark:bg-blue-500/10' },
    'Aplikasi': { icon: '📱', color: 'text-violet-500', bg: 'bg-violet-50', darkBg: 'dark:bg-violet-500/10' },
    'Web & App': { icon: '⚙️', color: 'text-white', bg: 'bg-indigo-50', darkBg: 'dark:bg-indigo-500/10' },
}

const features = [
    { icon: <MaterialSymbolsElectricBoltRounded />, title: 'Performa Tinggi', desc: 'Dibangun dengan teknologi modern yang memastikan loading cepat dan pengalaman pengguna yang mulus.' },
    { icon: <MaterialSymbolsResponsiveLayout />, title: 'Fully Responsive', desc: 'Tampil sempurna di semua perangkat - desktop, tablet, hingga smartphone.' },
    { icon: <RiRotateLockLine />, title: 'Keamanan Terjamin', desc: 'Standar keamanan industri diterapkan di setiap lapisan aplikasi.' },
    { icon: <MaterialSymbolsLightWorkspacePremium />, title: 'Desain Premium', desc: 'UI/UX dirancang oleh desainer berpengalaman dengan standar Behance-level.' },
    { icon: <MaterialSymbolsEditSquare />, title: 'Mudah Dikustomisasi', desc: 'Kode bersih dan terstruktur sehingga mudah dimodifikasi sesuai kebutuhan.' },
    { icon: <MaterialSymbolsRocket />, title: 'Siap Deploy', desc: 'Langsung bisa dideploy ke server atau cloud pilihan Anda tanpa konfigurasi rumit.' },
]

const items = [
    {
        value: "item-1",
        q: "Apakah saya bisa request fitur tambahan?",
        a:
            "Tentu! Setiap pembelian sudah termasuk satu sesi konsultasi gratis untuk mendiskusikan kebutuhan kustomisasi Anda.",
    },
    {
        value: "item-2",
        q: "Berapa lama proses pengerjaan?",
        a:
            "Tergantung kompleksitas, umumnya 7–21 hari kerja. Anda akan mendapatkan update progress secara berkala.",
    },
    {
        value: "item-3",
        q: "Apakah termasuk maintenance?",
        a:
            "Kami menyediakan garansi bug fix selama 30 hari setelah serah terima. Paket maintenance lanjutan tersedia terpisah.",
    },
    {
        value: "item-4",
        q: "Bagaimana metode pembayaran?",
        a:
            "Transfer bank, QRIS, dan e-wallet tersedia. Pembayaran bisa dilakukan 50% di awal dan 50% setelah selesai.",
    },
]

const techStack = ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'PostgreSQL', 'Vercel']

const faqs = [
    { q: 'Apakah saya bisa request fitur tambahan?', a: 'Tentu! Setiap pembelian sudah termasuk satu sesi konsultasi gratis untuk mendiskusikan kebutuhan kustomisasi Anda.' },
    { q: 'Berapa lama proses pengerjaan?', a: 'Tergantung kompleksitas, umumnya 7–21 hari kerja. Anda akan mendapatkan update progress secara berkala.' },
    { q: 'Apakah termasuk maintenance?', a: 'Kami menyediakan garansi bug fix selama 30 hari setelah serah terima. Paket maintenance lanjutan tersedia terpisah.' },
    { q: 'Bagaimana metode pembayaran?', a: 'Transfer bank, QRIS, dan e-wallet tersedia. Pembayaran bisa dilakukan 50% di awal dan 50% setelah selesai.' },
]

export default function ProductDetailPage() {
    const params = useParams()

    const [products, setProducts] = useState<any[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [images, setImages] = useState<any[]>([])
    const [activeImage, setActiveImage] = useState<string | null>(null)
    const [activeOrientation, setActiveOrientation] = useState<'landscape' | 'portrait'>('landscape')
    const [activeRatio, setActiveRatio] = useState<number>(16 / 9) // default sebelum gambar termuat
    const [orderOpen, setOrderOpen] = useState(false)

    useEffect(() => {
        getProducts()
            .then(data => setProducts(data))
            .finally(() => setLoading(false))
    }, [])

    // dihitung lebih awal (bukan hook, aman dipanggil sebelum early return)
    const product = products?.find(p => p.slug === params.id)

    useEffect(() => {
        if (!product?.id) return
        getProductImages(product.id).then(data => {
            setImages(data || [])
            const primary = data?.find((img: any) => img.is_primary) || data?.[0]
            setActiveImage(primary?.image_url || null)
        })
    }, [product?.id])

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Memuat...</div>
    }

    if (!product) {
        return <div>Produk tidak ditemukan</div>
    }

    const meta = categoryMeta[product.category]
    const related = products!.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 3)

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-black">

            <div className="bg-white dark:bg-black border-b border-slate-200 dark:border-white/5 px-6 py-4">
                <div className="mx-auto max-w-7xl flex items-center gap-2 text-xs text-slate-400 dark:text-gray-600">
                    <Link href="/" className="hover:text-slate-600 dark:hover:text-gray-400 transition-colors">Beranda</Link>
                    <span>/</span>
                    <Link href="/produk" className="hover:text-slate-600 dark:hover:text-gray-400 transition-colors">Produk</Link>
                    <span>/</span>
                    <span className="text-slate-900 dark:text-white font-medium">{product.name}</span>
                </div>
            </div>

            <section className="bg-white dark:bg-black border-b border-slate-200 dark:border-white/5">
                <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${meta.bg} ${meta.darkBg} ${meta.color} mb-6`}>
                            {meta.icon} {product.category}
                        </span>

                        {product.badge && (
                            <span className={`ml-2 inline-flex text-[9px] font-bold px-2.5 py-1 rounded-full ${product.badge === 'Popular' ? 'bg-indigo-500 text-white' : 'bg-emerald-500 text-white'}`}>
                                {product.badge === 'Popular' ? '🔥 Popular' : '✨ New'}
                            </span>
                        )}

                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mt-4 mb-4">
                            {product.name}
                        </h1>

                        <p className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed mb-8">
                            {product.desc} Solusi ini dirancang untuk membantu bisnis Anda tumbuh lebih cepat
                            dengan teknologi terdepan dan desain yang tak tertandingi.
                        </p>

                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                ))}
                            </div>
                            <span className="text-sm font-semibold text-slate-900 dark:text-white">4.9</span>
                            <span className="text-xs text-slate-400 dark:text-gray-600">(128 ulasan)</span>
                            <span className="text-xs text-slate-300 dark:text-white/10">•</span>
                            <span className="text-xs text-slate-400 dark:text-gray-600">340+ klien puas</span>
                        </div>

                        <div className="flex gap-2 flex-wrap mb-10">
                            {techStack.map(t => (
                                <span key={t} className="text-[10px] font-semibold px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400 bg-slate-50 dark:bg-white/[0.02]">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-end gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                            <div>
                                <p className="text-xs text-slate-400 dark:text-gray-600 mb-1">Harga mulai dari</p>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">{Number(product.price).toLocaleString('id-ID')}</p>
                                <p className="text-sm text-slate-400 dark:text-gray-600 line-through mt-0.5">{Number(product.original_price).toLocaleString('id-ID')}</p>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <button onClick={() => setOrderOpen(true)} className="w-full cursor-pointer py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors">
                                    Pesan Sekarang
                                </button>
                                <a href="https://wa.me/628135382932" target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center py-3 px-6 cursor-pointer rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                                    Konsultasi Gratis
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-6 mt-6">

                            <span className="text-xs flex gap-2">
                                <StreamlineFlexWarrantyBadgeHighlight className='size-4' />
                                <span className='text-slate-500 dark:text-gray-500'>Garansi 30 hari</span>
                            </span>
                            <span className="text-xs flex gap-2">
                                <BxRevision className='size-4' />
                                <span className='text-slate-500 dark:text-gray-500'>Revisi 3x</span>
                            </span>
                            <span className="text-xs flex gap-2">
                                <StreamlineFreehandPhoneActions24HoursCall className='size-4' />
                                <span className='text-slate-500 dark:text-gray-500'>Support 24/7</span>
                            </span>

                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/20 blur-3xl rounded-full scale-75" />

                        <div className="relative rounded overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                            {/* <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-100 dark:bg-white/[0.06] border-b border-slate-200 dark:border-white/5">
                                <span className="w-3 h-3 rounded-full bg-red-400" />
                                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                                <span className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="flex-1 mx-3 h-6 rounded-md bg-white dark:bg-white/10 flex items-center px-3 gap-2">
                                    <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" /></svg>
                                    <span className="text-[10px] text-slate-400 dark:text-gray-600">majakarsadigital.site/produk/{product.name.toLowerCase().replace(/\s+/g, '-')}</span>
                                </div>
                            </div> */}
                            <div className="relative h-80 overflow-hidden">
                                <Image src={product.image_url} alt={product.name} fill className="object-cover object-top" />
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-white dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 shadow-xl">
                            <p className="text-[10px] text-slate-400 dark:text-gray-600 mb-0.5">Hemat sekarang</p>
                            <p className="text-lg font-bold text-emerald-500">{product.discount}</p>
                        </div>
                    </div>
                </div>
                {images.length > 0 && (
                    <section className="mx-auto max-w-7xl px-6  border-t py-16">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4 items-start">
                            {/* Gambar utama - ukuran container mengikuti rasio asli gambar, tanpa crop */}
                            <div className="relative h-[520px] overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
                                {/* Background */}
                                {activeImage && (
                                    <Image
                                        src={activeImage}
                                        alt=""
                                        fill
                                        priority
                                        className="absolute inset-0 object-cover scale-125 blur-3xl opacity-30 dark:opacity-40"
                                    />
                                )}

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-xl" />

                                {/* Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10 dark:from-black/10 dark:via-transparent dark:to-black/20" />

                                {/* Image */}
                                <div className="relative flex h-full items-center justify-center p-5">
                                    {activeImage && (
                                        <Image
                                            src={activeImage}
                                            alt={product.name}
                                            width={1600}
                                            height={1600}
                                            className="max-h-full max-w-full object-contain drop-shadow-2xl"
                                        />
                                    )}
                                </div>
                            </div>
                            {/* Thumbnail - tetap tanpa crop, hanya dikemas dalam kotak seragam */}
                            <div className="grid grid-cols-4 lg:grid-cols-2 gap-3">
                                {images.map((img) => (
                                    <button
                                        key={img.id}
                                        onClick={() => setActiveImage(img.image_url)}
                                        className={`relative aspect-square rounded-xl overflow-hidden border-2 bg-slate-100 dark:bg-white/[0.04] flex items-center justify-center transition-all ${activeImage === img.image_url
                                            ? 'border-indigo-500 ring-2 ring-indigo-500/30'
                                            : 'border-slate-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/40'
                                            }`}
                                    >
                                        <Image
                                            src={img.image_url}
                                            alt={img.alt_text || product.name}
                                            fill
                                            className="object-contain p-1"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="text-center mb-14">
                    <p className="text-xs tracking-[0.3em] text-white dark:text-indigo-400 uppercase font-semibold mb-3">Keunggulan</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Kenapa Pilih Produk Ini?
                    </h2>
                    <p className="text-slate-500 dark:text-gray-500 max-w-xl mx-auto">
                        Bukan sekadar template - ini adalah fondasi digital yang siap membawa bisnis Anda ke level berikutnya.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f) => (
                        <div key={f.title} className="p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:border-indigo-200 dark:hover:border-indigo-500/20 hover:shadow-lg transition-all duration-300">
                            <span className="text-3xl mb-4 block">{f.icon}</span>
                            <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-2">{f.title}</h3>
                            <p className="text-slate-500 dark:text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white dark:bg-white/[0.01] border-y border-slate-200 dark:border-white/5 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-14">
                        <p className="text-xs tracking-[0.3em] text-white dark:text-indigo-400 uppercase font-semibold mb-3">Alur Kerja</p>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Dari Brief ke Produk Jadi</h2>
                        <p className="text-slate-500 dark:text-gray-500 max-w-lg mx-auto text-sm">Proses transparan dan terstruktur - Anda tahu apa yang terjadi di setiap tahap.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Konsultasi', desc: 'Diskusi kebutuhan, tujuan bisnis, dan ekspektasi Anda secara mendalam.' },
                            { step: '02', title: 'Desain', desc: 'Wireframe dan mockup dikirim untuk review dan persetujuan Anda.' },
                            { step: '03', title: 'Pengembangan', desc: 'Tim developer kami membangun produk sesuai spesifikasi yang disepakati.' },
                            { step: '04', title: 'Serah Terima', desc: 'Testing, revisi final, lalu produk siap diluncurkan ke publik.' },
                        ].map((s) => (
                            <div key={s.step} className="relative">
                                <p className="text-5xl font-black text-slate-100 dark:text-white/10 mb-4 select-none">{s.step}</p>
                                <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-2 -mt-8">{s.title}</h3>
                                <p className="text-slate-500 dark:text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-20">
                <div className="text-center mb-14">
                    <p className="text-xs tracking-[0.3em] text-white dark:text-indigo-400 uppercase font-semibold mb-3">FAQ</p>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Pertanyaan yang Sering Diajukan</h2>
                </div>

                <Accordion
                    className="max-w-full"
                >
                    {items.map((item) => (
                        <AccordionItem key={item.value} value={item.value}>
                            <AccordionTrigger>{item.q}</AccordionTrigger>
                            <AccordionContent>{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>            </section>

            {related.length > 0 && (
                <section className="bg-white dark:bg-white/[0.01] border-t border-slate-200 dark:border-white/5 py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="flex items-end justify-between mb-10">
                            <div>
                                <p className="text-xs tracking-[0.3em] text-white dark:text-indigo-400 uppercase font-semibold mb-2">Rekomendasi</p>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Produk Serupa</h2>
                            </div>
                            <Link href="/produk" className="text-xs font-semibold text-white hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                                Lihat Semua →
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {related.map((p) => {
                                const m = categoryMeta[p.category]
                                return (
                                    <Link key={p.id} href={`/produk/${p.slug}`}
                                        className="group rounded-lg border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/10 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                                    >
                                        <div>
                                            {/* Thumbnail */}
                                            <div className="relative h-56 sm:h-64 bg-slate-100 dark:bg-white/[0.03] overflow-hidden">
                                                {p.image_url && (
                                                    <Image
                                                        src={p.image_url}
                                                        alt={p.name}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                )}
                                                {p.discount_percent && (
                                                    <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white">
                                                        {p.discount_percent}
                                                    </span>
                                                )}
                                                {p.badge && (
                                                    <span
                                                        className={`absolute top-3 right-3 text-[9px] font-bold px-2 py-1 rounded-full backdrop-blur-sm ${p.badge === 'Popular'
                                                            ? 'bg-indigo-500/90 text-white'
                                                            : 'bg-emerald-500/90 text-white'
                                                            }`}
                                                    >
                                                        {p.badge === 'Popular' ? '🔥 Popular' : '✨ New'}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Body */}
                                            <div className="p-4 sm:p-5">
                                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase py-1 rounded-full mb-3">
                                                    {p.category}
                                                </span>
                                                <h3 className="text-slate-900 dark:text-white font-bold text-[15px] leading-snug mb-1.5">
                                                    {p.name}
                                                </h3>
                                                <p className="text-slate-500 dark:text-gray-500 text-xs leading-relaxed mb-4">
                                                    {p.description}
                                                </p>

                                                {/* Tech tags */}
                                                <div className="flex gap-1.5 flex-wrap mb-4">
                                                    {(['Next.js', 'Tailwind', 'TypeScript'] as const).map(tag => (
                                                        <span
                                                            key={tag}
                                                            className="text-[9px] font-semibold px-2 py-0.5 rounded border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-500"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Footer */}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}

            <section className="mx-auto max-w-4xl px-6 py-20 text-center">
                <p className="text-xs tracking-[0.3em] text-white dark:text-indigo-400 uppercase font-semibold mb-4">Siap Mulai?</p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Wujudkan Ide Digital Anda <br />
                    <span className="text-white">Bersama Kami</span>
                </h2>
                <p className="text-slate-500 dark:text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
                    Jangan biarkan ide brilian Anda terhenti di atas kertas. Tim kami siap mengubahnya
                    menjadi produk digital yang nyata, fungsional, dan berdampak.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => setOrderOpen(true)} className="px-8 cursor-pointer py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-colors">
                        Pesan {product.name}
                    </button>
                    <button className="px-8 py-3.5 border cursor-pointer border-slate-900/20 dark:border-white/20 text-slate-900 dark:text-white font-semibold rounded-full hover:bg-slate-900/5 dark:hover:bg-white/5 transition-colors">
                        Hubungi Tim Kami
                    </button>
                </div>
            </section>
            <OrderModal
                isOpen={orderOpen}
                onClose={() => setOrderOpen(false)}
                productName={product.name}
                productPrice={product.price}
                productCategory={product.category}
            />
        </main>
    )
}