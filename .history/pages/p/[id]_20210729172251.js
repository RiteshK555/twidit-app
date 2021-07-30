import {db} from '../../utils/firebase';
import {getSession} from 'next-auth/client';
import Post from '../../components/post';
import {Form,Button,Card} from 'react-bootstrap';
import {useState} from 'react';
export async function getServerSideProps(context){
    const session=await getSession(context);
    const params=context.params;
    const doc=await db.collection("posts").doc(params.id).get();
     var post=doc.data();
    const doc2=await db.collection("comments").where("pid","==",params.id).get()
    var commentsData=[];
    doc2.forEach((doc) => {
        commentsData.push({
            id:doc.id,
            comment:doc.data().comment,
            name:session.user.name,
            pid:doc.data().pid
        })
    })
    return {
        props:{
            post,params,session,commentsData
        }
    }
}
const Id = ({post,params,session,commentsData})=> {
    const [comments,setComments] =useState(commentsData);
    const [fakeComment,setFakeComment] =useState("");
    console.log(comments)
    function handleSubmitComment(e){
        e.preventDefault();
        async function handleSubmitId(){
            const snapshot1=await db.collection("comments").where("comment","==",fakeComment).get()
            snapshot1.forEach((doc)=>{
            setComments([{
                id:doc.id,
                pid:params.id,
                name:session.user.name,
                comment:fakeComment
            },...comments]);
            })
            console.log(comments);
        } 
        handleSubmitId();
        async function handleSubmitCommentServer(){
            await db.collection("comments")
            .add({
                pid:params.id,
                name:session.user.name,
                comment:fakeComment
            })
            setFakeComment("");
        }
        handleSubmitCommentServer();
    }
    function commentHandler(e){
        setFakeComment(e.target.value);
    }
    function handleDelete(e){
        setComments(comments.filter((comment)=>comment.id!==e.target.id));
        async function handleDeleteServer(){
            await db.collection("comments").doc(e.target.id).delete();
        }
        handleDeleteServer();
    }
    return ( 
        <>
            <Post boolButton={false} id={params.id} likes={post.likes} postsData={post.data}/>
            <div style={{display:'flex',justifyContent: 'center', paddingTop:22,paddingLeft:61}}>
            <Form onSubmit={handleSubmitComment}>
              <Form.Group className="mb-3">
                <Form.Control value={fakeComment} onChange={commentHandler} placeholder="Max length is 300 characters." as="textarea"rows={3} cols={50}/>
                </Form.Group>
                <Button  type="submit" variant="success">Comment</Button>
            </Form>
            </div>
            {
                comments.map((comment)=><>
                        <div style={{marginLeft:411,marginRight:345,marginTop:20,marginBottom:20}}>
                        <Card style={{display: 'flex',justifyContent: 'center'}}>
                        <Card.Body>
                        {comment.comment}
                        {sess}
                        </Card.Body>
                        <div style={{display: 'flex',justifyContent: 'center',paddingLeft:445,marginBottom:12}}>
                            {(comment.name===session.user.name)===true ?<Button id={comment.id} onClick={handleDelete} size="sm" variant="danger">delete</Button>:<></>}
                        </div>
                        </Card>
                        </div>  
                    </>
               )
            }
        </>
     );
}
 
export default Id;