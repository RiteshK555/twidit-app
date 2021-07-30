import Navbar from '../components/Navbar'
import Form from 'react-bootstrap'
const Search = () => {
    return ( 
        <>
        <Navbar/>
        <div style={{display: 'flex',justifyContent: 'center',paddingTop:154,paddingRight:412}}>
            <input type="text" />
        </div>
        </>
     );
}
 
export default Search;