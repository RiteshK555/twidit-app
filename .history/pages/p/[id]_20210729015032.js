import {db} from '../../utils/firebase';
import {getSession} from 'next-auth/client';
import Post from '../../components/post';
import {Form,Button,Card} from 'react-bootstrap';
import {useState} from 'react';
import { DvrTwoTone } from '@material-ui/icons';
export async function getServerSideProps(context){
    const session=await getSession(context);
    const params=context.params;
    // const snapshot1=await db.collection("posts").where("name","==",session.user.name).get();
    // var snapshot1Id;
    const doc=await db.collection("posts").doc(params.id).get();
     var post=doc.data()
     console.log(doc.data());
    //  console.log(snapshot1);
    // snapshot1.forEach((doc) =>{
    //     post = doc.data().data;
    // })
    // const snapshot2=await db.collection("users").doc(snapshot1Id).collection("posts").get()
    // var post;
    // snapshot2.forEach((doc) =>{
    //     if(doc.id===params.id){
    //         post=doc.data();
    //     }
    // });
    return {
        props:{
            post,params,session
        }
    }
}
const Id = ({post,params,session})=> {
    const [comment,setComment] =useState("");
    const [fakeComment,setFakeComment] =useState("");
    function handleSubmitComment(){
        setComment(fakeComment);
        async function handleSubmitCommentServer(){
            const snapshot = await db.collection("users").where("name", "==",session.user.name).get();
            var snapshotHandleSubmitId;
            snapshot.forEach((doc)=>{
                snapshotHandleSubmitId =doc.id;
            })
            await db.collection("users").doc(snapshotHandleSubmitId).collection("posts").doc(params.id)
            .collection("comments").add({
               comment:fakeComment 
            })
        }
        handleSubmitCommentServer();
    }
    function commentHandler(e){
        setFakeComment(e.target.value);
        console.log(fakeComment);
    }
    return ( 
        <>
            <Post id={params.id} likes={post.likes} postsData={post.data}/>
            <div style={{display:'flex',justifyContent: 'center', paddingTop:22,paddingLeft:61}}>
            <Form onSubmit={handleSubmitComment}>
              <Form.Group className="mb-3">
                <Form.Control value={fakeComment} onChange={commentHandler} placeholder="Max length is 300 characters." as="textarea"rows={3} cols={50}/>
                </Form.Group>
                <Button  type="submit" variant="success">Comment</Button>
            </Form>
            </div>
            {

            }
        </>
     );
}
 
export default Id;