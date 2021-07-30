import Navbar from '../components/Navbar'
import {Form} from 'react-bootstrap'
import {Button,Dropdown} from 'react-bootstrap'
// import SearchIcon from '@material-ui/icons/Search';
import {db} from '../utils/firebase';
const Search = () => {
    async function handleSearch(e) {
        const snapshot1= await db.collection("users").where("name",">",e.target.value).get();
        const ppl=[];
        snapshot1.forEach((doc) => {
            if(e.target.value===doc.data().name.slice(0,e.target.value.length))
            {
                console.log(doc.data().name);
                console.log(doc.id);
                ppl.push("http://localhost:3000/pf/"+doc.id);
            }

        })
        console.log(ppl);
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
                {/* <Button style={{paddingTop:10,paddingBottom:10}} variant="info">
                    <SearchIcon />
                </Button> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* <div style={{"z-index":1,color:"red"}}>
                    hi
                </div> */}
                <Dropdown>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>


            </Form>
        </div>
        </>
     );
}
 
export default Search;