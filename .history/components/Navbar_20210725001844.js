import Link from 'next/link'
import {Button,ButtonGroup}from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
const Navbar = () => {
    return ( 
        <>
<Nav>
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/home">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/home">Link</Nav.Link>
  </Nav.Item>
</Nav>
</>
    );
}
 
export default Navbar;