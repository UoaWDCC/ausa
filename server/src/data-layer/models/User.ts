export type User = {
  id: string
  username: string
  email: string
  name: string
}

export interface UpdateUserPackage {
  username?: string
  name?: string
  email?: string
}
