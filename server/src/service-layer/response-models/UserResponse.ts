import type { User } from 'data-layer/models/User'
import type { CommonResponse } from './CommonResponse'

export interface GetAllUsersResponse extends CommonResponse {
  data?: User[]
}

export interface UserResponse extends CommonResponse {
  data?: User
}
