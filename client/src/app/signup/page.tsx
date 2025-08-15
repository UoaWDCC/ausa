'use client'
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { TiledAusaBackground } from '@/components/ausa/TiledAusaBackground'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { auth } from '@/lib/firebase'
import type { User } from '@/types/types'
import { useState } from 'react'
import client from '@/services/fetch-client'
import { handleGoogleSignIn } from 'services/GoogleLogin'

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)

  const convertToUser = (user: any): User => {
    return {
      id: user.uid,
      username: user.displayName,
      email: user.email,
      name: user.displayName,
    }
  }

  const saveUser = async (user: any) => {
    try {
      const newUser = convertToUser(user)
      // const userRef = doc(db, 'users', user.uid)
      // const userDoc = await getDoc(userRef)
      // if (!userDoc.exists()) {
      //   await setDoc(userRef, {
      //     id: user.uid,
      //     username: user.username,
      //     email: user.email,
      //     name: user.name,
      //   })
      console.log(
        'Sending user to backend:',
        JSON.stringify({ ...newUser, id: user.uid }),
      )
      const { data: responseBody, response } = await client.POST('/users', {
        body: { ...newUser, id: user.uid },
      })
      console.log('Response status:', response.status)
      console.log('Response body:', responseBody)
      console.log('User saved successfully')
    } catch (error) {
      console.error('Error saving user:', error)
      console.log('User already exists')
    }
  }

  const handleEmailSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.password) {
      alert('Please fill in all required fields!')
      return
    }

    setLoading(true)
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password,
      )
      await updateProfile(userCred.user, {
        displayName: form.name,
      })
      await saveUser(userCred.user)
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
            onSubmit={handleEmailSignUp}
            className="space-y-6 text-left text-black"
          >
            <div>
              <label
                className="block text-sm font-medium text-white mt-4"
                htmlFor="name"
              >
                Full Name
              </label>
              <Input
                aria-invalid={false}
                id="name"
                placeholder="Becky Cheng"
                required
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                disabled={loading}
              />
              <label
                className="block text-sm font-medium text-white mt-4"
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
                onChange={(e) =>
                  setForm({ ...form, email: e.currentTarget.value })
                }
                disabled={loading}
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
                  id="password"
                  placeholder="••••••••••"
                  required
                  type="password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.currentTarget.value })
                  }
                  disabled={loading}
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer"
            >
              {loading ? 'Creating account' : 'Create Account'}
            </Button>
            <div className="flex justify-between text-sm text-white/80">
              <button
                className="text-sm text-white/80 hover:text-white underline underline-offset-2 cursor-pointer"
                onClick={handleGoogleSignIn}
                type="button"
                disabled={loading}
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
