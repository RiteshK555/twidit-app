import { signOut,useSession } from 'next-auth/client';
import {Button} from 'react-bootstrap';
const Home = () => {
    const [session,setSessions] =useSession();
    return ( 
    <>
      Signed in as {session.user.name} <br/>
      <Button variant= onClick={() => signOut()}>Sign out</Button>
    </>
    );
}
 
export default Home;