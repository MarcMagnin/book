'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _defaultPage = require('../../components/hocs/defaultPage');

var _defaultPage2 = _interopRequireDefault(_defaultPage);

var _lock = require('../../utils/lock');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONTAINER_ID = 'put-lock-here';

var SignIn = function (_React$Component) {
  (0, _inherits3.default)(SignIn, _React$Component);

  function SignIn() {
    (0, _classCallCheck3.default)(this, SignIn);
    return (0, _possibleConstructorReturn3.default)(this, (SignIn.__proto__ || (0, _getPrototypeOf2.default)(SignIn)).apply(this, arguments));
  }

  (0, _createClass3.default)(SignIn, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _lock.show)(CONTAINER_ID);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: CONTAINER_ID });
    }
  }]);
  return SignIn;
}(_react2.default.Component);

exports.default = (0, _defaultPage2.default)(SignIn);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2F1dGgvc2lnbi1pbi5qcz9lbnRyeSJdLCJuYW1lcyI6WyJDT05UQUlORVJfSUQiLCJTaWduSW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsZUFBZSxlQUFyQjs7SUFFTUMsTTs7Ozs7Ozs7Ozt3Q0FDaUI7QUFDbkIsc0JBQUtELFlBQUw7QUFDRDs7OzZCQUNTO0FBQ1IsYUFBTyx1Q0FBSyxJQUFJQSxZQUFULEdBQVA7QUFDRDs7O0VBTmtCLGdCQUFNRSxTOztrQkFTWiwyQkFBWUQsTUFBWixDIiwiZmlsZSI6InNpZ24taW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFyYy93ZWJkZXYvYm9vayIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IGRlZmF1bHRQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9jcy9kZWZhdWx0UGFnZSdcbmltcG9ydCB7IHNob3cgfSBmcm9tICcuLi8uLi91dGlscy9sb2NrJ1xuXG5jb25zdCBDT05UQUlORVJfSUQgPSAncHV0LWxvY2staGVyZSdcblxuY2xhc3MgU2lnbkluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHNob3coQ09OVEFJTkVSX0lEKVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDxkaXYgaWQ9e0NPTlRBSU5FUl9JRH0gLz5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0UGFnZShTaWduSW4pIl19