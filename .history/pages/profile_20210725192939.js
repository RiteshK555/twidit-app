import Navbar from '../components/Navbar';
import {FloatingLabel,Form,Button} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import {useSession} from 'next-auth/client';
import {db} from '../utils/firebase';
// const [session,loading] = useSession();
var newBio="";
// export async function getStaticProps(){
//     const [session,loading] = useSession();
//         db.collection("users").where("name","==",session.user.name)
//         .get()
//         .then((querySnapshot) => {
//             querySnapshot.forEach((doc)=>{
//                 newBio=doc.data().bio;
//             });
//         })
//     return {
//         props:{
//             newBio:newBio,
//         },
//     }
// }
const Profile = () => {

    const [bio,setBio] =useState(newBio)
    const [session,loading] = useSession();
    function textAreaHandler(e) {
        newBio = e.target.value;
    }
    function handleSubmit(e) {
        setBio(newBio);
        e.preventDefault();
        db.collection("users").where("name","==",session.user.name)
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                // console.log(doc);
                db.collection("users").doc(doc.id)
                .update({
                    "bio":newBio
                })
                .then(()=>{
                    console.log("added");
                })
                .catch((err)=>{
                    console.log("error");
                });
            });
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    // setInterval(() =>{
        if(session===null){
            console.log("null");
            console.log(session);
        }else{
        db.collection("users").where("name","==",session.user.name)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc)=>{
                newBio=doc.data().bio;
            });
        })
        clearInterval();
        }

    // },1000);
    return (
        <>
            <Navbar/>
        <h3 style={{display:'flex',justifyContent: 'center',paddingBottom:12}} >Name : {session && session.user.name}</h3>
            { bio==="" 
            ?<div style={{display:'flex',justifyContent: 'center', paddingTop:2,paddingLeft:61}}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control  as="textarea" onChange={textAreaHandler} rows={3} cols={50}/>
                  </Form.Group>
                    <Button  type="submit" variant="primary">add Bio</Button>
                </Form>
            </div>
            :<p style={{display:'flex',justifyContent: 'center', paddingTop:2,paddingLeft:61}}>Bio : {bio}</p>
            }
        </>
    );
}
 
export default Profile;