export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  role: UserRole
}

export interface Faq {
  id: string
  question: string
  answer: string
}

export interface ExternalResource {
  id: string
  title: string
  url: string
  description?: string
}

export type UserWithToken = User & {
  token?: string
}