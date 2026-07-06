import { Fa7SolidHandshakeAngle, MaterialSymbolsLightEventAvailable, MaterialSymbolsRocket, PepiconsPopStarFilled } from '@/public/assets/icons'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getProjects } from '@/lib/repositories/projects.repository'
import ProjectCard from '@/components/ProjectCard'
import BentoGallery from '@/components/BentoGallery'

export const metadata: Metadata = {
  title: 'Portfolio',
}

type Project = {
  id: string
  slug: string
  title: string
  category: string
  description: string
  image_url: string
  tech_stack?: string
  year: number
  color?: string
  sort_order: number
  is_featured: boolean
}

const DEFAULT_GRADIENT = 'from-indigo-500/10 to-blue-500/5'

function getTileClasses(index: number, total: number): string {
  const fullGroups = Math.floor(total / 4)
  const groupBoundary = fullGroups * 4
  const remainder = total - groupBoundary

  if (index < groupBoundary) {
    const posInGroup = index % 5
    if (posInGroup === 0) return 'lg:col-span-4 lg:row-span-2'
    if (posInGroup === 1) return 'lg:col-span-2 lg:row-span-1'
    if (posInGroup === 2) return 'lg:col-span-2 lg:row-span-1'
    // posInGroup 3 & 4 -> baris pemisah dibagi 2, bukan full-width
    return 'lg:col-span-3 lg:row-span-1'
  }

  // Bagian sisa di ujung — selalu row-span-1, lebar dibagi rata.
  if (remainder === 1) return 'lg:col-span-6 lg:row-span-1'
  if (remainder === 2) return 'lg:col-span-3 lg:row-span-1'
  if (remainder === 3) return 'lg:col-span-2 lg:row-span-1'
  return 'lg:col-span-3 lg:row-span-1' // remainder === 4
}

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

      {/* ================= BENTO GRID PROJECT ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
          <BentoGallery />

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