'use client'

import type React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, signOut, type User } from 'firebase/auth'

type AuthContextType = {
  user: User | null
  logout: () => Promise<void>
  getToken: () => Promise<string | null>
}

// might need to add loading state

/**
 * This creates a React context for authentication using Firebase.
 * It provides the current user, a logout function, and a function to get the user's ID token.
 */
const AuthContext = createContext<AuthContextType>({
  user: null,
  logout: async () => {},
  getToken: async () => null,
})

/**
 * Custom hook to access the authentication context.
 * @returns The authentication context, providing access to the current user, logout function, and token retrieval function.
 */
export const useAuth = () => useContext(AuthContext)


/**
 * AuthProvider component that provides the authentication context.
 * @param param0 The props for the provider, including the children to render.
 * @returns The AuthProvider component.
 */
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
