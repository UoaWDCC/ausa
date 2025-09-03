import { auth } from 'business-layer/security/Firebase'
// import {
//   AuthServiceClaims,
//   UserAccountTypes,
// } from 'business-layer/utils/AuthServiceClaims'
import type { ListUsersResult, UserRecord } from 'firebase-admin/auth'

type UidArray = {
  uid: string
}[]

export default class AuthService {
  /**
   * Fetches all users from the Firebase Auth.
   * @param maxPagintion The maximum number of users to fetch per page.
   * @returns An array of all users.
   */
  public async getAllUsers(maxPagintion = 1000): Promise<UserRecord[]> {
    const allUsers: UserRecord[] = []

    let pageToken: string
    let response: ListUsersResult

    do {
      response = await auth.listUsers(maxPagintion, pageToken)
      allUsers.push(...response.users)
      pageToken = response.pageToken
    } while (response.pageToken)

    return allUsers
  }

  /**
   * Fetches up to **100** users based on an array of uid identifiers
   *
   * @throws **Passing more than 100 will result in a FirebaseAuthError**
   *
   * @param uids an array of objects containing the key `uid`,
   * which has the value of the firebase user uid
   * @example // [{uid:"uid1", uid:"uid2"}]
   */
  public async bulkRetrieveUsersByUids(uids: UidArray) {
    try {
      const { users } = await auth.getUsers(uids)
      return users
    } catch (e) {
      console.error('Failed to bulk retrieve the uids from Auth', e)
      return undefined
    }
  }

  public async retrieveUserByUid(uid: string) {
    try {
      const user = await auth.getUser(uid)
      return user
    } catch (e) {
      console.error('Failed to bulk retrieve the uids from Auth', e)
      return undefined
    }
  }

  /**
   * Deletes a user account from the Firebase Authentication Service.
   * @param uid
   */
  public async deleteUser(uid: string): Promise<void> {
    try {
      await auth.deleteUser(uid)
    } catch (err) {
      console.error('Error deleting user', err)
      throw err
    }
  }

  /**
   * Creates a new user account in the Firebase Authentication Service.
   * @param email
   */
  public async createUser(email: string): Promise<UserRecord> {
    // get the user record
    let userRecord: UserRecord
    try {
      userRecord = await auth.createUser({ email })
    } catch (err) {
      console.error('Error creating user', err)
      throw err
    }

    return userRecord
  }
}
