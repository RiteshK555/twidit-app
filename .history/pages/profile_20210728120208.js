import Navbar from '../components/Navbar';
import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';
import {db} from '../utils/firebase';
import {getSession} from 'next-auth/client';
import firebase from 'firebase/app';
import "firebase/firestore";
import Post from "../components/post";
var fakeBio=""
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  var serverBio="";
  var serverPosts=[];
          await db.collection("users").where("name","==",session.user.name)
               .get()
               .then((querySnapshot) => {
                querySnapshot.forEach((doc)=>{
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
                if(doc.data().posts===undefined){
                  db.collection("users").doc(doc.id)
                    .update({
                        "posts":[]
                    })
                    .then(()=>{
                        console.log("posts feild added");
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }else{
                    serverPosts=doc.data().posts;
                }
            });
        })
        .catch((err)=>{
            console.log(err);
        })
  return ({props: {session,serverBio,serverPosts}})
}
const Profile = ({session,serverBio,serverPosts}) => {
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
        TwiditData:"",
        TwiditLikes:0
    }
    );
    const [fakeTwidit,setFakeTwidit] =useState({
        TwiditData:"",
        TwiditLikes:0
    });
    function handleTwidit(e) {
        e.preventDefault();
        function handleTwiditClient(){
            setTwidit(fakeTwidit);
            setPosts([...posts,fakeTwidit]);
        }
        handleTwiditClient();
        async function handleTwiditServerSide(){
        await db.collection("users").where("name","==",session.user.name)
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                db.collection("users").doc(doc.id)
                .update({
                    posts:firebase.firestore.FieldValue.arrayUnion(fakeTwidit)
                }).then(()=>{
                    console.log("updated");
                    setFakeTwidit({
                        TwiditData:e.target.value,
                        TwiditLikes:0 
        }
                    );
                })
                .catch((err)=>{
                    console.log(err);
                });

            })
        })
        .catch((err)=>{
            console.log(err);
        })
        }
        handleTwiditServerSide();

    }
    function twiditChange(e){
        setFakeTwidit({
           TwiditData:e.target.value,
           TwiditLikes:0 
        });
    }
    function handleEdit(){
        function handleEditClient(){
            setBio("");
        }
        handleEditClient();
    }
    return (
            <>
            <Navbar/>
            <div style={{display:'flex',justifyContent: 'center',paddingBottom:12}}>
                <div style={{paddingRight:12,paddingTop:23,paddingBottom:11}}>
                    <h3 >{session && session.user.name}</h3>
                </div>
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
                <Form.Control placeholder="Max length is 300 characters." as="textarea" value={fakeTwidit.TwiditData} onChange={twiditChange} rows={3} cols={50}/>
                </Form.Group>
                <Button  type="submit" variant="success">twidit</Button>
            </Form>
        </div>
        { 
            posts.map((post) => <Post likes={post.TwiditLikes}postsData={post.TwiditData}/>)
        }
        </>
        
    );

}
 
export default Profile;