'use client'
import Link from 'next/link'

export function TopBanner() {
  return (
    <div className="dark:px-4 pt-1 dark:pt-4 -mt-8 dark:pb-1">
      <div
        className="
          mx-auto py-1 dark:py-0 dark:max-w-xl dark:rounded-2xl
          border border-black/[0.08] dark:border-white/10
          bg-white dark:bg-white/[0.06]
          backdrop-blur-xl
          shadow-[0_4px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]
          dark:shadow-[0_4px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.07)]
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
          <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.5px] uppercase text-black/40 dark:text-white/75">
            From Majakarsa Author
          </span>
          <span className="hidden sm:inline text-black/20 dark:text-white/55 text-xs">·</span>
          <Link
            href="https://startpagehq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.3px] text-green-400 hover:text-green-300 transition-colors underline underline-offset-2"
          >
            Butuh website atau aplikasi?
          </Link>
          <span className="hidden sm:inline text-black/20 dark:text-white/55 text-xs">-</span>
          <span className="text-[10px] sm:text-[10.5px] font-medium text-black/55 dark:text-white/75 basis-full sm:basis-auto">
            Konsultasi gratis sekarang
          </span>
        </div>
      </div>
    </div>
  )
}