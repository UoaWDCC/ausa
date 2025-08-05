import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { auth } from '@/lib/firebase'

const provider = new GoogleAuthProvider()

const handleGoogleLogin = async() => {
    try {
        const res = await signInWithPopup(auth, provider)
        const user = res.user 
        return user
    }catch(err: any){
        console.error('Google login error:', err.code, err.message)
        alert('Failed to login with Google. Please try again.')
        return 
    }
    
}
export default handleGoogleLogin