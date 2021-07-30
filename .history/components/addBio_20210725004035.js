import {FloatingLabel,Form} from 'react-bootstrap'
const AddBio = () => {
    return ( 
        <FloatingLabel>
            <Form.Control
            as="textarea"
            style={{height:'123px'}}
            />
        </FloatingLabel>
    );
}
 
export default AddBio;