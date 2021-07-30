import Link from 'next/link'
import {Button,ButtonGroup}from 'react-bootstrap/Button';
const Navbar = () => {
    return ( 
        <>
<ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>
    );
}
 
export default Navbar;