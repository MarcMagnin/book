'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _link = require('next/link');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/head');

var _head2 = _interopRequireDefault(_head);

var _index = require('../stores/index.js');

var _index2 = _interopRequireDefault(_index);

var _add = require('../components/chart/add.js');

var _add2 = _interopRequireDefault(_add);

var _list = require('../components/chart/list.js');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function (_React$Component) {
  (0, _inherits3.default)(_default, _React$Component);
  (0, _createClass3.default)(_default, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var req = _ref2.req;
        var isServer, stores;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isServer = !!req;
                stores = (0, _index2.default)(isServer);
                _context.next = 4;
                return stores.MetricStore.fetchMetricNames();

              case 4:
                return _context.abrupt('return', { initialState: stores.getState(), isServer: isServer });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function _default(props) {
    (0, _classCallCheck3.default)(this, _default);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_default.__proto__ || (0, _getPrototypeOf2.default)(_default)).call(this, props));

    _this.stores = (0, _index2.default)(props.isServer, props.initialState);
    return _this;
  }

  (0, _createClass3.default)(_default, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _mobxReact.Provider,
        this.stores,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _head2.default,
            null,
            _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
            _react2.default.createElement('meta', { charSet: 'utf-8' }),
            _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/metricsgraphics.css' }),
            _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/react-select.css' }),
            _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/react-select-virtualized.css' }),
            _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/react-virtualized.css' })
          ),
          _react2.default.createElement(
            'h1',
            null,
            'Add Chart'
          ),
          _react2.default.createElement(_add2.default, null),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(_list2.default, null)
        )
      );
    }
  }]);
  return _default;
}(_react2.default.Component);
//  <Link href="/">I'm done !</Link>


exports.default = _default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkZC5qcz9lbnRyeSJdLCJuYW1lcyI6WyJyZXEiLCJpc1NlcnZlciIsInN0b3JlcyIsIk1ldHJpY1N0b3JlIiwiZmV0Y2hNZXRyaWNOYW1lcyIsImluaXRpYWxTdGF0ZSIsImdldFN0YXRlIiwicHJvcHMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7WUFHa0NBLEcsU0FBQUEsRzs7Ozs7O0FBQ3hCQyx3QixHQUFXLENBQUMsQ0FBQ0QsRztBQUNiRSxzQixHQUFTLHFCQUFPRCxRQUFQLEM7O3VCQUNUQyxPQUFPQyxXQUFQLENBQW1CQyxnQkFBbkIsRTs7O2lEQUVDLEVBQUNDLGNBQWNILE9BQU9JLFFBQVAsRUFBZixFQUFrQ0wsa0JBQWxDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdULG9CQUFZTSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMElBQ1hBLEtBRFc7O0FBRWpCLFVBQUtMLE1BQUwsR0FBYyxxQkFBT0ssTUFBTU4sUUFBYixFQUF1Qk0sTUFBTUYsWUFBN0IsQ0FBZDtBQUZpQjtBQUdsQjs7Ozs2QkFFUztBQUNSLGFBQU87QUFBQTtBQUFlLGFBQUtILE1BQXBCO0FBQ0o7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0Msb0RBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEscUNBQTlCLEdBREQ7QUFFRyxvREFBTSxTQUFRLE9BQWQsR0FGSDtBQUdFLG9EQUFNLEtBQUksWUFBVixFQUF1QixNQUFLLDZCQUE1QixHQUhGO0FBSUcsb0RBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssMEJBQTVCLEdBSkg7QUFLRyxvREFBTSxLQUFJLFlBQVYsRUFBdUIsTUFBSyxzQ0FBNUIsR0FMSDtBQU1HLG9EQUFNLEtBQUksWUFBVixFQUF1QixNQUFLLCtCQUE1QjtBQU5ILFdBREE7QUFVQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBVkQ7QUFXQyw0REFYRDtBQVlDLG1EQVpEO0FBYUM7QUFiRDtBQURJLE9BQVA7QUFpQkQ7OztFQWhDMEIsZ0JBQU1NLFM7QUFrQ25DIiwiZmlsZSI6ImFkZC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXJjL3dlYmRldi9ib29rIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCBTdG9yZXMgZnJvbSAnLi4vc3RvcmVzL2luZGV4LmpzJztcbmltcG9ydCBBZGRDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL2NoYXJ0L2FkZC5qcyc7XG5pbXBvcnQgQ2hhcnRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvY2hhcnQvbGlzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyByZXEgfSkge1xuICAgIGNvbnN0IGlzU2VydmVyID0gISFyZXE7XG4gICAgY29uc3Qgc3RvcmVzID0gU3RvcmVzKGlzU2VydmVyKTtcbiAgICBhd2FpdCBzdG9yZXMuTWV0cmljU3RvcmUuZmV0Y2hNZXRyaWNOYW1lcygpO1xuICAgIC8vYXdhaXQgTWV0cmljU3RvcmUuZmV0Y2goXCJhZ2VudF9pZFwiKTtcbiAgICByZXR1cm4ge2luaXRpYWxTdGF0ZTogc3RvcmVzLmdldFN0YXRlKCksIGlzU2VydmVyfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RvcmVzID0gU3RvcmVzKHByb3BzLmlzU2VydmVyLCBwcm9wcy5pbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gPFByb3ZpZGVyIHsgLi4udGhpcy5zdG9yZXMgfT5cbiAgICAgICA8ZGl2PlxuICAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvbWV0cmljc2dyYXBoaWNzLmNzc1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL3JlYWN0LXNlbGVjdC5jc3NcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9yZWFjdC1zZWxlY3QtdmlydHVhbGl6ZWQuY3NzXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvcmVhY3QtdmlydHVhbGl6ZWQuY3NzXCIgLz5cbiAgICAgIFx0XG5cdCAgPC9IZWFkPlxuICAgICAgICA8aDE+QWRkIENoYXJ0PC9oMT5cbiAgICAgICAgPEFkZENoYXJ0IC8+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8Q2hhcnRMaXN0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Byb3ZpZGVyPlxuICB9XG59XG4vLyAgPExpbmsgaHJlZj1cIi9cIj5JJ20gZG9uZSAhPC9MaW5rPiJdfQ==