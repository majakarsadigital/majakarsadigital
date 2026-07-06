import StackedCards from '@/components/StackedCard'
import {
  Fa7SolidHandshakeAngle,
  MaterialSymbolsLightbulb2,
  MdiEye,
  MingcuteTargetFill,
  MdiGithub,
  MdiLinkedin,
  MdiTwitter,
  MaterialSymbolsRocket,
} from '@/public/assets/icons'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tentang Kami | MajakarsaDigital',
  description: 'Pelajari lebih lanjut tentang Majakarsa Digital',
}





const process = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'Memahami tujuan bisnis, target pengguna, dan batasan teknis sebelum satu baris kode pun ditulis.',
  },
  {
    step: '02',
    title: 'Desain & Arsitektur',
    desc: 'Merancang alur produk dan struktur sistem agar mudah dikembangkan di masa depan.',
  },
  {
    step: '03',
    title: 'Pengembangan',
    desc: 'Membangun secara iteratif dengan update berkala, sehingga klien selalu tahu progres proyek.',
  },
  {
    step: '04',
    title: 'Pengujian & Rilis',
    desc: 'Quality check menyeluruh sebelum go-live, lalu deployment dengan downtime minimal.',
  },
  {
    step: '05',
    title: 'Dukungan Lanjutan',
    desc: 'Pendampingan pasca-rilis untuk perbaikan, optimasi, dan pengembangan fitur baru.',
  },
]

const timeline = [
  {
    year: '2023',
    title: 'Majakarsa Digital Didirikan',
    desc: 'Berawal dari tim kecil yang mengerjakan proyek freelance untuk UMKM lokal.',
  },
  {
    year: '2024',
    title: 'Fokus ke Teknologi Informasi',
    desc: 'Menambah layanan pengembangan aplikasi iOS & Android seiring permintaan klien.',
  },
  {
    year: '2025',
    title: '30+ Klien Aktif',
    desc: 'Mencapai 30 klien aktif dari berbagai industri, mulai dari edukasi hingga logistik.',
  },
  {
    year: '2026',
    title: 'Membangun Produk Internal',
    desc: 'Mulai mengembangkan tools dan komponen open-source untuk komunitas developer.',
  },
]

const team = [
  {
    name: 'Rizky Firmansyah',
    role: 'Founder & Product Manager',
    focus: 'Manajemen produk, arsitektur sistem, dan strategi pengembangan',
    initials: 'RF',
  },
  {
    name: 'Novri Nasution',
    role: 'Founder & Fullstack Engineer',
    focus: 'Pengembangan frontend, backend, dan integrasi sistem',
    initials: 'NN',
  },
  {
    name: 'Rizal Alif',
    role: 'IT Support & Computer Technician',
    focus: 'Pemeliharaan perangkat, jaringan, dan dukungan teknis',
    initials: 'RA',
  },
  {
    name: 'Dhika Karya',
    role: 'Fullstack Engineer & UI/UX Designer',
    focus: 'Desain antarmuka, pengalaman pengguna, dan pengembangan aplikasi web',
    initials: 'DK',
  },
  {
    name: 'Nabil Shalahudin',
    role: 'Produk QC',
    focus: 'Quality Control Produk',
    initials: 'NS',
  },
]

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-[#f4f5f7] dark:bg-black">
      <div className="fixed right-6 bottom-6 z-50 hidden lg:block">


        {/* <div
          className=" w-72 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-2xl backdrop-blur-xl
    "
        >
          <div className="relative">
            <Image
              src="/assets/pictures/add-pos-y.jpg"
              alt="Promo POS"
              width={400}
              height={500}
              className="w-full h-auto"
            />

            <div className="absolute top-3 left-3">
              <span className="rounded-full bg-indigo-600 px-2.5 py-1 text-[10px] font-semibold text-white">
                PROMO
              </span>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              POS Modern untuk Bisnis Anda
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Kelola penjualan, stok, laporan, dan pelanggan dalam satu sistem yang
              cepat dan mudah digunakan.
            </p>

            <div className="mt-4 flex gap-2">
              <Link
                href="/produk/pos"
                className=" flex-1 rounded-lg bg-indigo-600 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-indigo-700 transition-colors
          "
              >
                Lihat Detail
              </Link>

              <a
                href="#contact"
                className="
            rounded-lg border border-slate-200
            dark:border-white/10
            px-3 py-2
            text-xs font-semibold
            text-slate-700 dark:text-white
            hover:bg-slate-50 dark:hover:bg-white/5
            transition-colors
          "
              >
                Hubungi
              </a>
            </div>
          </div>
        </div> */}


        <StackedCards />
      </div>
      <section className="border-b border-slate-200/70 dark:border-white/5 bg-indigo-500 dark:bg-black">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-28 text-center">
          {/* Label - lebih responsif */}
          <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white dark:text-indigo-400">
            Tentang Kami
          </p>

          {/* Heading dengan ukuran yang lebih progresif */}
          <h1 className="mb-4 sm:mb-5 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white leading-[1.1] sm:leading-[1.2] md:leading-tight">
            <span className="block sm:inline">Membangun Produk Digital</span>
            <span className="block sm:inline">
              <br className="hidden sm:block" /> yang Berdampak
            </span>
          </h1>

          {/* Deskripsi dengan padding dan ukuran font yang responsif */}
          <p className="mx-auto max-w-3xl px-2 sm:px-4 md:px-0 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white dark:text-gray-300 md:dark:text-gray-400">
            Majakarsa Digital membantu bisnis, startup, institusi pendidikan,
            dan organisasi dalam merancang, membangun, serta mengembangkan
            solusi digital modern yang cepat, aman, dan berkelanjutan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
              Siapa Kami
            </p>

            <h2 className="mb-6 text-3xl font-bold text-slate-800 dark:text-white">
              Teknologi yang Dibangun
              untuk Menyelesaikan Masalah Nyata
            </h2>

            <div className="space-y-5 text-slate-600 dark:text-gray-400 leading-relaxed">
              <p>
                Kami percaya bahwa teknologi bukan sekadar kode dan server.
                Teknologi adalah alat untuk meningkatkan efisiensi,
                mempercepat pertumbuhan bisnis, dan menciptakan pengalaman
                yang lebih baik bagi pengguna.
              </p>

              <p>
                Dengan pendekatan yang berorientasi pada kebutuhan klien,
                kami mengembangkan website, aplikasi web, aplikasi mobile,
                dan sistem digital yang dirancang untuk memberikan nilai
                jangka panjang.
              </p>

              <p>
                Setiap proyek kami kerjakan dengan fokus pada kualitas,
                performa, keamanan, dan kemudahan pengembangan di masa depan.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-[#fcfcfd] p-10 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-bold">50+</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-gray-500">
                  Proyek Diselesaikan
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold">30+</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-gray-500">
                  Klien Aktif
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold">99%</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-gray-500">
                  Tingkat Kepuasan
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold">24/7</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-gray-500">
                  Dukungan Teknis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 bg-slate-50 dark:bg-[#0a0a0a] py-24" >
        <div
          className="absolute inset-0 -z-50 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/assets/pictures/background7.jpg')",
          }}
        />
        <div className="absolute inset-0 -z-40 bg-white/90 dark:bg-black/50" />

        <div
          className="absolute inset-0 -z-40 pointer-events-none hidden dark:block"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%)' }}
        />
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/70 bg-[#fcfcfd] p-8 dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">
                Visi
              </h3>

              <p className="leading-relaxed text-slate-600 dark:text-gray-400">
                Menjadi mitra transformasi digital terpercaya yang membantu
                organisasi berkembang melalui teknologi yang inovatif,
                efisien, dan berkelanjutan.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/70 bg-[#fcfcfd] p-8 dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">
                Misi
              </h3>

              <ul className="space-y-3 text-slate-600 dark:text-gray-400">
                <li>• Membangun produk digital berkualitas tinggi.</li>
                <li>• Mengutamakan kebutuhan pengguna dan klien.</li>
                <li>• Menggunakan teknologi modern dan terukur.</li>
                <li>• Menyediakan dukungan jangka panjang.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Cara Kami Bekerja
          </p>

          <h2 className="text-4xl font-bold text-slate-800 dark:text-white">
            Proses yang Jelas, Hasil yang Terukur
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {process.map((p) => (
            <div
              key={p.step}
              className="rounded-3xl border border-slate-200/70 bg-[#2c2c4c] p-7 dark:border-white/5 dark:bg-white/[0.02]"
            >
              <span className="mb-5 block text-3xl font-bold text-indigo-200 dark:text-indigo-900">
                {p.step}
              </span>

              <h3 className="mb-2 font-semibold text-slate-800 dark:text-white">
                {p.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-500 dark:text-gray-500">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="relative z-10 bg-slate-50 dark:bg-[#0a0a0a] py-24" >
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
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-center mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
              Perjalanan Kami
            </p>

            <h2 className="text-4xl font-bold text-slate-800 dark:text-white">
              Dari Tim Kecil ke Mitra Terpercaya
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-slate-200 dark:bg-white/10 md:left-1/2" />

            <div className="space-y-10">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  <div className="flex-1 pl-16 md:pl-0">
                    <div
                      className={`rounded-3xl border border-slate-200/70 bg-[#fcfcfd] p-6 dark:border-white/5 dark:bg-white/[0.02] ${i % 2 === 1 ? 'md:text-right' : ''
                        }`}
                    >
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-indigo-500">
                        {t.year}
                      </p>
                      <h3 className="mb-2 font-semibold text-slate-800 dark:text-white">
                        {t.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-500 dark:text-gray-500">
                        {t.desc}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-0 md:relative md:left-auto flex-shrink-0 w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                    {t.year.slice(2, 4)}
                  </div>

                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Di Balik Layar
          </p>

          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-3">
            Tim Pengembang Kami
          </h2>

          <p className="mx-auto max-w-md text-sm text-slate-500 dark:text-gray-500 leading-relaxed">
            Tim kecil dengan jam terbang tinggi - setiap proyek ditangani
            langsung oleh orang yang menulis kodenya.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl border border-slate-200/70 bg-[#fcfcfd] p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/5 dark:bg-white/[0.02]"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-bold text-white">
                {member.initials}
              </div>

              <h3 className="mb-1 font-semibold text-slate-800 dark:text-white">
                {member.name}
              </h3>

              <p className="mb-3 text-[11px] font-semibold text-indigo-500 dark:text-indigo-400">
                {member.role}
              </p>

              <p className="mb-5 text-sm leading-relaxed text-slate-500 dark:text-gray-500">
                {member.focus}
              </p>

              <div className="flex items-center justify-center gap-3 text-slate-400 dark:text-gray-600">
                <a href="#" aria-label={`LinkedIn ${member.name}`} className="hover:text-indigo-500 transition-colors">
                  <MdiLinkedin className="size-4" />
                </a>
                <a href="#" aria-label={`GitHub ${member.name}`} className="hover:text-indigo-500 transition-colors">
                  <MdiGithub className="size-4" />
                </a>
                <a href="#" aria-label={`Twitter ${member.name}`} className="hover:text-indigo-500 transition-colors">
                  <MdiTwitter className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white/60 dark:bg-white/[0.02] dark:border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
              Nilai Kami
            </p>

            <h2 className="text-4xl font-bold text-slate-800 dark:text-white">
              Prinsip yang Kami Pegang
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <MaterialSymbolsLightbulb2 />,
                title: 'Inovasi',
                desc: 'Terus mencari cara baru untuk menciptakan solusi terbaik.',
              },
              {
                icon: <MingcuteTargetFill />,
                title: 'Fokus Hasil',
                desc: 'Setiap proyek harus memberikan dampak nyata.',
              },
              {
                icon: <Fa7SolidHandshakeAngle />,
                title: 'Kolaborasi',
                desc: 'Bekerja bersama klien sebagai mitra jangka panjang.',
              },
              {
                icon: <MdiEye />,
                title: 'Integritas',
                desc: 'Transparan, profesional, dan dapat dipercaya.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200/70 bg-[#fcfcfd] p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/5 dark:bg-white/[0.02]"
              >
                <div className="mb-5 text-4xl text-white">{item.icon}</div>

                <h3 className="mb-3 font-semibold text-slate-800 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-500 dark:text-gray-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
          Mari Berkolaborasi
        </p>

        <h2 className="mb-6 text-4xl font-bold text-slate-800 dark:text-white">
          Siap Membangun Produk Digital Anda?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-slate-500 dark:text-gray-500">
          Kami siap membantu mengubah ide menjadi solusi digital yang
          cepat, aman, modern, dan siap berkembang bersama bisnis Anda.
        </p>

        <a
          href="/buat"
          className="inline-flex items-center rounded-full bg-indigo-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          Mari Kita Buat →
        </a>
      </section>

    </main >

  )
}