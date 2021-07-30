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
        commentsData.push(doc.data())
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
    function handleSubmitComment(e){
        e.preventDefault(); 
        setComments([{
            pid:params.id,
            name:session.user.name,
            comment:fakeComment
        },...comments]);
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
                        </Card.Body>
                        <div style={{display: 'flex',justifyContent: 'center',paddingLeft:445,marginBottom:12}}>
                        <Button onClick={handleDelete} size="sm" variant="danger">
                            delete
                        </Button>
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