import Navbar from '../components/Navbar'
import {Form} from 'react-bootstrap'
import {Button,Dropdown,DropdownButton} from 'react-bootstrap'
// import SearchIcon from '@material-ui/icons/Search';
import {db} from '../utils/firebase';
import {useState} from 'react';
const Search = () => {
    const [ppl,setPpl] = useState([]);
    // const ppl=[];
    function handleSearch(e){
        e.preventDefault();
    async function asynchandleSearch() {
        const snapshot1= await db.collection("users").where("name",">",e.target.value).get();
        
        snapshot1.forEach((doc) => {
            if(e.target.value!=="" && e.target.value===doc.data().name.slice(0,(e.target.value).length))
            {
                // console.log(doc.data().name);
                // console.log(doc.id);
                // var index=ppl.indexOf({
                //     name:doc.data().name,
                //     href:"http://localhost:3000/pf/"+doc.id
                // })
                // console.log(index);
                // console.log(ppl);
              setPpl(new Set([...ppl,{
                    name:doc.data().name,
                    href:"http://localhost:3000/pf/"+doc.id
                }]))
                // ppl.push("http://localhost:3000/pf/"+doc.id);
            }
            if(e.target.value==="" && ppl.length>0){
                setPpl([]);
            }

        })
        console.log(ppl);
    }
    asynchandleSearch();
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
                        </tr>
                    </tbody>
                </table>
                {
                   ppl!==[] && ppl.forEach((person)=> console.log(person))
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