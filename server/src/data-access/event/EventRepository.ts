import FirestoreCollections from 'data-access/adapters/FirestoreCollections'
import type { Event, UpdateEventPackage } from 'models/Event'
import { Body } from 'tsoa'

export type EventCreationParams = Pick<
  Event,
  'id' | 'title' | 'heroImage' | 'content'
>

export class EventRepository {
  /**
   * Retrieves an event by its ID.
   * @param id - Using id find an event in the database
   * @returns An event of type Event
   */
  async getEvent(id: string): Promise<Event | null> {
    const eventRef = FirestoreCollections.events.doc(id)
    const event = await eventRef.get()
    if (!event.exists) {
      console.log(`Event - ${id} is not found`)
      return null
    }
    console.log(event.data())
    return event.data() as Event
  }

  /**
   * Retrieves an event by its title.
   * @param title Using the event title find the event in the database
   * @returns An event of type Event
   */
  async getEventByTitle(title: string): Promise<Event | null> {
    const snapShot = await FirestoreCollections.events
      .where('title', '==', title)
      .limit(1)
      .get()

    if (snapShot.empty) {
      console.log(`Event - ${title} not found`)
      return null
    }

    const event = snapShot.docs[0]
    return event.data() as Event
  }

  /**
   *
   * @returns A list of events
   */
  async getAllEvents(): Promise<Event[]> {
    const snapShot = await FirestoreCollections.events.get()
    const eventList: Event[] = snapShot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      heroImage: doc.data().heroImage,
      content: doc.data().content,
    }))
    return eventList
  }

  /**
   * Creates a new event with the parameters provided without passing in the id
   * @param params - The parameters for creating an event.
   * @returns A promise that resolves to the created event.
   */
  async createEvent(@Body() params: EventCreationParams): Promise<Event> {
    const eventRef = await FirestoreCollections.events.doc(params.id)
    const newEvent: Event = {
      id: params.id,
      title: params.title,
      content: params.content,
    }
    if (params.heroImage) {
      newEvent.heroImage = params.heroImage
    }
    await eventRef.set(newEvent)
    console.log(newEvent)
    return newEvent
  }

  /**
   * Deletes an event by its ID.
   * @param eventId  - The ID of the event to delete
   * @returns  A promise that resolves to the deleted event or null if not found.
   */
  async deleteEvent(eventId: string): Promise<Event | null> {
    const eventRef = await FirestoreCollections.events.doc(eventId)
    const doc = await eventRef.get()
    if (!doc.exists) {
      console.log(`Event - ${eventId} is not found`)
      return null
    }
    await eventRef.delete()
    const event = doc.data()
    console.log(`Event - ${eventId} deleted`)
    return event
  }

  /**
   * Updates an existing event.
   * @param eventId - The ID of the event to update.
   * @param updates - The updates to apply to the event.
   * @returns A promise that resolves to the updated event or null if not found.
   */
  async updateEvent(
    eventId: string,
    updates: UpdateEventPackage,
  ): Promise<Event | null> {
    const eventRef = await FirestoreCollections.events.doc(eventId)
    const doc = await eventRef.get()
    if (!doc.exists) {
      console.log(`Event - ${eventId} is not found`)
      return null
    }
    await eventRef.set(updates, { merge: true })
    const updatedEvent = await eventRef.get()
    return updatedEvent.data() as Event
  }
}
