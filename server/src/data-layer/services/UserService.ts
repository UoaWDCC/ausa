import { collections } from 'data-layer/firebase-collections'
import type { User } from 'types/types'
import type {
  UserCreationParams,
  UserUpdateParams,
} from 'service-layer/request-models/UserRequest'
import type { WriteResult } from 'firebase-admin/firestore'

export default class UserService {
  /**
   * Gets an User document by its ID.
   *
   * @param id - The ID of the User document to retrieve
   * @returns the User document
   */
  public async getUser(id: string): Promise<User> {
    const user = await collections.user.doc(id).get()
    return user.data()
  }

  /**
   * Gets all User documents.
   * @return an array of all User documents
   *
   * */
  public async getAllUsers(): Promise<User[]> {
    const snapshot = await collections.user.get()
    return snapshot.docs.map((doc) => doc.data())
  }

  /**
   * Creates a new User document.
   * @param newUser - The User document to create
   * @returns the created ExternalResource document
   */
  public async createUser(newUser: UserCreationParams): Promise<User> {
    const ref = collections.user.doc()
    await ref.set({ ...newUser, id: ref.id })
    return { ...newUser, id: ref.id }
  }

  /**
   * Updates an existing User document.
   *
   *  @param id - The ID of the User document to update
   *  @param partialUser - The partial User document with updated fields
   *  @returns the write result of the update operation
   */
  public async updateUser(
    id: string,
    partialUser: UserUpdateParams,
  ): Promise<WriteResult> {
    return await collections.user.doc(id).update(partialUser)
  }

  /**
   * Deletes a User document by its ID.
   * @param id - The ID of the User document to delete
   * @returns the write result of the delete operation
   */
  public async deleteUser(id: string): Promise<WriteResult> {
    return await collections.user.doc(id).delete()
  }
}
