import type { Event } from 'models/Event'

export type createEventRequest = Omit<Event, 'id'>

export type updateEventRequest = Partial<createEventRequest>
