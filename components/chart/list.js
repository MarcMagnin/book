// import React from 'react';
// import { observer } from 'mobx-react';
// //import Chart from './chart';

// class ListChart extends React.Component {
//    constructor(props) {
//     super(props);
//   }

//   render () {
//     return <div>
//     <ol>
//         { this.props.ChartStore.charts.reverse().map( chart => 
//           <Chart 
//             chart={ chart } 
//             metricNames={this.props.MetricStore.metrics.slice()} 
//             metricStore={this.props.MetricStore}
//             metricNamesFilterOptions={this.props.MetricStore.metricNamesFilterOptions} 
//             key={ chart.id } 
//             /> )}
     
//     </ol>
//     <button onClick={this.props.ChartStore.updateCharts}>update</button>
//     </div>
//   }
// }

// // 'ChartStore', 'MetricStore' tell which store fields will be provided to props 
// //export default observer(['ChartStore', 'MetricStore'], ListChart);