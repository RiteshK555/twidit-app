import {FloatingLabel,Form} from 'react-bootstrap';
import {useSession} from 'next-auth/client';
const AddBio =  () => {
    const [session,loading] = useSession();
    return ( 
        <>
        <FloatingLabel style={{paddingLeft:223}}>
            Add Bio:
            <Form.Control
            as="textarea"
            style={{height:123,width:522}}
            />
        </FloatingLabel>
        </>
    );
}
 
export default AddBio;