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
    var data;
    snapshot2.forEach((doc) =>{
        if(doc.id===params.id){
            data=doc.data();
        }
    });
    return {
        props:{
            post,
        }
    }
}
const Id = ({post})=> {
    console.log(post);
    return ( 
        <>
            <Post id={post.id}/>
        </>
     );
}
 
export default Id;