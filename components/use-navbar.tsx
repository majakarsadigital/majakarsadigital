'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export const menuItems = [
    { label: 'BERANDA', href: '/' },
    { label: 'TENTANG', href: '/tentang' },
    { label: 'PRODUK', href: '/produk' },
    { label: 'PRICELIST', href: '/pricelist' },
    { label: 'PORTFOLIO', href: '/portfolio' },
    { label: 'Hubungi Kami', href: '/#contact' },
    { label: 'BUAT', href: '/buat', isNew: true },
]

export function useNavbar() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname.startsWith(href)
    }

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    useEffect(() => {
        if (open) {
            const prev = document.body.style.overflow
            document.body.style.overflow = 'hidden'
            return () => {
                document.body.style.overflow = prev
            }
        }
    }, [open])

    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [open])

    // Deteksi scroll buat efek shrink logo
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll() // cek posisi awal (misal reload di tengah scroll)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return { open, setOpen, isActive, menuItems, scrolled }
}