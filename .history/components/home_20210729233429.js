
import Navbar from '../components/Navbar';
import Post from '../components/post';
export async function getServerSideProps(context){
    const session = await getSession(context);
    var sessionUserId;
    const snapshot=await db.collection("users").where("name","==",session.user.name).get();
    snapshot.forEach((doc)=>{
        if(doc.data().name===session.user.name) {
            sessionUserId=doc.id;
        }
    })

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