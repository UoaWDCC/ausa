import type { ExternalResource } from 'types/types'
import type { CommonResponse } from './CommonResponse'

export interface GetAllExternalResourceResponse extends CommonResponse {
  data?: ExternalResource[]
}

export interface ExternalResourceResponse extends CommonResponse {
  data?: ExternalResource
}
