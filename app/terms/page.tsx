import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Syarat & Ketentuan - Majakarsa Digital',
    description:
        'Syarat dan ketentuan penggunaan layanan Majakarsa Digital.',
}

const lastUpdated = '1 Juli 2025'

const sections = [
    {
        id: 'umum',
        title: '1. Ketentuan Umum',
        content: [
            'Dengan menggunakan layanan Majakarsa Digital ("Layanan"), Anda menyetujui syarat dan ketentuan ini secara keseluruhan. Jika Anda tidak setuju, harap tidak melanjutkan penggunaan Layanan.',
            'Syarat dan ketentuan ini berlaku untuk semua pengguna, klien, mitra, dan pihak lain yang berinteraksi dengan Majakarsa Digital, baik melalui website, WhatsApp, email, maupun saluran komunikasi lainnya.',
            'Majakarsa Digital berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diinformasikan melalui website resmi dan berlaku sejak tanggal ditetapkan.',
        ],
    },
    {
        id: 'layanan',
        title: '2. Layanan',
        content: [
            'Majakarsa Digital menyediakan jasa pengembangan website, aplikasi mobile, sistem informasi, dan layanan digital lainnya sesuai kesepakatan yang tertuang dalam dokumen penawaran atau kontrak proyek.',
            'Ruang lingkup, harga, timeline, dan ketentuan teknis setiap proyek ditetapkan secara tertulis sebelum pengerjaan dimulai. Perubahan scope yang terjadi setelah kesepakatan dapat mempengaruhi biaya dan jadwal penyelesaian.',
            'Majakarsa Digital tidak bertanggung jawab atas kerugian yang timbul akibat perubahan kebutuhan yang disampaikan setelah tahap pengerjaan dimulai tanpa disertai kesepakatan perubahan tertulis.',
        ],
    },
    {
        id: 'pembayaran',
        title: '3. Pembayaran',
        content: [
            'Pengerjaan proyek dimulai setelah uang muka (DP) diterima, sesuai besaran yang disepakati dalam penawaran. Persentase DP umumnya sebesar 50% dari total biaya proyek.',
            'Pelunasan dilakukan sebelum atau bersamaan dengan serah terima produk akhir. Keterlambatan pelunasan dapat mengakibatkan penundaan serah terima tanpa mengurangi kewajiban klien.',
            'Untuk proyek berskala besar, pembayaran dapat dilakukan secara bertahap sesuai milestone yang disepakati. Setiap pembayaran akan disertai invoice resmi.',
            'DP yang telah dibayarkan tidak dapat dikembalikan apabila klien membatalkan proyek setelah pengerjaan dimulai.',
        ],
    },
    {
        id: 'hak-kekayaan',
        title: '4. Kepemilikan & Hak Kekayaan Intelektual',
        content: [
            'Setelah pelunasan penuh, seluruh source code, desain, dan aset yang dikembangkan khusus untuk proyek klien diserahkan dan menjadi hak milik klien sepenuhnya.',
            'Komponen, library, framework, dan tools pihak ketiga yang digunakan dalam proyek tunduk pada lisensi masing-masing. Klien bertanggung jawab memastikan penggunaan sesuai dengan lisensi yang berlaku.',
            'Majakarsa Digital berhak menyebutkan proyek yang telah diselesaikan sebagai bagian dari portofolio, kecuali klien secara tertulis meminta kerahasiaan proyek.',
        ],
    },
    {
        id: 'revisi',
        title: '5. Revisi & Perubahan',
        content: [
            'Jumlah revisi yang termasuk dalam setiap paket layanan ditetapkan dalam penawaran. Revisi yang melebihi batas atau mencakup perubahan signifikan di luar scope awal akan dikenakan biaya tambahan.',
            'Permintaan revisi harus disampaikan dalam periode review yang disepakati. Revisi yang diminta setelah serah terima dianggap sebagai pengembangan baru.',
            'Majakarsa Digital tidak bertanggung jawab atas ketidaksesuaian hasil apabila klien tidak memberikan feedback selama proses berlangsung.',
        ],
    },
    {
        id: 'batasan',
        title: '6. Batasan Tanggung Jawab',
        content: [
            'Majakarsa Digital tidak bertanggung jawab atas kerugian bisnis, kehilangan data, atau kerugian tidak langsung lainnya yang timbul dari penggunaan atau ketidakmampuan menggunakan produk yang dikembangkan.',
            'Tanggung jawab maksimal Majakarsa Digital dalam situasi apapun tidak melebihi total biaya yang telah dibayarkan klien untuk proyek terkait.',
            'Klien bertanggung jawab penuh atas konten, data, dan informasi yang diberikan kepada Majakarsa Digital dalam proses pengembangan.',
        ],
    },
    {
        id: 'kerahasiaan',
        title: '7. Kerahasiaan',
        content: [
            'Kedua pihak sepakat untuk menjaga kerahasiaan informasi sensitif yang dibagikan selama proses kerja sama, termasuk namun tidak terbatas pada data bisnis, strategi, dan informasi teknis.',
            'Kewajiban kerahasiaan ini berlaku selama masa proyek dan dalam periode 2 (dua) tahun setelah proyek selesai, kecuali informasi tersebut telah menjadi domain publik.',
        ],
    },
    {
        id: 'hukum',
        title: '8. Hukum yang Berlaku',
        content: [
            'Syarat dan ketentuan ini tunduk pada hukum yang berlaku di Republik Indonesia. Setiap perselisihan yang tidak dapat diselesaikan secara musyawarah akan diselesaikan melalui jalur hukum yang berlaku.',
            'Dengan menggunakan layanan kami, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku.',
        ],
    },
]

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* ── HERO ── */}
            <section className="border-b border-slate-200/70 dark:border-white/5 bg-gradient-to-b from-[#fafbff] to-white dark:from-black dark:to-black">
                <div className="mx-auto max-w-3xl px-6 py-20">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400">
                        Legal
                    </p>
                    <h1 className="mb-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Syarat & Ketentuan
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-gray-500">
                        Terakhir diperbarui: <span className="font-medium text-slate-700 dark:text-gray-300">{lastUpdated}</span>
                    </p>
                </div>
            </section>

            {/* ── BODY ── */}
            <div className="mx-auto max-w-3xl px-6 py-16 flex flex-col lg:flex-row gap-16">
                {/* Sidebar nav */}
                <aside className="hidden lg:block w-52 flex-shrink-0">
                    <div className="sticky top-32 space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-gray-600 mb-3">
                            Isi Dokumen
                        </p>
                        {sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="block text-xs text-slate-500 dark:text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 py-1 transition-colors leading-relaxed"
                            >
                                {s.title}
                            </a>
                        ))}
                    </div>
                </aside>

                {/* Content */}
                <article className="flex-1 space-y-12">
                    <div className="p-5 rounded-2xl border border-amber-200 dark:border-amber-500/20 bg-amber-50 dark:bg-amber-500/[0.05]">
                        <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                            Dokumen ini mengatur hubungan antara Anda (klien) dan Majakarsa Digital
                            (penyedia layanan). Harap baca dengan seksama sebelum menggunakan layanan kami.
                        </p>
                    </div>

                    {sections.map((s) => (
                        <section key={s.id} id={s.id} className="scroll-mt-8">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                                {s.title}
                            </h2>
                            <div className="space-y-3">
                                {s.content.map((p, i) => (
                                    <p key={i} className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* Footer note */}
                    <div className="pt-10 border-t border-slate-200/70 dark:border-white/5">
                        <p className="text-xs text-slate-400 dark:text-gray-600 leading-relaxed">
                            Jika Anda memiliki pertanyaan terkait syarat dan ketentuan ini, silakan
                            hubungi kami di{' '}
                            <a
                                href="mailto:hello@majakarsadigital.com"
                                className="text-indigo-500 dark:text-indigo-400 hover:underline"
                            >
                                hello@majakarsadigital.com
                            </a>
                            . Lihat juga{' '}
                            <Link
                                href="/privacy"
                                className="text-indigo-500 dark:text-indigo-400 hover:underline"
                            >
                                Kebijakan Privasi
                            </Link>{' '}
                            kami.
                        </p>
                    </div>
                </article>
            </div>
        </main>
    )
}