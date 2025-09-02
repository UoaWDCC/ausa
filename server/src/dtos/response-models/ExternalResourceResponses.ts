import type { ExternalResource } from 'models/ExternalResource'
import type { CommonResponse } from './CommonResponse'

export interface GetAllExternalResourceResponse extends CommonResponse {
  data?: ExternalResource[]
}

export interface GetExternalResourceResponse extends CommonResponse {
  data?: ExternalResource
}
