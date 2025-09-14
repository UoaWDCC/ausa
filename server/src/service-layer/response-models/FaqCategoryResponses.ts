import type { FaqCategory } from 'data-layer/models/FaqCategories'
import type { CommonResponse } from './CommonResponse'

export interface GetAllFaqCategoryResponse extends CommonResponse {
  data?: FaqCategory[]
}

export interface GetFaqCategoryResponse extends CommonResponse {
  data?: FaqCategory
}
