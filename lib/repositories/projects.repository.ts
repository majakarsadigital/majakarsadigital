import { supabase } from '@/lib/supabase'

export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('is_show', true)
    .order('sort_order', { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function getProjectBySlug(slug: string) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .eq('is_show', true)
    .single() // opsional jika slug bersifat unik

  if (error) {
    throw new Error(error.message)
  }

  return data
}