import { supabase } from '@/lib/supabase'

export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_show', true)


  if (error) {
    throw new Error(error.message)
  }
  // console.log({
  //   data,
  //   error,
  // })
  return data
}