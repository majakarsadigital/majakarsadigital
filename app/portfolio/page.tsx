import { Fa7SolidHandshakeAngle, MaterialSymbolsLightEventAvailable, MaterialSymbolsRocket, PepiconsPopStarFilled } from '@/public/assets/icons'
import { LucideRocket } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio - Majakarsa Digital',
  description: 'Lihat proyek-proyek yang telah kami selesaikan',
}

const projects = [
  {
    title: 'Sistem E-Voting Sekolah',
    category: 'Web Application',
    image: '/assets/pictures/project1.jpg',
    description: 'Platform pemilihan ketua OSIS dengan realtime voting dan dashboard administrasi yang transparan.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL'],
    year: '2024',
    color: 'from-violet-500/10 to-purple-500/5',
  },
  {
    title: 'Website Company Profile',
    category: 'Website',
    image: '/assets/pictures/project2.jpg',
    description: 'Website perusahaan modern dengan performa tinggi, SEO optimal, dan CMS yang mudah dikelola.',
    tech: ['Next.js', 'Tailwind CSS'],
    year: '2024',
    color: 'from-blue-500/10 to-cyan-500/5',
  },
  {
    title: 'Aplikasi Manajemen Gudang',
    category: 'Web Application',
    image: '/assets/pictures/project3.jpg',
    description: 'Sistem inventaris dan monitoring stok secara realtime dengan laporan otomatis harian.',
    tech: ['React', 'NestJS', 'Redis'],
    year: '2023',
    color: 'from-emerald-500/10 to-teal-500/5',
  },
  {
    title: 'Landing Page Startup',
    category: 'Landing Page',
    image: '/assets/pictures/project4.jpg',
    description: 'Landing page modern dengan fokus konversi tinggi, animasi halus, dan branding kuat.',
    tech: ['Next.js', 'TypeScript'],
    year: '2024',
    color: 'from-amber-500/10 to-orange-500/5',
  },
  {
    title: 'Sistem Absensi Digital',
    category: 'Web Application',
    image: '/assets/pictures/project5.jpg',
    description: 'Absensi online dengan laporan, analitik otomatis, dan notifikasi real-time ke wali murid.',
    tech: ['Next.js', 'PostgreSQL'],
    year: '2023',
    color: 'from-rose-500/10 to-pink-500/5',
  },
  {
    title: 'Portal Akademik',
    category: 'Education',
    image: '/assets/pictures/project6.jpg',
    description: 'Portal akademik lengkap untuk sekolah dan institusi pendidikan dengan fitur e-learning.',
    tech: ['NestJS', 'React'],
    year: '2023',
    color: 'from-indigo-500/10 to-blue-500/5',
  },
]

const categories = ['Semua', 'Website', 'Landing Page', 'Web Application', 'Education']

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f4f5f7] dark:bg-[#080808]">

      <section className="bg-[#f4f5f7] dark:bg-[#080808] border-b border-slate-200/60 dark:border-white/5 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 dark:text-indigo-400">
            Portfolio
          </p>
          <h1 className="mb-6 text-5xl md:text-6xl font-bold text-slate-800 dark:text-white leading-tight tracking-tight">
            Proyek yang Telah
            <br />
            <span className="text-indigo-500">Kami Bangun</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500 dark:text-gray-500">
            Setiap proyek lahir dari kombinasi strategi bisnis yang matang,
            desain yang purposeful, dan teknologi yang tepat sasaran.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '50+', label: 'Proyek Selesai', icon: <MaterialSymbolsRocket /> },
            { value: '30+', label: 'Klien Aktif', icon: <Fa7SolidHandshakeAngle /> },
            { value: '99%', label: 'Kepuasan Klien', icon: <PepiconsPopStarFilled /> },
            { value: '5+', label: 'Tahun Pengalaman', icon: <MaterialSymbolsLightEventAvailable /> },
          ].map(({ value, label, icon }) => (
            <div key={label} className="rounded-2xl border border-slate-200/80 dark:border-white/5 bg-white dark:bg-white/[0.02] p-6 text-center">
              <span className="text-2xl flex justify-center mb-3">{icon}</span>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{value}</p>
              <p className="mt-1.5 text-xs text-slate-400 dark:text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button key={item}
              className="rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] px-4 py-1.5 text-xs font-semibold text-slate-500 dark:text-gray-400 hover:border-indigo-400 hover:text-indigo-500 dark:hover:border-indigo-500/40 dark:hover:text-indigo-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/10 hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.color} dark:from-white/[0.03] dark:to-transparent`}>
                <div className="absolute inset-3 rounded-xl overflow-hidden shadow-xl border border-black/[0.07] dark:border-white/10 flex flex-col">
                  <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 bg-slate-100/90 dark:bg-white/[0.06] border-b border-black/5 dark:border-white/5">
                    <span className="w-2 h-2 rounded-full bg-red-400/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                    <span className="w-2 h-2 rounded-full bg-green-400/80" />
                    <div className="flex-1 mx-2 h-3.5 rounded bg-white/70 dark:bg-white/10" />
                  </div>
                  <div className="flex-1 relative overflow-hidden bg-slate-100 dark:bg-white/[0.03]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:object-center transition-all duration-700"
                    />
                  </div>
                </div>

                <span className="absolute top-5 right-5 text-[9px] font-bold px-2 py-1 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-sm text-slate-600 dark:text-gray-400 z-10">
                  {project.year}
                </span>
              </div>

              <div className="p-6">
                <span className="inline-flex rounded-full bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                  {project.category}
                </span>

                <h3 className="mt-4 mb-2 text-[17px] font-bold text-slate-800 dark:text-white leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs leading-relaxed text-slate-500 dark:text-gray-500 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span key={tech}
                      className="rounded-full border border-slate-200 dark:border-white/10 px-2.5 py-0.5 text-[10px] font-medium text-slate-500 dark:text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                  <button className="text-xs font-semibold text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                    Lihat Detail →
                  </button>
                  <div className="flex -space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-5 h-5 rounded-full bg-slate-200 dark:bg-white/10 border-2 border-white dark:border-[#080808]" />
                    ))}
                    <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 border-2 border-white dark:border-[#080808] flex items-center justify-center">
                      <span className="text-[7px] font-bold text-indigo-600 dark:text-indigo-400">+2</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/60 dark:border-white/5 bg-white dark:bg-white/[0.01] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 dark:text-indigo-400">
              Cara Kami Bekerja
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
              Dari Ide Menjadi Produk
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: '01', title: 'Discovery', desc: 'Kami menggali tujuan bisnis, target pengguna, dan kebutuhan teknis secara mendalam sebelum menulis satu baris kode pun.' },
              { step: '02', title: 'Design', desc: 'Wireframe, prototype interaktif, dan sistem desain dibangun untuk memastikan tampilan dan alur sesuai ekspektasi.' },
              { step: '03', title: 'Development', desc: 'Kode bersih, terstruktur, dan teruji ditulis oleh developer berpengalaman dengan standar industri modern.' },
              { step: '04', title: 'Launch', desc: 'Deployment, testing menyeluruh, dan handover dilakukan secara profesional. Kami pastikan produk siap meluncur.' },
            ].map((s) => (
              <div key={s.step} className="group relative p-6 rounded-2xl border border-slate-200/60 dark:border-white/5 bg-[#f4f5f7] dark:bg-white/[0.02] hover:border-indigo-200 dark:hover:border-indigo-500/20 transition-colors">
                <p className="text-6xl font-black text-slate-200 dark:text-white/[0.04] select-none mb-3">{s.step}</p>
                <h3 className="font-bold text-slate-800 dark:text-white mb-2 -mt-8">{s.title}</h3>
                <p className="text-xs text-slate-500 dark:text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 dark:text-indigo-400">Testimoni</p>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Kata Mereka</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { name: 'Budi Santoso', role: 'CEO, StartupID', text: 'Tim Majakarsa benar-benar memahami kebutuhan bisnis kami. Produk yang dihasilkan melampaui ekspektasi dari segi kualitas dan kecepatan.' },
            { name: 'Rina Kusuma', role: 'Direktur, EduTech', text: 'Proses kerjanya sangat profesional dan transparan. Kami selalu diupdate perkembangannya. Hasilnya? Luar biasa.' },
            { name: 'Ahmad Fauzi', role: 'Founder, LogisTech', text: 'Sistem manajemen gudang yang mereka bangun menghemat waktu operasional kami hingga 60%. Worth every rupiah.' },
          ].map((t) => (
            <div key={t.name} className="p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 bg-white dark:bg-white/[0.02]">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>
              <p className="text-sm text-slate-500 dark:text-gray-500 leading-relaxed mb-5">{t.text}</p>
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-white">{t.name}</p>
                <p className="text-xs text-slate-400 dark:text-gray-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200/60 dark:border-white/5 bg-white dark:bg-white/[0.01] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 dark:text-indigo-400">
            Siap Memulai?
          </p>
          <h2 className="mb-5 text-4xl font-bold text-slate-800 dark:text-white leading-tight">
            Mari Bangun Proyek Berikutnya
            <br />
            <span className="text-indigo-500">Bersama Kami</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-slate-500 dark:text-gray-500 leading-relaxed text-sm">
            Diskusikan ide Anda dan dapatkan solusi digital yang dirancang
            spesifik untuk tujuan bisnis Anda — bukan template generik.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/buat"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 px-8 py-3.5 text-sm font-semibold text-white transition-colors"
            >
              Mari Kita Buat →
            </Link>
            <Link href="/produk"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-white/10 px-8 py-3.5 text-sm font-semibold text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              Lihat Produk Kami
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}