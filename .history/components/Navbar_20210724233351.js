import Link from 'next/link'
import Button from 'react-bootstrap/Button';
const Navbar = () => {
    return ( 
        <>
        <nav>
        <Link href="/" >
            <div style={{margin:}}>
          <a>Home</a>
            </div>
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