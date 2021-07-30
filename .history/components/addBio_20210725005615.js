import {FloatingLabel,Form} from 'react-bootstrap';
import {useSession} from 'next-auth/client';
const AddBio = async () => {
    const [session,loading] = useSession();
    return ( 
        <>
        <h3 style={{justifyContent: 'center'}}>
            {session?(session.user.name):({})}
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