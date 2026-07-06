'use client'

import Image from 'next/image'
import { useState } from 'react'

type Sponsor = {
  id: string
  name: string
  logo_url: string
}

export function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="flex h-5 sm:h-6 items-center">
        <span className="text-sm sm:text-base font-semibold tracking-wide text-gray-800 dark:text-black whitespace-nowrap">
          {sponsor.name}
        </span>
      </div>
    )
  }

  return (
    <Image
      src={sponsor.logo_url}
      alt={sponsor.name}
      width={120}
      height={40}
      className="h-5 sm:h-6 w-auto object-contain transition-all duration-300"
      onError={() => setHasError(true)}
    />
  )
}