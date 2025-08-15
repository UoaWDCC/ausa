'use client'

import { TiledAusaBackground } from '@/components/ausa/TiledAusaBackground'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { useAuth } from '@/auth/AuthContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { handleGoogleSignIn } from 'services/GoogleLogin'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { user } = useAuth()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user, router])

  const handleLogin = async (e: React.FormEvent) => {
    // Prevent default form submission
    e.preventDefault()

    try {
      // firebase authentication
      setLoading(true)
      await signInWithEmailAndPassword(auth, form.email, form.password)
      alert('Login successful!')
    } catch (err: any) {
      setLoading(false)
      console.error('Login error:', err.code, err.message)
      alert('Invalid email or password.')
    }
  }

  return (
    <div className="relative z-10 overflow-hidden py-40 text-center text-white">
      <div className="relative z-10 mx-auto max-w-md sm:px-4">
        <div className="overflow-hidden rounded-md border border-white/20 bg-black/40 py-10 px-6 sm:px-8 shadow-2xl backdrop-blur-sm">
          <TiledAusaBackground />
          <h1 className="mb-6 text-3xl font-semibold">Welcome Back</h1>
          <form className="space-y-6 text-left text-black">
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
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="email@example.com"
                required
                type="email"
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
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••••"
                required
                type="password"
              />
            </div>
            <Button
              onClick={handleLogin}
              className="w-full cursor-pointer"
              type="submit"
              disabled={loading}
            >
              {loading ? 'LOGGING IN...' : 'LOGIN'}
            </Button>
            <Button
              onClick={handleGoogleSignIn}
              className="w-full cursor-pointer"
              type="button"
            >
              Sign in with Google
            </Button>
            <div className="flex justify-between text-sm text-white/80">
              <a
                className="text-sm text-white/80 hover:text-white underline underline-offset-2 cursor-pointer"
                href="/signup"
              >
                Sign up
              </a>
              <a
                className="text-sm text-white/80 hover:text-white underline underline-offset-2 cursor-pointer"
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
