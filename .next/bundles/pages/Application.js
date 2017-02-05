module.exports =
webpackJsonp([10],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(142);
	module.exports = __webpack_require__(1111);


/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/react-select
	*/
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(32);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactInputAutosize = __webpack_require__(838);
	
	var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsDefaultArrowRenderer = __webpack_require__(849);
	
	var _utilsDefaultArrowRenderer2 = _interopRequireDefault(_utilsDefaultArrowRenderer);
	
	var _utilsDefaultFilterOptions = __webpack_require__(620);
	
	var _utilsDefaultFilterOptions2 = _interopRequireDefault(_utilsDefaultFilterOptions);
	
	var _utilsDefaultMenuRenderer = __webpack_require__(621);
	
	var _utilsDefaultMenuRenderer2 = _interopRequireDefault(_utilsDefaultMenuRenderer);
	
	var _utilsDefaultClearRenderer = __webpack_require__(850);
	
	var _utilsDefaultClearRenderer2 = _interopRequireDefault(_utilsDefaultClearRenderer);
	
	var _Async = __webpack_require__(844);
	
	var _Async2 = _interopRequireDefault(_Async);
	
	var _AsyncCreatable = __webpack_require__(845);
	
	var _AsyncCreatable2 = _interopRequireDefault(_AsyncCreatable);
	
	var _Creatable = __webpack_require__(846);
	
	var _Creatable2 = _interopRequireDefault(_Creatable);
	
	var _Option = __webpack_require__(847);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _Value = __webpack_require__(848);
	
	var _Value2 = _interopRequireDefault(_Value);
	
	function stringifyValue(value) {
		var valueType = typeof value;
		if (valueType === 'string') {
			return value;
		} else if (valueType === 'object') {
			return JSON.stringify(value);
		} else if (valueType === 'number' || valueType === 'boolean') {
			return String(value);
		} else {
			return '';
		}
	}
	
	var stringOrNode = _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]);
	
	var instanceId = 1;
	
	var Select = _react2['default'].createClass({
	
		displayName: 'Select',
	
		propTypes: {
			addLabelText: _react2['default'].PropTypes.string, // placeholder displayed when you want to add a label on a multi-value input
			'aria-label': _react2['default'].PropTypes.string, // Aria label (for assistive tech)
			'aria-labelledby': _react2['default'].PropTypes.string, // HTML ID of an element that should be used as the label (for assistive tech)
			arrowRenderer: _react2['default'].PropTypes.func, // Create drop-down caret element
			autoBlur: _react2['default'].PropTypes.bool, // automatically blur the component when an option is selected
			autofocus: _react2['default'].PropTypes.bool, // autofocus the component on mount
			autosize: _react2['default'].PropTypes.bool, // whether to enable autosizing or not
			backspaceRemoves: _react2['default'].PropTypes.bool, // whether backspace removes an item if there is no text input
			backspaceToRemoveMessage: _react2['default'].PropTypes.string, // Message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
			className: _react2['default'].PropTypes.string, // className for the outer element
			clearAllText: stringOrNode, // title for the "clear" control when multi: true
			clearRenderer: _react2['default'].PropTypes.func, // create clearable x element
			clearValueText: stringOrNode, // title for the "clear" control
			clearable: _react2['default'].PropTypes.bool, // should it be possible to reset value
			deleteRemoves: _react2['default'].PropTypes.bool, // whether backspace removes an item if there is no text input
			delimiter: _react2['default'].PropTypes.string, // delimiter to use to join multiple values for the hidden field value
			disabled: _react2['default'].PropTypes.bool, // whether the Select is disabled or not
			escapeClearsValue: _react2['default'].PropTypes.bool, // whether escape clears the value when the menu is closed
			filterOption: _react2['default'].PropTypes.func, // method to filter a single option (option, filterString)
			filterOptions: _react2['default'].PropTypes.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
			ignoreAccents: _react2['default'].PropTypes.bool, // whether to strip diacritics when filtering
			ignoreCase: _react2['default'].PropTypes.bool, // whether to perform case-insensitive filtering
			inputProps: _react2['default'].PropTypes.object, // custom attributes for the Input
			inputRenderer: _react2['default'].PropTypes.func, // returns a custom input component
			instanceId: _react2['default'].PropTypes.string, // set the components instanceId
			isLoading: _react2['default'].PropTypes.bool, // whether the Select is loading externally or not (such as options being loaded)
			joinValues: _react2['default'].PropTypes.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
			labelKey: _react2['default'].PropTypes.string, // path of the label value in option objects
			matchPos: _react2['default'].PropTypes.string, // (any|start) match the start or entire string when filtering
			matchProp: _react2['default'].PropTypes.string, // (any|label|value) which option property to filter on
			menuBuffer: _react2['default'].PropTypes.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
			menuContainerStyle: _react2['default'].PropTypes.object, // optional style to apply to the menu container
			menuRenderer: _react2['default'].PropTypes.func, // renders a custom menu with options
			menuStyle: _react2['default'].PropTypes.object, // optional style to apply to the menu
			multi: _react2['default'].PropTypes.bool, // multi-value input
			name: _react2['default'].PropTypes.string, // generates a hidden <input /> tag with this field name for html forms
			noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
			onBlur: _react2['default'].PropTypes.func, // onBlur handler: function (event) {}
			onBlurResetsInput: _react2['default'].PropTypes.bool, // whether input is cleared on blur
			onChange: _react2['default'].PropTypes.func, // onChange handler: function (newValue) {}
			onClose: _react2['default'].PropTypes.func, // fires when the menu is closed
			onCloseResetsInput: _react2['default'].PropTypes.bool, // whether input is cleared when menu is closed through the arrow
			onFocus: _react2['default'].PropTypes.func, // onFocus handler: function (event) {}
			onInputChange: _react2['default'].PropTypes.func, // onInputChange handler: function (inputValue) {}
			onInputKeyDown: _react2['default'].PropTypes.func, // input keyDown handler: function (event) {}
			onMenuScrollToBottom: _react2['default'].PropTypes.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
			onOpen: _react2['default'].PropTypes.func, // fires when the menu is opened
			onValueClick: _react2['default'].PropTypes.func, // onClick handler for value labels: function (value, event) {}
			openAfterFocus: _react2['default'].PropTypes.bool, // boolean to enable opening dropdown when focused
			openOnFocus: _react2['default'].PropTypes.bool, // always open options menu on focus
			optionClassName: _react2['default'].PropTypes.string, // additional class(es) to apply to the <Option /> elements
			optionComponent: _react2['default'].PropTypes.func, // option component to render in dropdown
			optionRenderer: _react2['default'].PropTypes.func, // optionRenderer: function (option) {}
			options: _react2['default'].PropTypes.array, // array of options
			pageSize: _react2['default'].PropTypes.number, // number of entries to page when using page up/down keys
			placeholder: stringOrNode, // field placeholder, displayed when there's no value
			required: _react2['default'].PropTypes.bool, // applies HTML5 required attribute when needed
			resetValue: _react2['default'].PropTypes.any, // value to use when you clear the control
			scrollMenuIntoView: _react2['default'].PropTypes.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
			searchable: _react2['default'].PropTypes.bool, // whether to enable searching feature or not
			simpleValue: _react2['default'].PropTypes.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
			style: _react2['default'].PropTypes.object, // optional style to apply to the control
			tabIndex: _react2['default'].PropTypes.string, // optional tab index of the control
			tabSelectsValue: _react2['default'].PropTypes.bool, // whether to treat tabbing out while focused to be value selection
			value: _react2['default'].PropTypes.any, // initial field value
			valueComponent: _react2['default'].PropTypes.func, // value component to render
			valueKey: _react2['default'].PropTypes.string, // path of the label value in option objects
			valueRenderer: _react2['default'].PropTypes.func, // valueRenderer: function (option) {}
			wrapperStyle: _react2['default'].PropTypes.object },
	
		// optional style to apply to the component wrapper
		statics: { Async: _Async2['default'], AsyncCreatable: _AsyncCreatable2['default'], Creatable: _Creatable2['default'] },
	
		getDefaultProps: function getDefaultProps() {
			return {
				addLabelText: 'Add "{label}"?',
				arrowRenderer: _utilsDefaultArrowRenderer2['default'],
				autosize: true,
				backspaceRemoves: true,
				backspaceToRemoveMessage: 'Press backspace to remove {label}',
				clearable: true,
				clearAllText: 'Clear all',
				clearRenderer: _utilsDefaultClearRenderer2['default'],
				clearValueText: 'Clear value',
				deleteRemoves: true,
				delimiter: ',',
				disabled: false,
				escapeClearsValue: true,
				filterOptions: _utilsDefaultFilterOptions2['default'],
				ignoreAccents: true,
				ignoreCase: true,
				inputProps: {},
				isLoading: false,
				joinValues: false,
				labelKey: 'label',
				matchPos: 'any',
				matchProp: 'any',
				menuBuffer: 0,
				menuRenderer: _utilsDefaultMenuRenderer2['default'],
				multi: false,
				noResultsText: 'No results found',
				onBlurResetsInput: true,
				onCloseResetsInput: true,
				openAfterFocus: false,
				optionComponent: _Option2['default'],
				pageSize: 5,
				placeholder: 'Select...',
				required: false,
				scrollMenuIntoView: true,
				searchable: true,
				simpleValue: false,
				tabSelectsValue: true,
				valueComponent: _Value2['default'],
				valueKey: 'value'
			};
		},
	
		getInitialState: function getInitialState() {
			return {
				inputValue: '',
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false,
				required: false
			};
		},
	
		componentWillMount: function componentWillMount() {
			this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
			var valueArray = this.getValueArray(this.props.value);
	
			if (this.props.required) {
				this.setState({
					required: this.handleRequired(valueArray[0], this.props.multi)
				});
			}
		},
	
		componentDidMount: function componentDidMount() {
			if (this.props.autofocus) {
				this.focus();
			}
		},
	
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			var valueArray = this.getValueArray(nextProps.value, nextProps);
	
			if (nextProps.required) {
				this.setState({
					required: this.handleRequired(valueArray[0], nextProps.multi)
				});
			}
		},
	
		componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
			if (nextState.isOpen !== this.state.isOpen) {
				this.toggleTouchOutsideEvent(nextState.isOpen);
				var handler = nextState.isOpen ? nextProps.onOpen : nextProps.onClose;
				handler && handler();
			}
		},
	
		componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
			// focus to the selected option
			if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
				var focusedOptionNode = _reactDom2['default'].findDOMNode(this.focused);
				var menuNode = _reactDom2['default'].findDOMNode(this.menu);
				menuNode.scrollTop = focusedOptionNode.offsetTop;
				this.hasScrolledToOption = true;
			} else if (!this.state.isOpen) {
				this.hasScrolledToOption = false;
			}
	
			if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
				this._scrollToFocusedOptionOnUpdate = false;
				var focusedDOM = _reactDom2['default'].findDOMNode(this.focused);
				var menuDOM = _reactDom2['default'].findDOMNode(this.menu);
				var focusedRect = focusedDOM.getBoundingClientRect();
				var menuRect = menuDOM.getBoundingClientRect();
				if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
					menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
				}
			}
			if (this.props.scrollMenuIntoView && this.menuContainer) {
				var menuContainerRect = this.menuContainer.getBoundingClientRect();
				if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
					window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
				}
			}
			if (prevProps.disabled !== this.props.disabled) {
				this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
				this.closeMenu();
			}
		},
	
		componentWillUnmount: function componentWillUnmount() {
			if (!document.removeEventListener && document.detachEvent) {
				document.detachEvent('ontouchstart', this.handleTouchOutside);
			} else {
				document.removeEventListener('touchstart', this.handleTouchOutside);
			}
		},
	
		toggleTouchOutsideEvent: function toggleTouchOutsideEvent(enabled) {
			if (enabled) {
				if (!document.addEventListener && document.attachEvent) {
					document.attachEvent('ontouchstart', this.handleTouchOutside);
				} else {
					document.addEventListener('touchstart', this.handleTouchOutside);
				}
			} else {
				if (!document.removeEventListener && document.detachEvent) {
					document.detachEvent('ontouchstart', this.handleTouchOutside);
				} else {
					document.removeEventListener('touchstart', this.handleTouchOutside);
				}
			}
		},
	
		handleTouchOutside: function handleTouchOutside(event) {
			// handle touch outside on ios to dismiss menu
			if (this.wrapper && !this.wrapper.contains(event.target)) {
				this.closeMenu();
			}
		},
	
		focus: function focus() {
			if (!this.input) return;
			this.input.focus();
	
			if (this.props.openAfterFocus) {
				this.setState({
					isOpen: true
				});
			}
		},
	
		blurInput: function blurInput() {
			if (!this.input) return;
			this.input.blur();
		},
	
		handleTouchMove: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		},
	
		handleTouchStart: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		},
	
		handleTouchEnd: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;
	
			// Fire the mouse events
			this.handleMouseDown(event);
		},
	
		handleTouchEndClearValue: function handleTouchEndClearValue(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;
	
			// Clear the value
			this.clearValue(event);
		},
	
		handleMouseDown: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
	
			if (event.target.tagName === 'INPUT') {
				return;
			}
	
			// prevent default event handlers
			event.stopPropagation();
			event.preventDefault();
	
			// for the non-searchable select, toggle the menu
			if (!this.props.searchable) {
				this.focus();
				return this.setState({
					isOpen: !this.state.isOpen
				});
			}
	
			if (this.state.isFocused) {
				// On iOS, we can get into a state where we think the input is focused but it isn't really,
				// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
				// Call focus() again here to be safe.
				this.focus();
	
				var input = this.input;
				if (typeof input.getInput === 'function') {
					// Get the actual DOM input if the ref is an <AutosizeInput /> component
					input = input.getInput();
				}
	
				// clears the value so that the cursor will be at the end of input when the component re-renders
				input.value = '';
	
				// if the input is focused, ensure the menu is open
				this.setState({
					isOpen: true,
					isPseudoFocused: false
				});
			} else {
				// otherwise, focus the input and open the menu
				this._openAfterFocus = true;
				this.focus();
			}
		},
	
		handleMouseDownOnArrow: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			// If the menu isn't open, let the event bubble to the main handleMouseDown
			if (!this.state.isOpen) {
				return;
			}
			// prevent default event handlers
			event.stopPropagation();
			event.preventDefault();
			// close the menu
			this.closeMenu();
		},
	
		handleMouseDownOnMenu: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
	
			this._openAfterFocus = true;
			this.focus();
		},
	
		closeMenu: function closeMenu() {
			if (this.props.onCloseResetsInput) {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi,
					inputValue: ''
				});
			} else {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi,
					inputValue: this.state.inputValue
				});
			}
			this.hasScrolledToOption = false;
		},
	
		handleInputFocus: function handleInputFocus(event) {
			if (this.props.disabled) return;
			var isOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
			if (this.props.onFocus) {
				this.props.onFocus(event);
			}
			this.setState({
				isFocused: true,
				isOpen: isOpen
			});
			this._openAfterFocus = false;
		},
	
		handleInputBlur: function handleInputBlur(event) {
			// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
			if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
				this.focus();
				return;
			}
	
			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
			var onBlurredState = {
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false
			};
			if (this.props.onBlurResetsInput) {
				onBlurredState.inputValue = '';
			}
			this.setState(onBlurredState);
		},
	
		handleInputChange: function handleInputChange(event) {
			var newInputValue = event.target.value;
	
			if (this.state.inputValue !== event.target.value && this.props.onInputChange) {
				var nextState = this.props.onInputChange(newInputValue);
				// Note: != used deliberately here to catch undefined and null
				if (nextState != null && typeof nextState !== 'object') {
					newInputValue = '' + nextState;
				}
			}
	
			this.setState({
				isOpen: true,
				isPseudoFocused: false,
				inputValue: newInputValue
			});
		},
	
		handleKeyDown: function handleKeyDown(event) {
			if (this.props.disabled) return;
	
			if (typeof this.props.onInputKeyDown === 'function') {
				this.props.onInputKeyDown(event);
				if (event.defaultPrevented) {
					return;
				}
			}
	
			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					return;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
						return;
					}
					this.selectFocusedOption();
					return;
				case 13:
					// enter
					if (!this.state.isOpen) return;
					event.stopPropagation();
					this.selectFocusedOption();
					break;
				case 27:
					// escape
					if (this.state.isOpen) {
						this.closeMenu();
						event.stopPropagation();
					} else if (this.props.clearable && this.props.escapeClearsValue) {
						this.clearValue(event);
						event.stopPropagation();
					}
					break;
				case 38:
					// up
					this.focusPreviousOption();
					break;
				case 40:
					// down
					this.focusNextOption();
					break;
				case 33:
					// page up
					this.focusPageUpOption();
					break;
				case 34:
					// page down
					this.focusPageDownOption();
					break;
				case 35:
					// end key
					if (event.shiftKey) {
						return;
					}
					this.focusEndOption();
					break;
				case 36:
					// home key
					if (event.shiftKey) {
						return;
					}
					this.focusStartOption();
					break;
				case 46:
					// backspace
					if (!this.state.inputValue && this.props.deleteRemoves) {
						event.preventDefault();
						this.popValue();
					}
					return;
				default:
					return;
			}
			event.preventDefault();
		},
	
		handleValueClick: function handleValueClick(option, event) {
			if (!this.props.onValueClick) return;
			this.props.onValueClick(option, event);
		},
	
		handleMenuScroll: function handleMenuScroll(event) {
			if (!this.props.onMenuScrollToBottom) return;
			var target = event.target;
	
			if (target.scrollHeight > target.offsetHeight && !(target.scrollHeight - target.offsetHeight - target.scrollTop)) {
				this.props.onMenuScrollToBottom();
			}
		},
	
		handleRequired: function handleRequired(value, multi) {
			if (!value) return true;
			return multi ? value.length === 0 : Object.keys(value).length === 0;
		},
	
		getOptionLabel: function getOptionLabel(op) {
			return op[this.props.labelKey];
		},
	
		/**
	  * Turns a value into an array from the given options
	  * @param	{String|Number|Array}	value		- the value of the select input
	  * @param	{Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
	  * @returns	{Array}	the value of the select represented in an array
	  */
		getValueArray: function getValueArray(value, nextProps) {
			var _this = this;
	
			/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
			var props = typeof nextProps === 'object' ? nextProps : this.props;
			if (props.multi) {
				if (typeof value === 'string') value = value.split(props.delimiter);
				if (!Array.isArray(value)) {
					if (value === null || value === undefined) return [];
					value = [value];
				}
				return value.map(function (value) {
					return _this.expandValue(value, props);
				}).filter(function (i) {
					return i;
				});
			}
			var expandedValue = this.expandValue(value, props);
			return expandedValue ? [expandedValue] : [];
		},
	
		/**
	  * Retrieve a value from the given options and valueKey
	  * @param	{String|Number|Array}	value	- the selected value(s)
	  * @param	{Object}		props	- the Select component's props (or nextProps)
	  */
		expandValue: function expandValue(value, props) {
			var valueType = typeof value;
			if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
			var options = props.options;
			var valueKey = props.valueKey;
	
			if (!options) return;
			for (var i = 0; i < options.length; i++) {
				if (options[i][valueKey] === value) return options[i];
			}
		},
	
		setValue: function setValue(value) {
			var _this2 = this;
	
			if (this.props.autoBlur) {
				this.blurInput();
			}
			if (!this.props.onChange) return;
			if (this.props.required) {
				var required = this.handleRequired(value, this.props.multi);
				this.setState({ required: required });
			}
			if (this.props.simpleValue && value) {
				value = this.props.multi ? value.map(function (i) {
					return i[_this2.props.valueKey];
				}).join(this.props.delimiter) : value[this.props.valueKey];
			}
			this.props.onChange(value);
		},
	
		selectValue: function selectValue(value) {
			var _this3 = this;
	
			//NOTE: update value in the callback to make sure the input value is empty so that there are no styling issues (Chrome had issue otherwise)
			this.hasScrolledToOption = false;
			if (this.props.multi) {
				this.setState({
					inputValue: '',
					focusedIndex: null
				}, function () {
					_this3.addValue(value);
				});
			} else {
				this.setState({
					isOpen: false,
					inputValue: '',
					isPseudoFocused: this.state.isFocused
				}, function () {
					_this3.setValue(value);
				});
			}
		},
	
		addValue: function addValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			var visibleOptions = this._visibleOptions.filter(function (val) {
				return !val.disabled;
			});
			var lastValueIndex = visibleOptions.indexOf(value);
			this.setValue(valueArray.concat(value));
			if (visibleOptions.length - 1 === lastValueIndex) {
				// the last option was selected; focus the second-last one
				this.focusOption(visibleOptions[lastValueIndex - 1]);
			} else if (visibleOptions.length > lastValueIndex) {
				// focus the option below the selected one
				this.focusOption(visibleOptions[lastValueIndex + 1]);
			}
		},
	
		popValue: function popValue() {
			var valueArray = this.getValueArray(this.props.value);
			if (!valueArray.length) return;
			if (valueArray[valueArray.length - 1].clearableValue === false) return;
			this.setValue(valueArray.slice(0, valueArray.length - 1));
		},
	
		removeValue: function removeValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			this.setValue(valueArray.filter(function (i) {
				return i !== value;
			}));
			this.focus();
		},
	
		clearValue: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
			this.setValue(this.getResetValue());
			this.setState({
				isOpen: false,
				inputValue: ''
			}, this.focus);
		},
	
		getResetValue: function getResetValue() {
			if (this.props.resetValue !== undefined) {
				return this.props.resetValue;
			} else if (this.props.multi) {
				return [];
			} else {
				return null;
			}
		},
	
		focusOption: function focusOption(option) {
			this.setState({
				focusedOption: option
			});
		},
	
		focusNextOption: function focusNextOption() {
			this.focusAdjacentOption('next');
		},
	
		focusPreviousOption: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		},
	
		focusPageUpOption: function focusPageUpOption() {
			this.focusAdjacentOption('page_up');
		},
	
		focusPageDownOption: function focusPageDownOption() {
			this.focusAdjacentOption('page_down');
		},
	
		focusStartOption: function focusStartOption() {
			this.focusAdjacentOption('start');
		},
	
		focusEndOption: function focusEndOption() {
			this.focusAdjacentOption('end');
		},
	
		focusAdjacentOption: function focusAdjacentOption(dir) {
			var options = this._visibleOptions.map(function (option, index) {
				return { option: option, index: index };
			}).filter(function (option) {
				return !option.option.disabled;
			});
			this._scrollToFocusedOptionOnUpdate = true;
			if (!this.state.isOpen) {
				this.setState({
					isOpen: true,
					inputValue: '',
					focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null)
				});
				return;
			}
			if (!options.length) return;
			var focusedIndex = -1;
			for (var i = 0; i < options.length; i++) {
				if (this._focusedOption === options[i].option) {
					focusedIndex = i;
					break;
				}
			}
			if (dir === 'next' && focusedIndex !== -1) {
				focusedIndex = (focusedIndex + 1) % options.length;
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedIndex = focusedIndex - 1;
				} else {
					focusedIndex = options.length - 1;
				}
			} else if (dir === 'start') {
				focusedIndex = 0;
			} else if (dir === 'end') {
				focusedIndex = options.length - 1;
			} else if (dir === 'page_up') {
				var potentialIndex = focusedIndex - this.props.pageSize;
				if (potentialIndex < 0) {
					focusedIndex = 0;
				} else {
					focusedIndex = potentialIndex;
				}
			} else if (dir === 'page_down') {
				var potentialIndex = focusedIndex + this.props.pageSize;
				if (potentialIndex > options.length - 1) {
					focusedIndex = options.length - 1;
				} else {
					focusedIndex = potentialIndex;
				}
			}
	
			if (focusedIndex === -1) {
				focusedIndex = 0;
			}
	
			this.setState({
				focusedIndex: options[focusedIndex].index,
				focusedOption: options[focusedIndex].option
			});
		},
	
		getFocusedOption: function getFocusedOption() {
			return this._focusedOption;
		},
	
		getInputValue: function getInputValue() {
			return this.state.inputValue;
		},
	
		selectFocusedOption: function selectFocusedOption() {
			if (this._focusedOption) {
				return this.selectValue(this._focusedOption);
			}
		},
	
		renderLoading: function renderLoading() {
			if (!this.props.isLoading) return;
			return _react2['default'].createElement(
				'span',
				{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
				_react2['default'].createElement('span', { className: 'Select-loading' })
			);
		},
	
		renderValue: function renderValue(valueArray, isOpen) {
			var _this4 = this;
	
			var renderLabel = this.props.valueRenderer || this.getOptionLabel;
			var ValueComponent = this.props.valueComponent;
			if (!valueArray.length) {
				return !this.state.inputValue ? _react2['default'].createElement(
					'div',
					{ className: 'Select-placeholder' },
					this.props.placeholder
				) : null;
			}
			var onClick = this.props.onValueClick ? this.handleValueClick : null;
			if (this.props.multi) {
				return valueArray.map(function (value, i) {
					return _react2['default'].createElement(
						ValueComponent,
						{
							id: _this4._instancePrefix + '-value-' + i,
							instancePrefix: _this4._instancePrefix,
							disabled: _this4.props.disabled || value.clearableValue === false,
							key: 'value-' + i + '-' + value[_this4.props.valueKey],
							onClick: onClick,
							onRemove: _this4.removeValue,
							value: value
						},
						renderLabel(value, i),
						_react2['default'].createElement(
							'span',
							{ className: 'Select-aria-only' },
							' '
						)
					);
				});
			} else if (!this.state.inputValue) {
				if (isOpen) onClick = null;
				return _react2['default'].createElement(
					ValueComponent,
					{
						id: this._instancePrefix + '-value-item',
						disabled: this.props.disabled,
						instancePrefix: this._instancePrefix,
						onClick: onClick,
						value: valueArray[0]
					},
					renderLabel(valueArray[0])
				);
			}
		},
	
		renderInput: function renderInput(valueArray, focusedOptionIndex) {
			var _classNames,
			    _this5 = this;
	
			var className = (0, _classnames2['default'])('Select-input', this.props.inputProps.className);
			var isOpen = !!this.state.isOpen;
	
			var ariaOwns = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, this._instancePrefix + '-list', isOpen), _defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));
	
			// TODO: Check how this project includes Object.assign()
			var inputProps = _extends({}, this.props.inputProps, {
				role: 'combobox',
				'aria-expanded': '' + isOpen,
				'aria-owns': ariaOwns,
				'aria-haspopup': '' + isOpen,
				'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
				'aria-labelledby': this.props['aria-labelledby'],
				'aria-label': this.props['aria-label'],
				className: className,
				tabIndex: this.props.tabIndex,
				onBlur: this.handleInputBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				ref: function ref(_ref) {
					return _this5.input = _ref;
				},
				required: this.state.required,
				value: this.state.inputValue
			});
	
			if (this.props.inputRenderer) {
				return this.props.inputRenderer(inputProps);
			}
	
			if (this.props.disabled || !this.props.searchable) {
				var _props$inputProps = this.props.inputProps;
				var inputClassName = _props$inputProps.inputClassName;
	
				var divProps = _objectWithoutProperties(_props$inputProps, ['inputClassName']);
	
				return _react2['default'].createElement('div', _extends({}, divProps, {
					role: 'combobox',
					'aria-expanded': isOpen,
					'aria-owns': isOpen ? this._instancePrefix + '-list' : this._instancePrefix + '-value',
					'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
					className: className,
					tabIndex: this.props.tabIndex || 0,
					onBlur: this.handleInputBlur,
					onFocus: this.handleInputFocus,
					ref: function (ref) {
						return _this5.input = ref;
					},
					'aria-readonly': '' + !!this.props.disabled,
					style: { border: 0, width: 1, display: 'inline-block' } }));
			}
	
			if (this.props.autosize) {
				return _react2['default'].createElement(_reactInputAutosize2['default'], _extends({}, inputProps, { minWidth: '5' }));
			}
			return _react2['default'].createElement(
				'div',
				{ className: className },
				_react2['default'].createElement('input', inputProps)
			);
		},
	
		renderClear: function renderClear() {
			if (!this.props.clearable || !this.props.value || this.props.value === 0 || this.props.multi && !this.props.value.length || this.props.disabled || this.props.isLoading) return;
			var clear = this.props.clearRenderer();
	
			return _react2['default'].createElement(
				'span',
				{ className: 'Select-clear-zone', title: this.props.multi ? this.props.clearAllText : this.props.clearValueText,
					'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText,
					onMouseDown: this.clearValue,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEndClearValue
				},
				clear
			);
		},
	
		renderArrow: function renderArrow() {
			var onMouseDown = this.handleMouseDownOnArrow;
			var isOpen = this.state.isOpen;
			var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown, isOpen: isOpen });
	
			return _react2['default'].createElement(
				'span',
				{
					className: 'Select-arrow-zone',
					onMouseDown: onMouseDown
				},
				arrow
			);
		},
	
		filterOptions: function filterOptions(excludeOptions) {
			var filterValue = this.state.inputValue;
			var options = this.props.options || [];
			if (this.props.filterOptions) {
				// Maintain backwards compatibility with boolean attribute
				var filterOptions = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : _utilsDefaultFilterOptions2['default'];
	
				return filterOptions(options, filterValue, excludeOptions, {
					filterOption: this.props.filterOption,
					ignoreAccents: this.props.ignoreAccents,
					ignoreCase: this.props.ignoreCase,
					labelKey: this.props.labelKey,
					matchPos: this.props.matchPos,
					matchProp: this.props.matchProp,
					valueKey: this.props.valueKey
				});
			} else {
				return options;
			}
		},
	
		onOptionRef: function onOptionRef(ref, isFocused) {
			if (isFocused) {
				this.focused = ref;
			}
		},
	
		renderMenu: function renderMenu(options, valueArray, focusedOption) {
			if (options && options.length) {
				return this.props.menuRenderer({
					focusedOption: focusedOption,
					focusOption: this.focusOption,
					instancePrefix: this._instancePrefix,
					labelKey: this.props.labelKey,
					onFocus: this.focusOption,
					onSelect: this.selectValue,
					optionClassName: this.props.optionClassName,
					optionComponent: this.props.optionComponent,
					optionRenderer: this.props.optionRenderer || this.getOptionLabel,
					options: options,
					selectValue: this.selectValue,
					valueArray: valueArray,
					valueKey: this.props.valueKey,
					onOptionRef: this.onOptionRef
				});
			} else if (this.props.noResultsText) {
				return _react2['default'].createElement(
					'div',
					{ className: 'Select-noresults' },
					this.props.noResultsText
				);
			} else {
				return null;
			}
		},
	
		renderHiddenField: function renderHiddenField(valueArray) {
			var _this6 = this;
	
			if (!this.props.name) return;
			if (this.props.joinValues) {
				var value = valueArray.map(function (i) {
					return stringifyValue(i[_this6.props.valueKey]);
				}).join(this.props.delimiter);
				return _react2['default'].createElement('input', {
					type: 'hidden',
					ref: function (ref) {
						return _this6.value = ref;
					},
					name: this.props.name,
					value: value,
					disabled: this.props.disabled });
			}
			return valueArray.map(function (item, index) {
				return _react2['default'].createElement('input', { key: 'hidden.' + index,
					type: 'hidden',
					ref: 'value' + index,
					name: _this6.props.name,
					value: stringifyValue(item[_this6.props.valueKey]),
					disabled: _this6.props.disabled });
			});
		},
	
		getFocusableOptionIndex: function getFocusableOptionIndex(selectedOption) {
			var options = this._visibleOptions;
			if (!options.length) return null;
	
			var focusedOption = this.state.focusedOption || selectedOption;
			if (focusedOption && !focusedOption.disabled) {
				var focusedOptionIndex = options.indexOf(focusedOption);
				if (focusedOptionIndex !== -1) {
					return focusedOptionIndex;
				}
			}
	
			for (var i = 0; i < options.length; i++) {
				if (!options[i].disabled) return i;
			}
			return null;
		},
	
		renderOuter: function renderOuter(options, valueArray, focusedOption) {
			var _this7 = this;
	
			var menu = this.renderMenu(options, valueArray, focusedOption);
			if (!menu) {
				return null;
			}
	
			return _react2['default'].createElement(
				'div',
				{ ref: function (ref) {
						return _this7.menuContainer = ref;
					}, className: 'Select-menu-outer', style: this.props.menuContainerStyle },
				_react2['default'].createElement(
					'div',
					{ ref: function (ref) {
							return _this7.menu = ref;
						}, role: 'listbox', className: 'Select-menu', id: this._instancePrefix + '-list',
						style: this.props.menuStyle,
						onScroll: this.handleMenuScroll,
						onMouseDown: this.handleMouseDownOnMenu },
					menu
				)
			);
		},
	
		render: function render() {
			var _this8 = this;
	
			var valueArray = this.getValueArray(this.props.value);
			var options = this._visibleOptions = this.filterOptions(this.props.multi ? this.getValueArray(this.props.value) : null);
			var isOpen = this.state.isOpen;
			if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
			var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);
	
			var focusedOption = null;
			if (focusedOptionIndex !== null) {
				focusedOption = this._focusedOption = options[focusedOptionIndex];
			} else {
				focusedOption = this._focusedOption = null;
			}
			var className = (0, _classnames2['default'])('Select', this.props.className, {
				'Select--multi': this.props.multi,
				'Select--single': !this.props.multi,
				'is-disabled': this.props.disabled,
				'is-focused': this.state.isFocused,
				'is-loading': this.props.isLoading,
				'is-open': isOpen,
				'is-pseudo-focused': this.state.isPseudoFocused,
				'is-searchable': this.props.searchable,
				'has-value': valueArray.length
			});
	
			var removeMessage = null;
			if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
				removeMessage = _react2['default'].createElement(
					'span',
					{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
					this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
				);
			}
	
			return _react2['default'].createElement(
				'div',
				{ ref: function (ref) {
						return _this8.wrapper = ref;
					},
					className: className,
					style: this.props.wrapperStyle },
				this.renderHiddenField(valueArray),
				_react2['default'].createElement(
					'div',
					{ ref: function (ref) {
							return _this8.control = ref;
						},
						className: 'Select-control',
						style: this.props.style,
						onKeyDown: this.handleKeyDown,
						onMouseDown: this.handleMouseDown,
						onTouchEnd: this.handleTouchEnd,
						onTouchStart: this.handleTouchStart,
						onTouchMove: this.handleTouchMove
					},
					_react2['default'].createElement(
						'span',
						{ className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' },
						this.renderValue(valueArray, isOpen),
						this.renderInput(valueArray, focusedOptionIndex)
					),
					removeMessage,
					this.renderLoading(),
					this.renderClear(),
					this.renderArrow()
				),
				isOpen ? this.renderOuter(options, !this.props.multi ? valueArray : null, focusedOption) : null
			);
		}
	
	});
	
	exports['default'] = Select;
	module.exports = exports['default'];

/***/ },

/***/ 469:
/***/ function(module, exports) {

	'use strict';
	module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(792);

/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var canUseDOM = __webpack_require__(469);
	
	var size;
	
	module.exports = function (recalc) {
	  if (!size || recalc) {
	    if (canUseDOM) {
	      var scrollDiv = document.createElement('div');
	
	      scrollDiv.style.position = 'absolute';
	      scrollDiv.style.top = '-9999px';
	      scrollDiv.style.width = '50px';
	      scrollDiv.style.height = '50px';
	      scrollDiv.style.overflow = 'scroll';
	
	      document.body.appendChild(scrollDiv);
	      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	      document.body.removeChild(scrollDiv);
	    }
	  }
	
	  return size;
	};

/***/ },

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _stripDiacritics = __webpack_require__(622);
	
	var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);
	
	function filterOptions(options, filterValue, excludeOptions, props) {
		var _this = this;
	
		if (props.ignoreAccents) {
			filterValue = (0, _stripDiacritics2['default'])(filterValue);
		}
	
		if (props.ignoreCase) {
			filterValue = filterValue.toLowerCase();
		}
	
		if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
			return i[props.valueKey];
		});
	
		return options.filter(function (option) {
			if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
			if (props.filterOption) return props.filterOption.call(_this, option, filterValue);
			if (!filterValue) return true;
			var valueTest = String(option[props.valueKey]);
			var labelTest = String(option[props.labelKey]);
			if (props.ignoreAccents) {
				if (props.matchProp !== 'label') valueTest = (0, _stripDiacritics2['default'])(valueTest);
				if (props.matchProp !== 'value') labelTest = (0, _stripDiacritics2['default'])(labelTest);
			}
			if (props.ignoreCase) {
				if (props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
				if (props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
			}
			return props.matchPos === 'start' ? props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
		});
	}
	
	module.exports = filterOptions;

/***/ },

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function menuRenderer(_ref) {
		var focusedOption = _ref.focusedOption;
		var instancePrefix = _ref.instancePrefix;
		var labelKey = _ref.labelKey;
		var onFocus = _ref.onFocus;
		var onSelect = _ref.onSelect;
		var optionClassName = _ref.optionClassName;
		var optionComponent = _ref.optionComponent;
		var optionRenderer = _ref.optionRenderer;
		var options = _ref.options;
		var valueArray = _ref.valueArray;
		var valueKey = _ref.valueKey;
		var onOptionRef = _ref.onOptionRef;
	
		var Option = optionComponent;
	
		return options.map(function (option, i) {
			var isSelected = valueArray && valueArray.indexOf(option) > -1;
			var isFocused = option === focusedOption;
			var optionClass = (0, _classnames2['default'])(optionClassName, {
				'Select-option': true,
				'is-selected': isSelected,
				'is-focused': isFocused,
				'is-disabled': option.disabled
			});
	
			return _react2['default'].createElement(
				Option,
				{
					className: optionClass,
					instancePrefix: instancePrefix,
					isDisabled: option.disabled,
					isFocused: isFocused,
					isSelected: isSelected,
					key: 'option-' + i + '-' + option[valueKey],
					onFocus: onFocus,
					onSelect: onSelect,
					option: option,
					optionIndex: i,
					ref: function (ref) {
						onOptionRef(ref, isFocused);
					}
				},
				optionRenderer(option, i)
			);
		});
	}
	
	module.exports = menuRenderer;

/***/ },

/***/ 622:
/***/ function(module, exports) {

	'use strict';
	
	var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];
	
	module.exports = function stripDiacritics(str) {
		for (var i = 0; i < map.length; i++) {
			str = str.replace(map[i].letters, map[i].base);
		}
		return str;
	};

/***/ },

/***/ 623:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = defaultCellRangeRenderer;
	
	/**
	 * Default implementation of cellRangeRenderer used by Grid.
	 * This renderer supports cell-caching while the user is scrolling.
	 */
	function defaultCellRangeRenderer(_ref) {
	  var cellCache = _ref.cellCache;
	  var cellRenderer = _ref.cellRenderer;
	  var columnSizeAndPositionManager = _ref.columnSizeAndPositionManager;
	  var columnStartIndex = _ref.columnStartIndex;
	  var columnStopIndex = _ref.columnStopIndex;
	  var horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment;
	  var isScrolling = _ref.isScrolling;
	  var rowSizeAndPositionManager = _ref.rowSizeAndPositionManager;
	  var rowStartIndex = _ref.rowStartIndex;
	  var rowStopIndex = _ref.rowStopIndex;
	  var scrollLeft = _ref.scrollLeft;
	  var scrollTop = _ref.scrollTop;
	  var styleCache = _ref.styleCache;
	  var verticalOffsetAdjustment = _ref.verticalOffsetAdjustment;
	  var visibleColumnIndices = _ref.visibleColumnIndices;
	  var visibleRowIndices = _ref.visibleRowIndices;
	
	  var renderedCells = [];
	  var offsetAdjusted = verticalOffsetAdjustment || horizontalOffsetAdjustment;
	  var canCacheStyle = !isScrolling || !offsetAdjusted;
	
	  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
	    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);
	
	    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
	      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
	      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
	      var key = rowIndex + '-' + columnIndex;
	      var style = void 0;
	
	      // Cache style objects so shallow-compare doesn't re-render unnecessarily.
	      if (canCacheStyle && styleCache[key]) {
	        style = styleCache[key];
	      } else {
	        style = {
	          height: rowDatum.size,
	          left: columnDatum.offset + horizontalOffsetAdjustment,
	          position: 'absolute',
	          top: rowDatum.offset + verticalOffsetAdjustment,
	          width: columnDatum.size
	        };
	
	        styleCache[key] = style;
	      }
	
	      var cellRendererParams = {
	        columnIndex: columnIndex,
	        isScrolling: isScrolling,
	        isVisible: isVisible,
	        key: key,
	        rowIndex: rowIndex,
	        style: style
	      };
	
	      var renderedCell = void 0;
	
	      // Avoid re-creating cells while scrolling.
	      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
	      // If a scroll is in progress- cache and reuse cells.
	      // This cache will be thrown away once scrolling completes.
	      // However if we are scaling scroll positions and sizes, we should also avoid caching.
	      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
	      // For more info refer to issue #395
	      if (isScrolling && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
	        if (!cellCache[key]) {
	          cellCache[key] = cellRenderer(cellRendererParams);
	        }
	
	        renderedCell = cellCache[key];
	
	        // If the user is no longer scrolling, don't cache cells.
	        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
	      } else {
	        renderedCell = cellRenderer(cellRendererParams);
	      }
	
	      if (renderedCell == null || renderedCell === false) {
	        continue;
	      }
	
	      renderedCells.push(renderedCell);
	    }
	  }
	
	  return renderedCells;
	}

/***/ },

/***/ 792:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var shallowEqual = __webpack_require__(583);
	
	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	module.exports = shallowCompare;

/***/ },

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	
	var sizerStyle = { position: 'absolute', top: 0, left: 0, visibility: 'hidden', height: 0, overflow: 'scroll', whiteSpace: 'pre' };
	
	var AutosizeInput = React.createClass({
		displayName: 'AutosizeInput',
	
		propTypes: {
			className: React.PropTypes.string, // className for the outer element
			defaultValue: React.PropTypes.any, // default field value
			inputClassName: React.PropTypes.string, // className for the input element
			inputStyle: React.PropTypes.object, // css styles for the input element
			minWidth: React.PropTypes.oneOfType([// minimum width for input element
			React.PropTypes.number, React.PropTypes.string]),
			onChange: React.PropTypes.func, // onChange handler: function(newValue) {}
			placeholder: React.PropTypes.string, // placeholder text
			placeholderIsMinWidth: React.PropTypes.bool, // don't collapse size to less than the placeholder
			style: React.PropTypes.object, // css styles for the outer element
			value: React.PropTypes.any },
		// field value
		getDefaultProps: function getDefaultProps() {
			return {
				minWidth: 1
			};
		},
		getInitialState: function getInitialState() {
			return {
				inputWidth: this.props.minWidth
			};
		},
		componentDidMount: function componentDidMount() {
			this.copyInputStyles();
			this.updateInputWidth();
		},
		componentDidUpdate: function componentDidUpdate() {
			this.updateInputWidth();
		},
		copyInputStyles: function copyInputStyles() {
			if (!this.isMounted() || !window.getComputedStyle) {
				return;
			}
			var inputStyle = window.getComputedStyle(this.refs.input);
			if (!inputStyle) {
				return;
			}
			var widthNode = this.refs.sizer;
			widthNode.style.fontSize = inputStyle.fontSize;
			widthNode.style.fontFamily = inputStyle.fontFamily;
			widthNode.style.fontWeight = inputStyle.fontWeight;
			widthNode.style.fontStyle = inputStyle.fontStyle;
			widthNode.style.letterSpacing = inputStyle.letterSpacing;
			if (this.props.placeholder) {
				var placeholderNode = this.refs.placeholderSizer;
				placeholderNode.style.fontSize = inputStyle.fontSize;
				placeholderNode.style.fontFamily = inputStyle.fontFamily;
				placeholderNode.style.fontWeight = inputStyle.fontWeight;
				placeholderNode.style.fontStyle = inputStyle.fontStyle;
				placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
			}
		},
		updateInputWidth: function updateInputWidth() {
			if (!this.isMounted() || typeof this.refs.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = undefined;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.refs.sizer.scrollWidth, this.refs.placeholderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.refs.sizer.scrollWidth + 2;
			}
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		},
		getInput: function getInput() {
			return this.refs.input;
		},
		focus: function focus() {
			this.refs.input.focus();
		},
		blur: function blur() {
			this.refs.input.blur();
		},
		select: function select() {
			this.refs.input.select();
		},
		render: function render() {
			var sizerValue = this.props.defaultValue || this.props.value || '';
			var wrapperStyle = this.props.style || {};
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';
			var inputStyle = _extends({}, this.props.inputStyle);
			inputStyle.width = this.state.inputWidth + 'px';
			inputStyle.boxSizing = 'content-box';
			var inputProps = _extends({}, this.props);
			inputProps.className = this.props.inputClassName;
			inputProps.style = inputStyle;
			// ensure props meant for `AutosizeInput` don't end up on the `input`
			delete inputProps.inputClassName;
			delete inputProps.inputStyle;
			delete inputProps.minWidth;
			delete inputProps.placeholderIsMinWidth;
			return React.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				React.createElement('input', _extends({}, inputProps, { ref: 'input' })),
				React.createElement(
					'div',
					{ ref: 'sizer', style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? React.createElement(
					'div',
					{ ref: 'placeholderSizer', style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	});
	
	module.exports = AutosizeInput;

/***/ },

/***/ 844:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Select = __webpack_require__(461);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _utilsStripDiacritics = __webpack_require__(622);
	
	var _utilsStripDiacritics2 = _interopRequireDefault(_utilsStripDiacritics);
	
	var propTypes = {
		autoload: _react2['default'].PropTypes.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
		cache: _react2['default'].PropTypes.any, // object to use to cache results; set to null/false to disable caching
		children: _react2['default'].PropTypes.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
		ignoreAccents: _react2['default'].PropTypes.bool, // strip diacritics when filtering; defaults to true
		ignoreCase: _react2['default'].PropTypes.bool, // perform case-insensitive filtering; defaults to true
		loadingPlaceholder: _react2['default'].PropTypes.oneOfType([// replaces the placeholder while options are loading
		_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]),
		loadOptions: _react2['default'].PropTypes.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
		options: _react.PropTypes.array.isRequired, // array of options
		placeholder: _react2['default'].PropTypes.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
		_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]),
		noResultsText: _react2['default'].PropTypes.oneOfType([// field noResultsText, displayed when no options come back from the server
		_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]),
		onChange: _react2['default'].PropTypes.func, // onChange handler: function (newValue) {}
		searchPromptText: _react2['default'].PropTypes.oneOfType([// label to prompt for search input
		_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]),
		onInputChange: _react2['default'].PropTypes.func, // optional for keeping track of what is being typed
		value: _react2['default'].PropTypes.any };
	
	// initial field value
	var defaultCache = {};
	
	var defaultProps = {
		autoload: true,
		cache: defaultCache,
		children: defaultChildren,
		ignoreAccents: true,
		ignoreCase: true,
		loadingPlaceholder: 'Loading...',
		options: [],
		searchPromptText: 'Type to search'
	};
	
	var Async = (function (_Component) {
		_inherits(Async, _Component);
	
		function Async(props, context) {
			_classCallCheck(this, Async);
	
			_get(Object.getPrototypeOf(Async.prototype), 'constructor', this).call(this, props, context);
	
			this._cache = props.cache === defaultCache ? {} : props.cache;
	
			this.state = {
				isLoading: false,
				options: props.options
			};
	
			this._onInputChange = this._onInputChange.bind(this);
		}
	
		_createClass(Async, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var autoload = this.props.autoload;
	
				if (autoload) {
					this.loadOptions('');
				}
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(nextProps, nextState) {
				var _this = this;
	
				var propertiesToSync = ['options'];
				propertiesToSync.forEach(function (prop) {
					if (_this.props[prop] !== nextProps[prop]) {
						_this.setState(_defineProperty({}, prop, nextProps[prop]));
					}
				});
			}
		}, {
			key: 'clearOptions',
			value: function clearOptions() {
				this.setState({ options: [] });
			}
		}, {
			key: 'loadOptions',
			value: function loadOptions(inputValue) {
				var _this2 = this;
	
				var loadOptions = this.props.loadOptions;
	
				var cache = this._cache;
	
				if (cache && cache.hasOwnProperty(inputValue)) {
					this.setState({
						options: cache[inputValue]
					});
	
					return;
				}
	
				var callback = function callback(error, data) {
					if (callback === _this2._callback) {
						_this2._callback = null;
	
						var options = data && data.options || [];
	
						if (cache) {
							cache[inputValue] = options;
						}
	
						_this2.setState({
							isLoading: false,
							options: options
						});
					}
				};
	
				// Ignore all but the most recent request
				this._callback = callback;
	
				var promise = loadOptions(inputValue, callback);
				if (promise) {
					promise.then(function (data) {
						return callback(null, data);
					}, function (error) {
						return callback(error);
					});
				}
	
				if (this._callback && !this.state.isLoading) {
					this.setState({
						isLoading: true
					});
				}
	
				return inputValue;
			}
		}, {
			key: '_onInputChange',
			value: function _onInputChange(inputValue) {
				var _props = this.props;
				var ignoreAccents = _props.ignoreAccents;
				var ignoreCase = _props.ignoreCase;
				var onInputChange = _props.onInputChange;
	
				if (ignoreAccents) {
					inputValue = (0, _utilsStripDiacritics2['default'])(inputValue);
				}
	
				if (ignoreCase) {
					inputValue = inputValue.toLowerCase();
				}
	
				if (onInputChange) {
					onInputChange(inputValue);
				}
	
				return this.loadOptions(inputValue);
			}
		}, {
			key: 'inputValue',
			value: function inputValue() {
				if (this.select) {
					return this.select.state.inputValue;
				}
				return '';
			}
		}, {
			key: 'noResultsText',
			value: function noResultsText() {
				var _props2 = this.props;
				var loadingPlaceholder = _props2.loadingPlaceholder;
				var noResultsText = _props2.noResultsText;
				var searchPromptText = _props2.searchPromptText;
				var isLoading = this.state.isLoading;
	
				var inputValue = this.inputValue();
	
				if (isLoading) {
					return loadingPlaceholder;
				}
				if (inputValue && noResultsText) {
					return noResultsText;
				}
				return searchPromptText;
			}
		}, {
			key: 'focus',
			value: function focus() {
				this.select.focus();
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;
	
				var _props3 = this.props;
				var children = _props3.children;
				var loadingPlaceholder = _props3.loadingPlaceholder;
				var placeholder = _props3.placeholder;
				var _state = this.state;
				var isLoading = _state.isLoading;
				var options = _state.options;
	
				var props = {
					noResultsText: this.noResultsText(),
					placeholder: isLoading ? loadingPlaceholder : placeholder,
					options: isLoading && loadingPlaceholder ? [] : options,
					ref: function ref(_ref) {
						return _this3.select = _ref;
					},
					onChange: function onChange(newValues) {
						if (_this3.props.multi && _this3.props.value && newValues.length > _this3.props.value.length) {
							_this3.clearOptions();
						}
						_this3.props.onChange(newValues);
					}
				};
	
				return children(_extends({}, this.props, props, {
					isLoading: isLoading,
					onInputChange: this._onInputChange
				}));
			}
		}]);
	
		return Async;
	})(_react.Component);
	
	exports['default'] = Async;
	
	Async.propTypes = propTypes;
	Async.defaultProps = defaultProps;
	
	function defaultChildren(props) {
		return _react2['default'].createElement(_Select2['default'], props);
	};
	module.exports = exports['default'];

/***/ },

/***/ 845:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Select = __webpack_require__(461);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function reduce(obj) {
		var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
		return Object.keys(obj).reduce(function (props, key) {
			var value = obj[key];
			if (value !== undefined) props[key] = value;
			return props;
		}, props);
	}
	
	var AsyncCreatable = _react2['default'].createClass({
		displayName: 'AsyncCreatableSelect',
	
		render: function render() {
			var _this = this;
	
			return _react2['default'].createElement(
				_Select2['default'].Async,
				this.props,
				function (asyncProps) {
					return _react2['default'].createElement(
						_Select2['default'].Creatable,
						_this.props,
						function (creatableProps) {
							return _react2['default'].createElement(_Select2['default'], _extends({}, reduce(asyncProps, reduce(creatableProps, {})), {
								onInputChange: function (input) {
									creatableProps.onInputChange(input);
									return asyncProps.onInputChange(input);
								},
								ref: function (ref) {
									creatableProps.ref(ref);
									asyncProps.ref(ref);
								}
							}));
						}
					);
				}
			);
		}
	});
	
	module.exports = AsyncCreatable;

/***/ },

/***/ 846:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Select = __webpack_require__(461);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _utilsDefaultFilterOptions = __webpack_require__(620);
	
	var _utilsDefaultFilterOptions2 = _interopRequireDefault(_utilsDefaultFilterOptions);
	
	var _utilsDefaultMenuRenderer = __webpack_require__(621);
	
	var _utilsDefaultMenuRenderer2 = _interopRequireDefault(_utilsDefaultMenuRenderer);
	
	var Creatable = _react2['default'].createClass({
		displayName: 'CreatableSelect',
	
		propTypes: {
			// Child function responsible for creating the inner Select component
			// This component can be used to compose HOCs (eg Creatable and Async)
			// (props: Object): PropTypes.element
			children: _react2['default'].PropTypes.func,
	
			// See Select.propTypes.filterOptions
			filterOptions: _react2['default'].PropTypes.any,
	
			// Searches for any matching option within the set of options.
			// This function prevents duplicate options from being created.
			// ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
			isOptionUnique: _react2['default'].PropTypes.func,
	
			// Determines if the current input text represents a valid option.
			// ({ label: string }): boolean
			isValidNewOption: _react2['default'].PropTypes.func,
	
			// See Select.propTypes.menuRenderer
			menuRenderer: _react2['default'].PropTypes.any,
	
			// Factory to create new option.
			// ({ label: string, labelKey: string, valueKey: string }): Object
			newOptionCreator: _react2['default'].PropTypes.func,
	
			// input change handler: function (inputValue) {}
			onInputChange: _react2['default'].PropTypes.func,
	
			// input keyDown handler: function (event) {}
			onInputKeyDown: _react2['default'].PropTypes.func,
	
			// new option click handler: function (option) {}
			onNewOptionClick: _react2['default'].PropTypes.func,
	
			// See Select.propTypes.options
			options: _react2['default'].PropTypes.array,
	
			// Creates prompt/placeholder option text.
			// (filterText: string): string
			promptTextCreator: _react2['default'].PropTypes.func,
	
			// Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
			shouldKeyDownEventCreateNewOption: _react2['default'].PropTypes.func
		},
	
		// Default prop methods
		statics: {
			isOptionUnique: isOptionUnique,
			isValidNewOption: isValidNewOption,
			newOptionCreator: newOptionCreator,
			promptTextCreator: promptTextCreator,
			shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
		},
	
		getDefaultProps: function getDefaultProps() {
			return {
				filterOptions: _utilsDefaultFilterOptions2['default'],
				isOptionUnique: isOptionUnique,
				isValidNewOption: isValidNewOption,
				menuRenderer: _utilsDefaultMenuRenderer2['default'],
				newOptionCreator: newOptionCreator,
				promptTextCreator: promptTextCreator,
				shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
			};
		},
	
		createNewOption: function createNewOption() {
			var _props = this.props;
			var isValidNewOption = _props.isValidNewOption;
			var newOptionCreator = _props.newOptionCreator;
			var onNewOptionClick = _props.onNewOptionClick;
			var _props$options = _props.options;
			var options = _props$options === undefined ? [] : _props$options;
			var shouldKeyDownEventCreateNewOption = _props.shouldKeyDownEventCreateNewOption;
	
			if (isValidNewOption({ label: this.inputValue })) {
				var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
				var _isOptionUnique = this.isOptionUnique({ option: option });
	
				// Don't add the same option twice.
				if (_isOptionUnique) {
					if (onNewOptionClick) {
						onNewOptionClick(option);
					} else {
						options.unshift(option);
	
						this.select.selectValue(option);
					}
				}
			}
		},
	
		filterOptions: function filterOptions() {
			var _props2 = this.props;
			var filterOptions = _props2.filterOptions;
			var isValidNewOption = _props2.isValidNewOption;
			var options = _props2.options;
			var promptTextCreator = _props2.promptTextCreator;
	
			// TRICKY Check currently selected options as well.
			// Don't display a create-prompt for a value that's selected.
			// This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.
			var excludeOptions = arguments[2] || [];
	
			var filteredOptions = filterOptions.apply(undefined, arguments) || [];
	
			if (isValidNewOption({ label: this.inputValue })) {
				var _newOptionCreator = this.props.newOptionCreator;
	
				var option = _newOptionCreator({
					label: this.inputValue,
					labelKey: this.labelKey,
					valueKey: this.valueKey
				});
	
				// TRICKY Compare to all options (not just filtered options) in case option has already been selected).
				// For multi-selects, this would remove it from the filtered list.
				var _isOptionUnique2 = this.isOptionUnique({
					option: option,
					options: excludeOptions.concat(filteredOptions)
				});
	
				if (_isOptionUnique2) {
					var _prompt = promptTextCreator(this.inputValue);
	
					this._createPlaceholderOption = _newOptionCreator({
						label: _prompt,
						labelKey: this.labelKey,
						valueKey: this.valueKey
					});
	
					filteredOptions.unshift(this._createPlaceholderOption);
				}
			}
	
			return filteredOptions;
		},
	
		isOptionUnique: function isOptionUnique(_ref2) {
			var option = _ref2.option;
			var options = _ref2.options;
			var isOptionUnique = this.props.isOptionUnique;
	
			options = options || this.select.filterOptions();
	
			return isOptionUnique({
				labelKey: this.labelKey,
				option: option,
				options: options,
				valueKey: this.valueKey
			});
		},
	
		menuRenderer: function menuRenderer(params) {
			var menuRenderer = this.props.menuRenderer;
	
			return menuRenderer(_extends({}, params, {
				onSelect: this.onOptionSelect,
				selectValue: this.onOptionSelect
			}));
		},
	
		onInputChange: function onInputChange(input) {
			var onInputChange = this.props.onInputChange;
	
			if (onInputChange) {
				onInputChange(input);
			}
	
			// This value may be needed in between Select mounts (when this.select is null)
			this.inputValue = input;
		},
	
		onInputKeyDown: function onInputKeyDown(event) {
			var _props3 = this.props;
			var shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption;
			var onInputKeyDown = _props3.onInputKeyDown;
	
			var focusedOption = this.select.getFocusedOption();
	
			if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption({ keyCode: event.keyCode })) {
				this.createNewOption();
	
				// Prevent decorated Select from doing anything additional with this keyDown event
				event.preventDefault();
			} else if (onInputKeyDown) {
				onInputKeyDown(event);
			}
		},
	
		onOptionSelect: function onOptionSelect(option, event) {
			if (option === this._createPlaceholderOption) {
				this.createNewOption();
			} else {
				this.select.selectValue(option);
			}
		},
	
		render: function render() {
			var _this = this;
	
			var _props4 = this.props;
			var newOptionCreator = _props4.newOptionCreator;
			var shouldKeyDownEventCreateNewOption = _props4.shouldKeyDownEventCreateNewOption;
	
			var restProps = _objectWithoutProperties(_props4, ['newOptionCreator', 'shouldKeyDownEventCreateNewOption']);
	
			var children = this.props.children;
	
			// We can't use destructuring default values to set the children,
			// because it won't apply work if `children` is null. A falsy check is
			// more reliable in real world use-cases.
			if (!children) {
				children = defaultChildren;
			}
	
			var props = _extends({}, restProps, {
				allowCreate: true,
				filterOptions: this.filterOptions,
				menuRenderer: this.menuRenderer,
				onInputChange: this.onInputChange,
				onInputKeyDown: this.onInputKeyDown,
				ref: function ref(_ref) {
					_this.select = _ref;
	
					// These values may be needed in between Select mounts (when this.select is null)
					if (_ref) {
						_this.labelKey = _ref.props.labelKey;
						_this.valueKey = _ref.props.valueKey;
					}
				}
			});
	
			return children(props);
		}
	});
	
	function defaultChildren(props) {
		return _react2['default'].createElement(_Select2['default'], props);
	};
	
	function isOptionUnique(_ref3) {
		var option = _ref3.option;
		var options = _ref3.options;
		var labelKey = _ref3.labelKey;
		var valueKey = _ref3.valueKey;
	
		return options.filter(function (existingOption) {
			return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
		}).length === 0;
	};
	
	function isValidNewOption(_ref4) {
		var label = _ref4.label;
	
		return !!label;
	};
	
	function newOptionCreator(_ref5) {
		var label = _ref5.label;
		var labelKey = _ref5.labelKey;
		var valueKey = _ref5.valueKey;
	
		var option = {};
		option[valueKey] = label;
		option[labelKey] = label;
		option.className = 'Select-create-option-placeholder';
		return option;
	};
	
	function promptTextCreator(label) {
		return 'Create option "' + label + '"';
	}
	
	function shouldKeyDownEventCreateNewOption(_ref6) {
		var keyCode = _ref6.keyCode;
	
		switch (keyCode) {
			case 9: // TAB
			case 13: // ENTER
			case 188:
				// COMMA
				return true;
		}
	
		return false;
	};
	
	module.exports = Creatable;

/***/ },

/***/ 847:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Option = _react2['default'].createClass({
		displayName: 'Option',
	
		propTypes: {
			children: _react2['default'].PropTypes.node,
			className: _react2['default'].PropTypes.string, // className (based on mouse position)
			instancePrefix: _react2['default'].PropTypes.string.isRequired, // unique prefix for the ids (used for aria)
			isDisabled: _react2['default'].PropTypes.bool, // the option is disabled
			isFocused: _react2['default'].PropTypes.bool, // the option is focused
			isSelected: _react2['default'].PropTypes.bool, // the option is selected
			onFocus: _react2['default'].PropTypes.func, // method to handle mouseEnter on option element
			onSelect: _react2['default'].PropTypes.func, // method to handle click on option element
			onUnfocus: _react2['default'].PropTypes.func, // method to handle mouseLeave on option element
			option: _react2['default'].PropTypes.object.isRequired, // object that is base for that option
			optionIndex: _react2['default'].PropTypes.number },
		// index of the option, used to generate unique ids for aria
		blockEvent: function blockEvent(event) {
			event.preventDefault();
			event.stopPropagation();
			if (event.target.tagName !== 'A' || !('href' in event.target)) {
				return;
			}
			if (event.target.target) {
				window.open(event.target.href, event.target.target);
			} else {
				window.location.href = event.target.href;
			}
		},
	
		handleMouseDown: function handleMouseDown(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onSelect(this.props.option, event);
		},
	
		handleMouseEnter: function handleMouseEnter(event) {
			this.onFocus(event);
		},
	
		handleMouseMove: function handleMouseMove(event) {
			this.onFocus(event);
		},
	
		handleTouchEnd: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;
	
			this.handleMouseDown(event);
		},
	
		handleTouchMove: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		},
	
		handleTouchStart: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		},
	
		onFocus: function onFocus(event) {
			if (!this.props.isFocused) {
				this.props.onFocus(this.props.option, event);
			}
		},
		render: function render() {
			var _props = this.props;
			var option = _props.option;
			var instancePrefix = _props.instancePrefix;
			var optionIndex = _props.optionIndex;
	
			var className = (0, _classnames2['default'])(this.props.className, option.className);
	
			return option.disabled ? _react2['default'].createElement(
				'div',
				{ className: className,
					onMouseDown: this.blockEvent,
					onClick: this.blockEvent },
				this.props.children
			) : _react2['default'].createElement(
				'div',
				{ className: className,
					style: option.style,
					role: 'option',
					onMouseDown: this.handleMouseDown,
					onMouseEnter: this.handleMouseEnter,
					onMouseMove: this.handleMouseMove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEnd,
					id: instancePrefix + '-option-' + optionIndex,
					title: option.title },
				this.props.children
			);
		}
	});
	
	module.exports = Option;

/***/ },

/***/ 848:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Value = _react2['default'].createClass({
	
		displayName: 'Value',
	
		propTypes: {
			children: _react2['default'].PropTypes.node,
			disabled: _react2['default'].PropTypes.bool, // disabled prop passed to ReactSelect
			id: _react2['default'].PropTypes.string, // Unique id for the value - used for aria
			onClick: _react2['default'].PropTypes.func, // method to handle click on value label
			onRemove: _react2['default'].PropTypes.func, // method to handle removal of the value
			value: _react2['default'].PropTypes.object.isRequired },
	
		// the option object for this value
		handleMouseDown: function handleMouseDown(event) {
			if (event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			if (this.props.onClick) {
				event.stopPropagation();
				this.props.onClick(this.props.value, event);
				return;
			}
			if (this.props.value.href) {
				event.stopPropagation();
			}
		},
	
		onRemove: function onRemove(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onRemove(this.props.value);
		},
	
		handleTouchEndRemove: function handleTouchEndRemove(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;
	
			// Fire the mouse events
			this.onRemove(event);
		},
	
		handleTouchMove: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		},
	
		handleTouchStart: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		},
	
		renderRemoveIcon: function renderRemoveIcon() {
			if (this.props.disabled || !this.props.onRemove) return;
			return _react2['default'].createElement(
				'span',
				{ className: 'Select-value-icon',
					'aria-hidden': 'true',
					onMouseDown: this.onRemove,
					onTouchEnd: this.handleTouchEndRemove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove },
				'×'
			);
		},
	
		renderLabel: function renderLabel() {
			var className = 'Select-value-label';
			return this.props.onClick || this.props.value.href ? _react2['default'].createElement(
				'a',
				{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
				this.props.children
			) : _react2['default'].createElement(
				'span',
				{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
				this.props.children
			);
		},
	
		render: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: (0, _classnames2['default'])('Select-value', this.props.value.className),
					style: this.props.value.style,
					title: this.props.value.title
				},
				this.renderRemoveIcon(),
				this.renderLabel()
			);
		}
	
	});
	
	module.exports = Value;

/***/ },

/***/ 849:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports["default"] = arrowRenderer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function arrowRenderer(_ref) {
		var onMouseDown = _ref.onMouseDown;
	
		return _react2["default"].createElement("span", {
			className: "Select-arrow",
			onMouseDown: onMouseDown
		});
	}
	
	;
	module.exports = exports["default"];

/***/ },

/***/ 850:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = clearRenderer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function clearRenderer() {
		return _react2['default'].createElement('span', {
			className: 'Select-clear',
			dangerouslySetInnerHTML: { __html: '&times;' }
		});
	}
	
	;
	module.exports = exports['default'];

/***/ },

/***/ 851:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSelect = __webpack_require__(461);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	var _AutoSizer = __webpack_require__(855);
	
	var _AutoSizer2 = _interopRequireDefault(_AutoSizer);
	
	var _List = __webpack_require__(864);
	
	var _List2 = _interopRequireDefault(_List);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import directly to avoid Webpack bundling the parts of react-virtualized that we are not using
	
	
	var VirtualizedSelect = function (_Component) {
	  _inherits(VirtualizedSelect, _Component);
	
	  function VirtualizedSelect(props, context) {
	    _classCallCheck(this, VirtualizedSelect);
	
	    var _this = _possibleConstructorReturn(this, (VirtualizedSelect.__proto__ || Object.getPrototypeOf(VirtualizedSelect)).call(this, props, context));
	
	    _this._renderMenu = _this._renderMenu.bind(_this);
	    _this._optionRenderer = _this._optionRenderer.bind(_this);
	    _this._setListRef = _this._setListRef.bind(_this);
	    _this._setSelectRef = _this._setSelectRef.bind(_this);
	    return _this;
	  }
	
	  /** See List#recomputeRowHeights */
	
	
	  _createClass(VirtualizedSelect, [{
	    key: 'recomputeOptionHeights',
	    value: function recomputeOptionHeights() {
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      if (this._listRef) {
	        this._listRef.recomputeRowHeights(index);
	      }
	    }
	
	    /** See Select#focus (in react-select) */
	
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (this._selectRef) {
	        return this._selectRef.focus();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var SelectComponent = this._getSelectComponent();
	
	      return _react2.default.createElement(SelectComponent, _extends({}, this.props, {
	        ref: this._setSelectRef,
	        menuRenderer: this._renderMenu,
	        menuStyle: { overflow: 'hidden' }
	      }));
	    }
	
	    // See https://github.com/JedWatson/react-select/#effeciently-rendering-large-lists-with-windowing
	
	  }, {
	    key: '_renderMenu',
	    value: function _renderMenu(_ref) {
	      var _this2 = this;
	
	      var focusedOption = _ref.focusedOption;
	      var focusOption = _ref.focusOption;
	      var labelKey = _ref.labelKey;
	      var onSelect = _ref.onSelect;
	      var options = _ref.options;
	      var selectValue = _ref.selectValue;
	      var valueArray = _ref.valueArray;
	      var _props = this.props;
	      var listProps = _props.listProps;
	      var optionRenderer = _props.optionRenderer;
	
	      var focusedOptionIndex = options.indexOf(focusedOption);
	      var height = this._calculateListHeight({ options: options });
	      var innerRowRenderer = optionRenderer || this._optionRenderer;
	
	      // react-select 1.0.0-rc2 passes duplicate `onSelect` and `selectValue` props to `menuRenderer`
	      // The `Creatable` HOC only overrides `onSelect` which breaks an edge-case
	      // In order to support creating items via clicking on the placeholder option,
	      // We need to ensure that the specified `onSelect` handle is the one we use.
	      // See issue #33
	
	      function wrappedRowRenderer(_ref2) {
	        var index = _ref2.index;
	        var key = _ref2.key;
	        var style = _ref2.style;
	
	        var option = options[index];
	
	        return innerRowRenderer({
	          focusedOption: focusedOption,
	          focusedOptionIndex: focusedOptionIndex,
	          focusOption: focusOption,
	          key: key,
	          labelKey: labelKey,
	          onSelect: onSelect,
	          option: option,
	          optionIndex: index,
	          options: options,
	          selectValue: onSelect,
	          style: style,
	          valueArray: valueArray
	        });
	      }
	
	      return _react2.default.createElement(
	        _AutoSizer2.default,
	        { disableHeight: true },
	        function (_ref3) {
	          var width = _ref3.width;
	          return _react2.default.createElement(_List2.default, _extends({
	            className: 'VirtualSelectGrid',
	            height: height,
	            ref: _this2._setListRef,
	            rowCount: options.length,
	            rowHeight: function rowHeight(_ref4) {
	              var index = _ref4.index;
	              return _this2._getOptionHeight({
	                option: options[index]
	              });
	            },
	            rowRenderer: wrappedRowRenderer,
	            scrollToIndex: focusedOptionIndex,
	            width: width
	          }, listProps));
	        }
	      );
	    }
	  }, {
	    key: '_calculateListHeight',
	    value: function _calculateListHeight(_ref5) {
	      var options = _ref5.options;
	      var maxHeight = this.props.maxHeight;
	
	
	      var height = 0;
	
	      for (var optionIndex = 0; optionIndex < options.length; optionIndex++) {
	        var option = options[optionIndex];
	
	        height += this._getOptionHeight({ option: option });
	
	        if (height > maxHeight) {
	          return maxHeight;
	        }
	      }
	
	      return height;
	    }
	  }, {
	    key: '_getOptionHeight',
	    value: function _getOptionHeight(_ref6) {
	      var option = _ref6.option;
	      var optionHeight = this.props.optionHeight;
	
	
	      return optionHeight instanceof Function ? optionHeight({ option: option }) : optionHeight;
	    }
	  }, {
	    key: '_getSelectComponent',
	    value: function _getSelectComponent() {
	      var _props2 = this.props;
	      var async = _props2.async;
	      var selectComponent = _props2.selectComponent;
	
	
	      if (selectComponent) {
	        return selectComponent;
	      } else if (async) {
	        return _reactSelect2.default.Async;
	      } else {
	        return _reactSelect2.default;
	      }
	    }
	  }, {
	    key: '_optionRenderer',
	    value: function _optionRenderer(_ref7) {
	      var focusedOption = _ref7.focusedOption;
	      var focusOption = _ref7.focusOption;
	      var key = _ref7.key;
	      var labelKey = _ref7.labelKey;
	      var option = _ref7.option;
	      var selectValue = _ref7.selectValue;
	      var style = _ref7.style;
	      var valueArray = _ref7.valueArray;
	
	      var className = ['VirtualizedSelectOption'];
	
	      if (option === focusedOption) {
	        className.push('VirtualizedSelectFocusedOption');
	      }
	
	      if (option.disabled) {
	        className.push('VirtualizedSelectDisabledOption');
	      }
	
	      if (valueArray && valueArray.indexOf(option) >= 0) {
	        className.push('VirtualizedSelectSelectedOption');
	      }
	
	      var events = option.disabled ? {} : {
	        onClick: function onClick() {
	          return selectValue(option);
	        },
	        onMouseOver: function onMouseOver() {
	          return focusOption(option);
	        }
	      };
	
	      return _react2.default.createElement(
	        'div',
	        _extends({
	          className: className.join(' '),
	          key: key,
	          style: style
	        }, events),
	        option[labelKey]
	      );
	    }
	  }, {
	    key: '_setListRef',
	    value: function _setListRef(ref) {
	      this._listRef = ref;
	    }
	  }, {
	    key: '_setSelectRef',
	    value: function _setSelectRef(ref) {
	      this._selectRef = ref;
	    }
	  }]);
	
	  return VirtualizedSelect;
	}(_react.Component);
	
	VirtualizedSelect.propTypes = {
	  async: _react.PropTypes.bool,
	  listProps: _react.PropTypes.object,
	  maxHeight: _react.PropTypes.number.isRequired,
	  optionHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
	  optionRenderer: _react.PropTypes.func,
	  selectComponent: _react.PropTypes.func
	};
	VirtualizedSelect.defaultProps = {
	  async: false,
	  maxHeight: 200,
	  optionHeight: 35
	};
	exports.default = VirtualizedSelect;

/***/ },

/***/ 852:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _VirtualizedSelect = __webpack_require__(851);
	
	var _VirtualizedSelect2 = _interopRequireDefault(_VirtualizedSelect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _VirtualizedSelect2.default;

/***/ },

/***/ 853:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _VirtualizedSelect = __webpack_require__(852);
	
	var _VirtualizedSelect2 = _interopRequireDefault(_VirtualizedSelect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _VirtualizedSelect2.default;

/***/ },

/***/ 854:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsShallowCompare = __webpack_require__(534);
	
	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);
	
	var _detectElementResize = __webpack_require__(866);
	
	var _detectElementResize2 = _interopRequireDefault(_detectElementResize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Decorator component that automatically adjusts the width and height of a single child.
	 * Child component should not be declared as a child but should rather be specified by a `ChildComponent` property.
	 * All other properties will be passed through to the child component.
	 */
	var AutoSizer = function (_Component) {
	  _inherits(AutoSizer, _Component);
	
	  function AutoSizer(props) {
	    _classCallCheck(this, AutoSizer);
	
	    var _this = _possibleConstructorReturn(this, (AutoSizer.__proto__ || Object.getPrototypeOf(AutoSizer)).call(this, props));
	
	    _this.state = {
	      height: 0,
	      width: 0
	    };
	
	    _this._onResize = _this._onResize.bind(_this);
	    _this._setRef = _this._setRef.bind(_this);
	    return _this;
	  }
	
	  _createClass(AutoSizer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Delay access of parentNode until mount.
	      // This handles edge-cases where the component has already been unmounted before its ref has been set,
	      // As well as libraries like react-lite which have a slightly different lifecycle.
	      this._parentNode = this._autoSizer.parentNode;
	
	      // Defer requiring resize handler in order to support server-side rendering.
	      // See issue #41
	      this._detectElementResize = (0, _detectElementResize2.default)();
	      this._detectElementResize.addResizeListener(this._parentNode, this._onResize);
	
	      this._onResize();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._detectElementResize) {
	        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var disableHeight = _props.disableHeight;
	      var disableWidth = _props.disableWidth;
	      var _state = this.state;
	      var height = _state.height;
	      var width = _state.width;
	
	      // Outer div should not force width/height since that may prevent containers from shrinking.
	      // Inner component should overflow and use calculated width/height.
	      // See issue #68 for more information.
	
	      var outerStyle = { overflow: 'visible' };
	
	      if (!disableHeight) {
	        outerStyle.height = 0;
	      }
	
	      if (!disableWidth) {
	        outerStyle.width = 0;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        {
	          ref: this._setRef,
	          style: outerStyle
	        },
	        children({ height: height, width: width })
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      var onResize = this.props.onResize;
	
	      // Gaurd against AutoSizer component being removed from the DOM immediately after being added.
	      // This can result in invalid style values which can result in NaN values if we don't handle them.
	      // See issue #150 for more context.
	
	      var boundingRect = this._parentNode.getBoundingClientRect();
	      var height = boundingRect.height || 0;
	      var width = boundingRect.width || 0;
	
	      var style = window.getComputedStyle(this._parentNode) || {};
	      var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
	      var paddingRight = parseInt(style.paddingRight, 10) || 0;
	      var paddingTop = parseInt(style.paddingTop, 10) || 0;
	      var paddingBottom = parseInt(style.paddingBottom, 10) || 0;
	
	      this.setState({
	        height: height - paddingTop - paddingBottom,
	        width: width - paddingLeft - paddingRight
	      });
	
	      onResize({ height: height, width: width });
	    }
	  }, {
	    key: '_setRef',
	    value: function _setRef(autoSizer) {
	      this._autoSizer = autoSizer;
	    }
	  }]);
	
	  return AutoSizer;
	}(_react.Component);
	
	AutoSizer.defaultProps = {
	  onResize: function onResize() {}
	};
	exports.default = AutoSizer;
	process.env.NODE_ENV !== "production" ? AutoSizer.propTypes = {
	  /**
	  * Function responsible for rendering children.
	  * This function should implement the following signature:
	  * ({ height, width }) => PropTypes.element
	  */
	  children: _react.PropTypes.func.isRequired,
	
	  /** Disable dynamic :height property */
	  disableHeight: _react.PropTypes.bool,
	
	  /** Disable dynamic :width property */
	  disableWidth: _react.PropTypes.bool,
	
	  /** Callback to be invoked on-resize: ({ height, width }) */
	  onResize: _react.PropTypes.func.isRequired
	} : void 0;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 855:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AutoSizer = exports.default = undefined;
	
	var _AutoSizer2 = __webpack_require__(854);
	
	var _AutoSizer3 = _interopRequireDefault(_AutoSizer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _AutoSizer3.default;
	exports.AutoSizer = _AutoSizer3.default;

/***/ },

/***/ 856:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _calculateSizeAndPositionDataAndUpdateScrollOffset = __webpack_require__(860);
	
	var _calculateSizeAndPositionDataAndUpdateScrollOffset2 = _interopRequireDefault(_calculateSizeAndPositionDataAndUpdateScrollOffset);
	
	var _ScalingCellSizeAndPositionManager = __webpack_require__(859);
	
	var _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager);
	
	var _createCallbackMemoizer = __webpack_require__(865);
	
	var _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer);
	
	var _getOverscanIndices = __webpack_require__(861);
	
	var _getOverscanIndices2 = _interopRequireDefault(_getOverscanIndices);
	
	var _scrollbarSize = __webpack_require__(573);
	
	var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);
	
	var _reactAddonsShallowCompare = __webpack_require__(534);
	
	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);
	
	var _updateScrollIndexHelper = __webpack_require__(862);
	
	var _updateScrollIndexHelper2 = _interopRequireDefault(_updateScrollIndexHelper);
	
	var _defaultCellRangeRenderer = __webpack_require__(623);
	
	var _defaultCellRangeRenderer2 = _interopRequireDefault(_defaultCellRangeRenderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
	 * This improves performance and makes scrolling smoother.
	 */
	var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
	
	/**
	 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
	 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
	 */
	var SCROLL_POSITION_CHANGE_REASONS = {
	  OBSERVED: 'observed',
	  REQUESTED: 'requested'
	};
	
	/**
	 * Renders tabular data with virtualization along the vertical and horizontal axes.
	 * Row heights and column widths must be known ahead of time and specified as properties.
	 */
	
	var Grid = function (_Component) {
	  _inherits(Grid, _Component);
	
	  function Grid(props, context) {
	    _classCallCheck(this, Grid);
	
	    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props, context));
	
	    _this.state = {
	      isScrolling: false,
	      scrollDirectionHorizontal: _getOverscanIndices.SCROLL_DIRECTION_FORWARD,
	      scrollDirectionVertical: _getOverscanIndices.SCROLL_DIRECTION_FORWARD,
	      scrollLeft: 0,
	      scrollTop: 0
	    };
	
	    // Invokes onSectionRendered callback only when start/stop row or column indices change
	    _this._onGridRenderedMemoizer = (0, _createCallbackMemoizer2.default)();
	    _this._onScrollMemoizer = (0, _createCallbackMemoizer2.default)(false);
	
	    // Bind functions to instance so they don't lose context when passed around
	    _this._debounceScrollEndedCallback = _this._debounceScrollEndedCallback.bind(_this);
	    _this._invokeOnGridRenderedHelper = _this._invokeOnGridRenderedHelper.bind(_this);
	    _this._onScroll = _this._onScroll.bind(_this);
	    _this._updateScrollLeftForScrollToColumn = _this._updateScrollLeftForScrollToColumn.bind(_this);
	    _this._updateScrollTopForScrollToRow = _this._updateScrollTopForScrollToRow.bind(_this);
	
	    _this._columnWidthGetter = _this._wrapSizeGetter(props.columnWidth);
	    _this._rowHeightGetter = _this._wrapSizeGetter(props.rowHeight);
	
	    _this._columnSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
	      cellCount: props.columnCount,
	      cellSizeGetter: function cellSizeGetter(params) {
	        return _this._columnWidthGetter(params);
	      },
	      estimatedCellSize: _this._getEstimatedColumnSize(props)
	    });
	    _this._rowSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
	      cellCount: props.rowCount,
	      cellSizeGetter: function cellSizeGetter(params) {
	        return _this._rowHeightGetter(params);
	      },
	      estimatedCellSize: _this._getEstimatedRowSize(props)
	    });
	
	    // See defaultCellRangeRenderer() for more information on the usage of these caches
	    _this._cellCache = {};
	    _this._styleCache = {};
	    return _this;
	  }
	
	  /**
	   * Pre-measure all columns and rows in a Grid.
	   * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
	   * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
	   */
	
	
	  _createClass(Grid, [{
	    key: 'measureAllCells',
	    value: function measureAllCells() {
	      var _props = this.props;
	      var columnCount = _props.columnCount;
	      var rowCount = _props.rowCount;
	
	
	      this._columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
	      this._rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
	    }
	
	    /**
	     * Forced recompute of row heights and column widths.
	     * This function should be called if dynamic column or row sizes have changed but nothing else has.
	     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
	     */
	
	  }, {
	    key: 'recomputeGridSize',
	    value: function recomputeGridSize() {
	      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      var _ref$columnIndex = _ref.columnIndex;
	      var columnIndex = _ref$columnIndex === undefined ? 0 : _ref$columnIndex;
	      var _ref$rowIndex = _ref.rowIndex;
	      var rowIndex = _ref$rowIndex === undefined ? 0 : _ref$rowIndex;
	
	      this._columnSizeAndPositionManager.resetCell(columnIndex);
	      this._rowSizeAndPositionManager.resetCell(rowIndex);
	
	      // Clear cell cache in case we are scrolling;
	      // Invalid row heights likely mean invalid cached content as well.
	      this._cellCache = {};
	      this._styleCache = {};
	
	      this.forceUpdate();
	    }
	
	    /**
	     * Ensure column and row are visible.
	     */
	
	  }, {
	    key: 'scrollToCell',
	    value: function scrollToCell(_ref2) {
	      var columnIndex = _ref2.columnIndex;
	      var rowIndex = _ref2.rowIndex;
	
	      var props = this.props;
	      this._updateScrollLeftForScrollToColumn(_extends({}, props, {
	        scrollToColumn: columnIndex
	      }));
	      this._updateScrollTopForScrollToRow(_extends({}, props, {
	        scrollToRow: rowIndex
	      }));
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props2 = this.props;
	      var scrollLeft = _props2.scrollLeft;
	      var scrollToColumn = _props2.scrollToColumn;
	      var scrollTop = _props2.scrollTop;
	      var scrollToRow = _props2.scrollToRow;
	
	      // If this component was first rendered server-side, scrollbar size will be undefined.
	      // In that event we need to remeasure.
	
	      if (!this._scrollbarSizeMeasured) {
	        this._scrollbarSize = (0, _scrollbarSize2.default)();
	        this._scrollbarSizeMeasured = true;
	        this.setState({});
	      }
	
	      if (scrollLeft >= 0 || scrollTop >= 0) {
	        this._setScrollPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
	      }
	
	      if (scrollToColumn >= 0 || scrollToRow >= 0) {
	        this._updateScrollLeftForScrollToColumn();
	        this._updateScrollTopForScrollToRow();
	      }
	
	      // Update onRowsRendered callback
	      this._invokeOnGridRenderedHelper();
	
	      // Initialize onScroll callback
	      this._invokeOnScrollMemoizer({
	        scrollLeft: scrollLeft || 0,
	        scrollTop: scrollTop || 0,
	        totalColumnsWidth: this._columnSizeAndPositionManager.getTotalSize(),
	        totalRowsHeight: this._rowSizeAndPositionManager.getTotalSize()
	      });
	    }
	
	    /**
	     * @private
	     * This method updates scrollLeft/scrollTop in state for the following conditions:
	     * 1) New scroll-to-cell props have been set
	     */
	
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      var _this2 = this;
	
	      var _props3 = this.props;
	      var autoHeight = _props3.autoHeight;
	      var columnCount = _props3.columnCount;
	      var height = _props3.height;
	      var rowCount = _props3.rowCount;
	      var scrollToAlignment = _props3.scrollToAlignment;
	      var scrollToColumn = _props3.scrollToColumn;
	      var scrollToRow = _props3.scrollToRow;
	      var width = _props3.width;
	      var _state = this.state;
	      var scrollLeft = _state.scrollLeft;
	      var scrollPositionChangeReason = _state.scrollPositionChangeReason;
	      var scrollTop = _state.scrollTop;
	
	      // Handle edge case where column or row count has only just increased over 0.
	      // In this case we may have to restore a previously-specified scroll offset.
	      // For more info see bvaughn/react-virtualized/issues/218
	
	      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0;
	
	      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
	      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
	      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
	      // So we only set these when we require an adjustment of the scroll position.
	      // See issue #2 for more information.
	      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
	        if (scrollLeft >= 0 && (scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
	          this._scrollingContainer.scrollLeft = scrollLeft;
	        }
	
	        // @TRICKY :autoHeight property instructs Grid to leave :scrollTop management to an external HOC (eg WindowScroller).
	        // In this case we should avoid checking scrollingContainer.scrollTop since it forces layout/flow.
	        if (!autoHeight && scrollTop >= 0 && (scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
	          this._scrollingContainer.scrollTop = scrollTop;
	        }
	      }
	
	      // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
	      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
	      (0, _updateScrollIndexHelper2.default)({
	        cellSizeAndPositionManager: this._columnSizeAndPositionManager,
	        previousCellsCount: prevProps.columnCount,
	        previousCellSize: prevProps.columnWidth,
	        previousScrollToAlignment: prevProps.scrollToAlignment,
	        previousScrollToIndex: prevProps.scrollToColumn,
	        previousSize: prevProps.width,
	        scrollOffset: scrollLeft,
	        scrollToAlignment: scrollToAlignment,
	        scrollToIndex: scrollToColumn,
	        size: width,
	        updateScrollIndexCallback: function updateScrollIndexCallback(scrollToColumn) {
	          return _this2._updateScrollLeftForScrollToColumn(_extends({}, _this2.props, { scrollToColumn: scrollToColumn }));
	        }
	      });
	      (0, _updateScrollIndexHelper2.default)({
	        cellSizeAndPositionManager: this._rowSizeAndPositionManager,
	        previousCellsCount: prevProps.rowCount,
	        previousCellSize: prevProps.rowHeight,
	        previousScrollToAlignment: prevProps.scrollToAlignment,
	        previousScrollToIndex: prevProps.scrollToRow,
	        previousSize: prevProps.height,
	        scrollOffset: scrollTop,
	        scrollToAlignment: scrollToAlignment,
	        scrollToIndex: scrollToRow,
	        size: height,
	        updateScrollIndexCallback: function updateScrollIndexCallback(scrollToRow) {
	          return _this2._updateScrollTopForScrollToRow(_extends({}, _this2.props, { scrollToRow: scrollToRow }));
	        }
	      });
	
	      // Update onRowsRendered callback if start/stop indices have changed
	      this._invokeOnGridRenderedHelper();
	
	      // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
	      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
	        var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
	        var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
	
	        this._invokeOnScrollMemoizer({ scrollLeft: scrollLeft, scrollTop: scrollTop, totalColumnsWidth: totalColumnsWidth, totalRowsHeight: totalRowsHeight });
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      // If this component is being rendered server-side, getScrollbarSize() will return undefined.
	      // We handle this case in componentDidMount()
	      this._scrollbarSize = (0, _scrollbarSize2.default)();
	      if (this._scrollbarSize === undefined) {
	        this._scrollbarSizeMeasured = false;
	        this._scrollbarSize = 0;
	      } else {
	        this._scrollbarSizeMeasured = true;
	      }
	
	      this._calculateChildrenToRender();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._disablePointerEventsTimeoutId) {
	        clearTimeout(this._disablePointerEventsTimeoutId);
	      }
	    }
	
	    /**
	     * @private
	     * This method updates scrollLeft/scrollTop in state for the following conditions:
	     * 1) Empty content (0 rows or columns)
	     * 2) New scroll props overriding the current state
	     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
	     */
	
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      var _this3 = this;
	
	      if (nextProps.columnCount === 0 && nextState.scrollLeft !== 0 || nextProps.rowCount === 0 && nextState.scrollTop !== 0) {
	        this._setScrollPosition({
	          scrollLeft: 0,
	          scrollTop: 0
	        });
	      } else if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
	        var newState = {};
	
	        if (nextProps.scrollLeft != null) {
	          newState.scrollLeft = nextProps.scrollLeft;
	        }
	        if (nextProps.scrollTop != null) {
	          newState.scrollTop = nextProps.scrollTop;
	        }
	
	        this._setScrollPosition(newState);
	      }
	
	      if (nextProps.columnWidth !== this.props.columnWidth || nextProps.rowHeight !== this.props.rowHeight) {
	        this._styleCache = {};
	      }
	
	      this._columnWidthGetter = this._wrapSizeGetter(nextProps.columnWidth);
	      this._rowHeightGetter = this._wrapSizeGetter(nextProps.rowHeight);
	
	      this._columnSizeAndPositionManager.configure({
	        cellCount: nextProps.columnCount,
	        estimatedCellSize: this._getEstimatedColumnSize(nextProps)
	      });
	      this._rowSizeAndPositionManager.configure({
	        cellCount: nextProps.rowCount,
	        estimatedCellSize: this._getEstimatedRowSize(nextProps)
	      });
	
	      // Update scroll offsets if the size or number of cells have changed, invalidating the previous value
	      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
	        cellCount: this.props.columnCount,
	        cellSize: this.props.columnWidth,
	        computeMetadataCallback: function computeMetadataCallback() {
	          return _this3._columnSizeAndPositionManager.resetCell(0);
	        },
	        computeMetadataCallbackProps: nextProps,
	        nextCellsCount: nextProps.columnCount,
	        nextCellSize: nextProps.columnWidth,
	        nextScrollToIndex: nextProps.scrollToColumn,
	        scrollToIndex: this.props.scrollToColumn,
	        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
	          return _this3._updateScrollLeftForScrollToColumn(nextProps, nextState);
	        }
	      });
	      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
	        cellCount: this.props.rowCount,
	        cellSize: this.props.rowHeight,
	        computeMetadataCallback: function computeMetadataCallback() {
	          return _this3._rowSizeAndPositionManager.resetCell(0);
	        },
	        computeMetadataCallbackProps: nextProps,
	        nextCellsCount: nextProps.rowCount,
	        nextCellSize: nextProps.rowHeight,
	        nextScrollToIndex: nextProps.scrollToRow,
	        scrollToIndex: this.props.scrollToRow,
	        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
	          return _this3._updateScrollTopForScrollToRow(nextProps, nextState);
	        }
	      });
	
	      this._calculateChildrenToRender(nextProps, nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var _props4 = this.props;
	      var autoContainerWidth = _props4.autoContainerWidth;
	      var autoHeight = _props4.autoHeight;
	      var className = _props4.className;
	      var containerStyle = _props4.containerStyle;
	      var height = _props4.height;
	      var id = _props4.id;
	      var noContentRenderer = _props4.noContentRenderer;
	      var style = _props4.style;
	      var tabIndex = _props4.tabIndex;
	      var width = _props4.width;
	      var isScrolling = this.state.isScrolling;
	
	
	      var gridStyle = {
	        boxSizing: 'border-box',
	        direction: 'ltr',
	        height: autoHeight ? 'auto' : height,
	        position: 'relative',
	        width: width,
	        WebkitOverflowScrolling: 'touch',
	        willChange: 'transform'
	      };
	
	      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
	      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
	
	      // Force browser to hide scrollbars when we know they aren't necessary.
	      // Otherwise once scrollbars appear they may not disappear again.
	      // For more info see issue #116
	      var verticalScrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0;
	      var horizontalScrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;
	
	      // Also explicitly init styles to 'auto' if scrollbars are required.
	      // This works around an obscure edge case where external CSS styles have not yet been loaded,
	      // But an initial scroll index of offset is set as an external prop.
	      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
	      // This was originally reported via clauderic/react-infinite-calendar/issues/23
	      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
	      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
	
	      var childrenToDisplay = this._childrenToDisplay;
	
	      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          ref: function ref(_ref3) {
	            _this4._scrollingContainer = _ref3;
	          },
	          'aria-label': this.props['aria-label'],
	          className: (0, _classnames2.default)('ReactVirtualized__Grid', className),
	          id: id,
	          onScroll: this._onScroll,
	          role: 'grid',
	          style: _extends({}, gridStyle, style),
	          tabIndex: tabIndex
	        },
	        childrenToDisplay.length > 0 && _react2.default.createElement(
	          'div',
	          {
	            className: 'ReactVirtualized__Grid__innerScrollContainer',
	            style: _extends({
	              width: autoContainerWidth ? 'auto' : totalColumnsWidth,
	              height: totalRowsHeight,
	              maxWidth: totalColumnsWidth,
	              maxHeight: totalRowsHeight,
	              overflow: 'hidden',
	              pointerEvents: isScrolling ? 'none' : ''
	            }, containerStyle)
	          },
	          childrenToDisplay
	        ),
	        showNoContentRenderer && noContentRenderer()
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	
	    /* ---------------------------- Helper methods ---------------------------- */
	
	  }, {
	    key: '_calculateChildrenToRender',
	    value: function _calculateChildrenToRender() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
	      var cellRenderer = props.cellRenderer;
	      var cellRangeRenderer = props.cellRangeRenderer;
	      var columnCount = props.columnCount;
	      var height = props.height;
	      var overscanColumnCount = props.overscanColumnCount;
	      var overscanRowCount = props.overscanRowCount;
	      var rowCount = props.rowCount;
	      var width = props.width;
	      var isScrolling = state.isScrolling;
	      var scrollDirectionHorizontal = state.scrollDirectionHorizontal;
	      var scrollDirectionVertical = state.scrollDirectionVertical;
	      var scrollLeft = state.scrollLeft;
	      var scrollTop = state.scrollTop;
	
	
	      this._childrenToDisplay = [];
	
	      // Render only enough columns and rows to cover the visible area of the grid.
	      if (height > 0 && width > 0) {
	        var visibleColumnIndices = this._columnSizeAndPositionManager.getVisibleCellRange({
	          containerSize: width,
	          offset: scrollLeft
	        });
	        var visibleRowIndices = this._rowSizeAndPositionManager.getVisibleCellRange({
	          containerSize: height,
	          offset: scrollTop
	        });
	
	        var horizontalOffsetAdjustment = this._columnSizeAndPositionManager.getOffsetAdjustment({
	          containerSize: width,
	          offset: scrollLeft
	        });
	        var verticalOffsetAdjustment = this._rowSizeAndPositionManager.getOffsetAdjustment({
	          containerSize: height,
	          offset: scrollTop
	        });
	
	        // Store for _invokeOnGridRenderedHelper()
	        this._renderedColumnStartIndex = visibleColumnIndices.start;
	        this._renderedColumnStopIndex = visibleColumnIndices.stop;
	        this._renderedRowStartIndex = visibleRowIndices.start;
	        this._renderedRowStopIndex = visibleRowIndices.stop;
	
	        var overscanColumnIndices = (0, _getOverscanIndices2.default)({
	          cellCount: columnCount,
	          overscanCellsCount: overscanColumnCount,
	          scrollDirection: scrollDirectionHorizontal,
	          startIndex: this._renderedColumnStartIndex,
	          stopIndex: this._renderedColumnStopIndex
	        });
	
	        var overscanRowIndices = (0, _getOverscanIndices2.default)({
	          cellCount: rowCount,
	          overscanCellsCount: overscanRowCount,
	          scrollDirection: scrollDirectionVertical,
	          startIndex: this._renderedRowStartIndex,
	          stopIndex: this._renderedRowStopIndex
	        });
	
	        // Store for _invokeOnGridRenderedHelper()
	        this._columnStartIndex = overscanColumnIndices.overscanStartIndex;
	        this._columnStopIndex = overscanColumnIndices.overscanStopIndex;
	        this._rowStartIndex = overscanRowIndices.overscanStartIndex;
	        this._rowStopIndex = overscanRowIndices.overscanStopIndex;
	
	        this._childrenToDisplay = cellRangeRenderer({
	          cellCache: this._cellCache,
	          cellRenderer: cellRenderer,
	          columnSizeAndPositionManager: this._columnSizeAndPositionManager,
	          columnStartIndex: this._columnStartIndex,
	          columnStopIndex: this._columnStopIndex,
	          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
	          isScrolling: isScrolling,
	          rowSizeAndPositionManager: this._rowSizeAndPositionManager,
	          rowStartIndex: this._rowStartIndex,
	          rowStopIndex: this._rowStopIndex,
	          scrollLeft: scrollLeft,
	          scrollTop: scrollTop,
	          styleCache: this._styleCache,
	          verticalOffsetAdjustment: verticalOffsetAdjustment,
	          visibleColumnIndices: visibleColumnIndices,
	          visibleRowIndices: visibleRowIndices
	        });
	      }
	    }
	
	    /**
	     * Sets an :isScrolling flag for a small window of time.
	     * This flag is used to disable pointer events on the scrollable portion of the Grid.
	     * This prevents jerky/stuttery mouse-wheel scrolling.
	     */
	
	  }, {
	    key: '_debounceScrollEnded',
	    value: function _debounceScrollEnded() {
	      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;
	
	
	      if (this._disablePointerEventsTimeoutId) {
	        clearTimeout(this._disablePointerEventsTimeoutId);
	      }
	
	      this._disablePointerEventsTimeoutId = setTimeout(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
	    }
	  }, {
	    key: '_debounceScrollEndedCallback',
	    value: function _debounceScrollEndedCallback() {
	      this._disablePointerEventsTimeoutId = null;
	
	      var styleCache = this._styleCache;
	
	      // Reset cell and style caches once scrolling stops.
	      // This makes Grid simpler to use (since cells commonly change).
	      // And it keeps the caches from growing too large.
	      // Performance is most sensitive when a user is scrolling.
	      this._cellCache = {};
	      this._styleCache = {};
	
	      // Copy over the visible cell styles so avoid unnecessary re-render.
	      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
	        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
	          var key = rowIndex + '-' + columnIndex;
	          this._styleCache[key] = styleCache[key];
	        }
	      }
	
	      this.setState({
	        isScrolling: false
	      });
	    }
	  }, {
	    key: '_getEstimatedColumnSize',
	    value: function _getEstimatedColumnSize(props) {
	      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
	    }
	  }, {
	    key: '_getEstimatedRowSize',
	    value: function _getEstimatedRowSize(props) {
	      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
	    }
	  }, {
	    key: '_invokeOnGridRenderedHelper',
	    value: function _invokeOnGridRenderedHelper() {
	      var onSectionRendered = this.props.onSectionRendered;
	
	
	      this._onGridRenderedMemoizer({
	        callback: onSectionRendered,
	        indices: {
	          columnOverscanStartIndex: this._columnStartIndex,
	          columnOverscanStopIndex: this._columnStopIndex,
	          columnStartIndex: this._renderedColumnStartIndex,
	          columnStopIndex: this._renderedColumnStopIndex,
	          rowOverscanStartIndex: this._rowStartIndex,
	          rowOverscanStopIndex: this._rowStopIndex,
	          rowStartIndex: this._renderedRowStartIndex,
	          rowStopIndex: this._renderedRowStopIndex
	        }
	      });
	    }
	  }, {
	    key: '_invokeOnScrollMemoizer',
	    value: function _invokeOnScrollMemoizer(_ref4) {
	      var _this5 = this;
	
	      var scrollLeft = _ref4.scrollLeft;
	      var scrollTop = _ref4.scrollTop;
	      var totalColumnsWidth = _ref4.totalColumnsWidth;
	      var totalRowsHeight = _ref4.totalRowsHeight;
	
	      this._onScrollMemoizer({
	        callback: function callback(_ref5) {
	          var scrollLeft = _ref5.scrollLeft;
	          var scrollTop = _ref5.scrollTop;
	          var _props5 = _this5.props;
	          var height = _props5.height;
	          var onScroll = _props5.onScroll;
	          var width = _props5.width;
	
	
	          onScroll({
	            clientHeight: height,
	            clientWidth: width,
	            scrollHeight: totalRowsHeight,
	            scrollLeft: scrollLeft,
	            scrollTop: scrollTop,
	            scrollWidth: totalColumnsWidth
	          });
	        },
	        indices: {
	          scrollLeft: scrollLeft,
	          scrollTop: scrollTop
	        }
	      });
	    }
	  }, {
	    key: '_setScrollPosition',
	    value: function _setScrollPosition(_ref6) {
	      var scrollLeft = _ref6.scrollLeft;
	      var scrollTop = _ref6.scrollTop;
	
	      var newState = {
	        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
	      };
	
	      if (scrollLeft >= 0) {
	        newState.scrollDirectionHorizontal = scrollLeft > this.state.scrollLeft ? _getOverscanIndices.SCROLL_DIRECTION_FORWARD : _getOverscanIndices.SCROLL_DIRECTION_BACKWARD;
	        newState.scrollLeft = scrollLeft;
	      }
	
	      if (scrollTop >= 0) {
	        newState.scrollDirectionVertical = scrollTop > this.state.scrollTop ? _getOverscanIndices.SCROLL_DIRECTION_FORWARD : _getOverscanIndices.SCROLL_DIRECTION_BACKWARD;
	        newState.scrollTop = scrollTop;
	      }
	
	      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
	        this.setState(newState);
	      }
	    }
	  }, {
	    key: '_wrapPropertyGetter',
	    value: function _wrapPropertyGetter(value) {
	      return value instanceof Function ? value : function () {
	        return value;
	      };
	    }
	  }, {
	    key: '_wrapSizeGetter',
	    value: function _wrapSizeGetter(size) {
	      return this._wrapPropertyGetter(size);
	    }
	  }, {
	    key: '_updateScrollLeftForScrollToColumn',
	    value: function _updateScrollLeftForScrollToColumn() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
	      var columnCount = props.columnCount;
	      var scrollToAlignment = props.scrollToAlignment;
	      var scrollToColumn = props.scrollToColumn;
	      var width = props.width;
	      var scrollLeft = state.scrollLeft;
	
	
	      if (scrollToColumn >= 0 && columnCount > 0) {
	        var targetIndex = Math.max(0, Math.min(columnCount - 1, scrollToColumn));
	
	        var calculatedScrollLeft = this._columnSizeAndPositionManager.getUpdatedOffsetForIndex({
	          align: scrollToAlignment,
	          containerSize: width,
	          currentOffset: scrollLeft,
	          targetIndex: targetIndex
	        });
	
	        if (scrollLeft !== calculatedScrollLeft) {
	          this._setScrollPosition({
	            scrollLeft: calculatedScrollLeft
	          });
	        }
	      }
	    }
	  }, {
	    key: '_updateScrollTopForScrollToRow',
	    value: function _updateScrollTopForScrollToRow() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
	      var height = props.height;
	      var rowCount = props.rowCount;
	      var scrollToAlignment = props.scrollToAlignment;
	      var scrollToRow = props.scrollToRow;
	      var scrollTop = state.scrollTop;
	
	
	      if (scrollToRow >= 0 && rowCount > 0) {
	        var targetIndex = Math.max(0, Math.min(rowCount - 1, scrollToRow));
	
	        var calculatedScrollTop = this._rowSizeAndPositionManager.getUpdatedOffsetForIndex({
	          align: scrollToAlignment,
	          containerSize: height,
	          currentOffset: scrollTop,
	          targetIndex: targetIndex
	        });
	
	        if (scrollTop !== calculatedScrollTop) {
	          this._setScrollPosition({
	            scrollTop: calculatedScrollTop
	          });
	        }
	      }
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(event) {
	      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
	      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
	      // See issue #404 for more information.
	      if (event.target !== this._scrollingContainer) {
	        return;
	      }
	
	      // Prevent pointer events from interrupting a smooth scroll
	      this._debounceScrollEnded();
	
	      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
	      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
	      // This causes a series of rapid renders that is slow for long lists.
	      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
	      var _props6 = this.props;
	      var autoHeight = _props6.autoHeight;
	      var height = _props6.height;
	      var width = _props6.width;
	
	      var scrollbarSize = this._scrollbarSize;
	      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
	      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
	      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), event.target.scrollLeft);
	      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), event.target.scrollTop);
	
	      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
	      // Don't force a re-render if this is the case.
	      // The mouse may move faster then the animation frame does.
	      // Use requestAnimationFrame to avoid over-updating.
	      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
	        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
	        var scrollDirectionHorizontal = scrollLeft > this.state.scrollLeft ? _getOverscanIndices.SCROLL_DIRECTION_FORWARD : _getOverscanIndices.SCROLL_DIRECTION_BACKWARD;
	        var scrollDirectionVertical = scrollTop > this.state.scrollTop ? _getOverscanIndices.SCROLL_DIRECTION_FORWARD : _getOverscanIndices.SCROLL_DIRECTION_BACKWARD;
	
	        var newState = {
	          isScrolling: true,
	          scrollDirectionHorizontal: scrollDirectionHorizontal,
	          scrollDirectionVertical: scrollDirectionVertical,
	          scrollLeft: scrollLeft,
	          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
	        };
	
	        if (!autoHeight) {
	          newState.scrollTop = scrollTop;
	        }
	
	        this.setState(newState);
	      }
	
	      this._invokeOnScrollMemoizer({ scrollLeft: scrollLeft, scrollTop: scrollTop, totalColumnsWidth: totalColumnsWidth, totalRowsHeight: totalRowsHeight });
	    }
	  }]);
	
	  return Grid;
	}(_react.Component);
	
	Grid.defaultProps = {
	  'aria-label': 'grid',
	  cellRangeRenderer: _defaultCellRangeRenderer2.default,
	  estimatedColumnSize: 100,
	  estimatedRowSize: 30,
	  noContentRenderer: function noContentRenderer() {
	    return null;
	  },
	  onScroll: function onScroll() {
	    return null;
	  },
	  onSectionRendered: function onSectionRendered() {
	    return null;
	  },
	  overscanColumnCount: 0,
	  overscanRowCount: 10,
	  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
	  scrollToAlignment: 'auto',
	  style: {},
	  tabIndex: 0
	};
	exports.default = Grid;
	process.env.NODE_ENV !== "production" ? Grid.propTypes = {
	  'aria-label': _react.PropTypes.string,
	
	  /**
	   * Set the width of the inner scrollable container to 'auto'.
	   * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
	   */
	  autoContainerWidth: _react.PropTypes.bool,
	
	  /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
	  autoHeight: _react.PropTypes.bool,
	
	  /**
	   * Responsible for rendering a cell given an row and column index.
	   * Should implement the following interface: ({ columnIndex: number, rowIndex: number }): PropTypes.node
	   */
	  cellRenderer: _react.PropTypes.func.isRequired,
	
	  /**
	   * Responsible for rendering a group of cells given their index ranges.
	   * Should implement the following interface: ({
	   *   cellCache: Map,
	   *   cellRenderer: Function,
	   *   columnSizeAndPositionManager: CellSizeAndPositionManager,
	   *   columnStartIndex: number,
	   *   columnStopIndex: number,
	   *   isScrolling: boolean,
	   *   rowSizeAndPositionManager: CellSizeAndPositionManager,
	   *   rowStartIndex: number,
	   *   rowStopIndex: number,
	   *   scrollLeft: number,
	   *   scrollTop: number
	   * }): Array<PropTypes.node>
	   */
	  cellRangeRenderer: _react.PropTypes.func.isRequired,
	
	  /**
	   * Optional custom CSS class name to attach to root Grid element.
	   */
	  className: _react.PropTypes.string,
	
	  /**
	   * Number of columns in grid.
	   */
	  columnCount: _react.PropTypes.number.isRequired,
	
	  /**
	   * Either a fixed column width (number) or a function that returns the width of a column given its index.
	   * Should implement the following interface: (index: number): number
	   */
	  columnWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
	
	  /** Optional inline style applied to inner cell-container */
	  containerStyle: _react.PropTypes.object,
	
	  /**
	   * Used to estimate the total width of a Grid before all of its columns have actually been measured.
	   * The estimated total width is adjusted as columns are rendered.
	   */
	  estimatedColumnSize: _react.PropTypes.number.isRequired,
	
	  /**
	   * Used to estimate the total height of a Grid before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
	  estimatedRowSize: _react.PropTypes.number.isRequired,
	
	  /**
	   * Height of Grid; this property determines the number of visible (vs virtualized) rows.
	   */
	  height: _react.PropTypes.number.isRequired,
	
	  /**
	   * Optional custom id to attach to root Grid element.
	   */
	  id: _react.PropTypes.string,
	
	  /**
	   * Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.
	   */
	  noContentRenderer: _react.PropTypes.func.isRequired,
	
	  /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
	   */
	  onScroll: _react.PropTypes.func.isRequired,
	
	  /**
	   * Callback invoked with information about the section of the Grid that was just rendered.
	   * ({ columnStartIndex, columnStopIndex, rowStartIndex, rowStopIndex }): void
	   */
	  onSectionRendered: _react.PropTypes.func.isRequired,
	
	  /**
	   * Number of columns to render before/after the visible section of the grid.
	   * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
	   */
	  overscanColumnCount: _react.PropTypes.number.isRequired,
	
	  /**
	   * Number of rows to render above/below the visible section of the grid.
	   * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
	   */
	  overscanRowCount: _react.PropTypes.number.isRequired,
	
	  /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * Should implement the following interface: ({ index: number }): number
	   */
	  rowHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
	
	  /**
	   * Number of rows in grid.
	   */
	  rowCount: _react.PropTypes.number.isRequired,
	
	  /** Wait this amount of time after the last scroll event before resetting Grid `pointer-events`. */
	  scrollingResetTimeInterval: _react.PropTypes.number,
	
	  /** Horizontal offset. */
	  scrollLeft: _react.PropTypes.number,
	
	  /**
	   * Controls scroll-to-cell behavior of the Grid.
	   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
	   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
	   */
	  scrollToAlignment: _react.PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,
	
	  /**
	   * Column index to ensure visible (by forcefully scrolling if necessary)
	   */
	  scrollToColumn: _react.PropTypes.number,
	
	  /** Vertical offset. */
	  scrollTop: _react.PropTypes.number,
	
	  /**
	   * Row index to ensure visible (by forcefully scrolling if necessary)
	   */
	  scrollToRow: _react.PropTypes.number,
	
	  /** Optional inline style */
	  style: _react.PropTypes.object,
	
	  /** Tab index for focus */
	  tabIndex: _react.PropTypes.number,
	
	  /**
	   * Width of Grid; this property determines the number of visible (vs virtualized) columns.
	   */
	  width: _react.PropTypes.number.isRequired
	} : void 0;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 857:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultCellRangeRenderer = exports.Grid = exports.default = undefined;
	
	var _Grid2 = __webpack_require__(856);
	
	var _Grid3 = _interopRequireDefault(_Grid2);
	
	var _defaultCellRangeRenderer2 = __webpack_require__(623);
	
	var _defaultCellRangeRenderer3 = _interopRequireDefault(_defaultCellRangeRenderer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Grid3.default;
	exports.Grid = _Grid3.default;
	exports.defaultCellRangeRenderer = _defaultCellRangeRenderer3.default;

/***/ },

/***/ 858:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Just-in-time calculates and caches size and position information for a collection of cells.
	 */
	var CellSizeAndPositionManager = function () {
	  function CellSizeAndPositionManager(_ref) {
	    var cellCount = _ref.cellCount;
	    var cellSizeGetter = _ref.cellSizeGetter;
	    var estimatedCellSize = _ref.estimatedCellSize;
	
	    _classCallCheck(this, CellSizeAndPositionManager);
	
	    this._cellSizeGetter = cellSizeGetter;
	    this._cellCount = cellCount;
	    this._estimatedCellSize = estimatedCellSize;
	
	    // Cache of size and position data for cells, mapped by cell index.
	    // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
	    this._cellSizeAndPositionData = {};
	
	    // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
	    this._lastMeasuredIndex = -1;
	  }
	
	  _createClass(CellSizeAndPositionManager, [{
	    key: 'configure',
	    value: function configure(_ref2) {
	      var cellCount = _ref2.cellCount;
	      var estimatedCellSize = _ref2.estimatedCellSize;
	
	      this._cellCount = cellCount;
	      this._estimatedCellSize = estimatedCellSize;
	    }
	  }, {
	    key: 'getCellCount',
	    value: function getCellCount() {
	      return this._cellCount;
	    }
	  }, {
	    key: 'getEstimatedCellSize',
	    value: function getEstimatedCellSize() {
	      return this._estimatedCellSize;
	    }
	  }, {
	    key: 'getLastMeasuredIndex',
	    value: function getLastMeasuredIndex() {
	      return this._lastMeasuredIndex;
	    }
	
	    /**
	     * This method returns the size and position for the cell at the specified index.
	     * It just-in-time calculates (or used cached values) for cells leading up to the index.
	     */
	
	  }, {
	    key: 'getSizeAndPositionOfCell',
	    value: function getSizeAndPositionOfCell(index) {
	      if (index < 0 || index >= this._cellCount) {
	        throw Error('Requested index ' + index + ' is outside of range 0..' + this._cellCount);
	      }
	
	      if (index > this._lastMeasuredIndex) {
	        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
	        var _offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
	
	        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
	          var _size = this._cellSizeGetter({ index: i });
	
	          if (_size == null || isNaN(_size)) {
	            throw Error('Invalid size returned for cell ' + i + ' of value ' + _size);
	          }
	
	          this._cellSizeAndPositionData[i] = {
	            offset: _offset,
	            size: _size
	          };
	
	          _offset += _size;
	        }
	
	        this._lastMeasuredIndex = index;
	      }
	
	      return this._cellSizeAndPositionData[index];
	    }
	  }, {
	    key: 'getSizeAndPositionOfLastMeasuredCell',
	    value: function getSizeAndPositionOfLastMeasuredCell() {
	      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
	        offset: 0,
	        size: 0
	      };
	    }
	
	    /**
	     * Total size of all cells being measured.
	     * This value will be completedly estimated initially.
	     * As cells as measured the estimate will be updated.
	     */
	
	  }, {
	    key: 'getTotalSize',
	    value: function getTotalSize() {
	      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
	
	      return lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size + (this._cellCount - this._lastMeasuredIndex - 1) * this._estimatedCellSize;
	    }
	
	    /**
	     * Determines a new offset that ensures a certain cell is visible, given the current offset.
	     * If the cell is already visible then the current offset will be returned.
	     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
	     *
	     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
	     * @param containerSize Size (width or height) of the container viewport
	     * @param currentOffset Container's current (x or y) offset
	     * @param totalSize Total size (width or height) of all cells
	     * @return Offset to use to ensure the specified cell is visible
	     */
	
	  }, {
	    key: 'getUpdatedOffsetForIndex',
	    value: function getUpdatedOffsetForIndex(_ref3) {
	      var _ref3$align = _ref3.align;
	      var align = _ref3$align === undefined ? 'auto' : _ref3$align;
	      var containerSize = _ref3.containerSize;
	      var currentOffset = _ref3.currentOffset;
	      var targetIndex = _ref3.targetIndex;
	
	      if (containerSize <= 0) {
	        return 0;
	      }
	
	      var datum = this.getSizeAndPositionOfCell(targetIndex);
	      var maxOffset = datum.offset;
	      var minOffset = maxOffset - containerSize + datum.size;
	
	      var idealOffset = void 0;
	
	      switch (align) {
	        case 'start':
	          idealOffset = maxOffset;
	          break;
	        case 'end':
	          idealOffset = minOffset;
	          break;
	        case 'center':
	          idealOffset = maxOffset - (containerSize - datum.size) / 2;
	          break;
	        default:
	          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
	          break;
	      }
	
	      var totalSize = this.getTotalSize();
	
	      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
	    }
	  }, {
	    key: 'getVisibleCellRange',
	    value: function getVisibleCellRange(_ref4) {
	      var containerSize = _ref4.containerSize;
	      var offset = _ref4.offset;
	
	      var totalSize = this.getTotalSize();
	
	      if (totalSize === 0) {
	        return {};
	      }
	
	      var maxOffset = offset + containerSize;
	      var start = this._findNearestCell(offset);
	
	      var datum = this.getSizeAndPositionOfCell(start);
	      offset = datum.offset + datum.size;
	
	      var stop = start;
	
	      while (offset < maxOffset && stop < this._cellCount - 1) {
	        stop++;
	
	        offset += this.getSizeAndPositionOfCell(stop).size;
	      }
	
	      return {
	        start: start,
	        stop: stop
	      };
	    }
	
	    /**
	     * Clear all cached values for cells after the specified index.
	     * This method should be called for any cell that has changed its size.
	     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
	     */
	
	  }, {
	    key: 'resetCell',
	    value: function resetCell(index) {
	      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
	    }
	  }, {
	    key: '_binarySearch',
	    value: function _binarySearch(_ref5) {
	      var high = _ref5.high;
	      var low = _ref5.low;
	      var offset = _ref5.offset;
	
	      var middle = void 0;
	      var currentOffset = void 0;
	
	      while (low <= high) {
	        middle = low + Math.floor((high - low) / 2);
	        currentOffset = this.getSizeAndPositionOfCell(middle).offset;
	
	        if (currentOffset === offset) {
	          return middle;
	        } else if (currentOffset < offset) {
	          low = middle + 1;
	        } else if (currentOffset > offset) {
	          high = middle - 1;
	        }
	      }
	
	      if (low > 0) {
	        return low - 1;
	      }
	    }
	  }, {
	    key: '_exponentialSearch',
	    value: function _exponentialSearch(_ref6) {
	      var index = _ref6.index;
	      var offset = _ref6.offset;
	
	      var interval = 1;
	
	      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
	        index += interval;
	        interval *= 2;
	      }
	
	      return this._binarySearch({
	        high: Math.min(index, this._cellCount - 1),
	        low: Math.floor(index / 2),
	        offset: offset
	      });
	    }
	
	    /**
	     * Searches for the cell (index) nearest the specified offset.
	     *
	     * If no exact match is found the next lowest cell index will be returned.
	     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
	     */
	
	  }, {
	    key: '_findNearestCell',
	    value: function _findNearestCell(offset) {
	      if (isNaN(offset)) {
	        throw Error('Invalid offset ' + offset + ' specified');
	      }
	
	      // Our search algorithms find the nearest match at or below the specified offset.
	      // So make sure the offset is at least 0 or no match will be found.
	      offset = Math.max(0, offset);
	
	      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
	      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);
	
	      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
	        // If we've already measured cells within this range just use a binary search as it's faster.
	        return this._binarySearch({
	          high: lastMeasuredIndex,
	          low: 0,
	          offset: offset
	        });
	      } else {
	        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
	        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
	        // The overall complexity for this approach is O(log n).
	        return this._exponentialSearch({
	          index: lastMeasuredIndex,
	          offset: offset
	        });
	      }
	    }
	  }]);
	
	  return CellSizeAndPositionManager;
	}();
	
	exports.default = CellSizeAndPositionManager;

/***/ },

/***/ 859:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DEFAULT_MAX_SCROLL_SIZE = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _CellSizeAndPositionManager = __webpack_require__(858);
	
	var _CellSizeAndPositionManager2 = _interopRequireDefault(_CellSizeAndPositionManager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Browsers have scroll offset limitations (eg Chrome stops scrolling at ~33.5M pixels where as Edge tops out at ~1.5M pixels).
	 * After a certain position, the browser won't allow the user to scroll further (even via JavaScript scroll offset adjustments).
	 * This util picks a lower ceiling for max size and artificially adjusts positions within to make it transparent for users.
	 */
	var DEFAULT_MAX_SCROLL_SIZE = exports.DEFAULT_MAX_SCROLL_SIZE = 1500000;
	
	/**
	 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
	 */
	
	var ScalingCellSizeAndPositionManager = function () {
	  function ScalingCellSizeAndPositionManager(_ref) {
	    var _ref$maxScrollSize = _ref.maxScrollSize;
	    var maxScrollSize = _ref$maxScrollSize === undefined ? DEFAULT_MAX_SCROLL_SIZE : _ref$maxScrollSize;
	
	    var params = _objectWithoutProperties(_ref, ['maxScrollSize']);
	
	    _classCallCheck(this, ScalingCellSizeAndPositionManager);
	
	    // Favor composition over inheritance to simplify IE10 support
	    this._cellSizeAndPositionManager = new _CellSizeAndPositionManager2.default(params);
	    this._maxScrollSize = maxScrollSize;
	  }
	
	  _createClass(ScalingCellSizeAndPositionManager, [{
	    key: 'configure',
	    value: function configure(params) {
	      this._cellSizeAndPositionManager.configure(params);
	    }
	  }, {
	    key: 'getCellCount',
	    value: function getCellCount() {
	      return this._cellSizeAndPositionManager.getCellCount();
	    }
	  }, {
	    key: 'getEstimatedCellSize',
	    value: function getEstimatedCellSize() {
	      return this._cellSizeAndPositionManager.getEstimatedCellSize();
	    }
	  }, {
	    key: 'getLastMeasuredIndex',
	    value: function getLastMeasuredIndex() {
	      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
	    }
	
	    /**
	     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
	     * The offset passed to this function is scalled (safe) as well.
	     */
	
	  }, {
	    key: 'getOffsetAdjustment',
	    value: function getOffsetAdjustment(_ref2) {
	      var containerSize = _ref2.containerSize;
	      var offset = _ref2.offset;
	
	      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
	      var safeTotalSize = this.getTotalSize();
	      var offsetPercentage = this._getOffsetPercentage({
	        containerSize: containerSize,
	        offset: offset,
	        totalSize: safeTotalSize
	      });
	
	      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
	    }
	  }, {
	    key: 'getSizeAndPositionOfCell',
	    value: function getSizeAndPositionOfCell(index) {
	      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
	    }
	  }, {
	    key: 'getSizeAndPositionOfLastMeasuredCell',
	    value: function getSizeAndPositionOfLastMeasuredCell() {
	      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
	    }
	
	    /** See CellSizeAndPositionManager#getTotalSize */
	
	  }, {
	    key: 'getTotalSize',
	    value: function getTotalSize() {
	      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
	    }
	
	    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */
	
	  }, {
	    key: 'getUpdatedOffsetForIndex',
	    value: function getUpdatedOffsetForIndex(_ref3) {
	      var _ref3$align = _ref3.align;
	      var align = _ref3$align === undefined ? 'auto' : _ref3$align;
	      var containerSize = _ref3.containerSize;
	      var currentOffset = _ref3.currentOffset;
	      var targetIndex = _ref3.targetIndex;
	      var totalSize = _ref3.totalSize;
	
	      currentOffset = this._safeOffsetToOffset({
	        containerSize: containerSize,
	        offset: currentOffset
	      });
	
	      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
	        align: align,
	        containerSize: containerSize,
	        currentOffset: currentOffset,
	        targetIndex: targetIndex,
	        totalSize: totalSize
	      });
	
	      return this._offsetToSafeOffset({
	        containerSize: containerSize,
	        offset: offset
	      });
	    }
	
	    /** See CellSizeAndPositionManager#getVisibleCellRange */
	
	  }, {
	    key: 'getVisibleCellRange',
	    value: function getVisibleCellRange(_ref4) {
	      var containerSize = _ref4.containerSize;
	      var offset = _ref4.offset;
	
	      offset = this._safeOffsetToOffset({
	        containerSize: containerSize,
	        offset: offset
	      });
	
	      return this._cellSizeAndPositionManager.getVisibleCellRange({
	        containerSize: containerSize,
	        offset: offset
	      });
	    }
	  }, {
	    key: 'resetCell',
	    value: function resetCell(index) {
	      this._cellSizeAndPositionManager.resetCell(index);
	    }
	  }, {
	    key: '_getOffsetPercentage',
	    value: function _getOffsetPercentage(_ref5) {
	      var containerSize = _ref5.containerSize;
	      var offset = _ref5.offset;
	      var totalSize = _ref5.totalSize;
	
	      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
	    }
	  }, {
	    key: '_offsetToSafeOffset',
	    value: function _offsetToSafeOffset(_ref6) {
	      var containerSize = _ref6.containerSize;
	      var offset = _ref6.offset;
	
	      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
	      var safeTotalSize = this.getTotalSize();
	
	      if (totalSize === safeTotalSize) {
	        return offset;
	      } else {
	        var offsetPercentage = this._getOffsetPercentage({
	          containerSize: containerSize,
	          offset: offset,
	          totalSize: totalSize
	        });
	
	        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
	      }
	    }
	  }, {
	    key: '_safeOffsetToOffset',
	    value: function _safeOffsetToOffset(_ref7) {
	      var containerSize = _ref7.containerSize;
	      var offset = _ref7.offset;
	
	      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
	      var safeTotalSize = this.getTotalSize();
	
	      if (totalSize === safeTotalSize) {
	        return offset;
	      } else {
	        var offsetPercentage = this._getOffsetPercentage({
	          containerSize: containerSize,
	          offset: offset,
	          totalSize: safeTotalSize
	        });
	
	        return Math.round(offsetPercentage * (totalSize - containerSize));
	      }
	    }
	  }]);
	
	  return ScalingCellSizeAndPositionManager;
	}();
	
	exports.default = ScalingCellSizeAndPositionManager;

/***/ },

/***/ 860:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calculateSizeAndPositionDataAndUpdateScrollOffset;
	/**
	 * Helper method that determines when to recalculate row or column metadata.
	 *
	 * @param cellCount Number of rows or columns in the current axis
	 * @param cellsSize Width or height of cells for the current axis
	 * @param computeMetadataCallback Method to invoke if cell metadata should be recalculated
	 * @param computeMetadataCallbackProps Parameters to pass to :computeMetadataCallback
	 * @param nextCellsCount Newly updated number of rows or columns in the current axis
	 * @param nextCellsSize Newly updated width or height of cells for the current axis
	 * @param nextScrollToIndex Newly updated scroll-to-index
	 * @param scrollToIndex Scroll-to-index
	 * @param updateScrollOffsetForScrollToIndex Callback to invoke if the scroll position should be recalculated
	 */
	function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
	  var cellCount = _ref.cellCount;
	  var cellSize = _ref.cellSize;
	  var computeMetadataCallback = _ref.computeMetadataCallback;
	  var computeMetadataCallbackProps = _ref.computeMetadataCallbackProps;
	  var nextCellsCount = _ref.nextCellsCount;
	  var nextCellSize = _ref.nextCellSize;
	  var nextScrollToIndex = _ref.nextScrollToIndex;
	  var scrollToIndex = _ref.scrollToIndex;
	  var updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;
	
	  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
	  // In that event users should use the manual recompute methods to inform of changes.
	  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
	    computeMetadataCallback(computeMetadataCallbackProps);
	
	    // Updated cell metadata may have hidden the previous scrolled-to item.
	    // In this case we should also update the scrollTop to ensure it stays visible.
	    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
	      updateScrollOffsetForScrollToIndex();
	    }
	  }
	}

/***/ },

/***/ 861:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getOverscanIndices;
	var SCROLL_DIRECTION_BACKWARD = exports.SCROLL_DIRECTION_BACKWARD = -1;
	var SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_FORWARD = 1;
	
	/**
	 * Calculates the number of cells to overscan before and after a specified range.
	 * This function ensures that overscanning doesn't exceed the available cells.
	 *
	 * @param cellCount Number of rows or columns in the current axis
	 * @param scrollDirection One of SCROLL_DIRECTION_BACKWARD
	 * @param overscanCellsCount Maximum number of cells to over-render in either direction
	 * @param startIndex Begin of range of visible cells
	 * @param stopIndex End of range of visible cells
	 */
	function getOverscanIndices(_ref) {
	  var cellCount = _ref.cellCount;
	  var overscanCellsCount = _ref.overscanCellsCount;
	  var scrollDirection = _ref.scrollDirection;
	  var startIndex = _ref.startIndex;
	  var stopIndex = _ref.stopIndex;
	
	  var overscanStartIndex = void 0;
	  var overscanStopIndex = void 0;
	
	  switch (scrollDirection) {
	    case SCROLL_DIRECTION_FORWARD:
	      overscanStartIndex = startIndex;
	      overscanStopIndex = stopIndex + overscanCellsCount;
	      break;
	    case SCROLL_DIRECTION_BACKWARD:
	      overscanStartIndex = startIndex - overscanCellsCount;
	      overscanStopIndex = stopIndex;
	      break;
	  }
	
	  return {
	    overscanStartIndex: Math.max(0, overscanStartIndex),
	    overscanStopIndex: Math.min(cellCount - 1, overscanStopIndex)
	  };
	}

/***/ },

/***/ 862:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = updateScrollIndexHelper;
	/**
	 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
	 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
	 *
	 * @param cellsSize Width or height of cells for the current axis
	 * @param cellSizeAndPositionManager Manages size and position metadata of cells
	 * @param previousCellsCount Previous number of rows or columns
	 * @param previousCellsSize Previous width or height of cells
	 * @param previousScrollToIndex Previous scroll-to-index
	 * @param previousSize Previous width or height of the virtualized container
	 * @param scrollOffset Current scrollLeft or scrollTop
	 * @param scrollToIndex Scroll-to-index
	 * @param size Width or height of the virtualized container
	 * @param updateScrollIndexCallback Callback to invoke with an scroll-to-index value
	 */
	function updateScrollIndexHelper(_ref) {
	  var cellSize = _ref.cellSize;
	  var cellSizeAndPositionManager = _ref.cellSizeAndPositionManager;
	  var previousCellsCount = _ref.previousCellsCount;
	  var previousCellSize = _ref.previousCellSize;
	  var previousScrollToAlignment = _ref.previousScrollToAlignment;
	  var previousScrollToIndex = _ref.previousScrollToIndex;
	  var previousSize = _ref.previousSize;
	  var scrollOffset = _ref.scrollOffset;
	  var scrollToAlignment = _ref.scrollToAlignment;
	  var scrollToIndex = _ref.scrollToIndex;
	  var size = _ref.size;
	  var updateScrollIndexCallback = _ref.updateScrollIndexCallback;
	
	  var cellCount = cellSizeAndPositionManager.getCellCount();
	  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
	  var sizeHasChanged = size !== previousSize || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize;
	
	  // If we have a new scroll target OR if height/row-height has changed,
	  // We should ensure that the scroll target is visible.
	  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
	    updateScrollIndexCallback(scrollToIndex);
	
	    // If we don't have a selected item but list size or number of children have decreased,
	    // Make sure we aren't scrolled too far past the current content.
	  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
	    // We need to ensure that the current scroll offset is still within the collection's range.
	    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
	    // Just check to make sure we're still okay.
	    // Only adjust the scroll position if we've scrolled below the last set of rows.
	    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
	      updateScrollIndexCallback(cellCount - 1);
	    }
	  }
	}

/***/ },

/***/ 863:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Grid = __webpack_require__(857);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactAddonsShallowCompare = __webpack_require__(534);
	
	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
	 * if only a few of those elements are visible. The primary purpose of this component is to improve
	 * performance by only rendering the DOM nodes that a user is able to see based on their current
	 * scroll position.
	 *
	 * This component renders a virtualized list of elements with either fixed or dynamic heights.
	 */
	var List = function (_Component) {
	  _inherits(List, _Component);
	
	  function List(props, context) {
	    _classCallCheck(this, List);
	
	    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props, context));
	
	    _this._cellRenderer = _this._cellRenderer.bind(_this);
	    _this._onScroll = _this._onScroll.bind(_this);
	    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
	    return _this;
	  }
	
	  _createClass(List, [{
	    key: 'forceUpdateGrid',
	    value: function forceUpdateGrid() {
	      this.Grid.forceUpdate();
	    }
	
	    /** See Grid#measureAllCells */
	
	  }, {
	    key: 'measureAllRows',
	    value: function measureAllRows() {
	      this.Grid.measureAllCells();
	    }
	
	    /** See Grid#recomputeGridSize */
	
	  }, {
	    key: 'recomputeRowHeights',
	    value: function recomputeRowHeights() {
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      this.Grid.recomputeGridSize({
	        rowIndex: index
	      });
	    }
	
	    /** See Grid#scrollToCell */
	
	  }, {
	    key: 'scrollToRow',
	    value: function scrollToRow() {
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      this.Grid.scrollToCell({
	        columnIndex: 0,
	        rowIndex: index
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var className = _props.className;
	      var noRowsRenderer = _props.noRowsRenderer;
	      var scrollToIndex = _props.scrollToIndex;
	      var width = _props.width;
	
	
	      var classNames = (0, _classnames2.default)('ReactVirtualized__List', className);
	
	      return _react2.default.createElement(_Grid2.default, _extends({}, this.props, {
	        autoContainerWidth: true,
	        cellRenderer: this._cellRenderer,
	        className: classNames,
	        columnWidth: width,
	        columnCount: 1,
	        noContentRenderer: noRowsRenderer,
	        onScroll: this._onScroll,
	        onSectionRendered: this._onSectionRendered,
	        ref: function ref(_ref) {
	          _this2.Grid = _ref;
	        },
	        scrollToRow: scrollToIndex
	      }));
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	  }, {
	    key: '_cellRenderer',
	    value: function _cellRenderer(_ref2) {
	      var rowIndex = _ref2.rowIndex;
	      var style = _ref2.style;
	
	      var rest = _objectWithoutProperties(_ref2, ['rowIndex', 'style']);
	
	      var rowRenderer = this.props.rowRenderer;
	
	      // TRICKY The style object is sometimes cached by Grid.
	      // This prevents new style objects from bypassing shallowCompare().
	      // However as of React 16, style props are auto-frozen (at least in dev mode)
	      // Check to make sure we can still modify the style before proceeding.
	      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713
	
	      var _Object$getOwnPropert = Object.getOwnPropertyDescriptor(style, 'width');
	
	      var writable = _Object$getOwnPropert.writable;
	
	      if (writable) {
	        // By default, List cells should be 100% width.
	        // This prevents them from flowing under a scrollbar (if present).
	        style.width = '100%';
	      }
	
	      return rowRenderer(_extends({
	        index: rowIndex,
	        style: style
	      }, rest));
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(_ref3) {
	      var clientHeight = _ref3.clientHeight;
	      var scrollHeight = _ref3.scrollHeight;
	      var scrollTop = _ref3.scrollTop;
	      var onScroll = this.props.onScroll;
	
	
	      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
	    }
	  }, {
	    key: '_onSectionRendered',
	    value: function _onSectionRendered(_ref4) {
	      var rowOverscanStartIndex = _ref4.rowOverscanStartIndex;
	      var rowOverscanStopIndex = _ref4.rowOverscanStopIndex;
	      var rowStartIndex = _ref4.rowStartIndex;
	      var rowStopIndex = _ref4.rowStopIndex;
	      var onRowsRendered = this.props.onRowsRendered;
	
	
	      onRowsRendered({
	        overscanStartIndex: rowOverscanStartIndex,
	        overscanStopIndex: rowOverscanStopIndex,
	        startIndex: rowStartIndex,
	        stopIndex: rowStopIndex
	      });
	    }
	  }]);
	
	  return List;
	}(_react.Component);
	
	List.defaultProps = {
	  estimatedRowSize: 30,
	  noRowsRenderer: function noRowsRenderer() {
	    return null;
	  },
	  onRowsRendered: function onRowsRendered() {
	    return null;
	  },
	  onScroll: function onScroll() {
	    return null;
	  },
	  overscanRowCount: 10,
	  scrollToAlignment: 'auto',
	  style: {}
	};
	exports.default = List;
	process.env.NODE_ENV !== "production" ? List.propTypes = {
	  'aria-label': _react.PropTypes.string,
	
	  /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
	  autoHeight: _react.PropTypes.bool,
	
	  /** Optional CSS class name */
	  className: _react.PropTypes.string,
	
	  /**
	   * Used to estimate the total height of a List before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
	  estimatedRowSize: _react.PropTypes.number.isRequired,
	
	  /** Height constraint for list (determines how many actual rows are rendered) */
	  height: _react.PropTypes.number.isRequired,
	
	  /** Optional renderer to be used in place of rows when rowCount is 0 */
	  noRowsRenderer: _react.PropTypes.func.isRequired,
	
	  /**
	   * Callback invoked with information about the slice of rows that were just rendered.
	   * ({ startIndex, stopIndex }): void
	   */
	  onRowsRendered: _react.PropTypes.func.isRequired,
	
	  /**
	   * Number of rows to render above/below the visible bounds of the list.
	   * These rows can help for smoother scrolling on touch devices.
	   */
	  overscanRowCount: _react.PropTypes.number.isRequired,
	
	  /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, scrollHeight, scrollTop }): void
	   */
	  onScroll: _react.PropTypes.func.isRequired,
	
	  /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * ({ index: number }): number
	   */
	  rowHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
	
	  /** Responsible for rendering a row given an index; ({ index: number }): node */
	  rowRenderer: _react.PropTypes.func.isRequired,
	
	  /** Number of rows in list. */
	  rowCount: _react.PropTypes.number.isRequired,
	
	  /** See Grid#scrollToAlignment */
	  scrollToAlignment: _react.PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,
	
	  /** Row index to ensure visible (by forcefully scrolling if necessary) */
	  scrollToIndex: _react.PropTypes.number,
	
	  /** Vertical offset. */
	  scrollTop: _react.PropTypes.number,
	
	  /** Optional inline style */
	  style: _react.PropTypes.object,
	
	  /** Tab index for focus */
	  tabIndex: _react.PropTypes.number,
	
	  /** Width of list */
	  width: _react.PropTypes.number.isRequired
	} : void 0;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 864:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.List = exports.default = undefined;
	
	var _List2 = __webpack_require__(863);
	
	var _List3 = _interopRequireDefault(_List2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _List3.default;
	exports.List = _List3.default;

/***/ },

/***/ 865:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createCallbackMemoizer;
	/**
	 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
	 */
	function createCallbackMemoizer() {
	  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	  var cachedIndices = {};
	
	  return function (_ref) {
	    var callback = _ref.callback;
	    var indices = _ref.indices;
	
	    var keys = Object.keys(indices);
	    var allInitialized = !requireAllKeys || keys.every(function (key) {
	      var value = indices[key];
	      return Array.isArray(value) ? value.length > 0 : value >= 0;
	    });
	    var indexChanged = keys.length !== Object.keys(cachedIndices).length || keys.some(function (key) {
	      var cachedValue = cachedIndices[key];
	      var value = indices[key];
	
	      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
	    });
	
	    cachedIndices = indices;
	
	    if (allInitialized && indexChanged) {
	      callback(indices);
	    }
	  };
	}

/***/ },

/***/ 866:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createDetectElementResize;
	/**
	 * Detect Element Resize.
	 * https://github.com/sdecima/javascript-detect-element-resize
	 * Sebastian Decima
	 *
	 * Forked from version 0.5.3; includes the following modifications:
	 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
	 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
	 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
	 **/
	
	function createDetectElementResize() {
	  // Check `document` and `window` in case of server-side rendering
	  var _window;
	  if (typeof window !== 'undefined') {
	    _window = window;
	  } else if (typeof self !== 'undefined') {
	    _window = self;
	  } else {
	    _window = this;
	  }
	
	  var attachEvent = typeof document !== 'undefined' && document.attachEvent;
	
	  if (!attachEvent) {
	    var requestFrame = function () {
	      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
	        return _window.setTimeout(fn, 20);
	      };
	      return function (fn) {
	        return raf(fn);
	      };
	    }();
	
	    var cancelFrame = function () {
	      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
	      return function (id) {
	        return cancel(id);
	      };
	    }();
	
	    var resetTriggers = function resetTriggers(element) {
	      var triggers = element.__resizeTriggers__,
	          expand = triggers.firstElementChild,
	          contract = triggers.lastElementChild,
	          expandChild = expand.firstElementChild;
	      contract.scrollLeft = contract.scrollWidth;
	      contract.scrollTop = contract.scrollHeight;
	      expandChild.style.width = expand.offsetWidth + 1 + 'px';
	      expandChild.style.height = expand.offsetHeight + 1 + 'px';
	      expand.scrollLeft = expand.scrollWidth;
	      expand.scrollTop = expand.scrollHeight;
	    };
	
	    var checkTriggers = function checkTriggers(element) {
	      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
	    };
	
	    var scrollListener = function scrollListener(e) {
	      // Don't measure (which forces) reflow for scrolls that happen inside of children!
	      if (e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
	        return;
	      }
	
	      var element = this;
	      resetTriggers(this);
	      if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
	      this.__resizeRAF__ = requestFrame(function () {
	        if (checkTriggers(element)) {
	          element.__resizeLast__.width = element.offsetWidth;
	          element.__resizeLast__.height = element.offsetHeight;
	          element.__resizeListeners__.forEach(function (fn) {
	            fn.call(element, e);
	          });
	        }
	      });
	    };
	
	    /* Detect CSS Animations support to detect element display/re-attach */
	    var animation = false,
	        animationstring = 'animation',
	        keyframeprefix = '',
	        animationstartevent = 'animationstart',
	        domPrefixes = 'Webkit Moz O ms'.split(' '),
	        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
	        pfx = '';
	    {
	      var elm = document.createElement('fakeelement');
	      if (elm.style.animationName !== undefined) {
	        animation = true;
	      }
	
	      if (animation === false) {
	        for (var i = 0; i < domPrefixes.length; i++) {
	          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
	            pfx = domPrefixes[i];
	            animationstring = pfx + 'Animation';
	            keyframeprefix = '-' + pfx.toLowerCase() + '-';
	            animationstartevent = startEvents[i];
	            animation = true;
	            break;
	          }
	        }
	      }
	    }
	
	    var animationName = 'resizeanim';
	    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
	    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
	  }
	
	  var createStyles = function createStyles() {
	    if (!document.getElementById('detectElementResize')) {
	      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
	      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
	          head = document.head || document.getElementsByTagName('head')[0],
	          style = document.createElement('style');
	
	      style.id = 'detectElementResize';
	      style.type = 'text/css';
	      if (style.styleSheet) {
	        style.styleSheet.cssText = css;
	      } else {
	        style.appendChild(document.createTextNode(css));
	      }
	
	      head.appendChild(style);
	    }
	  };
	
	  var addResizeListener = function addResizeListener(element, fn) {
	    if (attachEvent) element.attachEvent('onresize', fn);else {
	      if (!element.__resizeTriggers__) {
	        var elementStyle = _window.getComputedStyle(element);
	        if (elementStyle && elementStyle.position == 'static') {
	          element.style.position = 'relative';
	        }
	        createStyles();
	        element.__resizeLast__ = {};
	        element.__resizeListeners__ = [];
	        (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
	        element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
	        element.appendChild(element.__resizeTriggers__);
	        resetTriggers(element);
	        element.addEventListener('scroll', scrollListener, true);
	
	        /* Listen for a css animation to detect element display/re-attach */
	        if (animationstartevent) {
	          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
	            if (e.animationName == animationName) resetTriggers(element);
	          };
	          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
	        }
	      }
	      element.__resizeListeners__.push(fn);
	    }
	  };
	
	  var removeResizeListener = function removeResizeListener(element, fn) {
	    if (attachEvent) element.detachEvent('onresize', fn);else {
	      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
	      if (!element.__resizeListeners__.length) {
	        element.removeEventListener('scroll', scrollListener, true);
	        if (element.__resizeTriggers__.__animationListener__) {
	          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
	          element.__resizeTriggers__.__animationListener__ = null;
	        }
	        try {
	          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
	        } catch (e) {
	          // Preact compat; see developit/preact-compat/issues/228
	        }
	      }
	    }
	  };
	
	  return {
	    addResizeListener: addResizeListener,
	    removeResizeListener: removeResizeListener
	  };
	}

/***/ },

/***/ 1111:
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
	
	var _reactSelect = __webpack_require__(461);
	
	var _reactDom = __webpack_require__(32);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactVirtualizedSelect = __webpack_require__(853);
	
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

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/marc/webdev/book/pages/Application.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/marc/webdev/book/pages/Application.js"); } } })();
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
	    })(module.exports.default || module.exports, "/Application")
	  
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), "?entry"))

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanM/NzE0ZjY1YiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXNlbGVjdC9saWIvU2VsZWN0LmpzPzcxNGY2NWIiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy91dGlsL2luRE9NLmpzPzcxNGY2NWIiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1hZGRvbnMtc2hhbGxvdy1jb21wYXJlL2luZGV4LmpzPzcxNGY2NWIiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy91dGlsL3Njcm9sbGJhclNpemUuanM/NzE0ZjY1YiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXNlbGVjdC9saWIvdXRpbHMvZGVmYXVsdEZpbHRlck9wdGlvbnMuanM/NzE0ZjY1YiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXNlbGVjdC9saWIvdXRpbHMvZGVmYXVsdE1lbnVSZW5kZXJlci5qcz83MTRmNjViIiwid2VicGFjazovLy8uL34vcmVhY3Qtc2VsZWN0L2xpYi91dGlscy9zdHJpcERpYWNyaXRpY3MuanM/NzE0ZjY1YiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvR3JpZC9kZWZhdWx0Q2VsbFJhbmdlUmVuZGVyZXIuanM/NzE0ZjY1YiIsIndlYnBhY2s6Ly8vLi9+L25leHQvfi9yZWFjdC9saWIvc2hhbGxvd0NvbXBhcmUuanM/NzE0ZjY1YiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWlucHV0LWF1dG9zaXplL2xpYi9BdXRvc2l6ZUlucHV0LmpzPzcxNGY2NWIiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zZWxlY3QvbGliL0FzeW5jLmpzPzcxNGY2NWIiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zZWxlY3QvbGliL0FzeW5jQ3JlYXRhYmxlLmpzPzcxNGY2NWIiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zZWxlY3QvbGliL0NyZWF0YWJsZS5qcz83MTRmNjViIiwid2VicGFjazovLy8uL34vcmVhY3Qtc2VsZWN0L2xpYi9PcHRpb24uanM/NzE0ZjY1YiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXNlbGVjdC9saWIvVmFsdWUuanM/NzE0ZjY1YiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXNlbGVjdC9saWIvdXRpbHMvZGVmYXVsdEFycm93UmVuZGVyZXIuanM/NzE0ZjY1YiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXNlbGVjdC9saWIvdXRpbHMvZGVmYXVsdENsZWFyUmVuZGVyZXIuanM/NzE0ZjY1YiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXZpcnR1YWxpemVkLXNlbGVjdC9kaXN0L2NvbW1vbmpzL1ZpcnR1YWxpemVkU2VsZWN0L1ZpcnR1YWxpemVkU2VsZWN0LmpzPzcxNGY2NWIiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC12aXJ0dWFsaXplZC1zZWxlY3QvZGlzdC9jb21tb25qcy9WaXJ0dWFsaXplZFNlbGVjdC9pbmRleC5qcz83MTRmNjViIiwid2VicGFjazovLy8uL34vcmVhY3QtdmlydHVhbGl6ZWQtc2VsZWN0L2Rpc3QvY29tbW9uanMvaW5kZXguanM/ZGZmZjFlZiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvQXV0b1NpemVyL0F1dG9TaXplci5qcz9kZmZmMWVmIiwid2VicGFjazovLy8uL34vcmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9BdXRvU2l6ZXIvaW5kZXguanM/ZGZmZjFlZiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvR3JpZC9HcmlkLmpzP2RmZmYxZWYiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC12aXJ0dWFsaXplZC9kaXN0L2NvbW1vbmpzL0dyaWQvaW5kZXguanM/ZGZmZjFlZiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvR3JpZC91dGlscy9DZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5qcz9kZmZmMWVmIiwid2VicGFjazovLy8uL34vcmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9HcmlkL3V0aWxzL1NjYWxpbmdDZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5qcz9kZmZmMWVmIiwid2VicGFjazovLy8uL34vcmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9HcmlkL3V0aWxzL2NhbGN1bGF0ZVNpemVBbmRQb3NpdGlvbkRhdGFBbmRVcGRhdGVTY3JvbGxPZmZzZXQuanM/ZGZmZjFlZiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvR3JpZC91dGlscy9nZXRPdmVyc2NhbkluZGljZXMuanM/ZGZmZjFlZiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvR3JpZC91dGlscy91cGRhdGVTY3JvbGxJbmRleEhlbHBlci5qcz9kZmZmMWVmIiwid2VicGFjazovLy8uL34vcmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9MaXN0L0xpc3QuanM/ZGZmZjFlZiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvTGlzdC9pbmRleC5qcz9kZmZmMWVmIiwid2VicGFjazovLy8uL34vcmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy91dGlscy9jcmVhdGVDYWxsYmFja01lbW9pemVyLmpzP2RmZmYxZWYiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC12aXJ0dWFsaXplZC9kaXN0L2NvbW1vbmpzL3ZlbmRvci9kZXRlY3RFbGVtZW50UmVzaXplLmpzP2RmZmYxZWYiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXBwbGljYXRpb24uanM/ZGZmZjFlZiJdLCJuYW1lcyI6WyJjaXR5RGF0YSIsIm5hbWUiLCJWaXJ0dWFsaXplZFNlbGVjdEV4YW1wbGUiLCJwcm9wcyIsImNyZWF0YWJsZU9wdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwic3RhdGUiLCJjbGVhcmFibGUiLCJkaXNhYmxlZCIsImdpdGh1YlVzZXJzIiwibXVsdGkiLCJzZWFyY2hhYmxlIiwic2VsZWN0ZWRDcmVhdGFibGUiLCJzZWxlY3RlZENpdHkiLCJjb3VudHJ5RGF0YSIsIm5hbWVEYXRhIiwic2VsZWN0ZWRDb3VudHJ5Iiwic2VsZWN0ZWRHaXRodWJVc2VyIiwic2VsZWN0ZWROYW1lIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwiQ291bnRyeU9wdGlvblJlbmRlcmVyIiwiX2N1c3RvbU9wdGlvbkhlaWdodHNTZWxlY3QiLCJyZWNvbXB1dGVPcHRpb25IZWlnaHRzIiwib3B0aW9uIiwidHlwZSIsIk5hbWVPcHRpb25SZW5kZXJlciIsInJlZiIsIl9sb2FkR2l0aHViVXNlcnMiLCJfZ29Ub0dpdGh1YlVzZXIiLCJ3aW5kb3ciLCJvcGVuIiwiaHRtbF91cmwiLCJpbnB1dCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIml0ZW1zIiwib3B0aW9ucyIsInByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsImZvY3VzZWRPcHRpb24iLCJmb2N1c2VkT3B0aW9uSW5kZXgiLCJmb2N1c09wdGlvbiIsImtleSIsImxhYmVsS2V5Iiwic2VsZWN0VmFsdWUiLCJzdHlsZSIsInZhbHVlQXJyYXkiLCJmbGFnSW1hZ2VVcmwiLCJjb2RlIiwidG9Mb3dlckNhc2UiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwiY291bnRyeU9wdGlvbiIsInB1c2giLCJjb3VudHJ5T3B0aW9uRm9jdXNlZCIsImluZGV4T2YiLCJjb3VudHJ5T3B0aW9uU2VsZWN0ZWQiLCJqb2luIiwiY291bnRyeUxhYmVsIiwiY291bnRyeUZsYWciLCJvcHRpb25JbmRleCIsIm5hbWVPcHRpb24iLCJuYW1lSGVhZGVyIiwibmFtZU9wdGlvbkZvY3VzZWQiLCJuYW1lT3B0aW9uU2VsZWN0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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Q0E7QUFDQTtBQUNBLG1CQUFrQixtQkFBbUIsRUFBRTtBQUN2QztBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osSUFBRztBQUNIO0FBQ0E7QUFD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QUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEI7QUFDNUI7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUE4QyxnQ0FBZ0M7QUFDOUUsdURBQXNELHNDQUFzQztBQUM1RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWCxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QTtBQUNBO0FBQ0Esd0RBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseURBQXdEO0FBQ3hEOztBQUVBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLEVBQUM7O0FBRUQsOEM7Ozs7Ozs7QUM1U0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQSxpQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakI7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLCtDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU4sa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7O0FBRUEsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQSxFQUFDOztBQUVELHFEOzs7Ozs7O0FDdk5BOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUN6Q0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Z2VzL0FwcGxpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDEwIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9yZWFjdC1zZWxlY3RcbiovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfcmVhY3RJbnB1dEF1dG9zaXplID0gcmVxdWlyZSgncmVhY3QtaW5wdXQtYXV0b3NpemUnKTtcblxudmFyIF9yZWFjdElucHV0QXV0b3NpemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJbnB1dEF1dG9zaXplKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNEZWZhdWx0QXJyb3dSZW5kZXJlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmYXVsdEFycm93UmVuZGVyZXInKTtcblxudmFyIF91dGlsc0RlZmF1bHRBcnJvd1JlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRGVmYXVsdEFycm93UmVuZGVyZXIpO1xuXG52YXIgX3V0aWxzRGVmYXVsdEZpbHRlck9wdGlvbnMgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmF1bHRGaWx0ZXJPcHRpb25zJyk7XG5cbnZhciBfdXRpbHNEZWZhdWx0RmlsdGVyT3B0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RlZmF1bHRGaWx0ZXJPcHRpb25zKTtcblxudmFyIF91dGlsc0RlZmF1bHRNZW51UmVuZGVyZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmF1bHRNZW51UmVuZGVyZXInKTtcblxudmFyIF91dGlsc0RlZmF1bHRNZW51UmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEZWZhdWx0TWVudVJlbmRlcmVyKTtcblxudmFyIF91dGlsc0RlZmF1bHRDbGVhclJlbmRlcmVyID0gcmVxdWlyZSgnLi91dGlscy9kZWZhdWx0Q2xlYXJSZW5kZXJlcicpO1xuXG52YXIgX3V0aWxzRGVmYXVsdENsZWFyUmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEZWZhdWx0Q2xlYXJSZW5kZXJlcik7XG5cbnZhciBfQXN5bmMgPSByZXF1aXJlKCcuL0FzeW5jJyk7XG5cbnZhciBfQXN5bmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXN5bmMpO1xuXG52YXIgX0FzeW5jQ3JlYXRhYmxlID0gcmVxdWlyZSgnLi9Bc3luY0NyZWF0YWJsZScpO1xuXG52YXIgX0FzeW5jQ3JlYXRhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FzeW5jQ3JlYXRhYmxlKTtcblxudmFyIF9DcmVhdGFibGUgPSByZXF1aXJlKCcuL0NyZWF0YWJsZScpO1xuXG52YXIgX0NyZWF0YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DcmVhdGFibGUpO1xuXG52YXIgX09wdGlvbiA9IHJlcXVpcmUoJy4vT3B0aW9uJyk7XG5cbnZhciBfT3B0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX09wdGlvbik7XG5cbnZhciBfVmFsdWUgPSByZXF1aXJlKCcuL1ZhbHVlJyk7XG5cbnZhciBfVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmFsdWUpO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlWYWx1ZSh2YWx1ZSkge1xuXHR2YXIgdmFsdWVUeXBlID0gdHlwZW9mIHZhbHVlO1xuXHRpZiAodmFsdWVUeXBlID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0fSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdudW1iZXInIHx8IHZhbHVlVHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0cmV0dXJuIFN0cmluZyh2YWx1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG59XG5cbnZhciBzdHJpbmdPck5vZGUgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZV0pO1xuXG52YXIgaW5zdGFuY2VJZCA9IDE7XG5cbnZhciBTZWxlY3QgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuXG5cdGRpc3BsYXlOYW1lOiAnU2VsZWN0JyxcblxuXHRwcm9wVHlwZXM6IHtcblx0XHRhZGRMYWJlbFRleHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLCAvLyBwbGFjZWhvbGRlciBkaXNwbGF5ZWQgd2hlbiB5b3Ugd2FudCB0byBhZGQgYSBsYWJlbCBvbiBhIG11bHRpLXZhbHVlIGlucHV0XG5cdFx0J2FyaWEtbGFiZWwnOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgLy8gQXJpYSBsYWJlbCAoZm9yIGFzc2lzdGl2ZSB0ZWNoKVxuXHRcdCdhcmlhLWxhYmVsbGVkYnknOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgLy8gSFRNTCBJRCBvZiBhbiBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIGxhYmVsIChmb3IgYXNzaXN0aXZlIHRlY2gpXG5cdFx0YXJyb3dSZW5kZXJlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLCAvLyBDcmVhdGUgZHJvcC1kb3duIGNhcmV0IGVsZW1lbnRcblx0XHRhdXRvQmx1cjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCAvLyBhdXRvbWF0aWNhbGx5IGJsdXIgdGhlIGNvbXBvbmVudCB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZFxuXHRcdGF1dG9mb2N1czogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCAvLyBhdXRvZm9jdXMgdGhlIGNvbXBvbmVudCBvbiBtb3VudFxuXHRcdGF1dG9zaXplOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgdG8gZW5hYmxlIGF1dG9zaXppbmcgb3Igbm90XG5cdFx0YmFja3NwYWNlUmVtb3ZlczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIGJhY2tzcGFjZSByZW1vdmVzIGFuIGl0ZW0gaWYgdGhlcmUgaXMgbm8gdGV4dCBpbnB1dFxuXHRcdGJhY2tzcGFjZVRvUmVtb3ZlTWVzc2FnZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsIC8vIE1lc3NhZ2UgdG8gdXNlIGZvciBzY3JlZW5yZWFkZXJzIHRvIHByZXNzIGJhY2tzcGFjZSB0byByZW1vdmUgdGhlIGN1cnJlbnQgaXRlbSAtIHtsYWJlbH0gaXMgcmVwbGFjZWQgd2l0aCB0aGUgaXRlbSBsYWJlbFxuXHRcdGNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsIC8vIGNsYXNzTmFtZSBmb3IgdGhlIG91dGVyIGVsZW1lbnRcblx0XHRjbGVhckFsbFRleHQ6IHN0cmluZ09yTm9kZSwgLy8gdGl0bGUgZm9yIHRoZSBcImNsZWFyXCIgY29udHJvbCB3aGVuIG11bHRpOiB0cnVlXG5cdFx0Y2xlYXJSZW5kZXJlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLCAvLyBjcmVhdGUgY2xlYXJhYmxlIHggZWxlbWVudFxuXHRcdGNsZWFyVmFsdWVUZXh0OiBzdHJpbmdPck5vZGUsIC8vIHRpdGxlIGZvciB0aGUgXCJjbGVhclwiIGNvbnRyb2xcblx0XHRjbGVhcmFibGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgLy8gc2hvdWxkIGl0IGJlIHBvc3NpYmxlIHRvIHJlc2V0IHZhbHVlXG5cdFx0ZGVsZXRlUmVtb3ZlczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIGJhY2tzcGFjZSByZW1vdmVzIGFuIGl0ZW0gaWYgdGhlcmUgaXMgbm8gdGV4dCBpbnB1dFxuXHRcdGRlbGltaXRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsIC8vIGRlbGltaXRlciB0byB1c2UgdG8gam9pbiBtdWx0aXBsZSB2YWx1ZXMgZm9yIHRoZSBoaWRkZW4gZmllbGQgdmFsdWVcblx0XHRkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIHRoZSBTZWxlY3QgaXMgZGlzYWJsZWQgb3Igbm90XG5cdFx0ZXNjYXBlQ2xlYXJzVmFsdWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciBlc2NhcGUgY2xlYXJzIHRoZSB2YWx1ZSB3aGVuIHRoZSBtZW51IGlzIGNsb3NlZFxuXHRcdGZpbHRlck9wdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLCAvLyBtZXRob2QgdG8gZmlsdGVyIGEgc2luZ2xlIG9wdGlvbiAob3B0aW9uLCBmaWx0ZXJTdHJpbmcpXG5cdFx0ZmlsdGVyT3B0aW9uczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksIC8vIGJvb2xlYW4gdG8gZW5hYmxlIGRlZmF1bHQgZmlsdGVyaW5nIG9yIGZ1bmN0aW9uIHRvIGZpbHRlciB0aGUgb3B0aW9ucyBhcnJheSAoW29wdGlvbnNdLCBmaWx0ZXJTdHJpbmcsIFt2YWx1ZXNdKVxuXHRcdGlnbm9yZUFjY2VudHM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byBzdHJpcCBkaWFjcml0aWNzIHdoZW4gZmlsdGVyaW5nXG5cdFx0aWdub3JlQ2FzZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIHRvIHBlcmZvcm0gY2FzZS1pbnNlbnNpdGl2ZSBmaWx0ZXJpbmdcblx0XHRpbnB1dFByb3BzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9iamVjdCwgLy8gY3VzdG9tIGF0dHJpYnV0ZXMgZm9yIHRoZSBJbnB1dFxuXHRcdGlucHV0UmVuZGVyZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYywgLy8gcmV0dXJucyBhIGN1c3RvbSBpbnB1dCBjb21wb25lbnRcblx0XHRpbnN0YW5jZUlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgLy8gc2V0IHRoZSBjb21wb25lbnRzIGluc3RhbmNlSWRcblx0XHRpc0xvYWRpbmc6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0aGUgU2VsZWN0IGlzIGxvYWRpbmcgZXh0ZXJuYWxseSBvciBub3QgKHN1Y2ggYXMgb3B0aW9ucyBiZWluZyBsb2FkZWQpXG5cdFx0am9pblZhbHVlczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCAvLyBqb2lucyBtdWx0aXBsZSB2YWx1ZXMgaW50byBhIHNpbmdsZSBmb3JtIGZpZWxkIHdpdGggdGhlIGRlbGltaXRlciAobGVnYWN5IG1vZGUpXG5cdFx0bGFiZWxLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLCAvLyBwYXRoIG9mIHRoZSBsYWJlbCB2YWx1ZSBpbiBvcHRpb24gb2JqZWN0c1xuXHRcdG1hdGNoUG9zOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgLy8gKGFueXxzdGFydCkgbWF0Y2ggdGhlIHN0YXJ0IG9yIGVudGlyZSBzdHJpbmcgd2hlbiBmaWx0ZXJpbmdcblx0XHRtYXRjaFByb3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLCAvLyAoYW55fGxhYmVsfHZhbHVlKSB3aGljaCBvcHRpb24gcHJvcGVydHkgdG8gZmlsdGVyIG9uXG5cdFx0bWVudUJ1ZmZlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIC8vIG9wdGlvbmFsIGJ1ZmZlciAoaW4gcHgpIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnQgYW5kIHRoZSBib3R0b20gb2YgdGhlIG1lbnVcblx0XHRtZW51Q29udGFpbmVyU3R5bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub2JqZWN0LCAvLyBvcHRpb25hbCBzdHlsZSB0byBhcHBseSB0byB0aGUgbWVudSBjb250YWluZXJcblx0XHRtZW51UmVuZGVyZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYywgLy8gcmVuZGVycyBhIGN1c3RvbSBtZW51IHdpdGggb3B0aW9uc1xuXHRcdG1lbnVTdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vYmplY3QsIC8vIG9wdGlvbmFsIHN0eWxlIHRvIGFwcGx5IHRvIHRoZSBtZW51XG5cdFx0bXVsdGk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgLy8gbXVsdGktdmFsdWUgaW5wdXRcblx0XHRuYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgLy8gZ2VuZXJhdGVzIGEgaGlkZGVuIDxpbnB1dCAvPiB0YWcgd2l0aCB0aGlzIGZpZWxkIG5hbWUgZm9yIGh0bWwgZm9ybXNcblx0XHRub1Jlc3VsdHNUZXh0OiBzdHJpbmdPck5vZGUsIC8vIHBsYWNlaG9sZGVyIGRpc3BsYXllZCB3aGVuIHRoZXJlIGFyZSBubyBtYXRjaGluZyBzZWFyY2ggcmVzdWx0c1xuXHRcdG9uQmx1cjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLCAvLyBvbkJsdXIgaGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KSB7fVxuXHRcdG9uQmx1clJlc2V0c0lucHV0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgaW5wdXQgaXMgY2xlYXJlZCBvbiBibHVyXG5cdFx0b25DaGFuZ2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYywgLy8gb25DaGFuZ2UgaGFuZGxlcjogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7fVxuXHRcdG9uQ2xvc2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYywgLy8gZmlyZXMgd2hlbiB0aGUgbWVudSBpcyBjbG9zZWRcblx0XHRvbkNsb3NlUmVzZXRzSW5wdXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciBpbnB1dCBpcyBjbGVhcmVkIHdoZW4gbWVudSBpcyBjbG9zZWQgdGhyb3VnaCB0aGUgYXJyb3dcblx0XHRvbkZvY3VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsIC8vIG9uRm9jdXMgaGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KSB7fVxuXHRcdG9uSW5wdXRDaGFuZ2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYywgLy8gb25JbnB1dENoYW5nZSBoYW5kbGVyOiBmdW5jdGlvbiAoaW5wdXRWYWx1ZSkge31cblx0XHRvbklucHV0S2V5RG93bjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLCAvLyBpbnB1dCBrZXlEb3duIGhhbmRsZXI6IGZ1bmN0aW9uIChldmVudCkge31cblx0XHRvbk1lbnVTY3JvbGxUb0JvdHRvbTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLCAvLyBmaXJlcyB3aGVuIHRoZSBtZW51IGlzIHNjcm9sbGVkIHRvIHRoZSBib3R0b207IGNhbiBiZSB1c2VkIHRvIHBhZ2luYXRlIG9wdGlvbnNcblx0XHRvbk9wZW46IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYywgLy8gZmlyZXMgd2hlbiB0aGUgbWVudSBpcyBvcGVuZWRcblx0XHRvblZhbHVlQ2xpY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYywgLy8gb25DbGljayBoYW5kbGVyIGZvciB2YWx1ZSBsYWJlbHM6IGZ1bmN0aW9uICh2YWx1ZSwgZXZlbnQpIHt9XG5cdFx0b3BlbkFmdGVyRm9jdXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgLy8gYm9vbGVhbiB0byBlbmFibGUgb3BlbmluZyBkcm9wZG93biB3aGVuIGZvY3VzZWRcblx0XHRvcGVuT25Gb2N1czogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCAvLyBhbHdheXMgb3BlbiBvcHRpb25zIG1lbnUgb24gZm9jdXNcblx0XHRvcHRpb25DbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLCAvLyBhZGRpdGlvbmFsIGNsYXNzKGVzKSB0byBhcHBseSB0byB0aGUgPE9wdGlvbiAvPiBlbGVtZW50c1xuXHRcdG9wdGlvbkNvbXBvbmVudDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLCAvLyBvcHRpb24gY29tcG9uZW50IHRvIHJlbmRlciBpbiBkcm9wZG93blxuXHRcdG9wdGlvblJlbmRlcmVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsIC8vIG9wdGlvblJlbmRlcmVyOiBmdW5jdGlvbiAob3B0aW9uKSB7fVxuXHRcdG9wdGlvbnM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYXJyYXksIC8vIGFycmF5IG9mIG9wdGlvbnNcblx0XHRwYWdlU2l6ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIC8vIG51bWJlciBvZiBlbnRyaWVzIHRvIHBhZ2Ugd2hlbiB1c2luZyBwYWdlIHVwL2Rvd24ga2V5c1xuXHRcdHBsYWNlaG9sZGVyOiBzdHJpbmdPck5vZGUsIC8vIGZpZWxkIHBsYWNlaG9sZGVyLCBkaXNwbGF5ZWQgd2hlbiB0aGVyZSdzIG5vIHZhbHVlXG5cdFx0cmVxdWlyZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgLy8gYXBwbGllcyBIVE1MNSByZXF1aXJlZCBhdHRyaWJ1dGUgd2hlbiBuZWVkZWRcblx0XHRyZXNldFZhbHVlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSwgLy8gdmFsdWUgdG8gdXNlIHdoZW4geW91IGNsZWFyIHRoZSBjb250cm9sXG5cdFx0c2Nyb2xsTWVudUludG9WaWV3OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIC8vIGJvb2xlYW4gdG8gZW5hYmxlIHRoZSB2aWV3cG9ydCB0byBzaGlmdCBzbyB0aGF0IHRoZSBmdWxsIG1lbnUgZnVsbHkgdmlzaWJsZSB3aGVuIGVuZ2FnZWRcblx0XHRzZWFyY2hhYmxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgdG8gZW5hYmxlIHNlYXJjaGluZyBmZWF0dXJlIG9yIG5vdFxuXHRcdHNpbXBsZVZhbHVlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIC8vIHBhc3MgdGhlIHZhbHVlIHRvIG9uQ2hhbmdlIGFzIGEgc2ltcGxlIHZhbHVlIChsZWdhY3kgcHJlIDEuMCBtb2RlKSwgZGVmYXVsdHMgdG8gZmFsc2Vcblx0XHRzdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vYmplY3QsIC8vIG9wdGlvbmFsIHN0eWxlIHRvIGFwcGx5IHRvIHRoZSBjb250cm9sXG5cdFx0dGFiSW5kZXg6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLCAvLyBvcHRpb25hbCB0YWIgaW5kZXggb2YgdGhlIGNvbnRyb2xcblx0XHR0YWJTZWxlY3RzVmFsdWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byB0cmVhdCB0YWJiaW5nIG91dCB3aGlsZSBmb2N1c2VkIHRvIGJlIHZhbHVlIHNlbGVjdGlvblxuXHRcdHZhbHVlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSwgLy8gaW5pdGlhbCBmaWVsZCB2YWx1ZVxuXHRcdHZhbHVlQ29tcG9uZW50OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsIC8vIHZhbHVlIGNvbXBvbmVudCB0byByZW5kZXJcblx0XHR2YWx1ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsIC8vIHBhdGggb2YgdGhlIGxhYmVsIHZhbHVlIGluIG9wdGlvbiBvYmplY3RzXG5cdFx0dmFsdWVSZW5kZXJlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLCAvLyB2YWx1ZVJlbmRlcmVyOiBmdW5jdGlvbiAob3B0aW9uKSB7fVxuXHRcdHdyYXBwZXJTdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vYmplY3QgfSxcblxuXHQvLyBvcHRpb25hbCBzdHlsZSB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IHdyYXBwZXJcblx0c3RhdGljczogeyBBc3luYzogX0FzeW5jMlsnZGVmYXVsdCddLCBBc3luY0NyZWF0YWJsZTogX0FzeW5jQ3JlYXRhYmxlMlsnZGVmYXVsdCddLCBDcmVhdGFibGU6IF9DcmVhdGFibGUyWydkZWZhdWx0J10gfSxcblxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWRkTGFiZWxUZXh0OiAnQWRkIFwie2xhYmVsfVwiPycsXG5cdFx0XHRhcnJvd1JlbmRlcmVyOiBfdXRpbHNEZWZhdWx0QXJyb3dSZW5kZXJlcjJbJ2RlZmF1bHQnXSxcblx0XHRcdGF1dG9zaXplOiB0cnVlLFxuXHRcdFx0YmFja3NwYWNlUmVtb3ZlczogdHJ1ZSxcblx0XHRcdGJhY2tzcGFjZVRvUmVtb3ZlTWVzc2FnZTogJ1ByZXNzIGJhY2tzcGFjZSB0byByZW1vdmUge2xhYmVsfScsXG5cdFx0XHRjbGVhcmFibGU6IHRydWUsXG5cdFx0XHRjbGVhckFsbFRleHQ6ICdDbGVhciBhbGwnLFxuXHRcdFx0Y2xlYXJSZW5kZXJlcjogX3V0aWxzRGVmYXVsdENsZWFyUmVuZGVyZXIyWydkZWZhdWx0J10sXG5cdFx0XHRjbGVhclZhbHVlVGV4dDogJ0NsZWFyIHZhbHVlJyxcblx0XHRcdGRlbGV0ZVJlbW92ZXM6IHRydWUsXG5cdFx0XHRkZWxpbWl0ZXI6ICcsJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdGVzY2FwZUNsZWFyc1ZhbHVlOiB0cnVlLFxuXHRcdFx0ZmlsdGVyT3B0aW9uczogX3V0aWxzRGVmYXVsdEZpbHRlck9wdGlvbnMyWydkZWZhdWx0J10sXG5cdFx0XHRpZ25vcmVBY2NlbnRzOiB0cnVlLFxuXHRcdFx0aWdub3JlQ2FzZTogdHJ1ZSxcblx0XHRcdGlucHV0UHJvcHM6IHt9LFxuXHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdGpvaW5WYWx1ZXM6IGZhbHNlLFxuXHRcdFx0bGFiZWxLZXk6ICdsYWJlbCcsXG5cdFx0XHRtYXRjaFBvczogJ2FueScsXG5cdFx0XHRtYXRjaFByb3A6ICdhbnknLFxuXHRcdFx0bWVudUJ1ZmZlcjogMCxcblx0XHRcdG1lbnVSZW5kZXJlcjogX3V0aWxzRGVmYXVsdE1lbnVSZW5kZXJlcjJbJ2RlZmF1bHQnXSxcblx0XHRcdG11bHRpOiBmYWxzZSxcblx0XHRcdG5vUmVzdWx0c1RleHQ6ICdObyByZXN1bHRzIGZvdW5kJyxcblx0XHRcdG9uQmx1clJlc2V0c0lucHV0OiB0cnVlLFxuXHRcdFx0b25DbG9zZVJlc2V0c0lucHV0OiB0cnVlLFxuXHRcdFx0b3BlbkFmdGVyRm9jdXM6IGZhbHNlLFxuXHRcdFx0b3B0aW9uQ29tcG9uZW50OiBfT3B0aW9uMlsnZGVmYXVsdCddLFxuXHRcdFx0cGFnZVNpemU6IDUsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ1NlbGVjdC4uLicsXG5cdFx0XHRyZXF1aXJlZDogZmFsc2UsXG5cdFx0XHRzY3JvbGxNZW51SW50b1ZpZXc6IHRydWUsXG5cdFx0XHRzZWFyY2hhYmxlOiB0cnVlLFxuXHRcdFx0c2ltcGxlVmFsdWU6IGZhbHNlLFxuXHRcdFx0dGFiU2VsZWN0c1ZhbHVlOiB0cnVlLFxuXHRcdFx0dmFsdWVDb21wb25lbnQ6IF9WYWx1ZTJbJ2RlZmF1bHQnXSxcblx0XHRcdHZhbHVlS2V5OiAndmFsdWUnXG5cdFx0fTtcblx0fSxcblxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aW5wdXRWYWx1ZTogJycsXG5cdFx0XHRpc0ZvY3VzZWQ6IGZhbHNlLFxuXHRcdFx0aXNPcGVuOiBmYWxzZSxcblx0XHRcdGlzUHNldWRvRm9jdXNlZDogZmFsc2UsXG5cdFx0XHRyZXF1aXJlZDogZmFsc2Vcblx0XHR9O1xuXHR9LFxuXG5cdGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMuX2luc3RhbmNlUHJlZml4ID0gJ3JlYWN0LXNlbGVjdC0nICsgKHRoaXMucHJvcHMuaW5zdGFuY2VJZCB8fCArK2luc3RhbmNlSWQpICsgJy0nO1xuXHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXG5cdFx0aWYgKHRoaXMucHJvcHMucmVxdWlyZWQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRyZXF1aXJlZDogdGhpcy5oYW5kbGVSZXF1aXJlZCh2YWx1ZUFycmF5WzBdLCB0aGlzLnByb3BzLm11bHRpKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5hdXRvZm9jdXMpIHtcblx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHR9XG5cdH0sXG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheShuZXh0UHJvcHMudmFsdWUsIG5leHRQcm9wcyk7XG5cblx0XHRpZiAobmV4dFByb3BzLnJlcXVpcmVkKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0cmVxdWlyZWQ6IHRoaXMuaGFuZGxlUmVxdWlyZWQodmFsdWVBcnJheVswXSwgbmV4dFByb3BzLm11bHRpKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXG5cdGNvbXBvbmVudFdpbGxVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcblx0XHRpZiAobmV4dFN0YXRlLmlzT3BlbiAhPT0gdGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdHRoaXMudG9nZ2xlVG91Y2hPdXRzaWRlRXZlbnQobmV4dFN0YXRlLmlzT3Blbik7XG5cdFx0XHR2YXIgaGFuZGxlciA9IG5leHRTdGF0ZS5pc09wZW4gPyBuZXh0UHJvcHMub25PcGVuIDogbmV4dFByb3BzLm9uQ2xvc2U7XG5cdFx0XHRoYW5kbGVyICYmIGhhbmRsZXIoKTtcblx0XHR9XG5cdH0sXG5cblx0Y29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcblx0XHQvLyBmb2N1cyB0byB0aGUgc2VsZWN0ZWQgb3B0aW9uXG5cdFx0aWYgKHRoaXMubWVudSAmJiB0aGlzLmZvY3VzZWQgJiYgdGhpcy5zdGF0ZS5pc09wZW4gJiYgIXRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbikge1xuXHRcdFx0dmFyIGZvY3VzZWRPcHRpb25Ob2RlID0gX3JlYWN0RG9tMlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMuZm9jdXNlZCk7XG5cdFx0XHR2YXIgbWVudU5vZGUgPSBfcmVhY3REb20yWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5tZW51KTtcblx0XHRcdG1lbnVOb2RlLnNjcm9sbFRvcCA9IGZvY3VzZWRPcHRpb25Ob2RlLm9mZnNldFRvcDtcblx0XHRcdHRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbiA9IHRydWU7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdHRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbiA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSAmJiB0aGlzLmZvY3VzZWQgJiYgdGhpcy5tZW51KSB7XG5cdFx0XHR0aGlzLl9zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGZvY3VzZWRET00gPSBfcmVhY3REb20yWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5mb2N1c2VkKTtcblx0XHRcdHZhciBtZW51RE9NID0gX3JlYWN0RG9tMlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMubWVudSk7XG5cdFx0XHR2YXIgZm9jdXNlZFJlY3QgPSBmb2N1c2VkRE9NLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0dmFyIG1lbnVSZWN0ID0gbWVudURPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGlmIChmb2N1c2VkUmVjdC5ib3R0b20gPiBtZW51UmVjdC5ib3R0b20gfHwgZm9jdXNlZFJlY3QudG9wIDwgbWVudVJlY3QudG9wKSB7XG5cdFx0XHRcdG1lbnVET00uc2Nyb2xsVG9wID0gZm9jdXNlZERPTS5vZmZzZXRUb3AgKyBmb2N1c2VkRE9NLmNsaWVudEhlaWdodCAtIG1lbnVET00ub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy5wcm9wcy5zY3JvbGxNZW51SW50b1ZpZXcgJiYgdGhpcy5tZW51Q29udGFpbmVyKSB7XG5cdFx0XHR2YXIgbWVudUNvbnRhaW5lclJlY3QgPSB0aGlzLm1lbnVDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRpZiAod2luZG93LmlubmVySGVpZ2h0IDwgbWVudUNvbnRhaW5lclJlY3QuYm90dG9tICsgdGhpcy5wcm9wcy5tZW51QnVmZmVyKSB7XG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxCeSgwLCBtZW51Q29udGFpbmVyUmVjdC5ib3R0b20gKyB0aGlzLnByb3BzLm1lbnVCdWZmZXIgLSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAocHJldlByb3BzLmRpc2FibGVkICE9PSB0aGlzLnByb3BzLmRpc2FibGVkKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBmYWxzZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuXHRcdFx0dGhpcy5jbG9zZU1lbnUoKTtcblx0XHR9XG5cdH0sXG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdGlmICghZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciAmJiBkb2N1bWVudC5kZXRhY2hFdmVudCkge1xuXHRcdFx0ZG9jdW1lbnQuZGV0YWNoRXZlbnQoJ29udG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlVG91Y2hPdXRzaWRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlVG91Y2hPdXRzaWRlKTtcblx0XHR9XG5cdH0sXG5cblx0dG9nZ2xlVG91Y2hPdXRzaWRlRXZlbnQ6IGZ1bmN0aW9uIHRvZ2dsZVRvdWNoT3V0c2lkZUV2ZW50KGVuYWJsZWQpIHtcblx0XHRpZiAoZW5hYmxlZCkge1xuXHRcdFx0aWYgKCFkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICYmIGRvY3VtZW50LmF0dGFjaEV2ZW50KSB7XG5cdFx0XHRcdGRvY3VtZW50LmF0dGFjaEV2ZW50KCdvbnRvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZVRvdWNoT3V0c2lkZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVUb3VjaE91dHNpZGUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIgJiYgZG9jdW1lbnQuZGV0YWNoRXZlbnQpIHtcblx0XHRcdFx0ZG9jdW1lbnQuZGV0YWNoRXZlbnQoJ29udG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlVG91Y2hPdXRzaWRlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZVRvdWNoT3V0c2lkZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdGhhbmRsZVRvdWNoT3V0c2lkZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hPdXRzaWRlKGV2ZW50KSB7XG5cdFx0Ly8gaGFuZGxlIHRvdWNoIG91dHNpZGUgb24gaW9zIHRvIGRpc21pc3MgbWVudVxuXHRcdGlmICh0aGlzLndyYXBwZXIgJiYgIXRoaXMud3JhcHBlci5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG5cdFx0XHR0aGlzLmNsb3NlTWVudSgpO1xuXHRcdH1cblx0fSxcblxuXHRmb2N1czogZnVuY3Rpb24gZm9jdXMoKSB7XG5cdFx0aWYgKCF0aGlzLmlucHV0KSByZXR1cm47XG5cdFx0dGhpcy5pbnB1dC5mb2N1cygpO1xuXG5cdFx0aWYgKHRoaXMucHJvcHMub3BlbkFmdGVyRm9jdXMpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpc09wZW46IHRydWVcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblxuXHRibHVySW5wdXQ6IGZ1bmN0aW9uIGJsdXJJbnB1dCgpIHtcblx0XHRpZiAoIXRoaXMuaW5wdXQpIHJldHVybjtcblx0XHR0aGlzLmlucHV0LmJsdXIoKTtcblx0fSxcblxuXHRoYW5kbGVUb3VjaE1vdmU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShldmVudCkge1xuXHRcdC8vIFNldCBhIGZsYWcgdGhhdCB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkXG5cdFx0dGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cdH0sXG5cblx0aGFuZGxlVG91Y2hTdGFydDogZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChldmVudCkge1xuXHRcdC8vIFNldCBhIGZsYWcgdGhhdCB0aGUgdmlldyBpcyBub3QgYmVpbmcgZHJhZ2dlZFxuXHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0fSxcblxuXHRoYW5kbGVUb3VjaEVuZDogZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZXZlbnQpIHtcblx0XHQvLyBDaGVjayBpZiB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkLCBJbiB0aGlzIGNhc2Vcblx0XHQvLyB3ZSBkb24ndCB3YW50IHRvIGZpcmUgdGhlIGNsaWNrIGV2ZW50IChiZWNhdXNlIHRoZSB1c2VyIG9ubHkgd2FudHMgdG8gc2Nyb2xsKVxuXHRcdGlmICh0aGlzLmRyYWdnaW5nKSByZXR1cm47XG5cblx0XHQvLyBGaXJlIHRoZSBtb3VzZSBldmVudHNcblx0XHR0aGlzLmhhbmRsZU1vdXNlRG93bihldmVudCk7XG5cdH0sXG5cblx0aGFuZGxlVG91Y2hFbmRDbGVhclZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZENsZWFyVmFsdWUoZXZlbnQpIHtcblx0XHQvLyBDaGVjayBpZiB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkLCBJbiB0aGlzIGNhc2Vcblx0XHQvLyB3ZSBkb24ndCB3YW50IHRvIGZpcmUgdGhlIGNsaWNrIGV2ZW50IChiZWNhdXNlIHRoZSB1c2VyIG9ubHkgd2FudHMgdG8gc2Nyb2xsKVxuXHRcdGlmICh0aGlzLmRyYWdnaW5nKSByZXR1cm47XG5cblx0XHQvLyBDbGVhciB0aGUgdmFsdWVcblx0XHR0aGlzLmNsZWFyVmFsdWUoZXZlbnQpO1xuXHR9LFxuXG5cdGhhbmRsZU1vdXNlRG93bjogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG5cdFx0Ly8gaWYgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgYnkgYSBtb3VzZWRvd24gYW5kIG5vdCB0aGUgcHJpbWFyeVxuXHRcdC8vIGJ1dHRvbiwgb3IgaWYgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZCwgaWdub3JlIGl0LlxuXHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8IGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIHByZXZlbnQgZGVmYXVsdCBldmVudCBoYW5kbGVyc1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQvLyBmb3IgdGhlIG5vbi1zZWFyY2hhYmxlIHNlbGVjdCwgdG9nZ2xlIHRoZSBtZW51XG5cdFx0aWYgKCF0aGlzLnByb3BzLnNlYXJjaGFibGUpIHtcblx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdHJldHVybiB0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN0YXRlLmlzRm9jdXNlZCkge1xuXHRcdFx0Ly8gT24gaU9TLCB3ZSBjYW4gZ2V0IGludG8gYSBzdGF0ZSB3aGVyZSB3ZSB0aGluayB0aGUgaW5wdXQgaXMgZm9jdXNlZCBidXQgaXQgaXNuJ3QgcmVhbGx5LFxuXHRcdFx0Ly8gc2luY2UgaU9TIGlnbm9yZXMgcHJvZ3JhbW1hdGljIGNhbGxzIHRvIGlucHV0LmZvY3VzKCkgdGhhdCB3ZXJlbid0IHRyaWdnZXJlZCBieSBhIGNsaWNrIGV2ZW50LlxuXHRcdFx0Ly8gQ2FsbCBmb2N1cygpIGFnYWluIGhlcmUgdG8gYmUgc2FmZS5cblx0XHRcdHRoaXMuZm9jdXMoKTtcblxuXHRcdFx0dmFyIGlucHV0ID0gdGhpcy5pbnB1dDtcblx0XHRcdGlmICh0eXBlb2YgaW5wdXQuZ2V0SW5wdXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Ly8gR2V0IHRoZSBhY3R1YWwgRE9NIGlucHV0IGlmIHRoZSByZWYgaXMgYW4gPEF1dG9zaXplSW5wdXQgLz4gY29tcG9uZW50XG5cdFx0XHRcdGlucHV0ID0gaW5wdXQuZ2V0SW5wdXQoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2xlYXJzIHRoZSB2YWx1ZSBzbyB0aGF0IHRoZSBjdXJzb3Igd2lsbCBiZSBhdCB0aGUgZW5kIG9mIGlucHV0IHdoZW4gdGhlIGNvbXBvbmVudCByZS1yZW5kZXJzXG5cdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xuXG5cdFx0XHQvLyBpZiB0aGUgaW5wdXQgaXMgZm9jdXNlZCwgZW5zdXJlIHRoZSBtZW51IGlzIG9wZW5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpc09wZW46IHRydWUsXG5cdFx0XHRcdGlzUHNldWRvRm9jdXNlZDogZmFsc2Vcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBvdGhlcndpc2UsIGZvY3VzIHRoZSBpbnB1dCBhbmQgb3BlbiB0aGUgbWVudVxuXHRcdFx0dGhpcy5fb3BlbkFmdGVyRm9jdXMgPSB0cnVlO1xuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH1cblx0fSxcblxuXHRoYW5kbGVNb3VzZURvd25PbkFycm93OiBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25PbkFycm93KGV2ZW50KSB7XG5cdFx0Ly8gaWYgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgYnkgYSBtb3VzZWRvd24gYW5kIG5vdCB0aGUgcHJpbWFyeVxuXHRcdC8vIGJ1dHRvbiwgb3IgaWYgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZCwgaWdub3JlIGl0LlxuXHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8IGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBJZiB0aGUgbWVudSBpc24ndCBvcGVuLCBsZXQgdGhlIGV2ZW50IGJ1YmJsZSB0byB0aGUgbWFpbiBoYW5kbGVNb3VzZURvd25cblx0XHRpZiAoIXRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIHByZXZlbnQgZGVmYXVsdCBldmVudCBoYW5kbGVyc1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly8gY2xvc2UgdGhlIG1lbnVcblx0XHR0aGlzLmNsb3NlTWVudSgpO1xuXHR9LFxuXG5cdGhhbmRsZU1vdXNlRG93bk9uTWVudTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duT25NZW51KGV2ZW50KSB7XG5cdFx0Ly8gaWYgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgYnkgYSBtb3VzZWRvd24gYW5kIG5vdCB0aGUgcHJpbWFyeVxuXHRcdC8vIGJ1dHRvbiwgb3IgaWYgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZCwgaWdub3JlIGl0LlxuXHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8IGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dGhpcy5fb3BlbkFmdGVyRm9jdXMgPSB0cnVlO1xuXHRcdHRoaXMuZm9jdXMoKTtcblx0fSxcblxuXHRjbG9zZU1lbnU6IGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkNsb3NlUmVzZXRzSW5wdXQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpc09wZW46IGZhbHNlLFxuXHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IHRoaXMuc3RhdGUuaXNGb2N1c2VkICYmICF0aGlzLnByb3BzLm11bHRpLFxuXHRcdFx0XHRpbnB1dFZhbHVlOiAnJ1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpc09wZW46IGZhbHNlLFxuXHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IHRoaXMuc3RhdGUuaXNGb2N1c2VkICYmICF0aGlzLnByb3BzLm11bHRpLFxuXHRcdFx0XHRpbnB1dFZhbHVlOiB0aGlzLnN0YXRlLmlucHV0VmFsdWVcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR0aGlzLmhhc1Njcm9sbGVkVG9PcHRpb24gPSBmYWxzZTtcblx0fSxcblxuXHRoYW5kbGVJbnB1dEZvY3VzOiBmdW5jdGlvbiBoYW5kbGVJbnB1dEZvY3VzKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVybjtcblx0XHR2YXIgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW4gfHwgdGhpcy5fb3BlbkFmdGVyRm9jdXMgfHwgdGhpcy5wcm9wcy5vcGVuT25Gb2N1cztcblx0XHRpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGlzRm9jdXNlZDogdHJ1ZSxcblx0XHRcdGlzT3BlbjogaXNPcGVuXG5cdFx0fSk7XG5cdFx0dGhpcy5fb3BlbkFmdGVyRm9jdXMgPSBmYWxzZTtcblx0fSxcblxuXHRoYW5kbGVJbnB1dEJsdXI6IGZ1bmN0aW9uIGhhbmRsZUlucHV0Qmx1cihldmVudCkge1xuXHRcdC8vIFRoZSBjaGVjayBmb3IgbWVudS5jb250YWlucyhhY3RpdmVFbGVtZW50KSBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCBJRTExJ3Mgc2Nyb2xsYmFyIGZyb20gY2xvc2luZyB0aGUgbWVudSBpbiBjZXJ0YWluIGNvbnRleHRzLlxuXHRcdGlmICh0aGlzLm1lbnUgJiYgKHRoaXMubWVudSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB8fCB0aGlzLm1lbnUuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpKSB7XG5cdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG5cdFx0fVxuXHRcdHZhciBvbkJsdXJyZWRTdGF0ZSA9IHtcblx0XHRcdGlzRm9jdXNlZDogZmFsc2UsXG5cdFx0XHRpc09wZW46IGZhbHNlLFxuXHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiBmYWxzZVxuXHRcdH07XG5cdFx0aWYgKHRoaXMucHJvcHMub25CbHVyUmVzZXRzSW5wdXQpIHtcblx0XHRcdG9uQmx1cnJlZFN0YXRlLmlucHV0VmFsdWUgPSAnJztcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZShvbkJsdXJyZWRTdGF0ZSk7XG5cdH0sXG5cblx0aGFuZGxlSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG5cdFx0dmFyIG5ld0lucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cblx0XHRpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSBldmVudC50YXJnZXQudmFsdWUgJiYgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKSB7XG5cdFx0XHR2YXIgbmV4dFN0YXRlID0gdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKG5ld0lucHV0VmFsdWUpO1xuXHRcdFx0Ly8gTm90ZTogIT0gdXNlZCBkZWxpYmVyYXRlbHkgaGVyZSB0byBjYXRjaCB1bmRlZmluZWQgYW5kIG51bGxcblx0XHRcdGlmIChuZXh0U3RhdGUgIT0gbnVsbCAmJiB0eXBlb2YgbmV4dFN0YXRlICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRuZXdJbnB1dFZhbHVlID0gJycgKyBuZXh0U3RhdGU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpc09wZW46IHRydWUsXG5cdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IGZhbHNlLFxuXHRcdFx0aW5wdXRWYWx1ZTogbmV3SW5wdXRWYWx1ZVxuXHRcdH0pO1xuXHR9LFxuXG5cdGhhbmRsZUtleURvd246IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uSW5wdXRLZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uSW5wdXRLZXlEb3duKGV2ZW50KTtcblx0XHRcdGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcblx0XHRcdGNhc2UgODpcblx0XHRcdFx0Ly8gYmFja3NwYWNlXG5cdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICYmIHRoaXMucHJvcHMuYmFja3NwYWNlUmVtb3Zlcykge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5wb3BWYWx1ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdGNhc2UgOTpcblx0XHRcdFx0Ly8gdGFiXG5cdFx0XHRcdGlmIChldmVudC5zaGlmdEtleSB8fCAhdGhpcy5zdGF0ZS5pc09wZW4gfHwgIXRoaXMucHJvcHMudGFiU2VsZWN0c1ZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2VsZWN0Rm9jdXNlZE9wdGlvbigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRjYXNlIDEzOlxuXHRcdFx0XHQvLyBlbnRlclxuXHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUuaXNPcGVuKSByZXR1cm47XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR0aGlzLnNlbGVjdEZvY3VzZWRPcHRpb24oKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI3OlxuXHRcdFx0XHQvLyBlc2NhcGVcblx0XHRcdFx0aWYgKHRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdFx0dGhpcy5jbG9zZU1lbnUoKTtcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmNsZWFyYWJsZSAmJiB0aGlzLnByb3BzLmVzY2FwZUNsZWFyc1ZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy5jbGVhclZhbHVlKGV2ZW50KTtcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzg6XG5cdFx0XHRcdC8vIHVwXG5cdFx0XHRcdHRoaXMuZm9jdXNQcmV2aW91c09wdGlvbigpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdC8vIGRvd25cblx0XHRcdFx0dGhpcy5mb2N1c05leHRPcHRpb24oKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDMzOlxuXHRcdFx0XHQvLyBwYWdlIHVwXG5cdFx0XHRcdHRoaXMuZm9jdXNQYWdlVXBPcHRpb24oKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM0OlxuXHRcdFx0XHQvLyBwYWdlIGRvd25cblx0XHRcdFx0dGhpcy5mb2N1c1BhZ2VEb3duT3B0aW9uKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzNTpcblx0XHRcdFx0Ly8gZW5kIGtleVxuXHRcdFx0XHRpZiAoZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5mb2N1c0VuZE9wdGlvbigpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzY6XG5cdFx0XHRcdC8vIGhvbWUga2V5XG5cdFx0XHRcdGlmIChldmVudC5zaGlmdEtleSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmZvY3VzU3RhcnRPcHRpb24oKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDQ2OlxuXHRcdFx0XHQvLyBiYWNrc3BhY2Vcblx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLmlucHV0VmFsdWUgJiYgdGhpcy5wcm9wcy5kZWxldGVSZW1vdmVzKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLnBvcFZhbHVlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9LFxuXG5cdGhhbmRsZVZhbHVlQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZVZhbHVlQ2xpY2sob3B0aW9uLCBldmVudCkge1xuXHRcdGlmICghdGhpcy5wcm9wcy5vblZhbHVlQ2xpY2spIHJldHVybjtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVDbGljayhvcHRpb24sIGV2ZW50KTtcblx0fSxcblxuXHRoYW5kbGVNZW51U2Nyb2xsOiBmdW5jdGlvbiBoYW5kbGVNZW51U2Nyb2xsKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLnByb3BzLm9uTWVudVNjcm9sbFRvQm90dG9tKSByZXR1cm47XG5cdFx0dmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuXHRcdGlmICh0YXJnZXQuc2Nyb2xsSGVpZ2h0ID4gdGFyZ2V0Lm9mZnNldEhlaWdodCAmJiAhKHRhcmdldC5zY3JvbGxIZWlnaHQgLSB0YXJnZXQub2Zmc2V0SGVpZ2h0IC0gdGFyZ2V0LnNjcm9sbFRvcCkpIHtcblx0XHRcdHRoaXMucHJvcHMub25NZW51U2Nyb2xsVG9Cb3R0b20oKTtcblx0XHR9XG5cdH0sXG5cblx0aGFuZGxlUmVxdWlyZWQ6IGZ1bmN0aW9uIGhhbmRsZVJlcXVpcmVkKHZhbHVlLCBtdWx0aSkge1xuXHRcdGlmICghdmFsdWUpIHJldHVybiB0cnVlO1xuXHRcdHJldHVybiBtdWx0aSA/IHZhbHVlLmxlbmd0aCA9PT0gMCA6IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG5cdH0sXG5cblx0Z2V0T3B0aW9uTGFiZWw6IGZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsKG9wKSB7XG5cdFx0cmV0dXJuIG9wW3RoaXMucHJvcHMubGFiZWxLZXldO1xuXHR9LFxuXG5cdC8qKlxuICAqIFR1cm5zIGEgdmFsdWUgaW50byBhbiBhcnJheSBmcm9tIHRoZSBnaXZlbiBvcHRpb25zXG4gICogQHBhcmFtXHR7U3RyaW5nfE51bWJlcnxBcnJheX1cdHZhbHVlXHRcdC0gdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3QgaW5wdXRcbiAgKiBAcGFyYW1cdHtPYmplY3R9XHRcdG5leHRQcm9wc1x0LSBvcHRpb25hbGx5IHNwZWNpZnkgdGhlIG5leHRQcm9wcyBzbyB0aGUgcmV0dXJuZWQgYXJyYXkgdXNlcyB0aGUgbGF0ZXN0IGNvbmZpZ3VyYXRpb25cbiAgKiBAcmV0dXJuc1x0e0FycmF5fVx0dGhlIHZhbHVlIG9mIHRoZSBzZWxlY3QgcmVwcmVzZW50ZWQgaW4gYW4gYXJyYXlcbiAgKi9cblx0Z2V0VmFsdWVBcnJheTogZnVuY3Rpb24gZ2V0VmFsdWVBcnJheSh2YWx1ZSwgbmV4dFByb3BzKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblxuXHRcdC8qKiBzdXBwb3J0IG9wdGlvbmFsbHkgcGFzc2luZyBpbiB0aGUgYG5leHRQcm9wc2Agc28gYGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNgIHVwZGF0ZXMgd2lsbCBmdW5jdGlvbiBhcyBleHBlY3RlZCAqL1xuXHRcdHZhciBwcm9wcyA9IHR5cGVvZiBuZXh0UHJvcHMgPT09ICdvYmplY3QnID8gbmV4dFByb3BzIDogdGhpcy5wcm9wcztcblx0XHRpZiAocHJvcHMubXVsdGkpIHtcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9IHZhbHVlLnNwbGl0KHByb3BzLmRlbGltaXRlcik7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gW107XG5cdFx0XHRcdHZhbHVlID0gW3ZhbHVlXTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWx1ZS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy5leHBhbmRWYWx1ZSh2YWx1ZSwgcHJvcHMpO1xuXHRcdFx0fSkuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHZhciBleHBhbmRlZFZhbHVlID0gdGhpcy5leHBhbmRWYWx1ZSh2YWx1ZSwgcHJvcHMpO1xuXHRcdHJldHVybiBleHBhbmRlZFZhbHVlID8gW2V4cGFuZGVkVmFsdWVdIDogW107XG5cdH0sXG5cblx0LyoqXG4gICogUmV0cmlldmUgYSB2YWx1ZSBmcm9tIHRoZSBnaXZlbiBvcHRpb25zIGFuZCB2YWx1ZUtleVxuICAqIEBwYXJhbVx0e1N0cmluZ3xOdW1iZXJ8QXJyYXl9XHR2YWx1ZVx0LSB0aGUgc2VsZWN0ZWQgdmFsdWUocylcbiAgKiBAcGFyYW1cdHtPYmplY3R9XHRcdHByb3BzXHQtIHRoZSBTZWxlY3QgY29tcG9uZW50J3MgcHJvcHMgKG9yIG5leHRQcm9wcylcbiAgKi9cblx0ZXhwYW5kVmFsdWU6IGZ1bmN0aW9uIGV4cGFuZFZhbHVlKHZhbHVlLCBwcm9wcykge1xuXHRcdHZhciB2YWx1ZVR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cdFx0aWYgKHZhbHVlVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsdWVUeXBlICE9PSAnbnVtYmVyJyAmJiB2YWx1ZVR5cGUgIT09ICdib29sZWFuJykgcmV0dXJuIHZhbHVlO1xuXHRcdHZhciBvcHRpb25zID0gcHJvcHMub3B0aW9ucztcblx0XHR2YXIgdmFsdWVLZXkgPSBwcm9wcy52YWx1ZUtleTtcblxuXHRcdGlmICghb3B0aW9ucykgcmV0dXJuO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKG9wdGlvbnNbaV1bdmFsdWVLZXldID09PSB2YWx1ZSkgcmV0dXJuIG9wdGlvbnNbaV07XG5cdFx0fVxuXHR9LFxuXG5cdHNldFZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2YWx1ZSkge1xuXHRcdHZhciBfdGhpczIgPSB0aGlzO1xuXG5cdFx0aWYgKHRoaXMucHJvcHMuYXV0b0JsdXIpIHtcblx0XHRcdHRoaXMuYmx1cklucHV0KCk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5wcm9wcy5vbkNoYW5nZSkgcmV0dXJuO1xuXHRcdGlmICh0aGlzLnByb3BzLnJlcXVpcmVkKSB7XG5cdFx0XHR2YXIgcmVxdWlyZWQgPSB0aGlzLmhhbmRsZVJlcXVpcmVkKHZhbHVlLCB0aGlzLnByb3BzLm11bHRpKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyByZXF1aXJlZDogcmVxdWlyZWQgfSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnByb3BzLnNpbXBsZVZhbHVlICYmIHZhbHVlKSB7XG5cdFx0XHR2YWx1ZSA9IHRoaXMucHJvcHMubXVsdGkgPyB2YWx1ZS5tYXAoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0cmV0dXJuIGlbX3RoaXMyLnByb3BzLnZhbHVlS2V5XTtcblx0XHRcdH0pLmpvaW4odGhpcy5wcm9wcy5kZWxpbWl0ZXIpIDogdmFsdWVbdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuXHR9LFxuXG5cdHNlbGVjdFZhbHVlOiBmdW5jdGlvbiBzZWxlY3RWYWx1ZSh2YWx1ZSkge1xuXHRcdHZhciBfdGhpczMgPSB0aGlzO1xuXG5cdFx0Ly9OT1RFOiB1cGRhdGUgdmFsdWUgaW4gdGhlIGNhbGxiYWNrIHRvIG1ha2Ugc3VyZSB0aGUgaW5wdXQgdmFsdWUgaXMgZW1wdHkgc28gdGhhdCB0aGVyZSBhcmUgbm8gc3R5bGluZyBpc3N1ZXMgKENocm9tZSBoYWQgaXNzdWUgb3RoZXJ3aXNlKVxuXHRcdHRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbiA9IGZhbHNlO1xuXHRcdGlmICh0aGlzLnByb3BzLm11bHRpKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW5wdXRWYWx1ZTogJycsXG5cdFx0XHRcdGZvY3VzZWRJbmRleDogbnVsbFxuXHRcdFx0fSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRfdGhpczMuYWRkVmFsdWUodmFsdWUpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpc09wZW46IGZhbHNlLFxuXHRcdFx0XHRpbnB1dFZhbHVlOiAnJyxcblx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiB0aGlzLnN0YXRlLmlzRm9jdXNlZFxuXHRcdFx0fSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRfdGhpczMuc2V0VmFsdWUodmFsdWUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXG5cdGFkZFZhbHVlOiBmdW5jdGlvbiBhZGRWYWx1ZSh2YWx1ZSkge1xuXHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXHRcdHZhciB2aXNpYmxlT3B0aW9ucyA9IHRoaXMuX3Zpc2libGVPcHRpb25zLmZpbHRlcihmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRyZXR1cm4gIXZhbC5kaXNhYmxlZDtcblx0XHR9KTtcblx0XHR2YXIgbGFzdFZhbHVlSW5kZXggPSB2aXNpYmxlT3B0aW9ucy5pbmRleE9mKHZhbHVlKTtcblx0XHR0aGlzLnNldFZhbHVlKHZhbHVlQXJyYXkuY29uY2F0KHZhbHVlKSk7XG5cdFx0aWYgKHZpc2libGVPcHRpb25zLmxlbmd0aCAtIDEgPT09IGxhc3RWYWx1ZUluZGV4KSB7XG5cdFx0XHQvLyB0aGUgbGFzdCBvcHRpb24gd2FzIHNlbGVjdGVkOyBmb2N1cyB0aGUgc2Vjb25kLWxhc3Qgb25lXG5cdFx0XHR0aGlzLmZvY3VzT3B0aW9uKHZpc2libGVPcHRpb25zW2xhc3RWYWx1ZUluZGV4IC0gMV0pO1xuXHRcdH0gZWxzZSBpZiAodmlzaWJsZU9wdGlvbnMubGVuZ3RoID4gbGFzdFZhbHVlSW5kZXgpIHtcblx0XHRcdC8vIGZvY3VzIHRoZSBvcHRpb24gYmVsb3cgdGhlIHNlbGVjdGVkIG9uZVxuXHRcdFx0dGhpcy5mb2N1c09wdGlvbih2aXNpYmxlT3B0aW9uc1tsYXN0VmFsdWVJbmRleCArIDFdKTtcblx0XHR9XG5cdH0sXG5cblx0cG9wVmFsdWU6IGZ1bmN0aW9uIHBvcFZhbHVlKCkge1xuXHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXHRcdGlmICghdmFsdWVBcnJheS5sZW5ndGgpIHJldHVybjtcblx0XHRpZiAodmFsdWVBcnJheVt2YWx1ZUFycmF5Lmxlbmd0aCAtIDFdLmNsZWFyYWJsZVZhbHVlID09PSBmYWxzZSkgcmV0dXJuO1xuXHRcdHRoaXMuc2V0VmFsdWUodmFsdWVBcnJheS5zbGljZSgwLCB2YWx1ZUFycmF5Lmxlbmd0aCAtIDEpKTtcblx0fSxcblxuXHRyZW1vdmVWYWx1ZTogZnVuY3Rpb24gcmVtb3ZlVmFsdWUodmFsdWUpIHtcblx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHR0aGlzLnNldFZhbHVlKHZhbHVlQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRyZXR1cm4gaSAhPT0gdmFsdWU7XG5cdFx0fSkpO1xuXHRcdHRoaXMuZm9jdXMoKTtcblx0fSxcblxuXHRjbGVhclZhbHVlOiBmdW5jdGlvbiBjbGVhclZhbHVlKGV2ZW50KSB7XG5cdFx0Ly8gaWYgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgYnkgYSBtb3VzZWRvd24gYW5kIG5vdCB0aGUgcHJpbWFyeVxuXHRcdC8vIGJ1dHRvbiwgaWdub3JlIGl0LlxuXHRcdGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gIT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFZhbHVlKHRoaXMuZ2V0UmVzZXRWYWx1ZSgpKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGlzT3BlbjogZmFsc2UsXG5cdFx0XHRpbnB1dFZhbHVlOiAnJ1xuXHRcdH0sIHRoaXMuZm9jdXMpO1xuXHR9LFxuXG5cdGdldFJlc2V0VmFsdWU6IGZ1bmN0aW9uIGdldFJlc2V0VmFsdWUoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMucmVzZXRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5yZXNldFZhbHVlO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5tdWx0aSkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH0sXG5cblx0Zm9jdXNPcHRpb246IGZ1bmN0aW9uIGZvY3VzT3B0aW9uKG9wdGlvbikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Zm9jdXNlZE9wdGlvbjogb3B0aW9uXG5cdFx0fSk7XG5cdH0sXG5cblx0Zm9jdXNOZXh0T3B0aW9uOiBmdW5jdGlvbiBmb2N1c05leHRPcHRpb24oKSB7XG5cdFx0dGhpcy5mb2N1c0FkamFjZW50T3B0aW9uKCduZXh0Jyk7XG5cdH0sXG5cblx0Zm9jdXNQcmV2aW91c09wdGlvbjogZnVuY3Rpb24gZm9jdXNQcmV2aW91c09wdGlvbigpIHtcblx0XHR0aGlzLmZvY3VzQWRqYWNlbnRPcHRpb24oJ3ByZXZpb3VzJyk7XG5cdH0sXG5cblx0Zm9jdXNQYWdlVXBPcHRpb246IGZ1bmN0aW9uIGZvY3VzUGFnZVVwT3B0aW9uKCkge1xuXHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbigncGFnZV91cCcpO1xuXHR9LFxuXG5cdGZvY3VzUGFnZURvd25PcHRpb246IGZ1bmN0aW9uIGZvY3VzUGFnZURvd25PcHRpb24oKSB7XG5cdFx0dGhpcy5mb2N1c0FkamFjZW50T3B0aW9uKCdwYWdlX2Rvd24nKTtcblx0fSxcblxuXHRmb2N1c1N0YXJ0T3B0aW9uOiBmdW5jdGlvbiBmb2N1c1N0YXJ0T3B0aW9uKCkge1xuXHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbignc3RhcnQnKTtcblx0fSxcblxuXHRmb2N1c0VuZE9wdGlvbjogZnVuY3Rpb24gZm9jdXNFbmRPcHRpb24oKSB7XG5cdFx0dGhpcy5mb2N1c0FkamFjZW50T3B0aW9uKCdlbmQnKTtcblx0fSxcblxuXHRmb2N1c0FkamFjZW50T3B0aW9uOiBmdW5jdGlvbiBmb2N1c0FkamFjZW50T3B0aW9uKGRpcikge1xuXHRcdHZhciBvcHRpb25zID0gdGhpcy5fdmlzaWJsZU9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24sIGluZGV4KSB7XG5cdFx0XHRyZXR1cm4geyBvcHRpb246IG9wdGlvbiwgaW5kZXg6IGluZGV4IH07XG5cdFx0fSkuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHtcblx0XHRcdHJldHVybiAhb3B0aW9uLm9wdGlvbi5kaXNhYmxlZDtcblx0XHR9KTtcblx0XHR0aGlzLl9zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IHRydWU7XG5cdFx0aWYgKCF0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGlzT3BlbjogdHJ1ZSxcblx0XHRcdFx0aW5wdXRWYWx1ZTogJycsXG5cdFx0XHRcdGZvY3VzZWRPcHRpb246IHRoaXMuX2ZvY3VzZWRPcHRpb24gfHwgKG9wdGlvbnMubGVuZ3RoID8gb3B0aW9uc1tkaXIgPT09ICduZXh0JyA/IDAgOiBvcHRpb25zLmxlbmd0aCAtIDFdLm9wdGlvbiA6IG51bGwpXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFvcHRpb25zLmxlbmd0aCkgcmV0dXJuO1xuXHRcdHZhciBmb2N1c2VkSW5kZXggPSAtMTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0aGlzLl9mb2N1c2VkT3B0aW9uID09PSBvcHRpb25zW2ldLm9wdGlvbikge1xuXHRcdFx0XHRmb2N1c2VkSW5kZXggPSBpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGRpciA9PT0gJ25leHQnICYmIGZvY3VzZWRJbmRleCAhPT0gLTEpIHtcblx0XHRcdGZvY3VzZWRJbmRleCA9IChmb2N1c2VkSW5kZXggKyAxKSAlIG9wdGlvbnMubGVuZ3RoO1xuXHRcdH0gZWxzZSBpZiAoZGlyID09PSAncHJldmlvdXMnKSB7XG5cdFx0XHRpZiAoZm9jdXNlZEluZGV4ID4gMCkge1xuXHRcdFx0XHRmb2N1c2VkSW5kZXggPSBmb2N1c2VkSW5kZXggLSAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZGlyID09PSAnc3RhcnQnKSB7XG5cdFx0XHRmb2N1c2VkSW5kZXggPSAwO1xuXHRcdH0gZWxzZSBpZiAoZGlyID09PSAnZW5kJykge1xuXHRcdFx0Zm9jdXNlZEluZGV4ID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdH0gZWxzZSBpZiAoZGlyID09PSAncGFnZV91cCcpIHtcblx0XHRcdHZhciBwb3RlbnRpYWxJbmRleCA9IGZvY3VzZWRJbmRleCAtIHRoaXMucHJvcHMucGFnZVNpemU7XG5cdFx0XHRpZiAocG90ZW50aWFsSW5kZXggPCAwKSB7XG5cdFx0XHRcdGZvY3VzZWRJbmRleCA9IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb2N1c2VkSW5kZXggPSBwb3RlbnRpYWxJbmRleDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGRpciA9PT0gJ3BhZ2VfZG93bicpIHtcblx0XHRcdHZhciBwb3RlbnRpYWxJbmRleCA9IGZvY3VzZWRJbmRleCArIHRoaXMucHJvcHMucGFnZVNpemU7XG5cdFx0XHRpZiAocG90ZW50aWFsSW5kZXggPiBvcHRpb25zLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gcG90ZW50aWFsSW5kZXg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGZvY3VzZWRJbmRleCA9PT0gLTEpIHtcblx0XHRcdGZvY3VzZWRJbmRleCA9IDA7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRmb2N1c2VkSW5kZXg6IG9wdGlvbnNbZm9jdXNlZEluZGV4XS5pbmRleCxcblx0XHRcdGZvY3VzZWRPcHRpb246IG9wdGlvbnNbZm9jdXNlZEluZGV4XS5vcHRpb25cblx0XHR9KTtcblx0fSxcblxuXHRnZXRGb2N1c2VkT3B0aW9uOiBmdW5jdGlvbiBnZXRGb2N1c2VkT3B0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl9mb2N1c2VkT3B0aW9uO1xuXHR9LFxuXG5cdGdldElucHV0VmFsdWU6IGZ1bmN0aW9uIGdldElucHV0VmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcblx0fSxcblxuXHRzZWxlY3RGb2N1c2VkT3B0aW9uOiBmdW5jdGlvbiBzZWxlY3RGb2N1c2VkT3B0aW9uKCkge1xuXHRcdGlmICh0aGlzLl9mb2N1c2VkT3B0aW9uKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZWxlY3RWYWx1ZSh0aGlzLl9mb2N1c2VkT3B0aW9uKTtcblx0XHR9XG5cdH0sXG5cblx0cmVuZGVyTG9hZGluZzogZnVuY3Rpb24gcmVuZGVyTG9hZGluZygpIHtcblx0XHRpZiAoIXRoaXMucHJvcHMuaXNMb2FkaW5nKSByZXR1cm47XG5cdFx0cmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J3NwYW4nLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdTZWxlY3QtbG9hZGluZy16b25lJywgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0sXG5cdFx0XHRfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnU2VsZWN0LWxvYWRpbmcnIH0pXG5cdFx0KTtcblx0fSxcblxuXHRyZW5kZXJWYWx1ZTogZnVuY3Rpb24gcmVuZGVyVmFsdWUodmFsdWVBcnJheSwgaXNPcGVuKSB7XG5cdFx0dmFyIF90aGlzNCA9IHRoaXM7XG5cblx0XHR2YXIgcmVuZGVyTGFiZWwgPSB0aGlzLnByb3BzLnZhbHVlUmVuZGVyZXIgfHwgdGhpcy5nZXRPcHRpb25MYWJlbDtcblx0XHR2YXIgVmFsdWVDb21wb25lbnQgPSB0aGlzLnByb3BzLnZhbHVlQ29tcG9uZW50O1xuXHRcdGlmICghdmFsdWVBcnJheS5sZW5ndGgpIHtcblx0XHRcdHJldHVybiAhdGhpcy5zdGF0ZS5pbnB1dFZhbHVlID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC1wbGFjZWhvbGRlcicgfSxcblx0XHRcdFx0dGhpcy5wcm9wcy5wbGFjZWhvbGRlclxuXHRcdFx0KSA6IG51bGw7XG5cdFx0fVxuXHRcdHZhciBvbkNsaWNrID0gdGhpcy5wcm9wcy5vblZhbHVlQ2xpY2sgPyB0aGlzLmhhbmRsZVZhbHVlQ2xpY2sgOiBudWxsO1xuXHRcdGlmICh0aGlzLnByb3BzLm11bHRpKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWVBcnJheS5tYXAoZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG5cdFx0XHRcdHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRWYWx1ZUNvbXBvbmVudCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpZDogX3RoaXM0Ll9pbnN0YW5jZVByZWZpeCArICctdmFsdWUtJyArIGksXG5cdFx0XHRcdFx0XHRpbnN0YW5jZVByZWZpeDogX3RoaXM0Ll9pbnN0YW5jZVByZWZpeCxcblx0XHRcdFx0XHRcdGRpc2FibGVkOiBfdGhpczQucHJvcHMuZGlzYWJsZWQgfHwgdmFsdWUuY2xlYXJhYmxlVmFsdWUgPT09IGZhbHNlLFxuXHRcdFx0XHRcdFx0a2V5OiAndmFsdWUtJyArIGkgKyAnLScgKyB2YWx1ZVtfdGhpczQucHJvcHMudmFsdWVLZXldLFxuXHRcdFx0XHRcdFx0b25DbGljazogb25DbGljayxcblx0XHRcdFx0XHRcdG9uUmVtb3ZlOiBfdGhpczQucmVtb3ZlVmFsdWUsXG5cdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHJlbmRlckxhYmVsKHZhbHVlLCBpKSxcblx0XHRcdFx0XHRfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LWFyaWEtb25seScgfSxcblx0XHRcdFx0XHRcdCfCoCdcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmlucHV0VmFsdWUpIHtcblx0XHRcdGlmIChpc09wZW4pIG9uQ2xpY2sgPSBudWxsO1xuXHRcdFx0cmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRWYWx1ZUNvbXBvbmVudCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctdmFsdWUtaXRlbScsXG5cdFx0XHRcdFx0ZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRcdFx0aW5zdGFuY2VQcmVmaXg6IHRoaXMuX2luc3RhbmNlUHJlZml4LFxuXHRcdFx0XHRcdG9uQ2xpY2s6IG9uQ2xpY2ssXG5cdFx0XHRcdFx0dmFsdWU6IHZhbHVlQXJyYXlbMF1cblx0XHRcdFx0fSxcblx0XHRcdFx0cmVuZGVyTGFiZWwodmFsdWVBcnJheVswXSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9LFxuXG5cdHJlbmRlcklucHV0OiBmdW5jdGlvbiByZW5kZXJJbnB1dCh2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uSW5kZXgpIHtcblx0XHR2YXIgX2NsYXNzTmFtZXMsXG5cdFx0ICAgIF90aGlzNSA9IHRoaXM7XG5cblx0XHR2YXIgY2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSgnU2VsZWN0LWlucHV0JywgdGhpcy5wcm9wcy5pbnB1dFByb3BzLmNsYXNzTmFtZSk7XG5cdFx0dmFyIGlzT3BlbiA9ICEhdGhpcy5zdGF0ZS5pc09wZW47XG5cblx0XHR2YXIgYXJpYU93bnMgPSAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1saXN0JywgaXNPcGVuKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctYmFja3NwYWNlLXJlbW92ZS1tZXNzYWdlJywgdGhpcy5wcm9wcy5tdWx0aSAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCAmJiB0aGlzLnN0YXRlLmlzRm9jdXNlZCAmJiAhdGhpcy5zdGF0ZS5pbnB1dFZhbHVlKSwgX2NsYXNzTmFtZXMpKTtcblxuXHRcdC8vIFRPRE86IENoZWNrIGhvdyB0aGlzIHByb2plY3QgaW5jbHVkZXMgT2JqZWN0LmFzc2lnbigpXG5cdFx0dmFyIGlucHV0UHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5pbnB1dFByb3BzLCB7XG5cdFx0XHRyb2xlOiAnY29tYm9ib3gnLFxuXHRcdFx0J2FyaWEtZXhwYW5kZWQnOiAnJyArIGlzT3Blbixcblx0XHRcdCdhcmlhLW93bnMnOiBhcmlhT3ducyxcblx0XHRcdCdhcmlhLWhhc3BvcHVwJzogJycgKyBpc09wZW4sXG5cdFx0XHQnYXJpYS1hY3RpdmVkZXNjZW5kYW50JzogaXNPcGVuID8gdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLW9wdGlvbi0nICsgZm9jdXNlZE9wdGlvbkluZGV4IDogdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLXZhbHVlJyxcblx0XHRcdCdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsbGVkYnknXSxcblx0XHRcdCdhcmlhLWxhYmVsJzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddLFxuXHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUsXG5cdFx0XHR0YWJJbmRleDogdGhpcy5wcm9wcy50YWJJbmRleCxcblx0XHRcdG9uQmx1cjogdGhpcy5oYW5kbGVJbnB1dEJsdXIsXG5cdFx0XHRvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dENoYW5nZSxcblx0XHRcdG9uRm9jdXM6IHRoaXMuaGFuZGxlSW5wdXRGb2N1cyxcblx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzNS5pbnB1dCA9IF9yZWY7XG5cdFx0XHR9LFxuXHRcdFx0cmVxdWlyZWQ6IHRoaXMuc3RhdGUucmVxdWlyZWQsXG5cdFx0XHR2YWx1ZTogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlXG5cdFx0fSk7XG5cblx0XHRpZiAodGhpcy5wcm9wcy5pbnB1dFJlbmRlcmVyKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5pbnB1dFJlbmRlcmVyKGlucHV0UHJvcHMpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8ICF0aGlzLnByb3BzLnNlYXJjaGFibGUpIHtcblx0XHRcdHZhciBfcHJvcHMkaW5wdXRQcm9wcyA9IHRoaXMucHJvcHMuaW5wdXRQcm9wcztcblx0XHRcdHZhciBpbnB1dENsYXNzTmFtZSA9IF9wcm9wcyRpbnB1dFByb3BzLmlucHV0Q2xhc3NOYW1lO1xuXG5cdFx0XHR2YXIgZGl2UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzJGlucHV0UHJvcHMsIFsnaW5wdXRDbGFzc05hbWUnXSk7XG5cblx0XHRcdHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnZGl2JywgX2V4dGVuZHMoe30sIGRpdlByb3BzLCB7XG5cdFx0XHRcdHJvbGU6ICdjb21ib2JveCcsXG5cdFx0XHRcdCdhcmlhLWV4cGFuZGVkJzogaXNPcGVuLFxuXHRcdFx0XHQnYXJpYS1vd25zJzogaXNPcGVuID8gdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLWxpc3QnIDogdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLXZhbHVlJyxcblx0XHRcdFx0J2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IGlzT3BlbiA/IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1vcHRpb24tJyArIGZvY3VzZWRPcHRpb25JbmRleCA6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy12YWx1ZScsXG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuXHRcdFx0XHR0YWJJbmRleDogdGhpcy5wcm9wcy50YWJJbmRleCB8fCAwLFxuXHRcdFx0XHRvbkJsdXI6IHRoaXMuaGFuZGxlSW5wdXRCbHVyLFxuXHRcdFx0XHRvbkZvY3VzOiB0aGlzLmhhbmRsZUlucHV0Rm9jdXMsXG5cdFx0XHRcdHJlZjogZnVuY3Rpb24gKHJlZikge1xuXHRcdFx0XHRcdHJldHVybiBfdGhpczUuaW5wdXQgPSByZWY7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdhcmlhLXJlYWRvbmx5JzogJycgKyAhIXRoaXMucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRcdHN0eWxlOiB7IGJvcmRlcjogMCwgd2lkdGg6IDEsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH0gfSkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnByb3BzLmF1dG9zaXplKSB7XG5cdFx0XHRyZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX3JlYWN0SW5wdXRBdXRvc2l6ZTJbJ2RlZmF1bHQnXSwgX2V4dGVuZHMoe30sIGlucHV0UHJvcHMsIHsgbWluV2lkdGg6ICc1JyB9KSk7XG5cdFx0fVxuXHRcdHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0X3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgaW5wdXRQcm9wcylcblx0XHQpO1xuXHR9LFxuXG5cdHJlbmRlckNsZWFyOiBmdW5jdGlvbiByZW5kZXJDbGVhcigpIHtcblx0XHRpZiAoIXRoaXMucHJvcHMuY2xlYXJhYmxlIHx8ICF0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUgPT09IDAgfHwgdGhpcy5wcm9wcy5tdWx0aSAmJiAhdGhpcy5wcm9wcy52YWx1ZS5sZW5ndGggfHwgdGhpcy5wcm9wcy5kaXNhYmxlZCB8fCB0aGlzLnByb3BzLmlzTG9hZGluZykgcmV0dXJuO1xuXHRcdHZhciBjbGVhciA9IHRoaXMucHJvcHMuY2xlYXJSZW5kZXJlcigpO1xuXG5cdFx0cmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J3NwYW4nLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdTZWxlY3QtY2xlYXItem9uZScsIHRpdGxlOiB0aGlzLnByb3BzLm11bHRpID8gdGhpcy5wcm9wcy5jbGVhckFsbFRleHQgOiB0aGlzLnByb3BzLmNsZWFyVmFsdWVUZXh0LFxuXHRcdFx0XHQnYXJpYS1sYWJlbCc6IHRoaXMucHJvcHMubXVsdGkgPyB0aGlzLnByb3BzLmNsZWFyQWxsVGV4dCA6IHRoaXMucHJvcHMuY2xlYXJWYWx1ZVRleHQsXG5cdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLmNsZWFyVmFsdWUsXG5cdFx0XHRcdG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuXHRcdFx0XHRvblRvdWNoTW92ZTogdGhpcy5oYW5kbGVUb3VjaE1vdmUsXG5cdFx0XHRcdG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRDbGVhclZhbHVlXG5cdFx0XHR9LFxuXHRcdFx0Y2xlYXJcblx0XHQpO1xuXHR9LFxuXG5cdHJlbmRlckFycm93OiBmdW5jdGlvbiByZW5kZXJBcnJvdygpIHtcblx0XHR2YXIgb25Nb3VzZURvd24gPSB0aGlzLmhhbmRsZU1vdXNlRG93bk9uQXJyb3c7XG5cdFx0dmFyIGlzT3BlbiA9IHRoaXMuc3RhdGUuaXNPcGVuO1xuXHRcdHZhciBhcnJvdyA9IHRoaXMucHJvcHMuYXJyb3dSZW5kZXJlcih7IG9uTW91c2VEb3duOiBvbk1vdXNlRG93biwgaXNPcGVuOiBpc09wZW4gfSk7XG5cblx0XHRyZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnc3BhbicsXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzTmFtZTogJ1NlbGVjdC1hcnJvdy16b25lJyxcblx0XHRcdFx0b25Nb3VzZURvd246IG9uTW91c2VEb3duXG5cdFx0XHR9LFxuXHRcdFx0YXJyb3dcblx0XHQpO1xuXHR9LFxuXG5cdGZpbHRlck9wdGlvbnM6IGZ1bmN0aW9uIGZpbHRlck9wdGlvbnMoZXhjbHVkZU9wdGlvbnMpIHtcblx0XHR2YXIgZmlsdGVyVmFsdWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG5cdFx0dmFyIG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgfHwgW107XG5cdFx0aWYgKHRoaXMucHJvcHMuZmlsdGVyT3B0aW9ucykge1xuXHRcdFx0Ly8gTWFpbnRhaW4gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBib29sZWFuIGF0dHJpYnV0ZVxuXHRcdFx0dmFyIGZpbHRlck9wdGlvbnMgPSB0eXBlb2YgdGhpcy5wcm9wcy5maWx0ZXJPcHRpb25zID09PSAnZnVuY3Rpb24nID8gdGhpcy5wcm9wcy5maWx0ZXJPcHRpb25zIDogX3V0aWxzRGVmYXVsdEZpbHRlck9wdGlvbnMyWydkZWZhdWx0J107XG5cblx0XHRcdHJldHVybiBmaWx0ZXJPcHRpb25zKG9wdGlvbnMsIGZpbHRlclZhbHVlLCBleGNsdWRlT3B0aW9ucywge1xuXHRcdFx0XHRmaWx0ZXJPcHRpb246IHRoaXMucHJvcHMuZmlsdGVyT3B0aW9uLFxuXHRcdFx0XHRpZ25vcmVBY2NlbnRzOiB0aGlzLnByb3BzLmlnbm9yZUFjY2VudHMsXG5cdFx0XHRcdGlnbm9yZUNhc2U6IHRoaXMucHJvcHMuaWdub3JlQ2FzZSxcblx0XHRcdFx0bGFiZWxLZXk6IHRoaXMucHJvcHMubGFiZWxLZXksXG5cdFx0XHRcdG1hdGNoUG9zOiB0aGlzLnByb3BzLm1hdGNoUG9zLFxuXHRcdFx0XHRtYXRjaFByb3A6IHRoaXMucHJvcHMubWF0Y2hQcm9wLFxuXHRcdFx0XHR2YWx1ZUtleTogdGhpcy5wcm9wcy52YWx1ZUtleVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvcHRpb25zO1xuXHRcdH1cblx0fSxcblxuXHRvbk9wdGlvblJlZjogZnVuY3Rpb24gb25PcHRpb25SZWYocmVmLCBpc0ZvY3VzZWQpIHtcblx0XHRpZiAoaXNGb2N1c2VkKSB7XG5cdFx0XHR0aGlzLmZvY3VzZWQgPSByZWY7XG5cdFx0fVxuXHR9LFxuXG5cdHJlbmRlck1lbnU6IGZ1bmN0aW9uIHJlbmRlck1lbnUob3B0aW9ucywgdmFsdWVBcnJheSwgZm9jdXNlZE9wdGlvbikge1xuXHRcdGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5tZW51UmVuZGVyZXIoe1xuXHRcdFx0XHRmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uLFxuXHRcdFx0XHRmb2N1c09wdGlvbjogdGhpcy5mb2N1c09wdGlvbixcblx0XHRcdFx0aW5zdGFuY2VQcmVmaXg6IHRoaXMuX2luc3RhbmNlUHJlZml4LFxuXHRcdFx0XHRsYWJlbEtleTogdGhpcy5wcm9wcy5sYWJlbEtleSxcblx0XHRcdFx0b25Gb2N1czogdGhpcy5mb2N1c09wdGlvbixcblx0XHRcdFx0b25TZWxlY3Q6IHRoaXMuc2VsZWN0VmFsdWUsXG5cdFx0XHRcdG9wdGlvbkNsYXNzTmFtZTogdGhpcy5wcm9wcy5vcHRpb25DbGFzc05hbWUsXG5cdFx0XHRcdG9wdGlvbkNvbXBvbmVudDogdGhpcy5wcm9wcy5vcHRpb25Db21wb25lbnQsXG5cdFx0XHRcdG9wdGlvblJlbmRlcmVyOiB0aGlzLnByb3BzLm9wdGlvblJlbmRlcmVyIHx8IHRoaXMuZ2V0T3B0aW9uTGFiZWwsXG5cdFx0XHRcdG9wdGlvbnM6IG9wdGlvbnMsXG5cdFx0XHRcdHNlbGVjdFZhbHVlOiB0aGlzLnNlbGVjdFZhbHVlLFxuXHRcdFx0XHR2YWx1ZUFycmF5OiB2YWx1ZUFycmF5LFxuXHRcdFx0XHR2YWx1ZUtleTogdGhpcy5wcm9wcy52YWx1ZUtleSxcblx0XHRcdFx0b25PcHRpb25SZWY6IHRoaXMub25PcHRpb25SZWZcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5ub1Jlc3VsdHNUZXh0KSB7XG5cdFx0XHRyZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC1ub3Jlc3VsdHMnIH0sXG5cdFx0XHRcdHRoaXMucHJvcHMubm9SZXN1bHRzVGV4dFxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9LFxuXG5cdHJlbmRlckhpZGRlbkZpZWxkOiBmdW5jdGlvbiByZW5kZXJIaWRkZW5GaWVsZCh2YWx1ZUFycmF5KSB7XG5cdFx0dmFyIF90aGlzNiA9IHRoaXM7XG5cblx0XHRpZiAoIXRoaXMucHJvcHMubmFtZSkgcmV0dXJuO1xuXHRcdGlmICh0aGlzLnByb3BzLmpvaW5WYWx1ZXMpIHtcblx0XHRcdHZhciB2YWx1ZSA9IHZhbHVlQXJyYXkubWFwKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdHJldHVybiBzdHJpbmdpZnlWYWx1ZShpW190aGlzNi5wcm9wcy52YWx1ZUtleV0pO1xuXHRcdFx0fSkuam9pbih0aGlzLnByb3BzLmRlbGltaXRlcik7XG5cdFx0XHRyZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuXHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0cmVmOiBmdW5jdGlvbiAocmVmKSB7XG5cdFx0XHRcdFx0cmV0dXJuIF90aGlzNi52YWx1ZSA9IHJlZjtcblx0XHRcdFx0fSxcblx0XHRcdFx0bmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuXHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkIH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWVBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRyZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyBrZXk6ICdoaWRkZW4uJyArIGluZGV4LFxuXHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0cmVmOiAndmFsdWUnICsgaW5kZXgsXG5cdFx0XHRcdG5hbWU6IF90aGlzNi5wcm9wcy5uYW1lLFxuXHRcdFx0XHR2YWx1ZTogc3RyaW5naWZ5VmFsdWUoaXRlbVtfdGhpczYucHJvcHMudmFsdWVLZXldKSxcblx0XHRcdFx0ZGlzYWJsZWQ6IF90aGlzNi5wcm9wcy5kaXNhYmxlZCB9KTtcblx0XHR9KTtcblx0fSxcblxuXHRnZXRGb2N1c2FibGVPcHRpb25JbmRleDogZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlT3B0aW9uSW5kZXgoc2VsZWN0ZWRPcHRpb24pIHtcblx0XHR2YXIgb3B0aW9ucyA9IHRoaXMuX3Zpc2libGVPcHRpb25zO1xuXHRcdGlmICghb3B0aW9ucy5sZW5ndGgpIHJldHVybiBudWxsO1xuXG5cdFx0dmFyIGZvY3VzZWRPcHRpb24gPSB0aGlzLnN0YXRlLmZvY3VzZWRPcHRpb24gfHwgc2VsZWN0ZWRPcHRpb247XG5cdFx0aWYgKGZvY3VzZWRPcHRpb24gJiYgIWZvY3VzZWRPcHRpb24uZGlzYWJsZWQpIHtcblx0XHRcdHZhciBmb2N1c2VkT3B0aW9uSW5kZXggPSBvcHRpb25zLmluZGV4T2YoZm9jdXNlZE9wdGlvbik7XG5cdFx0XHRpZiAoZm9jdXNlZE9wdGlvbkluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRyZXR1cm4gZm9jdXNlZE9wdGlvbkluZGV4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKCFvcHRpb25zW2ldLmRpc2FibGVkKSByZXR1cm4gaTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cblx0cmVuZGVyT3V0ZXI6IGZ1bmN0aW9uIHJlbmRlck91dGVyKG9wdGlvbnMsIHZhbHVlQXJyYXksIGZvY3VzZWRPcHRpb24pIHtcblx0XHR2YXIgX3RoaXM3ID0gdGhpcztcblxuXHRcdHZhciBtZW51ID0gdGhpcy5yZW5kZXJNZW51KG9wdGlvbnMsIHZhbHVlQXJyYXksIGZvY3VzZWRPcHRpb24pO1xuXHRcdGlmICghbWVudSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IHJlZjogZnVuY3Rpb24gKHJlZikge1xuXHRcdFx0XHRcdHJldHVybiBfdGhpczcubWVudUNvbnRhaW5lciA9IHJlZjtcblx0XHRcdFx0fSwgY2xhc3NOYW1lOiAnU2VsZWN0LW1lbnUtb3V0ZXInLCBzdHlsZTogdGhpcy5wcm9wcy5tZW51Q29udGFpbmVyU3R5bGUgfSxcblx0XHRcdF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyByZWY6IGZ1bmN0aW9uIChyZWYpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfdGhpczcubWVudSA9IHJlZjtcblx0XHRcdFx0XHR9LCByb2xlOiAnbGlzdGJveCcsIGNsYXNzTmFtZTogJ1NlbGVjdC1tZW51JywgaWQ6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1saXN0Jyxcblx0XHRcdFx0XHRzdHlsZTogdGhpcy5wcm9wcy5tZW51U3R5bGUsXG5cdFx0XHRcdFx0b25TY3JvbGw6IHRoaXMuaGFuZGxlTWVudVNjcm9sbCxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd25Pbk1lbnUgfSxcblx0XHRcdFx0bWVudVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0dmFyIF90aGlzOCA9IHRoaXM7XG5cblx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHR2YXIgb3B0aW9ucyA9IHRoaXMuX3Zpc2libGVPcHRpb25zID0gdGhpcy5maWx0ZXJPcHRpb25zKHRoaXMucHJvcHMubXVsdGkgPyB0aGlzLmdldFZhbHVlQXJyYXkodGhpcy5wcm9wcy52YWx1ZSkgOiBudWxsKTtcblx0XHR2YXIgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW47XG5cdFx0aWYgKHRoaXMucHJvcHMubXVsdGkgJiYgIW9wdGlvbnMubGVuZ3RoICYmIHZhbHVlQXJyYXkubGVuZ3RoICYmICF0aGlzLnN0YXRlLmlucHV0VmFsdWUpIGlzT3BlbiA9IGZhbHNlO1xuXHRcdHZhciBmb2N1c2VkT3B0aW9uSW5kZXggPSB0aGlzLmdldEZvY3VzYWJsZU9wdGlvbkluZGV4KHZhbHVlQXJyYXlbMF0pO1xuXG5cdFx0dmFyIGZvY3VzZWRPcHRpb24gPSBudWxsO1xuXHRcdGlmIChmb2N1c2VkT3B0aW9uSW5kZXggIT09IG51bGwpIHtcblx0XHRcdGZvY3VzZWRPcHRpb24gPSB0aGlzLl9mb2N1c2VkT3B0aW9uID0gb3B0aW9uc1tmb2N1c2VkT3B0aW9uSW5kZXhdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb2N1c2VkT3B0aW9uID0gdGhpcy5fZm9jdXNlZE9wdGlvbiA9IG51bGw7XG5cdFx0fVxuXHRcdHZhciBjbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKCdTZWxlY3QnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwge1xuXHRcdFx0J1NlbGVjdC0tbXVsdGknOiB0aGlzLnByb3BzLm11bHRpLFxuXHRcdFx0J1NlbGVjdC0tc2luZ2xlJzogIXRoaXMucHJvcHMubXVsdGksXG5cdFx0XHQnaXMtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0J2lzLWZvY3VzZWQnOiB0aGlzLnN0YXRlLmlzRm9jdXNlZCxcblx0XHRcdCdpcy1sb2FkaW5nJzogdGhpcy5wcm9wcy5pc0xvYWRpbmcsXG5cdFx0XHQnaXMtb3Blbic6IGlzT3Blbixcblx0XHRcdCdpcy1wc2V1ZG8tZm9jdXNlZCc6IHRoaXMuc3RhdGUuaXNQc2V1ZG9Gb2N1c2VkLFxuXHRcdFx0J2lzLXNlYXJjaGFibGUnOiB0aGlzLnByb3BzLnNlYXJjaGFibGUsXG5cdFx0XHQnaGFzLXZhbHVlJzogdmFsdWVBcnJheS5sZW5ndGhcblx0XHR9KTtcblxuXHRcdHZhciByZW1vdmVNZXNzYWdlID0gbnVsbDtcblx0XHRpZiAodGhpcy5wcm9wcy5tdWx0aSAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCAmJiB2YWx1ZUFycmF5Lmxlbmd0aCAmJiAhdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICYmIHRoaXMuc3RhdGUuaXNGb2N1c2VkICYmIHRoaXMucHJvcHMuYmFja3NwYWNlUmVtb3Zlcykge1xuXHRcdFx0cmVtb3ZlTWVzc2FnZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdHsgaWQ6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1iYWNrc3BhY2UtcmVtb3ZlLW1lc3NhZ2UnLCBjbGFzc05hbWU6ICdTZWxlY3QtYXJpYS1vbmx5JywgJ2FyaWEtbGl2ZSc6ICdhc3NlcnRpdmUnIH0sXG5cdFx0XHRcdHRoaXMucHJvcHMuYmFja3NwYWNlVG9SZW1vdmVNZXNzYWdlLnJlcGxhY2UoJ3tsYWJlbH0nLCB2YWx1ZUFycmF5W3ZhbHVlQXJyYXkubGVuZ3RoIC0gMV1bdGhpcy5wcm9wcy5sYWJlbEtleV0pXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyByZWY6IGZ1bmN0aW9uIChyZWYpIHtcblx0XHRcdFx0XHRyZXR1cm4gX3RoaXM4LndyYXBwZXIgPSByZWY7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuXHRcdFx0XHRzdHlsZTogdGhpcy5wcm9wcy53cmFwcGVyU3R5bGUgfSxcblx0XHRcdHRoaXMucmVuZGVySGlkZGVuRmllbGQodmFsdWVBcnJheSksXG5cdFx0XHRfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgcmVmOiBmdW5jdGlvbiAocmVmKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXM4LmNvbnRyb2wgPSByZWY7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjbGFzc05hbWU6ICdTZWxlY3QtY29udHJvbCcsXG5cdFx0XHRcdFx0c3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsXG5cdFx0XHRcdFx0b25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG5cdFx0XHRcdFx0b25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuXHRcdFx0XHRcdG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmQsXG5cdFx0XHRcdFx0b25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG5cdFx0XHRcdFx0b25Ub3VjaE1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC1tdWx0aS12YWx1ZS13cmFwcGVyJywgaWQ6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy12YWx1ZScgfSxcblx0XHRcdFx0XHR0aGlzLnJlbmRlclZhbHVlKHZhbHVlQXJyYXksIGlzT3BlbiksXG5cdFx0XHRcdFx0dGhpcy5yZW5kZXJJbnB1dCh2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uSW5kZXgpXG5cdFx0XHRcdCksXG5cdFx0XHRcdHJlbW92ZU1lc3NhZ2UsXG5cdFx0XHRcdHRoaXMucmVuZGVyTG9hZGluZygpLFxuXHRcdFx0XHR0aGlzLnJlbmRlckNsZWFyKCksXG5cdFx0XHRcdHRoaXMucmVuZGVyQXJyb3coKVxuXHRcdFx0KSxcblx0XHRcdGlzT3BlbiA/IHRoaXMucmVuZGVyT3V0ZXIob3B0aW9ucywgIXRoaXMucHJvcHMubXVsdGkgPyB2YWx1ZUFycmF5IDogbnVsbCwgZm9jdXNlZE9wdGlvbikgOiBudWxsXG5cdFx0KTtcblx0fVxuXG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU2VsZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXNlbGVjdC9saWIvU2VsZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDEwIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy91dGlsL2luRE9NLmpzXG4vLyBtb2R1bGUgaWQgPSA0Njlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDEwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdyZWFjdC9saWIvc2hhbGxvd0NvbXBhcmUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtYWRkb25zLXNoYWxsb3ctY29tcGFyZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJy4vaW5ET00nKTtcblxudmFyIHNpemU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJlY2FsYykge1xuICBpZiAoIXNpemUgfHwgcmVjYWxjKSB7XG4gICAgaWYgKGNhblVzZURPTSkge1xuICAgICAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICBzY3JvbGxEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgc2Nyb2xsRGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4JztcbiAgICAgIHNjcm9sbERpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgICAgIHNjcm9sbERpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gICAgICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICAgICAgc2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2l6ZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3V0aWwvc2Nyb2xsYmFyU2l6ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMCIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3N0cmlwRGlhY3JpdGljcyA9IHJlcXVpcmUoJy4vc3RyaXBEaWFjcml0aWNzJyk7XG5cbnZhciBfc3RyaXBEaWFjcml0aWNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmlwRGlhY3JpdGljcyk7XG5cbmZ1bmN0aW9uIGZpbHRlck9wdGlvbnMob3B0aW9ucywgZmlsdGVyVmFsdWUsIGV4Y2x1ZGVPcHRpb25zLCBwcm9wcykge1xuXHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdGlmIChwcm9wcy5pZ25vcmVBY2NlbnRzKSB7XG5cdFx0ZmlsdGVyVmFsdWUgPSAoMCwgX3N0cmlwRGlhY3JpdGljczJbJ2RlZmF1bHQnXSkoZmlsdGVyVmFsdWUpO1xuXHR9XG5cblx0aWYgKHByb3BzLmlnbm9yZUNhc2UpIHtcblx0XHRmaWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cdH1cblxuXHRpZiAoZXhjbHVkZU9wdGlvbnMpIGV4Y2x1ZGVPcHRpb25zID0gZXhjbHVkZU9wdGlvbnMubWFwKGZ1bmN0aW9uIChpKSB7XG5cdFx0cmV0dXJuIGlbcHJvcHMudmFsdWVLZXldO1xuXHR9KTtcblxuXHRyZXR1cm4gb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xuXHRcdGlmIChleGNsdWRlT3B0aW9ucyAmJiBleGNsdWRlT3B0aW9ucy5pbmRleE9mKG9wdGlvbltwcm9wcy52YWx1ZUtleV0pID4gLTEpIHJldHVybiBmYWxzZTtcblx0XHRpZiAocHJvcHMuZmlsdGVyT3B0aW9uKSByZXR1cm4gcHJvcHMuZmlsdGVyT3B0aW9uLmNhbGwoX3RoaXMsIG9wdGlvbiwgZmlsdGVyVmFsdWUpO1xuXHRcdGlmICghZmlsdGVyVmFsdWUpIHJldHVybiB0cnVlO1xuXHRcdHZhciB2YWx1ZVRlc3QgPSBTdHJpbmcob3B0aW9uW3Byb3BzLnZhbHVlS2V5XSk7XG5cdFx0dmFyIGxhYmVsVGVzdCA9IFN0cmluZyhvcHRpb25bcHJvcHMubGFiZWxLZXldKTtcblx0XHRpZiAocHJvcHMuaWdub3JlQWNjZW50cykge1xuXHRcdFx0aWYgKHByb3BzLm1hdGNoUHJvcCAhPT0gJ2xhYmVsJykgdmFsdWVUZXN0ID0gKDAsIF9zdHJpcERpYWNyaXRpY3MyWydkZWZhdWx0J10pKHZhbHVlVGVzdCk7XG5cdFx0XHRpZiAocHJvcHMubWF0Y2hQcm9wICE9PSAndmFsdWUnKSBsYWJlbFRlc3QgPSAoMCwgX3N0cmlwRGlhY3JpdGljczJbJ2RlZmF1bHQnXSkobGFiZWxUZXN0KTtcblx0XHR9XG5cdFx0aWYgKHByb3BzLmlnbm9yZUNhc2UpIHtcblx0XHRcdGlmIChwcm9wcy5tYXRjaFByb3AgIT09ICdsYWJlbCcpIHZhbHVlVGVzdCA9IHZhbHVlVGVzdC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKHByb3BzLm1hdGNoUHJvcCAhPT0gJ3ZhbHVlJykgbGFiZWxUZXN0ID0gbGFiZWxUZXN0LnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBwcm9wcy5tYXRjaFBvcyA9PT0gJ3N0YXJ0JyA/IHByb3BzLm1hdGNoUHJvcCAhPT0gJ2xhYmVsJyAmJiB2YWx1ZVRlc3Quc3Vic3RyKDAsIGZpbHRlclZhbHVlLmxlbmd0aCkgPT09IGZpbHRlclZhbHVlIHx8IHByb3BzLm1hdGNoUHJvcCAhPT0gJ3ZhbHVlJyAmJiBsYWJlbFRlc3Quc3Vic3RyKDAsIGZpbHRlclZhbHVlLmxlbmd0aCkgPT09IGZpbHRlclZhbHVlIDogcHJvcHMubWF0Y2hQcm9wICE9PSAnbGFiZWwnICYmIHZhbHVlVGVzdC5pbmRleE9mKGZpbHRlclZhbHVlKSA+PSAwIHx8IHByb3BzLm1hdGNoUHJvcCAhPT0gJ3ZhbHVlJyAmJiBsYWJlbFRlc3QuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPj0gMDtcblx0fSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmlsdGVyT3B0aW9ucztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtc2VsZWN0L2xpYi91dGlscy9kZWZhdWx0RmlsdGVyT3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gNjIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMCIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBtZW51UmVuZGVyZXIoX3JlZikge1xuXHR2YXIgZm9jdXNlZE9wdGlvbiA9IF9yZWYuZm9jdXNlZE9wdGlvbjtcblx0dmFyIGluc3RhbmNlUHJlZml4ID0gX3JlZi5pbnN0YW5jZVByZWZpeDtcblx0dmFyIGxhYmVsS2V5ID0gX3JlZi5sYWJlbEtleTtcblx0dmFyIG9uRm9jdXMgPSBfcmVmLm9uRm9jdXM7XG5cdHZhciBvblNlbGVjdCA9IF9yZWYub25TZWxlY3Q7XG5cdHZhciBvcHRpb25DbGFzc05hbWUgPSBfcmVmLm9wdGlvbkNsYXNzTmFtZTtcblx0dmFyIG9wdGlvbkNvbXBvbmVudCA9IF9yZWYub3B0aW9uQ29tcG9uZW50O1xuXHR2YXIgb3B0aW9uUmVuZGVyZXIgPSBfcmVmLm9wdGlvblJlbmRlcmVyO1xuXHR2YXIgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcblx0dmFyIHZhbHVlQXJyYXkgPSBfcmVmLnZhbHVlQXJyYXk7XG5cdHZhciB2YWx1ZUtleSA9IF9yZWYudmFsdWVLZXk7XG5cdHZhciBvbk9wdGlvblJlZiA9IF9yZWYub25PcHRpb25SZWY7XG5cblx0dmFyIE9wdGlvbiA9IG9wdGlvbkNvbXBvbmVudDtcblxuXHRyZXR1cm4gb3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbiwgaSkge1xuXHRcdHZhciBpc1NlbGVjdGVkID0gdmFsdWVBcnJheSAmJiB2YWx1ZUFycmF5LmluZGV4T2Yob3B0aW9uKSA+IC0xO1xuXHRcdHZhciBpc0ZvY3VzZWQgPSBvcHRpb24gPT09IGZvY3VzZWRPcHRpb247XG5cdFx0dmFyIG9wdGlvbkNsYXNzID0gKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShvcHRpb25DbGFzc05hbWUsIHtcblx0XHRcdCdTZWxlY3Qtb3B0aW9uJzogdHJ1ZSxcblx0XHRcdCdpcy1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXG5cdFx0XHQnaXMtZm9jdXNlZCc6IGlzRm9jdXNlZCxcblx0XHRcdCdpcy1kaXNhYmxlZCc6IG9wdGlvbi5kaXNhYmxlZFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHRcdFx0T3B0aW9uLFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzc05hbWU6IG9wdGlvbkNsYXNzLFxuXHRcdFx0XHRpbnN0YW5jZVByZWZpeDogaW5zdGFuY2VQcmVmaXgsXG5cdFx0XHRcdGlzRGlzYWJsZWQ6IG9wdGlvbi5kaXNhYmxlZCxcblx0XHRcdFx0aXNGb2N1c2VkOiBpc0ZvY3VzZWQsXG5cdFx0XHRcdGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG5cdFx0XHRcdGtleTogJ29wdGlvbi0nICsgaSArICctJyArIG9wdGlvblt2YWx1ZUtleV0sXG5cdFx0XHRcdG9uRm9jdXM6IG9uRm9jdXMsXG5cdFx0XHRcdG9uU2VsZWN0OiBvblNlbGVjdCxcblx0XHRcdFx0b3B0aW9uOiBvcHRpb24sXG5cdFx0XHRcdG9wdGlvbkluZGV4OiBpLFxuXHRcdFx0XHRyZWY6IGZ1bmN0aW9uIChyZWYpIHtcblx0XHRcdFx0XHRvbk9wdGlvblJlZihyZWYsIGlzRm9jdXNlZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRvcHRpb25SZW5kZXJlcihvcHRpb24sIGkpXG5cdFx0KTtcblx0fSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVudVJlbmRlcmVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zZWxlY3QvbGliL3V0aWxzL2RlZmF1bHRNZW51UmVuZGVyZXIuanNcbi8vIG1vZHVsZSBpZCA9IDYyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBtYXAgPSBbeyAnYmFzZSc6ICdBJywgJ2xldHRlcnMnOiAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2cgfSwgeyAnYmFzZSc6ICdBQScsICdsZXR0ZXJzJzogL1tcXHVBNzMyXS9nIH0sIHsgJ2Jhc2UnOiAnQUUnLCAnbGV0dGVycyc6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nIH0sIHsgJ2Jhc2UnOiAnQU8nLCAnbGV0dGVycyc6IC9bXFx1QTczNF0vZyB9LCB7ICdiYXNlJzogJ0FVJywgJ2xldHRlcnMnOiAvW1xcdUE3MzZdL2cgfSwgeyAnYmFzZSc6ICdBVicsICdsZXR0ZXJzJzogL1tcXHVBNzM4XFx1QTczQV0vZyB9LCB7ICdiYXNlJzogJ0FZJywgJ2xldHRlcnMnOiAvW1xcdUE3M0NdL2cgfSwgeyAnYmFzZSc6ICdCJywgJ2xldHRlcnMnOiAvW1xcdTAwNDJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MV0vZyB9LCB7ICdiYXNlJzogJ0MnLCAnbGV0dGVycyc6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nIH0sIHsgJ2Jhc2UnOiAnRCcsICdsZXR0ZXJzJzogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZyB9LCB7ICdiYXNlJzogJ0RaJywgJ2xldHRlcnMnOiAvW1xcdTAxRjFcXHUwMUM0XS9nIH0sIHsgJ2Jhc2UnOiAnRHonLCAnbGV0dGVycyc6IC9bXFx1MDFGMlxcdTAxQzVdL2cgfSwgeyAnYmFzZSc6ICdFJywgJ2xldHRlcnMnOiAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZyB9LCB7ICdiYXNlJzogJ0YnLCAnbGV0dGVycyc6IC9bXFx1MDA0NlxcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXS9nIH0sIHsgJ2Jhc2UnOiAnRycsICdsZXR0ZXJzJzogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2cgfSwgeyAnYmFzZSc6ICdIJywgJ2xldHRlcnMnOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nIH0sIHsgJ2Jhc2UnOiAnSScsICdsZXR0ZXJzJzogL1tcXHUwMDQ5XFx1MjRCRVxcdUZGMjlcXHUwMENDXFx1MDBDRFxcdTAwQ0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx1MDBDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N10vZyB9LCB7ICdiYXNlJzogJ0onLCAnbGV0dGVycyc6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2cgfSwgeyAnYmFzZSc6ICdLJywgJ2xldHRlcnMnOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nIH0sIHsgJ2Jhc2UnOiAnTCcsICdsZXR0ZXJzJzogL1tcXHUwMDRDXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBdL2cgfSwgeyAnYmFzZSc6ICdMSicsICdsZXR0ZXJzJzogL1tcXHUwMUM3XS9nIH0sIHsgJ2Jhc2UnOiAnTGonLCAnbGV0dGVycyc6IC9bXFx1MDFDOF0vZyB9LCB7ICdiYXNlJzogJ00nLCAnbGV0dGVycyc6IC9bXFx1MDA0RFxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNdL2cgfSwgeyAnYmFzZSc6ICdOJywgJ2xldHRlcnMnOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2cgfSwgeyAnYmFzZSc6ICdOSicsICdsZXR0ZXJzJzogL1tcXHUwMUNBXS9nIH0sIHsgJ2Jhc2UnOiAnTmonLCAnbGV0dGVycyc6IC9bXFx1MDFDQl0vZyB9LCB7ICdiYXNlJzogJ08nLCAnbGV0dGVycyc6IC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyB9LCB7ICdiYXNlJzogJ09JJywgJ2xldHRlcnMnOiAvW1xcdTAxQTJdL2cgfSwgeyAnYmFzZSc6ICdPTycsICdsZXR0ZXJzJzogL1tcXHVBNzRFXS9nIH0sIHsgJ2Jhc2UnOiAnT1UnLCAnbGV0dGVycyc6IC9bXFx1MDIyMl0vZyB9LCB7ICdiYXNlJzogJ1AnLCAnbGV0dGVycyc6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZyB9LCB7ICdiYXNlJzogJ1EnLCAnbGV0dGVycyc6IC9bXFx1MDA1MVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXS9nIH0sIHsgJ2Jhc2UnOiAnUicsICdsZXR0ZXJzJzogL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyB9LCB7ICdiYXNlJzogJ1MnLCAnbGV0dGVycyc6IC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2cgfSwgeyAnYmFzZSc6ICdUJywgJ2xldHRlcnMnOiAvW1xcdTAwNTRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4Nl0vZyB9LCB7ICdiYXNlJzogJ1RaJywgJ2xldHRlcnMnOiAvW1xcdUE3MjhdL2cgfSwgeyAnYmFzZSc6ICdVJywgJ2xldHRlcnMnOiAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2cgfSwgeyAnYmFzZSc6ICdWJywgJ2xldHRlcnMnOiAvW1xcdTAwNTZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XS9nIH0sIHsgJ2Jhc2UnOiAnVlknLCAnbGV0dGVycyc6IC9bXFx1QTc2MF0vZyB9LCB7ICdiYXNlJzogJ1cnLCAnbGV0dGVycyc6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZyB9LCB7ICdiYXNlJzogJ1gnLCAnbGV0dGVycyc6IC9bXFx1MDA1OFxcdTI0Q0RcXHVGRjM4XFx1MUU4QVxcdTFFOENdL2cgfSwgeyAnYmFzZSc6ICdZJywgJ2xldHRlcnMnOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyB9LCB7ICdiYXNlJzogJ1onLCAnbGV0dGVycyc6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2cgfSwgeyAnYmFzZSc6ICdhJywgJ2xldHRlcnMnOiAvW1xcdTAwNjFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXS9nIH0sIHsgJ2Jhc2UnOiAnYWEnLCAnbGV0dGVycyc6IC9bXFx1QTczM10vZyB9LCB7ICdiYXNlJzogJ2FlJywgJ2xldHRlcnMnOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZyB9LCB7ICdiYXNlJzogJ2FvJywgJ2xldHRlcnMnOiAvW1xcdUE3MzVdL2cgfSwgeyAnYmFzZSc6ICdhdScsICdsZXR0ZXJzJzogL1tcXHVBNzM3XS9nIH0sIHsgJ2Jhc2UnOiAnYXYnLCAnbGV0dGVycyc6IC9bXFx1QTczOVxcdUE3M0JdL2cgfSwgeyAnYmFzZSc6ICdheScsICdsZXR0ZXJzJzogL1tcXHVBNzNEXS9nIH0sIHsgJ2Jhc2UnOiAnYicsICdsZXR0ZXJzJzogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2cgfSwgeyAnYmFzZSc6ICdjJywgJ2xldHRlcnMnOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2cgfSwgeyAnYmFzZSc6ICdkJywgJ2xldHRlcnMnOiAvW1xcdTAwNjRcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHVBNzdBXS9nIH0sIHsgJ2Jhc2UnOiAnZHonLCAnbGV0dGVycyc6IC9bXFx1MDFGM1xcdTAxQzZdL2cgfSwgeyAnYmFzZSc6ICdlJywgJ2xldHRlcnMnOiAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2cgfSwgeyAnYmFzZSc6ICdmJywgJ2xldHRlcnMnOiAvW1xcdTAwNjZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q10vZyB9LCB7ICdiYXNlJzogJ2cnLCAnbGV0dGVycyc6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nIH0sIHsgJ2Jhc2UnOiAnaCcsICdsZXR0ZXJzJzogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2cgfSwgeyAnYmFzZSc6ICdodicsICdsZXR0ZXJzJzogL1tcXHUwMTk1XS9nIH0sIHsgJ2Jhc2UnOiAnaScsICdsZXR0ZXJzJzogL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyB9LCB7ICdiYXNlJzogJ2onLCAnbGV0dGVycyc6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nIH0sIHsgJ2Jhc2UnOiAnaycsICdsZXR0ZXJzJzogL1tcXHUwMDZCXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM10vZyB9LCB7ICdiYXNlJzogJ2wnLCAnbGV0dGVycyc6IC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyB9LCB7ICdiYXNlJzogJ2xqJywgJ2xldHRlcnMnOiAvW1xcdTAxQzldL2cgfSwgeyAnYmFzZSc6ICdtJywgJ2xldHRlcnMnOiAvW1xcdTAwNkRcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXS9nIH0sIHsgJ2Jhc2UnOiAnbicsICdsZXR0ZXJzJzogL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyB9LCB7ICdiYXNlJzogJ25qJywgJ2xldHRlcnMnOiAvW1xcdTAxQ0NdL2cgfSwgeyAnYmFzZSc6ICdvJywgJ2xldHRlcnMnOiAvW1xcdTAwNkZcXHUyNERFXFx1RkY0RlxcdTAwRjJcXHUwMEYzXFx1MDBGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHUwMEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx1MDBGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHUwMEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzVdL2cgfSwgeyAnYmFzZSc6ICdvaScsICdsZXR0ZXJzJzogL1tcXHUwMUEzXS9nIH0sIHsgJ2Jhc2UnOiAnb3UnLCAnbGV0dGVycyc6IC9bXFx1MDIyM10vZyB9LCB7ICdiYXNlJzogJ29vJywgJ2xldHRlcnMnOiAvW1xcdUE3NEZdL2cgfSwgeyAnYmFzZSc6ICdwJywgJ2xldHRlcnMnOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2cgfSwgeyAnYmFzZSc6ICdxJywgJ2xldHRlcnMnOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZyB9LCB7ICdiYXNlJzogJ3InLCAnbGV0dGVycyc6IC9bXFx1MDA3MlxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNdL2cgfSwgeyAnYmFzZSc6ICdzJywgJ2xldHRlcnMnOiAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyB9LCB7ICdiYXNlJzogJ3QnLCAnbGV0dGVycyc6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZyB9LCB7ICdiYXNlJzogJ3R6JywgJ2xldHRlcnMnOiAvW1xcdUE3MjldL2cgfSwgeyAnYmFzZSc6ICd1JywgJ2xldHRlcnMnOiAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2cgfSwgeyAnYmFzZSc6ICd2JywgJ2xldHRlcnMnOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nIH0sIHsgJ2Jhc2UnOiAndnknLCAnbGV0dGVycyc6IC9bXFx1QTc2MV0vZyB9LCB7ICdiYXNlJzogJ3cnLCAnbGV0dGVycyc6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2cgfSwgeyAnYmFzZSc6ICd4JywgJ2xldHRlcnMnOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nIH0sIHsgJ2Jhc2UnOiAneScsICdsZXR0ZXJzJzogL1tcXHUwMDc5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx1MDBGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHUwMEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXS9nIH0sIHsgJ2Jhc2UnOiAneicsICdsZXR0ZXJzJzogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyB9XTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpcERpYWNyaXRpY3Moc3RyKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbWFwLmxlbmd0aDsgaSsrKSB7XG5cdFx0c3RyID0gc3RyLnJlcGxhY2UobWFwW2ldLmxldHRlcnMsIG1hcFtpXS5iYXNlKTtcblx0fVxuXHRyZXR1cm4gc3RyO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtc2VsZWN0L2xpYi91dGlscy9zdHJpcERpYWNyaXRpY3MuanNcbi8vIG1vZHVsZSBpZCA9IDYyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0Q2VsbFJhbmdlUmVuZGVyZXI7XG5cbi8qKlxuICogRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBjZWxsUmFuZ2VSZW5kZXJlciB1c2VkIGJ5IEdyaWQuXG4gKiBUaGlzIHJlbmRlcmVyIHN1cHBvcnRzIGNlbGwtY2FjaGluZyB3aGlsZSB0aGUgdXNlciBpcyBzY3JvbGxpbmcuXG4gKi9cbmZ1bmN0aW9uIGRlZmF1bHRDZWxsUmFuZ2VSZW5kZXJlcihfcmVmKSB7XG4gIHZhciBjZWxsQ2FjaGUgPSBfcmVmLmNlbGxDYWNoZTtcbiAgdmFyIGNlbGxSZW5kZXJlciA9IF9yZWYuY2VsbFJlbmRlcmVyO1xuICB2YXIgY29sdW1uU2l6ZUFuZFBvc2l0aW9uTWFuYWdlciA9IF9yZWYuY29sdW1uU2l6ZUFuZFBvc2l0aW9uTWFuYWdlcjtcbiAgdmFyIGNvbHVtblN0YXJ0SW5kZXggPSBfcmVmLmNvbHVtblN0YXJ0SW5kZXg7XG4gIHZhciBjb2x1bW5TdG9wSW5kZXggPSBfcmVmLmNvbHVtblN0b3BJbmRleDtcbiAgdmFyIGhvcml6b250YWxPZmZzZXRBZGp1c3RtZW50ID0gX3JlZi5ob3Jpem9udGFsT2Zmc2V0QWRqdXN0bWVudDtcbiAgdmFyIGlzU2Nyb2xsaW5nID0gX3JlZi5pc1Njcm9sbGluZztcbiAgdmFyIHJvd1NpemVBbmRQb3NpdGlvbk1hbmFnZXIgPSBfcmVmLnJvd1NpemVBbmRQb3NpdGlvbk1hbmFnZXI7XG4gIHZhciByb3dTdGFydEluZGV4ID0gX3JlZi5yb3dTdGFydEluZGV4O1xuICB2YXIgcm93U3RvcEluZGV4ID0gX3JlZi5yb3dTdG9wSW5kZXg7XG4gIHZhciBzY3JvbGxMZWZ0ID0gX3JlZi5zY3JvbGxMZWZ0O1xuICB2YXIgc2Nyb2xsVG9wID0gX3JlZi5zY3JvbGxUb3A7XG4gIHZhciBzdHlsZUNhY2hlID0gX3JlZi5zdHlsZUNhY2hlO1xuICB2YXIgdmVydGljYWxPZmZzZXRBZGp1c3RtZW50ID0gX3JlZi52ZXJ0aWNhbE9mZnNldEFkanVzdG1lbnQ7XG4gIHZhciB2aXNpYmxlQ29sdW1uSW5kaWNlcyA9IF9yZWYudmlzaWJsZUNvbHVtbkluZGljZXM7XG4gIHZhciB2aXNpYmxlUm93SW5kaWNlcyA9IF9yZWYudmlzaWJsZVJvd0luZGljZXM7XG5cbiAgdmFyIHJlbmRlcmVkQ2VsbHMgPSBbXTtcbiAgdmFyIG9mZnNldEFkanVzdGVkID0gdmVydGljYWxPZmZzZXRBZGp1c3RtZW50IHx8IGhvcml6b250YWxPZmZzZXRBZGp1c3RtZW50O1xuICB2YXIgY2FuQ2FjaGVTdHlsZSA9ICFpc1Njcm9sbGluZyB8fCAhb2Zmc2V0QWRqdXN0ZWQ7XG5cbiAgZm9yICh2YXIgcm93SW5kZXggPSByb3dTdGFydEluZGV4OyByb3dJbmRleCA8PSByb3dTdG9wSW5kZXg7IHJvd0luZGV4KyspIHtcbiAgICB2YXIgcm93RGF0dW0gPSByb3dTaXplQW5kUG9zaXRpb25NYW5hZ2VyLmdldFNpemVBbmRQb3NpdGlvbk9mQ2VsbChyb3dJbmRleCk7XG5cbiAgICBmb3IgKHZhciBjb2x1bW5JbmRleCA9IGNvbHVtblN0YXJ0SW5kZXg7IGNvbHVtbkluZGV4IDw9IGNvbHVtblN0b3BJbmRleDsgY29sdW1uSW5kZXgrKykge1xuICAgICAgdmFyIGNvbHVtbkRhdHVtID0gY29sdW1uU2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5nZXRTaXplQW5kUG9zaXRpb25PZkNlbGwoY29sdW1uSW5kZXgpO1xuICAgICAgdmFyIGlzVmlzaWJsZSA9IGNvbHVtbkluZGV4ID49IHZpc2libGVDb2x1bW5JbmRpY2VzLnN0YXJ0ICYmIGNvbHVtbkluZGV4IDw9IHZpc2libGVDb2x1bW5JbmRpY2VzLnN0b3AgJiYgcm93SW5kZXggPj0gdmlzaWJsZVJvd0luZGljZXMuc3RhcnQgJiYgcm93SW5kZXggPD0gdmlzaWJsZVJvd0luZGljZXMuc3RvcDtcbiAgICAgIHZhciBrZXkgPSByb3dJbmRleCArICctJyArIGNvbHVtbkluZGV4O1xuICAgICAgdmFyIHN0eWxlID0gdm9pZCAwO1xuXG4gICAgICAvLyBDYWNoZSBzdHlsZSBvYmplY3RzIHNvIHNoYWxsb3ctY29tcGFyZSBkb2Vzbid0IHJlLXJlbmRlciB1bm5lY2Vzc2FyaWx5LlxuICAgICAgaWYgKGNhbkNhY2hlU3R5bGUgJiYgc3R5bGVDYWNoZVtrZXldKSB7XG4gICAgICAgIHN0eWxlID0gc3R5bGVDYWNoZVtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgaGVpZ2h0OiByb3dEYXR1bS5zaXplLFxuICAgICAgICAgIGxlZnQ6IGNvbHVtbkRhdHVtLm9mZnNldCArIGhvcml6b250YWxPZmZzZXRBZGp1c3RtZW50LFxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogcm93RGF0dW0ub2Zmc2V0ICsgdmVydGljYWxPZmZzZXRBZGp1c3RtZW50LFxuICAgICAgICAgIHdpZHRoOiBjb2x1bW5EYXR1bS5zaXplXG4gICAgICAgIH07XG5cbiAgICAgICAgc3R5bGVDYWNoZVtrZXldID0gc3R5bGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBjZWxsUmVuZGVyZXJQYXJhbXMgPSB7XG4gICAgICAgIGNvbHVtbkluZGV4OiBjb2x1bW5JbmRleCxcbiAgICAgICAgaXNTY3JvbGxpbmc6IGlzU2Nyb2xsaW5nLFxuICAgICAgICBpc1Zpc2libGU6IGlzVmlzaWJsZSxcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHJvd0luZGV4OiByb3dJbmRleCxcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9O1xuXG4gICAgICB2YXIgcmVuZGVyZWRDZWxsID0gdm9pZCAwO1xuXG4gICAgICAvLyBBdm9pZCByZS1jcmVhdGluZyBjZWxscyB3aGlsZSBzY3JvbGxpbmcuXG4gICAgICAvLyBUaGlzIGNhbiBsZWFkIHRvIHRoZSBzYW1lIGNlbGwgYmVpbmcgY3JlYXRlZCBtYW55IHRpbWVzIGFuZCBjYW4gY2F1c2UgcGVyZm9ybWFuY2UgaXNzdWVzIGZvciBcImhlYXZ5XCIgY2VsbHMuXG4gICAgICAvLyBJZiBhIHNjcm9sbCBpcyBpbiBwcm9ncmVzcy0gY2FjaGUgYW5kIHJldXNlIGNlbGxzLlxuICAgICAgLy8gVGhpcyBjYWNoZSB3aWxsIGJlIHRocm93biBhd2F5IG9uY2Ugc2Nyb2xsaW5nIGNvbXBsZXRlcy5cbiAgICAgIC8vIEhvd2V2ZXIgaWYgd2UgYXJlIHNjYWxpbmcgc2Nyb2xsIHBvc2l0aW9ucyBhbmQgc2l6ZXMsIHdlIHNob3VsZCBhbHNvIGF2b2lkIGNhY2hpbmcuXG4gICAgICAvLyBUaGlzIGlzIGJlY2F1c2UgdGhlIG9mZnNldCBjaGFuZ2VzIHNsaWdodGx5IGFzIHNjcm9sbCBwb3NpdGlvbiBjaGFuZ2VzIGFuZCBjYWNoaW5nIGxlYWRzIHRvIHN0YWxlIHZhbHVlcy5cbiAgICAgIC8vIEZvciBtb3JlIGluZm8gcmVmZXIgdG8gaXNzdWUgIzM5NVxuICAgICAgaWYgKGlzU2Nyb2xsaW5nICYmICFob3Jpem9udGFsT2Zmc2V0QWRqdXN0bWVudCAmJiAhdmVydGljYWxPZmZzZXRBZGp1c3RtZW50KSB7XG4gICAgICAgIGlmICghY2VsbENhY2hlW2tleV0pIHtcbiAgICAgICAgICBjZWxsQ2FjaGVba2V5XSA9IGNlbGxSZW5kZXJlcihjZWxsUmVuZGVyZXJQYXJhbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyZWRDZWxsID0gY2VsbENhY2hlW2tleV07XG5cbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgaXMgbm8gbG9uZ2VyIHNjcm9sbGluZywgZG9uJ3QgY2FjaGUgY2VsbHMuXG4gICAgICAgIC8vIFRoaXMgbWFrZXMgZHluYW1pYyBjZWxsIGNvbnRlbnQgZGlmZmljdWx0IGZvciB1c2VycyBhbmQgd291bGQgYWxzbyBsZWFkIHRvIGEgaGVhdmllciBtZW1vcnkgZm9vdHByaW50LlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyZWRDZWxsID0gY2VsbFJlbmRlcmVyKGNlbGxSZW5kZXJlclBhcmFtcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZW5kZXJlZENlbGwgPT0gbnVsbCB8fCByZW5kZXJlZENlbGwgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICByZW5kZXJlZENlbGxzLnB1c2gocmVuZGVyZWRDZWxsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVuZGVyZWRDZWxscztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9HcmlkL2RlZmF1bHRDZWxsUmFuZ2VSZW5kZXJlci5qc1xuLy8gbW9kdWxlIGlkID0gNjIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzaGFsbG93RXF1YWwgPSByZXF1aXJlKCdmYmpzL2xpYi9zaGFsbG93RXF1YWwnKTtcblxuLyoqXG4gKiBEb2VzIGEgc2hhbGxvdyBjb21wYXJpc29uIGZvciBwcm9wcyBhbmQgc3RhdGUuXG4gKiBTZWUgUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluXG4gKiBTZWUgYWxzbyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3NoYWxsb3ctY29tcGFyZS5odG1sXG4gKi9cbmZ1bmN0aW9uIHNoYWxsb3dDb21wYXJlKGluc3RhbmNlLCBuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICByZXR1cm4gIXNoYWxsb3dFcXVhbChpbnN0YW5jZS5wcm9wcywgbmV4dFByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKGluc3RhbmNlLnN0YXRlLCBuZXh0U3RhdGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYWxsb3dDb21wYXJlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZXh0L34vcmVhY3QvbGliL3NoYWxsb3dDb21wYXJlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDEwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgc2l6ZXJTdHlsZSA9IHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogMCwgdmlzaWJpbGl0eTogJ2hpZGRlbicsIGhlaWdodDogMCwgb3ZlcmZsb3c6ICdzY3JvbGwnLCB3aGl0ZVNwYWNlOiAncHJlJyB9O1xuXG52YXIgQXV0b3NpemVJbnB1dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdBdXRvc2l6ZUlucHV0JyxcblxuXHRwcm9wVHlwZXM6IHtcblx0XHRjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsIC8vIGNsYXNzTmFtZSBmb3IgdGhlIG91dGVyIGVsZW1lbnRcblx0XHRkZWZhdWx0VmFsdWU6IFJlYWN0LlByb3BUeXBlcy5hbnksIC8vIGRlZmF1bHQgZmllbGQgdmFsdWVcblx0XHRpbnB1dENsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgLy8gY2xhc3NOYW1lIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRcdGlucHV0U3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsIC8vIGNzcyBzdHlsZXMgZm9yIHRoZSBpbnB1dCBlbGVtZW50XG5cdFx0bWluV2lkdGg6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoWy8vIG1pbmltdW0gd2lkdGggZm9yIGlucHV0IGVsZW1lbnRcblx0XHRSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLCBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXSksXG5cdFx0b25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLCAvLyBvbkNoYW5nZSBoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWx1ZSkge31cblx0XHRwbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgLy8gcGxhY2Vob2xkZXIgdGV4dFxuXHRcdHBsYWNlaG9sZGVySXNNaW5XaWR0aDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsIC8vIGRvbid0IGNvbGxhcHNlIHNpemUgdG8gbGVzcyB0aGFuIHRoZSBwbGFjZWhvbGRlclxuXHRcdHN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAvLyBjc3Mgc3R5bGVzIGZvciB0aGUgb3V0ZXIgZWxlbWVudFxuXHRcdHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuYW55IH0sXG5cdC8vIGZpZWxkIHZhbHVlXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRtaW5XaWR0aDogMVxuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpbnB1dFdpZHRoOiB0aGlzLnByb3BzLm1pbldpZHRoXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuY29weUlucHV0U3R5bGVzKCk7XG5cdFx0dGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XG5cdH0sXG5cdGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xuXHR9LFxuXHRjb3B5SW5wdXRTdHlsZXM6IGZ1bmN0aW9uIGNvcHlJbnB1dFN0eWxlcygpIHtcblx0XHRpZiAoIXRoaXMuaXNNb3VudGVkKCkgfHwgIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhciBpbnB1dFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5yZWZzLmlucHV0KTtcblx0XHRpZiAoIWlucHV0U3R5bGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIHdpZHRoTm9kZSA9IHRoaXMucmVmcy5zaXplcjtcblx0XHR3aWR0aE5vZGUuc3R5bGUuZm9udFNpemUgPSBpbnB1dFN0eWxlLmZvbnRTaXplO1xuXHRcdHdpZHRoTm9kZS5zdHlsZS5mb250RmFtaWx5ID0gaW5wdXRTdHlsZS5mb250RmFtaWx5O1xuXHRcdHdpZHRoTm9kZS5zdHlsZS5mb250V2VpZ2h0ID0gaW5wdXRTdHlsZS5mb250V2VpZ2h0O1xuXHRcdHdpZHRoTm9kZS5zdHlsZS5mb250U3R5bGUgPSBpbnB1dFN0eWxlLmZvbnRTdHlsZTtcblx0XHR3aWR0aE5vZGUuc3R5bGUubGV0dGVyU3BhY2luZyA9IGlucHV0U3R5bGUubGV0dGVyU3BhY2luZztcblx0XHRpZiAodGhpcy5wcm9wcy5wbGFjZWhvbGRlcikge1xuXHRcdFx0dmFyIHBsYWNlaG9sZGVyTm9kZSA9IHRoaXMucmVmcy5wbGFjZWhvbGRlclNpemVyO1xuXHRcdFx0cGxhY2Vob2xkZXJOb2RlLnN0eWxlLmZvbnRTaXplID0gaW5wdXRTdHlsZS5mb250U2l6ZTtcblx0XHRcdHBsYWNlaG9sZGVyTm9kZS5zdHlsZS5mb250RmFtaWx5ID0gaW5wdXRTdHlsZS5mb250RmFtaWx5O1xuXHRcdFx0cGxhY2Vob2xkZXJOb2RlLnN0eWxlLmZvbnRXZWlnaHQgPSBpbnB1dFN0eWxlLmZvbnRXZWlnaHQ7XG5cdFx0XHRwbGFjZWhvbGRlck5vZGUuc3R5bGUuZm9udFN0eWxlID0gaW5wdXRTdHlsZS5mb250U3R5bGU7XG5cdFx0XHRwbGFjZWhvbGRlck5vZGUuc3R5bGUubGV0dGVyU3BhY2luZyA9IGlucHV0U3R5bGUubGV0dGVyU3BhY2luZztcblx0XHR9XG5cdH0sXG5cdHVwZGF0ZUlucHV0V2lkdGg6IGZ1bmN0aW9uIHVwZGF0ZUlucHV0V2lkdGgoKSB7XG5cdFx0aWYgKCF0aGlzLmlzTW91bnRlZCgpIHx8IHR5cGVvZiB0aGlzLnJlZnMuc2l6ZXIuc2Nyb2xsV2lkdGggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhciBuZXdJbnB1dFdpZHRoID0gdW5kZWZpbmVkO1xuXHRcdGlmICh0aGlzLnByb3BzLnBsYWNlaG9sZGVyICYmICghdGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLnZhbHVlICYmIHRoaXMucHJvcHMucGxhY2Vob2xkZXJJc01pbldpZHRoKSkge1xuXHRcdFx0bmV3SW5wdXRXaWR0aCA9IE1hdGgubWF4KHRoaXMucmVmcy5zaXplci5zY3JvbGxXaWR0aCwgdGhpcy5yZWZzLnBsYWNlaG9sZGVyU2l6ZXIuc2Nyb2xsV2lkdGgpICsgMjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV3SW5wdXRXaWR0aCA9IHRoaXMucmVmcy5zaXplci5zY3JvbGxXaWR0aCArIDI7XG5cdFx0fVxuXHRcdGlmIChuZXdJbnB1dFdpZHRoIDwgdGhpcy5wcm9wcy5taW5XaWR0aCkge1xuXHRcdFx0bmV3SW5wdXRXaWR0aCA9IHRoaXMucHJvcHMubWluV2lkdGg7XG5cdFx0fVxuXHRcdGlmIChuZXdJbnB1dFdpZHRoICE9PSB0aGlzLnN0YXRlLmlucHV0V2lkdGgpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpbnB1dFdpZHRoOiBuZXdJbnB1dFdpZHRoXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cdGdldElucHV0OiBmdW5jdGlvbiBnZXRJbnB1dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZWZzLmlucHV0O1xuXHR9LFxuXHRmb2N1czogZnVuY3Rpb24gZm9jdXMoKSB7XG5cdFx0dGhpcy5yZWZzLmlucHV0LmZvY3VzKCk7XG5cdH0sXG5cdGJsdXI6IGZ1bmN0aW9uIGJsdXIoKSB7XG5cdFx0dGhpcy5yZWZzLmlucHV0LmJsdXIoKTtcblx0fSxcblx0c2VsZWN0OiBmdW5jdGlvbiBzZWxlY3QoKSB7XG5cdFx0dGhpcy5yZWZzLmlucHV0LnNlbGVjdCgpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHR2YXIgc2l6ZXJWYWx1ZSA9IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUgfHwgJyc7XG5cdFx0dmFyIHdyYXBwZXJTdHlsZSA9IHRoaXMucHJvcHMuc3R5bGUgfHwge307XG5cdFx0aWYgKCF3cmFwcGVyU3R5bGUuZGlzcGxheSkgd3JhcHBlclN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcblx0XHR2YXIgaW5wdXRTdHlsZSA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLmlucHV0U3R5bGUpO1xuXHRcdGlucHV0U3R5bGUud2lkdGggPSB0aGlzLnN0YXRlLmlucHV0V2lkdGggKyAncHgnO1xuXHRcdGlucHV0U3R5bGUuYm94U2l6aW5nID0gJ2NvbnRlbnQtYm94Jztcblx0XHR2YXIgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcblx0XHRpbnB1dFByb3BzLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMuaW5wdXRDbGFzc05hbWU7XG5cdFx0aW5wdXRQcm9wcy5zdHlsZSA9IGlucHV0U3R5bGU7XG5cdFx0Ly8gZW5zdXJlIHByb3BzIG1lYW50IGZvciBgQXV0b3NpemVJbnB1dGAgZG9uJ3QgZW5kIHVwIG9uIHRoZSBgaW5wdXRgXG5cdFx0ZGVsZXRlIGlucHV0UHJvcHMuaW5wdXRDbGFzc05hbWU7XG5cdFx0ZGVsZXRlIGlucHV0UHJvcHMuaW5wdXRTdHlsZTtcblx0XHRkZWxldGUgaW5wdXRQcm9wcy5taW5XaWR0aDtcblx0XHRkZWxldGUgaW5wdXRQcm9wcy5wbGFjZWhvbGRlcklzTWluV2lkdGg7XG5cdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSwgc3R5bGU6IHdyYXBwZXJTdHlsZSB9LFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7fSwgaW5wdXRQcm9wcywgeyByZWY6ICdpbnB1dCcgfSkpLFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgcmVmOiAnc2l6ZXInLCBzdHlsZTogc2l6ZXJTdHlsZSB9LFxuXHRcdFx0XHRzaXplclZhbHVlXG5cdFx0XHQpLFxuXHRcdFx0dGhpcy5wcm9wcy5wbGFjZWhvbGRlciA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IHJlZjogJ3BsYWNlaG9sZGVyU2l6ZXInLCBzdHlsZTogc2l6ZXJTdHlsZSB9LFxuXHRcdFx0XHR0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG5cdFx0XHQpIDogbnVsbFxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1dG9zaXplSW5wdXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWlucHV0LWF1dG9zaXplL2xpYi9BdXRvc2l6ZUlucHV0LmpzXG4vLyBtb2R1bGUgaWQgPSA4Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDEwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfU2VsZWN0ID0gcmVxdWlyZSgnLi9TZWxlY3QnKTtcblxudmFyIF9TZWxlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2VsZWN0KTtcblxudmFyIF91dGlsc1N0cmlwRGlhY3JpdGljcyA9IHJlcXVpcmUoJy4vdXRpbHMvc3RyaXBEaWFjcml0aWNzJyk7XG5cbnZhciBfdXRpbHNTdHJpcERpYWNyaXRpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNTdHJpcERpYWNyaXRpY3MpO1xuXG52YXIgcHJvcFR5cGVzID0ge1xuXHRhdXRvbG9hZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsIC8vIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGUgYGxvYWRPcHRpb25zYCBwcm9wIG9uLW1vdW50OyBkZWZhdWx0cyB0byB0cnVlXG5cdGNhY2hlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSwgLy8gb2JqZWN0IHRvIHVzZSB0byBjYWNoZSByZXN1bHRzOyBzZXQgdG8gbnVsbC9mYWxzZSB0byBkaXNhYmxlIGNhY2hpbmdcblx0Y2hpbGRyZW46IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBDaGlsZCBmdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIGlubmVyIFNlbGVjdCBjb21wb25lbnQ7IChwcm9wczogT2JqZWN0KTogUHJvcFR5cGVzLmVsZW1lbnRcblx0aWdub3JlQWNjZW50czogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCAvLyBzdHJpcCBkaWFjcml0aWNzIHdoZW4gZmlsdGVyaW5nOyBkZWZhdWx0cyB0byB0cnVlXG5cdGlnbm9yZUNhc2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgLy8gcGVyZm9ybSBjYXNlLWluc2Vuc2l0aXZlIGZpbHRlcmluZzsgZGVmYXVsdHMgdG8gdHJ1ZVxuXHRsb2FkaW5nUGxhY2Vob2xkZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFsvLyByZXBsYWNlcyB0aGUgcGxhY2Vob2xkZXIgd2hpbGUgb3B0aW9ucyBhcmUgbG9hZGluZ1xuXHRfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlXSksXG5cdGxvYWRPcHRpb25zOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gY2FsbGJhY2sgdG8gbG9hZCBvcHRpb25zIGFzeW5jaHJvbm91c2x5OyAoaW5wdXRWYWx1ZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiA/UHJvbWlzZVxuXHRvcHRpb25zOiBfcmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIC8vIGFycmF5IG9mIG9wdGlvbnNcblx0cGxhY2Vob2xkZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFsvLyBmaWVsZCBwbGFjZWhvbGRlciwgZGlzcGxheWVkIHdoZW4gdGhlcmUncyBubyB2YWx1ZSAoc2hhcmVkIHdpdGggU2VsZWN0KVxuXHRfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlXSksXG5cdG5vUmVzdWx0c1RleHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFsvLyBmaWVsZCBub1Jlc3VsdHNUZXh0LCBkaXNwbGF5ZWQgd2hlbiBubyBvcHRpb25zIGNvbWUgYmFjayBmcm9tIHRoZSBzZXJ2ZXJcblx0X3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZV0pLFxuXHRvbkNoYW5nZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLCAvLyBvbkNoYW5nZSBoYW5kbGVyOiBmdW5jdGlvbiAobmV3VmFsdWUpIHt9XG5cdHNlYXJjaFByb21wdFRleHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFsvLyBsYWJlbCB0byBwcm9tcHQgZm9yIHNlYXJjaCBpbnB1dFxuXHRfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlXSksXG5cdG9uSW5wdXRDaGFuZ2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYywgLy8gb3B0aW9uYWwgZm9yIGtlZXBpbmcgdHJhY2sgb2Ygd2hhdCBpcyBiZWluZyB0eXBlZFxuXHR2YWx1ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnkgfTtcblxuLy8gaW5pdGlhbCBmaWVsZCB2YWx1ZVxudmFyIGRlZmF1bHRDYWNoZSA9IHt9O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuXHRhdXRvbG9hZDogdHJ1ZSxcblx0Y2FjaGU6IGRlZmF1bHRDYWNoZSxcblx0Y2hpbGRyZW46IGRlZmF1bHRDaGlsZHJlbixcblx0aWdub3JlQWNjZW50czogdHJ1ZSxcblx0aWdub3JlQ2FzZTogdHJ1ZSxcblx0bG9hZGluZ1BsYWNlaG9sZGVyOiAnTG9hZGluZy4uLicsXG5cdG9wdGlvbnM6IFtdLFxuXHRzZWFyY2hQcm9tcHRUZXh0OiAnVHlwZSB0byBzZWFyY2gnXG59O1xuXG52YXIgQXN5bmMgPSAoZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcblx0X2luaGVyaXRzKEFzeW5jLCBfQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBBc3luYyhwcm9wcywgY29udGV4dCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBc3luYyk7XG5cblx0XHRfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihBc3luYy5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KTtcblxuXHRcdHRoaXMuX2NhY2hlID0gcHJvcHMuY2FjaGUgPT09IGRlZmF1bHRDYWNoZSA/IHt9IDogcHJvcHMuY2FjaGU7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdG9wdGlvbnM6IHByb3BzLm9wdGlvbnNcblx0XHR9O1xuXG5cdFx0dGhpcy5fb25JbnB1dENoYW5nZSA9IHRoaXMuX29uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhBc3luYywgW3tcblx0XHRrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFx0dmFyIGF1dG9sb2FkID0gdGhpcy5wcm9wcy5hdXRvbG9hZDtcblxuXHRcdFx0aWYgKGF1dG9sb2FkKSB7XG5cdFx0XHRcdHRoaXMubG9hZE9wdGlvbnMoJycpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdFx0XHR2YXIgcHJvcGVydGllc1RvU3luYyA9IFsnb3B0aW9ucyddO1xuXHRcdFx0cHJvcGVydGllc1RvU3luYy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG5cdFx0XHRcdGlmIChfdGhpcy5wcm9wc1twcm9wXSAhPT0gbmV4dFByb3BzW3Byb3BdKSB7XG5cdFx0XHRcdFx0X3RoaXMuc2V0U3RhdGUoX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wLCBuZXh0UHJvcHNbcHJvcF0pKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY2xlYXJPcHRpb25zJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2xlYXJPcHRpb25zKCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IG9wdGlvbnM6IFtdIH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2xvYWRPcHRpb25zJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbG9hZE9wdGlvbnMoaW5wdXRWYWx1ZSkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdHZhciBsb2FkT3B0aW9ucyA9IHRoaXMucHJvcHMubG9hZE9wdGlvbnM7XG5cblx0XHRcdHZhciBjYWNoZSA9IHRoaXMuX2NhY2hlO1xuXG5cdFx0XHRpZiAoY2FjaGUgJiYgY2FjaGUuaGFzT3duUHJvcGVydHkoaW5wdXRWYWx1ZSkpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0b3B0aW9uczogY2FjaGVbaW5wdXRWYWx1ZV1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhlcnJvciwgZGF0YSkge1xuXHRcdFx0XHRpZiAoY2FsbGJhY2sgPT09IF90aGlzMi5fY2FsbGJhY2spIHtcblx0XHRcdFx0XHRfdGhpczIuX2NhbGxiYWNrID0gbnVsbDtcblxuXHRcdFx0XHRcdHZhciBvcHRpb25zID0gZGF0YSAmJiBkYXRhLm9wdGlvbnMgfHwgW107XG5cblx0XHRcdFx0XHRpZiAoY2FjaGUpIHtcblx0XHRcdFx0XHRcdGNhY2hlW2lucHV0VmFsdWVdID0gb3B0aW9ucztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRfdGhpczIuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0XHRcdG9wdGlvbnM6IG9wdGlvbnNcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gSWdub3JlIGFsbCBidXQgdGhlIG1vc3QgcmVjZW50IHJlcXVlc3Rcblx0XHRcdHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG5cblx0XHRcdHZhciBwcm9taXNlID0gbG9hZE9wdGlvbnMoaW5wdXRWYWx1ZSwgY2FsbGJhY2spO1xuXHRcdFx0aWYgKHByb21pc2UpIHtcblx0XHRcdFx0cHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9LCBmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX2NhbGxiYWNrICYmICF0aGlzLnN0YXRlLmlzTG9hZGluZykge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc0xvYWRpbmc6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBpbnB1dFZhbHVlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ19vbklucHV0Q2hhbmdlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gX29uSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSkge1xuXHRcdFx0dmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG5cdFx0XHR2YXIgaWdub3JlQWNjZW50cyA9IF9wcm9wcy5pZ25vcmVBY2NlbnRzO1xuXHRcdFx0dmFyIGlnbm9yZUNhc2UgPSBfcHJvcHMuaWdub3JlQ2FzZTtcblx0XHRcdHZhciBvbklucHV0Q2hhbmdlID0gX3Byb3BzLm9uSW5wdXRDaGFuZ2U7XG5cblx0XHRcdGlmIChpZ25vcmVBY2NlbnRzKSB7XG5cdFx0XHRcdGlucHV0VmFsdWUgPSAoMCwgX3V0aWxzU3RyaXBEaWFjcml0aWNzMlsnZGVmYXVsdCddKShpbnB1dFZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlnbm9yZUNhc2UpIHtcblx0XHRcdFx0aW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9uSW5wdXRDaGFuZ2UpIHtcblx0XHRcdFx0b25JbnB1dENoYW5nZShpbnB1dFZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMubG9hZE9wdGlvbnMoaW5wdXRWYWx1ZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaW5wdXRWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGlucHV0VmFsdWUoKSB7XG5cdFx0XHRpZiAodGhpcy5zZWxlY3QpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2VsZWN0LnN0YXRlLmlucHV0VmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbm9SZXN1bHRzVGV4dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG5vUmVzdWx0c1RleHQoKSB7XG5cdFx0XHR2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG5cdFx0XHR2YXIgbG9hZGluZ1BsYWNlaG9sZGVyID0gX3Byb3BzMi5sb2FkaW5nUGxhY2Vob2xkZXI7XG5cdFx0XHR2YXIgbm9SZXN1bHRzVGV4dCA9IF9wcm9wczIubm9SZXN1bHRzVGV4dDtcblx0XHRcdHZhciBzZWFyY2hQcm9tcHRUZXh0ID0gX3Byb3BzMi5zZWFyY2hQcm9tcHRUZXh0O1xuXHRcdFx0dmFyIGlzTG9hZGluZyA9IHRoaXMuc3RhdGUuaXNMb2FkaW5nO1xuXG5cdFx0XHR2YXIgaW5wdXRWYWx1ZSA9IHRoaXMuaW5wdXRWYWx1ZSgpO1xuXG5cdFx0XHRpZiAoaXNMb2FkaW5nKSB7XG5cdFx0XHRcdHJldHVybiBsb2FkaW5nUGxhY2Vob2xkZXI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaW5wdXRWYWx1ZSAmJiBub1Jlc3VsdHNUZXh0KSB7XG5cdFx0XHRcdHJldHVybiBub1Jlc3VsdHNUZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNlYXJjaFByb21wdFRleHQ7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcblx0XHRcdHRoaXMuc2VsZWN0LmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIF90aGlzMyA9IHRoaXM7XG5cblx0XHRcdHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcztcblx0XHRcdHZhciBjaGlsZHJlbiA9IF9wcm9wczMuY2hpbGRyZW47XG5cdFx0XHR2YXIgbG9hZGluZ1BsYWNlaG9sZGVyID0gX3Byb3BzMy5sb2FkaW5nUGxhY2Vob2xkZXI7XG5cdFx0XHR2YXIgcGxhY2Vob2xkZXIgPSBfcHJvcHMzLnBsYWNlaG9sZGVyO1xuXHRcdFx0dmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0XHR2YXIgaXNMb2FkaW5nID0gX3N0YXRlLmlzTG9hZGluZztcblx0XHRcdHZhciBvcHRpb25zID0gX3N0YXRlLm9wdGlvbnM7XG5cblx0XHRcdHZhciBwcm9wcyA9IHtcblx0XHRcdFx0bm9SZXN1bHRzVGV4dDogdGhpcy5ub1Jlc3VsdHNUZXh0KCksXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBpc0xvYWRpbmcgPyBsb2FkaW5nUGxhY2Vob2xkZXIgOiBwbGFjZWhvbGRlcixcblx0XHRcdFx0b3B0aW9uczogaXNMb2FkaW5nICYmIGxvYWRpbmdQbGFjZWhvbGRlciA/IFtdIDogb3B0aW9ucyxcblx0XHRcdFx0cmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuXHRcdFx0XHRcdHJldHVybiBfdGhpczMuc2VsZWN0ID0gX3JlZjtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG5ld1ZhbHVlcykge1xuXHRcdFx0XHRcdGlmIChfdGhpczMucHJvcHMubXVsdGkgJiYgX3RoaXMzLnByb3BzLnZhbHVlICYmIG5ld1ZhbHVlcy5sZW5ndGggPiBfdGhpczMucHJvcHMudmFsdWUubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRfdGhpczMuY2xlYXJPcHRpb25zKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF90aGlzMy5wcm9wcy5vbkNoYW5nZShuZXdWYWx1ZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gY2hpbGRyZW4oX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHByb3BzLCB7XG5cdFx0XHRcdGlzTG9hZGluZzogaXNMb2FkaW5nLFxuXHRcdFx0XHRvbklucHV0Q2hhbmdlOiB0aGlzLl9vbklucHV0Q2hhbmdlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEFzeW5jO1xufSkoX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFzeW5jO1xuXG5Bc3luYy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Bc3luYy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmZ1bmN0aW9uIGRlZmF1bHRDaGlsZHJlbihwcm9wcykge1xuXHRyZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX1NlbGVjdDJbJ2RlZmF1bHQnXSwgcHJvcHMpO1xufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zZWxlY3QvbGliL0FzeW5jLmpzXG4vLyBtb2R1bGUgaWQgPSA4NDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDEwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9TZWxlY3QgPSByZXF1aXJlKCcuL1NlbGVjdCcpO1xuXG52YXIgX1NlbGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TZWxlY3QpO1xuXG5mdW5jdGlvbiByZWR1Y2Uob2JqKSB7XG5cdHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG5cdHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZShmdW5jdGlvbiAocHJvcHMsIGtleSkge1xuXHRcdHZhciB2YWx1ZSA9IG9ialtrZXldO1xuXHRcdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSBwcm9wc1trZXldID0gdmFsdWU7XG5cdFx0cmV0dXJuIHByb3BzO1xuXHR9LCBwcm9wcyk7XG59XG5cbnZhciBBc3luY0NyZWF0YWJsZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnQXN5bmNDcmVhdGFibGVTZWxlY3QnLFxuXG5cdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0XHRyZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRfU2VsZWN0MlsnZGVmYXVsdCddLkFzeW5jLFxuXHRcdFx0dGhpcy5wcm9wcyxcblx0XHRcdGZ1bmN0aW9uIChhc3luY1Byb3BzKSB7XG5cdFx0XHRcdHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRfU2VsZWN0MlsnZGVmYXVsdCddLkNyZWF0YWJsZSxcblx0XHRcdFx0XHRfdGhpcy5wcm9wcyxcblx0XHRcdFx0XHRmdW5jdGlvbiAoY3JlYXRhYmxlUHJvcHMpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfU2VsZWN0MlsnZGVmYXVsdCddLCBfZXh0ZW5kcyh7fSwgcmVkdWNlKGFzeW5jUHJvcHMsIHJlZHVjZShjcmVhdGFibGVQcm9wcywge30pKSwge1xuXHRcdFx0XHRcdFx0XHRvbklucHV0Q2hhbmdlOiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRcdFx0XHRcdFx0XHRjcmVhdGFibGVQcm9wcy5vbklucHV0Q2hhbmdlKGlucHV0KTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gYXN5bmNQcm9wcy5vbklucHV0Q2hhbmdlKGlucHV0KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0cmVmOiBmdW5jdGlvbiAocmVmKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y3JlYXRhYmxlUHJvcHMucmVmKHJlZik7XG5cdFx0XHRcdFx0XHRcdFx0YXN5bmNQcm9wcy5yZWYocmVmKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBc3luY0NyZWF0YWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtc2VsZWN0L2xpYi9Bc3luY0NyZWF0YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gODQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9TZWxlY3QgPSByZXF1aXJlKCcuL1NlbGVjdCcpO1xuXG52YXIgX1NlbGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TZWxlY3QpO1xuXG52YXIgX3V0aWxzRGVmYXVsdEZpbHRlck9wdGlvbnMgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmF1bHRGaWx0ZXJPcHRpb25zJyk7XG5cbnZhciBfdXRpbHNEZWZhdWx0RmlsdGVyT3B0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RlZmF1bHRGaWx0ZXJPcHRpb25zKTtcblxudmFyIF91dGlsc0RlZmF1bHRNZW51UmVuZGVyZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmF1bHRNZW51UmVuZGVyZXInKTtcblxudmFyIF91dGlsc0RlZmF1bHRNZW51UmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEZWZhdWx0TWVudVJlbmRlcmVyKTtcblxudmFyIENyZWF0YWJsZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnQ3JlYXRhYmxlU2VsZWN0JyxcblxuXHRwcm9wVHlwZXM6IHtcblx0XHQvLyBDaGlsZCBmdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIGlubmVyIFNlbGVjdCBjb21wb25lbnRcblx0XHQvLyBUaGlzIGNvbXBvbmVudCBjYW4gYmUgdXNlZCB0byBjb21wb3NlIEhPQ3MgKGVnIENyZWF0YWJsZSBhbmQgQXN5bmMpXG5cdFx0Ly8gKHByb3BzOiBPYmplY3QpOiBQcm9wVHlwZXMuZWxlbWVudFxuXHRcdGNoaWxkcmVuOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG5cblx0XHQvLyBTZWUgU2VsZWN0LnByb3BUeXBlcy5maWx0ZXJPcHRpb25zXG5cdFx0ZmlsdGVyT3B0aW9uczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG5cblx0XHQvLyBTZWFyY2hlcyBmb3IgYW55IG1hdGNoaW5nIG9wdGlvbiB3aXRoaW4gdGhlIHNldCBvZiBvcHRpb25zLlxuXHRcdC8vIFRoaXMgZnVuY3Rpb24gcHJldmVudHMgZHVwbGljYXRlIG9wdGlvbnMgZnJvbSBiZWluZyBjcmVhdGVkLlxuXHRcdC8vICh7IG9wdGlvbjogT2JqZWN0LCBvcHRpb25zOiBBcnJheSwgbGFiZWxLZXk6IHN0cmluZywgdmFsdWVLZXk6IHN0cmluZyB9KTogYm9vbGVhblxuXHRcdGlzT3B0aW9uVW5pcXVlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG5cblx0XHQvLyBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IGlucHV0IHRleHQgcmVwcmVzZW50cyBhIHZhbGlkIG9wdGlvbi5cblx0XHQvLyAoeyBsYWJlbDogc3RyaW5nIH0pOiBib29sZWFuXG5cdFx0aXNWYWxpZE5ld09wdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuXG5cdFx0Ly8gU2VlIFNlbGVjdC5wcm9wVHlwZXMubWVudVJlbmRlcmVyXG5cdFx0bWVudVJlbmRlcmVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcblxuXHRcdC8vIEZhY3RvcnkgdG8gY3JlYXRlIG5ldyBvcHRpb24uXG5cdFx0Ly8gKHsgbGFiZWw6IHN0cmluZywgbGFiZWxLZXk6IHN0cmluZywgdmFsdWVLZXk6IHN0cmluZyB9KTogT2JqZWN0XG5cdFx0bmV3T3B0aW9uQ3JlYXRvcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuXG5cdFx0Ly8gaW5wdXQgY2hhbmdlIGhhbmRsZXI6IGZ1bmN0aW9uIChpbnB1dFZhbHVlKSB7fVxuXHRcdG9uSW5wdXRDaGFuZ2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcblxuXHRcdC8vIGlucHV0IGtleURvd24gaGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KSB7fVxuXHRcdG9uSW5wdXRLZXlEb3duOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG5cblx0XHQvLyBuZXcgb3B0aW9uIGNsaWNrIGhhbmRsZXI6IGZ1bmN0aW9uIChvcHRpb24pIHt9XG5cdFx0b25OZXdPcHRpb25DbGljazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuXG5cdFx0Ly8gU2VlIFNlbGVjdC5wcm9wVHlwZXMub3B0aW9uc1xuXHRcdG9wdGlvbnM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYXJyYXksXG5cblx0XHQvLyBDcmVhdGVzIHByb21wdC9wbGFjZWhvbGRlciBvcHRpb24gdGV4dC5cblx0XHQvLyAoZmlsdGVyVGV4dDogc3RyaW5nKTogc3RyaW5nXG5cdFx0cHJvbXB0VGV4dENyZWF0b3I6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcblxuXHRcdC8vIERlY2lkZXMgaWYgYSBrZXlEb3duIGV2ZW50IChlZyBpdHMgYGtleUNvZGVgKSBzaG91bGQgcmVzdWx0IGluIHRoZSBjcmVhdGlvbiBvZiBhIG5ldyBvcHRpb24uXG5cdFx0c2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcblx0fSxcblxuXHQvLyBEZWZhdWx0IHByb3AgbWV0aG9kc1xuXHRzdGF0aWNzOiB7XG5cdFx0aXNPcHRpb25VbmlxdWU6IGlzT3B0aW9uVW5pcXVlLFxuXHRcdGlzVmFsaWROZXdPcHRpb246IGlzVmFsaWROZXdPcHRpb24sXG5cdFx0bmV3T3B0aW9uQ3JlYXRvcjogbmV3T3B0aW9uQ3JlYXRvcixcblx0XHRwcm9tcHRUZXh0Q3JlYXRvcjogcHJvbXB0VGV4dENyZWF0b3IsXG5cdFx0c2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uOiBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb25cblx0fSxcblxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZmlsdGVyT3B0aW9uczogX3V0aWxzRGVmYXVsdEZpbHRlck9wdGlvbnMyWydkZWZhdWx0J10sXG5cdFx0XHRpc09wdGlvblVuaXF1ZTogaXNPcHRpb25VbmlxdWUsXG5cdFx0XHRpc1ZhbGlkTmV3T3B0aW9uOiBpc1ZhbGlkTmV3T3B0aW9uLFxuXHRcdFx0bWVudVJlbmRlcmVyOiBfdXRpbHNEZWZhdWx0TWVudVJlbmRlcmVyMlsnZGVmYXVsdCddLFxuXHRcdFx0bmV3T3B0aW9uQ3JlYXRvcjogbmV3T3B0aW9uQ3JlYXRvcixcblx0XHRcdHByb21wdFRleHRDcmVhdG9yOiBwcm9tcHRUZXh0Q3JlYXRvcixcblx0XHRcdHNob3VsZEtleURvd25FdmVudENyZWF0ZU5ld09wdGlvbjogc2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uXG5cdFx0fTtcblx0fSxcblxuXHRjcmVhdGVOZXdPcHRpb246IGZ1bmN0aW9uIGNyZWF0ZU5ld09wdGlvbigpIHtcblx0XHR2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcblx0XHR2YXIgaXNWYWxpZE5ld09wdGlvbiA9IF9wcm9wcy5pc1ZhbGlkTmV3T3B0aW9uO1xuXHRcdHZhciBuZXdPcHRpb25DcmVhdG9yID0gX3Byb3BzLm5ld09wdGlvbkNyZWF0b3I7XG5cdFx0dmFyIG9uTmV3T3B0aW9uQ2xpY2sgPSBfcHJvcHMub25OZXdPcHRpb25DbGljaztcblx0XHR2YXIgX3Byb3BzJG9wdGlvbnMgPSBfcHJvcHMub3B0aW9ucztcblx0XHR2YXIgb3B0aW9ucyA9IF9wcm9wcyRvcHRpb25zID09PSB1bmRlZmluZWQgPyBbXSA6IF9wcm9wcyRvcHRpb25zO1xuXHRcdHZhciBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24gPSBfcHJvcHMuc2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uO1xuXG5cdFx0aWYgKGlzVmFsaWROZXdPcHRpb24oeyBsYWJlbDogdGhpcy5pbnB1dFZhbHVlIH0pKSB7XG5cdFx0XHR2YXIgb3B0aW9uID0gbmV3T3B0aW9uQ3JlYXRvcih7IGxhYmVsOiB0aGlzLmlucHV0VmFsdWUsIGxhYmVsS2V5OiB0aGlzLmxhYmVsS2V5LCB2YWx1ZUtleTogdGhpcy52YWx1ZUtleSB9KTtcblx0XHRcdHZhciBfaXNPcHRpb25VbmlxdWUgPSB0aGlzLmlzT3B0aW9uVW5pcXVlKHsgb3B0aW9uOiBvcHRpb24gfSk7XG5cblx0XHRcdC8vIERvbid0IGFkZCB0aGUgc2FtZSBvcHRpb24gdHdpY2UuXG5cdFx0XHRpZiAoX2lzT3B0aW9uVW5pcXVlKSB7XG5cdFx0XHRcdGlmIChvbk5ld09wdGlvbkNsaWNrKSB7XG5cdFx0XHRcdFx0b25OZXdPcHRpb25DbGljayhvcHRpb24pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG9wdGlvbnMudW5zaGlmdChvcHRpb24pO1xuXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3Quc2VsZWN0VmFsdWUob3B0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRmaWx0ZXJPcHRpb25zOiBmdW5jdGlvbiBmaWx0ZXJPcHRpb25zKCkge1xuXHRcdHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcblx0XHR2YXIgZmlsdGVyT3B0aW9ucyA9IF9wcm9wczIuZmlsdGVyT3B0aW9ucztcblx0XHR2YXIgaXNWYWxpZE5ld09wdGlvbiA9IF9wcm9wczIuaXNWYWxpZE5ld09wdGlvbjtcblx0XHR2YXIgb3B0aW9ucyA9IF9wcm9wczIub3B0aW9ucztcblx0XHR2YXIgcHJvbXB0VGV4dENyZWF0b3IgPSBfcHJvcHMyLnByb21wdFRleHRDcmVhdG9yO1xuXG5cdFx0Ly8gVFJJQ0tZIENoZWNrIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb25zIGFzIHdlbGwuXG5cdFx0Ly8gRG9uJ3QgZGlzcGxheSBhIGNyZWF0ZS1wcm9tcHQgZm9yIGEgdmFsdWUgdGhhdCdzIHNlbGVjdGVkLlxuXHRcdC8vIFRoaXMgY292ZXJzIGFzeW5jIGVkZ2UtY2FzZXMgd2hlcmUgYSBuZXdseS1jcmVhdGVkIE9wdGlvbiBpc24ndCB5ZXQgaW4gdGhlIGFzeW5jLWxvYWRlZCBhcnJheS5cblx0XHR2YXIgZXhjbHVkZU9wdGlvbnMgPSBhcmd1bWVudHNbMl0gfHwgW107XG5cblx0XHR2YXIgZmlsdGVyZWRPcHRpb25zID0gZmlsdGVyT3B0aW9ucy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykgfHwgW107XG5cblx0XHRpZiAoaXNWYWxpZE5ld09wdGlvbih7IGxhYmVsOiB0aGlzLmlucHV0VmFsdWUgfSkpIHtcblx0XHRcdHZhciBfbmV3T3B0aW9uQ3JlYXRvciA9IHRoaXMucHJvcHMubmV3T3B0aW9uQ3JlYXRvcjtcblxuXHRcdFx0dmFyIG9wdGlvbiA9IF9uZXdPcHRpb25DcmVhdG9yKHtcblx0XHRcdFx0bGFiZWw6IHRoaXMuaW5wdXRWYWx1ZSxcblx0XHRcdFx0bGFiZWxLZXk6IHRoaXMubGFiZWxLZXksXG5cdFx0XHRcdHZhbHVlS2V5OiB0aGlzLnZhbHVlS2V5XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gVFJJQ0tZIENvbXBhcmUgdG8gYWxsIG9wdGlvbnMgKG5vdCBqdXN0IGZpbHRlcmVkIG9wdGlvbnMpIGluIGNhc2Ugb3B0aW9uIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQpLlxuXHRcdFx0Ly8gRm9yIG11bHRpLXNlbGVjdHMsIHRoaXMgd291bGQgcmVtb3ZlIGl0IGZyb20gdGhlIGZpbHRlcmVkIGxpc3QuXG5cdFx0XHR2YXIgX2lzT3B0aW9uVW5pcXVlMiA9IHRoaXMuaXNPcHRpb25VbmlxdWUoe1xuXHRcdFx0XHRvcHRpb246IG9wdGlvbixcblx0XHRcdFx0b3B0aW9uczogZXhjbHVkZU9wdGlvbnMuY29uY2F0KGZpbHRlcmVkT3B0aW9ucylcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoX2lzT3B0aW9uVW5pcXVlMikge1xuXHRcdFx0XHR2YXIgX3Byb21wdCA9IHByb21wdFRleHRDcmVhdG9yKHRoaXMuaW5wdXRWYWx1ZSk7XG5cblx0XHRcdFx0dGhpcy5fY3JlYXRlUGxhY2Vob2xkZXJPcHRpb24gPSBfbmV3T3B0aW9uQ3JlYXRvcih7XG5cdFx0XHRcdFx0bGFiZWw6IF9wcm9tcHQsXG5cdFx0XHRcdFx0bGFiZWxLZXk6IHRoaXMubGFiZWxLZXksXG5cdFx0XHRcdFx0dmFsdWVLZXk6IHRoaXMudmFsdWVLZXlcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0ZmlsdGVyZWRPcHRpb25zLnVuc2hpZnQodGhpcy5fY3JlYXRlUGxhY2Vob2xkZXJPcHRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmaWx0ZXJlZE9wdGlvbnM7XG5cdH0sXG5cblx0aXNPcHRpb25VbmlxdWU6IGZ1bmN0aW9uIGlzT3B0aW9uVW5pcXVlKF9yZWYyKSB7XG5cdFx0dmFyIG9wdGlvbiA9IF9yZWYyLm9wdGlvbjtcblx0XHR2YXIgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG5cdFx0dmFyIGlzT3B0aW9uVW5pcXVlID0gdGhpcy5wcm9wcy5pc09wdGlvblVuaXF1ZTtcblxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHRoaXMuc2VsZWN0LmZpbHRlck9wdGlvbnMoKTtcblxuXHRcdHJldHVybiBpc09wdGlvblVuaXF1ZSh7XG5cdFx0XHRsYWJlbEtleTogdGhpcy5sYWJlbEtleSxcblx0XHRcdG9wdGlvbjogb3B0aW9uLFxuXHRcdFx0b3B0aW9uczogb3B0aW9ucyxcblx0XHRcdHZhbHVlS2V5OiB0aGlzLnZhbHVlS2V5XG5cdFx0fSk7XG5cdH0sXG5cblx0bWVudVJlbmRlcmVyOiBmdW5jdGlvbiBtZW51UmVuZGVyZXIocGFyYW1zKSB7XG5cdFx0dmFyIG1lbnVSZW5kZXJlciA9IHRoaXMucHJvcHMubWVudVJlbmRlcmVyO1xuXG5cdFx0cmV0dXJuIG1lbnVSZW5kZXJlcihfZXh0ZW5kcyh7fSwgcGFyYW1zLCB7XG5cdFx0XHRvblNlbGVjdDogdGhpcy5vbk9wdGlvblNlbGVjdCxcblx0XHRcdHNlbGVjdFZhbHVlOiB0aGlzLm9uT3B0aW9uU2VsZWN0XG5cdFx0fSkpO1xuXHR9LFxuXG5cdG9uSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoaW5wdXQpIHtcblx0XHR2YXIgb25JbnB1dENoYW5nZSA9IHRoaXMucHJvcHMub25JbnB1dENoYW5nZTtcblxuXHRcdGlmIChvbklucHV0Q2hhbmdlKSB7XG5cdFx0XHRvbklucHV0Q2hhbmdlKGlucHV0KTtcblx0XHR9XG5cblx0XHQvLyBUaGlzIHZhbHVlIG1heSBiZSBuZWVkZWQgaW4gYmV0d2VlbiBTZWxlY3QgbW91bnRzICh3aGVuIHRoaXMuc2VsZWN0IGlzIG51bGwpXG5cdFx0dGhpcy5pbnB1dFZhbHVlID0gaW5wdXQ7XG5cdH0sXG5cblx0b25JbnB1dEtleURvd246IGZ1bmN0aW9uIG9uSW5wdXRLZXlEb3duKGV2ZW50KSB7XG5cdFx0dmFyIF9wcm9wczMgPSB0aGlzLnByb3BzO1xuXHRcdHZhciBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24gPSBfcHJvcHMzLnNob3VsZEtleURvd25FdmVudENyZWF0ZU5ld09wdGlvbjtcblx0XHR2YXIgb25JbnB1dEtleURvd24gPSBfcHJvcHMzLm9uSW5wdXRLZXlEb3duO1xuXG5cdFx0dmFyIGZvY3VzZWRPcHRpb24gPSB0aGlzLnNlbGVjdC5nZXRGb2N1c2VkT3B0aW9uKCk7XG5cblx0XHRpZiAoZm9jdXNlZE9wdGlvbiAmJiBmb2N1c2VkT3B0aW9uID09PSB0aGlzLl9jcmVhdGVQbGFjZWhvbGRlck9wdGlvbiAmJiBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24oeyBrZXlDb2RlOiBldmVudC5rZXlDb2RlIH0pKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZU5ld09wdGlvbigpO1xuXG5cdFx0XHQvLyBQcmV2ZW50IGRlY29yYXRlZCBTZWxlY3QgZnJvbSBkb2luZyBhbnl0aGluZyBhZGRpdGlvbmFsIHdpdGggdGhpcyBrZXlEb3duIGV2ZW50XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0gZWxzZSBpZiAob25JbnB1dEtleURvd24pIHtcblx0XHRcdG9uSW5wdXRLZXlEb3duKGV2ZW50KTtcblx0XHR9XG5cdH0sXG5cblx0b25PcHRpb25TZWxlY3Q6IGZ1bmN0aW9uIG9uT3B0aW9uU2VsZWN0KG9wdGlvbiwgZXZlbnQpIHtcblx0XHRpZiAob3B0aW9uID09PSB0aGlzLl9jcmVhdGVQbGFjZWhvbGRlck9wdGlvbikge1xuXHRcdFx0dGhpcy5jcmVhdGVOZXdPcHRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZWxlY3Quc2VsZWN0VmFsdWUob3B0aW9uKTtcblx0XHR9XG5cdH0sXG5cblx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblxuXHRcdHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcztcblx0XHR2YXIgbmV3T3B0aW9uQ3JlYXRvciA9IF9wcm9wczQubmV3T3B0aW9uQ3JlYXRvcjtcblx0XHR2YXIgc2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uID0gX3Byb3BzNC5zaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb247XG5cblx0XHR2YXIgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczQsIFsnbmV3T3B0aW9uQ3JlYXRvcicsICdzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24nXSk7XG5cblx0XHR2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG5cdFx0Ly8gV2UgY2FuJ3QgdXNlIGRlc3RydWN0dXJpbmcgZGVmYXVsdCB2YWx1ZXMgdG8gc2V0IHRoZSBjaGlsZHJlbixcblx0XHQvLyBiZWNhdXNlIGl0IHdvbid0IGFwcGx5IHdvcmsgaWYgYGNoaWxkcmVuYCBpcyBudWxsLiBBIGZhbHN5IGNoZWNrIGlzXG5cdFx0Ly8gbW9yZSByZWxpYWJsZSBpbiByZWFsIHdvcmxkIHVzZS1jYXNlcy5cblx0XHRpZiAoIWNoaWxkcmVuKSB7XG5cdFx0XHRjaGlsZHJlbiA9IGRlZmF1bHRDaGlsZHJlbjtcblx0XHR9XG5cblx0XHR2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7XG5cdFx0XHRhbGxvd0NyZWF0ZTogdHJ1ZSxcblx0XHRcdGZpbHRlck9wdGlvbnM6IHRoaXMuZmlsdGVyT3B0aW9ucyxcblx0XHRcdG1lbnVSZW5kZXJlcjogdGhpcy5tZW51UmVuZGVyZXIsXG5cdFx0XHRvbklucHV0Q2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2UsXG5cdFx0XHRvbklucHV0S2V5RG93bjogdGhpcy5vbklucHV0S2V5RG93bixcblx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcblx0XHRcdFx0X3RoaXMuc2VsZWN0ID0gX3JlZjtcblxuXHRcdFx0XHQvLyBUaGVzZSB2YWx1ZXMgbWF5IGJlIG5lZWRlZCBpbiBiZXR3ZWVuIFNlbGVjdCBtb3VudHMgKHdoZW4gdGhpcy5zZWxlY3QgaXMgbnVsbClcblx0XHRcdFx0aWYgKF9yZWYpIHtcblx0XHRcdFx0XHRfdGhpcy5sYWJlbEtleSA9IF9yZWYucHJvcHMubGFiZWxLZXk7XG5cdFx0XHRcdFx0X3RoaXMudmFsdWVLZXkgPSBfcmVmLnByb3BzLnZhbHVlS2V5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY2hpbGRyZW4ocHJvcHMpO1xuXHR9XG59KTtcblxuZnVuY3Rpb24gZGVmYXVsdENoaWxkcmVuKHByb3BzKSB7XG5cdHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfU2VsZWN0MlsnZGVmYXVsdCddLCBwcm9wcyk7XG59O1xuXG5mdW5jdGlvbiBpc09wdGlvblVuaXF1ZShfcmVmMykge1xuXHR2YXIgb3B0aW9uID0gX3JlZjMub3B0aW9uO1xuXHR2YXIgb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnM7XG5cdHZhciBsYWJlbEtleSA9IF9yZWYzLmxhYmVsS2V5O1xuXHR2YXIgdmFsdWVLZXkgPSBfcmVmMy52YWx1ZUtleTtcblxuXHRyZXR1cm4gb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGV4aXN0aW5nT3B0aW9uKSB7XG5cdFx0cmV0dXJuIGV4aXN0aW5nT3B0aW9uW2xhYmVsS2V5XSA9PT0gb3B0aW9uW2xhYmVsS2V5XSB8fCBleGlzdGluZ09wdGlvblt2YWx1ZUtleV0gPT09IG9wdGlvblt2YWx1ZUtleV07XG5cdH0pLmxlbmd0aCA9PT0gMDtcbn07XG5cbmZ1bmN0aW9uIGlzVmFsaWROZXdPcHRpb24oX3JlZjQpIHtcblx0dmFyIGxhYmVsID0gX3JlZjQubGFiZWw7XG5cblx0cmV0dXJuICEhbGFiZWw7XG59O1xuXG5mdW5jdGlvbiBuZXdPcHRpb25DcmVhdG9yKF9yZWY1KSB7XG5cdHZhciBsYWJlbCA9IF9yZWY1LmxhYmVsO1xuXHR2YXIgbGFiZWxLZXkgPSBfcmVmNS5sYWJlbEtleTtcblx0dmFyIHZhbHVlS2V5ID0gX3JlZjUudmFsdWVLZXk7XG5cblx0dmFyIG9wdGlvbiA9IHt9O1xuXHRvcHRpb25bdmFsdWVLZXldID0gbGFiZWw7XG5cdG9wdGlvbltsYWJlbEtleV0gPSBsYWJlbDtcblx0b3B0aW9uLmNsYXNzTmFtZSA9ICdTZWxlY3QtY3JlYXRlLW9wdGlvbi1wbGFjZWhvbGRlcic7XG5cdHJldHVybiBvcHRpb247XG59O1xuXG5mdW5jdGlvbiBwcm9tcHRUZXh0Q3JlYXRvcihsYWJlbCkge1xuXHRyZXR1cm4gJ0NyZWF0ZSBvcHRpb24gXCInICsgbGFiZWwgKyAnXCInO1xufVxuXG5mdW5jdGlvbiBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24oX3JlZjYpIHtcblx0dmFyIGtleUNvZGUgPSBfcmVmNi5rZXlDb2RlO1xuXG5cdHN3aXRjaCAoa2V5Q29kZSkge1xuXHRcdGNhc2UgOTogLy8gVEFCXG5cdFx0Y2FzZSAxMzogLy8gRU5URVJcblx0XHRjYXNlIDE4ODpcblx0XHRcdC8vIENPTU1BXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ3JlYXRhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zZWxlY3QvbGliL0NyZWF0YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gODQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMCIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgT3B0aW9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdPcHRpb24nLFxuXG5cdHByb3BUeXBlczoge1xuXHRcdGNoaWxkcmVuOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG5cdFx0Y2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgLy8gY2xhc3NOYW1lIChiYXNlZCBvbiBtb3VzZSBwb3NpdGlvbilcblx0XHRpbnN0YW5jZVByZWZpeDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCwgLy8gdW5pcXVlIHByZWZpeCBmb3IgdGhlIGlkcyAodXNlZCBmb3IgYXJpYSlcblx0XHRpc0Rpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIC8vIHRoZSBvcHRpb24gaXMgZGlzYWJsZWRcblx0XHRpc0ZvY3VzZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgLy8gdGhlIG9wdGlvbiBpcyBmb2N1c2VkXG5cdFx0aXNTZWxlY3RlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCAvLyB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkXG5cdFx0b25Gb2N1czogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLCAvLyBtZXRob2QgdG8gaGFuZGxlIG1vdXNlRW50ZXIgb24gb3B0aW9uIGVsZW1lbnRcblx0XHRvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLCAvLyBtZXRob2QgdG8gaGFuZGxlIGNsaWNrIG9uIG9wdGlvbiBlbGVtZW50XG5cdFx0b25VbmZvY3VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsIC8vIG1ldGhvZCB0byBoYW5kbGUgbW91c2VMZWF2ZSBvbiBvcHRpb24gZWxlbWVudFxuXHRcdG9wdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gb2JqZWN0IHRoYXQgaXMgYmFzZSBmb3IgdGhhdCBvcHRpb25cblx0XHRvcHRpb25JbmRleDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIgfSxcblx0Ly8gaW5kZXggb2YgdGhlIG9wdGlvbiwgdXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgaWRzIGZvciBhcmlhXG5cdGJsb2NrRXZlbnQ6IGZ1bmN0aW9uIGJsb2NrRXZlbnQoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmIChldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ0EnIHx8ICEoJ2hyZWYnIGluIGV2ZW50LnRhcmdldCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGV2ZW50LnRhcmdldC50YXJnZXQpIHtcblx0XHRcdHdpbmRvdy5vcGVuKGV2ZW50LnRhcmdldC5ocmVmLCBldmVudC50YXJnZXQudGFyZ2V0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBldmVudC50YXJnZXQuaHJlZjtcblx0XHR9XG5cdH0sXG5cblx0aGFuZGxlTW91c2VEb3duOiBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMucHJvcHMub25TZWxlY3QodGhpcy5wcm9wcy5vcHRpb24sIGV2ZW50KTtcblx0fSxcblxuXHRoYW5kbGVNb3VzZUVudGVyOiBmdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyKGV2ZW50KSB7XG5cdFx0dGhpcy5vbkZvY3VzKGV2ZW50KTtcblx0fSxcblxuXHRoYW5kbGVNb3VzZU1vdmU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShldmVudCkge1xuXHRcdHRoaXMub25Gb2N1cyhldmVudCk7XG5cdH0sXG5cblx0aGFuZGxlVG91Y2hFbmQ6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKGV2ZW50KSB7XG5cdFx0Ly8gQ2hlY2sgaWYgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZCwgSW4gdGhpcyBjYXNlXG5cdFx0Ly8gd2UgZG9uJ3Qgd2FudCB0byBmaXJlIHRoZSBjbGljayBldmVudCAoYmVjYXVzZSB0aGUgdXNlciBvbmx5IHdhbnRzIHRvIHNjcm9sbClcblx0XHRpZiAodGhpcy5kcmFnZ2luZykgcmV0dXJuO1xuXG5cdFx0dGhpcy5oYW5kbGVNb3VzZURvd24oZXZlbnQpO1xuXHR9LFxuXG5cdGhhbmRsZVRvdWNoTW92ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0Ly8gU2V0IGEgZmxhZyB0aGF0IHRoZSB2aWV3IGlzIGJlaW5nIGRyYWdnZWRcblx0XHR0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcblx0fSxcblxuXHRoYW5kbGVUb3VjaFN0YXJ0OiBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGV2ZW50KSB7XG5cdFx0Ly8gU2V0IGEgZmxhZyB0aGF0IHRoZSB2aWV3IGlzIG5vdCBiZWluZyBkcmFnZ2VkXG5cdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHR9LFxuXG5cdG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMoZXZlbnQpIHtcblx0XHRpZiAoIXRoaXMucHJvcHMuaXNGb2N1c2VkKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uRm9jdXModGhpcy5wcm9wcy5vcHRpb24sIGV2ZW50KTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuXHRcdHZhciBvcHRpb24gPSBfcHJvcHMub3B0aW9uO1xuXHRcdHZhciBpbnN0YW5jZVByZWZpeCA9IF9wcm9wcy5pbnN0YW5jZVByZWZpeDtcblx0XHR2YXIgb3B0aW9uSW5kZXggPSBfcHJvcHMub3B0aW9uSW5kZXg7XG5cblx0XHR2YXIgY2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgb3B0aW9uLmNsYXNzTmFtZSk7XG5cblx0XHRyZXR1cm4gb3B0aW9uLmRpc2FibGVkID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG5cdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLmJsb2NrRXZlbnQsXG5cdFx0XHRcdG9uQ2xpY2s6IHRoaXMuYmxvY2tFdmVudCB9LFxuXHRcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHRcdCkgOiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0c3R5bGU6IG9wdGlvbi5zdHlsZSxcblx0XHRcdFx0cm9sZTogJ29wdGlvbicsXG5cdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93bixcblx0XHRcdFx0b25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG5cdFx0XHRcdG9uTW91c2VNb3ZlOiB0aGlzLmhhbmRsZU1vdXNlTW92ZSxcblx0XHRcdFx0b25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG5cdFx0XHRcdG9uVG91Y2hNb3ZlOiB0aGlzLmhhbmRsZVRvdWNoTW92ZSxcblx0XHRcdFx0b25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZCxcblx0XHRcdFx0aWQ6IGluc3RhbmNlUHJlZml4ICsgJy1vcHRpb24tJyArIG9wdGlvbkluZGV4LFxuXHRcdFx0XHR0aXRsZTogb3B0aW9uLnRpdGxlIH0sXG5cdFx0XHR0aGlzLnByb3BzLmNoaWxkcmVuXG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zZWxlY3QvbGliL09wdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gODQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMCIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgVmFsdWUgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuXG5cdGRpc3BsYXlOYW1lOiAnVmFsdWUnLFxuXG5cdHByb3BUeXBlczoge1xuXHRcdGNoaWxkcmVuOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG5cdFx0ZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgLy8gZGlzYWJsZWQgcHJvcCBwYXNzZWQgdG8gUmVhY3RTZWxlY3Rcblx0XHRpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsIC8vIFVuaXF1ZSBpZCBmb3IgdGhlIHZhbHVlIC0gdXNlZCBmb3IgYXJpYVxuXHRcdG9uQ2xpY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYywgLy8gbWV0aG9kIHRvIGhhbmRsZSBjbGljayBvbiB2YWx1ZSBsYWJlbFxuXHRcdG9uUmVtb3ZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsIC8vIG1ldGhvZCB0byBoYW5kbGUgcmVtb3ZhbCBvZiB0aGUgdmFsdWVcblx0XHR2YWx1ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCB9LFxuXG5cdC8vIHRoZSBvcHRpb24gb2JqZWN0IGZvciB0aGlzIHZhbHVlXG5cdGhhbmRsZU1vdXNlRG93bjogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLnZhbHVlLCBldmVudCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICh0aGlzLnByb3BzLnZhbHVlLmhyZWYpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fSxcblxuXHRvblJlbW92ZTogZnVuY3Rpb24gb25SZW1vdmUoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMucHJvcHMub25SZW1vdmUodGhpcy5wcm9wcy52YWx1ZSk7XG5cdH0sXG5cblx0aGFuZGxlVG91Y2hFbmRSZW1vdmU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kUmVtb3ZlKGV2ZW50KSB7XG5cdFx0Ly8gQ2hlY2sgaWYgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZCwgSW4gdGhpcyBjYXNlXG5cdFx0Ly8gd2UgZG9uJ3Qgd2FudCB0byBmaXJlIHRoZSBjbGljayBldmVudCAoYmVjYXVzZSB0aGUgdXNlciBvbmx5IHdhbnRzIHRvIHNjcm9sbClcblx0XHRpZiAodGhpcy5kcmFnZ2luZykgcmV0dXJuO1xuXG5cdFx0Ly8gRmlyZSB0aGUgbW91c2UgZXZlbnRzXG5cdFx0dGhpcy5vblJlbW92ZShldmVudCk7XG5cdH0sXG5cblx0aGFuZGxlVG91Y2hNb3ZlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZXZlbnQpIHtcblx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZFxuXHRcdHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuXHR9LFxuXG5cdGhhbmRsZVRvdWNoU3RhcnQ6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoZXZlbnQpIHtcblx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgbm90IGJlaW5nIGRyYWdnZWRcblx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdH0sXG5cblx0cmVuZGVyUmVtb3ZlSWNvbjogZnVuY3Rpb24gcmVuZGVyUmVtb3ZlSWNvbigpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCAhdGhpcy5wcm9wcy5vblJlbW92ZSkgcmV0dXJuO1xuXHRcdHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0XHRcdCdzcGFuJyxcblx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LXZhbHVlLWljb24nLFxuXHRcdFx0XHQnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG5cdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLm9uUmVtb3ZlLFxuXHRcdFx0XHRvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kUmVtb3ZlLFxuXHRcdFx0XHRvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcblx0XHRcdFx0b25Ub3VjaE1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlIH0sXG5cdFx0XHQnw5cnXG5cdFx0KTtcblx0fSxcblxuXHRyZW5kZXJMYWJlbDogZnVuY3Rpb24gcmVuZGVyTGFiZWwoKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9ICdTZWxlY3QtdmFsdWUtbGFiZWwnO1xuXHRcdHJldHVybiB0aGlzLnByb3BzLm9uQ2xpY2sgfHwgdGhpcy5wcm9wcy52YWx1ZS5ocmVmID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnYScsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBocmVmOiB0aGlzLnByb3BzLnZhbHVlLmhyZWYsIHRhcmdldDogdGhpcy5wcm9wcy52YWx1ZS50YXJnZXQsIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93biwgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVNb3VzZURvd24gfSxcblx0XHRcdHRoaXMucHJvcHMuY2hpbGRyZW5cblx0XHQpIDogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnc3BhbicsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCByb2xlOiAnb3B0aW9uJywgJ2FyaWEtc2VsZWN0ZWQnOiAndHJ1ZScsIGlkOiB0aGlzLnByb3BzLmlkIH0sXG5cdFx0XHR0aGlzLnByb3BzLmNoaWxkcmVuXG5cdFx0KTtcblx0fSxcblxuXHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRyZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKCdTZWxlY3QtdmFsdWUnLCB0aGlzLnByb3BzLnZhbHVlLmNsYXNzTmFtZSksXG5cdFx0XHRcdHN0eWxlOiB0aGlzLnByb3BzLnZhbHVlLnN0eWxlLFxuXHRcdFx0XHR0aXRsZTogdGhpcy5wcm9wcy52YWx1ZS50aXRsZVxuXHRcdFx0fSxcblx0XHRcdHRoaXMucmVuZGVyUmVtb3ZlSWNvbigpLFxuXHRcdFx0dGhpcy5yZW5kZXJMYWJlbCgpXG5cdFx0KTtcblx0fVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWYWx1ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtc2VsZWN0L2xpYi9WYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gODQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBhcnJvd1JlbmRlcmVyO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBhcnJvd1JlbmRlcmVyKF9yZWYpIHtcblx0dmFyIG9uTW91c2VEb3duID0gX3JlZi5vbk1vdXNlRG93bjtcblxuXHRyZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuXHRcdGNsYXNzTmFtZTogXCJTZWxlY3QtYXJyb3dcIixcblx0XHRvbk1vdXNlRG93bjogb25Nb3VzZURvd25cblx0fSk7XG59XG5cbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXNlbGVjdC9saWIvdXRpbHMvZGVmYXVsdEFycm93UmVuZGVyZXIuanNcbi8vIG1vZHVsZSBpZCA9IDg0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY2xlYXJSZW5kZXJlcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIGNsZWFyUmVuZGVyZXIoKSB7XG5cdHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcblx0XHRjbGFzc05hbWU6ICdTZWxlY3QtY2xlYXInLFxuXHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogJyZ0aW1lczsnIH1cblx0fSk7XG59XG5cbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1zZWxlY3QvbGliL3V0aWxzL2RlZmF1bHRDbGVhclJlbmRlcmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4NTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDEwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RTZWxlY3QgPSByZXF1aXJlKCdyZWFjdC1zZWxlY3QnKTtcblxudmFyIF9yZWFjdFNlbGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFNlbGVjdCk7XG5cbnZhciBfQXV0b1NpemVyID0gcmVxdWlyZSgncmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9BdXRvU2l6ZXInKTtcblxudmFyIF9BdXRvU2l6ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXV0b1NpemVyKTtcblxudmFyIF9MaXN0ID0gcmVxdWlyZSgncmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9MaXN0Jyk7XG5cbnZhciBfTGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vLyBJbXBvcnQgZGlyZWN0bHkgdG8gYXZvaWQgV2VicGFjayBidW5kbGluZyB0aGUgcGFydHMgb2YgcmVhY3QtdmlydHVhbGl6ZWQgdGhhdCB3ZSBhcmUgbm90IHVzaW5nXG5cblxudmFyIFZpcnR1YWxpemVkU2VsZWN0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFZpcnR1YWxpemVkU2VsZWN0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBWaXJ0dWFsaXplZFNlbGVjdChwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWaXJ0dWFsaXplZFNlbGVjdCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVmlydHVhbGl6ZWRTZWxlY3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihWaXJ0dWFsaXplZFNlbGVjdCkpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLl9yZW5kZXJNZW51ID0gX3RoaXMuX3JlbmRlck1lbnUuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuX29wdGlvblJlbmRlcmVyID0gX3RoaXMuX29wdGlvblJlbmRlcmVyLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLl9zZXRMaXN0UmVmID0gX3RoaXMuX3NldExpc3RSZWYuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuX3NldFNlbGVjdFJlZiA9IF90aGlzLl9zZXRTZWxlY3RSZWYuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqIFNlZSBMaXN0I3JlY29tcHV0ZVJvd0hlaWdodHMgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhWaXJ0dWFsaXplZFNlbGVjdCwgW3tcbiAgICBrZXk6ICdyZWNvbXB1dGVPcHRpb25IZWlnaHRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVjb21wdXRlT3B0aW9uSGVpZ2h0cygpIHtcbiAgICAgIHZhciBpbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcblxuICAgICAgaWYgKHRoaXMuX2xpc3RSZWYpIHtcbiAgICAgICAgdGhpcy5fbGlzdFJlZi5yZWNvbXB1dGVSb3dIZWlnaHRzKGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogU2VlIFNlbGVjdCNmb2N1cyAoaW4gcmVhY3Qtc2VsZWN0KSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdmb2N1cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdFJlZikge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0UmVmLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIFNlbGVjdENvbXBvbmVudCA9IHRoaXMuX2dldFNlbGVjdENvbXBvbmVudCgpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICByZWY6IHRoaXMuX3NldFNlbGVjdFJlZixcbiAgICAgICAgbWVudVJlbmRlcmVyOiB0aGlzLl9yZW5kZXJNZW51LFxuICAgICAgICBtZW51U3R5bGU6IHsgb3ZlcmZsb3c6ICdoaWRkZW4nIH1cbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0plZFdhdHNvbi9yZWFjdC1zZWxlY3QvI2VmZmVjaWVudGx5LXJlbmRlcmluZy1sYXJnZS1saXN0cy13aXRoLXdpbmRvd2luZ1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfcmVuZGVyTWVudScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW5kZXJNZW51KF9yZWYpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZm9jdXNlZE9wdGlvbiA9IF9yZWYuZm9jdXNlZE9wdGlvbjtcbiAgICAgIHZhciBmb2N1c09wdGlvbiA9IF9yZWYuZm9jdXNPcHRpb247XG4gICAgICB2YXIgbGFiZWxLZXkgPSBfcmVmLmxhYmVsS2V5O1xuICAgICAgdmFyIG9uU2VsZWN0ID0gX3JlZi5vblNlbGVjdDtcbiAgICAgIHZhciBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gX3JlZi5zZWxlY3RWYWx1ZTtcbiAgICAgIHZhciB2YWx1ZUFycmF5ID0gX3JlZi52YWx1ZUFycmF5O1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgbGlzdFByb3BzID0gX3Byb3BzLmxpc3RQcm9wcztcbiAgICAgIHZhciBvcHRpb25SZW5kZXJlciA9IF9wcm9wcy5vcHRpb25SZW5kZXJlcjtcblxuICAgICAgdmFyIGZvY3VzZWRPcHRpb25JbmRleCA9IG9wdGlvbnMuaW5kZXhPZihmb2N1c2VkT3B0aW9uKTtcbiAgICAgIHZhciBoZWlnaHQgPSB0aGlzLl9jYWxjdWxhdGVMaXN0SGVpZ2h0KHsgb3B0aW9uczogb3B0aW9ucyB9KTtcbiAgICAgIHZhciBpbm5lclJvd1JlbmRlcmVyID0gb3B0aW9uUmVuZGVyZXIgfHwgdGhpcy5fb3B0aW9uUmVuZGVyZXI7XG5cbiAgICAgIC8vIHJlYWN0LXNlbGVjdCAxLjAuMC1yYzIgcGFzc2VzIGR1cGxpY2F0ZSBgb25TZWxlY3RgIGFuZCBgc2VsZWN0VmFsdWVgIHByb3BzIHRvIGBtZW51UmVuZGVyZXJgXG4gICAgICAvLyBUaGUgYENyZWF0YWJsZWAgSE9DIG9ubHkgb3ZlcnJpZGVzIGBvblNlbGVjdGAgd2hpY2ggYnJlYWtzIGFuIGVkZ2UtY2FzZVxuICAgICAgLy8gSW4gb3JkZXIgdG8gc3VwcG9ydCBjcmVhdGluZyBpdGVtcyB2aWEgY2xpY2tpbmcgb24gdGhlIHBsYWNlaG9sZGVyIG9wdGlvbixcbiAgICAgIC8vIFdlIG5lZWQgdG8gZW5zdXJlIHRoYXQgdGhlIHNwZWNpZmllZCBgb25TZWxlY3RgIGhhbmRsZSBpcyB0aGUgb25lIHdlIHVzZS5cbiAgICAgIC8vIFNlZSBpc3N1ZSAjMzNcblxuICAgICAgZnVuY3Rpb24gd3JhcHBlZFJvd1JlbmRlcmVyKF9yZWYyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IF9yZWYyLmluZGV4O1xuICAgICAgICB2YXIga2V5ID0gX3JlZjIua2V5O1xuICAgICAgICB2YXIgc3R5bGUgPSBfcmVmMi5zdHlsZTtcblxuICAgICAgICB2YXIgb3B0aW9uID0gb3B0aW9uc1tpbmRleF07XG5cbiAgICAgICAgcmV0dXJuIGlubmVyUm93UmVuZGVyZXIoe1xuICAgICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbkluZGV4OiBmb2N1c2VkT3B0aW9uSW5kZXgsXG4gICAgICAgICAgZm9jdXNPcHRpb246IGZvY3VzT3B0aW9uLFxuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGxhYmVsS2V5OiBsYWJlbEtleSxcbiAgICAgICAgICBvblNlbGVjdDogb25TZWxlY3QsXG4gICAgICAgICAgb3B0aW9uOiBvcHRpb24sXG4gICAgICAgICAgb3B0aW9uSW5kZXg6IGluZGV4LFxuICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgc2VsZWN0VmFsdWU6IG9uU2VsZWN0LFxuICAgICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgICB2YWx1ZUFycmF5OiB2YWx1ZUFycmF5XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9BdXRvU2l6ZXIyLmRlZmF1bHQsXG4gICAgICAgIHsgZGlzYWJsZUhlaWdodDogdHJ1ZSB9LFxuICAgICAgICBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgICB2YXIgd2lkdGggPSBfcmVmMy53aWR0aDtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0xpc3QyLmRlZmF1bHQsIF9leHRlbmRzKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ1ZpcnR1YWxTZWxlY3RHcmlkJyxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgcmVmOiBfdGhpczIuX3NldExpc3RSZWYsXG4gICAgICAgICAgICByb3dDb3VudDogb3B0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgICByb3dIZWlnaHQ6IGZ1bmN0aW9uIHJvd0hlaWdodChfcmVmNCkge1xuICAgICAgICAgICAgICB2YXIgaW5kZXggPSBfcmVmNC5pbmRleDtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5fZ2V0T3B0aW9uSGVpZ2h0KHtcbiAgICAgICAgICAgICAgICBvcHRpb246IG9wdGlvbnNbaW5kZXhdXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvd1JlbmRlcmVyOiB3cmFwcGVkUm93UmVuZGVyZXIsXG4gICAgICAgICAgICBzY3JvbGxUb0luZGV4OiBmb2N1c2VkT3B0aW9uSW5kZXgsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhcbiAgICAgICAgICB9LCBsaXN0UHJvcHMpKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfY2FsY3VsYXRlTGlzdEhlaWdodCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jYWxjdWxhdGVMaXN0SGVpZ2h0KF9yZWY1KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IF9yZWY1Lm9wdGlvbnM7XG4gICAgICB2YXIgbWF4SGVpZ2h0ID0gdGhpcy5wcm9wcy5tYXhIZWlnaHQ7XG5cblxuICAgICAgdmFyIGhlaWdodCA9IDA7XG5cbiAgICAgIGZvciAodmFyIG9wdGlvbkluZGV4ID0gMDsgb3B0aW9uSW5kZXggPCBvcHRpb25zLmxlbmd0aDsgb3B0aW9uSW5kZXgrKykge1xuICAgICAgICB2YXIgb3B0aW9uID0gb3B0aW9uc1tvcHRpb25JbmRleF07XG5cbiAgICAgICAgaGVpZ2h0ICs9IHRoaXMuX2dldE9wdGlvbkhlaWdodCh7IG9wdGlvbjogb3B0aW9uIH0pO1xuXG4gICAgICAgIGlmIChoZWlnaHQgPiBtYXhIZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm4gbWF4SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2dldE9wdGlvbkhlaWdodCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRPcHRpb25IZWlnaHQoX3JlZjYpIHtcbiAgICAgIHZhciBvcHRpb24gPSBfcmVmNi5vcHRpb247XG4gICAgICB2YXIgb3B0aW9uSGVpZ2h0ID0gdGhpcy5wcm9wcy5vcHRpb25IZWlnaHQ7XG5cblxuICAgICAgcmV0dXJuIG9wdGlvbkhlaWdodCBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gb3B0aW9uSGVpZ2h0KHsgb3B0aW9uOiBvcHRpb24gfSkgOiBvcHRpb25IZWlnaHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2dldFNlbGVjdENvbXBvbmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRTZWxlY3RDb21wb25lbnQoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgYXN5bmMgPSBfcHJvcHMyLmFzeW5jO1xuICAgICAgdmFyIHNlbGVjdENvbXBvbmVudCA9IF9wcm9wczIuc2VsZWN0Q29tcG9uZW50O1xuXG5cbiAgICAgIGlmIChzZWxlY3RDb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdENvbXBvbmVudDtcbiAgICAgIH0gZWxzZSBpZiAoYXN5bmMpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdFNlbGVjdDIuZGVmYXVsdC5Bc3luYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBfcmVhY3RTZWxlY3QyLmRlZmF1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX29wdGlvblJlbmRlcmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29wdGlvblJlbmRlcmVyKF9yZWY3KSB7XG4gICAgICB2YXIgZm9jdXNlZE9wdGlvbiA9IF9yZWY3LmZvY3VzZWRPcHRpb247XG4gICAgICB2YXIgZm9jdXNPcHRpb24gPSBfcmVmNy5mb2N1c09wdGlvbjtcbiAgICAgIHZhciBrZXkgPSBfcmVmNy5rZXk7XG4gICAgICB2YXIgbGFiZWxLZXkgPSBfcmVmNy5sYWJlbEtleTtcbiAgICAgIHZhciBvcHRpb24gPSBfcmVmNy5vcHRpb247XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfcmVmNy5zZWxlY3RWYWx1ZTtcbiAgICAgIHZhciBzdHlsZSA9IF9yZWY3LnN0eWxlO1xuICAgICAgdmFyIHZhbHVlQXJyYXkgPSBfcmVmNy52YWx1ZUFycmF5O1xuXG4gICAgICB2YXIgY2xhc3NOYW1lID0gWydWaXJ0dWFsaXplZFNlbGVjdE9wdGlvbiddO1xuXG4gICAgICBpZiAob3B0aW9uID09PSBmb2N1c2VkT3B0aW9uKSB7XG4gICAgICAgIGNsYXNzTmFtZS5wdXNoKCdWaXJ0dWFsaXplZFNlbGVjdEZvY3VzZWRPcHRpb24nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICBjbGFzc05hbWUucHVzaCgnVmlydHVhbGl6ZWRTZWxlY3REaXNhYmxlZE9wdGlvbicpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVBcnJheSAmJiB2YWx1ZUFycmF5LmluZGV4T2Yob3B0aW9uKSA+PSAwKSB7XG4gICAgICAgIGNsYXNzTmFtZS5wdXNoKCdWaXJ0dWFsaXplZFNlbGVjdFNlbGVjdGVkT3B0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBldmVudHMgPSBvcHRpb24uZGlzYWJsZWQgPyB7fSA6IHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZWN0VmFsdWUob3B0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Nb3VzZU92ZXI6IGZ1bmN0aW9uIG9uTW91c2VPdmVyKCkge1xuICAgICAgICAgIHJldHVybiBmb2N1c09wdGlvbihvcHRpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUuam9pbignICcpLFxuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgICB9LCBldmVudHMpLFxuICAgICAgICBvcHRpb25bbGFiZWxLZXldXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19zZXRMaXN0UmVmJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NldExpc3RSZWYocmVmKSB7XG4gICAgICB0aGlzLl9saXN0UmVmID0gcmVmO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19zZXRTZWxlY3RSZWYnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0U2VsZWN0UmVmKHJlZikge1xuICAgICAgdGhpcy5fc2VsZWN0UmVmID0gcmVmO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWaXJ0dWFsaXplZFNlbGVjdDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblZpcnR1YWxpemVkU2VsZWN0LnByb3BUeXBlcyA9IHtcbiAgYXN5bmM6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgbGlzdFByb3BzOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgbWF4SGVpZ2h0OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvcHRpb25IZWlnaHQ6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QuUHJvcFR5cGVzLm51bWJlciwgX3JlYWN0LlByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcbiAgb3B0aW9uUmVuZGVyZXI6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0Q29tcG9uZW50OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5WaXJ0dWFsaXplZFNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzeW5jOiBmYWxzZSxcbiAgbWF4SGVpZ2h0OiAyMDAsXG4gIG9wdGlvbkhlaWdodDogMzVcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBWaXJ0dWFsaXplZFNlbGVjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtdmlydHVhbGl6ZWQtc2VsZWN0L2Rpc3QvY29tbW9uanMvVmlydHVhbGl6ZWRTZWxlY3QvVmlydHVhbGl6ZWRTZWxlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDg1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfVmlydHVhbGl6ZWRTZWxlY3QgPSByZXF1aXJlKCcuL1ZpcnR1YWxpemVkU2VsZWN0Jyk7XG5cbnZhciBfVmlydHVhbGl6ZWRTZWxlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmlydHVhbGl6ZWRTZWxlY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfVmlydHVhbGl6ZWRTZWxlY3QyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXZpcnR1YWxpemVkLXNlbGVjdC9kaXN0L2NvbW1vbmpzL1ZpcnR1YWxpemVkU2VsZWN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDEwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1ZpcnR1YWxpemVkU2VsZWN0ID0gcmVxdWlyZSgnLi9WaXJ0dWFsaXplZFNlbGVjdCcpO1xuXG52YXIgX1ZpcnR1YWxpemVkU2VsZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZpcnR1YWxpemVkU2VsZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1ZpcnR1YWxpemVkU2VsZWN0Mi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC12aXJ0dWFsaXplZC1zZWxlY3QvZGlzdC9jb21tb25qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0QWRkb25zU2hhbGxvd0NvbXBhcmUgPSByZXF1aXJlKCdyZWFjdC1hZGRvbnMtc2hhbGxvdy1jb21wYXJlJyk7XG5cbnZhciBfcmVhY3RBZGRvbnNTaGFsbG93Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEFkZG9uc1NoYWxsb3dDb21wYXJlKTtcblxudmFyIF9kZXRlY3RFbGVtZW50UmVzaXplID0gcmVxdWlyZSgnLi4vdmVuZG9yL2RldGVjdEVsZW1lbnRSZXNpemUnKTtcblxudmFyIF9kZXRlY3RFbGVtZW50UmVzaXplMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RldGVjdEVsZW1lbnRSZXNpemUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogRGVjb3JhdG9yIGNvbXBvbmVudCB0aGF0IGF1dG9tYXRpY2FsbHkgYWRqdXN0cyB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiBhIHNpbmdsZSBjaGlsZC5cbiAqIENoaWxkIGNvbXBvbmVudCBzaG91bGQgbm90IGJlIGRlY2xhcmVkIGFzIGEgY2hpbGQgYnV0IHNob3VsZCByYXRoZXIgYmUgc3BlY2lmaWVkIGJ5IGEgYENoaWxkQ29tcG9uZW50YCBwcm9wZXJ0eS5cbiAqIEFsbCBvdGhlciBwcm9wZXJ0aWVzIHdpbGwgYmUgcGFzc2VkIHRocm91Z2ggdG8gdGhlIGNoaWxkIGNvbXBvbmVudC5cbiAqL1xudmFyIEF1dG9TaXplciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBdXRvU2l6ZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEF1dG9TaXplcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdXRvU2l6ZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEF1dG9TaXplci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEF1dG9TaXplcikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgd2lkdGg6IDBcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uUmVzaXplID0gX3RoaXMuX29uUmVzaXplLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLl9zZXRSZWYgPSBfdGhpcy5fc2V0UmVmLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBdXRvU2l6ZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIC8vIERlbGF5IGFjY2VzcyBvZiBwYXJlbnROb2RlIHVudGlsIG1vdW50LlxuICAgICAgLy8gVGhpcyBoYW5kbGVzIGVkZ2UtY2FzZXMgd2hlcmUgdGhlIGNvbXBvbmVudCBoYXMgYWxyZWFkeSBiZWVuIHVubW91bnRlZCBiZWZvcmUgaXRzIHJlZiBoYXMgYmVlbiBzZXQsXG4gICAgICAvLyBBcyB3ZWxsIGFzIGxpYnJhcmllcyBsaWtlIHJlYWN0LWxpdGUgd2hpY2ggaGF2ZSBhIHNsaWdodGx5IGRpZmZlcmVudCBsaWZlY3ljbGUuXG4gICAgICB0aGlzLl9wYXJlbnROb2RlID0gdGhpcy5fYXV0b1NpemVyLnBhcmVudE5vZGU7XG5cbiAgICAgIC8vIERlZmVyIHJlcXVpcmluZyByZXNpemUgaGFuZGxlciBpbiBvcmRlciB0byBzdXBwb3J0IHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgICAgIC8vIFNlZSBpc3N1ZSAjNDFcbiAgICAgIHRoaXMuX2RldGVjdEVsZW1lbnRSZXNpemUgPSAoMCwgX2RldGVjdEVsZW1lbnRSZXNpemUyLmRlZmF1bHQpKCk7XG4gICAgICB0aGlzLl9kZXRlY3RFbGVtZW50UmVzaXplLmFkZFJlc2l6ZUxpc3RlbmVyKHRoaXMuX3BhcmVudE5vZGUsIHRoaXMuX29uUmVzaXplKTtcblxuICAgICAgdGhpcy5fb25SZXNpemUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuX2RldGVjdEVsZW1lbnRSZXNpemUpIHtcbiAgICAgICAgdGhpcy5fZGV0ZWN0RWxlbWVudFJlc2l6ZS5yZW1vdmVSZXNpemVMaXN0ZW5lcih0aGlzLl9wYXJlbnROb2RlLCB0aGlzLl9vblJlc2l6ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgICB2YXIgZGlzYWJsZUhlaWdodCA9IF9wcm9wcy5kaXNhYmxlSGVpZ2h0O1xuICAgICAgdmFyIGRpc2FibGVXaWR0aCA9IF9wcm9wcy5kaXNhYmxlV2lkdGg7XG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciBoZWlnaHQgPSBfc3RhdGUuaGVpZ2h0O1xuICAgICAgdmFyIHdpZHRoID0gX3N0YXRlLndpZHRoO1xuXG4gICAgICAvLyBPdXRlciBkaXYgc2hvdWxkIG5vdCBmb3JjZSB3aWR0aC9oZWlnaHQgc2luY2UgdGhhdCBtYXkgcHJldmVudCBjb250YWluZXJzIGZyb20gc2hyaW5raW5nLlxuICAgICAgLy8gSW5uZXIgY29tcG9uZW50IHNob3VsZCBvdmVyZmxvdyBhbmQgdXNlIGNhbGN1bGF0ZWQgd2lkdGgvaGVpZ2h0LlxuICAgICAgLy8gU2VlIGlzc3VlICM2OCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuICAgICAgdmFyIG91dGVyU3R5bGUgPSB7IG92ZXJmbG93OiAndmlzaWJsZScgfTtcblxuICAgICAgaWYgKCFkaXNhYmxlSGVpZ2h0KSB7XG4gICAgICAgIG91dGVyU3R5bGUuaGVpZ2h0ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkaXNhYmxlV2lkdGgpIHtcbiAgICAgICAgb3V0ZXJTdHlsZS53aWR0aCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IHRoaXMuX3NldFJlZixcbiAgICAgICAgICBzdHlsZTogb3V0ZXJTdHlsZVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbih7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGggfSlcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICByZXR1cm4gKDAsIF9yZWFjdEFkZG9uc1NoYWxsb3dDb21wYXJlMi5kZWZhdWx0KSh0aGlzLCBuZXh0UHJvcHMsIG5leHRTdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX29uUmVzaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uUmVzaXplKCkge1xuICAgICAgdmFyIG9uUmVzaXplID0gdGhpcy5wcm9wcy5vblJlc2l6ZTtcblxuICAgICAgLy8gR2F1cmQgYWdhaW5zdCBBdXRvU2l6ZXIgY29tcG9uZW50IGJlaW5nIHJlbW92ZWQgZnJvbSB0aGUgRE9NIGltbWVkaWF0ZWx5IGFmdGVyIGJlaW5nIGFkZGVkLlxuICAgICAgLy8gVGhpcyBjYW4gcmVzdWx0IGluIGludmFsaWQgc3R5bGUgdmFsdWVzIHdoaWNoIGNhbiByZXN1bHQgaW4gTmFOIHZhbHVlcyBpZiB3ZSBkb24ndCBoYW5kbGUgdGhlbS5cbiAgICAgIC8vIFNlZSBpc3N1ZSAjMTUwIGZvciBtb3JlIGNvbnRleHQuXG5cbiAgICAgIHZhciBib3VuZGluZ1JlY3QgPSB0aGlzLl9wYXJlbnROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGhlaWdodCA9IGJvdW5kaW5nUmVjdC5oZWlnaHQgfHwgMDtcbiAgICAgIHZhciB3aWR0aCA9IGJvdW5kaW5nUmVjdC53aWR0aCB8fCAwO1xuXG4gICAgICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9wYXJlbnROb2RlKSB8fCB7fTtcbiAgICAgIHZhciBwYWRkaW5nTGVmdCA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdMZWZ0LCAxMCkgfHwgMDtcbiAgICAgIHZhciBwYWRkaW5nUmlnaHQgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nUmlnaHQsIDEwKSB8fCAwO1xuICAgICAgdmFyIHBhZGRpbmdUb3AgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nVG9wLCAxMCkgfHwgMDtcbiAgICAgIHZhciBwYWRkaW5nQm90dG9tID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ0JvdHRvbSwgMTApIHx8IDA7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoZWlnaHQ6IGhlaWdodCAtIHBhZGRpbmdUb3AgLSBwYWRkaW5nQm90dG9tLFxuICAgICAgICB3aWR0aDogd2lkdGggLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodFxuICAgICAgfSk7XG5cbiAgICAgIG9uUmVzaXplKHsgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfc2V0UmVmJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFJlZihhdXRvU2l6ZXIpIHtcbiAgICAgIHRoaXMuX2F1dG9TaXplciA9IGF1dG9TaXplcjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXV0b1NpemVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQXV0b1NpemVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25SZXNpemU6IGZ1bmN0aW9uIG9uUmVzaXplKCkge31cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBBdXRvU2l6ZXI7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBBdXRvU2l6ZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgKiBGdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgcmVuZGVyaW5nIGNoaWxkcmVuLlxuICAqIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGltcGxlbWVudCB0aGUgZm9sbG93aW5nIHNpZ25hdHVyZTpcbiAgKiAoeyBoZWlnaHQsIHdpZHRoIH0pID0+IFByb3BUeXBlcy5lbGVtZW50XG4gICovXG4gIGNoaWxkcmVuOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKiogRGlzYWJsZSBkeW5hbWljIDpoZWlnaHQgcHJvcGVydHkgKi9cbiAgZGlzYWJsZUhlaWdodDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBEaXNhYmxlIGR5bmFtaWMgOndpZHRoIHByb3BlcnR5ICovXG4gIGRpc2FibGVXaWR0aDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBDYWxsYmFjayB0byBiZSBpbnZva2VkIG9uLXJlc2l6ZTogKHsgaGVpZ2h0LCB3aWR0aCB9KSAqL1xuICBvblJlc2l6ZTogX3JlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvQXV0b1NpemVyL0F1dG9TaXplci5qc1xuLy8gbW9kdWxlIGlkID0gODU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQXV0b1NpemVyID0gZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX0F1dG9TaXplcjIgPSByZXF1aXJlKCcuL0F1dG9TaXplcicpO1xuXG52YXIgX0F1dG9TaXplcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BdXRvU2l6ZXIyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX0F1dG9TaXplcjMuZGVmYXVsdDtcbmV4cG9ydHMuQXV0b1NpemVyID0gX0F1dG9TaXplcjMuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9BdXRvU2l6ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkRFRkFVTFRfU0NST0xMSU5HX1JFU0VUX1RJTUVfSU5URVJWQUwgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfY2FsY3VsYXRlU2l6ZUFuZFBvc2l0aW9uRGF0YUFuZFVwZGF0ZVNjcm9sbE9mZnNldCA9IHJlcXVpcmUoJy4vdXRpbHMvY2FsY3VsYXRlU2l6ZUFuZFBvc2l0aW9uRGF0YUFuZFVwZGF0ZVNjcm9sbE9mZnNldCcpO1xuXG52YXIgX2NhbGN1bGF0ZVNpemVBbmRQb3NpdGlvbkRhdGFBbmRVcGRhdGVTY3JvbGxPZmZzZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FsY3VsYXRlU2l6ZUFuZFBvc2l0aW9uRGF0YUFuZFVwZGF0ZVNjcm9sbE9mZnNldCk7XG5cbnZhciBfU2NhbGluZ0NlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi91dGlscy9TY2FsaW5nQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXInKTtcblxudmFyIF9TY2FsaW5nQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2NhbGluZ0NlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyKTtcblxudmFyIF9jcmVhdGVDYWxsYmFja01lbW9pemVyID0gcmVxdWlyZSgnLi4vdXRpbHMvY3JlYXRlQ2FsbGJhY2tNZW1vaXplcicpO1xuXG52YXIgX2NyZWF0ZUNhbGxiYWNrTWVtb2l6ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2FsbGJhY2tNZW1vaXplcik7XG5cbnZhciBfZ2V0T3ZlcnNjYW5JbmRpY2VzID0gcmVxdWlyZSgnLi91dGlscy9nZXRPdmVyc2NhbkluZGljZXMnKTtcblxudmFyIF9nZXRPdmVyc2NhbkluZGljZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3ZlcnNjYW5JbmRpY2VzKTtcblxudmFyIF9zY3JvbGxiYXJTaXplID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvdXRpbC9zY3JvbGxiYXJTaXplJyk7XG5cbnZhciBfc2Nyb2xsYmFyU2l6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY3JvbGxiYXJTaXplKTtcblxudmFyIF9yZWFjdEFkZG9uc1NoYWxsb3dDb21wYXJlID0gcmVxdWlyZSgncmVhY3QtYWRkb25zLXNoYWxsb3ctY29tcGFyZScpO1xuXG52YXIgX3JlYWN0QWRkb25zU2hhbGxvd0NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RBZGRvbnNTaGFsbG93Q29tcGFyZSk7XG5cbnZhciBfdXBkYXRlU2Nyb2xsSW5kZXhIZWxwZXIgPSByZXF1aXJlKCcuL3V0aWxzL3VwZGF0ZVNjcm9sbEluZGV4SGVscGVyJyk7XG5cbnZhciBfdXBkYXRlU2Nyb2xsSW5kZXhIZWxwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXBkYXRlU2Nyb2xsSW5kZXhIZWxwZXIpO1xuXG52YXIgX2RlZmF1bHRDZWxsUmFuZ2VSZW5kZXJlciA9IHJlcXVpcmUoJy4vZGVmYXVsdENlbGxSYW5nZVJlbmRlcmVyJyk7XG5cbnZhciBfZGVmYXVsdENlbGxSYW5nZVJlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRDZWxsUmFuZ2VSZW5kZXJlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiBtaWxpc2Vjb25kcyBkdXJpbmcgd2hpY2ggdG8gZGlzYWJsZSBwb2ludGVyIGV2ZW50cyB3aGlsZSBhIHNjcm9sbCBpcyBpbiBwcm9ncmVzcy5cbiAqIFRoaXMgaW1wcm92ZXMgcGVyZm9ybWFuY2UgYW5kIG1ha2VzIHNjcm9sbGluZyBzbW9vdGhlci5cbiAqL1xudmFyIERFRkFVTFRfU0NST0xMSU5HX1JFU0VUX1RJTUVfSU5URVJWQUwgPSBleHBvcnRzLkRFRkFVTFRfU0NST0xMSU5HX1JFU0VUX1RJTUVfSU5URVJWQUwgPSAxNTA7XG5cbi8qKlxuICogQ29udHJvbHMgd2hldGhlciB0aGUgR3JpZCB1cGRhdGVzIHRoZSBET00gZWxlbWVudCdzIHNjcm9sbExlZnQvc2Nyb2xsVG9wIGJhc2VkIG9uIHRoZSBjdXJyZW50IHN0YXRlIG9yIGp1c3Qgb2JzZXJ2ZXMgaXQuXG4gKiBUaGlzIHByZXZlbnRzIEdyaWQgZnJvbSBpbnRlcnJ1cHRpbmcgbW91c2Utd2hlZWwgYW5pbWF0aW9ucyAoc2VlIGlzc3VlICMyKS5cbiAqL1xudmFyIFNDUk9MTF9QT1NJVElPTl9DSEFOR0VfUkVBU09OUyA9IHtcbiAgT0JTRVJWRUQ6ICdvYnNlcnZlZCcsXG4gIFJFUVVFU1RFRDogJ3JlcXVlc3RlZCdcbn07XG5cbi8qKlxuICogUmVuZGVycyB0YWJ1bGFyIGRhdGEgd2l0aCB2aXJ0dWFsaXphdGlvbiBhbG9uZyB0aGUgdmVydGljYWwgYW5kIGhvcml6b250YWwgYXhlcy5cbiAqIFJvdyBoZWlnaHRzIGFuZCBjb2x1bW4gd2lkdGhzIG11c3QgYmUga25vd24gYWhlYWQgb2YgdGltZSBhbmQgc3BlY2lmaWVkIGFzIHByb3BlcnRpZXMuXG4gKi9cblxudmFyIEdyaWQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR3JpZCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gR3JpZChwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmlkKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHcmlkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoR3JpZCkpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNTY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgc2Nyb2xsRGlyZWN0aW9uSG9yaXpvbnRhbDogX2dldE92ZXJzY2FuSW5kaWNlcy5TQ1JPTExfRElSRUNUSU9OX0ZPUldBUkQsXG4gICAgICBzY3JvbGxEaXJlY3Rpb25WZXJ0aWNhbDogX2dldE92ZXJzY2FuSW5kaWNlcy5TQ1JPTExfRElSRUNUSU9OX0ZPUldBUkQsXG4gICAgICBzY3JvbGxMZWZ0OiAwLFxuICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgfTtcblxuICAgIC8vIEludm9rZXMgb25TZWN0aW9uUmVuZGVyZWQgY2FsbGJhY2sgb25seSB3aGVuIHN0YXJ0L3N0b3Agcm93IG9yIGNvbHVtbiBpbmRpY2VzIGNoYW5nZVxuICAgIF90aGlzLl9vbkdyaWRSZW5kZXJlZE1lbW9pemVyID0gKDAsIF9jcmVhdGVDYWxsYmFja01lbW9pemVyMi5kZWZhdWx0KSgpO1xuICAgIF90aGlzLl9vblNjcm9sbE1lbW9pemVyID0gKDAsIF9jcmVhdGVDYWxsYmFja01lbW9pemVyMi5kZWZhdWx0KShmYWxzZSk7XG5cbiAgICAvLyBCaW5kIGZ1bmN0aW9ucyB0byBpbnN0YW5jZSBzbyB0aGV5IGRvbid0IGxvc2UgY29udGV4dCB3aGVuIHBhc3NlZCBhcm91bmRcbiAgICBfdGhpcy5fZGVib3VuY2VTY3JvbGxFbmRlZENhbGxiYWNrID0gX3RoaXMuX2RlYm91bmNlU2Nyb2xsRW5kZWRDYWxsYmFjay5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5faW52b2tlT25HcmlkUmVuZGVyZWRIZWxwZXIgPSBfdGhpcy5faW52b2tlT25HcmlkUmVuZGVyZWRIZWxwZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuX29uU2Nyb2xsID0gX3RoaXMuX29uU2Nyb2xsLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLl91cGRhdGVTY3JvbGxMZWZ0Rm9yU2Nyb2xsVG9Db2x1bW4gPSBfdGhpcy5fdXBkYXRlU2Nyb2xsTGVmdEZvclNjcm9sbFRvQ29sdW1uLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLl91cGRhdGVTY3JvbGxUb3BGb3JTY3JvbGxUb1JvdyA9IF90aGlzLl91cGRhdGVTY3JvbGxUb3BGb3JTY3JvbGxUb1Jvdy5iaW5kKF90aGlzKTtcblxuICAgIF90aGlzLl9jb2x1bW5XaWR0aEdldHRlciA9IF90aGlzLl93cmFwU2l6ZUdldHRlcihwcm9wcy5jb2x1bW5XaWR0aCk7XG4gICAgX3RoaXMuX3Jvd0hlaWdodEdldHRlciA9IF90aGlzLl93cmFwU2l6ZUdldHRlcihwcm9wcy5yb3dIZWlnaHQpO1xuXG4gICAgX3RoaXMuX2NvbHVtblNpemVBbmRQb3NpdGlvbk1hbmFnZXIgPSBuZXcgX1NjYWxpbmdDZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlcjIuZGVmYXVsdCh7XG4gICAgICBjZWxsQ291bnQ6IHByb3BzLmNvbHVtbkNvdW50LFxuICAgICAgY2VsbFNpemVHZXR0ZXI6IGZ1bmN0aW9uIGNlbGxTaXplR2V0dGVyKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gX3RoaXMuX2NvbHVtbldpZHRoR2V0dGVyKHBhcmFtcyk7XG4gICAgICB9LFxuICAgICAgZXN0aW1hdGVkQ2VsbFNpemU6IF90aGlzLl9nZXRFc3RpbWF0ZWRDb2x1bW5TaXplKHByb3BzKVxuICAgIH0pO1xuICAgIF90aGlzLl9yb3dTaXplQW5kUG9zaXRpb25NYW5hZ2VyID0gbmV3IF9TY2FsaW5nQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIyLmRlZmF1bHQoe1xuICAgICAgY2VsbENvdW50OiBwcm9wcy5yb3dDb3VudCxcbiAgICAgIGNlbGxTaXplR2V0dGVyOiBmdW5jdGlvbiBjZWxsU2l6ZUdldHRlcihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLl9yb3dIZWlnaHRHZXR0ZXIocGFyYW1zKTtcbiAgICAgIH0sXG4gICAgICBlc3RpbWF0ZWRDZWxsU2l6ZTogX3RoaXMuX2dldEVzdGltYXRlZFJvd1NpemUocHJvcHMpXG4gICAgfSk7XG5cbiAgICAvLyBTZWUgZGVmYXVsdENlbGxSYW5nZVJlbmRlcmVyKCkgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gdGhlIHVzYWdlIG9mIHRoZXNlIGNhY2hlc1xuICAgIF90aGlzLl9jZWxsQ2FjaGUgPSB7fTtcbiAgICBfdGhpcy5fc3R5bGVDYWNoZSA9IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmUtbWVhc3VyZSBhbGwgY29sdW1ucyBhbmQgcm93cyBpbiBhIEdyaWQuXG4gICAqIFR5cGljYWxseSBjZWxscyBhcmUgb25seSBtZWFzdXJlZCBhcyBuZWVkZWQgYW5kIGVzdGltYXRlZCBzaXplcyBhcmUgdXNlZCBmb3IgY2VsbHMgdGhhdCBoYXZlIG5vdCB5ZXQgYmVlbiBtZWFzdXJlZC5cbiAgICogVGhpcyBtZXRob2QgZW5zdXJlcyB0aGF0IHRoZSBuZXh0IGNhbGwgdG8gZ2V0VG90YWxTaXplKCkgcmV0dXJucyBhbiBleGFjdCBzaXplIChhcyBvcHBvc2VkIHRvIGp1c3QgYW4gZXN0aW1hdGVkIG9uZSkuXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEdyaWQsIFt7XG4gICAga2V5OiAnbWVhc3VyZUFsbENlbGxzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWVhc3VyZUFsbENlbGxzKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgY29sdW1uQ291bnQgPSBfcHJvcHMuY29sdW1uQ291bnQ7XG4gICAgICB2YXIgcm93Q291bnQgPSBfcHJvcHMucm93Q291bnQ7XG5cblxuICAgICAgdGhpcy5fY29sdW1uU2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5nZXRTaXplQW5kUG9zaXRpb25PZkNlbGwoY29sdW1uQ291bnQgLSAxKTtcbiAgICAgIHRoaXMuX3Jvd1NpemVBbmRQb3NpdGlvbk1hbmFnZXIuZ2V0U2l6ZUFuZFBvc2l0aW9uT2ZDZWxsKHJvd0NvdW50IC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9yY2VkIHJlY29tcHV0ZSBvZiByb3cgaGVpZ2h0cyBhbmQgY29sdW1uIHdpZHRocy5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgaWYgZHluYW1pYyBjb2x1bW4gb3Igcm93IHNpemVzIGhhdmUgY2hhbmdlZCBidXQgbm90aGluZyBlbHNlIGhhcy5cbiAgICAgKiBTaW5jZSBHcmlkIG9ubHkgcmVjZWl2ZXMgOmNvbHVtbkNvdW50IGFuZCA6cm93Q291bnQgaXQgaGFzIG5vIHdheSBvZiBkZXRlY3Rpbmcgd2hlbiB0aGUgdW5kZXJseWluZyBkYXRhIGNoYW5nZXMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlY29tcHV0ZUdyaWRTaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVjb21wdXRlR3JpZFNpemUoKSB7XG4gICAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgIHZhciBfcmVmJGNvbHVtbkluZGV4ID0gX3JlZi5jb2x1bW5JbmRleDtcbiAgICAgIHZhciBjb2x1bW5JbmRleCA9IF9yZWYkY29sdW1uSW5kZXggPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJGNvbHVtbkluZGV4O1xuICAgICAgdmFyIF9yZWYkcm93SW5kZXggPSBfcmVmLnJvd0luZGV4O1xuICAgICAgdmFyIHJvd0luZGV4ID0gX3JlZiRyb3dJbmRleCA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkcm93SW5kZXg7XG5cbiAgICAgIHRoaXMuX2NvbHVtblNpemVBbmRQb3NpdGlvbk1hbmFnZXIucmVzZXRDZWxsKGNvbHVtbkluZGV4KTtcbiAgICAgIHRoaXMuX3Jvd1NpemVBbmRQb3NpdGlvbk1hbmFnZXIucmVzZXRDZWxsKHJvd0luZGV4KTtcblxuICAgICAgLy8gQ2xlYXIgY2VsbCBjYWNoZSBpbiBjYXNlIHdlIGFyZSBzY3JvbGxpbmc7XG4gICAgICAvLyBJbnZhbGlkIHJvdyBoZWlnaHRzIGxpa2VseSBtZWFuIGludmFsaWQgY2FjaGVkIGNvbnRlbnQgYXMgd2VsbC5cbiAgICAgIHRoaXMuX2NlbGxDYWNoZSA9IHt9O1xuICAgICAgdGhpcy5fc3R5bGVDYWNoZSA9IHt9O1xuXG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5zdXJlIGNvbHVtbiBhbmQgcm93IGFyZSB2aXNpYmxlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzY3JvbGxUb0NlbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxUb0NlbGwoX3JlZjIpIHtcbiAgICAgIHZhciBjb2x1bW5JbmRleCA9IF9yZWYyLmNvbHVtbkluZGV4O1xuICAgICAgdmFyIHJvd0luZGV4ID0gX3JlZjIucm93SW5kZXg7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB0aGlzLl91cGRhdGVTY3JvbGxMZWZ0Rm9yU2Nyb2xsVG9Db2x1bW4oX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIHNjcm9sbFRvQ29sdW1uOiBjb2x1bW5JbmRleFxuICAgICAgfSkpO1xuICAgICAgdGhpcy5fdXBkYXRlU2Nyb2xsVG9wRm9yU2Nyb2xsVG9Sb3coX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIHNjcm9sbFRvUm93OiByb3dJbmRleFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IF9wcm9wczIuc2Nyb2xsTGVmdDtcbiAgICAgIHZhciBzY3JvbGxUb0NvbHVtbiA9IF9wcm9wczIuc2Nyb2xsVG9Db2x1bW47XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gX3Byb3BzMi5zY3JvbGxUb3A7XG4gICAgICB2YXIgc2Nyb2xsVG9Sb3cgPSBfcHJvcHMyLnNjcm9sbFRvUm93O1xuXG4gICAgICAvLyBJZiB0aGlzIGNvbXBvbmVudCB3YXMgZmlyc3QgcmVuZGVyZWQgc2VydmVyLXNpZGUsIHNjcm9sbGJhciBzaXplIHdpbGwgYmUgdW5kZWZpbmVkLlxuICAgICAgLy8gSW4gdGhhdCBldmVudCB3ZSBuZWVkIHRvIHJlbWVhc3VyZS5cblxuICAgICAgaWYgKCF0aGlzLl9zY3JvbGxiYXJTaXplTWVhc3VyZWQpIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsYmFyU2l6ZSA9ICgwLCBfc2Nyb2xsYmFyU2l6ZTIuZGVmYXVsdCkoKTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsYmFyU2l6ZU1lYXN1cmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JvbGxMZWZ0ID49IDAgfHwgc2Nyb2xsVG9wID49IDApIHtcbiAgICAgICAgdGhpcy5fc2V0U2Nyb2xsUG9zaXRpb24oeyBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LCBzY3JvbGxUb3A6IHNjcm9sbFRvcCB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbFRvQ29sdW1uID49IDAgfHwgc2Nyb2xsVG9Sb3cgPj0gMCkge1xuICAgICAgICB0aGlzLl91cGRhdGVTY3JvbGxMZWZ0Rm9yU2Nyb2xsVG9Db2x1bW4oKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlU2Nyb2xsVG9wRm9yU2Nyb2xsVG9Sb3coKTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIG9uUm93c1JlbmRlcmVkIGNhbGxiYWNrXG4gICAgICB0aGlzLl9pbnZva2VPbkdyaWRSZW5kZXJlZEhlbHBlcigpO1xuXG4gICAgICAvLyBJbml0aWFsaXplIG9uU2Nyb2xsIGNhbGxiYWNrXG4gICAgICB0aGlzLl9pbnZva2VPblNjcm9sbE1lbW9pemVyKHtcbiAgICAgICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCB8fCAwLFxuICAgICAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcCB8fCAwLFxuICAgICAgICB0b3RhbENvbHVtbnNXaWR0aDogdGhpcy5fY29sdW1uU2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5nZXRUb3RhbFNpemUoKSxcbiAgICAgICAgdG90YWxSb3dzSGVpZ2h0OiB0aGlzLl9yb3dTaXplQW5kUG9zaXRpb25NYW5hZ2VyLmdldFRvdGFsU2l6ZSgpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIFRoaXMgbWV0aG9kIHVwZGF0ZXMgc2Nyb2xsTGVmdC9zY3JvbGxUb3AgaW4gc3RhdGUgZm9yIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAgICAgKiAxKSBOZXcgc2Nyb2xsLXRvLWNlbGwgcHJvcHMgaGF2ZSBiZWVuIHNldFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgYXV0b0hlaWdodCA9IF9wcm9wczMuYXV0b0hlaWdodDtcbiAgICAgIHZhciBjb2x1bW5Db3VudCA9IF9wcm9wczMuY29sdW1uQ291bnQ7XG4gICAgICB2YXIgaGVpZ2h0ID0gX3Byb3BzMy5oZWlnaHQ7XG4gICAgICB2YXIgcm93Q291bnQgPSBfcHJvcHMzLnJvd0NvdW50O1xuICAgICAgdmFyIHNjcm9sbFRvQWxpZ25tZW50ID0gX3Byb3BzMy5zY3JvbGxUb0FsaWdubWVudDtcbiAgICAgIHZhciBzY3JvbGxUb0NvbHVtbiA9IF9wcm9wczMuc2Nyb2xsVG9Db2x1bW47XG4gICAgICB2YXIgc2Nyb2xsVG9Sb3cgPSBfcHJvcHMzLnNjcm9sbFRvUm93O1xuICAgICAgdmFyIHdpZHRoID0gX3Byb3BzMy53aWR0aDtcbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgdmFyIHNjcm9sbExlZnQgPSBfc3RhdGUuc2Nyb2xsTGVmdDtcbiAgICAgIHZhciBzY3JvbGxQb3NpdGlvbkNoYW5nZVJlYXNvbiA9IF9zdGF0ZS5zY3JvbGxQb3NpdGlvbkNoYW5nZVJlYXNvbjtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSBfc3RhdGUuc2Nyb2xsVG9wO1xuXG4gICAgICAvLyBIYW5kbGUgZWRnZSBjYXNlIHdoZXJlIGNvbHVtbiBvciByb3cgY291bnQgaGFzIG9ubHkganVzdCBpbmNyZWFzZWQgb3ZlciAwLlxuICAgICAgLy8gSW4gdGhpcyBjYXNlIHdlIG1heSBoYXZlIHRvIHJlc3RvcmUgYSBwcmV2aW91c2x5LXNwZWNpZmllZCBzY3JvbGwgb2Zmc2V0LlxuICAgICAgLy8gRm9yIG1vcmUgaW5mbyBzZWUgYnZhdWdobi9yZWFjdC12aXJ0dWFsaXplZC9pc3N1ZXMvMjE4XG5cbiAgICAgIHZhciBjb2x1bW5PclJvd0NvdW50SnVzdEluY3JlYXNlZEZyb21aZXJvID0gY29sdW1uQ291bnQgPiAwICYmIHByZXZQcm9wcy5jb2x1bW5Db3VudCA9PT0gMCB8fCByb3dDb3VudCA+IDAgJiYgcHJldlByb3BzLnJvd0NvdW50ID09PSAwO1xuXG4gICAgICAvLyBNYWtlIHN1cmUgcmVxdWVzdGVkIGNoYW5nZXMgdG8gOnNjcm9sbExlZnQgb3IgOnNjcm9sbFRvcCBnZXQgYXBwbGllZC5cbiAgICAgIC8vIEFzc2lnbmluZyB0byBzY3JvbGxMZWZ0L3Njcm9sbFRvcCB0ZWxscyB0aGUgYnJvd3NlciB0byBpbnRlcnJ1cHQgYW55IHJ1bm5pbmcgc2Nyb2xsIGFuaW1hdGlvbnMsXG4gICAgICAvLyBBbmQgdG8gZGlzY2FyZCBhbnkgcGVuZGluZyBhc3luYyBjaGFuZ2VzIHRvIHRoZSBzY3JvbGwgcG9zaXRpb24gdGhhdCBtYXkgaGF2ZSBoYXBwZW5lZCBpbiB0aGUgbWVhbnRpbWUgKGUuZy4gb24gYSBzZXBhcmF0ZSBzY3JvbGxpbmcgdGhyZWFkKS5cbiAgICAgIC8vIFNvIHdlIG9ubHkgc2V0IHRoZXNlIHdoZW4gd2UgcmVxdWlyZSBhbiBhZGp1c3RtZW50IG9mIHRoZSBzY3JvbGwgcG9zaXRpb24uXG4gICAgICAvLyBTZWUgaXNzdWUgIzIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICBpZiAoc2Nyb2xsUG9zaXRpb25DaGFuZ2VSZWFzb24gPT09IFNDUk9MTF9QT1NJVElPTl9DSEFOR0VfUkVBU09OUy5SRVFVRVNURUQpIHtcbiAgICAgICAgaWYgKHNjcm9sbExlZnQgPj0gMCAmJiAoc2Nyb2xsTGVmdCAhPT0gcHJldlN0YXRlLnNjcm9sbExlZnQgJiYgc2Nyb2xsTGVmdCAhPT0gdGhpcy5fc2Nyb2xsaW5nQ29udGFpbmVyLnNjcm9sbExlZnQgfHwgY29sdW1uT3JSb3dDb3VudEp1c3RJbmNyZWFzZWRGcm9tWmVybykpIHtcbiAgICAgICAgICB0aGlzLl9zY3JvbGxpbmdDb250YWluZXIuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBAVFJJQ0tZIDphdXRvSGVpZ2h0IHByb3BlcnR5IGluc3RydWN0cyBHcmlkIHRvIGxlYXZlIDpzY3JvbGxUb3AgbWFuYWdlbWVudCB0byBhbiBleHRlcm5hbCBIT0MgKGVnIFdpbmRvd1Njcm9sbGVyKS5cbiAgICAgICAgLy8gSW4gdGhpcyBjYXNlIHdlIHNob3VsZCBhdm9pZCBjaGVja2luZyBzY3JvbGxpbmdDb250YWluZXIuc2Nyb2xsVG9wIHNpbmNlIGl0IGZvcmNlcyBsYXlvdXQvZmxvdy5cbiAgICAgICAgaWYgKCFhdXRvSGVpZ2h0ICYmIHNjcm9sbFRvcCA+PSAwICYmIChzY3JvbGxUb3AgIT09IHByZXZTdGF0ZS5zY3JvbGxUb3AgJiYgc2Nyb2xsVG9wICE9PSB0aGlzLl9zY3JvbGxpbmdDb250YWluZXIuc2Nyb2xsVG9wIHx8IGNvbHVtbk9yUm93Q291bnRKdXN0SW5jcmVhc2VkRnJvbVplcm8pKSB7XG4gICAgICAgICAgdGhpcy5fc2Nyb2xsaW5nQ29udGFpbmVyLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgc2Nyb2xsIG9mZnNldHMgaWYgdGhlIGN1cnJlbnQgOnNjcm9sbFRvQ29sdW1uIG9yIDpzY3JvbGxUb1JvdyB2YWx1ZXMgcmVxdWlyZXMgaXRcbiAgICAgIC8vIEBUT0RPIERvIHdlIGFsc28gbmVlZCB0aGlzIGNoZWNrIG9yIGNhbiB0aGUgb25lIGluIGNvbXBvbmVudFdpbGxVcGRhdGUoKSBzdWZmaWNlP1xuICAgICAgKDAsIF91cGRhdGVTY3JvbGxJbmRleEhlbHBlcjIuZGVmYXVsdCkoe1xuICAgICAgICBjZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlcjogdGhpcy5fY29sdW1uU2l6ZUFuZFBvc2l0aW9uTWFuYWdlcixcbiAgICAgICAgcHJldmlvdXNDZWxsc0NvdW50OiBwcmV2UHJvcHMuY29sdW1uQ291bnQsXG4gICAgICAgIHByZXZpb3VzQ2VsbFNpemU6IHByZXZQcm9wcy5jb2x1bW5XaWR0aCxcbiAgICAgICAgcHJldmlvdXNTY3JvbGxUb0FsaWdubWVudDogcHJldlByb3BzLnNjcm9sbFRvQWxpZ25tZW50LFxuICAgICAgICBwcmV2aW91c1Njcm9sbFRvSW5kZXg6IHByZXZQcm9wcy5zY3JvbGxUb0NvbHVtbixcbiAgICAgICAgcHJldmlvdXNTaXplOiBwcmV2UHJvcHMud2lkdGgsXG4gICAgICAgIHNjcm9sbE9mZnNldDogc2Nyb2xsTGVmdCxcbiAgICAgICAgc2Nyb2xsVG9BbGlnbm1lbnQ6IHNjcm9sbFRvQWxpZ25tZW50LFxuICAgICAgICBzY3JvbGxUb0luZGV4OiBzY3JvbGxUb0NvbHVtbixcbiAgICAgICAgc2l6ZTogd2lkdGgsXG4gICAgICAgIHVwZGF0ZVNjcm9sbEluZGV4Q2FsbGJhY2s6IGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbEluZGV4Q2FsbGJhY2soc2Nyb2xsVG9Db2x1bW4pIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLl91cGRhdGVTY3JvbGxMZWZ0Rm9yU2Nyb2xsVG9Db2x1bW4oX2V4dGVuZHMoe30sIF90aGlzMi5wcm9wcywgeyBzY3JvbGxUb0NvbHVtbjogc2Nyb2xsVG9Db2x1bW4gfSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICgwLCBfdXBkYXRlU2Nyb2xsSW5kZXhIZWxwZXIyLmRlZmF1bHQpKHtcbiAgICAgICAgY2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXI6IHRoaXMuX3Jvd1NpemVBbmRQb3NpdGlvbk1hbmFnZXIsXG4gICAgICAgIHByZXZpb3VzQ2VsbHNDb3VudDogcHJldlByb3BzLnJvd0NvdW50LFxuICAgICAgICBwcmV2aW91c0NlbGxTaXplOiBwcmV2UHJvcHMucm93SGVpZ2h0LFxuICAgICAgICBwcmV2aW91c1Njcm9sbFRvQWxpZ25tZW50OiBwcmV2UHJvcHMuc2Nyb2xsVG9BbGlnbm1lbnQsXG4gICAgICAgIHByZXZpb3VzU2Nyb2xsVG9JbmRleDogcHJldlByb3BzLnNjcm9sbFRvUm93LFxuICAgICAgICBwcmV2aW91c1NpemU6IHByZXZQcm9wcy5oZWlnaHQsXG4gICAgICAgIHNjcm9sbE9mZnNldDogc2Nyb2xsVG9wLFxuICAgICAgICBzY3JvbGxUb0FsaWdubWVudDogc2Nyb2xsVG9BbGlnbm1lbnQsXG4gICAgICAgIHNjcm9sbFRvSW5kZXg6IHNjcm9sbFRvUm93LFxuICAgICAgICBzaXplOiBoZWlnaHQsXG4gICAgICAgIHVwZGF0ZVNjcm9sbEluZGV4Q2FsbGJhY2s6IGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbEluZGV4Q2FsbGJhY2soc2Nyb2xsVG9Sb3cpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLl91cGRhdGVTY3JvbGxUb3BGb3JTY3JvbGxUb1JvdyhfZXh0ZW5kcyh7fSwgX3RoaXMyLnByb3BzLCB7IHNjcm9sbFRvUm93OiBzY3JvbGxUb1JvdyB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBVcGRhdGUgb25Sb3dzUmVuZGVyZWQgY2FsbGJhY2sgaWYgc3RhcnQvc3RvcCBpbmRpY2VzIGhhdmUgY2hhbmdlZFxuICAgICAgdGhpcy5faW52b2tlT25HcmlkUmVuZGVyZWRIZWxwZXIoKTtcblxuICAgICAgLy8gQ2hhbmdlcyB0byA6c2Nyb2xsTGVmdCBvciA6c2Nyb2xsVG9wIHNob3VsZCBhbHNvIG5vdGlmeSA6b25TY3JvbGwgbGlzdGVuZXJzXG4gICAgICBpZiAoc2Nyb2xsTGVmdCAhPT0gcHJldlN0YXRlLnNjcm9sbExlZnQgfHwgc2Nyb2xsVG9wICE9PSBwcmV2U3RhdGUuc2Nyb2xsVG9wKSB7XG4gICAgICAgIHZhciB0b3RhbFJvd3NIZWlnaHQgPSB0aGlzLl9yb3dTaXplQW5kUG9zaXRpb25NYW5hZ2VyLmdldFRvdGFsU2l6ZSgpO1xuICAgICAgICB2YXIgdG90YWxDb2x1bW5zV2lkdGggPSB0aGlzLl9jb2x1bW5TaXplQW5kUG9zaXRpb25NYW5hZ2VyLmdldFRvdGFsU2l6ZSgpO1xuXG4gICAgICAgIHRoaXMuX2ludm9rZU9uU2Nyb2xsTWVtb2l6ZXIoeyBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LCBzY3JvbGxUb3A6IHNjcm9sbFRvcCwgdG90YWxDb2x1bW5zV2lkdGg6IHRvdGFsQ29sdW1uc1dpZHRoLCB0b3RhbFJvd3NIZWlnaHQ6IHRvdGFsUm93c0hlaWdodCB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAvLyBJZiB0aGlzIGNvbXBvbmVudCBpcyBiZWluZyByZW5kZXJlZCBzZXJ2ZXItc2lkZSwgZ2V0U2Nyb2xsYmFyU2l6ZSgpIHdpbGwgcmV0dXJuIHVuZGVmaW5lZC5cbiAgICAgIC8vIFdlIGhhbmRsZSB0aGlzIGNhc2UgaW4gY29tcG9uZW50RGlkTW91bnQoKVxuICAgICAgdGhpcy5fc2Nyb2xsYmFyU2l6ZSA9ICgwLCBfc2Nyb2xsYmFyU2l6ZTIuZGVmYXVsdCkoKTtcbiAgICAgIGlmICh0aGlzLl9zY3JvbGxiYXJTaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsYmFyU2l6ZU1lYXN1cmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3Njcm9sbGJhclNpemUgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsYmFyU2l6ZU1lYXN1cmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2FsY3VsYXRlQ2hpbGRyZW5Ub1JlbmRlcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5fZGlzYWJsZVBvaW50ZXJFdmVudHNUaW1lb3V0SWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc2FibGVQb2ludGVyRXZlbnRzVGltZW91dElkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIFRoaXMgbWV0aG9kIHVwZGF0ZXMgc2Nyb2xsTGVmdC9zY3JvbGxUb3AgaW4gc3RhdGUgZm9yIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAgICAgKiAxKSBFbXB0eSBjb250ZW50ICgwIHJvd3Mgb3IgY29sdW1ucylcbiAgICAgKiAyKSBOZXcgc2Nyb2xsIHByb3BzIG92ZXJyaWRpbmcgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgKiAzKSBDZWxscy1jb3VudCBvciBjZWxscy1zaXplIGhhcyBjaGFuZ2VkLCBtYWtpbmcgcHJldmlvdXMgc2Nyb2xsIG9mZnNldHMgaW52YWxpZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmIChuZXh0UHJvcHMuY29sdW1uQ291bnQgPT09IDAgJiYgbmV4dFN0YXRlLnNjcm9sbExlZnQgIT09IDAgfHwgbmV4dFByb3BzLnJvd0NvdW50ID09PSAwICYmIG5leHRTdGF0ZS5zY3JvbGxUb3AgIT09IDApIHtcbiAgICAgICAgdGhpcy5fc2V0U2Nyb2xsUG9zaXRpb24oe1xuICAgICAgICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChuZXh0UHJvcHMuc2Nyb2xsTGVmdCAhPT0gdGhpcy5wcm9wcy5zY3JvbGxMZWZ0IHx8IG5leHRQcm9wcy5zY3JvbGxUb3AgIT09IHRoaXMucHJvcHMuc2Nyb2xsVG9wKSB7XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuXG4gICAgICAgIGlmIChuZXh0UHJvcHMuc2Nyb2xsTGVmdCAhPSBudWxsKSB7XG4gICAgICAgICAgbmV3U3RhdGUuc2Nyb2xsTGVmdCA9IG5leHRQcm9wcy5zY3JvbGxMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0UHJvcHMuc2Nyb2xsVG9wICE9IG51bGwpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5zY3JvbGxUb3AgPSBuZXh0UHJvcHMuc2Nyb2xsVG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0U2Nyb2xsUG9zaXRpb24obmV3U3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFByb3BzLmNvbHVtbldpZHRoICE9PSB0aGlzLnByb3BzLmNvbHVtbldpZHRoIHx8IG5leHRQcm9wcy5yb3dIZWlnaHQgIT09IHRoaXMucHJvcHMucm93SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuX3N0eWxlQ2FjaGUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29sdW1uV2lkdGhHZXR0ZXIgPSB0aGlzLl93cmFwU2l6ZUdldHRlcihuZXh0UHJvcHMuY29sdW1uV2lkdGgpO1xuICAgICAgdGhpcy5fcm93SGVpZ2h0R2V0dGVyID0gdGhpcy5fd3JhcFNpemVHZXR0ZXIobmV4dFByb3BzLnJvd0hlaWdodCk7XG5cbiAgICAgIHRoaXMuX2NvbHVtblNpemVBbmRQb3NpdGlvbk1hbmFnZXIuY29uZmlndXJlKHtcbiAgICAgICAgY2VsbENvdW50OiBuZXh0UHJvcHMuY29sdW1uQ291bnQsXG4gICAgICAgIGVzdGltYXRlZENlbGxTaXplOiB0aGlzLl9nZXRFc3RpbWF0ZWRDb2x1bW5TaXplKG5leHRQcm9wcylcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcm93U2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5jb25maWd1cmUoe1xuICAgICAgICBjZWxsQ291bnQ6IG5leHRQcm9wcy5yb3dDb3VudCxcbiAgICAgICAgZXN0aW1hdGVkQ2VsbFNpemU6IHRoaXMuX2dldEVzdGltYXRlZFJvd1NpemUobmV4dFByb3BzKVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFVwZGF0ZSBzY3JvbGwgb2Zmc2V0cyBpZiB0aGUgc2l6ZSBvciBudW1iZXIgb2YgY2VsbHMgaGF2ZSBjaGFuZ2VkLCBpbnZhbGlkYXRpbmcgdGhlIHByZXZpb3VzIHZhbHVlXG4gICAgICAoMCwgX2NhbGN1bGF0ZVNpemVBbmRQb3NpdGlvbkRhdGFBbmRVcGRhdGVTY3JvbGxPZmZzZXQyLmRlZmF1bHQpKHtcbiAgICAgICAgY2VsbENvdW50OiB0aGlzLnByb3BzLmNvbHVtbkNvdW50LFxuICAgICAgICBjZWxsU2l6ZTogdGhpcy5wcm9wcy5jb2x1bW5XaWR0aCxcbiAgICAgICAgY29tcHV0ZU1ldGFkYXRhQ2FsbGJhY2s6IGZ1bmN0aW9uIGNvbXB1dGVNZXRhZGF0YUNhbGxiYWNrKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuX2NvbHVtblNpemVBbmRQb3NpdGlvbk1hbmFnZXIucmVzZXRDZWxsKDApO1xuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlTWV0YWRhdGFDYWxsYmFja1Byb3BzOiBuZXh0UHJvcHMsXG4gICAgICAgIG5leHRDZWxsc0NvdW50OiBuZXh0UHJvcHMuY29sdW1uQ291bnQsXG4gICAgICAgIG5leHRDZWxsU2l6ZTogbmV4dFByb3BzLmNvbHVtbldpZHRoLFxuICAgICAgICBuZXh0U2Nyb2xsVG9JbmRleDogbmV4dFByb3BzLnNjcm9sbFRvQ29sdW1uLFxuICAgICAgICBzY3JvbGxUb0luZGV4OiB0aGlzLnByb3BzLnNjcm9sbFRvQ29sdW1uLFxuICAgICAgICB1cGRhdGVTY3JvbGxPZmZzZXRGb3JTY3JvbGxUb0luZGV4OiBmdW5jdGlvbiB1cGRhdGVTY3JvbGxPZmZzZXRGb3JTY3JvbGxUb0luZGV4KCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuX3VwZGF0ZVNjcm9sbExlZnRGb3JTY3JvbGxUb0NvbHVtbihuZXh0UHJvcHMsIG5leHRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgKDAsIF9jYWxjdWxhdGVTaXplQW5kUG9zaXRpb25EYXRhQW5kVXBkYXRlU2Nyb2xsT2Zmc2V0Mi5kZWZhdWx0KSh7XG4gICAgICAgIGNlbGxDb3VudDogdGhpcy5wcm9wcy5yb3dDb3VudCxcbiAgICAgICAgY2VsbFNpemU6IHRoaXMucHJvcHMucm93SGVpZ2h0LFxuICAgICAgICBjb21wdXRlTWV0YWRhdGFDYWxsYmFjazogZnVuY3Rpb24gY29tcHV0ZU1ldGFkYXRhQ2FsbGJhY2soKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5fcm93U2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5yZXNldENlbGwoMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVNZXRhZGF0YUNhbGxiYWNrUHJvcHM6IG5leHRQcm9wcyxcbiAgICAgICAgbmV4dENlbGxzQ291bnQ6IG5leHRQcm9wcy5yb3dDb3VudCxcbiAgICAgICAgbmV4dENlbGxTaXplOiBuZXh0UHJvcHMucm93SGVpZ2h0LFxuICAgICAgICBuZXh0U2Nyb2xsVG9JbmRleDogbmV4dFByb3BzLnNjcm9sbFRvUm93LFxuICAgICAgICBzY3JvbGxUb0luZGV4OiB0aGlzLnByb3BzLnNjcm9sbFRvUm93LFxuICAgICAgICB1cGRhdGVTY3JvbGxPZmZzZXRGb3JTY3JvbGxUb0luZGV4OiBmdW5jdGlvbiB1cGRhdGVTY3JvbGxPZmZzZXRGb3JTY3JvbGxUb0luZGV4KCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuX3VwZGF0ZVNjcm9sbFRvcEZvclNjcm9sbFRvUm93KG5leHRQcm9wcywgbmV4dFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2NhbGN1bGF0ZUNoaWxkcmVuVG9SZW5kZXIobmV4dFByb3BzLCBuZXh0U3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgYXV0b0NvbnRhaW5lcldpZHRoID0gX3Byb3BzNC5hdXRvQ29udGFpbmVyV2lkdGg7XG4gICAgICB2YXIgYXV0b0hlaWdodCA9IF9wcm9wczQuYXV0b0hlaWdodDtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHM0LmNsYXNzTmFtZTtcbiAgICAgIHZhciBjb250YWluZXJTdHlsZSA9IF9wcm9wczQuY29udGFpbmVyU3R5bGU7XG4gICAgICB2YXIgaGVpZ2h0ID0gX3Byb3BzNC5oZWlnaHQ7XG4gICAgICB2YXIgaWQgPSBfcHJvcHM0LmlkO1xuICAgICAgdmFyIG5vQ29udGVudFJlbmRlcmVyID0gX3Byb3BzNC5ub0NvbnRlbnRSZW5kZXJlcjtcbiAgICAgIHZhciBzdHlsZSA9IF9wcm9wczQuc3R5bGU7XG4gICAgICB2YXIgdGFiSW5kZXggPSBfcHJvcHM0LnRhYkluZGV4O1xuICAgICAgdmFyIHdpZHRoID0gX3Byb3BzNC53aWR0aDtcbiAgICAgIHZhciBpc1Njcm9sbGluZyA9IHRoaXMuc3RhdGUuaXNTY3JvbGxpbmc7XG5cblxuICAgICAgdmFyIGdyaWRTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpcmVjdGlvbjogJ2x0cicsXG4gICAgICAgIGhlaWdodDogYXV0b0hlaWdodCA/ICdhdXRvJyA6IGhlaWdodCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG4gICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nXG4gICAgICB9O1xuXG4gICAgICB2YXIgdG90YWxDb2x1bW5zV2lkdGggPSB0aGlzLl9jb2x1bW5TaXplQW5kUG9zaXRpb25NYW5hZ2VyLmdldFRvdGFsU2l6ZSgpO1xuICAgICAgdmFyIHRvdGFsUm93c0hlaWdodCA9IHRoaXMuX3Jvd1NpemVBbmRQb3NpdGlvbk1hbmFnZXIuZ2V0VG90YWxTaXplKCk7XG5cbiAgICAgIC8vIEZvcmNlIGJyb3dzZXIgdG8gaGlkZSBzY3JvbGxiYXJzIHdoZW4gd2Uga25vdyB0aGV5IGFyZW4ndCBuZWNlc3NhcnkuXG4gICAgICAvLyBPdGhlcndpc2Ugb25jZSBzY3JvbGxiYXJzIGFwcGVhciB0aGV5IG1heSBub3QgZGlzYXBwZWFyIGFnYWluLlxuICAgICAgLy8gRm9yIG1vcmUgaW5mbyBzZWUgaXNzdWUgIzExNlxuICAgICAgdmFyIHZlcnRpY2FsU2Nyb2xsQmFyU2l6ZSA9IHRvdGFsUm93c0hlaWdodCA+IGhlaWdodCA/IHRoaXMuX3Njcm9sbGJhclNpemUgOiAwO1xuICAgICAgdmFyIGhvcml6b250YWxTY3JvbGxCYXJTaXplID0gdG90YWxDb2x1bW5zV2lkdGggPiB3aWR0aCA/IHRoaXMuX3Njcm9sbGJhclNpemUgOiAwO1xuXG4gICAgICAvLyBBbHNvIGV4cGxpY2l0bHkgaW5pdCBzdHlsZXMgdG8gJ2F1dG8nIGlmIHNjcm9sbGJhcnMgYXJlIHJlcXVpcmVkLlxuICAgICAgLy8gVGhpcyB3b3JrcyBhcm91bmQgYW4gb2JzY3VyZSBlZGdlIGNhc2Ugd2hlcmUgZXh0ZXJuYWwgQ1NTIHN0eWxlcyBoYXZlIG5vdCB5ZXQgYmVlbiBsb2FkZWQsXG4gICAgICAvLyBCdXQgYW4gaW5pdGlhbCBzY3JvbGwgaW5kZXggb2Ygb2Zmc2V0IGlzIHNldCBhcyBhbiBleHRlcm5hbCBwcm9wLlxuICAgICAgLy8gV2l0aG91dCB0aGlzIHN0eWxlLCBHcmlkIHdvdWxkIHJlbmRlciB0aGUgY29ycmVjdCByYW5nZSBvZiBjZWxscyBidXQgd291bGQgTk9UIHVwZGF0ZSBpdHMgaW50ZXJuYWwgb2Zmc2V0LlxuICAgICAgLy8gVGhpcyB3YXMgb3JpZ2luYWxseSByZXBvcnRlZCB2aWEgY2xhdWRlcmljL3JlYWN0LWluZmluaXRlLWNhbGVuZGFyL2lzc3Vlcy8yM1xuICAgICAgZ3JpZFN0eWxlLm92ZXJmbG93WCA9IHRvdGFsQ29sdW1uc1dpZHRoICsgdmVydGljYWxTY3JvbGxCYXJTaXplIDw9IHdpZHRoID8gJ2hpZGRlbicgOiAnYXV0byc7XG4gICAgICBncmlkU3R5bGUub3ZlcmZsb3dZID0gdG90YWxSb3dzSGVpZ2h0ICsgaG9yaXpvbnRhbFNjcm9sbEJhclNpemUgPD0gaGVpZ2h0ID8gJ2hpZGRlbicgOiAnYXV0byc7XG5cbiAgICAgIHZhciBjaGlsZHJlblRvRGlzcGxheSA9IHRoaXMuX2NoaWxkcmVuVG9EaXNwbGF5O1xuXG4gICAgICB2YXIgc2hvd05vQ29udGVudFJlbmRlcmVyID0gY2hpbGRyZW5Ub0Rpc3BsYXkubGVuZ3RoID09PSAwICYmIGhlaWdodCA+IDAgJiYgd2lkdGggPiAwO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZjMpIHtcbiAgICAgICAgICAgIF90aGlzNC5fc2Nyb2xsaW5nQ29udGFpbmVyID0gX3JlZjM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnYXJpYS1sYWJlbCc6IHRoaXMucHJvcHNbJ2FyaWEtbGFiZWwnXSxcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ1JlYWN0VmlydHVhbGl6ZWRfX0dyaWQnLCBjbGFzc05hbWUpLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBvblNjcm9sbDogdGhpcy5fb25TY3JvbGwsXG4gICAgICAgICAgcm9sZTogJ2dyaWQnLFxuICAgICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgZ3JpZFN0eWxlLCBzdHlsZSksXG4gICAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4XG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuVG9EaXNwbGF5Lmxlbmd0aCA+IDAgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnUmVhY3RWaXJ0dWFsaXplZF9fR3JpZF9faW5uZXJTY3JvbGxDb250YWluZXInLFxuICAgICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG9Db250YWluZXJXaWR0aCA/ICdhdXRvJyA6IHRvdGFsQ29sdW1uc1dpZHRoLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHRvdGFsUm93c0hlaWdodCxcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IHRvdGFsQ29sdW1uc1dpZHRoLFxuICAgICAgICAgICAgICBtYXhIZWlnaHQ6IHRvdGFsUm93c0hlaWdodCxcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBpc1Njcm9sbGluZyA/ICdub25lJyA6ICcnXG4gICAgICAgICAgICB9LCBjb250YWluZXJTdHlsZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkcmVuVG9EaXNwbGF5XG4gICAgICAgICksXG4gICAgICAgIHNob3dOb0NvbnRlbnRSZW5kZXJlciAmJiBub0NvbnRlbnRSZW5kZXJlcigpXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgcmV0dXJuICgwLCBfcmVhY3RBZGRvbnNTaGFsbG93Q29tcGFyZTIuZGVmYXVsdCkodGhpcywgbmV4dFByb3BzLCBuZXh0U3RhdGUpO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSGVscGVyIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfY2FsY3VsYXRlQ2hpbGRyZW5Ub1JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jYWxjdWxhdGVDaGlsZHJlblRvUmVuZGVyKCkge1xuICAgICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0aGlzLnByb3BzO1xuICAgICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnN0YXRlO1xuICAgICAgdmFyIGNlbGxSZW5kZXJlciA9IHByb3BzLmNlbGxSZW5kZXJlcjtcbiAgICAgIHZhciBjZWxsUmFuZ2VSZW5kZXJlciA9IHByb3BzLmNlbGxSYW5nZVJlbmRlcmVyO1xuICAgICAgdmFyIGNvbHVtbkNvdW50ID0gcHJvcHMuY29sdW1uQ291bnQ7XG4gICAgICB2YXIgaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0O1xuICAgICAgdmFyIG92ZXJzY2FuQ29sdW1uQ291bnQgPSBwcm9wcy5vdmVyc2NhbkNvbHVtbkNvdW50O1xuICAgICAgdmFyIG92ZXJzY2FuUm93Q291bnQgPSBwcm9wcy5vdmVyc2NhblJvd0NvdW50O1xuICAgICAgdmFyIHJvd0NvdW50ID0gcHJvcHMucm93Q291bnQ7XG4gICAgICB2YXIgd2lkdGggPSBwcm9wcy53aWR0aDtcbiAgICAgIHZhciBpc1Njcm9sbGluZyA9IHN0YXRlLmlzU2Nyb2xsaW5nO1xuICAgICAgdmFyIHNjcm9sbERpcmVjdGlvbkhvcml6b250YWwgPSBzdGF0ZS5zY3JvbGxEaXJlY3Rpb25Ib3Jpem9udGFsO1xuICAgICAgdmFyIHNjcm9sbERpcmVjdGlvblZlcnRpY2FsID0gc3RhdGUuc2Nyb2xsRGlyZWN0aW9uVmVydGljYWw7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IHN0YXRlLnNjcm9sbExlZnQ7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gc3RhdGUuc2Nyb2xsVG9wO1xuXG5cbiAgICAgIHRoaXMuX2NoaWxkcmVuVG9EaXNwbGF5ID0gW107XG5cbiAgICAgIC8vIFJlbmRlciBvbmx5IGVub3VnaCBjb2x1bW5zIGFuZCByb3dzIHRvIGNvdmVyIHRoZSB2aXNpYmxlIGFyZWEgb2YgdGhlIGdyaWQuXG4gICAgICBpZiAoaGVpZ2h0ID4gMCAmJiB3aWR0aCA+IDApIHtcbiAgICAgICAgdmFyIHZpc2libGVDb2x1bW5JbmRpY2VzID0gdGhpcy5fY29sdW1uU2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5nZXRWaXNpYmxlQ2VsbFJhbmdlKHtcbiAgICAgICAgICBjb250YWluZXJTaXplOiB3aWR0aCxcbiAgICAgICAgICBvZmZzZXQ6IHNjcm9sbExlZnRcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB2aXNpYmxlUm93SW5kaWNlcyA9IHRoaXMuX3Jvd1NpemVBbmRQb3NpdGlvbk1hbmFnZXIuZ2V0VmlzaWJsZUNlbGxSYW5nZSh7XG4gICAgICAgICAgY29udGFpbmVyU2l6ZTogaGVpZ2h0LFxuICAgICAgICAgIG9mZnNldDogc2Nyb2xsVG9wXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBob3Jpem9udGFsT2Zmc2V0QWRqdXN0bWVudCA9IHRoaXMuX2NvbHVtblNpemVBbmRQb3NpdGlvbk1hbmFnZXIuZ2V0T2Zmc2V0QWRqdXN0bWVudCh7XG4gICAgICAgICAgY29udGFpbmVyU2l6ZTogd2lkdGgsXG4gICAgICAgICAgb2Zmc2V0OiBzY3JvbGxMZWZ0XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdmVydGljYWxPZmZzZXRBZGp1c3RtZW50ID0gdGhpcy5fcm93U2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5nZXRPZmZzZXRBZGp1c3RtZW50KHtcbiAgICAgICAgICBjb250YWluZXJTaXplOiBoZWlnaHQsXG4gICAgICAgICAgb2Zmc2V0OiBzY3JvbGxUb3BcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3RvcmUgZm9yIF9pbnZva2VPbkdyaWRSZW5kZXJlZEhlbHBlcigpXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkQ29sdW1uU3RhcnRJbmRleCA9IHZpc2libGVDb2x1bW5JbmRpY2VzLnN0YXJ0O1xuICAgICAgICB0aGlzLl9yZW5kZXJlZENvbHVtblN0b3BJbmRleCA9IHZpc2libGVDb2x1bW5JbmRpY2VzLnN0b3A7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkUm93U3RhcnRJbmRleCA9IHZpc2libGVSb3dJbmRpY2VzLnN0YXJ0O1xuICAgICAgICB0aGlzLl9yZW5kZXJlZFJvd1N0b3BJbmRleCA9IHZpc2libGVSb3dJbmRpY2VzLnN0b3A7XG5cbiAgICAgICAgdmFyIG92ZXJzY2FuQ29sdW1uSW5kaWNlcyA9ICgwLCBfZ2V0T3ZlcnNjYW5JbmRpY2VzMi5kZWZhdWx0KSh7XG4gICAgICAgICAgY2VsbENvdW50OiBjb2x1bW5Db3VudCxcbiAgICAgICAgICBvdmVyc2NhbkNlbGxzQ291bnQ6IG92ZXJzY2FuQ29sdW1uQ291bnQsXG4gICAgICAgICAgc2Nyb2xsRGlyZWN0aW9uOiBzY3JvbGxEaXJlY3Rpb25Ib3Jpem9udGFsLFxuICAgICAgICAgIHN0YXJ0SW5kZXg6IHRoaXMuX3JlbmRlcmVkQ29sdW1uU3RhcnRJbmRleCxcbiAgICAgICAgICBzdG9wSW5kZXg6IHRoaXMuX3JlbmRlcmVkQ29sdW1uU3RvcEluZGV4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBvdmVyc2NhblJvd0luZGljZXMgPSAoMCwgX2dldE92ZXJzY2FuSW5kaWNlczIuZGVmYXVsdCkoe1xuICAgICAgICAgIGNlbGxDb3VudDogcm93Q291bnQsXG4gICAgICAgICAgb3ZlcnNjYW5DZWxsc0NvdW50OiBvdmVyc2NhblJvd0NvdW50LFxuICAgICAgICAgIHNjcm9sbERpcmVjdGlvbjogc2Nyb2xsRGlyZWN0aW9uVmVydGljYWwsXG4gICAgICAgICAgc3RhcnRJbmRleDogdGhpcy5fcmVuZGVyZWRSb3dTdGFydEluZGV4LFxuICAgICAgICAgIHN0b3BJbmRleDogdGhpcy5fcmVuZGVyZWRSb3dTdG9wSW5kZXhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3RvcmUgZm9yIF9pbnZva2VPbkdyaWRSZW5kZXJlZEhlbHBlcigpXG4gICAgICAgIHRoaXMuX2NvbHVtblN0YXJ0SW5kZXggPSBvdmVyc2NhbkNvbHVtbkluZGljZXMub3ZlcnNjYW5TdGFydEluZGV4O1xuICAgICAgICB0aGlzLl9jb2x1bW5TdG9wSW5kZXggPSBvdmVyc2NhbkNvbHVtbkluZGljZXMub3ZlcnNjYW5TdG9wSW5kZXg7XG4gICAgICAgIHRoaXMuX3Jvd1N0YXJ0SW5kZXggPSBvdmVyc2NhblJvd0luZGljZXMub3ZlcnNjYW5TdGFydEluZGV4O1xuICAgICAgICB0aGlzLl9yb3dTdG9wSW5kZXggPSBvdmVyc2NhblJvd0luZGljZXMub3ZlcnNjYW5TdG9wSW5kZXg7XG5cbiAgICAgICAgdGhpcy5fY2hpbGRyZW5Ub0Rpc3BsYXkgPSBjZWxsUmFuZ2VSZW5kZXJlcih7XG4gICAgICAgICAgY2VsbENhY2hlOiB0aGlzLl9jZWxsQ2FjaGUsXG4gICAgICAgICAgY2VsbFJlbmRlcmVyOiBjZWxsUmVuZGVyZXIsXG4gICAgICAgICAgY29sdW1uU2l6ZUFuZFBvc2l0aW9uTWFuYWdlcjogdGhpcy5fY29sdW1uU2l6ZUFuZFBvc2l0aW9uTWFuYWdlcixcbiAgICAgICAgICBjb2x1bW5TdGFydEluZGV4OiB0aGlzLl9jb2x1bW5TdGFydEluZGV4LFxuICAgICAgICAgIGNvbHVtblN0b3BJbmRleDogdGhpcy5fY29sdW1uU3RvcEluZGV4LFxuICAgICAgICAgIGhvcml6b250YWxPZmZzZXRBZGp1c3RtZW50OiBob3Jpem9udGFsT2Zmc2V0QWRqdXN0bWVudCxcbiAgICAgICAgICBpc1Njcm9sbGluZzogaXNTY3JvbGxpbmcsXG4gICAgICAgICAgcm93U2l6ZUFuZFBvc2l0aW9uTWFuYWdlcjogdGhpcy5fcm93U2l6ZUFuZFBvc2l0aW9uTWFuYWdlcixcbiAgICAgICAgICByb3dTdGFydEluZGV4OiB0aGlzLl9yb3dTdGFydEluZGV4LFxuICAgICAgICAgIHJvd1N0b3BJbmRleDogdGhpcy5fcm93U3RvcEluZGV4LFxuICAgICAgICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgICAgICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3AsXG4gICAgICAgICAgc3R5bGVDYWNoZTogdGhpcy5fc3R5bGVDYWNoZSxcbiAgICAgICAgICB2ZXJ0aWNhbE9mZnNldEFkanVzdG1lbnQ6IHZlcnRpY2FsT2Zmc2V0QWRqdXN0bWVudCxcbiAgICAgICAgICB2aXNpYmxlQ29sdW1uSW5kaWNlczogdmlzaWJsZUNvbHVtbkluZGljZXMsXG4gICAgICAgICAgdmlzaWJsZVJvd0luZGljZXM6IHZpc2libGVSb3dJbmRpY2VzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYW4gOmlzU2Nyb2xsaW5nIGZsYWcgZm9yIGEgc21hbGwgd2luZG93IG9mIHRpbWUuXG4gICAgICogVGhpcyBmbGFnIGlzIHVzZWQgdG8gZGlzYWJsZSBwb2ludGVyIGV2ZW50cyBvbiB0aGUgc2Nyb2xsYWJsZSBwb3J0aW9uIG9mIHRoZSBHcmlkLlxuICAgICAqIFRoaXMgcHJldmVudHMgamVya3kvc3R1dHRlcnkgbW91c2Utd2hlZWwgc2Nyb2xsaW5nLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfZGVib3VuY2VTY3JvbGxFbmRlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9kZWJvdW5jZVNjcm9sbEVuZGVkKCkge1xuICAgICAgdmFyIHNjcm9sbGluZ1Jlc2V0VGltZUludGVydmFsID0gdGhpcy5wcm9wcy5zY3JvbGxpbmdSZXNldFRpbWVJbnRlcnZhbDtcblxuXG4gICAgICBpZiAodGhpcy5fZGlzYWJsZVBvaW50ZXJFdmVudHNUaW1lb3V0SWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc2FibGVQb2ludGVyRXZlbnRzVGltZW91dElkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZGlzYWJsZVBvaW50ZXJFdmVudHNUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuX2RlYm91bmNlU2Nyb2xsRW5kZWRDYWxsYmFjaywgc2Nyb2xsaW5nUmVzZXRUaW1lSW50ZXJ2YWwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19kZWJvdW5jZVNjcm9sbEVuZGVkQ2FsbGJhY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVib3VuY2VTY3JvbGxFbmRlZENhbGxiYWNrKCkge1xuICAgICAgdGhpcy5fZGlzYWJsZVBvaW50ZXJFdmVudHNUaW1lb3V0SWQgPSBudWxsO1xuXG4gICAgICB2YXIgc3R5bGVDYWNoZSA9IHRoaXMuX3N0eWxlQ2FjaGU7XG5cbiAgICAgIC8vIFJlc2V0IGNlbGwgYW5kIHN0eWxlIGNhY2hlcyBvbmNlIHNjcm9sbGluZyBzdG9wcy5cbiAgICAgIC8vIFRoaXMgbWFrZXMgR3JpZCBzaW1wbGVyIHRvIHVzZSAoc2luY2UgY2VsbHMgY29tbW9ubHkgY2hhbmdlKS5cbiAgICAgIC8vIEFuZCBpdCBrZWVwcyB0aGUgY2FjaGVzIGZyb20gZ3Jvd2luZyB0b28gbGFyZ2UuXG4gICAgICAvLyBQZXJmb3JtYW5jZSBpcyBtb3N0IHNlbnNpdGl2ZSB3aGVuIGEgdXNlciBpcyBzY3JvbGxpbmcuXG4gICAgICB0aGlzLl9jZWxsQ2FjaGUgPSB7fTtcbiAgICAgIHRoaXMuX3N0eWxlQ2FjaGUgPSB7fTtcblxuICAgICAgLy8gQ29weSBvdmVyIHRoZSB2aXNpYmxlIGNlbGwgc3R5bGVzIHNvIGF2b2lkIHVubmVjZXNzYXJ5IHJlLXJlbmRlci5cbiAgICAgIGZvciAodmFyIHJvd0luZGV4ID0gdGhpcy5fcm93U3RhcnRJbmRleDsgcm93SW5kZXggPD0gdGhpcy5fcm93U3RvcEluZGV4OyByb3dJbmRleCsrKSB7XG4gICAgICAgIGZvciAodmFyIGNvbHVtbkluZGV4ID0gdGhpcy5fY29sdW1uU3RhcnRJbmRleDsgY29sdW1uSW5kZXggPD0gdGhpcy5fY29sdW1uU3RvcEluZGV4OyBjb2x1bW5JbmRleCsrKSB7XG4gICAgICAgICAgdmFyIGtleSA9IHJvd0luZGV4ICsgJy0nICsgY29sdW1uSW5kZXg7XG4gICAgICAgICAgdGhpcy5fc3R5bGVDYWNoZVtrZXldID0gc3R5bGVDYWNoZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc1Njcm9sbGluZzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19nZXRFc3RpbWF0ZWRDb2x1bW5TaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldEVzdGltYXRlZENvbHVtblNpemUocHJvcHMpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgcHJvcHMuY29sdW1uV2lkdGggPT09ICdudW1iZXInID8gcHJvcHMuY29sdW1uV2lkdGggOiBwcm9wcy5lc3RpbWF0ZWRDb2x1bW5TaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19nZXRFc3RpbWF0ZWRSb3dTaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldEVzdGltYXRlZFJvd1NpemUocHJvcHMpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgcHJvcHMucm93SGVpZ2h0ID09PSAnbnVtYmVyJyA/IHByb3BzLnJvd0hlaWdodCA6IHByb3BzLmVzdGltYXRlZFJvd1NpemU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2ludm9rZU9uR3JpZFJlbmRlcmVkSGVscGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ludm9rZU9uR3JpZFJlbmRlcmVkSGVscGVyKCkge1xuICAgICAgdmFyIG9uU2VjdGlvblJlbmRlcmVkID0gdGhpcy5wcm9wcy5vblNlY3Rpb25SZW5kZXJlZDtcblxuXG4gICAgICB0aGlzLl9vbkdyaWRSZW5kZXJlZE1lbW9pemVyKHtcbiAgICAgICAgY2FsbGJhY2s6IG9uU2VjdGlvblJlbmRlcmVkLFxuICAgICAgICBpbmRpY2VzOiB7XG4gICAgICAgICAgY29sdW1uT3ZlcnNjYW5TdGFydEluZGV4OiB0aGlzLl9jb2x1bW5TdGFydEluZGV4LFxuICAgICAgICAgIGNvbHVtbk92ZXJzY2FuU3RvcEluZGV4OiB0aGlzLl9jb2x1bW5TdG9wSW5kZXgsXG4gICAgICAgICAgY29sdW1uU3RhcnRJbmRleDogdGhpcy5fcmVuZGVyZWRDb2x1bW5TdGFydEluZGV4LFxuICAgICAgICAgIGNvbHVtblN0b3BJbmRleDogdGhpcy5fcmVuZGVyZWRDb2x1bW5TdG9wSW5kZXgsXG4gICAgICAgICAgcm93T3ZlcnNjYW5TdGFydEluZGV4OiB0aGlzLl9yb3dTdGFydEluZGV4LFxuICAgICAgICAgIHJvd092ZXJzY2FuU3RvcEluZGV4OiB0aGlzLl9yb3dTdG9wSW5kZXgsXG4gICAgICAgICAgcm93U3RhcnRJbmRleDogdGhpcy5fcmVuZGVyZWRSb3dTdGFydEluZGV4LFxuICAgICAgICAgIHJvd1N0b3BJbmRleDogdGhpcy5fcmVuZGVyZWRSb3dTdG9wSW5kZXhcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2ludm9rZU9uU2Nyb2xsTWVtb2l6ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaW52b2tlT25TY3JvbGxNZW1vaXplcihfcmVmNCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciBzY3JvbGxMZWZ0ID0gX3JlZjQuc2Nyb2xsTGVmdDtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSBfcmVmNC5zY3JvbGxUb3A7XG4gICAgICB2YXIgdG90YWxDb2x1bW5zV2lkdGggPSBfcmVmNC50b3RhbENvbHVtbnNXaWR0aDtcbiAgICAgIHZhciB0b3RhbFJvd3NIZWlnaHQgPSBfcmVmNC50b3RhbFJvd3NIZWlnaHQ7XG5cbiAgICAgIHRoaXMuX29uU2Nyb2xsTWVtb2l6ZXIoe1xuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2soX3JlZjUpIHtcbiAgICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IF9yZWY1LnNjcm9sbExlZnQ7XG4gICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IF9yZWY1LnNjcm9sbFRvcDtcbiAgICAgICAgICB2YXIgX3Byb3BzNSA9IF90aGlzNS5wcm9wcztcbiAgICAgICAgICB2YXIgaGVpZ2h0ID0gX3Byb3BzNS5oZWlnaHQ7XG4gICAgICAgICAgdmFyIG9uU2Nyb2xsID0gX3Byb3BzNS5vblNjcm9sbDtcbiAgICAgICAgICB2YXIgd2lkdGggPSBfcHJvcHM1LndpZHRoO1xuXG5cbiAgICAgICAgICBvblNjcm9sbCh7XG4gICAgICAgICAgICBjbGllbnRIZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudFdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodDogdG90YWxSb3dzSGVpZ2h0LFxuICAgICAgICAgICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wLFxuICAgICAgICAgICAgc2Nyb2xsV2lkdGg6IHRvdGFsQ29sdW1uc1dpZHRoXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGluZGljZXM6IHtcbiAgICAgICAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgICAgICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19zZXRTY3JvbGxQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRTY3JvbGxQb3NpdGlvbihfcmVmNikge1xuICAgICAgdmFyIHNjcm9sbExlZnQgPSBfcmVmNi5zY3JvbGxMZWZ0O1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IF9yZWY2LnNjcm9sbFRvcDtcblxuICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICBzY3JvbGxQb3NpdGlvbkNoYW5nZVJlYXNvbjogU0NST0xMX1BPU0lUSU9OX0NIQU5HRV9SRUFTT05TLlJFUVVFU1RFRFxuICAgICAgfTtcblxuICAgICAgaWYgKHNjcm9sbExlZnQgPj0gMCkge1xuICAgICAgICBuZXdTdGF0ZS5zY3JvbGxEaXJlY3Rpb25Ib3Jpem9udGFsID0gc2Nyb2xsTGVmdCA+IHRoaXMuc3RhdGUuc2Nyb2xsTGVmdCA/IF9nZXRPdmVyc2NhbkluZGljZXMuU0NST0xMX0RJUkVDVElPTl9GT1JXQVJEIDogX2dldE92ZXJzY2FuSW5kaWNlcy5TQ1JPTExfRElSRUNUSU9OX0JBQ0tXQVJEO1xuICAgICAgICBuZXdTdGF0ZS5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbFRvcCA+PSAwKSB7XG4gICAgICAgIG5ld1N0YXRlLnNjcm9sbERpcmVjdGlvblZlcnRpY2FsID0gc2Nyb2xsVG9wID4gdGhpcy5zdGF0ZS5zY3JvbGxUb3AgPyBfZ2V0T3ZlcnNjYW5JbmRpY2VzLlNDUk9MTF9ESVJFQ1RJT05fRk9SV0FSRCA6IF9nZXRPdmVyc2NhbkluZGljZXMuU0NST0xMX0RJUkVDVElPTl9CQUNLV0FSRDtcbiAgICAgICAgbmV3U3RhdGUuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2Nyb2xsTGVmdCA+PSAwICYmIHNjcm9sbExlZnQgIT09IHRoaXMuc3RhdGUuc2Nyb2xsTGVmdCB8fCBzY3JvbGxUb3AgPj0gMCAmJiBzY3JvbGxUb3AgIT09IHRoaXMuc3RhdGUuc2Nyb2xsVG9wKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ193cmFwUHJvcGVydHlHZXR0ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfd3JhcFByb3BlcnR5R2V0dGVyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IHZhbHVlIDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ193cmFwU2l6ZUdldHRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF93cmFwU2l6ZUdldHRlcihzaXplKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd3JhcFByb3BlcnR5R2V0dGVyKHNpemUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ191cGRhdGVTY3JvbGxMZWZ0Rm9yU2Nyb2xsVG9Db2x1bW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlU2Nyb2xsTGVmdEZvclNjcm9sbFRvQ29sdW1uKCkge1xuICAgICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0aGlzLnByb3BzO1xuICAgICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnN0YXRlO1xuICAgICAgdmFyIGNvbHVtbkNvdW50ID0gcHJvcHMuY29sdW1uQ291bnQ7XG4gICAgICB2YXIgc2Nyb2xsVG9BbGlnbm1lbnQgPSBwcm9wcy5zY3JvbGxUb0FsaWdubWVudDtcbiAgICAgIHZhciBzY3JvbGxUb0NvbHVtbiA9IHByb3BzLnNjcm9sbFRvQ29sdW1uO1xuICAgICAgdmFyIHdpZHRoID0gcHJvcHMud2lkdGg7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IHN0YXRlLnNjcm9sbExlZnQ7XG5cblxuICAgICAgaWYgKHNjcm9sbFRvQ29sdW1uID49IDAgJiYgY29sdW1uQ291bnQgPiAwKSB7XG4gICAgICAgIHZhciB0YXJnZXRJbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGNvbHVtbkNvdW50IC0gMSwgc2Nyb2xsVG9Db2x1bW4pKTtcblxuICAgICAgICB2YXIgY2FsY3VsYXRlZFNjcm9sbExlZnQgPSB0aGlzLl9jb2x1bW5TaXplQW5kUG9zaXRpb25NYW5hZ2VyLmdldFVwZGF0ZWRPZmZzZXRGb3JJbmRleCh7XG4gICAgICAgICAgYWxpZ246IHNjcm9sbFRvQWxpZ25tZW50LFxuICAgICAgICAgIGNvbnRhaW5lclNpemU6IHdpZHRoLFxuICAgICAgICAgIGN1cnJlbnRPZmZzZXQ6IHNjcm9sbExlZnQsXG4gICAgICAgICAgdGFyZ2V0SW5kZXg6IHRhcmdldEluZGV4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzY3JvbGxMZWZ0ICE9PSBjYWxjdWxhdGVkU2Nyb2xsTGVmdCkge1xuICAgICAgICAgIHRoaXMuX3NldFNjcm9sbFBvc2l0aW9uKHtcbiAgICAgICAgICAgIHNjcm9sbExlZnQ6IGNhbGN1bGF0ZWRTY3JvbGxMZWZ0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfdXBkYXRlU2Nyb2xsVG9wRm9yU2Nyb2xsVG9Sb3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlU2Nyb2xsVG9wRm9yU2Nyb2xsVG9Sb3coKSB7XG4gICAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMucHJvcHM7XG4gICAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMuc3RhdGU7XG4gICAgICB2YXIgaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0O1xuICAgICAgdmFyIHJvd0NvdW50ID0gcHJvcHMucm93Q291bnQ7XG4gICAgICB2YXIgc2Nyb2xsVG9BbGlnbm1lbnQgPSBwcm9wcy5zY3JvbGxUb0FsaWdubWVudDtcbiAgICAgIHZhciBzY3JvbGxUb1JvdyA9IHByb3BzLnNjcm9sbFRvUm93O1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IHN0YXRlLnNjcm9sbFRvcDtcblxuXG4gICAgICBpZiAoc2Nyb2xsVG9Sb3cgPj0gMCAmJiByb3dDb3VudCA+IDApIHtcbiAgICAgICAgdmFyIHRhcmdldEluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocm93Q291bnQgLSAxLCBzY3JvbGxUb1JvdykpO1xuXG4gICAgICAgIHZhciBjYWxjdWxhdGVkU2Nyb2xsVG9wID0gdGhpcy5fcm93U2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5nZXRVcGRhdGVkT2Zmc2V0Rm9ySW5kZXgoe1xuICAgICAgICAgIGFsaWduOiBzY3JvbGxUb0FsaWdubWVudCxcbiAgICAgICAgICBjb250YWluZXJTaXplOiBoZWlnaHQsXG4gICAgICAgICAgY3VycmVudE9mZnNldDogc2Nyb2xsVG9wLFxuICAgICAgICAgIHRhcmdldEluZGV4OiB0YXJnZXRJbmRleFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2Nyb2xsVG9wICE9PSBjYWxjdWxhdGVkU2Nyb2xsVG9wKSB7XG4gICAgICAgICAgdGhpcy5fc2V0U2Nyb2xsUG9zaXRpb24oe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiBjYWxjdWxhdGVkU2Nyb2xsVG9wXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfb25TY3JvbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25TY3JvbGwoZXZlbnQpIHtcbiAgICAgIC8vIEluIGNlcnRhaW4gZWRnZS1jYXNlcyBSZWFjdCBkaXNwYXRjaGVzIGFuIG9uU2Nyb2xsIGV2ZW50IHdpdGggYW4gaW52YWxpZCB0YXJnZXQuc2Nyb2xsTGVmdCAvIHRhcmdldC5zY3JvbGxUb3AuXG4gICAgICAvLyBUaGlzIGludmFsaWQgZXZlbnQgY2FuIGJlIGRldGVjdGVkIGJ5IGNvbXBhcmluZyBldmVudC50YXJnZXQgdG8gdGhpcyBjb21wb25lbnQncyBzY3JvbGxhYmxlIERPTSBlbGVtZW50LlxuICAgICAgLy8gU2VlIGlzc3VlICM0MDQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzLl9zY3JvbGxpbmdDb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmV2ZW50IHBvaW50ZXIgZXZlbnRzIGZyb20gaW50ZXJydXB0aW5nIGEgc21vb3RoIHNjcm9sbFxuICAgICAgdGhpcy5fZGVib3VuY2VTY3JvbGxFbmRlZCgpO1xuXG4gICAgICAvLyBXaGVuIHRoaXMgY29tcG9uZW50IGlzIHNocnVuayBkcmFzdGljYWxseSwgUmVhY3QgZGlzcGF0Y2hlcyBhIHNlcmllcyBvZiBiYWNrLXRvLWJhY2sgc2Nyb2xsIGV2ZW50cyxcbiAgICAgIC8vIEdyYWR1YWxseSBjb252ZXJnaW5nIG9uIGEgc2Nyb2xsVG9wIHRoYXQgaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIG5ldywgc21hbGxlciBoZWlnaHQuXG4gICAgICAvLyBUaGlzIGNhdXNlcyBhIHNlcmllcyBvZiByYXBpZCByZW5kZXJzIHRoYXQgaXMgc2xvdyBmb3IgbG9uZyBsaXN0cy5cbiAgICAgIC8vIFdlIGNhbiBhdm9pZCB0aGF0IGJ5IGRvaW5nIHNvbWUgc2ltcGxlIGJvdW5kcyBjaGVja2luZyB0byBlbnN1cmUgdGhhdCBzY3JvbGxUb3AgbmV2ZXIgZXhjZWVkcyB0aGUgdG90YWwgaGVpZ2h0LlxuICAgICAgdmFyIF9wcm9wczYgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGF1dG9IZWlnaHQgPSBfcHJvcHM2LmF1dG9IZWlnaHQ7XG4gICAgICB2YXIgaGVpZ2h0ID0gX3Byb3BzNi5oZWlnaHQ7XG4gICAgICB2YXIgd2lkdGggPSBfcHJvcHM2LndpZHRoO1xuXG4gICAgICB2YXIgc2Nyb2xsYmFyU2l6ZSA9IHRoaXMuX3Njcm9sbGJhclNpemU7XG4gICAgICB2YXIgdG90YWxSb3dzSGVpZ2h0ID0gdGhpcy5fcm93U2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5nZXRUb3RhbFNpemUoKTtcbiAgICAgIHZhciB0b3RhbENvbHVtbnNXaWR0aCA9IHRoaXMuX2NvbHVtblNpemVBbmRQb3NpdGlvbk1hbmFnZXIuZ2V0VG90YWxTaXplKCk7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IE1hdGgubWluKE1hdGgubWF4KDAsIHRvdGFsQ29sdW1uc1dpZHRoIC0gd2lkdGggKyBzY3JvbGxiYXJTaXplKSwgZXZlbnQudGFyZ2V0LnNjcm9sbExlZnQpO1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IE1hdGgubWluKE1hdGgubWF4KDAsIHRvdGFsUm93c0hlaWdodCAtIGhlaWdodCArIHNjcm9sbGJhclNpemUpLCBldmVudC50YXJnZXQuc2Nyb2xsVG9wKTtcblxuICAgICAgLy8gQ2VydGFpbiBkZXZpY2VzIChsaWtlIEFwcGxlIHRvdWNocGFkKSByYXBpZC1maXJlIGR1cGxpY2F0ZSBldmVudHMuXG4gICAgICAvLyBEb24ndCBmb3JjZSBhIHJlLXJlbmRlciBpZiB0aGlzIGlzIHRoZSBjYXNlLlxuICAgICAgLy8gVGhlIG1vdXNlIG1heSBtb3ZlIGZhc3RlciB0aGVuIHRoZSBhbmltYXRpb24gZnJhbWUgZG9lcy5cbiAgICAgIC8vIFVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdG8gYXZvaWQgb3Zlci11cGRhdGluZy5cbiAgICAgIGlmICh0aGlzLnN0YXRlLnNjcm9sbExlZnQgIT09IHNjcm9sbExlZnQgfHwgdGhpcy5zdGF0ZS5zY3JvbGxUb3AgIT09IHNjcm9sbFRvcCkge1xuICAgICAgICAvLyBUcmFjayBzY3JvbGxpbmcgZGlyZWN0aW9uIHNvIHdlIGNhbiBtb3JlIGVmZmljaWVudGx5IG92ZXJzY2FuIHJvd3MgdG8gcmVkdWNlIGVtcHR5IHNwYWNlIGFyb3VuZCB0aGUgZWRnZXMgd2hpbGUgc2Nyb2xsaW5nLlxuICAgICAgICB2YXIgc2Nyb2xsRGlyZWN0aW9uSG9yaXpvbnRhbCA9IHNjcm9sbExlZnQgPiB0aGlzLnN0YXRlLnNjcm9sbExlZnQgPyBfZ2V0T3ZlcnNjYW5JbmRpY2VzLlNDUk9MTF9ESVJFQ1RJT05fRk9SV0FSRCA6IF9nZXRPdmVyc2NhbkluZGljZXMuU0NST0xMX0RJUkVDVElPTl9CQUNLV0FSRDtcbiAgICAgICAgdmFyIHNjcm9sbERpcmVjdGlvblZlcnRpY2FsID0gc2Nyb2xsVG9wID4gdGhpcy5zdGF0ZS5zY3JvbGxUb3AgPyBfZ2V0T3ZlcnNjYW5JbmRpY2VzLlNDUk9MTF9ESVJFQ1RJT05fRk9SV0FSRCA6IF9nZXRPdmVyc2NhbkluZGljZXMuU0NST0xMX0RJUkVDVElPTl9CQUNLV0FSRDtcblxuICAgICAgICB2YXIgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgaXNTY3JvbGxpbmc6IHRydWUsXG4gICAgICAgICAgc2Nyb2xsRGlyZWN0aW9uSG9yaXpvbnRhbDogc2Nyb2xsRGlyZWN0aW9uSG9yaXpvbnRhbCxcbiAgICAgICAgICBzY3JvbGxEaXJlY3Rpb25WZXJ0aWNhbDogc2Nyb2xsRGlyZWN0aW9uVmVydGljYWwsXG4gICAgICAgICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICAgICAgICBzY3JvbGxQb3NpdGlvbkNoYW5nZVJlYXNvbjogU0NST0xMX1BPU0lUSU9OX0NIQU5HRV9SRUFTT05TLk9CU0VSVkVEXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFhdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgbmV3U3RhdGUuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2ludm9rZU9uU2Nyb2xsTWVtb2l6ZXIoeyBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LCBzY3JvbGxUb3A6IHNjcm9sbFRvcCwgdG90YWxDb2x1bW5zV2lkdGg6IHRvdGFsQ29sdW1uc1dpZHRoLCB0b3RhbFJvd3NIZWlnaHQ6IHRvdGFsUm93c0hlaWdodCB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR3JpZDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkdyaWQuZGVmYXVsdFByb3BzID0ge1xuICAnYXJpYS1sYWJlbCc6ICdncmlkJyxcbiAgY2VsbFJhbmdlUmVuZGVyZXI6IF9kZWZhdWx0Q2VsbFJhbmdlUmVuZGVyZXIyLmRlZmF1bHQsXG4gIGVzdGltYXRlZENvbHVtblNpemU6IDEwMCxcbiAgZXN0aW1hdGVkUm93U2l6ZTogMzAsXG4gIG5vQ29udGVudFJlbmRlcmVyOiBmdW5jdGlvbiBub0NvbnRlbnRSZW5kZXJlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgb25TY3JvbGw6IGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBvblNlY3Rpb25SZW5kZXJlZDogZnVuY3Rpb24gb25TZWN0aW9uUmVuZGVyZWQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIG92ZXJzY2FuQ29sdW1uQ291bnQ6IDAsXG4gIG92ZXJzY2FuUm93Q291bnQ6IDEwLFxuICBzY3JvbGxpbmdSZXNldFRpbWVJbnRlcnZhbDogREVGQVVMVF9TQ1JPTExJTkdfUkVTRVRfVElNRV9JTlRFUlZBTCxcbiAgc2Nyb2xsVG9BbGlnbm1lbnQ6ICdhdXRvJyxcbiAgc3R5bGU6IHt9LFxuICB0YWJJbmRleDogMFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdyaWQ7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBHcmlkLnByb3BUeXBlcyA9IHtcbiAgJ2FyaWEtbGFiZWwnOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogU2V0IHRoZSB3aWR0aCBvZiB0aGUgaW5uZXIgc2Nyb2xsYWJsZSBjb250YWluZXIgdG8gJ2F1dG8nLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3Igc2luZ2xlLWNvbHVtbiBHcmlkcyB0byBlbnN1cmUgdGhhdCB0aGUgY29sdW1uIGRvZXNuJ3QgZXh0ZW5kIGJlbG93IGEgdmVydGljYWwgc2Nyb2xsYmFyLlxuICAgKi9cbiAgYXV0b0NvbnRhaW5lcldpZHRoOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgZml4ZWQgaGVpZ2h0IGZyb20gdGhlIHNjcm9sbGluZ0NvbnRhaW5lciBzbyB0aGF0IHRoZSB0b3RhbCBoZWlnaHRcbiAgICogb2Ygcm93cyBjYW4gc3RyZXRjaCB0aGUgd2luZG93LiBJbnRlbmRlZCBmb3IgdXNlIHdpdGggV2luZG93U2Nyb2xsZXJcbiAgICovXG4gIGF1dG9IZWlnaHQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUmVzcG9uc2libGUgZm9yIHJlbmRlcmluZyBhIGNlbGwgZ2l2ZW4gYW4gcm93IGFuZCBjb2x1bW4gaW5kZXguXG4gICAqIFNob3VsZCBpbXBsZW1lbnQgdGhlIGZvbGxvd2luZyBpbnRlcmZhY2U6ICh7IGNvbHVtbkluZGV4OiBudW1iZXIsIHJvd0luZGV4OiBudW1iZXIgfSk6IFByb3BUeXBlcy5ub2RlXG4gICAqL1xuICBjZWxsUmVuZGVyZXI6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgcmVuZGVyaW5nIGEgZ3JvdXAgb2YgY2VsbHMgZ2l2ZW4gdGhlaXIgaW5kZXggcmFuZ2VzLlxuICAgKiBTaG91bGQgaW1wbGVtZW50IHRoZSBmb2xsb3dpbmcgaW50ZXJmYWNlOiAoe1xuICAgKiAgIGNlbGxDYWNoZTogTWFwLFxuICAgKiAgIGNlbGxSZW5kZXJlcjogRnVuY3Rpb24sXG4gICAqICAgY29sdW1uU2l6ZUFuZFBvc2l0aW9uTWFuYWdlcjogQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIsXG4gICAqICAgY29sdW1uU3RhcnRJbmRleDogbnVtYmVyLFxuICAgKiAgIGNvbHVtblN0b3BJbmRleDogbnVtYmVyLFxuICAgKiAgIGlzU2Nyb2xsaW5nOiBib29sZWFuLFxuICAgKiAgIHJvd1NpemVBbmRQb3NpdGlvbk1hbmFnZXI6IENlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyLFxuICAgKiAgIHJvd1N0YXJ0SW5kZXg6IG51bWJlcixcbiAgICogICByb3dTdG9wSW5kZXg6IG51bWJlcixcbiAgICogICBzY3JvbGxMZWZ0OiBudW1iZXIsXG4gICAqICAgc2Nyb2xsVG9wOiBudW1iZXJcbiAgICogfSk6IEFycmF5PFByb3BUeXBlcy5ub2RlPlxuICAgKi9cbiAgY2VsbFJhbmdlUmVuZGVyZXI6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBjdXN0b20gQ1NTIGNsYXNzIG5hbWUgdG8gYXR0YWNoIHRvIHJvb3QgR3JpZCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIGNvbHVtbnMgaW4gZ3JpZC5cbiAgICovXG4gIGNvbHVtbkNvdW50OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBFaXRoZXIgYSBmaXhlZCBjb2x1bW4gd2lkdGggKG51bWJlcikgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHdpZHRoIG9mIGEgY29sdW1uIGdpdmVuIGl0cyBpbmRleC5cbiAgICogU2hvdWxkIGltcGxlbWVudCB0aGUgZm9sbG93aW5nIGludGVyZmFjZTogKGluZGV4OiBudW1iZXIpOiBudW1iZXJcbiAgICovXG4gIGNvbHVtbldpZHRoOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdC5Qcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqIE9wdGlvbmFsIGlubGluZSBzdHlsZSBhcHBsaWVkIHRvIGlubmVyIGNlbGwtY29udGFpbmVyICovXG4gIGNvbnRhaW5lclN0eWxlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVXNlZCB0byBlc3RpbWF0ZSB0aGUgdG90YWwgd2lkdGggb2YgYSBHcmlkIGJlZm9yZSBhbGwgb2YgaXRzIGNvbHVtbnMgaGF2ZSBhY3R1YWxseSBiZWVuIG1lYXN1cmVkLlxuICAgKiBUaGUgZXN0aW1hdGVkIHRvdGFsIHdpZHRoIGlzIGFkanVzdGVkIGFzIGNvbHVtbnMgYXJlIHJlbmRlcmVkLlxuICAgKi9cbiAgZXN0aW1hdGVkQ29sdW1uU2l6ZTogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVXNlZCB0byBlc3RpbWF0ZSB0aGUgdG90YWwgaGVpZ2h0IG9mIGEgR3JpZCBiZWZvcmUgYWxsIG9mIGl0cyByb3dzIGhhdmUgYWN0dWFsbHkgYmVlbiBtZWFzdXJlZC5cbiAgICogVGhlIGVzdGltYXRlZCB0b3RhbCBoZWlnaHQgaXMgYWRqdXN0ZWQgYXMgcm93cyBhcmUgcmVuZGVyZWQuXG4gICAqL1xuICBlc3RpbWF0ZWRSb3dTaXplOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBIZWlnaHQgb2YgR3JpZDsgdGhpcyBwcm9wZXJ0eSBkZXRlcm1pbmVzIHRoZSBudW1iZXIgb2YgdmlzaWJsZSAodnMgdmlydHVhbGl6ZWQpIHJvd3MuXG4gICAqL1xuICBoZWlnaHQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIGN1c3RvbSBpZCB0byBhdHRhY2ggdG8gcm9vdCBHcmlkIGVsZW1lbnQuXG4gICAqL1xuICBpZDogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHJlbmRlcmVyIHRvIGJlIHVzZWQgaW4gcGxhY2Ugb2Ygcm93cyB3aGVuIGVpdGhlciA6cm93Q291bnQgb3IgOmNvbHVtbkNvdW50IGlzIDAuXG4gICAqL1xuICBub0NvbnRlbnRSZW5kZXJlcjogX3JlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGludm9rZWQgd2hlbmV2ZXIgdGhlIHNjcm9sbCBvZmZzZXQgY2hhbmdlcyB3aXRoaW4gdGhlIGlubmVyIHNjcm9sbGFibGUgcmVnaW9uLlxuICAgKiBUaGlzIGNhbGxiYWNrIGNhbiBiZSB1c2VkIHRvIHN5bmMgc2Nyb2xsaW5nIGJldHdlZW4gbGlzdHMsIHRhYmxlcywgb3IgZ3JpZHMuXG4gICAqICh7IGNsaWVudEhlaWdodCwgY2xpZW50V2lkdGgsIHNjcm9sbEhlaWdodCwgc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wLCBzY3JvbGxXaWR0aCB9KTogdm9pZFxuICAgKi9cbiAgb25TY3JvbGw6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBpbnZva2VkIHdpdGggaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlY3Rpb24gb2YgdGhlIEdyaWQgdGhhdCB3YXMganVzdCByZW5kZXJlZC5cbiAgICogKHsgY29sdW1uU3RhcnRJbmRleCwgY29sdW1uU3RvcEluZGV4LCByb3dTdGFydEluZGV4LCByb3dTdG9wSW5kZXggfSk6IHZvaWRcbiAgICovXG4gIG9uU2VjdGlvblJlbmRlcmVkOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIGNvbHVtbnMgdG8gcmVuZGVyIGJlZm9yZS9hZnRlciB0aGUgdmlzaWJsZSBzZWN0aW9uIG9mIHRoZSBncmlkLlxuICAgKiBUaGVzZSBjb2x1bW5zIGNhbiBoZWxwIGZvciBzbW9vdGhlciBzY3JvbGxpbmcgb24gdG91Y2ggZGV2aWNlcyBvciBicm93c2VycyB0aGF0IHNlbmQgc2Nyb2xsIGV2ZW50cyBpbmZyZXF1ZW50bHkuXG4gICAqL1xuICBvdmVyc2NhbkNvbHVtbkNvdW50OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygcm93cyB0byByZW5kZXIgYWJvdmUvYmVsb3cgdGhlIHZpc2libGUgc2VjdGlvbiBvZiB0aGUgZ3JpZC5cbiAgICogVGhlc2Ugcm93cyBjYW4gaGVscCBmb3Igc21vb3RoZXIgc2Nyb2xsaW5nIG9uIHRvdWNoIGRldmljZXMgb3IgYnJvd3NlcnMgdGhhdCBzZW5kIHNjcm9sbCBldmVudHMgaW5mcmVxdWVudGx5LlxuICAgKi9cbiAgb3ZlcnNjYW5Sb3dDb3VudDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogRWl0aGVyIGEgZml4ZWQgcm93IGhlaWdodCAobnVtYmVyKSBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgaGVpZ2h0IG9mIGEgcm93IGdpdmVuIGl0cyBpbmRleC5cbiAgICogU2hvdWxkIGltcGxlbWVudCB0aGUgZm9sbG93aW5nIGludGVyZmFjZTogKHsgaW5kZXg6IG51bWJlciB9KTogbnVtYmVyXG4gICAqL1xuICByb3dIZWlnaHQ6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QuUHJvcFR5cGVzLm51bWJlciwgX3JlYWN0LlByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgaW4gZ3JpZC5cbiAgICovXG4gIHJvd0NvdW50OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gIC8qKiBXYWl0IHRoaXMgYW1vdW50IG9mIHRpbWUgYWZ0ZXIgdGhlIGxhc3Qgc2Nyb2xsIGV2ZW50IGJlZm9yZSByZXNldHRpbmcgR3JpZCBgcG9pbnRlci1ldmVudHNgLiAqL1xuICBzY3JvbGxpbmdSZXNldFRpbWVJbnRlcnZhbDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqIEhvcml6b250YWwgb2Zmc2V0LiAqL1xuICBzY3JvbGxMZWZ0OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQ29udHJvbHMgc2Nyb2xsLXRvLWNlbGwgYmVoYXZpb3Igb2YgdGhlIEdyaWQuXG4gICAqIFRoZSBkZWZhdWx0IChcImF1dG9cIikgc2Nyb2xscyB0aGUgbGVhc3QgYW1vdW50IHBvc3NpYmxlIHRvIGVuc3VyZSB0aGF0IHRoZSBzcGVjaWZpZWQgY2VsbCBpcyBmdWxseSB2aXNpYmxlLlxuICAgKiBVc2UgXCJzdGFydFwiIHRvIGFsaWduIGNlbGxzIHRvIHRoZSB0b3AvbGVmdCBvZiB0aGUgR3JpZCBhbmQgXCJlbmRcIiB0byBhbGlnbiBib3R0b20vcmlnaHQuXG4gICAqL1xuICBzY3JvbGxUb0FsaWdubWVudDogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2F1dG8nLCAnZW5kJywgJ3N0YXJ0JywgJ2NlbnRlciddKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBDb2x1bW4gaW5kZXggdG8gZW5zdXJlIHZpc2libGUgKGJ5IGZvcmNlZnVsbHkgc2Nyb2xsaW5nIGlmIG5lY2Vzc2FyeSlcbiAgICovXG4gIHNjcm9sbFRvQ29sdW1uOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblxuICAvKiogVmVydGljYWwgb2Zmc2V0LiAqL1xuICBzY3JvbGxUb3A6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBSb3cgaW5kZXggdG8gZW5zdXJlIHZpc2libGUgKGJ5IGZvcmNlZnVsbHkgc2Nyb2xsaW5nIGlmIG5lY2Vzc2FyeSlcbiAgICovXG4gIHNjcm9sbFRvUm93OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblxuICAvKiogT3B0aW9uYWwgaW5saW5lIHN0eWxlICovXG4gIHN0eWxlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKiogVGFiIGluZGV4IGZvciBmb2N1cyAqL1xuICB0YWJJbmRleDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFdpZHRoIG9mIEdyaWQ7IHRoaXMgcHJvcGVydHkgZGV0ZXJtaW5lcyB0aGUgbnVtYmVyIG9mIHZpc2libGUgKHZzIHZpcnR1YWxpemVkKSBjb2x1bW5zLlxuICAgKi9cbiAgd2lkdGg6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvR3JpZC9HcmlkLmpzXG4vLyBtb2R1bGUgaWQgPSA4NTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDEwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0Q2VsbFJhbmdlUmVuZGVyZXIgPSBleHBvcnRzLkdyaWQgPSBleHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfR3JpZDIgPSByZXF1aXJlKCcuL0dyaWQnKTtcblxudmFyIF9HcmlkMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dyaWQyKTtcblxudmFyIF9kZWZhdWx0Q2VsbFJhbmdlUmVuZGVyZXIyID0gcmVxdWlyZSgnLi9kZWZhdWx0Q2VsbFJhbmdlUmVuZGVyZXInKTtcblxudmFyIF9kZWZhdWx0Q2VsbFJhbmdlUmVuZGVyZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdENlbGxSYW5nZVJlbmRlcmVyMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9HcmlkMy5kZWZhdWx0O1xuZXhwb3J0cy5HcmlkID0gX0dyaWQzLmRlZmF1bHQ7XG5leHBvcnRzLmRlZmF1bHRDZWxsUmFuZ2VSZW5kZXJlciA9IF9kZWZhdWx0Q2VsbFJhbmdlUmVuZGVyZXIzLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvR3JpZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBKdXN0LWluLXRpbWUgY2FsY3VsYXRlcyBhbmQgY2FjaGVzIHNpemUgYW5kIHBvc2l0aW9uIGluZm9ybWF0aW9uIGZvciBhIGNvbGxlY3Rpb24gb2YgY2VsbHMuXG4gKi9cbnZhciBDZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIoX3JlZikge1xuICAgIHZhciBjZWxsQ291bnQgPSBfcmVmLmNlbGxDb3VudDtcbiAgICB2YXIgY2VsbFNpemVHZXR0ZXIgPSBfcmVmLmNlbGxTaXplR2V0dGVyO1xuICAgIHZhciBlc3RpbWF0ZWRDZWxsU2l6ZSA9IF9yZWYuZXN0aW1hdGVkQ2VsbFNpemU7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIpO1xuXG4gICAgdGhpcy5fY2VsbFNpemVHZXR0ZXIgPSBjZWxsU2l6ZUdldHRlcjtcbiAgICB0aGlzLl9jZWxsQ291bnQgPSBjZWxsQ291bnQ7XG4gICAgdGhpcy5fZXN0aW1hdGVkQ2VsbFNpemUgPSBlc3RpbWF0ZWRDZWxsU2l6ZTtcblxuICAgIC8vIENhY2hlIG9mIHNpemUgYW5kIHBvc2l0aW9uIGRhdGEgZm9yIGNlbGxzLCBtYXBwZWQgYnkgY2VsbCBpbmRleC5cbiAgICAvLyBOb3RlIHRoYXQgaW52YWxpZCB2YWx1ZXMgbWF5IGV4aXN0IGluIHRoaXMgbWFwIHNvIG9ubHkgcmVseSBvbiBjZWxscyB1cCB0byB0aGlzLl9sYXN0TWVhc3VyZWRJbmRleFxuICAgIHRoaXMuX2NlbGxTaXplQW5kUG9zaXRpb25EYXRhID0ge307XG5cbiAgICAvLyBNZWFzdXJlbWVudHMgZm9yIGNlbGxzIHVwIHRvIHRoaXMgaW5kZXggY2FuIGJlIHRydXN0ZWQ7IGNlbGxzIGFmdGVyd2FyZCBzaG91bGQgYmUgZXN0aW1hdGVkLlxuICAgIHRoaXMuX2xhc3RNZWFzdXJlZEluZGV4ID0gLTE7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIsIFt7XG4gICAga2V5OiAnY29uZmlndXJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29uZmlndXJlKF9yZWYyKSB7XG4gICAgICB2YXIgY2VsbENvdW50ID0gX3JlZjIuY2VsbENvdW50O1xuICAgICAgdmFyIGVzdGltYXRlZENlbGxTaXplID0gX3JlZjIuZXN0aW1hdGVkQ2VsbFNpemU7XG5cbiAgICAgIHRoaXMuX2NlbGxDb3VudCA9IGNlbGxDb3VudDtcbiAgICAgIHRoaXMuX2VzdGltYXRlZENlbGxTaXplID0gZXN0aW1hdGVkQ2VsbFNpemU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2VsbENvdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2VsbENvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NlbGxDb3VudDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRFc3RpbWF0ZWRDZWxsU2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEVzdGltYXRlZENlbGxTaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VzdGltYXRlZENlbGxTaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldExhc3RNZWFzdXJlZEluZGV4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TGFzdE1lYXN1cmVkSW5kZXgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbGFzdE1lYXN1cmVkSW5kZXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgc2l6ZSBhbmQgcG9zaXRpb24gZm9yIHRoZSBjZWxsIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAgICogSXQganVzdC1pbi10aW1lIGNhbGN1bGF0ZXMgKG9yIHVzZWQgY2FjaGVkIHZhbHVlcykgZm9yIGNlbGxzIGxlYWRpbmcgdXAgdG8gdGhlIGluZGV4LlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTaXplQW5kUG9zaXRpb25PZkNlbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaXplQW5kUG9zaXRpb25PZkNlbGwoaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5fY2VsbENvdW50KSB7XG4gICAgICAgIHRocm93IEVycm9yKCdSZXF1ZXN0ZWQgaW5kZXggJyArIGluZGV4ICsgJyBpcyBvdXRzaWRlIG9mIHJhbmdlIDAuLicgKyB0aGlzLl9jZWxsQ291bnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPiB0aGlzLl9sYXN0TWVhc3VyZWRJbmRleCkge1xuICAgICAgICB2YXIgbGFzdE1lYXN1cmVkQ2VsbFNpemVBbmRQb3NpdGlvbiA9IHRoaXMuZ2V0U2l6ZUFuZFBvc2l0aW9uT2ZMYXN0TWVhc3VyZWRDZWxsKCk7XG4gICAgICAgIHZhciBfb2Zmc2V0ID0gbGFzdE1lYXN1cmVkQ2VsbFNpemVBbmRQb3NpdGlvbi5vZmZzZXQgKyBsYXN0TWVhc3VyZWRDZWxsU2l6ZUFuZFBvc2l0aW9uLnNpemU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuX2xhc3RNZWFzdXJlZEluZGV4ICsgMTsgaSA8PSBpbmRleDsgaSsrKSB7XG4gICAgICAgICAgdmFyIF9zaXplID0gdGhpcy5fY2VsbFNpemVHZXR0ZXIoeyBpbmRleDogaSB9KTtcblxuICAgICAgICAgIGlmIChfc2l6ZSA9PSBudWxsIHx8IGlzTmFOKF9zaXplKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgc2l6ZSByZXR1cm5lZCBmb3IgY2VsbCAnICsgaSArICcgb2YgdmFsdWUgJyArIF9zaXplKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9jZWxsU2l6ZUFuZFBvc2l0aW9uRGF0YVtpXSA9IHtcbiAgICAgICAgICAgIG9mZnNldDogX29mZnNldCxcbiAgICAgICAgICAgIHNpemU6IF9zaXplXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIF9vZmZzZXQgKz0gX3NpemU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0TWVhc3VyZWRJbmRleCA9IGluZGV4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fY2VsbFNpemVBbmRQb3NpdGlvbkRhdGFbaW5kZXhdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNpemVBbmRQb3NpdGlvbk9mTGFzdE1lYXN1cmVkQ2VsbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNpemVBbmRQb3NpdGlvbk9mTGFzdE1lYXN1cmVkQ2VsbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sYXN0TWVhc3VyZWRJbmRleCA+PSAwID8gdGhpcy5fY2VsbFNpemVBbmRQb3NpdGlvbkRhdGFbdGhpcy5fbGFzdE1lYXN1cmVkSW5kZXhdIDoge1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHNpemU6IDBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG90YWwgc2l6ZSBvZiBhbGwgY2VsbHMgYmVpbmcgbWVhc3VyZWQuXG4gICAgICogVGhpcyB2YWx1ZSB3aWxsIGJlIGNvbXBsZXRlZGx5IGVzdGltYXRlZCBpbml0aWFsbHkuXG4gICAgICogQXMgY2VsbHMgYXMgbWVhc3VyZWQgdGhlIGVzdGltYXRlIHdpbGwgYmUgdXBkYXRlZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0VG90YWxTaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VG90YWxTaXplKCkge1xuICAgICAgdmFyIGxhc3RNZWFzdXJlZENlbGxTaXplQW5kUG9zaXRpb24gPSB0aGlzLmdldFNpemVBbmRQb3NpdGlvbk9mTGFzdE1lYXN1cmVkQ2VsbCgpO1xuXG4gICAgICByZXR1cm4gbGFzdE1lYXN1cmVkQ2VsbFNpemVBbmRQb3NpdGlvbi5vZmZzZXQgKyBsYXN0TWVhc3VyZWRDZWxsU2l6ZUFuZFBvc2l0aW9uLnNpemUgKyAodGhpcy5fY2VsbENvdW50IC0gdGhpcy5fbGFzdE1lYXN1cmVkSW5kZXggLSAxKSAqIHRoaXMuX2VzdGltYXRlZENlbGxTaXplO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgYSBuZXcgb2Zmc2V0IHRoYXQgZW5zdXJlcyBhIGNlcnRhaW4gY2VsbCBpcyB2aXNpYmxlLCBnaXZlbiB0aGUgY3VycmVudCBvZmZzZXQuXG4gICAgICogSWYgdGhlIGNlbGwgaXMgYWxyZWFkeSB2aXNpYmxlIHRoZW4gdGhlIGN1cnJlbnQgb2Zmc2V0IHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICogSWYgdGhlIGN1cnJlbnQgb2Zmc2V0IGlzIHRvbyBncmVhdCBvciBzbWFsbCwgaXQgd2lsbCBiZSBhZGp1c3RlZCBqdXN0IGVub3VnaCB0byBlbnN1cmUgdGhlIHNwZWNpZmllZCBpbmRleCBpcyB2aXNpYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGFsaWduIERlc2lyZWQgYWxpZ25tZW50IHdpdGhpbiBjb250YWluZXI7IG9uZSBvZiBcImF1dG9cIiAoZGVmYXVsdCksIFwic3RhcnRcIiwgb3IgXCJlbmRcIlxuICAgICAqIEBwYXJhbSBjb250YWluZXJTaXplIFNpemUgKHdpZHRoIG9yIGhlaWdodCkgb2YgdGhlIGNvbnRhaW5lciB2aWV3cG9ydFxuICAgICAqIEBwYXJhbSBjdXJyZW50T2Zmc2V0IENvbnRhaW5lcidzIGN1cnJlbnQgKHggb3IgeSkgb2Zmc2V0XG4gICAgICogQHBhcmFtIHRvdGFsU2l6ZSBUb3RhbCBzaXplICh3aWR0aCBvciBoZWlnaHQpIG9mIGFsbCBjZWxsc1xuICAgICAqIEByZXR1cm4gT2Zmc2V0IHRvIHVzZSB0byBlbnN1cmUgdGhlIHNwZWNpZmllZCBjZWxsIGlzIHZpc2libGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0VXBkYXRlZE9mZnNldEZvckluZGV4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXBkYXRlZE9mZnNldEZvckluZGV4KF9yZWYzKSB7XG4gICAgICB2YXIgX3JlZjMkYWxpZ24gPSBfcmVmMy5hbGlnbjtcbiAgICAgIHZhciBhbGlnbiA9IF9yZWYzJGFsaWduID09PSB1bmRlZmluZWQgPyAnYXV0bycgOiBfcmVmMyRhbGlnbjtcbiAgICAgIHZhciBjb250YWluZXJTaXplID0gX3JlZjMuY29udGFpbmVyU2l6ZTtcbiAgICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gX3JlZjMuY3VycmVudE9mZnNldDtcbiAgICAgIHZhciB0YXJnZXRJbmRleCA9IF9yZWYzLnRhcmdldEluZGV4O1xuXG4gICAgICBpZiAoY29udGFpbmVyU2l6ZSA8PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGF0dW0gPSB0aGlzLmdldFNpemVBbmRQb3NpdGlvbk9mQ2VsbCh0YXJnZXRJbmRleCk7XG4gICAgICB2YXIgbWF4T2Zmc2V0ID0gZGF0dW0ub2Zmc2V0O1xuICAgICAgdmFyIG1pbk9mZnNldCA9IG1heE9mZnNldCAtIGNvbnRhaW5lclNpemUgKyBkYXR1bS5zaXplO1xuXG4gICAgICB2YXIgaWRlYWxPZmZzZXQgPSB2b2lkIDA7XG5cbiAgICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgIGlkZWFsT2Zmc2V0ID0gbWF4T2Zmc2V0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgIGlkZWFsT2Zmc2V0ID0gbWluT2Zmc2V0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICAgIGlkZWFsT2Zmc2V0ID0gbWF4T2Zmc2V0IC0gKGNvbnRhaW5lclNpemUgLSBkYXR1bS5zaXplKSAvIDI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWRlYWxPZmZzZXQgPSBNYXRoLm1heChtaW5PZmZzZXQsIE1hdGgubWluKG1heE9mZnNldCwgY3VycmVudE9mZnNldCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB2YXIgdG90YWxTaXplID0gdGhpcy5nZXRUb3RhbFNpemUoKTtcblxuICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKHRvdGFsU2l6ZSAtIGNvbnRhaW5lclNpemUsIGlkZWFsT2Zmc2V0KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmlzaWJsZUNlbGxSYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZpc2libGVDZWxsUmFuZ2UoX3JlZjQpIHtcbiAgICAgIHZhciBjb250YWluZXJTaXplID0gX3JlZjQuY29udGFpbmVyU2l6ZTtcbiAgICAgIHZhciBvZmZzZXQgPSBfcmVmNC5vZmZzZXQ7XG5cbiAgICAgIHZhciB0b3RhbFNpemUgPSB0aGlzLmdldFRvdGFsU2l6ZSgpO1xuXG4gICAgICBpZiAodG90YWxTaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cblxuICAgICAgdmFyIG1heE9mZnNldCA9IG9mZnNldCArIGNvbnRhaW5lclNpemU7XG4gICAgICB2YXIgc3RhcnQgPSB0aGlzLl9maW5kTmVhcmVzdENlbGwob2Zmc2V0KTtcblxuICAgICAgdmFyIGRhdHVtID0gdGhpcy5nZXRTaXplQW5kUG9zaXRpb25PZkNlbGwoc3RhcnQpO1xuICAgICAgb2Zmc2V0ID0gZGF0dW0ub2Zmc2V0ICsgZGF0dW0uc2l6ZTtcblxuICAgICAgdmFyIHN0b3AgPSBzdGFydDtcblxuICAgICAgd2hpbGUgKG9mZnNldCA8IG1heE9mZnNldCAmJiBzdG9wIDwgdGhpcy5fY2VsbENvdW50IC0gMSkge1xuICAgICAgICBzdG9wKys7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHRoaXMuZ2V0U2l6ZUFuZFBvc2l0aW9uT2ZDZWxsKHN0b3ApLnNpemU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgc3RvcDogc3RvcFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbGwgY2FjaGVkIHZhbHVlcyBmb3IgY2VsbHMgYWZ0ZXIgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGZvciBhbnkgY2VsbCB0aGF0IGhhcyBjaGFuZ2VkIGl0cyBzaXplLlxuICAgICAqIEl0IHdpbGwgbm90IGltbWVkaWF0ZWx5IHBlcmZvcm0gYW55IGNhbGN1bGF0aW9uczsgdGhleSdsbCBiZSBwZXJmb3JtZWQgdGhlIG5leHQgdGltZSBnZXRTaXplQW5kUG9zaXRpb25PZkNlbGwoKSBpcyBjYWxsZWQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3Jlc2V0Q2VsbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0Q2VsbChpbmRleCkge1xuICAgICAgdGhpcy5fbGFzdE1lYXN1cmVkSW5kZXggPSBNYXRoLm1pbih0aGlzLl9sYXN0TWVhc3VyZWRJbmRleCwgaW5kZXggLSAxKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfYmluYXJ5U2VhcmNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2JpbmFyeVNlYXJjaChfcmVmNSkge1xuICAgICAgdmFyIGhpZ2ggPSBfcmVmNS5oaWdoO1xuICAgICAgdmFyIGxvdyA9IF9yZWY1LmxvdztcbiAgICAgIHZhciBvZmZzZXQgPSBfcmVmNS5vZmZzZXQ7XG5cbiAgICAgIHZhciBtaWRkbGUgPSB2b2lkIDA7XG4gICAgICB2YXIgY3VycmVudE9mZnNldCA9IHZvaWQgMDtcblxuICAgICAgd2hpbGUgKGxvdyA8PSBoaWdoKSB7XG4gICAgICAgIG1pZGRsZSA9IGxvdyArIE1hdGguZmxvb3IoKGhpZ2ggLSBsb3cpIC8gMik7XG4gICAgICAgIGN1cnJlbnRPZmZzZXQgPSB0aGlzLmdldFNpemVBbmRQb3NpdGlvbk9mQ2VsbChtaWRkbGUpLm9mZnNldDtcblxuICAgICAgICBpZiAoY3VycmVudE9mZnNldCA9PT0gb2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIG1pZGRsZTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50T2Zmc2V0IDwgb2Zmc2V0KSB7XG4gICAgICAgICAgbG93ID0gbWlkZGxlICsgMTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50T2Zmc2V0ID4gb2Zmc2V0KSB7XG4gICAgICAgICAgaGlnaCA9IG1pZGRsZSAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxvdyA+IDApIHtcbiAgICAgICAgcmV0dXJuIGxvdyAtIDE7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2V4cG9uZW50aWFsU2VhcmNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2V4cG9uZW50aWFsU2VhcmNoKF9yZWY2KSB7XG4gICAgICB2YXIgaW5kZXggPSBfcmVmNi5pbmRleDtcbiAgICAgIHZhciBvZmZzZXQgPSBfcmVmNi5vZmZzZXQ7XG5cbiAgICAgIHZhciBpbnRlcnZhbCA9IDE7XG5cbiAgICAgIHdoaWxlIChpbmRleCA8IHRoaXMuX2NlbGxDb3VudCAmJiB0aGlzLmdldFNpemVBbmRQb3NpdGlvbk9mQ2VsbChpbmRleCkub2Zmc2V0IDwgb2Zmc2V0KSB7XG4gICAgICAgIGluZGV4ICs9IGludGVydmFsO1xuICAgICAgICBpbnRlcnZhbCAqPSAyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fYmluYXJ5U2VhcmNoKHtcbiAgICAgICAgaGlnaDogTWF0aC5taW4oaW5kZXgsIHRoaXMuX2NlbGxDb3VudCAtIDEpLFxuICAgICAgICBsb3c6IE1hdGguZmxvb3IoaW5kZXggLyAyKSxcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaGVzIGZvciB0aGUgY2VsbCAoaW5kZXgpIG5lYXJlc3QgdGhlIHNwZWNpZmllZCBvZmZzZXQuXG4gICAgICpcbiAgICAgKiBJZiBubyBleGFjdCBtYXRjaCBpcyBmb3VuZCB0aGUgbmV4dCBsb3dlc3QgY2VsbCBpbmRleCB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqIFRoaXMgYWxsb3dzIHBhcnRpYWxseSB2aXNpYmxlIGNlbGxzICh3aXRoIG9mZnNldHMganVzdCBiZWZvcmUvYWJvdmUgdGhlIGZvbGQpIHRvIGJlIHZpc2libGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19maW5kTmVhcmVzdENlbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZE5lYXJlc3RDZWxsKG9mZnNldCkge1xuICAgICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgb2Zmc2V0ICcgKyBvZmZzZXQgKyAnIHNwZWNpZmllZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBPdXIgc2VhcmNoIGFsZ29yaXRobXMgZmluZCB0aGUgbmVhcmVzdCBtYXRjaCBhdCBvciBiZWxvdyB0aGUgc3BlY2lmaWVkIG9mZnNldC5cbiAgICAgIC8vIFNvIG1ha2Ugc3VyZSB0aGUgb2Zmc2V0IGlzIGF0IGxlYXN0IDAgb3Igbm8gbWF0Y2ggd2lsbCBiZSBmb3VuZC5cbiAgICAgIG9mZnNldCA9IE1hdGgubWF4KDAsIG9mZnNldCk7XG5cbiAgICAgIHZhciBsYXN0TWVhc3VyZWRDZWxsU2l6ZUFuZFBvc2l0aW9uID0gdGhpcy5nZXRTaXplQW5kUG9zaXRpb25PZkxhc3RNZWFzdXJlZENlbGwoKTtcbiAgICAgIHZhciBsYXN0TWVhc3VyZWRJbmRleCA9IE1hdGgubWF4KDAsIHRoaXMuX2xhc3RNZWFzdXJlZEluZGV4KTtcblxuICAgICAgaWYgKGxhc3RNZWFzdXJlZENlbGxTaXplQW5kUG9zaXRpb24ub2Zmc2V0ID49IG9mZnNldCkge1xuICAgICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IG1lYXN1cmVkIGNlbGxzIHdpdGhpbiB0aGlzIHJhbmdlIGp1c3QgdXNlIGEgYmluYXJ5IHNlYXJjaCBhcyBpdCdzIGZhc3Rlci5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmFyeVNlYXJjaCh7XG4gICAgICAgICAgaGlnaDogbGFzdE1lYXN1cmVkSW5kZXgsXG4gICAgICAgICAgbG93OiAwLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZW4ndCB5ZXQgbWVhc3VyZWQgdGhpcyBoaWdoLCBmYWxsYmFjayB0byBhbiBleHBvbmVudGlhbCBzZWFyY2ggd2l0aCBhbiBpbm5lciBiaW5hcnkgc2VhcmNoLlxuICAgICAgICAvLyBUaGUgZXhwb25lbnRpYWwgc2VhcmNoIGF2b2lkcyBwcmUtY29tcHV0aW5nIHNpemVzIGZvciB0aGUgZnVsbCBzZXQgb2YgY2VsbHMgYXMgYSBiaW5hcnkgc2VhcmNoIHdvdWxkLlxuICAgICAgICAvLyBUaGUgb3ZlcmFsbCBjb21wbGV4aXR5IGZvciB0aGlzIGFwcHJvYWNoIGlzIE8obG9nIG4pLlxuICAgICAgICByZXR1cm4gdGhpcy5fZXhwb25lbnRpYWxTZWFyY2goe1xuICAgICAgICAgIGluZGV4OiBsYXN0TWVhc3VyZWRJbmRleCxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC12aXJ0dWFsaXplZC9kaXN0L2NvbW1vbmpzL0dyaWQvdXRpbHMvQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDg1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkRFRkFVTFRfTUFYX1NDUk9MTF9TSVpFID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0NlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9DZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlcicpO1xuXG52YXIgX0NlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIEJyb3dzZXJzIGhhdmUgc2Nyb2xsIG9mZnNldCBsaW1pdGF0aW9ucyAoZWcgQ2hyb21lIHN0b3BzIHNjcm9sbGluZyBhdCB+MzMuNU0gcGl4ZWxzIHdoZXJlIGFzIEVkZ2UgdG9wcyBvdXQgYXQgfjEuNU0gcGl4ZWxzKS5cbiAqIEFmdGVyIGEgY2VydGFpbiBwb3NpdGlvbiwgdGhlIGJyb3dzZXIgd29uJ3QgYWxsb3cgdGhlIHVzZXIgdG8gc2Nyb2xsIGZ1cnRoZXIgKGV2ZW4gdmlhIEphdmFTY3JpcHQgc2Nyb2xsIG9mZnNldCBhZGp1c3RtZW50cykuXG4gKiBUaGlzIHV0aWwgcGlja3MgYSBsb3dlciBjZWlsaW5nIGZvciBtYXggc2l6ZSBhbmQgYXJ0aWZpY2lhbGx5IGFkanVzdHMgcG9zaXRpb25zIHdpdGhpbiB0byBtYWtlIGl0IHRyYW5zcGFyZW50IGZvciB1c2Vycy5cbiAqL1xudmFyIERFRkFVTFRfTUFYX1NDUk9MTF9TSVpFID0gZXhwb3J0cy5ERUZBVUxUX01BWF9TQ1JPTExfU0laRSA9IDE1MDAwMDA7XG5cbi8qKlxuICogRXh0ZW5kcyBDZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlciBhbmQgYWRkcyBzY2FsaW5nIGJlaGF2aW9yIGZvciBsaXN0cyB0aGF0IGFyZSB0b28gbGFyZ2UgdG8gZml0IHdpdGhpbiBhIGJyb3dzZXIncyBuYXRpdmUgbGltaXRzLlxuICovXG5cbnZhciBTY2FsaW5nQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNjYWxpbmdDZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlcihfcmVmKSB7XG4gICAgdmFyIF9yZWYkbWF4U2Nyb2xsU2l6ZSA9IF9yZWYubWF4U2Nyb2xsU2l6ZTtcbiAgICB2YXIgbWF4U2Nyb2xsU2l6ZSA9IF9yZWYkbWF4U2Nyb2xsU2l6ZSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9NQVhfU0NST0xMX1NJWkUgOiBfcmVmJG1heFNjcm9sbFNpemU7XG5cbiAgICB2YXIgcGFyYW1zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnbWF4U2Nyb2xsU2l6ZSddKTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTY2FsaW5nQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIpO1xuXG4gICAgLy8gRmF2b3IgY29tcG9zaXRpb24gb3ZlciBpbmhlcml0YW5jZSB0byBzaW1wbGlmeSBJRTEwIHN1cHBvcnRcbiAgICB0aGlzLl9jZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlciA9IG5ldyBfQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIyLmRlZmF1bHQocGFyYW1zKTtcbiAgICB0aGlzLl9tYXhTY3JvbGxTaXplID0gbWF4U2Nyb2xsU2l6ZTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTY2FsaW5nQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIsIFt7XG4gICAga2V5OiAnY29uZmlndXJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29uZmlndXJlKHBhcmFtcykge1xuICAgICAgdGhpcy5fY2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIuY29uZmlndXJlKHBhcmFtcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2VsbENvdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2VsbENvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyLmdldENlbGxDb3VudCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEVzdGltYXRlZENlbGxTaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RXN0aW1hdGVkQ2VsbFNpemUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIuZ2V0RXN0aW1hdGVkQ2VsbFNpemUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRMYXN0TWVhc3VyZWRJbmRleCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExhc3RNZWFzdXJlZEluZGV4KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyLmdldExhc3RNZWFzdXJlZEluZGV4KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIHBpeGVscyBhIGNlbGwgYXQgdGhlIGdpdmVuIHBvc2l0aW9uIChvZmZzZXQpIHNob3VsZCBiZSBzaGlmdGVkIGluIG9yZGVyIHRvIGZpdCB3aXRoaW4gdGhlIHNjYWxlZCBjb250YWluZXIuXG4gICAgICogVGhlIG9mZnNldCBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiBpcyBzY2FsbGVkIChzYWZlKSBhcyB3ZWxsLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRPZmZzZXRBZGp1c3RtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0T2Zmc2V0QWRqdXN0bWVudChfcmVmMikge1xuICAgICAgdmFyIGNvbnRhaW5lclNpemUgPSBfcmVmMi5jb250YWluZXJTaXplO1xuICAgICAgdmFyIG9mZnNldCA9IF9yZWYyLm9mZnNldDtcblxuICAgICAgdmFyIHRvdGFsU2l6ZSA9IHRoaXMuX2NlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyLmdldFRvdGFsU2l6ZSgpO1xuICAgICAgdmFyIHNhZmVUb3RhbFNpemUgPSB0aGlzLmdldFRvdGFsU2l6ZSgpO1xuICAgICAgdmFyIG9mZnNldFBlcmNlbnRhZ2UgPSB0aGlzLl9nZXRPZmZzZXRQZXJjZW50YWdlKHtcbiAgICAgICAgY29udGFpbmVyU2l6ZTogY29udGFpbmVyU2l6ZSxcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIHRvdGFsU2l6ZTogc2FmZVRvdGFsU2l6ZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKG9mZnNldFBlcmNlbnRhZ2UgKiAoc2FmZVRvdGFsU2l6ZSAtIHRvdGFsU2l6ZSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNpemVBbmRQb3NpdGlvbk9mQ2VsbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNpemVBbmRQb3NpdGlvbk9mQ2VsbChpbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyLmdldFNpemVBbmRQb3NpdGlvbk9mQ2VsbChpbmRleCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U2l6ZUFuZFBvc2l0aW9uT2ZMYXN0TWVhc3VyZWRDZWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2l6ZUFuZFBvc2l0aW9uT2ZMYXN0TWVhc3VyZWRDZWxsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyLmdldFNpemVBbmRQb3NpdGlvbk9mTGFzdE1lYXN1cmVkQ2VsbCgpO1xuICAgIH1cblxuICAgIC8qKiBTZWUgQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIjZ2V0VG90YWxTaXplICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFRvdGFsU2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRvdGFsU2l6ZSgpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLl9tYXhTY3JvbGxTaXplLCB0aGlzLl9jZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5nZXRUb3RhbFNpemUoKSk7XG4gICAgfVxuXG4gICAgLyoqIFNlZSBDZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlciNnZXRVcGRhdGVkT2Zmc2V0Rm9ySW5kZXggKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0VXBkYXRlZE9mZnNldEZvckluZGV4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXBkYXRlZE9mZnNldEZvckluZGV4KF9yZWYzKSB7XG4gICAgICB2YXIgX3JlZjMkYWxpZ24gPSBfcmVmMy5hbGlnbjtcbiAgICAgIHZhciBhbGlnbiA9IF9yZWYzJGFsaWduID09PSB1bmRlZmluZWQgPyAnYXV0bycgOiBfcmVmMyRhbGlnbjtcbiAgICAgIHZhciBjb250YWluZXJTaXplID0gX3JlZjMuY29udGFpbmVyU2l6ZTtcbiAgICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gX3JlZjMuY3VycmVudE9mZnNldDtcbiAgICAgIHZhciB0YXJnZXRJbmRleCA9IF9yZWYzLnRhcmdldEluZGV4O1xuICAgICAgdmFyIHRvdGFsU2l6ZSA9IF9yZWYzLnRvdGFsU2l6ZTtcblxuICAgICAgY3VycmVudE9mZnNldCA9IHRoaXMuX3NhZmVPZmZzZXRUb09mZnNldCh7XG4gICAgICAgIGNvbnRhaW5lclNpemU6IGNvbnRhaW5lclNpemUsXG4gICAgICAgIG9mZnNldDogY3VycmVudE9mZnNldFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBvZmZzZXQgPSB0aGlzLl9jZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5nZXRVcGRhdGVkT2Zmc2V0Rm9ySW5kZXgoe1xuICAgICAgICBhbGlnbjogYWxpZ24sXG4gICAgICAgIGNvbnRhaW5lclNpemU6IGNvbnRhaW5lclNpemUsXG4gICAgICAgIGN1cnJlbnRPZmZzZXQ6IGN1cnJlbnRPZmZzZXQsXG4gICAgICAgIHRhcmdldEluZGV4OiB0YXJnZXRJbmRleCxcbiAgICAgICAgdG90YWxTaXplOiB0b3RhbFNpemVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VG9TYWZlT2Zmc2V0KHtcbiAgICAgICAgY29udGFpbmVyU2l6ZTogY29udGFpbmVyU2l6ZSxcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBTZWUgQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIjZ2V0VmlzaWJsZUNlbGxSYW5nZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWaXNpYmxlQ2VsbFJhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmlzaWJsZUNlbGxSYW5nZShfcmVmNCkge1xuICAgICAgdmFyIGNvbnRhaW5lclNpemUgPSBfcmVmNC5jb250YWluZXJTaXplO1xuICAgICAgdmFyIG9mZnNldCA9IF9yZWY0Lm9mZnNldDtcblxuICAgICAgb2Zmc2V0ID0gdGhpcy5fc2FmZU9mZnNldFRvT2Zmc2V0KHtcbiAgICAgICAgY29udGFpbmVyU2l6ZTogY29udGFpbmVyU2l6ZSxcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXRcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5fY2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIuZ2V0VmlzaWJsZUNlbGxSYW5nZSh7XG4gICAgICAgIGNvbnRhaW5lclNpemU6IGNvbnRhaW5lclNpemUsXG4gICAgICAgIG9mZnNldDogb2Zmc2V0XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXNldENlbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldENlbGwoaW5kZXgpIHtcbiAgICAgIHRoaXMuX2NlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyLnJlc2V0Q2VsbChpbmRleCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2dldE9mZnNldFBlcmNlbnRhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0T2Zmc2V0UGVyY2VudGFnZShfcmVmNSkge1xuICAgICAgdmFyIGNvbnRhaW5lclNpemUgPSBfcmVmNS5jb250YWluZXJTaXplO1xuICAgICAgdmFyIG9mZnNldCA9IF9yZWY1Lm9mZnNldDtcbiAgICAgIHZhciB0b3RhbFNpemUgPSBfcmVmNS50b3RhbFNpemU7XG5cbiAgICAgIHJldHVybiB0b3RhbFNpemUgPD0gY29udGFpbmVyU2l6ZSA/IDAgOiBvZmZzZXQgLyAodG90YWxTaXplIC0gY29udGFpbmVyU2l6ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX29mZnNldFRvU2FmZU9mZnNldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vZmZzZXRUb1NhZmVPZmZzZXQoX3JlZjYpIHtcbiAgICAgIHZhciBjb250YWluZXJTaXplID0gX3JlZjYuY29udGFpbmVyU2l6ZTtcbiAgICAgIHZhciBvZmZzZXQgPSBfcmVmNi5vZmZzZXQ7XG5cbiAgICAgIHZhciB0b3RhbFNpemUgPSB0aGlzLl9jZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5nZXRUb3RhbFNpemUoKTtcbiAgICAgIHZhciBzYWZlVG90YWxTaXplID0gdGhpcy5nZXRUb3RhbFNpemUoKTtcblxuICAgICAgaWYgKHRvdGFsU2l6ZSA9PT0gc2FmZVRvdGFsU2l6ZSkge1xuICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG9mZnNldFBlcmNlbnRhZ2UgPSB0aGlzLl9nZXRPZmZzZXRQZXJjZW50YWdlKHtcbiAgICAgICAgICBjb250YWluZXJTaXplOiBjb250YWluZXJTaXplLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgIHRvdGFsU2l6ZTogdG90YWxTaXplXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG9mZnNldFBlcmNlbnRhZ2UgKiAoc2FmZVRvdGFsU2l6ZSAtIGNvbnRhaW5lclNpemUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfc2FmZU9mZnNldFRvT2Zmc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NhZmVPZmZzZXRUb09mZnNldChfcmVmNykge1xuICAgICAgdmFyIGNvbnRhaW5lclNpemUgPSBfcmVmNy5jb250YWluZXJTaXplO1xuICAgICAgdmFyIG9mZnNldCA9IF9yZWY3Lm9mZnNldDtcblxuICAgICAgdmFyIHRvdGFsU2l6ZSA9IHRoaXMuX2NlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyLmdldFRvdGFsU2l6ZSgpO1xuICAgICAgdmFyIHNhZmVUb3RhbFNpemUgPSB0aGlzLmdldFRvdGFsU2l6ZSgpO1xuXG4gICAgICBpZiAodG90YWxTaXplID09PSBzYWZlVG90YWxTaXplKSB7XG4gICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb2Zmc2V0UGVyY2VudGFnZSA9IHRoaXMuX2dldE9mZnNldFBlcmNlbnRhZ2Uoe1xuICAgICAgICAgIGNvbnRhaW5lclNpemU6IGNvbnRhaW5lclNpemUsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgdG90YWxTaXplOiBzYWZlVG90YWxTaXplXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG9mZnNldFBlcmNlbnRhZ2UgKiAodG90YWxTaXplIC0gY29udGFpbmVyU2l6ZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTY2FsaW5nQ2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNjYWxpbmdDZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9HcmlkL3V0aWxzL1NjYWxpbmdDZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gODU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNhbGN1bGF0ZVNpemVBbmRQb3NpdGlvbkRhdGFBbmRVcGRhdGVTY3JvbGxPZmZzZXQ7XG4vKipcbiAqIEhlbHBlciBtZXRob2QgdGhhdCBkZXRlcm1pbmVzIHdoZW4gdG8gcmVjYWxjdWxhdGUgcm93IG9yIGNvbHVtbiBtZXRhZGF0YS5cbiAqXG4gKiBAcGFyYW0gY2VsbENvdW50IE51bWJlciBvZiByb3dzIG9yIGNvbHVtbnMgaW4gdGhlIGN1cnJlbnQgYXhpc1xuICogQHBhcmFtIGNlbGxzU2l6ZSBXaWR0aCBvciBoZWlnaHQgb2YgY2VsbHMgZm9yIHRoZSBjdXJyZW50IGF4aXNcbiAqIEBwYXJhbSBjb21wdXRlTWV0YWRhdGFDYWxsYmFjayBNZXRob2QgdG8gaW52b2tlIGlmIGNlbGwgbWV0YWRhdGEgc2hvdWxkIGJlIHJlY2FsY3VsYXRlZFxuICogQHBhcmFtIGNvbXB1dGVNZXRhZGF0YUNhbGxiYWNrUHJvcHMgUGFyYW1ldGVycyB0byBwYXNzIHRvIDpjb21wdXRlTWV0YWRhdGFDYWxsYmFja1xuICogQHBhcmFtIG5leHRDZWxsc0NvdW50IE5ld2x5IHVwZGF0ZWQgbnVtYmVyIG9mIHJvd3Mgb3IgY29sdW1ucyBpbiB0aGUgY3VycmVudCBheGlzXG4gKiBAcGFyYW0gbmV4dENlbGxzU2l6ZSBOZXdseSB1cGRhdGVkIHdpZHRoIG9yIGhlaWdodCBvZiBjZWxscyBmb3IgdGhlIGN1cnJlbnQgYXhpc1xuICogQHBhcmFtIG5leHRTY3JvbGxUb0luZGV4IE5ld2x5IHVwZGF0ZWQgc2Nyb2xsLXRvLWluZGV4XG4gKiBAcGFyYW0gc2Nyb2xsVG9JbmRleCBTY3JvbGwtdG8taW5kZXhcbiAqIEBwYXJhbSB1cGRhdGVTY3JvbGxPZmZzZXRGb3JTY3JvbGxUb0luZGV4IENhbGxiYWNrIHRvIGludm9rZSBpZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIHNob3VsZCBiZSByZWNhbGN1bGF0ZWRcbiAqL1xuZnVuY3Rpb24gY2FsY3VsYXRlU2l6ZUFuZFBvc2l0aW9uRGF0YUFuZFVwZGF0ZVNjcm9sbE9mZnNldChfcmVmKSB7XG4gIHZhciBjZWxsQ291bnQgPSBfcmVmLmNlbGxDb3VudDtcbiAgdmFyIGNlbGxTaXplID0gX3JlZi5jZWxsU2l6ZTtcbiAgdmFyIGNvbXB1dGVNZXRhZGF0YUNhbGxiYWNrID0gX3JlZi5jb21wdXRlTWV0YWRhdGFDYWxsYmFjaztcbiAgdmFyIGNvbXB1dGVNZXRhZGF0YUNhbGxiYWNrUHJvcHMgPSBfcmVmLmNvbXB1dGVNZXRhZGF0YUNhbGxiYWNrUHJvcHM7XG4gIHZhciBuZXh0Q2VsbHNDb3VudCA9IF9yZWYubmV4dENlbGxzQ291bnQ7XG4gIHZhciBuZXh0Q2VsbFNpemUgPSBfcmVmLm5leHRDZWxsU2l6ZTtcbiAgdmFyIG5leHRTY3JvbGxUb0luZGV4ID0gX3JlZi5uZXh0U2Nyb2xsVG9JbmRleDtcbiAgdmFyIHNjcm9sbFRvSW5kZXggPSBfcmVmLnNjcm9sbFRvSW5kZXg7XG4gIHZhciB1cGRhdGVTY3JvbGxPZmZzZXRGb3JTY3JvbGxUb0luZGV4ID0gX3JlZi51cGRhdGVTY3JvbGxPZmZzZXRGb3JTY3JvbGxUb0luZGV4O1xuXG4gIC8vIERvbid0IGNvbXBhcmUgY2VsbCBzaXplcyBpZiB0aGV5IGFyZSBmdW5jdGlvbnMgYmVjYXVzZSBpbmxpbmUgZnVuY3Rpb25zIHdvdWxkIGNhdXNlIGluZmluaXRlIGxvb3BzLlxuICAvLyBJbiB0aGF0IGV2ZW50IHVzZXJzIHNob3VsZCB1c2UgdGhlIG1hbnVhbCByZWNvbXB1dGUgbWV0aG9kcyB0byBpbmZvcm0gb2YgY2hhbmdlcy5cbiAgaWYgKGNlbGxDb3VudCAhPT0gbmV4dENlbGxzQ291bnQgfHwgKHR5cGVvZiBjZWxsU2l6ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIG5leHRDZWxsU2l6ZSA9PT0gJ251bWJlcicpICYmIGNlbGxTaXplICE9PSBuZXh0Q2VsbFNpemUpIHtcbiAgICBjb21wdXRlTWV0YWRhdGFDYWxsYmFjayhjb21wdXRlTWV0YWRhdGFDYWxsYmFja1Byb3BzKTtcblxuICAgIC8vIFVwZGF0ZWQgY2VsbCBtZXRhZGF0YSBtYXkgaGF2ZSBoaWRkZW4gdGhlIHByZXZpb3VzIHNjcm9sbGVkLXRvIGl0ZW0uXG4gICAgLy8gSW4gdGhpcyBjYXNlIHdlIHNob3VsZCBhbHNvIHVwZGF0ZSB0aGUgc2Nyb2xsVG9wIHRvIGVuc3VyZSBpdCBzdGF5cyB2aXNpYmxlLlxuICAgIGlmIChzY3JvbGxUb0luZGV4ID49IDAgJiYgc2Nyb2xsVG9JbmRleCA9PT0gbmV4dFNjcm9sbFRvSW5kZXgpIHtcbiAgICAgIHVwZGF0ZVNjcm9sbE9mZnNldEZvclNjcm9sbFRvSW5kZXgoKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9HcmlkL3V0aWxzL2NhbGN1bGF0ZVNpemVBbmRQb3NpdGlvbkRhdGFBbmRVcGRhdGVTY3JvbGxPZmZzZXQuanNcbi8vIG1vZHVsZSBpZCA9IDg2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldE92ZXJzY2FuSW5kaWNlcztcbnZhciBTQ1JPTExfRElSRUNUSU9OX0JBQ0tXQVJEID0gZXhwb3J0cy5TQ1JPTExfRElSRUNUSU9OX0JBQ0tXQVJEID0gLTE7XG52YXIgU0NST0xMX0RJUkVDVElPTl9GT1JXQVJEID0gZXhwb3J0cy5TQ1JPTExfRElSRUNUSU9OX0ZPUldBUkQgPSAxO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBjZWxscyB0byBvdmVyc2NhbiBiZWZvcmUgYW5kIGFmdGVyIGEgc3BlY2lmaWVkIHJhbmdlLlxuICogVGhpcyBmdW5jdGlvbiBlbnN1cmVzIHRoYXQgb3ZlcnNjYW5uaW5nIGRvZXNuJ3QgZXhjZWVkIHRoZSBhdmFpbGFibGUgY2VsbHMuXG4gKlxuICogQHBhcmFtIGNlbGxDb3VudCBOdW1iZXIgb2Ygcm93cyBvciBjb2x1bW5zIGluIHRoZSBjdXJyZW50IGF4aXNcbiAqIEBwYXJhbSBzY3JvbGxEaXJlY3Rpb24gT25lIG9mIFNDUk9MTF9ESVJFQ1RJT05fQkFDS1dBUkRcbiAqIEBwYXJhbSBvdmVyc2NhbkNlbGxzQ291bnQgTWF4aW11bSBudW1iZXIgb2YgY2VsbHMgdG8gb3Zlci1yZW5kZXIgaW4gZWl0aGVyIGRpcmVjdGlvblxuICogQHBhcmFtIHN0YXJ0SW5kZXggQmVnaW4gb2YgcmFuZ2Ugb2YgdmlzaWJsZSBjZWxsc1xuICogQHBhcmFtIHN0b3BJbmRleCBFbmQgb2YgcmFuZ2Ugb2YgdmlzaWJsZSBjZWxsc1xuICovXG5mdW5jdGlvbiBnZXRPdmVyc2NhbkluZGljZXMoX3JlZikge1xuICB2YXIgY2VsbENvdW50ID0gX3JlZi5jZWxsQ291bnQ7XG4gIHZhciBvdmVyc2NhbkNlbGxzQ291bnQgPSBfcmVmLm92ZXJzY2FuQ2VsbHNDb3VudDtcbiAgdmFyIHNjcm9sbERpcmVjdGlvbiA9IF9yZWYuc2Nyb2xsRGlyZWN0aW9uO1xuICB2YXIgc3RhcnRJbmRleCA9IF9yZWYuc3RhcnRJbmRleDtcbiAgdmFyIHN0b3BJbmRleCA9IF9yZWYuc3RvcEluZGV4O1xuXG4gIHZhciBvdmVyc2NhblN0YXJ0SW5kZXggPSB2b2lkIDA7XG4gIHZhciBvdmVyc2NhblN0b3BJbmRleCA9IHZvaWQgMDtcblxuICBzd2l0Y2ggKHNjcm9sbERpcmVjdGlvbikge1xuICAgIGNhc2UgU0NST0xMX0RJUkVDVElPTl9GT1JXQVJEOlxuICAgICAgb3ZlcnNjYW5TdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICAgIG92ZXJzY2FuU3RvcEluZGV4ID0gc3RvcEluZGV4ICsgb3ZlcnNjYW5DZWxsc0NvdW50O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTQ1JPTExfRElSRUNUSU9OX0JBQ0tXQVJEOlxuICAgICAgb3ZlcnNjYW5TdGFydEluZGV4ID0gc3RhcnRJbmRleCAtIG92ZXJzY2FuQ2VsbHNDb3VudDtcbiAgICAgIG92ZXJzY2FuU3RvcEluZGV4ID0gc3RvcEluZGV4O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG92ZXJzY2FuU3RhcnRJbmRleDogTWF0aC5tYXgoMCwgb3ZlcnNjYW5TdGFydEluZGV4KSxcbiAgICBvdmVyc2NhblN0b3BJbmRleDogTWF0aC5taW4oY2VsbENvdW50IC0gMSwgb3ZlcnNjYW5TdG9wSW5kZXgpXG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvR3JpZC91dGlscy9nZXRPdmVyc2NhbkluZGljZXMuanNcbi8vIG1vZHVsZSBpZCA9IDg2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1cGRhdGVTY3JvbGxJbmRleEhlbHBlcjtcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGVuIHRvIHVwZGF0ZSBzY3JvbGwgb2Zmc2V0cyB0byBlbnN1cmUgdGhhdCBhIHNjcm9sbC10by1pbmRleCByZW1haW5zIHZpc2libGUuXG4gKiBUaGlzIGZ1bmN0aW9uIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBzY3JvbGwgb2ZzZXQgaXNuJ3QgcGFzdCB0aGUgbGFzdCBjb2x1bW4vcm93IG9mIGNlbGxzLlxuICpcbiAqIEBwYXJhbSBjZWxsc1NpemUgV2lkdGggb3IgaGVpZ2h0IG9mIGNlbGxzIGZvciB0aGUgY3VycmVudCBheGlzXG4gKiBAcGFyYW0gY2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIgTWFuYWdlcyBzaXplIGFuZCBwb3NpdGlvbiBtZXRhZGF0YSBvZiBjZWxsc1xuICogQHBhcmFtIHByZXZpb3VzQ2VsbHNDb3VudCBQcmV2aW91cyBudW1iZXIgb2Ygcm93cyBvciBjb2x1bW5zXG4gKiBAcGFyYW0gcHJldmlvdXNDZWxsc1NpemUgUHJldmlvdXMgd2lkdGggb3IgaGVpZ2h0IG9mIGNlbGxzXG4gKiBAcGFyYW0gcHJldmlvdXNTY3JvbGxUb0luZGV4IFByZXZpb3VzIHNjcm9sbC10by1pbmRleFxuICogQHBhcmFtIHByZXZpb3VzU2l6ZSBQcmV2aW91cyB3aWR0aCBvciBoZWlnaHQgb2YgdGhlIHZpcnR1YWxpemVkIGNvbnRhaW5lclxuICogQHBhcmFtIHNjcm9sbE9mZnNldCBDdXJyZW50IHNjcm9sbExlZnQgb3Igc2Nyb2xsVG9wXG4gKiBAcGFyYW0gc2Nyb2xsVG9JbmRleCBTY3JvbGwtdG8taW5kZXhcbiAqIEBwYXJhbSBzaXplIFdpZHRoIG9yIGhlaWdodCBvZiB0aGUgdmlydHVhbGl6ZWQgY29udGFpbmVyXG4gKiBAcGFyYW0gdXBkYXRlU2Nyb2xsSW5kZXhDYWxsYmFjayBDYWxsYmFjayB0byBpbnZva2Ugd2l0aCBhbiBzY3JvbGwtdG8taW5kZXggdmFsdWVcbiAqL1xuZnVuY3Rpb24gdXBkYXRlU2Nyb2xsSW5kZXhIZWxwZXIoX3JlZikge1xuICB2YXIgY2VsbFNpemUgPSBfcmVmLmNlbGxTaXplO1xuICB2YXIgY2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIgPSBfcmVmLmNlbGxTaXplQW5kUG9zaXRpb25NYW5hZ2VyO1xuICB2YXIgcHJldmlvdXNDZWxsc0NvdW50ID0gX3JlZi5wcmV2aW91c0NlbGxzQ291bnQ7XG4gIHZhciBwcmV2aW91c0NlbGxTaXplID0gX3JlZi5wcmV2aW91c0NlbGxTaXplO1xuICB2YXIgcHJldmlvdXNTY3JvbGxUb0FsaWdubWVudCA9IF9yZWYucHJldmlvdXNTY3JvbGxUb0FsaWdubWVudDtcbiAgdmFyIHByZXZpb3VzU2Nyb2xsVG9JbmRleCA9IF9yZWYucHJldmlvdXNTY3JvbGxUb0luZGV4O1xuICB2YXIgcHJldmlvdXNTaXplID0gX3JlZi5wcmV2aW91c1NpemU7XG4gIHZhciBzY3JvbGxPZmZzZXQgPSBfcmVmLnNjcm9sbE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvQWxpZ25tZW50ID0gX3JlZi5zY3JvbGxUb0FsaWdubWVudDtcbiAgdmFyIHNjcm9sbFRvSW5kZXggPSBfcmVmLnNjcm9sbFRvSW5kZXg7XG4gIHZhciBzaXplID0gX3JlZi5zaXplO1xuICB2YXIgdXBkYXRlU2Nyb2xsSW5kZXhDYWxsYmFjayA9IF9yZWYudXBkYXRlU2Nyb2xsSW5kZXhDYWxsYmFjaztcblxuICB2YXIgY2VsbENvdW50ID0gY2VsbFNpemVBbmRQb3NpdGlvbk1hbmFnZXIuZ2V0Q2VsbENvdW50KCk7XG4gIHZhciBoYXNTY3JvbGxUb0luZGV4ID0gc2Nyb2xsVG9JbmRleCA+PSAwICYmIHNjcm9sbFRvSW5kZXggPCBjZWxsQ291bnQ7XG4gIHZhciBzaXplSGFzQ2hhbmdlZCA9IHNpemUgIT09IHByZXZpb3VzU2l6ZSB8fCAhcHJldmlvdXNDZWxsU2l6ZSB8fCB0eXBlb2YgY2VsbFNpemUgPT09ICdudW1iZXInICYmIGNlbGxTaXplICE9PSBwcmV2aW91c0NlbGxTaXplO1xuXG4gIC8vIElmIHdlIGhhdmUgYSBuZXcgc2Nyb2xsIHRhcmdldCBPUiBpZiBoZWlnaHQvcm93LWhlaWdodCBoYXMgY2hhbmdlZCxcbiAgLy8gV2Ugc2hvdWxkIGVuc3VyZSB0aGF0IHRoZSBzY3JvbGwgdGFyZ2V0IGlzIHZpc2libGUuXG4gIGlmIChoYXNTY3JvbGxUb0luZGV4ICYmIChzaXplSGFzQ2hhbmdlZCB8fCBzY3JvbGxUb0FsaWdubWVudCAhPT0gcHJldmlvdXNTY3JvbGxUb0FsaWdubWVudCB8fCBzY3JvbGxUb0luZGV4ICE9PSBwcmV2aW91c1Njcm9sbFRvSW5kZXgpKSB7XG4gICAgdXBkYXRlU2Nyb2xsSW5kZXhDYWxsYmFjayhzY3JvbGxUb0luZGV4KTtcblxuICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBzZWxlY3RlZCBpdGVtIGJ1dCBsaXN0IHNpemUgb3IgbnVtYmVyIG9mIGNoaWxkcmVuIGhhdmUgZGVjcmVhc2VkLFxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBhcmVuJ3Qgc2Nyb2xsZWQgdG9vIGZhciBwYXN0IHRoZSBjdXJyZW50IGNvbnRlbnQuXG4gIH0gZWxzZSBpZiAoIWhhc1Njcm9sbFRvSW5kZXggJiYgY2VsbENvdW50ID4gMCAmJiAoc2l6ZSA8IHByZXZpb3VzU2l6ZSB8fCBjZWxsQ291bnQgPCBwcmV2aW91c0NlbGxzQ291bnQpKSB7XG4gICAgLy8gV2UgbmVlZCB0byBlbnN1cmUgdGhhdCB0aGUgY3VycmVudCBzY3JvbGwgb2Zmc2V0IGlzIHN0aWxsIHdpdGhpbiB0aGUgY29sbGVjdGlvbidzIHJhbmdlLlxuICAgIC8vIFRvIGRvIHRoaXMsIHdlIGRvbid0IG5lZWQgdG8gbWVhc3VyZSBldmVyeXRoaW5nOyBDZWxsTWVhc3VyZXIgd291bGQgcGVyZm9ybSBwb29ybHkuXG4gICAgLy8gSnVzdCBjaGVjayB0byBtYWtlIHN1cmUgd2UncmUgc3RpbGwgb2theS5cbiAgICAvLyBPbmx5IGFkanVzdCB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlmIHdlJ3ZlIHNjcm9sbGVkIGJlbG93IHRoZSBsYXN0IHNldCBvZiByb3dzLlxuICAgIGlmIChzY3JvbGxPZmZzZXQgPiBjZWxsU2l6ZUFuZFBvc2l0aW9uTWFuYWdlci5nZXRUb3RhbFNpemUoKSAtIHNpemUpIHtcbiAgICAgIHVwZGF0ZVNjcm9sbEluZGV4Q2FsbGJhY2soY2VsbENvdW50IC0gMSk7XG4gICAgfVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvR3JpZC91dGlscy91cGRhdGVTY3JvbGxJbmRleEhlbHBlci5qc1xuLy8gbW9kdWxlIGlkID0gODYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9HcmlkID0gcmVxdWlyZSgnLi4vR3JpZCcpO1xuXG52YXIgX0dyaWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfR3JpZCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3RBZGRvbnNTaGFsbG93Q29tcGFyZSA9IHJlcXVpcmUoJ3JlYWN0LWFkZG9ucy1zaGFsbG93LWNvbXBhcmUnKTtcblxudmFyIF9yZWFjdEFkZG9uc1NoYWxsb3dDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0QWRkb25zU2hhbGxvd0NvbXBhcmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBJdCBpcyBpbmVmZmljaWVudCB0byBjcmVhdGUgYW5kIG1hbmFnZSBhIGxhcmdlIGxpc3Qgb2YgRE9NIGVsZW1lbnRzIHdpdGhpbiBhIHNjcm9sbGluZyBjb250YWluZXJcbiAqIGlmIG9ubHkgYSBmZXcgb2YgdGhvc2UgZWxlbWVudHMgYXJlIHZpc2libGUuIFRoZSBwcmltYXJ5IHB1cnBvc2Ugb2YgdGhpcyBjb21wb25lbnQgaXMgdG8gaW1wcm92ZVxuICogcGVyZm9ybWFuY2UgYnkgb25seSByZW5kZXJpbmcgdGhlIERPTSBub2RlcyB0aGF0IGEgdXNlciBpcyBhYmxlIHRvIHNlZSBiYXNlZCBvbiB0aGVpciBjdXJyZW50XG4gKiBzY3JvbGwgcG9zaXRpb24uXG4gKlxuICogVGhpcyBjb21wb25lbnQgcmVuZGVycyBhIHZpcnR1YWxpemVkIGxpc3Qgb2YgZWxlbWVudHMgd2l0aCBlaXRoZXIgZml4ZWQgb3IgZHluYW1pYyBoZWlnaHRzLlxuICovXG52YXIgTGlzdCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhMaXN0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMaXN0KHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpc3QpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKExpc3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihMaXN0KSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMuX2NlbGxSZW5kZXJlciA9IF90aGlzLl9jZWxsUmVuZGVyZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuX29uU2Nyb2xsID0gX3RoaXMuX29uU2Nyb2xsLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLl9vblNlY3Rpb25SZW5kZXJlZCA9IF90aGlzLl9vblNlY3Rpb25SZW5kZXJlZC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGlzdCwgW3tcbiAgICBrZXk6ICdmb3JjZVVwZGF0ZUdyaWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZUdyaWQoKSB7XG4gICAgICB0aGlzLkdyaWQuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKiogU2VlIEdyaWQjbWVhc3VyZUFsbENlbGxzICovXG5cbiAgfSwge1xuICAgIGtleTogJ21lYXN1cmVBbGxSb3dzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWVhc3VyZUFsbFJvd3MoKSB7XG4gICAgICB0aGlzLkdyaWQubWVhc3VyZUFsbENlbGxzKCk7XG4gICAgfVxuXG4gICAgLyoqIFNlZSBHcmlkI3JlY29tcHV0ZUdyaWRTaXplICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlY29tcHV0ZVJvd0hlaWdodHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWNvbXB1dGVSb3dIZWlnaHRzKCkge1xuICAgICAgdmFyIGluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuXG4gICAgICB0aGlzLkdyaWQucmVjb21wdXRlR3JpZFNpemUoe1xuICAgICAgICByb3dJbmRleDogaW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBTZWUgR3JpZCNzY3JvbGxUb0NlbGwgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2Nyb2xsVG9Sb3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxUb1JvdygpIHtcbiAgICAgIHZhciBpbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcblxuICAgICAgdGhpcy5HcmlkLnNjcm9sbFRvQ2VsbCh7XG4gICAgICAgIGNvbHVtbkluZGV4OiAwLFxuICAgICAgICByb3dJbmRleDogaW5kZXhcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgICAgdmFyIG5vUm93c1JlbmRlcmVyID0gX3Byb3BzLm5vUm93c1JlbmRlcmVyO1xuICAgICAgdmFyIHNjcm9sbFRvSW5kZXggPSBfcHJvcHMuc2Nyb2xsVG9JbmRleDtcbiAgICAgIHZhciB3aWR0aCA9IF9wcm9wcy53aWR0aDtcblxuXG4gICAgICB2YXIgY2xhc3NOYW1lcyA9ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ1JlYWN0VmlydHVhbGl6ZWRfX0xpc3QnLCBjbGFzc05hbWUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0dyaWQyLmRlZmF1bHQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGF1dG9Db250YWluZXJXaWR0aDogdHJ1ZSxcbiAgICAgICAgY2VsbFJlbmRlcmVyOiB0aGlzLl9jZWxsUmVuZGVyZXIsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyxcbiAgICAgICAgY29sdW1uV2lkdGg6IHdpZHRoLFxuICAgICAgICBjb2x1bW5Db3VudDogMSxcbiAgICAgICAgbm9Db250ZW50UmVuZGVyZXI6IG5vUm93c1JlbmRlcmVyLFxuICAgICAgICBvblNjcm9sbDogdGhpcy5fb25TY3JvbGwsXG4gICAgICAgIG9uU2VjdGlvblJlbmRlcmVkOiB0aGlzLl9vblNlY3Rpb25SZW5kZXJlZCxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuICAgICAgICAgIF90aGlzMi5HcmlkID0gX3JlZjtcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsVG9Sb3c6IHNjcm9sbFRvSW5kZXhcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgIHJldHVybiAoMCwgX3JlYWN0QWRkb25zU2hhbGxvd0NvbXBhcmUyLmRlZmF1bHQpKHRoaXMsIG5leHRQcm9wcywgbmV4dFN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfY2VsbFJlbmRlcmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2NlbGxSZW5kZXJlcihfcmVmMikge1xuICAgICAgdmFyIHJvd0luZGV4ID0gX3JlZjIucm93SW5kZXg7XG4gICAgICB2YXIgc3R5bGUgPSBfcmVmMi5zdHlsZTtcblxuICAgICAgdmFyIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIFsncm93SW5kZXgnLCAnc3R5bGUnXSk7XG5cbiAgICAgIHZhciByb3dSZW5kZXJlciA9IHRoaXMucHJvcHMucm93UmVuZGVyZXI7XG5cbiAgICAgIC8vIFRSSUNLWSBUaGUgc3R5bGUgb2JqZWN0IGlzIHNvbWV0aW1lcyBjYWNoZWQgYnkgR3JpZC5cbiAgICAgIC8vIFRoaXMgcHJldmVudHMgbmV3IHN0eWxlIG9iamVjdHMgZnJvbSBieXBhc3Npbmcgc2hhbGxvd0NvbXBhcmUoKS5cbiAgICAgIC8vIEhvd2V2ZXIgYXMgb2YgUmVhY3QgMTYsIHN0eWxlIHByb3BzIGFyZSBhdXRvLWZyb3plbiAoYXQgbGVhc3QgaW4gZGV2IG1vZGUpXG4gICAgICAvLyBDaGVjayB0byBtYWtlIHN1cmUgd2UgY2FuIHN0aWxsIG1vZGlmeSB0aGUgc3R5bGUgYmVmb3JlIHByb2NlZWRpbmcuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvY29tbWl0Lzk3NzM1Nzc2NWI0NGFmOGZmMGNmZWEzMjc4NjY4NjEwNzMwOTVjMTIjY29tbWl0Y29tbWVudC0yMDY0ODcxM1xuXG4gICAgICB2YXIgX09iamVjdCRnZXRPd25Qcm9wZXJ0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzdHlsZSwgJ3dpZHRoJyk7XG5cbiAgICAgIHZhciB3cml0YWJsZSA9IF9PYmplY3QkZ2V0T3duUHJvcGVydC53cml0YWJsZTtcblxuICAgICAgaWYgKHdyaXRhYmxlKSB7XG4gICAgICAgIC8vIEJ5IGRlZmF1bHQsIExpc3QgY2VsbHMgc2hvdWxkIGJlIDEwMCUgd2lkdGguXG4gICAgICAgIC8vIFRoaXMgcHJldmVudHMgdGhlbSBmcm9tIGZsb3dpbmcgdW5kZXIgYSBzY3JvbGxiYXIgKGlmIHByZXNlbnQpLlxuICAgICAgICBzdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvd1JlbmRlcmVyKF9leHRlbmRzKHtcbiAgICAgICAgaW5kZXg6IHJvd0luZGV4LFxuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH0sIHJlc3QpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfb25TY3JvbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25TY3JvbGwoX3JlZjMpIHtcbiAgICAgIHZhciBjbGllbnRIZWlnaHQgPSBfcmVmMy5jbGllbnRIZWlnaHQ7XG4gICAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gX3JlZjMuc2Nyb2xsSGVpZ2h0O1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IF9yZWYzLnNjcm9sbFRvcDtcbiAgICAgIHZhciBvblNjcm9sbCA9IHRoaXMucHJvcHMub25TY3JvbGw7XG5cblxuICAgICAgb25TY3JvbGwoeyBjbGllbnRIZWlnaHQ6IGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0OiBzY3JvbGxIZWlnaHQsIHNjcm9sbFRvcDogc2Nyb2xsVG9wIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19vblNlY3Rpb25SZW5kZXJlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vblNlY3Rpb25SZW5kZXJlZChfcmVmNCkge1xuICAgICAgdmFyIHJvd092ZXJzY2FuU3RhcnRJbmRleCA9IF9yZWY0LnJvd092ZXJzY2FuU3RhcnRJbmRleDtcbiAgICAgIHZhciByb3dPdmVyc2NhblN0b3BJbmRleCA9IF9yZWY0LnJvd092ZXJzY2FuU3RvcEluZGV4O1xuICAgICAgdmFyIHJvd1N0YXJ0SW5kZXggPSBfcmVmNC5yb3dTdGFydEluZGV4O1xuICAgICAgdmFyIHJvd1N0b3BJbmRleCA9IF9yZWY0LnJvd1N0b3BJbmRleDtcbiAgICAgIHZhciBvblJvd3NSZW5kZXJlZCA9IHRoaXMucHJvcHMub25Sb3dzUmVuZGVyZWQ7XG5cblxuICAgICAgb25Sb3dzUmVuZGVyZWQoe1xuICAgICAgICBvdmVyc2NhblN0YXJ0SW5kZXg6IHJvd092ZXJzY2FuU3RhcnRJbmRleCxcbiAgICAgICAgb3ZlcnNjYW5TdG9wSW5kZXg6IHJvd092ZXJzY2FuU3RvcEluZGV4LFxuICAgICAgICBzdGFydEluZGV4OiByb3dTdGFydEluZGV4LFxuICAgICAgICBzdG9wSW5kZXg6IHJvd1N0b3BJbmRleFxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpc3Q7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZXN0aW1hdGVkUm93U2l6ZTogMzAsXG4gIG5vUm93c1JlbmRlcmVyOiBmdW5jdGlvbiBub1Jvd3NSZW5kZXJlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgb25Sb3dzUmVuZGVyZWQ6IGZ1bmN0aW9uIG9uUm93c1JlbmRlcmVkKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBvblNjcm9sbDogZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIG92ZXJzY2FuUm93Q291bnQ6IDEwLFxuICBzY3JvbGxUb0FsaWdubWVudDogJ2F1dG8nLFxuICBzdHlsZToge31cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBMaXN0O1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTGlzdC5wcm9wVHlwZXMgPSB7XG4gICdhcmlhLWxhYmVsJzogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgZml4ZWQgaGVpZ2h0IGZyb20gdGhlIHNjcm9sbGluZ0NvbnRhaW5lciBzbyB0aGF0IHRoZSB0b3RhbCBoZWlnaHRcbiAgICogb2Ygcm93cyBjYW4gc3RyZXRjaCB0aGUgd2luZG93LiBJbnRlbmRlZCBmb3IgdXNlIHdpdGggV2luZG93U2Nyb2xsZXJcbiAgICovXG4gIGF1dG9IZWlnaHQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKiogT3B0aW9uYWwgQ1NTIGNsYXNzIG5hbWUgKi9cbiAgY2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVXNlZCB0byBlc3RpbWF0ZSB0aGUgdG90YWwgaGVpZ2h0IG9mIGEgTGlzdCBiZWZvcmUgYWxsIG9mIGl0cyByb3dzIGhhdmUgYWN0dWFsbHkgYmVlbiBtZWFzdXJlZC5cbiAgICogVGhlIGVzdGltYXRlZCB0b3RhbCBoZWlnaHQgaXMgYWRqdXN0ZWQgYXMgcm93cyBhcmUgcmVuZGVyZWQuXG4gICAqL1xuICBlc3RpbWF0ZWRSb3dTaXplOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gIC8qKiBIZWlnaHQgY29uc3RyYWludCBmb3IgbGlzdCAoZGV0ZXJtaW5lcyBob3cgbWFueSBhY3R1YWwgcm93cyBhcmUgcmVuZGVyZWQpICovXG4gIGhlaWdodDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAvKiogT3B0aW9uYWwgcmVuZGVyZXIgdG8gYmUgdXNlZCBpbiBwbGFjZSBvZiByb3dzIHdoZW4gcm93Q291bnQgaXMgMCAqL1xuICBub1Jvd3NSZW5kZXJlcjogX3JlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGludm9rZWQgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2xpY2Ugb2Ygcm93cyB0aGF0IHdlcmUganVzdCByZW5kZXJlZC5cbiAgICogKHsgc3RhcnRJbmRleCwgc3RvcEluZGV4IH0pOiB2b2lkXG4gICAqL1xuICBvblJvd3NSZW5kZXJlZDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiByb3dzIHRvIHJlbmRlciBhYm92ZS9iZWxvdyB0aGUgdmlzaWJsZSBib3VuZHMgb2YgdGhlIGxpc3QuXG4gICAqIFRoZXNlIHJvd3MgY2FuIGhlbHAgZm9yIHNtb290aGVyIHNjcm9sbGluZyBvbiB0b3VjaCBkZXZpY2VzLlxuICAgKi9cbiAgb3ZlcnNjYW5Sb3dDb3VudDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuZXZlciB0aGUgc2Nyb2xsIG9mZnNldCBjaGFuZ2VzIHdpdGhpbiB0aGUgaW5uZXIgc2Nyb2xsYWJsZSByZWdpb24uXG4gICAqIFRoaXMgY2FsbGJhY2sgY2FuIGJlIHVzZWQgdG8gc3luYyBzY3JvbGxpbmcgYmV0d2VlbiBsaXN0cywgdGFibGVzLCBvciBncmlkcy5cbiAgICogKHsgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIHNjcm9sbFRvcCB9KTogdm9pZFxuICAgKi9cbiAgb25TY3JvbGw6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBFaXRoZXIgYSBmaXhlZCByb3cgaGVpZ2h0IChudW1iZXIpIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBoZWlnaHQgb2YgYSByb3cgZ2l2ZW4gaXRzIGluZGV4LlxuICAgKiAoeyBpbmRleDogbnVtYmVyIH0pOiBudW1iZXJcbiAgICovXG4gIHJvd0hlaWdodDogX3JlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLCBfcmVhY3QuUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gIC8qKiBSZXNwb25zaWJsZSBmb3IgcmVuZGVyaW5nIGEgcm93IGdpdmVuIGFuIGluZGV4OyAoeyBpbmRleDogbnVtYmVyIH0pOiBub2RlICovXG4gIHJvd1JlbmRlcmVyOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKiogTnVtYmVyIG9mIHJvd3MgaW4gbGlzdC4gKi9cbiAgcm93Q291bnQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgLyoqIFNlZSBHcmlkI3Njcm9sbFRvQWxpZ25tZW50ICovXG4gIHNjcm9sbFRvQWxpZ25tZW50OiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnYXV0bycsICdlbmQnLCAnc3RhcnQnLCAnY2VudGVyJ10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqIFJvdyBpbmRleCB0byBlbnN1cmUgdmlzaWJsZSAoYnkgZm9yY2VmdWxseSBzY3JvbGxpbmcgaWYgbmVjZXNzYXJ5KSAqL1xuICBzY3JvbGxUb0luZGV4OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblxuICAvKiogVmVydGljYWwgb2Zmc2V0LiAqL1xuICBzY3JvbGxUb3A6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKiBPcHRpb25hbCBpbmxpbmUgc3R5bGUgKi9cbiAgc3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKiBUYWIgaW5kZXggZm9yIGZvY3VzICovXG4gIHRhYkluZGV4OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblxuICAvKiogV2lkdGggb2YgbGlzdCAqL1xuICB3aWR0aDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9MaXN0L0xpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDg2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxpc3QgPSBleHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfTGlzdDIgPSByZXF1aXJlKCcuL0xpc3QnKTtcblxudmFyIF9MaXN0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpc3QyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX0xpc3QzLmRlZmF1bHQ7XG5leHBvcnRzLkxpc3QgPSBfTGlzdDMuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9MaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDEwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQ2FsbGJhY2tNZW1vaXplcjtcbi8qKlxuICogSGVscGVyIHV0aWxpdHkgdGhhdCB1cGRhdGVzIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgd2hlbmV2ZXIgYW55IG9mIHRoZSBzcGVjaWZpZWQgaW5kaWNlcyBoYXZlIGNoYW5nZWQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrTWVtb2l6ZXIoKSB7XG4gIHZhciByZXF1aXJlQWxsS2V5cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdHJ1ZTtcblxuICB2YXIgY2FjaGVkSW5kaWNlcyA9IHt9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBjYWxsYmFjayA9IF9yZWYuY2FsbGJhY2s7XG4gICAgdmFyIGluZGljZXMgPSBfcmVmLmluZGljZXM7XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGluZGljZXMpO1xuICAgIHZhciBhbGxJbml0aWFsaXplZCA9ICFyZXF1aXJlQWxsS2V5cyB8fCBrZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGluZGljZXNba2V5XTtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmxlbmd0aCA+IDAgOiB2YWx1ZSA+PSAwO1xuICAgIH0pO1xuICAgIHZhciBpbmRleENoYW5nZWQgPSBrZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoY2FjaGVkSW5kaWNlcykubGVuZ3RoIHx8IGtleXMuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgY2FjaGVkVmFsdWUgPSBjYWNoZWRJbmRpY2VzW2tleV07XG4gICAgICB2YXIgdmFsdWUgPSBpbmRpY2VzW2tleV07XG5cbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IGNhY2hlZFZhbHVlLmpvaW4oJywnKSAhPT0gdmFsdWUuam9pbignLCcpIDogY2FjaGVkVmFsdWUgIT09IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgY2FjaGVkSW5kaWNlcyA9IGluZGljZXM7XG5cbiAgICBpZiAoYWxsSW5pdGlhbGl6ZWQgJiYgaW5kZXhDaGFuZ2VkKSB7XG4gICAgICBjYWxsYmFjayhpbmRpY2VzKTtcbiAgICB9XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvdXRpbHMvY3JlYXRlQ2FsbGJhY2tNZW1vaXplci5qc1xuLy8gbW9kdWxlIGlkID0gODY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZURldGVjdEVsZW1lbnRSZXNpemU7XG4vKipcbiAqIERldGVjdCBFbGVtZW50IFJlc2l6ZS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zZGVjaW1hL2phdmFzY3JpcHQtZGV0ZWN0LWVsZW1lbnQtcmVzaXplXG4gKiBTZWJhc3RpYW4gRGVjaW1hXG4gKlxuICogRm9ya2VkIGZyb20gdmVyc2lvbiAwLjUuMzsgaW5jbHVkZXMgdGhlIGZvbGxvd2luZyBtb2RpZmljYXRpb25zOlxuICogMSnCoEd1YXJkIGFnYWluc3QgdW5zYWZlICd3aW5kb3cnIGFuZCAnZG9jdW1lbnQnIHJlZmVyZW5jZXMgKHRvIHN1cHBvcnQgU1NSKS5cbiAqIDIpwqBEZWZlciBpbml0aWFsaXphdGlvbiBjb2RlIHZpYSBhIHRvcC1sZXZlbCBmdW5jdGlvbiB3cmFwcGVyICh0byBzdXBwb3J0IFNTUikuXG4gKiAzKSBBdm9pZCB1bm5lY2Vzc2FyeSByZWZsb3dzIGJ5IG5vdCBtZWFzdXJpbmcgc2l6ZSBmb3Igc2Nyb2xsIGV2ZW50cyBidWJibGluZyBmcm9tIGNoaWxkcmVuLlxuICoqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZXRlY3RFbGVtZW50UmVzaXplKCkge1xuICAvLyBDaGVjayBgZG9jdW1lbnRgIGFuZCBgd2luZG93YCBpbiBjYXNlIG9mIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xuICB2YXIgX3dpbmRvdztcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX3dpbmRvdyA9IHdpbmRvdztcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfd2luZG93ID0gc2VsZjtcbiAgfSBlbHNlIHtcbiAgICBfd2luZG93ID0gdGhpcztcbiAgfVxuXG4gIHZhciBhdHRhY2hFdmVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuYXR0YWNoRXZlbnQ7XG5cbiAgaWYgKCFhdHRhY2hFdmVudCkge1xuICAgIHZhciByZXF1ZXN0RnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmFmID0gX3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgX3dpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgX3dpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBfd2luZG93LnNldFRpbWVvdXQoZm4sIDIwKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiByYWYoZm4pO1xuICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICB2YXIgY2FuY2VsRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2FuY2VsID0gX3dpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCBfd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IF93aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgX3dpbmRvdy5jbGVhclRpbWVvdXQ7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBjYW5jZWwoaWQpO1xuICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICB2YXIgcmVzZXRUcmlnZ2VycyA9IGZ1bmN0aW9uIHJlc2V0VHJpZ2dlcnMoZWxlbWVudCkge1xuICAgICAgdmFyIHRyaWdnZXJzID0gZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18sXG4gICAgICAgICAgZXhwYW5kID0gdHJpZ2dlcnMuZmlyc3RFbGVtZW50Q2hpbGQsXG4gICAgICAgICAgY29udHJhY3QgPSB0cmlnZ2Vycy5sYXN0RWxlbWVudENoaWxkLFxuICAgICAgICAgIGV4cGFuZENoaWxkID0gZXhwYW5kLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgY29udHJhY3Quc2Nyb2xsTGVmdCA9IGNvbnRyYWN0LnNjcm9sbFdpZHRoO1xuICAgICAgY29udHJhY3Quc2Nyb2xsVG9wID0gY29udHJhY3Quc2Nyb2xsSGVpZ2h0O1xuICAgICAgZXhwYW5kQ2hpbGQuc3R5bGUud2lkdGggPSBleHBhbmQub2Zmc2V0V2lkdGggKyAxICsgJ3B4JztcbiAgICAgIGV4cGFuZENoaWxkLnN0eWxlLmhlaWdodCA9IGV4cGFuZC5vZmZzZXRIZWlnaHQgKyAxICsgJ3B4JztcbiAgICAgIGV4cGFuZC5zY3JvbGxMZWZ0ID0gZXhwYW5kLnNjcm9sbFdpZHRoO1xuICAgICAgZXhwYW5kLnNjcm9sbFRvcCA9IGV4cGFuZC5zY3JvbGxIZWlnaHQ7XG4gICAgfTtcblxuICAgIHZhciBjaGVja1RyaWdnZXJzID0gZnVuY3Rpb24gY2hlY2tUcmlnZ2VycyhlbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRXaWR0aCAhPSBlbGVtZW50Ll9fcmVzaXplTGFzdF9fLndpZHRoIHx8IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICE9IGVsZW1lbnQuX19yZXNpemVMYXN0X18uaGVpZ2h0O1xuICAgIH07XG5cbiAgICB2YXIgc2Nyb2xsTGlzdGVuZXIgPSBmdW5jdGlvbiBzY3JvbGxMaXN0ZW5lcihlKSB7XG4gICAgICAvLyBEb24ndCBtZWFzdXJlICh3aGljaCBmb3JjZXMpIHJlZmxvdyBmb3Igc2Nyb2xscyB0aGF0IGhhcHBlbiBpbnNpZGUgb2YgY2hpbGRyZW4hXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ2NvbnRyYWN0LXRyaWdnZXInKSA8IDAgJiYgZS50YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ2V4cGFuZC10cmlnZ2VyJykgPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzO1xuICAgICAgcmVzZXRUcmlnZ2Vycyh0aGlzKTtcbiAgICAgIGlmICh0aGlzLl9fcmVzaXplUkFGX18pIGNhbmNlbEZyYW1lKHRoaXMuX19yZXNpemVSQUZfXyk7XG4gICAgICB0aGlzLl9fcmVzaXplUkFGX18gPSByZXF1ZXN0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY2hlY2tUcmlnZ2VycyhlbGVtZW50KSkge1xuICAgICAgICAgIGVsZW1lbnQuX19yZXNpemVMYXN0X18ud2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgIGVsZW1lbnQuX19yZXNpemVMYXN0X18uaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICBmbi5jYWxsKGVsZW1lbnQsIGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyogRGV0ZWN0IENTUyBBbmltYXRpb25zIHN1cHBvcnQgdG8gZGV0ZWN0IGVsZW1lbnQgZGlzcGxheS9yZS1hdHRhY2ggKi9cbiAgICB2YXIgYW5pbWF0aW9uID0gZmFsc2UsXG4gICAgICAgIGFuaW1hdGlvbnN0cmluZyA9ICdhbmltYXRpb24nLFxuICAgICAgICBrZXlmcmFtZXByZWZpeCA9ICcnLFxuICAgICAgICBhbmltYXRpb25zdGFydGV2ZW50ID0gJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICAgICAgZG9tUHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zJy5zcGxpdCgnICcpLFxuICAgICAgICBzdGFydEV2ZW50cyA9ICd3ZWJraXRBbmltYXRpb25TdGFydCBhbmltYXRpb25zdGFydCBvQW5pbWF0aW9uU3RhcnQgTVNBbmltYXRpb25TdGFydCcuc3BsaXQoJyAnKSxcbiAgICAgICAgcGZ4ID0gJyc7XG4gICAge1xuICAgICAgdmFyIGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG4gICAgICBpZiAoZWxtLnN0eWxlLmFuaW1hdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbmltYXRpb24gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoYW5pbWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvbVByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGVsbS5zdHlsZVtkb21QcmVmaXhlc1tpXSArICdBbmltYXRpb25OYW1lJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGZ4ID0gZG9tUHJlZml4ZXNbaV07XG4gICAgICAgICAgICBhbmltYXRpb25zdHJpbmcgPSBwZnggKyAnQW5pbWF0aW9uJztcbiAgICAgICAgICAgIGtleWZyYW1lcHJlZml4ID0gJy0nICsgcGZ4LnRvTG93ZXJDYXNlKCkgKyAnLSc7XG4gICAgICAgICAgICBhbmltYXRpb25zdGFydGV2ZW50ID0gc3RhcnRFdmVudHNbaV07XG4gICAgICAgICAgICBhbmltYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFuaW1hdGlvbk5hbWUgPSAncmVzaXplYW5pbSc7XG4gICAgdmFyIGFuaW1hdGlvbktleWZyYW1lcyA9ICdAJyArIGtleWZyYW1lcHJlZml4ICsgJ2tleWZyYW1lcyAnICsgYW5pbWF0aW9uTmFtZSArICcgeyBmcm9tIHsgb3BhY2l0eTogMDsgfSB0byB7IG9wYWNpdHk6IDA7IH0gfSAnO1xuICAgIHZhciBhbmltYXRpb25TdHlsZSA9IGtleWZyYW1lcHJlZml4ICsgJ2FuaW1hdGlvbjogMW1zICcgKyBhbmltYXRpb25OYW1lICsgJzsgJztcbiAgfVxuXG4gIHZhciBjcmVhdGVTdHlsZXMgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZXMoKSB7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0ZWN0RWxlbWVudFJlc2l6ZScpKSB7XG4gICAgICAvL29wYWNpdHk6MCB3b3JrcyBhcm91bmQgYSBjaHJvbWUgYnVnIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yODYzNjBcbiAgICAgIHZhciBjc3MgPSAoYW5pbWF0aW9uS2V5ZnJhbWVzID8gYW5pbWF0aW9uS2V5ZnJhbWVzIDogJycpICsgJy5yZXNpemUtdHJpZ2dlcnMgeyAnICsgKGFuaW1hdGlvblN0eWxlID8gYW5pbWF0aW9uU3R5bGUgOiAnJykgKyAndmlzaWJpbGl0eTogaGlkZGVuOyBvcGFjaXR5OiAwOyB9ICcgKyAnLnJlc2l6ZS10cmlnZ2VycywgLnJlc2l6ZS10cmlnZ2VycyA+IGRpdiwgLmNvbnRyYWN0LXRyaWdnZXI6YmVmb3JlIHsgY29udGVudDogXFxcIiBcXFwiOyBkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47IHotaW5kZXg6IC0xOyB9IC5yZXNpemUtdHJpZ2dlcnMgPiBkaXYgeyBiYWNrZ3JvdW5kOiAjZWVlOyBvdmVyZmxvdzogYXV0bzsgfSAuY29udHJhY3QtdHJpZ2dlcjpiZWZvcmUgeyB3aWR0aDogMjAwJTsgaGVpZ2h0OiAyMDAlOyB9JyxcbiAgICAgICAgICBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLFxuICAgICAgICAgIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgICAgc3R5bGUuaWQgPSAnZGV0ZWN0RWxlbWVudFJlc2l6ZSc7XG4gICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgICAgfVxuXG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGFkZFJlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24gYWRkUmVzaXplTGlzdGVuZXIoZWxlbWVudCwgZm4pIHtcbiAgICBpZiAoYXR0YWNoRXZlbnQpIGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29ucmVzaXplJywgZm4pO2Vsc2Uge1xuICAgICAgaWYgKCFlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcnNfXykge1xuICAgICAgICB2YXIgZWxlbWVudFN0eWxlID0gX3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgICBpZiAoZWxlbWVudFN0eWxlICYmIGVsZW1lbnRTdHlsZS5wb3NpdGlvbiA9PSAnc3RhdGljJykge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVN0eWxlcygpO1xuICAgICAgICBlbGVtZW50Ll9fcmVzaXplTGFzdF9fID0ge307XG4gICAgICAgIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXyA9IFtdO1xuICAgICAgICAoZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuY2xhc3NOYW1lID0gJ3Jlc2l6ZS10cmlnZ2Vycyc7XG4gICAgICAgIGVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXhwYW5kLXRyaWdnZXJcIj48ZGl2PjwvZGl2PjwvZGl2PicgKyAnPGRpdiBjbGFzcz1cImNvbnRyYWN0LXRyaWdnZXJcIj48L2Rpdj4nO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fKTtcbiAgICAgICAgcmVzZXRUcmlnZ2VycyhlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxMaXN0ZW5lciwgdHJ1ZSk7XG5cbiAgICAgICAgLyogTGlzdGVuIGZvciBhIGNzcyBhbmltYXRpb24gdG8gZGV0ZWN0IGVsZW1lbnQgZGlzcGxheS9yZS1hdHRhY2ggKi9cbiAgICAgICAgaWYgKGFuaW1hdGlvbnN0YXJ0ZXZlbnQpIHtcbiAgICAgICAgICBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcnNfXy5fX2FuaW1hdGlvbkxpc3RlbmVyX18gPSBmdW5jdGlvbiBhbmltYXRpb25MaXN0ZW5lcihlKSB7XG4gICAgICAgICAgICBpZiAoZS5hbmltYXRpb25OYW1lID09IGFuaW1hdGlvbk5hbWUpIHJlc2V0VHJpZ2dlcnMoZWxlbWVudCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcnNfXy5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbnN0YXJ0ZXZlbnQsIGVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fLl9fYW5pbWF0aW9uTGlzdGVuZXJfXyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXy5wdXNoKGZuKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJlbW92ZVJlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlUmVzaXplTGlzdGVuZXIoZWxlbWVudCwgZm4pIHtcbiAgICBpZiAoYXR0YWNoRXZlbnQpIGVsZW1lbnQuZGV0YWNoRXZlbnQoJ29ucmVzaXplJywgZm4pO2Vsc2Uge1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLnNwbGljZShlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18uaW5kZXhPZihmbiksIDEpO1xuICAgICAgaWYgKCFlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18ubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsTGlzdGVuZXIsIHRydWUpO1xuICAgICAgICBpZiAoZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18uX19hbmltYXRpb25MaXN0ZW5lcl9fKSB7XG4gICAgICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18ucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25zdGFydGV2ZW50LCBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcnNfXy5fX2FuaW1hdGlvbkxpc3RlbmVyX18pO1xuICAgICAgICAgIGVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fLl9fYW5pbWF0aW9uTGlzdGVuZXJfXyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcnNfXyA9ICFlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIFByZWFjdCBjb21wYXQ7IHNlZSBkZXZlbG9waXQvcHJlYWN0LWNvbXBhdC9pc3N1ZXMvMjI4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRSZXNpemVMaXN0ZW5lcjogYWRkUmVzaXplTGlzdGVuZXIsXG4gICAgcmVtb3ZlUmVzaXplTGlzdGVuZXI6IHJlbW92ZVJlc2l6ZUxpc3RlbmVyXG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvdmVuZG9yL2RldGVjdEVsZW1lbnRSZXNpemUuanNcbi8vIG1vZHVsZSBpZCA9IDg2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENyZWF0YWJsZSB9IGZyb20gJ3JlYWN0LXNlbGVjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgVmlydHVhbGl6ZWRTZWxlY3QgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtc2VsZWN0J1xudmFyIGNpdHlEYXRhPSAgW1xuICB7IG5hbWU6ICdBYmlsZW5lJyB9LFxuICB7IG5hbWU6ICdBZGRpc29uJyB9LFxuICB7IG5hbWU6ICdBa3JvbicgfSxcbiAgeyBuYW1lOiAnQWxhbWVkYScgfSxcbiAgeyBuYW1lOiAnQWxiYW55JyB9LFxuICB7IG5hbWU6ICdBbGJhbnknIH0sXG4gIHsgbmFtZTogJ0FsYmFueScgfSxcbiAgeyBuYW1lOiAnQWxidXF1ZXJxdWUnIH0sXG4gIHsgbmFtZTogJ0FsZXhhbmRyaWEnIH0sXG4gIHsgbmFtZTogJ0FsZXhhbmRyaWEnIH0sXG4gIHsgbmFtZTogJ0FsaGFtYnJhJyB9LFxuICB7IG5hbWU6ICdBbGlzbyBWaWVqbycgfSxcbiAgeyBuYW1lOiAnQWxsZW4nIH0sXG4gIHsgbmFtZTogJ0FsbGVudG93bicgfSxcbiAgeyBuYW1lOiAnQWxwaGFyZXR0YScgfSxcbiAgeyBuYW1lOiAnQWx0YW1vbnRlIFNwcmluZ3MnIH0sXG4gIHsgbmFtZTogJ0FsdG9vbmEnIH0sXG4gIHsgbmFtZTogJ0FtYXJpbGxvJyB9LFxuICB7IG5hbWU6ICdBbWVzJyB9LFxuICB7IG5hbWU6ICdBbmFoZWltJyB9LFxuICB7IG5hbWU6ICdBbmNob3JhZ2UnIH0sXG4gIHsgbmFtZTogJ0FuZGVyc29uJyB9LFxuICB7IG5hbWU6ICdBbmtlbnknIH0sXG4gIHsgbmFtZTogJ0FubiBBcmJvcicgfSxcbiAgeyBuYW1lOiAnQW5uYXBvbGlzJyB9LFxuICB7IG5hbWU6ICdBbnRpb2NoJyB9LFxuICB7IG5hbWU6ICdBcGFjaGUgSnVuY3Rpb24nIH0sXG4gIHsgbmFtZTogJ0FwZXgnIH0sXG4gIHsgbmFtZTogJ0Fwb3BrYScgfSxcbiAgeyBuYW1lOiAnQXBwbGUgVmFsbGV5JyB9LFxuICB7IG5hbWU6ICdBcHBsZSBWYWxsZXknIH0sXG4gIHsgbmFtZTogJ0FwcGxldG9uJyB9LFxuICB7IG5hbWU6ICdBcmNhZGlhJyB9LFxuICB7IG5hbWU6ICdBcmxpbmd0b24nIH0sXG4gIHsgbmFtZTogJ0FybGluZ3RvbiBIZWlnaHRzJyB9LFxuICB7IG5hbWU6ICdBcnZhZGEnIH0sXG4gIHsgbmFtZTogJ0FzaGV2aWxsZScgfSxcbiAgeyBuYW1lOiAnQXRoZW5zLUNsYXJrZSBDb3VudHknIH0sXG4gIHsgbmFtZTogJ0F0bGFudGEnIH0sXG4gIHsgbmFtZTogJ0F0bGFudGljIENpdHknIH0sXG4gIHsgbmFtZTogJ0F0dGxlYm9ybycgfSxcbiAgeyBuYW1lOiAnQXVidXJuJyB9LFxuICB7IG5hbWU6ICdBdWJ1cm4nIH0sXG4gIHsgbmFtZTogJ0F1Z3VzdGEtUmljaG1vbmQgQ291bnR5JyB9LFxuICB7IG5hbWU6ICdBdXJvcmEnIH0sXG4gIHsgbmFtZTogJ0F1cm9yYScgfSxcbiAgeyBuYW1lOiAnQXVzdGluJyB9LFxuICB7IG5hbWU6ICdBdmVudHVyYScgfSxcbiAgeyBuYW1lOiAnQXZvbmRhbGUnIH0sXG4gIHsgbmFtZTogJ0F6dXNhJyB9LFxuICB7IG5hbWU6ICdCYWtlcnNmaWVsZCcgfSxcbiAgeyBuYW1lOiAnQmFsZHdpbiBQYXJrJyB9LFxuICB7IG5hbWU6ICdCYWx0aW1vcmUnIH0sXG4gIHsgbmFtZTogJ0Jhcm5zdGFibGUgVG93bicgfSxcbiAgeyBuYW1lOiAnQmFydGxldHQnIH0sXG4gIHsgbmFtZTogJ0JhcnRsZXR0JyB9LFxuICB7IG5hbWU6ICdCYXRvbiBSb3VnZScgfSxcbiAgeyBuYW1lOiAnQmF0dGxlIENyZWVrJyB9LFxuICB7IG5hbWU6ICdCYXlvbm5lJyB9LFxuICB7IG5hbWU6ICdCYXl0b3duJyB9LFxuICB7IG5hbWU6ICdCZWF1bW9udCcgfSxcbiAgeyBuYW1lOiAnQmVhdW1vbnQnIH0sXG4gIHsgbmFtZTogJ0JlYXZlcmNyZWVrJyB9LFxuICB7IG5hbWU6ICdCZWF2ZXJ0b24nIH0sXG4gIHsgbmFtZTogJ0JlZGZvcmQnIH0sXG4gIHsgbmFtZTogJ0JlbGwgR2FyZGVucycgfSxcbiAgeyBuYW1lOiAnQmVsbGV2aWxsZScgfSxcbiAgeyBuYW1lOiAnQmVsbGV2dWUnIH0sXG4gIHsgbmFtZTogJ0JlbGxldnVlJyB9LFxuICB7IG5hbWU6ICdCZWxsZmxvd2VyJyB9LFxuICB7IG5hbWU6ICdCZWxsaW5naGFtJyB9LFxuICB7IG5hbWU6ICdCZWxvaXQnIH0sXG4gIHsgbmFtZTogJ0JlbmQnIH0sXG4gIHsgbmFtZTogJ0JlbnRvbnZpbGxlJyB9LFxuICB7IG5hbWU6ICdCZXJrZWxleScgfSxcbiAgeyBuYW1lOiAnQmVyd3luJyB9LFxuICB7IG5hbWU6ICdCZXRobGVoZW0nIH0sXG4gIHsgbmFtZTogJ0JldmVybHknIH0sXG4gIHsgbmFtZTogJ0JpbGxpbmdzJyB9LFxuICB7IG5hbWU6ICdCaWxveGknIH0sXG4gIHsgbmFtZTogJ0JpbmdoYW10b24nIH0sXG4gIHsgbmFtZTogJ0Jpcm1pbmdoYW0nIH0sXG4gIHsgbmFtZTogJ0Jpc21hcmNrJyB9LFxuICB7IG5hbWU6ICdCbGFja3NidXJnJyB9LFxuICB7IG5hbWU6ICdCbGFpbmUnIH0sXG4gIHsgbmFtZTogJ0Jsb29taW5ndG9uJyB9LFxuICB7IG5hbWU6ICdCbG9vbWluZ3RvbicgfSxcbiAgeyBuYW1lOiAnQmxvb21pbmd0b24nIH0sXG4gIHsgbmFtZTogJ0JsdWUgU3ByaW5ncycgfSxcbiAgeyBuYW1lOiAnQm9jYSBSYXRvbicgfSxcbiAgeyBuYW1lOiAnQm9pc2UgQ2l0eScgfSxcbiAgeyBuYW1lOiAnQm9saW5nYnJvb2snIH0sXG4gIHsgbmFtZTogJ0Jvbml0YSBTcHJpbmdzJyB9LFxuICB7IG5hbWU6ICdCb3NzaWVyIENpdHknIH0sXG4gIHsgbmFtZTogJ0Jvc3RvbicgfSxcbiAgeyBuYW1lOiAnQm91bGRlcicgfSxcbiAgeyBuYW1lOiAnQm91bnRpZnVsJyB9LFxuICB7IG5hbWU6ICdCb3dpZScgfSxcbiAgeyBuYW1lOiAnQm93bGluZyBHcmVlbicgfSxcbiAgeyBuYW1lOiAnQm95bnRvbiBCZWFjaCcgfSxcbiAgeyBuYW1lOiAnQm96ZW1hbicgfSxcbiAgeyBuYW1lOiAnQnJhZGVudG9uJyB9LFxuICB7IG5hbWU6ICdCcmVhJyB9LFxuICB7IG5hbWU6ICdCcmVtZXJ0b24nIH0sXG4gIHsgbmFtZTogJ0JyZW50d29vZCcgfSxcbiAgeyBuYW1lOiAnQnJlbnR3b29kJyB9LFxuICB7IG5hbWU6ICdCcmlkZ2Vwb3J0JyB9LFxuICB7IG5hbWU6ICdCcmlzdG9sJyB9LFxuICB7IG5hbWU6ICdCcm9ja3RvbicgfSxcbiAgeyBuYW1lOiAnQnJva2VuIEFycm93JyB9LFxuICB7IG5hbWU6ICdCcm9va2ZpZWxkJyB9LFxuICB7IG5hbWU6ICdCcm9va2hhdmVuJyB9LFxuICB7IG5hbWU6ICdCcm9va2x5biBQYXJrJyB9LFxuICB7IG5hbWU6ICdCcm9vbWZpZWxkJyB9LFxuICB7IG5hbWU6ICdCcm93bnN2aWxsZScgfSxcbiAgeyBuYW1lOiAnQnJ5YW4nIH0sXG4gIHsgbmFtZTogJ0J1Y2tleWUnIH0sXG4gIHsgbmFtZTogJ0J1ZW5hIFBhcmsnIH0sXG4gIHsgbmFtZTogJ0J1ZmZhbG8nIH0sXG4gIHsgbmFtZTogJ0J1ZmZhbG8gR3JvdmUnIH0sXG4gIHsgbmFtZTogJ0J1bGxoZWFkIENpdHknIH0sXG4gIHsgbmFtZTogJ0J1cmJhbmsnIH0sXG4gIHsgbmFtZTogJ0J1cmllbicgfSxcbiAgeyBuYW1lOiAnQnVybGVzb24nIH0sXG4gIHsgbmFtZTogJ0J1cmxpbmd0b24nIH0sXG4gIHsgbmFtZTogJ0J1cmxpbmd0b24nIH0sXG4gIHsgbmFtZTogJ0J1cm5zdmlsbGUnIH0sXG4gIHsgbmFtZTogJ0NhbGR3ZWxsJyB9LFxuICB7IG5hbWU6ICdDYWxleGljbycgfSxcbiAgeyBuYW1lOiAnQ2FsdW1ldCBDaXR5JyB9LFxuICB7IG5hbWU6ICdDYW1hcmlsbG8nIH0sXG4gIHsgbmFtZTogJ0NhbWJyaWRnZScgfSxcbiAgeyBuYW1lOiAnQ2FtZGVuJyB9LFxuICB7IG5hbWU6ICdDYW1wYmVsbCcgfSxcbiAgeyBuYW1lOiAnQ2FudG9uJyB9LFxuICB7IG5hbWU6ICdDYXBlIENvcmFsJyB9LFxuICB7IG5hbWU6ICdDYXBlIEdpcmFyZGVhdScgfSxcbiAgeyBuYW1lOiAnQ2FybHNiYWQnIH0sXG4gIHsgbmFtZTogJ0Nhcm1lbCcgfSxcbiAgeyBuYW1lOiAnQ2Fyb2wgU3RyZWFtJyB9LFxuICB7IG5hbWU6ICdDYXJwZW50ZXJzdmlsbGUnIH0sXG4gIHsgbmFtZTogJ0NhcnJvbGx0b24nIH0sXG4gIHsgbmFtZTogJ0NhcnNvbicgfSxcbiAgeyBuYW1lOiAnQ2Fyc29uIENpdHknIH0sXG4gIHsgbmFtZTogJ0NhcnknIH0sXG4gIHsgbmFtZTogJ0Nhc2EgR3JhbmRlJyB9LFxuICB7IG5hbWU6ICdDYXNwZXInIH0sXG4gIHsgbmFtZTogJ0Nhc3RsZSBSb2NrJyB9LFxuICB7IG5hbWU6ICdDYXRoZWRyYWwgQ2l0eScgfSxcbiAgeyBuYW1lOiAnQ2VkYXIgRmFsbHMnIH0sXG4gIHsgbmFtZTogJ0NlZGFyIEhpbGwnIH0sXG4gIHsgbmFtZTogJ0NlZGFyIFBhcmsnIH0sXG4gIHsgbmFtZTogJ0NlZGFyIFJhcGlkcycgfSxcbiAgeyBuYW1lOiAnQ2VudGVubmlhbCcgfSxcbiAgeyBuYW1lOiAnQ2VyZXMnIH0sXG4gIHsgbmFtZTogJ0NlcnJpdG9zJyB9LFxuICB7IG5hbWU6ICdDaGFtcGFpZ24nIH0sXG4gIHsgbmFtZTogJ0NoYW5kbGVyJyB9LFxuICB7IG5hbWU6ICdDaGFwZWwgSGlsbCcgfSxcbiAgeyBuYW1lOiAnQ2hhcmxlc3RvbicgfSxcbiAgeyBuYW1lOiAnQ2hhcmxlc3RvbicgfSxcbiAgeyBuYW1lOiAnQ2hhcmxvdHRlJyB9LFxuICB7IG5hbWU6ICdDaGFybG90dGVzdmlsbGUnIH0sXG4gIHsgbmFtZTogJ0NoYXR0YW5vb2dhJyB9LFxuICB7IG5hbWU6ICdDaGVsc2VhJyB9LFxuICB7IG5hbWU6ICdDaGVzYXBlYWtlJyB9LFxuICB7IG5hbWU6ICdDaGVzdGVyZmllbGQnIH0sXG4gIHsgbmFtZTogJ0NoZXllbm5lJyB9LFxuICB7IG5hbWU6ICdDaGljYWdvJyB9LFxuICB7IG5hbWU6ICdDaGljbycgfSxcbiAgeyBuYW1lOiAnQ2hpY29wZWUnIH0sXG4gIHsgbmFtZTogJ0NoaW5vJyB9LFxuICB7IG5hbWU6ICdDaGlubyBIaWxscycgfSxcbiAgeyBuYW1lOiAnQ2h1bGEgVmlzdGEnIH0sXG4gIHsgbmFtZTogJ0NpY2VybycgfSxcbiAgeyBuYW1lOiAnQ2luY2lubmF0aScgfSxcbiAgeyBuYW1lOiAnQ2l0cnVzIEhlaWdodHMnIH0sXG4gIHsgbmFtZTogJ0NsYXJrc3ZpbGxlJyB9LFxuICB7IG5hbWU6ICdDbGVhcndhdGVyJyB9LFxuICB7IG5hbWU6ICdDbGV2ZWxhbmQnIH0sXG4gIHsgbmFtZTogJ0NsZXZlbGFuZCcgfSxcbiAgeyBuYW1lOiAnQ2xldmVsYW5kIEhlaWdodHMnIH0sXG4gIHsgbmFtZTogJ0NsaWZ0b24nIH0sXG4gIHsgbmFtZTogJ0Nsb3ZpcycgfSxcbiAgeyBuYW1lOiAnQ2xvdmlzJyB9LFxuICB7IG5hbWU6ICdDb2FjaGVsbGEnIH0sXG4gIHsgbmFtZTogJ0NvY29udXQgQ3JlZWsnIH0sXG4gIHsgbmFtZTogJ0NvZXVyIGRcXCdBbGVuZScgfSxcbiAgeyBuYW1lOiAnQ29sbGVnZSBTdGF0aW9uJyB9LFxuICB7IG5hbWU6ICdDb2xsaWVydmlsbGUnIH0sXG4gIHsgbmFtZTogJ0NvbG9yYWRvIFNwcmluZ3MnIH0sXG4gIHsgbmFtZTogJ0NvbHRvbicgfSxcbiAgeyBuYW1lOiAnQ29sdW1iaWEnIH1cbl07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxoMSA+XG4gICAgICAgICAgICBSZWFjdCBWaXJ0dWFsaXplZCBTZWxlY3RcbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICBFbmpveSBkcm9wLWRvd24gbWVudXMgcG93ZXJlZCBieSA8YSAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL0plZFdhdHNvbi9yZWFjdC1zZWxlY3QvJz48c3Ryb25nPkBKZWRXYXRzb248L3N0cm9uZz4ncyByZWFjdC1zZWxlY3Q8L2E+IGFuZFxuICAgICAgICAgICAgZWZmaWNpZW50IHdpbmRvd2luZyBicm91Z2h0IHRvIHlvdSBieSA8YSAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2J2YXVnaG4vcmVhY3QtdmlydHVhbGl6ZWQvJz48c3Ryb25nPkBidmF1Z2huPC9zdHJvbmc+J3MgcmVhY3QtdmlydHVhbGl6ZWQ8L2E+LlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICBEb2NzIGFuZCBjb2RlIG9uIDxhICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vYnZhdWdobi9yZWFjdC12aXJ0dWFsaXplZC1zZWxlY3QvJz5HaXRIdWI8L2E+LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8c2VjdGlvbiA+XG4gICAgICAgICAgPFZpcnR1YWxpemVkU2VsZWN0RXhhbXBsZVxuICAgICAgICAgICAgY2l0eURhdGE9e2NpdHlEYXRhfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG5cbmNsYXNzIFZpcnR1YWxpemVkU2VsZWN0RXhhbXBsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2l0eURhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGNvdW50cnlEYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBuYW1lRGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIGNvbnN0IGNyZWF0YWJsZU9wdGlvbnMgPSBbXG4gICAgICB7IGxhYmVsOiAnQmx1ZScsIHZhbHVlOiAnIzAwRicgfSxcbiAgICAgIHsgbGFiZWw6ICdHcmVlbicsIHZhbHVlOiAnIzBGMCcgfSxcbiAgICAgIHsgbGFiZWw6ICdSZWQnLCB2YWx1ZTogJyNGMDAnIH1cbiAgICBdXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2xlYXJhYmxlOiB0cnVlLFxuICAgICAgY3JlYXRhYmxlT3B0aW9ucyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIGdpdGh1YlVzZXJzOiBbXSxcbiAgICAgIG11bHRpOiBmYWxzZSxcbiAgICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgICBzZWxlY3RlZENyZWF0YWJsZTogbnVsbCxcbiAgICAgIHNlbGVjdGVkQ2l0eTogbnVsbFxuICAgIH1cblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNpdHlEYXRhLCBjb3VudHJ5RGF0YSwgbmFtZURhdGEgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGNsZWFyYWJsZSwgY3JlYXRhYmxlT3B0aW9ucywgZGlzYWJsZWQsIGdpdGh1YlVzZXJzLCBtdWx0aSwgc2VhcmNoYWJsZSwgc2VsZWN0ZWRDaXR5LCBzZWxlY3RlZENvdW50cnksIHNlbGVjdGVkQ3JlYXRhYmxlLCBzZWxlY3RlZEdpdGh1YlVzZXIsIHNlbGVjdGVkTmFtZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPFZpcnR1YWxpemVkU2VsZWN0XG4gICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgbGFiZWxLZXk9J25hbWUnXG4gICAgICAgICAgbXVsdGk9e3RydWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZENpdHkpID0+e2NvbnNvbGUubG9nKHNlbGVjdGVkQ2l0eSk7IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENpdHkgfSl9fVxuICAgICAgICAgIG9wdGlvbnM9e2NpdHlEYXRhfVxuICAgICAgICAgIHNlYXJjaGFibGU9e3RydWV9XG4gICAgICAgICAgc2ltcGxlVmFsdWVcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZENpdHl9XG4gICAgICAgICAgdmFsdWVLZXk9J25hbWUnXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHVsID5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXttdWx0aX1cbiAgICAgICAgICAgICAgICBuYW1lPSdtdWx0aSdcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgbXVsdGk6IGV2ZW50LnRhcmdldC5jaGVja2VkIH0pfVxuICAgICAgICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICBNdWx0aS1zZWxlY3Q/XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17c2VhcmNoYWJsZX1cbiAgICAgICAgICAgICAgICBuYW1lPSdzZWFyY2hhYmxlJ1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hhYmxlOiBldmVudC50YXJnZXQuY2hlY2tlZCB9KX1cbiAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgU2VhcmNoYWJsZT9cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtjbGVhcmFibGV9XG4gICAgICAgICAgICAgICAgbmFtZT0nY2xlYXJhYmxlJ1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyBjbGVhcmFibGU6IGV2ZW50LnRhcmdldC5jaGVja2VkIH0pfVxuICAgICAgICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICBDbGVhcmFibGU/XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgbmFtZT0nZGlzYWJsZWQnXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRpc2FibGVkOiBldmVudC50YXJnZXQuY2hlY2tlZCB9KX1cbiAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgRGlzYWJsZWQ/XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPGg0ID5cbiAgICAgICAgICBDdXN0b20gT3B0aW9uIFJlbmRlcmVyXG4gICAgICAgIDwvaDQ+XG5cbiAgICAgICAgPGRpdiA+XG4gICAgICAgICAgRGlzcGxheXMgYSBsaXN0IG9mIHdvcmxkIGNvdW50cmllcyB1c2luZyBhIGN1c3RvbSBvcHRpb24gcmVuZGVyZXIuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxWaXJ0dWFsaXplZFNlbGVjdFxuICAgICAgICAgIGxhYmVsS2V5PSduYW1lJ1xuICAgICAgICAgIG9uQ2hhbmdlPXsoc2VsZWN0ZWRDb3VudHJ5KSA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDb3VudHJ5IH0pfVxuICAgICAgICAgIG9wdGlvblJlbmRlcmVyPXtDb3VudHJ5T3B0aW9uUmVuZGVyZXJ9XG4gICAgICAgICAgb3B0aW9uSGVpZ2h0PXs0MH1cbiAgICAgICAgICBvcHRpb25zPXtjb3VudHJ5RGF0YX1cbiAgICAgICAgICBzaW1wbGVWYWx1ZVxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZENvdW50cnl9XG4gICAgICAgICAgdmFsdWVLZXk9J2NvZGUnXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGg0ID5cbiAgICAgICAgICBEeW5hbWljIEhlaWdodCBPcHRpb25zXG4gICAgICAgIDwvaDQ+XG5cbiAgICAgICAgPGRpdiA+XG4gICAgICAgICAgRGlzcGxheXMgb3B0aW9uLWdyb3VwIGhlYWRlcnMgdGhhdCBhcmUgc2l6ZWQgZGlmZmVyZW50IHRoYW4gcmVndWxhciBvcHRpb25zLlxuICAgICAgICAgIERlbW9uc3RyYXRlcyBob3cgdG8gdXNlIGR5bmFtaWMgb3B0aW9uIGhlaWdodHMgZmVhdHVyZS5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFZpcnR1YWxpemVkU2VsZWN0XG4gICAgICAgICAgbGFiZWxLZXk9J25hbWUnXG4gICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZE5hbWUpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE5hbWUgfSl9XG4gICAgICAgICAgb25JbnB1dENoYW5nZT17KCkgPT4gdGhpcy5fY3VzdG9tT3B0aW9uSGVpZ2h0c1NlbGVjdCAmJiB0aGlzLl9jdXN0b21PcHRpb25IZWlnaHRzU2VsZWN0LnJlY29tcHV0ZU9wdGlvbkhlaWdodHMoKX1cbiAgICAgICAgICBvcHRpb25IZWlnaHQ9eyh7IG9wdGlvbiB9KSA9PiBvcHRpb24udHlwZSA9PT0gJ2hlYWRlcicgPyAyNSA6IDM1fVxuICAgICAgICAgIG9wdGlvblJlbmRlcmVyPXtOYW1lT3B0aW9uUmVuZGVyZXJ9XG4gICAgICAgICAgb3B0aW9ucz17bmFtZURhdGF9XG4gICAgICAgICAgcmVmPXsocmVmKSA9PiB0aGlzLl9jdXN0b21PcHRpb25IZWlnaHRzU2VsZWN0ID0gcmVmfVxuICAgICAgICAgIHNlYXJjaGFibGU9e3NlYXJjaGFibGV9XG4gICAgICAgICAgc2ltcGxlVmFsdWVcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWROYW1lfVxuICAgICAgICAgIHZhbHVlS2V5PSduYW1lJ1xuICAgICAgICAvPlxuXG4gICAgICAgIDxoNCA+XG4gICAgICAgICAgQXN5bmMgT3B0aW9uc1xuICAgICAgICA8L2g0PlxuXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgIERpc3BsYXlzIGFuIGFzeW5jIDxjb2RlPlNlbGVjdDwvY29kZT4gY29tcG9uZW50IHdpcmVkIHVwIHRvIHNlYXJjaCBmb3IgR2l0aHViIHVzZXJzLlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8VmlydHVhbGl6ZWRTZWxlY3RcbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGJhY2tzcGFjZVJlbW92ZXM9e2ZhbHNlfVxuICAgICAgICAgIGxhYmVsS2V5PSdsb2dpbidcbiAgICAgICAgICBsb2FkT3B0aW9ucz17dGhpcy5fbG9hZEdpdGh1YlVzZXJzfVxuICAgICAgICAgIG1pbmltdW1JbnB1dD17MX1cbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkR2l0aHViVXNlcikgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkR2l0aHViVXNlciB9KX1cbiAgICAgICAgICBvblZhbHVlQ2xpY2s9e3RoaXMuX2dvVG9HaXRodWJVc2VyfVxuICAgICAgICAgIG9wdGlvbnM9e2dpdGh1YlVzZXJzfVxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEdpdGh1YlVzZXJ9XG4gICAgICAgICAgdmFsdWVLZXk9J2lkJ1xuICAgICAgICAvPlxuXG4gICAgICAgIDxoNCA+XG4gICAgICAgICAgQ3JlYXRhYmxlIE9wdGlvbnNcbiAgICAgICAgPC9oND5cblxuICAgICAgICA8ZGl2ID5cbiAgICAgICAgICBEaXNwbGF5cyBhIDxjb2RlPlNlbGVjdC5DcmVhdGFibGU8L2NvZGU+IGNvbXBvbmVudCB0aGF0IGVuYWJsZXMgdXNlcnMgdG8gY3JlYXRlIHRoZWlyIG93biBvcHRpb25zLlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8VmlydHVhbGl6ZWRTZWxlY3RcbiAgICAgICAgICBsYWJlbEtleT0nbGFiZWwnXG4gICAgICAgICAgbXVsdGlcbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkQ3JlYXRhYmxlKSA9Pntjb25zb2xlLmxvZyhzZWxlY3RlZENyZWF0YWJsZSk7IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENyZWF0YWJsZSB9KX19XG4gICAgICAgICAgb3B0aW9uSGVpZ2h0PXs0MH1cbiAgICAgICAgICBvcHRpb25zPXtjcmVhdGFibGVPcHRpb25zfVxuICAgICAgICAgIHNlbGVjdENvbXBvbmVudD17Q3JlYXRhYmxlfVxuICAgICAgICAgIHNpbXBsZVZhbHVlXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQ3JlYXRhYmxlfVxuICAgICAgICAgIHZhbHVlS2V5PSd2YWx1ZSdcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9nb1RvR2l0aHViVXNlciAodmFsdWUpIHtcbiAgICB3aW5kb3cub3Blbih2YWx1ZS5odG1sX3VybClcbiAgfVxuXG4gIF9sb2FkR2l0aHViVXNlcnMgKGlucHV0KSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPSR7aW5wdXR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgY29uc3QgZ2l0aHViVXNlcnMgPSBqc29uLml0ZW1zXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdpdGh1YlVzZXJzIH0pXG5cbiAgICAgICAgcmV0dXJuIHsgb3B0aW9uczogZ2l0aHViVXNlcnMgfVxuICAgICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBDb3VudHJ5T3B0aW9uUmVuZGVyZXIgKHsgZm9jdXNlZE9wdGlvbiwgZm9jdXNlZE9wdGlvbkluZGV4LCBmb2N1c09wdGlvbiwga2V5LCBsYWJlbEtleSwgb3B0aW9uLCBvcHRpb25zLCBzZWxlY3RWYWx1ZSwgc3R5bGUsIHZhbHVlQXJyYXkgfSkge1xuICBjb25zdCBmbGFnSW1hZ2VVcmwgPSBgaHR0cHM6Ly9yYXdnaXQuY29tL2hqbmlsc3Nvbi9jb3VudHJ5LWZsYWdzL21hc3Rlci9zdmcvJHtvcHRpb24uY29kZS50b0xvd2VyQ2FzZSgpfS5zdmdgXG5cbiAgY29uc3QgY2xhc3NOYW1lcyA9IFtzdHlsZXMuY291bnRyeU9wdGlvbl1cbiAgaWYgKG9wdGlvbiA9PT0gZm9jdXNlZE9wdGlvbikge1xuICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuY291bnRyeU9wdGlvbkZvY3VzZWQpXG4gIH1cbiAgaWYgKHZhbHVlQXJyYXkuaW5kZXhPZihvcHRpb24pID49IDApIHtcbiAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmNvdW50cnlPcHRpb25TZWxlY3RlZClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX1cbiAgICAgIGtleT17a2V5fVxuICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0VmFsdWUob3B0aW9uKX1cbiAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBmb2N1c09wdGlvbihvcHRpb24pfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgID5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5jb3VudHJ5TGFiZWx9PlxuICAgICAgICB7b3B0aW9uLm5hbWV9XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3VudHJ5RmxhZ31cbiAgICAgICAgc3JjPXtmbGFnSW1hZ2VVcmx9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIE5hbWVPcHRpb25SZW5kZXJlciAoeyBmb2N1c2VkT3B0aW9uLCBmb2N1c2VkT3B0aW9uSW5kZXgsIGZvY3VzT3B0aW9uLCBrZXksIGxhYmVsS2V5LCBvcHRpb24sIG9wdGlvbkluZGV4LCBvcHRpb25zLCBzZWxlY3RWYWx1ZSwgc3R5bGUsIHZhbHVlQXJyYXkgfSkge1xuICBjb25zdCBjbGFzc05hbWVzID0gW3N0eWxlcy5uYW1lT3B0aW9uXVxuXG4gIGlmIChvcHRpb24udHlwZSA9PT0gJ2hlYWRlcicpIHtcbiAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLm5hbWVIZWFkZXIpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfVxuICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgPlxuICAgICAgICB7b3B0aW9uLm5hbWV9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgaWYgKG9wdGlvbiA9PT0gZm9jdXNlZE9wdGlvbikge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5uYW1lT3B0aW9uRm9jdXNlZClcbiAgICB9XG4gICAgaWYgKHZhbHVlQXJyYXkuaW5kZXhPZihvcHRpb24pID49IDApIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMubmFtZU9wdGlvblNlbGVjdGVkKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9XG4gICAgICAgIGtleT17a2V5fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RWYWx1ZShvcHRpb24pfVxuICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gZm9jdXNPcHRpb24ob3B0aW9uKX1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgPlxuICAgICAgICB7b3B0aW9uLm5hbWV9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9BcHBsaWNhdGlvbi5qcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=