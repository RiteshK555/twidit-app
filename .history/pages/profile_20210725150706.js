import Navbar from '../components/Navbar';
// import AddBio from '../components/addBio';
import {FloatingLabel,Form,Button} from 'react-bootstrap';
import {useState} from 'react';
import {useSession} from 'next-auth/client';
// import {Button} from 'react-bootstrap';
const Profile = () => {
    const [bio,setBio] =useState("");
    const [click,setClick] =useState(false);
    const [session,loading] = useSession();
    function textAreaHandler(e) {
        e.preventDefault();
        console.log(e);
    }
    function handleSubmit(e) {
        preventDefault();
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
            :<p>{bio}</p>
            }
        </>
    );
}
 
export default Profile;