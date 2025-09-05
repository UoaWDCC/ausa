// setup firebase
import {
  type Analytics,
  type EventNameString,
  type EventParams,
  getAnalytics,
  isSupported,
  logEvent,
} from 'firebase/analytics'
import { type FirebaseOptions, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
let analytics: Analytics | null = null

isSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(app)
  }
})

// use emulator suite if running locally
if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
  connectFirestoreEmulator(db, 'localhost', 8080)
}

export const fireAnalytics = (
  eventName: EventNameString,
  eventParams?: EventParams,
) => {
  if (analytics) {
    logEvent(analytics, eventName as string, eventParams)
  }
}

export { auth, db, analytics, storage }
