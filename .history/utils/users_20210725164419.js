import {firestore} from './firebase';
const getUsers=async ()=>{
    const snapshot=await firestore.collection("users"
}