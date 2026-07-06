import ProductComponent from '@/components/ProductComponent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Produk Kami',
}

export default function Page() {
  return <ProductComponent />
}