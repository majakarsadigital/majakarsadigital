import { Fa7SolidHandshakeAngle, MaterialSymbolsLightEventAvailable, MaterialSymbolsRocket, PepiconsPopStarFilled } from '@/public/assets/icons'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getProjects } from '@/lib/repositories/projects.repository'

export const metadata: Metadata = {
  title: 'Portfolio - Majakarsa Digital',
  description: 'Lihat proyek-proyek yang telah kami selesaikan',
}

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
}

const DEFAULT_GRADIENT = 'from-indigo-500/10 to-blue-500/5'

export default async function PortfolioPage() {
  const projectsRaw = (await getProjects()) as Project[]

  // urutkan berdasarkan sort_order, lalu terbaru dulu
  const projects = [...projectsRaw].sort((a, b) => {
    if (a.sort_order !== b.sort_order) return a.sort_order - b.sort_order
    return b.year - a.year
  })

  // kategori dibuat dinamis dari data yang ada di supabase
  const categories = ['Semua', ...Array.from(new Set(projects.map((p) => p.category)))]

  return (
    <main className="min-h-screen bg-[#f4f5f7] dark:bg-[#080808]">

      <section className="bg-[#f4f5f7] dark:bg-black border-b border-slate-200/60 dark:border-white/5 px-6 py-24">
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
            { value: `${projects.length}+`, label: 'Proyek Selesai', icon: <MaterialSymbolsRocket /> },
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
        {projects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-white/10 py-24 text-center">
            <p className="text-sm text-slate-400 dark:text-gray-600">Belum ada proyek yang ditambahkan.</p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              const techList = project.tech_stack
                ? project.tech_stack.split(',').map((t) => t.trim()).filter(Boolean)
                : []
              const gradient = project.color || DEFAULT_GRADIENT

              return (
                <Link key={project.id} href={`/portfolio/project/${project.slug}`}>
                  <article
                    className="group overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/10 hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full"
                  >
                    {/* IMAGE AREA — aspect-ratio tetap, object-cover handle semua rasio gambar */}
                    <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${gradient} dark:from-white/[0.03] dark:to-transparent`}>
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Overlay gelap + tombol saat hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                        <span
                          className="inline-flex items-center gap-1.5 rounded-full bg-white text-slate-900 px-5 py-2.5 text-xs font-bold opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 shadow-lg"
                        >
                          Lihat Project
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>

                      <span className="absolute top-4 right-4 rounded-full bg-white/80 dark:bg-black/60 px-2 py-1 text-[9px] font-bold backdrop-blur">
                        {project.year}
                      </span>

                      {project.is_featured && (
                        <span className="absolute top-4 left-4 text-[9px] font-bold px-2 py-1 rounded-full bg-indigo-600 text-white z-10">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="p-6">
                      <span className="inline-flex rounded-full bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        {project.category}
                      </span>

                      <h3 className="mt-4 mb-2 text-[17px] font-bold text-slate-800 dark:text-white leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs leading-relaxed text-slate-500 dark:text-gray-500 line-clamp-3">
                        {project.description}
                      </p>

                      {techList.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-5">
                          {techList.map((tech) => (
                            <span key={tech}
                              className="rounded-full border border-slate-200 dark:border-white/10 px-2.5 py-0.5 text-[10px] font-medium text-slate-500 dark:text-gray-500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        )}
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
            spesifik untuk tujuan bisnis Anda - bukan template generik.
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