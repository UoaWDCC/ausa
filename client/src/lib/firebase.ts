'use client'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { Firestore, getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCJPlxhXN7HHdk7Ew4Ii3mV8KU5iBYDL6E',
  authDomain: 'ausa-staging.firebaseapp.com',
  projectId: 'ausa-staging',
  storageBucket: 'ausa-staging.firebasestorage.app',
  messagingSenderId: '199379225695',
  appId: '1:199379225695:web:50c2d3d4149239c7e71fea',
  measurementId: 'G-680CGPQBTE',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth: Auth = getAuth(app)
export const db: Firestore = getFirestore(app)
export default app
