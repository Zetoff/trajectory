import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import rd3 from 'rd3';

const PieChart = rd3.PieChart;

class Results extends React.Component {

    getData() {
        const {results} = this.props;
        let data = [
            {
                label: 'Blaze',
                value: results.blaze
            }, {
                label: 'Angular',
                value: results.angular
            }, {
                label: 'React',
                value: results.react
            }
        ];
        console.log(data);
        return data;
    }

    render() {
        return (
            <Grid>
              <Row>
                <Col sm={6} smOffset={3} xs={12}>
                <PieChart data={this.getData()} width={400} height={400} radius={100} innerRadius={50} sectorBorderColor="white" title="frontEnd FrameWork"/>
                </Col>
              </Row>
            </Grid>
        );
    }
}

export default Results;
