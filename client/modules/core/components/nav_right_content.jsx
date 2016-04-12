import React from 'react';
import {NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class NavRightContent extends React.Component {
  getLoggedin(user){
    const userName = user.profile && user.profile.name ? user.profile.name : user.emails[0].address;
    return(
      <NavDropdown eventKey={1} title={<span><i className='fa fa-user'></i> {userName}</span>} id="user-controls">
         <MenuItem eventKey={1.1} href="/profile"><i className="fa fa-user"></i> Profile</MenuItem>
         <MenuItem divider />
         <MenuItem eventKey={1.2} onClick={this.logout.bind(this)}><i className="fa fa-sign-out"></i> Logout</MenuItem>
      </NavDropdown>
    );
  }

  getGuest(){
    return(
      <NavItem eventKey={1} href={FlowRouter.path('login')}><i className="fa fa-user"></i> Login</NavItem>
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
