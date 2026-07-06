import CreateComponent from '@/components/CreateComponent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buat',
}

export default function Page() {
  return <CreateComponent />
}