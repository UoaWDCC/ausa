import { auth } from 'business-layer/security/Firebase'
import type { UserRecord } from 'firebase-admin/auth'

export default class AuthService {
  public async createUser(
    email: string,
    password: string,
  ): Promise<UserRecord> {
    let userRecord: UserRecord
    try {
      userRecord = await auth.createUser({
        email,
        password,
      })
    } catch (err) {
      console.error('Error creating user:', err)
      throw new Error('Failed to create user')
    }
    return userRecord
  }
}
