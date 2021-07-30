import Link from 'next/link'
import Button from 'react-bootstrap/Button';
const Navbar = () => {
    return ( 
        <>
        <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/profile">
          <a>About Us</a>
        </Link>
        <Link href="/search">
          <a>About Us</a>
        </Link>      
        </nav>
        </>
    );
}
 
export default Navbar;