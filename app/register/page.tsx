'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
    const router = useRouter()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleRegister(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: name,
                    },
                },
            })

            console.group('Supabase Sign Up')
            console.log('Data:', data)
            console.log('User:', data.user)
            console.log('Session:', data.session)
            console.log('Error:', error)
            console.groupEnd()

            if (error) {
                console.error(error)

                alert(error.message)

                return
            }

            if (data.user) {
                const { error: profileError } = await supabase
                    .from('profiles')
                    .insert({
                        id: data.user.id,
                        full_name: name,
                    })

                if (profileError) {
                    console.error('Profile Insert Error:', profileError)
                } else {
                    console.log('Profile created successfully.')
                }
            }

            console.log('Email confirmation sent.')
            alert('Registrasi berhasil. Silakan cek email Anda.')

            router.push('/login')
        } catch (err) {
            console.error('Unexpected Error:', err)
            alert('Terjadi kesalahan yang tidak terduga.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <form
                onSubmit={handleRegister}
                className="w-full max-w-md rounded-xl bg-white p-8 shadow"
            >
                <h1 className="mb-6 text-2xl font-bold">Register</h1>

                <div className="mb-4">
                    <label className="mb-2 block text-sm">Nama</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:border-indigo-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="mb-2 block text-sm">Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:border-indigo-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="mb-2 block text-sm">Password</label>
                    <input
                        type="password"
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:border-indigo-500"
                    />
                </div>

                <button
                    disabled={loading}
                    className="w-full rounded-lg bg-indigo-600 py-3 text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                    {loading ? 'Loading...' : 'Register'}
                </button>
            </form>
        </div>
    )
}