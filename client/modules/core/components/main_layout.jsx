import React from 'react';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

const Layout = ({
  content = () => null
}) => (
  <div>
    <Navbar />
    <div>
      {content()}
    </div>
    <Footer />
  </div>
);

export default Layout;
