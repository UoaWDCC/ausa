import { CommonResponse } from './CommonResponse'
import { UserWithToken } from 'types/types'

export interface GetAllUsersResponse extends CommonResponse {
  data?: UserWithToken[]
}

export interface UserResponse extends CommonResponse {
  data?: UserWithToken
}
