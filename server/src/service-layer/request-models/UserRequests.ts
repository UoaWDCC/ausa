import type { User } from 'data-layer/models/User'

export interface CreateUserRequestBody {
  data: User
  email: string
  password: string
}
