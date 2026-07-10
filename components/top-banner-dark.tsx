'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const bannerItems = [
  {
    id: 1,
    label: 'From Majakarsa Author',
    description: 'Konsultasi gratis sekarang',
    link: '/#contact',
    linkText: 'Butuh website atau aplikasi?',
  },
  {
    id: 2,
    label: 'Special Offer',
    title: 'Diskon 20% untuk project pertama!',
    description: 'Hubungi kami sekarang',
    link: '/produk',
    linkText: 'Dapatkan promo',
  },
  {
    id: 3,
    label: 'Fast Delivery',
    title: 'Pengerjaan cepat & profesional',
    description: 'Garansi kepuasan 100%',
    link: '/#portfolio',
    linkText: 'Lihat portofolio',
  },
]

export function TopBannerDark() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const item = bannerItems[currentIndex]

  return (
    <div className="px-4 pt-4 -mt-8 pb-1">
      <div
        className="
          mx-auto py-0 max-w-xl rounded-2xl
          border border-b border-white/10
          bg-white/[0.06]
          backdrop-blur-xl
          shadow-[0_4px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.07)]
        "
      >
        <div
          className="
            flex flex-wrap sm:flex-nowrap
            min-h-9 items-center justify-center
            gap-x-2 gap-y-1
            px-4 py-2 sm:py-0 sm:h-9
            text-center
          "
        >
          <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.5px] uppercase text-white/75">
            {item.label}
          </span>
          <span className="hidden sm:inline text-white/55 text-xs">·</span>
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[10px] sm:text-[10.5px]
              font-semibold
              tracking-[0.3px]
              text-green-400
              hover:text-white
              transition-colors
              underline
              underline-offset-2
            "
          >
            {item.linkText}
          </Link>
          <span className="hidden sm:inline text-white/55 text-xs">-</span>
          <span className="text-[10px] sm:text-[10.5px] font-medium text-white/75 basis-full sm:basis-auto">
            {item.description}
          </span>
        </div>

        {/* Dots indicator */}
        <div className="hidden justify-center gap-1.5">
          {bannerItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 cursor-pointer hover:bg-indigo-400 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-10 bg-green-400'
                  : 'w-7 bg-green-400/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}