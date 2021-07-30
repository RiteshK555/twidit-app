import {FloatingLabel,Form} from 'react-bootstrap';
import {useSession} from 'next-auth/client';
const AddBio =  () => {
    const [session,loading] = useSession();
    return ( 
        <>
        <FloatingLabel controlId="floatingTextarea2" label="bio">
            <Form.Control
            as="textarea"
            style={{height:'1211px',width:'10'}}
            />
        </FloatingLabel>
        </>
    );
}
 
export default AddBio;