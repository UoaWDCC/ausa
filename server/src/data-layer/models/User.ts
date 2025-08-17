export interface User {
  username: string
  firstname: string
  lastname: string
  role?: 'user' | 'admin'
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
