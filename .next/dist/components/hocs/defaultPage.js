'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _head = require('next/head');

var _head2 = _interopRequireDefault(_head);

var _index = require('../../stores/index.js');

var _index2 = _interopRequireDefault(_index);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _auth = require('../../utils/auth');

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Page) {
  return function (_React$Component) {
    (0, _inherits3.default)(DefaultPage, _React$Component);
    (0, _createClass3.default)(DefaultPage, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
          var loggedUser, pageProps, isServer, stores;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  loggedUser = process.browser ? (0, _auth.getUserFromLocalStorage)() : (0, _auth.getUserFromCookie)(ctx.req);
                  pageProps = Page.getInitialProps && Page.getInitialProps(ctx);
                  isServer = ctx.req != undefined;
                  stores = (0, _index2.default)(isServer);

                  if (!isServer) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 7;
                  return stores.MetricStore.fetchMetricNames();

                case 7:
                  return _context.abrupt('return', (0, _extends3.default)({}, pageProps, {
                    loggedUser: loggedUser,
                    currentUrl: ctx.pathname,
                    isAuthenticated: !!loggedUser,
                    initialState: stores.getState(),
                    isServer: isServer
                  }));

                case 8:
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

    function DefaultPage(props) {
      (0, _classCallCheck3.default)(this, DefaultPage);

      var _this = (0, _possibleConstructorReturn3.default)(this, (DefaultPage.__proto__ || (0, _getPrototypeOf2.default)(DefaultPage)).call(this, props));

      _this.stores = (0, _index2.default)(props.isServer, props.initialState);
      _this.logout = _this.logout.bind(_this);
      return _this;
    }

    (0, _createClass3.default)(DefaultPage, [{
      key: 'logout',
      value: function logout(eve) {
        if (eve.key === 'logout') {
          console.log("LOGGING OUT!");
          alert("test");
          this.props.url.pushTo('/?logout=' + eve.newValue);
        }
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('storage', this.logout, false);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('storage', this.logout, false);
      }
    }, {
      key: 'render',
      value: function render() {
        var cssFiles = ['https://unpkg.com/normalize.css@5.0.0/normalize.css', 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', '/static/react-grid-layout.css', '/static/react-resizable.css', '/static/react-grid-layout-overrides.css', '/static/metricsgraphics.css', '/static/bootstrap-overrides.css', '/static/custom.css'];
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
              cssFiles.map(function (c, i) {
                return _react2.default.createElement('link', { key: i, href: c, rel: 'stylesheet' });
              }),
              _react2.default.createElement(
                'style',
                null,
                '* {\n              margin: 0;\n              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n            }'
              ),
              _react2.default.createElement(
                'title',
                null,
                'Digitalis OpsManager'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'app' },
              _react2.default.createElement(
                'div',
                { className: 'main' },
                _react2.default.createElement(_Header2.default, this.props),
                _react2.default.createElement(Page, this.props)
              )
            )
          )
        );
      }
    }]);
    return DefaultPage;
  }(_react2.default.Component);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9jcy9kZWZhdWx0UGFnZS5qcyJdLCJuYW1lcyI6WyJjdHgiLCJsb2dnZWRVc2VyIiwicHJvY2VzcyIsImJyb3dzZXIiLCJyZXEiLCJwYWdlUHJvcHMiLCJQYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiaXNTZXJ2ZXIiLCJ1bmRlZmluZWQiLCJzdG9yZXMiLCJNZXRyaWNTdG9yZSIsImZldGNoTWV0cmljTmFtZXMiLCJjdXJyZW50VXJsIiwicGF0aG5hbWUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJpbml0aWFsU3RhdGUiLCJnZXRTdGF0ZSIsInByb3BzIiwibG9nb3V0IiwiYmluZCIsImV2ZSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInVybCIsInB1c2hUbyIsIm5ld1ZhbHVlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjc3NGaWxlcyIsIm1hcCIsImMiLCJpIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUM7Ozs7a0JBSWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0ZBQ2lCQSxHQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTEMsNEJBRkssR0FFUUMsUUFBUUMsT0FBUixHQUFrQixvQ0FBbEIsR0FBOEMsNkJBQWtCSCxJQUFJSSxHQUF0QixDQUZ0RDtBQUdMQywyQkFISyxHQUdPQyxLQUFLQyxlQUFMLElBQXdCRCxLQUFLQyxlQUFMLENBQXFCUCxHQUFyQixDQUgvQjtBQUlMUSwwQkFKSyxHQUlNUixJQUFJSSxHQUFKLElBQVdLLFNBSmpCO0FBS0xDLHdCQUxLLEdBS0kscUJBQU9GLFFBQVAsQ0FMSjs7QUFBQSx1QkFNUkEsUUFOUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlCQU9IRSxPQUFPQyxXQUFQLENBQW1CQyxnQkFBbkIsRUFQRzs7QUFBQTtBQUFBLDhFQVlOUCxTQVpNO0FBYVRKLDBDQWJTO0FBY1RZLGdDQUFZYixJQUFJYyxRQWRQO0FBZVRDLHFDQUFpQixDQUFDLENBQUNkLFVBZlY7QUFnQlRlLGtDQUFjTixPQUFPTyxRQUFQLEVBaEJMO0FBaUJUVDtBQWpCUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQXVCYix5QkFBYVUsS0FBYixFQUFvQjtBQUFBOztBQUFBLGtKQUNaQSxLQURZOztBQUVsQixZQUFLUixNQUFMLEdBQWMscUJBQU9RLE1BQU1WLFFBQWIsRUFBdUJVLE1BQU1GLFlBQTdCLENBQWQ7QUFDQSxZQUFLRyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLE9BQWQ7QUFIa0I7QUFJbkI7O0FBM0JZO0FBQUE7QUFBQSw2QkE2QkxDLEdBN0JLLEVBNkJBO0FBQ1gsWUFBSUEsSUFBSUMsR0FBSixLQUFZLFFBQWhCLEVBQTBCO0FBQ3RCQyxrQkFBUUMsR0FBUixDQUFZLGNBQVo7QUFDQUMsZ0JBQU0sTUFBTjtBQUNGLGVBQUtQLEtBQUwsQ0FBV1EsR0FBWCxDQUFlQyxNQUFmLGVBQWtDTixJQUFJTyxRQUF0QztBQUNEO0FBQ0Y7QUFuQ1k7QUFBQTtBQUFBLDBDQXFDUTtBQUNuQkMsZUFBT0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsS0FBS1gsTUFBeEMsRUFBZ0QsS0FBaEQ7QUFDRDtBQXZDWTtBQUFBO0FBQUEsNkNBeUNXO0FBQ3RCVSxlQUFPRSxtQkFBUCxDQUEyQixTQUEzQixFQUFzQyxLQUFLWixNQUEzQyxFQUFtRCxLQUFuRDtBQUNEO0FBM0NZO0FBQUE7QUFBQSwrQkE2Q0g7QUFDUixZQUFNYSxXQUFXLENBQ2YscURBRGUsRUFFZix3RUFGZSxFQUdmLCtCQUhlLEVBSWYsNkJBSmUsRUFLZix5Q0FMZSxFQU1mLDZCQU5lLEVBT2YsaUNBUGUsRUFRZixvQkFSZSxDQUFqQjtBQVVBLGVBQVM7QUFBQTtBQUFlLGVBQUt0QixNQUFwQjtBQUNQO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHNEQUFNLE1BQUssVUFBWCxFQUFzQixTQUFRLHFDQUE5QixHQURGO0FBRUdzQix1QkFBU0MsR0FBVCxDQUFhLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLHVCQUFVLHdDQUFNLEtBQUtBLENBQVgsRUFBYyxNQUFNRCxDQUFwQixFQUF1QixLQUFJLFlBQTNCLEdBQVY7QUFBQSxlQUFiLENBRkg7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEYsYUFERjtBQWFFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxNQUFmO0FBQ0UsZ0VBQVksS0FBS2hCLEtBQWpCLENBREY7QUFFRSw4Q0FBQyxJQUFELEVBQVUsS0FBS0EsS0FBZjtBQUZGO0FBREY7QUFiRjtBQURPLFNBQVQ7QUF3QkQ7QUFoRlk7QUFBQTtBQUFBLElBQWtDLGdCQUFNa0IsU0FBeEM7QUFBQSxDIiwiZmlsZSI6ImRlZmF1bHRQYWdlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hcmMvd2ViZGV2L2Jvb2siLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgU3RvcmVzIGZyb20gJy4uLy4uL3N0b3Jlcy9pbmRleC5qcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcidcbmltcG9ydCB7IGdldFVzZXJGcm9tQ29va2llLCBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnXG5cbiBpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgUGFnZSA9PiBjbGFzcyBEZWZhdWx0UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKGN0eCkge1xuICAgIGNvbnN0IGxvZ2dlZFVzZXIgPSBwcm9jZXNzLmJyb3dzZXIgPyBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpIDogZ2V0VXNlckZyb21Db29raWUoY3R4LnJlcSlcbiAgICBjb25zdCBwYWdlUHJvcHMgPSBQYWdlLmdldEluaXRpYWxQcm9wcyAmJiBQYWdlLmdldEluaXRpYWxQcm9wcyhjdHgpXG4gICAgY29uc3QgaXNTZXJ2ZXIgPSBjdHgucmVxICE9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBzdG9yZXMgPSBTdG9yZXMoaXNTZXJ2ZXIpO1xuICAgIGlmKGlzU2VydmVyKXtcbiAgICAgIGF3YWl0IHN0b3Jlcy5NZXRyaWNTdG9yZS5mZXRjaE1ldHJpY05hbWVzKCk7XG4gICAgfVxuICAgXG5cbiAgICByZXR1cm4geyBcbiAgICAgIC4uLnBhZ2VQcm9wcyxcbiAgICAgIGxvZ2dlZFVzZXIsXG4gICAgICBjdXJyZW50VXJsOiBjdHgucGF0aG5hbWUsXG4gICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICEhbG9nZ2VkVXNlcixcbiAgICAgIGluaXRpYWxTdGF0ZTogc3RvcmVzLmdldFN0YXRlKCksIFxuICAgICAgaXNTZXJ2ZXJcbiAgICB9XG4gIH1cblxuXG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdG9yZXMgPSBTdG9yZXMocHJvcHMuaXNTZXJ2ZXIsIHByb3BzLmluaXRpYWxTdGF0ZSk7XG4gICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpXG4gIH1cblxuICBsb2dvdXQgKGV2ZSkge1xuICAgIGlmIChldmUua2V5ID09PSAnbG9nb3V0Jykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxPR0dJTkcgT1VUIVwiKVxuICAgICAgICBhbGVydChcInRlc3RcIilcbiAgICAgIHRoaXMucHJvcHMudXJsLnB1c2hUbyhgLz9sb2dvdXQ9JHtldmUubmV3VmFsdWV9YClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCB0aGlzLmxvZ291dCwgZmFsc2UpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCB0aGlzLmxvZ291dCwgZmFsc2UpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGNzc0ZpbGVzID0gW1xuICAgICAgJ2h0dHBzOi8vdW5wa2cuY29tL25vcm1hbGl6ZS5jc3NANS4wLjAvbm9ybWFsaXplLmNzcycsXG4gICAgICAnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvbGF0ZXN0L2Nzcy9ib290c3RyYXAubWluLmNzcycsXG4gICAgICAnL3N0YXRpYy9yZWFjdC1ncmlkLWxheW91dC5jc3MnLFxuICAgICAgJy9zdGF0aWMvcmVhY3QtcmVzaXphYmxlLmNzcycsXG4gICAgICAnL3N0YXRpYy9yZWFjdC1ncmlkLWxheW91dC1vdmVycmlkZXMuY3NzJyxcbiAgICAgICcvc3RhdGljL21ldHJpY3NncmFwaGljcy5jc3MnLFxuICAgICAgJy9zdGF0aWMvYm9vdHN0cmFwLW92ZXJyaWRlcy5jc3MnLFxuICAgICAgJy9zdGF0aWMvY3VzdG9tLmNzcydcbiAgICBdXG4gICAgcmV0dXJuICggPFByb3ZpZGVyIHsgLi4udGhpcy5zdG9yZXMgfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgICAgICB7Y3NzRmlsZXMubWFwKChjLCBpKSA9PiA8bGluayBrZXk9e2l9IGhyZWY9e2N9IHJlbD0nc3R5bGVzaGVldCcgLz4pfVxuICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIHtgKiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPHRpdGxlPkRpZ2l0YWxpcyBPcHNNYW5hZ2VyPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICA8SGVhZGVyIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgPFBhZ2Ugey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgICA8L1Byb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuIl19