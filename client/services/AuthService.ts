import client from '@/services/fetch-client'

const AuthService = {
  signUpUser: async (email: string, password: string, userdata: any) => {
    const { data, response } = await client.POST('/users', {
      body: { email, password, data: userdata },
    })
    console.log('Sign up response:', response)
    return data
  },
}

export default AuthService
