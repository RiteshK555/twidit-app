import {FloatingLabel,Form} from 'react-bootstrap';
import {getSession} from 'next-auth/client';
const AddBio = async () => {
    const session =await getSession();
    return ( 
        <>
        <h3 style={{justifyContent: 'center'}}>
            {console.log(session)}
        </h3> 
        <FloatingLabel>
            <Form.Control
            as="textarea"
            style={{height:'123px',width:'120'}}
            />
        </FloatingLabel>
        </>
    );
}
 
export default AddBio;