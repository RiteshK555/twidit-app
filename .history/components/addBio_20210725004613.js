import {FloatingLabel,Form} from 'react-bootstrap';
import {useSession} from 'next-auth/client';
const AddBio = () => {
    const [session,loading] =useSession();
    return ( 
        <>
        session.user.name}
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