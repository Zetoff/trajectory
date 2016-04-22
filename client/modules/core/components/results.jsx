import React from 'react';
import {DoughnutChart} from 'react-chartjs';


class Results extends React.Component {

  getData(){
    const {results} = this.props;
    let data = [
      { label: 'Blaze',
        value: results.blaze
      },
      {
        label: 'Angular',
        value: results.angular
      },
      {
        label: 'React',
        value: results.react
      }
    ];
    console.log(data);
    return data;
  }

  render() {
    return (
      <div>
        <DoughnutChart width="600" height="250"/>
      </div>
    );
  }
}

export default Results;
