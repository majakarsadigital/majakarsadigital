'use client'

import { useState } from 'react'

interface OrderModalProps {
    isOpen: boolean
    onClose: () => void
    productName: string
    productPrice?: number
    productCategory?: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const featureOptions = [
    'Desain Kustom (bukan template)',
    'Multi Bahasa',
    'Integrasi Payment Gateway',
    'Panel Admin / CMS',
    'SEO Optimization',
    'Live Chat / WhatsApp Widget',
    'Blog / Artikel',
    'Sistem Login & Member',
]

const budgetRanges = [
    'Sesuai harga di katalog',
    '< Rp 1.000.000',
    'Rp 1.000.000 - Rp 3.000.000',
    'Rp 3.000.000 - Rp 7.000.000',
    'Rp 7.000.000 - Rp 15.000.000',
    '> Rp 15.000.000',
]

const colorPalettes = [
    { name: 'Indigo & Putih', colors: ['#4f46e5', '#ffffff'] },
    { name: 'Hitam & Emas', colors: ['#111827', '#d4af37'] },
    { name: 'Biru & Abu Muda', colors: ['#2563eb', '#e5e7eb'] },
    { name: 'Hijau & Krem', colors: ['#16a34a', '#f5f0e6'] },
    { name: 'Pastel Playful', colors: ['#f9a8d4', '#a5b4fc'] },
    { name: 'Merah Marun & Krem', colors: ['#7f1d1d', '#f5f0e6'] },
    { name: 'Monokrom (Hitam-Putih-Abu)', colors: ['#111827', '#9ca3af', '#ffffff'] },
    { name: 'Oranye & Navy', colors: ['#ea580c', '#1e3a8a'] },
]

const pageCountOptions = [
    '1 Halaman (Landing Page)',
    '2 - 5 Halaman',
    '6 - 10 Halaman',
    '11 - 20 Halaman',
    '20+ Halaman (Custom)',
]

const descriptionTemplate = `Tujuan Website/Aplikasi:
(jelaskan tujuan utama, misal: company profile, jualan produk, portal member, dll)

Target Pengguna:
(siapa yang akan mengakses, misal: calon pelanggan, member internal, dll)

Halaman yang Dibutuhkan:
(sebutkan daftar halaman, misal: Beranda, Tentang, Produk, Kontak, Blog)

Fungsi/Alur Khusus:
(misal: form pemesanan, filter produk, dashboard admin, notifikasi WhatsApp)

Konten yang Sudah Tersedia:
(logo, foto produk, teks/copywriting - sudah ada / belum ada)`

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB

export default function OrderModal({ isOpen, onClose, productName, productPrice, productCategory }: OrderModalProps) {
    const [status, setStatus] = useState<FormStatus>('idle')
    const [errorMsg, setErrorMsg] = useState('')
    const [file, setFile] = useState<File | null>(null)
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
    const [selectedColors, setSelectedColors] = useState<string[]>([])
    const [form, setForm] = useState({
        fullName: '',
        companyName: '',
        email: '',
        whatsapp: '',
        description: '',
        budget: budgetRanges[0],
        pageCount: pageCountOptions[1],
        colorNotes: '',
        deadline: '',
        referenceUrl: '',
        notes: '',
    })

    if (!isOpen) return null

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const toggleFeature = (feature: string) => {
        setSelectedFeatures(prev =>
            prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
        )
    }

    const toggleColor = (name: string) => {
        setSelectedColors(prev =>
            prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]
        )
    }

    const insertTemplate = () => {
        setForm(prev => ({
            ...prev,
            description: prev.description ? prev.description : descriptionTemplate,
        }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0]
        if (!f) return
        if (f.size > MAX_FILE_SIZE) {
            setErrorMsg('Ukuran file maksimal 10 MB')
            setStatus('error')
            return
        }
        setFile(f)
        if (status === 'error') setStatus('idle')
    }

    const handleSubmit = async () => {
        if (!form.fullName || !form.email || !form.whatsapp || !form.description) {
            setErrorMsg('Nama, email, WhatsApp, dan deskripsi kebutuhan wajib diisi.')
            setStatus('error')
            return
        }

        setStatus('loading')
        setErrorMsg('')

        try {
            const fd = new FormData()
            fd.append('fullName', form.fullName)
            fd.append('companyName', form.companyName)
            fd.append('email', form.email)
            fd.append('whatsapp', form.whatsapp)
            fd.append('productName', productName)
            fd.append('productCategory', productCategory || '-')
            fd.append('productPrice', String(productPrice ?? ''))
            fd.append('description', form.description)
            fd.append('features', JSON.stringify(selectedFeatures))
            fd.append('colorPalettes', JSON.stringify(selectedColors))
            fd.append('colorNotes', form.colorNotes)
            fd.append('pageCount', form.pageCount)
            fd.append('budget', form.budget)
            fd.append('deadline', form.deadline)
            fd.append('referenceUrl', form.referenceUrl)
            fd.append('notes', form.notes)
            if (file) fd.append('file', file)

            const res = await fetch('/api/pesan', { method: 'POST', body: fd })
            const data = await res.json()
            if (!data.success) throw new Error(data.error || 'Gagal mengirim pesanan')

            setStatus('success')
        } catch (err) {
            setErrorMsg(err instanceof Error ? err.message : 'Terjadi kesalahan')
            setStatus('error')
        }
    }

    const handleClose = () => {
        onClose()
        setTimeout(() => {
            setStatus('idle')
            setErrorMsg('')
            setFile(null)
            setSelectedFeatures([])
            setSelectedColors([])
            setForm({
                fullName: '', companyName: '', email: '', whatsapp: '',
                description: '', budget: budgetRanges[0], pageCount: pageCountOptions[1],
                colorNotes: '', deadline: '', referenceUrl: '', notes: '',
            })
        }, 300)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

            <div className="relative w-full max-w-2xl bg-white dark:bg-[#0a0a0a] rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                {status === 'success' ? (
                    <div className="p-10 text-center">
                        <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mx-auto mb-5">
                            <svg className="w-7 h-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Pesanan Terkirim</h3>
                        <p className="text-sm text-slate-500 dark:text-gray-400 mb-6 leading-relaxed max-w-sm mx-auto">
                            Terima kasih! Detail proyek Anda sudah kami terima. Tim kami akan menghubungi Anda melalui WhatsApp atau email dalam 1x24 jam.
                        </p>
                        <button
                            onClick={handleClose}
                            className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors"
                        >
                            Tutup
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Header */}
                        <div className="flex items-start justify-between p-6 pb-4 border-b border-slate-200 dark:border-white/5 shrink-0">
                            <div>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 mb-1">Form Pemesanan Proyek</p>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{productName}</h3>
                                {productPrice && (
                                    <p className="text-xs text-slate-400 dark:text-gray-600 mt-0.5">
                                        Mulai dari Rp {Number(productPrice).toLocaleString('id-ID')}
                                    </p>
                                )}
                            </div>
                            <button onClick={handleClose} className="text-slate-400 hover:text-slate-600 dark:text-gray-600 dark:hover:text-gray-400 transition-colors">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Body scrollable */}
                        <div className="p-6 space-y-8 overflow-y-auto">

                            {/* SECTION: Informasi Kontak */}
                            <div>
                                <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 dark:text-gray-600 mb-4">
                                    Informasi Kontak
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-xs font-semibold text-slate-600 dark:text-gray-400 mb-1.5">
                                            Nama Lengkap <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            name="fullName" value={form.fullName} onChange={handleChange}
                                            placeholder="Nama Anda"
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors"
                                        />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-xs font-semibold text-slate-600 dark:text-gray-400 mb-1.5">Nama Perusahaan</label>
                                        <input
                                            name="companyName" value={form.companyName} onChange={handleChange}
                                            placeholder="Opsional"
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 dark:text-gray-400 mb-1.5">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            name="email" type="email" value={form.email} onChange={handleChange}
                                            placeholder="email@anda.com"
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 dark:text-gray-400 mb-1.5">
                                            WhatsApp <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            name="whatsapp" value={form.whatsapp} onChange={handleChange}
                                            placeholder="08xxxxxxxxxx"
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* SECTION: Detail Proyek */}
                            <div>
                                <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 dark:text-gray-600 mb-4">
                                    Detail Proyek
                                </p>

                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-1.5">
                                        <label className="block text-xs font-semibold text-slate-600 dark:text-gray-400">
                                            Deskripsi Kebutuhan <span className="text-red-500">*</span>
                                        </label>
                                        <button
                                            type="button"
                                            onClick={insertTemplate}
                                            className="text-[11px] font-semibold text-indigo-500 hover:text-indigo-600 transition-colors"
                                        >
                                            Gunakan Template
                                        </button>
                                    </div>
                                    <textarea
                                        name="description" value={form.description} onChange={handleChange}
                                        rows={7}
                                        placeholder="Jelaskan tujuan bisnis, target pengguna, dan hal spesifik yang Anda butuhkan dari produk ini... atau klik 'Gunakan Template' di atas."
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors resize-none font-mono leading-relaxed"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-xs font-semibold text-slate-600 dark:text-gray-400 mb-2">
                                        Fitur Tambahan yang Diinginkan
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {featureOptions.map(feature => (
                                            <button
                                                key={feature}
                                                type="button"
                                                onClick={() => toggleFeature(feature)}
                                                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                                                    selectedFeatures.includes(feature)
                                                        ? 'bg-indigo-600 border-indigo-600 text-white'
                                                        : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:border-indigo-300 dark:hover:border-indigo-500/40'
                                                }`}
                                            >
                                                {feature}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-xs font-semibold text-slate-600 dark:text-gray-400 mb-2">
                                        Kombinasi Warna Desain
                                    </label>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {colorPalettes.map(palette => (
                                            <button
                                                key={palette.name}
                                                type="button"
                                                onClick={() => toggleColor(palette.name)}
                                                className={`flex items-center gap-2 text-xs font-medium pl-2 pr-3 py-1.5 rounded-full border transition-colors ${
                                                    selectedColors.includes(palette.name)
                                                        ? 'bg-indigo-600 border-indigo-600 text-white'
                                                        : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:border-indigo-300 dark:hover:border-indigo-500/40'
                                                }`}
                                            >
                                                <span className="flex -space-x-1">
                                                    {palette.colors.map((c, i) => (
                                                        <span
                                                            key={i}
                                                            className="w-3.5 h-3.5 rounded-full border border-white/60 dark:border-black/40"
                                                            style={{ backgroundColor: c }}
                                                        />
                                                    ))}
                                                </span>
                                                {palette.name}
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        name="colorNotes" value={form.colorNotes} onChange={handleChange}
                                        placeholder="Warna spesifik lain / brand color Anda (opsional, misal: sesuai logo #1A2B3C)"
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 dark:text-gray-400 mb-1.5">Jumlah Halaman</label>
                                        <select
                                            name="pageCount" value={form.pageCount} onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors"
                                        >
                                            {pageCountOptions.map(p => <option key={p} value={p}>{p}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 dark:text-gray-400 mb-1.5">Estimasi Budget</label>
                                        <select
                                            name="budget" value={form.budget} onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors"
                                        >
                                            {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-xs font-semibold text-slate-600 dark:text-gray-400 mb-1.5">Target Selesai</label>
                                    <input
                                        name="deadline" type="date" value={form.deadline} onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-xs font-semibold text-slate-600 dark:text-gray-400 mb-1.5">Link Referensi</label>
                                    <input
                                        name="referenceUrl" value={form.referenceUrl} onChange={handleChange}
                                        placeholder="Website/aplikasi yang jadi inspirasi (opsional)"
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 dark:text-gray-400 mb-1.5">Lampiran Brief / Referensi Desain</label>
                                    <label className="flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-white/[0.02] cursor-pointer hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-colors">
                                        <svg className="w-4 h-4 text-slate-400 dark:text-gray-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                        </svg>
                                        <span className="text-xs text-slate-500 dark:text-gray-500 truncate">
                                            {file ? file.name : 'Klik untuk unggah file (maks 10 MB)'}
                                        </span>
                                        <input type="file" onChange={handleFileChange} className="hidden" />
                                    </label>
                                </div>
                            </div>

                            {/* SECTION: Catatan */}
                            <div>
                                <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 dark:text-gray-600 mb-4">
                                    Catatan Tambahan
                                </p>
                                <textarea
                                    name="notes" value={form.notes} onChange={handleChange}
                                    rows={3}
                                    placeholder="Hal lain yang perlu kami tahu (opsional)"
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors resize-none"
                                />
                            </div>

                            {status === 'error' && errorMsg && (
                                <p className="text-xs text-red-500 bg-red-50 dark:bg-red-500/10 rounded-lg px-3 py-2">{errorMsg}</p>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-6 pt-4 border-t border-slate-200 dark:border-white/5 shrink-0">
                            <button
                                onClick={handleSubmit}
                                disabled={status === 'loading'}
                                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Mengirim...
                                    </>
                                ) : (
                                    'Kirim Pesanan →'
                                )}
                            </button>
                            <p className="text-[11px] text-center text-slate-400 dark:text-gray-600 mt-3">
                                Tim kami akan meninjau detail proyek dan menghubungi Anda dalam 1x24 jam.
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}