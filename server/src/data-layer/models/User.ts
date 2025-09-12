import type { Event } from './Event'

export interface User {
  id: string
  events: Event[]
}
