/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _header = __webpack_require__(/*! ./components/header */ \"./src/client/components/header.js\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nvar _authVerify = __webpack_require__(/*! ./actions/authVerify */ \"./src/client/actions/authVerify.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n    var route = _ref.route;\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_header2.default, null),\n        (0, _reactRouterConfig.renderRoutes)(route.routes)\n    );\n};\n\nexports.default = {\n    component: App,\n    loadData: function loadData(_ref2) {\n        var dispatch = _ref2.dispatch;\n        return dispatch((0, _authVerify.authVerify)());\n    }\n};\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/actions/authVerify.js":
/*!******************************************!*\
  !*** ./src/client/actions/authVerify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar AUTH_VERIFY = exports.AUTH_VERIFY = \"auth_verify\";\n\nvar authVerify = exports.authVerify = function authVerify() {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            var res;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return api.get(\"/auth/user\");\n\n                        case 2:\n                            res = _context.sent;\n\n                            dispatch({\n                                type: AUTH_VERIFY,\n                                payload: res\n                            });\n\n                        case 4:\n                        case \"end\":\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/authVerify.js?");

/***/ }),

/***/ "./src/client/actions/fetchChannelList.js":
/*!************************************************!*\
  !*** ./src/client/actions/fetchChannelList.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar FETCH_CHANNEL_LIST = exports.FETCH_CHANNEL_LIST = 'fetchChannelList';\n\nvar fetchChannelList = exports.fetchChannelList = function fetchChannelList() {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            var res;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return api.get('/channels/list');\n\n                        case 2:\n                            res = _context.sent;\n\n                            dispatch({\n                                type: FETCH_CHANNEL_LIST,\n                                payload: res\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/fetchChannelList.js?");

/***/ }),

/***/ "./src/client/actions/newChannel.js":
/*!******************************************!*\
  !*** ./src/client/actions/newChannel.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.newChannel = exports.NEW_CHANNEL = undefined;\n\nvar _util = __webpack_require__(/*! util */ \"util\");\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar NEW_CHANNEL = exports.NEW_CHANNEL = 'newChannel';\nvar newChannel = exports.newChannel = function newChannel(_ref, callback) {\n    var name = _ref.name,\n        description = _ref.description;\n    return function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            api.post('/channels/new', { name: name, description: description }).then(function () {\n                                return callback();\n                            });\n\n                        case 1:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref2.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/newChannel.js?");

/***/ }),

/***/ "./src/client/components/formInput.js":
/*!********************************************!*\
  !*** ./src/client/components/formInput.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n    var input = _ref.input,\n        label = _ref.label,\n        _ref$meta = _ref.meta,\n        error = _ref$meta.error,\n        touched = _ref$meta.touched;\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'label',\n            null,\n            label\n        ),\n        _react2.default.createElement('input', input),\n        _react2.default.createElement(\n            'div',\n            null,\n            touched && error\n        )\n    );\n};\n\n//# sourceURL=webpack:///./src/client/components/formInput.js?");

/***/ }),

/***/ "./src/client/components/formText.js":
/*!*******************************************!*\
  !*** ./src/client/components/formText.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n    var input = _ref.input,\n        label = _ref.label,\n        _ref$meta = _ref.meta,\n        touched = _ref$meta.touched,\n        error = _ref$meta.error;\n\n    return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n            \"label\",\n            null,\n            label\n        ),\n        _react2.default.createElement(\"textarea\", _extends({ rows: \"5\", cols: \"50\" }, input)),\n        touched && error\n    );\n};\n\n//# sourceURL=webpack:///./src/client/components/formText.js?");

/***/ }),

/***/ "./src/client/components/header.js":
/*!*****************************************!*\
  !*** ./src/client/components/header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n    _inherits(Header, _Component);\n\n    function Header(props) {\n        _classCallCheck(this, Header);\n\n        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));\n    }\n\n    _createClass(Header, [{\n        key: 'renderHeaderLogo',\n        value: function renderHeaderLogo() {\n            var headerLogo = this.props.auth ? _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/channel' },\n                    'Grephy'\n                )\n            ) : _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/' },\n                    'Grephy'\n                )\n            );\n            return headerLogo;\n        }\n    }, {\n        key: 'renderHeaderButtons',\n        value: function renderHeaderButtons() {\n            var authButton = this.props.auth ? _react2.default.createElement(\n                'a',\n                { href: '/auth/logout' },\n                'logout'\n            ) : _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'a',\n                    { href: '/auth/google' },\n                    'loginG'\n                ),\n                _react2.default.createElement(\n                    'a',\n                    { href: '/auth/facebook' },\n                    'loginF'\n                ),\n                _react2.default.createElement(\n                    'a',\n                    { href: '/auth/github' },\n                    'loginGit'\n                )\n            );\n            return authButton;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                this.renderHeaderLogo(),\n                this.renderHeaderButtons()\n            );\n        }\n    }]);\n\n    return Header;\n}(_react.Component);\n\n;\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n    var auth = _ref.auth;\n\n    return { auth: auth };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);\n\n//# sourceURL=webpack:///./src/client/components/header.js?");

/***/ }),

/***/ "./src/client/pages/ChannelPage.js":
/*!*****************************************!*\
  !*** ./src/client/pages/ChannelPage.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _fetchChannelList = __webpack_require__(/*! ./../actions/fetchChannelList */ \"./src/client/actions/fetchChannelList.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar channelSection = function (_Component) {\n    _inherits(channelSection, _Component);\n\n    function channelSection() {\n        _classCallCheck(this, channelSection);\n\n        return _possibleConstructorReturn(this, (channelSection.__proto__ || Object.getPrototypeOf(channelSection)).apply(this, arguments));\n    }\n\n    _createClass(channelSection, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.props.fetchChannelList();\n        }\n    }, {\n        key: 'renderChannelList',\n        value: function renderChannelList(e) {\n            return _react2.default.createElement(\n                'li',\n                { key: e.name },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        e.name\n                    ),\n                    _react2.default.createElement(\n                        'p',\n                        null,\n                        e.description\n                    )\n                )\n            );\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            if (!this.props.channels) {\n                return _react2.default.createElement(\n                    'div',\n                    null,\n                    'Loading'\n                );\n            }\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'channelSection'\n                ),\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'ul',\n                        null,\n                        this.props.channels.map(function (e) {\n                            return _this2.renderChannelList(e);\n                        })\n                    )\n                ),\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/channel/new' },\n                    'Create A Channel'\n                )\n            );\n        }\n    }]);\n\n    return channelSection;\n}(_react.Component);\n\n;\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n    var channels = _ref.channels;\n\n    return { channels: channels };\n};\n\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps, { fetchChannelList: _fetchChannelList.fetchChannelList })(channelSection),\n    loadData: function loadData(_ref2) {\n        var dispatch = _ref2.dispatch;\n        return dispatch((0, _fetchChannelList.fetchChannelList)());\n    }\n};\n\n//# sourceURL=webpack:///./src/client/pages/ChannelPage.js?");

/***/ }),

/***/ "./src/client/pages/FieldPage.js":
/*!***************************************!*\
  !*** ./src/client/pages/FieldPage.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar fieldSection = function fieldSection() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'h1',\n            null,\n            'fieldSection'\n        )\n    );\n};\n\nexports.default = { component: fieldSection };\n\n//# sourceURL=webpack:///./src/client/pages/FieldPage.js?");

/***/ }),

/***/ "./src/client/pages/HomePage.js":
/*!**************************************!*\
  !*** ./src/client/pages/HomePage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'h1',\n            null,\n            'Home'\n        )\n    );\n};\n\nexports.default = { component: Home };\n\n//# sourceURL=webpack:///./src/client/pages/HomePage.js?");

/***/ }),

/***/ "./src/client/pages/newChannelPage.js":
/*!********************************************!*\
  !*** ./src/client/pages/newChannelPage.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _formInput = __webpack_require__(/*! ./../components/formInput */ \"./src/client/components/formInput.js\");\n\nvar _formInput2 = _interopRequireDefault(_formInput);\n\nvar _formText = __webpack_require__(/*! ./../components/formText */ \"./src/client/components/formText.js\");\n\nvar _formText2 = _interopRequireDefault(_formText);\n\nvar _newChannel = __webpack_require__(/*! ./../actions/newChannel */ \"./src/client/actions/newChannel.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NewChannelPage = function (_Component) {\n    _inherits(NewChannelPage, _Component);\n\n    function NewChannelPage() {\n        _classCallCheck(this, NewChannelPage);\n\n        return _possibleConstructorReturn(this, (NewChannelPage.__proto__ || Object.getPrototypeOf(NewChannelPage)).apply(this, arguments));\n    }\n\n    _createClass(NewChannelPage, [{\n        key: 'renderFields',\n        value: function renderFields() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_reduxForm.Field, { label: 'Channel Name', type: 'text', name: 'name', component: _formInput2.default }),\n                _react2.default.createElement(_reduxForm.Field, { label: 'Description', type: 'text', name: 'description', component: _formText2.default })\n            );\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                'NewChannelPage',\n                _react2.default.createElement(\n                    'form',\n                    { onSubmit: this.props.handleSubmit(function (values) {\n                            _this2.props.newChannel(values, function () {\n                                _this2.props.history.push('/channel');\n                            });\n                        }) },\n                    this.renderFields(),\n                    _react2.default.createElement(\n                        'button',\n                        { type: 'submit' },\n                        'Submit'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return NewChannelPage;\n}(_react.Component);\n\nvar validate = function validate(values) {\n    var errors = {};\n    if (!values.name) {\n        errors.name = \"Provide a name for the channel\";\n    }\n    if (!values.description) {\n        errors.description = \"Provide a description for the channel\";\n    }\n    return errors;\n};\n\nexports.default = {\n    component: (0, _reduxForm.reduxForm)({\n        validate: validate,\n        form: 'newChannelForm'\n    })((0, _reactRedux.connect)(null, { newChannel: _newChannel.newChannel })(NewChannelPage))\n};\n\n//# sourceURL=webpack:///./src/client/pages/newChannelPage.js?");

/***/ }),

/***/ "./src/client/reducers/authReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/authReducer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _authVerify = __webpack_require__(/*! ./../actions/authVerify */ \"./src/client/actions/authVerify.js\");\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _authVerify.AUTH_VERIFY:\n            return action.payload.data || false;\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/client/reducers/authReducer.js?");

/***/ }),

/***/ "./src/client/reducers/channelList.js":
/*!********************************************!*\
  !*** ./src/client/reducers/channelList.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _fetchChannelList = __webpack_require__(/*! ./../actions/fetchChannelList */ \"./src/client/actions/fetchChannelList.js\");\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _fetchChannelList.FETCH_CHANNEL_LIST:\n            return action.payload.data;\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/client/reducers/channelList.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _authReducer = __webpack_require__(/*! ./authReducer */ \"./src/client/reducers/authReducer.js\");\n\nvar _authReducer2 = _interopRequireDefault(_authReducer);\n\nvar _channelList = __webpack_require__(/*! ./channelList */ \"./src/client/reducers/channelList.js\");\n\nvar _channelList2 = _interopRequireDefault(_channelList);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n    auth: _authReducer2.default,\n    channels: _channelList2.default,\n    form: _reduxForm.reducer\n});\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/routes.js":
/*!******************************!*\
  !*** ./src/client/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _HomePage = __webpack_require__(/*! ./pages/HomePage */ \"./src/client/pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _ChannelPage = __webpack_require__(/*! ./pages/ChannelPage */ \"./src/client/pages/ChannelPage.js\");\n\nvar _ChannelPage2 = _interopRequireDefault(_ChannelPage);\n\nvar _FieldPage = __webpack_require__(/*! ./pages/FieldPage */ \"./src/client/pages/FieldPage.js\");\n\nvar _FieldPage2 = _interopRequireDefault(_FieldPage);\n\nvar _newChannelPage = __webpack_require__(/*! ./pages/newChannelPage */ \"./src/client/pages/newChannelPage.js\");\n\nvar _newChannelPage2 = _interopRequireDefault(_newChannelPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _App2.default, {\n    routes: [_extends({}, _HomePage2.default, {\n        path: '/',\n        exact: true\n    }), _extends({}, _ChannelPage2.default, {\n        path: '/channel',\n        exact: true\n    }), _extends({}, _newChannelPage2.default, {\n        path: '/channel/new',\n        exact: true\n    }), _extends({}, _FieldPage2.default, {\n        path: '/channel/field',\n        exact: true\n    })]\n})];\n\n//# sourceURL=webpack:///./src/client/routes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\n__webpack_require__(/*! ./server/config/config.js */ \"./src/server/config/config.js\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _createStore = __webpack_require__(/*! ./server/utils/createStore */ \"./src/server/utils/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _routes = __webpack_require__(/*! ./client/routes */ \"./src/client/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _cookieSession = __webpack_require__(/*! cookie-session */ \"cookie-session\");\n\nvar _cookieSession2 = _interopRequireDefault(_cookieSession);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _auth = __webpack_require__(/*! ./server/middleware/auth */ \"./src/server/middleware/auth.js\");\n\nvar _mongoose = __webpack_require__(/*! ./server/db/mongoose */ \"./src/server/db/mongoose.js\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\n__webpack_require__(/*! ./server/db/models/user */ \"./src/server/db/models/user.js\");\n\n__webpack_require__(/*! ./server/db/models/channel */ \"./src/server/db/models/channel.js\");\n\n__webpack_require__(/*! ./server/db/models/field */ \"./src/server/db/models/field.js\");\n\nvar _renderer = __webpack_require__(/*! ./server/utils/renderer */ \"./src/server/utils/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\n__webpack_require__(/*! ./server/services/passport_google */ \"./src/server/services/passport_google.js\");\n\n__webpack_require__(/*! ./server/services/passport_facebook */ \"./src/server/services/passport_facebook.js\");\n\n__webpack_require__(/*! ./server/services/passport_github */ \"./src/server/services/passport_github.js\");\n\nvar _google = __webpack_require__(/*! ./server/utils/authRoutes/google */ \"./src/server/utils/authRoutes/google.js\");\n\nvar _google2 = _interopRequireDefault(_google);\n\nvar _fb = __webpack_require__(/*! ./server/utils/authRoutes/fb */ \"./src/server/utils/authRoutes/fb.js\");\n\nvar _fb2 = _interopRequireDefault(_fb);\n\nvar _github = __webpack_require__(/*! ./server/utils/authRoutes/github */ \"./src/server/utils/authRoutes/github.js\");\n\nvar _github2 = _interopRequireDefault(_github);\n\nvar _utils = __webpack_require__(/*! ./server/utils/authRoutes/utils */ \"./src/server/utils/authRoutes/utils.js\");\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nvar _index = __webpack_require__(/*! ./server/api/index */ \"./src/server/api/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n//token-cookie based authentication\n\n//custom middleware for private routes\n\n//db mongoose configurations\n\n//ssh rendering template and static route\n\n\nvar app = (0, _express2.default)();\n\napp.use((0, _cookieSession2.default)({\n  maxAge: 15 * 24 * 60 * 60 * 1000,\n  keys: [process.env.COOKIE_ENCRYPT_KEY1, process.env.COOKIE_ENCRYPT_KEY2]\n}));\n\napp.use(_express2.default.static(\"public\"));\napp.use(_passport2.default.initialize());\napp.use(_passport2.default.session());\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ useNewUrlParser: true }));\n\nvar User = _mongoose2.default.model('users');\nvar Channel = _mongoose2.default.model('channels');\nvar Field = _mongoose2.default.model('fields');\n\n_passport2.default.serializeUser(function (user, done) {\n  done(null, user.id);\n});\n\n_passport2.default.deserializeUser(function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, done) {\n    var user;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return User.findById(id);\n\n          case 2:\n            user = _context.sent;\n\n            done(null, user);\n\n          case 4:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\n//google,fb,github authentication system\n\n\n//authentication routes for various oauth\n\n\n//api routes\n\n\n(0, _google2.default)(app);\n(0, _fb2.default)(app);\n(0, _github2.default)(app);\n(0, _utils2.default)(app);\n\n(0, _index2.default)(app);\n\napp.get(\"*\", _auth.authentication, function (req, res) {\n  var store = (0, _createStore2.default)(req);\n  var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref2) {\n    var route = _ref2.route;\n\n    return route.loadData ? route.loadData(store) : null;\n  });\n  Promise.all(promises).then(function () {\n    res.send((0, _renderer2.default)(req, store));\n  });\n});\n\napp.listen(process.env.PORT, function () {\n  console.log('localhost at port:' + process.env.PORT);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/server/api/index.js":
/*!*********************************!*\
  !*** ./src/server/api/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _auth = __webpack_require__(/*! ../middleware/auth */ \"./src/server/middleware/auth.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar User = _mongoose2.default.model('users');\nvar Channel = _mongoose2.default.model('channels');\nvar Field = _mongoose2.default.model('fields');\n\nexports.default = function (app) {\n    app.post('/channels/new', _auth.authentication, function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n            var _req$body, name, description, newChannel;\n\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _req$body = req.body, name = _req$body.name, description = _req$body.description;\n                            _context.next = 3;\n                            return new Channel({\n                                name: name,\n                                description: description,\n                                _user: req.user._id\n                            });\n\n                        case 3:\n                            newChannel = _context.sent;\n\n\n                            newChannel.save().then(function () {\n                                return newChannel.getChannelToken();\n                            }).then(function (token) {\n                                res.status(200).send();\n                            });\n\n                        case 5:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2) {\n            return _ref.apply(this, arguments);\n        };\n    }());\n\n    app.get('/channels/list', _auth.authentication, function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n            var channelList, filteredList;\n            return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n                            _context2.next = 2;\n                            return Channel.find({\n                                _user: req.user._id\n                            });\n\n                        case 2:\n                            channelList = _context2.sent;\n                            filteredList = channelList.map(function (_ref3) {\n                                var name = _ref3.name,\n                                    description = _ref3.description,\n                                    _id = _ref3._id;\n\n                                return {\n                                    name: name,\n                                    description: description,\n                                    _id: _id\n                                };\n                            });\n\n                            res.send(filteredList);\n\n                        case 5:\n                        case 'end':\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, undefined);\n        }));\n\n        return function (_x3, _x4) {\n            return _ref2.apply(this, arguments);\n        };\n    }());\n\n    app.get('/channels/:id', function () {\n        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n            var channel;\n            return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                while (1) {\n                    switch (_context3.prev = _context3.next) {\n                        case 0:\n                            _context3.next = 2;\n                            return Channel.findById(req.params.id);\n\n                        case 2:\n                            channel = _context3.sent;\n\n                            res.send(channel);\n\n                        case 4:\n                        case 'end':\n                            return _context3.stop();\n                    }\n                }\n            }, _callee3, undefined);\n        }));\n\n        return function (_x5, _x6) {\n            return _ref4.apply(this, arguments);\n        };\n    }());\n\n    app.post('/channels/fields/new', function () {\n        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n            var _req$body2, name, yAxisName, xAxisName, channelID, newField;\n\n            return regeneratorRuntime.wrap(function _callee4$(_context4) {\n                while (1) {\n                    switch (_context4.prev = _context4.next) {\n                        case 0:\n                            _req$body2 = req.body, name = _req$body2.name, yAxisName = _req$body2.yAxisName, xAxisName = _req$body2.xAxisName, channelID = _req$body2.channelID;\n                            newField = new Field({\n                                _channel: channelID,\n                                name: name,\n                                yAxis: {\n                                    name: yAxisName\n                                }\n                            });\n\n                            newField.xAxis.push({\n                                name: xAxisName\n                            });\n                            newField.save().then(function () {\n                                res.send(\"ok\");\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context4.stop();\n                    }\n                }\n            }, _callee4, undefined);\n        }));\n\n        return function (_x7, _x8) {\n            return _ref5.apply(this, arguments);\n        };\n    }());\n\n    app.get('/channels/fields/list', function () {\n        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n            var fieldList;\n            return regeneratorRuntime.wrap(function _callee5$(_context5) {\n                while (1) {\n                    switch (_context5.prev = _context5.next) {\n                        case 0:\n                            _context5.next = 2;\n                            return Field.find({\n                                _channel: \"5b9ff6768e3bab344c33ef70\"\n                            });\n\n                        case 2:\n                            fieldList = _context5.sent;\n\n                            res.send(fieldList);\n\n                        case 4:\n                        case 'end':\n                            return _context5.stop();\n                    }\n                }\n            }, _callee5, undefined);\n        }));\n\n        return function (_x9, _x10) {\n            return _ref6.apply(this, arguments);\n        };\n    }());\n\n    app.put('/channels/fields/:id/addX', function () {\n        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {\n            var xName, field;\n            return regeneratorRuntime.wrap(function _callee6$(_context6) {\n                while (1) {\n                    switch (_context6.prev = _context6.next) {\n                        case 0:\n                            xName = req.body.xName;\n                            _context6.next = 3;\n                            return Field.findOneAndUpdate({\n                                _channel: \"5b9ff6768e3bab344c33ef70\",\n                                _id: req.params.id\n                            }, {\n                                $push: {\n                                    xAxis: [{\n                                        name: xName\n                                    }]\n                                }\n                            });\n\n                        case 3:\n                            field = _context6.sent;\n\n                            res.send('ok');\n\n                        case 5:\n                        case 'end':\n                            return _context6.stop();\n                    }\n                }\n            }, _callee6, undefined);\n        }));\n\n        return function (_x11, _x12) {\n            return _ref7.apply(this, arguments);\n        };\n    }());\n\n    app.delete('/channels/fields/:id/delX', function () {\n        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {\n            var xName, field;\n            return regeneratorRuntime.wrap(function _callee7$(_context7) {\n                while (1) {\n                    switch (_context7.prev = _context7.next) {\n                        case 0:\n                            xName = req.body.xName;\n                            _context7.next = 3;\n                            return Field.findOneAndUpdate({\n                                _channel: \"5b9ff6768e3bab344c33ef70\",\n                                _id: req.params.id\n                            }, {\n                                $pull: {\n                                    xAxis: {\n                                        name: xName\n                                    }\n                                }\n                            });\n\n                        case 3:\n                            field = _context7.sent;\n\n                            res.send('ok');\n\n                        case 5:\n                        case 'end':\n                            return _context7.stop();\n                    }\n                }\n            }, _callee7, undefined);\n        }));\n\n        return function (_x13, _x14) {\n            return _ref8.apply(this, arguments);\n        };\n    }());\n\n    app.delete('/channels/fields/del/:id', function () {\n        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {\n            var field;\n            return regeneratorRuntime.wrap(function _callee8$(_context8) {\n                while (1) {\n                    switch (_context8.prev = _context8.next) {\n                        case 0:\n                            _context8.next = 2;\n                            return Field.findOneAndRemove({\n                                _id: req.params.id\n                            });\n\n                        case 2:\n                            field = _context8.sent;\n\n                            res.send(\"ok\");\n\n                        case 4:\n                        case 'end':\n                            return _context8.stop();\n                    }\n                }\n            }, _callee8, undefined);\n        }));\n\n        return function (_x15, _x16) {\n            return _ref9.apply(this, arguments);\n        };\n    }());\n\n    app.delete('/channels/del/:id', function () {\n        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {\n            var field;\n            return regeneratorRuntime.wrap(function _callee9$(_context9) {\n                while (1) {\n                    switch (_context9.prev = _context9.next) {\n                        case 0:\n                            _context9.next = 2;\n                            return Channel.findOneAndRemove({\n                                _id: req.params.id\n                            });\n\n                        case 2:\n                            field = _context9.sent;\n\n                            res.send('ok');\n\n                        case 4:\n                        case 'end':\n                            return _context9.stop();\n                    }\n                }\n            }, _callee9, undefined);\n        }));\n\n        return function (_x17, _x18) {\n            return _ref10.apply(this, arguments);\n        };\n    }());\n};\n\n//# sourceURL=webpack:///./src/server/api/index.js?");

/***/ }),

/***/ "./src/server/config/config.js":
/*!*************************************!*\
  !*** ./src/server/config/config.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar env = \"development\" || \"development\";\nif (env == \"development\" || env == \"test\") {\n    var config = __webpack_require__(/*! ./config.json */ \"./src/server/config/config.json\");\n    var envConfig = config[env];\n    Object.keys(envConfig).forEach(function (key) {\n        process.env[key] = envConfig[key];\n    });\n};\n\n//# sourceURL=webpack:///./src/server/config/config.js?");

/***/ }),

/***/ "./src/server/config/config.json":
/*!***************************************!*\
  !*** ./src/server/config/config.json ***!
  \***************************************/
/*! exports provided: test, development, default */
/***/ (function(module) {

eval("module.exports = {\"test\":{\"PORT\":3000,\"GOOGLE_CLIENT_ID\":\"1096404666312-gqijna2qt5er1ismmgbs31s4tnhc2jjs.apps.googleusercontent.com\",\"GOOGLE_CLIENT_SEC\":\"4bf5S7mEgm90lWLH9sX_qYI_\",\"FB_CLIENT_ID\":\"2283628345192091\",\"FB_CLIENT_SEC\":\"a1af74c06f7ba3be00ad6c43391bf8ab\",\"GITHUB_CLIENT_ID\":\"efa76974e60bd6bd496f\",\"GITHUB_CLIENT_SEC\":\"522b017c4f71940a4d95b9a2b7759200af474132\",\"MONGODB_URI\":\"mongodb://localhost:27017/GrephyTest\"},\"development\":{\"PORT\":3000,\"GOOGLE_CLIENT_ID\":\"1096404666312-gqijna2qt5er1ismmgbs31s4tnhc2jjs.apps.googleusercontent.com\",\"GOOGLE_CLIENT_SEC\":\"4bf5S7mEgm90lWLH9sX_qYI_\",\"FB_CLIENT_ID\":\"2283628345192091\",\"FB_CLIENT_SEC\":\"a1af74c06f7ba3be00ad6c43391bf8ab\",\"GITHUB_CLIENT_ID\":\"efa76974e60bd6bd496f\",\"GITHUB_CLIENT_SEC\":\"522b017c4f71940a4d95b9a2b7759200af474132\",\"NODE_TLS_REJECT_UNAUTHORIZED\":\"0\",\"TWITTER_CLIENT_ID\":\"kADLvsYdRvZM1qdsMuBfimAtY\",\"TWITTER_CLIENT_SEC\":\"SgyuxuWqdBrZuTtAiSRsd03sMVxfTUX1B1c62YHlPUWmQJd8SB\",\"MONGODB_URI\":\"mongodb://localhost:27017/Grephy\",\"COOKIE_ENCRYPT_KEY1\":\"GrEPhYiSaNiOTPltfo+_)rm127860xcvqweerty\",\"COOKIE_ENCRYPT_KEY2\":\"GrEPhYDASDAiSFoRsTUDENTS127ADAS423426242rty\",\"JWT_SECRET\":\"GR@phY1.09sTD656iOTc98\"}};\n\n//# sourceURL=webpack:///./src/server/config/config.json?");

/***/ }),

/***/ "./src/server/db/models/channel.js":
/*!*****************************************!*\
  !*** ./src/server/db/models/channel.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar channelSchema = new _mongoose2.default.Schema({\n    name: {\n        type: String,\n        required: true,\n        trim: true,\n        minlength: 1\n    },\n    description: {\n        type: String,\n        required: true,\n        trim: true,\n        minlength: 1\n    },\n    _user: {\n        type: _mongoose2.default.Schema.Types.ObjectId,\n        ref: 'User'\n    },\n    token: {\n        type: String\n    }\n});\n\nchannelSchema.methods.getChannelToken = function () {\n    var channel = this;\n    var token = _jsonwebtoken2.default.sign({\n        id: channel._id.toHexString()\n    }, process.env.JWT_SECRET).toString();\n    channel.token = token;\n    return channel.save().then(function () {\n        return token;\n    });\n};\n\n_mongoose2.default.model('channels', channelSchema);\n\n//# sourceURL=webpack:///./src/server/db/models/channel.js?");

/***/ }),

/***/ "./src/server/db/models/field.js":
/*!***************************************!*\
  !*** ./src/server/db/models/field.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar xAxisSchema = _mongoose2.default.Schema({\n    name: {\n        type: String,\n        required: true,\n        trim: true,\n        minlength: 1\n    },\n    value: [{\n        type: String,\n        trim: true\n    }]\n});\n\nvar fieldSchema = _mongoose2.default.Schema({\n    _channel: {\n        type: _mongoose2.default.Schema.Types.ObjectId,\n        ref: 'Channel'\n    },\n    name: {\n        type: String,\n        required: true,\n        trim: true,\n        minlength: 1\n    },\n    yAxis: {\n        name: {\n            type: String,\n            required: true,\n            trim: true,\n            minlength: 1,\n            default: \"Time\"\n        },\n        value: [{\n            type: String,\n            trim: true\n        }]\n    },\n    xAxis: [xAxisSchema]\n});\n\n_mongoose2.default.model('fields', fieldSchema);\n\n//# sourceURL=webpack:///./src/server/db/models/field.js?");

/***/ }),

/***/ "./src/server/db/models/user.js":
/*!**************************************!*\
  !*** ./src/server/db/models/user.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar UsersSchema = new _mongoose2.default.Schema({\n    uID: {\n        type: String,\n        required: true,\n        trim: true,\n        minlength: 1\n    },\n    provider: {\n        type: String,\n        required: true,\n        trim: true\n    }\n});\n\n_mongoose2.default.model('users', UsersSchema);\n\n//# sourceURL=webpack:///./src/server/db/models/user.js?");

/***/ }),

/***/ "./src/server/db/mongoose.js":
/*!***********************************!*\
  !*** ./src/server/db/mongoose.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_mongoose2.default.Promise = global.Promise;\n_mongoose2.default.connect(process.env.MONGODB_URI);\n\nexports.default = _mongoose2.default;\n\n//# sourceURL=webpack:///./src/server/db/mongoose.js?");

/***/ }),

/***/ "./src/server/middleware/auth.js":
/*!***************************************!*\
  !*** ./src/server/middleware/auth.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar authentication = exports.authentication = function authentication(req, res, next) {\n    if (!req.user && req.path != '/') {\n        return res.redirect('/');\n    }\n    return next();\n};\n\n//# sourceURL=webpack:///./src/server/middleware/auth.js?");

/***/ }),

/***/ "./src/server/services/passport_facebook.js":
/*!**************************************************!*\
  !*** ./src/server/services/passport_facebook.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _db_access = __webpack_require__(/*! ./../utils/db_access */ \"./src/server/utils/db_access.js\");\n\nvar _db_access2 = _interopRequireDefault(_db_access);\n\nvar _passportFacebook = __webpack_require__(/*! passport-facebook */ \"passport-facebook\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_passport2.default.use(new _passportFacebook.Strategy({\n    clientID: process.env.FB_CLIENT_ID,\n    clientSecret: process.env.FB_CLIENT_SEC,\n    callbackURL: '/auth/facebook/callback'\n}, function (accessToken, refreshToken, profile, done) {\n    (0, _db_access2.default)(profile, done, \"facebook\");\n})); //authentication handled with passport for fb\n\n//# sourceURL=webpack:///./src/server/services/passport_facebook.js?");

/***/ }),

/***/ "./src/server/services/passport_github.js":
/*!************************************************!*\
  !*** ./src/server/services/passport_github.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _db_access = __webpack_require__(/*! ./../utils/db_access */ \"./src/server/utils/db_access.js\");\n\nvar _db_access2 = _interopRequireDefault(_db_access);\n\nvar _passportGithub = __webpack_require__(/*! passport-github2 */ \"passport-github2\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_passport2.default.use(new _passportGithub.Strategy({\n    clientID: process.env.GITHUB_CLIENT_ID,\n    clientSecret: process.env.GITHUB_CLIENT_SEC,\n    callbackURL: '/auth/github/callback'\n}, function (accessToken, refreshToken, profile, done) {\n    (0, _db_access2.default)(profile, done, 'github');\n})); //github v3 authentication\n\n//# sourceURL=webpack:///./src/server/services/passport_github.js?");

/***/ }),

/***/ "./src/server/services/passport_google.js":
/*!************************************************!*\
  !*** ./src/server/services/passport_google.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _db_access = __webpack_require__(/*! ./../utils/db_access */ \"./src/server/utils/db_access.js\");\n\nvar _db_access2 = _interopRequireDefault(_db_access);\n\nvar _passportGoogleOauth = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_passport2.default.use(new _passportGoogleOauth.Strategy({\n    clientID: process.env.GOOGLE_CLIENT_ID,\n    clientSecret: process.env.GOOGLE_CLIENT_SEC,\n    callbackURL: '/auth/google/callback'\n}, function (accessToken, refreshToken, profile, done) {\n    (0, _db_access2.default)(profile, done, \"google\");\n})); //authentication handled with passport for google\n\n//# sourceURL=webpack:///./src/server/services/passport_google.js?");

/***/ }),

/***/ "./src/server/utils/authRoutes/fb.js":
/*!*******************************************!*\
  !*** ./src/server/utils/authRoutes/fb.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (app) {\n    app.get('/auth/facebook', _passport2.default.authenticate('facebook'));\n\n    app.get('/auth/facebook/callback', _passport2.default.authenticate('facebook', { failureRedirect: '/' }), function (req, res) {\n        res.redirect('/channel');\n    });\n};\n\n//# sourceURL=webpack:///./src/server/utils/authRoutes/fb.js?");

/***/ }),

/***/ "./src/server/utils/authRoutes/github.js":
/*!***********************************************!*\
  !*** ./src/server/utils/authRoutes/github.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (app) {\n    app.get('/auth/github', _passport2.default.authenticate('github'));\n\n    app.get('/auth/github/callback', _passport2.default.authenticate('github', { failureRedirect: '/' }), function (req, res) {\n        res.redirect('/channel');\n    });\n};\n\n//# sourceURL=webpack:///./src/server/utils/authRoutes/github.js?");

/***/ }),

/***/ "./src/server/utils/authRoutes/google.js":
/*!***********************************************!*\
  !*** ./src/server/utils/authRoutes/google.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (app) {\n\n    app.get('/auth/google', _passport2.default.authenticate('google', {\n        scope: ['profile', 'email']\n    }));\n\n    app.get('/auth/google/callback', _passport2.default.authenticate('google', { failureRedirect: '/' }), function (req, res) {\n        res.redirect('/channel');\n    });\n};\n\n//# sourceURL=webpack:///./src/server/utils/authRoutes/google.js?");

/***/ }),

/***/ "./src/server/utils/authRoutes/utils.js":
/*!**********************************************!*\
  !*** ./src/server/utils/authRoutes/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (app) {\n    app.get('/auth/user', function (req, res) {\n        res.send(req.user);\n    });\n\n    app.get('/auth/logout', function (req, res) {\n        req.logout();\n        res.redirect('/');\n    });\n};\n\n//# sourceURL=webpack:///./src/server/utils/authRoutes/utils.js?");

/***/ }),

/***/ "./src/server/utils/createStore.js":
/*!*****************************************!*\
  !*** ./src/server/utils/createStore.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ./../../client/reducers */ \"./src/client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n    var axiosInstance = _axios2.default.create({\n        baseURL: 'http://localhost:3000',\n        headers: { cookie: req.get('cookie') || '' }\n    });\n    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));\n    return store;\n};\n\n//# sourceURL=webpack:///./src/server/utils/createStore.js?");

/***/ }),

/***/ "./src/server/utils/db_access.js":
/*!***************************************!*\
  !*** ./src/server/utils/db_access.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar User = _mongoose2.default.model('users');\n\nexports.default = function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(profile, done, oauthProvider) {\n        var existingUser, user;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        _context.next = 2;\n                        return User.findOne({\n                            uID: profile.id,\n                            provider: oauthProvider\n                        });\n\n                    case 2:\n                        existingUser = _context.sent;\n\n                        if (!existingUser) {\n                            _context.next = 5;\n                            break;\n                        }\n\n                        return _context.abrupt('return', done(null, existingUser));\n\n                    case 5:\n                        _context.next = 7;\n                        return new User({\n                            uID: profile.id,\n                            provider: oauthProvider\n                        }).save();\n\n                    case 7:\n                        user = _context.sent;\n\n                        done(null, user);\n\n                    case 9:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, undefined);\n    }));\n\n    return function (_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n//# sourceURL=webpack:///./src/server/utils/db_access.js?");

/***/ }),

/***/ "./src/server/utils/renderer.js":
/*!**************************************!*\
  !*** ./src/server/utils/renderer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _routes = __webpack_require__(/*! ./../../client/routes */ \"./src/client/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store) {\n    var content = (0, _server.renderToString)(_react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.path, context: {} },\n            _react2.default.createElement(\n                'div',\n                null,\n                (0, _reactRouterConfig.renderRoutes)(_routes2.default)\n            )\n        )\n    ));\n    return '<html>\\n    <head></head>\\n    <body>\\n        <div id=\\'root\\'>' + content + '</div>\\n        <script>\\n        window.INITIAL_STATE=' + (0, _serializeJavascript2.default)(store.getState()) + ';\\n        </script>\\n        <script src=\"/bundle.js\"></script>\\n    </body>\\n    </html>';\n};\n\n//# sourceURL=webpack:///./src/server/utils/renderer.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-session":
/*!*********************************!*\
  !*** external "cookie-session" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-session\");\n\n//# sourceURL=webpack:///external_%22cookie-session%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-facebook":
/*!************************************!*\
  !*** external "passport-facebook" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-facebook\");\n\n//# sourceURL=webpack:///external_%22passport-facebook%22?");

/***/ }),

/***/ "passport-github2":
/*!***********************************!*\
  !*** external "passport-github2" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-github2\");\n\n//# sourceURL=webpack:///external_%22passport-github2%22?");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-google-oauth20\");\n\n//# sourceURL=webpack:///external_%22passport-google-oauth20%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-form\");\n\n//# sourceURL=webpack:///external_%22redux-form%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ })

/******/ });