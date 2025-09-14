import type { Faq } from 'data-layer/models/Faq'
import type { CommonResponse } from './CommonResponse'

export interface GetAllFaqResponse extends CommonResponse {
  data?: Faq[]
}

export interface GetFaqResponse extends CommonResponse {
  data?: Faq
}
