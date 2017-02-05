import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
//import 'rxjs/add/observable/dom/ajax'
// import Autocomplete from 'react-autocomplete'

import sizeMe from 'react-sizeme';
import MetricsGraphics from '../MetricsGraphics';
//import MetricsGraphics from 'react-metrics-graphics';

@observer
class Chart extends React.Component {

  @observable title = props.chart ? props.chart.title : "";
  @observable refreshFlag = false;
  @observable dcs = null;
  @observable dcsSelected = null;
  @observable clusters = null;
  @observable clustersSelected = null;
  @observable hosts = null;
  @observable hostsSelected = null;
  @observable metrics = [];
  @observable metricNameSelected = null;

 



  componentWillUpdate() {
    console.log("I will re-render, since the todo has changed!");
    //   MG.data_graphic({
    // title: this.title ,
    // description: "This is a simple line chart.",
    // chart_type: 'missing-data',
    // missing_text: 'getting data on next poll',
    // width: this.props.size.width,
    // height: 200,
    // right: 40,
    // target: this.elem,
    // x_accessor: 'd',
    // y_accessor: 'v'
    // });  
  }


  componentWillReact() {
    //console.log("I will re-render, since the todo has changed!");

  }

  componentWillUnmount() {
    this.unMount()
  }
  componentDidMount = () => {
  }




  // clean subscription in case we leave the page or add other metrics 
  unMount() {
    // if (this.poller) {
    //   this.poller.unsubscribe();
    // }
  }


  componentWillReceiveProps(nextProps) {

  }

  render() {
    // <input type="button" onClick={this.addMetric} value="Click Me!" />
    //         {this.metrics.map( metric => <button>{metric}</button> )}
    //<div ref={el => {if (el){this.elem = el}}} data={this.props.chart? this.props.chart.data: undefined} />

      // <ol>

      //   {this.props.chart ? this.props.chart.metrics.map(metric => <button>{metric.name}</button>) : "No metric yet"}
      // </ol>
    return <div>
    {this.props.chart.counter}
      <MetricsGraphics
        title={this.props.chart.title}
        description="This graphic shows a time-series of downloads."
        missing_text="getting data on next poll"
        chart_type={this.props.chart.type}
        width={this.props.size.width}
        data={this.props.chart.data}
        height={250}
        x_accessor="d"
        y_accessor="v"
        />

    </div>
  }
}


export default sizeMe()(Chart);
//style={isHighlighted ? styles.highlightedItem : styles.item}
// const styles = css({
//   item: {
//     padding: '2px 6px',
//     cursor: 'default'
//   },
//   highlightedItem: {
//     color: 'white',
//     background: 'hsl(200, 50%, 50%)',
//     padding: '2px 6px',
//     cursor: 'default'
//   },
//   menu: {
//     border: 'solid 1px #ccc'
//   }
// });


// var chartFactory = function (title, data){ return  mobxReact.observer(React.createClass( {
// createPoller: function (){return  Rx.Observable.ajax.getJSON('http://localhost:2222/home/metrics?time=5&interval=5')
// 		.retryWhen(function(errors){
// 			return errors.scan(function(acc, x) { return acc + x; }, 0)
// 			.flatMap(function(x){ 
// 				return Rx.Observable.timer(computeInterval(true));
// 			});
// 		})
// 		.repeatWhen(function(notification){
// 			return notification
// 			.scan(function(acc, x) {
// 				return acc + x; }, 0)
// 			.flatMap(function(x){ 
// 				return Rx.Observable.timer(computeInterval());
// 			});
// 		});
// 		},


//  componentWillMount:function() {
//   //  loadData(this.props.endpoint)
//   },
//  componentWillReceiveProps:function(nextProps) {
//     if (nextProps.endpoint !== this.props.endpoint) {
//   //    loadData(nextProps.endpoint)
//     }
//   },
//   componentDidMount:function() {
// 	  var rcv = this;
// 	  this.createPoller().subscribe( (x) => {
// 	console.log('onNext: %s',JSON.stringify(prepareMetricsArray(x.Values)));
// 			MG.data_graphic({
// 				title: rcv.title ,
// 				description: "This is a simple line chart.",
// 				data: prepareMetricsArray(x.Values),
// 				width: 600,
// 				height: 200,
// 				right: 40,
// 				target: rcv.elem ,
// 				x_accessor: 'd',
// 				y_accessor: 'v'
// 			});    
// 		},
// 		(e) => { console.log('onError: %s', e); },
// 		() => { console.log('onCompleted'); });

//    // MG.convert.date(this.props.data, 'd', '%Y-%m-%dT%H:%M:%S.%LZ');
//       MG.data_graphic({
// 		title: title ,
// 		description: "This is a simple line chart.",
// 		data: [{"d": new Date(), "v": 0}], //this.props.data,
// 		width: 600,
// 		height: 200,
// 		right: 40,
// 		target: this.elem,
// 		x_accessor: 'd',
// 		y_accessor: 'v'
//     });    

//    // ReactDOM.render(<Chart data = {this.props.data } />,  document.getElementById("root"));
//   },

//   handleLoadMoreClick:function () {
//   //  this.props.loadData(this.props.endpoint, true)
//   },

//   render:function() {
//     //  const { data } = this.props
//     // if (!data) {
//     //   return <h1><i>Loading {this.props.endpoint }{"'data..."}</i></h1>
//     // }
//     return <div>
// 		<div ref={el => {if (el){this.elem = el}}}/>
// 		 <table>
//         <thead>
//           <tr>
//               <th>{this.title}</th>
//           </tr>
//         </thead>
//       </table>
// 	  </div>
//   }
// }))};