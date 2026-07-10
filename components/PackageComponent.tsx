'use client'

import { useState } from 'react'
import Link from 'next/link'

// ————————————————————————————————————————
// Data paket — pindahkan ke repository/CMS kalau sudah ada sumbernya
// ————————————————————————————————————————
interface PackageTier {
  id: string
  name: string
  tagline: string
  priceMonthly: number
  priceYearly: number
  highlighted?: boolean
  features: string[]
  notIncluded?: string[]
}

const packages: PackageTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Untuk landing page & profil bisnis',
    priceMonthly: 1500000,
    priceYearly: 1200000,
    features: [
      'Hingga 5 halaman',
      'Desain responsif mobile & desktop',
      'Domain & hosting 1 tahun',
      'SSL gratis',
      '1x revisi desain',
      'Estimasi 5-7 hari kerja',
    ],
    notIncluded: ['Sistem CMS custom', 'Integrasi API pihak ketiga', 'Support prioritas'],
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'Untuk toko online & aplikasi skala menengah',
    priceMonthly: 4500000,
    priceYearly: 3800000,
    highlighted: true,
    features: [
      'Hingga 15 halaman/fitur',
      'CMS custom untuk kelola konten sendiri',
      'Integrasi pembayaran (Midtrans/Xendit)',
      'Domain & hosting 1 tahun',
      'SSL gratis',
      '3x revisi desain',
      'Support prioritas via WhatsApp',
      'Estimasi 2-3 minggu kerja',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Untuk sistem informasi & aplikasi kompleks',
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      'Fitur & halaman tanpa batas',
      'Arsitektur sistem custom (web/mobile/API)',
      'Integrasi sistem internal perusahaan',
      'Dedicated project manager',
      'Revisi sesuai kesepakatan',
      'Support prioritas & maintenance berkala',
      'Estimasi disesuaikan kompleksitas',
    ],
  },
]

const comparisonRows: { label: string; starter: boolean; business: boolean; enterprise: boolean }[] = [
  { label: 'Desain responsif', starter: true, business: true, enterprise: true },
  { label: 'Domain & hosting 1 tahun', starter: true, business: true, enterprise: true },
  { label: 'CMS custom', starter: false, business: true, enterprise: true },
  { label: 'Integrasi pembayaran', starter: false, business: true, enterprise: true },
  { label: 'Integrasi API pihak ketiga', starter: false, business: false, enterprise: true },
  { label: 'Dedicated project manager', starter: false, business: false, enterprise: true },
  { label: 'Support prioritas', starter: false, business: true, enterprise: true },
]

function formatRupiah(value: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export default function PackageComponent() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <main className="min-h-screen bg-[#f4f5f7] dark:bg-black">
      {/* Header */}
      <div className="bg-white dark:bg-black">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-10 sm:py-16  pb-0">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-900 dark:text-indigo-400 mb-3 sm:mb-4">
                Paket Produk
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 leading-tight tracking-tight">
                Pilih Paket
                <br />
                <span className="text-slate-900">Sesuai Kebutuhan</span>
              </h1>
              <p className="text-slate-600 dark:text-gray-500 text-sm max-w-md leading-relaxed">
                Dari landing page sederhana sampai sistem enterprise -
                transparan tanpa biaya tersembunyi.
              </p>
            </div>

            <div className="flex gap-6 sm:gap-8 md:gap-10 flex-shrink-0">
              {[
                { value: '3', label: 'Paket' },
                { value: '200+', label: 'Klien' },
                { value: '4.9/5', label: 'Rating' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
                  <p className="text-[10px] sm:text-xs text-slate-600 dark:text-gray-600 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer navbar */}
      <div className="h-14 sm:h-20 sticky top-0 z-20 bg-white dark:bg-black border-b border-slate-200/60 dark:border-white/5" />

      {/* Billing toggle bar */}
      <div className="bg-white dark:bg-black border-b border-slate-200/60 dark:border-white/5 sticky top-14 sm:top-18 z-50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center sm:justify-start gap-3">
          <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-slate-100 dark:bg-white/5">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                billing === 'monthly'
                  ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 dark:text-gray-400'
              }`}
            >
              Sekali Bayar
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                billing === 'yearly'
                  ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 dark:text-gray-400'
              }`}
            >
              Paket Berlangganan
              <span className="px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[9px] font-bold">
                HEMAT
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {packages.map((pkg) => {
            const isCustom = pkg.id === 'enterprise'
            const price = billing === 'monthly' ? pkg.priceMonthly : pkg.priceYearly

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all ${
                  pkg.highlighted
                    ? 'bg-slate-900 dark:bg-white/[0.04] border border-slate-900 dark:border-indigo-500/30 shadow-xl shadow-slate-900/10 lg:-translate-y-3'
                    : 'bg-white dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/10'
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider">
                    Paling Populer
                  </span>
                )}

                <h3
                  className={`text-lg font-bold mb-1 ${
                    pkg.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-xs mb-6 ${
                    pkg.highlighted ? 'text-white/60' : 'text-slate-500 dark:text-gray-500'
                  }`}
                >
                  {pkg.tagline}
                </p>

                <div className="mb-6">
                  {isCustom ? (
                    <p
                      className={`text-3xl font-bold ${
                        pkg.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      Custom
                    </p>
                  ) : (
                    <div className="flex items-baseline gap-1.5">
                      <p
                        className={`text-3xl font-bold ${
                          pkg.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
                        }`}
                      >
                        {formatRupiah(price)}
                      </p>
                      <span
                        className={`text-xs ${
                          pkg.highlighted ? 'text-white/50' : 'text-slate-400 dark:text-gray-600'
                        }`}
                      >
                        / proyek
                      </span>
                    </div>
                  )}
                  {billing === 'yearly' && !isCustom && (
                    <p className="text-[11px] text-indigo-500 dark:text-indigo-400 font-semibold mt-1">
                      Hemat {formatRupiah(pkg.priceMonthly - pkg.priceYearly)}
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          pkg.highlighted ? 'text-indigo-400' : 'text-indigo-600'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span
                        className={`text-xs leading-relaxed ${
                          pkg.highlighted ? 'text-white/80' : 'text-slate-600 dark:text-gray-400'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                  {pkg.notIncluded?.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 opacity-40">
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span
                        className={`text-xs leading-relaxed line-through ${
                          pkg.highlighted ? 'text-white/60' : 'text-slate-500 dark:text-gray-500'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={isCustom ? '/buat' : `/pesan?paket=${pkg.id}&billing=${billing}`}
                  className={`inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold transition-colors ${
                    pkg.highlighted
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                      : 'bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/20 text-white'
                  }`}
                >
                  {isCustom ? 'Diskusikan Kebutuhan' : 'Pilih Paket Ini'}
                </Link>
              </div>
            )
          })}
        </div>

        {/* Comparison table */}
        <div className="mb-16 sm:mb-20">
          <div className="mb-6 sm:mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400 mb-2">
              Perbandingan Detail
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Bandingkan Semua Fitur
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/[0.02] overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-slate-200/60 dark:border-white/10">
                  <th className="text-left font-semibold text-slate-900 dark:text-white px-5 py-4">
                    Fitur
                  </th>
                  <th className="text-center font-semibold text-slate-500 dark:text-gray-400 px-5 py-4 text-xs uppercase tracking-wider">
                    Starter
                  </th>
                  <th className="text-center font-semibold text-indigo-600 dark:text-indigo-400 px-5 py-4 text-xs uppercase tracking-wider">
                    Business
                  </th>
                  <th className="text-center font-semibold text-slate-500 dark:text-gray-400 px-5 py-4 text-xs uppercase tracking-wider">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i !== comparisonRows.length - 1 ? 'border-b border-slate-100 dark:border-white/5' : ''}
                  >
                    <td className="px-5 py-3.5 text-slate-600 dark:text-gray-400 text-xs sm:text-sm">
                      {row.label}
                    </td>
                    {[row.starter, row.business, row.enterprise].map((included, idx) => (
                      <td key={idx} className="px-5 py-3.5 text-center">
                        {included ? (
                          <svg
                            className="w-4 h-4 mx-auto text-indigo-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-slate-300 dark:text-gray-700">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA custom */}
        <div className="rounded-2xl border bg-white dark:bg-white/[0.02] border-indigo-100/80 dark:border-white/5 p-6 sm:p-8 md:p-12 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-indigo-500 dark:text-indigo-400 mb-4">
            Belum Yakin Pilih yang Mana?
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Konsultasi Gratis Dulu Yuk
          </h2>
          <p className="text-slate-500 dark:text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Ceritakan kebutuhan bisnis Anda, kami bantu rekomendasikan paket
            yang paling pas — tanpa biaya, tanpa komitmen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/buat"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
            >
              Diskusikan Kebutuhan Anda →
            </Link>
            <Link
              href="/dukungan"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              Lihat FAQ
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}