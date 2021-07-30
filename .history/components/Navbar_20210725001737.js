import Link from 'next/link'
import {Button,ButtonGroup}from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
const Navbar = () => {
    return ( 
        <>
<Nav>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
    {/* <ButtonGroup aria-label="Basic example">
        <Button style={{paddingLeft:"313%"}} variant="secondary">Left</Button>
        <Button style={{paddingLeft:"33%"}} variant="secondary">Middle</Button>
        <Button style={{paddingLeft:"33%"}} variant="secondary">Right</Button>
    </ButtonGroup> */}
</>
    );
}
 
export default Navbar;