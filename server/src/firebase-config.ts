import { config } from 'dotenv'
import { initializeApp as initApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import * as firebaseAdmin from 'firebase-admin'
import { getAuth as getAuthAdmin } from 'firebase-admin/auth'
import {
  getFirestore,
  type QueryDocumentSnapshot,
} from 'firebase-admin/firestore'

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

const keys = JSON.parse(process.env.FIREBASE_JSON)

// Initialize Firebase
const firebaseApp = initApp(firebaseConfig)
// Init firebase Admin
const firebaseAdminApp = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(keys),
})

export const db = getFirestore(firebaseAdminApp)

export const adminAuth = getAuthAdmin(firebaseAdminApp)
export const authWeb = getAuth(firebaseApp)

export const converter = <T>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
})
