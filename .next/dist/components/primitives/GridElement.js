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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridElement = (_temp2 = _class = function (_React$Component) {
  (0, _inherits3.default)(GridElement, _React$Component);

  function GridElement() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GridElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GridElement.__proto__ || (0, _getPrototypeOf2.default)(GridElement)).call.apply(_ref, [this].concat(args))), _this), _this.onDragStart = function (e) {
      // e.preventDefault();
      // e.stopPropagation();
      // this.dragFlag = true;
      _this.props.onDragStart(e);
    }, _this.onDragEnd = function (e) {
      e.preventDefault();
      e.stopPropagation();
      // fix for firefox
      setTimeout(function (obj) {
        obj.dragFlag = false;
      }, 200, _this);
      _this.props.onMouseUp(e);
    }, _this.onClick = function (e) {
      // fix for firefox
      //if(!this.dragFlag){
      _this.props.onClick(e);
      //}
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // enable click on the whole item. Needs to secure the resize action then


  (0, _createClass3.default)(GridElement, [{
    key: 'render',
    value: function render() {
      // React grid defines some important style, so it needs to be passed
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          className = _props.className;


      var child = children[0];
      var dragHandle = children[1]; // always a second element. First element is an array of real children;

      return _react2.default.createElement(
        'div',
        {
          draggable: true,
          className: className,
          onDragStart: this.onDragStart // this fixes rgl's onClick and onMouseDown
          , onMouseUp: this.onDragEnd // use onMouseUp because onDragStart prevents default
          , onClick: this.onClick,
          style: style
        },
        child,
        dragHandle
      );
    }
  }]);
  return GridElement;
}(_react2.default.Component), _class.propTypes = {
  // React-grid-layout injected props
  className: _react.PropTypes.string,
  onMouseDown: _react.PropTypes.func,
  onMouseUp: _react.PropTypes.func,
  onTouchStart: _react.PropTypes.func,
  onTouchEnd: _react.PropTypes.func,
  'data-grid': _react.PropTypes.object
}, _class.defaultProps = {
  // When element is static, rgl doesn't pass these props
  onMouseDown: function onMouseDown() {},
  onMouseUp: function onMouseUp() {},
  onTouchStart: function onTouchStart() {},
  onTouchEnd: function onTouchEnd() {}
}, _temp2);
exports.default = GridElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJpbWl0aXZlcy9HcmlkRWxlbWVudC5qcyJdLCJuYW1lcyI6WyJHcmlkRWxlbWVudCIsIm9uRHJhZ1N0YXJ0IiwiZSIsInByb3BzIiwib25EcmFnRW5kIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXRUaW1lb3V0Iiwib2JqIiwiZHJhZ0ZsYWciLCJvbk1vdXNlVXAiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJzdHlsZSIsImNsYXNzTmFtZSIsImNoaWxkIiwiZHJhZ0hhbmRsZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uTW91c2VEb3duIiwiZnVuYyIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxzTkFxQkxDLFdBckJLLEdBcUJTLFVBQUNDLENBQUQsRUFBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxZQUFLQyxLQUFMLENBQVdGLFdBQVgsQ0FBdUJDLENBQXZCO0FBQ0QsS0ExQkcsUUE0QkpFLFNBNUJJLEdBNEJRLFVBQUNGLENBQUQsRUFBTztBQUNqQkEsUUFBRUcsY0FBRjtBQUNBSCxRQUFFSSxlQUFGO0FBQ0E7QUFDQUMsaUJBQVcsVUFBQ0MsR0FBRCxFQUFPO0FBQUNBLFlBQUlDLFFBQUosR0FBZSxLQUFmO0FBQXFCLE9BQXhDLEVBQXlDLEdBQXpDO0FBQ0EsWUFBS04sS0FBTCxDQUFXTyxTQUFYLENBQXFCUixDQUFyQjtBQUNELEtBbENHLFFBcUNKUyxPQXJDSSxHQXFDTSxVQUFDVCxDQUFELEVBQU87QUFDYjtBQUNBO0FBQ0UsWUFBS0MsS0FBTCxDQUFXUSxPQUFYLENBQW1CVCxDQUFuQjtBQUNGO0FBQ0gsS0ExQ0c7QUFBQTs7QUFvQ0o7OztBQXBDSTtBQUFBO0FBQUEsNkJBNENLO0FBQ1A7QUFETyxtQkFFZ0MsS0FBS0MsS0FGckM7QUFBQSxVQUVDUyxRQUZELFVBRUNBLFFBRkQ7QUFBQSxVQUVXQyxLQUZYLFVBRVdBLEtBRlg7QUFBQSxVQUVrQkMsU0FGbEIsVUFFa0JBLFNBRmxCOzs7QUFJUCxVQUFNQyxRQUFRSCxTQUFTLENBQVQsQ0FBZDtBQUNBLFVBQU1JLGFBQWFKLFNBQVMsQ0FBVCxDQUFuQixDQUxPLENBS3lCOztBQUVoQyxhQUNFO0FBQUE7QUFBQTtBQUNFLHlCQURGO0FBRUUscUJBQVdFLFNBRmI7QUFHRSx1QkFBYSxLQUFLYixXQUhwQixDQUdrQztBQUhsQyxZQUlFLFdBQVcsS0FBS0csU0FKbEIsQ0FJOEI7QUFKOUIsWUFLRSxTQUFTLEtBQUtPLE9BTGhCO0FBTUUsaUJBQU9FO0FBTlQ7QUFRR0UsYUFSSDtBQVNHQztBQVRILE9BREY7QUFhRDtBQWhFRztBQUFBO0FBQUEsRUFBeUMsZ0JBQU1DLFNBQS9DLFVBRUtDLFNBRkwsR0FFaUI7QUFDZjtBQUNBSixhQUFXLGlCQUFVSyxNQUZOO0FBR2ZDLGVBQWEsaUJBQVVDLElBSFI7QUFJZlgsYUFBVyxpQkFBVVcsSUFKTjtBQUtmQyxnQkFBYyxpQkFBVUQsSUFMVDtBQU1mRSxjQUFZLGlCQUFVRixJQU5QO0FBT2YsZUFBYSxpQkFBVUc7QUFQUixDQUZqQixTQVlLQyxZQVpMLEdBWW9CO0FBQ2xCO0FBQ0FMLGVBQWEsdUJBQU0sQ0FBRSxDQUZIO0FBR2xCVixhQUFXLHFCQUFNLENBQUUsQ0FIRDtBQUlsQlksZ0JBQWMsd0JBQU0sQ0FBRSxDQUpKO0FBS2xCQyxjQUFZLHNCQUFNLENBQUU7QUFMRixDQVpwQixTQUFOO2tCQWtFZXZCLFciLCJmaWxlIjoiR3JpZEVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFyYy93ZWJkZXYvYm9vayIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSAgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBHcmlkRWxlbWVudCA9ICBjbGFzcyBHcmlkRWxlbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICAvLyBSZWFjdC1ncmlkLWxheW91dCBpbmplY3RlZCBwcm9wc1xuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG9uTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25Nb3VzZVVwOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25Ub3VjaFN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25Ub3VjaEVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgICdkYXRhLWdyaWQnOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICAvLyBXaGVuIGVsZW1lbnQgaXMgc3RhdGljLCByZ2wgZG9lc24ndCBwYXNzIHRoZXNlIHByb3BzXG4gICAgICAgIG9uTW91c2VEb3duOiAoKSA9PiB7fSxcbiAgICAgICAgb25Nb3VzZVVwOiAoKSA9PiB7fSxcbiAgICAgICAgb25Ub3VjaFN0YXJ0OiAoKSA9PiB7fSxcbiAgICAgICAgb25Ub3VjaEVuZDogKCkgPT4ge30sXG4gICAgfTtcblxuXG4gb25EcmFnU3RhcnQgPSAoZSkgPT4ge1xuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIHRoaXMuZHJhZ0ZsYWcgPSB0cnVlO1xuICAgIHRoaXMucHJvcHMub25EcmFnU3RhcnQoZSk7XG4gIH1cblxuICBvbkRyYWdFbmQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIGZpeCBmb3IgZmlyZWZveFxuICAgIHNldFRpbWVvdXQoKG9iaik9PntvYmouZHJhZ0ZsYWcgPSBmYWxzZX0sMjAwLCB0aGlzKTtcbiAgICB0aGlzLnByb3BzLm9uTW91c2VVcChlKTtcbiAgfVxuXG4gIC8vIGVuYWJsZSBjbGljayBvbiB0aGUgd2hvbGUgaXRlbS4gTmVlZHMgdG8gc2VjdXJlIHRoZSByZXNpemUgYWN0aW9uIHRoZW5cbiAgb25DbGljayA9IChlKSA9PiB7XG4gICAgICAvLyBmaXggZm9yIGZpcmVmb3hcbiAgICAgIC8vaWYoIXRoaXMuZHJhZ0ZsYWcpe1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7ICAgICAgXG4gICAgICAvL31cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBSZWFjdCBncmlkIGRlZmluZXMgc29tZSBpbXBvcnRhbnQgc3R5bGUsIHNvIGl0IG5lZWRzIHRvIGJlIHBhc3NlZFxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHN0eWxlLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuWzBdO1xuICAgIGNvbnN0IGRyYWdIYW5kbGUgPSBjaGlsZHJlblsxXTsgLy8gYWx3YXlzIGEgc2Vjb25kIGVsZW1lbnQuIEZpcnN0IGVsZW1lbnQgaXMgYW4gYXJyYXkgb2YgcmVhbCBjaGlsZHJlbjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGRyYWdnYWJsZVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgb25EcmFnU3RhcnQ9e3RoaXMub25EcmFnU3RhcnR9ICAvLyB0aGlzIGZpeGVzIHJnbCdzIG9uQ2xpY2sgYW5kIG9uTW91c2VEb3duXG4gICAgICAgIG9uTW91c2VVcD17dGhpcy5vbkRyYWdFbmR9ICAvLyB1c2Ugb25Nb3VzZVVwIGJlY2F1c2Ugb25EcmFnU3RhcnQgcHJldmVudHMgZGVmYXVsdFxuICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkfVxuICAgICAgICB7ZHJhZ0hhbmRsZX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEdyaWRFbGVtZW50Il19