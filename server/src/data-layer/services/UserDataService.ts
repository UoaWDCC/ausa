import FirestoreCollections from 'data-layer/adapters/FirestoreCollections'
import type { DocumentDataWithUid } from 'data-layer/models/Common'
import type { UserAdditionalInfo } from 'data-layer/models/User'

export class UserDataService {
  /**
   * Creates a new user in the Firestore database.
   *
   * @param uid The ID of the user to create.
   * @param data The additional information for the user.
   */
  public static async createUser(uid: string, data: UserAdditionalInfo) {
    return await FirestoreCollections.users.doc(uid).set(data)
  }

  /**
   * Fetches all users from the Firestore database.
   *
   * @returns A promise that resolves to an array of {@link User} objects.
   */
  public static async getAllUsers(): Promise<
    DocumentDataWithUid<UserAdditionalInfo>[]
  > {
    const userSnapshots = await FirestoreCollections.users.get()
    return userSnapshots.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
  }

  /**
   * Fetches a user by their ID from the Firestore database.
   *
   * @param id The ID of the user to fetch.
   * @returns A promise that resolves to a {@link User} object.
   */
  public static async getUserById(
    id: string,
  ): Promise<DocumentDataWithUid<UserAdditionalInfo>> {
    const userSnapshot = await FirestoreCollections.users.doc(id).get()
    return { ...userSnapshot.data(), id }
  }

  /**
   * Updates a user's information in the Firestore database.
   *
   * @param id The ID of the user to update.
   * @param updatedFields The fields to update.
   * @returns A promise that resolves when the update is complete.
   */
  public static async updateUserData(
    id: string,
    updatedFields: Partial<UserAdditionalInfo>,
  ) {
    return await FirestoreCollections.users
      .doc(id)
      .set(updatedFields, { merge: true })
  }

  /**
   * Deletes a user from the Firestore database.
   *
   * @param id The ID of the user to delete.
   * @returns A promise that resolves when the deletion is complete.
   */
  public static async deleteUser(id: string) {
    return await FirestoreCollections.users.doc(id).delete()
  }
}
