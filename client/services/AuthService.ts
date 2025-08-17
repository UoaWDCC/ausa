import client from '@/services/fetch-client'
import type { User } from '@/types/types'

const AuthService = {
  signUpUser: async (email: string, password: string, userdata: User) => {
    const { data, response } = await client.POST('/users', {
      body: { email, password, data: userdata },
    })
    console.log('Sign up response:', response)
    return data
  },
}

export default AuthService
