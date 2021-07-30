import { signIn, signOut, useSession } from 'next-auth/client'
import Home from '../components/home';
import SignIn from '../components/signin';
import {Button} from "react-bootstrap";
import {getSession} from "next-auth/client"
...
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  return ({props: {session}})
}
export default function Page() {
  const [ session, loading ] = useSession()
  return <>
    {!session && <SignIn />}
    {
    session && <>
    <Home/>
    <div style={{display:'flex', justifyContent: 'center',alignItems: 'center'}}>
    <Button  onClick={(e) => {
      signOut();
      }} variant="dark" size="sm" >Logout</Button>       
    </div>
    </>
    }
  </>
}