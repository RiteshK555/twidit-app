import Link from 'next/link'
import Button from 'react-bootstrap/Button';
const Navbar = () => {
    return ( 
        <>
        <nav>
        <Link  href="/" >
            <a style={{margin:199}}>Home</a>
        </Link>
        <Link href="/profile">
          <a style={{margin:122}}>Profile</a>
        </Link>
        <Link href="/search">
          <a style={{margin:122}}>Search</a>
        </Link>      
        </nav>
        </>
    );
}
 
export default Navbar;