import type { UserWithToken } from 'types/types'
import type { CommonResponse } from './CommonResponse'

export interface GetAllUsersResponse extends CommonResponse {
  data?: UserWithToken[]
}

export interface UserResponse extends CommonResponse {
  data?: UserWithToken
}
