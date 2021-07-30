import Navbar from '../components/Navbar'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import SearchIcon from '@material-ui/icons/Search';
const Search = () => {
    return ( 
        <>
        <Navbar/>
        <div style={{display: 'flex',justifyContent: 'center',paddingTop:154}}>
            <Form>
                <table>
                    t
                </table>
                <Form.Control size="lg" type="text" placeholder="Search" />
                <div style={{paddingLeft:41}}>
                <Button  variant="info">
                    <SearchIcon />
                </Button>
                </div>
            </Form>
        </div>
        </>
     );
}
 
export default Search;