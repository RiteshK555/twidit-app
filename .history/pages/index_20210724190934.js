import { signIn, signOut, useSession } from 'next-auth/client'
import Button from 'react-bootstrap/Button';
import Home from '../components/home';
import SignIn from '../components/signin';
export default function Page() {
  const [ session, loading ] = useSession()
  return <>
    {!session && 
    <>
    <div style={{paddingLeft:"35%",paddingTop:"10%"}}>
      <h1>
        Welcome to twidit!
      </h1>
        <div style={{paddingLeft:112}}>
            <Button onClick={() => signIn()} style={{margin:12}} variant="primary" size="lg">Sign In</Button>
        </div>
    </div>
    </>}
    {session && <Home/>}
  </>
}