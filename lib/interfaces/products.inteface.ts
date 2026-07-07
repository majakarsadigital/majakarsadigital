export interface Product {
  id: string
  slug: string
  name: string
  category: string
  description: string
  price: number
  original_price: number | null
  discount_percent: number | null
  badge: string | null
  type: string | null
  image_url: string | null
  created_at: string
  updated_at: string
}