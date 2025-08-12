import type { User } from '@/types/types'

const convertToUser = (user: any): User => {
    return {
      id: user.uid,
      username: user.displayName,
      email: user.email,
      name: user.displayName,
    }
  }

export {convertToUser}