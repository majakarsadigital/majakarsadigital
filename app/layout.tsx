import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { AppWrapper } from '@/components/app-wrapper'
import './globals.css'
import { createClient } from '@supabase/supabase-js'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'MajakarsaDigital',
    template: '%s | MajakarsaDigital',
  },
  description: 'Created by Majakarsa',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang="en" className={`${poppins.variable} bg-[#f4f5f7]`}>
      <body className="font-sans antialiased">
        <AppWrapper>
          {children}
        </AppWrapper>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
