import Navbar from '../components/Navbar'
import {Form} from 'react-bootstrap'
import {Button,Dropdown,DropdownButton} from 'react-bootstrap'
// import SearchIcon from '@material-ui/icons/Search';
import {db} from '../utils/firebase';
const Search = () => {
    const ppl=[];
    async function handleSearch(e) {
        const snapshot1= await db.collection("users").where("name",">",e.target.value).get();
        const [ppl,setPpl] = [];
        snapshot1.forEach((doc) => {
            if(e.target.value===doc.data().name.slice(0,e.target.value.length))
            {
                console.log(doc.data().name);
                console.log(doc.id);
                setPpl()
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
                            </td>
                        </tr>
                    </tbody>
                </table>
                {
                    ppl.map((person)=>  <Dropdown.Item  as="button">person.name</Dropdown.Item>)
                }
  {/* <Dropdown.Item  as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item> */}
            </Form>
        </div>
        </>
     );
}
 
export default Search;