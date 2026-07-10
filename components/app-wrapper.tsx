'use client'
import { Footer } from './footer'
import { Navbar } from './navbar'
import { ThemeProvider } from './theme-provider'
import { TopBannerDark } from './top-banner-dark'
import { TopBannerLight } from './top-banner-light'

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-black bg-white">
      <ThemeProvider>
        <div className="relative z-50">
          <div className="hidden mt-7 dark:block">
            <TopBannerDark />
          </div>
          <div className="block dark:hidden">
            <TopBannerLight />
          </div>
        </div>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  )
}