import type { Event } from 'models/Event'
import type { CommonResponse } from './CommonResponse'

export interface GetAllEventsResponse extends CommonResponse {
  data?: Event[]
}

export interface GetEventResponse extends CommonResponse {
  data?: Event
}
