import { signIn, signOut, useSession } from 'next-auth/client'
import Button from 'react-bootstrap/Button';

export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {!session && 
    <>
    <div style={{paddingLeft:"35%",paddingTop:"10%"}}>
      <h1>
        Welcome to twidit!
      </h1>
        <div style={{paddingLeft:62}}>
            <Link href="/signin" >
            <Button onClick={() => signIn()} style={{margin:12}} variant="primary" size="lg">Sign In</Button>
            </Link>
        </div>
    </div>
      {/* Not signed in <br/>
      <Button onClick={() => signIn()}>Sign in</Button> */}
    </>}
    {session && 
    <>
      Signed in as {session.user.name} <br/>
      <Button onClick={() => signOut()}>Sign out</Button>
    </>}
  </>
}