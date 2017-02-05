'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddChart = function (_React$Component) {
  (0, _inherits3.default)(AddChart, _React$Component);

  function AddChart(props) {
    (0, _classCallCheck3.default)(this, AddChart);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddChart.__proto__ || (0, _getPrototypeOf2.default)(AddChart)).call(this, props));

    _this.handleFormSubmit = function (e) {
      e.preventDefault();
      if (_this.state.title === "") {
        _this.state.title = "untitled chart";
      }
      _this.props.ChartStore.addChart(_this.state.title);
      _this.setState({
        title: '',
        metric: ''
      });
    };

    _this.handleUserInput = function (e) {
      e.preventDefault();
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState((0, _defineProperty3.default)({}, name, value));
    };

    _this.state = {
      title: '',
      metric: ''
    };
    return _this;
  }

  (0, _createClass3.default)(AddChart, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleFormSubmit },
        _react2.default.createElement('input', { name: 'title', type: 'text', onChange: this.handleUserInput, value: this.state.title }),
        _react2.default.createElement(
          'button',
          { type: 'submit' },
          '+'
        )
      );
    }
  }]);
  return AddChart;
}(_react2.default.Component);

exports.default = (0, _mobxReact.observer)(['ChartStore'], AddChart);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQvYWRkLmpzIl0sIm5hbWVzIjpbIkFkZENoYXJ0IiwicHJvcHMiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJ0aXRsZSIsIkNoYXJ0U3RvcmUiLCJhZGRDaGFydCIsInNldFN0YXRlIiwibWV0cmljIiwiaGFuZGxlVXNlcklucHV0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0lBRU1BLFE7OztBQUVKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMElBQ1hBLEtBRFc7O0FBQUEsVUFRbkJDLGdCQVJtQixHQVFBLFVBQUNDLENBQUQsRUFBTztBQUN6QkEsUUFBRUMsY0FBRjtBQUNDLFVBQUcsTUFBS0MsS0FBTCxDQUFXQyxLQUFYLEtBQXFCLEVBQXhCLEVBQTRCO0FBQzFCLGNBQUtELEtBQUwsQ0FBV0MsS0FBWCxHQUFrQixnQkFBbEI7QUFDRDtBQUNELFlBQUtMLEtBQUwsQ0FBV00sVUFBWCxDQUFzQkMsUUFBdEIsQ0FBK0IsTUFBS0gsS0FBTCxDQUFXQyxLQUExQztBQUNBLFlBQUtHLFFBQUwsQ0FBYztBQUNWSCxlQUFPLEVBREc7QUFFVkksZ0JBQVE7QUFGRSxPQUFkO0FBSUQsS0FsQmtCOztBQUFBLFVBb0JuQkMsZUFwQm1CLEdBb0JELFVBQUNSLENBQUQsRUFBTztBQUN2QkEsUUFBRUMsY0FBRjtBQUR1QixzQkFFQ0QsRUFBRVMsTUFGSDtBQUFBLFVBRWZDLElBRmUsYUFFZkEsSUFGZTtBQUFBLFVBRVRDLEtBRlMsYUFFVEEsS0FGUzs7QUFHdkIsWUFBS0wsUUFBTCxtQ0FDR0ksSUFESCxFQUNVQyxLQURWO0FBR0QsS0ExQmtCOztBQUVqQixVQUFLVCxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhJLGNBQVE7QUFGRyxLQUFiO0FBRmlCO0FBTWxCOzs7OzZCQXNCUztBQUNSLGFBQU87QUFBQTtBQUFBLFVBQU0sVUFBVyxLQUFLUixnQkFBdEI7QUFDTCxpREFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxNQUF6QixFQUFnQyxVQUFXLEtBQUtTLGVBQWhELEVBQWtFLE9BQVEsS0FBS04sS0FBTCxDQUFXQyxLQUFyRixHQURLO0FBRUw7QUFBQTtBQUFBLFlBQVEsTUFBSyxRQUFiO0FBQUE7QUFBQTtBQUZLLE9BQVA7QUFJRDs7O0VBbkNvQixnQkFBTVMsUzs7a0JBc0NkLHlCQUFTLENBQUMsWUFBRCxDQUFULEVBQXlCZixRQUF6QixDIiwiZmlsZSI6ImFkZC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXJjL3dlYmRldi9ib29rIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5cbmNsYXNzIEFkZENoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgbWV0cmljOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKHRoaXMuc3RhdGUudGl0bGUgPT09IFwiXCIpIHtcbiAgICAgIHRoaXMuc3RhdGUudGl0bGUgPVwidW50aXRsZWQgY2hhcnRcIlxuICAgIH1cbiAgICB0aGlzLnByb3BzLkNoYXJ0U3RvcmUuYWRkQ2hhcnQodGhpcy5zdGF0ZS50aXRsZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgbWV0cmljOiAnJ1xuICAgICAgfSk7XG4gIH1cblxuICBoYW5kbGVVc2VySW5wdXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtuYW1lXTogdmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDxmb3JtIG9uU3VibWl0PXsgdGhpcy5oYW5kbGVGb3JtU3VibWl0IH0+XG4gICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17IHRoaXMuaGFuZGxlVXNlcklucHV0IH0gdmFsdWU9eyB0aGlzLnN0YXRlLnRpdGxlIH0gLz5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPis8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXIoWydDaGFydFN0b3JlJ10sIEFkZENoYXJ0KTsiXX0=