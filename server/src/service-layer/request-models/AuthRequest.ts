import { User } from 'types/types'

export type AuthCreationParams = Omit<User, 'id'> & {
  password: string
}
