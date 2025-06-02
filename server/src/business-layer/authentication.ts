import * as express from 'express'
import { adminAuth } from 'firebase-config'
import UserService from 'data-layer/services/UserService'

export function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[],
): Promise<any> {
  if (securityName === 'jwt') {
    const header = request.headers.authorization
    if (!header || !header.startsWith('Bearer ')) {
      return Promise.reject(
        new Error('Invalid or missing authorization header'),
      )
    }
    const token = header.split(' ')[1]

    return new Promise((resolve, reject) => {
      if (!token) {
        reject(new Error('No token provided'))
      }
      adminAuth.verifyIdToken(token).then((decodedToken) => {
        const id = decodedToken.uid
        new UserService().getUser(id).then((user) => {
          if (!user) {
            reject(new Error('User not found'))
          }
          if (scopes.length > 0 && !scopes.includes(user.role)) {
            reject(new Error('User does not have required role.'))
          }
          resolve(user)
        })
      })
    })
  } else {
    return Promise.resolve({})
  }
}
