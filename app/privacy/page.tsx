import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Kebijakan Privasi - Majakarsa Digital',
    description:
        'Kebijakan privasi Majakarsa Digital — bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.',
}

const lastUpdated = '1 Juli 2025'

const sections = [
    {
        id: 'pengumpulan',
        title: '1. Data yang Kami Kumpulkan',
        content: [
            'Saat Anda menghubungi kami atau menggunakan layanan kami, kami dapat mengumpulkan informasi berikut:',
        ],
        list: [
            'Informasi identitas: nama, nomor telepon, dan alamat email.',
            'Informasi bisnis: nama perusahaan, industri, dan kebutuhan proyek.',
            'Data teknis: alamat IP, jenis browser, dan data penggunaan website melalui layanan analitik.',
            'Komunikasi: pesan, permintaan, dan feedback yang Anda kirimkan kepada kami.',
        ],
    },
    {
        id: 'penggunaan',
        title: '2. Bagaimana Kami Menggunakan Data',
        content: [
            'Data yang kami kumpulkan digunakan semata-mata untuk keperluan berikut:',
        ],
        list: [
            'Memproses dan mengelola proyek yang Anda pesan.',
            'Berkomunikasi terkait progres, penawaran, atau dukungan teknis.',
            'Meningkatkan kualitas layanan dan pengalaman pengguna website kami.',
            'Memenuhi kewajiban hukum yang berlaku.',
        ],
    },
    {
        id: 'penyimpanan',
        title: '3. Penyimpanan & Keamanan Data',
        content: [
            'Kami menyimpan data Anda selama diperlukan untuk memenuhi tujuan yang disebutkan dalam kebijakan ini, atau selama diwajibkan oleh hukum yang berlaku.',
            'Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang wajar untuk melindungi data Anda dari akses tidak sah, perubahan, pengungkapan, atau penghapusan.',
            'Meskipun kami berupaya menjaga keamanan data, tidak ada metode transmisi atau penyimpanan yang sepenuhnya aman. Kami tidak dapat menjamin keamanan mutlak atas data yang dikirimkan secara online.',
        ],
    },
    {
        id: 'berbagi',
        title: '4. Berbagi Data dengan Pihak Ketiga',
        content: [
            'Majakarsa Digital tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak ketiga untuk tujuan komersial.',
            'Kami dapat berbagi data dengan pihak ketiga hanya dalam kondisi berikut:',
        ],
        list: [
            'Penyedia layanan teknis (hosting, analitik, email) yang membantu operasional kami, tunduk pada perjanjian kerahasiaan.',
            'Pemenuhan kewajiban hukum atau permintaan resmi dari otoritas yang berwenang.',
            'Dengan persetujuan eksplisit Anda.',
        ],
    },
    {
        id: 'cookies',
        title: '5. Cookie & Teknologi Pelacakan',
        content: [
            'Website kami dapat menggunakan cookie dan teknologi serupa untuk meningkatkan pengalaman pengguna dan menganalisis traffic website.',
            'Cookie yang kami gunakan bersifat fungsional (untuk menjalankan website dengan baik) dan analitik (untuk memahami cara pengunjung menggunakan website kami).',
            'Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda. Menonaktifkan cookie tertentu dapat mempengaruhi fungsionalitas website.',
        ],
    },
    {
        id: 'hak',
        title: '6. Hak Anda atas Data',
        content: [
            'Anda memiliki hak-hak berikut terkait data pribadi Anda:',
        ],
        list: [
            'Hak akses: meminta salinan data pribadi yang kami simpan tentang Anda.',
            'Hak koreksi: meminta perbaikan data yang tidak akurat atau tidak lengkap.',
            'Hak penghapusan: meminta penghapusan data Anda, dalam batas yang diizinkan hukum.',
            'Hak keberatan: mengajukan keberatan atas penggunaan data Anda untuk tujuan tertentu.',
        ],
        footer: 'Untuk menggunakan hak-hak di atas, hubungi kami di hello@majakarsadigital.com.',
    },
    {
        id: 'tautan',
        title: '7. Tautan ke Website Pihak Ketiga',
        content: [
            'Website kami mungkin memuat tautan ke website pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi atau konten website tersebut.',
            'Kami menyarankan Anda membaca kebijakan privasi setiap website yang Anda kunjungi.',
        ],
    },
    {
        id: 'anak',
        title: '8. Privasi Anak-Anak',
        content: [
            'Layanan kami tidak ditujukan untuk individu di bawah usia 17 tahun. Kami tidak dengan sengaja mengumpulkan data pribadi dari anak-anak.',
            'Jika Anda mengetahui bahwa anak di bawah umur telah memberikan data pribadi kepada kami, harap hubungi kami segera agar kami dapat menghapus informasi tersebut.',
        ],
    },
    {
        id: 'perubahan',
        title: '9. Perubahan Kebijakan',
        content: [
            'Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu. Perubahan signifikan akan diinformasikan melalui website kami dengan memperbarui tanggal "Terakhir diperbarui" di bagian atas halaman ini.',
            'Penggunaan layanan kami setelah perubahan diterbitkan merupakan bentuk penerimaan Anda terhadap kebijakan yang telah diperbarui.',
        ],
    },
]

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* ── HERO ── */}
            <section className="border-b border-slate-200/70 dark:border-white/5 bg-gradient-to-b from-[#fafbff] to-white dark:from-black dark:to-black">
                <div className="mx-auto max-w-3xl px-6 py-20">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400">
                        Legal
                    </p>
                    <h1 className="mb-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Kebijakan Privasi
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-gray-500">
                        Terakhir diperbarui:{' '}
                        <span className="font-medium text-slate-700 dark:text-gray-300">{lastUpdated}</span>
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
                    <div className="p-5 rounded-2xl border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/[0.05]">
                        <p className="text-xs text-indigo-700 dark:text-indigo-300 leading-relaxed">
                            Privasi Anda penting bagi kami. Dokumen ini menjelaskan secara
                            transparan bagaimana Majakarsa Digital mengumpulkan, menggunakan,
                            dan melindungi informasi pribadi Anda.
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
                                {s.list && (
                                    <ul className="space-y-2 mt-3">
                                        {s.list.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500 mt-2 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {s.footer && (
                                    <p className="text-xs text-slate-500 dark:text-gray-500 italic mt-3 leading-relaxed">
                                        {s.footer}
                                    </p>
                                )}
                            </div>
                        </section>
                    ))}

                    {/* Contact box */}
                    <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 bg-[#fafbff] dark:bg-white/[0.02]">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                            Pertanyaan tentang Privasi Anda?
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-gray-500 leading-relaxed mb-4">
                            Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait
                            data pribadi Anda, jangan ragu menghubungi kami.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="mailto:hello@majakarsadigital.com"
                                className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
                            >
                                hello@majakarsadigital.com
                            </a>
                            <span className="text-slate-300 dark:text-white/10">|</span>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Footer note */}
                    <div className="pt-10 border-t border-slate-200/70 dark:border-white/5">
                        <p className="text-xs text-slate-400 dark:text-gray-600 leading-relaxed">
                            Lihat juga{' '}
                            <Link
                                href="/terms"
                                className="text-indigo-500 dark:text-indigo-400 hover:underline"
                            >
                                Syarat & Ketentuan
                            </Link>{' '}
                            layanan kami.
                        </p>
                    </div>
                </article>
            </div>
        </main>
    )
}