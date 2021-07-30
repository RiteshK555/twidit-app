import Navbar from '../components/Navbar'
import {Form} from 'react-bootstrap'
import {Button,Dropdown,DropdownButton} from 'react-bootstrap'
// import SearchIcon from '@material-ui/icons/Search';
import {db} from '../utils/firebase';
import {useState} from 'react';
const Search = () => {
    const ppl=[];
    function handleSearch(){

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
                   ppl!==[] && ppl.map((person)=>  <Dropdown.Item  as="button">{person.name}</Dropdown.Item>)
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