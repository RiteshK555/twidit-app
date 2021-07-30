import {FloatingLabel,Form,Button} from 'react-bootstrap';
import {useSession} from 'next-auth/client';
const AddBio =  ({setBio}) => {
    const [session,loading] = useSession();
    return ( 
        <>
        <FloatingLabel style={{paddingLeft:423}}>
            Add Bio:
            <Form.Control
            onChange={e=>setBio(e.target.value)}
            as="textarea"
            style={{height:123,width:522,marginTop:12,marginBottom:12}}
            />
            <Button type="submit" onClick={setBio(e.target.value)}>
                submit
            </Button>
        </FloatingLabel>
        </>
    );
}
 
export default AddBio;