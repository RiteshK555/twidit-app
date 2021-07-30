import 
const Home = () => {
    const [session,setSessions] =useSession();
    return ( 
    <>
      Signed in as {session.user.name} <br/>
      <Button onClick={() => signOut()}>Sign out</Button>
    </>
    );
}
 
export default Home;