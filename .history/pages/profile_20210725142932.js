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
        // if(click) {
        //     setBio(e.target.value);
        // }
        e.preventDefault();
        console.log(e);

    }
    return (
        <>
            <Navbar/>
        <h3 style={{display:'flex',justifyContent: 'center',paddingBottom:12}} >Name : {session && session.user.name}</h3>
            { bio==="" 
            ?<div style={{display:'flex',justifyContent: 'center', paddingTop:2,paddingLeft:61}}>
                {/* <form onSubmit={textAreaHandler}>
                    <textarea rows="4" cols="51" >
                    </textarea>
                    <br />
                    <Button type="submit" variant="primary">add Bio</Button>
                </form> */}
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} cols={50}/>
                    <Button style={{paddingTop}} type="submit" variant="primary">add Bio</Button>
                  </Form.Group>
            </div>
            :<p>{bio}</p>
            }
        </>
    );
}
 
export default Profile;