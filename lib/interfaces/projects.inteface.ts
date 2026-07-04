export interface Project {
  id: string
  slug: string
  title: string
  category: string
  description: string
  image_url: string | null
  original_price: number | null
  discount_percent: number | null
  badge: string | null
  type: string | null
}