import React from 'react';
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
            <div>
                <PieChart data={this.getData()} width={400} height={400} radius={100} innerRadius={20} sectorBorderColor="white" title="frontEnd FrameWork"/>
            </div>
        );
    }
}

export default Results;
