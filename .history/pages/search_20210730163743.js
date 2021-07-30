import Navbar from '../components/Navbar'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import SearchIcon from '@material-ui/icons/Search';
import {db} from '../utils/firebase'
const Search = () => {
    async function handleSearch(e) {
        const snapshot1= await db.collection("users").where("name",">",e.target.value).get();
        snapshot1.forEach((doc) => {
            console.log(doc.data());
        })
    }
    return ( 
        <>
        <Navbar/>
        <div style={{display: 'flex',justifyContent: 'center',paddingTop:154}}>
            <Form>
                <table>
                    <tbody>
                        <tr>
                            <td>
                <Form.Control onChange={handleSearch} size="lg" type="text" placeholder="Search" />
                            </td>
                            <td>
                <Button style={{paddingTop:10,paddingBottom:10}} variant="info">
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