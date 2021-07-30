import firebase from "firebase/app";
import "firebase/firestore";
var db = (
  firebase.apps[0] ?? firebase.initializeApp(
    {
    apiKey: "AIzaSyC8L7s5-mTOqauTeCgcl3Zzdg4ltejvaCk",
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET_URL,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_SENDER_ID
    }
  )
).firestore()
module.exports =db