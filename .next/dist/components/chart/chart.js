'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
//import 'rxjs/add/observable/dom/ajax'
// import Autocomplete from 'react-autocomplete'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _mobx = require('mobx');

var _reactSizeme = require('react-sizeme');

var _reactSizeme2 = _interopRequireDefault(_reactSizeme);

var _MetricsGraphics = require('../MetricsGraphics');

var _MetricsGraphics2 = _interopRequireDefault(_MetricsGraphics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  (0, _defineProperty2.default)(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

//import MetricsGraphics from 'react-metrics-graphics';

var Chart = (0, _mobxReact.observer)(_class = (_class2 = function (_React$Component) {
  (0, _inherits3.default)(Chart, _React$Component);

  function Chart() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Chart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Chart.__proto__ || (0, _getPrototypeOf2.default)(Chart)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'title', _descriptor, _this), _initDefineProp(_this, 'refreshFlag', _descriptor2, _this), _initDefineProp(_this, 'dcs', _descriptor3, _this), _initDefineProp(_this, 'dcsSelected', _descriptor4, _this), _initDefineProp(_this, 'clusters', _descriptor5, _this), _initDefineProp(_this, 'clustersSelected', _descriptor6, _this), _initDefineProp(_this, 'hosts', _descriptor7, _this), _initDefineProp(_this, 'hostsSelected', _descriptor8, _this), _initDefineProp(_this, 'metrics', _descriptor9, _this), _initDefineProp(_this, 'metricNameSelected', _descriptor10, _this), _this.componentDidMount = function () {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chart, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
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
  }, {
    key: 'componentWillReact',
    value: function componentWillReact() {
      //console.log("I will re-render, since the todo has changed!");

    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unMount();
    }
  }, {
    key: 'unMount',


    // clean subscription in case we leave the page or add other metrics 
    value: function unMount() {
      // if (this.poller) {
      //   this.poller.unsubscribe();
      // }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'render',
    value: function render() {
      // <input type="button" onClick={this.addMetric} value="Click Me!" />
      //         {this.metrics.map( metric => <button>{metric}</button> )}
      //<div ref={el => {if (el){this.elem = el}}} data={this.props.chart? this.props.chart.data: undefined} />

      // <ol>

      //   {this.props.chart ? this.props.chart.metrics.map(metric => <button>{metric.name}</button>) : "No metric yet"}
      // </ol>
      return _react2.default.createElement(
        'div',
        null,
        this.props.chart.counter,
        _react2.default.createElement(_MetricsGraphics2.default, {
          title: this.props.chart.title,
          description: 'This graphic shows a time-series of downloads.',
          missing_text: 'getting data on next poll',
          chart_type: this.props.chart.type,
          width: this.props.size.width,
          data: this.props.chart.data,
          height: 250,
          x_accessor: 'd',
          y_accessor: 'v'
        })
      );
    }
  }]);
  return Chart;
}(_react2.default.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'title', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return props.chart ? props.chart.title : "";
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'refreshFlag', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'dcs', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'dcsSelected', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'clusters', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'clustersSelected', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'hosts', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'hostsSelected', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'metrics', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'metricNameSelected', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class2)) || _class;

exports.default = (0, _reactSizeme2.default)()(Chart);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQvY2hhcnQuanMiXSwibmFtZXMiOlsiQ2hhcnQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnNvbGUiLCJsb2ciLCJ1bk1vdW50IiwibmV4dFByb3BzIiwicHJvcHMiLCJjaGFydCIsImNvdW50ZXIiLCJ0aXRsZSIsInR5cGUiLCJzaXplIiwid2lkdGgiLCJkYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFKQTs7OztBQUNBOztBQUNBOztBQUlBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7SUFHTUEsSzs7Ozs7Ozs7Ozs7Ozs7cXhCQTBDSkMsaUIsR0FBb0IsWUFBTSxDQUN6QixDOzs7OzswQ0ExQnFCO0FBQ3BCQyxjQUFRQyxHQUFSLENBQVksK0NBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7O3lDQUdvQjtBQUNuQjs7QUFFRDs7OzJDQUVzQjtBQUNyQixXQUFLQyxPQUFMO0FBQ0Q7Ozs7O0FBT0Q7OEJBQ1U7QUFDUjtBQUNBO0FBQ0E7QUFDRDs7OzhDQUd5QkMsUyxFQUFXLENBRXBDOzs7NkJBRVE7QUFDUDtBQUNBO0FBQ0E7O0FBRUU7O0FBRUE7QUFDQTtBQUNGLGFBQU87QUFBQTtBQUFBO0FBQ04sYUFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxPQURYO0FBRUw7QUFDRSxpQkFBTyxLQUFLRixLQUFMLENBQVdDLEtBQVgsQ0FBaUJFLEtBRDFCO0FBRUUsdUJBQVksZ0RBRmQ7QUFHRSx3QkFBYSwyQkFIZjtBQUlFLHNCQUFZLEtBQUtILEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkcsSUFKL0I7QUFLRSxpQkFBTyxLQUFLSixLQUFMLENBQVdLLElBQVgsQ0FBZ0JDLEtBTHpCO0FBTUUsZ0JBQU0sS0FBS04sS0FBTCxDQUFXQyxLQUFYLENBQWlCTSxJQU56QjtBQU9FLGtCQUFRLEdBUFY7QUFRRSxzQkFBVyxHQVJiO0FBU0Usc0JBQVc7QUFUYjtBQUZLLE9BQVA7QUFlRDs7O0VBcEZpQixnQkFBTUMsUzs7O1dBRUpSLE1BQU1DLEtBQU4sR0FBY0QsTUFBTUMsS0FBTixDQUFZRSxLQUExQixHQUFrQyxFOzs7OztXQUM1QixLOzs7OztXQUNSLEk7Ozs7O1dBQ1EsSTs7Ozs7V0FDSCxJOzs7OztXQUNRLEk7Ozs7O1dBQ1gsSTs7Ozs7V0FDUSxJOzs7OztXQUNOLEU7Ozs7O1dBQ1csSTs7OztrQkE2RXBCLDZCQUFTVCxLQUFULEM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXJjL3dlYmRldi9ib29rIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBhY3Rpb24gfSBmcm9tICdtb2J4Jztcbi8vaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2RvbS9hamF4J1xuLy8gaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tICdyZWFjdC1hdXRvY29tcGxldGUnXG5cbmltcG9ydCBzaXplTWUgZnJvbSAncmVhY3Qtc2l6ZW1lJztcbmltcG9ydCBNZXRyaWNzR3JhcGhpY3MgZnJvbSAnLi4vTWV0cmljc0dyYXBoaWNzJztcbi8vaW1wb3J0IE1ldHJpY3NHcmFwaGljcyBmcm9tICdyZWFjdC1tZXRyaWNzLWdyYXBoaWNzJztcblxuQG9ic2VydmVyXG5jbGFzcyBDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgQG9ic2VydmFibGUgdGl0bGUgPSBwcm9wcy5jaGFydCA/IHByb3BzLmNoYXJ0LnRpdGxlIDogXCJcIjtcbiAgQG9ic2VydmFibGUgcmVmcmVzaEZsYWcgPSBmYWxzZTtcbiAgQG9ic2VydmFibGUgZGNzID0gbnVsbDtcbiAgQG9ic2VydmFibGUgZGNzU2VsZWN0ZWQgPSBudWxsO1xuICBAb2JzZXJ2YWJsZSBjbHVzdGVycyA9IG51bGw7XG4gIEBvYnNlcnZhYmxlIGNsdXN0ZXJzU2VsZWN0ZWQgPSBudWxsO1xuICBAb2JzZXJ2YWJsZSBob3N0cyA9IG51bGw7XG4gIEBvYnNlcnZhYmxlIGhvc3RzU2VsZWN0ZWQgPSBudWxsO1xuICBAb2JzZXJ2YWJsZSBtZXRyaWNzID0gW107XG4gIEBvYnNlcnZhYmxlIG1ldHJpY05hbWVTZWxlY3RlZCA9IG51bGw7XG5cbiBcblxuXG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkkgd2lsbCByZS1yZW5kZXIsIHNpbmNlIHRoZSB0b2RvIGhhcyBjaGFuZ2VkIVwiKTtcbiAgICAvLyAgIE1HLmRhdGFfZ3JhcGhpYyh7XG4gICAgLy8gdGl0bGU6IHRoaXMudGl0bGUgLFxuICAgIC8vIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBzaW1wbGUgbGluZSBjaGFydC5cIixcbiAgICAvLyBjaGFydF90eXBlOiAnbWlzc2luZy1kYXRhJyxcbiAgICAvLyBtaXNzaW5nX3RleHQ6ICdnZXR0aW5nIGRhdGEgb24gbmV4dCBwb2xsJyxcbiAgICAvLyB3aWR0aDogdGhpcy5wcm9wcy5zaXplLndpZHRoLFxuICAgIC8vIGhlaWdodDogMjAwLFxuICAgIC8vIHJpZ2h0OiA0MCxcbiAgICAvLyB0YXJnZXQ6IHRoaXMuZWxlbSxcbiAgICAvLyB4X2FjY2Vzc29yOiAnZCcsXG4gICAgLy8geV9hY2Nlc3NvcjogJ3YnXG4gICAgLy8gfSk7ICBcbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbFJlYWN0KCkge1xuICAgIC8vY29uc29sZS5sb2coXCJJIHdpbGwgcmUtcmVuZGVyLCBzaW5jZSB0aGUgdG9kbyBoYXMgY2hhbmdlZCFcIik7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5Nb3VudCgpXG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gIH1cblxuXG5cblxuICAvLyBjbGVhbiBzdWJzY3JpcHRpb24gaW4gY2FzZSB3ZSBsZWF2ZSB0aGUgcGFnZSBvciBhZGQgb3RoZXIgbWV0cmljcyBcbiAgdW5Nb3VudCgpIHtcbiAgICAvLyBpZiAodGhpcy5wb2xsZXIpIHtcbiAgICAvLyAgIHRoaXMucG9sbGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgLy8gfVxuICB9XG5cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gPGlucHV0IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmFkZE1ldHJpY30gdmFsdWU9XCJDbGljayBNZSFcIiAvPlxuICAgIC8vICAgICAgICAge3RoaXMubWV0cmljcy5tYXAoIG1ldHJpYyA9PiA8YnV0dG9uPnttZXRyaWN9PC9idXR0b24+ICl9XG4gICAgLy88ZGl2IHJlZj17ZWwgPT4ge2lmIChlbCl7dGhpcy5lbGVtID0gZWx9fX0gZGF0YT17dGhpcy5wcm9wcy5jaGFydD8gdGhpcy5wcm9wcy5jaGFydC5kYXRhOiB1bmRlZmluZWR9IC8+XG5cbiAgICAgIC8vIDxvbD5cblxuICAgICAgLy8gICB7dGhpcy5wcm9wcy5jaGFydCA/IHRoaXMucHJvcHMuY2hhcnQubWV0cmljcy5tYXAobWV0cmljID0+IDxidXR0b24+e21ldHJpYy5uYW1lfTwvYnV0dG9uPikgOiBcIk5vIG1ldHJpYyB5ZXRcIn1cbiAgICAgIC8vIDwvb2w+XG4gICAgcmV0dXJuIDxkaXY+XG4gICAge3RoaXMucHJvcHMuY2hhcnQuY291bnRlcn1cbiAgICAgIDxNZXRyaWNzR3JhcGhpY3NcbiAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuY2hhcnQudGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPVwiVGhpcyBncmFwaGljIHNob3dzIGEgdGltZS1zZXJpZXMgb2YgZG93bmxvYWRzLlwiXG4gICAgICAgIG1pc3NpbmdfdGV4dD1cImdldHRpbmcgZGF0YSBvbiBuZXh0IHBvbGxcIlxuICAgICAgICBjaGFydF90eXBlPXt0aGlzLnByb3BzLmNoYXJ0LnR5cGV9XG4gICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLnNpemUud2lkdGh9XG4gICAgICAgIGRhdGE9e3RoaXMucHJvcHMuY2hhcnQuZGF0YX1cbiAgICAgICAgaGVpZ2h0PXsyNTB9XG4gICAgICAgIHhfYWNjZXNzb3I9XCJkXCJcbiAgICAgICAgeV9hY2Nlc3Nvcj1cInZcIlxuICAgICAgICAvPlxuXG4gICAgPC9kaXY+XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBzaXplTWUoKShDaGFydCk7XG4vL3N0eWxlPXtpc0hpZ2hsaWdodGVkID8gc3R5bGVzLmhpZ2hsaWdodGVkSXRlbSA6IHN0eWxlcy5pdGVtfVxuLy8gY29uc3Qgc3R5bGVzID0gY3NzKHtcbi8vICAgaXRlbToge1xuLy8gICAgIHBhZGRpbmc6ICcycHggNnB4Jyxcbi8vICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuLy8gICB9LFxuLy8gICBoaWdobGlnaHRlZEl0ZW06IHtcbi8vICAgICBjb2xvcjogJ3doaXRlJyxcbi8vICAgICBiYWNrZ3JvdW5kOiAnaHNsKDIwMCwgNTAlLCA1MCUpJyxcbi8vICAgICBwYWRkaW5nOiAnMnB4IDZweCcsXG4vLyAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbi8vICAgfSxcbi8vICAgbWVudToge1xuLy8gICAgIGJvcmRlcjogJ3NvbGlkIDFweCAjY2NjJ1xuLy8gICB9XG4vLyB9KTtcblxuXG4vLyB2YXIgY2hhcnRGYWN0b3J5ID0gZnVuY3Rpb24gKHRpdGxlLCBkYXRhKXsgcmV0dXJuICBtb2J4UmVhY3Qub2JzZXJ2ZXIoUmVhY3QuY3JlYXRlQ2xhc3MoIHtcbi8vIGNyZWF0ZVBvbGxlcjogZnVuY3Rpb24gKCl7cmV0dXJuICBSeC5PYnNlcnZhYmxlLmFqYXguZ2V0SlNPTignaHR0cDovL2xvY2FsaG9zdDoyMjIyL2hvbWUvbWV0cmljcz90aW1lPTUmaW50ZXJ2YWw9NScpXG4vLyBcdFx0LnJldHJ5V2hlbihmdW5jdGlvbihlcnJvcnMpe1xuLy8gXHRcdFx0cmV0dXJuIGVycm9ycy5zY2FuKGZ1bmN0aW9uKGFjYywgeCkgeyByZXR1cm4gYWNjICsgeDsgfSwgMClcbi8vIFx0XHRcdC5mbGF0TWFwKGZ1bmN0aW9uKHgpeyBcbi8vIFx0XHRcdFx0cmV0dXJuIFJ4Lk9ic2VydmFibGUudGltZXIoY29tcHV0ZUludGVydmFsKHRydWUpKTtcbi8vIFx0XHRcdH0pO1xuLy8gXHRcdH0pXG4vLyBcdFx0LnJlcGVhdFdoZW4oZnVuY3Rpb24obm90aWZpY2F0aW9uKXtcbi8vIFx0XHRcdHJldHVybiBub3RpZmljYXRpb25cbi8vIFx0XHRcdC5zY2FuKGZ1bmN0aW9uKGFjYywgeCkge1xuLy8gXHRcdFx0XHRyZXR1cm4gYWNjICsgeDsgfSwgMClcbi8vIFx0XHRcdC5mbGF0TWFwKGZ1bmN0aW9uKHgpeyBcbi8vIFx0XHRcdFx0cmV0dXJuIFJ4Lk9ic2VydmFibGUudGltZXIoY29tcHV0ZUludGVydmFsKCkpO1xuLy8gXHRcdFx0fSk7XG4vLyBcdFx0fSk7XG4vLyBcdFx0fSxcblxuXG4vLyAgY29tcG9uZW50V2lsbE1vdW50OmZ1bmN0aW9uKCkge1xuLy8gICAvLyAgbG9hZERhdGEodGhpcy5wcm9wcy5lbmRwb2ludClcbi8vICAgfSxcbi8vICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOmZ1bmN0aW9uKG5leHRQcm9wcykge1xuLy8gICAgIGlmIChuZXh0UHJvcHMuZW5kcG9pbnQgIT09IHRoaXMucHJvcHMuZW5kcG9pbnQpIHtcbi8vICAgLy8gICAgbG9hZERhdGEobmV4dFByb3BzLmVuZHBvaW50KVxuLy8gICAgIH1cbi8vICAgfSxcbi8vICAgY29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKSB7XG4vLyBcdCAgdmFyIHJjdiA9IHRoaXM7XG4vLyBcdCAgdGhpcy5jcmVhdGVQb2xsZXIoKS5zdWJzY3JpYmUoICh4KSA9PiB7XG4vLyBcdGNvbnNvbGUubG9nKCdvbk5leHQ6ICVzJyxKU09OLnN0cmluZ2lmeShwcmVwYXJlTWV0cmljc0FycmF5KHguVmFsdWVzKSkpO1xuLy8gXHRcdFx0TUcuZGF0YV9ncmFwaGljKHtcbi8vIFx0XHRcdFx0dGl0bGU6IHJjdi50aXRsZSAsXG4vLyBcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBzaW1wbGUgbGluZSBjaGFydC5cIixcbi8vIFx0XHRcdFx0ZGF0YTogcHJlcGFyZU1ldHJpY3NBcnJheSh4LlZhbHVlcyksXG4vLyBcdFx0XHRcdHdpZHRoOiA2MDAsXG4vLyBcdFx0XHRcdGhlaWdodDogMjAwLFxuLy8gXHRcdFx0XHRyaWdodDogNDAsXG4vLyBcdFx0XHRcdHRhcmdldDogcmN2LmVsZW0gLFxuLy8gXHRcdFx0XHR4X2FjY2Vzc29yOiAnZCcsXG4vLyBcdFx0XHRcdHlfYWNjZXNzb3I6ICd2J1xuLy8gXHRcdFx0fSk7ICAgIFxuLy8gXHRcdH0sXG4vLyBcdFx0KGUpID0+IHsgY29uc29sZS5sb2coJ29uRXJyb3I6ICVzJywgZSk7IH0sXG4vLyBcdFx0KCkgPT4geyBjb25zb2xlLmxvZygnb25Db21wbGV0ZWQnKTsgfSk7XG5cbi8vICAgIC8vIE1HLmNvbnZlcnQuZGF0ZSh0aGlzLnByb3BzLmRhdGEsICdkJywgJyVZLSVtLSVkVCVIOiVNOiVTLiVMWicpO1xuLy8gICAgICAgTUcuZGF0YV9ncmFwaGljKHtcbi8vIFx0XHR0aXRsZTogdGl0bGUgLFxuLy8gXHRcdGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBzaW1wbGUgbGluZSBjaGFydC5cIixcbi8vIFx0XHRkYXRhOiBbe1wiZFwiOiBuZXcgRGF0ZSgpLCBcInZcIjogMH1dLCAvL3RoaXMucHJvcHMuZGF0YSxcbi8vIFx0XHR3aWR0aDogNjAwLFxuLy8gXHRcdGhlaWdodDogMjAwLFxuLy8gXHRcdHJpZ2h0OiA0MCxcbi8vIFx0XHR0YXJnZXQ6IHRoaXMuZWxlbSxcbi8vIFx0XHR4X2FjY2Vzc29yOiAnZCcsXG4vLyBcdFx0eV9hY2Nlc3NvcjogJ3YnXG4vLyAgICAgfSk7ICAgIFxuXG4vLyAgICAvLyBSZWFjdERPTS5yZW5kZXIoPENoYXJ0IGRhdGEgPSB7dGhpcy5wcm9wcy5kYXRhIH0gLz4sICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xuLy8gICB9LFxuXG4vLyAgIGhhbmRsZUxvYWRNb3JlQ2xpY2s6ZnVuY3Rpb24gKCkge1xuLy8gICAvLyAgdGhpcy5wcm9wcy5sb2FkRGF0YSh0aGlzLnByb3BzLmVuZHBvaW50LCB0cnVlKVxuLy8gICB9LFxuXG4vLyAgIHJlbmRlcjpmdW5jdGlvbigpIHtcbi8vICAgICAvLyAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzXG4vLyAgICAgLy8gaWYgKCFkYXRhKSB7XG4vLyAgICAgLy8gICByZXR1cm4gPGgxPjxpPkxvYWRpbmcge3RoaXMucHJvcHMuZW5kcG9pbnQgfXtcIidkYXRhLi4uXCJ9PC9pPjwvaDE+XG4vLyAgICAgLy8gfVxuLy8gICAgIHJldHVybiA8ZGl2PlxuLy8gXHRcdDxkaXYgcmVmPXtlbCA9PiB7aWYgKGVsKXt0aGlzLmVsZW0gPSBlbH19fS8+XG4vLyBcdFx0IDx0YWJsZT5cbi8vICAgICAgICAgPHRoZWFkPlxuLy8gICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgPHRoPnt0aGlzLnRpdGxlfTwvdGg+XG4vLyAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgPC90aGVhZD5cbi8vICAgICAgIDwvdGFibGU+XG4vLyBcdCAgPC9kaXY+XG4vLyAgIH1cbi8vIH0pKX07Il19