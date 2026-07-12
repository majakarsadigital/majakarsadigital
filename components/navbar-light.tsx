'use client'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { useNavbar } from './use-navbar'
import { useAuth } from './auth-provider'
import { supabase } from '@/lib/supabase'

const secondaryItems = [
    { label: 'Sponsor', href: '/sponsor' },
    { label: 'Paket', href: '/paket' },
    { label: 'Dukungan', href: '/dukungan' },
    { label: 'Terms & Privacy', href: '/store' },
]

export function NavbarLight() {
    const { open, setOpen, isActive, menuItems, scrolled } = useNavbar()
    const { user } = useAuth()

    const userName = user?.user_metadata?.full_name ?? user?.email ?? ''
    const userEmail = user?.email ?? ''

    return (
        <>
            <div className="sticky top-0 z-100 isolate bg-black">
                {/* ── Baris 1: link sekunder + status user, kecil & redup ── */}
                <div className="hidden md:block border-b border-white/[0.08]">
                    <div className="mx-auto max-w-full px-3 sm:px-6 md:px-8 lg:px-12">
                        <div className="flex h-8 items-center justify-end gap-5">
                            {secondaryItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-[11px] font-medium tracking-[0.3px] text-white/50 hover:text-white/80 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <span className="h-3 w-px bg-white/15" />
                            <Link
                                href="/subscribe"
                                className="text-[11px] font-bold tracking-[0.3px] uppercase text-white hover:text-indigo-400 transition-colors"
                            >
                                Subscribe
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Baris 2: hamburger + logo (kiri), nav utama termasuk "Buat" (kiri), toggle (kanan) ── */}
                <div className="border-b border-white/[0.08]">
                    <div className="mx-auto max-w-full px-3 sm:px-6 md:px-8 lg:px-12">
                        <div
                            className={`flex items-center gap-6 lg:gap-8 transition-[height] duration-300 ease-out ${scrolled ? 'h-11' : 'h-14'
                                }`}
                        >
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                aria-expanded={open}
                                aria-controls="mobile-drawer"
                                aria-label="Buka menu"
                                className="md:hidden h-8 w-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors shrink-0"
                            >
                                <span className="sr-only">Buka menu</span>
                                <div className="relative h-3.5 w-4 flex flex-col justify-between">
                                    <span className="block h-[1.5px] w-full bg-current rounded-full" />
                                    <span className="block h-[1.5px] w-full bg-current rounded-full" />
                                    <span className="block h-[1.5px] w-full bg-current rounded-full" />
                                </div>
                            </button>

                            <Link
                                href="/"
                                className={`font-futura tracking-[2px] uppercase text-white transition-all duration-300 ease-out shrink-0 ${scrolled ? 'text-[13px] sm:text-[14px]' : 'text-[16px] sm:text-[18px]'
                                    }`}
                            >
                                majakarsa<span className="text-white/60">digital</span>
                            </Link>

                            <div className="hidden md:flex items-center gap-5 lg:gap-6 flex-1">
                                {menuItems.map((item) => {
                                    const active = isActive(item.href)
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`flex items-center gap-1.5 text-[12px] font-medium tracking-[0.3px] uppercase transition-colors ${active ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
                                                }`}
                                        >
                                            {item.label}
                                            {item.isNew && (
                                                <span className="text-[8px] font-bold bg-indigo-500 text-white px-1 py-px rounded-full">
                                                    NEW
                                                </span>
                                            )}
                                        </Link>
                                    )
                                })}
                            </div>

                            <div className="flex-1 md:flex-none" />

                            <div className="flex items-center gap-3 shrink-0">
                                {user ? (
                                    <span className="hidden sm:flex items-center gap-1.5 text-[12px] tracking-[0.2px]">
                                        <button
                                            type="button"
                                            onClick={() => supabase.auth.signOut()}
                                            className="text-white/50 hover:text-white/80 transition-colors"
                                        >
                                            Logout
                                        </button>
                                        <span className="text-white/25">|</span>
                                        <Link
                                            href="/akun"
                                            title={userEmail}
                                            className="max-w-[140px] truncate font-bold text-white hover:text-white/80 transition-colors"
                                        >
                                            {userName || 'Welcome'}
                                        </Link>
                                    </span>
                                ) : (
                                    <span className="hidden sm:flex items-center gap-1.5 text-[12px] tracking-[0.2px]">
                                        <Link
                                            href="/register"
                                            className="text-white/50 hover:text-white/80 transition-colors"
                                        >
                                            Daftar
                                        </Link>
                                        <span className="text-white/25">|</span>
                                        <Link
                                            href="/login"
                                            className="font-bold text-white hover:text-white/80 transition-colors"
                                        >
                                            Masuk
                                        </Link>
                                    </span>
                                )}

                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Backdrop ── */}
            <div
                aria-hidden="true"
                onClick={() => setOpen(false)}
                className={`md:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            />

            {/* ── Mobile drawer ── */}
            <div
                id="mobile-drawer"
                role="dialog"
                aria-modal="true"
                aria-label="Menu navigasi"
                className={`md:hidden fixed top-0 right-0 z-100 h-dvh w-[80%] max-w-[300px] sm:max-w-[320px] bg-black border-l border-white/[0.08] shadow-[-8px_0_32px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex h-[52px] items-center justify-between px-4 sm:px-5 border-b border-white/[0.08] shrink-0">
                    <span className="text-[15px] font-bold tracking-tight text-white">
                        majakarsa
                        <span className="text-[12px] font-normal text-white/40"> digital</span>
                    </span>
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        aria-label="Tutup menu"
                        className="h-8 w-8 flex items-center justify-center rounded-full text-white/80 hover:bg-white/10 transition-colors"
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
                                    className={`flex items-center justify-between rounded-xl px-3 sm:px-3.5 py-2.5 sm:py-3 text-[11px] sm:text-[12px] font-semibold tracking-[0.5px] uppercase transition-colors ${active ? 'text-white bg-white/[0.08]' : 'text-white/55 hover:bg-white/[0.05]'
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

                    <div className="mt-4 pt-4 border-t border-white/[0.08] flex flex-col gap-0.5 sm:gap-1">
                        {secondaryItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-xl px-3 sm:px-3.5 py-2.5 sm:py-3 text-[11px] sm:text-[12px] font-medium tracking-[0.3px] text-white/50 hover:bg-white/[0.05] hover:text-white/80 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className="mt-2 pt-2 border-t border-white/[0.08] flex items-center justify-between px-3.5">
                            {user ? (
                                <div className="flex items-center gap-1.5 py-2.5 text-[12px]">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            supabase.auth.signOut()
                                            setOpen(false)
                                        }}
                                        className="text-white/50 hover:text-white/80 transition-colors"
                                    >
                                        Logout
                                    </button>
                                    <span className="text-white/25">|</span>
                                    <Link
                                        href="/akun"
                                        onClick={() => setOpen(false)}
                                        title={userEmail}
                                        className="max-w-[160px] truncate font-bold text-white hover:text-white/80 transition-colors"
                                    >
                                        {userName || 'Welcome'}
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex items-center gap-1.5 py-2.5 text-[12px]">
                                    <Link
                                        href="/register"
                                        onClick={() => setOpen(false)}
                                        className="text-white/50 hover:text-white/80 transition-colors"
                                    >
                                        Daftar
                                    </Link>
                                    <span className="text-white/25">|</span>
                                    <Link
                                        href="/login"
                                        onClick={() => setOpen(false)}
                                        className="font-bold text-white hover:text-white/80 transition-colors"
                                    >
                                        Masuk
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}