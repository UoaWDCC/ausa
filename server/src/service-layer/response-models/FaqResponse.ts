import type { Faq } from 'data-layer/models/Faq'
import type { CommonResponse } from './CommonResponse'

export interface GetAllFaqsResponse extends CommonResponse {
  data?: Faq[]
}

export interface FaqResponse extends CommonResponse {
  data?: Faq
}
