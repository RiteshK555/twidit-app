const Home = () => {
    const [session,setSession
    return ( 
    <>
      Signed in as {session.user.name} <br/>
      <Button onClick={() => signOut()}>Sign out</Button>
    </>
    );
}
 
export default Home;