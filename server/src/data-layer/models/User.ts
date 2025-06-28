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
