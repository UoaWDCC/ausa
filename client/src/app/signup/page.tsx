'use client'
import { useState } from 'react'
import AuthService from 'services/AuthService'
import { handleGoogleSignIn } from 'services/GoogleLogin'
import { TiledAusaBackground } from '@/components/ausa/TiledAusaBackground'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Signup = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)

  const handleEmailSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.firstname || form.lastname || !form.email || !form.password) {
      alert('Please fill in all required fields!')
      return
    }

    setLoading(true)
    try {
      await AuthService.signUpUser(form.email, form.password, {
        firstname: form.firstname,
        lastname: form.lastname,
      })
      alert('Account created successfully!')
    } catch (error: any) {
      console.error('Signup error:', error)

      if (error.code === 'auth/email-already-in-use') {
        alert(
          'This email is already registered. Please use a different email or try logging in.',
        )
      } else if (error.code === 'auth/weak-password') {
        alert('Password is too weak. Please use at least 6 characters.')
      } else if (error.code === 'auth/invalid-email') {
        alert('Invalid email address.')
      } else {
        alert('Failed to create account. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative z-10 overflow-hidden py-40 text-center text-white">
      <div className="relative z-10 mx-auto max-w-md sm:px-4">
        <div className="overflow-hidden rounded-md border border-white/20 bg-black/40 py-10 px-6 sm:px-8 shadow-2xl backdrop-blur-sm">
          <TiledAusaBackground />
          <h1 className="mb-6 text-3xl font-semibold">Sign Up To AUSA!</h1>
          <form
            className="space-y-6 text-left text-black"
            onSubmit={handleEmailSignUp}
          >
            <div>
              <label
                className="block text-sm font-medium text-white mt-4"
                htmlFor="name"
              >
                First Name
              </label>
              <Input
                aria-invalid={false}
                disabled={loading}
                id="firstname"
                onChange={(e) =>
                  setForm({ ...form, firstname: e.target.value })
                }
                placeholder="Becky"
                required
                type="text"
              />
              <label
                className="block text-sm font-medium text-white mt-4"
                htmlFor="name"
              >
                Last Name
              </label>
              <Input
                aria-invalid={false}
                disabled={loading}
                id="lastname"
                onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                placeholder="Cheng"
                required
                type="text"
              />
              <label
                className="block text-sm font-medium text-white mt-4"
                htmlFor="email"
              >
                Email address
              </label>
              <Input
                aria-invalid={false}
                disabled={loading}
                id="email"
                onChange={(e) =>
                  setForm({ ...form, email: e.currentTarget.value })
                }
                placeholder="email@example.com"
                required
                type="email"
              />
              <div>
                <label
                  className="block text-sm font-medium text-white mt-4"
                  htmlFor="password"
                >
                  Password
                </label>
                <Input
                  aria-invalid={false}
                  disabled={loading}
                  id="password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.currentTarget.value })
                  }
                  placeholder="••••••••••"
                  required
                  type="password"
                />
              </div>
            </div>

            <Button
              className="w-full cursor-pointer"
              disabled={loading}
              type="submit"
            >
              {loading ? 'Creating account' : 'Create Account'}
            </Button>
            <div className="flex justify-between text-sm text-white/80">
              <button
                className="text-sm text-white/80 hover:text-white underline underline-offset-2 cursor-pointer"
                disabled={loading}
                onClick={handleGoogleSignIn}
                type="button"
              >
                Sign up with Google
              </button>
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

export default Signup
