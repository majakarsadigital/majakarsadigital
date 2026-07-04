'use client'

interface ProjectCardProps {
  project: {
    id: string | number
    slug: string
    title: string
    description: string
    image_url: string
    year: string | number
    category: string
    color?: string
    is_featured?: boolean
    tech_stack?: string
  }
  tileClasses: string
  isLarge: boolean
  gradient: string
  techList: string[]
}

import Link from 'next/link'

export default function ProjectCard({ project, tileClasses, isLarge, gradient, techList }: ProjectCardProps) {
  const handleImageZoom = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty('--zoom-x', `${x}%`)
    e.currentTarget.style.setProperty('--zoom-y', `${y}%`)
  }

  const resetImageZoom = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.setProperty('--zoom-x', '50%')
    e.currentTarget.style.setProperty('--zoom-y', '50%')
  }

  return (
    <Link
      href={`/portfolio/project/${project.slug}`}
      onMouseMove={handleImageZoom}
      onMouseLeave={resetImageZoom}
      className={`group relative overflow-hidden rounded-2xl border bg-white dark:bg-white/[0.02] hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-black/50 transition-all duration-300 ${tileClasses} ${
        project.is_featured
          ? 'border-indigo-300 dark:border-indigo-500/40 ring-1 ring-indigo-200 dark:ring-indigo-500/20'
          : 'border-slate-200/80 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/10'
      }`}
      style={{ '--zoom-x': '50%', '--zoom-y': '50%' } as React.CSSProperties}
    >
      <div className={`absolute inset-0 overflow-hidden bg-gradient-to-br ${gradient} dark:from-white/[0.03] dark:to-transparent`}>
        <img
          src={project.image_url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover blur-xl scale-110 opacity-40 dark:opacity-25"
          loading="lazy"
        />
        <img
          src={project.image_url}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.35]"
          style={{ transformOrigin: 'var(--zoom-x) var(--zoom-y)' }}
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

      <div className="absolute top-4 right-4 z-10">
        <span className="rounded-full bg-white/90 dark:bg-black/70 px-2.5 py-1 text-[9px] font-bold text-slate-800 dark:text-white backdrop-blur">
          {project.year}
        </span>
      </div>

      <div className="absolute top-4 left-4 z-10 flex flex-col items-start gap-1.5">
        {project.is_featured && (
          <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-indigo-600 text-white">
            Featured
          </span>
        )}
        <span className="rounded-full bg-white/15 backdrop-blur px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-white border border-white/20">
          {project.category}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-5 lg:p-6">
        <h3 className={`font-bold text-white leading-snug drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1 ${isLarge ? 'text-xl lg:text-2xl' : 'text-base'}`}>
          {project.title}
        </h3>

        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
          <div className="overflow-hidden">
            <p className={`pt-2 text-white/80 leading-relaxed ${isLarge ? 'text-xs lg:text-sm line-clamp-3' : 'text-[11px] line-clamp-2'}`}>
              {project.description}
            </p>

            {techList.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {techList.slice(0, isLarge ? 6 : 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/20 bg-white/10 backdrop-blur px-2 py-0.5 text-[9px] font-medium text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold text-white">
              Lihat Project
              <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}