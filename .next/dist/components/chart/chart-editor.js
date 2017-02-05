'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _mobx = require('mobx');

var _Rx = require('rxjs/Rx');

var _css = require('next/css');

var _css2 = _interopRequireDefault(_css);

var _metric = require('../../stores/metric');

var _metric2 = _interopRequireDefault(_metric);

var _reactVirtualizedSelect = require('react-virtualized-select');

var _reactVirtualizedSelect2 = _interopRequireDefault(_reactVirtualizedSelect);

var _reactSizeme = require('react-sizeme');

var _reactSizeme2 = _interopRequireDefault(_reactSizeme);

var _chart = require('./chart');

var _chart2 = _interopRequireDefault(_chart);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var popover = _react2.default.createElement(
  _reactBootstrap.Popover,
  { id: 'modal-popover', title: 'woot!' },
  'popover test'
);
var tooltip = _react2.default.createElement(
  _reactBootstrap.Tooltip,
  { id: 'modal-tooltip' },
  'wow.'
);

var ChartEditor = function (_React$Component) {
  (0, _inherits3.default)(ChartEditor, _React$Component);

  function ChartEditor(props) {
    (0, _classCallCheck3.default)(this, ChartEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ChartEditor.__proto__ || (0, _getPrototypeOf2.default)(ChartEditor)).call(this, props));

    _this.handleUserInput = function (e) {
      e.originalEvent.defaultPrevented = true;
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState((0, _defineProperty3.default)({}, name, value));
    };

    _this.addMetric = function (e) {
      _this.props.UiState.selectedChart.addMetric("test");
    };

    _this.metricNames = props.metricNames ? props.metricNames.slice() : "";
    _this.metricStore = props.MetricStore;
    _this.metricNamesFilterOptions = props.MetricStore.metricNamesFilterOptions;
    _this.agents;

    //MetricStore.fetch("host_name")

    (0, _mobx.extendObservable)(_this, {
      agents: undefined,
      chart: props.chart,
      counter: 0,
      title: props.chart ? props.chart.title : "",
      refreshFlag: false,
      dcs: null,
      dcsSelected: null,
      clusters: null,
      clustersSelected: null,
      hosts: null,
      hostsSelected: null,
      metrics: [],
      metricNameSelected: null,
      data: []
    });

    return _this;
  }

  (0, _createClass3.default)(ChartEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.title = "baaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    }
  }, {
    key: 'fetch',
    value: function (_fetch) {
      function fetch(_x, _x2) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(fieldToFetch, filter) {
        var query, _res, result, k;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                query = new function () {
                  this.size = 0;

                  if (filter) {
                    this.query = {};
                    this.query.filtered = {};
                    this.query.filtered.filter = {};
                    this.query.filtered.filter.terms = {};
                    if (filter.dcs) {
                      this.query.filtered.filter.terms.dc = filter.dcs;
                    }
                    if (filter.clusters) {
                      this.query.filtered.filter.terms.cluster = filter.clusters;
                    }
                    if (filter.zones) {
                      this.query.filtered.filter.terms.zone = filter.zones;
                    }
                    if (filter.regions) {
                      this.query.filtered.filter.terms.region = filter.regions;
                    }
                    if (filter.metrics) {
                      this.query.filtered.filter.terms.metric_name = filter.metrics;
                    }
                  }

                  this.aggs = {};
                  this.aggs.metric = {};
                  this.aggs.metric.terms = {
                    field: fieldToFetch,
                    size: 0
                  };
                }();
                _context.next = 4;
                return fetch('http://localhost:9200/metametrics/metric/_search', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)(query)
                });

              case 4:
                _res = _context.sent;
                _context.next = 7;
                return _res.json();

              case 7:
                _res = _context.sent;
                result = [];

                for (k in _res.aggregations.metric.buckets) {
                  result.push({ name: _res.aggregations.metric.buckets[k].key });
                }
                return _context.abrupt('return', result);

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](0);

                console.log('onError: %s', _context.t0);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13]]);
      }));

      return function (_x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }())
  }, {
    key: 'handleClusterSelectionChange',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(value) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.clustersSelected = value;
                //  this.dcs = await this.fetch("dc", filter={clusters:value})
                console.log("DCs: ", (0, _stringify2.default)(this.dcs));

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleClusterSelectionChange(_x5) {
        return _ref2.apply(this, arguments);
      }

      return handleClusterSelectionChange;
    }()
  }, {
    key: 'handleHostSelectionChange',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(value) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (value === "") {
                  this.selectAllAgents();
                } else {
                  this.props.UiState.selectedChart.agents = value;
                }
                this.hostsSelected = value;
                console.log("HOSTs Section changed!: ", (0, _stringify2.default)(this.agents));
                this.props.UiState.selectedChart.startPolling();

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleHostSelectionChange(_x6) {
        return _ref3.apply(this, arguments);
      }

      return handleHostSelectionChange;
    }()
  }, {
    key: 'selectAllAgents',
    value: function selectAllAgents() {
      this.props.UiState.selectedChart.agents = this.hosts.map(function (val) {
        return val.agent;
      }).join(',');
      console.log("SELECT ALL AGENTS WOOT: ", (0, _stringify2.default)(this.props.UiState.selectedChart.agents));
    }

    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // better than doing multiple await fetch()

  }, {
    key: 'handleMetricSelectionChange',
    value: function handleMetricSelectionChange(value) {
      //   this.props.UiState.selectedChart.title = "BALAAAAAAAAAAAAAA"
      // this.metricNameSelected = value;
      // this.metrics =  this.metricNameSelected.split(",")
      this.props.UiState.selectedChart.metrics = value.split(",");
      this.props.UiState.selectedChart.metricsString = value;
      // console.log("Sleecte chart: ", this.props.UiState.selectedChart.type)
      this.props.UiState.selectedChart.metricSelectionChanged();

      // var filter = {
      //   metrics: this.metrics
      // }

      // Observable.forkJoin(
      //     this.fetch("cluster", filter),
      //     this.fetch("dc", filter),
      //     this.fetch("host_name", filter),
      //     this.fetch("agent_id", filter),
      // ).subscribe(
      //   data => {
      //     this.clusters = data[0]
      //     this.dcs = data[1]
      //     // hosts comes in the format 'agentID;hostname'. This enable requesting to cassandra using the agentID
      //     this.hosts = data[2].map(val => { 
      //         var tokens = val.name.split(";")
      //         return {
      //             agent:tokens[0],
      //             host:tokens[1]}
      //      })
      //      if(this.hostsSelected == null ||  this.hostsSelected.length == 0){
      //         this.selectAllAgents()
      //      }
      //     this.props.UiState.selectedChart.startPolling()
      //   },
      //   err => console.error(err)
      // );

    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // <input type="button" onClick={this.addMetric} value="Click Me!" />
      //         {this.metrics.map( metric => <button>{metric}</button> )}

      var title = this.props.UiState.selectedChart.title;
      var counter = this.props.counter;
      //<p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.OverlayTrigger,
          { overlay: popover },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              { onClick: this.handleMetricSelectionChange.bind(this) },
              '+'
            ),
            _react2.default.createElement(
              'p',
              { style: { color: 'black', marginRight: '1rem', marginLeft: '1rem' } },
              this.counter
            ),
            title,
            _react2.default.createElement(_chart2.default, {
              chart: this.props.UiState.selectedChart
              // metricNames={this.props.MetricStore.metrics.slice()} 
              // metricStore={this.props.MetricStore}
              // metricNamesFilterOptions={this.props.MetricStore.metricNamesFilterOptions} 
              , key: this.props.UiState.selectedChart.id
            })
          )
        ),
        _react2.default.createElement(_reactVirtualizedSelect2.default, {
          filterOptions: this.props.MetricStore.metricNamesFilterOptions,
          placeholder: 'Metrics...',
          labelKey: 'name',
          multi: true,
          onChange: function onChange(value) {
            _this2.handleMetricSelectionChange(value);
          },
          options: this.props.UiState.selectedChart.metricsString,
          simpleValue: true,
          value: this.metricNameSelected,
          valueKey: 'name'
        }),
        _react2.default.createElement(_reactVirtualizedSelect2.default, {
          placeholder: 'Clusters...',
          labelKey: 'name',
          multi: true,
          onChange: function onChange(value) {
            return _this2.handleClusterSelectionChange.bind(_this2, value);
          },
          options: this.clusters,
          simpleValue: true,
          value: this.clustersSelected,
          valueKey: 'name'
        }),
        _react2.default.createElement(_reactVirtualizedSelect2.default, {
          placeholder: 'DCs...',
          labelKey: 'name',
          multi: true,
          onChange: function onChange(value) {
            return _this2.dcsSelected = value;
          },
          options: this.dcs,
          simpleValue: true,
          value: this.dcsSelected,
          valueKey: 'name'
        }),
        _react2.default.createElement(_reactVirtualizedSelect2.default, {
          placeholder: 'Hosts...',
          labelKey: 'host',
          multi: true,
          onChange: function onChange(value) {
            return _this2.handleHostSelectionChange(value);
          },
          options: this.hosts,
          simpleValue: true,
          value: this.hostsSelected,
          valueKey: 'agent'
        })
      );
    }
  }]);
  return ChartEditor;
}(_react2.default.Component);

exports.default = (0, _mobxReact.observer)(['MetricStore', 'UiState'], ChartEditor);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQvY2hhcnQtZWRpdG9yLmpzIl0sIm5hbWVzIjpbInBvcG92ZXIiLCJ0b29sdGlwIiwiQ2hhcnRFZGl0b3IiLCJwcm9wcyIsImhhbmRsZVVzZXJJbnB1dCIsImUiLCJvcmlnaW5hbEV2ZW50IiwiZGVmYXVsdFByZXZlbnRlZCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwiYWRkTWV0cmljIiwiVWlTdGF0ZSIsInNlbGVjdGVkQ2hhcnQiLCJtZXRyaWNOYW1lcyIsInNsaWNlIiwibWV0cmljU3RvcmUiLCJNZXRyaWNTdG9yZSIsIm1ldHJpY05hbWVzRmlsdGVyT3B0aW9ucyIsImFnZW50cyIsInVuZGVmaW5lZCIsImNoYXJ0IiwiY291bnRlciIsInRpdGxlIiwicmVmcmVzaEZsYWciLCJkY3MiLCJkY3NTZWxlY3RlZCIsImNsdXN0ZXJzIiwiY2x1c3RlcnNTZWxlY3RlZCIsImhvc3RzIiwiaG9zdHNTZWxlY3RlZCIsIm1ldHJpY3MiLCJtZXRyaWNOYW1lU2VsZWN0ZWQiLCJkYXRhIiwiZmllbGRUb0ZldGNoIiwiZmlsdGVyIiwicXVlcnkiLCJzaXplIiwiZmlsdGVyZWQiLCJ0ZXJtcyIsImRjIiwiY2x1c3RlciIsInpvbmVzIiwiem9uZSIsInJlZ2lvbnMiLCJyZWdpb24iLCJtZXRyaWNfbmFtZSIsImFnZ3MiLCJtZXRyaWMiLCJmaWVsZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiayIsImFnZ3JlZ2F0aW9ucyIsImJ1Y2tldHMiLCJwdXNoIiwia2V5IiwiY29uc29sZSIsImxvZyIsInNlbGVjdEFsbEFnZW50cyIsInN0YXJ0UG9sbGluZyIsIm1hcCIsInZhbCIsImFnZW50Iiwiam9pbiIsInNwbGl0IiwibWV0cmljc1N0cmluZyIsIm1ldHJpY1NlbGVjdGlvbkNoYW5nZWQiLCJoYW5kbGVNZXRyaWNTZWxlY3Rpb25DaGFuZ2UiLCJiaW5kIiwiY29sb3IiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJpZCIsImhhbmRsZUNsdXN0ZXJTZWxlY3Rpb25DaGFuZ2UiLCJoYW5kbGVIb3N0U2VsZWN0aW9uQ2hhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBLElBQU1BLFVBQ0E7QUFBQTtBQUFBLElBQVMsSUFBRyxlQUFaLEVBQTRCLE9BQU0sT0FBbEM7QUFBQTtBQUFBLENBRE47QUFLSSxJQUFNQyxVQUNKO0FBQUE7QUFBQSxJQUFTLElBQUcsZUFBWjtBQUFBO0FBQUEsQ0FERjs7SUFPRUMsVzs7O0FBRUosdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSkFDWEEsS0FEVzs7QUFBQSxVQWtDbkJDLGVBbENtQixHQWtDRCxVQUFDQyxDQUFELEVBQU87QUFDdkJBLFFBQUVDLGFBQUYsQ0FBZ0JDLGdCQUFoQixHQUFtQyxJQUFuQztBQUR1QixzQkFFQ0YsRUFBRUcsTUFGSDtBQUFBLFVBRWZDLElBRmUsYUFFZkEsSUFGZTtBQUFBLFVBRVRDLEtBRlMsYUFFVEEsS0FGUzs7QUFHdkIsWUFBS0MsUUFBTCxtQ0FDR0YsSUFESCxFQUNVQyxLQURWO0FBR0QsS0F4Q2tCOztBQUFBLFVBMENuQkUsU0ExQ21CLEdBMENSLFVBQUNQLENBQUQsRUFBTztBQUNoQixZQUFLRixLQUFMLENBQVdVLE9BQVgsQ0FBbUJDLGFBQW5CLENBQWlDRixTQUFqQyxDQUEyQyxNQUEzQztBQUNELEtBNUNrQjs7QUFHakIsVUFBS0csV0FBTCxHQUFtQlosTUFBTVksV0FBTixHQUFvQlosTUFBTVksV0FBTixDQUFrQkMsS0FBbEIsRUFBcEIsR0FBZ0QsRUFBbkU7QUFDQSxVQUFLQyxXQUFMLEdBQW1CZCxNQUFNZSxXQUF6QjtBQUNBLFVBQUtDLHdCQUFMLEdB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LDJCQU5IO0FBT0csaUJBQU8sS0FBS0MsYUFQZjtBQVFHLG9CQUFTO0FBUlo7QUFsREEsT0FBUDtBQTZERDs7O0VBOU91QixnQkFBTW1ELFM7O2tCQWlQakIseUJBQVMsQ0FBQyxhQUFELEVBQWdCLFNBQWhCLENBQVQsRUFBb0NoRixXQUFwQyxDIiwiZmlsZSI6ImNoYXJ0LWVkaXRvci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXJjL3dlYmRldi9ib29rIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5pbXBvcnQgeyBhY3Rpb24sIGF1dG9ydW4sIGV4dGVuZE9ic2VydmFibGUgfSBmcm9tICdtb2J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7IFxuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuaW1wb3J0IE1ldHJpY1N0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9tZXRyaWMnO1xuaW1wb3J0IFZpcnR1YWxpemVkU2VsZWN0IGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkLXNlbGVjdCdcbmltcG9ydCBzaXplTWUgZnJvbSAncmVhY3Qtc2l6ZW1lJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0J1xuaW1wb3J0IHtQb3BvdmVyLCBUb29sdGlwLCBPdmVybGF5VHJpZ2dlciwgQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5cbmNvbnN0IHBvcG92ZXIgPSAoXG4gICAgICA8UG9wb3ZlciBpZD1cIm1vZGFsLXBvcG92ZXJcIiB0aXRsZT1cIndvb3QhXCI+XG4gICAgICAgIHBvcG92ZXIgdGVzdFxuICAgICAgPC9Qb3BvdmVyPlxuICAgICk7XG4gICAgY29uc3QgdG9vbHRpcCA9IChcbiAgICAgIDxUb29sdGlwIGlkPVwibW9kYWwtdG9vbHRpcFwiPlxuICAgICAgICB3b3cuXG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKTtcblxuXG5jbGFzcyBDaGFydEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLm1ldHJpY05hbWVzID0gcHJvcHMubWV0cmljTmFtZXMgPyBwcm9wcy5tZXRyaWNOYW1lcy5zbGljZSgpIDogXCJcIlxuICAgIHRoaXMubWV0cmljU3RvcmUgPSBwcm9wcy5NZXRyaWNTdG9yZVxuICAgIHRoaXMubWV0cmljTmFtZXNGaWx0ZXJPcHRpb25zPSBwcm9wcy5NZXRyaWNTdG9yZS5tZXRyaWNOYW1lc0ZpbHRlck9wdGlvbnNcbiAgICB0aGlzLmFnZW50c1xuXG4gICAgLy9NZXRyaWNTdG9yZS5mZXRjaChcImhvc3RfbmFtZVwiKVxuICAgIFxuICAgIGV4dGVuZE9ic2VydmFibGUodGhpcywge1xuICAgICAgYWdlbnRzOiB1bmRlZmluZWQsXG4gICAgICBjaGFydDogcHJvcHMuY2hhcnQsXG4gICAgICBjb3VudGVyOjAsXG4gICAgICB0aXRsZTogcHJvcHMuY2hhcnQgPyBwcm9wcy5jaGFydC50aXRsZSA6IFwiXCIsXG4gICAgICByZWZyZXNoRmxhZzogZmFsc2UsXG4gICAgICBkY3M6IG51bGwsXG4gICAgICBkY3NTZWxlY3RlZDogbnVsbCxcbiAgICAgIGNsdXN0ZXJzOiBudWxsLFxuICAgICAgY2x1c3RlcnNTZWxlY3RlZDogbnVsbCxcbiAgICAgIGhvc3RzOm51bGwsXG4gICAgICBob3N0c1NlbGVjdGVkOm51bGwsXG4gICAgICBtZXRyaWNzOiBbXSxcbiAgICAgIG1ldHJpY05hbWVTZWxlY3RlZDogbnVsbCxcbiAgICAgIGRhdGE6W11cbiAgICB9KTtcblxuICB9XG4gICBcblxuIFx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLnRpdGxlPVwiYmFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhXCJcblx0fVxuXG4gIGhhbmRsZVVzZXJJbnB1dCA9IChlKSA9PiB7XG4gICAgZS5vcmlnaW5hbEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBhZGRNZXRyaWM9IChlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5VaVN0YXRlLnNlbGVjdGVkQ2hhcnQuYWRkTWV0cmljKFwidGVzdFwiKVxuICB9XG4gXG4gYXN5bmMgZmV0Y2goZmllbGRUb0ZldGNoLCBmaWx0ZXIpIHtcbiAgdHJ5IHtcblxuICAgIHZhciBxdWVyeSA9IG5ldyBmdW5jdGlvbigpe1xuICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgIFxuICAgICAgaWYoZmlsdGVyKXtcbiAgICAgICAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgICAgICAgdGhpcy5xdWVyeS5maWx0ZXJlZCA9wqB7fVxuICAgICAgICAgIHRoaXMucXVlcnkuZmlsdGVyZWQuZmlsdGVyPSB7fTtcbiAgICAgICAgICB0aGlzLnF1ZXJ5LmZpbHRlcmVkLmZpbHRlci50ZXJtcyA9IHt9O1xuICAgICAgICAgIGlmKGZpbHRlci5kY3Mpe1xuICAgICAgICAgICAgdGhpcy5xdWVyeS5maWx0ZXJlZC5maWx0ZXIudGVybXMuZGMgPSBmaWx0ZXIuZGNzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihmaWx0ZXIuY2x1c3RlcnMpe1xuICAgICAgICAgICAgdGhpcy5xdWVyeS5maWx0ZXJlZC5maWx0ZXIudGVybXMuY2x1c3RlciA9IGZpbHRlci5jbHVzdGVycztcbiAgICAgICAgICB9IFxuICAgICAgICAgIGlmKGZpbHRlci56b25lcyl7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5LmZpbHRlcmVkLmZpbHRlci50ZXJtcy56b25lID0gZmlsdGVyLnpvbmVzO1xuICAgICAgICAgIH0gXG4gICAgICAgICAgaWYoZmlsdGVyLnJlZ2lvbnMpe1xuICAgICAgICAgICAgdGhpcy5xdWVyeS5maWx0ZXJlZC5maWx0ZXIudGVybXMucmVnaW9uID0gZmlsdGVyLnJlZ2lvbnM7XG4gICAgICAgICAgfSBcbiAgICAgICAgICBpZihmaWx0ZXIubWV0cmljcyl7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5LmZpbHRlcmVkLmZpbHRlci50ZXJtcy5tZXRyaWNfbmFtZSA9IGZpbHRlci5tZXRyaWNzO1xuICAgICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWdncyA9e31cbiAgICAgIHRoaXMuYWdncy5tZXRyaWMgPXt9XG4gICAgICB0aGlzLmFnZ3MubWV0cmljLnRlcm1zID0ge1xuICAgICAgICAgIGZpZWxkIDogZmllbGRUb0ZldGNoLFxuICAgICAgICAgIHNpemU6MFxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjkyMDAvbWV0YW1ldHJpY3MvbWV0cmljL19zZWFyY2gnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KVxuICAgICAgICB9KTtcblxuICAgICAgdmFyIHJlcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICB2YXIgcmVzdWx0ID0gW11cbiAgICAgIGZvcih2YXIgayBpbiByZXMuYWdncmVnYXRpb25zLm1ldHJpYy5idWNrZXRzKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goe25hbWU6cmVzLmFnZ3JlZ2F0aW9ucy5tZXRyaWMuYnVja2V0c1trXS5rZXl9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgIGNvbnNvbGUubG9nKCdvbkVycm9yOiAlcycsIGUpO1xuICAgIH0gIFxuIH1cblxuICBcbiAgYXN5bmMgIGhhbmRsZUNsdXN0ZXJTZWxlY3Rpb25DaGFuZ2UgKHZhbHVlKSAge1xuICAgICB0aGlzLmNsdXN0ZXJzU2VsZWN0ZWQgPSB2YWx1ZTtcbiAgIC8vICB0aGlzLmRjcyA9IGF3YWl0IHRoaXMuZmV0Y2goXCJkY1wiLCBmaWx0ZXI9e2NsdXN0ZXJzOnZhbHVlfSlcbiAgICBjb25zb2xlLmxvZyhcIkRDczogXCIsSlNPTi5zdHJpbmdpZnkodGhpcy5kY3MpKVxuXHR9XG5cbiAgYXN5bmMgIGhhbmRsZUhvc3RTZWxlY3Rpb25DaGFuZ2UgKHZhbHVlKSAge1xuICAgIGlmKHZhbHVlID09PSBcIlwiKXtcbiAgICAgIHRoaXMuc2VsZWN0QWxsQWdlbnRzKClcbiAgICB9ZWxzZXtcbiAgICAgdGhpcy5wcm9wcy5VaVN0YXRlLnNlbGVjdGVkQ2hhcnQuYWdlbnRzID0gdmFsdWVcbiAgICB9XG4gICAgdGhpcy5ob3N0c1NlbGVjdGVkID0gdmFsdWU7XG4gICAgY29uc29sZS5sb2coXCJIT1NUcyBTZWN0aW9uIGNoYW5nZWQhOiBcIixKU09OLnN0cmluZ2lmeSh0aGlzLmFnZW50cykpXG4gICAgdGhpcy5wcm9wcy5VaVN0YXRlLnNlbGVjdGVkQ2hhcnQuc3RhcnRQb2xsaW5nKClcblx0fVxuXG4gIHNlbGVjdEFsbEFnZW50cygpe1xuICAgICB0aGlzLnByb3BzLlVpU3RhdGUuc2VsZWN0ZWRDaGFydC5hZ2VudHMgPSB0aGlzLmhvc3RzLm1hcCh2YWw9PiB2YWwuYWdlbnQgKS5qb2luKCcsJyk7XG4gICAgIGNvbnNvbGUubG9nKFwiU0VMRUNUIEFMTCBBR0VOVFMgV09PVDogXCIsSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5VaVN0YXRlLnNlbGVjdGVkQ2hhcnQuYWdlbnRzKSlcbiAgfVxuXG4gICAvLyBVc2VzIE9ic2VydmFibGUuZm9ya0pvaW4oKSB0byBydW4gbXVsdGlwbGUgY29uY3VycmVudCBodHRwLmdldCgpIHJlcXVlc3RzLlxuICAgLy8gYmV0dGVyIHRoYW4gZG9pbmcgbXVsdGlwbGUgYXdhaXQgZmV0Y2goKVxuICAgaGFuZGxlTWV0cmljU2VsZWN0aW9uQ2hhbmdlICh2YWx1ZSkgIHtcbiAgIC8vICAgdGhpcy5wcm9wcy5VaVN0YXRlLnNlbGVjdGVkQ2hhcnQudGl0bGUgPSBcIkJBTEFBQUFBQUFBQUFBQUFBXCJcbiAgICAvLyB0aGlzLm1ldHJpY05hbWVTZWxlY3RlZCA9IHZhbHVlO1xuICAgIC8vIHRoaXMubWV0cmljcyA9ICB0aGlzLm1ldHJpY05hbWVTZWxlY3RlZC5zcGxpdChcIixcIilcbiAgICB0aGlzLnByb3BzLlVpU3RhdGUuc2VsZWN0ZWRDaGFydC5tZXRyaWNzID0gIHZhbHVlLnNwbGl0KFwiLFwiKVxuICAgIHRoaXMucHJvcHMuVWlTdGF0ZS5zZWxlY3RlZENoYXJ0Lm1ldHJpY3NTdHJpbmcgPSB2YWx1ZVxuICAgLy8gY29uc29sZS5sb2coXCJTbGVlY3RlIGNoYXJ0OiBcIiwgdGhpcy5wcm9wcy5VaVN0YXRlLnNlbGVjdGVkQ2hhcnQudHlwZSlcbiAgICB0aGlzLnByb3BzLlVpU3RhdGUuc2VsZWN0ZWRDaGFydC5tZXRyaWNTZWxlY3Rpb25DaGFuZ2VkKClcbiAgIFxuICAgIC8vIHZhciBmaWx0ZXIgPSB7XG4gICAgLy8gICBtZXRyaWNzOiB0aGlzLm1ldHJpY3NcbiAgICAvLyB9XG5cbiAgICAvLyBPYnNlcnZhYmxlLmZvcmtKb2luKFxuICAgIC8vICAgICB0aGlzLmZldGNoKFwiY2x1c3RlclwiLCBmaWx0ZXIpLFxuICAgIC8vICAgICB0aGlzLmZldGNoKFwiZGNcIiwgZmlsdGVyKSxcbiAgICAvLyAgICAgdGhpcy5mZXRjaChcImhvc3RfbmFtZVwiLCBmaWx0ZXIpLFxuICAgIC8vICAgICB0aGlzLmZldGNoKFwiYWdlbnRfaWRcIiwgZmlsdGVyKSxcbiAgICAvLyApLnN1YnNjcmliZShcbiAgICAvLyAgIGRhdGEgPT4ge1xuICAgIC8vICAgICB0aGlzLmNsdXN0ZXJzID0gZGF0YVswXVxuICAgIC8vICAgICB0aGlzLmRjcyA9IGRhdGFbMV1cbiAgICAvLyAgICAgLy8gaG9zdHMgY29tZXMgaW4gdGhlIGZvcm1hdCAnYWdlbnRJRDtob3N0bmFtZScuIFRoaXMgZW5hYmxlIHJlcXVlc3RpbmcgdG8gY2Fzc2FuZHJhIHVzaW5nIHRoZSBhZ2VudElEXG4gICAgLy8gICAgIHRoaXMuaG9zdHMgPSBkYXRhWzJdLm1hcCh2YWwgPT4geyBcbiAgICAvLyAgICAgICAgIHZhciB0b2tlbnMgPSB2YWwubmFtZS5zcGxpdChcIjtcIilcbiAgICAvLyAgICAgICAgIHJldHVybiB7XG4gICAgLy8gICAgICAgICAgICAgYWdlbnQ6dG9rZW5zWzBdLFxuICAgIC8vICAgICAgICAgICAgIGhvc3Q6dG9rZW5zWzFdfVxuICAgIC8vICAgICAgfSlcbiAgICAvLyAgICAgIGlmKHRoaXMuaG9zdHNTZWxlY3RlZCA9PSBudWxsIHx8ICB0aGlzLmhvc3RzU2VsZWN0ZWQubGVuZ3RoID09IDApe1xuICAgIC8vICAgICAgICAgdGhpcy5zZWxlY3RBbGxBZ2VudHMoKVxuICAgIC8vICAgICAgfVxuICAgIC8vICAgICB0aGlzLnByb3BzLlVpU3RhdGUuc2VsZWN0ZWRDaGFydC5zdGFydFBvbGxpbmcoKVxuICAgIC8vICAgfSxcbiAgICAvLyAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVycilcbiAgICAvLyApO1xuICAgIFxuXG4gICAgXG5cdH1cblxuICByZW5kZXIgKCkge1xuICAgIC8vIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5hZGRNZXRyaWN9IHZhbHVlPVwiQ2xpY2sgTWUhXCIgLz5cbiAgICAvLyAgICAgICAgIHt0aGlzLm1ldHJpY3MubWFwKCBtZXRyaWMgPT4gPGJ1dHRvbj57bWV0cmljfTwvYnV0dG9uPiApfVxuXG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMuVWlTdGF0ZS5zZWxlY3RlZENoYXJ0LnRpdGxlXG5jb25zdCBjb3VudGVyID0gdGhpcy5wcm9wcy5jb3VudGVyO1xuLy88cD50aGVyZSBpcyBhIDxPdmVybGF5VHJpZ2dlciBvdmVybGF5PXt0b29sdGlwfT48YSBocmVmPVwiI1wiPnRvb2x0aXA8L2E+PC9PdmVybGF5VHJpZ2dlcj4gaGVyZTwvcD5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgXG4gICAgICBcbjxPdmVybGF5VHJpZ2dlciBvdmVybGF5PXtwb3BvdmVyfT5cbjxkaXY+XG4gPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZU1ldHJpY1NlbGVjdGlvbkNoYW5nZS5iaW5kKHRoaXMpfT4rPC9idXR0b24+XG4gPHAgc3R5bGU9e3tjb2xvcjogJ2JsYWNrJywgbWFyZ2luUmlnaHQ6ICcxcmVtJywgbWFyZ2luTGVmdDogJzFyZW0nfX0+e3RoaXMuY291bnRlcn08L3A+XG57dGl0bGV9XG4gICAgICAgICAgICA8Q2hhcnQgXG4gICAgICAgICAgICAgICAgY2hhcnQ9eyB0aGlzLnByb3BzLlVpU3RhdGUuc2VsZWN0ZWRDaGFydCB9IFxuICAgICAgICAgICAgICAgIC8vIG1ldHJpY05hbWVzPXt0aGlzLnByb3BzLk1ldHJpY1N0b3JlLm1ldHJpY3Muc2xpY2UoKX0gXG4gICAgICAgICAgICAgICAgLy8gbWV0cmljU3RvcmU9e3RoaXMucHJvcHMuTWV0cmljU3RvcmV9XG4gICAgICAgICAgICAgICAgLy8gbWV0cmljTmFtZXNGaWx0ZXJPcHRpb25zPXt0aGlzLnByb3BzLk1ldHJpY1N0b3JlLm1ldHJpY05hbWVzRmlsdGVyT3B0aW9uc30gXG4gICAgICAgICAgICAgICAga2V5PXsgdGhpcy5wcm9wcy5VaVN0YXRlLnNlbGVjdGVkQ2hhcnQuaWQgfSBcbiAgICAgICAgICAgICAgICAvPlxuICA8L2Rpdj5cbjwvT3ZlcmxheVRyaWdnZXI+IFxuICAgICAgICAgICA8VmlydHVhbGl6ZWRTZWxlY3RcbiAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXt0aGlzLnByb3BzLk1ldHJpY1N0b3JlLm1ldHJpY05hbWVzRmlsdGVyT3B0aW9uc31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXRyaWNzLi4uXCJcbiAgICAgICAgICAgICAgbGFiZWxLZXk9J25hbWUnXG4gICAgICAgICAgICAgIG11bHRpPXt0cnVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9Pnt0aGlzLmhhbmRsZU1ldHJpY1NlbGVjdGlvbkNoYW5nZSh2YWx1ZSl9fVxuICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLlVpU3RhdGUuc2VsZWN0ZWRDaGFydC5tZXRyaWNzU3RyaW5nfVxuICAgICAgICAgICAgICBzaW1wbGVWYWx1ZVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5tZXRyaWNOYW1lU2VsZWN0ZWR9XG4gICAgICAgICAgICAgIHZhbHVlS2V5PSduYW1lJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPFZpcnR1YWxpemVkU2VsZWN0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2x1c3RlcnMuLi5cIlxuICAgICAgICAgICAgICBsYWJlbEtleT0nbmFtZSdcbiAgICAgICAgICAgICAgbXVsdGk9e3RydWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+dGhpcy5oYW5kbGVDbHVzdGVyU2VsZWN0aW9uQ2hhbmdlLmJpbmQodGhpcyx2YWx1ZSkgfVxuICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLmNsdXN0ZXJzfVxuICAgICAgICAgICAgICBzaW1wbGVWYWx1ZVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5jbHVzdGVyc1NlbGVjdGVkIH1cbiAgICAgICAgICAgICAgdmFsdWVLZXk9J25hbWUnXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxWaXJ0dWFsaXplZFNlbGVjdFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRDcy4uLlwiXG4gICAgICAgICAgICAgIGxhYmVsS2V5PSduYW1lJ1xuICAgICAgICAgICAgICBtdWx0aT17dHJ1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT50aGlzLmRjc1NlbGVjdGVkID0gdmFsdWUgfVxuICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLmRjc31cbiAgICAgICAgICAgICAgc2ltcGxlVmFsdWVcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZGNzU2VsZWN0ZWQgfVxuICAgICAgICAgICAgICB2YWx1ZUtleT0nbmFtZSdcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgIDxWaXJ0dWFsaXplZFNlbGVjdFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvc3RzLi4uXCJcbiAgICAgICAgICAgICAgbGFiZWxLZXk9J2hvc3QnXG4gICAgICAgICAgICAgIG11bHRpPXt0cnVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PnRoaXMuaGFuZGxlSG9zdFNlbGVjdGlvbkNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuaG9zdHN9XG4gICAgICAgICAgICAgIHNpbXBsZVZhbHVlXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmhvc3RzU2VsZWN0ZWQgfVxuICAgICAgICAgICAgICB2YWx1ZUtleT0nYWdlbnQnXG4gICAgICAgICAgLz5cblx0ICA8L2Rpdj5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcihbJ01ldHJpY1N0b3JlJywgJ1VpU3RhdGUnXSxDaGFydEVkaXRvcik7XG4iXX0=