import { auth } from 'business-layer/security/Firebase'

export class RoleService {
  /**
   * Set user role for a new user
   * @param uid - set default claim for user
   * @returns Promise that resolves when operation completes
   */
  public static async setDefaultRole(uid: string): Promise<void> {
    try {
      await auth.setCustomUserClaims(uid, { user: true })

      console.log(`Default role set for user ${uid}`)
    } catch (error) {
      console.error('Error setting default role:', error)
      throw error
    }
  }

  // check admin method?

  /**
   * Set admin role for a user
   * @param uid - make a user an admin
   * @returns Promise that resolves when operation completes
   */
  public static async makeUserAdmin(uid: string): Promise<void> {
    try {
      const user = await auth.getUser(uid)

      await auth.setCustomUserClaims(uid, {
        ...user.customClaims,
        admin: true
      })

      console.log(`User ${uid} has been made an admin`)
    } catch (error) {
      console.error('Error setting admin role:', error)
      throw error
    }
  }

  /**
   * Remove admin role from a user
   * @param uid - remove admin rights from user
   * @returns Promise that resolves when operation completes
   */
  public static async removeAdminRole(uid: string): Promise<void> {
    try {
      const user = await auth.getUser(uid)

      const { admin, ...otherClaims } = user.customClaims
      await auth.setCustomUserClaims(uid, otherClaims)

      console.log(`Admin role removed from user ${uid}`)
    } catch (error) {
      console.error('Error removing admin role:', error)
      throw error
    }
  }
}
