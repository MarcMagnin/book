'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/core-js/object/define-property');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _defineProperty4 = require('babel-runtime/helpers/defineProperty');

var _defineProperty5 = _interopRequireDefault(_defineProperty4);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobx = require('mobx');

var _mobxReact = require('mobx-react');

var _Masonry = require('../components/Masonry');

var _Masonry2 = _interopRequireDefault(_Masonry);

var _defaultPage = require('../components/hocs/defaultPage');

var _defaultPage2 = _interopRequireDefault(_defaultPage);

var _reactBootstrap = require('react-bootstrap');

var _index = require('../stores/index.js');

var _index2 = _interopRequireDefault(_index);

var _chartEditor = require('../components/chart/chart-editor.js');

var _chartEditor2 = _interopRequireDefault(_chartEditor);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  (0, _defineProperty3.default)(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var loadLayout = function loadLayout(key) {
  var ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-7')) || {};
    } catch (e) {/*Ignore*/}
  }
  return ls[key];
};

//@inject('ChartStore', 'MetricStore', 'UiState')
var DashboardView = (_dec = (0, _mobxReact.inject)('ChartStore', 'UiState'), _dec(_class = (0, _mobxReact.observer)(_class = (_class2 = (_temp = _class3 = function (_React$Component) {
  (0, _inherits3.default)(DashboardView, _React$Component);

  function DashboardView(props) {
    (0, _classCallCheck3.default)(this, DashboardView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DashboardView.__proto__ || (0, _getPrototypeOf2.default)(DashboardView)).call(this, props));

    _initialiseProps.call(_this);

    var layout = loadLayout('layout') || [];
    // this.items = [0, 1, 2].map(function(id, key, list) {
    //     return {i: id.toString(), x: id * 2, y: 0, w: 2, h: 2, add: id === (list.length - 1).toString()};
    //   });
    props.ChartStore.charts.map(function (obj, id, list) {
      if (layout[id]) {
        obj.datagrid = {
          i: layout[id].i,
          x: layout[id].x,
          y: layout[id].y,
          w: layout[id].w,
          h: layout[id].h
        };
      } else {
        obj.datagrid = {
          i: id.toString(),
          x: id * 2,
          y: 0,
          w: 6,
          h: 4
        };
      }
    });
    return _this;
  }
  //  this.props.ChartStore.charts.reverse().map( chart => 
  //           <Chart 
  //             chart={ chart } 
  //             metricNames={this.props.MetricStore.metrics.slice()} 
  //             metricStore={this.props.MetricStore}
  //             metricNamesFilterOptions={this.props.MetricStore.metricNamesFilterOptions} 
  //             key={ chart.id } 
  //             />


  (0, _createClass3.default)(DashboardView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'onDrop',
    value: function onDrop(files) {
      var req = _superagent2.default.post('/upload');
      files.forEach(function (file) {
        req.attach(file.name, file);
      });
      req.end(function (err, res) {
        console.log("WOOT");
        // Calling the end function will send the request
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          { className: 'content' },
          'Welcome to your dashboad page!'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          { onClick: this.addChart },
          'Add Item'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.showModal },
          'showModal'
        ),
        _react2.default.createElement(
          _reactDropzone2.default,
          { ref: 'dropzone', onDrop: this.onDrop },
          _react2.default.createElement(
            'div',
            null,
            'Try dropping some files here, or click to select files to upload.'
          )
        ),
        _react2.default.createElement(_Masonry2.default, { items: this.props.ChartStore.charts, layout: this.layout, onLayoutChange: this.saveLayout, onItemClick: this.onItemClick }),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.isModalVisible, onHide: this.closeModal },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            { closeButton: true },
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'What a cool chart!'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_chartEditor2.default, { chart: this.props.UiState.selectedChart })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.closeModal },
              'Close'
            )
          )
        )
      );
    }
  }]);
  return DashboardView;
}(_react2.default.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  _initDefineProp(this, 'isModalVisible', _descriptor, this);

  _initDefineProp(this, 'newCounter', _descriptor2, this);

  _initDefineProp(this, 'onItemClick', _descriptor3, this);

  this.addChart = function () {
    /*eslint no-console: 0*/
    console.log('adding', 'n' + _this2.newCounter);
    _this2.items = _this2.items.concat({
      i: 'n' + _this2.newCounter,
      x: _this2.items.length * 2 % (_this2.cols || 12),
      y: Infinity, // puts it at the bottom
      w: 6,
      h: 4
    });

    _this2.newCounter = _this2.newCounter + 1;
    console.log('this.items', _this2.items.length);
  };

  this.removeChart = function () {};

  _initDefineProp(this, 'showModal', _descriptor4, this);

  _initDefineProp(this, 'closeModal', _descriptor5, this);

  this.saveLayout = function (layout) {
    console.log("saveLayouts");
    if (global.localStorage) {
      global.localStorage.setItem('rgl-7', (0, _stringify2.default)((0, _defineProperty5.default)({}, 'layout', layout)));
    }
  };
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'isModalVisible', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'newCounter', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'onItemClick', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (itemId) {
      _this3.props.UiState.selectedChart = _this3.props.ChartStore.charts[itemId];
      _this3.showModal();
    };
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'showModal', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function () {
      _this4.isModalVisible = true;
    };
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'closeModal', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function () {
      console.log("woot");
      _this5.isModalVisible = false;
    };
  }
})), _class2)) || _class) || _class);

//export default defaultPage(Trigger)

exports.default = (0, _defaultPage2.default)(DashboardView);

//export default observer(['ChartStore', 'MetricStore'], ListChart);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Rhc2hib2FyZHMuanM/ZW50cnkiXSwibmFtZXMiOlsibG9hZExheW91dCIsImtleSIsImxzIiwiZ2xvYmFsIiwibG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsImUiLCJEYXNoYm9hcmRWaWV3IiwicHJvcHMiLCJsYXlvdXQiLCJDaGFydFN0b3JlIiwiY2hhcnRzIiwibWFwIiwib2JqIiwiaWQiLCJsaXN0IiwiZGF0YWdyaWQiLCJpIiwieCIsInkiLCJ3IiwiaCIsInRvU3RyaW5nIiwiZmlsZXMiLCJyZXEiLCJwb3N0IiwiZm9yRWFjaCIsImZpbGUiLCJhdHRhY2giLCJuYW1lIiwiZW5kIiwiZXJyIiwicmVzIiwiY29uc29sZSIsImxvZyIsImFkZENoYXJ0Iiwic2hvd01vZGFsIiwib25Ecm9wIiwic2F2ZUxheW91dCIsIm9uSXRlbUNsaWNrIiwiaXNNb2RhbFZpc2libGUiLCJjbG9zZU1vZGFsIiwiVWlTdGF0ZSIsInNlbGVjdGVkQ2hhcnQiLCJDb21wb25lbnQiLCJuZXdDb3VudGVyIiwiaXRlbXMiLCJjb25jYXQiLCJsZW5ndGgiLCJjb2xzIiwiSW5maW5pdHkiLCJyZW1vdmVDaGFydCIsInNldEl0ZW0iLCJpdGVtSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQVM7QUFDMUIsTUFBSUMsS0FBSyxFQUFUO0FBQ0EsTUFBSUMsT0FBT0MsWUFBWCxFQUF5QjtBQUN2QixRQUFJO0FBQ0ZGLFdBQUtHLEtBQUtDLEtBQUwsQ0FBV0gsT0FBT0MsWUFBUCxDQUFvQkcsT0FBcEIsQ0FBNEIs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QXNCLElBQXRCO0FBQ0QsSzs7Ozs7OztXQUVvQixZQUFNO0FBQ3pCUCxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLGFBQUtNLGNBQUwsR0FBc0IsS0FBdEI7QUFDRCxLOzs7O0FBNkRIOztrQkFDZSwyQkFBWWpDLGFBQVosQzs7QUFFZiIsImZpbGUiOiJkYXNoYm9hcmRzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL21hcmMvd2ViZGV2L2Jvb2siLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBhdXRvcnVuLCBhY3Rpb24sIGNvbXB1dGVkIH0gZnJvbSAnbW9ieCc7XG5pbXBvcnQgeyBvYnNlcnZlciwgaW5qZWN0IH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5pbXBvcnQgTWFzb25yeSBmcm9tICcuLi9jb21wb25lbnRzL01hc29ucnknXG5pbXBvcnQgZGVmYXVsdFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9ob2NzL2RlZmF1bHRQYWdlJ1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgU3RvcmVzIGZyb20gJy4uL3N0b3Jlcy9pbmRleC5qcyc7XG5pbXBvcnQgQ2hhcnRFZGl0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9jaGFydC9jaGFydC1lZGl0b3IuanMnO1xuaW1wb3J0IERyb3B6b25lIGZyb20gJ3JlYWN0LWRyb3B6b25lJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3N1cGVyYWdlbnQnO1xuXG5jb25zdCBsb2FkTGF5b3V0ID0gKGtleSkgPT4ge1xuICBsZXQgbHMgPSB7fTtcbiAgaWYgKGdsb2JhbC5sb2NhbFN0b3JhZ2UpIHtcbiAgICB0cnkge1xuICAgICAgbHMgPSBKU09OLnBhcnNlKGdsb2JhbC5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmdsLTcnKSkgfHwge307XG4gICAgfSBjYXRjaCAoZSkgey8qSWdub3JlKi8gfVxuICB9XG4gIHJldHVybiBsc1trZXldO1xufVxuXG5cblxuLy9AaW5qZWN0KCdDaGFydFN0b3JlJywgJ01ldHJpY1N0b3JlJywgJ1VpU3RhdGUnKVxuQGluamVjdCgnQ2hhcnRTdG9yZScsICdVaVN0YXRlJylcbkBvYnNlcnZlclxuY2xhc3MgRGFzaGJvYXJkVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgQG9ic2VydmFibGUgaXNNb2RhbFZpc2libGUgPSBmYWxzZTtcbiAgQG9ic2VydmFibGUgbmV3Q291bnRlciA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIGxldCBsYXlvdXQgPSBsb2FkTGF5b3V0KCdsYXlvdXQnKSB8fCBbXTtcbiAgICAvLyB0aGlzLml0ZW1zID0gWzAsIDEsIDJdLm1hcChmdW5jdGlvbihpZCwga2V5LCBsaXN0KSB7XG4gICAgLy8gICAgIHJldHVybiB7aTogaWQudG9TdHJpbmcoKSwgeDogaWQgKiAyLCB5OiAwLCB3OiAyLCBoOiAyLCBhZGQ6IGlkID09PSAobGlzdC5sZW5ndGggLSAxKS50b1N0cmluZygpfTtcbiAgICAvLyAgIH0pO1xuICAgIHByb3BzLkNoYXJ0U3RvcmUuY2hhcnRzLm1hcChmdW5jdGlvbiAob2JqLCBpZCwgbGlzdCkge1xuICAgICAgaWYgKGxheW91dFtpZF0pIHtcbiAgICAgICAgb2JqLmRhdGFncmlkID0ge1xuICAgICAgICAgIGk6IGxheW91dFtpZF0uaSxcbiAgICAgICAgICB4OiBsYXlvdXRbaWRdLngsXG4gICAgICAgICAgeTogbGF5b3V0W2lkXS55LFxuICAgICAgICAgIHc6IGxheW91dFtpZF0udyxcbiAgICAgICAgICBoOiBsYXlvdXRbaWRdLmhcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqLmRhdGFncmlkID0ge1xuICAgICAgICAgIGk6IGlkLnRvU3RyaW5nKCksXG4gICAgICAgICAgeDogaWQgKiAyLFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgdzogNixcbiAgICAgICAgICBoOiA0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyAgdGhpcy5wcm9wcy5DaGFydFN0b3JlLmNoYXJ0cy5yZXZlcnNlKCkubWFwKCBjaGFydCA9PiBcbiAgLy8gICAgICAgICAgIDxDaGFydCBcbiAgLy8gICAgICAgICAgICAgY2hhcnQ9eyBjaGFydCB9IFxuICAvLyAgICAgICAgICAgICBtZXRyaWNOYW1lcz17dGhpcy5wcm9wcy5NZXRyaWNTdG9yZS5tZXRyaWNzLnNsaWNlKCl9IFxuICAvLyAgICAgICAgICAgICBtZXRyaWNTdG9yZT17dGhpcy5wcm9wcy5NZXRyaWNTdG9yZX1cbiAgLy8gICAgICAgICAgICAgbWV0cmljTmFtZXNGaWx0ZXJPcHRpb25zPXt0aGlzLnByb3BzLk1ldHJpY1N0b3JlLm1ldHJpY05hbWVzRmlsdGVyT3B0aW9uc30gXG4gIC8vICAgICAgICAgICAgIGtleT17IGNoYXJ0LmlkIH0gXG4gIC8vICAgICAgICAgICAgIC8+XG5cblxuICBAYWN0aW9uIG9uSXRlbUNsaWNrID0gKGl0ZW1JZCkgPT4ge1xuICAgIHRoaXMucHJvcHMuVWlTdGF0ZS5zZWxlY3RlZENoYXJ0ID0gdGhpcy5wcm9wcy5DaGFydFN0b3JlLmNoYXJ0c1tpdGVtSWRdO1xuICAgIHRoaXMuc2hvd01vZGFsKClcbiAgfVxuXG4gIGFkZENoYXJ0ID0gKCkgPT4ge1xuICAgIC8qZXNsaW50IG5vLWNvbnNvbGU6IDAqL1xuICAgIGNvbnNvbGUubG9nKCdhZGRpbmcnLCAnbicgKyB0aGlzLm5ld0NvdW50ZXIpO1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmNvbmNhdCh7XG4gICAgICBpOiAnbicgKyB0aGlzLm5ld0NvdW50ZXIsXG4gICAgICB4OiB0aGlzLml0ZW1zLmxlbmd0aCAqIDIgJSAodGhpcy5jb2xzIHx8IDEyKSxcbiAgICAgIHk6IEluZmluaXR5LCAvLyBwdXRzIGl0IGF0IHRoZSBib3R0b21cbiAgICAgIHc6IDYsXG4gICAgICBoOiA0XG4gICAgfSlcblxuICAgIHRoaXMubmV3Q291bnRlciA9IHRoaXMubmV3Q291bnRlciArIDFcbiAgICBjb25zb2xlLmxvZygndGhpcy5pdGVtcycsIHRoaXMuaXRlbXMubGVuZ3RoKTtcbiAgfVxuXG5cbiAgcmVtb3ZlQ2hhcnQgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIEBhY3Rpb24gc2hvd01vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSB0cnVlXG4gIH1cblxuICBAYWN0aW9uIGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ3b290XCIpXG4gICAgdGhpcy5pc01vZGFsVmlzaWJsZSA9IGZhbHNlXG4gIH1cblxuXG4gIHNhdmVMYXlvdXQgPSAobGF5b3V0KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzYXZlTGF5b3V0c1wiKVxuICAgIGlmIChnbG9iYWwubG9jYWxTdG9yYWdlKSB7XG4gICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JnbC03JywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBbJ2xheW91dCddOiBsYXlvdXRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5vbkRyb3AgKGZpbGVzKSB7XG4gICAgICB2YXIgcmVxID0gcmVxdWVzdC5wb3N0KCcvdXBsb2FkJyk7XG4gICAgICAgIGZpbGVzLmZvckVhY2goKGZpbGUpPT4ge1xuICAgICAgICAgICAgcmVxLmF0dGFjaChmaWxlLm5hbWUsIGZpbGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVxLmVuZChmdW5jdGlvbihlcnIsIHJlcyl7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJXT09UXCIpXG4gICAgICAgICAgLy8gQ2FsbGluZyB0aGUgZW5kIGZ1bmN0aW9uIHdpbGwgc2VuZCB0aGUgcmVxdWVzdFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgV2VsY29tZSB0byB5b3VyIGRhc2hib2FkIHBhZ2UhXG4gICAgICA8L3A+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRDaGFydH0+QWRkIEl0ZW08L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNob3dNb2RhbH0+c2hvd01vZGFsPC9idXR0b24+XG48RHJvcHpvbmUgcmVmPVwiZHJvcHpvbmVcIiBvbkRyb3A9e3RoaXMub25Ecm9wfSA+XG4gICAgICAgICAgICAgIDxkaXY+VHJ5IGRyb3BwaW5nIHNvbWUgZmlsZXMgaGVyZSwgb3IgY2xpY2sgdG8gc2VsZWN0IGZpbGVzIHRvIHVwbG9hZC48L2Rpdj5cbiAgICAgICAgICAgIDwvRHJvcHpvbmU+XG4gICAgICA8TWFzb25yeSBpdGVtcz17dGhpcy5wcm9wcy5DaGFydFN0b3JlLmNoYXJ0c30gbGF5b3V0PXt0aGlzLmxheW91dH0gb25MYXlvdXRDaGFuZ2U9e3RoaXMuc2F2ZUxheW91dH0gb25JdGVtQ2xpY2s9e3RoaXMub25JdGVtQ2xpY2t9IC8+XG5cbiAgICAgIDxNb2RhbCBzaG93PXt0aGlzLmlzTW9kYWxWaXNpYmxlfSBvbkhpZGU9e3RoaXMuY2xvc2VNb2RhbH0+XG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgPE1vZGFsLlRpdGxlPldoYXQgYSBjb29sIGNoYXJ0ITwvTW9kYWwuVGl0bGU+XG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENoYXJ0RWRpdG9yIGNoYXJ0PXt0aGlzLnByb3BzLlVpU3RhdGUuc2VsZWN0ZWRDaGFydH0gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9PkNsb3NlPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L2Rpdj5cblxuICB9XG59XG5cblxuXG4vL2V4cG9ydCBkZWZhdWx0IGRlZmF1bHRQYWdlKFRyaWdnZXIpXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0UGFnZShEYXNoYm9hcmRWaWV3KVxuXG4vL2V4cG9ydCBkZWZhdWx0IG9ic2VydmVyKFsnQ2hhcnRTdG9yZScsICdNZXRyaWNTdG9yZSddLCBMaXN0Q2hhcnQpOyJdfQ==