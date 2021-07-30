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
// var newBio=""
const Profile = () => {
        
    const [bio,setBio] =useState(newBio)
    // var bio;
    var limitedInterval=setInterval( async() =>{
        const session=await getSession();
        if(session===undefined){
            console.log(session);
        }else{ 
            console.log(session);
         await db.collection("users").where("name","==",session.user.name)
               .get()
               .then((querySnapshot) => {
                console.log("hi");
            querySnapshot.forEach((doc)=>{
                // setBio(doc.data().bio);
                bio=doc.data().bio;
            });
                clearInterval(limitedInterval);
        })
        .catch((err)=>{
            console.log(err);
        });

        }
        },1000);
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
    // const limitedInterval=setInterval( async() =>{

    //     if(session===undefined){
    //         console.log(session);
    //     }else{ 
    //         console.log(session);
    //      db.collection("users").where("name","==",session.user.name)
    //     .get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach((doc)=>{
    //             newBio=doc.data().bio;
    //         });
    //     })
    //     clearInterval(limitedInterval);
    //     }

    // },1000);
    if(session!==undefined && bio!==""){
    return (
    // limitedInterval.then((result)=>{
    //     return result;
    // })
            <>
            <Navbar/>
        <h3 style={{display:'flex',justifyContent: 'center',paddingBottom:12}} >Name : {session && session.user.name}</h3>
            { 
            bio==="" 
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
    else{
        return<>
            <Navbar/>
            </>
    }

}
 
export default Profile;