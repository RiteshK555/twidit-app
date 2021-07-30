import Navbar from '../components/Navbar';
// import useUser from '../lib/useUser'
import {FloatingLabel,Form,Button} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import {useSession} from 'next-auth/client';
import {db} from '../utils/firebase';
import {getSession} from 'next-auth/client';
import firebase from 'firebase/app';
import "firebase/firestore";
import Post from "../components/post";
import CachedIcon from '@material-ui/icons/Cached';
var newBio=""
const Profile = () => {
    const [bio,setBio] =useState(newBio)
    const [dataFetch,setDataFetch]=useState(false);
    const [posts,setPosts] = useState([]);
    async function fun(){
    const session=await getSession();
    var limitedInterval=setInterval(() =>{
        if(session===undefined || session===null){;
        }else{ 
                db.collection("users").where("name","==",session.user.name)
               .get()
               .then((querySnapshot) => {
                   console.log("query");
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
                }
                setDataFetch(true);
                setBio(doc.data().bio);
            });
                if(dataFetch===true) {
                    clearInterval(limitedInterval);
                }
        })
        .catch((err)=>{
            console.log(err);
        });

        }
        },1000);
    }
    fun();
    const [session,loading] = useSession();
    function textAreaHandler(e) {
        newBio = e.target.value;
    }
    function handleSubmit(e) {
        console.log("handleclick");
        e.preventDefault();
        db.collection("users").where("name","==",session.user.name)
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                db.collection("users").doc(doc.id)
                .update({
                    "bio":newBio
                })
                .then(()=>{
                    console.log("added");
                    setDataFetch(true);
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
    const [twidit,setTwidit] =useState("")
    function handleTwidit(e) {
        e.preventDefault();
        db.collection("users").where("name","==",session.user.name)
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                db.collection("users").doc(doc.id)
                .update({
                    posts:firebase.firestore.FieldValue.arrayUnion(twidit)
                }).then(()=>{
                    setDataFetch(false);
                    db.collection("users").where("name","==",session.user.name)
                    .get()
                    .then((querySnapshot)=>{
                        querySnapshot.forEach((doc)=>{
                            setPosts(doc);
                        })
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                })

            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    function twiditChange(e){
        setTwidit(e.target.value);
    }
    function handleEdit(){
        db.collection("users").where("name","==",session.user.name)
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                db.collection("users").doc(doc.id)
                .update({
                    "bio":""
                })
                .then(()=>{
                    console.log("updated");
                    // setDataFetch(true);
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
    if(session!==undefined && dataFetch){
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
                    <Form.Control placeholder="Max length is 250 characters." as="textarea" onChange={textAreaHandler} rows={3} cols={50}/>
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
                <Form.Control placeholder="Max length is 300 characters." as="textarea" onChange={twiditChange} rows={3} cols={50}/>
                </Form.Group>
                <Button  type="submit" variant="success">twidit</Button>
            </Form>
        </div>
        {
            for(int i=0;i<posts.length;i++) {
                
            }
        }
        </>
        
    );
    }
    if(!dataFetch ){
        return<>
            <Navbar/>
            <div style={{display:'flex',margin:100,justifyContent: 'center'}}>
                {/* <h1 >....Loading</h1> */}
                <CachedIcon  style={{fontSize:123}}/>
            </div>

            </>
    }

}
 
export default Profile;