import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const FooterInstace = ({
  content = () => null
}) => (
  <footer>
    <Grid>
      <Row>
        <Col md={4}>
          Zetoff Studio © CURRENT YEAR
        </Col>
        <Col md={4}>
          <a href="#">Terms & Conditions</a>
          /
          <a href="#">Privacy Policy</a>
        </Col>
        <Col md={4}>
          Built with love in Lleida
        </Col>
      </Row>
    </Grid>
  </footer>
);

export default FooterInstace;
