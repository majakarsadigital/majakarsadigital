import { getProjects } from "@/lib/repositories/projects.repository"
import ProjectCard from "./ProjectCard"

type Project = {
    id: string
    slug: string
    title: string
    category: string
    description: string
    image_url: string
    tech_stack?: string
    year: number
    color?: string
    sort_order: number
    is_featured: boolean
}

const DEFAULT_GRADIENT = 'from-indigo-500/10 to-blue-500/5'

function getTileClasses(index: number, total: number): string {
    const fullGroups = Math.floor(total / 4)
    const groupBoundary = fullGroups * 4
    const remainder = total - groupBoundary

    if (index < groupBoundary) {
        const posInGroup = index % 5
        if (posInGroup === 0) return 'lg:col-span-4 lg:row-span-2'
        if (posInGroup === 1) return 'lg:col-span-2 lg:row-span-1'
        if (posInGroup === 2) return 'lg:col-span-2 lg:row-span-1'
        // posInGroup 3 & 4 -> baris pemisah dibagi 2, bukan full-width
        return 'lg:col-span-3 lg:row-span-1'
    }

    // Bagian sisa di ujung — selalu row-span-1, lebar dibagi rata.
    if (remainder === 1) return 'lg:col-span-6 lg:row-span-1'
    if (remainder === 2) return 'lg:col-span-3 lg:row-span-1'
    if (remainder === 3) return 'lg:col-span-2 lg:row-span-1'
    return 'lg:col-span-3 lg:row-span-1' // remainder === 4
}

const projectsRaw = (await getProjects()) as Project[]

// urutkan berdasarkan sort_order, lalu terbaru dulu
const projects = [...projectsRaw].sort((a, b) => {
    if (a.sort_order !== b.sort_order) return a.sort_order - b.sort_order
    return b.year - a.year
})

// kategori dibuat dinamis dari data yang ada di supabase
const categories = ['Semua', ...Array.from(new Set(projects.map((p) => p.category)))]





export default async function BentoGallery() {
    return (
        <div  >



            {
                projects.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-300 dark:border-white/10 py-24 text-center">
                        <p className="text-sm text-slate-400 dark:text-gray-600">Belum ada proyek yang ditambahkan.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[15rem] lg:auto-rows-[13rem] gap-4">
                        {projects.map((project, index) => {
                            const techList = project.tech_stack
                                ? project.tech_stack.split(',').map((t) => t.trim()).filter(Boolean)
                                : []
                            const gradient = project.color || DEFAULT_GRADIENT
                            const tileClasses = getTileClasses(index, projects.length)
                            const isLarge = tileClasses.includes('row-span-2')

                            return (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    tileClasses={tileClasses}
                                    isLarge={isLarge}
                                    gradient={gradient}
                                    techList={techList}
                                />
                            )
                        })}
                    </div>)
            }
        </div>
    )
}