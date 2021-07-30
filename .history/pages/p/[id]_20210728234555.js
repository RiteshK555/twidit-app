import {db} from '../../utils/firebase';
import {getSession} from 'next-auth/client';
import Post from '../../components/post';
import {Form,Button} from 'react-bootstrap';
export async function getServerSideProps(context){
    const session=await getSession(context);
    const params=context.params;
    const snapshot1=await db.collection("users").where("name","==",session.user.name).get();
    var snapshot1Id;
    snapshot1.forEach((doc) =>{
        snapshot1Id = doc.id
    })
    const snapshot2=await db.collection("users").doc(snapshot1Id).collection("posts").get()
    var post;
    snapshot2.forEach((doc) =>{
        if(doc.id===params.id){
            post=doc.data();
        }
    });
    return {
        props:{
            post,params
        }
    }
}
const Id = ({post,params})=> {
    const [comments,setComments] =useState([]);
    function handleSubmitComment(){

    }
    return ( 
        <>
            <Post id={params.id} likes={post.likes} postsData={post.data}/>
            <div style={{display:'flex',justifyContent: 'center', paddingTop:22,paddingLeft:61}}>
            <Form onSubmit={handleSubmitComment}>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Max length is 300 characters." as="textarea"rows={3} cols={50}/>
                </Form.Group>
                <Button  type="submit" variant="success">Comment</Button>
            </Form>
        </div>
        </>
     );
}
 
export default Id;