import { MaterialSymbolsAttachFileAdd } from '@/public/assets/icons'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mari Kita Buat - Majakarsa Digital',
  description: 'Wujudkan ide Anda bersama Majakarsa Digital',
}

export default function BuatPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] dark:bg-black">
      <section className="border-b border-slate-200/70 dark:border-white/5 bg-gradient-to-b from-[#fafbff] to-[#f2f4f8] dark:from-black dark:to-black">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400">
            Project Inquiry
          </p>

          <h1 className="mb-6 text-4xl font-bold text-slate-800 dark:text-white md:text-5xl">
            Mari Wujudkan Ide Digital Anda
          </h1>

          <p className="mx-auto max-w-2xl leading-relaxed text-slate-500 dark:text-gray-400">
            Ceritakan kebutuhan Anda. Semakin lengkap informasi yang diberikan,
            semakin cepat kami dapat memberikan estimasi solusi, timeline,
            dan biaya pengembangan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <form className="space-y-8">

          <div className="rounded-3xl border border-slate-200/70 bg-[#fcfcfd] p-8 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
            <h2 className="mb-6 text-lg font-semibold text-slate-800 dark:text-white">
              Informasi Kontak
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Nama Anda"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
                  Nama Perusahaan
                </label>
                <input
                  type="text"
                  placeholder="PT Contoh Indonesia"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@domain.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+62xxxxxxxxxx"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-[#fcfcfd] p-8 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
            <h2 className="mb-6 text-lg font-semibold text-slate-800 dark:text-white">
              Detail Proyek
            </h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
                  Jenis Proyek
                </label>

                <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none focus:border-indigo-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-white">
                  <option>Website Company Profile</option>
                  <option>E-Commerce</option>
                  <option>Landing Page</option>
                  <option>Web Application</option>
                  <option>Mobile Application</option>
                  <option>Custom Software</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
                  Nama Proyek
                </label>

                <input
                  type="text"
                  placeholder="Contoh: Sistem Manajemen Gudang"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
                  Deskripsi Kebutuhan
                </label>

                <textarea
                  rows={6}
                  placeholder="Jelaskan kebutuhan bisnis, fitur utama, target pengguna, dan tujuan proyek..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-[#fcfcfd] p-8 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
            <h2 className="mb-6 text-lg font-semibold text-slate-800 dark:text-white">
              Budget & Timeline
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
                  Budget Estimasi
                </label>

                <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none dark:border-white/10 dark:bg-white/[0.03] dark:text-white">
                  <option>&lt; Rp5 Juta</option>
                  <option>Rp5 - 10 Juta</option>
                  <option>Rp10 - 25 Juta</option>
                  <option>Rp25 - 50 Juta</option>
                  <option>&gt; Rp50 Juta</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
                  Target Selesai
                </label>

                <input
                  type="date"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-[#fcfcfd] p-8 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
            <h2 className="mb-6 text-lg font-semibold text-slate-800 dark:text-white">
              Lampiran
            </h2>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 p-10 text-center transition-colors hover:border-indigo-500 dark:border-white/10">
              <span className="mb-4 text-4xl"><MaterialSymbolsAttachFileAdd /></span>

              <p className="font-medium text-slate-800 dark:text-white">
                Upload Brief atau Dokumen Pendukung
              </p>

              <p className="mt-2 text-sm text-slate-500">
                PDF, DOCX, PNG, JPG (maks 10 MB)
              </p>

              <input type="file" className="hidden" />
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="rounded-full bg-indigo-600 px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Kirim Permintaan Proyek →
            </button>

            <p className="mt-4 text-xs text-slate-500 dark:text-gray-500">
              Tim kami biasanya merespons dalam waktu kurang dari 24 jam kerja.
            </p>
          </div>
        </form>
      </section>
    </main>
  )
}