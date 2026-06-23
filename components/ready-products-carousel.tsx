'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  products: any[]
}

export function ReadyProductsCarousel({ products }: Props) {
  const readyProducts = products.filter(
    (product) => product.type?.toLowerCase() === 'ready'
  )

  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector('[data-card]') as HTMLElement | null
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: amount * dir, behavior: 'smooth' })
  }

  if (products.length === 0) return null

  return (
    <section className="relative">
      <div className="flex items-end justify-between gap-4 mb-5 sm:mb-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 dark:text-indigo-400 mb-2">
            Highlight
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Produk Siap Pakai
          </h2>
        </div>

        {/* Nav arrows - hidden on touch/mobile, shown on sm+ */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Sebelumnya"
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Selanjutnya"
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-pl-4 sm:scroll-pl-0 px-4 sm:px-0 -mx-4 sm:mx-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {readyProducts.map((product) => {
          const hasPromo = Boolean(product.discount_percent)
          return (
            <div
              key={product.id}
              data-card
              className="group border rounded-lg border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 cursor-pointer relative snap-start flex-shrink-0 w-[85%] xs:w-[72%] sm:w-[48%] md:w-[36%] lg:w-[30%]"
            >
              {/* Image - dominant, holds the promo layout/poster itself */}
              <div
                className={`relative rounded-t overflow-hidden bg-slate-100 dark:bg-white/[0.03] aspect-[4/5] border transition-all duration-300 ${hasPromo
                  ? 'border-indigo-200 dark:border-indigo-500/30 group-hover:border-indigo-400 dark:group-hover:border-indigo-400/60 group-hover:shadow-xl group-hover:shadow-indigo-500/10'
                  : 'border-slate-200 dark:border-white/10 group-hover:border-slate-300 dark:group-hover:border-white/20 group-hover:shadow-lg dark:group-hover:shadow-black/30'
                  } group-hover:-translate-y-1`}
              >
                <Image
                  src={product.image_url}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {product.discount_percent && (
                  <span className="absolute top-3 left-3 z-10 text-[9px] font-bold px-2 py-1 rounded-full bg-red-500 text-white">
                    -{product.discount_percent}%
                  </span>
                )}
              </div>

              {/* Caption - just name + CTA, no separate price box */}
              <div className="flex items-center justify-between gap-3 p-4">
                <div className="min-w-0">
                  <p className="text-slate-900 dark:text-white font-bold text-sm leading-snug truncate">
                    {product.name}
                  </p>
                  <p className="text-[11px] text-slate-400 dark:text-gray-600 truncate">
                    {product.category}
                  </p>
                  <p className="text-[11px] text-slate-400 dark:text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                    Rp {product.price?.toLocaleString('id-ID')}
                  </p>
                </div>
                <Link
                  href={`/produk/${product.slug}`}
                  className={`text-[10.5px] font-semibold px-3.5 py-1.5 rounded-full transition-colors flex-shrink-0 ${hasPromo
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-indigo-600 dark:hover:bg-indigo-400 dark:hover:text-white'
                    }`}
                >
                  {hasPromo ? 'Ambil Promo →' : 'Detail →'}
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}