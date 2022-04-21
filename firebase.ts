// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMku-FfsUtl8B7UQMiwZ0xTsIEjmvaLZw",
  authDomain: "netflix-nextjs-e2dc2.firebaseapp.com",
  projectId: "netflix-nextjs-e2dc2",
  storageBucket: "netflix-nextjs-e2dc2.appspot.com",
  messagingSenderId: "425967899664",
  appId: "1:425967899664:web:36d8f3c2e2cfa7b9b0a695"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }