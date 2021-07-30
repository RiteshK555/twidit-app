import {firestore} from './firebase';
const getUsers=async ()=>{
    const snapshot=await firestore.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        // console.log(doc);
    });
});

}
module.exports={getUsers};