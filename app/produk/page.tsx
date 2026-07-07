import ProductComponent from '@/components/ProductComponent'
import { getProducts } from '@/lib/repositories/products.repository'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Produk Kami',
}

export default async function ProductPage() {
  const products = await getProducts()

  return <ProductComponent products={products} />
}