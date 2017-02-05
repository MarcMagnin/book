'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Filter = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _mobx = require('mobx');

require('isomorphic-fetch');

var _reactSelectFastFilterOptions = require('react-select-fast-filter-options');

var _reactSelectFastFilterOptions2 = _interopRequireDefault(_reactSelectFastFilterOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Metric = function Metric(name) {
  (0, _classCallCheck3.default)(this, Metric);

  (0, _mobx.extendObservable)(this, {
    name: name
  });
};
// Import the fast-filter library


var Filter = exports.Filter = function Filter() {
  (0, _classCallCheck3.default)(this, Filter);

  this.clusters;
  this.dcs;
  this.zones;
  this.regions;
};

var MetricStore = function () {
  (0, _createClass3.default)(MetricStore, null, [{
    key: 'fromJS',
    value: function fromJS(initialState) {
      var store;
      if (initialState) {
        store = new MetricStore(initialState);
      } else {
        store = new MetricStore();
      }
      return store;
    }
  }]);

  function MetricStore(initialState) {
    var _this = this;

    (0, _classCallCheck3.default)(this, MetricStore);

    this.toJS = function () {
      return (0, _mobx.toJS)({ metrics: _this.metrics });
    };

    (0, _mobx.extendObservable)(this, {
      metrics: [],
      metricNamesFilterOptions: ""
    });

    if (initialState) {
      this.metrics = (0, _mobx.observable)(initialState.metrics);
      // Create a search index optimized to quickly filter options.
      // The search index will need to be recreated if your options array changes.
      // This index is powered by js-search: https://github.com/bvaughn/js-search
      var options = initialState.metrics;
      // JSON.stringify(options)
      // var myWorker = new Worker("worker.js");

      // myWorker.onmessage = function(e) {
      //   result.textContent = e.data;
      //   console.log('Message received from worker');
      // }

      // myWorker.postMessage({options, labelKey:"name", valueKey:"name"} );

      this.metricNamesFilterOptions = (0, _reactSelectFastFilterOptions2.default)({ options: options, labelKey: "name", valueKey: "name" });
    }
  }

  (0, _createClass3.default)(MetricStore, [{
    key: 'fetchMetricNames',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _res, k;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch('http://localhost:9200/metametrics/metric/_search', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({
                    size: 0,
                    aggs: {
                      metric: {
                        terms: {
                          field: "metric_name",
                          size: 0
                        }
                      }
                    }

                  })
                });

              case 3:
                _res = _context.sent;
                _context.next = 6;
                return _res.json();

              case 6:
                _res = _context.sent;


                for (k in _res.aggregations.metric.buckets) {
                  this.metrics.push({ name: _res.aggregations.metric.buckets[k].key });
                }
                console.log("METRIC NUMBER:" + this.metrics.length);

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](0);

                console.log('onError: %s', _context.t0);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function fetchMetricNames() {
        return _ref.apply(this, arguments);
      }

      return fetchMetricNames;
    }()
  }, {
    key: 'fetchClusters',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var _res2, k;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return fetch('http://localhost:9200/metametrics/metric/_search', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({
                    size: 0,
                    aggs: {
                      metric: {
                        terms: {
                          field: "cluster",
                          size: 0
                        }
                      }
                    }
                  })
                });

              case 3:
                _res2 = _context2.sent;
                _context2.next = 6;
                return _res2.json();

              case 6:
                _res2 = _context2.sent;


                for (k in _res2.aggregations.metric.buckets) {
                  this.metrics.push({ value: _res2.aggregations.metric.buckets[k].key, label: k + ":" + _res2.aggregations.metric.buckets[k].key });
                }

                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2['catch'](0);

                console.log('onError: %s', _context2.t0);

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function fetchClusters() {
        return _ref2.apply(this, arguments);
      }

      return fetchClusters;
    }()
  }], [{
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
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(fieldToFetch, filter) {
        var query, _res3, result, k;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                query = new function () {
                  this.size = 0;
                  this.query = {};
                  this.query.filtered = {};
                  this.query.filtered.filter = {};
                  this.query.filtered.filter.terms = {};
                  if (filter && filter.dcs) {
                    this.query.filtered.filter.terms.dc = dcs;
                  }
                  if (filter && filter.clusters) {
                    this.query.filtered.filter.terms.cluster = clusters;
                  }
                  if (filter && filter.zones) {
                    this.query.filtered.filter.terms.zone = zones;
                  }
                  if (filter && filter.regions) {
                    this.query.filtered.filter.terms.region = regions;
                  }

                  this.aggs = {};
                  this.aggs.metric = {};
                  this.aggs.metric.terms = {
                    field: fieldToFetch,
                    size: 0
                  };
                }();

                console.log((0, _stringify2.default)(query));

                _context3.next = 5;
                return fetch('http://localhost:9200/metametrics/metric/_search', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)(query)
                });

              case 5:
                _res3 = _context3.sent;
                _context3.next = 8;
                return _res3.json();

              case 8:
                _res3 = _context3.sent;
                result = [];

                for (k in _res3.aggregations.metric.buckets) {
                  result.push({ value: k, label: _res3.aggregations.metric.buckets[k].key });
                }
                return _context3.abrupt('return', result);

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3['catch'](0);

                console.log('onError: %s', _context3.t0);

              case 17:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 14]]);
      }));

      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }())
  }]);
  return MetricStore;
}();

exports.default = MetricStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9tZXRyaWMuanMiXSwibmFtZXMiOlsiTWV0cmljIiwibmFtZSIsIkZpbHRlciIsImNsdXN0ZXJzIiwiZGNzIiwiem9uZXMiLCJyZWdpb25zIiwiTWV0cmljU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJzdG9yZSIsInRvSlMiLCJtZXRyaWNzIiwibWV0cmljTmFtZXNGaWx0ZXJPcHRpb25zIiwib3B0aW9ucyIsImxhYmVsS2V5IiwidmFsdWVLZXkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwic2l6ZSIsImFnZ3MiLCJtZXRyaWMiLCJ0ZXJtcyIsImZpZWxkIiwicmVzIiwianNvbiIsImsiLCJhZ2dyZWdhdGlvbnMiLCJidWNrZXRzIiwicHVzaCIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJ2YWx1ZSIsImxhYmVsIiwiZmllbGRUb0ZldGNoIiwiZmlsdGVyIiwicXVlcnkiLCJmaWx0ZXJlZCIsImRjIiwiY2x1c3RlciIsInpvbmUiLCJyZWdpb24iLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7SUFFTUEsTSxHQUNGLGdCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2xCLDhCQUFpQixJQUFqQixFQUF1QjtBQUNyQkE7QUFEcUIsR0FBdkI7QUFHRCxDO0FBUkg7OztJQVdhQyxNLFdBQUFBLE0sR0FDVCxrQkFBYztBQUFBOztBQUNaLE9BQUtDLFFBQUw7QUFDQSxPQUFLQyxHQUFMO0FBQ0EsT0FBS0MsS0FBTDtBQUNBLE9BQUtDLE9BQUw7QUFDSCxDOztJQUdrQkMsVzs7OzJCQUVMQyxZLEVBQWM7QUFDMUIsVUFBSUMsS0FBSjtBQUNBLFVBQUdELFlBQUgsRUFBZ0I7QUFDVkMsZ0JBQVEsSUFBSUYsV0FBSixDQUFnQkMsWUFBaEIsQ0FBUjtBQUNMLE9BRkQsTUFFSztBQUNIQyxnQkFBTyxJQUFJRixXQUFKLEVBQVA7QUFDRDtBQUNELGFB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QUVrQnZCLE1BQU0sa0RBQU4sRUFBMEQ7QUFDeEVDLDBCQUFRLE1BRGdFO0FBRXhFQywyQkFBUztBQUNQLDhCQUFVLGtCQURIO0FBRVAsb0NBQWdCO0FBRlQsbUJBRitEO0FBTXhFQyx3QkFBTSx5QkFBZW9CLEtBQWY7QUFOa0UsaUJBQTFELEM7OztBQUFaZCxxQjs7dUJBU1VBLE1BQUlDLElBQUosRTs7O0FBQVpELHFCO0FBQ0FvQixzQixHQUFTLEU7O0FBQ2IscUJBQVFsQixDQUFSLElBQWFGLE1BQUlHLFlBQUosQ0FBaUJOLE1BQWpCLENBQXdCTyxPQUFyQyxFQUE4QztBQUMxQ2dCLHlCQUFPZixJQUFQLENBQVksRUFBQ0ssT0FBTVIsQ0FBUCxFQUFVUyxPQUFNWCxNQUFJRyxZQUFKLENBQWlCTixNQUFqQixDQUF3Qk8sT0FBeEIsQ0FBZ0NGLENBQWhDLEVBQW1DSSxHQUFuRCxFQUFaO0FBQ0g7a0RBQ01jLE07Ozs7OztBQUVOYix3QkFBUUMsR0FBUixDQUFZLGFBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkF4SmMxQixXIiwiZmlsZSI6Im1ldHJpYy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXJjL3dlYmRldi9ib29rIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWN0aW9uLCBleHRlbmRPYnNlcnZhYmxlLG9ic2VydmFibGUsIHRvSlMgfSBmcm9tICdtb2J4JztcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7IFxuLy8gSW1wb3J0IHRoZSBmYXN0LWZpbHRlciBsaWJyYXJ5XG5pbXBvcnQgY3JlYXRlRmlsdGVyT3B0aW9ucyBmcm9tICdyZWFjdC1zZWxlY3QtZmFzdC1maWx0ZXItb3B0aW9ucydcblxuY2xhc3MgTWV0cmljIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgZXh0ZW5kT2JzZXJ2YWJsZSh0aGlzLCB7XG4gICAgICBuYW1lXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmNsdXN0ZXJzO1xuICAgICAgdGhpcy5kY3M7XG4gICAgICB0aGlzLnpvbmVzO1xuICAgICAgdGhpcy5yZWdpb25zO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldHJpY1N0b3JlIHtcblxuICBzdGF0aWMgZnJvbUpTKGluaXRpYWxTdGF0ZSkge1xuICAgIHZhciBzdG9yZSA7XG4gICAgaWYoaW5pdGlhbFN0YXRlKXtcbiAgICAgICAgICBzdG9yZSA9IG5ldyBNZXRyaWNTdG9yZShpbml0aWFsU3RhdGUpO1xuICAgIH1lbHNle1xuICAgICAgc3RvcmU9IG5ldyBNZXRyaWNTdG9yZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc3RvcmU7XG4gIH1cblxuIGNvbnN0cnVjdG9yKGluaXRpYWxTdGF0ZSkge1xuICAgIGV4dGVuZE9ic2VydmFibGUodGhpcywge1xuICAgICAgbWV0cmljczogW10sXG4gICAgICBtZXRyaWNOYW1lc0ZpbHRlck9wdGlvbnM6IFwiXCJcbiAgICB9KTtcbiAgICBcbiAgICBpZihpbml0aWFsU3RhdGUpe1xuICAgICAgdGhpcy5tZXRyaWNzID0gb2JzZXJ2YWJsZShpbml0aWFsU3RhdGUubWV0cmljcylcbiAgICAgIC8vIENyZWF0ZSBhIHNlYXJjaCBpbmRleCBvcHRpbWl6ZWQgdG8gcXVpY2tseSBmaWx0ZXIgb3B0aW9ucy5cbiAgICAgIC8vIFRoZSBzZWFyY2ggaW5kZXggd2lsbCBuZWVkIHRvIGJlIHJlY3JlYXRlZCBpZiB5b3VyIG9wdGlvbnMgYXJyYXkgY2hhbmdlcy5cbiAgICAgIC8vIFRoaXMgaW5kZXggaXMgcG93ZXJlZCBieSBqcy1zZWFyY2g6IGh0dHBzOi8vZ2l0aHViLmNvbS9idmF1Z2huL2pzLXNlYXJjaFxuICAgICAgdmFyIG9wdGlvbnMgPSBpbml0aWFsU3RhdGUubWV0cmljc1xuICAgICAgLy8gSlNPTi5zdHJpbmdpZnkob3B0aW9ucylcbiAgICAgIC8vIHZhciBteVdvcmtlciA9IG5ldyBXb3JrZXIoXCJ3b3JrZXIuanNcIik7XG5cbiAgICAgIC8vIG15V29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vICAgcmVzdWx0LnRleHRDb250ZW50ID0gZS5kYXRhO1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnTWVzc2FnZSByZWNlaXZlZCBmcm9tIHdvcmtlcicpO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBteVdvcmtlci5wb3N0TWVzc2FnZSh7b3B0aW9ucywgbGFiZWxLZXk6XCJuYW1lXCIsIHZhbHVlS2V5OlwibmFtZVwifSApO1xuXG4gICAgICB0aGlzLm1ldHJpY05hbWVzRmlsdGVyT3B0aW9ucyA9IGNyZWF0ZUZpbHRlck9wdGlvbnMoIHtvcHRpb25zLCBsYWJlbEtleTpcIm5hbWVcIiwgdmFsdWVLZXk6XCJuYW1lXCJ9IClcbiAgICB9XG4gIH1cblxuYXN5bmMgZmV0Y2hNZXRyaWNOYW1lcygpIHtcbiAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjkyMDAvbWV0YW1ldHJpY3MvbWV0cmljL19zZWFyY2gnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHNpemU6IDAsXG4gICAgICAgICAgICBhZ2dzOiB7XG4gICAgICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgICAgIHRlcm1zOntcbiAgICAgICAgICAgICAgICAgIGZpZWxkIDpcIm1ldHJpY19uYW1lXCIsXG4gICAgICAgICAgICAgICAgICBzaXplOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgdmFyIHJlcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgXG4gICAgICBmb3IodmFyIGsgaW4gcmVzLmFnZ3JlZ2F0aW9ucy5tZXRyaWMuYnVja2V0cykge1xuICAgICAgICAgIHRoaXMubWV0cmljcy5wdXNoKHtuYW1lOiByZXMuYWdncmVnYXRpb25zLm1ldHJpYy5idWNrZXRzW2tdLmtleX0pO1xuICAgICAgfVxuICAgICAgIGNvbnNvbGUubG9nKFwiTUVUUklDIE5VTUJFUjpcIisgdGhpcy5tZXRyaWNzLmxlbmd0aClcbiAgICAgXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgIGNvbnNvbGUubG9nKCdvbkVycm9yOiAlcycsIGUpO1xuICAgIH0gIFxuICB9XG5cbiBhc3luYyBmZXRjaENsdXN0ZXJzICgpIHtcbiAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjkyMDAvbWV0YW1ldHJpY3MvbWV0cmljL19zZWFyY2gnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHNpemU6IDAsXG4gICAgICAgICAgICBhZ2dzOiB7XG4gICAgICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgICAgIHRlcm1zOntcbiAgICAgICAgICAgICAgICAgIGZpZWxkIDpcImNsdXN0ZXJcIixcbiAgICAgICAgICAgICAgICAgIHNpemU6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgdmFyIHJlcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgXG4gICAgICBmb3IodmFyIGsgaW4gcmVzLmFnZ3JlZ2F0aW9ucy5tZXRyaWMuYnVja2V0cykge1xuICAgICAgICAgIHRoaXMubWV0cmljcy5wdXNoKHt2YWx1ZTpyZXMuYWdncmVnYXRpb25zLm1ldHJpYy5idWNrZXRzW2tdLmtleSAgLCBsYWJlbDprK1wiOlwiK3Jlcy5hZ2dyZWdhdGlvbnMubWV0cmljLmJ1Y2tldHNba10ua2V5fSk7XG4gICAgICB9XG4gICAgIFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICBjb25zb2xlLmxvZygnb25FcnJvcjogJXMnLCBlKTtcbiAgICB9ICBcbiAgfVxuXG5cbiAgc3RhdGljIGFzeW5jIGZldGNoKGZpZWxkVG9GZXRjaCwgZmlsdGVyKSB7XG4gIHRyeSB7XG5cbiAgICB2YXIgcXVlcnkgPSBuZXcgZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgICB0aGlzLnF1ZXJ5LmZpbHRlcmVkID3CoHt9XG4gICAgICB0aGlzLnF1ZXJ5LmZpbHRlcmVkLmZpbHRlcj0ge307XG4gICAgICB0aGlzLnF1ZXJ5LmZpbHRlcmVkLmZpbHRlci50ZXJtcyA9IHt9O1xuICAgICAgaWYoZmlsdGVyICYmIGZpbHRlci5kY3Mpe1xuICAgICAgICB0aGlzLnF1ZXJ5LmZpbHRlcmVkLmZpbHRlci50ZXJtcy5kYyA9IGRjcztcbiAgICAgIH1cbiAgICAgIGlmKGZpbHRlciAmJiBmaWx0ZXIuY2x1c3RlcnMpe1xuICAgICAgICB0aGlzLnF1ZXJ5LmZpbHRlcmVkLmZpbHRlci50ZXJtcy5jbHVzdGVyID0gY2x1c3RlcnM7XG4gICAgICB9IFxuICAgICAgaWYoZmlsdGVyICYmIGZpbHRlci56b25lcyl7XG4gICAgICAgIHRoaXMucXVlcnkuZmlsdGVyZWQuZmlsdGVyLnRlcm1zLnpvbmUgPSB6b25lcztcbiAgICAgIH0gXG4gICAgICBpZihmaWx0ZXIgJiYgZmlsdGVyLnJlZ2lvbnMpe1xuICAgICAgICB0aGlzLnF1ZXJ5LmZpbHRlcmVkLmZpbHRlci50ZXJtcy5yZWdpb24gPSByZWdpb25zO1xuICAgICAgfSBcblxuICAgICAgdGhpcy5hZ2dzID17fVxuICAgICAgdGhpcy5hZ2dzLm1ldHJpYyA9e31cbiAgICAgIHRoaXMuYWdncy5tZXRyaWMudGVybXMgPSB7XG4gICAgICAgICAgZmllbGQgOiBmaWVsZFRvRmV0Y2gsXG4gICAgICAgICAgc2l6ZTowXG4gICAgICB9XG4gICAgfVxuICAgICAgY29uc29sZS5sb2coIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSlcbiAgICBcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjkyMDAvbWV0YW1ldHJpY3MvbWV0cmljL19zZWFyY2gnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KVxuICAgICAgICB9KTtcblxuICAgICAgdmFyIHJlcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICB2YXIgcmVzdWx0ID0gW11cbiAgICAgIGZvcih2YXIgayBpbiByZXMuYWdncmVnYXRpb25zLm1ldHJpYy5idWNrZXRzKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goe3ZhbHVlOmssIGxhYmVsOnJlcy5hZ2dyZWdhdGlvbnMubWV0cmljLmJ1Y2tldHNba10ua2V5fSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICBjb25zb2xlLmxvZygnb25FcnJvcjogJXMnLCBlKTtcbiAgICB9ICBcbiB9XG4gIFxuXG4gIFxuXG4gIHRvSlM9ICgpID0+IHsgcmV0dXJuIHRvSlMoe21ldHJpY3MgOiB0aGlzLm1ldHJpY3N9KX1cblxufSJdfQ==