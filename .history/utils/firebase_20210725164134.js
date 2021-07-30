import firebase from "firebase/app";
import "firebase/firestore";
var firestore = (
  firebase.apps[0] ?? firebase.initializeApp(
    {
    apiKey: "AIzaSyC8L7s5-mTOqauTeCgcl3Zzdg4ltejvaCk",
    authDomain: "ph123-24b26.firebaseapp.com",
    databaseURL: "https://ph123-24b26-default-rtdb.firebaseio.com",
    projectId: "ph123-24b26",
    storageBucket:"ph123-24b26.appspot.com",
    messagingSenderId: "82829454239",
    appId: "1:82829454239:web:9a3fd6fe3a35a7cac7abaa",
    measurementId: "G-DKKVDWNNY1"
    }
  )
).firestore()
var db=firebase.firestore();
module.exports ={firestore}