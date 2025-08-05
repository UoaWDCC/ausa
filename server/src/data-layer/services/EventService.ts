import FirestoreCollections from 'data-layer/adapters/FirestoreCollections'
import type { Event } from 'data-layer/models/Event'

export class EventService {
  /**
   * Fetches all events from the Firestore collection.
   *
   * @returns A promise that resolves to an array of Event objects.
   */
  public static async getAllEvents(): Promise<Event[]> {
    const eventSnapshots = await FirestoreCollections.events.get()
    return eventSnapshots.docs.map((doc) => doc.data())
  }

  /**
   * Fetches a specific event from the Firestore collection.
   * @param id The ID of the event to fetch.
   * @returns A promise that resolves to an Event object.
   */
   public static async getEventById(id: string): Promise<Event> {
     const eventSnapshot = await FirestoreCollections.events.doc(id).get()
     return eventSnapshot.data()
   }
}
