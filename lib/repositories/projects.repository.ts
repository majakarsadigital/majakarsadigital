import { supabase } from '@/lib/supabase'

export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('sort_order', { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  // console.log({
  //   data,
  //   error,
  // })

  return data
}

export async function getProjectBySlug(slug: string) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
  if (error) {
    throw new Error(error.message)
  }

  console.log({
    data,
    error,
  })

  return data
}