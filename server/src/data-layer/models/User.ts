import type { Timestamp } from 'firebase-admin/firestore'

export type UserAdditionalInfo = {
  date_of_birth: Timestamp
}

export type User = {
  id: string
  email: string
  name: string
}