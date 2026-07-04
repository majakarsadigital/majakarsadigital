import {
    MaterialSymbolsMail,
    MdiCheckDecagram,
    MaterialSymbolsRocket,
    Fa7SolidHandshakeAngle,
    MdiShieldCheck,
} from '@/public/assets/icons'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Cara Order - Majakarsa Digital',
    description:
        'Panduan lengkap memesan layanan website, aplikasi, dan sistem informasi di Majakarsa Digital - dari konsultasi hingga produk jadi.',
}


const steps = [
    {
        no: '01',
        title: 'Konsultasi Awal',
        desc: 'Hubungi kami via WhatsApp atau email, ceritakan kebutuhan proyek Anda - jenis layanan, fitur yang diinginkan, dan target waktu.',
    },
    {
        no: '02',
        title: 'Penawaran & Kesepakatan',
        desc: 'Kami kirimkan rincian scope kerja, estimasi harga, dan timeline. Setelah disepakati, kami lanjut ke tahap kontrak singkat.',
    },
    {
        no: '03',
        title: 'Pembayaran DP',
        desc: 'Pengerjaan dimulai setelah uang muka (DP) diterima - umumnya 50% dari total biaya, sesuai kesepakatan.',
    },
    {
        no: '04',
        title: 'Proses Pengembangan',
        desc: 'Tim kami bekerja dengan update progres berkala, sehingga Anda selalu tahu perkembangan proyek dan bisa memberi masukan.',
    },
    {
        no: '05',
        title: 'Review & Revisi',
        desc: 'Anda meninjau hasil sebelum rilis. Revisi dilakukan sesuai jumlah yang termasuk dalam paket yang dipilih.',
    },
    {
        no: '06',
        title: 'Pelunasan & Serah Terima',
        desc: 'Setelah pelunasan, produk diserahkan lengkap dengan source code, dan proyek masuk ke masa dukungan pasca-rilis.',
    },
]

const paymentMethods = [
    { name: 'Transfer Bank', detail: 'BCA, Mandiri, BNI, BRI' },
    { name: 'QRIS', detail: 'Semua e-wallet & m-banking pendukung QRIS' },
    { name: 'E-Wallet', detail: 'GoPay, OVO, DANA' },
    { name: 'Virtual Account', detail: 'Tersedia untuk proyek skala besar' },
]

const paymentNotes = [
    'Pembayaran dilakukan dalam 2 tahap: DP di awal dan pelunasan setelah review akhir.',
    'Untuk proyek dengan nilai besar, pembayaran dapat dipecah menjadi beberapa termin sesuai milestone.',
    'Invoice resmi diberikan untuk setiap transaksi.',
]

const faqs = [
    {
        q: 'Berapa lama waktu pengerjaan rata-rata?',
        a: 'Tergantung kompleksitas proyek. Landing page biasanya 3–7 hari kerja, company profile 1–2 minggu, sementara aplikasi atau sistem informasi custom bisa memakan waktu 3–8 minggu.',
    },
    {
        q: 'Apakah saya bisa request revisi setelah produk jadi?',
        a: 'Bisa. Setiap paket sudah termasuk sejumlah revisi tertentu sebelum serah terima. Revisi di luar itu atau setelah serah terima dikenakan biaya tambahan sesuai cakupan perubahan.',
    },
    {
        q: 'Apakah source code menjadi milik saya sepenuhnya?',
        a: 'Ya. Setelah pelunasan, seluruh source code dan aset proyek diserahkan dan menjadi hak milik Anda sepenuhnya.',
    },
    {
        q: 'Bagaimana jika saya ingin membatalkan proyek di tengah jalan?',
        a: 'DP yang sudah dibayarkan tidak dapat dikembalikan karena mencakup waktu dan sumber daya yang telah dialokasikan. Namun progres yang sudah dikerjakan akan tetap diserahkan secara proporsional.',
    },
    {
        q: 'Apakah ada garansi atau dukungan setelah produk selesai?',
        a: 'Ya, setiap proyek mendapat masa dukungan teknis pasca-rilis untuk perbaikan bug. Untuk pengembangan fitur baru atau maintenance jangka panjang, tersedia paket terpisah.',
    },
]

export default function CaraOrderPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* ── HERO ── */}
            <section className="border-b border-slate-200/70 dark:border-white/5 bg-gradient-to-b from-[#fafbff] to-white dark:from-black dark:to-black">
                <div className="mx-auto max-w-5xl px-6 py-24 text-center">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white dark:text-indigo-400">
                        Cara Order
                    </p>
                    <h1 className="mb-6 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Proses Order yang Simpel & Transparan
                    </h1>
                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500 dark:text-gray-400">
                        Dari konsultasi pertama hingga produk siap pakai - berikut alur kerja
                        sama yang kami terapkan di setiap proyek, besar maupun kecil.
                    </p>
                </div>
            </section>

            {/* ── STEPS ── */}
            <section className="mx-auto max-w-4xl px-6 py-20">
                <div className="relative">
                    <div className="absolute left-[23px] top-2 bottom-2 w-px bg-slate-200 dark:bg-white/10" />

                    <div className="space-y-10">
                        {steps.map((s) => (
                            <div key={s.no} className="relative flex gap-6 pl-0">
                                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                                    {s.no}
                                </div>
                                <div className="flex-1 pb-2">
                                    <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                                        {s.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-gray-500 leading-relaxed max-w-xl">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── METODE PEMBAYARAN ── */}
            <section className="border-y border-slate-200/70 dark:border-white/5 bg-[#fafbff] dark:bg-white/[0.01]">
                <div className="mx-auto max-w-5xl px-6 py-20">
                    <div className="text-center mb-12">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white dark:text-indigo-400">
                            Pembayaran
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                            Metode Pembayaran yang Tersedia
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        {paymentMethods.map((m) => (
                            <div
                                key={m.name}
                                className="p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 bg-white dark:bg-white/[0.02]"
                            >
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                                    {m.name}
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-gray-500 leading-relaxed">
                                    {m.detail}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 dark:border-white/5 bg-white dark:bg-white/[0.02] p-6">
                        <div className="flex items-start gap-2.5 mb-4">
                            <span className="text-white mt-0.5">
                                <MdiShieldCheck className="size-4" />
                            </span>
                            <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                                Ketentuan Pembayaran
                            </h3>
                        </div>
                        <ul className="space-y-2.5">
                            {paymentNotes.map((n) => (
                                <li key={n} className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-gray-500 leading-relaxed">
                                    <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-gray-600 mt-1.5 flex-shrink-0" />
                                    {n}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="mx-auto max-w-3xl px-6 py-20">
                <div className="text-center mb-12">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white dark:text-indigo-400">
                        Pertanyaan Umum
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                        Sebelum Anda Order
                    </h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((item) => (
                        <details
                            key={item.q}
                            className="group rounded-2xl border border-slate-200/80 dark:border-white/5 bg-white dark:bg-white/[0.02] px-6 py-4 open:shadow-sm"
                        >
                            <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-slate-800 dark:text-gray-200">
                                {item.q}
                                <svg
                                    className="w-4 h-4 text-slate-400 dark:text-gray-600 transition-transform group-open:rotate-45 flex-shrink-0 ml-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                                </svg>
                            </summary>
                            <p className="text-xs text-slate-500 dark:text-gray-500 leading-relaxed mt-3">{item.a}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* ── TERMASUK / TRUST ── */}
            <section className="border-y border-slate-200/70 dark:border-white/5 bg-[#fafbff] dark:bg-white/[0.01]">
                <div className="mx-auto max-w-5xl px-6 py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-2xl text-white"><Fa7SolidHandshakeAngle /></span>
                            <p className="text-sm font-semibold text-slate-800 dark:text-gray-200">Kontrak Jelas</p>
                            <p className="text-xs text-slate-500 dark:text-gray-500">Scope & harga disepakati di awal, tanpa biaya tersembunyi.</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-2xl text-white"><MdiCheckDecagram /></span>
                            <p className="text-sm font-semibold text-slate-800 dark:text-gray-200">Source Code Milik Anda</p>
                            <p className="text-xs text-slate-500 dark:text-gray-500">Diserahkan sepenuhnya setelah pelunasan.</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-2xl text-white"><MaterialSymbolsRocket /></span>
                            <p className="text-sm font-semibold text-slate-800 dark:text-gray-200">Dukungan Pasca-Rilis</p>
                            <p className="text-xs text-slate-500 dark:text-gray-500">Pendampingan perbaikan setelah produk diserahkan.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="mx-auto max-w-3xl px-6 py-20 text-center">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white dark:text-indigo-400">
                    Siap Mulai?
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Hubungi Kami untuk Konsultasi Gratis
                </h2>
                <p className="text-slate-500 dark:text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                    Ceritakan kebutuhan proyek Anda dan dapatkan estimasi harga serta timeline
                    tanpa kewajiban apapun.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="https://wa.me/628135382932"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
                    >
                        Order via WhatsApp →
                    </a>
                    <a
                        href="mailto:majakarsadigital@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5 text-sm font-semibold transition-colors"
                    >
                        <MaterialSymbolsMail className="size-4" /> Kirim Email
                    </a>
                </div>
                <p className="text-xs text-slate-400 dark:text-gray-600 mt-6">
                    Cek juga{' '}
                    <Link href="/pricelist" className="text-white dark:text-indigo-400 font-semibold hover:underline">
                        Pricelist
                    </Link>{' '}
                    untuk gambaran biaya sebelum konsultasi.
                </p>
            </section>
        </main>
    )
}