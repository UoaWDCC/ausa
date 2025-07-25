'use client'
import { TiledAusaBackground } from '@/components/ausa/TiledAusaBackground'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, db } from '@/lib/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import {User} from '@/types/types'

const Signup = () => {
  const url = process.env.BACKEND_URL || 'http://localhost:8000'
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
      const userRef = doc(db, 'users', user.uid)
      const userDoc = await getDoc(userRef)
      if (!userDoc.exists()) {
        await setDoc(userRef, {
          id: user.uid,
          username: user.username,
          email: user.email,
          name: user.name,
        })
        const response = await fetch(`${url}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({...newUser, id: user.uid}),
        })
        console.log(response.status, await response.json())
        
        console.log('User saved successfully')
      } else {
        console.log('User already exists')
      }
    } catch (error) {
      console.error('Error saving user:', error)
    }
  }

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const res = await signInWithPopup(auth, provider)
      const user = res.user
      // const idToken = await user.getIdToken();
      await saveUser(user)
    } catch (error: any) {
      const err = error.code
      const errmsg = error.message
      console.error('Error during sign-in:', err, errmsg)
    }
  }

  return (
    <div className="relative z-10 overflow-hidden py-40 text-center text-white">
      <div className="relative z-10 mx-auto max-w-md sm:px-4">
        <div className="overflow-hidden rounded-md border border-white/20 bg-black/40 py-10 px-6 sm:px-8 shadow-2xl backdrop-blur-sm">
          <TiledAusaBackground />
          <h1 className="mb-6 text-3xl font-semibold">Sign Up To AUSA!</h1>
          <form className="space-y-6 text-left text-black">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-1"
              >
                Email address
              </label>
              <Input
                type="email"
                id="email"
                placeholder="email@example.com"
                required
                aria-invalid={false}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white mb-1"
              >
                Password
              </label>
              <Input
                type="password"
                id="password"
                placeholder="••••••••••"
                required
                aria-invalid={false}
              />
            </div>
            <Button className="w-full">Submit</Button>
            <div className="flex justify-between text-sm text-white/80">
              <button
                type="button"
                className="text-sm text-white/80 hover:text-white underline underline-offset-2"
                onClick={handleGoogleSignIn}
              >
                Sign up with Google
              </button>
              <a
                href="/forgot-password"
                className="text-sm text-white/80 hover:text-white underline underline-offset-2"
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
