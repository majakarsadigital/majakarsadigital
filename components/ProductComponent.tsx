'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import Image from 'next/image'
import { getProducts } from '@/lib/repositories/products.repository'
import { ReadyProductsCarousel } from '@/components/ready-products-carousel'
import Masonry from 'react-masonry-css'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import Link from 'next/link'
import { ProductCard } from '@/components/product-card'
import StackedCards from '@/components/StackedCard'
import { CatalogCarousel } from '@/components/catalog_carousel'
import { MingcuteSearchLine } from '@/public/assets/icons'
import { Product } from '@/lib/interfaces/products.inteface'

const PRODUCTS_PER_PAGE = 9
const categories = ['Semua', 'Website', 'Aplikasi', 'Web & App']

interface ProductComponentProps {
  products: Product[]
}

export default function ProductComponent({
  products,
}: ProductComponentProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [search, setSearch] = useState('')
  const [promoDocked, setPromoDocked] = useState(false)

  const promoAnchorRef = useRef<HTMLDivElement>(null)
  const contentSectionRef = useRef<HTMLDivElement>(null)


  const searchTerm = search.trim().toLowerCase()
  const isSearching = searchTerm !== ''

  // Cek apakah produk cocok dengan kata kunci search (dipakai untuk highlight, bukan filter)
  const isMatch = (p: any) => {
    if (!isSearching) return false
    return (
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm)
    )
  }

  // Hanya difilter oleh kategori — search tidak lagi menghilangkan produk
  const filtered = useMemo(() => {
    return products.filter((p) => activeCategory === 'Semua' || p.category === activeCategory)
  }, [products, activeCategory])

  const matchedCount = useMemo(() => {
    if (!isSearching) return filtered.length
    return filtered.filter(isMatch).length
  }, [filtered, searchTerm, isSearching])

  // Grouping per kategori, dipakai saat tab "Semua" aktif
  const groupedByCategory = useMemo(() => {
    if (activeCategory !== 'Semua') return []
    const cats = categories.filter((c) => c !== 'Semua')
    return cats
      .map((cat) => ({ category: cat, items: filtered.filter((p) => p.category === cat) }))
      .filter((g) => g.items.length > 0)
  }, [filtered, activeCategory])

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE)
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE
  const paginated = filtered.slice(start, start + PRODUCTS_PER_PAGE)

  const handleCategory = (cat: string) => { setActiveCategory(cat); setCurrentPage(1) }
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); setCurrentPage(1) }

  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = []
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1)
    pages.push(1)
    if (currentPage > 3) pages.push('ellipsis')
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) pages.push(i)
    if (currentPage < totalPages - 2) pages.push('ellipsis')
    pages.push(totalPages)
    return pages
  }

  // Class wrapper kartu: highlight kalau cocok search, redup kalau tidak
  const cardWrapperClass = (product: any) => {
    if (!isSearching) return ''
    return isMatch(product)
      ? 'ring-2 ring-indigo-500 dark:ring-indigo-400 rounded-2xl shadow-lg shadow-indigo-500/10 scale-[1.02] transition-all duration-200'
      : 'opacity-40 grayscale-[0.4] transition-all duration-200'
  }

  useEffect(() => {
    const anchor = promoAnchorRef.current
    if (!anchor) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPromoDocked(entry.boundingClientRect.top < 0 && !entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '-128px 0px 0px 0px' }
    )

    observer.observe(anchor)
    return () => observer.disconnect()
  }, [])


  const latestProducts = useMemo(() => {
    if (products.length === 0) return []
    return [...products]
      .sort((a, b) => {
        const dateA = new Date(a.created_at ?? 0).getTime()
        const dateB = new Date(b.created_at ?? 0).getTime()
        return dateB - dateA
      })
      .slice(0, 2)
  }, [products])

  return (
    <main className="min-h-screen bg-[#f4f5f7] dark:bg-black">

      {/* Header */}
      <div className="bg-indigo-400 dark:bg-black">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-10 sm:py-16 border-b pb-0">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white dark:text-indigo-400 mb-3 sm:mb-4">
                Katalog Produk
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-white mb-3 leading-tight tracking-tight">
                Produk Digital
                <br />
                <span className="text-white">Siap Pakai</span>
              </h1>
              <p className="text-white/80 dark:text-gray-500 text-sm max-w-md leading-relaxed">
                Solusi digital berkualitas tinggi yang bisa langsung digunakan
                atau dikustomisasi sesuai kebutuhan bisnis Anda.
              </p>
            </div>

            <div className="flex gap-6 sm:gap-8 md:gap-10 flex-shrink-0">
              {[
                { value: `${products.length}`, label: 'Produk' },
                { value: '3', label: 'Kategori' },
                { value: '200+', label: 'Klien' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-white dark:text-white">{value}</p>
                  <p className="text-[10px] sm:text-xs text-white/80 dark:text-gray-600 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Spacer navbar */}
      <div className="h-14 sm:h-20 sticky top-0 z-20 bg-white dark:bg-black border-b border-slate-200/60 dark:border-white/5" />

      {/* Filter bar */}
      <div className="bg-white/80 dark:bg-black border-b border-slate-200/60 dark:border-white/5 sticky top-14 sm:top-17 z-50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

          <div className="relative w-full sm:w-72">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 dark:text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Cari produk..."
              className="w-full pl-9 pr-9 py-2 text-sm rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-white/10 focus:ring-2 focus:ring-indigo-400/20 transition-all"
            />
            {search && (
              <button onClick={() => { setSearch(''); setCurrentPage(1) }} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-gray-300 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            )}
          </div>

          <div className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-white/10" />

          <div className="flex gap-1 flex-wrap overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-700 dark:hover:text-gray-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 && (
            <p className="text-xs text-slate-400 dark:text-gray-600 sm:ml-auto flex-shrink-0">
              {isSearching ? `${matchedCount} dari ${filtered.length} produk cocok` : `${filtered.length} produk ditemukan`}
            </p>
          )}
        </div>
      </div>

      {/* Banner docked — fixed di luar max-w-7xl, sisi kanan layar */}
      <div className={`hidden right-14 xl:block fixed bottom-10 z-50 w-64 transition-all duration-200 ${promoDocked
        ? 'opacity-100 translate-x-0 pointer-events-auto'
        : 'opacity-0 translate-x-4 pointer-events-none'
        }`}>
        <StackedCards />
      </div>

      {/* Main content */}
      <div ref={contentSectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
        {/* Section Produk Terbaru */}
        <div className={`hidden left-14 xl:block fixed bottom-10 z-20 w-64 transition-all duration-200 ${promoDocked
          ? 'opacity-100 translate-x-0 pointer-events-auto'
          : 'opacity-0 -translate-x-4 pointer-events-none'
          }`}>
          <div className="rounded border border-slate-200/60 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl shadow-lg shadow-slate-900/5 p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400 px-2 pt-1 pb-2">
              Produk
            </p>

            <div className="space-y-1 max-h-80 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/produk/${product.slug ?? product.id}`}
                  className="flex items-center border-b gap-3 px-2 py-2 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group"
                >
                  <div className="relative w-10 h-10 rounded overflow-hidden bg-slate-100 dark:bg-white/5 flex-shrink-0">
                    {product.image_url && (
                      <Image
                        src={product.image_url}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-900 dark:text-white leading-tight truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {product.name}
                    </p>
                    <p className="text-[10px] text-slate-400 dark:text-gray-500 leading-tight mt-0.5">
                      {product.category}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>

        {latestProducts.length > 0 && !isSearching && (
          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-2 mb-5 sm:mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500" />
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400">
                Produk Terbaru
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5">
              {latestProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/produk/${product.slug ?? product.id}`}
                  className="group relative block aspect-[21/9] sm:aspect-3/1 rounded sm:rounded-lg overflow-hidden bg-slate-100 dark:bg-white/5"
                >
                  {product.image_url && (
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      sizes="100vw"
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  )}

                  {/* Overlay gradient bawah — info dasar selalu terlihat */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Backdrop blur gelap saat hover */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Info dasar — pojok bawah, redup saat hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 group-hover:opacity-0 transition-opacity duration-200">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                        Baru
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                      {product.name}
                    </h3>
                  </div>

                  {/* Konten center — muncul saat hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="px-2.5 py-1 rounded-md bg-white/15 text-white text-[10px] font-bold uppercase tracking-wider">
                        Baru
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 leading-tight opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      {product.name}
                    </h3>

                    <p className="text-sm text-white/70 leading-relaxed max-w-md mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      {product.description}
                    </p>

                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-slate-900 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-150">
                      Lihat Detail
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}


        {/* Banner posisi asli (horizontal) */}
        <div ref={promoAnchorRef} className="mb-8 sm:mb-10">
          <CatalogCarousel />
          {/* <div className={`rounded overflow-hidden transition-opacity duration-200 ${promoDocked ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
            <Image
              src="/assets/pictures/add-pos-x.jpg"
              alt="Promo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div> */}
        </div>

        {/* Empty state — kategori ini tidak punya produk sama sekali */}
        {filtered.length === 0 && (
          <div className="text-center py-24 sm:py-32">
            <p className="text-4xl sm:text-5xl mb-5"><MingcuteSearchLine /></p>
            <p className="text-slate-900 dark:text-white font-bold text-lg mb-2">Produk tidak ditemukan</p>
            <p className="text-slate-400 dark:text-gray-600 text-sm mb-6">Coba kata kunci lain atau ubah filter kategori</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('Semua') }}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Mode "Semua": grid dibagi per kategori, tanpa pagination */}
        {filtered.length > 0 && activeCategory === 'Semua' && (
          <div className="space-y-14">
            {groupedByCategory.map(({ category, items }) => (
              <section key={category}>
                <div className="flex items-baseline gap-3 mb-5 sm:mb-6 pb-3 border-b border-slate-200 dark:border-white/10">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {category}
                  </h2>
                  <span className="text-[11px] text-slate-400 dark:text-gray-600">
                    {items.length} produk
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                  {items.map((product) => (
                    <div key={product.id} className={cardWrapperClass(product)}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Mode kategori spesifik: grid flat + pagination, seperti semula */}
        {filtered.length > 0 && activeCategory !== 'Semua' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
              {paginated.map((product) => (
                <div key={product.id} className={cardWrapperClass(product)}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 pt-6 border-t border-slate-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400 dark:text-gray-600 text-center sm:text-left">
                Menampilkan{' '}
                <span className="font-semibold text-slate-600 dark:text-gray-400">{start + 1}–{Math.min(start + PRODUCTS_PER_PAGE, filtered.length)}</span>
                {' '}dari{' '}
                <span className="font-semibold text-slate-600 dark:text-gray-400">{filtered.length}</span> produk
              </p>

              {totalPages > 1 && (
                <Pagination className="mx-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.max(1, p - 1)) }} className={currentPage === 1 ? 'pointer-events-none opacity-30' : ''} />
                    </PaginationItem>
                    {getPageNumbers().map((page, i) =>
                      page === 'ellipsis'
                        ? <PaginationItem key={`e-${i}`}><PaginationEllipsis /></PaginationItem>
                        : <PaginationItem key={page}><PaginationLink href="#" isActive={currentPage === page} onClick={(e) => { e.preventDefault(); setCurrentPage(page) }}>{page}</PaginationLink></PaginationItem>
                    )}
                    <PaginationItem>
                      <PaginationNext href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.min(totalPages, p + 1)) }} className={currentPage === totalPages ? 'pointer-events-none opacity-30' : ''} />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </>
        )}

        {/* CTA custom */}
        <div className="mt-12 sm:mt-16 rounded-2xl border  bg-white dark:bg-white/[0.02] border-indigo-100/80 dark:border-white/5 p-6 sm:p-8 md:p-12 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-indigo-500 dark:text-indigo-400 mb-4">Tidak menemukan yang cocok?</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Kami Juga Menerima Pesanan Custom
          </h2>
          <p className="text-slate-500 dark:text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Ceritakan kebutuhan spesifik Anda - kami bangun dari nol sesuai branding,
            alur kerja, dan kebutuhan teknis bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/buat" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors">
              Diskusikan Kebutuhan Anda →
            </Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
              Lihat Portfolio
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}