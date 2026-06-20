'use client'
import { Footer } from './footer'
import { Navbar } from './navbar'
import { ThemeProvider } from './theme-provider'
import { TopBanner } from './top-banner'

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='dark:bg-black'>
      <ThemeProvider>
        <div className="relative mt-7 z-10">
          <TopBanner />
        </div>
        <Navbar />
        {children}

        <Footer />

      </ThemeProvider>
    </div>
  )
}