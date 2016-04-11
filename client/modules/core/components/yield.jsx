import React from 'react';
import Login from './login.jsx';


class Yield extends React.Component {
  getView(){
    return this.props.canView ? this.props.content : <Login />;
  }

  render() {
    return (
      <div>
        {this.getView()}
      </div>
    );
  }
}

export default Yield;
