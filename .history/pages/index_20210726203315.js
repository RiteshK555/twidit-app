import { signIn, signOut, useSession } from 'next-auth/client'
import Home from '../components/home';
import SignIn from '../components/signin';

export default function Page() {
  const [ session, loading ] = useSession()
  return <>
    {!session && <SignIn />}
    {
    session && 
    <Home/>
                       <Button onClick={(e) => {
                        Router.push("/");
                        signOut();
                    }} variant="dark" size="sm" >Logout</Button> 
    }
  </>
}