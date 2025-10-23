import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDVt6drnk3qsiL491n9p48irelYiKZi5Dc",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ngo-s-2e1a8.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ngo-s-2e1a8",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ngo-s-2e1a8.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1053418965001",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1053418965001:web:e56006f64ac244b3c550d8",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-6KLQ1EK42R"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
