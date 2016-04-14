import React from 'react';

class Results extends React.Component {


  render() {
    const {results} = this.props;
    return (
      <div>
        <p>Blaze: {results.blaze}</p>
        <p>Angular: {results.angular}</p>
        <p>React: {results.react}</p>
      </div>
    );
  }
}

export default Results;
