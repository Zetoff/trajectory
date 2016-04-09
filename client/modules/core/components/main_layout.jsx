import React from 'react';
import Navbar from '../containers/navbar.js';
import Footer from './footer.jsx';
import Login from './login.jsx';

class Layout extends React.Component {
    getView(){
      return this.props.canView ? this.props.content() : <Login />;
    }
    
    render() {
        return (
            <div>
                <Navbar/>
                <div className="app-root">
                    {this.getView()}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
