import FirestoreCollections from 'data-layer/adapters/FirestoreCollections'
import type { DocumentSnapshot } from 'firebase-admin/firestore'
export class UserService {
  public async getAllUserData(limit = 15, startAfter?: DocumentSnapshot) {
    const res = await FirestoreCollections.users
      .orderBy('username')
      .startAfter(startAfter || 0)
      .limit(limit)
      .get()
    const users = res.docs.map((user) => {
      return { ...user.data(), uid: user.id }
    })
    return { users, nextCursor: res.docs[res.docs.length - 1]?.id || undefined }
  }

  /**
   *
   * @param id - using id to find a user in the db
   * @returns A user of type User
   */
  public async getUser(uid: string) {
    const userDoc = await FirestoreCollections.users.doc(uid).get()
    const data = userDoc.data()

    if (data === undefined) return undefined
    return { ...userDoc.data(), uid }
  }
}
