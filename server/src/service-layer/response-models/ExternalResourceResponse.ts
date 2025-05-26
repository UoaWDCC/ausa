import { ExternalResource } from 'data-layer/models/externalResource'
import { CommonResponse } from './CommonResponse'

export interface GetAllExternalResourceResponse extends CommonResponse {
  data?: ExternalResource[]
}

export interface ExternalResourceResponse extends CommonResponse {
  data?: ExternalResource
}
