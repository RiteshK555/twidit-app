import {Card} from 'react-bootstrap';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const Post = ({likes}) => {
        function handleLikePost(){
            parseInt(likes);
        }
    return (
        // <div>
        //     <h1 style={{display: 'flex',justifyContent: 'center'}}>this is post</h1>
        // </div> 
        <div style={{marginLeft:340,marginRight:300,marginTop:20,marginBottom:20}}>
            <Card style={{display: 'flex',justifyContent: 'center'}}>
                <Card.Body >
                this is a post.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                </Card.Body>
                <table>
                    <tr>
                        <td>

                        </td>
                        <td>
                            
                        </td>
                    </tr>
                </table>
                {/* <div>
                <ThumbUpIcon onClick={handleLikePost} style={{marginLeft:20,marginBottom:20,paddingBottom:2,cursor:"pointer"}} />
                    <div style={{paddingLeft:61}}>
                        {likes}
                    </div>
                </div> */}
            </Card>

        </div>

     );
}
 
export default Post;   
            