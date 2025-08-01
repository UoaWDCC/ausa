import FireBaseError from 'business-layer/errors/FirebaseError'
import type * as express from 'express'
import { StatusCodes } from 'http-status-codes'
import { auth } from './Firebase'

export function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[],
) {
  if (securityName === 'jwt') {
    const authHeader = String(request.headers.authorization || '')

    return new Promise((resolve, reject) => {
      if (!authHeader.startsWith('Bearer ')) {
        reject(new Error('No token provided'))
      }

      const token = authHeader.split(' ')[1] // Gets part after Bearer

      auth
        .verifyIdToken(token)
        .then((decodedToken) => {
          const { uid } = decodedToken
          auth
            .getUser(uid)
            .then((user) => {
              for (const scope of scopes) {
                if (user.customClaims === undefined) {
                  throw new FireBaseError(
                    'Authentication Error',
                    StatusCodes.UNAUTHORIZED,
                    'No Scope',
                  )
                }
                if (
                  !(scope in user.customClaims) ||
                  !user.customClaims[scope]
                ) {
                  throw new FireBaseError(
                    'Authentication Error',
                    StatusCodes.UNAUTHORIZED,
                    'No Scope',
                  )
                }
              }
              resolve(user)
            })
            .catch((reason) => {
              if (!(reason instanceof FireBaseError)) {
                console.error(reason)
              }
              reject(
                new FireBaseError(
                  'Authentication Error',
                  StatusCodes.UNAUTHORIZED,
                  reason,
                ),
              )
            })
        })
        .catch((reason) => {
          if (!(reason instanceof FireBaseError)) {
            console.error(reason)
          }
          reject(
            new FireBaseError(
              'Authentication Error',
              StatusCodes.UNAUTHORIZED,
              reason,
            ),
          )
        })
    })
  }
  return Promise.reject(new Error('Unknown Error'))
}
