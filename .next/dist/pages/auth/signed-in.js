'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _auth = require('../../utils/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignedIn = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(SignedIn, _React$Component);

  function SignedIn() {
    (0, _classCallCheck3.default)(this, SignedIn);
    return (0, _possibleConstructorReturn3.default)(this, (SignedIn.__proto__ || (0, _getPrototypeOf2.default)(SignedIn)).apply(this, arguments));
  }

  (0, _createClass3.default)(SignedIn, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _extractInfoFromHash = (0, _auth.extractInfoFromHash)(),
          token = _extractInfoFromHash.token,
          secret = _extractInfoFromHash.secret;

      if (!(0, _auth.checkSecret)(secret) || !token) {
        console.error('Something happened with the Sign In request');
      }
      (0, _auth.setToken)(token);
      this.props.url.pushTo('/');
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return SignedIn;
}(_react2.default.Component), _class.propTypes = {
  url: _react.PropTypes.object.isRequired
}, _temp);
exports.default = SignedIn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2F1dGgvc2lnbmVkLWluLmpzP2VudHJ5Il0sIm5hbWVzIjpbIlNpZ25lZEluIiwidG9rZW4iLCJzZWNyZXQiLCJjb25zb2xlIiwiZXJyb3IiLCJwcm9wcyIsInVybCIsInB1c2hUbyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozt3Q0FLRTtBQUFBLGlDQUNLLGdDQURMO0FBQUEsVUFDWkMsS0FEWSx3QkFDWkEsS0FEWTtBQUFBLFVBQ0xDLE1BREssd0JBQ0xBLE1BREs7O0FBRW5CLFVBQUksQ0FBQyx1QkFBWUEsTUFBWixDQUFELElBQXdCLENBQUNELEtBQTdCLEVBQW9DO0FBQ2xDRSxnQkFBUUMsS0FBUixDQUFjLDZDQUFkO0FBQ0Q7QUFDRCwwQkFBU0gsS0FBVDtBQUNBLFdBQUtJLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxNQUFmLENBQXNCLEdBQXRCO0FBQ0Q7Ozs2QkFDUztBQUNSLGFBQU8sSUFBUDtBQUNEOzs7RUFmbUMsZ0JBQU1DLFMsVUFDbkNDLFMsR0FBWTtBQUNqQkgsT0FBSyxpQkFBVUksTUFBVixDQUFpQkM7QUFETCxDO2tCQURBWCxRIiwiZmlsZSI6InNpZ25lZC1pbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXJjL3dlYmRldi9ib29rIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBzZXRUb2tlbiwgY2hlY2tTZWNyZXQsIGV4dHJhY3RJbmZvRnJvbUhhc2ggfSBmcm9tICcuLi8uLi91dGlscy9hdXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduZWRJbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdXJsOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCB7dG9rZW4sIHNlY3JldH0gPSBleHRyYWN0SW5mb0Zyb21IYXNoKClcbiAgICBpZiAoIWNoZWNrU2VjcmV0KHNlY3JldCkgfHwgIXRva2VuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdTb21ldGhpbmcgaGFwcGVuZWQgd2l0aCB0aGUgU2lnbiBJbiByZXF1ZXN0JylcbiAgICB9XG4gICAgc2V0VG9rZW4odG9rZW4pXG4gICAgdGhpcy5wcm9wcy51cmwucHVzaFRvKCcvJylcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn0iXX0=