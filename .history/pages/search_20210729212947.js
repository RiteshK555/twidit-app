import Navbar from '../components/Navbar'
import {Form} from 'react-bootstrap'
const Search = () => {
    return ( 
        <>
        <Navbar/>
        <div style={{display: 'flex',justifyContent: 'center',paddingTop:154}}>
            <Form>
                <Form.Control size="lg" type="text" placeholder="Search" />
                
            </Form>
        </div>
        </>
     );
}
 
export default Search;