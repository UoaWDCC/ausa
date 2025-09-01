import type { Faq } from 'models/Faq'
import type { CommonResponse } from './CommonResponse'

export interface GetAllFaqResponse extends CommonResponse {
  data?: Faq[]
}

export interface GetFaqResponse extends CommonResponse {
  data?: Faq
}
