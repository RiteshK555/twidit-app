import Link from 'next/link'
const Navbar = () => {
    return ( 
        <>
        <Link href="/">
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

        </Link>
        </>
    );
}
 
export default Navbar;