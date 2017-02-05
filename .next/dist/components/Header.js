'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Link from 'next/prefetch'


var links = [{ href: '/', text: 'Home' }, { href: '/dashboards', text: 'Dashboards', authRequired: false }, { href: '/about', text: 'About' }, { href: '/auth/sign-in', text: 'Sign In', anonymousOnly: true }, { href: '/auth/sign-off', text: 'Sign Off', authRequired: true }];

var getAllowedLinks = function getAllowedLinks(isAuthenticated) {
  return links.filter(function (l) {
    return !l.authRequired || l.authRequired && isAuthenticated;
  }).filter(function (l) {
    return !isAuthenticated || isAuthenticated && !l.anonymousOnly;
  });
};

var Header = function Header(_ref) {
  var isAuthenticated = _ref.isAuthenticated,
      currentUrl = _ref.currentUrl;
  return _react2.default.createElement(
    'div',
    { className: 'header' },
    getAllowedLinks(isAuthenticated).map(function (l) {
      return _react2.default.createElement(
        _link2.default,
        { key: l.href, href: l.href },
        _react2.default.createElement(
          'a',
          { className: currentUrl === l.href ? "headerlink active" : "headerlink" },
          l.text
        )
      );
    })
  );
};

Header.propTypes = {
  isAuthenticated: _react.PropTypes.bool.isRequired,
  currentUrl: _react.PropTypes.string.isRequired
};

exports.default = Header;

// <style jsx global>{`

//       .headerlink {
//         margin-right: 20px;
//         font-size: 14px;
//         color: #999;
//         text-decoration: none;
//         text-transform: uppercase;
//         padding-top: 2px;
//         padding-bottom: 2px;
//         border-top: 1px solid transparent;
//         border-bottom: 1px solid transparent;
//         transition: color .25s;
//         font-weight: 400;
//       }
//       .headerlink:hover {
//         color: #333;
//         text-decoration: none;
//       }
//       .headerlink.active {
//         color: #333;
//         border-top: 1px solid #333;
//         border-bottom: 1px solid #333;
//         font-weight: 600;
//       }


//    `}</style>
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbImxpbmtzIiwiaHJlZiIsInRleHQiLCJhdXRoUmVxdWlyZWQiLCJhbm9ueW1vdXNPbmx5IiwiZ2V0QWxsb3dlZExpbmtzIiwiZmlsdGVyIiwibCIsImlzQXV0aGVudGljYXRlZCIsIkhlYWRlciIsImN1cnJlbnRVcmwiLCJtYXAiLCJwcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBQ0E7OztBQUdBLElBQU1BLFFBQVEsQ0FDWixFQUFFQyxNQUFNLEdBQVIsRUFBYUMsTUFBTSxNQUFuQixFQURZLEVBRVosRUFBRUQsTUFBTSxhQUFSLEVBQXVCQyxNQUFNLFlBQTdCLEVBQTJDQyxjQUFjLEtBQXpELEVBRlksRUFHWixFQUFFRixNQUFNLFFBQVIsRUFBa0JDLE1BQU0sT0FBeEIsRUFIWSxFQUlaLEVBQUVELE1BQU0sZUFBUixFQUF5QkMsTUFBTSxTQUEvQixFQUEwQ0UsZUFBZSxJQUF6RCxFQUpZLEVBS1osRUFBRUgsTUFBTSxnQkFBUixFQUEwQkMsTUFBTSxVQUFoQyxFQUE0Q0MsY0FBYyxJQUExRCxFQUxZLENBQWQ7O0FBUUEsSUFBTUUsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFNBQW1CTCxNQUFNTSxNQUFOLENBQWE7QUFBQSxXQUFLLENBQUNDLEVBQUVKLFlBQUgsSUFBb0JJLEVBQUVKLFlBQUYsSUFBa0JLLGVBQTNDO0FBQUEsR0FBYixFQUN4Q0YsTUFEd0MsQ0FDakM7QUFBQSxXQUFLLENBQUNFLGVBQUQsSUFBcUJBLG1CQUFtQixDQUFDRCxFQUFFSCxhQUFoRDtBQUFBLEdBRGlDLENBQW5CO0FBQUEsQ0FBeEI7O0FBR0EsSUFBTUssU0FBUyxTQUFUQSxNQUFTO0FBQUEsTUFBR0QsZUFBSCxRQUFHQSxlQUFIO0FBQUEsTUFBb0JFLFVBQXBCLFFBQW9CQSxVQUFwQjtBQUFBLFNBQ2I7QUFBQTtBQUFBLE1BQUssV0FBVSxRQUFmO0FBQ0dMLG9CQUFnQkcsZUFBaEIsRUFBaUNHLEdBQWpDLENBQXFDO0FBQUEsYUFDcEM7QUFBQTtBQUFBLFVBQU0sS0FBS0osRUFBRU4sSUFBYixFQUFtQixNQUFNTSxFQUFFTixJQUEzQjtBQUNFO0FBQUE7QUFBQSxZQUFHLFdBQVdTLGVBQWVILEVBQUVOLElBQWpCLEdBQXdCLG1CQUF4QixHQUE4QyxZQUE1RDtBQUNHTSxZQUFFTDtBQURMO0FBREYsT0FEb0M7QUFBQSxLQUFyQztBQURILEdBRGE7QUFBQSxDQUFmOztBQVlBTyxPQUFPRyxTQUFQLEdBQW1CO0FBQ2pCSixtQkFBaUIsaUJBQVVLLElBQVYsQ0FBZUMsVUFEZjtBQUVqQkosY0FBWSxpQkFBVUssTUFBVixDQUFpQkQ7QUFGWixDQUFuQjs7a0JBS2VMLE07O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hcmMvd2ViZGV2L2Jvb2siLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4vL2ltcG9ydCBMaW5rIGZyb20gJ25leHQvcHJlZmV0Y2gnXG5cblxuY29uc3QgbGlua3MgPSBbXG4gIHsgaHJlZjogJy8nLCB0ZXh0OiAnSG9tZScgfSxcbiAgeyBocmVmOiAnL2Rhc2hib2FyZHMnLCB0ZXh0OiAnRGFzaGJvYXJkcycsIGF1dGhSZXF1aXJlZDogZmFsc2UgfSxcbiAgeyBocmVmOiAnL2Fib3V0JywgdGV4dDogJ0Fib3V0JyB9LFxuICB7IGhyZWY6ICcvYXV0aC9zaWduLWluJywgdGV4dDogJ1NpZ24gSW4nLCBhbm9ueW1vdXNPbmx5OiB0cnVlIH0sXG4gIHsgaHJlZjogJy9hdXRoL3NpZ24tb2ZmJywgdGV4dDogJ1NpZ24gT2ZmJywgYXV0aFJlcXVpcmVkOiB0cnVlIH1cbl1cblxuY29uc3QgZ2V0QWxsb3dlZExpbmtzID0gaXNBdXRoZW50aWNhdGVkID0+IGxpbmtzLmZpbHRlcihsID0+ICFsLmF1dGhSZXF1aXJlZCB8fCAobC5hdXRoUmVxdWlyZWQgJiYgaXNBdXRoZW50aWNhdGVkKSlcbiAgLmZpbHRlcihsID0+ICFpc0F1dGhlbnRpY2F0ZWQgfHwgKGlzQXV0aGVudGljYXRlZCAmJiAhbC5hbm9ueW1vdXNPbmx5KSlcblxuY29uc3QgSGVhZGVyID0gKHsgaXNBdXRoZW50aWNhdGVkLCBjdXJyZW50VXJsIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICB7Z2V0QWxsb3dlZExpbmtzKGlzQXV0aGVudGljYXRlZCkubWFwKGwgPT4gKFxuICAgICAgPExpbmsga2V5PXtsLmhyZWZ9IGhyZWY9e2wuaHJlZn0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17Y3VycmVudFVybCA9PT0gbC5ocmVmID8gXCJoZWFkZXJsaW5rIGFjdGl2ZVwiIDogXCJoZWFkZXJsaW5rXCJ9PlxuICAgICAgICAgIHtsLnRleHR9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApKX1cbiAgPC9kaXY+XG4pXG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY3VycmVudFVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG4gIC8vIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBcbiAgLy8gICAgICAgLmhlYWRlcmxpbmsge1xuICAvLyAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgLy8gICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gIC8vICAgICAgICAgY29sb3I6ICM5OTk7XG4gIC8vICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAvLyAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC8vICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgLy8gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAvLyAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgLy8gICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIC8vICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjI1cztcbiAgLy8gICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAvLyAgICAgICB9XG4gIC8vICAgICAgIC5oZWFkZXJsaW5rOmhvdmVyIHtcbiAgLy8gICAgICAgICBjb2xvcjogIzMzMztcbiAgLy8gICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgICAgLmhlYWRlcmxpbmsuYWN0aXZlIHtcbiAgLy8gICAgICAgICBjb2xvcjogIzMzMztcbiAgLy8gICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMztcbiAgLy8gICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcbiAgLy8gICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAvLyAgICAgICB9XG4gICAgICAgIFxuICAgICAgXG4gIC8vICAgIGB9PC9zdHlsZT4iXX0=