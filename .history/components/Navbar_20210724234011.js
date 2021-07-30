import Link from 'next/link'
import Button from 'react-bootstrap/Button';
const Navbar = () => {
    return ( 
        <>
        <nav style={{paddingLeft:"37%"}}>
        <Link  href="/" >
            <a style={{margin:12}}>Home</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <Link href="/search">
          <a>Search</a>
        </Link>      
        </nav>
        </>
    );
}
 
export default Navbar;