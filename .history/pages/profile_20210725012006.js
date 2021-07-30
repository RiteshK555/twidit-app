import Navbar from '../components/Navbar';
import AddBio from '../components/addBio';
import {useState} from 'react';
import {useSession} from 'next-auth/client';
const Profile = () => {
    const [bio,setBio] =useState("");
    const [session,loading] = useSession();
    return (
        <>
        {/* {console.log(session)} */}
        {/* <AddBio/>   */}
            {/* <Navbar/>
            { bio==="" 
            ?<AddBio/>  
            :<p>{bio}</p>
            } */}
        </>
    );
}
 
export default Profile;