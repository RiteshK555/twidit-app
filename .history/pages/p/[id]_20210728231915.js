import {db} from '../../utils/firebase';
import {getSession} from 'next-auth/client';
import Post from '../../components/post';
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
    return ( 
        <>
            <Post id={params.id} likes={post.likes} postsData={post.data}/>
        </>
     );
}
 
export default Id;