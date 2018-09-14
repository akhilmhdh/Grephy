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

/***/ "./src/client/components/App.js":
/*!**************************************!*\
  !*** ./src/client/components/App.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        ' ',\n        _react2.default.createElement(\n            'h1',\n            null,\n            ' Grephy Loading!!! '\n        )\n    );\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/client/components/App.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./server/config/config.js */ \"./src/server/config/config.js\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _renderer = __webpack_require__(/*! ./server/utils/renderer */ \"./src/server/utils/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _google = __webpack_require__(/*! ./server/utils/authRoutes/google */ \"./src/server/utils/authRoutes/google.js\");\n\nvar _google2 = _interopRequireDefault(_google);\n\nvar _fb = __webpack_require__(/*! ./server/utils/authRoutes/fb */ \"./src/server/utils/authRoutes/fb.js\");\n\nvar _fb2 = _interopRequireDefault(_fb);\n\nvar _github = __webpack_require__(/*! ./server/utils/authRoutes/github */ \"./src/server/utils/authRoutes/github.js\");\n\nvar _github2 = _interopRequireDefault(_github);\n\n__webpack_require__(/*! ./server/services/passport_google */ \"./src/server/services/passport_google.js\");\n\n__webpack_require__(/*! ./server/services/passport_facebook */ \"./src/server/services/passport_facebook.js\");\n\nvar _githubAuth = __webpack_require__(/*! ./server/services/githubAuth */ \"./src/server/services/githubAuth.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//google authentication system\n\n//ssh rendering template and static route\nvar app = (0, _express2.default)();\n\napp.use(_express2.default.static(\"public\"));\n(0, _google2.default)(app);\n(0, _fb2.default)(app);\n(0, _github2.default)(app, _githubAuth.auth_url);\n\napp.get(\"*\", function (req, res) {\n  res.send((0, _renderer2.default)());\n});\n\napp.listen(process.env.PORT, function () {\n  console.log(\"localhost at port:\" + process.env.PORT);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

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

eval("module.exports = {\"test\":{\"PORT\":3000,\"GOOGLE_CLIENT_ID\":\"1096404666312-gqijna2qt5er1ismmgbs31s4tnhc2jjs.apps.googleusercontent.com\",\"GOOGLE_CLIENT_SEC\":\"4bf5S7mEgm90lWLH9sX_qYI_\",\"FB_CLIENT_ID\":\"2283628345192091\",\"FB_CLIENT_SEC\":\"a1af74c06f7ba3be00ad6c43391bf8ab\",\"GITHUB_CLIENT_ID\":\"efa76974e60bd6bd496f\",\"GITHUB_CLIENT_SEC\":\"522b017c4f71940a4d95b9a2b7759200af474132\"},\"development\":{\"PORT\":3000,\"GOOGLE_CLIENT_ID\":\"1096404666312-gqijna2qt5er1ismmgbs31s4tnhc2jjs.apps.googleusercontent.com\",\"GOOGLE_CLIENT_SEC\":\"4bf5S7mEgm90lWLH9sX_qYI_\",\"FB_CLIENT_ID\":\"2283628345192091\",\"FB_CLIENT_SEC\":\"a1af74c06f7ba3be00ad6c43391bf8ab\",\"GITHUB_CLIENT_ID\":\"efa76974e60bd6bd496f\",\"GITHUB_CLIENT_SEC\":\"522b017c4f71940a4d95b9a2b7759200af474132\",\"NODE_TLS_REJECT_UNAUTHORIZED\":\"0\",\"TWITTER_CLIENT_ID\":\"kADLvsYdRvZM1qdsMuBfimAtY\",\"TWITTER_CLIENT_SEC\":\"SgyuxuWqdBrZuTtAiSRsd03sMVxfTUX1B1c62YHlPUWmQJd8SB\"}};\n\n//# sourceURL=webpack:///./src/server/config/config.json?");

/***/ }),

/***/ "./src/server/services/githubAuth.js":
/*!*******************************************!*\
  !*** ./src/server/services/githubAuth.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.auth_url = undefined;\n\nvar _octonode = __webpack_require__(/*! octonode */ \"octonode\");\n\nvar _octonode2 = _interopRequireDefault(_octonode);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar auth_url = exports.auth_url = _octonode2.default.auth.config({\n    id: process.env.GITHUB_CLIENT_ID,\n    secret: process.env.GITHUB_CLIENT_SEC\n}).login(['read:user']); //github v3 authentication using octonode\n\n//# sourceURL=webpack:///./src/server/services/githubAuth.js?");

/***/ }),

/***/ "./src/server/services/passport_facebook.js":
/*!**************************************************!*\
  !*** ./src/server/services/passport_facebook.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportFacebook = __webpack_require__(/*! passport-facebook */ \"passport-facebook\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//authentication handled with passport for fb\n_passport2.default.use(new _passportFacebook.Strategy({\n    clientID: process.env.FB_CLIENT_ID,\n    clientSecret: process.env.FB_CLIENT_SEC,\n    callbackURL: '/auth/facebook/callback'\n}, function (accessToken, refreshToken, profile, done) {\n    console.log('profile:' + JSON.stringify(profile, null, 2));\n}));\n\n//# sourceURL=webpack:///./src/server/services/passport_facebook.js?");

/***/ }),

/***/ "./src/server/services/passport_google.js":
/*!************************************************!*\
  !*** ./src/server/services/passport_google.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportGoogleOauth = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//authentication handled with passport for google\n_passport2.default.use(new _passportGoogleOauth.Strategy({\n    clientID: process.env.GOOGLE_CLIENT_ID,\n    clientSecret: process.env.GOOGLE_CLIENT_SEC,\n    callbackURL: '/auth/google/callback'\n}, function (accessToken, refreshToken, profile, done) {\n    console.log('profile:' + JSON.stringify(profile, null, 2));\n}));\n\n//# sourceURL=webpack:///./src/server/services/passport_google.js?");

/***/ }),

/***/ "./src/server/utils/authRoutes/fb.js":
/*!*******************************************!*\
  !*** ./src/server/utils/authRoutes/fb.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (app) {\n    app.get('/auth/facebook', _passport2.default.authenticate('facebook'));\n\n    app.get('/auth/facebook/callback', _passport2.default.authenticate('facebook'));\n};\n\n//# sourceURL=webpack:///./src/server/utils/authRoutes/fb.js?");

/***/ }),

/***/ "./src/server/utils/authRoutes/github.js":
/*!***********************************************!*\
  !*** ./src/server/utils/authRoutes/github.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _octonode = __webpack_require__(/*! octonode */ \"octonode\");\n\nvar _octonode2 = _interopRequireDefault(_octonode);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (app, auth_url) {\n    app.get('/auth/github', function (req, res) {\n        res.redirect(auth_url);\n    });\n\n    app.get('/auth/github/callback', function (req, res) {\n        _octonode2.default.auth.login(req.query.code, function (err, token) {\n            var ghme = _octonode2.default.client(token).me();\n            ghme.info(function (err, data, header) {\n                console.log(data);\n            });\n        });\n    });\n};\n\n//# sourceURL=webpack:///./src/server/utils/authRoutes/github.js?");

/***/ }),

/***/ "./src/server/utils/authRoutes/google.js":
/*!***********************************************!*\
  !*** ./src/server/utils/authRoutes/google.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (app) {\n\n    app.get('/auth/google', _passport2.default.authenticate('google', {\n        scope: ['profile', 'email']\n    }));\n\n    app.get('/auth/google/callback', _passport2.default.authenticate('google'));\n};\n\n//# sourceURL=webpack:///./src/server/utils/authRoutes/google.js?");

/***/ }),

/***/ "./src/server/utils/renderer.js":
/*!**************************************!*\
  !*** ./src/server/utils/renderer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _App = __webpack_require__(/*! ./../../client/components/App */ \"./src/client/components/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n    var content = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));\n    return '<html>\\n    <head></head>\\n    <body>\\n        <div id=\\'root\\'>' + content + '</div>\\n    <script src=\"./bundle.js\"></script>\\n    </body>\\n    </html>';\n};\n\n//# sourceURL=webpack:///./src/server/utils/renderer.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "octonode":
/*!***************************!*\
  !*** external "octonode" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"octonode\");\n\n//# sourceURL=webpack:///external_%22octonode%22?");

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

/***/ })

/******/ });