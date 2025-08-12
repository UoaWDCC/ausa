import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { saveUser } from './SaveUser'
import { auth } from '@/lib/firebase'

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

export { handleGoogleSignIn }
