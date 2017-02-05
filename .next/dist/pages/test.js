'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _css = require('next/css');

var _css2 = _interopRequireDefault(_css);

var _mobx = require('mobx');

var _Masonry = require('../components/Masonry');

var _Masonry2 = _interopRequireDefault(_Masonry);

var _defaultPage = require('../components/hocs/defaultPage');

var _defaultPage2 = _interopRequireDefault(_defaultPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  heading: (0, _css2.default)({
    fontSize: 40,
    fontWeight: 200,
    lineHeight: '40px'
  }),
  content: (0, _css2.default)({
    fontSize: 20,
    fontWeight: 200,
    lineHeight: '30px'
  })
};

var Chart = function Chart() {
  (0, _classCallCheck3.default)(this, Chart);

  (0, _mobx.extendObservable)(this, {
    i: 0,
    x: 0,
    y: 0,
    w: 4,
    h: 4
  });
};

var loadLayout = function loadLayout(key) {
  var ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-7')) || {};
    } catch (e) {/*Ignore*/}
  }
  return ls[key];
};
//{"layout":[{"w":2,"h":2,"x":0,"y":0,"i":"0","moved":false,"static":false},{"w":2,"h":2,"x":2,"y":0,"i":"1","moved":false,"static":false},{"w":2,"h":2,"x":4,"y":0,"i":"2","moved":false,"static":false},{"w":2,"h":2,"x":4,"y":2,"i":"3","moved":false,"static":false},{"w":2,"h":2,"x":4,"y":4,"i":"4","moved":false,"static":false}]}
var Dashboard = (_temp = _class =
// decorators are currently not yet support in Next.JS:
// https://github.com/zeit/next.js/issues/26
function Dashboard() {
  (0, _classCallCheck3.default)(this, Dashboard);

  _initialiseProps.call(this);

  var layout = loadLayout('layout');
  (0, _mobx.extendObservable)(this, {
    layout: layout || [],
    newCounter: 0,
    items: [0, 1, 2].map(function (i, key, list) {
      if (layout) {
        console.log("key:" + layout[i].i + " x:" + layout[i].x);
        return { i: layout[i].i, x: layout[i].x, y: layout[i].y, w: layout[i].w, h: layout[i].h };
      } else {
        return { i: i.toString(), x: i * 2, y: 0, w: 6, h: 4, add: i === (list.length - 1).toString() };
      }
    })
  });
}, _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.addChart = function () {
    /*eslint no-console: 0*/
    console.log('adding', 'n' + _this.newCounter);
    _this.items = _this.items.concat({
      i: 'n' + _this.newCounter,
      x: _this.items.length * 2 % (_this.cols || 12),
      y: Infinity, // puts it at the bottom
      w: 4,
      h: 4 });

    _this.newCounter = _this.newCounter + 1;
    console.log('this.items', _this.items.length);
  };

  this.removeChart = function () {};

  this.saveLayout = function (layout) {
    console.log("saveLayouts");
    if (global.localStorage) {
      global.localStorage.setItem('rgl-7', (0, _stringify2.default)((0, _defineProperty3.default)({}, 'layout', layout)));
    }
  };
}, _temp);


var dashboard = new Dashboard();
(0, _mobx.autorun)(function () {
  return console.log(dashboard.mounted + "Mounted:");
});

var DashboardView = function DashboardView() {

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      { className: styles.heading },
      'Digitalis.io OpsManager'
    ),
    _react2.default.createElement(
      'p',
      { className: styles.content },
      'What a cool test page!'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'button',
      { onClick: dashboard.addChart },
      'Add Item'
    ),
    _react2.default.createElement(_Masonry2.default, { store: dashboard, onLayoutChange: dashboard.saveLayout })
  );
};

exports.default = (0, _defaultPage2.default)(DashboardView);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3QuanM/ZW50cnkiXSwibmFtZXMiOlsic3R5bGVzIiwiaGVhZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJjb250ZW50IiwiQ2hhcnQiLCJpIiwieCIsInkiLCJ3IiwiaCIsImxvYWRMYXlvdXQiLCJrZXkiLCJscyIsImdsb2JhbCIsImxvY2FsU3RvcmFnZSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJlIiwiRGFzaGJvYXJkIiwibGF5b3V0IiwibmV3Q291bnRlciIsIml0ZW1zIiwibWFwIiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJ0b1N0cmluZyIsImFkZCIsImxlbmd0aCIsImFkZENoYXJ0IiwiY29uY2F0IiwiY29scyIsIkluZmluaXR5IiwicmVtb3ZlQ2hhcnQiLCJzYXZlTGF5b3V0Iiwic2V0SXRlbSIsImRhc2hib2FyZCIsIm1vdW50ZWQiLCJEYXNoYm9hcmRWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTO0FBQ2JDLFdBQVMsbUJBQUk7QUFDWEMsY0FBVSxFQURDO0FBRVhDLGdCQUFZLEdBRkQ7QUFHWEMsZ0JBQVk7QUFIRCxHQUFKLENBREk7QUFNYkMsV0FBUyxtQkFBSTtBQUNYSCxjQUFVLEVBREM7QUFFWEMsZ0JBQVksR0FGRDtBQUdYQyxnQkFBWTtBQUhELEdBQUo7QUFOSSxDQUFmOztJQWFNRSxLLEdBQ0osaUJBQWM7QUFBQTs7QUFDUiw4QkFBaUIsSUFBakIsRUFBdUI7QUFDbkJDLE9BQUUsQ0FEaUI7QUFFbkJDLE9BQUUsQ0FGaUI7QUFHbkJDLE9BQUUsQ0FIaUI7QUFJbkJDLE9BQUUsQ0FKaUI7QUFLbkJDLE9BQUU7QUFMaUIsR0FBdkI7QUFPSCxDOztBQUlMLElBQU1DLGFBQVcsU0FBWEEsVUFBVyxDQUFDQyxHQUFELEVBQU87QUFDbkIsTUFBSUMsS0FBSyxF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RUU7QUFBQTtBQUFBLFFBQUksV0FBV3pDLE9BQU9DLE9BQXRCO0FBQUE7QUFBQSxLQUZGO0FBR0U7QUFBQTtBQUFBLFFBQUcsV0FBV0QsT0FBT0ssT0FBckI7QUFBQTtBQUFBLEtBSEY7QUFNRSw2Q0FORjtBQU9FO0FBQUE7QUFBQSxRQUFRLFNBQVNrQyxVQUFVUCxRQUEzQjtBQUFBO0FBQUEsS0FQRjtBQVFFLHVEQUFTLE9BQU9PLFNBQWhCLEVBQTJCLGdCQUFnQkEsVUFBVUYsVUFBckQ7QUFSRixHQUREO0FBV0MsQ0FkRjs7a0JBZ0JlLDJCQUFZSSxhQUFaLEMiLCJmaWxlIjoidGVzdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXJjL3dlYmRldi9ib29rIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCB7IGF1dG9ydW4sIGV4dGVuZE9ic2VydmFibGUsIGFjdGlvbiwgY29tcHV0ZWQgIH0gZnJvbSAnbW9ieCc7XG5pbXBvcnQgTWFzb25yeSBmcm9tICcuLi9jb21wb25lbnRzL01hc29ucnknXG5pbXBvcnQgZGVmYXVsdFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9ob2NzL2RlZmF1bHRQYWdlJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhlYWRpbmc6IGNzcyh7XG4gICAgZm9udFNpemU6IDQwLFxuICAgIGZvbnRXZWlnaHQ6IDIwMCxcbiAgICBsaW5lSGVpZ2h0OiAnNDBweCdcbiAgfSksXG4gIGNvbnRlbnQ6IGNzcyh7XG4gICAgZm9udFNpemU6IDIwLFxuICAgIGZvbnRXZWlnaHQ6IDIwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMzBweCdcbiAgfSlcbn1cblxuY2xhc3MgQ2hhcnR7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBleHRlbmRPYnNlcnZhYmxlKHRoaXMsIHtcbiAgICAgICAgICAgIGk6MCwgXG4gICAgICAgICAgICB4OjAsXG4gICAgICAgICAgICB5OjAsXG4gICAgICAgICAgICB3OjQsXG4gICAgICAgICAgICBoOjQgXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cbmNvbnN0IGxvYWRMYXlvdXQ9KGtleSk9PntcbiAgICAgbGV0IGxzID0ge307XG4gICAgICBpZiAoZ2xvYmFsLmxvY2FsU3RvcmFnZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxzID0gSlNPTi5wYXJzZShnbG9iYWwubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JnbC03JykpIHx8IHt9O1xuICAgICAgICB9IGNhdGNoKGUpIHsvKklnbm9yZSovfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGxzW2tleV07XG4gICB9XG4vL3tcImxheW91dFwiOlt7XCJ3XCI6MixcImhcIjoyLFwieFwiOjAsXCJ5XCI6MCxcImlcIjpcIjBcIixcIm1vdmVkXCI6ZmFsc2UsXCJzdGF0aWNcIjpmYWxzZX0se1wid1wiOjIsXCJoXCI6MixcInhcIjoyLFwieVwiOjAsXCJpXCI6XCIxXCIsXCJtb3ZlZFwiOmZhbHNlLFwic3RhdGljXCI6ZmFsc2V9LHtcIndcIjoyLFwiaFwiOjIsXCJ4XCI6NCxcInlcIjowLFwiaVwiOlwiMlwiLFwibW92ZWRcIjpmYWxzZSxcInN0YXRpY1wiOmZhbHNlfSx7XCJ3XCI6MixcImhcIjoyLFwieFwiOjQsXCJ5XCI6MixcImlcIjpcIjNcIixcIm1vdmVkXCI6ZmFsc2UsXCJzdGF0aWNcIjpmYWxzZX0se1wid1wiOjIsXCJoXCI6MixcInhcIjo0LFwieVwiOjQsXCJpXCI6XCI0XCIsXCJtb3ZlZFwiOmZhbHNlLFwic3RhdGljXCI6ZmFsc2V9XX1cbmNsYXNzIERhc2hib2FyZCB7XG4gICAvLyBkZWNvcmF0b3JzIGFyZSBjdXJyZW50bHkgbm90IHlldCBzdXBwb3J0IGluIE5leHQuSlM6XG4gICAvLyBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL2lzc3Vlcy8yNlxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbGV0IGxheW91dCA9IGxvYWRMYXlvdXQoJ2xheW91dCcpXG4gICAgICAgIGV4dGVuZE9ic2VydmFibGUodGhpcywge1xuICAgICAgICAgICAgbGF5b3V0IDogbGF5b3V0fHwgW10sXG4gICAgICAgICAgICBuZXdDb3VudGVyOjAsXG4gICAgICAgICAgICBpdGVtcyA6IFswLCAxLCAyXS5tYXAoZnVuY3Rpb24oaSwga2V5LCBsaXN0KSB7XG4gICAgICAgICAgICAgIGlmKGxheW91dCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXk6XCIrIGxheW91dFtpXS5pICtcIiB4OlwiK2xheW91dFtpXS54KVxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtpOiBsYXlvdXRbaV0uaSwgeDogbGF5b3V0W2ldLngsIHk6IGxheW91dFtpXS55LCB3OiBsYXlvdXRbaV0udywgaDogbGF5b3V0W2ldLmh9O1xuICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4ge2k6IGkudG9TdHJpbmcoKSwgeDogaSAqIDIsIHk6IDAsIHc6IDYsIGg6IDQsIGFkZDogaSA9PT0gKGxpc3QubGVuZ3RoIC0gMSkudG9TdHJpbmcoKX07XG4gICAgICAgICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgIH1cbiAgIFxuXG4gICAgYWRkQ2hhcnQgPSAoKT0+e1xuICAgICAgICAgICAvKmVzbGludCBuby1jb25zb2xlOiAwKi9cbiAgICAgIGNvbnNvbGUubG9nKCdhZGRpbmcnLCAnbicgKyB0aGlzLm5ld0NvdW50ZXIpO1xuICAgICAgdGhpcy5pdGVtcz0gdGhpcy5pdGVtcy5jb25jYXQoe1xuICAgICAgICAgIGk6ICduJyArIHRoaXMubmV3Q291bnRlcixcbiAgICAgICAgICB4OiB0aGlzLml0ZW1zLmxlbmd0aCAqIDIgJSAodGhpcy5jb2xzIHx8IDEyKSxcbiAgICAgICAgICB5OiBJbmZpbml0eSwgLy8gcHV0cyBpdCBhdCB0aGUgYm90dG9tXG4gICAgICAgICAgdzogNCxcbiAgICAgICAgICBoOiA0fSlcbiAgICAgICAgIFxuICAgICAgdGhpcy5uZXdDb3VudGVyPSB0aGlzLm5ld0NvdW50ZXIgKyAxXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLml0ZW1zJywgdGhpcy5pdGVtcy5sZW5ndGgpO1xuICAgICAgfVxuICAgIFxuXG4gICAgcmVtb3ZlQ2hhcnQgPSAoKT0+e1xuXG4gICAgfVxuICAgXG4gIFxuICAgIHNhdmVMYXlvdXQ9IChsYXlvdXQpPT57XG4gICAgICBjb25zb2xlLmxvZyhcInNhdmVMYXlvdXRzXCIpXG4gICAgICBpZiAoZ2xvYmFsLmxvY2FsU3RvcmFnZSkge1xuICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JnbC03JywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIFsnbGF5b3V0J106IGxheW91dFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxufVxuXG4gY29uc3QgZGFzaGJvYXJkID0gbmV3IERhc2hib2FyZCgpO1xuYXV0b3J1bigoKSA9PiBjb25zb2xlLmxvZyggZGFzaGJvYXJkLm1vdW50ZWQgKyBcIk1vdW50ZWQ6XCIgKSk7XG5cbmNvbnN0IERhc2hib2FyZFZpZXcgPSAoKSA9PntcblxuXG4gcmV0dXJuIChcbiAgPGRpdj5cbiAgXG4gICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PkRpZ2l0YWxpcy5pbyBPcHNNYW5hZ2VyPC9oMT5cbiAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgIFdoYXQgYSBjb29sIHRlc3QgcGFnZSFcbiAgICA8L3A+XG4gICAgPGJyIC8+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtkYXNoYm9hcmQuYWRkQ2hhcnR9PkFkZCBJdGVtPC9idXR0b24+XG4gICAgPE1hc29ucnkgc3RvcmU9e2Rhc2hib2FyZH0gb25MYXlvdXRDaGFuZ2U9e2Rhc2hib2FyZC5zYXZlTGF5b3V0fS8+XG4gIDwvZGl2PlxuKX1cblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFBhZ2UoRGFzaGJvYXJkVmlldykiXX0=