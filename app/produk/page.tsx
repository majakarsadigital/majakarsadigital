'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { sampleProducts } from '@/lib/products'
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

const PRODUCTS_PER_PAGE = 9
const categories = ['Semua', 'Website', 'Aplikasi', 'Web & App']

export default function ProdukPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return sampleProducts.filter(p => {
      const matchCategory = activeCategory === 'Semua' || p.category === activeCategory
      const matchSearch = search.trim() === '' || (
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.desc.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      )
      return matchCategory && matchSearch
    })
  }, [activeCategory, search])

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

  return (
    <main className="min-h-screen bg-[#f4f5f7] dark:bg-black">

      <div className="bg-white dark:bg-black border-b border-slate-200/60 dark:border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 dark:text-indigo-400 mb-4">
                Katalog Produk
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 leading-tight tracking-tight">
                Produk Digital
                <br />
                <span className="text-indigo-500">Siap Pakai</span>
              </h1>
              <p className="text-slate-500 dark:text-gray-500 text-sm max-w-md leading-relaxed">
                Solusi digital berkualitas tinggi yang bisa langsung digunakan
                atau dikustomisasi sesuai kebutuhan bisnis Anda.
              </p>
            </div>

            <div className="flex gap-8 md:gap-10 flex-shrink-0">
              {[
                { value: `${sampleProducts.length}`, label: 'Produk' },
                { value: '3', label: 'Kategori' },
                { value: '200+', label: 'Klien' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
                  <p className="text-xs text-slate-400 dark:text-gray-600 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-black border-b border-slate-200/60 dark:border-white/5 sticky top-0 z-30 backdrop-blur-xl bg-white/90 dark:bg-black/90">
        <div className="mx-auto max-w-7xl px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">

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

          <div className="flex gap-1 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeCategory === cat
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
              {filtered.length} produk ditemukan
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">

        {filtered.length === 0 && (
          <div className="text-center py-32">
            <p className="text-5xl mb-5">🔍</p>
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

        {filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paginated.map((product) => (
              <div
                key={product.id}
                className="group relative rounded-sm border border-slate-200 dark:border-white/40 bg-white dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/10 hover:shadow-lg dark:hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative h-64 bg-slate-100 dark:bg-white/[0.03] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white">
                    {product.discount}
                  </span>
                  {product.badge && (
                    <span className={`absolute top-3 right-3 text-[9px] font-bold px-2 py-1 rounded-full backdrop-blur-sm ${product.badge === 'Popular' ? 'bg-indigo-500/90 text-white' : 'bg-emerald-500/90 text-white'}`}>
                      {product.badge === 'Popular' ? '🔥 Popular' : '✨ New'}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase py-1 rounded-full mb-3`}>
                    {product.category}
                  </span>
                  <h3 className="text-slate-900 dark:text-white font-bold text-[15px] leading-snug mb-1.5">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 dark:text-gray-500 text-xs leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <div className="flex gap-1.5 flex-wrap mb-4">
                    {(['Next.js', 'Tailwind', 'TypeScript'] as const).map(tag => (
                      <span key={tag} className="text-[9px] font-semibold px-2 py-0.5 rounded border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-500">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/5">
                    <div>
                      <p className="text-slate-900 dark:text-white font-bold text-sm">{product.price}</p>
                      <p className="text-slate-400 dark:text-gray-600 text-[11px] line-through mt-0.5">{product.originalPrice}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        {product.discount}
                      </span>
                      <Link
                        href={`/produk/${product.id}`}
                        className="text-[10.5px] font-semibold px-3.5 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-indigo-600 dark:hover:bg-indigo-400 dark:hover:text-white transition-colors"
                      >
                        Detail →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filtered.length > 0 && (
          <div className="mt-10 pt-6 border-t border-slate-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400 dark:text-gray-600">
              Menampilkan <span className="font-semibold text-slate-600 dark:text-gray-400">{start + 1}–{Math.min(start + PRODUCTS_PER_PAGE, filtered.length)}</span> dari <span className="font-semibold text-slate-600 dark:text-gray-400">{filtered.length}</span> produk
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
        )}

        <div className="mt-16 rounded-2xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-white/[0.02] p-8 md:p-12 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 dark:text-indigo-400 mb-4">Tidak menemukan yang cocok?</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Kami Juga Menerima Pesanan Custom
          </h2>
          <p className="text-slate-500 dark:text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Ceritakan kebutuhan spesifik Anda — kami bangun dari nol sesuai branding,
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