import React from 'react';
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import NavRightContent from './nav_right_content.jsx';

class NavbarInstance extends React.Component {
    render() {
        const {user} = this.props;
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href={FlowRouter.path('home')}>Trajectory</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav pullRight>
                    <NavRightContent user={user} />
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarInstance;
