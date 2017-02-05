module.exports =
webpackJsonp([13],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(142);
	module.exports = __webpack_require__(1116);


/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(33)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.checkSecret = exports.setSecret = exports.getUserFromLocalStorage = exports.getUserFromCookie = exports.unsetToken = exports.setToken = exports.extractInfoFromHash = undefined;
	
	var _stringify = __webpack_require__(43);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _jwtDecode = __webpack_require__(136);
	
	var _jwtDecode2 = _interopRequireDefault(_jwtDecode);
	
	var _jsCookie = __webpack_require__(133);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getQueryParams = function getQueryParams() {
	  var params = {};
	  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, function ($0, $1, $2, $3) {
	    params[$1] = $3;
	  });
	  return params;
	};
	
	var extractInfoFromHash = exports.extractInfoFromHash = function extractInfoFromHash() {
	  if (!process.browser) {
	    return undefined;
	  }
	
	  var _getQueryParams = getQueryParams(),
	      id_token = _getQueryParams.id_token,
	      state = _getQueryParams.state;
	
	  return { token: id_token, secret: state };
	};
	
	var setToken = exports.setToken = function setToken(token) {
	  if (!process.browser) {
	    return;
	  }
	  window.localStorage.setItem('token', token);
	  window.localStorage.setItem('user', (0, _stringify2.default)((0, _jwtDecode2.default)(token)));
	  _jsCookie2.default.set('jwt', token);
	};
	
	var unsetToken = exports.unsetToken = function unsetToken() {
	  if (!process.browser) {
	    return;
	  }
	  window.localStorage.removeItem('token');
	  window.localStorage.removeItem('user');
	  window.localStorage.removeItem('secret');
	  _jsCookie2.default.remove('jwt');
	
	  window.localStorage.setItem('logout', Date.now());
	};
	
	var getUserFromCookie = exports.getUserFromCookie = function getUserFromCookie(req) {
	  if (!req.headers.cookie) {
	    return undefined;
	  }
	  var jwtCookie = req.headers.cookie.split(';').find(function (c) {
	    return c.trim().startsWith('jwt=');
	  });
	  if (!jwtCookie) {
	    return undefined;
	  }
	  var jwt = jwtCookie.split('=')[1];
	  return (0, _jwtDecode2.default)(jwt);
	};
	
	var getUserFromLocalStorage = exports.getUserFromLocalStorage = function getUserFromLocalStorage() {
	  var json = window.localStorage.user;
	  return json ? JSON.parse(json) : undefined;
	};
	
	var setSecret = exports.setSecret = function setSecret(secret) {
	  return window.localStorage.setItem('secret', secret);
	};
	
	var checkSecret = exports.checkSecret = function checkSecret(secret) {
	  return window.localStorage.secret === secret;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2F1dGguanMiXSwibmFtZXMiOlsiZ2V0UXVlcnlQYXJhbXMiLCJwYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlIiwiJDAiLCIkMSIsIiQyIiwiJDMiLCJleHRyYWN0SW5mb0Zyb21IYXNoIiwicHJvY2VzcyIsImJyb3dzZXIiLCJ1bmRlZmluZWQiLCJpZF90b2tlbiIsInN0YXRlIiwidG9rZW4iLCJzZWNyZXQiLCJzZXRUb2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZXQiLCJ1bnNldFRva2VuIiwicmVtb3ZlSXRlbSIsInJlbW92ZSIsIkRhdGUiLCJub3ciLCJnZXRVc2VyRnJvbUNvb2tpZSIsInJlcSIsImhlYWRlcnMiLCJjb29raWUiLCJqd3RDb29raWUiLCJzcGxpdCIsImZpbmQiLCJjIiwidHJpbSIsInN0YXJ0c1dpdGgiLCJqd3QiLCJnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSIsImpzb24iLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwic2V0U2VjcmV0IiwiY2hlY2tTZWNyZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLE1BQU1DLFNBQVMsRUFBZjtBQUNBQyxTQUFPQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsT0FBckIsQ0FBNkIsMkJBQTdCLEVBQTBELFVBQUNDLEVBQUQsRUFBS0MsRUFBTCxFQUFTQyxFQUFULEVBQWFDLEVBQWIsRUFBb0I7QUFDNUVSLFdBQU9NLEVBQVAsSUFBYUUsRUFBYjtBQUNELEdBRkQ7QUFHQSxTQUFPUixNQUFQO0FBQ0QsQ0FORDs7QUFRTyxJQUFNUyxvREFBc0IsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ3ZDLE1BQUksQ0FBQ0MsUUFBUUMsT0FBYixFQUFzQjtBQUNwQixXQUFPQyxTQUFQO0FBQ0Q7O0FBSHNDLHdCQUliYixnQkFKYTtBQUFBLE1BSWhDYyxRQUpnQyxtQkFJaENBLFFBSmdDO0FBQUEsTUFJdEJDLEtBSnNCLG1CQUl0QkEsS0FKc0I7O0FBS3ZDLFNBQU8sRUFBQ0MsT0FBT0YsUUFBUixFQUFrQkcsUUFBUUYsS0FBMUIsRUFBUDtBQUNELENBTk07O0FBUUEsSUFBTUcsOEJBQVcsU0FBWEEsUUFBVyxDQUFDRixLQUFELEVBQVc7QUFDakMsTUFBSSxDQUFDTCxRQUFRQyxPQUFiLEVBQXNCO0FBQ3BCO0FBQ0Q7QUFDRFYsU0FBT2lCLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDSixLQUFyQztBQUNBZCxTQUFPaUIsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsRUFBb0MseUJBQWUseUJBQVVKLEtBQVYsQ0FBZixDQUFwQztBQUNBLHFCQUFPSyxHQUFQLENBQVcsS0FBWCxFQUFrQkwsS0FBbEI7QUFDRCxDQVBNOztBQVNBLElBQU1NLGtDQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUM5QixNQUFJLENBQUNYLFFBQVFDLE9BQWIsRUFBc0I7QUFDcEI7QUFDRDtBQUNEVixTQUFPaUIsWUFBUCxDQUFvQkksVUFBcEIsQ0FBK0IsT0FBL0I7QUFDQXJCLFNBQU9pQixZQUFQLENBQW9CSSxVQUFwQixDQUErQixNQUEvQjtBQUNBckIsU0FBT2lCLFlBQVAsQ0FBb0JJLFVBQXBCLENBQStCLFFBQS9CO0FBQ0EscUJBQU9DLE1BQVAsQ0FBYyxLQUFkOztBQUVBdEIsU0FBT2lCLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFFBQTVCLEVBQXNDSyxLQUFLQyxHQUFMLEVBQXRDO0FBQ0QsQ0FWTTs7QUFZQSxJQUFNQyxnREFBb0IsU0FBcEJBLGlCQUFvQixDQUFDQyxHQUFELEVBQVM7QUFDeEMsTUFBSSxDQUFDQSxJQUFJQyxPQUFKLENBQVlDLE1BQWpCLEVBQXlCO0FBQ3ZCLFdBQU9qQixTQUFQO0FBQ0Q7QUFDRCxNQUFNa0IsWUFBWUgsSUFBSUMsT0FBSixDQUFZQyxNQUFaLENBQW1CRSxLQUFuQixDQUF5QixHQUF6QixFQUE4QkMsSUFBOUIsQ0FBbUM7QUFBQSxXQUFLQyxFQUFFQyxJQUFGLEdBQVNDLFVBQVQsQ0FBb0IsTUFBcEIsQ0FBTDtBQUFBLEdBQW5DLENBQWxCO0FBQ0EsTUFBSSxDQUFDTCxTQUFMLEVBQWdCO0FBQ2QsV0FBT2xCLFNBQVA7QUFDRDtBQUNELE1BQU13QixNQUFNTixVQUFVQyxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLENBQXJCLENBQVo7QUFDQSxTQUFPLHlCQUFVSyxHQUFWLENBQVA7QUFDRCxDQVZNOztBQVlBLElBQU1DLDREQUEwQixTQUExQkEsdUJBQTBCLEdBQU07QUFDM0MsTUFBTUMsT0FBT3JDLE9BQU9pQixZQUFQLENBQW9CcUIsSUFBakM7QUFDQSxTQUFPRCxPQUFPRSxLQUFLQyxLQUFMLENBQVdILElBQVgsQ0FBUCxHQUEwQjFCLFNBQWpDO0FBQ0QsQ0FITTs7QUFLQSxJQUFNOEIsZ0NBQVksU0FBWkEsU0FBWSxDQUFDMUIsTUFBRDtBQUFBLFNBQVlmLE9BQU9pQixZQUFQLENBQW9CQyxPQUFwQixDQUE0QixRQUE1QixFQUFzQ0gsTUFBdEMsQ0FBWjtBQUFBLENBQWxCOztBQUVBLElBQU0yQixvQ0FBYyxTQUFkQSxXQUFjLENBQUMzQixNQUFEO0FBQUEsU0FBWWYsT0FBT2lCLFlBQVAsQ0FBb0JGLE1BQXBCLEtBQStCQSxNQUEzQztBQUFBLENBQXBCIiwiZmlsZSI6ImF1dGguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFyYy93ZWJkZXYvYm9vayIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSdcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJ1xuXG5jb25zdCBnZXRRdWVyeVBhcmFtcyA9ICgpID0+IHtcbiAgY29uc3QgcGFyYW1zID0ge31cbiAgd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvKFteKD98Iyk9Jl0rKSg9KFteJl0qKSk/L2csICgkMCwgJDEsICQyLCAkMykgPT4ge1xuICAgIHBhcmFtc1skMV0gPSAkM1xuICB9KVxuICByZXR1cm4gcGFyYW1zXG59XG5cbmV4cG9ydCBjb25zdCBleHRyYWN0SW5mb0Zyb21IYXNoID0gKCkgPT4ge1xuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICBjb25zdCB7aWRfdG9rZW4sIHN0YXRlfSA9IGdldFF1ZXJ5UGFyYW1zKClcbiAgcmV0dXJuIHt0b2tlbjogaWRfdG9rZW4sIHNlY3JldDogc3RhdGV9XG59XG5cbmV4cG9ydCBjb25zdCBzZXRUb2tlbiA9ICh0b2tlbikgPT4ge1xuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVyblxuICB9XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoand0RGVjb2RlKHRva2VuKSkpXG4gIENvb2tpZS5zZXQoJ2p3dCcsIHRva2VuKVxufVxuXG5leHBvcnQgY29uc3QgdW5zZXRUb2tlbiA9ICgpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJylcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzZWNyZXQnKVxuICBDb29raWUucmVtb3ZlKCdqd3QnKVxuXG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nb3V0JywgRGF0ZS5ub3coKSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXJGcm9tQ29va2llID0gKHJlcSkgPT4ge1xuICBpZiAoIXJlcS5oZWFkZXJzLmNvb2tpZSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICBjb25zdCBqd3RDb29raWUgPSByZXEuaGVhZGVycy5jb29raWUuc3BsaXQoJzsnKS5maW5kKGMgPT4gYy50cmltKCkuc3RhcnRzV2l0aCgnand0PScpKVxuICBpZiAoIWp3dENvb2tpZSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICBjb25zdCBqd3QgPSBqd3RDb29raWUuc3BsaXQoJz0nKVsxXVxuICByZXR1cm4gand0RGVjb2RlKGp3dClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBjb25zdCBqc29uID0gd2luZG93LmxvY2FsU3RvcmFnZS51c2VyXG4gIHJldHVybiBqc29uID8gSlNPTi5wYXJzZShqc29uKSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgY29uc3Qgc2V0U2VjcmV0ID0gKHNlY3JldCkgPT4gd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWNyZXQnLCBzZWNyZXQpXG5cbmV4cG9ydCBjb25zdCBjaGVja1NlY3JldCA9IChzZWNyZXQpID0+IHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2VjcmV0ID09PSBzZWNyZXQiXX0=

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/marc/webdev/book/utils/auth.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/marc/webdev/book/utils/auth.js"); } } })();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.1.3
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	;(function (factory) {
		var registeredInModuleLoader = false;
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			registeredInModuleLoader = true;
		}
		if (true) {
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}
	
		function init (converter) {
			function api (key, value, attributes) {
				var result;
				if (typeof document === 'undefined') {
					return;
				}
	
				// Write
	
				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);
	
					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}
	
					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}
	
					if (!converter.write) {
						value = encodeURIComponent(String(value))
							.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}
	
					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);
	
					return (document.cookie = [
						key, '=', value,
						attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
						attributes.path ? '; path=' + attributes.path : '',
						attributes.domain ? '; domain=' + attributes.domain : '',
						attributes.secure ? '; secure' : ''
					].join(''));
				}
	
				// Read
	
				if (!key) {
					result = {};
				}
	
				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;
	
				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');
	
					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}
	
					try {
						var name = parts[0].replace(rdecode, decodeURIComponent);
						cookie = converter.read ?
							converter.read(cookie, name) : converter(cookie, name) ||
							cookie.replace(rdecode, decodeURIComponent);
	
						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}
	
						if (key === name) {
							result = cookie;
							break;
						}
	
						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}
	
				return result;
			}
	
			api.set = api;
			api.get = function (key) {
				return api.call(api, key);
			};
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};
	
			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};
	
			api.withConverter = init;
	
			return api;
		}
	
		return init(function () {});
	}));


/***/ },

/***/ 134:
/***/ function(module, exports) {

	/**
	 * The code was extracted from:
	 * https://github.com/davidchambers/Base64.js
	 */
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function InvalidCharacterError(message) {
	  this.message = message;
	}
	
	InvalidCharacterError.prototype = new Error();
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';
	
	function polyfill (input) {
	  var str = String(input).replace(/=+$/, '');
	  if (str.length % 4 == 1) {
	    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
	  }
	  for (
	    // initialize result and counters
	    var bc = 0, bs, buffer, idx = 0, output = '';
	    // get next character
	    buffer = str.charAt(idx++);
	    // character found in table? initialize bit storage and add its ascii value;
	    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
	      // and if not first of each 4 characters,
	      // convert the first 8 bits to one ascii character
	      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
	  ) {
	    // try to find character in table (0-63, not found => -1)
	    buffer = chars.indexOf(buffer);
	  }
	  return output;
	}
	
	
	module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	var atob = __webpack_require__(134);
	
	function b64DecodeUnicode(str) {
	  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
	    var code = p.charCodeAt(0).toString(16).toUpperCase();
	    if (code.length < 2) {
	      code = '0' + code;
	    }
	    return '%' + code;
	  }));
	}
	
	module.exports = function(str) {
	  var output = str.replace(/-/g, "+").replace(/_/g, "/");
	  switch (output.length % 4) {
	    case 0:
	      break;
	    case 2:
	      output += "==";
	      break;
	    case 3:
	      output += "=";
	      break;
	    default:
	      throw "Illegal base64url string!";
	  }
	
	  try{
	    return b64DecodeUnicode(output);
	  } catch (err) {
	    return atob(output);
	  }
	};


/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var base64_url_decode = __webpack_require__(135);
	
	module.exports = function (token,options) {
	  if (typeof token !== 'string') {
	    throw new Error('Invalid token specified');
	  }
	
	  options = options || {};
	  var pos = options.header === true ? 0 : 1;
	  return JSON.parse(base64_url_decode(token.split('.')[pos]));
	};


/***/ },

/***/ 1116:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(29);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(7);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(22);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(9);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(8);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _auth = __webpack_require__(123);
	
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

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/marc/webdev/book/pages/auth/signed-in.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/marc/webdev/book/pages/auth/signed-in.js"); } } })();
	    (function (Component, route) {
	      if (false) return
	      if (false) return

	      var qs = __webpack_require__(125)
	      var params = qs.parse(__resourceQuery.slice(1))
	      if (params.entry == null) return

	      module.hot.accept()
	      Component.__route = route

	      if (module.hot.status() === 'idle') return

	      var components = next.router.components
	      for (var r in components) {
	        if (!components.hasOwnProperty(r)) continue

	        if (components[r].Component.__route === route) {
	          next.router.update(r, Component)
	        }
	      }
	    })(module.exports.default || module.exports, "/auth/signed-in")
	  
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), "?entry"))

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L25leHQvfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanM/MzViMDMwNSIsIndlYnBhY2s6Ly8vLi9+L25leHQvfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanM/NDIxNmFkZCIsIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoLmpzPzQyMTZhZGQiLCJ3ZWJwYWNrOi8vLy4vfi9qcy1jb29raWUvc3JjL2pzLmNvb2tpZS5qcz80MjE2YWRkIiwid2VicGFjazovLy8uL34vand0LWRlY29kZS9saWIvYXRvYi5qcz80MjE2YWRkIiwid2VicGFjazovLy8uL34vand0LWRlY29kZS9saWIvYmFzZTY0X3VybF9kZWNvZGUuanM/NDIxNmFkZCIsIndlYnBhY2s6Ly8vLi9+L2p3dC1kZWNvZGUvbGliL2luZGV4LmpzPzQyMTZhZGQiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aC9zaWduZWQtaW4uanM/NDIxNmFkZCJdLCJuYW1lcyI6WyJnZXRRdWVyeVBhcmFtcyIsInBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJlcGxhY2UiLCIkMCIsIiQxIiwiJDIiLCIkMyIsImV4dHJhY3RJbmZvRnJvbUhhc2giLCJwcm9jZXNzIiwiYnJvd3NlciIsInVuZGVmaW5lZCIsImlkX3Rva2VuIiwic3RhdGUiLCJ0b2tlbiIsInNlY3JldCIsInNldFRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNldCIsInVuc2V0VG9rZW4iLCJyZW1vdmVJdGVtIiwicmVtb3ZlIiwiRGF0ZSIsIm5vdyIsImdldFVzZXJGcm9tQ29va2llIiwicmVxIiwiaGVhZGVycyIsImNvb2tpZSIsImp3dENvb2tpZSIsInNwbGl0IiwiZmluZCIsImMiLCJ0cmltIiwic3RhcnRzV2l0aCIsImp3dCIsImdldFVzZXJGcm9tTG9jYWxTdG9yYWdlIiwianNvbiIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJzZXRTZWNyZXQiLCJjaGVja1NlY3JldCIsIlNpZ25lZEluIiwiY29uc29sZSIsImVycm9yIiwicHJvcHMiLCJ1cmwiLCJwdXNoVG8iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQkFBa0IseUQ7Ozs7Ozs7QUNBbEI7QUFDQSx3Q0FBdUMsMEJBQTBCO0FBQ2pFLHlDQUF3QztBQUN4QztBQUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixPQUFNQyxTQUFTLEVBQWY7QUFDQUMsVUFBT0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLE9BQXJCLENBQTZCLDJCQUE3QixFQUEwRCxVQUFDQyxFQUFELEVBQUtDLEVBQUwsRUFBU0MsRUFBVCxFQUFhQyxFQUFiLEVBQW9CO0FBQzVFUixZQUFPTSxFQUFQLElBQWFFLEVBQWI7QUFDRCxJQUZEO0FBR0EsVUFBT1IsTUFBUDtBQUNELEVBTkQ7O0FBUU8sS0FBTVMsb0RBQXNCLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUN2QyxPQUFJLENBQUNDLFFBQVFDLE9BQWIsRUFBc0I7QUFDcEIsWUFBT0MsU0FBUDtBQUNEOztBQUhzQyx5QkFJYmIsZ0JBSmE7QUFBQSxPQUloQ2MsUUFKZ0MsbUJBSWhDQSxRQUpnQztBQUFBLE9BSXRCQyxLQUpzQixtQkFJdEJBLEtBSnNCOztBQUt2QyxVQUFPLEVBQUNDLE9BQU9GLFFBQVIsRUFBa0JHLFFBQVFGLEtBQTFCLEVBQVA7QUFDRCxFQU5NOztBQVFBLEtBQU1HLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ0YsS0FBRCxFQUFXO0FBQ2pDLE9BQUksQ0FBQ0wsUUFBUUMsT0FBYixFQUFzQjtBQUNwQjtBQUNEO0FBQ0RWLFVBQU9pQixZQUFQLENBQW9CQyxPQUFwQixDQUE0QixPQUE1QixFQUFxQ0osS0FBckM7QUFDQWQsVUFBT2lCLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCLEVBQW9DLHlCQUFlLHlCQUFVSixLQUFWLENBQWYsQ0FBcEM7QUFDQSxzQkFBT0ssR0FBUCxDQUFXLEtBQVgsRUFBa0JMLEtBQWxCO0FBQ0QsRUFQTTs7QUFTQSxLQUFNTSxrQ0FBYSxTQUFiQSxVQUFhLEdBQU07QUFDOUIsT0FBSSxDQUFDWCxRQUFRQyxPQUFiLEVBQXNCO0FBQ3BCO0FBQ0Q7QUFDRFYsVUFBT2lCLFlBQVAsQ0FBb0JJLFVBQXBCLENBQStCLE9BQS9CO0FBQ0FyQixVQUFPaUIsWUFBUCxDQUFvQkksVUFBcEIsQ0FBK0IsTUFBL0I7QUFDQXJCLFVBQU9pQixZQUFQLENBQW9CSSxVQUFwQixDQUErQixRQUEvQjtBQUNBLHNCQUFPQyxNQUFQLENBQWMsS0FBZDs7QUFFQXRCLFVBQU9pQixZQUFQLENBQW9CQyxPQUFwQixDQUE0QixRQUE1QixFQUFzQ0ssS0FBS0MsR0FBTCxFQUF0QztBQUNELEVBVk07O0FBWUEsS0FBTUMsZ0RBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3hDLE9BQUksQ0FBQ0EsSUFBSUMsT0FBSixDQUFZQyxNQUFqQixFQUF5QjtBQUN2QixZQUFPakIsU0FBUDtBQUNEO0FBQ0QsT0FBTWtCLFlBQVlILElBQUlDLE9BQUosQ0FBWUMsTUFBWixDQUFtQkUsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEJDLElBQTlCLENBQW1DO0FBQUEsWUFBS0MsRUFBRUMsSUFBRixHQUFTQyxVQUFULENBQW9CLE1BQXBCLENBQUw7QUFBQSxJQUFuQyxDQUFsQjtBQUNBLE9BQUksQ0FBQ0wsU0FBTCxFQUFnQjtBQUNkLFlBQU9sQixTQUFQO0FBQ0Q7QUFDRCxPQUFNd0IsTUFBTU4sVUFBVUMsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFaO0FBQ0EsVUFBTyx5QkFBVUssR0FBVixDQUFQO0FBQ0QsRUFWTTs7QUFZQSxLQUFNQyw0REFBMEIsU0FBMUJBLHVCQUEwQixHQUFNO0FBQzNDLE9BQU1DLE9BQU9yQyxPQUFPaUIsWUFBUCxDQUFvQnFCLElBQWpDO0FBQ0EsVUFBT0QsT0FBT0UsS0FBS0MsS0FBTCxDQUFXSCxJQUFYLENBQVAsR0FBMEIxQixTQUFqQztBQUNELEVBSE07O0FBS0EsS0FBTThCLGdDQUFZLFNBQVpBLFNBQVksQ0FBQzFCLE1BQUQ7QUFBQSxVQUFZZixPQUFPaUIsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsUUFBNUIsRUFBc0NILE1BQXRDLENBQVo7QUFBQSxFQUFsQjs7QUFFQSxLQUFNMkIsb0NBQWMsU0FBZEEsV0FBYyxDQUFDM0IsTUFBRDtBQUFBLFVBQVlmLE9BQU9pQixZQUFQLENBQW9CRixNQUFwQixLQUErQkEsTUFBM0M7QUFBQSxFQUFwQjs7Ozs7Ozs7Ozs7QUMzRFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxTQUFRLHNCQUFzQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNEI7QUFDNUIsMEJBQXlCO0FBQ3pCLDRCQUEyQjtBQUMzQiw0QkFBMkI7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNERBQTJEO0FBQzNELDhCQUE2QixFQUFFO0FBQy9COztBQUVBLFVBQVMsb0JBQW9CO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCLEVBQUM7Ozs7Ozs7O0FDM0pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7O0FDckNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaENBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7Ozs7QUFFQTs7OztLQUVxQjRCLFE7Ozs7Ozs7Ozs7eUNBS0U7QUFBQSxrQ0FDSyxnQ0FETDtBQUFBLFdBQ1o3QixLQURZLHdCQUNaQSxLQURZO0FBQUEsV0FDTEMsTUFESyx3QkFDTEEsTUFESzs7QUFFbkIsV0FBSSxDQUFDLHVCQUFZQSxNQUFaLENBQUQsSUFBd0IsQ0FBQ0QsS0FBN0IsRUFBb0M7QUFDbEM4QixpQkFBUUMsS0FBUixDQUFjLDZDQUFkO0FBQ0Q7QUFDRCwyQkFBUy9CLEtBQVQ7QUFDQSxZQUFLZ0MsS0FBTCxDQUFXQyxHQUFYLENBQWVDLE1BQWYsQ0FBc0IsR0FBdEI7QUFDRDs7OzhCQUNTO0FBQ1IsY0FBTyxJQUFQO0FBQ0Q7OztHQWZtQyxnQkFBTUMsUyxVQUNuQ0MsUyxHQUFZO0FBQ2pCSCxRQUFLLGlCQUFVSSxNQUFWLENBQWlCQztBQURMLEU7bUJBREFULFEiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hdXRoL3NpZ25lZC1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZXh0L34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgMTMiLCJ2YXIgY29yZSAgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJylcbiAgLCAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0ge3N0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnl9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmV4dC9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyAxMyIsImltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSdcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJ1xuXG5jb25zdCBnZXRRdWVyeVBhcmFtcyA9ICgpID0+IHtcbiAgY29uc3QgcGFyYW1zID0ge31cbiAgd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvKFteKD98Iyk9Jl0rKSg9KFteJl0qKSk/L2csICgkMCwgJDEsICQyLCAkMykgPT4ge1xuICAgIHBhcmFtc1skMV0gPSAkM1xuICB9KVxuICByZXR1cm4gcGFyYW1zXG59XG5cbmV4cG9ydCBjb25zdCBleHRyYWN0SW5mb0Zyb21IYXNoID0gKCkgPT4ge1xuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICBjb25zdCB7aWRfdG9rZW4sIHN0YXRlfSA9IGdldFF1ZXJ5UGFyYW1zKClcbiAgcmV0dXJuIHt0b2tlbjogaWRfdG9rZW4sIHNlY3JldDogc3RhdGV9XG59XG5cbmV4cG9ydCBjb25zdCBzZXRUb2tlbiA9ICh0b2tlbikgPT4ge1xuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVyblxuICB9XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoand0RGVjb2RlKHRva2VuKSkpXG4gIENvb2tpZS5zZXQoJ2p3dCcsIHRva2VuKVxufVxuXG5leHBvcnQgY29uc3QgdW5zZXRUb2tlbiA9ICgpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJylcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzZWNyZXQnKVxuICBDb29raWUucmVtb3ZlKCdqd3QnKVxuXG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nb3V0JywgRGF0ZS5ub3coKSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXJGcm9tQ29va2llID0gKHJlcSkgPT4ge1xuICBpZiAoIXJlcS5oZWFkZXJzLmNvb2tpZSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICBjb25zdCBqd3RDb29raWUgPSByZXEuaGVhZGVycy5jb29raWUuc3BsaXQoJzsnKS5maW5kKGMgPT4gYy50cmltKCkuc3RhcnRzV2l0aCgnand0PScpKVxuICBpZiAoIWp3dENvb2tpZSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICBjb25zdCBqd3QgPSBqd3RDb29raWUuc3BsaXQoJz0nKVsxXVxuICByZXR1cm4gand0RGVjb2RlKGp3dClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBjb25zdCBqc29uID0gd2luZG93LmxvY2FsU3RvcmFnZS51c2VyXG4gIHJldHVybiBqc29uID8gSlNPTi5wYXJzZShqc29uKSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgY29uc3Qgc2V0U2VjcmV0ID0gKHNlY3JldCkgPT4gd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWNyZXQnLCBzZWNyZXQpXG5cbmV4cG9ydCBjb25zdCBjaGVja1NlY3JldCA9IChzZWNyZXQpID0+IHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2VjcmV0ID09PSBzZWNyZXRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9hdXRoLmpzIiwiLyohXG4gKiBKYXZhU2NyaXB0IENvb2tpZSB2Mi4xLjNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gKlxuICogQ29weXJpZ2h0IDIwMDYsIDIwMTUgS2xhdXMgSGFydGwgJiBGYWduZXIgQnJhY2tcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdHZhciByZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSBmYWxzZTtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICghcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyKSB7XG5cdFx0dmFyIE9sZENvb2tpZXMgPSB3aW5kb3cuQ29va2llcztcblx0XHR2YXIgYXBpID0gd2luZG93LkNvb2tpZXMgPSBmYWN0b3J5KCk7XG5cdFx0YXBpLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cuQ29va2llcyA9IE9sZENvb2tpZXM7XG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH07XG5cdH1cbn0oZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBleHRlbmQgKCkge1xuXHRcdHZhciBpID0gMDtcblx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0Zm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhdHRyaWJ1dGVzID0gYXJndW1lbnRzWyBpIF07XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRyZXN1bHRba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQgKGNvbnZlcnRlcikge1xuXHRcdGZ1bmN0aW9uIGFwaSAoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcykge1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV3JpdGVcblxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRcdHBhdGg6ICcvJ1xuXHRcdFx0XHR9LCBhcGkuZGVmYXVsdHMsIGF0dHJpYnV0ZXMpO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdHZhciBleHBpcmVzID0gbmV3IERhdGUoKTtcblx0XHRcdFx0XHRleHBpcmVzLnNldE1pbGxpc2Vjb25kcyhleHBpcmVzLmdldE1pbGxpc2Vjb25kcygpICsgYXR0cmlidXRlcy5leHBpcmVzICogODY0ZSs1KTtcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBleHBpcmVzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXN1bHQgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0dmFsdWUgPSByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHRcdGlmICghY29udmVydGVyLndyaXRlKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSlcblx0XHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbHVlID0gY29udmVydGVyLndyaXRlKHZhbHVlLCBrZXkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0a2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhrZXkpKTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0gW1xuXHRcdFx0XHRcdGtleSwgJz0nLCB2YWx1ZSxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPyAnOyBleHBpcmVzPScgKyBhdHRyaWJ1dGVzLmV4cGlyZXMudG9VVENTdHJpbmcoKSA6ICcnLCAvLyB1c2UgZXhwaXJlcyBhdHRyaWJ1dGUsIG1heC1hZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0XHRcdGF0dHJpYnV0ZXMucGF0aCA/ICc7IHBhdGg9JyArIGF0dHJpYnV0ZXMucGF0aCA6ICcnLFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuZG9tYWluID8gJzsgZG9tYWluPScgKyBhdHRyaWJ1dGVzLmRvbWFpbiA6ICcnLFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuc2VjdXJlID8gJzsgc2VjdXJlJyA6ICcnXG5cdFx0XHRcdF0uam9pbignJykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZWFkXG5cblx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUbyBwcmV2ZW50IHRoZSBmb3IgbG9vcCBpbiB0aGUgZmlyc3QgcGxhY2UgYXNzaWduIGFuIGVtcHR5IGFycmF5XG5cdFx0XHQvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC4gQWxzbyBwcmV2ZW50cyBvZGQgcmVzdWx0IHdoZW5cblx0XHRcdC8vIGNhbGxpbmcgXCJnZXQoKVwiXG5cdFx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdO1xuXHRcdFx0dmFyIHJkZWNvZGUgPSAvKCVbMC05QS1aXXsyfSkrL2c7XG5cdFx0XHR2YXIgaSA9IDA7XG5cblx0XHRcdGZvciAoOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdHZhciBjb29raWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc9Jyk7XG5cblx0XHRcdFx0aWYgKGNvb2tpZS5jaGFyQXQoMCkgPT09ICdcIicpIHtcblx0XHRcdFx0XHRjb29raWUgPSBjb29raWUuc2xpY2UoMSwgLTEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgbmFtZSA9IHBhcnRzWzBdLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0XHRjb29raWUgPSBjb252ZXJ0ZXIucmVhZCA/XG5cdFx0XHRcdFx0XHRjb252ZXJ0ZXIucmVhZChjb29raWUsIG5hbWUpIDogY29udmVydGVyKGNvb2tpZSwgbmFtZSkgfHxcblx0XHRcdFx0XHRcdGNvb2tpZS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cblx0XHRcdFx0XHRpZiAodGhpcy5qc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IGNvb2tpZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbbmFtZV0gPSBjb29raWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBhcGk7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBhcGkuY2FsbChhcGksIGtleSk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBhcGkuYXBwbHkoe1xuXHRcdFx0XHRqc29uOiB0cnVlXG5cdFx0XHR9LCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuXHRcdH07XG5cdFx0YXBpLmRlZmF1bHRzID0ge307XG5cblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0YXBpKGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS53aXRoQ29udmVydGVyID0gaW5pdDtcblxuXHRcdHJldHVybiBhcGk7XG5cdH1cblxuXHRyZXR1cm4gaW5pdChmdW5jdGlvbiAoKSB7fSk7XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vanMtY29va2llL3NyYy9qcy5jb29raWUuanNcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA3IDEzIiwiLyoqXG4gKiBUaGUgY29kZSB3YXMgZXh0cmFjdGVkIGZyb206XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcbiAqL1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5JbnZhbGlkQ2hhcmFjdGVyRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5JbnZhbGlkQ2hhcmFjdGVyRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gcG9seWZpbGwgKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpLnJlcGxhY2UoLz0rJC8sICcnKTtcbiAgaWYgKHN0ci5sZW5ndGggJSA0ID09IDEpIHtcbiAgICB0aHJvdyBuZXcgSW52YWxpZENoYXJhY3RlckVycm9yKFwiJ2F0b2InIGZhaWxlZDogVGhlIHN0cmluZyB0byBiZSBkZWNvZGVkIGlzIG5vdCBjb3JyZWN0bHkgZW5jb2RlZC5cIik7XG4gIH1cbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlcnNcbiAgICB2YXIgYmMgPSAwLCBicywgYnVmZmVyLCBpZHggPSAwLCBvdXRwdXQgPSAnJztcbiAgICAvLyBnZXQgbmV4dCBjaGFyYWN0ZXJcbiAgICBidWZmZXIgPSBzdHIuY2hhckF0KGlkeCsrKTtcbiAgICAvLyBjaGFyYWN0ZXIgZm91bmQgaW4gdGFibGU/IGluaXRpYWxpemUgYml0IHN0b3JhZ2UgYW5kIGFkZCBpdHMgYXNjaWkgdmFsdWU7XG4gICAgfmJ1ZmZlciAmJiAoYnMgPSBiYyAlIDQgPyBicyAqIDY0ICsgYnVmZmVyIDogYnVmZmVyLFxuICAgICAgLy8gYW5kIGlmIG5vdCBmaXJzdCBvZiBlYWNoIDQgY2hhcmFjdGVycyxcbiAgICAgIC8vIGNvbnZlcnQgdGhlIGZpcnN0IDggYml0cyB0byBvbmUgYXNjaWkgY2hhcmFjdGVyXG4gICAgICBiYysrICUgNCkgPyBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUgJiBicyA+PiAoLTIgKiBiYyAmIDYpKSA6IDBcbiAgKSB7XG4gICAgLy8gdHJ5IHRvIGZpbmQgY2hhcmFjdGVyIGluIHRhYmxlICgwLTYzLCBub3QgZm91bmQgPT4gLTEpXG4gICAgYnVmZmVyID0gY2hhcnMuaW5kZXhPZihidWZmZXIpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYXRvYiAmJiB3aW5kb3cuYXRvYi5iaW5kKHdpbmRvdykgfHwgcG9seWZpbGw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vand0LWRlY29kZS9saWIvYXRvYi5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDcgMTMiLCJ2YXIgYXRvYiA9IHJlcXVpcmUoJy4vYXRvYicpO1xuXG5mdW5jdGlvbiBiNjREZWNvZGVVbmljb2RlKHN0cikge1xuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGF0b2Ioc3RyKS5yZXBsYWNlKC8oLikvZywgZnVuY3Rpb24gKG0sIHApIHtcbiAgICB2YXIgY29kZSA9IHAuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgICBpZiAoY29kZS5sZW5ndGggPCAyKSB7XG4gICAgICBjb2RlID0gJzAnICsgY29kZTtcbiAgICB9XG4gICAgcmV0dXJuICclJyArIGNvZGU7XG4gIH0pKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHIpIHtcbiAgdmFyIG91dHB1dCA9IHN0ci5yZXBsYWNlKC8tL2csIFwiK1wiKS5yZXBsYWNlKC9fL2csIFwiL1wiKTtcbiAgc3dpdGNoIChvdXRwdXQubGVuZ3RoICUgNCkge1xuICAgIGNhc2UgMDpcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIG91dHB1dCArPSBcIj09XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBvdXRwdXQgKz0gXCI9XCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgXCJJbGxlZ2FsIGJhc2U2NHVybCBzdHJpbmchXCI7XG4gIH1cblxuICB0cnl7XG4gICAgcmV0dXJuIGI2NERlY29kZVVuaWNvZGUob3V0cHV0KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGF0b2Iob3V0cHV0KTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9qd3QtZGVjb2RlL2xpYi9iYXNlNjRfdXJsX2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDcgMTMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYXNlNjRfdXJsX2RlY29kZSA9IHJlcXVpcmUoJy4vYmFzZTY0X3VybF9kZWNvZGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodG9rZW4sb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHRva2VuICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0b2tlbiBzcGVjaWZpZWQnKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcG9zID0gb3B0aW9ucy5oZWFkZXIgPT09IHRydWUgPyAwIDogMTtcbiAgcmV0dXJuIEpTT04ucGFyc2UoYmFzZTY0X3VybF9kZWNvZGUodG9rZW4uc3BsaXQoJy4nKVtwb3NdKSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2p3dC1kZWNvZGUvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNyAxMyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgc2V0VG9rZW4sIGNoZWNrU2VjcmV0LCBleHRyYWN0SW5mb0Zyb21IYXNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbmVkSW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHVybDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc3Qge3Rva2VuLCBzZWNyZXR9ID0gZXh0cmFjdEluZm9Gcm9tSGFzaCgpXG4gICAgaWYgKCFjaGVja1NlY3JldChzZWNyZXQpIHx8ICF0b2tlbikge1xuICAgICAgY29uc29sZS5lcnJvcignU29tZXRoaW5nIGhhcHBlbmVkIHdpdGggdGhlIFNpZ24gSW4gcmVxdWVzdCcpXG4gICAgfVxuICAgIHNldFRva2VuKHRva2VuKVxuICAgIHRoaXMucHJvcHMudXJsLnB1c2hUbygnLycpXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYXV0aC9zaWduZWQtaW4uanM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9