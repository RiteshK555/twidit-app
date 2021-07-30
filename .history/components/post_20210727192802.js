import {Card} from 'react-bootstrap';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const Post = ({likes}) => {
        const 
        function handleLikePost(){
            parseInt(likes);
        }
    return (
        // <div>
        //     <h1 style={{display: 'flex',justifyContent: 'center'}}>this is post</h1>
        // </div> 
        <div style={{marginLeft:340,marginRight:300,marginTop:20,marginBottom:20}}>
            <Card style={{display: 'flex',justifyContent: 'center'}}>
                <Card.Body  style={{cursor:"pointer"}}>
                this is a post.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                </Card.Body>
                <table>
                    <tr>
                        <td>
                            <ThumbUpIcon color="" onClick={handleLikePost} style={{marginLeft:20,marginBottom:20,paddingBottom:2,cursor:"pointer"}} />
                        </td>
                        <td style={{paddingRight:411,paddingBottom:18}}>
                            {likes}
                        </td>
                    </tr>
                </table>
            </Card>

        </div>

     );
}
 
export default Post;   
            