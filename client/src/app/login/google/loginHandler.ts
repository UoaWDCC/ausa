import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/lib/firebase'

const handleGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    await signInWithPopup(auth, provider)
    alert('Login Successful!')
  } catch (err: any) {
    console.error('Google login error:', err.code, err.message)
    alert('Failed to login with Google. Please try again.')
  }
}

export { handleGoogleLogin }
