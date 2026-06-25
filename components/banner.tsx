'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

export function FloatingPromoBanner() {
  const [closed, setClosed] = useState(false)

  if (closed) return null

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-300 hidden lg:block">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <button
          onClick={() => setClosed(true)}
          className="absolute top-2 right-2 z-10 rounded-full bg-black/50 p-1 text-white"
        >
          <X size={14} />
        </button>

        <a
          href="https://wa.me/628135382932"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Promo"
            width={220}
            height={500}
            className="h-auto w-[220px]"
          />
        </a>
      </div>
    </div>
  )
}