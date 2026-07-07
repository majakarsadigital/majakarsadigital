'use client'
import { useTheme } from './theme-provider'
import { NavbarLight } from './navbar-light'
import { NavbarDark } from './navbar-dark'

export function Navbar() {
  const { theme } = useTheme()
  return theme === 'dark' ? <NavbarDark /> : <NavbarLight />
}