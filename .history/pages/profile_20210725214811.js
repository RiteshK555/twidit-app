import Navbar from '../components/Navbar';
import {FloatingLabel,Form,Button} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import {useSession} from 'next-auth/client';
import {db} from '../utils/firebase';
import {getSession} from 'next-auth/client';
// const [session,loading] = useSession();

// export async function getStaticProps(){
//     var bio="";
//     const session=await getSession();
//     // console.log(session.user);
//         await db.collection("users").where("name","==",session.user.name)
//         .get()
//         .then((querySnapshot) => {
//             querySnapshot.forEach((doc)=>{
//                 newBio=doc.data().bio;
//             });
//         })
//     return {
//         props:{
//             asyncFunN
//         },
//     }
// }
var newBio=""
const Profile = () => {
        
    const [bio,setBio] =useState("")
    // var bio;
    var limitedInterval=setInterval( async() =>{
        const session=await getSession();
        if(session===undefined || session===null){
            console.log(session);
        }else{ 
            console.log(session);
         await db.collection("users").where("name","==",session.user.name)
               .get()
               .then((querySnapshot) => {
            querySnapshot.forEach((doc)=>{
                setBio(doc.data().bio);
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
    if(session!==undefined && bio!==""){
    return (
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
        console.log(session);
        console.log(bio);
        return<>
            <Navbar/>
            <h1 style={{display:'flex',justifyContent: 'center'}}>....Loading</h1>
            </>
    }

}
 
export default Profile;