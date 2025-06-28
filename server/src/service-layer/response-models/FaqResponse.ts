import type { CommonResponse } from './CommonResponse'
import type { Faq } from 'types/types'

export interface GetAllFaqsResponse extends CommonResponse {
  data?: Faq[]
}

export interface FaqResponse extends CommonResponse {
  data?: Faq
}
