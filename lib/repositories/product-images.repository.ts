import { supabase } from '@/lib/supabase'

export async function getProductImages(productId: string) {
  const { data, error } = await supabase
    .from('product_images')
    .select('*')
    .eq('product_id', productId)
    .order('sort_order')

  if (error) {
    throw new Error(error.message)
  }

  return data
}