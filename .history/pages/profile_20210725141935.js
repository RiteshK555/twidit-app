import Navbar from '../components/Navbar';
// import AddBio from '../components/addBio';
import {useState} from 'react';
import {useSession} from 'next-auth/client';
import {Button} from 'react-bootstrap';
const Profile = () => {
    const [bio,setBio] =useState("");
    const [click,setClick] =useState(false);
    const [session,loading] = useSession();
    function textAreaHandler(e) {
        // if(click) {
        //     setBio(e.target.value);
        // }
        e.preventDefault();
        console.log(e.target.textarea);

    }
    return (
        <>
            <Navbar/>
        <h3 style={{display:'flex',justifyContent: 'center',paddingBottom:12}} >Name : {session && session.user.name}</h3>
            { bio==="" 
            ?<div style={{display:'flex',justifyContent: 'center', paddingTop:2,paddingLeft:61}}>
                <form onSubmit={textAreaHandler}>
                    <textarea rows="4" cols="51" >
                    </textarea>
                    <br />
                    <Button type="submit" variant="primary">add Bio</Button>
                </form>
            </div>
            :<p>{bio}</p>
            }
        </>
    );
}
 
export default Profile;