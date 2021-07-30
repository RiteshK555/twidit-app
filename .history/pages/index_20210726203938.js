import { signIn, signOut, useSession } from 'next-auth/client'
import Home from '../components/home';
import SignIn from '../components/signin';
import {Button} from "react-bootstrap";
export default function Page() {
  const [ session, loading ] = useSession()
  return <>
    {!session && <SignIn />}
    {
    session && <>
    <Home/>
    <Button style={{display:'flex', justifyContent: 'center',alignItems: 'center'}} onClick={(e) => {
      signOut();
      }} variant="dark" size="sm" >Logout</Button> 
    </>
    }
  </>
}