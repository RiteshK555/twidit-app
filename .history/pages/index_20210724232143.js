import { signIn, signOut, useSession } from 'next-auth/client'
import Home from '../components/home';
import SignIn from '../components/signin';
import Layout from '../components/layout';
export default function Page() {
  const [ session, loading ] = useSession()
  return <>
    {!session && <SignIn />}
    {session && <Home/>}
  </>
}