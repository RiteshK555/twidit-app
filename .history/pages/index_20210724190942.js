import { signIn, signOut, useSession } from 'next-auth/client'
import Button from 'react-bootstrap/Button';
import Home from '../components/home';
import SignIn from '../components/signin';
export default function Page() {
  const [ session, loading ] = useSession()
  return <>
    {!session && }
    {session && <Home/>}
  </>
}