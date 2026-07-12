'use client'

import { usePathname } from 'next/navigation'
import { Footer } from './footer'
import { Navbar } from './navbar'
import { ThemeProvider } from './theme-provider'
import { TopBannerDark } from './top-banner-dark'
import { TopBannerLight } from './top-banner-light'

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const hideLayout = ['/login', '/register'].includes(pathname)

  return (
    <div className="dark:bg-black bg-white">
      <ThemeProvider>
        {!hideLayout && (
          <>
            <div className="relative z-50">
              <div className="hidden mt-7 dark:block">
                <TopBannerDark />
              </div>
              <div className="block dark:hidden">
                <TopBannerLight />
              </div>
            </div>

            <Navbar />
          </>
        )}

        {children}

        {!hideLayout && <Footer />}
      </ThemeProvider>
    </div>
  )
}