import type { User } from 'data-layer/models/User'

export type AuthCreationParams = Omit<User, 'id'> & {
  password: string
}

export type LoginCredentials = {
  email: string
  password: string
}
