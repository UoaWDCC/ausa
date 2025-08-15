import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth"
import { auth } from "@/lib/firebase"
import { saveUser } from "./SaveUser"


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

export {handleGoogleSignIn}