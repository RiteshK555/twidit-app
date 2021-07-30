import Navbar from '../components/Navbar';
import {FloatingLabel,Form,Button} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import {useSession} from 'next-auth/client';
import {db} from '../utils/firebase';
import {getSession} from 'next-auth/client';
// const [session,loading] = useSession();

// export async function getStaticProps(){
//     var newBio="";
//     const session=await getSession();
//     console.log(session.user);
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
var newBio=""
const Profile = () => {

    const [bio,setBio] =useState(newBio)
    const [session,loading] = useSession();
    function textAreaHandler(e) {
        newBio = e.target.value;
    }
    // async function renderName(){
    //     await db.collection("users").where("name","==",session.user.name)
    //         .get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach((doc)=>{
    //                 setBio(doc.data().name);
    //                 console.log(session.user.name);
    //             });
    //         })
    //         .catch((err) =>{
    //             console.log(err);
    //         });
    // }
    // renderName();  
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
                    // console.log(session);
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
    const limitedInterval=setInterval( () =>{
        if(session===undefined){
            console.log("null");
            console.log(session);
        }else{
            console.log(session);
        //  db.collection("users").where("name","==",session.user.name)
        // .get()
        // .then((querySnapshot) => {
        //     querySnapshot.forEach((doc)=>{
        //         newBio=doc.data().bio;
        //     });
        // })
        clearInterval(limitedInterval);
        }

    },1000);
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