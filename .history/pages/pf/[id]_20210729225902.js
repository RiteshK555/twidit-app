import Navbar from '../../components/Navbar';
import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';
import {db} from '../../utils/firebase';
import {getSession} from 'next-auth/client';
import "firebase/firestore";
import Post from "../../components/post";
var fakeBio=""
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  var serverBio="";
  var serverPosts=[];
  const uId=ctx.params.id;
            const snapshot1=await db.collection("users").doc(uId).get();
            console.log(snapshot1);
            var name=snapshot1.data().name;
            const snapshot=await db.collection("posts").where("name","==",name).get()  
            snapshot.forEach((doc) => {
                serverPosts.push({
                    name:doc.data().name,
                    id:doc.id,
                    likes:doc.data().likes,
                    data:doc.data().data
                });
            })
           const snapshot2=await db.collection("users").where("name","==", name).get()
           snapshot2.forEach((doc)=>{
                if(doc.data().bio===undefined){
                    db.collection("users").doc(doc.id).update({
                        bio:""
                    }).then(() =>{
                        console.log("new User created");
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }else{
                    serverBio=doc.data().bio;
                }
           })
           const followerSnapshot=await db.collection("users").where("name","==",name).get();
           var follwerId,isFollowing;
           isFollowing=false;
           followerSnapshot.forEach((doc)=>{
                follwerId=doc.id;
           })
          const followSnapshot= await db.collection("users").doc(follwerId).collection("followers").get();
          followSnapshot.forEach((doc)=>{
              if(doc.data().name===session.user.name) {
                  isFollowing=true;
              }
          })                         
  return {
      props: {
         serverPosts,
         session,
         serverBio,
          name,
          isFollowing
        },
    }
}
const Profile = ({serverPosts,session,serverBio,name,isFollowing}) => {
    // const [isUser,setIsUser]=setState(false);

    console.log(serverPosts);
    const [bio,setBio] =useState(serverBio);
    const [posts,setPosts] = useState(serverPosts);
    function textAreaHandler(e) {
        fakeBio=e.target.value;
    }
    function handleSubmit(e) {
        e.preventDefault();
        function handleSubmitClient() {
            setBio(fakeBio);
        }
        handleSubmitClient();
        async function handleSubmitServer(){
        await db.collection("users").where("name","==",session.user.name)
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                db.collection("users").doc(doc.id)
                .update({
                    "bio":fakeBio
                })
                .then(()=>{
                    console.log("added");
                })
                .catch((err)=>{
                    console.log("error");
                });
            });
        })
        .catch((err)=>{
            console.log(err);
        })
        }
        handleSubmitServer();

    }
    const [twidit,setTwidit] =useState({
        data:"",
        likes:0
    }
    );
    const [fakeTwidit,setFakeTwidit] =useState({
        data:"",
        likes:0
    });
    function handleTwidit(e) {
        e.preventDefault();
        function handleTwiditClient(){
            setTwidit(fakeTwidit);
            async function handleIdClient(){
                const snapshot1= await db.collection("posts").where("data", "==",fakeTwidit.data).get();
                snapshot1.forEach((doc)=>{
                    setPosts([{data:doc.data().data,likes:doc.data().likes,id:doc.id,name:doc.data().name},...posts]);
                })
            }
            handleIdClient();
        }
        handleTwiditClient();
        async function handleTwiditServerSide(){
            await db.collection("posts").add({
                name:session.user.name,
                data:fakeTwidit.data,
                likes:0
            })
            .then(()=>{
                setFakeTwidit({
                    data:"",
                    likes:0
                });
            });
        }
        handleTwiditServerSide();

    }
    function twiditChange(e){
        setFakeTwidit({
           data:e.target.value,
            likes:0 
        });
    }
    function handleEdit(){
        function handleEditClient(){
            setBio("");
        }
        handleEditClient();
    }
    function handleDeletePost(e){
        function handleDeletePostClient(){
            setPosts(posts.filter(post=> post.id!==e.target.value))
            // console.log(e.target.value);
        }
        handleDeletePostClient();
        async function handleDeletePostServer(){
            await db.collection("posts").doc(e.target.value).delete();
        }
        handleDeletePostServer();
    }
    const [follow,setFollow] =useState(isFollowing?"light":"warning")
    function handleFollow(){
        if(follow==="warning"){
            setFollow("light");
        }else{
            setFollow("warning")
        }
        async function handleFollowServer(){
             const snapshot1=await db.collection("users").where("name","==",name).get();
            var idHandleFollowServer;
                snapshot1.forEach((doc)=>{
                    idHandleFollowServer=doc.id;
                });
                var id22;
            if(follow==="warning"){
                var name1;
                const snapshotFollowServer=await db.collection("users").doc(idHandleFollowServer).collection("followers").get();
                snapshotFollowServer.forEach((doc)=>{
                    if(session.user.name===doc.data().name){
                        id22=doc.id;
                        name1=session.user.name;
                    }
                })
                await db.collection("users").doc(idHandleFollowServer).collection("followers")
                    .add({
                        name:session.user.name
                    });
                await db.collection("users").doc(name1).collection("following")
                .add({
                    name:name,
                })
            }else{
                var docIDD;
                const snap=await db.collection("users").doc(id22).collection("following").where(;
                snap.forEach((doc)=>{

                })
                // await db.collection("users").doc(idHandleFollowServer).collection("followers").doc(idHandleFollowServer).delete();
                await db.collection("users").doc(idHandleFollowServer).collection("followers").doc(id22).delete();
            }
        }
        handleFollowServer();
    }
    function handleAsyncLikePost(e){
        // async  function handleAsyncLikePost2(){
        //     const snapshot=await db.collection("users").where("name","==",session.user.name).get();
        //     var asyncLikePost;
        //     snapshot.forEach((doc)=>{
        //         asyncLikePost=doc.id
        //     })
        //     const snapshot2=await db.collection("users").doc(asyncLikePost).collection("posts").doc(e.target.id)
        //                     .update({

        //                     })

        // }
    }
    return (
            <>
            <Navbar/>
            <div style={{display:'flex',justifyContent: 'center',paddingBottom:12}}>
                <div style={{paddingRight:12,paddingTop:23,paddingBottom:11}}>
                    <h3 >{session && name}</h3>
                </div>
            </div>
            {
                name!==session.user.name &&<>
                <div style={{display: 'flex',justifyContent: 'center',paddingBottom:12}}>
                <Button  variant={follow} onClick={handleFollow}>
                    {follow==="warning"?"Follow":"Following"}
                </Button>
            </div>
                </>
            }

            { 
            bio==="" 
            ?<div style={{display:'flex',justifyContent: 'center', paddingTop:2,paddingLeft:61}}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control placeholder="Max length is 250 characters." as="textarea" onChange={textAreaHandler}  rows={3} cols={50}/>
                  </Form.Group>
                    <Button  type="submit" variant="primary">add Bio</Button>
                </Form>
            </div>
            :<>
            <div style={{display:'flex',justifyContent: 'center', paddingTop:2,paddingLeft:11}}>
                <div style={{paddingRight:12,paddingTop:5}}>
                    {bio}
                </div> 
            {session.user.name===name?<Button size="sm" onClick={handleEdit}>Edit</Button>:<></>}
            </div>
            </>
            }
    {name===session.user.name?<>
        <div style={{display:'flex',justifyContent: 'center', paddingTop:22,paddingLeft:61}}>
            <Form onSubmit={handleTwidit}>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Max length is 300 characters." as="textarea" value={fakeTwidit.data} onChange={twiditChange} rows={3} cols={50}/>
                </Form.Group>
                <Button  type="submit" variant="success">twidit</Button>
            </Form>
        </div>
    </>:
    <></>
    }

        { 
            posts.map((post) => <Post boolButton={session.user.name===name} id={post.id} handleAsyncLikePost={handleAsyncLikePost} likes={post.likes} postsData={post.data} handleDelete={handleDeletePost}/>)
        }
        </>
        
    );

}
 
export default Profile;