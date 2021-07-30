import Navbar from '../components/Navbar';
// import AddBio from '../components/addBio';
import {useState} from 'react';
import {useSession} from 'next-auth/client';
import {Button} from 'react-bootstrap'
const Profile = () => {
    const [bio,setBio] =useState("");
    const [session,loading] = useSession();
    return (
        <>
            <Navbar/>
        <h3 style={{display:'flex',justifyContent: 'center',paddingBottom:12}} >{session && session.user.name}</h3>
            { bio==="" 
            ?<div style={{display:'flex',justifyContent: 'center', paddingTop:122}}>
                <form>
                    <textarea rows="1" cols="123">
                
                    </textarea>
                    <Button type="submit" variant="primary">add Bio</Button>
                </form>
            add Bio
            </div>
            :<p>{bio}</p>
            }
        </>
    );
}
 
export default Profile;