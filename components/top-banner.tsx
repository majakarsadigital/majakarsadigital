'use client'
import Link from 'next/link'

export function TopBanner() {
  return (
    <div className="px-4 pt-3 -mt-8 pb-1">
      <div className="
        mx-auto max-w-xl rounded-2xl
        border border-black/[0.08] dark:border-white/10
        bg-white/55 dark:bg-white/[0.06]
        backdrop-blur-xl
        shadow-[0_4px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]
        dark:shadow-[0_4px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.07)]
      ">
        <div className="flex h-9 items-center justify-center gap-2 px-5">
          <span className="text-[10px] font-semibold tracking-[0.5px] uppercase text-slate-900/40 dark:text-white/75">
            From Majakarsa Author
          </span>
          <span className="text-slate-900/20 dark:text-white/55 text-xs">·</span>
          <Link
            href="https://startpagehq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10.5px] font-semibold tracking-[0.3px] text-green-400 hover:text-green-300 transition-colors underline underline-offset-2"
          >
            Butuh website atau aplikasi?
          </Link>
          <span className="text-slate-900/20 dark:text-white/55 text-xs">-</span>
          <span className="text-[10.5px] font-medium text-slate-900/55 dark:text-white/75">
            Konsultasi gratis sekarang
          </span>
        </div>
      </div>
    </div>
  )
}