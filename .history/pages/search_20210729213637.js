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
                    <tbody>
                        <tr>
                            <td>
                <Form.Control size="lg" type="text" placeholder="Search" />
                            </td>
                            <td>
                <Button style={{paddingTop:12,paddingBottom:21}} variant="info">
                    <SearchIcon />
                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div style={{paddingLeft:41}}>

                </div>
            </Form>
        </div>
        </>
     );
}
 
export default Search;