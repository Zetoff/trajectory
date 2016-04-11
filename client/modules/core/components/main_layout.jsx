import React from 'react';
import Navbar from '../containers/navbar.js';
import Footer from './footer.jsx';
import Yield from '../containers/yield.js';
import Helmet from 'react-helmet';

class Layout extends React.Component {

    render() {

      const Head = <Helmet
        title="Trajectory"
      />;

        return (
            <div>
                {Head}
                <Navbar/>
                <Yield content={this.props.content()}/>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
