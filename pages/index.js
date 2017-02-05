import React, { PropTypes } from 'react'
import Link from 'next/link'


import defaultPage from '../components/hocs/defaultPage'

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

const SuperSecretDiv = () => (
  <div className="secretDiv">
    This is a super secret div.
  </div>
)

const createLink = (href, text) => (
  <a href={href} className="link">{text}</a>
)

const Index = ({ isAuthenticated, loggedUser }) => (
  <div>
    {isAuthenticated && <SuperSecretDiv />}
    <div className="main">
      <h1 className="heading">Hello {loggedUser? loggedUser.name : "mate"}!</h1>
      {!isAuthenticated && (
        <p className="content">
          You're not authenticated yet. Maybe you want to <Link href='/auth/sign-in'>{createLink('/auth/sign-in', 'sign in')}</Link>?
        </p>
      )}
      {isAuthenticated && (
        <p className="content">
          Woot! You're authenticated now, go to a <Link href='/secret'>{createLink('/secret', 'secured place')}</Link>!
        </p>
      )}
    </div>
  </div>
)

Index.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loggedUser: PropTypes.object,
}

export default defaultPage(Index)


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