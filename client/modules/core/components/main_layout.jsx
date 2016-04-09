import React from 'react';
import Navbar from '../containers/navbar.js';
import Footer from './footer.jsx';
import Yield from '../containers/yield.js';

class Layout extends React.Component {


    render() {
        return (
            <div>
                <Navbar/>
                <Yield content={this.props.content()}/>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
