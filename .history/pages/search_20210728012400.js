import Navbar from '../components/Navbar'
const Search = () => {
    return ( 
        <>
        <Navbar/>
        <div style={{display: 'flex',justifyContent: 'center',paddingTop:154,paddingRight:412}}>
            <h1 style={{paddingLeft:12}}>
                SEARCH : 
            </h1>
            <input type="text" />
        </div>
        </>
     );
}
 
export default Search;