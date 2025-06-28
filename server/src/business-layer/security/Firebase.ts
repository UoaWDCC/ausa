import * as _admin from 'firebase-admin'

const keysEnvVar = process.env.FIREBASE_SERVICE_ACCOUNT_JSON

if (!keysEnvVar) {
  throw new Error('The service account environment variable was not found!')
}

const keys = JSON.parse(keysEnvVar ?? '{}')

const firebase = _admin.initializeApp(
  Object.keys(keys).length > 0
    ? {
        credential: _admin.credential.cert(keys),
      }
    : {},
)

export const admin = _admin

export const auth = firebase.auth()
