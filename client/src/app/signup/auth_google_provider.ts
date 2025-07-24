import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from './firebase'

const provider = new GoogleAuthProvider()

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const token = credential ? credential.accessToken : null
    // The signed-in user info.
    const user = result.user
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    return { token, user }
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code
    const errorMessage = error.message
    // The email of the user's account used.
    const email = error.customData.email
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error)
    // ...
    return { errorCode, errorMessage, email, credential }
  })

export default function auth_google_provider() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle successful sign-in
      console.log('User signed in:', result.user)
    })
    .catch((error) => {
      // Handle Errors here.
      console.error('Error during sign-in:', error)
    })
}
