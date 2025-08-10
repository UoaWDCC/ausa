'use client'

import { TiledAusaBackground } from '@/components/ausa/TiledAusaBackground'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/auth/AuthContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { user } = useAuth()
  const router = useRouter()

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      await signInWithEmailAndPassword(auth, email, password)
      // Redirect will happen automatically due to the useEffect above
      alert('Login successful!')
      
    } catch (error: any) {
      setError(error.message || 'Failed to log in')
    } finally {
      setIsLoading(false)
    }
  }

  // Don't render the form if user is already logged in
  if (user) {
    return null
  }

  return (
    <div className="relative z-10 overflow-hidden py-40 text-center text-white">
      <div className="relative z-10 mx-auto max-w-md sm:px-4">
        <div className="overflow-hidden rounded-md border border-white/20 bg-black/40 py-10 px-6 sm:px-8 shadow-2xl backdrop-blur-sm">
          <TiledAusaBackground />
          <h1 className="mb-6 text-3xl font-semibold">Welcome Back</h1>
          <form className="space-y-6 text-left text-black" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-3 py-2 rounded text-sm">
                {error}
              </div>
            )}
            <div>
              <label
                className="block text-sm font-medium text-white mb-1"
                htmlFor="email"
              >
                Email address
              </label>
              <Input
                aria-invalid={false}
                id="email"
                placeholder="email@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-white mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <Input
                aria-invalid={false}
                id="password"
                placeholder="••••••••••"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Submit'}
            </Button>
            <div className="flex justify-between text-sm text-white/80">
              <a
                className="text-sm text-white/80 hover:text-white underline underline-offset-2"
                href="/signup"
              >
                Sign up
              </a>
              <a
                className="text-sm text-white/80 hover:text-white underline underline-offset-2"
                href="/forgot-password"
              >
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
