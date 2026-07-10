'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const bannerItems = [
    {
        id: 1,
        badge: '60% OFF',
        description: 'The clock is ticking. Save with Majakarsa Days!',
        ctaText: 'Save Now',
        link: '/#contact',
    },
    {
        id: 2,
        badge: 'PROMO',
        description: 'Diskon 20% untuk project pertama kamu!',
        ctaText: 'Klaim Sekarang',
        link: '/produk',
    },
    {
        id: 3,
        badge: 'FAST',
        description: 'Pengerjaan cepat & profesional, garansi 100%.',
        ctaText: 'Lihat Portofolio',
        link: '/#portfolio',
    },
]

export function TopBannerLight() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        if (!visible) return
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % bannerItems.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [visible])

    if (!visible) return null

    const item = bannerItems[currentIndex]

    return (
        <div className="relative bg-white border-b border-black/[0.08]">
            <div className="max-w-full px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="flex min-h-16 items-center justify-start gap-4 lg:gap-6 py-3">
                    <span className="text-[15px] font-futura whitespace-nowrap sm:text-[20px] font-black tracking-tight text-slate-900">
                        {item.badge}
                    </span>

                    <span className="hidden sm:inline text-black/20">|</span>

                    <span className="basis-32 md:basis-full text-[10px] sm:text-[13px] lg:text-[14px] font-medium text-slate-700">
                        {item.description}
                    </span>

                    <Link
                        href={item.link}
                        className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-[8px] sm:text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-slate-700"
                    >
                        {item.ctaText}
                    </Link>
                </div>
            </div>

            <button
                type="button"
                onClick={() => setVisible(false)}
                aria-label="Tutup banner"
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded-full text-slate-500 hover:text-slate-900 hover:bg-black/5 transition-colors"
            >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}