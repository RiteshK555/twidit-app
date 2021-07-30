import Link from 'next/link'
import Button from 'react-bootstrap/Button';
const Navbar = () => {
    return ( 
        <>
        <nav style={{paddingTop:24}}>
        <Link  href="/" >
            <a style={{margin:179}}>Home</a>
            <Button variant="light"></Button>
        </Link>
        <Link href="/profile">
          <a style={{margin:179}}>Profile</a>
        </Link>
        <Link href="/search">
          <a style={{margin:179}}>Search</a>
        </Link>      
        </nav>
        </>
    );
}
 
export default Navbar;