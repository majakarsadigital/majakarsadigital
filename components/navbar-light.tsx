'use client'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { useNavbar } from './use-navbar'

export function NavbarLight() {
    const { open, setOpen, isActive, menuItems, scrolled } = useNavbar()

    const mainItems = menuItems.filter((item) => item.href !== '/buat')
    const ctaItem = menuItems.find((item) => item.href === '/buat')

    return (
        <>
            <div className="sticky top-0 z-100 isolate bg-white">
                <div className="border-b border-black/[0.06]">
                    <div className="mx-auto max-w-7xl px-3 sm:px-6 md:px-8 lg:px-12">
                        <div
                            className={`relative flex items-center justify-center transition-[height] duration-300 ease-out ${scrolled ? 'h-10' : 'h-14'
                                }`}
                        >
                            <Link
                                href="/"
                                className={`font-futura tracking-[2px] uppercase text-slate-900 transition-all duration-300 ease-out ${scrolled ? 'text-[13px] sm:text-[14px]' : 'text-[16px] sm:text-[18px]'
                                    }`}
                            >
                                majakarsa<span className='text-slate-700'>digital</span>
                            </Link>

                            <div className="absolute right-0 flex items-center gap-1 sm:gap-1.5">
                                <ThemeToggle />
                                <button
                                    type="button"
                                    onClick={() => setOpen(true)}
                                    aria-expanded={open}
                                    aria-controls="mobile-drawer"
                                    aria-label="Buka menu"
                                    className="md:hidden h-8 w-8 flex items-center justify-center rounded-full hover:bg-black/5 text-black transition-colors"
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
                    </div>
                </div>

                {/* ── Baris 2: Nav links kiri, CTA kanan (desktop only) ── */}
                <div className="hidden md:block border-b border-black/[0.08]">
                    <div className="mx-auto max-w-7xl px-3 sm:px-6 md:px-8 lg:px-12">
                        <div className="flex h-10 items-center justify-between">
                            <div className="flex items-center gap-5 lg:gap-6">
                                {mainItems.map((item) => {
                                    const active = isActive(item.href)
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`text-[11px] font-medium tracking-[0.3px] uppercase transition-colors ${active ? 'text-indigo-500' : 'text-slate-600 hover:text-slate-900'
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                })}
                            </div>

                            {ctaItem && (
                                <Link
                                    href={ctaItem.href}
                                    className={`flex items-center gap-1.5 text-[11px] font-medium tracking-[0.3px] uppercase transition-colors ${isActive(ctaItem.href) ? 'text-indigo-500' : 'text-slate-600 hover:text-slate-900'
                                        }`}
                                >
                                    {ctaItem.label}
                                    <span className="text-[8px] font-bold bg-indigo-500 text-white px-1 py-px rounded-full">
                                        NEW
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Backdrop ── */}
            <div
                aria-hidden="true"
                onClick={() => setOpen(false)}
                className={`md:hidden fixed inset-0 z-[60] bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            />

            {/* ── Mobile drawer ── */}
            <div
                id="mobile-drawer"
                role="dialog"
                aria-modal="true"
                aria-label="Menu navigasi"
                className={`md:hidden fixed top-0 right-0 z-[70] h-dvh w-[80%] max-w-[300px] sm:max-w-[320px] bg-white border-l border-black/[0.08] shadow-[-8px_0_32px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex h-[52px] items-center justify-between px-4 sm:px-5 border-b border-black/[0.06] shrink-0">
                    <span className="text-[15px] font-bold tracking-tight text-slate-900">
                        majakarsa
                        <span className="text-[12px] font-normal text-slate-900/40"> digital</span>
                    </span>
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        aria-label="Tutup menu"
                        className="h-8 w-8 flex items-center justify-center rounded-full text-slate-700 hover:bg-black/5 transition-colors"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 sm:py-4">
                    <div className="flex flex-col gap-0.5 sm:gap-1">
                        {menuItems.map((item) => {
                            const active = isActive(item.href)
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center justify-between rounded-xl px-3 sm:px-3.5 py-2.5 sm:py-3 text-[11px] sm:text-[12px] font-semibold tracking-[0.5px] uppercase transition-colors ${active ? 'text-slate-900 bg-black/[0.04]' : 'text-slate-900/55 hover:bg-black/[0.03]'
                                        }`}
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
            </div>
        </>
    )
}