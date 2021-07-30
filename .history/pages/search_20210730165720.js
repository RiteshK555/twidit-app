import Navbar from '../components/Navbar'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import SearchIcon from '@material-ui/icons/Search';
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
                <Button style={{paddingTop:10,paddingBottom:10}} variant="info">
                    <SearchIcon />
                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* <ul>
                    <li dir="ltr">
                        hi
                    </li>
                </ul>
                  <option value="volvo">Volvo</option>
                <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> */}
                {/* <div style={{paddingLeft:41}}>

                </div> */}
            </Form>
        </div>
        </>
     );
}
 
export default Search;