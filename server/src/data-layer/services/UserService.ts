import type { User, UpdateUserPackage } from 'data-layer/models/User'
import FirestoreCollections from 'data-layer/adapters/FirestoreCollections'

export type UserCreationParams = Pick<User, 'email' | 'name' | 'username'>

export class UserService {
  /**
   *
   * @param id - using id to find a user in the db
   * @returns A user of type User
   */
  async getUser(id: string): Promise<User | null> {
    const userRef = FirestoreCollections.users.doc(id)
    const user = await userRef.get()
    if (!user.exists) {
      console.log(`User - ${id} is not found`)
      return null
    }
    console.log(user.data())
    return user.data() as User
  }

  /**
   *
   * @param username - using username to find a user in the db
   * @returns A user of type User
   */
  async getUserByUsername(username: string): Promise<User | null> {
    const snapShot = await FirestoreCollections.users
      .where('username', '==', username)
      .limit(1)
      .get()

    if (snapShot.empty) {
      console.log(`User - ${username} not found`)
      return null
    }

    const user = snapShot.docs[0]
    return user.data() as User
  }

  /**
   *
   * @returns a list of users
   */
  async getAllUsers(): Promise<User[]> {
    const snapShot = await FirestoreCollections.users.get()
    const userList: User[] = snapShot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      username: doc.data().email,
      email: doc.data().email,
    }))
    console.log(
      userList.map((user) => {
        user
      }),
    )
    return userList
  }

  /**
   * Creates a new user with the parameters provided without passing in the id
   * @param params - The parameters for creating a user.
   * @returns A promise that resolves to the created user.
   */
  async createUser(params: UserCreationParams): Promise<User> {
    const userRef = await FirestoreCollections.users.doc()
    const newUser: User = {
      id: userRef.id,
      username: params.username,
      email: params.email,
      name: params.name,
    }
    await userRef.set({
      id: userRef.id,
      username: params.username,
      email: params.email,
      name: params.name,
    })
    console.log(newUser)
    return newUser
  }

  /**
   *
   * @param userId - receive userid to delete user
   * @returns the deleted user
   */
  async deleteUser(userId: string): Promise<User | null> {
    const userRef = await FirestoreCollections.users.doc(userId)
    const doc = await userRef.get()
    if (!doc.exists) {
      console.log(`User - ${userId} is not found`)
      return null
    }
    await userRef.delete()
    const user = doc.data()
    console.log(`User - ${userId} deleted`)
    return user
  }

  async updateUser(userId:string, updates: UpdateUserPackage): Promise<User | null> {
    const userRef = await FirestoreCollections.users.doc(userId)
    const doc = await userRef.get()
    if (!doc.exists) {
      console.log(`User - ${userId} is not found`)
      return null
    }
    await userRef.set(updates, {merge: true})
    const updatedUser = await userRef.get()
    return updatedUser.data() as User
  }
}

