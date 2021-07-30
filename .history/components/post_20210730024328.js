import {Card} from 'react-bootstrap';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {useState} from 'react';
import {Button} from 'react-bootstrap';
import {useRouter} from 'next/router';
import {db} from '../utils/firebase';
const Post = ({likes,postsData,handleDelete,id,boolButton}) => {
        const router=useRouter();
        const [likesData,setLikesData]=useState(likes);
        const [isCliked,setCliked]=useState(false);
        function handleLikePost(e){
            // function handleLikePostclient(){
            if(!isClicked){
                setLike(true);
            }else{
                setLike("primary");
            }
            }
            handleLikePostclient();
            async function handleAsyncLikePost(){
                const snapshot1= await db.collection("posts").get();
                var prevLikes;
                snapshot1.forEach((doc)=>{
                    if(e.target.id===doc.id) {
                        prevLikes=doc.data().likes;
                    }
                })
                if(like==="primary"){
                    await db.collection("posts").doc(e.target.id).update({
                    likes:prevLikes+1
                    });
                }else{
                    await db.collection("posts").doc(e.target.id).update({
                    likes:prevLikes-1
                    });
                }
                // var prevLikes;
                // snapshot1.forEach((doc)=>{
                //     prevLikes=doc.data().likes;
                // })
                // console.log(e.target.id);

            }
            handleAsyncLikePost();
        }
    return (
        <div style={{marginLeft:340,marginRight:300,marginTop:20,marginBottom:20}}>
            <Card style={{display: 'flex',justifyContent: 'center'}}>
                <Card.Body onClick={()=>router.push("/p/"+id)}  style={{cursor:"pointer"}}>
                {postsData}
                </Card.Body>
                <table>
                    <tbody>
                    <tr>
                        <td style={{paddingTop:1}}>
                            <ThumbUpIcon id={id} color="primary" onClick={handleLikePost} style={{marginLeft:20,marginBottom:8,paddingBottom:0,cursor:"pointer"}} />
                            {likesData}
                             { boolButton===true ?  <Button value={id} onClick={handleDelete} style={{marginLeft:500,marginBottom:12}} size="sm" variant="danger">delete</Button>:<></>}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Card>

        </div>

     );
}
 
export default Post;   
            