'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _chart = require('./chart.js');

var _chart2 = _interopRequireDefault(_chart);

var _metric = require('./metric.js');

var _metric2 = _interopRequireDefault(_metric);

var _uistate = require('./uistate.js');

var _uistate2 = _interopRequireDefault(_uistate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
  ChartStore: null,
  MetricStore: null,
  UiState: _uistate2.default
};

var Stores = function () {
  function Stores(initialState) {
    (0, _classCallCheck3.default)(this, Stores);

    this.ChartStore = initialState.ChartStore ? _chart2.default.fromJS(initialState.ChartStore) : new _chart2.default();
    this.MetricStore = initialState.MetricStore ? _metric2.default.fromJS(initialState.MetricStore) : new _metric2.default();
    this.UiState = _uistate2.default;
  }

  (0, _createClass3.default)(Stores, [{
    key: 'getState',
    value: function getState() {
      return {
        ChartStore: this.ChartStore.toJS(),
        MetricStore: this.MetricStore.toJS(),
        UiState: this.UiState
      };
    }
  }]);
  return Stores;
}();

exports.default = function (isServer) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultState;

  if (isServer) {
    return new Stores(initialState);
  } else {

    if (!window.__stores__) {
      window.__stores__ = new Stores(initialState);
    }
    return window.__stores__;
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0U3RhdGUiLCJDaGFydFN0b3JlIiwiTWV0cmljU3RvcmUiLCJVaVN0YXRlIiwiU3RvcmVzIiwiaW5pdGlhbFN0YXRlIiwiZnJvbUpTIiwidG9KUyIsImlzU2VydmVyIiwid2luZG93IiwiX19zdG9yZXNfXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGVBQWU7QUFDbkJDLGNBQVksSUFETztBQUVuQkMsZUFBYSxJQUZNO0FBR25CQztBQUhtQixDQUFyQjs7SUFNTUMsTTtBQUNKLGtCQUFZQyxZQUFaLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUtKLFVBQUwsR0FBbUJJLGFBQWFKLFVBQWQsR0FBNEIsZ0JBQVdLLE1BQVgsQ0FBa0JELGFBQWFKLFVBQS9CLENBQTVCLEdBQXdFLHFCQUExRjtBQUNBLFNBQUtDLFdBQUwsR0FBb0JHLGFBQWFILFdBQWQsR0FBNkIsaUJBQVlJLE1BQVosQ0FBbUJELGFBQWFILFdBQWhDLENBQTdCLEdBQTJFLHNCQUE5RjtBQUNBLFNBQUtDLE9BQUw7QUFFRDs7OzsrQkFFVTtBQUNULGFBQU87QUFDTEYsb0JBQVksS0FBS0EsVUFBTCxDQUFnQk0sSUFBaEIsRUFEUDtBQUVMTCxxQkFBYSxLQUFLQSxXQUFMLENBQWlCSyxJQUFqQixFQUZSO0FBR0xKLGlCQUFTLEtBQUtBO0FBSFQsT0FBUDtBQUtEOzs7OztrQkFHWSxVQUFDSyxRQUFELEVBQXlDO0FBQUEsTUFBOUJILFlBQThCLHVFQUFqQkwsWUFBaUI7O0FBQ3RELE1BQUdRLFFBQUgsRUFBYTtBQUNYLFdBQU8sSUFBSUosTUFBSixDQUFXQyxZQUFYLENBQVA7QUFDRCxHQUZELE1BR0s7O0FBRUgsUUFBRyxDQUFDSSxPQUFPQyxVQUFYLEVBQXNCO0FBQ3BCRCxhQUFPQyxVQUFQLEdBQW9CLElBQUlOLE1BQUosQ0FBV0MsWUFBWCxDQUFwQjtBQUVEO0FBQ0QsV0FBT0ksT0FBT0MsVUFBZDtBQUNEO0FBQ0YsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXJjL3dlYmRldi9ib29rIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0U3RvcmUgZnJvbSAnLi9jaGFydC5qcyc7XG5pbXBvcnQgTWV0cmljU3RvcmUgZnJvbSAnLi9tZXRyaWMuanMnO1xuaW1wb3J0IHVpU3RhdGUgZnJvbSAnLi91aXN0YXRlLmpzJztcblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBDaGFydFN0b3JlOiBudWxsLFxuICBNZXRyaWNTdG9yZTogbnVsbCxcbiAgVWlTdGF0ZTogdWlTdGF0ZVxufVxuXG5jbGFzcyBTdG9yZXMge1xuICBjb25zdHJ1Y3Rvcihpbml0aWFsU3RhdGUpIHtcbiAgICB0aGlzLkNoYXJ0U3RvcmUgPSAoaW5pdGlhbFN0YXRlLkNoYXJ0U3RvcmUpID8gQ2hhcnRTdG9yZS5mcm9tSlMoaW5pdGlhbFN0YXRlLkNoYXJ0U3RvcmUpOiBuZXcgQ2hhcnRTdG9yZSgpO1xuICAgIHRoaXMuTWV0cmljU3RvcmUgPSAoaW5pdGlhbFN0YXRlLk1ldHJpY1N0b3JlKSA/IE1ldHJpY1N0b3JlLmZyb21KUyhpbml0aWFsU3RhdGUuTWV0cmljU3RvcmUpOiBuZXcgTWV0cmljU3RvcmUoKTtcbiAgICB0aGlzLlVpU3RhdGUgPSB1aVN0YXRlO1xuICAgIFxuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIENoYXJ0U3RvcmU6IHRoaXMuQ2hhcnRTdG9yZS50b0pTKCksXG4gICAgICBNZXRyaWNTdG9yZTogdGhpcy5NZXRyaWNTdG9yZS50b0pTKCksXG4gICAgICBVaVN0YXRlOiB0aGlzLlVpU3RhdGUgXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoaXNTZXJ2ZXIsIGluaXRpYWxTdGF0ZT1kZWZhdWx0U3RhdGUpID0+IHtcbiAgaWYoaXNTZXJ2ZXIpIHtcbiAgICByZXR1cm4gbmV3IFN0b3Jlcyhpbml0aWFsU3RhdGUpO1xuICB9XG4gIGVsc2Uge1xuIFxuICAgIGlmKCF3aW5kb3cuX19zdG9yZXNfXyl7XG4gICAgICB3aW5kb3cuX19zdG9yZXNfXyA9IG5ldyBTdG9yZXMoaW5pdGlhbFN0YXRlKTtcblxuICAgIH1cbiAgICByZXR1cm4gd2luZG93Ll9fc3RvcmVzX187XG4gIH1cbn1cbiJdfQ==