'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/link');

var _link2 = _interopRequireDefault(_link);

var _defaultPage = require('../components/hocs/defaultPage');

var _defaultPage2 = _interopRequireDefault(_defaultPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const styles = {
//   secretDiv: css({
//     backgroundColor: '#ecf0f1',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
//     borderRadius: 2,
//     padding: 10,
//     minHeight: 100,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: '#333',
//     textAlign: 'center',
//     fontSize: 40,
//     fontWeight: '100',
//     marginBottom: 30
//   }),
//   main: css({
//     maxWidth: 750,
//     margin: '0 auto',
//     textAlign: 'center'
//   }),
//   heading: css({
//     fontSize: 40,
//     fontWeight: 200,
//     lineHeight: '40px'
//   }),
//   content: css({
//     fontSize: 20,
//     fontWeight: 200,
//     lineHeight: '30px'
//   }),
//   link: css({
//     color: '#333',
//     paddingBottom: 2,
//     borderBottom: '1px solid #ccc',
//     textDecoration: 'none',
//     fontWeight: 400,
//     lineHeight: '30px',
//     transition: 'border-bottom .2s',
//     ':hover': {
//       borderBottomColor: '#333'
//     }
//   })
// }

var SuperSecretDiv = function SuperSecretDiv() {
  return _react2.default.createElement(
    'div',
    { className: 'secretDiv' },
    'This is a super secret div.'
  );
};

var createLink = function createLink(href, text) {
  return _react2.default.createElement(
    'a',
    { href: href, className: 'link' },
    text
  );
};

var Index = function Index(_ref) {
  var isAuthenticated = _ref.isAuthenticated,
      loggedUser = _ref.loggedUser;
  return _react2.default.createElement(
    'div',
    null,
    isAuthenticated && _react2.default.createElement(SuperSecretDiv, null),
    _react2.default.createElement(
      'div',
      { className: 'main' },
      _react2.default.createElement(
        'h1',
        { className: 'heading' },
        'Hello ',
        loggedUser ? loggedUser.name : "mate",
        '!'
      ),
      !isAuthenticated && _react2.default.createElement(
        'p',
        { className: 'content' },
        'You\'re not authenticated yet. Maybe you want to ',
        _react2.default.createElement(
          _link2.default,
          { href: '/auth/sign-in' },
          createLink('/auth/sign-in', 'sign in')
        ),
        '?'
      ),
      isAuthenticated && _react2.default.createElement(
        'p',
        { className: 'content' },
        'Woot! You\'re authenticated now, go to a ',
        _react2.default.createElement(
          _link2.default,
          { href: '/secret' },
          createLink('/secret', 'secured place')
        ),
        '!'
      )
    )
  );
};

Index.propTypes = {
  isAuthenticated: _react.PropTypes.bool.isRequired,
  loggedUser: _react.PropTypes.object
};

exports.default = (0, _defaultPage2.default)(Index);

// import React from 'react'
// import { Provider } from 'mobx-react';
// import Link from 'next/link';
// import Head from 'next/head'

// import Stores from '../stores/index.js';
// import ChartList from '../components/chart/list.js';


// export default class extends React.Component {
//   static async getInitialProps ({ req }) {
//     const isServer = !!req;
//     const stores = Stores(isServer);
//     await stores.MetricStore.fetchInitialData();
//     return {initialState: stores.getState(), isServer};
//   }

//   constructor(props) {
//     super(props);
//     this.stores = Stores(props.isServer, props.initialState);
//   }

//   render () {
//     return <Provider { ...this.stores }>
//       <div>
// 	   <Head>
//          <link rel="stylesheet" href="/static/metricsgraphics.css" />
//          <link rel="stylesheet" href="/static/react-select.css" />
//          <link rel="stylesheet" href="/static/react-select-virtualized.css" />
//          <link rel="stylesheet" href="/static/react-virtualized.css" />
//       	 <meta name="viewport" content="width=device-width, initial-scale=1" />
// 	  </Head>
//         <h1>Chart List</h1>
//         <Link href="/add"> Add a chart</Link>
//         <hr />
//         <ChartList />
//       </div>
//     </Provider>
//   }
// }


// // import React, { Component }  from 'react'
// // import { Provider, connect } from 'react-redux'
// // import Head from 'next/head'
// // import { style } from 'next/css'
// // import Link from 'next/link'
// // //import Chart from '../components/Chart'
// // //import Footer from '../components/Footer'
// // import { reducer, initStore, startClock } from '../store'
// // import ReactDOM from 'react-dom';
// // import { createStore, applyMiddleware } from 'redux'
// // import Rx from 'rxjs/Rx'; 
// // import 'rxjs/add/observable/dom/ajax';
// // import {createEpicMiddleware} from 'redux-observable'
// // import MG from 'metrics-graphics';

// // import mobx, { observable, computed } from 'mobx';
// // import mobxReact, { observer } from "mobx-react";


// // // ReactDOM.render(
// // // 	React.createElement(TodoListView, {todoList: store}),
// // // 	document.getElementById('mount')
// // // );

// // var todoFactory = function (title) {

// // 	var todo = {
// // 		id: Math.random()
// // 	};
// // 	mobx.extendObservable(todo,
// // 		{
// // 			title: title,
// // 			finished: false,
// // 			toggleStatus: mobx.action(function toggleStatus () {
// // 				todo.finished = !todo.finished;
// // 			})
// // 		}
// // 	);
// // 	return todo;
// // };

// // var todoListFactory = function () {
// // 	var todoList = mobx.observable({
// // 		todos: [],
// // 		get unfinishedTodoCount () {
// // 			return todoList.todos.filter(function (todo) {
// // 				return !todo.finished;
// // 			}).length;
// // 		},
// // 		addTodo: mobx.action(function addTodo (todo) {
// // 			todoList.todos.push(todo);
// // 		}),
// // 		addTodos: mobx.action(function addTodos (todos) {
// // 			todoList.todos = todoList.todos.concat(todos);
// // 		})
// // 	});

// // 	return todoList;
// // };


// // var store = todoListFactory();


// // var chartFactory = function (title, data){ return  mobxReact.observer(React.createClass( {
// // createPoller: function (){return  Rx.Observable.ajax.getJSON('http://localhost:2222/home/metrics?time=5&interval=5')
// // 		.retryWhen(function(errors){
// // 			return errors.scan(function(acc, x) { return acc + x; }, 0)
// // 			.flatMap(function(x){ 
// // 				return Rx.Observable.timer(computeInterval(true));
// // 			});
// // 		})
// // 		.repeatWhen(function(notification){
// // 			return notification
// // 			.scan(function(acc, x) {
// // 				return acc + x; }, 0)
// // 			.flatMap(function(x){ 
// // 				return Rx.Observable.timer(computeInterval());
// // 			});
// // 		});
// // 		},


// //  componentWillMount:function() {
// //   //  loadData(this.props.endpoint)
// //   },
// //  componentWillReceiveProps:function(nextProps) {
// //     if (nextProps.endpoint !== this.props.endpoint) {
// //   //    loadData(nextProps.endpoint)
// //     }
// //   },
// //   componentDidMount:function() {
// // 	  var rcv = this;
// // 	  this.createPoller().subscribe( (x) => {
// // 	console.log('onNext: %s',JSON.stringify(prepareMetricsArray(x.Values)));
// // 			MG.data_graphic({
// // 				title: rcv.title ,
// // 				description: "This is a simple line chart.",
// // 				data: prepareMetricsArray(x.Values),
// // 				width: 600,
// // 				height: 200,
// // 				right: 40,
// // 				target: rcv.elem ,
// // 				x_accessor: 'd',
// // 				y_accessor: 'v'
// // 			});    
// // 		},
// // 		(e) => { console.log('onError: %s', e); },
// // 		() => { console.log('onCompleted'); });

// //    // MG.convert.date(this.props.data, 'd', '%Y-%m-%dT%H:%M:%S.%LZ');
// //       MG.data_graphic({
// // 		title: title ,
// // 		description: "This is a simple line chart.",
// // 		data: [{"d": new Date(), "v": 0}], //this.props.data,
// // 		width: 600,
// // 		height: 200,
// // 		right: 40,
// // 		target: this.elem,
// // 		x_accessor: 'd',
// // 		y_accessor: 'v'
// //     });    

// //    // ReactDOM.render(<Chart data = {this.props.data } />,  document.getElementById("root"));
// //   },

// //   handleLoadMoreClick:function () {
// //   //  this.props.loadData(this.props.endpoint, true)
// //   },

// //   render:function() {
// //     //  const { data } = this.props
// //     // if (!data) {
// //     //   return <h1><i>Loading {this.props.endpoint }{"'data..."}</i></h1>
// //     // }
// //     return <div>
// // 		<div ref={el => {if (el){this.elem = el}}}/>
// // 		 <table>
// //         <thead>
// //           <tr>
// //               <th>{this.title}</th>
// //           </tr>
// //         </thead>
// //       </table>
// // 	  </div>
// //   }
// // }))};

// // var chartsFactory = function () {
// // 	var rcv = mobx.observable({
// // 		charts: [],
// // 		addChart: mobx.action(function addChart (chart) {
// // 			rcv.charts.push(chart);
// // 		}),
// // 	});
// // 	return rcv;
// // };

// // var chartStore = chartsFactory()


// // var TodoListView = mobxReact.observer(function TodoListView () {

// // 		var listItems = this.props.todoList.todos.map(function (todo) {
// // 			return React.createElement(TodoView, {todo: todo, key: todo.id});
// // 		});

// // 		return React.createElement('div', null,
// // 			React.createElement('ul', null, listItems),
// // 			'Tasks left: ' + this.props.todoList.unfinishedTodoCount
// // 		);
// // 	}
// // );

// // var ChartsView = mobxReact.observer(React.createClass({
// // 		render: function () {
// // 			var charts = this.props.charts;
// // 			return(
// // 				<div style={{flex: 1, flexDirection: 'row'}}>
// // 					 {charts.charts.map(function(chart, index){
// //                     return React.createElement(chart, {chart:chart});;
// //                   })}
// // 				</div>
// // 			);
// // 		},
// // 		selectHandler: function () {
// // 			this.props.todo.toggleStatus();
// // 		}
// // 	})
// // );


// // //chartStore.addChart(chartFactory("test chart", [{"d": 10, "v": 5},{"d": 11, "v": 3}]))


// // export default class extends Component {
// // // 	 addTodo(){
// // // store.addTodo(todoFactory(prompt("Task name")))
// // // }
// // addChart(){
// // 	chartStore.addChart(chartFactory(prompt("chart name")))
// // }        
// //   render () {
// //     return (
// //        <div>
// // 	    <Head>
// //          <link rel="stylesheet" href="/static/metricsgraphics.css" />
// //       <meta name="viewport" content="width=device-width, initial-scale=1" />
// //         </Head>
// //         <ChartsView charts={chartStore} />
// // 	   <TodoListView todoList = {store} />
// // 	   <button onClick = {this.addChart} >add chart</button>

// //       </div>

// //     )
// //   }
// // }


// // // var poller$ =function (){return  Rx.Observable.ajax.getJSON('http://localhost:2222/home/metrics?time=50&interval=5')
// // //   .retryWhen(function(errors){
// // //     return errors.scan(function(acc, x) { return acc + x; }, 0)
// // //       .flatMap(function(x){ 
// // //         return Rx.Observable.timer(computeInterval(true));
// // //       });
// // //   })
// // //   .repeatWhen(function(notification){
// // //     return notification
// // //       .scan(function(acc, x) {
// // // 		   return acc + x; }, 0)
// // //       .flatMap(function(x){ 
// // //         return Rx.Observable.timer(computeInterval());
// // //       });
// // //   });
// // // }


// // // class ObservableTodoStore {
// // // 	@observable todos = [];
// // //     @observable pendingRequests = 0;

// // //     constructor() {
// // //         mobx.autorun(() => console.log(this.report));
// // //     }

// // // 	@computed get completedTodosCount() {
// // //     	return this.todos.filter(
// // // 			todo => todo.completed === true
// // // 		).length;
// // //     }

// // // 	@computed get report() {
// // // 		if (this.todos.length === 0)
// // // 			return "<none>";
// // // 		return `Next todo: "${this.todos[0].task}". ` + 
// // // 			`Progress: ${this.completedTodosCount}/${this.todos.length}`; 
// // // 	}

// // // 	addTodo(task) {
// // // 		this.todos.push({ 
// // // 			task: task,
// // // 			completed: false,
// // // 			assignee: null
// // // 		});
// // // 	}
// // // }
// // // const observableTodoStore = new ObservableTodoStore();

// // // class TodoStore {
// // // 	todos = [];

// // // 	get completedTodosCount() {
// // //     	return this.todos.filter(
// // // 			todo => todo.completed === true
// // // 		).length;
// // //     }

// // // 	report() {
// // // 		if (this.todos.length === 0)
// // // 			return "<none>";
// // // 		return `Next todo: "${this.todos[0].task}". ` + 
// // // 			`Progress: ${this.completedTodosCount}/${this.todos.length}`; 
// // // 	}

// // //     addTodo(task) {
// // // 		this.todos.push({ 
// // // 			task: task,
// // // 			completed: false,
// // //             assignee: null
// // // 		});
// // // 	}
// // // }


// // // const PING = 'PING';
// // // const PONG = 'PONG';

// // // const ping= () => ({type : PING});

// // // // pingEpic will listen for actions of type PING and map them to a new action, PONG. This example is functionally equivalent to doing this:
// // // const pingEpic = action$ =>
// // //   action$.filter(action => action.type === 'PING')
// // //     .mapTo({ type: 'PONG' });

// // // // later...
// // // //dispatch({ type: 'PING' });


// // // const pingReducer = (state = {
// // //   isPinging : false }, action) => {
// // //     switch(action.type){
// // //       case PING:
// // //       return {isPinging: true};

// // //       case PONG: 
// // //       return {isPinging: false};

// // //       default:
// // //       return state;
// // //     }
// // //   }

// // // // config store
// // // const epicMiddleware = createEpicMiddleware(pingEpic)
// // // const store = createStore(pingReducer, applyMiddleware(epicMiddleware))

// // // let App = ({isPinging, ping })=> (
// // //   <div>
// // //     <h1> is pinging: {isPinging.toString()}</h1>
// // //    <button onClick={ping}>start ping
// // //    </button>
// // //    </div> 
// // // )
// // // App = connect (
// // //   ({ isPinging}) => ({isPinging}),
// // //   {ping}
// // // )(App);


// // // ReactDOM.render(
// // //   <Provider store={store}>
// // //   <App />
// // //   </Provider>, document.getElementById('root')
// // // );

// // // export default class extends React.Component {
// // // static getInitialProps ({ req }) {
// // //     const isServer = !!req
// // //     const store = initStore(reducer, null, isServer)
// // //     store.dispatch({ type: 'TICK', ts: Date.now() })
// // //     return  { initialState: store.getState(), isServer }
// // //   }
// // //     constructor (props) {
// // //     super(props)
// // //     this.store = initStore(reducer, props.initialState, props.isServer)
// // //   }

// // //    componentDidMount () {
// // //    // this.timer = this.store.dispatch(startClock())
// // //   }

// // //   render () {
// // //     return (
// // //         <Provider store={this.store}>
// // //              <div>
// // //       <Head>
// // //          <link rel="stylesheet" href="/static/metricsgraphics.css" />
// // //       <meta name="viewport" content="width=device-width, initial-scale=1" />
// // //         </Head>
// // //        <div id="root">Test</div>
// // //         <Chart/>
// // //       <table>
// // //         <thead>
// // //           <tr>

// // //               <th>ClientRequest Latency, Writes, fct=15MinuteRate</th>
// // //           </tr>
// // //         </thead>

// // //       </table>
// // //       </div>
// // //       </Provider>

// // //     )
// // //   }
// // // }

// // // <tbody>
// // //           {
// // //               this.props.data.map( (data, i) => (
// // //                   <tr key={i}>
// // //                       <td>{ data.d }</td>
// // //                       <td>
// // //                         <Link href={`/account?id=${data.d}`}>{ data.v }</Link>
// // //                       </td>
// // //                   </tr>
// // //               ))
// // //           }
// // //        </tbody>
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbIlN1cGVyU2VjcmV0RGl2IiwiY3JlYXRlTGluayIsImhyZWYiLCJ0ZXh0IiwiSW5kZXgiLCJpc0F1dGhlbnRpY2F0ZWQiLCJsb2dnZWRVc2VyIiwibmFtZSIsInByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBR0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLFNBQ3JCO0FBQUE7QUFBQSxNQUFLLFdBQVUsV0FBZjtBQUFBO0FBQUEsR0FEcUI7QUFBQSxDQUF2Qjs7QUFNQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsU0FDakI7QUFBQTtBQUFBLE1BQUcsTUFBTUQsSUFBVCxFQUFlLFdBQVUsTUFBekI7QUFBaUNDO0FBQWpDLEdBRGlCO0FBQUEsQ0FBbkI7O0FBSUEsSUFBTUMsUUFBUSxTQUFSQSxLQUFRO0FBQUEsTUFBR0MsZUFBSCxRQUFHQSxlQUFIO0FBQUEsTUFBb0JDLFVBQXBCLFFBQW9CQSxVQUFwQjtBQUFBLFNBQ1o7QUFBQTtBQUFBO0FBQ0dELHVCQUFtQiw4QkFBQyxjQUFELE9BRHRCO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVSxTQUFkO0FBQUE7QUFBK0JDLHFCQUFZQSxXQUFXQyxJQUF2QixHQUE4QixNQUE3RDtBQUFBO0FBQUEsT0FERjtBQUVHLE9BQUNGLGVBQUQsSUFDQztBQUFBO0FBQUEsVUFBRyxXQUFVLFNBQWI7QUFBQTtBQUNrRDtBQUFBO0FBQUEsWUFBTSxNQUFLLGVBQVg7QUFBNEJKLHFCQUFXLGVBQVgsRUFBNEIsU0FBNUI7QUFBNUIsU0FEbEQ7QUFBQTtBQUFBLE9BSEo7QUFPR0kseUJBQ0M7QUFBQTtBQUFBLFVBQUcsV0FBVSxTQUFiO0FBQUE7QUFDMEM7QUFBQTtBQUFBLFlBQU0sTUFBSyxTQUFYO0FBQXNCSixxQkFBVyxTQUFYLEVBQXNCLGVBQXRCO0FBQXRCLFNBRDFDO0FBQUE7QUFBQTtBQVJKO0FBRkYsR0FEWTtBQUFBLENBQWQ7O0FBbUJBRyxNQUFNSSxTQUFOLEdBQWtCO0FBQ2hCSCxtQkFBaUIsaUJBQVVJLElBQVYsQ0FBZUMsVUFEaEI7QUFFaEJKLGNBQVksaUJBQVVLO0FBRk4sQ0FBbEI7O2tCQUtlLDJCQUFZUCxLQUFaLEM7O0FBR2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFyYy93ZWJkZXYvYm9vayIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5pbXBvcnQgZGVmYXVsdFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9ob2NzL2RlZmF1bHRQYWdlJ1xuXG4vLyBjb25zdCBzdHlsZXMgPSB7XG4vLyAgIHNlY3JldERpdjogY3NzKHtcbi8vICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWNmMGYxJyxcbi8vICAgICBib3hTaGFkb3c6ICcwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCknLFxuLy8gICAgIGJvcmRlclJhZGl1czogMixcbi8vICAgICBwYWRkaW5nOiAxMCxcbi8vICAgICBtaW5IZWlnaHQ6IDEwMCxcbi8vICAgICBkaXNwbGF5OiAnZmxleCcsXG4vLyAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4vLyAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuLy8gICAgIGNvbG9yOiAnIzMzMycsXG4vLyAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbi8vICAgICBmb250U2l6ZTogNDAsXG4vLyAgICAgZm9udFdlaWdodDogJzEwMCcsXG4vLyAgICAgbWFyZ2luQm90dG9tOiAzMFxuLy8gICB9KSxcbi8vICAgbWFpbjogY3NzKHtcbi8vICAgICBtYXhXaWR0aDogNzUwLFxuLy8gICAgIG1hcmdpbjogJzAgYXV0bycsXG4vLyAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuLy8gICB9KSxcbi8vICAgaGVhZGluZzogY3NzKHtcbi8vICAgICBmb250U2l6ZTogNDAsXG4vLyAgICAgZm9udFdlaWdodDogMjAwLFxuLy8gICAgIGxpbmVIZWlnaHQ6ICc0MHB4J1xuLy8gICB9KSxcbi8vICAgY29udGVudDogY3NzKHtcbi8vICAgICBmb250U2l6ZTogMjAsXG4vLyAgICAgZm9udFdlaWdodDogMjAwLFxuLy8gICAgIGxpbmVIZWlnaHQ6ICczMHB4J1xuLy8gICB9KSxcbi8vICAgbGluazogY3NzKHtcbi8vICAgICBjb2xvcjogJyMzMzMnLFxuLy8gICAgIHBhZGRpbmdCb3R0b206IDIsXG4vLyAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNjY2MnLFxuLy8gICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4vLyAgICAgZm9udFdlaWdodDogNDAwLFxuLy8gICAgIGxpbmVIZWlnaHQ6ICczMHB4Jyxcbi8vICAgICB0cmFuc2l0aW9uOiAnYm9yZGVyLWJvdHRvbSAuMnMnLFxuLy8gICAgICc6aG92ZXInOiB7XG4vLyAgICAgICBib3JkZXJCb3R0b21Db2xvcjogJyMzMzMnXG4vLyAgICAgfVxuLy8gICB9KVxuLy8gfVxuXG5jb25zdCBTdXBlclNlY3JldERpdiA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzZWNyZXREaXZcIj5cbiAgICBUaGlzIGlzIGEgc3VwZXIgc2VjcmV0IGRpdi5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IGNyZWF0ZUxpbmsgPSAoaHJlZiwgdGV4dCkgPT4gKFxuICA8YSBocmVmPXtocmVmfSBjbGFzc05hbWU9XCJsaW5rXCI+e3RleHR9PC9hPlxuKVxuXG5jb25zdCBJbmRleCA9ICh7IGlzQXV0aGVudGljYXRlZCwgbG9nZ2VkVXNlciB9KSA9PiAoXG4gIDxkaXY+XG4gICAge2lzQXV0aGVudGljYXRlZCAmJiA8U3VwZXJTZWNyZXREaXYgLz59XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPkhlbGxvIHtsb2dnZWRVc2VyPyBsb2dnZWRVc2VyLm5hbWUgOiBcIm1hdGVcIn0hPC9oMT5cbiAgICAgIHshaXNBdXRoZW50aWNhdGVkICYmIChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIFlvdSdyZSBub3QgYXV0aGVudGljYXRlZCB5ZXQuIE1heWJlIHlvdSB3YW50IHRvIDxMaW5rIGhyZWY9Jy9hdXRoL3NpZ24taW4nPntjcmVhdGVMaW5rKCcvYXV0aC9zaWduLWluJywgJ3NpZ24gaW4nKX08L0xpbms+P1xuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgICAge2lzQXV0aGVudGljYXRlZCAmJiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICBXb290ISBZb3UncmUgYXV0aGVudGljYXRlZCBub3csIGdvIHRvIGEgPExpbmsgaHJlZj0nL3NlY3JldCc+e2NyZWF0ZUxpbmsoJy9zZWNyZXQnLCAnc2VjdXJlZCBwbGFjZScpfTwvTGluaz4hXG4gICAgICAgIDwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKVxuXG5JbmRleC5wcm9wVHlwZXMgPSB7XG4gIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbG9nZ2VkVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFBhZ2UoSW5kZXgpXG5cblxuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdtb2J4LXJlYWN0Jztcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG4vLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbi8vIGltcG9ydCBTdG9yZXMgZnJvbSAnLi4vc3RvcmVzL2luZGV4LmpzJztcbi8vIGltcG9ydCBDaGFydExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9jaGFydC9saXN0LmpzJztcblxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbi8vICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyByZXEgfSkge1xuLy8gICAgIGNvbnN0IGlzU2VydmVyID0gISFyZXE7XG4vLyAgICAgY29uc3Qgc3RvcmVzID0gU3RvcmVzKGlzU2VydmVyKTtcbi8vICAgICBhd2FpdCBzdG9yZXMuTWV0cmljU3RvcmUuZmV0Y2hJbml0aWFsRGF0YSgpO1xuLy8gICAgIHJldHVybiB7aW5pdGlhbFN0YXRlOiBzdG9yZXMuZ2V0U3RhdGUoKSwgaXNTZXJ2ZXJ9O1xuLy8gICB9XG5cbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcyk7XG4vLyAgICAgdGhpcy5zdG9yZXMgPSBTdG9yZXMocHJvcHMuaXNTZXJ2ZXIsIHByb3BzLmluaXRpYWxTdGF0ZSk7XG4vLyAgIH1cblxuLy8gICByZW5kZXIgKCkge1xuLy8gICAgIHJldHVybiA8UHJvdmlkZXIgeyAuLi50aGlzLnN0b3JlcyB9PlxuLy8gICAgICAgPGRpdj5cbi8vIFx0ICAgPEhlYWQ+XG4vLyAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvbWV0cmljc2dyYXBoaWNzLmNzc1wiIC8+XG4vLyAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvcmVhY3Qtc2VsZWN0LmNzc1wiIC8+XG4vLyAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvcmVhY3Qtc2VsZWN0LXZpcnR1YWxpemVkLmNzc1wiIC8+XG4vLyAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvcmVhY3QtdmlydHVhbGl6ZWQuY3NzXCIgLz5cbi8vICAgICAgIFx0IDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4vLyBcdCAgPC9IZWFkPlxuLy8gICAgICAgICA8aDE+Q2hhcnQgTGlzdDwvaDE+XG4vLyAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRkXCI+IEFkZCBhIGNoYXJ0PC9MaW5rPlxuLy8gICAgICAgICA8aHIgLz5cbi8vICAgICAgICAgPENoYXJ0TGlzdCAvPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9Qcm92aWRlcj5cbi8vICAgfVxuLy8gfVxuXG5cbi8vIC8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSAgZnJvbSAncmVhY3QnXG4vLyAvLyBpbXBvcnQgeyBQcm92aWRlciwgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuLy8gLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gLy8gaW1wb3J0IHsgc3R5bGUgfSBmcm9tICduZXh0L2Nzcydcbi8vIC8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbi8vIC8vIC8vaW1wb3J0IENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcnQnXG4vLyAvLyAvL2ltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG4vLyAvLyBpbXBvcnQgeyByZWR1Y2VyLCBpbml0U3RvcmUsIHN0YXJ0Q2xvY2sgfSBmcm9tICcuLi9zdG9yZSdcbi8vIC8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuLy8gLy8gaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuLy8gLy8gaW1wb3J0IFJ4IGZyb20gJ3J4anMvUngnOyBcbi8vIC8vIGltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9kb20vYWpheCc7XG4vLyAvLyBpbXBvcnQge2NyZWF0ZUVwaWNNaWRkbGV3YXJlfSBmcm9tICdyZWR1eC1vYnNlcnZhYmxlJ1xuLy8gLy8gaW1wb3J0IE1HIGZyb20gJ21ldHJpY3MtZ3JhcGhpY3MnO1xuXG4vLyAvLyBpbXBvcnQgbW9ieCwgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCB9IGZyb20gJ21vYngnO1xuLy8gLy8gaW1wb3J0IG1vYnhSZWFjdCwgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG5cblxuLy8gLy8gLy8gUmVhY3RET00ucmVuZGVyKFxuLy8gLy8gLy8gXHRSZWFjdC5jcmVhdGVFbGVtZW50KFRvZG9MaXN0Vmlldywge3RvZG9MaXN0OiBzdG9yZX0pLFxuLy8gLy8gLy8gXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW91bnQnKVxuLy8gLy8gLy8gKTtcblxuLy8gLy8gdmFyIHRvZG9GYWN0b3J5ID0gZnVuY3Rpb24gKHRpdGxlKSB7XG5cbi8vIC8vIFx0dmFyIHRvZG8gPSB7XG4vLyAvLyBcdFx0aWQ6IE1hdGgucmFuZG9tKClcbi8vIC8vIFx0fTtcbi8vIC8vIFx0bW9ieC5leHRlbmRPYnNlcnZhYmxlKHRvZG8sXG4vLyAvLyBcdFx0e1xuLy8gLy8gXHRcdFx0dGl0bGU6IHRpdGxlLFxuLy8gLy8gXHRcdFx0ZmluaXNoZWQ6IGZhbHNlLFxuLy8gLy8gXHRcdFx0dG9nZ2xlU3RhdHVzOiBtb2J4LmFjdGlvbihmdW5jdGlvbiB0b2dnbGVTdGF0dXMgKCkge1xuLy8gLy8gXHRcdFx0XHR0b2RvLmZpbmlzaGVkID0gIXRvZG8uZmluaXNoZWQ7XG4vLyAvLyBcdFx0XHR9KVxuLy8gLy8gXHRcdH1cbi8vIC8vIFx0KTtcbi8vIC8vIFx0cmV0dXJuIHRvZG87XG4vLyAvLyB9O1xuXG4vLyAvLyB2YXIgdG9kb0xpc3RGYWN0b3J5ID0gZnVuY3Rpb24gKCkge1xuLy8gLy8gXHR2YXIgdG9kb0xpc3QgPSBtb2J4Lm9ic2VydmFibGUoe1xuLy8gLy8gXHRcdHRvZG9zOiBbXSxcbi8vIC8vIFx0XHRnZXQgdW5maW5pc2hlZFRvZG9Db3VudCAoKSB7XG4vLyAvLyBcdFx0XHRyZXR1cm4gdG9kb0xpc3QudG9kb3MuZmlsdGVyKGZ1bmN0aW9uICh0b2RvKSB7XG4vLyAvLyBcdFx0XHRcdHJldHVybiAhdG9kby5maW5pc2hlZDtcbi8vIC8vIFx0XHRcdH0pLmxlbmd0aDtcbi8vIC8vIFx0XHR9LFxuLy8gLy8gXHRcdGFkZFRvZG86IG1vYnguYWN0aW9uKGZ1bmN0aW9uIGFkZFRvZG8gKHRvZG8pIHtcbi8vIC8vIFx0XHRcdHRvZG9MaXN0LnRvZG9zLnB1c2godG9kbyk7XG4vLyAvLyBcdFx0fSksXG4vLyAvLyBcdFx0YWRkVG9kb3M6IG1vYnguYWN0aW9uKGZ1bmN0aW9uIGFkZFRvZG9zICh0b2Rvcykge1xuLy8gLy8gXHRcdFx0dG9kb0xpc3QudG9kb3MgPSB0b2RvTGlzdC50b2Rvcy5jb25jYXQodG9kb3MpO1xuLy8gLy8gXHRcdH0pXG4vLyAvLyBcdH0pO1xuXG4vLyAvLyBcdHJldHVybiB0b2RvTGlzdDtcbi8vIC8vIH07XG5cblxuLy8gLy8gdmFyIHN0b3JlID0gdG9kb0xpc3RGYWN0b3J5KCk7XG5cblxuLy8gLy8gdmFyIGNoYXJ0RmFjdG9yeSA9IGZ1bmN0aW9uICh0aXRsZSwgZGF0YSl7IHJldHVybiAgbW9ieFJlYWN0Lm9ic2VydmVyKFJlYWN0LmNyZWF0ZUNsYXNzKCB7XG4vLyAvLyBjcmVhdGVQb2xsZXI6IGZ1bmN0aW9uICgpe3JldHVybiAgUnguT2JzZXJ2YWJsZS5hamF4LmdldEpTT04oJ2h0dHA6Ly9sb2NhbGhvc3Q6MjIyMi9ob21lL21ldHJpY3M/dGltZT01JmludGVydmFsPTUnKVxuLy8gLy8gXHRcdC5yZXRyeVdoZW4oZnVuY3Rpb24oZXJyb3JzKXtcbi8vIC8vIFx0XHRcdHJldHVybiBlcnJvcnMuc2NhbihmdW5jdGlvbihhY2MsIHgpIHsgcmV0dXJuIGFjYyArIHg7IH0sIDApXG4vLyAvLyBcdFx0XHQuZmxhdE1hcChmdW5jdGlvbih4KXsgXG4vLyAvLyBcdFx0XHRcdHJldHVybiBSeC5PYnNlcnZhYmxlLnRpbWVyKGNvbXB1dGVJbnRlcnZhbCh0cnVlKSk7XG4vLyAvLyBcdFx0XHR9KTtcbi8vIC8vIFx0XHR9KVxuLy8gLy8gXHRcdC5yZXBlYXRXaGVuKGZ1bmN0aW9uKG5vdGlmaWNhdGlvbil7XG4vLyAvLyBcdFx0XHRyZXR1cm4gbm90aWZpY2F0aW9uXG4vLyAvLyBcdFx0XHQuc2NhbihmdW5jdGlvbihhY2MsIHgpIHtcbi8vIC8vIFx0XHRcdFx0cmV0dXJuIGFjYyArIHg7IH0sIDApXG4vLyAvLyBcdFx0XHQuZmxhdE1hcChmdW5jdGlvbih4KXsgXG4vLyAvLyBcdFx0XHRcdHJldHVybiBSeC5PYnNlcnZhYmxlLnRpbWVyKGNvbXB1dGVJbnRlcnZhbCgpKTtcbi8vIC8vIFx0XHRcdH0pO1xuLy8gLy8gXHRcdH0pO1xuLy8gLy8gXHRcdH0sXG5cblxuLy8gLy8gIGNvbXBvbmVudFdpbGxNb3VudDpmdW5jdGlvbigpIHtcbi8vIC8vICAgLy8gIGxvYWREYXRhKHRoaXMucHJvcHMuZW5kcG9pbnQpXG4vLyAvLyAgIH0sXG4vLyAvLyAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczpmdW5jdGlvbihuZXh0UHJvcHMpIHtcbi8vIC8vICAgICBpZiAobmV4dFByb3BzLmVuZHBvaW50ICE9PSB0aGlzLnByb3BzLmVuZHBvaW50KSB7XG4vLyAvLyAgIC8vICAgIGxvYWREYXRhKG5leHRQcm9wcy5lbmRwb2ludClcbi8vIC8vICAgICB9XG4vLyAvLyAgIH0sXG4vLyAvLyAgIGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCkge1xuLy8gLy8gXHQgIHZhciByY3YgPSB0aGlzO1xuLy8gLy8gXHQgIHRoaXMuY3JlYXRlUG9sbGVyKCkuc3Vic2NyaWJlKCAoeCkgPT4ge1xuLy8gLy8gXHRjb25zb2xlLmxvZygnb25OZXh0OiAlcycsSlNPTi5zdHJpbmdpZnkocHJlcGFyZU1ldHJpY3NBcnJheSh4LlZhbHVlcykpKTtcbi8vIC8vIFx0XHRcdE1HLmRhdGFfZ3JhcGhpYyh7XG4vLyAvLyBcdFx0XHRcdHRpdGxlOiByY3YudGl0bGUgLFxuLy8gLy8gXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgc2ltcGxlIGxpbmUgY2hhcnQuXCIsXG4vLyAvLyBcdFx0XHRcdGRhdGE6IHByZXBhcmVNZXRyaWNzQXJyYXkoeC5WYWx1ZXMpLFxuLy8gLy8gXHRcdFx0XHR3aWR0aDogNjAwLFxuLy8gLy8gXHRcdFx0XHRoZWlnaHQ6IDIwMCxcbi8vIC8vIFx0XHRcdFx0cmlnaHQ6IDQwLFxuLy8gLy8gXHRcdFx0XHR0YXJnZXQ6IHJjdi5lbGVtICxcbi8vIC8vIFx0XHRcdFx0eF9hY2Nlc3NvcjogJ2QnLFxuLy8gLy8gXHRcdFx0XHR5X2FjY2Vzc29yOiAndidcbi8vIC8vIFx0XHRcdH0pOyAgICBcbi8vIC8vIFx0XHR9LFxuLy8gLy8gXHRcdChlKSA9PiB7IGNvbnNvbGUubG9nKCdvbkVycm9yOiAlcycsIGUpOyB9LFxuLy8gLy8gXHRcdCgpID0+IHsgY29uc29sZS5sb2coJ29uQ29tcGxldGVkJyk7IH0pO1xuXHRcdFxuLy8gLy8gICAgLy8gTUcuY29udmVydC5kYXRlKHRoaXMucHJvcHMuZGF0YSwgJ2QnLCAnJVktJW0tJWRUJUg6JU06JVMuJUxaJyk7XG4vLyAvLyAgICAgICBNRy5kYXRhX2dyYXBoaWMoe1xuLy8gLy8gXHRcdHRpdGxlOiB0aXRsZSAsXG4vLyAvLyBcdFx0ZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHNpbXBsZSBsaW5lIGNoYXJ0LlwiLFxuLy8gLy8gXHRcdGRhdGE6IFt7XCJkXCI6IG5ldyBEYXRlKCksIFwidlwiOiAwfV0sIC8vdGhpcy5wcm9wcy5kYXRhLFxuLy8gLy8gXHRcdHdpZHRoOiA2MDAsXG4vLyAvLyBcdFx0aGVpZ2h0OiAyMDAsXG4vLyAvLyBcdFx0cmlnaHQ6IDQwLFxuLy8gLy8gXHRcdHRhcmdldDogdGhpcy5lbGVtLFxuLy8gLy8gXHRcdHhfYWNjZXNzb3I6ICdkJyxcbi8vIC8vIFx0XHR5X2FjY2Vzc29yOiAndidcbi8vIC8vICAgICB9KTsgICAgXG4gICAgXG4vLyAvLyAgICAvLyBSZWFjdERPTS5yZW5kZXIoPENoYXJ0IGRhdGEgPSB7dGhpcy5wcm9wcy5kYXRhIH0gLz4sICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xuLy8gLy8gICB9LFxuICBcbi8vIC8vICAgaGFuZGxlTG9hZE1vcmVDbGljazpmdW5jdGlvbiAoKSB7XG4vLyAvLyAgIC8vICB0aGlzLnByb3BzLmxvYWREYXRhKHRoaXMucHJvcHMuZW5kcG9pbnQsIHRydWUpXG4vLyAvLyAgIH0sXG4gIFxuLy8gLy8gICByZW5kZXI6ZnVuY3Rpb24oKSB7XG4vLyAvLyAgICAgLy8gIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wc1xuLy8gLy8gICAgIC8vIGlmICghZGF0YSkge1xuLy8gLy8gICAgIC8vICAgcmV0dXJuIDxoMT48aT5Mb2FkaW5nIHt0aGlzLnByb3BzLmVuZHBvaW50IH17XCInZGF0YS4uLlwifTwvaT48L2gxPlxuLy8gLy8gICAgIC8vIH1cbi8vIC8vICAgICByZXR1cm4gPGRpdj5cbi8vIC8vIFx0XHQ8ZGl2IHJlZj17ZWwgPT4ge2lmIChlbCl7dGhpcy5lbGVtID0gZWx9fX0vPlxuLy8gLy8gXHRcdCA8dGFibGU+XG4vLyAvLyAgICAgICAgIDx0aGVhZD5cbi8vIC8vICAgICAgICAgICA8dHI+XG4vLyAvLyAgICAgICAgICAgICAgIDx0aD57dGhpcy50aXRsZX08L3RoPlxuLy8gLy8gICAgICAgICAgIDwvdHI+XG4vLyAvLyAgICAgICAgIDwvdGhlYWQ+XG4vLyAvLyAgICAgICA8L3RhYmxlPlxuLy8gLy8gXHQgIDwvZGl2PlxuLy8gLy8gICB9XG4vLyAvLyB9KSl9O1xuXG4vLyAvLyB2YXIgY2hhcnRzRmFjdG9yeSA9IGZ1bmN0aW9uICgpIHtcbi8vIC8vIFx0dmFyIHJjdiA9IG1vYngub2JzZXJ2YWJsZSh7XG4vLyAvLyBcdFx0Y2hhcnRzOiBbXSxcbi8vIC8vIFx0XHRhZGRDaGFydDogbW9ieC5hY3Rpb24oZnVuY3Rpb24gYWRkQ2hhcnQgKGNoYXJ0KSB7XG4vLyAvLyBcdFx0XHRyY3YuY2hhcnRzLnB1c2goY2hhcnQpO1xuLy8gLy8gXHRcdH0pLFxuLy8gLy8gXHR9KTtcbi8vIC8vIFx0cmV0dXJuIHJjdjtcbi8vIC8vIH07XG5cbi8vIC8vIHZhciBjaGFydFN0b3JlID0gY2hhcnRzRmFjdG9yeSgpXG5cblxuLy8gLy8gdmFyIFRvZG9MaXN0VmlldyA9IG1vYnhSZWFjdC5vYnNlcnZlcihmdW5jdGlvbiBUb2RvTGlzdFZpZXcgKCkge1xuXG4vLyAvLyBcdFx0dmFyIGxpc3RJdGVtcyA9IHRoaXMucHJvcHMudG9kb0xpc3QudG9kb3MubWFwKGZ1bmN0aW9uICh0b2RvKSB7XG4vLyAvLyBcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUb2RvVmlldywge3RvZG86IHRvZG8sIGtleTogdG9kby5pZH0pO1xuLy8gLy8gXHRcdH0pO1xuXG4vLyAvLyBcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsXG4vLyAvLyBcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KCd1bCcsIG51bGwsIGxpc3RJdGVtcyksXG4vLyAvLyBcdFx0XHQnVGFza3MgbGVmdDogJyArIHRoaXMucHJvcHMudG9kb0xpc3QudW5maW5pc2hlZFRvZG9Db3VudFxuLy8gLy8gXHRcdCk7XG4vLyAvLyBcdH1cbi8vIC8vICk7XG5cbi8vIC8vIHZhciBDaGFydHNWaWV3ID0gbW9ieFJlYWN0Lm9ic2VydmVyKFJlYWN0LmNyZWF0ZUNsYXNzKHtcbi8vIC8vIFx0XHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcbi8vIC8vIFx0XHRcdHZhciBjaGFydHMgPSB0aGlzLnByb3BzLmNoYXJ0cztcbi8vIC8vIFx0XHRcdHJldHVybihcbi8vIC8vIFx0XHRcdFx0PGRpdiBzdHlsZT17e2ZsZXg6IDEsIGZsZXhEaXJlY3Rpb246ICdyb3cnfX0+XG4vLyAvLyBcdFx0XHRcdFx0IHtjaGFydHMuY2hhcnRzLm1hcChmdW5jdGlvbihjaGFydCwgaW5kZXgpe1xuLy8gLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjaGFydCwge2NoYXJ0OmNoYXJ0fSk7O1xuLy8gLy8gICAgICAgICAgICAgICAgICAgfSl9XG4vLyAvLyBcdFx0XHRcdDwvZGl2PlxuLy8gLy8gXHRcdFx0KTtcbi8vIC8vIFx0XHR9LFxuLy8gLy8gXHRcdHNlbGVjdEhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbi8vIC8vIFx0XHRcdHRoaXMucHJvcHMudG9kby50b2dnbGVTdGF0dXMoKTtcbi8vIC8vIFx0XHR9XG4vLyAvLyBcdH0pXG4vLyAvLyApO1xuXG5cbi8vIC8vIC8vY2hhcnRTdG9yZS5hZGRDaGFydChjaGFydEZhY3RvcnkoXCJ0ZXN0IGNoYXJ0XCIsIFt7XCJkXCI6IDEwLCBcInZcIjogNX0se1wiZFwiOiAxMSwgXCJ2XCI6IDN9XSkpXG5cblxuLy8gLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuLy8gLy8gLy8gXHQgYWRkVG9kbygpe1xuLy8gLy8gLy8gc3RvcmUuYWRkVG9kbyh0b2RvRmFjdG9yeShwcm9tcHQoXCJUYXNrIG5hbWVcIikpKVxuLy8gLy8gLy8gfVxuLy8gLy8gYWRkQ2hhcnQoKXtcbi8vIC8vIFx0Y2hhcnRTdG9yZS5hZGRDaGFydChjaGFydEZhY3RvcnkocHJvbXB0KFwiY2hhcnQgbmFtZVwiKSkpXG4vLyAvLyB9ICAgICAgICBcbi8vIC8vICAgcmVuZGVyICgpIHtcbi8vIC8vICAgICByZXR1cm4gKFxuLy8gLy8gICAgICAgIDxkaXY+XG4vLyAvLyBcdCAgICA8SGVhZD5cbi8vIC8vICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9tZXRyaWNzZ3JhcGhpY3MuY3NzXCIgLz5cbi8vIC8vICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4vLyAvLyAgICAgICAgIDwvSGVhZD5cbi8vIC8vICAgICAgICAgPENoYXJ0c1ZpZXcgY2hhcnRzPXtjaGFydFN0b3JlfSAvPlxuLy8gLy8gXHQgICA8VG9kb0xpc3RWaWV3IHRvZG9MaXN0ID0ge3N0b3JlfSAvPlxuLy8gLy8gXHQgICA8YnV0dG9uIG9uQ2xpY2sgPSB7dGhpcy5hZGRDaGFydH0gPmFkZCBjaGFydDwvYnV0dG9uPlxuICAgICBcbi8vIC8vICAgICAgIDwvZGl2PlxuXG4vLyAvLyAgICAgKVxuLy8gLy8gICB9XG4vLyAvLyB9XG5cblxuXG5cbi8vIC8vIC8vIHZhciBwb2xsZXIkID1mdW5jdGlvbiAoKXtyZXR1cm4gIFJ4Lk9ic2VydmFibGUuYWpheC5nZXRKU09OKCdodHRwOi8vbG9jYWxob3N0OjIyMjIvaG9tZS9tZXRyaWNzP3RpbWU9NTAmaW50ZXJ2YWw9NScpXG4vLyAvLyAvLyAgIC5yZXRyeVdoZW4oZnVuY3Rpb24oZXJyb3JzKXtcbi8vIC8vIC8vICAgICByZXR1cm4gZXJyb3JzLnNjYW4oZnVuY3Rpb24oYWNjLCB4KSB7IHJldHVybiBhY2MgKyB4OyB9LCAwKVxuLy8gLy8gLy8gICAgICAgLmZsYXRNYXAoZnVuY3Rpb24oeCl7IFxuLy8gLy8gLy8gICAgICAgICByZXR1cm4gUnguT2JzZXJ2YWJsZS50aW1lcihjb21wdXRlSW50ZXJ2YWwodHJ1ZSkpO1xuLy8gLy8gLy8gICAgICAgfSk7XG4vLyAvLyAvLyAgIH0pXG4vLyAvLyAvLyAgIC5yZXBlYXRXaGVuKGZ1bmN0aW9uKG5vdGlmaWNhdGlvbil7XG4vLyAvLyAvLyAgICAgcmV0dXJuIG5vdGlmaWNhdGlvblxuLy8gLy8gLy8gICAgICAgLnNjYW4oZnVuY3Rpb24oYWNjLCB4KSB7XG4vLyAvLyAvLyBcdFx0ICAgcmV0dXJuIGFjYyArIHg7IH0sIDApXG4vLyAvLyAvLyAgICAgICAuZmxhdE1hcChmdW5jdGlvbih4KXsgXG4vLyAvLyAvLyAgICAgICAgIHJldHVybiBSeC5PYnNlcnZhYmxlLnRpbWVyKGNvbXB1dGVJbnRlcnZhbCgpKTtcbi8vIC8vIC8vICAgICAgIH0pO1xuLy8gLy8gLy8gICB9KTtcbi8vIC8vIC8vIH1cblxuXG5cblxuXG4vLyAvLyAvLyBjbGFzcyBPYnNlcnZhYmxlVG9kb1N0b3JlIHtcbi8vIC8vIC8vIFx0QG9ic2VydmFibGUgdG9kb3MgPSBbXTtcbi8vIC8vIC8vICAgICBAb2JzZXJ2YWJsZSBwZW5kaW5nUmVxdWVzdHMgPSAwO1xuXG4vLyAvLyAvLyAgICAgY29uc3RydWN0b3IoKSB7XG4vLyAvLyAvLyAgICAgICAgIG1vYnguYXV0b3J1bigoKSA9PiBjb25zb2xlLmxvZyh0aGlzLnJlcG9ydCkpO1xuLy8gLy8gLy8gICAgIH1cblxuLy8gLy8gLy8gXHRAY29tcHV0ZWQgZ2V0IGNvbXBsZXRlZFRvZG9zQ291bnQoKSB7XG4vLyAvLyAvLyAgICAgXHRyZXR1cm4gdGhpcy50b2Rvcy5maWx0ZXIoXG4vLyAvLyAvLyBcdFx0XHR0b2RvID0+IHRvZG8uY29tcGxldGVkID09PSB0cnVlXG4vLyAvLyAvLyBcdFx0KS5sZW5ndGg7XG4vLyAvLyAvLyAgICAgfVxuXG4vLyAvLyAvLyBcdEBjb21wdXRlZCBnZXQgcmVwb3J0KCkge1xuLy8gLy8gLy8gXHRcdGlmICh0aGlzLnRvZG9zLmxlbmd0aCA9PT0gMClcbi8vIC8vIC8vIFx0XHRcdHJldHVybiBcIjxub25lPlwiO1xuLy8gLy8gLy8gXHRcdHJldHVybiBgTmV4dCB0b2RvOiBcIiR7dGhpcy50b2Rvc1swXS50YXNrfVwiLiBgICsgXG4vLyAvLyAvLyBcdFx0XHRgUHJvZ3Jlc3M6ICR7dGhpcy5jb21wbGV0ZWRUb2Rvc0NvdW50fS8ke3RoaXMudG9kb3MubGVuZ3RofWA7IFxuLy8gLy8gLy8gXHR9XG5cbi8vIC8vIC8vIFx0YWRkVG9kbyh0YXNrKSB7XG4vLyAvLyAvLyBcdFx0dGhpcy50b2Rvcy5wdXNoKHsgXG4vLyAvLyAvLyBcdFx0XHR0YXNrOiB0YXNrLFxuLy8gLy8gLy8gXHRcdFx0Y29tcGxldGVkOiBmYWxzZSxcbi8vIC8vIC8vIFx0XHRcdGFzc2lnbmVlOiBudWxsXG4vLyAvLyAvLyBcdFx0fSk7XG4vLyAvLyAvLyBcdH1cbi8vIC8vIC8vIH1cbi8vIC8vIC8vIGNvbnN0IG9ic2VydmFibGVUb2RvU3RvcmUgPSBuZXcgT2JzZXJ2YWJsZVRvZG9TdG9yZSgpO1xuXG4vLyAvLyAvLyBjbGFzcyBUb2RvU3RvcmUge1xuLy8gLy8gLy8gXHR0b2RvcyA9IFtdO1xuXG4vLyAvLyAvLyBcdGdldCBjb21wbGV0ZWRUb2Rvc0NvdW50KCkge1xuLy8gLy8gLy8gICAgIFx0cmV0dXJuIHRoaXMudG9kb3MuZmlsdGVyKFxuLy8gLy8gLy8gXHRcdFx0dG9kbyA9PiB0b2RvLmNvbXBsZXRlZCA9PT0gdHJ1ZVxuLy8gLy8gLy8gXHRcdCkubGVuZ3RoO1xuLy8gLy8gLy8gICAgIH1cblxuLy8gLy8gLy8gXHRyZXBvcnQoKSB7XG4vLyAvLyAvLyBcdFx0aWYgKHRoaXMudG9kb3MubGVuZ3RoID09PSAwKVxuLy8gLy8gLy8gXHRcdFx0cmV0dXJuIFwiPG5vbmU+XCI7XG4vLyAvLyAvLyBcdFx0cmV0dXJuIGBOZXh0IHRvZG86IFwiJHt0aGlzLnRvZG9zWzBdLnRhc2t9XCIuIGAgKyBcbi8vIC8vIC8vIFx0XHRcdGBQcm9ncmVzczogJHt0aGlzLmNvbXBsZXRlZFRvZG9zQ291bnR9LyR7dGhpcy50b2Rvcy5sZW5ndGh9YDsgXG4vLyAvLyAvLyBcdH1cblxuLy8gLy8gLy8gICAgIGFkZFRvZG8odGFzaykge1xuLy8gLy8gLy8gXHRcdHRoaXMudG9kb3MucHVzaCh7IFxuLy8gLy8gLy8gXHRcdFx0dGFzazogdGFzayxcbi8vIC8vIC8vIFx0XHRcdGNvbXBsZXRlZDogZmFsc2UsXG4vLyAvLyAvLyAgICAgICAgICAgICBhc3NpZ25lZTogbnVsbFxuLy8gLy8gLy8gXHRcdH0pO1xuLy8gLy8gLy8gXHR9XG4vLyAvLyAvLyB9XG5cblxuLy8gLy8gLy8gY29uc3QgUElORyA9ICdQSU5HJztcbi8vIC8vIC8vIGNvbnN0IFBPTkcgPSAnUE9ORyc7XG5cbi8vIC8vIC8vIGNvbnN0IHBpbmc9ICgpID0+ICh7dHlwZSA6IFBJTkd9KTtcblxuLy8gLy8gLy8gLy8gcGluZ0VwaWMgd2lsbCBsaXN0ZW4gZm9yIGFjdGlvbnMgb2YgdHlwZSBQSU5HIGFuZCBtYXAgdGhlbSB0byBhIG5ldyBhY3Rpb24sIFBPTkcuIFRoaXMgZXhhbXBsZSBpcyBmdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBkb2luZyB0aGlzOlxuLy8gLy8gLy8gY29uc3QgcGluZ0VwaWMgPSBhY3Rpb24kID0+XG4vLyAvLyAvLyAgIGFjdGlvbiQuZmlsdGVyKGFjdGlvbiA9PiBhY3Rpb24udHlwZSA9PT0gJ1BJTkcnKVxuLy8gLy8gLy8gICAgIC5tYXBUbyh7IHR5cGU6ICdQT05HJyB9KTtcblxuLy8gLy8gLy8gLy8gbGF0ZXIuLi5cbi8vIC8vIC8vIC8vZGlzcGF0Y2goeyB0eXBlOiAnUElORycgfSk7XG5cblxuLy8gLy8gLy8gY29uc3QgcGluZ1JlZHVjZXIgPSAoc3RhdGUgPSB7XG4vLyAvLyAvLyAgIGlzUGluZ2luZyA6IGZhbHNlIH0sIGFjdGlvbikgPT4ge1xuLy8gLy8gLy8gICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4vLyAvLyAvLyAgICAgICBjYXNlIFBJTkc6XG4vLyAvLyAvLyAgICAgICByZXR1cm4ge2lzUGluZ2luZzogdHJ1ZX07XG5cbi8vIC8vIC8vICAgICAgIGNhc2UgUE9ORzogXG4vLyAvLyAvLyAgICAgICByZXR1cm4ge2lzUGluZ2luZzogZmFsc2V9O1xuXG4vLyAvLyAvLyAgICAgICBkZWZhdWx0OlxuLy8gLy8gLy8gICAgICAgcmV0dXJuIHN0YXRlO1xuLy8gLy8gLy8gICAgIH1cbi8vIC8vIC8vICAgfVxuXG4vLyAvLyAvLyAvLyBjb25maWcgc3RvcmVcbi8vIC8vIC8vIGNvbnN0IGVwaWNNaWRkbGV3YXJlID0gY3JlYXRlRXBpY01pZGRsZXdhcmUocGluZ0VwaWMpXG4vLyAvLyAvLyBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHBpbmdSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUoZXBpY01pZGRsZXdhcmUpKVxuXG4vLyAvLyAvLyBsZXQgQXBwID0gKHtpc1BpbmdpbmcsIHBpbmcgfSk9PiAoXG4vLyAvLyAvLyAgIDxkaXY+XG4vLyAvLyAvLyAgICAgPGgxPiBpcyBwaW5naW5nOiB7aXNQaW5naW5nLnRvU3RyaW5nKCl9PC9oMT5cbi8vIC8vIC8vICAgIDxidXR0b24gb25DbGljaz17cGluZ30+c3RhcnQgcGluZ1xuLy8gLy8gLy8gICAgPC9idXR0b24+XG4vLyAvLyAvLyAgICA8L2Rpdj4gXG4vLyAvLyAvLyApXG4vLyAvLyAvLyBBcHAgPSBjb25uZWN0IChcbi8vIC8vIC8vICAgKHsgaXNQaW5naW5nfSkgPT4gKHtpc1Bpbmdpbmd9KSxcbi8vIC8vIC8vICAge3Bpbmd9XG4vLyAvLyAvLyApKEFwcCk7XG5cblxuXG4vLyAvLyAvLyBSZWFjdERPTS5yZW5kZXIoXG4vLyAvLyAvLyAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuLy8gLy8gLy8gICA8QXBwIC8+XG4vLyAvLyAvLyAgIDwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4vLyAvLyAvLyApO1xuXG4vLyAvLyAvLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAvLyAvLyBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSB9KSB7XG4vLyAvLyAvLyAgICAgY29uc3QgaXNTZXJ2ZXIgPSAhIXJlcVxuLy8gLy8gLy8gICAgIGNvbnN0IHN0b3JlID0gaW5pdFN0b3JlKHJlZHVjZXIsIG51bGwsIGlzU2VydmVyKVxuLy8gLy8gLy8gICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ1RJQ0snLCB0czogRGF0ZS5ub3coKSB9KVxuLy8gLy8gLy8gICAgIHJldHVybiAgeyBpbml0aWFsU3RhdGU6IHN0b3JlLmdldFN0YXRlKCksIGlzU2VydmVyIH1cbi8vIC8vIC8vICAgfVxuLy8gLy8gLy8gICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuLy8gLy8gLy8gICAgIHN1cGVyKHByb3BzKVxuLy8gLy8gLy8gICAgIHRoaXMuc3RvcmUgPSBpbml0U3RvcmUocmVkdWNlciwgcHJvcHMuaW5pdGlhbFN0YXRlLCBwcm9wcy5pc1NlcnZlcilcbi8vIC8vIC8vICAgfVxuXG4vLyAvLyAvLyAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4vLyAvLyAvLyAgICAvLyB0aGlzLnRpbWVyID0gdGhpcy5zdG9yZS5kaXNwYXRjaChzdGFydENsb2NrKCkpXG4vLyAvLyAvLyAgIH1cblxuLy8gLy8gLy8gICByZW5kZXIgKCkge1xuLy8gLy8gLy8gICAgIHJldHVybiAoXG4vLyAvLyAvLyAgICAgICAgIDxQcm92aWRlciBzdG9yZT17dGhpcy5zdG9yZX0+XG4vLyAvLyAvLyAgICAgICAgICAgICAgPGRpdj5cbi8vIC8vIC8vICAgICAgIDxIZWFkPlxuLy8gLy8gLy8gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL21ldHJpY3NncmFwaGljcy5jc3NcIiAvPlxuLy8gLy8gLy8gICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbi8vIC8vIC8vICAgICAgICAgPC9IZWFkPlxuLy8gLy8gLy8gICAgICAgIDxkaXYgaWQ9XCJyb290XCI+VGVzdDwvZGl2PlxuLy8gLy8gLy8gICAgICAgICA8Q2hhcnQvPlxuLy8gLy8gLy8gICAgICAgPHRhYmxlPlxuLy8gLy8gLy8gICAgICAgICA8dGhlYWQ+XG4vLyAvLyAvLyAgICAgICAgICAgPHRyPlxuICAgICAgICAgXG4vLyAvLyAvLyAgICAgICAgICAgICAgIDx0aD5DbGllbnRSZXF1ZXN0IExhdGVuY3ksIFdyaXRlcywgZmN0PTE1TWludXRlUmF0ZTwvdGg+XG4vLyAvLyAvLyAgICAgICAgICAgPC90cj5cbi8vIC8vIC8vICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgXG4vLyAvLyAvLyAgICAgICA8L3RhYmxlPlxuLy8gLy8gLy8gICAgICAgPC9kaXY+XG4vLyAvLyAvLyAgICAgICA8L1Byb3ZpZGVyPlxuXG4vLyAvLyAvLyAgICAgKVxuLy8gLy8gLy8gICB9XG4vLyAvLyAvLyB9XG5cbi8vIC8vIC8vIDx0Ym9keT5cbi8vIC8vIC8vICAgICAgICAgICB7XG4vLyAvLyAvLyAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5tYXAoIChkYXRhLCBpKSA9PiAoXG4vLyAvLyAvLyAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cbi8vIC8vIC8vICAgICAgICAgICAgICAgICAgICAgICA8dGQ+eyBkYXRhLmQgfTwvdGQ+XG4vLyAvLyAvLyAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuLy8gLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hY2NvdW50P2lkPSR7ZGF0YS5kfWB9PnsgZGF0YS52IH08L0xpbms+XG4vLyAvLyAvLyAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbi8vIC8vIC8vICAgICAgICAgICAgICAgICAgIDwvdHI+XG4vLyAvLyAvLyAgICAgICAgICAgICAgICkpXG4vLyAvLyAvLyAgICAgICAgICAgfVxuLy8gLy8gLy8gICAgICAgIDwvdGJvZHk+Il19