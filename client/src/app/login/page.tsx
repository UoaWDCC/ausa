'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAuth } from '@/auth/AuthContext'
import { TiledAusaBackground } from '@/components/ausa/TiledAusaBackground'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { loginHandler } from './utils/Handler'

export type LoginHandlerArgs = {
  email: string
  password: string
}

export type HandlerResponse = {
  success: boolean
  successMessage?: string
  error?: {
    message: string
  }
}

type MessageTypes = {
  success?: string
  error?: string
  other?: string
}

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<MessageTypes>({})

  const router = useRouter()
  const { user } = useAuth()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  // Redirects to the dashboard page when the state of the router or user changes
  useEffect(() => {
    console.log("Auth user changed:", user)
    if (user) {
      router.push('/')
    }
  }, [user, router])

  const handleLogin = async (e: React.FormEvent) => {
    // Prevent default form submission
    e.preventDefault()

    try {
      setLoading(true)
      const { success, error } = await loginHandler(form.email, form.password)
      setLoading(false)
      if (success) {
        setMessages({ success: 'Logged In' })
      } else {
        // We want the messages to be overwritten
        setMessages({ error: error?.message || 'Unknown Error Occured' })
      }
    } catch (e) {
      console.error(e)
      setLoading(false)
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
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="email@example.com"
                required
                type="email"
                value={form.email}
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
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••••"
                required
                type="password"
                value={form.password}
              />
            </div>
            <Button
              className="w-full cursor-pointer"
              disabled={loading}
              onClick={handleLogin}
              type="submit"
            >
              {loading ? 'LOGGING IN...' : 'LOGIN'}
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
            {messages.success && (
              <div className="mt-4 text-green-400 text-sm text-center">
                {messages.success}
              </div>
            )}
            {messages.error && (
              <div className="mt-4 text-red-400 text-sm text-center">
                {messages.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
