import { convertToUser } from "./ConvertToUser"
import client from "@/services/fetch-client"

const saveUser = async (user: any) => {
    try {
      const newUser = convertToUser(user)
      // const userRef = doc(db, 'users', user.uid)
      // const userDoc = await getDoc(userRef)
      // if (!userDoc.exists()) {
      //   await setDoc(userRef, {
      //     id: user.uid,
      //     username: user.username,
      //     email: user.email,
      //     name: user.name,
      //   })
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

export {saveUser}