import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artikel - Majakarsa Digital',
  description: 'Baca artikel dan tips terbaru dari Majakarsa Digital',
}

export default function ArtikelPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground">Artikel</h1>
        <p className="mt-4 text-muted-foreground">
          Kumpulan artikel dan tips menarik dari Majakarsa Digital
        </p>
      </div>
    </main>
  )
}
