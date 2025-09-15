import FirestoreCollections from '../adapters/FirestoreCollections'
import type { DocumentSnapshot } from 'firebase-admin/firestore'
import { FieldValue } from 'firebase-admin/firestore'
import { User } from '../models/User'
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
    return {
      users,
      nextCursor: res.docs[res.docs.length - 1]?.id || undefined,
    }
  }

  public async registerEventToUser(uid: string, eventId: string): Promise<User | undefined> {
  const userRef = FirestoreCollections.users.doc(uid)
  const userDoc = await userRef.get()
  if (!userDoc.exists) {
    console.log(`User with uid ${uid} does not exist.`)
    return undefined
  }

  const eventRef = FirestoreCollections.events.doc(eventId)
  const eventDoc = await eventRef.get()
  if (!eventDoc.exists) {
    console.log(`Event with id ${eventId} does not exist.`)
    return undefined
  }

  await userRef.update({
    eventsSignedUp: FieldValue.arrayUnion(eventId),
  })

  const updatedUserDoc = await userRef.get()
  console.log(`User ${uid} registered for event ${eventId}`)
  return updatedUserDoc.data() as User
  }

  public async unregisterEventFromUser(uid: string, eventId: string): Promise<User | undefined> {
    const userRef = FirestoreCollections.users.doc(uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      console.log(`User with uid ${uid} does not exist.`);
      return undefined;
    }

    const eventRef = FirestoreCollections.events.doc(eventId);
    const eventDoc = await eventRef.get();

    if (!eventDoc.exists) {
      console.log(`Event with id ${eventId} does not exist.`);
      return undefined;
    }

    // Remove the event from the user’s eventsSignedUp array
    await userRef.update({
      eventsSignedUp: FieldValue.arrayRemove(eventId),
    });

    // Fetch the updated user document
    const updatedUserDoc = await userRef.get();
    console.log(`User ${uid} unregistered from event ${eventId}`);
    return updatedUserDoc.data() as User;
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
