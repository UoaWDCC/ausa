import FirestoreCollections from '../adapters/FirestoreCollections'
import type { DocumentSnapshot } from 'firebase-admin/firestore'

/**
 * Validate and retrieve a user document.
 * @param userId Firestore user id
 * @returns DocumentSnapshot if exists, otherwise null
 */
export async function getUserDoc(userId: string): Promise<DocumentSnapshot | null> {
  const userRef = FirestoreCollections.users.doc(userId)
  const userDoc = await userRef.get()
  if (!userDoc.exists) {
    console.log(`User with uid ${userId} does not exist.`)
    return null
  }
  return userDoc
}

/**
 * Validate and retrieve an event document.
 * @param eventId Firestore event id
 * @returns DocumentSnapshot if exists, otherwise null
 */
export async function getEventDoc(eventId: string): Promise<DocumentSnapshot | null> {
  const eventRef = FirestoreCollections.events.doc(eventId)
  const eventDoc = await eventRef.get()
  if (!eventDoc.exists) {
    console.log(`Event with id ${eventId} does not exist.`)
    return null
  }
  return eventDoc
}
