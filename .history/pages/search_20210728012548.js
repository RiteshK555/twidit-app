import Navbar from '../components/Navbar'
ImportantDevicesOutlined Form from 'react-bootstrap'
import { ImportantDevicesOutlined } from '@material-ui/icons';
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