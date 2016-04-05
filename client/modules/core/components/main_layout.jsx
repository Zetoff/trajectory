import React from 'react';
import Navbar from './navbar.jsx';

const Layout = ({
  content = () => null
}) => (
  <div>
    <Navbar />
    <div>
      {content()}
    </div>
  </div>
);

export default Layout;
