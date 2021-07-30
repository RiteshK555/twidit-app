import Navbar from '../components/Navbar';
import AddBio from '../components/addBio';
import {useState} from 'react';
import {useSession} from 'next-auth/client';
const Profile = () => {
    const [bio,setBio] =useState("");
    const [session,loading] = useSession();
    return (
        <>
            <Navbar/>
        <h3 style={{display:'flex',justifyContent: 'center',paddingBottom:}} >{session && session.user.name}</h3>
            { bio==="" 
            ?<AddBio/>  
            :<p>{bio}</p>
            }
        </>
    );
}
 
export default Profile;