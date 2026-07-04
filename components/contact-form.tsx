'use client'

export function ContactForm() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
            }),
        })
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                        Nama
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Nama lengkap Anda"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="nama@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                    Subjek
                </label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Contoh: Konsultasi Website Perusahaan"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                    Pesan
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Ceritakan kebutuhan proyek Anda..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition resize-none"
                />
            </div>

            <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-colors"
            >
                Kirim Pesan
            </button>
        </form>
    )
}