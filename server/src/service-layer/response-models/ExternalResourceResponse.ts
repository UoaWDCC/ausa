import { ExternalResource } from "types/types"
import { CommonResponse } from './CommonResponse'

export interface GetAllExternalResourceResponse extends CommonResponse {
  data?: ExternalResource[]
}

export interface ExternalResourceResponse extends CommonResponse {
  data?: ExternalResource
}
