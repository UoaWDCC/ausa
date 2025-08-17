import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { auth } from '@/lib/firebase'
import AuthService from './AuthService'

const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider()
  try {
    const res = await signInWithPopup(auth, provider)
    const user = res.user
    // const idToken = await user.getIdToken();
    // await AuthService.signUpUser(user.email, user.password, user)
  } catch (error: any) {
    const err = error.code
    const errmsg = error.message
    console.error('Error during sign-in:', err, errmsg)
  }
}

export { handleGoogleSignIn }
