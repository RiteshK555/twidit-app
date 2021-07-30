import firebase from "firebase/app";
import "firebase/firestore";
var db = (
  firebase.apps[0] ?? firebase.initializeApp(
    {
    apiKey: "AIzaSyC8L7s5-mTOqauTeCgcl3Zzdg4ltejvaCk",
    authDomain: ,
    databaseURL: ,
    projectId: ,
    storageBucket:,
    messagingSenderId: ,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_SENDER_ID
    }
  )
).firestore()
module.exports =db