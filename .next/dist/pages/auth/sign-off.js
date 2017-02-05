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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _auth = require('../../utils/auth');

var _lock = require('../../utils/lock');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignOff = function (_React$Component) {
  (0, _inherits3.default)(SignOff, _React$Component);

  function SignOff() {
    (0, _classCallCheck3.default)(this, SignOff);
    return (0, _possibleConstructorReturn3.default)(this, (SignOff.__proto__ || (0, _getPrototypeOf2.default)(SignOff)).apply(this, arguments));
  }

  (0, _createClass3.default)(SignOff, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _auth.unsetToken)();
      (0, _lock.logout)();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return SignOff;
}(_react2.default.Component);

exports.default = SignOff;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2F1dGgvc2lnbi1vZmYuanM/ZW50cnkiXSwibmFtZXMiOlsiU2lnbk9mZiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7QUFDQTs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozt3Q0FDRTtBQUNuQjtBQUNBO0FBQ0Q7Ozs2QkFDUztBQUNSLGFBQU8sSUFBUDtBQUNEOzs7RUFQa0MsZ0JBQU1DLFM7O2tCQUF0QkQsTyIsImZpbGUiOiJzaWduLW9mZi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXJjL3dlYmRldi9ib29rIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1bnNldFRva2VuIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aCdcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uLy4uL3V0aWxzL2xvY2snXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25PZmYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdW5zZXRUb2tlbigpXG4gICAgbG9nb3V0KClcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn0iXX0=