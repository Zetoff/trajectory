import React from 'react';
import {Input} from 'react-bootstrap';

class Survey extends React.Component {
  render() {
    const { error } = this.props;

    return (
     <form onSubmit={this.saveSurvey.bind(this)}>
       <h2>Which front-end framework are you using?</h2>
       {error ? <p style={{color:'red'}}>{error}</p> : null }
       <Input type='select' ref='frontEnd'>
         <option value='blaze'>Blaze</option>
         <option value='angular'>Angular</option>
         <option value='react'>React</option>
       </Input>
       <Input type='submit'/>
     </form>
    );
  }

  saveSurvey(e){
    e.preventDefault();
    const {create} = this.props;
    const {frontEnd} = this.refs;
    console.log(frontEnd.getValue());
    create(frontEnd.getValue());
  }
}

export default Survey;
