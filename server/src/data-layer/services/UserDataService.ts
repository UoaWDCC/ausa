import type { DocumentSnapshot } from 'firebase-admin/firestore'
import FirestoreCollections from '../adapters/FirestoreCollections'

export class UserService {
  /**
   * Helper function - updates the eventsSignedUp array for a user.
   * @param uid - The ID of the user to update.
   * @param eventId - The ID of the event to add or remove.
   * @param action - 'add' to add the event, 'remove' to remove it.
   * @returns The updated user or undefined if not found.
   */

  public async getAllUserData(limit = 15, startAfter?: DocumentSnapshot) {
    const res = await FirestoreCollections.users
      .orderBy('username')
      .startAfter(startAfter || 0)
      .limit(limit)
      .get()
    const users = res.docs.map((user) => {
      return { ...user.data(), uid: user.id }
    })
    return {
      users,
      nextCursor: res.docs[res.docs.length - 1]?.id || undefined,
    }
  }

  /**
   *
   * @param uid - using uid to find a user in the db
   * @returns A user of type User
   */
  public async getUser(uid: string) {
    const userDoc = await FirestoreCollections.users.doc(uid).get()
    const data = userDoc.data()

    if (data === undefined) return undefined
    return { ...userDoc.data(), uid }
  }

  /**
   *
   * @param uid - using uid to delete a user in db
   */
  public async deleteUserData(uid: string) {
    await FirestoreCollections.users.doc(uid).delete()
  }
}
