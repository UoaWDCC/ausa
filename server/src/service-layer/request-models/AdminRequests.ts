import type { UserAdditionalInfo } from 'data-layer/models/User'

export interface CreateUserRequest {
  id: string
  user: UserAdditionalInfo
}

export interface UpdateUserRequest {
  user: Partial<UserAdditionalInfo>
}
