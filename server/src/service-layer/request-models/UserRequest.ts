import type { UserRecord } from 'firebase-admin/lib/auth/user-record'

export interface SelfRequestModel {
  uid: string
  user?: UserRecord
}

export interface DeleteUserRequestBody {
  uid: string
}
