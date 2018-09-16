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

/***/ "./node_modules/buffer-equal-constant-time/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/buffer-equal-constant-time/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*jshint node:true */\n\nvar Buffer = __webpack_require__(/*! buffer */ \"buffer\").Buffer; // browserify\nvar SlowBuffer = __webpack_require__(/*! buffer */ \"buffer\").SlowBuffer;\n\nmodule.exports = bufferEq;\n\nfunction bufferEq(a, b) {\n\n  // shortcutting on type is necessary for correctness\n  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {\n    return false;\n  }\n\n  // buffer sizes should be well-known information, so despite this\n  // shortcutting, it doesn't leak any information about the *contents* of the\n  // buffers.\n  if (a.length !== b.length) {\n    return false;\n  }\n\n  var c = 0;\n  for (var i = 0; i < a.length; i++) {\n    /*jshint bitwise:false */\n    c |= a[i] ^ b[i]; // XOR\n  }\n  return c === 0;\n}\n\nbufferEq.install = function() {\n  Buffer.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {\n    return bufferEq(this, that);\n  };\n};\n\nvar origBufEqual = Buffer.prototype.equal;\nvar origSlowBufEqual = SlowBuffer.prototype.equal;\nbufferEq.restore = function() {\n  Buffer.prototype.equal = origBufEqual;\n  SlowBuffer.prototype.equal = origSlowBufEqual;\n};\n\n\n//# sourceURL=webpack:///./node_modules/buffer-equal-constant-time/index.js?");

/***/ }),

/***/ "./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"safe-buffer\").Buffer;\n\nvar getParamBytesForAlg = __webpack_require__(/*! ./param-bytes-for-alg */ \"./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js\");\n\nvar MAX_OCTET = 0x80,\n\tCLASS_UNIVERSAL = 0,\n\tPRIMITIVE_BIT = 0x20,\n\tTAG_SEQ = 0x10,\n\tTAG_INT = 0x02,\n\tENCODED_TAG_SEQ = (TAG_SEQ | PRIMITIVE_BIT) | (CLASS_UNIVERSAL << 6),\n\tENCODED_TAG_INT = TAG_INT | (CLASS_UNIVERSAL << 6);\n\nfunction base64Url(base64) {\n\treturn base64\n\t\t.replace(/=/g, '')\n\t\t.replace(/\\+/g, '-')\n\t\t.replace(/\\//g, '_');\n}\n\nfunction signatureAsBuffer(signature) {\n\tif (Buffer.isBuffer(signature)) {\n\t\treturn signature;\n\t} else if ('string' === typeof signature) {\n\t\treturn Buffer.from(signature, 'base64');\n\t}\n\n\tthrow new TypeError('ECDSA signature must be a Base64 string or a Buffer');\n}\n\nfunction derToJose(signature, alg) {\n\tsignature = signatureAsBuffer(signature);\n\tvar paramBytes = getParamBytesForAlg(alg);\n\n\t// the DER encoded param should at most be the param size, plus a padding\n\t// zero, since due to being a signed integer\n\tvar maxEncodedParamLength = paramBytes + 1;\n\n\tvar inputLength = signature.length;\n\n\tvar offset = 0;\n\tif (signature[offset++] !== ENCODED_TAG_SEQ) {\n\t\tthrow new Error('Could not find expected \"seq\"');\n\t}\n\n\tvar seqLength = signature[offset++];\n\tif (seqLength === (MAX_OCTET | 1)) {\n\t\tseqLength = signature[offset++];\n\t}\n\n\tif (inputLength - offset < seqLength) {\n\t\tthrow new Error('\"seq\" specified length of \"' + seqLength + '\", only \"' + (inputLength - offset) + '\" remaining');\n\t}\n\n\tif (signature[offset++] !== ENCODED_TAG_INT) {\n\t\tthrow new Error('Could not find expected \"int\" for \"r\"');\n\t}\n\n\tvar rLength = signature[offset++];\n\n\tif (inputLength - offset - 2 < rLength) {\n\t\tthrow new Error('\"r\" specified length of \"' + rLength + '\", only \"' + (inputLength - offset - 2) + '\" available');\n\t}\n\n\tif (maxEncodedParamLength < rLength) {\n\t\tthrow new Error('\"r\" specified length of \"' + rLength + '\", max of \"' + maxEncodedParamLength + '\" is acceptable');\n\t}\n\n\tvar rOffset = offset;\n\toffset += rLength;\n\n\tif (signature[offset++] !== ENCODED_TAG_INT) {\n\t\tthrow new Error('Could not find expected \"int\" for \"s\"');\n\t}\n\n\tvar sLength = signature[offset++];\n\n\tif (inputLength - offset !== sLength) {\n\t\tthrow new Error('\"s\" specified length of \"' + sLength + '\", expected \"' + (inputLength - offset) + '\"');\n\t}\n\n\tif (maxEncodedParamLength < sLength) {\n\t\tthrow new Error('\"s\" specified length of \"' + sLength + '\", max of \"' + maxEncodedParamLength + '\" is acceptable');\n\t}\n\n\tvar sOffset = offset;\n\toffset += sLength;\n\n\tif (offset !== inputLength) {\n\t\tthrow new Error('Expected to consume entire buffer, but \"' + (inputLength - offset) + '\" bytes remain');\n\t}\n\n\tvar rPadding = paramBytes - rLength,\n\t\tsPadding = paramBytes - sLength;\n\n\tvar dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);\n\n\tfor (offset = 0; offset < rPadding; ++offset) {\n\t\tdst[offset] = 0;\n\t}\n\tsignature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);\n\n\toffset = paramBytes;\n\n\tfor (var o = offset; offset < o + sPadding; ++offset) {\n\t\tdst[offset] = 0;\n\t}\n\tsignature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);\n\n\tdst = dst.toString('base64');\n\tdst = base64Url(dst);\n\n\treturn dst;\n}\n\nfunction countPadding(buf, start, stop) {\n\tvar padding = 0;\n\twhile (start + padding < stop && buf[start + padding] === 0) {\n\t\t++padding;\n\t}\n\n\tvar needsSign = buf[start + padding] >= MAX_OCTET;\n\tif (needsSign) {\n\t\t--padding;\n\t}\n\n\treturn padding;\n}\n\nfunction joseToDer(signature, alg) {\n\tsignature = signatureAsBuffer(signature);\n\tvar paramBytes = getParamBytesForAlg(alg);\n\n\tvar signatureBytes = signature.length;\n\tif (signatureBytes !== paramBytes * 2) {\n\t\tthrow new TypeError('\"' + alg + '\" signatures must be \"' + paramBytes * 2 + '\" bytes, saw \"' + signatureBytes + '\"');\n\t}\n\n\tvar rPadding = countPadding(signature, 0, paramBytes);\n\tvar sPadding = countPadding(signature, paramBytes, signature.length);\n\tvar rLength = paramBytes - rPadding;\n\tvar sLength = paramBytes - sPadding;\n\n\tvar rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;\n\n\tvar shortLength = rsBytes < MAX_OCTET;\n\n\tvar dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);\n\n\tvar offset = 0;\n\tdst[offset++] = ENCODED_TAG_SEQ;\n\tif (shortLength) {\n\t\t// Bit 8 has value \"0\"\n\t\t// bits 7-1 give the length.\n\t\tdst[offset++] = rsBytes;\n\t} else {\n\t\t// Bit 8 of first octet has value \"1\"\n\t\t// bits 7-1 give the number of additional length octets.\n\t\tdst[offset++] = MAX_OCTET\t| 1;\n\t\t// length, base 256\n\t\tdst[offset++] = rsBytes & 0xff;\n\t}\n\tdst[offset++] = ENCODED_TAG_INT;\n\tdst[offset++] = rLength;\n\tif (rPadding < 0) {\n\t\tdst[offset++] = 0;\n\t\toffset += signature.copy(dst, offset, 0, paramBytes);\n\t} else {\n\t\toffset += signature.copy(dst, offset, rPadding, paramBytes);\n\t}\n\tdst[offset++] = ENCODED_TAG_INT;\n\tdst[offset++] = sLength;\n\tif (sPadding < 0) {\n\t\tdst[offset++] = 0;\n\t\tsignature.copy(dst, offset, paramBytes);\n\t} else {\n\t\tsignature.copy(dst, offset, paramBytes + sPadding);\n\t}\n\n\treturn dst;\n}\n\nmodule.exports = {\n\tderToJose: derToJose,\n\tjoseToDer: joseToDer\n};\n\n\n//# sourceURL=webpack:///./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js?");

/***/ }),

/***/ "./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction getParamSize(keySize) {\n\tvar result = ((keySize / 8) | 0) + (keySize % 8 === 0 ? 0 : 1);\n\treturn result;\n}\n\nvar paramBytesForAlg = {\n\tES256: getParamSize(256),\n\tES384: getParamSize(384),\n\tES512: getParamSize(521)\n};\n\nfunction getParamBytesForAlg(alg) {\n\tvar paramBytes = paramBytesForAlg[alg];\n\tif (paramBytes) {\n\t\treturn paramBytes;\n\t}\n\n\tthrow new Error('Unknown algorithm \"' + alg + '\"');\n}\n\nmodule.exports = getParamBytesForAlg;\n\n\n//# sourceURL=webpack:///./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/decode.js":
/*!*********************************************!*\
  !*** ./node_modules/jsonwebtoken/decode.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var jws = __webpack_require__(/*! jws */ \"./node_modules/jws/index.js\");\n\nmodule.exports = function (jwt, options) {\n  options = options || {};\n  var decoded = jws.decode(jwt, options);\n  if (!decoded) { return null; }\n  var payload = decoded.payload;\n\n  //try parse the payload\n  if(typeof payload === 'string') {\n    try {\n      var obj = JSON.parse(payload);\n      if(obj !== null && typeof obj === 'object') {\n        payload = obj;\n      }\n    } catch (e) { }\n  }\n\n  //return header if `complete` option is enabled.  header includes claims\n  //such as `kid` and `alg` used to select the key within a JWKS needed to\n  //verify the signature\n  if (options.complete === true) {\n    return {\n      header: decoded.header,\n      payload: payload,\n      signature: decoded.signature\n    };\n  }\n  return payload;\n};\n\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/decode.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/index.js":
/*!********************************************!*\
  !*** ./node_modules/jsonwebtoken/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  decode: __webpack_require__(/*! ./decode */ \"./node_modules/jsonwebtoken/decode.js\"),\n  verify: __webpack_require__(/*! ./verify */ \"./node_modules/jsonwebtoken/verify.js\"),\n  sign: __webpack_require__(/*! ./sign */ \"./node_modules/jsonwebtoken/sign.js\"),\n  JsonWebTokenError: __webpack_require__(/*! ./lib/JsonWebTokenError */ \"./node_modules/jsonwebtoken/lib/JsonWebTokenError.js\"),\n  NotBeforeError: __webpack_require__(/*! ./lib/NotBeforeError */ \"./node_modules/jsonwebtoken/lib/NotBeforeError.js\"),\n  TokenExpiredError: __webpack_require__(/*! ./lib/TokenExpiredError */ \"./node_modules/jsonwebtoken/lib/TokenExpiredError.js\"),\n};\n\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/index.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/lib/JsonWebTokenError.js":
/*!************************************************************!*\
  !*** ./node_modules/jsonwebtoken/lib/JsonWebTokenError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var JsonWebTokenError = function (message, error) {\n  Error.call(this, message);\n  if(Error.captureStackTrace) {\n    Error.captureStackTrace(this, this.constructor);\n  }\n  this.name = 'JsonWebTokenError';\n  this.message = message;\n  if (error) this.inner = error;\n};\n\nJsonWebTokenError.prototype = Object.create(Error.prototype);\nJsonWebTokenError.prototype.constructor = JsonWebTokenError;\n\nmodule.exports = JsonWebTokenError;\n\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/lib/JsonWebTokenError.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/lib/NotBeforeError.js":
/*!*********************************************************!*\
  !*** ./node_modules/jsonwebtoken/lib/NotBeforeError.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var JsonWebTokenError = __webpack_require__(/*! ./JsonWebTokenError */ \"./node_modules/jsonwebtoken/lib/JsonWebTokenError.js\");\n\nvar NotBeforeError = function (message, date) {\n  JsonWebTokenError.call(this, message);\n  this.name = 'NotBeforeError';\n  this.date = date;\n};\n\nNotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);\n\nNotBeforeError.prototype.constructor = NotBeforeError;\n\nmodule.exports = NotBeforeError;\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/lib/NotBeforeError.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/lib/TokenExpiredError.js":
/*!************************************************************!*\
  !*** ./node_modules/jsonwebtoken/lib/TokenExpiredError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var JsonWebTokenError = __webpack_require__(/*! ./JsonWebTokenError */ \"./node_modules/jsonwebtoken/lib/JsonWebTokenError.js\");\n\nvar TokenExpiredError = function (message, expiredAt) {\n  JsonWebTokenError.call(this, message);\n  this.name = 'TokenExpiredError';\n  this.expiredAt = expiredAt;\n};\n\nTokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);\n\nTokenExpiredError.prototype.constructor = TokenExpiredError;\n\nmodule.exports = TokenExpiredError;\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/lib/TokenExpiredError.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/lib/timespan.js":
/*!***************************************************!*\
  !*** ./node_modules/jsonwebtoken/lib/timespan.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ms = __webpack_require__(/*! ms */ \"ms\");\n\nmodule.exports = function (time, iat) {\n  var timestamp = iat || Math.floor(Date.now() / 1000);\n\n  if (typeof time === 'string') {\n    var milliseconds = ms(time);\n    if (typeof milliseconds === 'undefined') {\n      return;\n    }\n    return Math.floor(timestamp + milliseconds / 1000);\n  } else if (typeof time === 'number') {\n    return timestamp + time;\n  } else {\n    return;\n  }\n\n};\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/lib/timespan.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/sign.js":
/*!*******************************************!*\
  !*** ./node_modules/jsonwebtoken/sign.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var timespan = __webpack_require__(/*! ./lib/timespan */ \"./node_modules/jsonwebtoken/lib/timespan.js\");\nvar jws = __webpack_require__(/*! jws */ \"./node_modules/jws/index.js\");\nvar includes = __webpack_require__(/*! lodash.includes */ \"./node_modules/lodash.includes/index.js\");\nvar isBoolean = __webpack_require__(/*! lodash.isboolean */ \"./node_modules/lodash.isboolean/index.js\");\nvar isInteger = __webpack_require__(/*! lodash.isinteger */ \"./node_modules/lodash.isinteger/index.js\");\nvar isNumber = __webpack_require__(/*! lodash.isnumber */ \"./node_modules/lodash.isnumber/index.js\");\nvar isPlainObject = __webpack_require__(/*! lodash.isplainobject */ \"./node_modules/lodash.isplainobject/index.js\");\nvar isString = __webpack_require__(/*! lodash.isstring */ \"./node_modules/lodash.isstring/index.js\");\nvar once = __webpack_require__(/*! lodash.once */ \"./node_modules/lodash.once/index.js\");\n\nvar sign_options_schema = {\n  expiresIn: { isValid: function(value) { return isInteger(value) || isString(value); }, message: '\"expiresIn\" should be a number of seconds or string representing a timespan' },\n  notBefore: { isValid: function(value) { return isInteger(value) || isString(value); }, message: '\"notBefore\" should be a number of seconds or string representing a timespan' },\n  audience: { isValid: function(value) { return isString(value) || Array.isArray(value); }, message: '\"audience\" must be a string or array' },\n  algorithm: { isValid: includes.bind(null, ['RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512', 'HS256', 'HS384', 'HS512', 'none']), message: '\"algorithm\" must be a valid string enum value' },\n  header: { isValid: isPlainObject, message: '\"header\" must be an object' },\n  encoding: { isValid: isString, message: '\"encoding\" must be a string' },\n  issuer: { isValid: isString, message: '\"issuer\" must be a string' },\n  subject: { isValid: isString, message: '\"subject\" must be a string' },\n  jwtid: { isValid: isString, message: '\"jwtid\" must be a string' },\n  noTimestamp: { isValid: isBoolean, message: '\"noTimestamp\" must be a boolean' },\n  keyid: { isValid: isString, message: '\"keyid\" must be a string' },\n  mutatePayload: { isValid: isBoolean, message: '\"mutatePayload\" must be a boolean' }\n};\n\nvar registered_claims_schema = {\n  iat: { isValid: isNumber, message: '\"iat\" should be a number of seconds' },\n  exp: { isValid: isNumber, message: '\"exp\" should be a number of seconds' },\n  nbf: { isValid: isNumber, message: '\"nbf\" should be a number of seconds' }\n};\n\nfunction validate(schema, allowUnknown, object, parameterName) {\n  if (!isPlainObject(object)) {\n    throw new Error('Expected \"' + parameterName + '\" to be a plain object.');\n  }\n  Object.keys(object)\n    .forEach(function(key) {\n      var validator = schema[key];\n      if (!validator) {\n        if (!allowUnknown) {\n          throw new Error('\"' + key + '\" is not allowed in \"' + parameterName + '\"');\n        }\n        return;\n      }\n      if (!validator.isValid(object[key])) {\n        throw new Error(validator.message);\n      }\n    });\n}\n\nfunction validateOptions(options) {\n  return validate(sign_options_schema, false, options, 'options');\n}\n\nfunction validatePayload(payload) {\n  return validate(registered_claims_schema, true, payload, 'payload');\n}\n\nvar options_to_payload = {\n  'audience': 'aud',\n  'issuer': 'iss',\n  'subject': 'sub',\n  'jwtid': 'jti'\n};\n\nvar options_for_objects = [\n  'expiresIn',\n  'notBefore',\n  'noTimestamp',\n  'audience',\n  'issuer',\n  'subject',\n  'jwtid',\n];\n\nmodule.exports = function (payload, secretOrPrivateKey, options, callback) {\n  if (typeof options === 'function') {\n    callback = options;\n    options = {};\n  } else {\n    options = options || {};\n  }\n\n  var isObjectPayload = typeof payload === 'object' &&\n                        !Buffer.isBuffer(payload);\n\n  var header = Object.assign({\n    alg: options.algorithm || 'HS256',\n    typ: isObjectPayload ? 'JWT' : undefined,\n    kid: options.keyid\n  }, options.header);\n\n  function failure(err) {\n    if (callback) {\n      return callback(err);\n    }\n    throw err;\n  }\n\n  if (!secretOrPrivateKey && options.algorithm !== 'none') {\n    return failure(new Error('secretOrPrivateKey must have a value'));\n  }\n\n  if (typeof payload === 'undefined') {\n    return failure(new Error('payload is required'));\n  } else if (isObjectPayload) {\n    try {\n      validatePayload(payload);\n    }\n    catch (error) {\n      return failure(error);\n    }\n    if (!options.mutatePayload) {\n      payload = Object.assign({},payload);\n    }\n  } else {\n    var invalid_options = options_for_objects.filter(function (opt) {\n      return typeof options[opt] !== 'undefined';\n    });\n\n    if (invalid_options.length > 0) {\n      return failure(new Error('invalid ' + invalid_options.join(',') + ' option for ' + (typeof payload ) + ' payload'));\n    }\n  }\n\n  if (typeof payload.exp !== 'undefined' && typeof options.expiresIn !== 'undefined') {\n    return failure(new Error('Bad \"options.expiresIn\" option the payload already has an \"exp\" property.'));\n  }\n\n  if (typeof payload.nbf !== 'undefined' && typeof options.notBefore !== 'undefined') {\n    return failure(new Error('Bad \"options.notBefore\" option the payload already has an \"nbf\" property.'));\n  }\n\n  try {\n    validateOptions(options);\n  }\n  catch (error) {\n    return failure(error);\n  }\n\n  var timestamp = payload.iat || Math.floor(Date.now() / 1000);\n\n  if (!options.noTimestamp) {\n    payload.iat = timestamp;\n  } else {\n    delete payload.iat;\n  }\n\n  if (typeof options.notBefore !== 'undefined') {\n    payload.nbf = timespan(options.notBefore, timestamp);\n    if (typeof payload.nbf === 'undefined') {\n      return failure(new Error('\"notBefore\" should be a number of seconds or string representing a timespan eg: \"1d\", \"20h\", 60'));\n    }\n  }\n\n  if (typeof options.expiresIn !== 'undefined' && typeof payload === 'object') {\n    payload.exp = timespan(options.expiresIn, timestamp);\n    if (typeof payload.exp === 'undefined') {\n      return failure(new Error('\"expiresIn\" should be a number of seconds or string representing a timespan eg: \"1d\", \"20h\", 60'));\n    }\n  }\n\n  Object.keys(options_to_payload).forEach(function (key) {\n    var claim = options_to_payload[key];\n    if (typeof options[key] !== 'undefined') {\n      if (typeof payload[claim] !== 'undefined') {\n        return failure(new Error('Bad \"options.' + key + '\" option. The payload already has an \"' + claim + '\" property.'));\n      }\n      payload[claim] = options[key];\n    }\n  });\n\n  var encoding = options.encoding || 'utf8';\n\n  if (typeof callback === 'function') {\n    callback = callback && once(callback);\n\n    jws.createSign({\n      header: header,\n      privateKey: secretOrPrivateKey,\n      payload: payload,\n      encoding: encoding\n    }).once('error', callback)\n      .once('done', function (signature) {\n        callback(null, signature);\n      });\n  } else {\n    return jws.sign({header: header, payload: payload, secret: secretOrPrivateKey, encoding: encoding});\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/sign.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/verify.js":
/*!*********************************************!*\
  !*** ./node_modules/jsonwebtoken/verify.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var JsonWebTokenError = __webpack_require__(/*! ./lib/JsonWebTokenError */ \"./node_modules/jsonwebtoken/lib/JsonWebTokenError.js\");\nvar NotBeforeError    = __webpack_require__(/*! ./lib/NotBeforeError */ \"./node_modules/jsonwebtoken/lib/NotBeforeError.js\");\nvar TokenExpiredError = __webpack_require__(/*! ./lib/TokenExpiredError */ \"./node_modules/jsonwebtoken/lib/TokenExpiredError.js\");\nvar decode            = __webpack_require__(/*! ./decode */ \"./node_modules/jsonwebtoken/decode.js\");\nvar timespan          = __webpack_require__(/*! ./lib/timespan */ \"./node_modules/jsonwebtoken/lib/timespan.js\");\nvar jws               = __webpack_require__(/*! jws */ \"./node_modules/jws/index.js\");\n\nmodule.exports = function (jwtString, secretOrPublicKey, options, callback) {\n  if ((typeof options === 'function') && !callback) {\n    callback = options;\n    options = {};\n  }\n\n  if (!options) {\n    options = {};\n  }\n\n  //clone this object since we are going to mutate it.\n  options = Object.assign({}, options);\n\n  var done;\n\n  if (callback) {\n    done = callback;\n  } else {\n    done = function(err, data) {\n      if (err) throw err;\n      return data;\n    };\n  }\n\n  if (options.clockTimestamp && typeof options.clockTimestamp !== 'number') {\n    return done(new JsonWebTokenError('clockTimestamp must be a number'));\n  }\n\n  var clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1000);\n\n  if (!jwtString){\n    return done(new JsonWebTokenError('jwt must be provided'));\n  }\n\n  if (typeof jwtString !== 'string') {\n    return done(new JsonWebTokenError('jwt must be a string'));\n  }\n\n  var parts = jwtString.split('.');\n\n  if (parts.length !== 3){\n    return done(new JsonWebTokenError('jwt malformed'));\n  }\n\n  var decodedToken;\n\n  try {\n    decodedToken = decode(jwtString, { complete: true });\n  } catch(err) {\n    return done(err);\n  }\n\n  if (!decodedToken) {\n    return done(new JsonWebTokenError('invalid token'));\n  }\n\n  var header = decodedToken.header;\n  var getSecret;\n\n  if(typeof secretOrPublicKey === 'function') {\n    if(!callback) {\n      return done(new JsonWebTokenError('verify must be called asynchronous if secret or public key is provided as a callback'));\n    }\n\n    getSecret = secretOrPublicKey;\n  }\n  else {\n    getSecret = function(header, secretCallback) {\n      return secretCallback(null, secretOrPublicKey);\n    };\n  }\n\n  return getSecret(header, function(err, secretOrPublicKey) {\n    if(err) {\n      return done(new JsonWebTokenError('error in secret or public key callback: ' + err.message));\n    }\n\n    var hasSignature = parts[2].trim() !== '';\n\n    if (!hasSignature && secretOrPublicKey){\n      return done(new JsonWebTokenError('jwt signature is required'));\n    }\n\n    if (hasSignature && !secretOrPublicKey) {\n      return done(new JsonWebTokenError('secret or public key must be provided'));\n    }\n\n    if (!hasSignature && !options.algorithms) {\n      options.algorithms = ['none'];\n    }\n\n    if (!options.algorithms) {\n      options.algorithms = ~secretOrPublicKey.toString().indexOf('BEGIN CERTIFICATE') ||\n          ~secretOrPublicKey.toString().indexOf('BEGIN PUBLIC KEY') ?\n        ['RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512'] :\n        ~secretOrPublicKey.toString().indexOf('BEGIN RSA PUBLIC KEY') ?\n          ['RS256', 'RS384', 'RS512'] :\n          ['HS256', 'HS384', 'HS512'];\n\n    }\n\n    if (!~options.algorithms.indexOf(decodedToken.header.alg)) {\n      return done(new JsonWebTokenError('invalid algorithm'));\n    }\n\n    var valid;\n\n    try {\n      valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey);\n    } catch (e) {\n      return done(e);\n    }\n\n    if (!valid) {\n      return done(new JsonWebTokenError('invalid signature'));\n    }\n\n    var payload = decodedToken.payload;\n\n    if (typeof payload.nbf !== 'undefined' && !options.ignoreNotBefore) {\n      if (typeof payload.nbf !== 'number') {\n        return done(new JsonWebTokenError('invalid nbf value'));\n      }\n      if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {\n        return done(new NotBeforeError('jwt not active', new Date(payload.nbf * 1000)));\n      }\n    }\n\n    if (typeof payload.exp !== 'undefined' && !options.ignoreExpiration) {\n      if (typeof payload.exp !== 'number') {\n        return done(new JsonWebTokenError('invalid exp value'));\n      }\n      if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {\n        return done(new TokenExpiredError('jwt expired', new Date(payload.exp * 1000)));\n      }\n    }\n\n    if (options.audience) {\n      var audiences = Array.isArray(options.audience) ? options.audience : [options.audience];\n      var target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];\n\n      var match = target.some(function (targetAudience) {\n        return audiences.some(function (audience) {\n          return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;\n        });\n      });\n\n      if (!match) {\n        return done(new JsonWebTokenError('jwt audience invalid. expected: ' + audiences.join(' or ')));\n      }\n    }\n\n    if (options.issuer) {\n      var invalid_issuer =\n              (typeof options.issuer === 'string' && payload.iss !== options.issuer) ||\n              (Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1);\n\n      if (invalid_issuer) {\n        return done(new JsonWebTokenError('jwt issuer invalid. expected: ' + options.issuer));\n      }\n    }\n\n    if (options.subject) {\n      if (payload.sub !== options.subject) {\n        return done(new JsonWebTokenError('jwt subject invalid. expected: ' + options.subject));\n      }\n    }\n\n    if (options.jwtid) {\n      if (payload.jti !== options.jwtid) {\n        return done(new JsonWebTokenError('jwt jwtid invalid. expected: ' + options.jwtid));\n      }\n    }\n\n    if (options.maxAge) {\n      if (typeof payload.iat !== 'number') {\n        return done(new JsonWebTokenError('iat required when maxAge is specified'));\n      }\n\n      var maxAgeTimestamp = timespan(options.maxAge, payload.iat);\n      if (typeof maxAgeTimestamp === 'undefined') {\n        return done(new JsonWebTokenError('\"maxAge\" should be a number of seconds or string representing a timespan eg: \"1d\", \"20h\", 60'));\n      }\n      if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {\n        return done(new TokenExpiredError('maxAge exceeded', new Date(maxAgeTimestamp * 1000)));\n      }\n    }\n\n    return done(null, payload);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/verify.js?");

/***/ }),

/***/ "./node_modules/jwa/index.js":
/*!***********************************!*\
  !*** ./node_modules/jwa/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bufferEqual = __webpack_require__(/*! buffer-equal-constant-time */ \"./node_modules/buffer-equal-constant-time/index.js\");\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"safe-buffer\").Buffer;\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\nvar formatEcdsa = __webpack_require__(/*! ecdsa-sig-formatter */ \"./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js\");\nvar util = __webpack_require__(/*! util */ \"util\");\n\nvar MSG_INVALID_ALGORITHM = '\"%s\" is not a valid algorithm.\\n  Supported algorithms are:\\n  \"HS256\", \"HS384\", \"HS512\", \"RS256\", \"RS384\", \"RS512\" and \"none\".'\nvar MSG_INVALID_SECRET = 'secret must be a string or buffer';\nvar MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer';\nvar MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object';\n\nfunction fromBase64(base64) {\n  return base64\n    .replace(/=/g, '')\n    .replace(/\\+/g, '-')\n    .replace(/\\//g, '_');\n}\n\nfunction toBase64(base64url) {\n  base64url = base64url.toString();\n\n  var padding = 4 - base64url.length % 4;\n  if (padding !== 4) {\n    for (var i = 0; i < padding; ++i) {\n      base64url += '=';\n    }\n  }\n\n  return base64url\n    .replace(/\\-/g, '+')\n    .replace(/_/g, '/');\n}\n\nfunction typeError(template) {\n  var args = [].slice.call(arguments, 1);\n  var errMsg = util.format.bind(util, template).apply(null, args);\n  return new TypeError(errMsg);\n}\n\nfunction bufferOrString(obj) {\n  return Buffer.isBuffer(obj) || typeof obj === 'string';\n}\n\nfunction normalizeInput(thing) {\n  if (!bufferOrString(thing))\n    thing = JSON.stringify(thing);\n  return thing;\n}\n\nfunction createHmacSigner(bits) {\n  return function sign(thing, secret) {\n    if (!bufferOrString(secret))\n      throw typeError(MSG_INVALID_SECRET);\n    thing = normalizeInput(thing);\n    var hmac = crypto.createHmac('sha' + bits, secret);\n    var sig = (hmac.update(thing), hmac.digest('base64'))\n    return fromBase64(sig);\n  }\n}\n\nfunction createHmacVerifier(bits) {\n  return function verify(thing, signature, secret) {\n    var computedSig = createHmacSigner(bits)(thing, secret);\n    return bufferEqual(Buffer.from(signature), Buffer.from(computedSig));\n  }\n}\n\nfunction createKeySigner(bits) {\n return function sign(thing, privateKey) {\n    if (!bufferOrString(privateKey) && !(typeof privateKey === 'object'))\n      throw typeError(MSG_INVALID_SIGNER_KEY);\n    thing = normalizeInput(thing);\n    // Even though we are specifying \"RSA\" here, this works with ECDSA\n    // keys as well.\n    var signer = crypto.createSign('RSA-SHA' + bits);\n    var sig = (signer.update(thing), signer.sign(privateKey, 'base64'));\n    return fromBase64(sig);\n  }\n}\n\nfunction createKeyVerifier(bits) {\n  return function verify(thing, signature, publicKey) {\n    if (!bufferOrString(publicKey))\n      throw typeError(MSG_INVALID_VERIFIER_KEY);\n    thing = normalizeInput(thing);\n    signature = toBase64(signature);\n    var verifier = crypto.createVerify('RSA-SHA' + bits);\n    verifier.update(thing);\n    return verifier.verify(publicKey, signature, 'base64');\n  }\n}\n\nfunction createECDSASigner(bits) {\n  var inner = createKeySigner(bits);\n  return function sign() {\n    var signature = inner.apply(null, arguments);\n    signature = formatEcdsa.derToJose(signature, 'ES' + bits);\n    return signature;\n  };\n}\n\nfunction createECDSAVerifer(bits) {\n  var inner = createKeyVerifier(bits);\n  return function verify(thing, signature, publicKey) {\n    signature = formatEcdsa.joseToDer(signature, 'ES' + bits).toString('base64');\n    var result = inner(thing, signature, publicKey);\n    return result;\n  };\n}\n\nfunction createNoneSigner() {\n  return function sign() {\n    return '';\n  }\n}\n\nfunction createNoneVerifier() {\n  return function verify(thing, signature) {\n    return signature === '';\n  }\n}\n\nmodule.exports = function jwa(algorithm) {\n  var signerFactories = {\n    hs: createHmacSigner,\n    rs: createKeySigner,\n    es: createECDSASigner,\n    none: createNoneSigner,\n  }\n  var verifierFactories = {\n    hs: createHmacVerifier,\n    rs: createKeyVerifier,\n    es: createECDSAVerifer,\n    none: createNoneVerifier,\n  }\n  var match = algorithm.match(/^(RS|ES|HS)(256|384|512)$|^(none)$/i);\n  if (!match)\n    throw typeError(MSG_INVALID_ALGORITHM, algorithm);\n  var algo = (match[1] || match[3]).toLowerCase();\n  var bits = match[2];\n\n  return {\n    sign: signerFactories[algo](bits),\n    verify: verifierFactories[algo](bits),\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/jwa/index.js?");

/***/ }),

/***/ "./node_modules/jws/index.js":
/*!***********************************!*\
  !*** ./node_modules/jws/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*global exports*/\nvar SignStream = __webpack_require__(/*! ./lib/sign-stream */ \"./node_modules/jws/lib/sign-stream.js\");\nvar VerifyStream = __webpack_require__(/*! ./lib/verify-stream */ \"./node_modules/jws/lib/verify-stream.js\");\n\nvar ALGORITHMS = [\n  'HS256', 'HS384', 'HS512',\n  'RS256', 'RS384', 'RS512',\n  'ES256', 'ES384', 'ES512'\n];\n\nexports.ALGORITHMS = ALGORITHMS;\nexports.sign = SignStream.sign;\nexports.verify = VerifyStream.verify;\nexports.decode = VerifyStream.decode;\nexports.isValid = VerifyStream.isValid;\nexports.createSign = function createSign(opts) {\n  return new SignStream(opts);\n};\nexports.createVerify = function createVerify(opts) {\n  return new VerifyStream(opts);\n};\n\n\n//# sourceURL=webpack:///./node_modules/jws/index.js?");

/***/ }),

/***/ "./node_modules/jws/lib/data-stream.js":
/*!*********************************************!*\
  !*** ./node_modules/jws/lib/data-stream.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*global module, process*/\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"safe-buffer\").Buffer;\nvar Stream = __webpack_require__(/*! stream */ \"stream\");\nvar util = __webpack_require__(/*! util */ \"util\");\n\nfunction DataStream(data) {\n  this.buffer = null;\n  this.writable = true;\n  this.readable = true;\n\n  // No input\n  if (!data) {\n    this.buffer = Buffer.alloc(0);\n    return this;\n  }\n\n  // Stream\n  if (typeof data.pipe === 'function') {\n    this.buffer = Buffer.alloc(0);\n    data.pipe(this);\n    return this;\n  }\n\n  // Buffer or String\n  // or Object (assumedly a passworded key)\n  if (data.length || typeof data === 'object') {\n    this.buffer = data;\n    this.writable = false;\n    process.nextTick(function () {\n      this.emit('end', data);\n      this.readable = false;\n      this.emit('close');\n    }.bind(this));\n    return this;\n  }\n\n  throw new TypeError('Unexpected data type ('+ typeof data + ')');\n}\nutil.inherits(DataStream, Stream);\n\nDataStream.prototype.write = function write(data) {\n  this.buffer = Buffer.concat([this.buffer, Buffer.from(data)]);\n  this.emit('data', data);\n};\n\nDataStream.prototype.end = function end(data) {\n  if (data)\n    this.write(data);\n  this.emit('end', data);\n  this.emit('close');\n  this.writable = false;\n  this.readable = false;\n};\n\nmodule.exports = DataStream;\n\n\n//# sourceURL=webpack:///./node_modules/jws/lib/data-stream.js?");

/***/ }),

/***/ "./node_modules/jws/lib/sign-stream.js":
/*!*********************************************!*\
  !*** ./node_modules/jws/lib/sign-stream.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*global module*/\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"safe-buffer\").Buffer;\nvar DataStream = __webpack_require__(/*! ./data-stream */ \"./node_modules/jws/lib/data-stream.js\");\nvar jwa = __webpack_require__(/*! jwa */ \"./node_modules/jwa/index.js\");\nvar Stream = __webpack_require__(/*! stream */ \"stream\");\nvar toString = __webpack_require__(/*! ./tostring */ \"./node_modules/jws/lib/tostring.js\");\nvar util = __webpack_require__(/*! util */ \"util\");\n\nfunction base64url(string, encoding) {\n  return Buffer\n    .from(string, encoding)\n    .toString('base64')\n    .replace(/=/g, '')\n    .replace(/\\+/g, '-')\n    .replace(/\\//g, '_');\n}\n\nfunction jwsSecuredInput(header, payload, encoding) {\n  encoding = encoding || 'utf8';\n  var encodedHeader = base64url(toString(header), 'binary');\n  var encodedPayload = base64url(toString(payload), encoding);\n  return util.format('%s.%s', encodedHeader, encodedPayload);\n}\n\nfunction jwsSign(opts) {\n  var header = opts.header;\n  var payload = opts.payload;\n  var secretOrKey = opts.secret || opts.privateKey;\n  var encoding = opts.encoding;\n  var algo = jwa(header.alg);\n  var securedInput = jwsSecuredInput(header, payload, encoding);\n  var signature = algo.sign(securedInput, secretOrKey);\n  return util.format('%s.%s', securedInput, signature);\n}\n\nfunction SignStream(opts) {\n  var secret = opts.secret||opts.privateKey||opts.key;\n  var secretStream = new DataStream(secret);\n  this.readable = true;\n  this.header = opts.header;\n  this.encoding = opts.encoding;\n  this.secret = this.privateKey = this.key = secretStream;\n  this.payload = new DataStream(opts.payload);\n  this.secret.once('close', function () {\n    if (!this.payload.writable && this.readable)\n      this.sign();\n  }.bind(this));\n\n  this.payload.once('close', function () {\n    if (!this.secret.writable && this.readable)\n      this.sign();\n  }.bind(this));\n}\nutil.inherits(SignStream, Stream);\n\nSignStream.prototype.sign = function sign() {\n  try {\n    var signature = jwsSign({\n      header: this.header,\n      payload: this.payload.buffer,\n      secret: this.secret.buffer,\n      encoding: this.encoding\n    });\n    this.emit('done', signature);\n    this.emit('data', signature);\n    this.emit('end');\n    this.readable = false;\n    return signature;\n  } catch (e) {\n    this.readable = false;\n    this.emit('error', e);\n    this.emit('close');\n  }\n};\n\nSignStream.sign = jwsSign;\n\nmodule.exports = SignStream;\n\n\n//# sourceURL=webpack:///./node_modules/jws/lib/sign-stream.js?");

/***/ }),

/***/ "./node_modules/jws/lib/tostring.js":
/*!******************************************!*\
  !*** ./node_modules/jws/lib/tostring.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*global module*/\nvar Buffer = __webpack_require__(/*! buffer */ \"buffer\").Buffer;\n\nmodule.exports = function toString(obj) {\n  if (typeof obj === 'string')\n    return obj;\n  if (typeof obj === 'number' || Buffer.isBuffer(obj))\n    return obj.toString();\n  return JSON.stringify(obj);\n};\n\n\n//# sourceURL=webpack:///./node_modules/jws/lib/tostring.js?");

/***/ }),

/***/ "./node_modules/jws/lib/verify-stream.js":
/*!***********************************************!*\
  !*** ./node_modules/jws/lib/verify-stream.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*global module*/\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"safe-buffer\").Buffer;\nvar DataStream = __webpack_require__(/*! ./data-stream */ \"./node_modules/jws/lib/data-stream.js\");\nvar jwa = __webpack_require__(/*! jwa */ \"./node_modules/jwa/index.js\");\nvar Stream = __webpack_require__(/*! stream */ \"stream\");\nvar toString = __webpack_require__(/*! ./tostring */ \"./node_modules/jws/lib/tostring.js\");\nvar util = __webpack_require__(/*! util */ \"util\");\nvar JWS_REGEX = /^[a-zA-Z0-9\\-_]+?\\.[a-zA-Z0-9\\-_]+?\\.([a-zA-Z0-9\\-_]+)?$/;\n\nfunction isObject(thing) {\n  return Object.prototype.toString.call(thing) === '[object Object]';\n}\n\nfunction safeJsonParse(thing) {\n  if (isObject(thing))\n    return thing;\n  try { return JSON.parse(thing); }\n  catch (e) { return undefined; }\n}\n\nfunction headerFromJWS(jwsSig) {\n  var encodedHeader = jwsSig.split('.', 1)[0];\n  return safeJsonParse(Buffer.from(encodedHeader, 'base64').toString('binary'));\n}\n\nfunction securedInputFromJWS(jwsSig) {\n  return jwsSig.split('.', 2).join('.');\n}\n\nfunction signatureFromJWS(jwsSig) {\n  return jwsSig.split('.')[2];\n}\n\nfunction payloadFromJWS(jwsSig, encoding) {\n  encoding = encoding || 'utf8';\n  var payload = jwsSig.split('.')[1];\n  return Buffer.from(payload, 'base64').toString(encoding);\n}\n\nfunction isValidJws(string) {\n  return JWS_REGEX.test(string) && !!headerFromJWS(string);\n}\n\nfunction jwsVerify(jwsSig, algorithm, secretOrKey) {\n  if (!algorithm) {\n    var err = new Error(\"Missing algorithm parameter for jws.verify\");\n    err.code = \"MISSING_ALGORITHM\";\n    throw err;\n  }\n  jwsSig = toString(jwsSig);\n  var signature = signatureFromJWS(jwsSig);\n  var securedInput = securedInputFromJWS(jwsSig);\n  var algo = jwa(algorithm);\n  return algo.verify(securedInput, signature, secretOrKey);\n}\n\nfunction jwsDecode(jwsSig, opts) {\n  opts = opts || {};\n  jwsSig = toString(jwsSig);\n\n  if (!isValidJws(jwsSig))\n    return null;\n\n  var header = headerFromJWS(jwsSig);\n\n  if (!header)\n    return null;\n\n  var payload = payloadFromJWS(jwsSig);\n  if (header.typ === 'JWT' || opts.json)\n    payload = JSON.parse(payload, opts.encoding);\n\n  return {\n    header: header,\n    payload: payload,\n    signature: signatureFromJWS(jwsSig)\n  };\n}\n\nfunction VerifyStream(opts) {\n  opts = opts || {};\n  var secretOrKey = opts.secret||opts.publicKey||opts.key;\n  var secretStream = new DataStream(secretOrKey);\n  this.readable = true;\n  this.algorithm = opts.algorithm;\n  this.encoding = opts.encoding;\n  this.secret = this.publicKey = this.key = secretStream;\n  this.signature = new DataStream(opts.signature);\n  this.secret.once('close', function () {\n    if (!this.signature.writable && this.readable)\n      this.verify();\n  }.bind(this));\n\n  this.signature.once('close', function () {\n    if (!this.secret.writable && this.readable)\n      this.verify();\n  }.bind(this));\n}\nutil.inherits(VerifyStream, Stream);\nVerifyStream.prototype.verify = function verify() {\n  try {\n    var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);\n    var obj = jwsDecode(this.signature.buffer, this.encoding);\n    this.emit('done', valid, obj);\n    this.emit('data', valid);\n    this.emit('end');\n    this.readable = false;\n    return valid;\n  } catch (e) {\n    this.readable = false;\n    this.emit('error', e);\n    this.emit('close');\n  }\n};\n\nVerifyStream.decode = jwsDecode;\nVerifyStream.isValid = isValidJws;\nVerifyStream.verify = jwsVerify;\n\nmodule.exports = VerifyStream;\n\n\n//# sourceURL=webpack:///./node_modules/jws/lib/verify-stream.js?");

/***/ }),

/***/ "./node_modules/lodash.includes/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.includes/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0,\n    MAX_SAFE_INTEGER = 9007199254740991,\n    MAX_INTEGER = 1.7976931348623157e+308,\n    NAN = 0 / 0;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]';\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array ? array.length : 0,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\n/**\n * The base implementation of `_.findIndex` and `_.findLastIndex` without\n * support for iteratee shorthands.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {Function} predicate The function invoked per iteration.\n * @param {number} fromIndex The index to search from.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction baseFindIndex(array, predicate, fromIndex, fromRight) {\n  var length = array.length,\n      index = fromIndex + (fromRight ? 1 : -1);\n\n  while ((fromRight ? index-- : ++index < length)) {\n    if (predicate(array[index], index, array)) {\n      return index;\n    }\n  }\n  return -1;\n}\n\n/**\n * The base implementation of `_.indexOf` without `fromIndex` bounds checks.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} value The value to search for.\n * @param {number} fromIndex The index to search from.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction baseIndexOf(array, value, fromIndex) {\n  if (value !== value) {\n    return baseFindIndex(array, baseIsNaN, fromIndex);\n  }\n  var index = fromIndex - 1,\n      length = array.length;\n\n  while (++index < length) {\n    if (array[index] === value) {\n      return index;\n    }\n  }\n  return -1;\n}\n\n/**\n * The base implementation of `_.isNaN` without support for number objects.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.\n */\nfunction baseIsNaN(value) {\n  return value !== value;\n}\n\n/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\n/**\n * The base implementation of `_.values` and `_.valuesIn` which creates an\n * array of `object` property values corresponding to the property names\n * of `props`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array} props The property names to get values for.\n * @returns {Object} Returns the array of property values.\n */\nfunction baseValues(object, props) {\n  return arrayMap(props, function(key) {\n    return object[key];\n  });\n}\n\n/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = overArg(Object.keys, Object),\n    nativeMax = Math.max;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.\n  // Safari 9 makes `arguments.length` enumerable in strict mode.\n  var result = (isArray(value) || isArguments(value))\n    ? baseTimes(value.length, String)\n    : [];\n\n  var length = result.length,\n      skipIndexes = !!length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\n/**\n * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeys(object) {\n  if (!isPrototype(object)) {\n    return nativeKeys(object);\n  }\n  var result = [];\n  for (var key in Object(object)) {\n    if (hasOwnProperty.call(object, key) && key != 'constructor') {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  length = length == null ? MAX_SAFE_INTEGER : length;\n  return !!length &&\n    (typeof value == 'number' || reIsUint.test(value)) &&\n    (value > -1 && value % 1 == 0 && value < length);\n}\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\n/**\n * Checks if `value` is in `collection`. If `collection` is a string, it's\n * checked for a substring of `value`, otherwise\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * is used for equality comparisons. If `fromIndex` is negative, it's used as\n * the offset from the end of `collection`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Collection\n * @param {Array|Object|string} collection The collection to inspect.\n * @param {*} value The value to search for.\n * @param {number} [fromIndex=0] The index to search from.\n * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.\n * @returns {boolean} Returns `true` if `value` is found, else `false`.\n * @example\n *\n * _.includes([1, 2, 3], 1);\n * // => true\n *\n * _.includes([1, 2, 3], 1, 2);\n * // => false\n *\n * _.includes({ 'a': 1, 'b': 2 }, 1);\n * // => true\n *\n * _.includes('abcd', 'bc');\n * // => true\n */\nfunction includes(collection, value, fromIndex, guard) {\n  collection = isArrayLike(collection) ? collection : values(collection);\n  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;\n\n  var length = collection.length;\n  if (fromIndex < 0) {\n    fromIndex = nativeMax(length + fromIndex, 0);\n  }\n  return isString(collection)\n    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)\n    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);\n}\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nfunction isArguments(value) {\n  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.\n  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&\n    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);\n}\n\n/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\n/**\n * This method is like `_.isArrayLike` except that it also checks if `value`\n * is an object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array-like object,\n *  else `false`.\n * @example\n *\n * _.isArrayLikeObject([1, 2, 3]);\n * // => true\n *\n * _.isArrayLikeObject(document.body.children);\n * // => true\n *\n * _.isArrayLikeObject('abc');\n * // => false\n *\n * _.isArrayLikeObject(_.noop);\n * // => false\n */\nfunction isArrayLikeObject(value) {\n  return isObjectLike(value) && isArrayLike(value);\n}\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 8-9 which returns 'object' for typed array and other constructors.\n  var tag = isObject(value) ? objectToString.call(value) : '';\n  return tag == funcTag || tag == genTag;\n}\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a `String` primitive or object.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a string, else `false`.\n * @example\n *\n * _.isString('abc');\n * // => true\n *\n * _.isString(1);\n * // => false\n */\nfunction isString(value) {\n  return typeof value == 'string' ||\n    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);\n}\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && objectToString.call(value) == symbolTag);\n}\n\n/**\n * Converts `value` to a finite number.\n *\n * @static\n * @memberOf _\n * @since 4.12.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted number.\n * @example\n *\n * _.toFinite(3.2);\n * // => 3.2\n *\n * _.toFinite(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toFinite(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toFinite('3.2');\n * // => 3.2\n */\nfunction toFinite(value) {\n  if (!value) {\n    return value === 0 ? value : 0;\n  }\n  value = toNumber(value);\n  if (value === INFINITY || value === -INFINITY) {\n    var sign = (value < 0 ? -1 : 1);\n    return sign * MAX_INTEGER;\n  }\n  return value === value ? value : 0;\n}\n\n/**\n * Converts `value` to an integer.\n *\n * **Note:** This method is loosely based on\n * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted integer.\n * @example\n *\n * _.toInteger(3.2);\n * // => 3\n *\n * _.toInteger(Number.MIN_VALUE);\n * // => 0\n *\n * _.toInteger(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toInteger('3.2');\n * // => 3\n */\nfunction toInteger(value) {\n  var result = toFinite(value),\n      remainder = result % 1;\n\n  return result === result ? (remainder ? result - remainder : result) : 0;\n}\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nfunction keys(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);\n}\n\n/**\n * Creates an array of the own enumerable string keyed property values of `object`.\n *\n * **Note:** Non-object values are coerced to objects.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property values.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.values(new Foo);\n * // => [1, 2] (iteration order is not guaranteed)\n *\n * _.values('hi');\n * // => ['h', 'i']\n */\nfunction values(object) {\n  return object ? baseValues(object, keys(object)) : [];\n}\n\nmodule.exports = includes;\n\n\n//# sourceURL=webpack:///./node_modules/lodash.includes/index.js?");

/***/ }),

/***/ "./node_modules/lodash.isboolean/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.isboolean/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * lodash 3.0.3 (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\n\n/** `Object#toString` result references. */\nvar boolTag = '[object Boolean]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/**\n * Checks if `value` is classified as a boolean primitive or object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isBoolean(false);\n * // => true\n *\n * _.isBoolean(null);\n * // => false\n */\nfunction isBoolean(value) {\n  return value === true || value === false ||\n    (isObjectLike(value) && objectToString.call(value) == boolTag);\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\nmodule.exports = isBoolean;\n\n\n//# sourceURL=webpack:///./node_modules/lodash.isboolean/index.js?");

/***/ }),

/***/ "./node_modules/lodash.isinteger/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.isinteger/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0,\n    MAX_INTEGER = 1.7976931348623157e+308,\n    NAN = 0 / 0;\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/**\n * Checks if `value` is an integer.\n *\n * **Note:** This method is based on\n * [`Number.isInteger`](https://mdn.io/Number/isInteger).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an integer, else `false`.\n * @example\n *\n * _.isInteger(3);\n * // => true\n *\n * _.isInteger(Number.MIN_VALUE);\n * // => false\n *\n * _.isInteger(Infinity);\n * // => false\n *\n * _.isInteger('3');\n * // => false\n */\nfunction isInteger(value) {\n  return typeof value == 'number' && value == toInteger(value);\n}\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && objectToString.call(value) == symbolTag);\n}\n\n/**\n * Converts `value` to a finite number.\n *\n * @static\n * @memberOf _\n * @since 4.12.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted number.\n * @example\n *\n * _.toFinite(3.2);\n * // => 3.2\n *\n * _.toFinite(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toFinite(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toFinite('3.2');\n * // => 3.2\n */\nfunction toFinite(value) {\n  if (!value) {\n    return value === 0 ? value : 0;\n  }\n  value = toNumber(value);\n  if (value === INFINITY || value === -INFINITY) {\n    var sign = (value < 0 ? -1 : 1);\n    return sign * MAX_INTEGER;\n  }\n  return value === value ? value : 0;\n}\n\n/**\n * Converts `value` to an integer.\n *\n * **Note:** This method is loosely based on\n * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted integer.\n * @example\n *\n * _.toInteger(3.2);\n * // => 3\n *\n * _.toInteger(Number.MIN_VALUE);\n * // => 0\n *\n * _.toInteger(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toInteger('3.2');\n * // => 3\n */\nfunction toInteger(value) {\n  var result = toFinite(value),\n      remainder = result % 1;\n\n  return result === result ? (remainder ? result - remainder : result) : 0;\n}\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = isInteger;\n\n\n//# sourceURL=webpack:///./node_modules/lodash.isinteger/index.js?");

/***/ }),

/***/ "./node_modules/lodash.isnumber/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.isnumber/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * lodash 3.0.3 (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\n\n/** `Object#toString` result references. */\nvar numberTag = '[object Number]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a `Number` primitive or object.\n *\n * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified\n * as numbers, use the `_.isFinite` method.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isNumber(3);\n * // => true\n *\n * _.isNumber(Number.MIN_VALUE);\n * // => true\n *\n * _.isNumber(Infinity);\n * // => true\n *\n * _.isNumber('3');\n * // => false\n */\nfunction isNumber(value) {\n  return typeof value == 'number' ||\n    (isObjectLike(value) && objectToString.call(value) == numberTag);\n}\n\nmodule.exports = isNumber;\n\n\n//# sourceURL=webpack:///./node_modules/lodash.isnumber/index.js?");

/***/ }),

/***/ "./node_modules/lodash.isplainobject/index.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash.isplainobject/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** `Object#toString` result references. */\nvar objectTag = '[object Object]';\n\n/**\n * Checks if `value` is a host object in IE < 9.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a host object, else `false`.\n */\nfunction isHostObject(value) {\n  // Many host objects are `Object` objects that can coerce to strings\n  // despite having improperly defined `toString` methods.\n  var result = false;\n  if (value != null && typeof value.toString != 'function') {\n    try {\n      result = !!(value + '');\n    } catch (e) {}\n  }\n  return result;\n}\n\n/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to infer the `Object` constructor. */\nvar objectCtorString = funcToString.call(Object);\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar getPrototype = overArg(Object.getPrototypeOf, Object);\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is a plain object, that is, an object created by the\n * `Object` constructor or one with a `[[Prototype]]` of `null`.\n *\n * @static\n * @memberOf _\n * @since 0.8.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n * }\n *\n * _.isPlainObject(new Foo);\n * // => false\n *\n * _.isPlainObject([1, 2, 3]);\n * // => false\n *\n * _.isPlainObject({ 'x': 0, 'y': 0 });\n * // => true\n *\n * _.isPlainObject(Object.create(null));\n * // => true\n */\nfunction isPlainObject(value) {\n  if (!isObjectLike(value) ||\n      objectToString.call(value) != objectTag || isHostObject(value)) {\n    return false;\n  }\n  var proto = getPrototype(value);\n  if (proto === null) {\n    return true;\n  }\n  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;\n  return (typeof Ctor == 'function' &&\n    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);\n}\n\nmodule.exports = isPlainObject;\n\n\n//# sourceURL=webpack:///./node_modules/lodash.isplainobject/index.js?");

/***/ }),

/***/ "./node_modules/lodash.isstring/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.isstring/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * lodash 4.0.1 (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\n\n/** `Object#toString` result references. */\nvar stringTag = '[object String]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @type Function\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a `String` primitive or object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isString('abc');\n * // => true\n *\n * _.isString(1);\n * // => false\n */\nfunction isString(value) {\n  return typeof value == 'string' ||\n    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);\n}\n\nmodule.exports = isString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash.isstring/index.js?");

/***/ }),

/***/ "./node_modules/lodash.once/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.once/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as the `TypeError` message for \"Functions\" methods. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0,\n    MAX_INTEGER = 1.7976931348623157e+308,\n    NAN = 0 / 0;\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/**\n * Creates a function that invokes `func`, with the `this` binding and arguments\n * of the created function, while it's called less than `n` times. Subsequent\n * calls to the created function return the result of the last `func` invocation.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Function\n * @param {number} n The number of calls at which `func` is no longer invoked.\n * @param {Function} func The function to restrict.\n * @returns {Function} Returns the new restricted function.\n * @example\n *\n * jQuery(element).on('click', _.before(5, addContactToList));\n * // => Allows adding up to 4 contacts to the list.\n */\nfunction before(n, func) {\n  var result;\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  n = toInteger(n);\n  return function() {\n    if (--n > 0) {\n      result = func.apply(this, arguments);\n    }\n    if (n <= 1) {\n      func = undefined;\n    }\n    return result;\n  };\n}\n\n/**\n * Creates a function that is restricted to invoking `func` once. Repeat calls\n * to the function return the value of the first invocation. The `func` is\n * invoked with the `this` binding and arguments of the created function.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to restrict.\n * @returns {Function} Returns the new restricted function.\n * @example\n *\n * var initialize = _.once(createApplication);\n * initialize();\n * initialize();\n * // => `createApplication` is invoked once\n */\nfunction once(func) {\n  return before(2, func);\n}\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && objectToString.call(value) == symbolTag);\n}\n\n/**\n * Converts `value` to a finite number.\n *\n * @static\n * @memberOf _\n * @since 4.12.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted number.\n * @example\n *\n * _.toFinite(3.2);\n * // => 3.2\n *\n * _.toFinite(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toFinite(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toFinite('3.2');\n * // => 3.2\n */\nfunction toFinite(value) {\n  if (!value) {\n    return value === 0 ? value : 0;\n  }\n  value = toNumber(value);\n  if (value === INFINITY || value === -INFINITY) {\n    var sign = (value < 0 ? -1 : 1);\n    return sign * MAX_INTEGER;\n  }\n  return value === value ? value : 0;\n}\n\n/**\n * Converts `value` to an integer.\n *\n * **Note:** This method is loosely based on\n * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted integer.\n * @example\n *\n * _.toInteger(3.2);\n * // => 3\n *\n * _.toInteger(Number.MIN_VALUE);\n * // => 0\n *\n * _.toInteger(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toInteger('3.2');\n * // => 3\n */\nfunction toInteger(value) {\n  var result = toFinite(value),\n      remainder = result % 1;\n\n  return result === result ? (remainder ? result - remainder : result) : 0;\n}\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = once;\n\n\n//# sourceURL=webpack:///./node_modules/lodash.once/index.js?");

/***/ }),

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
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\n__webpack_require__(/*! ./server/config/config.js */ \"./src/server/config/config.js\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! ./server/db/mongoose */ \"./src/server/db/mongoose.js\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _cookieSession = __webpack_require__(/*! cookie-session */ \"cookie-session\");\n\nvar _cookieSession2 = _interopRequireDefault(_cookieSession);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\n__webpack_require__(/*! ./server/db/models/user */ \"./src/server/db/models/user.js\");\n\n__webpack_require__(/*! ./server/db/models/channels */ \"./src/server/db/models/channels.js\");\n\nvar _renderer = __webpack_require__(/*! ./server/utils/renderer */ \"./src/server/utils/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\n__webpack_require__(/*! ./server/services/passport_google */ \"./src/server/services/passport_google.js\");\n\n__webpack_require__(/*! ./server/services/passport_facebook */ \"./src/server/services/passport_facebook.js\");\n\n__webpack_require__(/*! ./server/services/passport_github */ \"./src/server/services/passport_github.js\");\n\nvar _google = __webpack_require__(/*! ./server/utils/authRoutes/google */ \"./src/server/utils/authRoutes/google.js\");\n\nvar _google2 = _interopRequireDefault(_google);\n\nvar _fb = __webpack_require__(/*! ./server/utils/authRoutes/fb */ \"./src/server/utils/authRoutes/fb.js\");\n\nvar _fb2 = _interopRequireDefault(_fb);\n\nvar _github = __webpack_require__(/*! ./server/utils/authRoutes/github */ \"./src/server/utils/authRoutes/github.js\");\n\nvar _github2 = _interopRequireDefault(_github);\n\nvar _utils = __webpack_require__(/*! ./server/utils/authRoutes/utils */ \"./src/server/utils/authRoutes/utils.js\");\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n//ssh rendering template and static route\n\n\n_passport2.default.serializeUser(function (user, done) {\n  done(null, user.id);\n});\n\nvar User = _mongoose2.default.model('users');\nvar Channel = _mongoose2.default.model('channels');\n\n_passport2.default.deserializeUser(function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, done) {\n    var user;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return User.findById(id);\n\n          case 2:\n            user = _context.sent;\n\n            done(null, user);\n\n          case 4:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\n//google,fb,github authentication system\n\n\n//authentication routes for various oauth\n\n\nvar app = (0, _express2.default)();\n\napp.use((0, _cookieSession2.default)({\n  maxAge: 15 * 24 * 60 * 60 * 1000,\n  keys: [process.env.COOKIE_ENCRYPT_KEY1, process.env.COOKIE_ENCRYPT_KEY2]\n}));\n\napp.use(_passport2.default.initialize());\napp.use(_passport2.default.session());\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded());\n\napp.use(_express2.default.static(\"public\"));\n(0, _google2.default)(app);\n(0, _fb2.default)(app);\n(0, _github2.default)(app);\n(0, _utils2.default)(app);\n\napp.post('/channels/new', function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n    var _req$body, name, dual, xAxis, yAxis, existingChannel, newChannel;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _req$body = req.body, name = _req$body.name, dual = _req$body.dual, xAxis = _req$body.xAxis, yAxis = _req$body.yAxis;\n            _context2.next = 3;\n            return Channel.findOne({\n              name: name\n            });\n\n          case 3:\n            existingChannel = _context2.sent;\n\n            if (!existingChannel) {\n              _context2.next = 6;\n              break;\n            }\n\n            return _context2.abrupt('return', res.send(\"Channel already exits\").redirect('/'));\n\n          case 6:\n            _context2.next = 8;\n            return new Channel({\n              name: name,\n              _user: \"5b9d680719c69817cc328739\",\n              dual: dual,\n              xAxis: xAxis,\n              yAxis: yAxis\n            });\n\n          case 8:\n            newChannel = _context2.sent;\n\n            newChannel.save().then(function () {\n              return newChannel.getChannelToken();\n            }).then(function (token) {\n              res.send(token);\n            });\n\n          case 10:\n          case 'end':\n            return _context2.stop();\n        }\n      }\n    }, _callee2, undefined);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\n\napp.get('/channels/list', function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n    var channelList, filteredList;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return Channel.find({ _user: '5b9d680719c69817cc328739' });\n\n          case 2:\n            channelList = _context3.sent;\n            filteredList = channelList.map(function (_ref4) {\n              var name = _ref4.name,\n                  xAxis = _ref4.xAxis,\n                  yAxis = _ref4.yAxis,\n                  _id = _ref4._id;\n\n              return {\n                name: name,\n                xAxis: xAxis,\n                yAxis: yAxis,\n                _id: _id\n              };\n            });\n\n            res.send(filteredList);\n\n          case 5:\n          case 'end':\n            return _context3.stop();\n        }\n      }\n    }, _callee3, undefined);\n  }));\n\n  return function (_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}());\n\napp.get('/channels/:id', function () {\n  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n    var channelList;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return Channel.findById(req.params.id);\n\n          case 2:\n            channelList = _context4.sent;\n\n            res.send(channelList);\n\n          case 4:\n          case 'end':\n            return _context4.stop();\n        }\n      }\n    }, _callee4, undefined);\n  }));\n\n  return function (_x7, _x8) {\n    return _ref5.apply(this, arguments);\n  };\n}());\n\napp.get(\"*\", function (req, res) {\n  res.send((0, _renderer2.default)());\n});\n\napp.listen(process.env.PORT, function () {\n  console.log('localhost at port:' + process.env.PORT);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ "./src/server/db/models/channels.js":
/*!******************************************!*\
  !*** ./src/server/db/models/channels.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"./node_modules/jsonwebtoken/index.js\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar channelSchema = new _mongoose2.default.Schema({\n    name: {\n        type: String,\n        required: true,\n        trim: true,\n        minlength: 1\n    },\n    _user: {\n        type: _mongoose2.default.Schema.Types.ObjectId,\n        ref: 'User'\n    },\n    token: {\n        type: String\n    },\n    dual: {\n        type: Boolean,\n        required: true\n    },\n    xAxis: {\n        type: String,\n        required: true,\n        trim: true,\n        minlength: 1\n    },\n    yAxis: {\n        type: String,\n        trim: true,\n        minlength: 1,\n        default: \"Time\"\n    },\n    xData: [Number],\n    yData: [String]\n});\n\nchannelSchema.methods.getChannelToken = function () {\n    var channel = this;\n    var token = _jsonwebtoken2.default.sign({\n        id: channel._id.toHexString()\n    }, process.env.JWT_SECRET).toString();\n    channel.token = token;\n    return channel.save().then(function () {\n        return token;\n    });\n};\n\n_mongoose2.default.model('channels', channelSchema);\n\n//# sourceURL=webpack:///./src/server/db/models/channels.js?");

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
eval("\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _db_access = __webpack_require__(/*! ./../utils/db_access */ \"./src/server/utils/db_access.js\");\n\nvar _db_access2 = _interopRequireDefault(_db_access);\n\nvar _passportGithub = __webpack_require__(/*! passport-github2 */ \"passport-github2\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_passport2.default.use(new _passportGithub.Strategy({\n    clientID: process.env.GITHUB_CLIENT_ID,\n    clientSecret: process.env.GITHUB_CLIENT_SEC,\n    callbackURL: '/auth/github/callback'\n}, function (accessToken, refreshToken, profile, done) {\n    console.log(profile.id);\n    (0, _db_access2.default)(profile, done, 'github');\n})); //github v3 authentication\n\n//# sourceURL=webpack:///./src/server/services/passport_github.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (app) {\n    app.get('/auth/facebook', _passport2.default.authenticate('facebook'));\n\n    app.get('/auth/facebook/callback', _passport2.default.authenticate('facebook'));\n};\n\n//# sourceURL=webpack:///./src/server/utils/authRoutes/fb.js?");

/***/ }),

/***/ "./src/server/utils/authRoutes/github.js":
/*!***********************************************!*\
  !*** ./src/server/utils/authRoutes/github.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (app) {\n    app.get('/auth/github', _passport2.default.authenticate('github'));\n\n    app.get('/auth/github/callback', _passport2.default.authenticate('github'));\n};\n\n//# sourceURL=webpack:///./src/server/utils/authRoutes/github.js?");

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

/***/ "./src/server/utils/authRoutes/utils.js":
/*!**********************************************!*\
  !*** ./src/server/utils/authRoutes/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (app) {\n    app.get('/auth/user', function (req, res) {\n        res.send(req.user);\n    });\n\n    app.get('/auth/logout', function (req, res) {\n        req.logout();\n        res.send(req.user);\n    });\n};\n\n//# sourceURL=webpack:///./src/server/utils/authRoutes/utils.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _App = __webpack_require__(/*! ./../../client/components/App */ \"./src/client/components/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n    var content = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));\n    return '<html>\\n    <head></head>\\n    <body>\\n        <div id=\\'root\\'>' + content + '</div>\\n    <script src=\"./bundle.js\"></script>\\n    </body>\\n    </html>';\n};\n\n//# sourceURL=webpack:///./src/server/utils/renderer.js?");

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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"buffer\");\n\n//# sourceURL=webpack:///external_%22buffer%22?");

/***/ }),

/***/ "cookie-session":
/*!*********************************!*\
  !*** external "cookie-session" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-session\");\n\n//# sourceURL=webpack:///external_%22cookie-session%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "ms":
/*!*********************!*\
  !*** external "ms" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ms\");\n\n//# sourceURL=webpack:///external_%22ms%22?");

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

/***/ "safe-buffer":
/*!******************************!*\
  !*** external "safe-buffer" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"safe-buffer\");\n\n//# sourceURL=webpack:///external_%22safe-buffer%22?");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stream\");\n\n//# sourceURL=webpack:///external_%22stream%22?");

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