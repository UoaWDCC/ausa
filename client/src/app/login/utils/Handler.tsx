import {
  AuthErrorCodes,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import { fireAnalytics } from '@/lib/firebase'

export const loginHandler = async (
  email: string,
  password: string,
): Promise<any> => {
  const auth = getAuth()
  try {
    await signInWithEmailAndPassword(auth, email, password)
    fireAnalytics('login')
    return { success: true }
  } catch (error) {
    let message: string | undefined
    console.error(error)
    switch (
      (error as { code: (typeof AuthErrorCodes)[keyof typeof AuthErrorCodes] })
        .code
    ) {
      case AuthErrorCodes.INVALID_LOGIN_CREDENTIALS:
        message = 'Incorrect password or email'
        break
      case AuthErrorCodes.USER_DELETED:
        message = 'User does not exist'
        break
      default:
        message = 'Unknown Error, Please contact us'
        break
    }
    return {
      success: false,
      error: {
        message,
      },
    }
  }
}
