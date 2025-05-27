import { CommonResponse } from './CommonResponse'
import { Faq } from 'types/types'

export interface GetAllFaqsResponse extends CommonResponse {
  data?: Faq[]
}

export interface FaqResponse extends CommonResponse {
  data?: Faq
}
