'use client'

import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import { Autoplay } from "swiper/modules"
import Image from "next/image"

const AUTOPLAY_DELAY = 5000
const TOTAL_SLIDES = 3

export function CatalogCarousel() {
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
          <Image
            src="/assets/pictures/banners/1.png"
            alt="Promo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded"
          />
        </SwiperSlide>

        {/* Slide 2 - Website Portfolio Personal */}
        <SwiperSlide>
          <Image
            src="/assets/pictures/banners/2.png"
            alt="Promo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded"
          />

        </SwiperSlide>

        {/* Slide 3 - Platform Properti (Rumah, Apartemen, dll) */}
        <SwiperSlide>
          <Image
            src="/assets/pictures/banners/3.png"
            alt="Promo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded"
          />
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation */}
      <div className="flex  items-center gap-4 justify-between">

        <div className="flex items-center gap-2">
          <span className="dark:text-white text-black font-medium text-base tabular-nums">
            {padded(activeIndex)}
          </span>
          <div className="h-[1.5px] bg-black/15 dark:bg-white/15 rounded-full overflow-hidden w-20">
            <div
              className="h-full dark:bg-white bg-black rounded-full transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-black/30 dark:text-white/30 text-sm tabular-nums">
            {padded(TOTAL_SLIDES - 1)}
          </span>
        </div>

       {/* <button
          onClick={goPrev}
          aria-label="Slide sebelumnya"
          className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white/12 hover:border-white/40 active:scale-95 transition-all duration-150"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button> */}

        <div className="flex items-center gap-1.5 my-8">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex ? "w-5 dark:bg-white bg-black" : "w-1.5 dark:bg-white/25 bg-black/25 hover:dark:bg-white/45 hover:bg-black/45"
                }`}
            />
          ))}
        </div>

        {/* <button
          onClick={goNext}
          aria-label="Slide berikutnya"
          className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white/12 hover:border-white/40 active:scale-95 transition-all duration-150"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button> */}
      </div>
    </div>
  )
}