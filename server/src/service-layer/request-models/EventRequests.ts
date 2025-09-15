import type { Event } from 'data-layer/models/Event'

export type CreateEventRequest = Omit<Event, 'id'>

export type UpdateEventRequest = Partial<CreateEventRequest>

export type RegisterEventRequest = {
  eventId: string
  userId: string
}

export type UnregisterEventRequest = {
  eventId: string
  userId: string
}
