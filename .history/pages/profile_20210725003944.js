import Navbar from '../components/Navbar';
import AddBio from '../components/addBio';
import {useState}
const Profile = () => {
    const [bio,setBio] =useState("");
    return (
        <>
            <Navbar/>
            {(bio==="")?<AddBio/>:bio}
        </>
    );
}
 
export default Profile;