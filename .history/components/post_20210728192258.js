import {Card} from 'react-bootstrap';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {useState} from 'react';
import {Button} from 'react-bootstrap';
// import {getSession} from 'next-auth/client';
// export default function getServerSideProps(ctx){
//     const session=getSession(ctx);
//     return ({
//         props:{
//             session
//         }
//     });
// }
const Post = ({likes,postsData}) => {
        const [like,setLike]=useState("primary");
        function handleLikePost(){
            function handleLikePostclient(){
            if(like==="primary"){
                setLike("secondary");
            }else{
                setLike("primary");
            }
            }
            handleLikePostclient();
            async function handleLikePostServer(){

            }
        }
    return (
        <div style={{marginLeft:340,marginRight:300,marginTop:20,marginBottom:20}}>
            <Card style={{display: 'flex',justifyContent: 'center'}}>
                <Card.Body  style={{cursor:"pointer"}}>
                {postsData}
                </Card.Body>
                <table>
                    <tbody>
                    <tr>
                        <td style={{paddingTop:1}}>
                            <ThumbUpIcon color={like} onClick={handleLikePost} style={{marginLeft:20,marginBottom:8,paddingBottom:0,cursor:"pointer"}} />
                            {like==="primary"?likes:likes+1}
                                <Button style={{marginLeft:500}} size="sm" variant="danger">
                                    delete
                                </Button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Card>

        </div>

     );
}
 
export default Post;   
            