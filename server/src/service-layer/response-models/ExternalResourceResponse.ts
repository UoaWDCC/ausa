import type { ExternalResource } from 'data-layer/models/ExternalResource'
import type { CommonResponse } from './CommonResponse'

export interface GetAllExternalResourceResponse extends CommonResponse {
  data?: ExternalResource[]
}

export interface ExternalResourceResponse extends CommonResponse {
  data?: ExternalResource
}
