import type { User } from 'data-layer/models/User'
import type { CommonResponse } from './CommonResponse'

export interface GetUserResponse extends CommonResponse {
  data?: User
}
