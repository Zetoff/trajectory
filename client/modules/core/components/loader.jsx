import React from 'react';
import {Grid} from 'react-bootstrap';

class Loader extends React.Component {
  render() {
    return (
      <Grid className="text-align-center">
        <i className="fa fa-spinner fa-spin fa-2x"></i>
      </Grid>
    );
  }
}

export default Loader;
