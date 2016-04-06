import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class NavbarInstance extends React.Component {
  render(){
    const user = Meteor.user();
    return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href={FlowRouter.path('home')}>Trajectory</a>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">{user ? user.profile.name : 'Login'}</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)
  }
}

export default NavbarInstance;
