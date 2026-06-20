import type { Metadata } from 'next'
import { TwoRowCarousel } from '@/components/carousel-two-rows'
import { sampleProducts } from '@/lib/products'
import { Navbar } from '@/components/navbar'
import { TopBanner } from '@/components/top-banner'
import { BxBxsQuoteLeft, BxBxsQuoteRight, FluentCalendarDataBar32Filled, IcBaselineApple, LogosFacebook, LogosWhatsappIcon, MaterialSymbolsAndroid, MaterialSymbolsDemographyRounded, MaterialSymbolsEditSquare, MaterialSymbolsShoppingBagSpeed, MaterialSymbolsViewQuiltRounded, RiRotateLockFill, RiRotateLockLine, SkillIconsInstagram, StreamlineInterfaceContentChartProductDataAnalysisAnalyticsGraphLineBusinessBoardChart, StreamlinePlumpBrowserWebsite1Remix, TypcnCloudStorage } from '@/public/assets/icons'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import { sponsors } from '@/lib/data/sponsors'

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

export default function Page() {
  return (
    <>
      <main
        className="relative"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/assets/pictures/background1.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-white/50 dark:bg-black/10 pointer-events-none z-0" />

        {/* TopBanner */}
        {/* <div className="relative z-10">
          <TopBanner />
        </div> */}

        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-[#25D366]/20 transition-all duration-300"
          >
            <span className="p-3">
              <LogosWhatsappIcon className="w-5 h-5 text-[#25D366]" />
            </span>
            <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap text-sm font-semibold pr-0 group-hover:pr-4">
              WhatsApp
            </span>
          </a>

          <a
            href="https://instagram.com/majakarsadigital"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-pink-500/20 transition-all duration-300"
          >
            <span className="p-3">
              <SkillIconsInstagram className="w-5 h-5" />
            </span>
            <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap text-sm font-semibold pr-0 group-hover:pr-4">
              Instagram
            </span>
          </a>

          <a
            href="https://facebook.com/majakarsadigital"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-[#1877F2]/20 transition-all duration-300"
          >
            <span className="p-3">
              <LogosFacebook className="w-5 h-5 text-[#1877F2]" />
            </span>
            <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap text-sm font-semibold pr-0 group-hover:pr-4">
              Facebook
            </span>
          </a>
        </div>
        <section className="relative z-10 min-h-screen flex -mt-30 items-center justify-center" >
          <div
            className="absolute inset-0 pointer-events-none hidden dark:block"
            style={{ background: 'radial-gradient(ellipse at top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%)' }}
          />

          <div className="max-w-4xl mx-auto px-6 text-center z-10">
            <p className="text-sm tracking-[0.3em] text-slate-500 dark:text-gray-400 mb-6">
              powered by majakarsa
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 dark:text-white leading-tight mb-6">
              MajakarsaDigital
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Dari website, aplikasi mobile, hingga sistem enterprise - kami hadirkan
              produk digital berkualitas tinggi yang siap skalakan bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-slate-700 dark:hover:bg-gray-100 transition-colors"
              >
                Lihat Layanan
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border border-slate-900/30 dark:border-white/30 text-slate-900 dark:text-white font-semibold rounded-full hover:bg-slate-900/10 dark:hover:bg-white/10 transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
          <div className="absolute bg-white p-3 bottom-1 left-1/2 -translate-x-1/2 w-full max-w-full">
            <Marquee
              gradient
              speed={50}
              pauseOnHover
              autoFill
            >
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="mx-8 flex items-center transition-opacity duration-300"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={120}
                    height={40}
                    className="h-6 w-auto object-contain transition-all duration-300"
                  />
                  {/* <p className="text-sm font-semibold text-slate-700 dark:text-gray-300">
                    Sponsor
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-gray-600">
                    Partner
                  </p> */}

                </div>
              ))}
            </Marquee>
          </div>
        </section >
        <section className="relative z-10 bg-white dark:bg-black pt-6 py-24" >
          <TwoRowCarousel products={sampleProducts} />
          <div className="relative max-w-7xl mx-auto p-14 my-14 mb-4 border-2 border-primary/50 rounded-sm">
            <BxBxsQuoteLeft className="absolute top-4 left-4 text-5xl text-primary" />
            <p className="text-slate-600 text-[21px] font font-semibold text-justify leading-10 dark:text-primary px-8">
              Majakarsa Digital merupakan perusahaan teknologi yang menyediakan layanan pengembangan perangkat lunak end-to-end,
              mulai dari perencanaan, desain, pengembangan, hingga pemeliharaan sistem. Kami membangun solusi digital berbasis
              web dan mobile dengan standar industri modern, mengedepankan performa, keamanan, skalabilitas, serta kemudahan
              integrasi untuk mendukung kebutuhan bisnis yang terus berkembang. Tujuan kami adalah membantu organisasi mengubah
              tantangan operasional menjadi peluang melalui pemanfaatan teknologi yang tepat dan berkelanjutan.
            </p>
            <BxBxsQuoteRight className="absolute bottom-4 right-4 text-5xl text-primary" />
          </div>


        </ section >

        <section className="relative z-10 bg-black py-24" >
          <div className="max-w-380 mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div className="rounded-lg -ml-6 md:-ml-[calc(65vw-10rem)] w-[calc(100%+1.5rem)] md:w-[calc(90vw+3rem)] overflow-hidden border border-white/10 bg-white/[0.03]">
                <img
                  src="/assets/pictures/baksokuwung_mockup.png"
                  alt="Mockup produk custom"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white leading-snug mb-4">
                  Membantu Membuat Web & App{' '}
                  <span className="">Custom Sesuai Branding</span> Kamu!
                </h2>
                <p className="text-primary text-sm leading-relaxed mb-6">
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
                <div className="flex flex-col sm:flex-row mt-5 text-sm gap-4">
                  <a
                    href="/portfolio"
                    className="px-5 py-3.5 bg-slate-900 dark:bg-indigo-500  text-white dark:text-white font-semibold rounded-full hover:bg-slate-700 dark:hover:bg-indigo-600 transition-colors"
                  >
                    Lihat Portfolio
                  </a>
                  <a
                    href="#contact"
                    className="px-5 py-3.5 border border-slate-900/30 dark:border-white/30 text-slate-900 dark:text-white font-semibold rounded-full hover:bg-slate-900/10 dark:hover:bg-white/10 transition-colors"
                  >
                    Cara Order
                  </a>
                </div>

              </div>

              <div>

              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
                  Kita Juga Menyediakan{' '}
                  <span className="">Produk Siap Pakai!</span>
                </h2>
                <p className="text-primary text-sm leading-relaxed">
                  Kami menyediakan layanan pembuatan website, aplikasi, dan sistem
                  informasi yang dapat dicustom/disesuaikan.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">Pricelist</h3>
                <p className="text-primary text-sm leading-relaxed mb-4">
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

        <section id="services" className="relative z-10 bg-slate-50 dark:bg-[#0a0a0a] py-24" >
          <div
            className="absolute inset-0 -z-50 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/assets/pictures/background4.jpg')",
            }}
          />
          <div className="absolute inset-0 -z-40 bg-white/90 dark:bg-black/80" />

          <div
            className="absolute inset-0 -z-40 pointer-events-none hidden dark:block"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%)' }}
          />

          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-blue-500 dark:text-blue-400 uppercase mb-4">
                Layanan
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Apa yang Kami Kerjakan
              </h2>
              <p className="text-slate-500 dark:text-gray-500 max-w-xl mx-auto">
                Layanan IT end-to-end — dari konsultasi, desain, pengembangan, hingga maintenance jangka panjang.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-2">{s.title}</h3>
                  <p className="text-slate-500 dark:text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section >


        <section id="sponsor" className="relative z-10 bg-slate-50 dark:bg-black py-24 border-t border-slate-200 dark:border-white/5 overflow-hidden">
          {/* Ambient glow — subtle, tidak norak */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/[0.07] dark:bg-indigo-500/[0.08] blur-[100px] rounded-full pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-blue-500 dark:text-blue-400 uppercase mb-4">
                Dukung Kami
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Sponsor
              </h2>
              <p className="text-slate-500 dark:text-gray-500 max-w-xl mx-auto">
                <Link href="/sponsor" className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-300 font-semibold transition-colors">
                  Sponsori Majakarsa Digital
                </Link>{' '}
                dan tampilkan logo serta tautan Anda di situs web. Dukungan Anda membantu
                Majakarsa Digital terus berkembang!
              </p>
            </div>

            <div className="relative rounded-3xl bg-white/40 dark:bg-black backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.04)] p-8 md:p-10">

              <div className="py-4">
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  {sponsors.map((sponsor) => (
                    <div
                      key={sponsor.id}
                      className="w-20 h-20 bg-white flex items-center justify-center p-2"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={100}
                        height={100}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>               
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent mb-8" />

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