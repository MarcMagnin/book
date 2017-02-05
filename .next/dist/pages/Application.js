'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactVirtualizedSelect = require('react-virtualized-select');

var _reactVirtualizedSelect2 = _interopRequireDefault(_reactVirtualizedSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cityData = [{ name: 'Abilene' }, { name: 'Addison' }, { name: 'Akron' }, { name: 'Alameda' }, { name: 'Albany' }, { name: 'Albany' }, { name: 'Albany' }, { name: 'Albuquerque' }, { name: 'Alexandria' }, { name: 'Alexandria' }, { name: 'Alhambra' }, { name: 'Aliso Viejo' }, { name: 'Allen' }, { name: 'Allentown' }, { name: 'Alpharetta' }, { name: 'Altamonte Springs' }, { name: 'Altoona' }, { name: 'Amarillo' }, { name: 'Ames' }, { name: 'Anaheim' }, { name: 'Anchorage' }, { name: 'Anderson' }, { name: 'Ankeny' }, { name: 'Ann Arbor' }, { name: 'Annapolis' }, { name: 'Antioch' }, { name: 'Apache Junction' }, { name: 'Apex' }, { name: 'Apopka' }, { name: 'Apple Valley' }, { name: 'Apple Valley' }, { name: 'Appleton' }, { name: 'Arcadia' }, { name: 'Arlington' }, { name: 'Arlington Heights' }, { name: 'Arvada' }, { name: 'Asheville' }, { name: 'Athens-Clarke County' }, { name: 'Atlanta' }, { name: 'Atlantic City' }, { name: 'Attleboro' }, { name: 'Auburn' }, { name: 'Auburn' }, { name: 'Augusta-Richmond County' }, { name: 'Aurora' }, { name: 'Aurora' }, { name: 'Austin' }, { name: 'Aventura' }, { name: 'Avondale' }, { name: 'Azusa' }, { name: 'Bakersfield' }, { name: 'Baldwin Park' }, { name: 'Baltimore' }, { name: 'Barnstable Town' }, { name: 'Bartlett' }, { name: 'Bartlett' }, { name: 'Baton Rouge' }, { name: 'Battle Creek' }, { name: 'Bayonne' }, { name: 'Baytown' }, { name: 'Beaumont' }, { name: 'Beaumont' }, { name: 'Beavercreek' }, { name: 'Beaverton' }, { name: 'Bedford' }, { name: 'Bell Gardens' }, { name: 'Belleville' }, { name: 'Bellevue' }, { name: 'Bellevue' }, { name: 'Bellflower' }, { name: 'Bellingham' }, { name: 'Beloit' }, { name: 'Bend' }, { name: 'Bentonville' }, { name: 'Berkeley' }, { name: 'Berwyn' }, { name: 'Bethlehem' }, { name: 'Beverly' }, { name: 'Billings' }, { name: 'Biloxi' }, { name: 'Binghamton' }, { name: 'Birmingham' }, { name: 'Bismarck' }, { name: 'Blacksburg' }, { name: 'Blaine' }, { name: 'Bloomington' }, { name: 'Bloomington' }, { name: 'Bloomington' }, { name: 'Blue Springs' }, { name: 'Boca Raton' }, { name: 'Boise City' }, { name: 'Bolingbrook' }, { name: 'Bonita Springs' }, { name: 'Bossier City' }, { name: 'Boston' }, { name: 'Boulder' }, { name: 'Bountiful' }, { name: 'Bowie' }, { name: 'Bowling Green' }, { name: 'Boynton Beach' }, { name: 'Bozeman' }, { name: 'Bradenton' }, { name: 'Brea' }, { name: 'Bremerton' }, { name: 'Brentwood' }, { name: 'Brentwood' }, { name: 'Bridgeport' }, { name: 'Bristol' }, { name: 'Brockton' }, { name: 'Broken Arrow' }, { name: 'Brookfield' }, { name: 'Brookhaven' }, { name: 'Brooklyn Park' }, { name: 'Broomfield' }, { name: 'Brownsville' }, { name: 'Bryan' }, { name: 'Buckeye' }, { name: 'Buena Park' }, { name: 'Buffalo' }, { name: 'Buffalo Grove' }, { name: 'Bullhead City' }, { name: 'Burbank' }, { name: 'Burien' }, { name: 'Burleson' }, { name: 'Burlington' }, { name: 'Burlington' }, { name: 'Burnsville' }, { name: 'Caldwell' }, { name: 'Calexico' }, { name: 'Calumet City' }, { name: 'Camarillo' }, { name: 'Cambridge' }, { name: 'Camden' }, { name: 'Campbell' }, { name: 'Canton' }, { name: 'Cape Coral' }, { name: 'Cape Girardeau' }, { name: 'Carlsbad' }, { name: 'Carmel' }, { name: 'Carol Stream' }, { name: 'Carpentersville' }, { name: 'Carrollton' }, { name: 'Carson' }, { name: 'Carson City' }, { name: 'Cary' }, { name: 'Casa Grande' }, { name: 'Casper' }, { name: 'Castle Rock' }, { name: 'Cathedral City' }, { name: 'Cedar Falls' }, { name: 'Cedar Hill' }, { name: 'Cedar Park' }, { name: 'Cedar Rapids' }, { name: 'Centennial' }, { name: 'Ceres' }, { name: 'Cerritos' }, { name: 'Champaign' }, { name: 'Chandler' }, { name: 'Chapel Hill' }, { name: 'Charleston' }, { name: 'Charleston' }, { name: 'Charlotte' }, { name: 'Charlottesville' }, { name: 'Chattanooga' }, { name: 'Chelsea' }, { name: 'Chesapeake' }, { name: 'Chesterfield' }, { name: 'Cheyenne' }, { name: 'Chicago' }, { name: 'Chico' }, { name: 'Chicopee' }, { name: 'Chino' }, { name: 'Chino Hills' }, { name: 'Chula Vista' }, { name: 'Cicero' }, { name: 'Cincinnati' }, { name: 'Citrus Heights' }, { name: 'Clarksville' }, { name: 'Clearwater' }, { name: 'Cleveland' }, { name: 'Cleveland' }, { name: 'Cleveland Heights' }, { name: 'Clifton' }, { name: 'Clovis' }, { name: 'Clovis' }, { name: 'Coachella' }, { name: 'Coconut Creek' }, { name: 'Coeur d\'Alene' }, { name: 'College Station' }, { name: 'Collierville' }, { name: 'Colorado Springs' }, { name: 'Colton' }, { name: 'Columbia' }];

var _default = function (_Component) {
  (0, _inherits3.default)(_default, _Component);

  function _default() {
    (0, _classCallCheck3.default)(this, _default);
    return (0, _possibleConstructorReturn3.default)(this, (_default.__proto__ || (0, _getPrototypeOf2.default)(_default)).apply(this, arguments));
  }

  (0, _createClass3.default)(_default, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'React Virtualized Select'
          ),
          _react2.default.createElement(
            'div',
            null,
            'Enjoy drop-down menus powered by ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/JedWatson/react-select/' },
              _react2.default.createElement(
                'strong',
                null,
                '@JedWatson'
              ),
              '\'s react-select'
            ),
            ' and efficient windowing brought to you by ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/bvaughn/react-virtualized/' },
              _react2.default.createElement(
                'strong',
                null,
                '@bvaughn'
              ),
              '\'s react-virtualized'
            ),
            '.'
          ),
          _react2.default.createElement(
            'div',
            null,
            'Docs and code on ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/bvaughn/react-virtualized-select/' },
              'GitHub'
            ),
            '.'
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(VirtualizedSelectExample, {
            cityData: cityData
          })
        )
      );
    }
  }]);
  return _default;
}(_react.Component);

exports.default = _default;
var VirtualizedSelectExample = (_temp = _class = function (_Component2) {
  (0, _inherits3.default)(VirtualizedSelectExample, _Component2);

  function VirtualizedSelectExample(props) {
    (0, _classCallCheck3.default)(this, VirtualizedSelectExample);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (VirtualizedSelectExample.__proto__ || (0, _getPrototypeOf2.default)(VirtualizedSelectExample)).call(this, props));

    var creatableOptions = [{ label: 'Blue', value: '#00F' }, { label: 'Green', value: '#0F0' }, { label: 'Red', value: '#F00' }];

    _this2.state = {
      clearable: true,
      creatableOptions: creatableOptions,
      disabled: false,
      githubUsers: [],
      multi: false,
      searchable: true,
      selectedCreatable: null,
      selectedCity: null
    };

    return _this2;
  }

  (0, _createClass3.default)(VirtualizedSelectExample, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          cityData = _props.cityData,
          countryData = _props.countryData,
          nameData = _props.nameData;
      var _state = this.state,
          clearable = _state.clearable,
          creatableOptions = _state.creatableOptions,
          disabled = _state.disabled,
          githubUsers = _state.githubUsers,
          multi = _state.multi,
          searchable = _state.searchable,
          selectedCity = _state.selectedCity,
          selectedCountry = _state.selectedCountry,
          selectedCreatable = _state.selectedCreatable,
          selectedGithubUser = _state.selectedGithubUser,
          selectedName = _state.selectedName;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactVirtualizedSelect2.default, {
          autofocus: true,
          labelKey: 'name',
          multi: true,
          onChange: function onChange(selectedCity) {
            console.log(selectedCity);_this3.setState({ selectedCity: selectedCity });
          },
          options: cityData,
          searchable: true,
          simpleValue: true,
          value: this.state.selectedCity,
          valueKey: 'name'
        }),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                defaultChecked: multi,
                name: 'multi',
                onChange: function onChange(event) {
                  return _this3.setState({ multi: event.target.checked });
                },
                type: 'checkbox'
              }),
              'Multi-select?'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                defaultChecked: searchable,
                name: 'searchable',
                onChange: function onChange(event) {
                  return _this3.setState({ searchable: event.target.checked });
                },
                type: 'checkbox'
              }),
              'Searchable?'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                defaultChecked: clearable,
                name: 'clearable',
                onChange: function onChange(event) {
                  return _this3.setState({ clearable: event.target.checked });
                },
                type: 'checkbox'
              }),
              'Clearable?'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                defaultChecked: disabled,
                name: 'disabled',
                onChange: function onChange(event) {
                  return _this3.setState({ disabled: event.target.checked });
                },
                type: 'checkbox'
              }),
              'Disabled?'
            )
          )
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Custom Option Renderer'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Displays a list of world countries using a custom option renderer.'
        ),
        _react2.default.createElement(_reactVirtualizedSelect2.default, {
          labelKey: 'name',
          onChange: function onChange(selectedCountry) {
            return _this3.setState({ selectedCountry: selectedCountry });
          },
          optionRenderer: CountryOptionRenderer,
          optionHeight: 40,
          options: countryData,
          simpleValue: true,
          value: selectedCountry,
          valueKey: 'code'
        }),
        _react2.default.createElement(
          'h4',
          null,
          'Dynamic Height Options'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Displays option-group headers that are sized different than regular options. Demonstrates how to use dynamic option heights feature.'
        ),
        _react2.default.createElement(_reactVirtualizedSelect2.default, {
          labelKey: 'name',
          onChange: function onChange(selectedName) {
            return _this3.setState({ selectedName: selectedName });
          },
          onInputChange: function onInputChange() {
            return _this3._customOptionHeightsSelect && _this3._customOptionHeightsSelect.recomputeOptionHeights();
          },
          optionHeight: function optionHeight(_ref) {
            var option = _ref.option;
            return option.type === 'header' ? 25 : 35;
          },
          optionRenderer: NameOptionRenderer,
          options: nameData,
          ref: function ref(_ref2) {
            return _this3._customOptionHeightsSelect = _ref2;
          },
          searchable: searchable,
          simpleValue: true,
          value: selectedName,
          valueKey: 'name'
        }),
        _react2.default.createElement(
          'h4',
          null,
          'Async Options'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Displays an async ',
          _react2.default.createElement(
            'code',
            null,
            'Select'
          ),
          ' component wired up to search for Github users.'
        ),
        _react2.default.createElement(_reactVirtualizedSelect2.default, {
          async: true,
          backspaceRemoves: false,
          labelKey: 'login',
          loadOptions: this._loadGithubUsers,
          minimumInput: 1,
          onChange: function onChange(selectedGithubUser) {
            return _this3.setState({ selectedGithubUser: selectedGithubUser });
          },
          onValueClick: this._goToGithubUser,
          options: githubUsers,
          value: selectedGithubUser,
          valueKey: 'id'
        }),
        _react2.default.createElement(
          'h4',
          null,
          'Creatable Options'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Displays a ',
          _react2.default.createElement(
            'code',
            null,
            'Select.Creatable'
          ),
          ' component that enables users to create their own options.'
        ),
        _react2.default.createElement(_reactVirtualizedSelect2.default, {
          labelKey: 'label',
          multi: true,
          onChange: function onChange(selectedCreatable) {
            console.log(selectedCreatable);_this3.setState({ selectedCreatable: selectedCreatable });
          },
          optionHeight: 40,
          options: creatableOptions,
          selectComponent: _reactSelect.Creatable,
          simpleValue: true,
          value: selectedCreatable,
          valueKey: 'value'
        })
      );
    }
  }, {
    key: '_goToGithubUser',
    value: function _goToGithubUser(value) {
      window.open(value.html_url);
    }
  }, {
    key: '_loadGithubUsers',
    value: function _loadGithubUsers(input) {
      var _this4 = this;

      return fetch('https://api.github.com/search/users?q=' + input).then(function (response) {
        return response.json();
      }).then(function (json) {
        var githubUsers = json.items;

        _this4.setState({ githubUsers: githubUsers });

        return { options: githubUsers };
      });
    }
  }]);
  return VirtualizedSelectExample;
}(_react.Component), _class.propTypes = {
  cityData: _react.PropTypes.array.isRequired,
  countryData: _react.PropTypes.array.isRequired,
  nameData: _react.PropTypes.array.isRequired
}, _temp);


function CountryOptionRenderer(_ref3) {
  var focusedOption = _ref3.focusedOption,
      focusedOptionIndex = _ref3.focusedOptionIndex,
      focusOption = _ref3.focusOption,
      key = _ref3.key,
      labelKey = _ref3.labelKey,
      option = _ref3.option,
      options = _ref3.options,
      selectValue = _ref3.selectValue,
      style = _ref3.style,
      valueArray = _ref3.valueArray;

  var flagImageUrl = 'https://rawgit.com/hjnilsson/country-flags/master/svg/' + option.code.toLowerCase() + '.svg';

  var classNames = [styles.countryOption];
  if (option === focusedOption) {
    classNames.push(styles.countryOptionFocused);
  }
  if (valueArray.indexOf(option) >= 0) {
    classNames.push(styles.countryOptionSelected);
  }

  return _react2.default.createElement(
    'div',
    {
      className: classNames.join(' '),
      key: key,
      onClick: function onClick() {
        return selectValue(option);
      },
      onMouseOver: function onMouseOver() {
        return focusOption(option);
      },
      style: style
    },
    _react2.default.createElement(
      'label',
      { className: styles.countryLabel },
      option.name
    ),
    _react2.default.createElement('img', {
      className: styles.countryFlag,
      src: flagImageUrl
    })
  );
}

function NameOptionRenderer(_ref4) {
  var focusedOption = _ref4.focusedOption,
      focusedOptionIndex = _ref4.focusedOptionIndex,
      focusOption = _ref4.focusOption,
      key = _ref4.key,
      labelKey = _ref4.labelKey,
      option = _ref4.option,
      optionIndex = _ref4.optionIndex,
      options = _ref4.options,
      selectValue = _ref4.selectValue,
      style = _ref4.style,
      valueArray = _ref4.valueArray;

  var classNames = [styles.nameOption];

  if (option.type === 'header') {
    classNames.push(styles.nameHeader);

    return _react2.default.createElement(
      'div',
      {
        className: classNames.join(' '),
        key: key,
        style: style
      },
      option.name
    );
  } else {
    if (option === focusedOption) {
      classNames.push(styles.nameOptionFocused);
    }
    if (valueArray.indexOf(option) >= 0) {
      classNames.push(styles.nameOptionSelected);
    }

    return _react2.default.createElement(
      'div',
      {
        className: classNames.join(' '),
        key: key,
        onClick: function onClick() {
          return selectValue(option);
        },
        onMouseOver: function onMouseOver() {
          return focusOption(option);
        },
        style: style
      },
      option.name
    );
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0FwcGxpY2F0aW9uLmpzP2VudHJ5Il0sIm5hbWVzIjpbImNpdHlEYXRhIiwibmFtZSIsIlZpcnR1YWxpemVkU2VsZWN0RXhhbXBsZSIsInByb3BzIiwiY3JlYXRhYmxlT3B0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJzdGF0ZSIsImNsZWFyYWJsZSIsImRpc2FibGVkIiwiZ2l0aHViVXNlcnMiLCJtdWx0aSIsInNlYXJjaGFibGUiLCJzZWxlY3RlZENyZWF0YWJsZSIsInNlbGVjdGVkQ2l0eSIsImNvdW50cnlEYXRhIiwibmFtZURhdGEiLCJzZWxlY3RlZENvdW50cnkiLCJzZWxlY3RlZEdpdGh1YlVzZXIiLCJzZWxlY3RlZE5hbWUiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJDb3VudHJ5T3B0aW9uUmVuZGVyZXIiLCJfY3VzdG9tT3B0aW9uSGVpZ2h0c1NlbGVjdCIsInJlY29tcHV0ZU9wdGlvbkhlaWdodHMiLCJvcHRpb24iLCJ0eXBlIiwiTmFtZU9wdGlvblJlbmRlcmVyIiwicmVmIiwiX2xvYWRHaXRodWJVc2VycyIsIl9nb1RvR2l0aHViVXNlciIsIndpbmRvdyIsIm9wZW4iLCJodG1sX3VybCIsImlucHV0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaXRlbXMiLCJvcHRpb25zIiwicHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwiZm9jdXNlZE9wdGlvbiIsImZvY3VzZWRPcHRpb25JbmRleCIsImZvY3VzT3B0aW9uIiwia2V5IiwibGFiZWxLZXkiLCJzZWxlY3RWYWx1ZSIsInN0eWxlIiwidmFsdWVBcnJheSIsImZsYWdJbWFnZVVybCIsImNvZGUiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJjb3VudHJ5T3B0aW9uIiwicHVzaCIsImNvdW50cnlPcHRpb25Gb2N1c2VkIiwiaW5kZXhPZiIsImNvdW50cnlPcHRpb25TZWxlY3RlZCIsImpvaW4iLCJjb3VudHJ5TGFiZWwiLCJjb3VudHJ5RmxhZyIsIm9wdGlvbkluZGV4IiwibmFtZU9wdGlvbiIsIm5hbWVIZWFkZXIiLCJuYW1lT3B0aW9uRm9jdXNlZCIsIm5hbWVPcHRpb25TZWxlY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLElBQUlBLFdBQVcsQ0FDYixFQUFFQyxNQUFNLFNBQVIsRUFEYSxFQUViLEVBQUVBLE1BQU0sU0FBUixFQUZhLEVBR2IsRUFBRUEsTUFBTSxPQUFSLEVBSGEsRUFJYixFQUFFQSxNQUFNLFNBQVIsRUFKYSxFQUtiLEVBQUVBLE1BQU0sUUFBUixFQUxhLEVBTWIsRUFBRUEsTUFBTSxRQUFSLEVBTmEsRUFPYixFQUFFQSxNQUFNLFFBQVIsRUFQYSxFQVFiLEVBQUVBLE1BQU0sYUFBUixFQVJhLEVBU2IsRUFBRUEsTUFBTSxZQUFSLEVBVGEsRUFVYixFQUFFQSxNQUFNLFlBQVIsRUFWYSxFQVdiLEVBQUVBLE1BQU0sVUFBUixFQVhhLEVBWWIsRUFBRUEsTUFBTSxhQUFSLEVBWmEsRUFhYixFQUFFQSxNQUFNLE9BQVIsRUFiYSxFQWNiLEVBQUVBLE1BQU0sV0FBUixFQWRhLEVBZWIsRUFBRUEsTUFBTSxZQUFSLEVBZmEsRUFnQmIsRUFBRUEsTUFBTSxtQkFBUixFQWhCYSxFQWlCYixFQUFFQSxNQUFNLFNBQVIsRUFqQmEsRUFrQmIsRUFBRUEsTUFBTSxVQUFSLEVBbEJhLEVBbUJiLEVBQUVBLE1BQU0sTUFBUixFQW5CYSxFQW9CYixFQUFFQSxNQUFNLFNBQVIsRUFwQmEsRUFxQmIsRUFBRUEsTUFBTSxXQUFSLEVBckJhLEVBc0JiLEVBQUVBLE1BQU0sVUFBUixFQXRCYSxFQXVCYixFQUFFQSxNQUFNLFFBQVIsRUF2QmEsRUF3QmIsRUFBRUEsTUFBTSxXQUFSLEVBeEJhLEVBeUJiLEVBQUVBLE1BQU0sV0FBUixFQXpCYSxFQTBCYixFQUFFQSxNQUFNLFNB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T1ksaUJBQXZCO0FBQ0Q7QUFDRCxRQUFJakIsV0FBV1MsT0FBWCxDQUFtQm5DLE1BQW5CLEtBQThCLENBQWxDLEVBQXFDO0FBQ25DOEIsaUJBQVdHLElBQVgsQ0FBZ0JGLE9BQU9hLGtCQUF2QjtBQUNEOztBQUVELFdBQ0U7QUFBQTtBQUFBO0FBQ0UsbUJBQVdkLFdBQVdPLElBQVgsQ0FBZ0IsR0FBaEIsQ0FEYjtBQUVFLGFBQUtmLEdBRlA7QUFHRSxpQkFBUztBQUFBLGlCQUFNRSxZQUFZeEIsTUFBWixDQUFOO0FBQUEsU0FIWDtBQUlFLHFCQUFhO0FBQUEsaUJBQU1xQixZQUFZckIsTUFBWixDQUFOO0FBQUEsU0FKZjtBQUtFLGVBQU95QjtBQUxUO0FBT0d6QixhQUFPNUI7QUFQVixLQURGO0FBV0Q7QUFDRiIsImZpbGUiOiJBcHBsaWNhdGlvbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXJjL3dlYmRldi9ib29rIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDcmVhdGFibGUgfSBmcm9tICdyZWFjdC1zZWxlY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFZpcnR1YWxpemVkU2VsZWN0IGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkLXNlbGVjdCdcbnZhciBjaXR5RGF0YT0gIFtcbiAgeyBuYW1lOiAnQWJpbGVuZScgfSxcbiAgeyBuYW1lOiAnQWRkaXNvbicgfSxcbiAgeyBuYW1lOiAnQWtyb24nIH0sXG4gIHsgbmFtZTogJ0FsYW1lZGEnIH0sXG4gIHsgbmFtZTogJ0FsYmFueScgfSxcbiAgeyBuYW1lOiAnQWxiYW55JyB9LFxuICB7IG5hbWU6ICdBbGJhbnknIH0sXG4gIHsgbmFtZTogJ0FsYnVxdWVycXVlJyB9LFxuICB7IG5hbWU6ICdBbGV4YW5kcmlhJyB9LFxuICB7IG5hbWU6ICdBbGV4YW5kcmlhJyB9LFxuICB7IG5hbWU6ICdBbGhhbWJyYScgfSxcbiAgeyBuYW1lOiAnQWxpc28gVmllam8nIH0sXG4gIHsgbmFtZTogJ0FsbGVuJyB9LFxuICB7IG5hbWU6ICdBbGxlbnRvd24nIH0sXG4gIHsgbmFtZTogJ0FscGhhcmV0dGEnIH0sXG4gIHsgbmFtZTogJ0FsdGFtb250ZSBTcHJpbmdzJyB9LFxuICB7IG5hbWU6ICdBbHRvb25hJyB9LFxuICB7IG5hbWU6ICdBbWFyaWxsbycgfSxcbiAgeyBuYW1lOiAnQW1lcycgfSxcbiAgeyBuYW1lOiAnQW5haGVpbScgfSxcbiAgeyBuYW1lOiAnQW5jaG9yYWdlJyB9LFxuICB7IG5hbWU6ICdBbmRlcnNvbicgfSxcbiAgeyBuYW1lOiAnQW5rZW55JyB9LFxuICB7IG5hbWU6ICdBbm4gQXJib3InIH0sXG4gIHsgbmFtZTogJ0FubmFwb2xpcycgfSxcbiAgeyBuYW1lOiAnQW50aW9jaCcgfSxcbiAgeyBuYW1lOiAnQXBhY2hlIEp1bmN0aW9uJyB9LFxuICB7IG5hbWU6ICdBcGV4JyB9LFxuICB7IG5hbWU6ICdBcG9wa2EnIH0sXG4gIHsgbmFtZTogJ0FwcGxlIFZhbGxleScgfSxcbiAgeyBuYW1lOiAnQXBwbGUgVmFsbGV5JyB9LFxuICB7IG5hbWU6ICdBcHBsZXRvbicgfSxcbiAgeyBuYW1lOiAnQXJjYWRpYScgfSxcbiAgeyBuYW1lOiAnQXJsaW5ndG9uJyB9LFxuICB7IG5hbWU6ICdBcmxpbmd0b24gSGVpZ2h0cycgfSxcbiAgeyBuYW1lOiAnQXJ2YWRhJyB9LFxuICB7IG5hbWU6ICdBc2hldmlsbGUnIH0sXG4gIHsgbmFtZTogJ0F0aGVucy1DbGFya2UgQ291bnR5JyB9LFxuICB7IG5hbWU6ICdBdGxhbnRhJyB9LFxuICB7IG5hbWU6ICdBdGxhbnRpYyBDaXR5JyB9LFxuICB7IG5hbWU6ICdBdHRsZWJvcm8nIH0sXG4gIHsgbmFtZTogJ0F1YnVybicgfSxcbiAgeyBuYW1lOiAnQXVidXJuJyB9LFxuICB7IG5hbWU6ICdBdWd1c3RhLVJpY2htb25kIENvdW50eScgfSxcbiAgeyBuYW1lOiAnQXVyb3JhJyB9LFxuICB7IG5hbWU6ICdBdXJvcmEnIH0sXG4gIHsgbmFtZTogJ0F1c3RpbicgfSxcbiAgeyBuYW1lOiAnQXZlbnR1cmEnIH0sXG4gIHsgbmFtZTogJ0F2b25kYWxlJyB9LFxuICB7IG5hbWU6ICdBenVzYScgfSxcbiAgeyBuYW1lOiAnQmFrZXJzZmllbGQnIH0sXG4gIHsgbmFtZTogJ0JhbGR3aW4gUGFyaycgfSxcbiAgeyBuYW1lOiAnQmFsdGltb3JlJyB9LFxuICB7IG5hbWU6ICdCYXJuc3RhYmxlIFRvd24nIH0sXG4gIHsgbmFtZTogJ0JhcnRsZXR0JyB9LFxuICB7IG5hbWU6ICdCYXJ0bGV0dCcgfSxcbiAgeyBuYW1lOiAnQmF0b24gUm91Z2UnIH0sXG4gIHsgbmFtZTogJ0JhdHRsZSBDcmVlaycgfSxcbiAgeyBuYW1lOiAnQmF5b25uZScgfSxcbiAgeyBuYW1lOiAnQmF5dG93bicgfSxcbiAgeyBuYW1lOiAnQmVhdW1vbnQnIH0sXG4gIHsgbmFtZTogJ0JlYXVtb250JyB9LFxuICB7IG5hbWU6ICdCZWF2ZXJjcmVlaycgfSxcbiAgeyBuYW1lOiAnQmVhdmVydG9uJyB9LFxuICB7IG5hbWU6ICdCZWRmb3JkJyB9LFxuICB7IG5hbWU6ICdCZWxsIEdhcmRlbnMnIH0sXG4gIHsgbmFtZTogJ0JlbGxldmlsbGUnIH0sXG4gIHsgbmFtZTogJ0JlbGxldnVlJyB9LFxuICB7IG5hbWU6ICdCZWxsZXZ1ZScgfSxcbiAgeyBuYW1lOiAnQmVsbGZsb3dlcicgfSxcbiAgeyBuYW1lOiAnQmVsbGluZ2hhbScgfSxcbiAgeyBuYW1lOiAnQmVsb2l0JyB9LFxuICB7IG5hbWU6ICdCZW5kJyB9LFxuICB7IG5hbWU6ICdCZW50b252aWxsZScgfSxcbiAgeyBuYW1lOiAnQmVya2VsZXknIH0sXG4gIHsgbmFtZTogJ0Jlcnd5bicgfSxcbiAgeyBuYW1lOiAnQmV0aGxlaGVtJyB9LFxuICB7IG5hbWU6ICdCZXZlcmx5JyB9LFxuICB7IG5hbWU6ICdCaWxsaW5ncycgfSxcbiAgeyBuYW1lOiAnQmlsb3hpJyB9LFxuICB7IG5hbWU6ICdCaW5naGFtdG9uJyB9LFxuICB7IG5hbWU6ICdCaXJtaW5naGFtJyB9LFxuICB7IG5hbWU6ICdCaXNtYXJjaycgfSxcbiAgeyBuYW1lOiAnQmxhY2tzYnVyZycgfSxcbiAgeyBuYW1lOiAnQmxhaW5lJyB9LFxuICB7IG5hbWU6ICdCbG9vbWluZ3RvbicgfSxcbiAgeyBuYW1lOiAnQmxvb21pbmd0b24nIH0sXG4gIHsgbmFtZTogJ0Jsb29taW5ndG9uJyB9LFxuICB7IG5hbWU6ICdCbHVlIFNwcmluZ3MnIH0sXG4gIHsgbmFtZTogJ0JvY2EgUmF0b24nIH0sXG4gIHsgbmFtZTogJ0JvaXNlIENpdHknIH0sXG4gIHsgbmFtZTogJ0JvbGluZ2Jyb29rJyB9LFxuICB7IG5hbWU6ICdCb25pdGEgU3ByaW5ncycgfSxcbiAgeyBuYW1lOiAnQm9zc2llciBDaXR5JyB9LFxuICB7IG5hbWU6ICdCb3N0b24nIH0sXG4gIHsgbmFtZTogJ0JvdWxkZXInIH0sXG4gIHsgbmFtZTogJ0JvdW50aWZ1bCcgfSxcbiAgeyBuYW1lOiAnQm93aWUnIH0sXG4gIHsgbmFtZTogJ0Jvd2xpbmcgR3JlZW4nIH0sXG4gIHsgbmFtZTogJ0JveW50b24gQmVhY2gnIH0sXG4gIHsgbmFtZTogJ0JvemVtYW4nIH0sXG4gIHsgbmFtZTogJ0JyYWRlbnRvbicgfSxcbiAgeyBuYW1lOiAnQnJlYScgfSxcbiAgeyBuYW1lOiAnQnJlbWVydG9uJyB9LFxuICB7IG5hbWU6ICdCcmVudHdvb2QnIH0sXG4gIHsgbmFtZTogJ0JyZW50d29vZCcgfSxcbiAgeyBuYW1lOiAnQnJpZGdlcG9ydCcgfSxcbiAgeyBuYW1lOiAnQnJpc3RvbCcgfSxcbiAgeyBuYW1lOiAnQnJvY2t0b24nIH0sXG4gIHsgbmFtZTogJ0Jyb2tlbiBBcnJvdycgfSxcbiAgeyBuYW1lOiAnQnJvb2tmaWVsZCcgfSxcbiAgeyBuYW1lOiAnQnJvb2toYXZlbicgfSxcbiAgeyBuYW1lOiAnQnJvb2tseW4gUGFyaycgfSxcbiAgeyBuYW1lOiAnQnJvb21maWVsZCcgfSxcbiAgeyBuYW1lOiAnQnJvd25zdmlsbGUnIH0sXG4gIHsgbmFtZTogJ0JyeWFuJyB9LFxuICB7IG5hbWU6ICdCdWNrZXllJyB9LFxuICB7IG5hbWU6ICdCdWVuYSBQYXJrJyB9LFxuICB7IG5hbWU6ICdCdWZmYWxvJyB9LFxuICB7IG5hbWU6ICdCdWZmYWxvIEdyb3ZlJyB9LFxuICB7IG5hbWU6ICdCdWxsaGVhZCBDaXR5JyB9LFxuICB7IG5hbWU6ICdCdXJiYW5rJyB9LFxuICB7IG5hbWU6ICdCdXJpZW4nIH0sXG4gIHsgbmFtZTogJ0J1cmxlc29uJyB9LFxuICB7IG5hbWU6ICdCdXJsaW5ndG9uJyB9LFxuICB7IG5hbWU6ICdCdXJsaW5ndG9uJyB9LFxuICB7IG5hbWU6ICdCdXJuc3ZpbGxlJyB9LFxuICB7IG5hbWU6ICdDYWxkd2VsbCcgfSxcbiAgeyBuYW1lOiAnQ2FsZXhpY28nIH0sXG4gIHsgbmFtZTogJ0NhbHVtZXQgQ2l0eScgfSxcbiAgeyBuYW1lOiAnQ2FtYXJpbGxvJyB9LFxuICB7IG5hbWU6ICdDYW1icmlkZ2UnIH0sXG4gIHsgbmFtZTogJ0NhbWRlbicgfSxcbiAgeyBuYW1lOiAnQ2FtcGJlbGwnIH0sXG4gIHsgbmFtZTogJ0NhbnRvbicgfSxcbiAgeyBuYW1lOiAnQ2FwZSBDb3JhbCcgfSxcbiAgeyBuYW1lOiAnQ2FwZSBHaXJhcmRlYXUnIH0sXG4gIHsgbmFtZTogJ0NhcmxzYmFkJyB9LFxuICB7IG5hbWU6ICdDYXJtZWwnIH0sXG4gIHsgbmFtZTogJ0Nhcm9sIFN0cmVhbScgfSxcbiAgeyBuYW1lOiAnQ2FycGVudGVyc3ZpbGxlJyB9LFxuICB7IG5hbWU6ICdDYXJyb2xsdG9uJyB9LFxuICB7IG5hbWU6ICdDYXJzb24nIH0sXG4gIHsgbmFtZTogJ0NhcnNvbiBDaXR5JyB9LFxuICB7IG5hbWU6ICdDYXJ5JyB9LFxuICB7IG5hbWU6ICdDYXNhIEdyYW5kZScgfSxcbiAgeyBuYW1lOiAnQ2FzcGVyJyB9LFxuICB7IG5hbWU6ICdDYXN0bGUgUm9jaycgfSxcbiAgeyBuYW1lOiAnQ2F0aGVkcmFsIENpdHknIH0sXG4gIHsgbmFtZTogJ0NlZGFyIEZhbGxzJyB9LFxuICB7IG5hbWU6ICdDZWRhciBIaWxsJyB9LFxuICB7IG5hbWU6ICdDZWRhciBQYXJrJyB9LFxuICB7IG5hbWU6ICdDZWRhciBSYXBpZHMnIH0sXG4gIHsgbmFtZTogJ0NlbnRlbm5pYWwnIH0sXG4gIHsgbmFtZTogJ0NlcmVzJyB9LFxuICB7IG5hbWU6ICdDZXJyaXRvcycgfSxcbiAgeyBuYW1lOiAnQ2hhbXBhaWduJyB9LFxuICB7IG5hbWU6ICdDaGFuZGxlcicgfSxcbiAgeyBuYW1lOiAnQ2hhcGVsIEhpbGwnIH0sXG4gIHsgbmFtZTogJ0NoYXJsZXN0b24nIH0sXG4gIHsgbmFtZTogJ0NoYXJsZXN0b24nIH0sXG4gIHsgbmFtZTogJ0NoYXJsb3R0ZScgfSxcbiAgeyBuYW1lOiAnQ2hhcmxvdHRlc3ZpbGxlJyB9LFxuICB7IG5hbWU6ICdDaGF0dGFub29nYScgfSxcbiAgeyBuYW1lOiAnQ2hlbHNlYScgfSxcbiAgeyBuYW1lOiAnQ2hlc2FwZWFrZScgfSxcbiAgeyBuYW1lOiAnQ2hlc3RlcmZpZWxkJyB9LFxuICB7IG5hbWU6ICdDaGV5ZW5uZScgfSxcbiAgeyBuYW1lOiAnQ2hpY2FnbycgfSxcbiAgeyBuYW1lOiAnQ2hpY28nIH0sXG4gIHsgbmFtZTogJ0NoaWNvcGVlJyB9LFxuICB7IG5hbWU6ICdDaGlubycgfSxcbiAgeyBuYW1lOiAnQ2hpbm8gSGlsbHMnIH0sXG4gIHsgbmFtZTogJ0NodWxhIFZpc3RhJyB9LFxuICB7IG5hbWU6ICdDaWNlcm8nIH0sXG4gIHsgbmFtZTogJ0NpbmNpbm5hdGknIH0sXG4gIHsgbmFtZTogJ0NpdHJ1cyBIZWlnaHRzJyB9LFxuICB7IG5hbWU6ICdDbGFya3N2aWxsZScgfSxcbiAgeyBuYW1lOiAnQ2xlYXJ3YXRlcicgfSxcbiAgeyBuYW1lOiAnQ2xldmVsYW5kJyB9LFxuICB7IG5hbWU6ICdDbGV2ZWxhbmQnIH0sXG4gIHsgbmFtZTogJ0NsZXZlbGFuZCBIZWlnaHRzJyB9LFxuICB7IG5hbWU6ICdDbGlmdG9uJyB9LFxuICB7IG5hbWU6ICdDbG92aXMnIH0sXG4gIHsgbmFtZTogJ0Nsb3ZpcycgfSxcbiAgeyBuYW1lOiAnQ29hY2hlbGxhJyB9LFxuICB7IG5hbWU6ICdDb2NvbnV0IENyZWVrJyB9LFxuICB7IG5hbWU6ICdDb2V1ciBkXFwnQWxlbmUnIH0sXG4gIHsgbmFtZTogJ0NvbGxlZ2UgU3RhdGlvbicgfSxcbiAgeyBuYW1lOiAnQ29sbGllcnZpbGxlJyB9LFxuICB7IG5hbWU6ICdDb2xvcmFkbyBTcHJpbmdzJyB9LFxuICB7IG5hbWU6ICdDb2x0b24nIH0sXG4gIHsgbmFtZTogJ0NvbHVtYmlhJyB9XG5dO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8aDEgPlxuICAgICAgICAgICAgUmVhY3QgVmlydHVhbGl6ZWQgU2VsZWN0XG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgRW5qb3kgZHJvcC1kb3duIG1lbnVzIHBvd2VyZWQgYnkgPGEgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9KZWRXYXRzb24vcmVhY3Qtc2VsZWN0Lyc+PHN0cm9uZz5ASmVkV2F0c29uPC9zdHJvbmc+J3MgcmVhY3Qtc2VsZWN0PC9hPiBhbmRcbiAgICAgICAgICAgIGVmZmljaWVudCB3aW5kb3dpbmcgYnJvdWdodCB0byB5b3UgYnkgPGEgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9idmF1Z2huL3JlYWN0LXZpcnR1YWxpemVkLyc+PHN0cm9uZz5AYnZhdWdobjwvc3Ryb25nPidzIHJlYWN0LXZpcnR1YWxpemVkPC9hPi5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgRG9jcyBhbmQgY29kZSBvbiA8YSAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2J2YXVnaG4vcmVhY3QtdmlydHVhbGl6ZWQtc2VsZWN0Lyc+R2l0SHViPC9hPi5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgPHNlY3Rpb24gPlxuICAgICAgICAgIDxWaXJ0dWFsaXplZFNlbGVjdEV4YW1wbGVcbiAgICAgICAgICAgIGNpdHlEYXRhPXtjaXR5RGF0YX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblxuXG5jbGFzcyBWaXJ0dWFsaXplZFNlbGVjdEV4YW1wbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNpdHlEYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBjb3VudHJ5RGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgbmFtZURhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICBjb25zdCBjcmVhdGFibGVPcHRpb25zID0gW1xuICAgICAgeyBsYWJlbDogJ0JsdWUnLCB2YWx1ZTogJyMwMEYnIH0sXG4gICAgICB7IGxhYmVsOiAnR3JlZW4nLCB2YWx1ZTogJyMwRjAnIH0sXG4gICAgICB7IGxhYmVsOiAnUmVkJywgdmFsdWU6ICcjRjAwJyB9XG4gICAgXVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNsZWFyYWJsZTogdHJ1ZSxcbiAgICAgIGNyZWF0YWJsZU9wdGlvbnMsXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICBnaXRodWJVc2VyczogW10sXG4gICAgICBtdWx0aTogZmFsc2UsXG4gICAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgICAgc2VsZWN0ZWRDcmVhdGFibGU6IG51bGwsXG4gICAgICBzZWxlY3RlZENpdHk6IG51bGxcbiAgICB9XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjaXR5RGF0YSwgY291bnRyeURhdGEsIG5hbWVEYXRhIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBjbGVhcmFibGUsIGNyZWF0YWJsZU9wdGlvbnMsIGRpc2FibGVkLCBnaXRodWJVc2VycywgbXVsdGksIHNlYXJjaGFibGUsIHNlbGVjdGVkQ2l0eSwgc2VsZWN0ZWRDb3VudHJ5LCBzZWxlY3RlZENyZWF0YWJsZSwgc2VsZWN0ZWRHaXRodWJVc2VyLCBzZWxlY3RlZE5hbWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIDxWaXJ0dWFsaXplZFNlbGVjdFxuICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgIGxhYmVsS2V5PSduYW1lJ1xuICAgICAgICAgIG11bHRpPXt0cnVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoc2VsZWN0ZWRDaXR5KSA9Pntjb25zb2xlLmxvZyhzZWxlY3RlZENpdHkpOyB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDaXR5IH0pfX1cbiAgICAgICAgICBvcHRpb25zPXtjaXR5RGF0YX1cbiAgICAgICAgICBzZWFyY2hhYmxlPXt0cnVlfVxuICAgICAgICAgIHNpbXBsZVZhbHVlXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDaXR5fVxuICAgICAgICAgIHZhbHVlS2V5PSduYW1lJ1xuICAgICAgICAvPlxuXG4gICAgICAgIDx1bCA+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17bXVsdGl9XG4gICAgICAgICAgICAgICAgbmFtZT0nbXVsdGknXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG11bHRpOiBldmVudC50YXJnZXQuY2hlY2tlZCB9KX1cbiAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgTXVsdGktc2VsZWN0P1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3NlYXJjaGFibGV9XG4gICAgICAgICAgICAgICAgbmFtZT0nc2VhcmNoYWJsZSdcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgc2VhcmNoYWJsZTogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSl9XG4gICAgICAgICAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIFNlYXJjaGFibGU/XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17Y2xlYXJhYmxlfVxuICAgICAgICAgICAgICAgIG5hbWU9J2NsZWFyYWJsZSdcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgY2xlYXJhYmxlOiBldmVudC50YXJnZXQuY2hlY2tlZCB9KX1cbiAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgQ2xlYXJhYmxlP1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgIG5hbWU9J2Rpc2FibGVkJ1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyBkaXNhYmxlZDogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSl9XG4gICAgICAgICAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIERpc2FibGVkP1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxoNCA+XG4gICAgICAgICAgQ3VzdG9tIE9wdGlvbiBSZW5kZXJlclxuICAgICAgICA8L2g0PlxuXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgIERpc3BsYXlzIGEgbGlzdCBvZiB3b3JsZCBjb3VudHJpZXMgdXNpbmcgYSBjdXN0b20gb3B0aW9uIHJlbmRlcmVyLlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8VmlydHVhbGl6ZWRTZWxlY3RcbiAgICAgICAgICBsYWJlbEtleT0nbmFtZSdcbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkQ291bnRyeSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ291bnRyeSB9KX1cbiAgICAgICAgICBvcHRpb25SZW5kZXJlcj17Q291bnRyeU9wdGlvblJlbmRlcmVyfVxuICAgICAgICAgIG9wdGlvbkhlaWdodD17NDB9XG4gICAgICAgICAgb3B0aW9ucz17Y291bnRyeURhdGF9XG4gICAgICAgICAgc2ltcGxlVmFsdWVcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRDb3VudHJ5fVxuICAgICAgICAgIHZhbHVlS2V5PSdjb2RlJ1xuICAgICAgICAvPlxuXG4gICAgICAgIDxoNCA+XG4gICAgICAgICAgRHluYW1pYyBIZWlnaHQgT3B0aW9uc1xuICAgICAgICA8L2g0PlxuXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgIERpc3BsYXlzIG9wdGlvbi1ncm91cCBoZWFkZXJzIHRoYXQgYXJlIHNpemVkIGRpZmZlcmVudCB0aGFuIHJlZ3VsYXIgb3B0aW9ucy5cbiAgICAgICAgICBEZW1vbnN0cmF0ZXMgaG93IHRvIHVzZSBkeW5hbWljIG9wdGlvbiBoZWlnaHRzIGZlYXR1cmUuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxWaXJ0dWFsaXplZFNlbGVjdFxuICAgICAgICAgIGxhYmVsS2V5PSduYW1lJ1xuICAgICAgICAgIG9uQ2hhbmdlPXsoc2VsZWN0ZWROYW1lKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWROYW1lIH0pfVxuICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eygpID0+IHRoaXMuX2N1c3RvbU9wdGlvbkhlaWdodHNTZWxlY3QgJiYgdGhpcy5fY3VzdG9tT3B0aW9uSGVpZ2h0c1NlbGVjdC5yZWNvbXB1dGVPcHRpb25IZWlnaHRzKCl9XG4gICAgICAgICAgb3B0aW9uSGVpZ2h0PXsoeyBvcHRpb24gfSkgPT4gb3B0aW9uLnR5cGUgPT09ICdoZWFkZXInID8gMjUgOiAzNX1cbiAgICAgICAgICBvcHRpb25SZW5kZXJlcj17TmFtZU9wdGlvblJlbmRlcmVyfVxuICAgICAgICAgIG9wdGlvbnM9e25hbWVEYXRhfVxuICAgICAgICAgIHJlZj17KHJlZikgPT4gdGhpcy5fY3VzdG9tT3B0aW9uSGVpZ2h0c1NlbGVjdCA9IHJlZn1cbiAgICAgICAgICBzZWFyY2hhYmxlPXtzZWFyY2hhYmxlfVxuICAgICAgICAgIHNpbXBsZVZhbHVlXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkTmFtZX1cbiAgICAgICAgICB2YWx1ZUtleT0nbmFtZSdcbiAgICAgICAgLz5cblxuICAgICAgICA8aDQgPlxuICAgICAgICAgIEFzeW5jIE9wdGlvbnNcbiAgICAgICAgPC9oND5cblxuICAgICAgICA8ZGl2ID5cbiAgICAgICAgICBEaXNwbGF5cyBhbiBhc3luYyA8Y29kZT5TZWxlY3Q8L2NvZGU+IGNvbXBvbmVudCB3aXJlZCB1cCB0byBzZWFyY2ggZm9yIEdpdGh1YiB1c2Vycy5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFZpcnR1YWxpemVkU2VsZWN0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBiYWNrc3BhY2VSZW1vdmVzPXtmYWxzZX1cbiAgICAgICAgICBsYWJlbEtleT0nbG9naW4nXG4gICAgICAgICAgbG9hZE9wdGlvbnM9e3RoaXMuX2xvYWRHaXRodWJVc2Vyc31cbiAgICAgICAgICBtaW5pbXVtSW5wdXQ9ezF9XG4gICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZEdpdGh1YlVzZXIpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEdpdGh1YlVzZXIgfSl9XG4gICAgICAgICAgb25WYWx1ZUNsaWNrPXt0aGlzLl9nb1RvR2l0aHViVXNlcn1cbiAgICAgICAgICBvcHRpb25zPXtnaXRodWJVc2Vyc31cbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRHaXRodWJVc2VyfVxuICAgICAgICAgIHZhbHVlS2V5PSdpZCdcbiAgICAgICAgLz5cblxuICAgICAgICA8aDQgPlxuICAgICAgICAgIENyZWF0YWJsZSBPcHRpb25zXG4gICAgICAgIDwvaDQ+XG5cbiAgICAgICAgPGRpdiA+XG4gICAgICAgICAgRGlzcGxheXMgYSA8Y29kZT5TZWxlY3QuQ3JlYXRhYmxlPC9jb2RlPiBjb21wb25lbnQgdGhhdCBlbmFibGVzIHVzZXJzIHRvIGNyZWF0ZSB0aGVpciBvd24gb3B0aW9ucy5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFZpcnR1YWxpemVkU2VsZWN0XG4gICAgICAgICAgbGFiZWxLZXk9J2xhYmVsJ1xuICAgICAgICAgIG11bHRpXG4gICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZENyZWF0YWJsZSkgPT57Y29uc29sZS5sb2coc2VsZWN0ZWRDcmVhdGFibGUpOyB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDcmVhdGFibGUgfSl9fVxuICAgICAgICAgIG9wdGlvbkhlaWdodD17NDB9XG4gICAgICAgICAgb3B0aW9ucz17Y3JlYXRhYmxlT3B0aW9uc31cbiAgICAgICAgICBzZWxlY3RDb21wb25lbnQ9e0NyZWF0YWJsZX1cbiAgICAgICAgICBzaW1wbGVWYWx1ZVxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZENyZWF0YWJsZX1cbiAgICAgICAgICB2YWx1ZUtleT0ndmFsdWUnXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfZ29Ub0dpdGh1YlVzZXIgKHZhbHVlKSB7XG4gICAgd2luZG93Lm9wZW4odmFsdWUuaHRtbF91cmwpXG4gIH1cblxuICBfbG9hZEdpdGh1YlVzZXJzIChpbnB1dCkge1xuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT0ke2lucHV0fWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIGNvbnN0IGdpdGh1YlVzZXJzID0ganNvbi5pdGVtc1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnaXRodWJVc2VycyB9KVxuXG4gICAgICAgIHJldHVybiB7IG9wdGlvbnM6IGdpdGh1YlVzZXJzIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gQ291bnRyeU9wdGlvblJlbmRlcmVyICh7IGZvY3VzZWRPcHRpb24sIGZvY3VzZWRPcHRpb25JbmRleCwgZm9jdXNPcHRpb24sIGtleSwgbGFiZWxLZXksIG9wdGlvbiwgb3B0aW9ucywgc2VsZWN0VmFsdWUsIHN0eWxlLCB2YWx1ZUFycmF5IH0pIHtcbiAgY29uc3QgZmxhZ0ltYWdlVXJsID0gYGh0dHBzOi8vcmF3Z2l0LmNvbS9oam5pbHNzb24vY291bnRyeS1mbGFncy9tYXN0ZXIvc3ZnLyR7b3B0aW9uLmNvZGUudG9Mb3dlckNhc2UoKX0uc3ZnYFxuXG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBbc3R5bGVzLmNvdW50cnlPcHRpb25dXG4gIGlmIChvcHRpb24gPT09IGZvY3VzZWRPcHRpb24pIHtcbiAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmNvdW50cnlPcHRpb25Gb2N1c2VkKVxuICB9XG4gIGlmICh2YWx1ZUFycmF5LmluZGV4T2Yob3B0aW9uKSA+PSAwKSB7XG4gICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5jb3VudHJ5T3B0aW9uU2VsZWN0ZWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9XG4gICAgICBrZXk9e2tleX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFZhbHVlKG9wdGlvbil9XG4gICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gZm9jdXNPcHRpb24ob3B0aW9uKX1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICA+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRyeUxhYmVsfT5cbiAgICAgICAge29wdGlvbi5uYW1lfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRyeUZsYWd9XG4gICAgICAgIHNyYz17ZmxhZ0ltYWdlVXJsfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBOYW1lT3B0aW9uUmVuZGVyZXIgKHsgZm9jdXNlZE9wdGlvbiwgZm9jdXNlZE9wdGlvbkluZGV4LCBmb2N1c09wdGlvbiwga2V5LCBsYWJlbEtleSwgb3B0aW9uLCBvcHRpb25JbmRleCwgb3B0aW9ucywgc2VsZWN0VmFsdWUsIHN0eWxlLCB2YWx1ZUFycmF5IH0pIHtcbiAgY29uc3QgY2xhc3NOYW1lcyA9IFtzdHlsZXMubmFtZU9wdGlvbl1cblxuICBpZiAob3B0aW9uLnR5cGUgPT09ICdoZWFkZXInKSB7XG4gICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5uYW1lSGVhZGVyKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX1cbiAgICAgICAga2V5PXtrZXl9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgID5cbiAgICAgICAge29wdGlvbi5uYW1lfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGlmIChvcHRpb24gPT09IGZvY3VzZWRPcHRpb24pIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMubmFtZU9wdGlvbkZvY3VzZWQpXG4gICAgfVxuICAgIGlmICh2YWx1ZUFycmF5LmluZGV4T2Yob3B0aW9uKSA+PSAwKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLm5hbWVPcHRpb25TZWxlY3RlZClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfVxuICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0VmFsdWUob3B0aW9uKX1cbiAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IGZvY3VzT3B0aW9uKG9wdGlvbil9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgID5cbiAgICAgICAge29wdGlvbi5uYW1lfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19