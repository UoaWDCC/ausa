'use client'

import React, {
  createContext,
  useState,
  useEffect,
} from "react";
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, signOut, type User } from 'firebase/auth'

type AuthContextType = {
  user: User | null
  logout: () => Promise<void>
  getToken: () => Promise<string | null>
}

// might need to add loading state

const AuthContext = createContext<AuthContextType>({
  user: null,
  logout: async () => {},
  getToken: async () => null,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  const logout = async () => {
    await signOut(auth)
  }

  const getToken = async () => {
    if (!user) return null
    return await user.getIdToken()
  }

  return (
    <AuthContext.Provider value={{ user, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  )
}
