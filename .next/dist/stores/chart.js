'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _desc, _value, _class, _descriptor, _desc2, _value2, _class3, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class4, _temp, _initialiseProps, _desc3, _value3, _class5, _descriptor9;

var _mobx = require('mobx');

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

require('rxjs/add/observable/dom/ajax');

var _Rx = require('rxjs/Rx');

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

var Metric = (_class = function Metric(name) {
  (0, _classCallCheck3.default)(this, Metric);

  _initDefineProp(this, 'name', _descriptor, this);

  this.name = name;
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'name', [_mobx.observable], {
  enumerable: true,
  initializer: null
})), _class);
var Chart = (_class3 = (_temp = _class4 = function () {
  (0, _createClass3.default)(Chart, null, [{
    key: 'fromJS',
    value: function fromJS(store, chart) {
      return new Chart(store, chart.id, chart.title, chart.metric);
    }
  }]);

  function Chart(store, id, title, metric) {
    (0, _classCallCheck3.default)(this, Chart);

    _initialiseProps.call(this);

    this.store = store;
    this.id = id;
    this.flag = false;
    this.data = [];
    //this.addMetric("14_ClientRequest_Latencyclientrequest=Write,fct=15MinuteRate")
  }

  (0, _createClass3.default)(Chart, [{
    key: 'refreshChart',
    value: function refreshChart() {
      if (this.data.length > 0) {
        console.log("UPDATED DATA :", this.data);
        this.counter++;
      }
    }
  }, {
    key: 'computeInterval',


    // backoff logic
    value: function computeInterval(error) {
      if (error) {
        // double until maximum interval on errors
        this.interval = this.interval < Chart.maxInterval ? this.interval * 2 : Chart.maxInterval;
      } else {
        // anytime the poller succeeds, make sure we've reset to
        // default interval.. this also allows the initInterval to 
        // change while the poller is running
        this.interval = Chart.initInterval;
      }
      return this.interval;
    }

    // clean subscription in case we leave the page or add other metrics 

  }, {
    key: 'unMount',
    value: function unMount() {
      if (this.poller) {
        this.poller.unsubscribe();
      }
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
    key: 'selectAllAgents',
    value: function selectAllAgents() {
      this.agents = this.hosts.map(function (val) {
        return val.agent;
      }).join(',');
      console.log("SELECT ALL AGENTS WOOT: ", (0, _stringify2.default)(this.agents));
    }
  }, {
    key: 'isLoggedIn',
    get: function get() {
      return !!this.data;
    }
  }], [{
    key: 'prepareMetricsArray',
    value: function prepareMetricsArray(metricsRaw) {
      var metrics = new Array();
      (0, _keys2.default)(metricsRaw).forEach(function (key) {
        metrics.push({ "d": new Date(key), "v": metricsRaw[key] });
        //console.log("pushing ", JSON.stringify({ "d": new Date(key), "v": metricsRaw[key] }))
      });

      return metrics;
    }
  }]);
  return Chart;
}(), _class4.initInterval = 1000, _class4.maxInterval = 100000, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  _initDefineProp(this, 'agents', _descriptor2, this);

  _initDefineProp(this, 'metricNameSelected', _descriptor3, this);

  _initDefineProp(this, 'title', _descriptor4, this);

  _initDefineProp(this, 'counter', _descriptor5, this);

  _initDefineProp(this, 'metrics', _descriptor6, this);

  _initDefineProp(this, 'metricsString', _descriptor7, this);

  _initDefineProp(this, 'type', _descriptor8, this);

  this.interval = Chart.initInterval;
  this.metricSelectionChanged = (0, _mobx.action)(function () {
    var _this = this;

    // this.metricNameSelected = value;
    // this.metrics =  this.metricNameSelected.split(",")
    var filter = {
      metrics: this.metrics
    };

    this.type = "line";
    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // better than doing multiple await fetch()
    _Rx.Observable.forkJoin(this.fetch("cluster", filter), this.fetch("dc", filter), this.fetch("host_name", filter), this.fetch("agent_id", filter)).subscribe(function (response) {
      _this.clusters = response[0];
      _this.dcs = response[1];
      // hosts comes in the format 'agentID;hostname'. This enable requesting to cassandra using the agentID
      _this.hosts = response[2].map(function (val) {
        var tokens = val.name.split(";");
        return {
          agent: tokens[0],
          host: tokens[1]
        };
      });
      if (_this.hostsSelected == null || _this.hostsSelected.length == 0) {
        _this.selectAllAgents();
      }
      _this.startPolling();
    }, function (err) {
      return console.error(err);
    });
  });
  this.startPolling = (0, _mobx.action)(function () {
    var _this2 = this;

    var rcv = this;
    var pollers = this.metrics.map(function (metric) {
      console.log("FROM POLLER, METRIC IS: ", metric);
      //14_ClientRequest_Latencyclientrequest=Write_fct=15MinuteRate
      return _Rx.Observable.ajax.getJSON('http://localhost:2222/home/metrics?metric=' + metric + '&agents=' + _this2.agents + '&time=5&interval=5');
    });
    this.unMount();
    this.poller = _Rx.Observable.zip.apply(_Rx.Observable, pollers).retryWhen(function (errors) {
      return errors.scan(function (acc, x) {
        return acc + x;
      }, 0).flatMap(function (x) {
        return _Rx.Observable.timer(rcv.computeInterval(true));
      });
    }).repeatWhen(function (notification) {
      return notification.scan(function (acc, x) {
        return acc + x;
      }, 0).flatMap(function (x) {
        return _Rx.Observable.timer(rcv.computeInterval());
      });
    }).subscribe(function (x) {
      _this2.data.length = 0;
      //console.log("VALUE RECEIVED: " + JSON.stringify(x))
      x.map(function (metric) {
        (0, _keys2.default)(metric.Values).forEach(function (agent) {
          if (agent && (0, _keys2.default)(metric.Values[agent]).length > 0) {
            _this2.data.push(Chart.prepareMetricsArray(metric.Values[agent]));
          }
        });
      });

      if (_this2.data.length > 0) {
        _this2.refreshChart();
      } else {
        console.log("no data received");
      }
    }, function (e) {
      console.log('onError: %s', e);
    }, function () {
      console.log('onCompleted');
    });
  });

  this.toJS = function () {
    return {
      id: _this3.id,
      title: _this3.title,
      metrics: _this3.metrics,
      data: _this3.data.slice()
    };
  };

  this.destroy = function () {
    return _this3.store.charts.remove(_this3);
  };
}, _temp), (_descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'agents', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return undefined;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, 'metricNameSelected', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, 'title', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, 'counter', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, 'metrics', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, 'metricsString', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return undefined;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, 'type', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "missing-data";
  }
}), _applyDecoratedDescriptor(_class3.prototype, 'isLoggedIn', [_mobx.computed], (0, _getOwnPropertyDescriptor2.default)(_class3.prototype, 'isLoggedIn'), _class3.prototype)), _class3);
var ChartStore = (_class5 = function () {
  function ChartStore() {
    var _this4 = this;

    (0, _classCallCheck3.default)(this, ChartStore);

    _initDefineProp(this, 'charts', _descriptor9, this);

    this.addChart = (0, _mobx.action)(function (title) {
      return _this4.charts.push(new Chart(_this4, _uuid2.default.v4(), title));
    });
    this.updateCharts = (0, _mobx.action)(function () {
      _this4.charts.forEach(function (chart) {
        return chart.title = "YEAH";
      });
    });

    this.toJS = function () {
      return _this4.charts.map(function (chart) {
        return chart.toJS();
      });
    };
  }

  (0, _createClass3.default)(ChartStore, null, [{
    key: 'fromJS',
    value: function fromJS(initialState) {
      var chartStore = new ChartStore();
      chartStore.charts = initialState.map(function (chart) {
        return Chart.fromJS(chartStore, chart);
      });
      return chartStore;
    }

    // Implement with some data store for the user
    //   fetchInitialCharts = () => {
    //     if(this.initialFetch == true) {
    //       return true;
    //     }
    //     return fetch('https://jsonplaceholder.typicode.com/charts')
    //     .then(res => res.json())
    //     .then(charts => {
    //       charts.forEach(chart => this.addChart(chart.title))
    //       this.initialFetch = true;
    //     }
    //     )
    //   }

  }]);
  return ChartStore;
}(), (_descriptor9 = _applyDecoratedDescriptor(_class5.prototype, 'charts', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [0, 1, 2].map(function (i, key, list) {
      return new Chart(this, i, "chart #" + i, "");
    });
  }
})), _class5);
exports.default = ChartStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9jaGFydC5qcyJdLCJuYW1lcyI6WyJNZXRyaWMiLCJuYW1lIiwiQ2hhcnQiLCJzdG9yZSIsImNoYXJ0IiwiaWQiLCJ0aXRsZSIsIm1ldHJpYyIsImZsYWciLCJkYXRhIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImNvdW50ZXIiLCJlcnJvciIsImludGVydmFsIiwibWF4SW50ZXJ2YWwiLCJpbml0SW50ZXJ2YWwiLCJwb2xsZXIiLCJ1bnN1YnNjcmliZSIsImZpZWxkVG9GZXRjaCIsImZpbHRlciIsInF1ZXJ5Iiwic2l6ZSIsImZpbHRlcmVkIiwidGVybXMiLCJkY3MiLCJkYyIsImNsdXN0ZXJzIiwiY2x1c3RlciIsInpvbmVzIiwiem9uZSIsInJlZ2lvbnMiLCJyZWdpb24iLCJtZXRyaWNzIiwibWV0cmljX25hbWUiLCJhZ2dzIiwiZmllbGQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVzIiwianNvbiIsInJlc3VsdCIsImsiLCJhZ2dyZWdhdGlvbnMiLCJidWNrZXRzIiwicHVzaCIsImtleSIsImFnZW50cyIsImhvc3RzIiwibWFwIiwidmFsIiwiYWdlbnQiLCJqb2luIiwibWV0cmljc1JhdyIsIkFycmF5IiwiZm9yRWFjaCIsIkRhdGUiLCJtZXRyaWNTZWxlY3Rpb25DaGFuZ2VkIiwidHlwZSIsImZvcmtKb2luIiwic3Vic2NyaWJlIiwicmVzcG9uc2UiLCJ0b2tlbnMiLCJzcGxpdCIsImhvc3QiLCJob3N0c1NlbGVjdGVkIiwic2VsZWN0QWxsQWdlbnRzIiwic3RhcnRQb2xsaW5nIiwiZXJyIiwicmN2IiwicG9sbGVycyIsImFqYXgiLCJnZXRKU09OIiwidW5Nb3VudCIsInppcCIsImFwcGx5IiwicmV0cnlXaGVuIiwiZXJyb3JzIiwic2NhbiIsImFjYyIsIngiLCJmbGF0TWFwIiwidGltZXIiLCJjb21wdXRlSW50ZXJ2YWwiLCJyZXBlYXRXaGVuIiwibm90aWZpY2F0aW9uIiwiVmFsdWVzIiwicHJlcGFyZU1ldHJpY3NBcnJheSIsInJlZnJlc2hDaGFydCIsImUiLCJ0b0pTIiwic2xpY2UiLCJkZXN0cm95IiwiY2hhcnRzIiwicmVtb3ZlIiwidW5kZWZpbmVkIiwiQ2hhcnRTdG9yZSIsImFkZENoYXJ0IiwidjQiLCJ1cGRhdGVDaGFydHMiLCJpbml0aWFsU3RhdGUiLCJjaGFydFN0b3JlIiwiZnJvbUpTIiwiaSIsImxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTSxhQUVKLGdCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLE9BQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNELEM7Ozs7SUFHR0MsSzs7OzJCQUNVQyxLLEVBQU9DLEssRUFBTztBQUMxQixhQUFPLElBQUlGLEtBQUosQ0FBVUMsS0FBVixFQUFpQkMsTUFBTUMsRUFBdkIsRUFBMkJELE1BQU1FLEtBQWpDLEVBQXdDRixNQUFNRyxNQUE5QyxDQUFQO0FBQ0Q7OztBQVVELGlCQUFZSixLQUFaLEVBQW1CRSxFQUFuQixFQUF1QkMsS0FBdkIsRUFBOEJDLE1BQTlCLEVBQXNDO0FBQUE7O0FBQUE7O0FBQ3BDLFNBQUtKLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtFLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtHLElBQUwsR0FBWSxLQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEVBQVo7QUFDQTtBQUNEOzs7O21DQWdEYztBQUNiLFVBQUksS0FBS0EsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLEtBQUtILElBQW5DO0FBQ0EsYUFBS0ksT0FBTDtBQUNEO0FBQ0Y7Ozs7O0FBcUREO29DQUNnQkMsSyxFQUFPO0FBQ3JCLFVBQUlBLEtBQUosRUFBVztBQUNUO0FBQ0Es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O0FBQ0FLLGlCQUFXUixNQUFYLEdBQW9CTyxhQUFhbkQsR0FBYixDQUFpQjtBQUFBLGVBQVNsRCxNQUFNdUcsTUFBTixDQUFhRCxVQUFiLEVBQXlCcEcsS0FBekIsQ0FBVDtBQUFBLE9BQWpCLENBQXBCO0FBQ0EsYUFBT29HLFVBQVA7QUFDRDs7QUFNRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztXQWhCcUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVXBELEdBQVYsQ0FBYyxVQUFVc0QsQ0FBVixFQUFhekQsR0FBYixFQUFrQjBELElBQWxCLEVBQXdCO0FBQ3JELGFBQU8sSUFBSXpHLEtBQUosQ0FBVSxJQUFWLEVBQWdCd0csQ0FBaEIsRUFBbUIsWUFBWUEsQ0FBL0IsRUFBa0MsRUFBbEMsQ0FBUDtBQUNELEtBRmdCLEM7OztrQkFSRlAsVSIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXJjL3dlYmRldi9ib29rIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWN0aW9uLCBhdXRvcnVuLCBvYnNlcnZhYmxlLCBjb21wdXRlZCB9IGZyb20gJ21vYngnO1xuaW1wb3J0IFV1aWQgZnJvbSAndXVpZCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZG9tL2FqYXgnXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbmNsYXNzIE1ldHJpYyB7XG4gIEBvYnNlcnZhYmxlIG5hbWU7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gIH1cbn1cblxuY2xhc3MgQ2hhcnQge1xuICBzdGF0aWMgZnJvbUpTKHN0b3JlLCBjaGFydCkge1xuICAgIHJldHVybiBuZXcgQ2hhcnQoc3RvcmUsIGNoYXJ0LmlkLCBjaGFydC50aXRsZSwgY2hhcnQubWV0cmljKTtcbiAgfVxuXG4gIEBvYnNlcnZhYmxlIGFnZW50cyA9IHVuZGVmaW5lZDtcbiAgQG9ic2VydmFibGUgbWV0cmljTmFtZVNlbGVjdGVkID0gW107XG4gIEBvYnNlcnZhYmxlIHRpdGxlO1xuICAgQG9ic2VydmFibGUgY291bnRlciA9IDA7XG4gIEBvYnNlcnZhYmxlIG1ldHJpY3MgPSBbXTtcbiAgQG9ic2VydmFibGUgbWV0cmljc1N0cmluZyA9IHVuZGVmaW5lZDtcbiAgQG9ic2VydmFibGUgdHlwZSA9IFwibWlzc2luZy1kYXRhXCI7XG4gIFxuICBjb25zdHJ1Y3RvcihzdG9yZSwgaWQsIHRpdGxlLCBtZXRyaWMpIHtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIC8vdGhpcy5hZGRNZXRyaWMoXCIxNF9DbGllbnRSZXF1ZXN0X0xhdGVuY3ljbGllbnRyZXF1ZXN0PVdyaXRlLGZjdD0xNU1pbnV0ZVJhdGVcIilcbiAgfVxuXG4gIHN0YXRpYyBpbml0SW50ZXJ2YWwgPSAxMDAwO1xuICBpbnRlcnZhbCA9IENoYXJ0LmluaXRJbnRlcnZhbDtcbiAgc3RhdGljIG1heEludGVydmFsID0gMTAwMDAwO1xuXG5cblxuICBtZXRyaWNTZWxlY3Rpb25DaGFuZ2VkID0gYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAvLyB0aGlzLm1ldHJpY05hbWVTZWxlY3RlZCA9IHZhbHVlO1xuICAgIC8vIHRoaXMubWV0cmljcyA9ICB0aGlzLm1ldHJpY05hbWVTZWxlY3RlZC5zcGxpdChcIixcIilcbiAgICB2YXIgZmlsdGVyID0ge1xuICAgICAgbWV0cmljczogdGhpcy5tZXRyaWNzXG4gICAgfVxuXG5cbiAgICB0aGlzLnR5cGUgPSBcImxpbmVcIlxuICAgIC8vIFVzZXMgT2JzZXJ2YWJsZS5mb3JrSm9pbigpIHRvIHJ1biBtdWx0aXBsZSBjb25jdXJyZW50IGh0dHAuZ2V0KCkgcmVxdWVzdHMuXG4gICAgLy8gYmV0dGVyIHRoYW4gZG9pbmcgbXVsdGlwbGUgYXdhaXQgZmV0Y2goKVxuICAgIE9ic2VydmFibGUuZm9ya0pvaW4oXG4gICAgICB0aGlzLmZldGNoKFwiY2x1c3RlclwiLCBmaWx0ZXIpLFxuICAgICAgdGhpcy5mZXRjaChcImRjXCIsIGZpbHRlciksXG4gICAgICB0aGlzLmZldGNoKFwiaG9zdF9uYW1lXCIsIGZpbHRlciksXG4gICAgICB0aGlzLmZldGNoKFwiYWdlbnRfaWRcIiwgZmlsdGVyKSxcbiAgICApLnN1YnNjcmliZShcbiAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5jbHVzdGVycyA9IHJlc3BvbnNlWzBdXG4gICAgICAgIHRoaXMuZGNzID0gcmVzcG9uc2VbMV1cbiAgICAgICAgLy8gaG9zdHMgY29tZXMgaW4gdGhlIGZvcm1hdCAnYWdlbnRJRDtob3N0bmFtZScuIFRoaXMgZW5hYmxlIHJlcXVlc3RpbmcgdG8gY2Fzc2FuZHJhIHVzaW5nIHRoZSBhZ2VudElEXG4gICAgICAgIHRoaXMuaG9zdHMgPSByZXNwb25zZVsyXS5tYXAodmFsID0+IHtcbiAgICAgICAgICB2YXIgdG9rZW5zID0gdmFsLm5hbWUuc3BsaXQoXCI7XCIpXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFnZW50OiB0b2tlbnNbMF0sXG4gICAgICAgICAgICBob3N0OiB0b2tlbnNbMV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLmhvc3RzU2VsZWN0ZWQgPT0gbnVsbCB8fCB0aGlzLmhvc3RzU2VsZWN0ZWQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdEFsbEFnZW50cygpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGFydFBvbGxpbmcoKVxuICAgICAgfSxcbiAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICk7XG5cblxuXG4gIH0pXG5cbiAgcmVmcmVzaENoYXJ0KCkge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJVUERBVEVEIERBVEEgOlwiLCB0aGlzLmRhdGEpXG4gICAgICB0aGlzLmNvdW50ZXIrK1xuICAgIH1cbiAgfVxuXG4gIEBjb21wdXRlZCBnZXQgaXNMb2dnZWRJbigpIHtcbiAgICByZXR1cm4gISF0aGlzLmRhdGE7XG4gIH1cblxuICBzdGFydFBvbGxpbmcgPSBhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgIHZhciByY3YgPSB0aGlzXG4gICAgdmFyIHBvbGxlcnMgPSB0aGlzLm1ldHJpY3MubWFwKG1ldHJpYyA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZST00gUE9MTEVSLCBNRVRSSUMgSVM6IFwiLCBtZXRyaWMpXG4gICAgICAvLzE0X0NsaWVudFJlcXVlc3RfTGF0ZW5jeWNsaWVudHJlcXVlc3Q9V3JpdGVfZmN0PTE1TWludXRlUmF0ZVxuICAgICAgcmV0dXJuIE9ic2VydmFibGUuYWpheC5nZXRKU09OKGBodHRwOi8vbG9jYWxob3N0OjIyMjIvaG9tZS9tZXRyaWNzP21ldHJpYz0ke21ldHJpY30mYWdlbnRzPSR7dGhpcy5hZ2VudHN9JnRpbWU9NSZpbnRlcnZhbD01YClcbiAgICB9KVxuICAgIHRoaXMudW5Nb3VudCgpXG4gICAgdGhpcy5wb2xsZXIgPSBPYnNlcnZhYmxlLnppcC5hcHBseShPYnNlcnZhYmxlLCBwb2xsZXJzKVxuICAgICAgLnJldHJ5V2hlbihmdW5jdGlvbiAoZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBlcnJvcnMuc2NhbihmdW5jdGlvbiAoYWNjLCB4KSB7IHJldHVybiBhY2MgKyB4OyB9LCAwKVxuICAgICAgICAgIC5mbGF0TWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aW1lcihyY3YuY29tcHV0ZUludGVydmFsKHRydWUpKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAucmVwZWF0V2hlbihmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgIHJldHVybiBub3RpZmljYXRpb25cbiAgICAgICAgICAuc2NhbihmdW5jdGlvbiAoYWNjLCB4KSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjICsgeDtcbiAgICAgICAgICB9LCAwKVxuICAgICAgICAgIC5mbGF0TWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aW1lcihyY3YuY29tcHV0ZUludGVydmFsKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhLmxlbmd0aCA9IDBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlZBTFVFIFJFQ0VJVkVEOiBcIiArIEpTT04uc3RyaW5naWZ5KHgpKVxuICAgICAgICB4Lm1hcCgobWV0cmljKSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmtleXMobWV0cmljLlZhbHVlcykuZm9yRWFjaCgoYWdlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChhZ2VudCAmJiBPYmplY3Qua2V5cyhtZXRyaWMuVmFsdWVzW2FnZW50XSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLmRhdGEucHVzaChDaGFydC5wcmVwYXJlTWV0cmljc0FycmF5KG1ldHJpYy5WYWx1ZXNbYWdlbnRdKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hDaGFydCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJubyBkYXRhIHJlY2VpdmVkXCIpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZSkgPT4geyBjb25zb2xlLmxvZygnb25FcnJvcjogJXMnLCBlKTsgfSxcbiAgICAgICgpID0+IHsgY29uc29sZS5sb2coJ29uQ29tcGxldGVkJyk7IH0pO1xuICB9KVxuXG5cblxuICAvLyBiYWNrb2ZmIGxvZ2ljXG4gIGNvbXB1dGVJbnRlcnZhbChlcnJvcikge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgLy8gZG91YmxlIHVudGlsIG1heGltdW0gaW50ZXJ2YWwgb24gZXJyb3JzXG4gICAgICB0aGlzLmludGVydmFsID0gdGhpcy5pbnRlcnZhbCA8IENoYXJ0Lm1heEludGVydmFsID8gdGhpcy5pbnRlcnZhbCAqIDIgOiBDaGFydC5tYXhJbnRlcnZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYW55dGltZSB0aGUgcG9sbGVyIHN1Y2NlZWRzLCBtYWtlIHN1cmUgd2UndmUgcmVzZXQgdG9cbiAgICAgIC8vIGRlZmF1bHQgaW50ZXJ2YWwuLiB0aGlzIGFsc28gYWxsb3dzIHRoZSBpbml0SW50ZXJ2YWwgdG8gXG4gICAgICAvLyBjaGFuZ2Ugd2hpbGUgdGhlIHBvbGxlciBpcyBydW5uaW5nXG4gICAgICB0aGlzLmludGVydmFsID0gQ2hhcnQuaW5pdEludGVydmFsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbDtcbiAgfVxuXG5cblxuICAvLyBjbGVhbiBzdWJzY3JpcHRpb24gaW4gY2FzZSB3ZSBsZWF2ZSB0aGUgcGFnZSBvciBhZGQgb3RoZXIgbWV0cmljcyBcbiAgdW5Nb3VudCgpIHtcbiAgICBpZiAodGhpcy5wb2xsZXIpIHtcbiAgICAgIHRoaXMucG9sbGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmV0Y2goZmllbGRUb0ZldGNoLCBmaWx0ZXIpIHtcbiAgICB0cnkge1xuXG4gICAgICB2YXIgcXVlcnkgPSBuZXcgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuXG4gICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgICAgICAgdGhpcy5xdWVyeS5maWx0ZXJlZCA9IHt9XG4gICAgICAgICAgdGhpcy5xdWVyeS5maWx0ZXJlZC5maWx0ZXIgPSB7fTtcbiAgICAgICAgICB0aGlzLnF1ZXJ5LmZpbHRlcmVkLmZpbHRlci50ZXJtcyA9IHt9O1xuICAgICAgICAgIGlmIChmaWx0ZXIuZGNzKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5LmZpbHRlcmVkLmZpbHRlci50ZXJtcy5kYyA9IGZpbHRlci5kY3M7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaWx0ZXIuY2x1c3RlcnMpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcnkuZmlsdGVyZWQuZmlsdGVyLnRlcm1zLmNsdXN0ZXIgPSBmaWx0ZXIuY2x1c3RlcnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaWx0ZXIuem9uZXMpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcnkuZmlsdGVyZWQuZmlsdGVyLnRlcm1zLnpvbmUgPSBmaWx0ZXIuem9uZXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaWx0ZXIucmVnaW9ucykge1xuICAgICAgICAgICAgdGhpcy5xdWVyeS5maWx0ZXJlZC5maWx0ZXIudGVybXMucmVnaW9uID0gZmlsdGVyLnJlZ2lvbnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaWx0ZXIubWV0cmljcykge1xuICAgICAgICAgICAgdGhpcy5xdWVyeS5maWx0ZXJlZC5maWx0ZXIudGVybXMubWV0cmljX25hbWUgPSBmaWx0ZXIubWV0cmljcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFnZ3MgPSB7fVxuICAgICAgICB0aGlzLmFnZ3MubWV0cmljID0ge31cbiAgICAgICAgdGhpcy5hZ2dzLm1ldHJpYy50ZXJtcyA9IHtcbiAgICAgICAgICBmaWVsZDogZmllbGRUb0ZldGNoLFxuICAgICAgICAgIHNpemU6IDBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo5MjAwL21ldGFtZXRyaWNzL21ldHJpYy9fc2VhcmNoJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShxdWVyeSlcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgcmVzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHZhciByZXN1bHQgPSBbXVxuICAgICAgZm9yICh2YXIgayBpbiByZXMuYWdncmVnYXRpb25zLm1ldHJpYy5idWNrZXRzKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHsgbmFtZTogcmVzLmFnZ3JlZ2F0aW9ucy5tZXRyaWMuYnVja2V0c1trXS5rZXkgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbkVycm9yOiAlcycsIGUpO1xuICAgIH1cbiAgfVxuICBzZWxlY3RBbGxBZ2VudHMoKSB7XG4gICAgdGhpcy5hZ2VudHMgPSB0aGlzLmhvc3RzLm1hcCh2YWwgPT4gdmFsLmFnZW50KS5qb2luKCcsJyk7XG4gICAgY29uc29sZS5sb2coXCJTRUxFQ1QgQUxMIEFHRU5UUyBXT09UOiBcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5hZ2VudHMpKVxuICB9XG5cblxuICBzdGF0aWMgcHJlcGFyZU1ldHJpY3NBcnJheShtZXRyaWNzUmF3KSB7XG4gICAgY29uc3QgbWV0cmljcyA9IG5ldyBBcnJheSgpO1xuICAgIE9iamVjdC5rZXlzKG1ldHJpY3NSYXcpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbWV0cmljcy5wdXNoKHsgXCJkXCI6IG5ldyBEYXRlKGtleSksIFwidlwiOiBtZXRyaWNzUmF3W2tleV0gfSlcbiAgICAgIC8vY29uc29sZS5sb2coXCJwdXNoaW5nIFwiLCBKU09OLnN0cmluZ2lmeSh7IFwiZFwiOiBuZXcgRGF0ZShrZXkpLCBcInZcIjogbWV0cmljc1Jhd1trZXldIH0pKVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldHJpY3M7XG4gIH1cblxuICB0b0pTID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgbWV0cmljczogdGhpcy5tZXRyaWNzLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLnNsaWNlKClcbiAgICB9O1xuICB9XG4gIGRlc3Ryb3kgPSAoKSA9PiB0aGlzLnN0b3JlLmNoYXJ0cy5yZW1vdmUodGhpcylcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydFN0b3JlIHtcblxuICBzdGF0aWMgZnJvbUpTKGluaXRpYWxTdGF0ZSkge1xuICAgIGNvbnN0IGNoYXJ0U3RvcmUgPSBuZXcgQ2hhcnRTdG9yZSgpO1xuICAgIGNoYXJ0U3RvcmUuY2hhcnRzID0gaW5pdGlhbFN0YXRlLm1hcChjaGFydCA9PiBDaGFydC5mcm9tSlMoY2hhcnRTdG9yZSwgY2hhcnQpKTtcbiAgICByZXR1cm4gY2hhcnRTdG9yZTtcbiAgfVxuICBcbiAgQG9ic2VydmFibGUgIGNoYXJ0cz0gWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSwga2V5LCBsaXN0KSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2hhcnQodGhpcywgaSwgXCJjaGFydCAjXCIgKyBpLCBcIlwiKTtcbiAgICAgIH0pXG5cbiAgLy8gSW1wbGVtZW50IHdpdGggc29tZSBkYXRhIHN0b3JlIGZvciB0aGUgdXNlclxuICAvLyAgIGZldGNoSW5pdGlhbENoYXJ0cyA9ICgpID0+IHtcbiAgLy8gICAgIGlmKHRoaXMuaW5pdGlhbEZldGNoID09IHRydWUpIHtcbiAgLy8gICAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgICB9XG4gIC8vICAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9jaGFydHMnKVxuICAvLyAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC8vICAgICAudGhlbihjaGFydHMgPT4ge1xuICAvLyAgICAgICBjaGFydHMuZm9yRWFjaChjaGFydCA9PiB0aGlzLmFkZENoYXJ0KGNoYXJ0LnRpdGxlKSlcbiAgLy8gICAgICAgdGhpcy5pbml0aWFsRmV0Y2ggPSB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgICAgKVxuICAvLyAgIH1cblxuICBhZGRDaGFydCA9IGFjdGlvbigodGl0bGUpID0+XG4gICAgdGhpcy5jaGFydHMucHVzaChuZXcgQ2hhcnQodGhpcywgVXVpZC52NCgpLCB0aXRsZSkpXG4gIClcblxuICB1cGRhdGVDaGFydHMgPSBhY3Rpb24oKCkgPT4ge1xuICAgIHRoaXMuY2hhcnRzLmZvckVhY2goY2hhcnQgPT4gY2hhcnQudGl0bGUgPSBcIllFQUhcIik7XG4gIH1cbiAgKVxuXG4gIHRvSlMgPSAoKSA9PiB0aGlzLmNoYXJ0cy5tYXAoY2hhcnQgPT4gY2hhcnQudG9KUygpKVxuXG59Il19