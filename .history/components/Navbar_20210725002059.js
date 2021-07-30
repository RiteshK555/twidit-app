import Link from 'next/link'
import {Button,ButtonGroup}from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
const Navbar = () => {
    return ( 
        <>
<Nav style={{justifyContent: 'center'}}>
  <Nav.Item>
    <Nav.Link style={{marginRight:122,marginLeft:122}} href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{marginRight:122,marginLeft:122}} href="/profile">Profile</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/Search">Search</Nav.Link>
  </Nav.Item>
</Nav>
</>
    );
}
 
export default Navbar;