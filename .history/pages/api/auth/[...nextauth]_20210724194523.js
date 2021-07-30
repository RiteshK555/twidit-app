import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import firebase from "firebase/app"
import "firebase/firestore"
const firestore = (
  firebase.apps[0] ?? firebase.initializeApp(
    {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: "ph123-24b26",
    storageBucket: "ph123-24b26.appspot.com",
    messagingSenderId: "82829454239",
    appId: "1:82829454239:web:9a3fd6fe3a35a7cac7abaa",
    measurementId: "G-DKKVDWNNY1"
    }
  )
).firestore()
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
    // ...add more providers here
  ],
  adapter: FirebaseAdapter(firestore),
  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
})

// export default NextAuth({
//   providers: [
//     Providers.Google({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//   ],
//   adapter: FirebaseAdapter(firestore),
//   ...
// })