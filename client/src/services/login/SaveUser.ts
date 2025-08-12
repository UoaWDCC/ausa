import { convertToUser } from './Convert'
import client from '../fetch-client'

const saveUser = async (user: any) => {
  try {
    const newUser = convertToUser(user)
    console.log(
      'Sending user to backend:',
      JSON.stringify({ ...newUser, id: user.uid }),
    )
    const { data: responseBody, response } = await client.POST('/users', {
      body: { ...newUser, id: user.uid },
    })
    console.log('Response status:', response.status)
    console.log('Response body:', responseBody)
    console.log('User saved successfully')
  } catch (error) {
    console.error('Error saving user:', error)
    console.log('User already exists')
  }
}

export { saveUser }
