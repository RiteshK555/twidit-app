
import Navbar from '../components/Navbar';
export async function getServerSideProps()
const Home = () => {
    // const [session,setSessions] =useSession();
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