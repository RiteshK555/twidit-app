import Navbar from '../components/Navbar';
import {FloatingLabel,Form,Button} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import {useSession} from 'next-auth/client';
import {db} from '../utils/firebase';
import {getSession} from 'next-auth/client';
var newBio=""
const Profile = () => {
    const [bio,setBio] =useState(newBio)
    const [dataFetch,setDataFetch]=useState(false);
    var limitedInterval=setInterval( async() =>{
        const session=await getSession();
        if(session===undefined || session===null){;
        }else{ 
         await db.collection("users").where("name","==",session.user.name)
               .get()
               .then((querySnapshot) => {
                   console.log("query");
            querySnapshot.forEach((doc)=>{
                setDataFetch(true);
                setBio(doc.data().bio);
            });
                clearInterval(limitedInterval);
        })
        .catch((err)=>{
            console.log(err);
        });

        }
        },1000);

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
                // console.log(doc);
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
    if(session!==undefined && dataFetch){
    return (
            <>
            <Navbar/>
        <h3 style={{display:'flex',justifyContent: 'center',paddingBottom:12}} >Name : {session && session.user.name}</h3>
            { 
            bio==="" 
            ?<div style={{display:'flex',justifyContent: 'center', paddingTop:2,paddingLeft:61}}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control  as="textarea" onChange={textAreaHandler} rows={3} cols={50}/>
                  </Form.Group>
                    <Button  type="submit" variant="primary">add Bio</Button>
                </Form>
            </div>
            :<p style={{display:'flex',justifyContent: 'center', paddingTop:2,paddingLeft:11}}>Bio : {bio}</p>
            
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