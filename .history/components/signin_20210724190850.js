import { signIn,useSession } from 'next-auth/client';
import {Button} from 'react-bootstrap';
const SignIn = () => {
    return ( 
    <>
      Signed in as {session.user.name} <br/>
      <Button onClick={() => signOut()}>Sign out</Button>
    </>
    );
}
 
export default SignIn;