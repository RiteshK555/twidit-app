import Link from 'next/link'
import Button from 'react-bootstrap/Button';
const Navbar = () => {
    return ( 
        <>
        <nav>
        <Link href="/" style={{margin:12}}>
          <a>Home</a>
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