import Navbar from '../components/Navbar'
import {Form} from 'react-bootstrap'
import {Button,Dropdown,DropdownButton} from 'react-bootstrap'
import {db} from '../utils/firebase';
import {useState} from 'react';
const Search = () => {
    const [ppl,setPpl] = useState([]);
    const [setValuePpl,setSetValuePpl] = useState([]);
    const [persons,setPersons] = useState([]);
    // const ppl=[];
    function handleSearch(e){
        e.preventDefault();
    async function asynchandleSearch() {
        const snapshot1= await db.collection("users").where("name",">",e.target.value).get();
        
        snapshot1.forEach((doc) => {
            if(e.target.value!=="" && e.target.value===doc.data().name.slice(0,(e.target.value).length))
            {
                var index=ppl.includes(
                JSON.stringify({
                    name:doc.data().name,
                    href:"http://localhost:3000/pf/"+doc.id
                }),0)
                setPpl(
                    [...ppl,JSON.stringify({
                    name:doc.data().name,
                    href:"http://localhost:3000/pf/"+doc.id
                })]
                );
                // }

                console.log(ppl);
            }
            if(e.target.value===""){
                setPpl([]);
                setSetValuePpl(new Set([]));
                setPersons([]);
            }

        })
        setSetValuePpl(new Set(ppl));
        setPersons([...setValuePpl]);
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
                   setValuePpl.length!==0 ? persons.map((person)=><>
                   <Dropdown.Item  as="button">{JSON.parse(person).name}</Dropdown.Item>
                   </>
                    ):<></>
                }
            </Form>
        </div>
        </>
     );
}
 
export default Search;