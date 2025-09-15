import FirestoreCollections from '../adapters/FirestoreCollections'
import type { DocumentSnapshot } from 'firebase-admin/firestore'
import { FieldValue } from 'firebase-admin/firestore'
import { User } from '../models/User'
import { getUserDoc, getEventDoc } from '../utils/FirestoreValidators'
export class UserService {
  /**
   * Helper function - updates the eventsSignedUp array for a user.
   * @param uid - The ID of the user to update.
   * @param eventId - The ID of the event to add or remove.
   * @param action - 'add' to add the event, 'remove' to remove it.
   * @returns The updated user or undefined if not found.
   */
  private async updateUserEventsSignedUp(
    uid: string,
    eventId: string,
    action: 'add' | 'remove'
  ): Promise<User | undefined> {
    const userRef = FirestoreCollections.users.doc(uid)
    await userRef.update({
      eventsSignedUp:
        action === 'add'
          ? FieldValue.arrayUnion(eventId)
          : FieldValue.arrayRemove(eventId),
    })
    const updatedUserDoc = await userRef.get()
    return updatedUserDoc.data() as User
  }

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

  public async registerEventToUser(uid: string, eventId: string): Promise<User | null> {
    const userDoc = await getUserDoc(uid)
    const eventDoc = await getEventDoc(eventId)
    if (!userDoc || !eventDoc) return null

    const updatedUser = await this.updateUserEventsSignedUp(uid, eventId, 'add')
    console.log(`User ${uid} registered for event ${eventId}`)
    return updatedUser
  }

  public async unregisterEventFromUser(uid: string, eventId: string): Promise<User | null> {
    const userDoc = await getUserDoc(uid)
    const eventDoc = await getEventDoc(eventId)
    if (!userDoc || !eventDoc) return null

    const updatedUser = await this.updateUserEventsSignedUp(uid, eventId, 'remove')
    console.log(`User ${uid} unregistered from event ${eventId}`)
    return updatedUser
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
