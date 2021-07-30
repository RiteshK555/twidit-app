import {Card} from 'react-bootstrap';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {useState} from 'react';
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

                    </tbody>

                </table>
            </Card>

        </div>

     );
}
 
export default Post;   
            