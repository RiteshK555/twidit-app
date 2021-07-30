import Navbar from '../components/Navbar'
const Profile = () => {
    const [bio,setBio] =useState("");
    return (
        <>
            <Navbar/>
            {bio}
        </>
    );
}
 
export default Profile;