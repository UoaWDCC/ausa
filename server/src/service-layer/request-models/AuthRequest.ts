import { User } from 'types/types'

export type AuthCreationParams = Omit<User, 'id'> & {
  password: string
}

export type LoginCredentials = {
  email: string
  password: string
}
