'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = require('mobx');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  (0, _defineProperty2.default)(target, property, {
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

var UiState = (_class = function UiState() {

  //   autorun(() => console.log( this.selectedChart + "Chart changed from UiState!!" ));

  (0, _classCallCheck3.default)(this, UiState);

  _initDefineProp(this, 'selectedChart', _descriptor, this);

  _initDefineProp(this, 'isModalVisible', _descriptor2, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'selectedChart', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return undefined;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'isModalVisible', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class);


var uiState = new UiState();
exports.default = uiState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy91aXN0YXRlLmpzIl0sIm5hbWVzIjpbIlVpU3RhdGUiLCJ1bmRlZmluZWQiLCJ1aVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR01BLE8sYUFHTCxtQkFBYzs7QUFFWjs7QUFGWTs7QUFBQTs7QUFBQTtBQUdaLEM7OztXQUwwQkMsUzs7Ozs7V0FDRSxLOzs7OztBQU8vQixJQUFNQyxVQUFVLElBQUlGLE9BQUosRUFBaEI7a0JBQ2VFLE8iLCJmaWxlIjoidWlzdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXJjL3dlYmRldi9ib29rIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgYXV0b3J1biB9IGZyb20gJ21vYngnO1xuXG5cbmNsYXNzIFVpU3RhdGUgIHtcbiAgQG9ic2VydmFibGUgc2VsZWN0ZWRDaGFydD0gdW5kZWZpbmVkO1xuICBAb2JzZXJ2YWJsZSBpc01vZGFsVmlzaWJsZSA9IGZhbHNlO1xuIGNvbnN0cnVjdG9yKCkge1xuXG4gICAvLyAgIGF1dG9ydW4oKCkgPT4gY29uc29sZS5sb2coIHRoaXMuc2VsZWN0ZWRDaGFydCArIFwiQ2hhcnQgY2hhbmdlZCBmcm9tIFVpU3RhdGUhIVwiICkpO1xuICB9XG59XG5cbmNvbnN0IHVpU3RhdGUgPSBuZXcgVWlTdGF0ZSgpO1xuZXhwb3J0IGRlZmF1bHQgdWlTdGF0ZTsiXX0=