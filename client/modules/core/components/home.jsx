import React from 'react';
import {Jumbotron, Grid, Button} from 'react-bootstrap';

const Home = () => (
  <Grid>
    <Jumbotron>
      <h1>Trajectory <i className='fa fa-rocket'></i></h1>
      <h2>Everybody needs to know where its stack is going</h2>
      <Button href="/survey" bsStyle="primary" bsSize="large">Take Survey to know the results</Button>
    </Jumbotron>
  </Grid>
);

export default Home;
