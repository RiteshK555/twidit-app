import { signIn } from 'next-auth/client';
import {Button} from 'react-bootstrap';
const SignIn = () => {
    return ( 
    <>
    <div style={{paddingLeft:"35%",paddingTop:"10%"}}>
      <h1>
        Welcome to twidit!
      </h1>
        <div style={{paddingLeft:112}}>
            <Button onClick={() => signIn()} style={{margin:12}} variant="primary" size="lg">Sign In</Button>
        </div>
    </div>
    </>
    );
}
 
export default SignIn;