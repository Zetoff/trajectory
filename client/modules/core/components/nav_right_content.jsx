import React from 'react';
import {NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class NavRightContent extends React.Component {
  getLoggedin(user){
    //TODO: improve user email - profile name
    return(
      <NavDropdown eventKey={1} title={user._id} id="user-controls">
         <MenuItem eventKey={1.1} href="/profile">Profile</MenuItem>
         <MenuItem divider />
         <MenuItem eventKey={1.2} onClick={this.logout.bind(this)}>Logout</MenuItem>
      </NavDropdown>
    );
  }

  getGuest(){
    return(
      <NavItem eventKey={1} href={FlowRouter.path('login')}>Login</NavItem>
    );
  }

  logout(e){
    e.preventDefault();
    Meteor.logout();
  }

  render() {
    const { user } = this.props;

    return user ? this.getLoggedin(user) : this.getGuest();
  }
}

export default NavRightContent;
