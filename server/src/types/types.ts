export enum UserRole{
    ADMIN = 'admin',
    USER = 'user',
}

export interface User {
  id: string
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