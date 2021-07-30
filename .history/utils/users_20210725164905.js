import {firestore} from './firebase';
const getUsers=async ()=>{
    const snapshot=await db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

}
module.exports={getUsers};