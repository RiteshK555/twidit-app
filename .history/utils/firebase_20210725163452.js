import firebase from "firebase/app";
import "firebase/firestore";
var db = (
  firebase.apps[0] ?? firebase.initializeApp(
    {
    apiKey: "AIzaSyC8L7s5-mTOqauTeCgcl3Zzdg4ltejvaCk",
    authDomain: "ph123-24b26.firebaseapp.com",
    databaseURL: "https://ph123-24b26-default-rtdb.firebaseio.com",
    projectId: 24b26-default-rtdb.firebaseio.com"
PROJECT_ID=,
    storageBucket:,
    messagingSenderId: ,
    appId: ,
    measurementId: 
    }
  )
).firestore()
module.exports =db