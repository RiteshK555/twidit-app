import Navbar from '../components/Navbar';
// import AddBio from '../components/addBio';
import {FloatingLabel,Form,Button} from 'react-bootstrap';
import {useState} from 'react';
import {useSession} from 'next-auth/client';
// import {database} from '../pages/api/auth/[...nextauth]'
// import {Button} from 'react-bootstrap';
// const firebase =require('firebase/firestore');
const Profile = () => {
    // var db=firebase.firestore();
    // console.log(database);
    const [bio,setBio] =useState("");
    var newBio;
    const [session,loading] = useSession();
    function textAreaHandler(e) {
        newBio = e.target.value;
    }
    function handleSubmit(e) {
        setBio(newBio);
        e.preventDefault();
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