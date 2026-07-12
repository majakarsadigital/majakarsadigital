'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

interface AuthContextValue {
    user: User | null
    loading: boolean
}

const AuthContext = createContext<AuthContextValue>({
    user: null,
    loading: true,
})

interface AuthProviderProps {
    initialUser: User | null
    children: React.ReactNode
}

export function AuthProvider({ initialUser, children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(initialUser)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        })

        return () => subscription.unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}