import Navbar from '../components/Navbar';
// import useUser from '../lib/useUser'
import {FloatingLabel,Form,Button} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import {useSession} from 'next-auth/client';
import {db} from '../utils/firebase';
import {getSession} from 'next-auth/client'
var newBio=""
const Profile = () => {
    const [bio,setBio] =useState(newBio)
    const [dataFetch,setDataFetch]=useState(false);
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
                if(doc.data().bio===null)
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
                <div style={{paddingRight:12}}>
                    <h3 >Name : {session && session.user.name}</h3>
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
                    Bio : {bio}
                </div> 
            <Button size="sm" onClick={handleEdit}>Edit</Button>
            </div>
            </>
            }
        </>
    );
    }
    if(!dataFetch ){
        return<>
            <Navbar/>
            <h1 style={{display:'flex',justifyContent: 'center'}}>....Loading</h1>
            </>
    }

}
 
export default Profile;