import type { ExternalResourceCategory } from 'data-layer/models/ExternalResourceCategories'
import type { CommonResponse } from './CommonResponse'

export interface GetAllExternalResourceCategoryResponse extends CommonResponse {
  data?: ExternalResourceCategory[]
}

export interface GetExternalResourceCategoryResponse extends CommonResponse {
  data?: ExternalResourceCategory
}
