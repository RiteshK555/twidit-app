import Navbar from '../components/Navbar'
import {Form} from 'react-bootstrap'
const Search = () => {
    return ( 
        <>
        <Navbar/>
        <div style={{display: 'flex',justifyContent: 'center',paddingTop:154,paddingRight:412}}>
    <Form.Control type="email" placeholder="search" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
        </div>
        </>
     );
}
 
export default Search;