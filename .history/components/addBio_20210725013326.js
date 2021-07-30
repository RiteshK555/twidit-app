import {FloatingLabel,Form} from 'react-bootstrap';
import {useSession} from 'next-auth/client';
const AddBio =  () => {
    const [session,loading] = useSession();
    return ( 
        <>
        <FloatingLabel  label="bio" style={{,paddingLeft:123}}>
            <Form.Control
            as="textarea"
            style={{height:123,width:522}}
            />
        </FloatingLabel>
        </>
    );
}
 
export default AddBio;