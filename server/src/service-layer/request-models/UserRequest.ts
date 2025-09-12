import type { User } from 'data-layer/models/User'
import type { UserRecord } from 'firebase-admin/lib/auth/user-record'

export interface SelfRequestModel {
  uid: string
  user?: UserRecord
}

export interface DeleteUserRequestBody {
  uid: string
}

export interface CreateUserRequestBody extends User {}

export type UpdateUserRequestBody = Partial<Omit<User, 'id' | 'events'>>
