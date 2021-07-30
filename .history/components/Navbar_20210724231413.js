import Link from 'next/link'
import Button from 'react-bootstrap/Button';
const Navbar = () => {
    return ( 
        <>
        {/* <Button>
            Home
        </Button> */}
        <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
                    
        </nav>
        <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
        {/* <Link >
        <a>Home</a>
        </Link>
        <Link>
        <a>
            Profile
        </a>
        </Link>
        <Link>
        <a>
            Search
        </a>
        </Link> */}
        </>
    );
}
 
export default Navbar;