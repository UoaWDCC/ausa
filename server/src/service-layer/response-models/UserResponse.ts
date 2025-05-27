import { CommonResponse } from './CommonResponse'
import { User } from 'types/types'

export interface GetAllUsersResponse extends CommonResponse {
  data?: User[]
}

export interface UserResponse extends CommonResponse {
  data?: User
}
