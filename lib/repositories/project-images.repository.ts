import { supabase } from '@/lib/supabase'

export async function getProjectImages(projectId: string) {
  const { data, error } = await supabase
    .from('project_images')
    .select('*')
    .eq('project_id', projectId)
    .order('sort_order')

  if (error) {
    throw new Error(error.message)
  }

  return data
}