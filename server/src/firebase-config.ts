import { applicationDefault, initializeApp } from 'firebase-admin/app'
import { initializeApp as initApp } from 'firebase/app'
import { getAuth as getAuthAdmin } from 'firebase-admin/auth'
import { getAuth } from 'firebase/auth'
import { config } from 'dotenv'
import { getFirestore, QueryDocumentSnapshot } from 'firebase-admin/firestore'

config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
}

// Initialize Firebase
const firebaseApp = initApp(firebaseConfig)
// Init firebase Admin
const firebaseAdminApp = initializeApp({
  credential: applicationDefault(),
})

export const db = getFirestore(firebaseAdminApp)

export const adminAuth = getAuthAdmin(firebaseAdminApp)
export const auth = getAuth(firebaseApp)

export const converter = <T>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
})
