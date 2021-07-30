const Home = () => {
    const [session,use
    return ( 
    <>
      Signed in as {session.user.name} <br/>
      <Button onClick={() => signOut()}>Sign out</Button>
    </>
    );
}
 
export default Home;