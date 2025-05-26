import { CommonResponse } from './CommonResponse'
import { Faq } from 'data-layer/models/Faq'

export interface GetAllFaqsResponse extends CommonResponse {
  data?: Faq[]
}

export interface FaqResponse extends CommonResponse {
  data?: Faq
}
