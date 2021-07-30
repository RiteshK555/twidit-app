import { signIn, signOut, useSession } from 'next-auth/client'
import Button from 'react-bootstrap/Button';
export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {!session && 
    <>

      Not signed in <br/>
      <Button onClick={() => signIn()}>Sign in</Button>
    </>}
    {session && 
    <>
      Signed in as {session.user.name} <br/>
      <Button onClick={() => signOut()}>Sign out</Button>
    </>}
  </>
}