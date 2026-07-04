'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getProjects } from '@/lib/repositories/projects.repository'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
    MaterialSymbolsEditSquare,
    MaterialSymbolsElectricBoltRounded,
    MaterialSymbolsLightWorkspacePremium,
    MaterialSymbolsResponsiveLayout,
    MaterialSymbolsRocket,
    RiRotateLockLine,
} from '@/public/assets/icons'
import { useEffect, useState } from 'react'

type Project = {
    id: string
    slug: string
    title: string
    category: string
    description: string
    image_url: string
    tech_stack: string | null
    year: number
    color: string | null
    sort_order: number
    is_featured: boolean
    created_at: string
    updated_at: string | null
}

const categoryMeta: Record<string, { icon: string; color: string; bg: string; darkBg: string }> = {
    'Website': { icon: '🌐', color: 'text-blue-500', bg: 'bg-blue-50', darkBg: 'dark:bg-blue-500/10' },
    'Aplikasi': { icon: '📱', color: 'text-violet-500', bg: 'bg-violet-50', darkBg: 'dark:bg-violet-500/10' },
    'Web & App': { icon: '⚙️', color: 'text-indigo-500', bg: 'bg-indigo-50', darkBg: 'dark:bg-indigo-500/10' },
}

const fallbackMeta = { icon: '🚀', color: 'text-indigo-500', bg: 'bg-indigo-50', darkBg: 'dark:bg-indigo-500/10' }

const features = [
    { icon: <MaterialSymbolsElectricBoltRounded />, title: 'Performa Tinggi', desc: 'Dibangun dengan teknologi modern yang memastikan loading cepat dan pengalaman pengguna yang mulus.' },
    { icon: <MaterialSymbolsResponsiveLayout />, title: 'Fully Responsive', desc: 'Tampil sempurna di semua perangkat - desktop, tablet, hingga smartphone.' },
    { icon: <RiRotateLockLine />, title: 'Keamanan Terjamin', desc: 'Standar keamanan industri diterapkan di setiap lapisan aplikasi.' },
    { icon: <MaterialSymbolsLightWorkspacePremium />, title: 'Desain Premium', desc: 'UI/UX dirancang dengan standar Behance-level, detail, dan konsisten.' },
    { icon: <MaterialSymbolsEditSquare />, title: 'Kode Bersih', desc: 'Struktur kode rapi dan terdokumentasi sehingga mudah dikembangkan lebih lanjut.' },
    { icon: <MaterialSymbolsRocket />, title: 'Siap Produksi', desc: 'Sudah melewati proses testing dan siap untuk deployment ke lingkungan production.' },
]

const faqs = [
    { value: 'item-1', q: 'Apakah source code proyek ini tersedia?', a: 'Untuk proyek client, source code menjadi hak milik client. Namun kami bisa mendiskusikan pembuatan proyek serupa untuk kebutuhan Anda.' },
    { value: 'item-2', q: 'Bisakah dibuatkan proyek serupa untuk bisnis saya?', a: 'Tentu! Hubungi kami untuk sesi konsultasi gratis dan kami akan menyesuaikan solusi dengan kebutuhan spesifik Anda.' },
    { value: 'item-3', q: 'Berapa lama proses pengerjaan proyek seperti ini?', a: 'Tergantung kompleksitas fitur, umumnya berkisar 7–21 hari kerja dengan update progress berkala.' },
    { value: 'item-4', q: 'Teknologi apa saja yang digunakan?', a: 'Stack teknologi bervariasi tergantung kebutuhan proyek, umumnya menggunakan Next.js, TypeScript, Tailwind CSS, dan Supabase/PostgreSQL.' },
]

export default function ProjectDetailPage() {
    const params = useParams()

    const [projects, setProjects] = useState<Project[] | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProjects()
            .then(data => setProjects(data))
            .finally(() => setLoading(false))
    }, [])

    const project = projects?.find(p => p.slug === params.id)

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-slate-400 dark:text-gray-600">Memuat...</div>
    }

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center text-slate-400 dark:text-gray-600">Proyek tidak ditemukan</div>
    }

    const meta = categoryMeta[project.category] || fallbackMeta
    const accent = project.color || '#6366f1'
    const techList = (project.tech_stack || '')
        .split(',')
        .map(t => t.trim())
        .filter(Boolean)
    const related = projects!
        .filter(p => p.category === project.category && p.slug !== project.slug)
        .slice(0, 3)

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-black">

            {/* Breadcrumb */}
            <div className="bg-white dark:bg-black border-b border-slate-200 dark:border-white/5 px-6 py-4">
                <div className="mx-auto max-w-7xl flex items-center gap-2 text-xs text-slate-400 dark:text-gray-600">
                    <Link href="/" className="hover:text-slate-600 dark:hover:text-gray-400 transition-colors">Beranda</Link>
                    <span>/</span>
                    <Link href="/proyek" className="hover:text-slate-600 dark:hover:text-gray-400 transition-colors">Proyek</Link>
                    <span>/</span>
                    <span className="text-slate-900 dark:text-white font-medium">{project.title}</span>
                </div>
            </div>

            {/* Hero */}
            <section className="bg-white dark:bg-black border-b border-slate-200 dark:border-white/5">
                <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${meta.bg} ${meta.darkBg} ${meta.color}`}>
                                {meta.icon} {project.category}
                            </span>

                            {project.is_featured && (
                                <span
                                    className="inline-flex items-center gap-1 text-[9px] font-bold px-2.5 py-1 rounded-full text-white"
                                    style={{ backgroundColor: accent }}
                                >
                                    ⭐ Featured
                                </span>
                            )}

                            <span className="text-[10px] font-semibold text-slate-400 dark:text-gray-600">
                                {project.year}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
                            {project.title}
                        </h1>

                        <p className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed mb-8">
                            {project.description}
                        </p>

                        {techList.length > 0 && (
                            <div className="flex gap-2 flex-wrap mb-10">
                                {techList.map(t => (
                                    <span
                                        key={t}
                                        className="text-[10px] font-semibold px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400 bg-slate-50 dark:bg-white/[0.02]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                className="py-3 px-6 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90"
                                style={{ backgroundColor: accent }}
                            >
                                Diskusikan Proyek Serupa →
                            </button>
                            <Link
                                href="/proyek"
                                className="py-3 px-6 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-center"
                            >
                                Kembali ke Portofolio
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div
                            className="absolute inset-0 blur-3xl rounded-full scale-75 opacity-20 dark:opacity-30"
                            style={{ backgroundColor: accent }}
                        />

                        <div className="relative rounded overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                            {/* <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-100 dark:bg-white/[0.06] border-b border-slate-200 dark:border-white/5">
                                <span className="w-3 h-3 rounded-full bg-red-400" />
                                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                                <span className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="flex-1 mx-3 h-6 rounded-md bg-white dark:bg-white/10 flex items-center px-3">
                                    <span className="text-[10px] text-slate-400 dark:text-gray-600 truncate">
                                        {project.slug}
                                    </span>
                                </div>
                            </div> */}
                            <div className="relative h-80 overflow-hidden">
                                <Image src={project.image_url} alt={project.title} fill className="object-cover object-top" />
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-white dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 shadow-xl">
                            <p className="text-[10px] text-slate-400 dark:text-gray-600 mb-0.5">Tahun Pengerjaan</p>
                            <p className="text-lg font-bold" style={{ color: accent }}>{project.year}</p>
                        </div>
                    </div>
                </div>

                {/* Screenshot besar full-width */}
                <div className="mx-auto max-w-7xl px-6 border-t border-slate-200 dark:border-white/5 py-16">
                    <div className="relative h-[520px] overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
                        <Image
                            src={project.image_url}
                            alt=""
                            fill
                            priority
                            className="absolute inset-0 object-cover scale-125 blur-3xl opacity-30 dark:opacity-40"
                        />
                        <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-xl" />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10 dark:from-black/10 dark:via-transparent dark:to-black/20" />
                        <div className="relative flex h-full items-center justify-center p-5">
                            <Image
                                src={project.image_url}
                                alt={project.title}
                                width={1600}
                                height={1600}
                                className="max-h-full max-w-full object-contain drop-shadow-2xl rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Fitur / Sorotan Teknis */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="text-center mb-14">
                    <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: accent }}>Sorotan</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Kenapa Proyek Ini Menonjol?
                    </h2>
                    <p className="text-slate-500 dark:text-gray-500 max-w-xl mx-auto">
                        Dibangun dengan standar kualitas tinggi, dari performa hingga pengalaman pengguna.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f) => (
                        <div key={f.title} className="p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:shadow-lg transition-all duration-300">
                            <span className="text-3xl mb-4 block">{f.icon}</span>
                            <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-2">{f.title}</h3>
                            <p className="text-slate-500 dark:text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Alur Pengerjaan */}
            <section className="bg-white dark:bg-white/[0.01] border-y border-slate-200 dark:border-white/5 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-14">
                        <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: accent }}>Alur Kerja</p>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Dari Brief ke Proyek Jadi</h2>
                        <p className="text-slate-500 dark:text-gray-500 max-w-lg mx-auto text-sm">Proses transparan dan terstruktur di setiap tahap pengerjaan.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Konsultasi', desc: 'Diskusi kebutuhan, tujuan, dan ekspektasi secara mendalam.' },
                            { step: '02', title: 'Desain', desc: 'Wireframe dan mockup dikirim untuk review dan persetujuan.' },
                            { step: '03', title: 'Pengembangan', desc: 'Tim developer membangun sesuai spesifikasi yang disepakati.' },
                            { step: '04', title: 'Serah Terima', desc: 'Testing, revisi final, lalu proyek siap diluncurkan.' },
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

            {/* FAQ */}
            <section className="mx-auto max-w-4xl px-6 py-20">
                <div className="text-center mb-14">
                    <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: accent }}>FAQ</p>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Pertanyaan yang Sering Diajukan</h2>
                </div>

                <Accordion className="max-w-full">
                    {faqs.map((item) => (
                        <AccordionItem key={item.value} value={item.value}>
                            <AccordionTrigger>{item.q}</AccordionTrigger>
                            <AccordionContent>{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            {/* Proyek Serupa */}
            {related.length > 0 && (
                <section className="bg-white dark:bg-white/[0.01] border-t border-slate-200 dark:border-white/5 py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="flex items-end justify-between mb-10">
                            <div>
                                <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-2" style={{ color: accent }}>Rekomendasi</p>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Proyek Serupa</h2>
                            </div>
                            <Link href="/proyek" className="text-xs font-semibold hover:opacity-70 transition-opacity" style={{ color: accent }}>
                                Lihat Semua →
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {related.map((p) => {
                                const m = categoryMeta[p.category] || fallbackMeta
                                return (
                                    <Link
                                        key={p.id}
                                        href={`/proyek/${p.slug}`}
                                        className="group rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/10 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                                    >
                                        <div className="relative h-36 overflow-hidden">
                                            <div className="absolute inset-2 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 shadow-lg flex flex-col">
                                                <div className="flex-shrink-0 flex items-center gap-1 px-2 py-1.5 bg-slate-100 dark:bg-white/[0.06]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                                </div>
                                                <div className="flex-1 relative overflow-hidden">
                                                    <Image src={p.image_url} alt={p.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <span className={`text-[9px] font-bold tracking-widest uppercase ${m.color}`}>{p.category}</span>
                                            <h3 className="text-slate-900 dark:text-white font-semibold text-sm mt-1 mb-1">{p.title}</h3>
                                            <p className="text-[10px] text-slate-400 dark:text-gray-600">{p.year}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Penutup */}
            <section className="mx-auto max-w-4xl px-6 py-20 text-center">
                <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: accent }}>Siap Mulai?</p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Punya Ide Proyek Serupa? <br />
                    Wujudkan Bersama Kami
                </h2>
                <p className="text-slate-500 dark:text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
                    Tim kami siap membantu mengubah ide Anda menjadi produk digital yang nyata, fungsional, dan berdampak.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        className="px-8 py-3.5 text-white font-semibold rounded-full transition-opacity hover:opacity-90"
                        style={{ backgroundColor: accent }}
                    >
                        Diskusikan Proyek Anda →
                    </button>
                    <Link
                        href="/proyek"
                        className="px-8 py-3.5 border border-slate-900/20 dark:border-white/20 text-slate-900 dark:text-white font-semibold rounded-full hover:bg-slate-900/5 dark:hover:bg-white/5 transition-colors"
                    >
                        Lihat Proyek Lainnya
                    </Link>
                </div>
            </section>

        </main>
    )
}