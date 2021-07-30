import {Card} from 'react-bootstrap';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {useState} from 'react';
import {getSession} from 'next-auth/client';
export default function getServerSideProps(ctx){
    const session=getSession(ctx);
    return ({
        props:{
            session
        }
    });
}
const Post = ({likes,postsData,session}) => {
        const [like,setLike]=useState("");
        function handleLikePost(){
            if(like===""){
                setLike("secondary");
            }else{
                setLike("");
            }
        }
    return (
        <div style={{marginLeft:340,marginRight:300,marginTop:20,marginBottom:20}}>
            <Card style={{display: 'flex',justifyContent: 'center'}}>
                <Card.Body  style={{cursor:"pointer"}}>
                {postsData}
                </Card.Body>
                <table>
                    <tr>
                        <div>
                        <td style={{paddingTop:1}}>
                            <ThumbUpIcon color={like} onClick={handleLikePost} style={{marginLeft:20,marginBottom:8,paddingBottom:0,cursor:"pointer"}} />
                        </td>
                        <td >
                            <div style={{paddingLeft:2}}>
                                {like===""?likes:likes+1}
                            </div>
                        </td>
                        </div>
                    </tr>
                </table>
            </Card>

        </div>

     );
}
 
export default Post;   
            