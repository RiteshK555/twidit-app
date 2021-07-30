import {FloatingLabel,Form} from 'react-bootstrap';
import {useSession} from 'next-auth/client';
const AddBio = async () => {
    const [session,loading] =await useSession();
    return ( 
        <>
        <h3 style={{justifyContent: 'center'}}>
            {console.log(session.user.name}
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