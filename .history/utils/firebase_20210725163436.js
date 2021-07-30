import firebase from "firebase/app";
import "firebase/firestore";
var db = (
  firebase.apps[0] ?? firebase.initializeApp(
    {
    apiKey: "AIzaSyC8L7s5-mTOqauTeCgcl3Zzdg4ltejvaCk",
    authDomain: "ph123-24b26.firebaseapp.com",
    databaseURL: ,
    projectId: ,
    storageBucket:,
    messagingSenderId: ,
    appId: ,
    measurementId: 
    }
  )
).firestore()
module.exports =db