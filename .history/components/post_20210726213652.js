import {FloatingLabel,Form,Button} from 'react-bootstrap';
const Post = () => {
    return ( 
        <div style={{display:'flex',justifyContent: 'center', paddingTop:22,paddingLeft:61}}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Max length is 300 characters." as="textarea" onChange={textAreaHandler} rows={3} cols={50}/>
                </Form.Group>
                <Button  type="submit" variant="primary">Post</Button>
            </Form>
        </div>
     );
}
 
export default Post;   
            