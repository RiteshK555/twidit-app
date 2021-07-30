import Navbar from '../components/Navbar';
import {FloatingLabel,Form,Button} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import {useSession} from 'next-auth/client';
import {getUsers} from '../utils/users';
import {db} from '../utils/firebase';
const Profile = () => {
    var newBio="";
    const [bio,setBio] =useState(newBio)
    const [session,loading] = useSession();
    setInterval(() =>{
        if(session==null){

        }else{
    db.collection("users").where("name","==",session.user.name)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc)=>{
                newBio=doc.data().bio;
            });
    })
    clearInterval
        }

    },1000);
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