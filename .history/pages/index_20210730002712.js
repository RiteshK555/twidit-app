import { signIn, signOut, useSession } from 'next-auth/client'
import Home from '../components/home';
import SignIn from '../components/signin';
import {Button} from "react-bootstrap";
import {getSession} from "next-auth/client";
import {db} from '../utils/firebase'
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
        const snapshotFollowing= db.collection("users").where("name","==",session.user.name).get();
        snapshotFollowing.forEach((doc)=>{
        if(doc.data().name===nameFollowing) {
            followingUserId=doc.id;
        }
        const snapshotPosts=  db.collection("users").doc(followingUserId).collection("posts").where("time","<=",Date.now()-5184000).get();
        snapshotPosts.forEach((doc)=>{
            AllPosts.push(doc.data());
        })
    })
    })
    return {
        props:{
            AllPosts
        }
    }
}
export default function Page() {
  console.log(AllPosts);
  const [ session, loading ] = useSession()
  return <>
    {!session && <SignIn />}
    {
    session && <>
    <Home/>
    <div style={{display:'flex', justifyContent: 'center',alignItems: 'center'}}>
    <Button  onClick={(e) => {
      signOut();
      }} variant="dark" size="sm" >Logout</Button>       
    </div>
    </>
    }
  </>
}