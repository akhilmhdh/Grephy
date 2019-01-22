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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _header = __webpack_require__(/*! ./components/header */ \"./src/client/components/header.js\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nvar _authVerify = __webpack_require__(/*! ./actions/authVerify */ \"./src/client/actions/authVerify.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n    }\n\n    _createClass(App, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_header2.default, null),\n                (0, _reactRouterConfig.renderRoutes)(this.props.route.routes)\n            );\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\n;\n\nexports.default = {\n    component: App,\n    loadData: function loadData(_ref) {\n        var dispatch = _ref.dispatch;\n        return dispatch((0, _authVerify.authVerify)());\n    }\n};\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/actions/addGraph.js":
/*!****************************************!*\
  !*** ./src/client/actions/addGraph.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar NEW_GRAPH = exports.NEW_GRAPH = 'newGraph';\nvar newGraph = exports.newGraph = function newGraph(value, callback) {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            //api.post('/channels/:id/fields/new',{name,description}).then(()=>callback());\n                            console.log(value);\n\n                        case 1:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/addGraph.js?");

/***/ }),

/***/ "./src/client/actions/addNewDataField.js":
/*!***********************************************!*\
  !*** ./src/client/actions/addNewDataField.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar NEW_DATA_FIELD = exports.NEW_DATA_FIELD = 'newDataField';\n\nvar newDataField = exports.newDataField = function newDataField(_ref, token, name, callback) {\n    var newField = _ref.newField;\n    return function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            api.put('/channels/' + token + '/fields/' + name + '/addX', { dataName: newField }).then(function () {\n                                return callback();\n                            });\n\n                        case 1:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref2.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/addNewDataField.js?");

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

/***/ "./src/client/actions/deleteField.js":
/*!*******************************************!*\
  !*** ./src/client/actions/deleteField.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar REMOVE_FIELD = exports.REMOVE_FIELD = 'deleteField';\n\nvar removeField = exports.removeField = function removeField(token, name, fieldName, callback) {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            api.post('/channels/' + token + '/fields/' + name + '/delX', { dataName: fieldName }).then(function () {\n                                return callback();\n                            });\n\n                        case 1:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/deleteField.js?");

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

/***/ "./src/client/actions/fetchFieldList.js":
/*!**********************************************!*\
  !*** ./src/client/actions/fetchFieldList.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar FETCH_FIELD_LIST = exports.FETCH_FIELD_LIST = \"fetchFieldList\";\n\nvar fetchFieldList = exports.fetchFieldList = function fetchFieldList(id) {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            var res;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return api.get(\"/channels/fields/list/\" + id);\n\n                        case 2:\n                            res = _context.sent;\n\n                            dispatch({\n                                type: FETCH_FIELD_LIST,\n                                payload: res\n                            });\n\n                        case 4:\n                        case \"end\":\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/fetchFieldList.js?");

/***/ }),

/***/ "./src/client/actions/limitUpdate.js":
/*!*******************************************!*\
  !*** ./src/client/actions/limitUpdate.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar LIMIT_UPDATE = exports.LIMIT_UPDATE = \"limitUpdate\";\n\nvar limitUpdate = exports.limitUpdate = function limitUpdate(value, token, name, callback) {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            var res;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return api.post(\"/channels/\" + token + \"/fields/\" + name + \"/email\", value).then(function () {\n                                return callback();\n                            });\n\n                        case 2:\n                            res = _context.sent;\n\n                        case 3:\n                        case \"end\":\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/limitUpdate.js?");

/***/ }),

/***/ "./src/client/actions/newChannel.js":
/*!******************************************!*\
  !*** ./src/client/actions/newChannel.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar NEW_CHANNEL = exports.NEW_CHANNEL = 'newChannel';\nvar newChannel = exports.newChannel = function newChannel(_ref, callback) {\n    var name = _ref.name,\n        description = _ref.description;\n    return function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            api.post('/channels/new', { name: name, description: description }).then(function () {\n                                return callback();\n                            });\n\n                        case 1:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref2.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/newChannel.js?");

/***/ }),

/***/ "./src/client/actions/saveTemplates.js":
/*!*********************************************!*\
  !*** ./src/client/actions/saveTemplates.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar SAVE_TEMPLATES = exports.SAVE_TEMPLATES = 'save_templates';\nvar saveTemplates = exports.saveTemplates = function saveTemplates(name, token, template, callback) {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            api.post('/channels/' + token + '/template/' + name, { template: template }).then(function () {\n                                return callback();\n                            });\n\n                        case 1:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/saveTemplates.js?");

/***/ }),

/***/ "./src/client/actions/socket.js":
/*!**************************************!*\
  !*** ./src/client/actions/socket.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//channel joins the room for RTC \nvar subscribeFieldData = exports.subscribeFieldData = function subscribeFieldData(token, callback) {\n  return {\n    emit: true,\n    event: 'join',\n    handle: token,\n    err: function err(_err) {\n      callback(_err);\n    }\n  };\n};\n\n//GRAPH-RTC\nvar updateField = exports.updateField = function updateField() {\n  return {\n    event: 'updateFieldValue',\n    handle: 'fieldUpdate'\n  };\n};\n\n//MAP-RTC\nvar updateMaps = exports.updateMaps = function updateMaps() {\n  return {\n    event: 'updateMapValue',\n    handle: 'mapUpdate'\n  };\n};\n\n//VIDEO STREAM RTC\nvar updateStream = exports.updateStream = function updateStream() {\n  return {\n    event: 'streamVideo',\n    handle: 'videoUpdate'\n  };\n};\n\n//# sourceURL=webpack:///./src/client/actions/socket.js?");

/***/ }),

/***/ "./src/client/components/emailProvider.js":
/*!************************************************!*\
  !*** ./src/client/components/emailProvider.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _formInput = __webpack_require__(/*! ./formInput */ \"./src/client/components/formInput.js\");\n\nvar _formInput2 = _interopRequireDefault(_formInput);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _limitUpdate = __webpack_require__(/*! ./../actions/limitUpdate */ \"./src/client/actions/limitUpdate.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _fetchFieldList = __webpack_require__(/*! ./../actions/fetchFieldList */ \"./src/client/actions/fetchFieldList.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar EmailSettings = function (_Component) {\n    _inherits(EmailSettings, _Component);\n\n    function EmailSettings(props) {\n        _classCallCheck(this, EmailSettings);\n\n        return _possibleConstructorReturn(this, (EmailSettings.__proto__ || Object.getPrototypeOf(EmailSettings)).call(this, props));\n    }\n\n    _createClass(EmailSettings, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'row' },\n                _react2.default.createElement(\n                    'form',\n                    { onSubmit: this.props.handleSubmit(function (value) {\n                            return _this2.props.limitUpdate(value, _this2.props.token, _this2.props.name, function () {\n                                _this2.props.update();\n                            });\n                        }) },\n                    _react2.default.createElement(_reduxForm.Field, { label: 'upperLimit', type: 'text', name: 'upper', component: _formInput2.default }),\n                    _react2.default.createElement(_reduxForm.Field, { label: 'lowerLimit', type: 'text', name: 'lower', component: _formInput2.default }),\n                    _react2.default.createElement(_reduxForm.Field, { label: 'Email Acc', type: 'text', name: 'email', component: _formInput2.default }),\n                    _react2.default.createElement(\n                        'button',\n                        { className: 'btn blue pulse' },\n                        'Set'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return EmailSettings;\n}(_react.Component);\n\nexports.default = (0, _reduxForm.reduxForm)({\n    form: 'updateEmail'\n})((0, _reactRedux.connect)(null, { limitUpdate: _limitUpdate.limitUpdate, fetchFieldList: _fetchFieldList.fetchFieldList })(EmailSettings));\n\n//# sourceURL=webpack:///./src/client/components/emailProvider.js?");

/***/ }),

/***/ "./src/client/components/fieldDetails.js":
/*!***********************************************!*\
  !*** ./src/client/components/fieldDetails.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _fetchFieldList = __webpack_require__(/*! ./../actions/fetchFieldList */ \"./src/client/actions/fetchFieldList.js\");\n\nvar _deleteField = __webpack_require__(/*! ./../actions/deleteField */ \"./src/client/actions/deleteField.js\");\n\nvar _addNewDataField = __webpack_require__(/*! ./../actions/addNewDataField */ \"./src/client/actions/addNewDataField.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _formInput = __webpack_require__(/*! ./../components/formInput */ \"./src/client/components/formInput.js\");\n\nvar _formInput2 = _interopRequireDefault(_formInput);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar FieldDetails = function (_Component) {\n    _inherits(FieldDetails, _Component);\n\n    function FieldDetails() {\n        _classCallCheck(this, FieldDetails);\n\n        return _possibleConstructorReturn(this, (FieldDetails.__proto__ || Object.getPrototypeOf(FieldDetails)).apply(this, arguments));\n    }\n\n    _createClass(FieldDetails, [{\n        key: 'renderDel',\n        value: function renderDel(token, name, fieldname) {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'li',\n                null,\n                fieldname,\n                _react2.default.createElement(\n                    'button',\n                    { className: 'circle red lighten-1', onClick: function onClick() {\n                            _this2.props.removeField(token, name, fieldname, function () {\n                                _this2.props.fetchFieldList(token);\n                            });\n                        } },\n                    _react2.default.createElement(\n                        'i',\n                        { className: 'material-icons' },\n                        'delete'\n                    )\n                )\n            );\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'card-content' },\n                _react2.default.createElement(\n                    'span',\n                    { className: 'card-title' },\n                    this.props.data.name\n                ),\n                _react2.default.createElement(\n                    'ul',\n                    null,\n                    _react2.default.createElement(\n                        'li',\n                        null,\n                        'Y-Axis: ',\n                        this.props.data.yAxis\n                    ),\n                    _react2.default.createElement(\n                        'li',\n                        null,\n                        'X-Axis: ',\n                        this.props.data.xAxis\n                    ),\n                    this.props.data.data.name.map(function (el) {\n                        return _this3.renderDel(_this3.props.token, _this3.props.data.name, el);\n                    }),\n                    _react2.default.createElement(\n                        'li',\n                        null,\n                        _react2.default.createElement(\n                            'form',\n                            { onSubmit: this.props.handleSubmit(function (value) {\n                                    _this3.props.newDataField(value, _this3.props.token, _this3.props.data.name, function () {\n                                        _this3.props.fetchFieldList(_this3.props.token);\n                                    });\n                                }) },\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'row' },\n                                _react2.default.createElement(_reduxForm.Field, { type: 'text', name: 'newField', component: _formInput2.default }),\n                                _react2.default.createElement(\n                                    'button',\n                                    { type: 'submit', className: 'btn blue pulse' },\n                                    'Add'\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return FieldDetails;\n}(_react.Component);\n\n;\n\nvar validate = function validate(values) {\n    var errors = {};\n    if (!values.newField) {\n        errors.newField = \"Provide a name for the channel\";\n    }\n    return errors;\n};\nexports.default = (0, _reduxForm.reduxForm)({\n    validate: validate,\n    form: 'newChannelForm'\n})((0, _reactRedux.connect)(null, { removeField: _deleteField.removeField, fetchFieldList: _fetchFieldList.fetchFieldList, newDataField: _addNewDataField.newDataField })(FieldDetails));\n\n//# sourceURL=webpack:///./src/client/components/fieldDetails.js?");

/***/ }),

/***/ "./src/client/components/formInput.js":
/*!********************************************!*\
  !*** ./src/client/components/formInput.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n    var input = _ref.input,\n        label = _ref.label,\n        _ref$meta = _ref.meta,\n        error = _ref$meta.error,\n        touched = _ref$meta.touched;\n\n    return _react2.default.createElement(\n        \"div\",\n        { className: \"input-field\" },\n        _react2.default.createElement(\n            \"label\",\n            null,\n            label\n        ),\n        _react2.default.createElement(\"input\", input),\n        _react2.default.createElement(\n            \"div\",\n            null,\n            touched && error\n        )\n    );\n};\n\n//# sourceURL=webpack:///./src/client/components/formInput.js?");

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

/***/ "./src/client/components/frame.js":
/*!****************************************!*\
  !*** ./src/client/components/frame.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Frame = function (_Component) {\n    _inherits(Frame, _Component);\n\n    function Frame(props) {\n        _classCallCheck(this, Frame);\n\n        return _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, props));\n    }\n\n    _createClass(Frame, [{\n        key: \"render\",\n        value: function render() {\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"card z-depth-3\" },\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"card-content\" },\n                    _react2.default.createElement(\n                        \"span\",\n                        { className: \"card-title\" },\n                        this.props.data.name\n                    ),\n                    _react2.default.createElement(\"iframe\", {\n                        src: \"http://localhost:3000/templates/\" + this.props.id + \"/\" + this.props.data.name })\n                )\n            );\n        }\n    }]);\n\n    return Frame;\n}(_react.Component);\n\nexports.default = Frame;\n\n//# sourceURL=webpack:///./src/client/components/frame.js?");

/***/ }),

/***/ "./src/client/components/graph.js":
/*!****************************************!*\
  !*** ./src/client/components/graph.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.AreaGraph = exports.BarGraph = exports.LineGraph = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _recharts = __webpack_require__(/*! recharts */ \"recharts\");\n\nvar _util = __webpack_require__(/*! util */ \"util\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar LineGraph = exports.LineGraph = function LineGraph(props) {\n    return _react2.default.createElement(\n        'div',\n        { className: 'center', style: { overflowX: 'scroll' } },\n        _react2.default.createElement(\n            _recharts.ResponsiveContainer,\n            { width: '100%', height: '100%', style: { overflowX: 'scroll' } },\n            _react2.default.createElement(\n                _recharts.LineChart,\n                { data: props.data, margin: { top: 5, right: 30, left: 20, bottom: 5 } },\n                _react2.default.createElement(_recharts.XAxis, { dataKey: props.temp, label: props.temp }),\n                _react2.default.createElement(_recharts.YAxis, { label: props.yAxis }),\n                _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),\n                _react2.default.createElement(_recharts.Tooltip, null),\n                _react2.default.createElement(_recharts.Legend, null),\n                _react2.default.createElement(_recharts.ReferenceLine, { y: props.upper, label: 'Max', stroke: 'red' }),\n                _react2.default.createElement(_recharts.ReferenceLine, { y: props.lower, label: 'Min', stroke: 'blue' }),\n                props.fields.map(function (el) {\n                    return _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: el, stroke: '#8884d8', activeDot: { r: 8 } });\n                })\n            )\n        )\n    );\n};\n\nvar BarGraph = exports.BarGraph = function BarGraph(props) {\n    return _react2.default.createElement(\n        'div',\n        { className: 'center', style: { overflowX: 'scroll' } },\n        _react2.default.createElement(\n            _recharts.ResponsiveContainer,\n            { width: '100%', height: '100%', style: { overflowX: 'scroll' } },\n            _react2.default.createElement(\n                _recharts.BarChart,\n                { width: 600, height: 300, data: props.data, margin: { top: 5, right: 30, left: 20, bottom: 5 } },\n                _react2.default.createElement(_recharts.XAxis, { dataKey: props.temp, label: props.temp }),\n                _react2.default.createElement(_recharts.YAxis, { label: props.yAxis }),\n                _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),\n                _react2.default.createElement(_recharts.Tooltip, null),\n                _react2.default.createElement(_recharts.Legend, null),\n                props.fields.map(function (el) {\n                    return _react2.default.createElement(_recharts.Bar, { dataKey: el, fill: '#8884d8' });\n                }),\n                _react2.default.createElement(_recharts.ReferenceLine, { y: props.upper, label: 'Max', stroke: 'red' }),\n                _react2.default.createElement(_recharts.ReferenceLine, { y: props.lower, label: 'Min', stroke: 'blue' })\n            )\n        )\n    );\n};\n\nvar AreaGraph = exports.AreaGraph = function AreaGraph(props) {\n    return _react2.default.createElement(\n        'div',\n        { className: 'center', style: { overflowX: 'scroll' } },\n        _react2.default.createElement(\n            _recharts.ResponsiveContainer,\n            { width: '100%', height: '100%', style: { overflowX: 'scroll' } },\n            _react2.default.createElement(\n                _recharts.AreaChart,\n                { width: 600, height: 300, data: props.data, margin: { top: 5, right: 30, left: 20, bottom: 5 } },\n                _react2.default.createElement(_recharts.XAxis, { dataKey: props.temp, label: props.temp }),\n                _react2.default.createElement(_recharts.YAxis, { label: props.yAxis }),\n                _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),\n                _react2.default.createElement(_recharts.Tooltip, null),\n                _react2.default.createElement(_recharts.Legend, null),\n                props.fields.map(function (el) {\n                    return _react2.default.createElement(_recharts.Area, { type: 'monotone', dataKey: el, stroke: '#8884d8', activeDot: { r: 8 } });\n                }),\n                _react2.default.createElement(_recharts.ReferenceLine, { y: props.upper, label: 'Max', stroke: 'red' }),\n                _react2.default.createElement(_recharts.ReferenceLine, { y: props.lower, label: 'Min', stroke: 'blue' })\n            )\n        )\n    );\n};\n\n//# sourceURL=webpack:///./src/client/components/graph.js?");

/***/ }),

/***/ "./src/client/components/header.js":
/*!*****************************************!*\
  !*** ./src/client/components/header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n    _inherits(Header, _Component);\n\n    function Header(props) {\n        _classCallCheck(this, Header);\n\n        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));\n    }\n\n    _createClass(Header, [{\n        key: 'renderHeaderLogo',\n        value: function renderHeaderLogo() {\n            var headerLogo = this.props.auth ? _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/channel', className: 'brand-logo left' },\n                'G'\n            ) : _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/', className: 'brand-logo left' },\n                'G'\n            );\n            return headerLogo;\n        }\n    }, {\n        key: 'renderHeaderButtons',\n        value: function renderHeaderButtons() {\n            var authButton = this.props.auth ? _react2.default.createElement(\n                'ul',\n                { className: 'right' },\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    _react2.default.createElement(\n                        'a',\n                        { href: '/auth/logout' },\n                        _react2.default.createElement('i', { className: 'fa fa-sign-out fa-lg' })\n                    )\n                )\n            ) : _react2.default.createElement(\n                'ul',\n                { className: 'right' },\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    _react2.default.createElement(\n                        'a',\n                        { href: '/auth/google' },\n                        _react2.default.createElement('i', { className: 'fa fa-google fa-lg' })\n                    )\n                ),\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    _react2.default.createElement(\n                        'a',\n                        { href: '/auth/facebook' },\n                        _react2.default.createElement('i', { className: 'fa fa-facebook fa-lg' })\n                    )\n                ),\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    _react2.default.createElement(\n                        'a',\n                        { href: '/auth/github' },\n                        _react2.default.createElement('i', { className: 'fa fa-github fa-lg' })\n                    )\n                )\n            );\n            return authButton;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'nav',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { className: 'nav-wrapper' },\n                    this.renderHeaderLogo(),\n                    this.renderHeaderButtons()\n                )\n            );\n        }\n    }]);\n\n    return Header;\n}(_react.Component);\n\n;\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n    var auth = _ref.auth;\n\n    return { auth: auth };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);\n\n//# sourceURL=webpack:///./src/client/components/header.js?");

/***/ }),

/***/ "./src/client/components/leaflet.js":
/*!******************************************!*\
  !*** ./src/client/components/leaflet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactLeafletUniversal = __webpack_require__(/*! react-leaflet-universal */ \"react-leaflet-universal\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar GIS = function (_Component) {\n  _inherits(GIS, _Component);\n\n  function GIS(props) {\n    _classCallCheck(this, GIS);\n\n    return _possibleConstructorReturn(this, (GIS.__proto__ || Object.getPrototypeOf(GIS)).call(this, props));\n  }\n\n  _createClass(GIS, [{\n    key: 'renderMarker',\n    value: function renderMarker(el) {\n      var temp = new Array();\n      for (var i = 0; i < el.pos.length; i++) {\n        temp.push(_react2.default.createElement(\n          _reactLeafletUniversal.CircleMarker,\n          { center: el.pos[i], radius: 10, onClick: function onClick() {\n              alert(\"Hello\");\n            } },\n          _react2.default.createElement(\n            _reactLeafletUniversal.Marker,\n            { position: el.pos[i] },\n            _react2.default.createElement(\n              _reactLeafletUniversal.Popup,\n              { position: el.pos[i] },\n              _react2.default.createElement(\n                'center',\n                null,\n                el.name\n              ),\n              _react2.default.createElement('br', null),\n              el.time[i]\n            )\n          )\n        ));\n      }\n      return temp;\n    }\n  }, {\n    key: 'renderLines',\n    value: function renderLines(el) {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_reactLeafletUniversal.Polyline, { positions: el.pos })\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'card z-depth-3 solar-blue' },\n        _react2.default.createElement(\n          'div',\n          { className: 'card-content' },\n          _react2.default.createElement(\n            'span',\n            { className: 'card-title' },\n            this.props.data.name\n          ),\n          _react2.default.createElement(\n            _reactLeafletUniversal.Map,\n            { center: [9.563172, 76.565652], zoom: 13 },\n            _react2.default.createElement(_reactLeafletUniversal.TileLayer, {\n              url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\n              attribution: '\\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n            }),\n            this.props.data.persons.map(function (el) {\n              return _this2.renderMarker(el);\n            }),\n            this.props.data.persons.map(function (el) {\n              return _this2.renderLines(el);\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return GIS;\n}(_react.Component);\n\nexports.default = GIS;\n\n//# sourceURL=webpack:///./src/client/components/leaflet.js?");

/***/ }),

/***/ "./src/client/components/limits.js":
/*!*****************************************!*\
  !*** ./src/client/components/limits.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _emailProvider = __webpack_require__(/*! ./emailProvider */ \"./src/client/components/emailProvider.js\");\n\nvar _emailProvider2 = _interopRequireDefault(_emailProvider);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Limit = function Limit(props) {\n    return _react2.default.createElement(\n        'div',\n        { className: 'card' },\n        _react2.default.createElement(\n            'div',\n            { className: 'card-content' },\n            _react2.default.createElement(\n                'span',\n                { className: 'card-title' },\n                'Upper Limit'\n            ),\n            _react2.default.createElement(\n                'p',\n                null,\n                props.upper\n            ),\n            _react2.default.createElement(\n                'span',\n                { className: 'card-title' },\n                'Lower Limit'\n            ),\n            _react2.default.createElement(\n                'p',\n                null,\n                props.lower\n            )\n        )\n    );\n};\n\nvar EmailService = function (_Component) {\n    _inherits(EmailService, _Component);\n\n    function EmailService(props) {\n        _classCallCheck(this, EmailService);\n\n        var _this = _possibleConstructorReturn(this, (EmailService.__proto__ || Object.getPrototypeOf(EmailService)).call(this, props));\n\n        _this.state = { setting: true };\n        return _this;\n    }\n\n    _createClass(EmailService, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                this.state.setting ? _react2.default.createElement(Limit, { upper: this.props.upper, lower: this.props.lower }) : _react2.default.createElement(_emailProvider2.default, { token: this.props.token, name: this.props.fieldName,\n                    update: function update() {\n                        _this2.setState({ setting: true });\n                    } }),\n                _react2.default.createElement(\n                    'button',\n                    { className: 'btn green right', onClick: function onClick() {\n                            _this2.setState({ setting: !_this2.state.setting });\n                        } },\n                    _react2.default.createElement(\n                        'i',\n                        { className: 'material-icons' },\n                        'dehaze'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return EmailService;\n}(_react.Component);\n\n;\n\nexports.default = EmailService;\n\n//# sourceURL=webpack:///./src/client/components/limits.js?");

/***/ }),

/***/ "./src/client/components/newGraph.js":
/*!*******************************************!*\
  !*** ./src/client/components/newGraph.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _formInput = __webpack_require__(/*! ./../components/formInput */ \"./src/client/components/formInput.js\");\n\nvar _formInput2 = _interopRequireDefault(_formInput);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _addGraph = __webpack_require__(/*! ./../actions/addGraph */ \"./src/client/actions/addGraph.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NewGraph = function (_Component) {\n    _inherits(NewGraph, _Component);\n\n    function NewGraph(props) {\n        _classCallCheck(this, NewGraph);\n\n        var _this = _possibleConstructorReturn(this, (NewGraph.__proto__ || Object.getPrototypeOf(NewGraph)).call(this, props));\n\n        _this.state = {\n            checked: false\n        };\n        return _this;\n    }\n\n    _createClass(NewGraph, [{\n        key: 'renderFields',\n        value: function renderFields() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_reduxForm.Field, { label: 'Channel Name', type: 'text', name: 'name', component: _formInput2.default }),\n                _react2.default.createElement(_reduxForm.Field, { label: 'Y-Axis', type: 'text', name: 'yAxis', component: _formInput2.default })\n            );\n        }\n    }, {\n        key: 'handleChange',\n        value: function handleChange() {\n            this.setState({ checked: !this.state.checked });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'form',\n                    { onSubmit: this.props.handleSubmit(function (values) {\n                            _this2.props.newChannel(values, function () {\n                                _this2.props.history.push('/channel');\n                            });\n                        }) },\n                    this.renderFields(),\n                    _react2.default.createElement(\n                        'label',\n                        null,\n                        _react2.default.createElement('input', { type: 'checkbox', onChange: this.handleChange, defaultChecked: this.state.checked, className: 'browser-default' }),\n                        _react2.default.createElement(\n                            'span',\n                            null,\n                            'X-Axis'\n                        )\n                    ),\n                    this.state.checked ? _react2.default.createElement(_reduxForm.Field, { label: 'X-Axis', type: 'text', name: 'xAxis', component: _formInput2.default }) : null,\n                    _react2.default.createElement(\n                        'button',\n                        { type: 'submit' },\n                        'Submit'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return NewGraph;\n}(_react.Component);\n\nvar validate = function validate(values) {\n    var errors = {};\n    if (!values.name) {\n        errors.name = \"Provide a name for the field\";\n    }\n    if (!values.yAxis) {\n        errors.yAxis = \"Provide a yAxis\";\n    }\n    return errors;\n};\n\nexports.default = (0, _reduxForm.reduxForm)({\n    validate: validate,\n    form: 'graphForm'\n})((0, _reactRedux.connect)(null, { newGraph: _addGraph.newGraph })(NewGraph));\n\n//# sourceURL=webpack:///./src/client/components/newGraph.js?");

/***/ }),

/***/ "./src/client/components/visualization.js":
/*!************************************************!*\
  !*** ./src/client/components/visualization.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _graph = __webpack_require__(/*! ./../components/graph */ \"./src/client/components/graph.js\");\n\nvar _fieldDetails = __webpack_require__(/*! ./../components/fieldDetails */ \"./src/client/components/fieldDetails.js\");\n\nvar _fieldDetails2 = _interopRequireDefault(_fieldDetails);\n\nvar _limits = __webpack_require__(/*! ./../components/limits */ \"./src/client/components/limits.js\");\n\nvar _limits2 = _interopRequireDefault(_limits);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Graph = function (_Component) {\n    _inherits(Graph, _Component);\n\n    function Graph(props) {\n        _classCallCheck(this, Graph);\n\n        var _this = _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).call(this, props));\n\n        _this.state = {\n            showing: true,\n            element: \"line\",\n            option: false };\n        _this.myRef = _react2.default.createRef();\n        _this.handleChange = _this.handleChange.bind(_this);\n        return _this;\n    }\n\n    _createClass(Graph, [{\n        key: 'renderGraph',\n        value: function renderGraph() {\n            switch (this.state.element) {\n                case \"line\":\n                    return _react2.default.createElement(_graph.LineGraph, { data: this.props.plot, fields: this.props.fields,\n                        upper: this.props.data.upperLimit, lower: this.props.data.lowerLimit, temp: this.props.data.xAxis, yAxis: this.props.yAxis });\n                case \"bar\":\n                    return _react2.default.createElement(_graph.BarGraph, { data: this.props.plot, fields: this.props.fields,\n                        upper: this.props.data.upperLimit, lower: this.props.data.lowerLimit,\n                        yAxis: this.props.yAxis, temp: this.props.data.xAxis });\n                case \"area\":\n                    return _react2.default.createElement(_graph.AreaGraph, { data: this.props.plot, fields: this.props.fields,\n                        upper: this.props.data.upperLimit, yAxis: this.props.yAxis, lower: this.props.data.lowerLimit, temp: this.props.data.xAxis });\n            }\n        }\n    }, {\n        key: 'handleChange',\n        value: function handleChange(event) {\n            this.setState({ element: event.target.value });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'card z-depth-3' },\n                _react2.default.createElement(\n                    'select',\n                    { value: this.state.element, onChange: this.handleChange, ref: this.myRef, className: 'browser-default' },\n                    _react2.default.createElement(\n                        'option',\n                        { value: 'line' },\n                        'LineChart'\n                    ),\n                    _react2.default.createElement(\n                        'option',\n                        { value: 'bar' },\n                        'BarChart'\n                    ),\n                    _react2.default.createElement(\n                        'option',\n                        { value: 'area' },\n                        'AreaChart'\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card-title' },\n                    this.props.data.name\n                ),\n                this.state.showing ? this.renderGraph() : _react2.default.createElement(_fieldDetails2.default, { data: this.props.data, token: this.props.token }),\n                this.state.option ? _react2.default.createElement(_limits2.default, { upper: this.props.data.upperLimit, lower: this.props.data.lowerLimit,\n                    fieldName: this.props.data.name, token: this.props.token }) : null,\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            _this2.setState({ showing: !_this2.state.showing });\n                        },\n                        className: 'btn-floating waves-effect waves-light red right' },\n                    _react2.default.createElement(\n                        'i',\n                        { 'class': 'material-icons' },\n                        'info'\n                    )\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            _this2.setState({ option: !_this2.state.option });\n                        },\n                        className: 'btn-floating waves-effect waves-light blue right' },\n                    _react2.default.createElement(\n                        'i',\n                        { 'class': 'material-icons' },\n                        'label_outline'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Graph;\n}(_react.Component);\n\nexports.default = Graph;\n\n//# sourceURL=webpack:///./src/client/components/visualization.js?");

/***/ }),

/***/ "./src/client/pages/ChannelPage.js":
/*!*****************************************!*\
  !*** ./src/client/pages/ChannelPage.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _fetchChannelList = __webpack_require__(/*! ./../actions/fetchChannelList */ \"./src/client/actions/fetchChannelList.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar channelSection = function (_Component) {\n    _inherits(channelSection, _Component);\n\n    function channelSection(props) {\n        _classCallCheck(this, channelSection);\n\n        var _this = _possibleConstructorReturn(this, (channelSection.__proto__ || Object.getPrototypeOf(channelSection)).call(this, props));\n\n        _this.myRef = _react2.default.createRef();\n        return _this;\n    }\n\n    _createClass(channelSection, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.props.fetchChannelList();\n            var options = {};\n            var instances = M.FloatingActionButton.init(this.myRef.current, options);\n        }\n    }, {\n        key: 'renderChannelList',\n        value: function renderChannelList(_ref) {\n            var name = _ref.name,\n                description = _ref.description,\n                token = _ref.token;\n\n            return _react2.default.createElement(\n                'li',\n                { key: name, className: 'z-depth-2' },\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/channel/' + token + '/fields' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'card blue-grey darken-1' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'card-content white-text' },\n                            _react2.default.createElement(\n                                'span',\n                                { className: 'card-title' },\n                                name\n                            ),\n                            _react2.default.createElement(\n                                'p',\n                                null,\n                                description\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            if (!this.props.channels) {\n                return _react2.default.createElement(\n                    'div',\n                    null,\n                    'Loading'\n                );\n            }\n            return _react2.default.createElement(\n                'div',\n                { className: 'container' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'card-content' },\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'card-title' },\n                            'CHANNELS'\n                        )\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'ul',\n                        null,\n                        this.props.channels.map(function (e) {\n                            return _this2.renderChannelList(e);\n                        })\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'fixed-action-btn', ref: this.myRef },\n                    _react2.default.createElement(\n                        'a',\n                        { className: 'btn-floating btn-large red' },\n                        _react2.default.createElement(\n                            'i',\n                            { className: 'large material-icons' },\n                            'mode_edit'\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'ul',\n                        null,\n                        _react2.default.createElement(\n                            'li',\n                            null,\n                            _react2.default.createElement(\n                                'a',\n                                { className: 'btn-floating red' },\n                                _react2.default.createElement(\n                                    _reactRouterDom.Link,\n                                    { to: '/channel/new' },\n                                    _react2.default.createElement(\n                                        'i',\n                                        { className: 'material-icons' },\n                                        'insert_chart'\n                                    )\n                                )\n                            )\n                        ),\n                        ' */}'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return channelSection;\n}(_react.Component);\n\n;\n\nvar mapStateToProps = function mapStateToProps(_ref2) {\n    var channels = _ref2.channels;\n\n    return { channels: channels };\n};\n\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps, { fetchChannelList: _fetchChannelList.fetchChannelList })(channelSection),\n    loadData: function loadData(_ref3) {\n        var dispatch = _ref3.dispatch;\n        return dispatch((0, _fetchChannelList.fetchChannelList)());\n    }\n};\n\n//# sourceURL=webpack:///./src/client/pages/ChannelPage.js?");

/***/ }),

/***/ "./src/client/pages/FieldPage.js":
/*!***************************************!*\
  !*** ./src/client/pages/FieldPage.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _fetchFieldList = __webpack_require__(/*! ./../actions/fetchFieldList */ \"./src/client/actions/fetchFieldList.js\");\n\nvar _visualization = __webpack_require__(/*! ./../components/visualization */ \"./src/client/components/visualization.js\");\n\nvar _visualization2 = _interopRequireDefault(_visualization);\n\nvar _leaflet = __webpack_require__(/*! ./../components/leaflet */ \"./src/client/components/leaflet.js\");\n\nvar _leaflet2 = _interopRequireDefault(_leaflet);\n\nvar _frame = __webpack_require__(/*! ./../components/frame */ \"./src/client/components/frame.js\");\n\nvar _frame2 = _interopRequireDefault(_frame);\n\nvar _socket = __webpack_require__(/*! ./../actions/socket */ \"./src/client/actions/socket.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar fieldSection = function (_Component) {\n    _inherits(fieldSection, _Component);\n\n    function fieldSection(props) {\n        _classCallCheck(this, fieldSection);\n\n        var _this = _possibleConstructorReturn(this, (fieldSection.__proto__ || Object.getPrototypeOf(fieldSection)).call(this, props));\n\n        _this.state = {\n            fields: _this.props.fields\n        };\n        return _this;\n    }\n\n    _createClass(fieldSection, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var temp = this.props.match.params.id;\n            this.props.fetchFieldList(temp);\n            this.props.subscribeFieldData(temp, function (err) {\n                console.log(err);\n            });\n            this.props.updateField();\n            this.props.updateMaps();\n        }\n    }, {\n        key: 'componentWillReceiveProps',\n        value: function componentWillReceiveProps(nextProps) {\n            if (nextProps.fields !== this.props.fields) {\n                this.setState({ fields: nextProps.fields });\n            }\n        }\n        //function to create reChart data array objects\n\n    }, {\n        key: 'renderFields',\n        value: function renderFields(el) {\n            return _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement(_visualization2.default, { plot: el.data.values, fields: el.data.name, token: this.props.match.params.id, data: el })\n            );\n        }\n    }, {\n        key: 'renderMaps',\n        value: function renderMaps(el) {\n            return _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement(_leaflet2.default, { data: el })\n            );\n        }\n    }, {\n        key: 'renderTemplates',\n        value: function renderTemplates(el) {\n            return _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement(_frame2.default, { data: el, id: this.props.match.params.id })\n            );\n        }\n    }, {\n        key: 'renderScreen',\n        value: function renderScreen(el) {\n            return _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card z-depth-3' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'card-content' },\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'card-title' },\n                            el.name\n                        ),\n                        _react2.default.createElement('img', { src: el.image, alt: 'Not connected', id: el.name })\n                    )\n                )\n            );\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            if (!this.state.fields) {\n                return _react2.default.createElement(\n                    'div',\n                    null,\n                    'Loading...'\n                );\n            }\n            return _react2.default.createElement(\n                'div',\n                { className: 'container' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'card-content' },\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'card-title' },\n                            'FIELDS'\n                        )\n                    )\n                ),\n                _react2.default.createElement(\n                    'ul',\n                    null,\n                    this.state.fields[\"graphs\"].map(function (el) {\n                        return _this2.renderFields(el);\n                    }),\n                    this.state.fields[\"maps\"].map(function (el) {\n                        return _this2.renderMaps(el);\n                    }),\n                    this.state.fields[\"templates\"].map(function (el) {\n                        return _this2.renderTemplates(el);\n                    }),\n                    this.state.fields[\"videos\"].map(function (el) {\n                        return _this2.renderScreen(el);\n                    })\n                )\n            );\n        }\n    }]);\n\n    return fieldSection;\n}(_react.Component);\n\n;\nvar mapStateToProps = function mapStateToProps(_ref) {\n    var fields = _ref.fields;\n\n    return { fields: fields };\n};\n\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps, { fetchFieldList: _fetchFieldList.fetchFieldList, subscribeFieldData: _socket.subscribeFieldData, updateField: _socket.updateField, tempCall: _socket.tempCall, updateMaps: _socket.updateMaps })(fieldSection)\n};\n\n//# sourceURL=webpack:///./src/client/pages/FieldPage.js?");

/***/ }),

/***/ "./src/client/pages/HomePage.js":
/*!**************************************!*\
  !*** ./src/client/pages/HomePage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n    return _react2.default.createElement(\n        \"section\",\n        null,\n        _react2.default.createElement(\n            \"div\",\n            { style: { width: \"100%\", height: \"100%\" }, className: \"solar-violet\" },\n            _react2.default.createElement(\n                \"div\",\n                { style: { position: 'relative', top: \"20%\", left: \"40%\" } },\n                _react2.default.createElement(\"img\", { src: \"./img/logo.png\", className: \"responsive-img\",\n                    style: { width: \"25%\", height: \"55%\" } })\n            )\n        )\n    );\n};\n\nexports.default = { component: Home };\n\n//# sourceURL=webpack:///./src/client/pages/HomePage.js?");

/***/ }),

/***/ "./src/client/pages/NewFieldPage.js":
/*!******************************************!*\
  !*** ./src/client/pages/NewFieldPage.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _newGraph = __webpack_require__(/*! ./../components/newGraph */ \"./src/client/components/newGraph.js\");\n\nvar _newGraph2 = _interopRequireDefault(_newGraph);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NewFieldPage = function (_Component) {\n    _inherits(NewFieldPage, _Component);\n\n    function NewFieldPage(props) {\n        _classCallCheck(this, NewFieldPage);\n\n        var _this = _possibleConstructorReturn(this, (NewFieldPage.__proto__ || Object.getPrototypeOf(NewFieldPage)).call(this, props));\n\n        _this.state = { element: \"graph\" };\n        _this.handleChange = _this.handleChange.bind(_this);\n        return _this;\n    }\n\n    _createClass(NewFieldPage, [{\n        key: 'handleChange',\n        value: function handleChange(event) {\n            this.setState({ element: event.target.value });\n        }\n    }, {\n        key: 'renderOptions',\n        value: function renderOptions() {\n            switch (this.state.element) {\n                case \"graph\":\n                    return _react2.default.createElement(_newGraph2.default, { id: this.props.match.params.id });\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'container' },\n                _react2.default.createElement(\n                    'select',\n                    { value: this.state.element, onChange: this.handleChange, ref: this.myRef, className: 'browser-default' },\n                    _react2.default.createElement(\n                        'option',\n                        { value: 'graph' },\n                        'Add graph'\n                    ),\n                    _react2.default.createElement(\n                        'option',\n                        { value: 'map' },\n                        'Add Map'\n                    ),\n                    _react2.default.createElement(\n                        'option',\n                        { value: 'template' },\n                        'Add Template'\n                    ),\n                    _react2.default.createElement(\n                        'option',\n                        { value: 'template' },\n                        'Add VideoStream'\n                    )\n                ),\n                this.renderOptions()\n            );\n        }\n    }]);\n\n    return NewFieldPage;\n}(_react.Component);\n\n;\n\nexports.default = {\n    component: NewFieldPage\n};\n\n//# sourceURL=webpack:///./src/client/pages/NewFieldPage.js?");

/***/ }),

/***/ "./src/client/pages/TemplatePage.js":
/*!******************************************!*\
  !*** ./src/client/pages/TemplatePage.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _saveTemplates = __webpack_require__(/*! ./../actions/saveTemplates */ \"./src/client/actions/saveTemplates.js\");\n\nvar _reactCodemirror = __webpack_require__(/*! react-codemirror2 */ \"react-codemirror2\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nif (process.browser) {\n    __webpack_require__(/*! codemirror/mode/javascript/javascript */ \"codemirror/mode/javascript/javascript\");\n    __webpack_require__(/*! codemirror/mode/htmlmixed/htmlmixed */ \"codemirror/mode/htmlmixed/htmlmixed\");\n    __webpack_require__(/*! codemirror/mode/css/css */ \"codemirror/mode/css/css\");\n    __webpack_require__(/*! codemirror/theme/material.css */ \"codemirror/theme/material.css\");\n}\n\nvar TemplatePage = function (_Component) {\n    _inherits(TemplatePage, _Component);\n\n    function TemplatePage(props) {\n        _classCallCheck(this, TemplatePage);\n\n        var _this = _possibleConstructorReturn(this, (TemplatePage.__proto__ || Object.getPrototypeOf(TemplatePage)).call(this, props));\n\n        _this.refHtml = _react2.default.createRef();\n        _this.refCss = _react2.default.createRef();\n        _this.refJs = _react2.default.createRef();\n        _this.state = {\n            codeHTML: \"\",\n            codeCSS: \"\",\n            codeJS: \"\"\n        };\n        _this.sendCode = _this.sendCode.bind(_this);\n        return _this;\n    }\n\n    _createClass(TemplatePage, [{\n        key: 'sendCode',\n        value: function sendCode() {\n            var _this2 = this;\n\n            var template = '<!DOCTYPE html>\\n        <html lang=\"en\">\\n        <meta charset=\"UTF-8\">\\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\\n        <title>' + this.props.match.params.name + '</title>\\n        <style>' + this.refCss.current.editor.getValue() + '</style>\\n        </head>\\n        <body>' + this.refHtml.current.editor.getValue() + '</body>\\n        <script>' + this.refJs.current.editor.getValue() + '</script>\\n        </html>';\n            this.props.saveTemplates(this.props.match.params.name, this.props.match.params.id, template, function () {\n                _this2.props.history.push('/channel');\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            var option = function option(mode) {\n                return {\n                    theme: 'material',\n                    mode: mode,\n                    lineNumbers: true\n                };\n            };\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'card-content' },\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'card-title' },\n                            'HTML'\n                        ),\n                        _react2.default.createElement(_reactCodemirror.UnControlled, { value: this.state.codeHTML, options: option('htmlmixed'),\n                            onBeforeChange: function onBeforeChange(editor, data, value) {\n                                _this3.setState({ codeHTML: value });\n                            }, ref: this.refHtml })\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'card-content' },\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'card-title' },\n                            'CSS'\n                        ),\n                        _react2.default.createElement(_reactCodemirror.UnControlled, { value: this.state.codeCSS, options: option('css'),\n                            onBeforeChange: function onBeforeChange(editor, data, value) {\n                                _this3.setState({ codeCSS: value });\n                            }, ref: this.refCss })\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'card-content' },\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'card-title' },\n                            'JS'\n                        ),\n                        _react2.default.createElement(_reactCodemirror.UnControlled, { value: this.state.codeJS, options: option('javascript'),\n                            onBeforeChange: function onBeforeChange(editor, data, value) {\n                                _this3.setState({ codeJS: value });\n                            }, ref: this.refJs })\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'center' },\n                    _react2.default.createElement(\n                        'button',\n                        { onClick: this.sendCode, className: 'btn green' },\n                        'Save'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return TemplatePage;\n}(_react.Component);\n\n;\n\nexports.default = {\n    component: (0, _reactRedux.connect)(null, { saveTemplates: _saveTemplates.saveTemplates })(TemplatePage)\n};\n\n//# sourceURL=webpack:///./src/client/pages/TemplatePage.js?");

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

/***/ "./src/client/reducers/fieldList.js":
/*!******************************************!*\
  !*** ./src/client/reducers/fieldList.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _fetchFieldList = __webpack_require__(/*! ./../actions/fetchFieldList */ \"./src/client/actions/fetchFieldList.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _fetchFieldList.FETCH_FIELD_LIST:\n            return action.payload.data;\n        case 'fieldUpdate':\n            var item1 = state.graphs.map(function (el) {\n                if (el.name !== action.result.name) {\n                    return el;\n                }\n                el.data.values = [].concat(_toConsumableArray(el.data.values), [action.result.value]);\n                return el;\n            });\n            return _extends({}, state, {\n                graphs: item1\n            });\n        case 'mapUpdate':\n            var item2 = state.maps.map(function (el) {\n                if (el.name !== action.result.name) {\n                    return el;\n                }\n                var temp = el.persons.map(function (el) {\n                    if (action.result.value[el.name]) {\n                        el.pos = [].concat(_toConsumableArray(el.pos), [action.result.value[el.name]]);\n                        console.log(action.result.value['time']);\n                        el.time = [].concat(_toConsumableArray(el.time), [action.result.value['time']]);\n                    }\n                    return el;\n                });\n                return _extends({}, el, {\n                    persons: temp\n                });\n            });\n            console.log(item2);\n            return _extends({}, state, {\n                maps: item2\n            });\n        case 'videoUpdate':\n            // const item3=state.videos.maps((el)=>{\n            //     if (el.name !== action.result.name) {\n            //         return el;\n            //     }\n            //     return({...el,image:action.result.image});\n\n            // });\n            // console.log({...state,videos:item3});\n            // return({...state,videos:item3})\n            console.log(\"yo\");\n            return state;\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/client/reducers/fieldList.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _authReducer = __webpack_require__(/*! ./authReducer */ \"./src/client/reducers/authReducer.js\");\n\nvar _authReducer2 = _interopRequireDefault(_authReducer);\n\nvar _channelList = __webpack_require__(/*! ./channelList */ \"./src/client/reducers/channelList.js\");\n\nvar _channelList2 = _interopRequireDefault(_channelList);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _fieldList = __webpack_require__(/*! ./fieldList */ \"./src/client/reducers/fieldList.js\");\n\nvar _fieldList2 = _interopRequireDefault(_fieldList);\n\nvar _socket = __webpack_require__(/*! ./socket */ \"./src/client/reducers/socket.js\");\n\nvar _socket2 = _interopRequireDefault(_socket);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n    auth: _authReducer2.default,\n    channels: _channelList2.default,\n    fields: _fieldList2.default,\n    form: _reduxForm.reducer,\n    socket: _socket2.default\n});\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/socket.js":
/*!***************************************!*\
  !*** ./src/client/reducers/socket.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case 'NEW_MESSAGE':\n            return action;\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/client/reducers/socket.js?");

/***/ }),

/***/ "./src/client/routes.js":
/*!******************************!*\
  !*** ./src/client/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _HomePage = __webpack_require__(/*! ./pages/HomePage */ \"./src/client/pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _ChannelPage = __webpack_require__(/*! ./pages/ChannelPage */ \"./src/client/pages/ChannelPage.js\");\n\nvar _ChannelPage2 = _interopRequireDefault(_ChannelPage);\n\nvar _FieldPage = __webpack_require__(/*! ./pages/FieldPage */ \"./src/client/pages/FieldPage.js\");\n\nvar _FieldPage2 = _interopRequireDefault(_FieldPage);\n\nvar _newChannelPage = __webpack_require__(/*! ./pages/newChannelPage */ \"./src/client/pages/newChannelPage.js\");\n\nvar _newChannelPage2 = _interopRequireDefault(_newChannelPage);\n\nvar _TemplatePage = __webpack_require__(/*! ./pages/TemplatePage */ \"./src/client/pages/TemplatePage.js\");\n\nvar _TemplatePage2 = _interopRequireDefault(_TemplatePage);\n\nvar _NewFieldPage = __webpack_require__(/*! ./pages/NewFieldPage */ \"./src/client/pages/NewFieldPage.js\");\n\nvar _NewFieldPage2 = _interopRequireDefault(_NewFieldPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _App2.default, {\n    routes: [_extends({}, _HomePage2.default, {\n        path: '/',\n        exact: true\n    }), _extends({}, _ChannelPage2.default, {\n        path: '/channel',\n        exact: true\n    }), _extends({}, _newChannelPage2.default, {\n        path: '/channel/new',\n        exact: true\n    }), _extends({}, _FieldPage2.default, {\n        path: '/channel/:id/fields',\n        exact: true\n    }), _extends({}, _TemplatePage2.default, {\n        path: '/channel/:id/template/:name',\n        exact: true\n    }), _extends({}, _NewFieldPage2.default, {\n        path: '/channel/:id/field/new',\n        exact: true\n    })]\n})];\n\n//# sourceURL=webpack:///./src/client/routes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\n__webpack_require__(/*! ./server/config/config.js */ \"./src/server/config/config.js\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _socket = __webpack_require__(/*! socket.io */ \"socket.io\");\n\nvar _socket2 = _interopRequireDefault(_socket);\n\nvar _http = __webpack_require__(/*! http */ \"http\");\n\nvar _http2 = _interopRequireDefault(_http);\n\nvar _createStore = __webpack_require__(/*! ./server/utils/createStore */ \"./src/server/utils/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _routes = __webpack_require__(/*! ./client/routes */ \"./src/client/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _cookieSession = __webpack_require__(/*! cookie-session */ \"cookie-session\");\n\nvar _cookieSession2 = _interopRequireDefault(_cookieSession);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _auth = __webpack_require__(/*! ./server/middleware/auth */ \"./src/server/middleware/auth.js\");\n\nvar _mongoose = __webpack_require__(/*! ./server/db/mongoose */ \"./src/server/db/mongoose.js\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\n__webpack_require__(/*! ./server/db/models/user */ \"./src/server/db/models/user.js\");\n\n__webpack_require__(/*! ./server/db/models/channel */ \"./src/server/db/models/channel.js\");\n\n__webpack_require__(/*! ./server/db/models/field */ \"./src/server/db/models/field.js\");\n\n__webpack_require__(/*! ./server/db/models/maps */ \"./src/server/db/models/maps.js\");\n\nvar _renderer = __webpack_require__(/*! ./server/utils/renderer */ \"./src/server/utils/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _socketConfig = __webpack_require__(/*! ./server/webSocketConfig/socketConfig */ \"./src/server/webSocketConfig/socketConfig.js\");\n\nvar _socketConfig2 = _interopRequireDefault(_socketConfig);\n\n__webpack_require__(/*! ./server/services/passport_google */ \"./src/server/services/passport_google.js\");\n\n__webpack_require__(/*! ./server/services/passport_facebook */ \"./src/server/services/passport_facebook.js\");\n\n__webpack_require__(/*! ./server/services/passport_github */ \"./src/server/services/passport_github.js\");\n\nvar _google = __webpack_require__(/*! ./server/utils/authRoutes/google */ \"./src/server/utils/authRoutes/google.js\");\n\nvar _google2 = _interopRequireDefault(_google);\n\nvar _fb = __webpack_require__(/*! ./server/utils/authRoutes/fb */ \"./src/server/utils/authRoutes/fb.js\");\n\nvar _fb2 = _interopRequireDefault(_fb);\n\nvar _github = __webpack_require__(/*! ./server/utils/authRoutes/github */ \"./src/server/utils/authRoutes/github.js\");\n\nvar _github2 = _interopRequireDefault(_github);\n\nvar _utils = __webpack_require__(/*! ./server/utils/authRoutes/utils */ \"./src/server/utils/authRoutes/utils.js\");\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nvar _index = __webpack_require__(/*! ./server/api/index */ \"./src/server/api/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _graph = __webpack_require__(/*! ./server/api/graph */ \"./src/server/api/graph.js\");\n\nvar _graph2 = _interopRequireDefault(_graph);\n\nvar _maps = __webpack_require__(/*! ./server/api/maps */ \"./src/server/api/maps.js\");\n\nvar _maps2 = _interopRequireDefault(_maps);\n\nvar _rest = __webpack_require__(/*! ./server/api/rest */ \"./src/server/api/rest.js\");\n\nvar _rest2 = _interopRequireDefault(_rest);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n//server configurations\n\n\n//react-SSH configuration\n\n\n//token-cookie based authentication\n\n\n//custom middleware for private routes\n\n\n//db mongoose configurations\n\n//ssh rendering template and static route\n\n\nvar app = (0, _express2.default)();\nvar server = _http2.default.createServer(app);\nvar io = (0, _socket2.default)(server);\n\n(0, _socketConfig2.default)(io);\n\napp.use((0, _cookieSession2.default)({\n  maxAge: 15 * 24 * 60 * 60 * 1000,\n  keys: [process.env.COOKIE_ENCRYPT_KEY1, process.env.COOKIE_ENCRYPT_KEY2]\n}));\n\napp.use(_express2.default.static(\"public\"));\napp.use(_passport2.default.initialize());\napp.use(_passport2.default.session());\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({\n  useNewUrlParser: true\n}));\n\nvar User = _mongoose2.default.model('users');\n\n_passport2.default.serializeUser(function (user, done) {\n  done(null, user.id);\n});\n\n_passport2.default.deserializeUser(function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, done) {\n    var user;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return User.findById(id);\n\n          case 2:\n            user = _context.sent;\n\n            done(null, user);\n\n          case 4:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\n//google,fb,github authentication system\n\n\n//authentication routes for various oauth\n\n\n//api routes\n\n\n(0, _google2.default)(app);\n(0, _fb2.default)(app);\n(0, _github2.default)(app);\n(0, _utils2.default)(app);\n\n(0, _index2.default)(app);\n(0, _graph2.default)(app);\n(0, _maps2.default)(app);\n(0, _rest2.default)(app);\n\napp.get(\"*\", _auth.authentication, function (req, res) {\n  var store = (0, _createStore2.default)(req);\n  var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref2) {\n    var route = _ref2.route;\n\n    return route.loadData ? route.loadData(store) : null;\n  });\n  Promise.all(promises).then(function () {\n    res.send((0, _renderer2.default)(req, store));\n  });\n});\n\nserver.listen(process.env.PORT, function () {\n  console.log('localhost at port:' + process.env.PORT);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/server/api/graph.js":
/*!*********************************!*\
  !*** ./src/server/api/graph.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _Mailer = __webpack_require__(/*! ./../services/Mailer */ \"./src/server/services/Mailer.js\");\n\nvar _Mailer2 = _interopRequireDefault(_Mailer);\n\nvar _emailTemplate = __webpack_require__(/*! ./../services/emailTemplate */ \"./src/server/services/emailTemplate.js\");\n\nvar _emailTemplate2 = _interopRequireDefault(_emailTemplate);\n\nvar _auth = __webpack_require__(/*! ../middleware/auth */ \"./src/server/middleware/auth.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar Channel = _mongoose2.default.model('channels');\nvar Graph = _mongoose2.default.model('graphs');\nvar Map = _mongoose2.default.model('maps');\n\nexports.default = function (app) {\n    app.post('/channels/:id/fields/new', function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n            var channel, _req$body, name, yAxis, newField;\n\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return Channel.findByToken(req.params.id);\n\n                        case 2:\n                            channel = _context.sent;\n                            _req$body = req.body, name = _req$body.name, yAxis = _req$body.yAxis;\n                            newField = new Graph({\n                                _channel: channel._id,\n                                name: name,\n                                yAxis: yAxis\n                            });\n\n                            if (req.body.xAxis) {\n                                newField.xAxis.name = req.body.xAxis;\n                            }\n                            newField.save().then(function () {\n                                res.send(\"ok\");\n                            });\n\n                        case 7:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2) {\n            return _ref.apply(this, arguments);\n        };\n    }());\n\n    app.get('/channels/fields/list/:id', function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n            var channel, fieldList, mapList, temp;\n            return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n                            _context2.next = 2;\n                            return Channel.findByToken(req.params.id);\n\n                        case 2:\n                            channel = _context2.sent;\n                            _context2.next = 5;\n                            return Graph.find({\n                                _channel: channel._id\n                            }, {\n                                _id: 0\n                            });\n\n                        case 5:\n                            fieldList = _context2.sent;\n                            _context2.next = 8;\n                            return Map.find({\n                                _channel: channel._id\n                            }, {\n                                _id: 0\n                            });\n\n                        case 8:\n                            mapList = _context2.sent;\n                            temp = new Object({\n                                graphs: fieldList,\n                                maps: mapList,\n                                templates: channel.templates,\n                                videos: channel.videos\n                            });\n\n                            res.send(temp);\n\n                        case 11:\n                        case 'end':\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, undefined);\n        }));\n\n        return function (_x3, _x4) {\n            return _ref2.apply(this, arguments);\n        };\n    }());\n\n    app.patch('/channels/:id/fields/:name', function () {\n        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n            var channel, field, limitBreaker, temp1, mailer;\n            return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                while (1) {\n                    switch (_context3.prev = _context3.next) {\n                        case 0:\n                            _context3.next = 2;\n                            return Channel.findByToken(req.params.id);\n\n                        case 2:\n                            channel = _context3.sent;\n                            _context3.next = 5;\n                            return Graph.findOne({\n                                _channel: channel._id,\n                                name: req.params.name\n                            });\n\n                        case 5:\n                            field = _context3.sent;\n\n                            field.count += 1;\n                            limitBreaker = new Array();\n                            temp1 = new Object();\n\n                            if (field.xAxis === \"Time\") {\n                                temp1[\"Time\"] = new Date().getTime();\n                            } else {\n                                temp1[field.xAxis.name] = req.query.xAxis;\n                            }\n                            field.data.name.forEach(function (element) {\n                                var test = req.query[element];\n                                if (field.upperLimit && field.lowerLimit && (test > field.upperLimit || test < field.lowerLimit)) {\n                                    limitBreaker.push({\n                                        name: element,\n                                        value: test\n                                    });\n                                }!test ? temp1[element] = field.data.values[field.data.length - 1][element] || null : temp1[element] = test;\n                            });\n                            if (limitBreaker.length != 0) {\n                                mailer = new _Mailer2.default(field, (0, _emailTemplate2.default)(limitBreaker, field.name, channel.name));\n\n                                mailer.send();\n                            }\n                            field.data.values.push(temp1);\n                            field.save().then(function () {\n                                res.send(field);\n                            });\n\n                        case 14:\n                        case 'end':\n                            return _context3.stop();\n                    }\n                }\n            }, _callee3, undefined);\n        }));\n\n        return function (_x5, _x6) {\n            return _ref3.apply(this, arguments);\n        };\n    }());\n\n    app.put('/channels/:id/fields/:name/addX', function () {\n        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n            var dataName, channel, field;\n            return regeneratorRuntime.wrap(function _callee4$(_context4) {\n                while (1) {\n                    switch (_context4.prev = _context4.next) {\n                        case 0:\n                            dataName = req.body.dataName;\n                            _context4.next = 3;\n                            return Channel.findByToken(req.params.id);\n\n                        case 3:\n                            channel = _context4.sent;\n                            _context4.next = 6;\n                            return Graph.findOne({\n                                _channel: channel._id,\n                                name: req.params.name\n                            });\n\n                        case 6:\n                            field = _context4.sent;\n\n                            if (field.data.name.indexOf(dataName) == -1) {\n                                field.data.name.push(dataName);\n                                field.save().then(function () {\n                                    res.send('ok');\n                                });\n                            } else {\n                                res.send('Duplicate Field').status(400);\n                            }\n\n                        case 8:\n                        case 'end':\n                            return _context4.stop();\n                    }\n                }\n            }, _callee4, undefined);\n        }));\n\n        return function (_x7, _x8) {\n            return _ref4.apply(this, arguments);\n        };\n    }());\n\n    app.delete('/channels/:id/fields/:name/delX', function () {\n        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n            var dataName, channel, field, temp;\n            return regeneratorRuntime.wrap(function _callee5$(_context5) {\n                while (1) {\n                    switch (_context5.prev = _context5.next) {\n                        case 0:\n                            dataName = req.body.dataName;\n                            _context5.next = 3;\n                            return Channel.findByToken(req.params.id);\n\n                        case 3:\n                            channel = _context5.sent;\n                            _context5.next = 6;\n                            return Graph.findOne({\n                                _channel: channel._id,\n                                name: req.params.name\n                            });\n\n                        case 6:\n                            field = _context5.sent;\n\n                            field.data.name.splice(field.data.name.indexOf(dataName), 1);\n                            temp = field.data.values;\n\n                            field.data.values = [];\n                            temp.forEach(function (el) {\n                                return delete el[dataName];\n                            });\n                            field.data.values = temp;\n                            field.save().then(function () {\n                                res.send(field);\n                            });\n\n                        case 13:\n                        case 'end':\n                            return _context5.stop();\n                    }\n                }\n            }, _callee5, undefined);\n        }));\n\n        return function (_x9, _x10) {\n            return _ref5.apply(this, arguments);\n        };\n    }());\n\n    app.post('/channels/:id/fields/:name/email', function () {\n        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {\n            var _req$body2, upper, lower, email, channel, field;\n\n            return regeneratorRuntime.wrap(function _callee6$(_context6) {\n                while (1) {\n                    switch (_context6.prev = _context6.next) {\n                        case 0:\n                            _req$body2 = req.body, upper = _req$body2.upper, lower = _req$body2.lower, email = _req$body2.email;\n                            _context6.next = 3;\n                            return Channel.findByToken(req.params.id);\n\n                        case 3:\n                            channel = _context6.sent;\n                            _context6.next = 6;\n                            return Graph.findOneAndUpdate({\n                                _channel: channel._id,\n                                name: req.params.name\n                            }, {\n                                $set: {\n                                    upperLimit: upper,\n                                    lowerLimit: lower,\n                                    email: email\n                                }\n                            });\n\n                        case 6:\n                            field = _context6.sent;\n\n                            res.send(field);\n\n                        case 8:\n                        case 'end':\n                            return _context6.stop();\n                    }\n                }\n            }, _callee6, undefined);\n        }));\n\n        return function (_x11, _x12) {\n            return _ref6.apply(this, arguments);\n        };\n    }());\n\n    app.delete('/channels/:id/fields/:name/del', function () {\n        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {\n            var _req$params, id, name, channel, field;\n\n            return regeneratorRuntime.wrap(function _callee7$(_context7) {\n                while (1) {\n                    switch (_context7.prev = _context7.next) {\n                        case 0:\n                            _req$params = req.params, id = _req$params.id, name = _req$params.name;\n                            _context7.next = 3;\n                            return Channel.findByToken(id);\n\n                        case 3:\n                            channel = _context7.sent;\n                            _context7.next = 6;\n                            return Graph.findOneAndRemove({\n                                _channel: channel._id,\n                                name: name\n                            });\n\n                        case 6:\n                            field = _context7.sent;\n\n                            res.send(\"ok\");\n\n                        case 8:\n                        case 'end':\n                            return _context7.stop();\n                    }\n                }\n            }, _callee7, undefined);\n        }));\n\n        return function (_x13, _x14) {\n            return _ref7.apply(this, arguments);\n        };\n    }());\n};\n\n//# sourceURL=webpack:///./src/server/api/graph.js?");

/***/ }),

/***/ "./src/server/api/index.js":
/*!*********************************!*\
  !*** ./src/server/api/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _auth = __webpack_require__(/*! ../middleware/auth */ \"./src/server/middleware/auth.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n//const User = mongoose.model('users');\nvar Channel = _mongoose2.default.model('channels');\n\nexports.default = function (app) {\n    app.post('/channels/new', _auth.authentication, function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n            var _req$body, name, description, newChannel;\n\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _req$body = req.body, name = _req$body.name, description = _req$body.description;\n                            _context.next = 3;\n                            return new Channel({\n                                name: name,\n                                description: description,\n                                _user: req.user._id\n                            });\n\n                        case 3:\n                            newChannel = _context.sent;\n\n\n                            newChannel.save().then(function () {\n                                return newChannel.getChannelToken();\n                            }).then(function (token) {\n                                res.status(200).send();\n                            });\n\n                        case 5:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2) {\n            return _ref.apply(this, arguments);\n        };\n    }());\n\n    app.get('/channels/list', _auth.authentication, function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n            var channelList;\n            return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n                            _context2.next = 2;\n                            return Channel.find({\n                                _user: req.user._id\n                            }, { _id: 0, _user: 0 });\n\n                        case 2:\n                            channelList = _context2.sent;\n\n                            res.send(channelList);\n\n                        case 4:\n                        case 'end':\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, undefined);\n        }));\n\n        return function (_x3, _x4) {\n            return _ref2.apply(this, arguments);\n        };\n    }());\n\n    app.get('/channels/:id', function () {\n        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n            var channel;\n            return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                while (1) {\n                    switch (_context3.prev = _context3.next) {\n                        case 0:\n                            _context3.next = 2;\n                            return Channel.findByToken(req.params.id);\n\n                        case 2:\n                            channel = _context3.sent;\n\n                            res.send(channel);\n\n                        case 4:\n                        case 'end':\n                            return _context3.stop();\n                    }\n                }\n            }, _callee3, undefined);\n        }));\n\n        return function (_x5, _x6) {\n            return _ref3.apply(this, arguments);\n        };\n    }());\n\n    app.delete('/channels/del/:id', function () {\n        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n            var channel, delChannel;\n            return regeneratorRuntime.wrap(function _callee4$(_context4) {\n                while (1) {\n                    switch (_context4.prev = _context4.next) {\n                        case 0:\n                            _context4.next = 2;\n                            return Channel.findByToken(req.params.id);\n\n                        case 2:\n                            channel = _context4.sent;\n                            _context4.next = 5;\n                            return Channel.findOneAndRemove({\n                                _id: channel._id\n                            });\n\n                        case 5:\n                            delChannel = _context4.sent;\n\n                            res.send('ok');\n\n                        case 7:\n                        case 'end':\n                            return _context4.stop();\n                    }\n                }\n            }, _callee4, undefined);\n        }));\n\n        return function (_x7, _x8) {\n            return _ref4.apply(this, arguments);\n        };\n    }());\n};\n\n//# sourceURL=webpack:///./src/server/api/index.js?");

/***/ }),

/***/ "./src/server/api/maps.js":
/*!********************************!*\
  !*** ./src/server/api/maps.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _auth = __webpack_require__(/*! ../middleware/auth */ \"./src/server/middleware/auth.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n//const User = mongoose.model('users');\nvar Map = _mongoose2.default.model('maps');\nvar Channel = _mongoose2.default.model('channels');\n\nexports.default = function (app) {\n    app.post('/channels/:id/maps/new', function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n            var channel, name, newField;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return Channel.findByToken(req.params.id);\n\n                        case 2:\n                            channel = _context.sent;\n                            name = req.body.name;\n                            newField = new Map({\n                                _channel: channel._id,\n                                name: name\n                            });\n\n                            newField.save().then(function () {\n                                res.send(\"ok\");\n                            });\n\n                        case 6:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2) {\n            return _ref.apply(this, arguments);\n        };\n    }());\n\n    app.put('/channels/:id/maps/:name/add', function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n            var channel, personName, map;\n            return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n                            _context2.next = 2;\n                            return Channel.findByToken(req.params.id);\n\n                        case 2:\n                            channel = _context2.sent;\n                            personName = req.body.personName;\n                            _context2.next = 6;\n                            return Map.findOne({\n                                _channel: channel._id,\n                                name: req.params.name\n                            });\n\n                        case 6:\n                            map = _context2.sent;\n\n                            map.keys.push(personName);\n                            map.persons.push({\n                                name: personName\n                            });\n                            map.save().then(function () {\n                                res.send(map);\n                            });\n\n                        case 10:\n                        case 'end':\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, undefined);\n        }));\n\n        return function (_x3, _x4) {\n            return _ref2.apply(this, arguments);\n        };\n    }());\n\n    app.put('/channels/:id/maps/:name/del', function () {\n        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n            var channel, personName, map;\n            return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                while (1) {\n                    switch (_context3.prev = _context3.next) {\n                        case 0:\n                            _context3.next = 2;\n                            return Channel.findByToken(req.params.id);\n\n                        case 2:\n                            channel = _context3.sent;\n                            personName = req.body.personName;\n                            _context3.next = 6;\n                            return Map.findOneAndUpdate({\n                                _channel: channel._id,\n                                name: req.params.name\n                            }, {\n                                $pull: {\n                                    persons: {\n                                        name: personName\n                                    },\n                                    keys: personName\n                                }\n                            });\n\n                        case 6:\n                            map = _context3.sent;\n\n                            res.send(map);\n\n                        case 8:\n                        case 'end':\n                            return _context3.stop();\n                    }\n                }\n            }, _callee3, undefined);\n        }));\n\n        return function (_x5, _x6) {\n            return _ref3.apply(this, arguments);\n        };\n    }());\n\n    app.patch('/channels/:id/maps/:name', function () {\n        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n            var channel, map;\n            return regeneratorRuntime.wrap(function _callee4$(_context4) {\n                while (1) {\n                    switch (_context4.prev = _context4.next) {\n                        case 0:\n                            _context4.next = 2;\n                            return Channel.findByToken(req.params.id);\n\n                        case 2:\n                            channel = _context4.sent;\n                            _context4.next = 5;\n                            return Map.findOne({\n                                _channel: channel._id,\n                                name: req.params.name\n                            });\n\n                        case 5:\n                            map = _context4.sent;\n\n                            map.keys.forEach(function (element) {\n                                var test = req.query[element];\n                                if (test) {\n                                    var arr = new (Function.prototype.bind.apply(Array, [null].concat(_toConsumableArray(test.split(',')))))();\n                                    map.persons[map.keys.indexOf(element)].pos.push(arr);\n                                    map.persons[map.keys.indexOf(element)].time.push(new Date().getTime());\n                                }\n                            });\n                            map.save().then(function () {\n                                res.send(map);\n                            });\n\n                        case 8:\n                        case 'end':\n                            return _context4.stop();\n                    }\n                }\n            }, _callee4, undefined);\n        }));\n\n        return function (_x7, _x8) {\n            return _ref4.apply(this, arguments);\n        };\n    }());\n};\n\n//# sourceURL=webpack:///./src/server/api/maps.js?");

/***/ }),

/***/ "./src/server/api/rest.js":
/*!********************************!*\
  !*** ./src/server/api/rest.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _auth = __webpack_require__(/*! ../middleware/auth */ \"./src/server/middleware/auth.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n//const User = mongoose.model('users');\nvar Channel = _mongoose2.default.model('channels');\n\nexports.default = function (app) {\n    app.post('/channels/:id/globalVar/new', function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n            var channel, data;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return Channel.findOne({\n                                token: req.params.id\n                            });\n\n                        case 2:\n                            channel = _context.sent;\n                            data = req.body.data;\n\n                            channel.var.push({\n                                name: data\n                            });\n                            channel.save().then(function () {\n                                res.send('ok');\n                            });\n\n                        case 6:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2) {\n            return _ref.apply(this, arguments);\n        };\n    }());\n    app.delete('/channels/:id/globalVar/del', function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n            var data, channel;\n            return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n                            data = req.body.data;\n                            _context2.next = 3;\n                            return Channel.findOneAndUpdate({\n                                token: req.params.id\n                            }, {\n                                $pull: {\n                                    var: {\n                                        name: data\n                                    }\n                                }\n                            });\n\n                        case 3:\n                            channel = _context2.sent;\n\n                            res.send(\"ok\");\n\n                        case 5:\n                        case 'end':\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, undefined);\n        }));\n\n        return function (_x3, _x4) {\n            return _ref2.apply(this, arguments);\n        };\n    }());\n\n    app.get('/channels/:id/globalVar/update', function () {\n        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n            var channel;\n            return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                while (1) {\n                    switch (_context3.prev = _context3.next) {\n                        case 0:\n                            _context3.next = 2;\n                            return Channel.findOne({\n                                token: req.params.id\n                            });\n\n                        case 2:\n                            channel = _context3.sent;\n\n                            channel.var.forEach(function (el) {\n                                if (req.query[el.name]) {\n                                    el.value = [];\n                                    el.value.push(req.query[el.name]);\n                                };\n                            });\n                            channel.save(function () {\n                                res.send('ok');\n                            });\n\n                        case 5:\n                        case 'end':\n                            return _context3.stop();\n                    }\n                }\n            }, _callee3, undefined);\n        }));\n\n        return function (_x5, _x6) {\n            return _ref3.apply(this, arguments);\n        };\n    }());\n    app.post('/channels/:id/template/:name', function () {\n        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n            var channel, dir;\n            return regeneratorRuntime.wrap(function _callee4$(_context4) {\n                while (1) {\n                    switch (_context4.prev = _context4.next) {\n                        case 0:\n                            _context4.next = 2;\n                            return Channel.findOne({\n                                token: req.params.id\n                            });\n\n                        case 2:\n                            channel = _context4.sent;\n                            dir = 'templates/' + channel._id + '/' + req.params.name + '.html';\n\n                            _fs2.default.writeFile(dir, req.body.template, function (err) {\n                                if (err) {\n                                    res.send('nope');\n                                } else {\n                                    res.send(\"ok\");\n                                };\n                            });\n\n                        case 5:\n                        case 'end':\n                            return _context4.stop();\n                    }\n                }\n            }, _callee4, undefined);\n        }));\n\n        return function (_x7, _x8) {\n            return _ref4.apply(this, arguments);\n        };\n    }());\n\n    app.get('/templates/:id/:name', function () {\n        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n            var channel;\n            return regeneratorRuntime.wrap(function _callee5$(_context5) {\n                while (1) {\n                    switch (_context5.prev = _context5.next) {\n                        case 0:\n                            _context5.next = 2;\n                            return Channel.findByToken(req.params.id);\n\n                        case 2:\n                            channel = _context5.sent;\n\n\n                            if (!channel) {\n                                res.status(404).send('invalid channel');\n                            }\n                            res.sendFile(__dirname + ('Akhi/MERN/Grephy/templates/' + channel._id + '/' + req.params.name + '.html'));\n\n                        case 5:\n                        case 'end':\n                            return _context5.stop();\n                    }\n                }\n            }, _callee5, undefined);\n        }));\n\n        return function (_x9, _x10) {\n            return _ref5.apply(this, arguments);\n        };\n    }());\n\n    app.post('/channel/:id/videoScreen/add', function () {\n        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {\n            var name, channel;\n            return regeneratorRuntime.wrap(function _callee6$(_context6) {\n                while (1) {\n                    switch (_context6.prev = _context6.next) {\n                        case 0:\n                            name = req.body.name;\n                            _context6.next = 3;\n                            return Channel.findByToken(req.params.id);\n\n                        case 3:\n                            channel = _context6.sent;\n\n                            if (!channel) {\n                                res.status(404).send('invalid channel');\n                            }\n                            channel.videos.push({\n                                name: name\n                            });\n                            channel.save().then(function () {\n                                res.send('ok');\n                            });\n\n                        case 7:\n                        case 'end':\n                            return _context6.stop();\n                    }\n                }\n            }, _callee6, undefined);\n        }));\n\n        return function (_x11, _x12) {\n            return _ref6.apply(this, arguments);\n        };\n    }());\n\n    app.delete('/channel/:id/videoScreen/del', function () {\n        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {\n            var name, channel;\n            return regeneratorRuntime.wrap(function _callee7$(_context7) {\n                while (1) {\n                    switch (_context7.prev = _context7.next) {\n                        case 0:\n                            name = req.body.name;\n                            _context7.next = 3;\n                            return Channel.findOneAndUpdate({\n                                token: req.params.id\n                            }, {\n                                $pull: {\n                                    videos: {\n                                        name: name\n                                    }\n                                }\n                            });\n\n                        case 3:\n                            channel = _context7.sent;\n\n                            res.send(\"ok\");\n\n                        case 5:\n                        case 'end':\n                            return _context7.stop();\n                    }\n                }\n            }, _callee7, undefined);\n        }));\n\n        return function (_x13, _x14) {\n            return _ref7.apply(this, arguments);\n        };\n    }());\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/server/api/rest.js?");

/***/ }),

/***/ "./src/server/class/roomMates.js":
/*!***************************************!*\
  !*** ./src/server/class/roomMates.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar users = function () {\n    function users() {\n        _classCallCheck(this, users);\n\n        this.users = [];\n    }\n\n    _createClass(users, [{\n        key: \"addUser\",\n        value: function addUser(id, name, room) {\n            var user = { id: id, name: name, room: room };\n            this.users.push(user);\n            return user;\n        }\n    }, {\n        key: \"removerUser\",\n        value: function removerUser(id) {\n            var user = this.getUser(id);\n            if (user) {\n                this.users = this.users.filter(function (user) {\n                    return user.id != id;\n                });\n            }\n            return user;\n        }\n    }, {\n        key: \"getUser\",\n        value: function getUser(id) {\n            return this.users.find(function (user) {\n                return user.id === id;\n            });\n        }\n    }]);\n\n    return users;\n}();\n\nexports.default = users;\n\n//# sourceURL=webpack:///./src/server/class/roomMates.js?");

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

eval("module.exports = {\"test\":{\"PORT\":3000,\"GOOGLE_CLIENT_ID\":\"1096404666312-gqijna2qt5er1ismmgbs31s4tnhc2jjs.apps.googleusercontent.com\",\"GOOGLE_CLIENT_SEC\":\"4bf5S7mEgm90lWLH9sX_qYI_\",\"FB_CLIENT_ID\":\"2283628345192091\",\"FB_CLIENT_SEC\":\"a1af74c06f7ba3be00ad6c43391bf8ab\",\"GITHUB_CLIENT_ID\":\"efa76974e60bd6bd496f\",\"GITHUB_CLIENT_SEC\":\"522b017c4f71940a4d95b9a2b7759200af474132\",\"MONGODB_URI\":\"mongodb://localhost:27017/GrephyTest\"},\"development\":{\"PORT\":3000,\"GOOGLE_CLIENT_ID\":\"1096404666312-gqijna2qt5er1ismmgbs31s4tnhc2jjs.apps.googleusercontent.com\",\"GOOGLE_CLIENT_SEC\":\"4bf5S7mEgm90lWLH9sX_qYI_\",\"FB_CLIENT_ID\":\"2283628345192091\",\"FB_CLIENT_SEC\":\"a1af74c06f7ba3be00ad6c43391bf8ab\",\"GITHUB_CLIENT_ID\":\"efa76974e60bd6bd496f\",\"GITHUB_CLIENT_SEC\":\"522b017c4f71940a4d95b9a2b7759200af474132\",\"NODE_TLS_REJECT_UNAUTHORIZED\":\"0\",\"TWITTER_CLIENT_ID\":\"kADLvsYdRvZM1qdsMuBfimAtY\",\"TWITTER_CLIENT_SEC\":\"SgyuxuWqdBrZuTtAiSRsd03sMVxfTUX1B1c62YHlPUWmQJd8SB\",\"MONGODB_URI\":\"mongodb://localhost:27017/Grephy\",\"COOKIE_ENCRYPT_KEY1\":\"GrEPhYiSaNiOTPltfo+_)rm127860xcvqweerty\",\"COOKIE_ENCRYPT_KEY2\":\"GrEPhYDASDAiSFoRsTUDENTS127ADAS423426242rty\",\"JWT_SECRET\":\"GR@phY1.09sTD656iOTc98\",\"SENDGRID_SEC\":\"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\"}};\n\n//# sourceURL=webpack:///./src/server/config/config.json?");

/***/ }),

/***/ "./src/server/db/models/channel.js":
/*!*****************************************!*\
  !*** ./src/server/db/models/channel.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar channelSchema = new _mongoose2.default.Schema({\n    name: {\n        type: String,\n        required: true,\n        trim: true,\n        minlength: 1\n    },\n    description: {\n        type: String,\n        required: true,\n        trim: true,\n        minlength: 1\n    },\n    _user: {\n        type: _mongoose2.default.Schema.Types.ObjectId,\n        ref: 'User'\n    },\n    token: {\n        type: String\n    },\n    var: [{\n        name: String,\n        value: Array\n    }],\n    templates: [{ name: { type: String, trim: true, unique: true } }],\n    videos: [{ name: { type: String, trim: true, unique: true } }]\n});\n\nchannelSchema.methods.getChannelToken = function () {\n    var channel = this;\n    var token = _jsonwebtoken2.default.sign({\n        id: channel._id.toHexString()\n    }, process.env.JWT_SECRET).toString();\n    channel.token = token;\n    return channel.save().then(function () {\n        return token;\n    });\n};\n\nchannelSchema.statics.findByToken = function (token) {\n    var channel = this;\n    var decode = void 0;\n    try {\n        decode = _jsonwebtoken2.default.verify(token, process.env.JWT_SECRET);\n    } catch (e) {\n        return Promise.reject();\n    }\n    return channel.findOne({\n        '_id': decode.id\n    });\n};\n_mongoose2.default.model('channels', channelSchema);\n\n//# sourceURL=webpack:///./src/server/db/models/channel.js?");

/***/ }),

/***/ "./src/server/db/models/field.js":
/*!***************************************!*\
  !*** ./src/server/db/models/field.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar graphSchema = _mongoose2.default.Schema({\n    _channel: {\n        type: _mongoose2.default.Schema.Types.ObjectId,\n        ref: 'Channel',\n        select: false\n    },\n    email: {\n        type: String,\n        trim: true\n    },\n    name: {\n        type: String,\n        required: true,\n        trim: true,\n        minlength: 1\n    },\n    count: {\n        type: Number,\n        default: 0,\n        select: false\n    },\n    yAxis: {\n        type: String,\n        required: true,\n        trim: true,\n        minlength: 1\n    },\n    xAxis: {\n        type: String,\n        trim: true,\n        minlength: 1,\n        default: \"Time\"\n    },\n    upperLimit: {\n        type: Number,\n        default: null\n    },\n    lowerLimit: {\n        type: Number,\n        default: null\n    },\n    data: { name: [String], values: Array }\n});\n\n_mongoose2.default.model('graphs', graphSchema);\n\n//# sourceURL=webpack:///./src/server/db/models/field.js?");

/***/ }),

/***/ "./src/server/db/models/maps.js":
/*!**************************************!*\
  !*** ./src/server/db/models/maps.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapSchema = _mongoose2.default.Schema({\n    _channel: {\n        type: _mongoose2.default.Schema.Types.ObjectId,\n        ref: 'Channel',\n        select: false\n    },\n    email: {\n        type: String,\n        trim: true,\n        default: null\n    },\n    name: {\n        type: String,\n        required: true,\n        trim: true,\n        minlength: 1\n    },\n    keys: [String],\n    persons: [{ name: String, pos: [[Number, Number]], time: [Number] }]\n});\n\n_mongoose2.default.model('maps', mapSchema);\n\n//# sourceURL=webpack:///./src/server/db/models/maps.js?");

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

/***/ "./src/server/services/Mailer.js":
/*!***************************************!*\
  !*** ./src/server/services/Mailer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _sendgrid = __webpack_require__(/*! sendgrid */ \"sendgrid\");\n\nvar _sendgrid2 = _interopRequireDefault(_sendgrid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar helper = _sendgrid2.default.mail;\n\nvar Mailer = function (_helper$Mail) {\n    _inherits(Mailer, _helper$Mail);\n\n    function Mailer(_ref, content) {\n        var email = _ref.email,\n            name = _ref.name;\n\n        _classCallCheck(this, Mailer);\n\n        var _this = _possibleConstructorReturn(this, (Mailer.__proto__ || Object.getPrototypeOf(Mailer)).call(this));\n\n        _this.sgApi = (0, _sendgrid2.default)(process.env.SENDGRID_SEC);\n\n        _this.from_email = new helper.Email('no-reply@grephy.com');\n        _this.subject = 'Grephy:' + name + ' Notification';\n        _this.body = new helper.Content('text/html', content);\n        _this.recipients = new helper.Email(email);\n\n        var personalise = new helper.Personalization();\n        personalise.addTo(_this.recipients);\n        _this.addPersonalization(personalise);\n\n        _this.addContent(_this.body);\n        return _this;\n    }\n\n    _createClass(Mailer, [{\n        key: 'send',\n        value: function () {\n            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n                var req, res;\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                        switch (_context.prev = _context.next) {\n                            case 0:\n                                req = this.sgApi.emptyRequest({\n                                    method: 'POST',\n                                    path: '/v3/mail/send',\n                                    body: this.toJSON()\n                                });\n                                res = this.sgApi.API(req);\n                                return _context.abrupt('return', res);\n\n                            case 3:\n                            case 'end':\n                                return _context.stop();\n                        }\n                    }\n                }, _callee, this);\n            }));\n\n            function send() {\n                return _ref2.apply(this, arguments);\n            }\n\n            return send;\n        }()\n    }]);\n\n    return Mailer;\n}(helper.Mail);\n\nexports.default = Mailer;\n\n//# sourceURL=webpack:///./src/server/services/Mailer.js?");

/***/ }),

/***/ "./src/server/services/emailTemplate.js":
/*!**********************************************!*\
  !*** ./src/server/services/emailTemplate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (value, fieldName, channelName) {\n    return \"\\n    <html>\\n        <body>\\n        <h3>Hi! Your field \" + fieldName + \" of channel \" + channelName + \" has crossed limits </h3>\\n        <h4>Data</h4>\\n        <ul style=\\\"list-style:none;\\\">\" + value.map(function (el) {\n        return \"\\n            <li>\\n                \" + el.name + \":\" + el.value + \"\\n            </li>\\n        \";\n    }) + \"</ul>\\n        </body>\\n    </html>\\n    \";\n};\n\n//# sourceURL=webpack:///./src/server/services/emailTemplate.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _routes = __webpack_require__(/*! ./../../client/routes */ \"./src/client/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store) {\n    var content = (0, _server.renderToString)(_react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.path, context: {} },\n            _react2.default.createElement(\n                'div',\n                null,\n                (0, _reactRouterConfig.renderRoutes)(_routes2.default)\n            )\n        )\n    ));\n    return '<html>\\n    <head>\\n    <link rel=\"stylesheet\" href=\"http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css\"/>\\n    <link rel=\"stylesheet\" href=\"http://cdnjs.cloudflare.com/ajax/libs/codemirror/5.32.0/codemirror.min.css\"/>\\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\"/>\\n    <link rel=\"stylesheet\" href=\"/css/materialize.css\"/>\\n    <style>\\n    .leaflet-container {\\n      height: 400px;\\n      width: 80%;\\n      margin: 0 auto;\\n    }\\n  </style>\\n    </head>\\n    <body>\\n        <div id=\\'root\\'>' + content + '</div>\\n        <script>\\n        window.INITIAL_STATE=' + (0, _serializeJavascript2.default)(store.getState()) + ';\\n        </script>\\n        <script type=\\'text/javascript\\' src=\"http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js\"></script>\\n        <script src=\"/js/materialize.min.js\" type=\"text/javascript\"></script>\\n        <script src=\"/bundle.js\"></script>\\n    </body>\\n    </html>';\n};\n\n//# sourceURL=webpack:///./src/server/utils/renderer.js?");

/***/ }),

/***/ "./src/server/webSocketConfig/socketConfig.js":
/*!****************************************************!*\
  !*** ./src/server/webSocketConfig/socketConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _roomMates = __webpack_require__(/*! ./../class/roomMates */ \"./src/server/class/roomMates.js\");\n\nvar _roomMates2 = _interopRequireDefault(_roomMates);\n\nvar _Mailer = __webpack_require__(/*! ./../services/Mailer */ \"./src/server/services/Mailer.js\");\n\nvar _Mailer2 = _interopRequireDefault(_Mailer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n//class for socket-feeds \n\n//email config\n\n\n//database models\nvar Channel = _mongoose2.default.model('channels');\nvar Graph = _mongoose2.default.model('graphs');\nvar Map = _mongoose2.default.model('maps');\nvar user = new _roomMates2.default();\n\nexports.default = function (io) {\n    //need to make connection secure and proper changes to data \n    io.use(function (socket, next) {\n        //socket.handshake && socket.request\n        next();\n    });\n\n    io.on('connection', function (socket) {\n        //to join a channel section\n        //adds into a room with the channel id for communication\n        socket.on('join', function () {\n            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token, callback) {\n                var channel;\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                        switch (_context.prev = _context.next) {\n                            case 0:\n                                _context.next = 2;\n                                return Channel.findByToken(token);\n\n                            case 2:\n                                channel = _context.sent;\n\n                                if (!channel) {\n                                    callback(\"Invalid channel token\");\n                                }\n                                socket.join(channel._id);\n                                user.removerUser(socket.id);\n                                user.addUser(socket.id, channel._id);\n                                callback(null);\n\n                            case 8:\n                            case 'end':\n                                return _context.stop();\n                        }\n                    }\n                }, _callee, undefined);\n            }));\n\n            return function (_x, _x2) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n\n        //configuration for socket feeds \n        socket.on('msgCenter', function () {\n            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data, callback) {\n                var channel;\n                return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                    while (1) {\n                        switch (_context2.prev = _context2.next) {\n                            case 0:\n                                _context2.next = 2;\n                                return Channel.findByToken(data.token);\n\n                            case 2:\n                                channel = _context2.sent;\n\n                                if (!channel) {\n                                    callback('Invalid channel token');\n                                }\n                                delete data['token'];\n                                socket.broadcast.to(channel._id).emit('newMsg', data);\n\n                            case 6:\n                            case 'end':\n                                return _context2.stop();\n                        }\n                    }\n                }, _callee2, undefined);\n            }));\n\n            return function (_x3, _x4) {\n                return _ref2.apply(this, arguments);\n            };\n        }());\n\n        //to update a graph in collection\n        socket.on('updateGraph', function () {\n            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data, callback) {\n                var channel, save, name, field, limitBreaker, temp, mailer, temp1, temp2;\n                return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                    while (1) {\n                        switch (_context3.prev = _context3.next) {\n                            case 0:\n                                _context3.next = 2;\n                                return Channel.findByToken(data.token);\n\n                            case 2:\n                                channel = _context3.sent;\n\n                                if (!channel) {\n                                    callback('Invalid Channel Token');\n                                }\n                                save = data.save, name = data.name;\n\n                                if (!(save || (typeof save === 'undefined' ? 'undefined' : _typeof(save)) === undefined)) {\n                                    _context3.next = 18;\n                                    break;\n                                }\n\n                                _context3.next = 8;\n                                return Graph.findOne({\n                                    _channel: channel._id,\n                                    name: name\n                                });\n\n                            case 8:\n                                field = _context3.sent;\n                                limitBreaker = new Array();\n                                temp = new Object();\n\n                                if (field.xAxis === \"Time\") {\n                                    temp[\"Time\"] = new Date().getTime();\n                                } else {\n                                    temp[field.xAxis.name] = data.xAxis;\n                                }\n                                field.data.name.forEach(function (element) {\n                                    var test = data[element];\n                                    if (field.upperLimit && field.lowerLimit && (test > field.upperLimit || test < field.lowerLimit)) {\n                                        limitBreaker.push({\n                                            name: element,\n                                            value: test\n                                        });\n                                    }!test ? temp[element] = field.data.values[field.data.length - 1][element] || null : temp[element] = test;\n                                });\n                                if (limitBreaker.length != 0) {\n                                    mailer = new _Mailer2.default(field, emailTemplate(limitBreaker, field.name, channel.name));\n\n                                    mailer.send();\n                                }\n                                field.data.values.push(temp);\n                                field.save().then(function () {\n                                    var temp2 = data.name;\n                                    io.to(channel._id).emit('updateFieldValue', {\n                                        name: temp2,\n                                        value: temp\n                                    });\n                                });\n                                _context3.next = 25;\n                                break;\n\n                            case 18:\n                                temp1 = data;\n\n                                delete temp1.save;\n                                delete temp1.token;\n                                temp1[\"Time\"] = new Date().getTime();\n                                temp2 = data.name;\n\n                                delete temp1.name;\n                                io.to(channel._id).emit('updateFieldValue', {\n                                    name: temp2,\n                                    value: temp1\n                                });\n\n                            case 25:\n                            case 'end':\n                                return _context3.stop();\n                        }\n                    }\n                }, _callee3, undefined);\n            }));\n\n            return function (_x5, _x6) {\n                return _ref3.apply(this, arguments);\n            };\n        }());\n\n        //to update map\n        socket.on('updateMap', function () {\n            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data, callback) {\n                var channel, time, save, name, map, values, temp;\n                return regeneratorRuntime.wrap(function _callee4$(_context4) {\n                    while (1) {\n                        switch (_context4.prev = _context4.next) {\n                            case 0:\n                                _context4.next = 2;\n                                return Channel.findByToken(data.token);\n\n                            case 2:\n                                channel = _context4.sent;\n\n                                if (!channel) {\n                                    callback('Invalid Channel Token');\n                                }\n                                time = new Date().getTime();\n                                save = data.save, name = data.name;\n\n                                if (!(save || (typeof save === 'undefined' ? 'undefined' : _typeof(save)) === undefined)) {\n                                    _context4.next = 16;\n                                    break;\n                                }\n\n                                _context4.next = 9;\n                                return Map.findOne({\n                                    _channel: channel._id,\n                                    name: name\n                                });\n\n                            case 9:\n                                map = _context4.sent;\n                                values = new Object();\n\n                                values[\"time\"] = time;\n                                map.keys.forEach(function (element) {\n                                    var test = data[element];\n                                    if (test && (typeof test === 'undefined' ? 'undefined' : _typeof(test)) === Array) {\n                                        var temp = map.keys.indexOf(element);\n                                        map.persons[temp].pos.push(test);\n                                        map.persons[temp].time.push(time);\n                                        values[element] = test;\n                                    }\n                                });\n                                map.save().then(function () {\n                                    io.to(channel._id).emit('updateMapValue', {\n                                        name: map.name,\n                                        value: values\n                                    });\n                                });\n                                _context4.next = 22;\n                                break;\n\n                            case 16:\n                                temp = data;\n\n                                delete temp['save'];\n                                delete temp['name'];\n                                delete temp['token'];\n                                temp['time'] = time;\n                                io.to(channel._id).emit('updateMapValue', {\n                                    name: name,\n                                    value: temp\n                                });\n\n                            case 22:\n                            case 'end':\n                                return _context4.stop();\n                        }\n                    }\n                }, _callee4, undefined);\n            }));\n\n            return function (_x7, _x8) {\n                return _ref4.apply(this, arguments);\n            };\n        }());\n\n        //video streaming in socket feeds\n        socket.on('stream', function () {\n            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(token, name, image) {\n                var channel;\n                return regeneratorRuntime.wrap(function _callee5$(_context5) {\n                    while (1) {\n                        switch (_context5.prev = _context5.next) {\n                            case 0:\n                                _context5.next = 2;\n                                return Channel.findByToken(token);\n\n                            case 2:\n                                channel = _context5.sent;\n\n                                if (channel) {\n                                    io.to(channel._id).emit('streamVideo', image);\n                                }\n\n                            case 4:\n                            case 'end':\n                                return _context5.stop();\n                        }\n                    }\n                }, _callee5, undefined);\n            }));\n\n            return function (_x9, _x10, _x11) {\n                return _ref5.apply(this, arguments);\n            };\n        }());\n    });\n};\n\n//# sourceURL=webpack:///./src/server/webSocketConfig/socketConfig.js?");

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

/***/ "codemirror/mode/css/css":
/*!******************************************!*\
  !*** external "codemirror/mode/css/css" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"codemirror/mode/css/css\");\n\n//# sourceURL=webpack:///external_%22codemirror/mode/css/css%22?");

/***/ }),

/***/ "codemirror/mode/htmlmixed/htmlmixed":
/*!******************************************************!*\
  !*** external "codemirror/mode/htmlmixed/htmlmixed" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"codemirror/mode/htmlmixed/htmlmixed\");\n\n//# sourceURL=webpack:///external_%22codemirror/mode/htmlmixed/htmlmixed%22?");

/***/ }),

/***/ "codemirror/mode/javascript/javascript":
/*!********************************************************!*\
  !*** external "codemirror/mode/javascript/javascript" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"codemirror/mode/javascript/javascript\");\n\n//# sourceURL=webpack:///external_%22codemirror/mode/javascript/javascript%22?");

/***/ }),

/***/ "codemirror/theme/material.css":
/*!************************************************!*\
  !*** external "codemirror/theme/material.css" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"codemirror/theme/material.css\");\n\n//# sourceURL=webpack:///external_%22codemirror/theme/material.css%22?");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

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

/***/ "react-codemirror2":
/*!************************************!*\
  !*** external "react-codemirror2" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-codemirror2\");\n\n//# sourceURL=webpack:///external_%22react-codemirror2%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-leaflet-universal":
/*!******************************************!*\
  !*** external "react-leaflet-universal" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-leaflet-universal\");\n\n//# sourceURL=webpack:///external_%22react-leaflet-universal%22?");

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

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"recharts\");\n\n//# sourceURL=webpack:///external_%22recharts%22?");

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

/***/ "sendgrid":
/*!***************************!*\
  !*** external "sendgrid" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sendgrid\");\n\n//# sourceURL=webpack:///external_%22sendgrid%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

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