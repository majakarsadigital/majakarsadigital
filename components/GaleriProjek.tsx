'use client'

export type GalleryImage = {
  src: string
  alt: string
  orientation: 'horizontal' | 'vertical' // horizontal = mockup desktop, vertical = di-rotate jadi memanjang
  title?: string
}

export default function GaleriProjek({ images }: { images: GalleryImage[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 dark:text-indigo-400">
          Galeri
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
          Tampilan Nyata dari Proyek Kami
        </h2>
      </div>

      {/* Flexbox dinamis — item horizontal akan melebar (flex-grow),
          item vertical punya ukuran tetap (fixed width kecil, tinggi besar) */}
      <div className="flex flex-wrap items-end gap-4">
        {images.map((img, i) => {
          const isVertical = img.orientation === 'vertical'

          return (
            <div
              key={i}
              className={
                isVertical
                  ? // MOCKUP MOBILE (vertical) — frame gelap ala smartphone
                    'group relative h-72 md:h-96 w-40 md:w-52 shrink-0 overflow-hidden rounded-[1.75rem] border-[6px] border-slate-800 dark:border-white/10 bg-slate-900 shadow-lg shadow-black/20'
                  : // MOCKUP DESKTOP (horizontal) — frame browser
                    'group relative h-64 md:h-80 flex-[2] min-w-[280px] max-w-[560px] overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-md shadow-slate-200/60 dark:shadow-black/30'
              }
            >
              {/* Notch kecil di atas untuk kesan mockup HP */}
              {isVertical && (
                <span className="absolute top-1.5 left-1/2 -translate-x-1/2 z-10 h-1 w-10 rounded-full bg-slate-700" />
              )}

              {/* Bar browser untuk kesan mockup desktop */}
              {!isVertical && (
                <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 h-6 px-3 bg-slate-100 dark:bg-white/5 border-b border-slate-200 dark:border-white/10">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              )}

              {isVertical ? (
                // GAMBAR DI-ROTATE 90° — dimensi ditukar (w<->h) lalu diputar,
                // sehingga object-cover otomatis pas mengisi container tegak
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute top-1/2 left-1/2 w-72 md:w-96 h-40 md:h-52 -translate-x-1/2 -translate-y-1/2 rotate-90 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full pt-6 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {img.title && (
                <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-[11px] font-semibold text-white truncate">{img.title}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}