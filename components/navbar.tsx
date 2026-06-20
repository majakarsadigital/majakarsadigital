'use client'
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
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <div className="sticky top-0 z-50 px-4 pt-3">
        <nav className=" mx-auto max-w-4xl rounded-full border border-black/[0.08] dark:border-white/10 bg-white/55 dark:bg-white/[0.04] backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_4px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.07)]
  ">
          <div className="flex h-[52px] items-center justify-between gap-6 px-5">

            <Link href="/" className="text-[15px] font-bold tracking-tight text-slate-900 dark:text-white">
              majakarsa
              <span className="text-[12px] font-normal text-slate-900/40 dark:text-white/38"> digital</span>
            </Link>

            <div className="hidden gap-0.5 md:flex">
              {menuItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-2 py-1.5 text-[10.5px] font-semibold tracking-[0.55px] uppercase transition-colors ${active
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-900/45 hover:text-slate-900/85 dark:text-white/48 dark:hover:text-white/88'
                      }`}
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

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                className="hidden sm:inline-flex h-7 px-3 text-[10.5px] font-semibold tracking-[0.5px] uppercase
            text-slate-700 border border-black/10 hover:bg-black/5
            dark:text-white/60 dark:border-white/12 dark:hover:bg-white/8 dark:hover:text-white"
              >
                LOGIN
              </Button>
              <Button
                className="h-7 px-3.5 text-[10.5px] font-semibold tracking-[0.5px] uppercase
            bg-indigo-500 hover:bg-indigo-600 text-white border border-indigo-400"
              >
                REGISTER
              </Button>
            </div>

          </div>
        </nav>
      </div>
    </>
  )
}