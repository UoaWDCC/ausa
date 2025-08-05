import type { Event } from 'data-layer/models/Event'

export type createEventRequest = Omit<Event, 'id'>

export type updateEventRequest = Partial<createEventRequest>
