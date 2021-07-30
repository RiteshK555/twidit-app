const SignIn = () => {
    return ( 
    <>
      Signed in as {session.user.name} <br/>
      <Button onClick={() => signOut()}>Sign out</Button>
    </>
    );
}
 
export default SignIn;