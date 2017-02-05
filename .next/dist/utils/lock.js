'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.show = undefined;

var _auth = require('./auth');

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLock = function getLock(options) {
  var config = require('../config.json');
  var Auth0Lock = require('auth0-lock').default;
  return new Auth0Lock(config.AUTH0_CLIENT_ID, config.AUTH0_CLIENT_DOMAIN, options);
};

var getBaseUrl = function getBaseUrl() {
  return window.location.protocol + '//' + window.location.host;
};

var getOptions = function getOptions(container) {
  var secret = _uuid2.default.v4();
  (0, _auth.setSecret)(secret);
  return {
    container: container,
    closable: false,
    auth: {
      responseType: 'token',
      redirectUrl: getBaseUrl() + '/auth/signed-in',
      params: {
        scope: 'openid profile email',
        state: secret
      }
    }
  };
};

var show = exports.show = function show(container) {
  return getLock(getOptions(container)).show();
};
var logout = exports.logout = function logout() {
  return getLock().logout({ returnTo: getBaseUrl() });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2xvY2suanMiXSwibmFtZXMiOlsiZ2V0TG9jayIsIm9wdGlvbnMiLCJjb25maWciLCJyZXF1aXJlIiwiQXV0aDBMb2NrIiwiZGVmYXVsdCIsIkFVVEgwX0NMSUVOVF9JRCIsIkFVVEgwX0NMSUVOVF9ET01BSU4iLCJnZXRCYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJnZXRPcHRpb25zIiwiY29udGFpbmVyIiwic2VjcmV0IiwidjQiLCJjbG9zYWJsZSIsImF1dGgiLCJyZXNwb25zZVR5cGUiLCJyZWRpcmVjdFVybCIsInBhcmFtcyIsInNjb3BlIiwic3RhdGUiLCJzaG93IiwibG9nb3V0IiwicmV0dXJuVG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVLENBQUNDLE9BQUQsRUFBYTtBQUMzQixNQUFNQyxTQUFTQyxRQUFRLGdCQUFSLENBQWY7QUFDQSxNQUFNQyxZQUFZRCxRQUFRLFlBQVIsRUFBc0JFLE9BQXhDO0FBQ0EsU0FBTyxJQUFJRCxTQUFKLENBQWNGLE9BQU9JLGVBQXJCLEVBQXNDSixPQUFPSyxtQkFBN0MsRUFBa0VOLE9BQWxFLENBQVA7QUFDRCxDQUpEOztBQU1BLElBQU1PLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQVNDLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQXpCLFVBQXNDRixPQUFPQyxRQUFQLENBQWdCRSxJQUF0RDtBQUFBLENBQW5COztBQUVBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxTQUFELEVBQWU7QUFDaEMsTUFBTUMsU0FBUyxlQUFLQyxFQUFMLEVBQWY7QUFDQSx1QkFBVUQsTUFBVjtBQUNBLFNBQU87QUFDTEQsd0JBREs7QUFFTEcsY0FBVSxLQUZMO0FBR0xDLFVBQU07QUFDSkMsb0JBQWMsT0FEVjtBQUVKQyxtQkFBZ0JaLFlBQWhCLG9CQUZJO0FBR0phLGNBQVE7QUFDTkMsZUFBTyxzQkFERDtBQUVOQyxlQUFPUjtBQUZEO0FBSEo7QUFIRCxHQUFQO0FBWUQsQ0FmRDs7QUFpQk8sSUFBTVMsc0JBQU8sU0FBUEEsSUFBTyxDQUFDVixTQUFEO0FBQUEsU0FBZWQsUUFBUWEsV0FBV0MsU0FBWCxDQUFSLEVBQStCVSxJQUEvQixFQUFmO0FBQUEsQ0FBYjtBQUNBLElBQU1DLDBCQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFNekIsVUFBVXlCLE1BQVYsQ0FBaUIsRUFBRUMsVUFBVWxCLFlBQVosRUFBakIsQ0FBTjtBQUFBLENBQWYiLCJmaWxlIjoibG9jay5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXJjL3dlYmRldi9ib29rIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0U2VjcmV0IH0gZnJvbSAnLi9hdXRoJ1xuXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJ1xuXG5jb25zdCBnZXRMb2NrID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnLmpzb24nKVxuICBjb25zdCBBdXRoMExvY2sgPSByZXF1aXJlKCdhdXRoMC1sb2NrJykuZGVmYXVsdFxuICByZXR1cm4gbmV3IEF1dGgwTG9jayhjb25maWcuQVVUSDBfQ0xJRU5UX0lELCBjb25maWcuQVVUSDBfQ0xJRU5UX0RPTUFJTiwgb3B0aW9ucylcbn1cblxuY29uc3QgZ2V0QmFzZVVybCA9ICgpID0+IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9YFxuXG5jb25zdCBnZXRPcHRpb25zID0gKGNvbnRhaW5lcikgPT4ge1xuICBjb25zdCBzZWNyZXQgPSB1dWlkLnY0KClcbiAgc2V0U2VjcmV0KHNlY3JldClcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgY2xvc2FibGU6IGZhbHNlLFxuICAgIGF1dGg6IHtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3Rva2VuJyxcbiAgICAgIHJlZGlyZWN0VXJsOiBgJHtnZXRCYXNlVXJsKCl9L2F1dGgvc2lnbmVkLWluYCxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzY29wZTogJ29wZW5pZCBwcm9maWxlIGVtYWlsJyxcbiAgICAgICAgc3RhdGU6IHNlY3JldFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2hvdyA9IChjb250YWluZXIpID0+IGdldExvY2soZ2V0T3B0aW9ucyhjb250YWluZXIpKS5zaG93KClcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiBnZXRMb2NrKCkubG9nb3V0KHsgcmV0dXJuVG86IGdldEJhc2VVcmwoKSB9KSJdfQ==