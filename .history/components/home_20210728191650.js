import { signOut,useSession } from 'next-auth/client';
import {Button} from 'react-bootstrap';
import Navbar from '../components/Navbar';

const Home = () => {
    // const [session,setSessions] =useSession();
    return ( 
    <>
    <Navbar/>
    <h1 style={{display: 'flex',justifyContent: 'center'}}>
        
    </h1>
    </>
    );
}
 
export default Home;