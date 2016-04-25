import React from 'react';
import {Input, Grid, Row, Col} from 'react-bootstrap';

class Survey extends React.Component {
  render() {
    const { error } = this.props;

    return (
      <Grid>
        <Row>
          <Col sm={6} smOffset={3} xs={12}>
           <form onSubmit={this.saveSurvey.bind(this)}>
             <h2>Which front-end framework are you using?</h2>
             {error ? <p style={{color:'red'}}>{error}</p> : null }
             <Input type='select' ref='frontEnd'>
               <option value='blaze'>Blaze</option>
               <option value='angular'>Angular</option>
               <option value='react'>React</option>
             </Input>
             <Input type='submit' bsStyle='success'/>
           </form>
          </Col>
       </Row>
     </Grid>
    );
  }

  saveSurvey(e){
    e.preventDefault();
    const {create} = this.props;
    const {frontEnd} = this.refs;
    create(frontEnd.getValue());
  }
}

export default Survey;
