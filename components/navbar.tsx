'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './theme-toggle'

const menuItems = [
  { label: 'BERANDA', href: '/' },
  // { label: 'ARTIKEL', href: '/artikel' },
  { label: 'TENTANG', href: '/tentang' },
  { label: 'PRODUK', href: '/produk' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'BUAT', href: '/buat', isNew: true },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  // Tutup drawer saat route berubah
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock scroll saat drawer terbuka
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  // Tutup drawer dengan Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      {/* ── Sticky wrapper ── */}
<div className="sticky top-0 z-50 isolate dark:px-3 dark:pt-3 sm:dark:px-4">
  <nav
    className={`
      mx-auto
      py-2 dark:py-0
      max-w-full dark:max-w-4xl dark:rounded-full
      border border-black/[0.08] dark:border-white/[0.08]
      bg-white dark:bg-white/[0.08]
      backdrop-blur-0 dark:backdrop-blur-xl
      dark:shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)]
      px-3 sm:px-6 md:px-8 lg:px-12 dark:px-12
    `}
  >
          <div className="flex h-[52px] items-center justify-between gap-2 sm:gap-4">

            {/* ── Logo ── */}
            <Link
              href="/"
              className="shrink-0 text-[18px] sm:text-[20px] dark:text-[15px] font-bold tracking-tight text-slate-900 dark:text-white"
            >
              majakarsa
              <span className="text-[13px] sm:text-[15px] dark:text-[12px] font-normal text-slate-900/40 dark:text-white/38">
                {' '}digital
              </span>
            </Link>

            {/* ── Desktop nav — tampil mulai md ── */}
            <div className="hidden md:flex items-center gap-0 lg:gap-0.5 ml-auto dark:flex-1 dark:justify-center dark:ml-0">
              {menuItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      relative px-2 lg:px-2.5 py-1.5
                      text-[10px] lg:text-[10.5px] dark:text-[10.5px]
                      font-semibold tracking-[0.55px] uppercase
                      transition-colors whitespace-nowrap
                      ${active
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-900/45 hover:text-slate-900/85 dark:text-white/48 dark:hover:text-white/88'
                      }
                    `}
                  >
                    {item.label}
                    {item.isNew && (
                      <span className="ml-1 align-super text-[8px] font-bold bg-indigo-500 text-white px-1 py-px rounded-full">
                        NEW
                      </span>
                    )}
                    {active && (
                      <div className="absolute bottom-[-1px] left-1.5 right-1.5 h-0.5 bg-indigo-500 rounded-t" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* ── Kanan: theme toggle + hamburger ── */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              <ThemeToggle />

              {/* Hamburger — hanya di bawah md */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-expanded={open}
                aria-controls="mobile-drawer"
                aria-label="Buka menu"
                className="
                  md:hidden
                  relative h-8 w-8 flex items-center justify-center
                  rounded-full
                  hover:bg-black/5 dark:hover:bg-white/8
                  text-black dark:text-white/70
                  transition-colors
                "
              >
                <span className="sr-only">Buka menu</span>
                <div className="relative h-3.5 w-4 flex flex-col justify-between">
                  <span className="block h-[1.5px] w-full bg-current rounded-full" />
                  <span className="block h-[1.5px] w-full bg-current rounded-full" />
                  <span className="block h-[1.5px] w-full bg-current rounded-full" />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* ── Backdrop ── */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`
          md:hidden fixed inset-0 z-[60]
          bg-black/30 dark:bg-black/50
          backdrop-blur-[2px]
          transition-opacity duration-300
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        className={`
          md:hidden
          fixed top-0 right-0 z-[70]
          h-dvh
          /* Lebar drawer: 80% layar, maksimal 300px di xs, 320px di sm ke atas */
          w-[80%] max-w-[300px] sm:max-w-[320px]
          bg-white dark:bg-[#0a0a0a]
          border-l border-black/[0.08] dark:border-white/10
          shadow-[-8px_0_32px_rgba(0,0,0,0.15)] dark:shadow-[-8px_0_32px_rgba(0,0,0,0.5)]
          transition-transform duration-300 ease-out
          flex flex-col
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header drawer */}
        <div className="flex h-[52px] items-center justify-between px-4 sm:px-5 border-b border-black/[0.06] dark:border-white/10 shrink-0">
          <span className="text-[15px] font-bold tracking-tight text-slate-900 dark:text-white">
            majakarsa
            <span className="text-[12px] font-normal text-slate-900/40 dark:text-white/38"> digital</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Tutup menu"
            className="
              h-8 w-8 flex items-center justify-center rounded-full
              text-slate-700 hover:bg-black/5
              dark:text-white/70 dark:hover:bg-white/8
              transition-colors
            "
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex flex-col gap-0.5 sm:gap-1">
            {menuItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center justify-between
                    rounded-xl px-3 sm:px-3.5 py-2.5 sm:py-3
                    text-[11px] sm:text-[12px] font-semibold tracking-[0.5px] uppercase
                    transition-colors
                    ${active
                      ? 'text-slate-900 bg-black/[0.04] dark:text-white dark:bg-white/[0.07]'
                      : 'text-slate-900/55 hover:bg-black/[0.03] dark:text-white/55 dark:hover:bg-white/[0.05]'
                    }
                  `}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.isNew && (
                      <span className="text-[8px] font-bold bg-indigo-500 text-white px-1 py-px rounded-full">
                        NEW
                      </span>
                    )}
                  </span>
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Footer drawer — uncomment jika perlu tombol Login/Register */}
        {/* <div className="px-3 sm:px-4 pb-5 pt-3 border-t border-black/[0.06] dark:border-white/10 shrink-0 flex flex-col gap-2">
          <Button
            variant="ghost"
            className="w-full h-10 text-[10.5px] font-semibold tracking-[0.5px] uppercase
              text-slate-700 border border-black/10 hover:bg-black/5
              dark:text-white/60 dark:border-white/12 dark:hover:bg-white/8 dark:hover:text-white"
          >
            LOGIN
          </Button>
          <Button
            className="w-full h-10 text-[10.5px] font-semibold tracking-[0.5px] uppercase
              bg-indigo-500 hover:bg-indigo-600 text-white border border-indigo-400"
          >
            REGISTER
          </Button>
        </div> */}
      </div>
    </>
  )
}