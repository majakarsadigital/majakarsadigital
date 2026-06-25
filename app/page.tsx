import type { Metadata } from 'next'
import { TwoRowCarousel } from '@/components/carousel-two-rows'
import { sampleProducts } from '@/lib/data/products'
import { Navbar } from '@/components/navbar'
import { TopBanner } from '@/components/top-banner'
import { BxBxsQuoteLeft, BxBxsQuoteRight, FluentCalendarDataBar32Filled, IcBaselineApple, LogosFacebook, LogosWhatsappIcon, MaterialSymbolsAndroid, MaterialSymbolsDemographyRounded, MaterialSymbolsEditSquare, MaterialSymbolsShoppingBagSpeed, MaterialSymbolsViewQuiltRounded, RiRotateLockFill, RiRotateLockLine, SkillIconsInstagram, StreamlineInterfaceContentChartProductDataAnalysisAnalyticsGraphLineBusinessBoardChart, StreamlinePlumpBrowserWebsite1Remix, TypcnCloudStorage } from '@/public/assets/icons'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import { getSponsors } from '@/lib/repositories/sponsors.repository'

export const metadata: Metadata = {
  title: 'Majakarsa Digital - Solusi Digital Terpercaya',
  description: 'Majakarsa Digital menyediakan solusi digital terbaik untuk bisnis Anda',
}

const services = [
  {
    icon: <StreamlinePlumpBrowserWebsite1Remix />,
    title: 'Website Development',
    color: 'blue',
    desc: 'Landing page, company profile, hingga web app kompleks dengan teknologi modern.'
  },
  {
    icon: (
      <div className="flex gap-1">
        <MaterialSymbolsAndroid />
        <IcBaselineApple />
      </div>
    ),
    title: 'Mobile App',
    color: 'green',
    desc: 'Aplikasi Android & iOS native maupun cross-platform dengan Flutter & React Native.'
  },
  {
    icon: <MaterialSymbolsShoppingBagSpeed />,
    title: 'E-Commerce',
    color: 'amber',
    desc: 'Toko online lengkap dengan payment gateway, manajemen stok, dan dashboard admin.'
  },
  {
    icon: <MaterialSymbolsViewQuiltRounded />,
    title: 'UI/UX Design',
    color: 'violet',
    desc: 'Desain antarmuka yang intuitif dan menarik.'
  },
  {
    icon: <MaterialSymbolsEditSquare />,
    title: 'Custom System',
    color: 'indigo',
    desc: 'ERP, CRM, HRIS, dan sistem internal bisnis.'
  },
  {
    icon: <TypcnCloudStorage />,
    title: 'Cloud & DevOps',
    color: 'cyan',
    desc: 'Setup server, CI/CD pipeline, dan deployment.'
  },
  {
    icon: <RiRotateLockFill />,
    title: 'Maintenance & Security',
    color: 'rose',
    desc: 'Pemeliharaan rutin, update keamanan, dan monitoring.'
  },
  {
    icon: <FluentCalendarDataBar32Filled />,
    title: 'Data Dashboard',
    color: 'emerald',
    desc: 'Visualisasi data bisnis real-time.'
  },
]

export default async function Page() {
  const sponsors = await getSponsors()
  return (
    <>
      <main
        className="relative"
      >
        <div className="absolute inset-0">
          {/* Light Mode */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-indigo-500"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white" />
          </div>
          {/* Dark Mode */}
          <div
            className="absolute inset-0 hidden bg-cover bg-center bg-fixed dark:block"
            style={{
              backgroundImage: "url('/assets/pictures/background1.jpg')",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-white/0 dark:bg-black/10 pointer-events-none z-0" />

        {/* TopBanner */}
        {/* <div className="relative z-10">
          <TopBanner />
        </div> */}

        {/* Floating social buttons - smaller & closer to edge on mobile */}
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3">
          <a
            href="https://wa.me/628135382932"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-[#25D366]/20 transition-all duration-300"
          >
            <span className="p-2.5 sm:p-3">
              <LogosWhatsappIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366]" />
            </span>
            <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap text-xs sm:text-sm font-semibold pr-0 group-hover:pr-4">
              WhatsApp
            </span>
          </a>

          <a
            href="https://instagram.com/majakarsadigital"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-pink-500/20 transition-all duration-300"
          >
            <span className="p-2.5 sm:p-3">
              <SkillIconsInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
            <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap text-xs sm:text-sm font-semibold pr-0 group-hover:pr-4">
              Instagram
            </span>
          </a>

          <a
            href="https://facebook.com/majakarsadigital"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-[#1877F2]/20 transition-all duration-300"
          >
            <span className="p-2.5 sm:p-3">
              <LogosFacebook className="w-4 h-4 sm:w-5 sm:h-5 text-[#1877F2]" />
            </span>
            <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap text-xs sm:text-sm font-semibold pr-0 group-hover:pr-4">
              Facebook
            </span>
          </a>
        </div>

        {/* HERO */}
        <section className="relative z-10 min-h-screen flex -mt-30 dark:sm:-mt-30 sm:-mt-29 items-center dark:justify-center px-4" >
          <div
            className="absolute inset-0 pointer-events-none hidden dark:block"
            style={{ background: 'radial-gradient(ellipse at top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%)' }}
          />

          <div className="max-w-450 mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 dark:grid-cols-1 items-center gap-12">

              {/* Kiri */}
              <div className="text-center lg:text-left dark:text-center">
                <p className="hidden dark:block text-xs sm:text-sm tracking-[0.3em] text-slate-600 dark:text-gray-400 mb-6">
                  powered by majakarsa
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white leading-tight mb-6">
                  MAJAKARSA
                  <span>
                    DIGITAL
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-2xl mb-10 dark:mx-auto">
                  Dari website, aplikasi mobile, hingga sistem enterprise - kami hadirkan
                  produk digital berkualitas tinggi yang siap skalakan bisnis Anda.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 dark:justify-center">
                  <a
                    href="#services"
                    className="px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-semibold"
                  >
                    Lihat Layanan
                  </a>

                  <a
                    href="#contact"
                    className="px-8 py-3.5 border border-slate-300 dark:border-white/30 text-white dark:text-white rounded-full font-semibold"
                  >
                    Hubungi Kami
                  </a>
                </div>
              </div>

              {/* Kanan - hanya light mode */}
              <div className="hidden lg:flex dark:hidden justify-start">
                <img
                  src="/assets/pictures/baksokuwung1_mockup.png"
                  alt="Majakarsa Dashboard"
                  className="max-w-4xl"
                />
              </div>

            </div>
          </div>
          <div className="absolute hidden dark:block bg-black/50 p-2 sm:p-3 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-full">
            <Marquee
              gradient
              gradientColor="black"
              speed={50}
              pauseOnHover
              autoFill
            >
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="mx-6 sm:mx-8 flex items-center transition-opacity duration-300"
                >
                  <Image
                    src={sponsor.logo_url}
                    alt={sponsor.name}
                    width={120}
                    height={40}
                    className="h-5 sm:h-6 w-auto grayscale invert object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </Marquee>
          </div>

          <div className="absolute dark:hidden bg-white p-2 sm:p-3 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-full">
            <Marquee
              gradient
              speed={50}
              pauseOnHover
              autoFill
            >
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="mx-6 sm:mx-8 flex items-center transition-opacity duration-300"
                >
                  <Image
                    src={sponsor.logo_url}
                    alt={sponsor.name}
                    width={120}
                    height={40}
                    className="h-5 sm:h-6 w-auto object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </Marquee>
          </div>

        </section >

        {/* CAROUSEL + QUOTE */}
        <section className="relative z-10 bg-black dark:bg-black py-10 sm:py-24" >
          <TwoRowCarousel products={sampleProducts} />
        </ section >

        <section className="relative z-10 bg-[#f4f5f7] dark:bg-black py-12 sm:py-24" >
          {/* <div
            className="absolute hidden dark:block inset-0 -z-50 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/assets/pictures/background12.jpg')",
            }}
          />
          <div
            className="absolute block dark:hidden inset-0 -z-50 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/assets/pictures/background16.jpg')",
            }}
          />
          <div className="absolute inset-0 -z-40 bg-black/10 dark:bg-black/70" />


          <div
            className="absolute inset-0 -z-40 pointer-events-none hidden dark:block"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%)' }}
          /> */}
          <div className="max-w-7xl mx-auto px-4">

            {/* Heading */}
            <div className="text-center mb-14">
              <p className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
                Tentang Kami
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                Teknologi yang Dibangun
                <span className="text-primary"> untuk Bertumbuh</span>
              </h2>

              <p className="mt-5 max-w-3xl mx-auto text-slate-600 dark:text-slate-400 text-base md:text-lg">
                Majakarsa Digital membantu bisnis, startup, institusi, dan organisasi
                mengembangkan solusi digital modern yang aman, cepat, dan siap berkembang
                mengikuti kebutuhan masa depan.
              </p>
            </div>

            {/* Company Statement */}
            {/* <div className="relative p-6 sm:p-10 md:p-14 border-2 border-primary/40 rounded-2xl bg-white/30 backdrop-blur-3xl dark:bg-white/[0.02]">
              <BxBxsQuoteLeft className="absolute top-4 left-4 text-4xl sm:text-5xl text-primary" />

              <p className="text-slate-700 text-sm sm:text-lg md:text-[21px] font-semibold text-justify leading-8 sm:leading-9 md:leading-10 dark:text-slate-200 px-4 sm:px-8">
                Majakarsa Digital merupakan perusahaan teknologi yang menyediakan layanan
                pengembangan perangkat lunak end-to-end, mulai dari perencanaan, desain,
                pengembangan, hingga pemeliharaan sistem. Kami membangun solusi digital
                berbasis web dan mobile dengan standar industri modern, mengedepankan
                performa, keamanan, skalabilitas, serta kemudahan integrasi untuk
                mendukung kebutuhan bisnis yang terus berkembang. Tujuan kami adalah
                membantu organisasi mengubah tantangan operasional menjadi peluang
                melalui pemanfaatan teknologi yang tepat dan berkelanjutan.
              </p>

              <BxBxsQuoteRight className="absolute bottom-4 right-4 text-4xl sm:text-5xl text-primary" />
            </div> */}

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-primary">50+</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Proyek Selesai
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-primary">20+</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Klien Aktif
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-primary">99.9%</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Target Uptime
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-primary">24/7</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Technical Support
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Kualitas Kode
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Menggunakan standar pengembangan modern dengan fokus pada
                  maintainability, performa, dan kemudahan pengembangan jangka panjang.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Keamanan Sistem
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Menerapkan praktik keamanan terbaik untuk melindungi data, pengguna,
                  dan infrastruktur bisnis Anda.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Skalabilitas Bisnis
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Solusi dirancang agar mampu tumbuh bersama bisnis tanpa perlu
                  melakukan perubahan sistem secara besar-besaran.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                Siap Membangun Produk Digital Anda?
              </h3>

              <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
                Konsultasikan kebutuhan website, aplikasi mobile, sistem internal,
                maupun solusi enterprise bersama tim Majakarsa Digital.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-full bg-primary dark:bg-white text-white dark:text-slate-900 font-semibold hover:opacity-90 transition"
                >
                  Konsultasi Gratis
                </a>

                <a
                  href="#portfolio"
                  className="px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/5 transition"
                >
                  Lihat Portfolio
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* CUSTOM BRANDING + PRICELIST */}
        <section className="relative z-10 bg-black py-12 sm:py-24 overflow-hidden" >
          <div className="max-w-380 mx-auto px-4 sm:px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-24">
              {/* Mockup image: full-bleed only on md+, contained on mobile to avoid overflow */}
              <div className="rounded-lg w-full md:-ml-[calc(65vw-10rem)] md:w-[calc(90vw+3rem)] overflow-hidden border border-white/10 bg-white/[0.03]">
                <img
                  src="/assets/pictures/baksokuwung_mockup.png"
                  alt="Mockup produk custom"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-white leading-snug mb-3 sm:mb-4">
                  Membantu Membuat Web & App{' '}
                  <span className="">Custom Sesuai Branding</span> Kamu!
                </h2>
                <p className="text-lg leading-relaxed font-medium mb-5 sm:mb-6 text-slate-200">
                  Layanan pembuatan website, aplikasi, dan sistem informasi sesuai
                  kebutuhan spesifik bisnis atau instansi Anda.
                </p>
                <ul className="space-y-3">
                  {[
                    'Konsultasi & Personalisasi Fitur',
                    'Design Bisa Disesuaikan',
                    'Request Fitur & Alur Kerja Web/App',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row mt-5 text-sm gap-3 sm:gap-4">
                  <a
                    href="/portfolio"
                    className="px-5 py-3 sm:py-3.5 text-center bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition-colors"
                  >
                    Lihat Portfolio
                  </a>
                  <a
                    href="/cara-order"
                    className="px-5 py-3 sm:py-3.5 text-center border border-white/30 text-white font-semibold rounded-full hover:bg-slate-900/10 dark:hover:bg-white/10 transition-colors"
                  >
                    Cara Order
                  </a>
                </div>

              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start pt-10 sm:pt-16">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug mb-3 sm:mb-4">
                  Kita Juga Menyediakan{' '}
                  <span className="">Produk Siap Pakai!</span>
                </h2>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Kami menyediakan layanan pembuatan website, aplikasi, dan sistem
                  informasi yang dapat dicustom/disesuaikan.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Pricelist</h3>
                <p className="text-slate-200 text-sm leading-relaxed mb-4">
                  Lihat daftar harga layanan Majakarsa Digital, mulai dari pembuatan
                  website, aplikasi, hingga sistem informasi.
                </p>
                <a
                  href="/pricelist"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-indigo-300 transition-colors"
                >
                  Lihat Pricelist
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </section >

        {/* SERVICES */}
        <section id="services" className="relative z-10 bg-slate-50 dark:bg-[#0a0a0a] py-12 sm:py-24" >
          <div
            className="absolute inset-0 -z-50 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/assets/pictures/background4.jpg')",
            }}
          />
          <div className="absolute inset-0 -z-40 bg-[#f4f5f7] dark:bg-black/80" />

          <div
            className="absolute inset-0 -z-40 pointer-events-none hidden dark:block"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%)' }}
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-16">
              <p className="text-xs tracking-[0.2em] sm:tracking-[0.3em] text-blue-500 dark:text-blue-400 uppercase mb-3 sm:mb-4">
                Layanan
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                Apa yang Kami Kerjakan
              </h2>
              <p className="text-sm sm:text-base text-slate-500 dark:text-gray-500 max-w-xl mx-auto">
                Layanan IT end-to-end - dari konsultasi, desain, pengembangan, hingga maintenance jangka panjang.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{s.icon}</div>
                  <h3 className="text-slate-900 dark:text-white font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">{s.title}</h3>
                  <p className="text-slate-500 dark:text-gray-500 text-[11px] sm:text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section >

        {/* SPONSOR */}
        <section id="sponsor" className="relative z-10 bg-[#f4f5f7] dark:bg-black py-12 sm:py-24 border-t border-slate-200 dark:border-white/5 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[600px] h-[300px] bg-indigo-500/[0.07] dark:bg-indigo-500/[0.08] blur-[100px] rounded-full pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-16">
              <p className="text-xs tracking-[0.2em] sm:tracking-[0.3em] text-blue-500 dark:text-blue-400 uppercase mb-3 sm:mb-4">
                Dukung Kami
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                Sponsor
              </h2>
              <p className="text-sm sm:text-base text-slate-500 dark:text-gray-500 max-w-xl mx-auto">
                <Link href="/sponsor" className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-300 font-semibold transition-colors">
                  Sponsori Majakarsa Digital
                </Link>{' '}
                dan tampilkan logo serta tautan Anda di situs web. Dukungan Anda membantu
                Majakarsa Digital terus berkembang!
              </p>
            </div>

            <div className="relative rounded-3xl bg-white/40 dark:bg-black backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.04)] p-5 sm:p-8 md:p-10">

              <div className="py-2 sm:py-4">
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                  {sponsors.map((sponsor) => (
                    <div
                      key={sponsor.id}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-white flex items-center justify-center p-2"
                    >
                      <Image
                        src={sponsor.logo_url}
                        alt={sponsor.name}
                        width={100}
                        height={100}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent mb-6 sm:mb-8" />

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                  <p className="text-xs text-slate-400 dark:text-gray-600">
                    Mulai dari{" "}
                    <span className="font-semibold text-slate-600 dark:text-gray-300">
                      Rp 250rb/bulan
                    </span>{" "}
                    - logo Anda tampil di sini
                  </p>

                  <Link
                    href="/sponsor"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-400 dark:hover:text-white transition-colors"
                  >
                    Jadi Sponsor →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main >
    </>

  )
}