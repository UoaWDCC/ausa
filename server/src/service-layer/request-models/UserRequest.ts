import { User } from 'data-layer/models/User'
export type UserCreationParams = Pick<User, 'email' | 'name' | 'phoneNumbers'>
