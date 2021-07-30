import Link from 'next/link'
import {Button,ButtonGroup}from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import HomeIcon from '@material-ui/icons/Home'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
const Navbar = () => {
    return ( 
        <>
<Nav style={{justifyContent: 'center',paddingTop:22}}>
  <Nav.Item>
    <Nav.Link style={{marginRight:122,marginLeft:122}} href="/">
      <HomeIcon color="action" fontSize="large"/>
      </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{marginRight:122,marginLeft:122}} href="/profile">
      <AccountBoxIcon color="action" fontSize="large"/>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{marginRight:122,marginLeft:122}} href="/search">
      Search
      </Nav.Link>
  </Nav.Item>
</Nav>
</>
    );
}
 
export default Navbar;