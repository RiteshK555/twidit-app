import {FloatingLabel,Form} from 'react-bootstrap'
const AddBio = () => {
    return ( 
        <FloatingLabel>
            <Form.Control
            as="textarea"
            style={{height:'123px',width:'120'}}
            />
        </FloatingLabel>
    );
}
 
export default AddBio;