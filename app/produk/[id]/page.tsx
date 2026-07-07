import ProductDetailComponent from '@/components/ProductDetailComponent'
import {
  getProductBySlug,
  getProducts,
} from '@/lib/repositories/products.repository'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params

  try {
    const product = await getProductBySlug(id)

    return {
      title: product.name,
      description: product.description,
    }
  } catch {
    return {
      title: 'Produk Tidak Ditemukan',
    }
  }
}

export default async function ProductDetailPage({
  params,
}: Props) {
  const { id } = await params

  const product = await getProductBySlug(id)

  if (!product) {
    notFound()
  }

  const products = await getProducts()

  const relatedProducts = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.slug !== product.slug
    )
    .slice(0, 3)

  return (
    <ProductDetailComponent
      product={product}
      relatedProducts={relatedProducts}
    />
  )
}