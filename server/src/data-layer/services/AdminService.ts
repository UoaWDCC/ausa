import type { User } from 'data-layer/models/User'
import { UserService } from './UserService' // 假设你的 UserService 在这里
import {UserCreationParams} from 'data-layer/services/UserService' 

export class AdminService {

  /**
   *
   * @param UserCreationParams - get user creation parameters
   * @returns the new user
   */
  async adminAddUser(
    userId: string,
    username: string,
    email: string,
    name: string,
    requestingUserId: string,
    // role: 'admin' | 'user',
  ): Promise<User | null> {
    const userService = new UserService()
    const requestingUser = await userService.getUser(requestingUserId)
    if (!requestingUserId) {
      console.log(`Requesting user - ${requestingUserId} not found`)
      return null
    }
    if (requestingUser.role !== 'admin') {
      console.log(
        `Requesting user - ${requestingUserId} is not authorised to create users.`,
      )
      return null
    }
    const params: UserCreationParams = {
      id: userId,
      username: username,
      email: email,
      name: name,
      role: 'user',
    }
    const newUser = await userService.createUser(params)
    if (!newUser) {
      console.log('user failed on creation')
      return null
    }
    return newUser
  }

  async adminDeleteUser(
    requestingUserId: string,
    userToDeleteId: string,
  ): Promise<User | null> {
    const userService = new UserService()
    // checking if user exists and/or is admin
    const requestingUser = await userService.getUser(requestingUserId)
    if (!requestingUser) {
      console.log(`Requesting user - ${requestingUserId} not found`)
      return null
    }
    if (requestingUser.role !== 'admin') {
      console.log(`Requesting user - ${requestingUserId} is not an admin`)
      return null
    }

    // checking if user to delete exists and deleting it if it does by calling deleteUser
    const userToDelete = await userService.deleteUser(userToDeleteId)
    if (!userToDelete) {
      console.log(`User - ${userToDeleteId} not found for deletion`)
      return null
    }

    console.log(
      `User - ${userToDeleteId} deleted by admin - ${requestingUserId}`,
    )
    return userToDelete
  }
}
