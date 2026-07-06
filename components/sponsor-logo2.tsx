'use client'

import Image from 'next/image'
import { useState } from 'react'

type Sponsor = {
    id: string
    name: string
    logo_url: string
}

export function SponsorLogo2({ sponsor }: { sponsor: Sponsor }) {
    const [hasError, setHasError] = useState(false)

    if (hasError) {
        return (
            <div className="flex h-5 sm:h-6 items-center">
                <span className="text-sm sm:text-base font-semibold tracking-wide text-gray-800 whitespace-nowrap">
                    {sponsor.name}
                </span>
            </div>
        )
    }

    return (
        <Image
            src={sponsor.logo_url}
            alt={sponsor.name}
            width={100}
            height={100}
            className="max-w-full max-h-full object-contain"
            onError={() => setHasError(true)}
        />

    )
}