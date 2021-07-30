
import Navbar from '../components/Navbar';
import Post from '../components/post';
// import "firebase/firestore";
// import firebase from 'firebase/app';
export async function getServerSideProps(context){
    const session = await getSession(context);
    var sessionUserId;
    const snapshot=await db.collection("users").where("name","==",session.user.name).get();
    snapshot.forEach((doc)=>{
        if(doc.data().name===session.user.name) {
            sessionUserId=doc.id;
        }
    })
    var AllPosts=[];
    const followingSnapshot=await db.collection("users").doc(sessionUserId).collection("following").get();
    followingSnapshot.forEach((doc)=>{
        var followingUserId;
        const nameFollowing=doc.data().name;
        const snapshotFollowing=await db.collection("users").where("name","==",session.user.name).get();
        snapshotFollowing.forEach((doc)=>{
        if(doc.data().name===nameFollowing) {
            followingUserId=doc.id;
        }
          const   await db.collection("users").doc(followingUserId).collection("posts").where("time","<=",Date.now()-5184000).get();

    })
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