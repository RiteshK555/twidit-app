import Link from 'next/link'
import Button from 'react-bootstrap/Button';
const Navbar = () => {
    return ( 
        <>
        <nav style={{paddingTop:14}}>
        <Link  href="/" >
            <a style={{margin:169}}>Home</a>
        </Link>
        <Link href="/profile">
          <a style={{margin:169}}>Profile</a>
        </Link>
        <Link href="/search">
          <a style={{margin:169}}>Search</a>
        </Link>      
        </nav>
        </>
    );
}
 
export default Navbar;