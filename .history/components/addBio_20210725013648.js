import {FloatingLabel,Form,} from 'react-bootstrap';
import {useSession} from 'next-auth/client';
const AddBio =  () => {
    const [session,loading] = useSession();
    return ( 
        <>
        <FloatingLabel style={{paddingLeft:423}}>
            Add Bio:
            <Form.Control
            as="textarea"
            style={{height:123,width:522}}
            />
            <Button >

            </Button>
        </FloatingLabel>
        </>
    );
}
 
export default AddBio;