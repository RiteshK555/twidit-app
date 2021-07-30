import { signIn, signOut, useSession } from 'next-auth/client'
import Home from '../components/home';
import SignIn from '../components/signin';
import {Button} from "react-bootstrap";
import {getSession} from "next-auth/client";
import {db} from '../utils/firebase'
import Post from '../components/post';
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
    const followingSnapshot=await db.collection("users").doc(sessionUserId).collection("following").get();
    var followingArray=[];
    followingSnapshot.forEach((doc)=>{
        followingArray.push({followingUserId:doc.id,followingUser:doc.data().name})
    })
    for(var i=0;i<followingArray.length;i++){
        const snapshotPosts=await db.collection("posts").where("name","==",followingArray[i].followingUser).get();
        snapshotPosts.forEach((doc)=>{
          if(doc.data().time>=Date.now()-86400000)
          {
              AllPosts.push(doc.data());

          }

        })
    }
  }
    return {
        props:{
            AllPosts,session
        }
    }
}
export default function Page({AllPosts,session}) {
  async function handleAsyncLikePost() {
    console.log("liked");
  }
  console.log(AllPosts);
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
        { 
            AllPosts.map((post) => <Post boolButton={false} id={post.id} handleAsyncLikePost={handleAsyncLikePost} likes={post.likes} postsData={post.data} />)
        }
    </>
    }
  </>
}