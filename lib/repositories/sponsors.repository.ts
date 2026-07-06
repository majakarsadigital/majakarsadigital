import { supabase } from '@/lib/supabase'

export async function getSponsors() {
  const { data, error } = await supabase
    .from('sponsors_samples')
    .select('*')
    .order('sort_order')

  if (error) {
    throw new Error(error.message)
  }
  // console.log({
  //   data,
  //   error,
  // })
  return data
}