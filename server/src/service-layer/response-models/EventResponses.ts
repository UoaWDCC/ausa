import type { Event } from 'data-layer/models/Event'
import type { CommonResponse } from './CommonResponse'

export interface GetAllEventsResponse extends CommonResponse {
  data?: Event[]
}

export interface GetEventResponse extends CommonResponse {
  data?: Event
}
