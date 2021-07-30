import { signOut,useSession } from 'next-auth/client';
import {Button} from 'react-bootstrap';
import Navbar from '../components/Navbar';

const Home = () => {
    const [session,setSessions] =useSession();
    return ( 
    <>
    <Navbar/>
    </>
    );
}
 
export default Home;