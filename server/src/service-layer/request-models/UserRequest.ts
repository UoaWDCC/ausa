import { User } from "types/types"

export type UserCreationParams = Omit<User, 'id'>
export type UserUpdateParams = Partial<User>