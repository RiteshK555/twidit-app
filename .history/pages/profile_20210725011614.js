import Navbar from '../components/Navbar';
import AddBio from '../components/addBio';
import {useState} from 'react';
const Profile = () => {
    const [bio,setBio] =useState("");
    return (
        <>
        {console.log(session)}
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