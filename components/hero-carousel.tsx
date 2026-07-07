'use client'

import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import { Autoplay } from "swiper/modules"

const AUTOPLAY_DELAY = 5000
const TOTAL_SLIDES = 3

export function HeroCarousel() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const handleSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper
  }

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex)
  }

  const goPrev = () => swiperRef.current?.slidePrev()
  const goNext = () => swiperRef.current?.slideNext()
  const goTo = (i: number) => swiperRef.current?.slideToLoop(i)

  const padded = (n: number) => String(n + 1).padStart(2, "0")

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
        loop
        onSwiper={handleSwiper}
        onSlideChange={handleSlideChange}
        onAutoplayTimeLeft={(_, __, ratio) => {
          setProgress((1 - ratio) * 100)
        }}
      >
        {/* Slide 1 - Website Usaha / Toko Makanan */}
        <SwiperSlide>
          <div className="grid lg:grid-cols-2 items-center gap-12 min-h-[75vh]">
            <div className="text-center lg:text-left">
              <p className="text-xs sm:text-sm tracking-[0.3em] text-slate-500 mb-6">
                powered by majakarsa
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold text-slate-900 leading-tight mb-6">
                WEBSITE
                <span>KULINER</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-slate-600 max-w-2xl mb-10">
                Bawa usaha kuliner Anda ke ranah digital dengan website yang menarik,
                mudah dikelola, dan siap menerima pesanan online kapan saja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-semibold">
                  Lihat Layanan
                </a>
                <a href="#contact" className="px-8 py-3.5 border border-slate-300 text-slate-900 rounded-full font-semibold">
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-start">
              <img src="/assets/pictures/Group 5.png" alt="Website Toko Makanan" className="max-w-4xl" />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Website Portfolio Personal */}
        <SwiperSlide>
          <div className="grid lg:grid-cols-2 items-center gap-12 min-h-[75vh]">
            <div className="text-center lg:text-left">
              <p className="text-xs sm:text-sm tracking-[0.3em] text-slate-500 mb-6">
                powered by majakarsa
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold text-slate-900 leading-tight mb-6">
                PORTFOLIO
                <span>PERSONAL</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-slate-600 max-w-2xl mb-10">
                Tampilkan karya dan identitas profesional Anda lewat website portfolio
                personal yang elegan, responsif, dan mudah diperbarui.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-semibold">
                  Lihat Layanan
                </a>
                <a href="#contact" className="px-8 py-3.5 border border-slate-300 text-slate-900 rounded-full font-semibold">
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <img src="/assets/pictures/personal_portfolio_mock.png" alt="Website Portfolio Personal" className="max-w-lg" />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Platform Properti (Rumah, Apartemen, dll) */}
        <SwiperSlide>
          <div className="grid lg:grid-cols-2 items-center gap-12 min-h-[75vh]">
            <div className="text-center lg:text-left">
              <p className="text-xs sm:text-sm tracking-[0.3em] text-slate-500 mb-6">
                powered by majakarsa
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold text-slate-900 leading-tight mb-6">
                PLATFORM
                <span>PROPERTI</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-slate-600 max-w-2xl mb-10">
                Solusi digital untuk pemasaran rumah, apartemen, dan properti lainnya
                dengan fitur pencarian, filter, dan manajemen listing yang praktis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-semibold">
                  Lihat Layanan
                </a>
                <a href="#contact" className="px-8 py-3.5 border border-slate-300 text-slate-900 rounded-full font-semibold">
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <img src="/assets/pictures/properties_platform_mock.png" alt="Platform Properti" className="max-w-4xl" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation */}
      <div className="flex items-center gap-4 justify-center lg:justify-end">
        {/* Counter */}
        <div className="flex items-center gap-2">
          <span className="text-slate-900 font-medium text-base tabular-nums">
            {padded(activeIndex)}
          </span>
          <div className="h-[1.5px] bg-slate-900/15 rounded-full overflow-hidden w-20">
            <div
              className="h-full bg-slate-900 rounded-full transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-slate-400 text-sm tabular-nums">
            {padded(TOTAL_SLIDES - 1)}
          </span>
        </div>

        {/* Prev */}
        <button
          onClick={goPrev}
          aria-label="Slide sebelumnya"
          className="w-10 h-10 rounded-full border border-slate-300 bg-slate-900/5 flex items-center justify-center text-slate-900 hover:bg-slate-900/10 hover:border-slate-400 active:scale-95 transition-all duration-150"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex ? "w-5 bg-slate-900" : "w-1.5 bg-slate-900/25 hover:bg-slate-900/45"
                }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={goNext}
          aria-label="Slide berikutnya"
          className="w-10 h-10 rounded-full border border-slate-300 bg-slate-900/5 flex items-center justify-center text-slate-900 hover:bg-slate-900/10 hover:border-slate-400 active:scale-95 transition-all duration-150"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}