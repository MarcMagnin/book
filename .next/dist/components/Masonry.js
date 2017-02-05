'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _mobx = require('mobx');

var _mobxReact = require('mobx-react');

var _reactGridLayout = require('react-grid-layout');

var _chart = require('./chart/chart');

var _chart2 = _interopRequireDefault(_chart);

var _GridElement = require('./primitives/GridElement');

var _GridElement2 = _interopRequireDefault(_GridElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResponsiveReactGridLayout = (0, _reactGridLayout.WidthProvider)(_reactGridLayout.Responsive);

var Masonry = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Masonry, _React$Component);

  function Masonry(props) {
    (0, _classCallCheck3.default)(this, Masonry);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Masonry.__proto__ || (0, _getPrototypeOf2.default)(Masonry)).call(this, props));

    _this.componentDidMount = function () {
      _this.mounted = true;
      //  if(originalLayout){
      //    console.log("WOOOOOOOOT")
      //     this.setState({
      //     layouts: originalLayout
      //   });
      //  }
    };

    _this.onBreakpointChange = function (breakpoint) {
      _this.currentBreakpoint = breakpoint;
    };

    _this.onLayoutChange = function (layout, layouts) {

      // if(this.mounted){
      //   saveToLS('layouts', layouts);
      //  this.layouts= layouts;
      _this.props.onLayoutChange(layout, layouts);
      // }
    };

    _this.onItemClick = function (e) {
      // idiomatic way to prevent a click when resizing
      if (!_this.isDragging && !_this.isResizing) _this.props.onItemClick(e);
    };

    _this.resetLayout = function () {};

    _this.onRemoveItem = function (i) {
      console.log('removing', i);
      _this.items = _lodash2.default.reject(_this.items, { i: i });
    };

    _this.onDrag = function (e) {
      _this.isDragging = true;
    };

    _this.onDragStop = function (e) {
      // HACK: we need to add some delay otherwise a click event is sent
      setTimeout(function (obj) {
        obj.isDragging = false;
      }, 200, _this);
    };

    _this.onResizeStart = function (e) {
      _this.isResizing = true;
    };

    _this.onResizeStop = function (e) {
      // HACK: we need to add some delay otherwise a click event is sent
      setTimeout(function (obj) {
        obj.isResizing = false;
      }, 200, _this);
    };

    _this.createElement = function (el) {
      var removeStyle = {
        position: 'absolute',
        right: '2px',
        top: 0,
        cursor: 'pointer'
      };

      //  {el.add ?
      //     <span className="add text" onClick={this.onAddItem} title="You can add an item by clicking here, too.">Add +</span>
      //   : <span className="text">{i}</span>}
      // onClick={this.onItemClick.bind(this, el.datagrid.i)}>
      return _react2.default.createElement(
        'div',
        { key: el.datagrid.i, 'data-grid': el.datagrid, onClick: function onClick() {
            _this.onItemClick(el.datagrid.i);
          } },
        _react2.default.createElement(
          _chart2.default,
          { chart: _this.props.items[el.datagrid.i] },
          ' '
        ),
        _react2.default.createElement(
          'a',
          { href: '#' },
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove', style: removeStyle, onClick: _this.onRemoveItem.bind(_this, el.datagrid.i) })
        )
      );
    };

    _this.mounted = false;
    _this.currentBreakpoint = "lg";
    _this.newCounter = 0;
    _this.className = "layout";
    _this.rowHeight = 100;
    _this.cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
    _this.isDragging = false;
    _this.isResizing = false;
    //this.state = props.state
    //this.logout = this.logout.bind(this)
    return _this;
  }

  // getDefaultProps= () =>  {
  //     return {
  //       className: "layout",
  //       cols: 12,
  //       rowHeight: 30
  //     };
  //   }
  //    getInitialState= () => {
  //     return {
  //       layouts: JSON.parse(JSON.stringify(originalLayout))
  //     };
  //   }


  // state = {
  //   // currentBreakpoint: 'lg',
  //   // mounted: false,
  //   // layouts: originalLayout,
  //   // items: [0, 1, 2, 3, 4].map(function(i, key, list) {
  //   //     return {i: i.toString(), x: i * 2, y: 0, w: 2, h: 2, add: i === (list.length - 1).toString()};
  //   //   }),
  //   // newCounter: 0
  // };

  (0, _createClass3.default)(Masonry, [{
    key: 'render',
    value: function render() {
      console.log((0, _stringify2.default)(this.props.layout));
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          ResponsiveReactGridLayout,
          {
            className: 'layout',
            layouts: this.props.layout,
            rowHeight: 100,
            cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
            onLayoutChange: this.onLayoutChange,
            onDrag: this.onDrag,
            onDragStop: this.onDragStop,
            onResizeStart: this.onResizeStart,
            onResizeStop: this.onResizeStop
            //onItemClick={this.onItemClick} 
            , onBreakpointChange: this.onBreakpointChange
            // prevent to generate a click and show the modal on resize
            // DON'T inline the function as it will behave differently on different browsers
            // AND this will get executed later than expected as well
            // onResizeStart={(e)=>{this.resizeFlag = true; return e;}}
            // onResizeStop={(e)=>{setTimeout((obj)=>{obj.resizeFlag = false},200, this); return e;}}
          },
          _lodash2.default.map(this.props.items, this.createElement)
        )
      );
    }
  }]);
  return Masonry;
}(_react2.default.Component), _class2.propTypes = {
  onLayoutChange: _react2.default.PropTypes.func.isRequired,
  onItemClick: _react2.default.PropTypes.func.isRequired
}, _temp)) || _class;
// <div key="1" data-grid={{w: 3, h: 3, x: 0, y: 0, minW: 3, minH:3}}><span className="text">1</span></div>
// <div key="2" data-grid={{w: 3, h: 3, x: 2, y: 0, minW: 3, minH:3}}><span className="text">2</span></div>
// <div key="3" data-grid={{w: 3, h: 3, x: 4, y: 0, minW: 3, minH:3}}><span className="text">3</span></div>
// <div key="4" data-grid={{w: 3, h: 3, x: 6, y: 0, minW: 3, minH:3}}><span className="text">4</span></div>
// <div key="5" data-grid={{w: 3, h: 3, x: 8, y: 0, minW: 3, minH:3}}><span className="text">5</span></div>

function getFromLS(key) {
  var ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-7')) || {};
    } catch (e) {/*Ignore*/}
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem('rgl-7', (0, _stringify2.default)((0, _defineProperty3.default)({}, key, value)));
  }
}

exports.default = Masonry;

//     //        return (
//     //             <li className="image-element-class">
//     //                 woohoooo
//     //             </li>
//     //         );
//     //     });


// const styles = {
//   heading: css({
//     fontSize: 50,
//     fontWeight: 200,
//     lineHeight: '40px',
//     color: '#e74c3c'
//   }),
//   content: css({
//     fontSize: 30,
//     fontWeight: 200,
//     lineHeight: '40px',
//     color: '#e74c3c'
//   }),
//   link: css({
//     color: '#e74c3c',
//     paddingBottom: 2,
//     borderBottom: '1px solid #c0392b',
//     textDecoration: 'none',
//     fontWeight: 400,
//     lineHeight: '30px',
//     transition: 'border-bottom .2s',
//     ':hover': {
//       borderBottomColor: '#e74c3c'
//     }
//   })
// }

// export  class GridItem extends React.Component {
//   static getInitialProps (ctx) {
//     return  {_grid:undefined}
//   }
//   static propTypes = {
//     _grid: PropTypes.object
//   }
// }
// export default class Masonry extends React.Component {

//   componentDidMount() {
//     // alert(this.props.data)
//     // MG.convert.date(this.props.data, 'd', '%Y-%m-%dT%H:%M:%S.%LZ');
//     //   MG.data_graphic({
//     //   title: "Line Chart",
//     //   description: "This is a simple line chart.",
//     //   data: this.props.data,
//     //   width: 600,
//     //   height: 200,
//     //   right: 40,
//     //   target: this.elem,
//     //   x_accessor: 'd',
//     //   y_accessor: 'v'
//     // });
// //       var layout = [
// //       {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
// //       {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
// //       {i: 'c', x: 4, y: 0, w: 1, h: 2}
// //     ];
// //     ReactDOM.render(
// //        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
// //         <div key={'a'}>a</div>
// //        
// //       </ReactGridLayout>,  document.getElementById("woot")
// // );
//   }

//   render () {
//      var layout = [
//       {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
//       {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
//       {i: 'c', x: 4, y: 0, w: 1, h: 2}
//     ];

//     return (
//   <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
//         <GridItem key={'a'}>a</GridItem>
//        
//       </ReactGridLayout>

//   //<p id="woot">woot</p>
//     )
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFzb25yeS5qcyJdLCJuYW1lcyI6WyJSZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0IiwiTWFzb25yeSIsInByb3BzIiwiY29tcG9uZW50RGlkTW91bnQiLCJtb3VudGVkIiwib25CcmVha3BvaW50Q2hhbmdlIiwiYnJlYWtwb2ludCIsImN1cnJlbnRCcmVha3BvaW50Iiwib25MYXlvdXRDaGFuZ2UiLCJsYXlvdXQiLCJsYXlvdXRzIiwib25JdGVtQ2xpY2siLCJlIiwiaXNEcmFnZ2luZyIsImlzUmVzaXppbmciLCJyZXNldExheW91dCIsIm9uUmVtb3ZlSXRlbSIsImkiLCJjb25zb2xlIiwibG9nIiwiaXRlbXMiLCJyZWplY3QiLCJvbkRyYWciLCJvbkRyYWdTdG9wIiwic2V0VGltZW91dCIsIm9iaiIsIm9uUmVzaXplU3RhcnQiLCJvblJlc2l6ZVN0b3AiLCJjcmVhdGVFbGVtZW50IiwiZWwiLCJyZW1vdmVTdHlsZSIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJjdXJzb3IiLCJkYXRhZ3JpZCIsImJpbmQiLCJuZXdDb3VudGVyIiwiY2xhc3NOYW1lIiwicm93SGVpZ2h0IiwiY29scyIsImxnIiwibWQiLCJzbSIsInhzIiwieHhzIiwibWFwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJnZXRGcm9tTFMiLCJrZXkiLCJscyIsImdsb2JhbCIsImxvY2FsU3RvcmFnZSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJzYXZlVG9MUyIsInZhbHVlIiwic2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLDRCQUE0QixnRUFBbEM7O0lBR01DLE87OztBQUVKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0lB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJNYXNvbnJ5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hcmMvd2ViZGV2L2Jvb2siLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IG9ic2VydmFibGUgfSBmcm9tICdtb2J4JztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5pbXBvcnQgeyBSZXNwb25zaXZlLCBXaWR0aFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtZ3JpZC1sYXlvdXQnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQvY2hhcnQnO1xuaW1wb3J0IEdyaWRFbGVtZW50IGZyb20gJy4vcHJpbWl0aXZlcy9HcmlkRWxlbWVudCdcblxuY29uc3QgUmVzcG9uc2l2ZVJlYWN0R3JpZExheW91dCA9IFdpZHRoUHJvdmlkZXIoUmVzcG9uc2l2ZSk7XG5cbkBvYnNlcnZlclxuY2xhc3MgTWFzb25yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2VcbiAgICB0aGlzLmN1cnJlbnRCcmVha3BvaW50ID0gXCJsZ1wiXG4gICAgdGhpcy5uZXdDb3VudGVyID0gMFxuICAgIHRoaXMuY2xhc3NOYW1lID0gXCJsYXlvdXRcIlxuICAgIHRoaXMucm93SGVpZ2h0ID0gMTAwXG4gICAgdGhpcy5jb2xzID0geyBsZzogMTIsIG1kOiAxMCwgc206IDYsIHhzOiA0LCB4eHM6IDIgfVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNSZXNpemluZyA9IGZhbHNlO1xuICAgIC8vdGhpcy5zdGF0ZSA9IHByb3BzLnN0YXRlXG4gICAgLy90aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcylcbiAgfVxuXG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkxheW91dENoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkl0ZW1DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG5cbiAgLy8gZ2V0RGVmYXVsdFByb3BzPSAoKSA9PiAge1xuICAvLyAgICAgcmV0dXJuIHtcbiAgLy8gICAgICAgY2xhc3NOYW1lOiBcImxheW91dFwiLFxuICAvLyAgICAgICBjb2xzOiAxMixcbiAgLy8gICAgICAgcm93SGVpZ2h0OiAzMFxuICAvLyAgICAgfTtcbiAgLy8gICB9XG4gIC8vICAgIGdldEluaXRpYWxTdGF0ZT0gKCkgPT4ge1xuICAvLyAgICAgcmV0dXJuIHtcbiAgLy8gICAgICAgbGF5b3V0czogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcmlnaW5hbExheW91dCkpXG4gIC8vICAgICB9O1xuICAvLyAgIH1cblxuXG5cbiAgLy8gc3RhdGUgPSB7XG4gIC8vICAgLy8gY3VycmVudEJyZWFrcG9pbnQ6ICdsZycsXG4gIC8vICAgLy8gbW91bnRlZDogZmFsc2UsXG4gIC8vICAgLy8gbGF5b3V0czogb3JpZ2luYWxMYXlvdXQsXG4gIC8vICAgLy8gaXRlbXM6IFswLCAxLCAyLCAzLCA0XS5tYXAoZnVuY3Rpb24oaSwga2V5LCBsaXN0KSB7XG4gIC8vICAgLy8gICAgIHJldHVybiB7aTogaS50b1N0cmluZygpLCB4OiBpICogMiwgeTogMCwgdzogMiwgaDogMiwgYWRkOiBpID09PSAobGlzdC5sZW5ndGggLSAxKS50b1N0cmluZygpfTtcbiAgLy8gICAvLyAgIH0pLFxuICAvLyAgIC8vIG5ld0NvdW50ZXI6IDBcbiAgLy8gfTtcblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICAgIC8vICBpZihvcmlnaW5hbExheW91dCl7XG4gICAgLy8gICAgY29uc29sZS5sb2coXCJXT09PT09PT09UXCIpXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICBsYXlvdXRzOiBvcmlnaW5hbExheW91dFxuICAgIC8vICAgfSk7XG4gICAgLy8gIH1cbiAgfVxuXG5cbiAgb25CcmVha3BvaW50Q2hhbmdlID0gKGJyZWFrcG9pbnQpID0+IHtcbiAgICB0aGlzLmN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludFxuICB9O1xuXG4gIG9uTGF5b3V0Q2hhbmdlID0gKGxheW91dCwgbGF5b3V0cykgPT4ge1xuXG4gICAgLy8gaWYodGhpcy5tb3VudGVkKXtcbiAgICAvLyAgIHNhdmVUb0xTKCdsYXlvdXRzJywgbGF5b3V0cyk7XG4gICAgLy8gIHRoaXMubGF5b3V0cz0gbGF5b3V0cztcbiAgICB0aGlzLnByb3BzLm9uTGF5b3V0Q2hhbmdlKGxheW91dCwgbGF5b3V0cyk7XG4gICAgLy8gfVxuICB9O1xuXG5cbiAgb25JdGVtQ2xpY2sgPSAoZSkgPT4ge1xuICAgIC8vIGlkaW9tYXRpYyB3YXkgdG8gcHJldmVudCBhIGNsaWNrIHdoZW4gcmVzaXppbmdcbiAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZyAmJiAhdGhpcy5pc1Jlc2l6aW5nKVxuICAgICAgdGhpcy5wcm9wcy5vbkl0ZW1DbGljayhlKTtcblxuXG4gIH1cblxuICByZXNldExheW91dCA9ICgpID0+IHtcblxuICB9XG4gIG9uUmVtb3ZlSXRlbSA9IChpKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlbW92aW5nJywgaSk7XG4gICAgdGhpcy5pdGVtcyA9IF8ucmVqZWN0KHRoaXMuaXRlbXMsIHsgaTogaSB9KVxuICB9XG5cbiAgb25EcmFnID0gKGUpID0+IHtcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICB9XG4gIG9uRHJhZ1N0b3AgPSAoZSkgPT4ge1xuICAgIC8vIEhBQ0s6IHdlIG5lZWQgdG8gYWRkIHNvbWUgZGVsYXkgb3RoZXJ3aXNlIGEgY2xpY2sgZXZlbnQgaXMgc2VudFxuICAgIHNldFRpbWVvdXQoKG9iaikgPT4geyBvYmouaXNEcmFnZ2luZyA9IGZhbHNlIH0sIDIwMCwgdGhpcylcbiAgfVxuICBvblJlc2l6ZVN0YXJ0ID0gKGUpID0+IHtcbiAgICB0aGlzLmlzUmVzaXppbmcgPSB0cnVlO1xuICB9XG4gIG9uUmVzaXplU3RvcCA9IChlKSA9PiB7XG4gICAgLy8gSEFDSzogd2UgbmVlZCB0byBhZGQgc29tZSBkZWxheSBvdGhlcndpc2UgYSBjbGljayBldmVudCBpcyBzZW50XG4gICAgc2V0VGltZW91dCgob2JqKSA9PiB7IG9iai5pc1Jlc2l6aW5nID0gZmFsc2UgfSwgMjAwLCB0aGlzKVxuICB9XG5cblxuICBjcmVhdGVFbGVtZW50ID0gKGVsKSA9PiB7XG4gICAgdmFyIHJlbW92ZVN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICByaWdodDogJzJweCcsXG4gICAgICB0b3A6IDAsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgIH07XG5cbiAgICAvLyAge2VsLmFkZCA/XG4gICAgLy8gICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZCB0ZXh0XCIgb25DbGljaz17dGhpcy5vbkFkZEl0ZW19IHRpdGxlPVwiWW91IGNhbiBhZGQgYW4gaXRlbSBieSBjbGlja2luZyBoZXJlLCB0b28uXCI+QWRkICs8L3NwYW4+XG4gICAgLy8gICA6IDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj57aX08L3NwYW4+fVxuICAgIC8vIG9uQ2xpY2s9e3RoaXMub25JdGVtQ2xpY2suYmluZCh0aGlzLCBlbC5kYXRhZ3JpZC5pKX0+XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXtlbC5kYXRhZ3JpZC5pfSBkYXRhLWdyaWQ9e2VsLmRhdGFncmlkfSBvbkNsaWNrPXsoKT0+e3RoaXMub25JdGVtQ2xpY2soZWwuZGF0YWdyaWQuaSl9fSA+XG4gICAgICAgIDxDaGFydCBjaGFydD17dGhpcy5wcm9wcy5pdGVtc1tlbC5kYXRhZ3JpZC5pXX0gPiA8L0NoYXJ0PlxuICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXCIgc3R5bGU9e3JlbW92ZVN0eWxlfSBvbkNsaWNrPXt0aGlzLm9uUmVtb3ZlSXRlbS5iaW5kKHRoaXMsIGVsLmRhdGFncmlkLmkpfSAvPiBcbiAgICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5sYXlvdXQpKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuXG5cbiAgICAgICAgPFJlc3BvbnNpdmVSZWFjdEdyaWRMYXlvdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJsYXlvdXRcIlxuICAgICAgICAgIGxheW91dHM9e3RoaXMucHJvcHMubGF5b3V0fVxuICAgICAgICAgIHJvd0hlaWdodD17MTAwfVxuICAgICAgICAgIGNvbHM9e3sgbGc6IDEyLCBtZDogMTAsIHNtOiA2LCB4czogNCwgeHhzOiAyIH19XG4gICAgICAgICAgb25MYXlvdXRDaGFuZ2U9e3RoaXMub25MYXlvdXRDaGFuZ2V9XG4gICAgICAgICAgb25EcmFnPXt0aGlzLm9uRHJhZ31cbiAgICAgICAgICBvbkRyYWdTdG9wPXt0aGlzLm9uRHJhZ1N0b3B9XG4gICAgICAgICAgb25SZXNpemVTdGFydD17dGhpcy5vblJlc2l6ZVN0YXJ0fVxuICAgICAgICAgIG9uUmVzaXplU3RvcD17dGhpcy5vblJlc2l6ZVN0b3B9XG4gICAgICAgICAgLy9vbkl0ZW1DbGljaz17dGhpcy5vbkl0ZW1DbGlja30gXG4gICAgICAgICAgb25CcmVha3BvaW50Q2hhbmdlPXt0aGlzLm9uQnJlYWtwb2ludENoYW5nZX1cbiAgICAgICAgICAvLyBwcmV2ZW50IHRvIGdlbmVyYXRlIGEgY2xpY2sgYW5kIHNob3cgdGhlIG1vZGFsIG9uIHJlc2l6ZVxuICAgICAgICAgIC8vIERPTidUIGlubGluZSB0aGUgZnVuY3Rpb24gYXMgaXQgd2lsbCBiZWhhdmUgZGlmZmVyZW50bHkgb24gZGlmZmVyZW50IGJyb3dzZXJzXG4gICAgICAgICAgLy8gQU5EIHRoaXMgd2lsbCBnZXQgZXhlY3V0ZWQgbGF0ZXIgdGhhbiBleHBlY3RlZCBhcyB3ZWxsXG4gICAgICAgICAgLy8gb25SZXNpemVTdGFydD17KGUpPT57dGhpcy5yZXNpemVGbGFnID0gdHJ1ZTsgcmV0dXJuIGU7fX1cbiAgICAgICAgICAvLyBvblJlc2l6ZVN0b3A9eyhlKT0+e3NldFRpbWVvdXQoKG9iaik9PntvYmoucmVzaXplRmxhZyA9IGZhbHNlfSwyMDAsIHRoaXMpOyByZXR1cm4gZTt9fVxuICAgICAgICAgID5cbiAgICAgICAgICBcbiAgICAgICAgICB7Xy5tYXAodGhpcy5wcm9wcy5pdGVtcywgdGhpcy5jcmVhdGVFbGVtZW50KX1cbiAgICAgICAgPC9SZXNwb25zaXZlUmVhY3RHcmlkTGF5b3V0PlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4vLyA8ZGl2IGtleT1cIjFcIiBkYXRhLWdyaWQ9e3t3OiAzLCBoOiAzLCB4OiAwLCB5OiAwLCBtaW5XOiAzLCBtaW5IOjN9fT48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+MTwvc3Bhbj48L2Rpdj5cbi8vIDxkaXYga2V5PVwiMlwiIGRhdGEtZ3JpZD17e3c6IDMsIGg6IDMsIHg6IDIsIHk6IDAsIG1pblc6IDMsIG1pbkg6M319PjxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj4yPC9zcGFuPjwvZGl2PlxuLy8gPGRpdiBrZXk9XCIzXCIgZGF0YS1ncmlkPXt7dzogMywgaDogMywgeDogNCwgeTogMCwgbWluVzogMywgbWluSDozfX0+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPjM8L3NwYW4+PC9kaXY+XG4vLyA8ZGl2IGtleT1cIjRcIiBkYXRhLWdyaWQ9e3t3OiAzLCBoOiAzLCB4OiA2LCB5OiAwLCBtaW5XOiAzLCBtaW5IOjN9fT48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+NDwvc3Bhbj48L2Rpdj5cbi8vIDxkaXYga2V5PVwiNVwiIGRhdGEtZ3JpZD17e3c6IDMsIGg6IDMsIHg6IDgsIHk6IDAsIG1pblc6IDMsIG1pbkg6M319PjxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj41PC9zcGFuPjwvZGl2PlxuXG5mdW5jdGlvbiBnZXRGcm9tTFMoa2V5KSB7XG4gIGxldCBscyA9IHt9O1xuICBpZiAoZ2xvYmFsLmxvY2FsU3RvcmFnZSkge1xuICAgIHRyeSB7XG4gICAgICBscyA9IEpTT04ucGFyc2UoZ2xvYmFsLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZ2wtNycpKSB8fCB7fTtcbiAgICB9IGNhdGNoIChlKSB7LypJZ25vcmUqLyB9XG4gIH1cbiAgcmV0dXJuIGxzW2tleV07XG59XG5cbmZ1bmN0aW9uIHNhdmVUb0xTKGtleSwgdmFsdWUpIHtcbiAgaWYgKGdsb2JhbC5sb2NhbFN0b3JhZ2UpIHtcbiAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JnbC03JywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgW2tleV06IHZhbHVlXG4gICAgfSkpO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFzb25yeTtcblxuXG5cblxuXG5cblxuLy8gICAgIC8vICAgICAgICByZXR1cm4gKFxuLy8gICAgIC8vICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbWFnZS1lbGVtZW50LWNsYXNzXCI+XG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIHdvb2hvb29vXG4vLyAgICAgLy8gICAgICAgICAgICAgPC9saT5cbi8vICAgICAvLyAgICAgICAgICk7XG4vLyAgICAgLy8gICAgIH0pO1xuXG5cblxuXG4vLyBjb25zdCBzdHlsZXMgPSB7XG4vLyAgIGhlYWRpbmc6IGNzcyh7XG4vLyAgICAgZm9udFNpemU6IDUwLFxuLy8gICAgIGZvbnRXZWlnaHQ6IDIwMCxcbi8vICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXG4vLyAgICAgY29sb3I6ICcjZTc0YzNjJ1xuLy8gICB9KSxcbi8vICAgY29udGVudDogY3NzKHtcbi8vICAgICBmb250U2l6ZTogMzAsXG4vLyAgICAgZm9udFdlaWdodDogMjAwLFxuLy8gICAgIGxpbmVIZWlnaHQ6ICc0MHB4Jyxcbi8vICAgICBjb2xvcjogJyNlNzRjM2MnXG4vLyAgIH0pLFxuLy8gICBsaW5rOiBjc3Moe1xuLy8gICAgIGNvbG9yOiAnI2U3NGMzYycsXG4vLyAgICAgcGFkZGluZ0JvdHRvbTogMixcbi8vICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2MwMzkyYicsXG4vLyAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbi8vICAgICBmb250V2VpZ2h0OiA0MDAsXG4vLyAgICAgbGluZUhlaWdodDogJzMwcHgnLFxuLy8gICAgIHRyYW5zaXRpb246ICdib3JkZXItYm90dG9tIC4ycycsXG4vLyAgICAgJzpob3Zlcic6IHtcbi8vICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnI2U3NGMzYydcbi8vICAgICB9XG4vLyAgIH0pXG4vLyB9XG5cbi8vIGV4cG9ydCAgY2xhc3MgR3JpZEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzIChjdHgpIHtcbi8vICAgICByZXR1cm4gIHtfZ3JpZDp1bmRlZmluZWR9XG4vLyAgIH1cbi8vICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbi8vICAgICBfZ3JpZDogUHJvcFR5cGVzLm9iamVjdFxuLy8gICB9XG4vLyB9XG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNvbnJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuLy8gICBjb21wb25lbnREaWRNb3VudCgpIHtcbi8vICAgICAvLyBhbGVydCh0aGlzLnByb3BzLmRhdGEpXG4vLyAgICAgLy8gTUcuY29udmVydC5kYXRlKHRoaXMucHJvcHMuZGF0YSwgJ2QnLCAnJVktJW0tJWRUJUg6JU06JVMuJUxaJyk7XG4vLyAgICAgLy8gICBNRy5kYXRhX2dyYXBoaWMoe1xuLy8gICAgIC8vICAgdGl0bGU6IFwiTGluZSBDaGFydFwiLFxuLy8gICAgIC8vICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHNpbXBsZSBsaW5lIGNoYXJ0LlwiLFxuLy8gICAgIC8vICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuLy8gICAgIC8vICAgd2lkdGg6IDYwMCxcbi8vICAgICAvLyAgIGhlaWdodDogMjAwLFxuLy8gICAgIC8vICAgcmlnaHQ6IDQwLFxuLy8gICAgIC8vICAgdGFyZ2V0OiB0aGlzLmVsZW0sXG4vLyAgICAgLy8gICB4X2FjY2Vzc29yOiAnZCcsXG4vLyAgICAgLy8gICB5X2FjY2Vzc29yOiAndidcbi8vICAgICAvLyB9KTtcbi8vIC8vICAgICAgIHZhcsKgbGF5b3V0wqA9wqBbXG4vLyAvLyDCoMKgwqDCoMKgwqB7aTrCoCdhJyzCoHg6wqAwLMKgeTrCoDAswqB3OsKgMSzCoGg6wqAyLMKgc3RhdGljOsKgdHJ1ZX0sXG4vLyAvLyDCoMKgwqDCoMKgwqB7aTrCoCdiJyzCoHg6wqAxLMKgeTrCoDAswqB3OsKgMyzCoGg6wqAyLMKgbWluVzrCoDIswqBtYXhXOsKgNH0sXG4vLyAvLyDCoMKgwqDCoMKgwqB7aTrCoCdjJyzCoHg6wqA0LMKgeTrCoDAswqB3OsKgMSzCoGg6wqAyfVxuLy8gLy8gwqDCoMKgwqBdO1xuLy8gLy8gICAgIFJlYWN0RE9NLnJlbmRlcihcbi8vIC8vICAgICAgIMKgPFJlYWN0R3JpZExheW91dMKgY2xhc3NOYW1lPVwibGF5b3V0XCLCoGxheW91dD17bGF5b3V0fcKgY29scz17MTJ9wqByb3dIZWlnaHQ9ezMwfcKgd2lkdGg9ezEyMDB9PlxuLy8gLy8gwqDCoMKgwqDCoMKgwqDCoDxkaXbCoGtleT17J2EnfT5hPC9kaXY+XG4vLyAvLyDCoMKgwqDCoMKgwqDCoFxuLy8gLy8gwqDCoMKgwqDCoMKgPC9SZWFjdEdyaWRMYXlvdXQ+LCAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b290XCIpXG4vLyAvLyApO1xuLy8gICB9XG5cbi8vICAgcmVuZGVyICgpIHtcbi8vICAgICAgdmFywqBsYXlvdXTCoD3CoFtcbi8vIMKgwqDCoMKgwqDCoHtpOsKgJ2EnLMKgeDrCoDAswqB5OsKgMCzCoHc6wqAxLMKgaDrCoDIswqBzdGF0aWM6wqB0cnVlfSxcbi8vIMKgwqDCoMKgwqDCoHtpOsKgJ2InLMKgeDrCoDEswqB5OsKgMCzCoHc6wqAzLMKgaDrCoDIswqBtaW5XOsKgMizCoG1heFc6wqA0fSxcbi8vIMKgwqDCoMKgwqDCoHtpOsKgJ2MnLMKgeDrCoDQswqB5OsKgMCzCoHc6wqAxLMKgaDrCoDJ9XG4vLyDCoMKgwqDCoF07XG5cbi8vIMKgwqDCoMKgcmV0dXJuwqAoXG4vLyAgIDxSZWFjdEdyaWRMYXlvdXTCoGNsYXNzTmFtZT1cImxheW91dFwiwqBsYXlvdXQ9e2xheW91dH3CoGNvbHM9ezEyfcKgcm93SGVpZ2h0PXszMH3CoHdpZHRoPXsxMjAwfT5cbi8vIMKgwqDCoMKgwqDCoMKgwqA8R3JpZEl0ZW3CoGtleT17J2EnfT5hPC9HcmlkSXRlbT5cbi8vIMKgwqDCoMKgwqDCoMKgXG4vLyDCoMKgwqDCoMKgwqA8L1JlYWN0R3JpZExheW91dD5cblxuLy8gICAvLzxwIGlkPVwid29vdFwiPndvb3Q8L3A+XG4vLyDCoMKgwqDCoClcbi8vICAgfVxuLy8gfSJdfQ==