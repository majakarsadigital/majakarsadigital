import { Product } from '@/lib/interfaces/products.inteface'
import Image from 'next/image'
import Link from 'next/link'


export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative rounded-sm border border-slate-200 dark:border-white/40 bg-white dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/10 hover:shadow-lg dark:hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-pointer">

      {/* Thumbnail */}
      <div className="relative h-56 sm:h-64 bg-slate-100 dark:bg-white/[0.03] overflow-hidden">
        {product.image_url && (
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        )}
        {product.discount_percent && (
          <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white">
            {product.discount_percent}
          </span>
        )}
        {product.badge && (
          <span
            className={`absolute top-3 right-3 text-[9px] font-bold px-2 py-1 rounded-full backdrop-blur-sm ${
              product.badge === 'Popular'
                ? 'bg-indigo-500/90 text-white'
                : 'bg-emerald-500/90 text-white'
            }`}
          >
            {product.badge === 'Popular' ? '🔥 Popular' : '✨ New'}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase py-1 rounded-full mb-3">
          {product.category}
        </span>
        <h3 className="text-slate-900 dark:text-white font-bold text-[15px] leading-snug mb-1.5">
          {product.name}
        </h3>
        <p className="text-slate-500 dark:text-gray-500 text-xs leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Tech tags */}
        <div className="flex gap-1.5 flex-wrap mb-4">
          {(['Next.js', 'Tailwind', 'TypeScript'] as const).map(tag => (
            <span
              key={tag}
              className="text-[9px] font-semibold px-2 py-0.5 rounded border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/5 gap-2">
          <div className="min-w-0">
            <p className="text-slate-900 dark:text-white font-bold text-sm truncate">Rp{Number(product.price).toLocaleString('id-ID')}</p>
            {product.original_price && (
              <p className="text-slate-400 dark:text-gray-600 text-[11px] line-through mt-0.5 truncate">Rp{Number(product.original_price).toLocaleString('id-ID')}</p>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {product.discount_percent && product.discount_percent > 0 && (
              <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                {product.discount_percent} %
              </span>
            )}
            <Link
              href={`/produk/${product.slug}`}
              className="text-[10.5px] font-semibold px-3.5 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-indigo-600 dark:hover:bg-indigo-400 dark:hover:text-white transition-colors"
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}