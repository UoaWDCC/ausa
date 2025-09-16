import type { User } from 'data-layer/models/User'

export interface UserSignupBody {
  email: string
  user: Omit<User, 'stripe_id'>
}
