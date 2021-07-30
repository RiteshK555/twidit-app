import { signOut,useSession } from 'next-auth/client';
import {Button} from 'react-bootstrap';
import Navbar from '../components/Navbar';

const Home = () => {
    const [session,setSessions] =useSession();
    return ( 
    <>
    <Navbar></Navbar>
      {/* <div style={{paddingLeft:"90%"}}>
        <Button variant="dark" onClick={() => signOut()}>Sign out</Button>
      </div> */}
    </>
    );
}
 
export default Home;