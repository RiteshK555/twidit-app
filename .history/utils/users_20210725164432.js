import {firestore} from './firebase';
const getUsers=async ()=>{
    const snapshot=await firestore.collection("users").get;
    console.log(snapshot);
}