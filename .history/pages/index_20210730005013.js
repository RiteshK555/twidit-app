import { signIn, signOut, useSession } from 'next-auth/client'
import Home from '../components/home';
import SignIn from '../components/signin';
import {Button} from "react-bootstrap";
import {getSession} from "next-auth/client";
import {db} from '../utils/firebase'
export async function getServerSideProps(context){
    var AllPosts=[];
  const session = await getSession(context);
  if(session){
    var sessionUserId;
    const snapshot=await db.collection("users").where("name","==",session.user.name).get();
    snapshot.forEach((doc)=>{
        if(doc.data().name===session.user.name) {
            sessionUserId=doc.id;
        }
    })
    console.log(sessionUserId);
    // const followingSnapshot=await db.collection("users").doc(sessionUserId).collection("following").get()
    // followingSnapshot.forEach((doc)=>{
    //   console.log(doc.data());
    // })
  }

    //   followingSnapshot.forEach((doc)=>{
    //     console.log("name");
    //     var followingUserId;
    //     const nameFollowing=doc.data().name;
    //     console.log("name");
    //     console.log(nameFollowing);
    //     const snapshotFollowing= db.collection("users").where("name","==",session.user.name).get();
    //     snapshotFollowing.forEach((doc)=>{
    //     if(doc.data().name===nameFollowing) {
    //         followingUserId=doc.id;
    //     }
    //     const snapshotPosts=  db.collection("users").doc(followingUserId).collection("posts").where("time","<=",Date.now()-5184000).get();
    //     snapshotPosts.forEach((doc)=>{
    //         AllPosts.push(doc.data());
    //     })
    //     console.log(snapshotPosts);
    // })
    // })
    // .catch((err)=>{
    //   console.log(err);
    // })
    // console.log("hi");
    return {
        props:{
            AllPosts
        }
    }
}
export default function Page({AllPosts}) {
  // console.log(AllPosts);
  // console.log("bye");
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