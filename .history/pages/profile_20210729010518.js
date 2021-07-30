import Navbar from '../components/Navbar';
import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';
import {db} from '../utils/firebase';
import {getSession} from 'next-auth/client';
// import firebase from 'firebase/app';
import "firebase/firestore";
import Post from "../components/post";
var fakeBio=""
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  var serverBio="";
  var serverPosts=[];
           const snapshot=await db.collection("posts").where("name","==",session.user.name).get()  
            snapshot.forEach((doc) => {
                serverPosts.push(doc.data());
            })
           const snapshot2=await db.collection("users").where("name","==",session.user.name).get()
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
  return {
      props: {
         serverPosts,
         session,
         serverBio,
          
        },
    }
}
const Profile = ({serverPosts,session,serverBio}) => {
    const [bio,setBio] =useState(serverBio)
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
                const snapshot1= await db.collection("posts").where("name", "==",session.user.name).get();
                snapshot1.forEach(
                // const snapshot1=await db.collection("users").where("name", "==",session.user.name).get();
                // var idHandleClient;
                // snapshot1.forEach((doc) =>{
                //     idHandleClient=doc.id;
                // })
                // const snapshot2=await db.collection("users").doc(idHandleClient).collection("posts").where("data","==",fakeTwidit.data).get();
                // snapshot2.forEach((doc)=>{
                //     setPosts([{data:fakeTwidit.data,likes:0,id:doc.id},...posts])
                // });
            }
            handleIdClient();
        }
        handleTwiditClient();
        async function handleTwiditServerSide(){
            const snapshot1 = await db.collection("users").where("name", "==",session.user.name).get();
            var snapshot1Id;
            snapshot1.forEach((doc)=>{
                snapshot1Id =doc.id
            })
            await db.collection("posts").add({
                name:session.user.name,
                id:snapshot1Id,
                data:fakeTwidit.data,
                likes:0
            })
        // await db.collection("users").where("name","==",session.user.name)
        // .get()
        // .then((querySnapshot)=>{
        //     querySnapshot.forEach((doc)=>{
        //         db.collection("users").doc(doc.id)
        //         .collection("posts")
        //         .add({
        //                 data:fakeTwidit.data,
        //                 likes:fakeTwidit.likes
        //         })
        //         .then(()=>{
        //             setFakeTwidit({
        //                 data:"",
        //                 likes:0
        //             });
        //         })
        //         .catch((err)=>{
        //             console.log(err);
        //         })
        //     })
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
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
            const snapshotHandleDeletePostServer=await db.collection("users").where("name","==",session.user.name).get();
            var handleDeleteIdPostServer;
            snapshotHandleDeletePostServer.forEach((doc)=>{
                handleDeleteIdPostServer=doc.id;
            })
            await db.collection("users").doc(handleDeleteIdPostServer).collection("posts").doc(e.target.value).delete();
        }
        handleDeletePostServer();
    }
    const [follow,setFollow] =useState("warning")
    function handleFollow(){
        if(follow==="warning"){
            setFollow("light");
        }else{
            setFollow("warning")
        }
        async function handleFollowServer(){
             const snapshot1=await db.collection("users").where("name","==",session.user.name).get();
            var idHandleFollowServer;
                snapshot1.forEach((doc)=>{
                    idHandleFollowServer=doc.id;
                });
            if(follow==="warning"){
                await db.collection("users").doc(idHandleFollowServer).collection("followers").doc(idHandleFollowServer)
                    .set({
                        name:session.user.name
                    });
            }else{
                await db.collection("users").doc(idHandleFollowServer).collection("followers").doc(idHandleFollowServer).delete();
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
                    <h3 >{session && session.user.name}</h3>
                </div>
            </div>
            <div style={{display: 'flex',justifyContent: 'center',paddingBottom:12}}>
                <Button  variant={follow} onClick={handleFollow}>
                    {follow==="warning"?"Follow":"Following"}
                </Button>
            </div>
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
            <Button size="sm" onClick={handleEdit}>Edit</Button>
            </div>
            </>
            }
        <div style={{display:'flex',justifyContent: 'center', paddingTop:22,paddingLeft:61}}>
            <Form onSubmit={handleTwidit}>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Max length is 300 characters." as="textarea" value={fakeTwidit.data} onChange={twiditChange} rows={3} cols={50}/>
                </Form.Group>
                <Button  type="submit" variant="success">twidit</Button>
            </Form>
        </div>
        { 
            posts.map((post) => <Post id={post.id} handleAsyncLikePost={handleAsyncLikePost} likes={post.likes} postsData={post.data} handleDelete={handleDeletePost}/>)
        }
        </>
        
    );

}
 
export default Profile;