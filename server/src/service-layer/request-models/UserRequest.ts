import { User } from 'data-layer/models/user'
export type UserCreationParams = Pick<User, 'email' | 'name' | 'phoneNumbers'>
