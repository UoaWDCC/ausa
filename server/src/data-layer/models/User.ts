export interface User {
  id: string
  username: string
  email: string
  name: string
}

// for patch
export interface UpdateUserPackage {
  username?: string
  name?: string
  email?: string
}

export interface Admin extends User {
  role: 'admin'
  permissions: string[]
}