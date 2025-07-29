import FirestoreCollections from 'data-layer/adapters/FirestoreCollections'
import type { Event, UpdateEventPackage } from 'data-layer/models/Event'
import { Body } from 'tsoa'

export type EventCreationParams = Pick<
  Event,
  'id' | 'name' | 'location' | 'date'
>

export class EventService {
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

  async getEventByName(name: string): Promise<Event | null> {
    const snapShot = await FirestoreCollections.events
      .where('name', '==', name)
      .limit(1)
      .get()

    if (snapShot.empty) {
      console.log(`Event - ${name} not found`)
      return null
    }

    const event = snapShot.docs[0]
    return event.data() as Event
  }

  async getAllEvents(): Promise<Event[]> {
    const snapShot = await FirestoreCollections.events.get()
    const eventList: Event[] = snapShot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      location: doc.data().location,
      date: doc.data().date,
    }))
    console.log(
      eventList.map((event) => {
        event
      }),
    )
    return eventList
  }

  async createEvent(@Body() params: EventCreationParams): Promise<Event> {
    const eventRef = await FirestoreCollections.events.doc(params.id)
    const newEvent: Event = {
      id: params.id,
      name: params.name,
      location: params.location,
      date: params.date,
    }
    await eventRef.set({
      id: params.id,
      name: params.name,
      location: params.location,
      date: params.date,
    })
    console.log(newEvent)
    return newEvent
  }

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
