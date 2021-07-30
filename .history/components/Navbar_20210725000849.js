import Link from 'next/link'
import {Button,ButtonGroup}from 'react-bootstrap';
const Navbar = () => {
    return ( 
        <>
    <ButtonGroup aria-label="Basic example">
        <Button style={{paddingLeft:"33"}} variant="secondary">Left</Button>
        <Button style={{paddingLeft:122}} variant="secondary">Middle</Button>
        <Button style={{paddingLeft:122}} variant="secondary">Right</Button>
    </ButtonGroup>
</>
    );
}
 
export default Navbar;