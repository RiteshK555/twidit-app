
import Navbar from '../components/Navbar';
import Post from '../components/post';
export async function getServerSideProps(context){
    const session = await getSession(context);
    var sessionUserId;
    await db.clle
}
const Home = () => {
    return ( 
    <>
    <Navbar/>
    <h1 style={{display: 'flex',justifyContent: 'center'}}>
        follow people to get feed
    </h1>
    </>
    );
}
 
export default Home;