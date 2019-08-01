(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1), __esModule: true };

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(4);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(54);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(49);
module.exports = __webpack_require__(53).f('iterator');


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(7)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(10)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(8);
var defined = __webpack_require__(9);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(11);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(27);
var hide = __webpack_require__(16);
var Iterators = __webpack_require__(28);
var $iterCreate = __webpack_require__(29);
var setToStringTag = __webpack_require__(45);
var getPrototypeOf = __webpack_require__(47);
var ITERATOR = __webpack_require__(46)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var core = __webpack_require__(2);
var ctx = __webpack_require__(14);
var hide = __webpack_require__(16);
var has = __webpack_require__(26);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(15);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(17);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(21) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(20);
var toPrimitive = __webpack_require__(24);
var dP = Object.defineProperty;

exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(21) && !__webpack_require__(22)(function () {
  return Object.defineProperty(__webpack_require__(23)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(22)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
var document = __webpack_require__(13).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(19);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(30);
var descriptor = __webpack_require__(25);
var setToStringTag = __webpack_require__(45);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(16)(IteratorPrototype, __webpack_require__(46)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(18);
var dPs = __webpack_require__(31);
var enumBugKeys = __webpack_require__(43);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(23)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(44).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(17);
var anObject = __webpack_require__(18);
var getKeys = __webpack_require__(32);

module.exports = __webpack_require__(21) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(43);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(26);
var toIObject = __webpack_require__(34);
var arrayIndexOf = __webpack_require__(37)(false);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(35);
var defined = __webpack_require__(9);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(36);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(34);
var toLength = __webpack_require__(38);
var toAbsoluteIndex = __webpack_require__(39);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(8);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(8);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(41)('keys');
var uid = __webpack_require__(42);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(13);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(11) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(13).document;
module.exports = document && document.documentElement;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(17).f;
var has = __webpack_require__(26);
var TAG = __webpack_require__(46)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(41)('wks');
var uid = __webpack_require__(42);
var Symbol = __webpack_require__(13).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(26);
var toObject = __webpack_require__(48);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(9);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
var global = __webpack_require__(13);
var hide = __webpack_require__(16);
var Iterators = __webpack_require__(28);
var TO_STRING_TAG = __webpack_require__(46)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(51);
var step = __webpack_require__(52);
var Iterators = __webpack_require__(28);
var toIObject = __webpack_require__(34);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(10)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(46);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(68);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(13);
var has = __webpack_require__(26);
var DESCRIPTORS = __webpack_require__(21);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(27);
var META = __webpack_require__(57).KEY;
var $fails = __webpack_require__(22);
var shared = __webpack_require__(41);
var setToStringTag = __webpack_require__(45);
var uid = __webpack_require__(42);
var wks = __webpack_require__(46);
var wksExt = __webpack_require__(53);
var wksDefine = __webpack_require__(58);
var enumKeys = __webpack_require__(59);
var isArray = __webpack_require__(62);
var anObject = __webpack_require__(18);
var isObject = __webpack_require__(19);
var toIObject = __webpack_require__(34);
var toPrimitive = __webpack_require__(24);
var createDesc = __webpack_require__(25);
var _create = __webpack_require__(30);
var gOPNExt = __webpack_require__(63);
var $GOPD = __webpack_require__(65);
var $DP = __webpack_require__(17);
var $keys = __webpack_require__(32);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(64).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(61).f = $propertyIsEnumerable;
  __webpack_require__(60).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(11)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(42)('meta');
var isObject = __webpack_require__(19);
var has = __webpack_require__(26);
var setDesc = __webpack_require__(17).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(22)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(11);
var wksExt = __webpack_require__(53);
var defineProperty = __webpack_require__(17).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(32);
var gOPS = __webpack_require__(60);
var pIE = __webpack_require__(61);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(36);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(34);
var gOPN = __webpack_require__(64).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(33);
var hiddenKeys = __webpack_require__(43).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(61);
var createDesc = __webpack_require__(25);
var toIObject = __webpack_require__(34);
var toPrimitive = __webpack_require__(24);
var has = __webpack_require__(26);
var IE8_DOM_DEFINE = __webpack_require__(20);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(21) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58)('asyncIterator');


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58)('observable');


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
module.exports = __webpack_require__(2).Object.getPrototypeOf;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(48);
var $getPrototypeOf = __webpack_require__(47);

__webpack_require__(72)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(12);
var core = __webpack_require__(2);
var fails = __webpack_require__(22);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(48);
var $keys = __webpack_require__(32);

__webpack_require__(72)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

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

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
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

				if (!this.json && cookie.charAt(0) === '"') {
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


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);

/* eslint-disable */
(function (a, b) {
  function c(b, c, d) {
    a.WeixinJSBridge ? WeixinJSBridge.invoke(b, e(c), function (a) {
      g(b, a, d);
    }) : j(b, d);
  }function d(b, c, d) {
    a.WeixinJSBridge ? WeixinJSBridge.on(b, function (a) {
      d && d.trigger && d.trigger(a), g(b, a, c);
    }) : d ? j(b, d) : j(b, c);
  }function e(a) {
    return a = a || {}, a.appId = E.appId, a.verifyAppId = E.appId, a.verifySignType = "sha1", a.verifyTimestamp = E.timestamp + "", a.verifyNonceStr = E.nonceStr, a.verifySignature = E.signature, a;
  }function f(a) {
    return { timeStamp: a.timestamp + "", nonceStr: a.nonceStr, "package": a.package, paySign: a.paySign, signType: a.signType || "SHA1" };
  }function g(a, b, c) {
    var d, e, f;switch (delete b.err_code, delete b.err_desc, delete b.err_detail, d = b.errMsg, d || (d = b.err_msg, delete b.err_msg, d = h(a, d), b.errMsg = d), c = c || {}, c._complete && (c._complete(b), delete c._complete), d = b.errMsg || "", E.debug && !c.isInnerInvoke && alert(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(b)), e = d.indexOf(":"), f = d.substring(e + 1)) {case "ok":
        c.success && c.success(b);break;case "cancel":
        c.cancel && c.cancel(b);break;default:
        c.fail && c.fail(b);}c.complete && c.complete(b);
  }function h(a, b) {
    var e,
        f,
        c = a,
        d = p[c];return d && (c = d), e = "ok", b && (f = b.indexOf(":"), e = b.substring(f + 1), "confirm" == e && (e = "ok"), "failed" == e && (e = "fail"), -1 != e.indexOf("failed_") && (e = e.substring(7)), -1 != e.indexOf("fail_") && (e = e.substring(5)), e = e.replace(/_/g, " "), e = e.toLowerCase(), ("access denied" == e || "no permission to execute" == e) && (e = "permission denied"), "config" == c && "function not exist" == e && (e = "ok"), "" == e && (e = "fail")), b = c + ":" + e;
  }function i(a) {
    var b, c, d, e;if (a) {
      for (b = 0, c = a.length; c > b; ++b) {
        d = a[b], e = o[d], e && (a[b] = e);
      }return a;
    }
  }function j(a, b) {
    if (!(!E.debug || b && b.isInnerInvoke)) {
      var c = p[a];c && (a = c), b && b._complete && delete b._complete, console.log('"' + a + '",', b || "");
    }
  }function k() {
    0 != D.preVerifyState && (u || v || E.debug || "6.0.2" > z || D.systemType < 0 || A || (A = !0, D.appId = E.appId, D.initTime = C.initEndTime - C.initStartTime, D.preVerifyTime = C.preVerifyEndTime - C.preVerifyStartTime, H.getNetworkType({ isInnerInvoke: !0, success: function success(a) {
        var b, c;D.networkType = a.networkType, b = "http://open.weixin.qq.com/sdk/report?v=" + D.version + "&o=" + D.preVerifyState + "&s=" + D.systemType + "&c=" + D.clientVersion + "&a=" + D.appId + "&n=" + D.networkType + "&i=" + D.initTime + "&p=" + D.preVerifyTime + "&u=" + D.url, c = new Image(), c.src = b;
      } })));
  }function l() {
    return new Date().getTime();
  }function m(b) {
    w && (a.WeixinJSBridge ? b() : q.addEventListener && q.addEventListener("WeixinJSBridgeReady", b, !1));
  }function n() {
    H.invoke || (H.invoke = function (b, c, d) {
      a.WeixinJSBridge && WeixinJSBridge.invoke(b, e(c), d);
    }, H.on = function (b, c) {
      a.WeixinJSBridge && WeixinJSBridge.on(b, c);
    });
  }var o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H;if (!a.jWeixin) return o = { config: "preVerifyJSAPI", onMenuShareTimeline: "menu:share:timeline", onMenuShareAppMessage: "menu:share:appmessage", onMenuShareQQ: "menu:share:qq", onMenuShareWeibo: "menu:share:weiboApp", onMenuShareQZone: "menu:share:QZone", previewImage: "imagePreview", getLocation: "geoLocation", openProductSpecificView: "openProductViewWithPid", addCard: "batchAddCard", openCard: "batchViewCard", chooseWXPay: "getBrandWCPayRequest" }, p = function () {
    var b,
        a = {};for (b in o) {
      a[o[b]] = b;
    }return a;
  }(), q = a.document, r = q.title, s = navigator.userAgent.toLowerCase(), t = navigator.platform.toLowerCase(), u = !(!t.match("mac") && !t.match("win")), v = -1 != s.indexOf("wxdebugger"), w = -1 != s.indexOf("micromessenger"), x = -1 != s.indexOf("android"), y = -1 != s.indexOf("iphone") || -1 != s.indexOf("ipad"), z = function () {
    var a = s.match(/micromessenger\/(\d+\.\d+\.\d+)/) || s.match(/micromessenger\/(\d+\.\d+)/);return a ? a[1] : "";
  }(), A = !1, B = !1, C = { initStartTime: l(), initEndTime: 0, preVerifyStartTime: 0, preVerifyEndTime: 0 }, D = { version: 1, appId: "", initTime: 0, preVerifyTime: 0, networkType: "", preVerifyState: 1, systemType: y ? 1 : x ? 2 : -1, clientVersion: z, url: encodeURIComponent(location.href) }, E = {}, F = { _completes: [] }, G = { state: 0, data: {} }, m(function () {
    C.initEndTime = l();
  }), H = { config: function config(a) {
      E = a, j("config", a);var b = E.check === !1 ? !1 : !0;m(function () {
        var a, d, e;if (b) c(o.config, { verifyJsApiList: i(E.jsApiList) }, function () {
          F._complete = function (a) {
            C.preVerifyEndTime = l(), G.state = 1, G.data = a;
          }, F.success = function () {
            D.preVerifyState = 0;
          }, F.fail = function (a) {
            F._fail ? F._fail(a) : G.state = -1;
          };var a = F._completes;return a.push(function () {
            k();
          }), F.complete = function () {
            for (var c = 0, d = a.length; d > c; ++c) {
              a[c]();
            }F._completes = [];
          }, F;
        }()), C.preVerifyStartTime = l();else {
          for (G.state = 1, a = F._completes, d = 0, e = a.length; e > d; ++d) {
            a[d]();
          }F._completes = [];
        }
      }), E.beta && n();
    }, ready: function ready(a) {
      0 != G.state ? a() : (F._completes.push(a), !w && E.debug && a());
    }, error: function error(a) {
      "6.0.2" > z || B || (B = !0, -1 == G.state ? a(G.data) : F._fail = a);
    }, checkJsApi: function checkJsApi(a) {
      var b = function b(a) {
        var c,
            d,
            b = a.checkResult;for (c in b) {
          d = p[c], d && (b[d] = b[c], delete b[c]);
        }return a;
      };c("checkJsApi", { jsApiList: i(a.jsApiList) }, function () {
        return a._complete = function (a) {
          if (x) {
            var c = a.checkResult;c && (a.checkResult = JSON.parse(c));
          }a = b(a);
        }, a;
      }());
    }, onMenuShareTimeline: function onMenuShareTimeline(a) {
      d(o.onMenuShareTimeline, { complete: function complete() {
          c("shareTimeline", { title: a.title || r, desc: a.title || r, img_url: a.imgUrl || "", link: a.link || location.href, type: a.type || "link", data_url: a.dataUrl || "" }, a);
        } }, a);
    }, onMenuShareAppMessage: function onMenuShareAppMessage(a) {
      d(o.onMenuShareAppMessage, { complete: function complete() {
          c("sendAppMessage", { title: a.title || r, desc: a.desc || "", link: a.link || location.href, img_url: a.imgUrl || "", type: a.type || "link", data_url: a.dataUrl || "" }, a);
        } }, a);
    }, onMenuShareQQ: function onMenuShareQQ(a) {
      d(o.onMenuShareQQ, { complete: function complete() {
          c("shareQQ", { title: a.title || r, desc: a.desc || "", img_url: a.imgUrl || "", link: a.link || location.href }, a);
        } }, a);
    }, onMenuShareWeibo: function onMenuShareWeibo(a) {
      d(o.onMenuShareWeibo, { complete: function complete() {
          c("shareWeiboApp", { title: a.title || r, desc: a.desc || "", img_url: a.imgUrl || "", link: a.link || location.href }, a);
        } }, a);
    }, onMenuShareQZone: function onMenuShareQZone(a) {
      d(o.onMenuShareQZone, { complete: function complete() {
          c("shareQZone", { title: a.title || r, desc: a.desc || "", img_url: a.imgUrl || "", link: a.link || location.href }, a);
        } }, a);
    }, startRecord: function startRecord(a) {
      c("startRecord", {}, a);
    }, stopRecord: function stopRecord(a) {
      c("stopRecord", {}, a);
    }, onVoiceRecordEnd: function onVoiceRecordEnd(a) {
      d("onVoiceRecordEnd", a);
    }, playVoice: function playVoice(a) {
      c("playVoice", { localId: a.localId }, a);
    }, pauseVoice: function pauseVoice(a) {
      c("pauseVoice", { localId: a.localId }, a);
    }, stopVoice: function stopVoice(a) {
      c("stopVoice", { localId: a.localId }, a);
    }, onVoicePlayEnd: function onVoicePlayEnd(a) {
      d("onVoicePlayEnd", a);
    }, uploadVoice: function uploadVoice(a) {
      c("uploadVoice", { localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a);
    }, downloadVoice: function downloadVoice(a) {
      c("downloadVoice", { serverId: a.serverId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a);
    }, translateVoice: function translateVoice(a) {
      c("translateVoice", { localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a);
    }, chooseImage: function chooseImage(a) {
      c("chooseImage", { scene: "1|2", count: a.count || 9, sizeType: a.sizeType || ["original", "compressed"], sourceType: a.sourceType || ["album", "camera"] }, function () {
        return a._complete = function (a) {
          if (x) {
            var b = a.localIds;b && (a.localIds = JSON.parse(b));
          }
        }, a;
      }());
    }, previewImage: function previewImage(a) {
      c(o.previewImage, { current: a.current, urls: a.urls }, a);
    }, uploadImage: function uploadImage(a) {
      c("uploadImage", { localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a);
    }, downloadImage: function downloadImage(a) {
      c("downloadImage", { serverId: a.serverId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a);
    }, getNetworkType: function getNetworkType(a) {
      var b = function b(a) {
        var c,
            d,
            e,
            b = a.errMsg;if (a.errMsg = "getNetworkType:ok", c = a.subtype, delete a.subtype, c) a.networkType = c;else switch (d = b.indexOf(":"), e = b.substring(d + 1)) {case "wifi":case "edge":case "wwan":
            a.networkType = e;break;default:
            a.errMsg = "getNetworkType:fail";}return a;
      };c("getNetworkType", {}, function () {
        return a._complete = function (a) {
          a = b(a);
        }, a;
      }());
    }, openLocation: function openLocation(a) {
      c("openLocation", { latitude: a.latitude, longitude: a.longitude, name: a.name || "", address: a.address || "", scale: a.scale || 28, infoUrl: a.infoUrl || "" }, a);
    }, getLocation: function getLocation(a) {
      a = a || {}, c(o.getLocation, { type: a.type || "wgs84" }, function () {
        return a._complete = function (a) {
          delete a.type;
        }, a;
      }());
    }, hideOptionMenu: function hideOptionMenu(a) {
      c("hideOptionMenu", {}, a);
    }, showOptionMenu: function showOptionMenu(a) {
      c("showOptionMenu", {}, a);
    }, closeWindow: function closeWindow(a) {
      a = a || {}, c("closeWindow", {}, a);
    }, hideMenuItems: function hideMenuItems(a) {
      c("hideMenuItems", { menuList: a.menuList }, a);
    }, showMenuItems: function showMenuItems(a) {
      c("showMenuItems", { menuList: a.menuList }, a);
    }, hideAllNonBaseMenuItem: function hideAllNonBaseMenuItem(a) {
      c("hideAllNonBaseMenuItem", {}, a);
    }, showAllNonBaseMenuItem: function showAllNonBaseMenuItem(a) {
      c("showAllNonBaseMenuItem", {}, a);
    }, scanQRCode: function scanQRCode(a) {
      a = a || {}, c("scanQRCode", { needResult: a.needResult || 0, scanType: a.scanType || ["qrCode", "barCode"] }, function () {
        return a._complete = function (a) {
          var b, c;y && (b = a.resultStr, b && (c = JSON.parse(b), a.resultStr = c && c.scan_code && c.scan_code.scan_result));
        }, a;
      }());
    }, openProductSpecificView: function openProductSpecificView(a) {
      c(o.openProductSpecificView, { pid: a.productId, view_type: a.viewType || 0, ext_info: a.extInfo }, a);
    }, addCard: function addCard(a) {
      var e,
          f,
          g,
          h,
          b = a.cardList,
          d = [];for (e = 0, f = b.length; f > e; ++e) {
        g = b[e], h = { card_id: g.cardId, card_ext: g.cardExt }, d.push(h);
      }c(o.addCard, { card_list: d }, function () {
        return a._complete = function (a) {
          var c,
              d,
              e,
              b = a.card_list;if (b) {
            for (b = JSON.parse(b), c = 0, d = b.length; d > c; ++c) {
              e = b[c], e.cardId = e.card_id, e.cardExt = e.card_ext, e.isSuccess = e.is_succ ? !0 : !1, delete e.card_id, delete e.card_ext, delete e.is_succ;
            }a.cardList = b, delete a.card_list;
          }
        }, a;
      }());
    }, chooseCard: function chooseCard(a) {
      c("chooseCard", { app_id: E.appId, location_id: a.shopId || "", sign_type: a.signType || "SHA1", card_id: a.cardId || "", card_type: a.cardType || "", card_sign: a.cardSign, time_stamp: a.timestamp + "", nonce_str: a.nonceStr }, function () {
        return a._complete = function (a) {
          a.cardList = a.choose_card_info, delete a.choose_card_info;
        }, a;
      }());
    }, openCard: function openCard(a) {
      var e,
          f,
          g,
          h,
          b = a.cardList,
          d = [];for (e = 0, f = b.length; f > e; ++e) {
        g = b[e], h = { card_id: g.cardId, code: g.code }, d.push(h);
      }c(o.openCard, { card_list: d }, a);
    }, chooseWXPay: function chooseWXPay(a) {
      c(o.chooseWXPay, f(a), a);
    } }, b && (a.wx = a.jWeixin = H), H;
})(window, true);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return FastClick;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, "type", function() { return utils_type; });
__webpack_require__.d(utils_namespaceObject, "IS_IOS_RAW", function() { return IS_IOS_RAW; });
__webpack_require__.d(utils_namespaceObject, "IS_ANDROID_RAW", function() { return IS_ANDROID_RAW; });
__webpack_require__.d(utils_namespaceObject, "OFO_APP", function() { return OFO_APP; });
__webpack_require__.d(utils_namespaceObject, "isInWeChat", function() { return isInWeChat; });
__webpack_require__.d(utils_namespaceObject, "isInAlipay", function() { return isInAlipay; });
__webpack_require__.d(utils_namespaceObject, "jsUrl", function() { return jsUrl; });
__webpack_require__.d(utils_namespaceObject, "isInWxMini", function() { return isInWxMini; });
__webpack_require__.d(utils_namespaceObject, "isInAliMini", function() { return isInAliMini; });
__webpack_require__.d(utils_namespaceObject, "isOnline", function() { return isOnline; });
__webpack_require__.d(utils_namespaceObject, "urlParams", function() { return urlParams; });
__webpack_require__.d(utils_namespaceObject, "curEnv", function() { return curEnv; });
__webpack_require__.d(utils_namespaceObject, "uuid", function() { return uuid; });
__webpack_require__.d(utils_namespaceObject, "getCurParams", function() { return getCurParams; });
__webpack_require__.d(utils_namespaceObject, "getDealParams", function() { return getDealParams; });
__webpack_require__.d(utils_namespaceObject, "getEventId", function() { return getEventId; });
__webpack_require__.d(utils_namespaceObject, "getCurCid", function() { return getCurCid; });
__webpack_require__.d(utils_namespaceObject, "getUrlCid", function() { return getUrlCid; });
__webpack_require__.d(utils_namespaceObject, "isObject", function() { return isObject; });
__webpack_require__.d(utils_namespaceObject, "log", function() { return log; });
__webpack_require__.d(utils_namespaceObject, "getParam", function() { return getParam; });
__webpack_require__.d(utils_namespaceObject, "ajax", function() { return ajax; });
__webpack_require__.d(utils_namespaceObject, "ready", function() { return ready; });
__webpack_require__.d(utils_namespaceObject, "transitionEvent", function() { return transitionEvent; });
__webpack_require__.d(utils_namespaceObject, "extend", function() { return extend; });
__webpack_require__.d(utils_namespaceObject, "getHashs", function() { return getHashs; });
__webpack_require__.d(utils_namespaceObject, "getQuerys", function() { return getQuerys; });
__webpack_require__.d(utils_namespaceObject, "parseParams", function() { return parseParams; });
__webpack_require__.d(utils_namespaceObject, "dealShareUrl", function() { return dealShareUrl; });
__webpack_require__.d(utils_namespaceObject, "dealRouterUrl", function() { return dealRouterUrl; });
var env_namespaceObject = {};
__webpack_require__.r(env_namespaceObject);
__webpack_require__.d(env_namespaceObject, "ENV", function() { return ENV; });
__webpack_require__.d(env_namespaceObject, "query", function() { return env_query; });
__webpack_require__.d(env_namespaceObject, "isInWeChat", function() { return env_isInWeChat; });
__webpack_require__.d(env_namespaceObject, "isInAlipay", function() { return env_isInAlipay; });
__webpack_require__.d(env_namespaceObject, "isInICBC", function() { return isInICBC; });
__webpack_require__.d(env_namespaceObject, "iframingAncestorWhichIsWebApp", function() { return iframingAncestorWhichIsWebApp; });
__webpack_require__.d(env_namespaceObject, "compareIosVersions", function() { return compareIosVersions; });
__webpack_require__.d(env_namespaceObject, "currentEnv", function() { return currentEnv; });
__webpack_require__.d(env_namespaceObject, "API_HOST", function() { return API_HOST; });
__webpack_require__.d(env_namespaceObject, "ofoAppVersion", function() { return ofoAppVersion; });
__webpack_require__.d(env_namespaceObject, "ofoAppSourceVersion", function() { return ofoAppSourceVersion; });
__webpack_require__.d(env_namespaceObject, "isLikelyInApp", function() { return isLikelyInApp; });
__webpack_require__.d(env_namespaceObject, "isInNewApp", function() { return isInNewApp; });
__webpack_require__.d(env_namespaceObject, "sourceForApi", function() { return sourceForApi; });
__webpack_require__.d(env_namespaceObject, "sourceForSa", function() { return sourceForSa; });
__webpack_require__.d(env_namespaceObject, "ofoAppVersionGte", function() { return ofoAppVersionGte; });
__webpack_require__.d(env_namespaceObject, "ofoApp", function() { return ofoApp; });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__(0);
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(3);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/common/sensorsdata.js


/* eslint-disable */
// https://www.sensorsdata.cn/manual/js_sdk.html#
;(function (p, w) {
    var n = p.name;
    w.sensorsDataAnalytic201505 = n;
    !w[n] && (w[n] = { _q: [], para: p });
})({
    name: 'sa',
    server_url: 'https://scofo.ofo.so:8443/sa'
}, window);

try {
    (function (sd) {
        sd = window[sd];

        if (typeof sd !== 'function' && (typeof sd === 'undefined' ? 'undefined' : typeof_default()(sd)) !== 'object' || sd.has_load_sdk) {
            // 防止重复引入
            return false;
        }

        sd._t = sd._t || +new Date();
        sd.has_load_sdk = true;

        var _ = sd._ = {};

        // 默认配置
        sd.para = sd.para || {};
        sd.para_default = {
            // referrer字符串截取
            max_referrer_string_length: 500,
            // 通用字符串截取，超过7000的字符串会导致url超长发不出去，所以限制长度
            max_string_length: 1000,
            // send_error_event: true,
            cross_subdomain: true,
            show_log: true,
            debug_mode: false,
            debug_mode_upload: false,

            // TODO 前端session时长
            session_time: 0,
            use_client_time: false,

            //来源参数名字
            source_channel: [],

            // 七鱼过滤id
            vtrack_ignore: {},

            auto_init: true
        };

        // 合并配置
        for (var i in sd.para_default) {
            if (sd.para[i] === void 0) {
                sd.para[i] = sd.para_default[i];
            }
        }

        // 优化配置
        if (!/sa\.gif[^\/]*$/.test(sd.para.server_url)) {
            sd.para.server_url = sd.para.server_url.replace(/\/sa$/, '/sa.gif').replace(/(\/sa)(\?[^\/]+)$/, '/sa.gif$2');
        }

        sd.para.debug_mode_url = sd.para.debug_mode_url || sd.para.server_url.replace('sa.gif', 'debug');

        // 是否需要非cache，等于每次请求文件
        if (sd.para.noCache === true) {
            sd.para.noCache = '?' + new Date().getTime();
        } else {
            sd.para.noCache = '';
        }

        // 当前环境信息[浏览器、设备、引擎、操作系统]
        var detector = {};
        (function () {
            var NA_VERSION = "-1";
            var win = window;
            var external = win.external;
            var userAgent = win.navigator.userAgent || "";
            var appVersion = win.navigator.appVersion || "";
            var vendor = win.navigator.vendor || "";

            var re_msie = /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/;
            var re_blackberry_10 = /\bbb10\b.+?\bversion\/([\d.]+)/;
            var re_blackberry_6_7 = /\bblackberry\b.+\bversion\/([\d.]+)/;
            var re_blackberry_4_5 = /\bblackberry\d+\/([\d.]+)/;

            function toString(object) {
                return Object.prototype.toString.call(object);
            }

            function isObject(object) {
                return toString(object) === "[object Object]";
            }

            function isFunction(object) {
                return toString(object) === "[object Function]";
            }

            function each(object, factory) {
                for (var i = 0, l = object.length; i < l; i++) {
                    if (factory.call(object, object[i], i) === false) {
                        break;
                    }
                }
            }

            // 硬件设备信息识别表达式。
            // 使用数组可以按优先级排序。
            var DEVICES = [["nokia", function (ua) {
                // 不能将两个表达式合并，因为可能出现 "nokia; nokia 960"
                // 这种情况下会优先识别出 nokia/-1
                if (ua.indexOf("nokia ") !== -1) {
                    return (/\bnokia ([0-9]+)?/
                    );
                } else {
                    return (/\bnokia([a-z0-9]+)?/
                    );
                }
            }],
            // 三星有 Android 和 WP 设备。
            ["samsung", function (ua) {
                if (ua.indexOf("samsung") !== -1) {
                    return (/\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/
                    );
                } else {
                    return (/\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/
                    );
                }
            }], ["wp", function (ua) {
                return ua.indexOf("windows phone ") !== -1 || ua.indexOf("xblwp") !== -1 || ua.indexOf("zunewp") !== -1 || ua.indexOf("windows ce") !== -1;
            }], ["pc", "windows"], ["ipad", "ipad"],
            // ipod 规则应置于 iphone 之前。
            ["ipod", "ipod"], ["iphone", /\biphone\b|\biph(\d)/], ["mac", "macintosh"],
            // 小米
            ["mi", /\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/],
            // 红米
            ["hongmi", /\bhm[ \-]?([a-z0-9]+)/], ["aliyun", /\baliyunos\b(?:[\-](\d+))?/], ["meizu", function (ua) {
                return ua.indexOf("meizu") >= 0 ? /\bmeizu[\/ ]([a-z0-9]+)\b/ : /\bm([0-9cx]{1,4})\b/;
            }], ["nexus", /\bnexus ([0-9s.]+)/], ["huawei", function (ua) {
                var re_mediapad = /\bmediapad (.+?)(?= build\/huaweimediapad\b)/;
                if (ua.indexOf("huawei-huawei") !== -1) {
                    return (/\bhuawei\-huawei\-([a-z0-9\-]+)/
                    );
                } else if (re_mediapad.test(ua)) {
                    return re_mediapad;
                } else {
                    return (/\bhuawei[ _\-]?([a-z0-9]+)/
                    );
                }
            }], ["lenovo", function (ua) {
                if (ua.indexOf("lenovo-lenovo") !== -1) {
                    return (/\blenovo\-lenovo[ \-]([a-z0-9]+)/
                    );
                } else {
                    return (/\blenovo[ \-]?([a-z0-9]+)/
                    );
                }
            }],
            // 中兴
            ["zte", function (ua) {
                if (/\bzte\-[tu]/.test(ua)) {
                    return (/\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/
                    );
                } else {
                    return (/\bzte[ _\-]?([a-su-z0-9\+]+)/
                    );
                }
            }],
            // 步步高
            ["vivo", /\bvivo(?: ([a-z0-9]+))?/], ["htc", function (ua) {
                if (/\bhtc[a-z0-9 _\-]+(?= build\b)/.test(ua)) {
                    return (/\bhtc[ _\-]?([a-z0-9 ]+(?= build))/
                    );
                } else {
                    return (/\bhtc[ _\-]?([a-z0-9 ]+)/
                    );
                }
            }], ["oppo", /\boppo[_]([a-z0-9]+)/], ["konka", /\bkonka[_\-]([a-z0-9]+)/], ["sonyericsson", /\bmt([a-z0-9]+)/], ["coolpad", /\bcoolpad[_ ]?([a-z0-9]+)/], ["lg", /\blg[\-]([a-z0-9]+)/], ["android", /\bandroid\b|\badr\b/], ["blackberry", function (ua) {
                if (ua.indexOf("blackberry") >= 0) {
                    return (/\bblackberry\s?(\d+)/
                    );
                }
                return "bb10";
            }]];

            // 操作系统信息识别表达式
            var OS = [["wp", function (ua) {
                if (ua.indexOf("windows phone ") !== -1) {
                    return (/\bwindows phone (?:os )?([0-9.]+)/
                    );
                } else if (ua.indexOf("xblwp") !== -1) {
                    return (/\bxblwp([0-9.]+)/
                    );
                } else if (ua.indexOf("zunewp") !== -1) {
                    return (/\bzunewp([0-9.]+)/
                    );
                }
                return "windows phone";
            }], ["windows", /\bwindows nt ([0-9.]+)/], ["macosx", /\bmac os x ([0-9._]+)/], ["iOS", function (ua) {
                if (/\bcpu(?: iphone)? os /.test(ua)) {
                    return (/\bcpu(?: iphone)? os ([0-9._]+)/
                    );
                } else if (ua.indexOf("iph os ") !== -1) {
                    return (/\biph os ([0-9_]+)/
                    );
                } else {
                    return (/\bios\b/
                    );
                }
            }], ["yunos", /\baliyunos ([0-9.]+)/], ["Android", function (ua) {
                if (ua.indexOf("android") >= 0) {
                    return (/\bandroid[ \/-]?([0-9.x]+)?/
                    );
                } else if (ua.indexOf("adr") >= 0) {
                    if (ua.indexOf("mqqbrowser") >= 0) {
                        return (/\badr[ ]\(linux; u; ([0-9.]+)?/
                        );
                    } else {
                        return (/\badr(?:[ ]([0-9.]+))?/
                        );
                    }
                }
                return "android";
                //return /\b(?:android|\badr)(?:[\/\- ](?:\(linux; u; )?)?([0-9.x]+)?/;
            }], ["chromeos", /\bcros i686 ([0-9.]+)/], ["linux", "linux"], ["windowsce", /\bwindows ce(?: ([0-9.]+))?/], ["symbian", /\bsymbian(?:os)?\/([0-9.]+)/], ["blackberry", function (ua) {
                var m = ua.match(re_blackberry_10) || ua.match(re_blackberry_6_7) || ua.match(re_blackberry_4_5);
                return m ? { version: m[1] } : "blackberry";
            }]];

            // 解析使用 Trident 内核的浏览器的 `浏览器模式` 和 `文档模式` 信息。
            // @param {String} ua, userAgent string.
            // @return {Object}
            function IEMode(ua) {
                if (!re_msie.test(ua)) {
                    return null;
                }

                var m, engineMode, engineVersion, browserMode, browserVersion;

                // IE8 及其以上提供有 Trident 信息，
                // 默认的兼容模式，UA 中 Trident 版本不发生变化。
                if (ua.indexOf("trident/") !== -1) {
                    m = /\btrident\/([0-9.]+)/.exec(ua);
                    if (m && m.length >= 2) {
                        // 真实引擎版本。
                        engineVersion = m[1];
                        var v_version = m[1].split(".");
                        v_version[0] = parseInt(v_version[0], 10) + 4;
                        browserVersion = v_version.join(".");
                    }
                }

                m = re_msie.exec(ua);
                browserMode = m[1];
                var v_mode = m[1].split(".");
                if (typeof browserVersion === "undefined") {
                    browserVersion = browserMode;
                }
                v_mode[0] = parseInt(v_mode[0], 10) - 4;
                engineMode = v_mode.join(".");
                if (typeof engineVersion === "undefined") {
                    engineVersion = engineMode;
                }

                return {
                    browserVersion: browserVersion,
                    browserMode: browserMode,
                    engineVersion: engineVersion,
                    engineMode: engineMode,
                    compatible: engineVersion !== engineMode
                };
            }

            // 针对同源的 TheWorld 和 360 的 external 对象进行检测。
            // @param {String} key, 关键字，用于检测浏览器的安装路径中出现的关键字。
            // @return {Undefined,Boolean,Object} 返回 undefined 或 false 表示检测未命中。
            function checkTW360External(key) {
                if (!external) {
                    return;
                } // return undefined.
                try {
                    // 360安装路径：
                    // C:%5CPROGRA~1%5C360%5C360se3%5C360SE.exe
                    var runpath = external.twGetRunPath.toLowerCase();
                    // 360SE 3.x ~ 5.x support.
                    // 暴露的 external.twGetVersion 和 external.twGetSecurityID 均为 undefined。
                    // 因此只能用 try/catch 而无法使用特性判断。
                    var security = external.twGetSecurityID(win);
                    var version = external.twGetVersion(security);

                    if (runpath && runpath.indexOf(key) === -1) {
                        return false;
                    }
                    if (version) {
                        return { version: version };
                    }
                } catch (ex) {/* */
                }
            }

            var ENGINE = [["edgehtml", /edge\/([0-9.]+)/], ["trident", re_msie], ["blink", function () {
                return "chrome" in win && "CSS" in win && /\bapplewebkit[\/]?([0-9.+]+)/;
            }], ["webkit", /\bapplewebkit[\/]?([0-9.+]+)/], ["gecko", function (ua) {
                var match;
                if (match = ua.match(/\brv:([\d\w.]+).*\bgecko\/(\d+)/)) {
                    return {
                        version: match[1] + "." + match[2]
                    };
                }
            }], ["presto", /\bpresto\/([0-9.]+)/], ["androidwebkit", /\bandroidwebkit\/([0-9.]+)/], ["coolpadwebkit", /\bcoolpadwebkit\/([0-9.]+)/], ["u2", /\bu2\/([0-9.]+)/], ["u3", /\bu3\/([0-9.]+)/]];
            var BROWSER = [
            // Microsoft Edge Browser, Default browser in Windows 10.
            ["edge", /edge\/([0-9.]+)/],
            // Sogou.
            ["sogou", function (ua) {
                if (ua.indexOf("sogoumobilebrowser") >= 0) {
                    return (/sogoumobilebrowser\/([0-9.]+)/
                    );
                } else if (ua.indexOf("sogoumse") >= 0) {
                    return true;
                }
                return (/ se ([0-9.x]+)/
                );
            }],
            // TheWorld (世界之窗)
            // 由于裙带关系，TheWorld API 与 360 高度重合。
            // 只能通过 UA 和程序安装路径中的应用程序名来区分。
            // TheWorld 的 UA 比 360 更靠谱，所有将 TheWorld 的规则放置到 360 之前。
            ["theworld", function () {
                var x = checkTW360External("theworld");
                if (typeof x !== "undefined") {
                    return x;
                }
                return "theworld";
            }],
            // 360SE, 360EE.
            ["360", function (ua) {
                var x = checkTW360External("360se");
                if (typeof x !== "undefined") {
                    return x;
                }
                if (ua.indexOf("360 aphone browser") !== -1) {
                    return (/\b360 aphone browser \(([^\)]+)\)/
                    );
                }
                return (/\b360(?:se|ee|chrome|browser)\b/
                );
            }],
            // Maxthon
            ["maxthon", function () {
                try {
                    if (external && (external.mxVersion || external.max_version)) {
                        return {
                            version: external.mxVersion || external.max_version
                        };
                    }
                } catch (ex) {/* */
                }
                return (/\b(?:maxthon|mxbrowser)(?:[ \/]([0-9.]+))?/
                );
            }], ["micromessenger", /\bmicromessenger\/([\d.]+)/], ["qq", /\bm?qqbrowser\/([0-9.]+)/], ["green", "greenbrowser"], ["tt", /\btencenttraveler ([0-9.]+)/], ["liebao", function (ua) {
                if (ua.indexOf("liebaofast") >= 0) {
                    return (/\bliebaofast\/([0-9.]+)/
                    );
                }
                if (ua.indexOf("lbbrowser") === -1) {
                    return false;
                }
                var version;
                try {
                    if (external && external.LiebaoGetVersion) {
                        version = external.LiebaoGetVersion();
                    }
                } catch (ex) {/* */
                }
                return {
                    version: version || NA_VERSION
                };
            }], ["tao", /\btaobrowser\/([0-9.]+)/], ["coolnovo", /\bcoolnovo\/([0-9.]+)/], ["saayaa", "saayaa"],
            // 有基于 Chromniun 的急速模式和基于 IE 的兼容模式。必须在 IE 的规则之前。
            ["baidu", /\b(?:ba?idubrowser|baiduhd)[ \/]([0-9.x]+)/],
            // 后面会做修复版本号，这里只要能识别是 IE 即可。
            ["ie", re_msie], ["mi", /\bmiuibrowser\/([0-9.]+)/],
            // Opera 15 之后开始使用 Chromniun 内核，需要放在 Chrome 的规则之前。
            ["opera", function (ua) {
                var re_opera_old = /\bopera.+version\/([0-9.ab]+)/;
                var re_opera_new = /\bopr\/([0-9.]+)/;
                return re_opera_old.test(ua) ? re_opera_old : re_opera_new;
            }], ["oupeng", /\boupeng\/([0-9.]+)/], ["yandex", /yabrowser\/([0-9.]+)/],
            // 支付宝手机客户端
            ["ali-ap", function (ua) {
                if (ua.indexOf("aliapp") > 0) {
                    return (/\baliapp\(ap\/([0-9.]+)\)/
                    );
                } else {
                    return (/\balipayclient\/([0-9.]+)\b/
                    );
                }
            }],
            // 支付宝平板客户端
            ["ali-ap-pd", /\baliapp\(ap-pd\/([0-9.]+)\)/],
            // 支付宝商户客户端
            ["ali-am", /\baliapp\(am\/([0-9.]+)\)/],
            // 淘宝手机客户端
            ["ali-tb", /\baliapp\(tb\/([0-9.]+)\)/],
            // 淘宝平板客户端
            ["ali-tb-pd", /\baliapp\(tb-pd\/([0-9.]+)\)/],
            // 天猫手机客户端
            ["ali-tm", /\baliapp\(tm\/([0-9.]+)\)/],
            // 天猫平板客户端
            ["ali-tm-pd", /\baliapp\(tm-pd\/([0-9.]+)\)/],
            // UC 浏览器，可能会被识别为 Android 浏览器，规则需要前置。
            // UC 桌面版浏览器携带 Chrome 信息，需要放在 Chrome 之前。
            ["uc", function (ua) {
                if (ua.indexOf("ucbrowser/") >= 0) {
                    return (/\bucbrowser\/([0-9.]+)/
                    );
                } else if (ua.indexOf("ubrowser/") >= 0) {
                    return (/\bubrowser\/([0-9.]+)/
                    );
                } else if (/\buc\/[0-9]/.test(ua)) {
                    return (/\buc\/([0-9.]+)/
                    );
                } else if (ua.indexOf("ucweb") >= 0) {
                    // `ucweb/2.0` is compony info.
                    // `UCWEB8.7.2.214/145/800` is browser info.
                    return (/\bucweb([0-9.]+)?/
                    );
                } else {
                    return (/\b(?:ucbrowser|uc)\b/
                    );
                }
            }], ["chrome", / (?:chrome|crios|crmo)\/([0-9.]+)/],
            // Android 默认浏览器。该规则需要在 safari 之前。
            ["android", function (ua) {
                if (ua.indexOf("android") === -1) {
                    return;
                }
                return (/\bversion\/([0-9.]+(?: beta)?)/
                );
            }], ["blackberry", function (ua) {
                var m = ua.match(re_blackberry_10) || ua.match(re_blackberry_6_7) || ua.match(re_blackberry_4_5);
                return m ? { version: m[1] } : "blackberry";
            }], ["safari", /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//],
            // 如果不能被识别为 Safari，则猜测是 WebView。
            ["webview", /\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/], ["firefox", /\bfirefox\/([0-9.ab]+)/], ["nokia", /\bnokiabrowser\/([0-9.]+)/]];

            // UserAgent Detector.
            // @param {String} ua, userAgent.
            // @param {Object} expression
            // @return {Object}
            // 返回 null 表示当前表达式未匹配成功。
            function detect(name, expression, ua) {
                var expr = isFunction(expression) ? expression.call(null, ua) : expression;
                if (!expr) {
                    return null;
                }
                var info = {
                    name: name,
                    version: NA_VERSION,
                    codename: ""
                };
                var t = toString(expr);
                if (expr === true) {
                    return info;
                } else if (t === "[object String]") {
                    if (ua.indexOf(expr) !== -1) {
                        return info;
                    }
                } else if (isObject(expr)) {
                    // Object
                    if (expr.hasOwnProperty("version")) {
                        info.version = expr.version;
                    }
                    return info;
                } else if (expr.exec) {
                    // RegExp
                    var m = expr.exec(ua);
                    if (m) {
                        if (m.length >= 2 && m[1]) {
                            info.version = m[1].replace(/_/g, ".");
                        } else {
                            info.version = NA_VERSION;
                        }
                        return info;
                    }
                }
            }

            var na = { name: "na", version: NA_VERSION };

            // 初始化识别。
            function init(ua, patterns, factory, detector) {
                var detected = na;
                each(patterns, function (pattern) {
                    var d = detect(pattern[0], pattern[1], ua);
                    if (d) {
                        detected = d;
                        return false;
                    }
                });
                factory.call(detector, detected.name, detected.version);
            }

            // 解析 UserAgent 字符串
            // @param {String} ua, userAgent string.
            // @return {Object}
            var parse = function parse(ua) {
                ua = (ua || "").toLowerCase();
                var d = {};

                init(ua, DEVICES, function (name, version) {
                    var v = parseFloat(version);
                    d.device = {
                        name: name,
                        version: v,
                        fullVersion: version
                    };
                    d.device[name] = v;
                }, d);

                init(ua, OS, function (name, version) {
                    var v = parseFloat(version);
                    d.os = {
                        name: name,
                        version: v,
                        fullVersion: version
                    };
                    d.os[name] = v;
                }, d);

                var ieCore = IEMode(ua);

                init(ua, ENGINE, function (name, version) {
                    var mode = version;
                    // IE 内核的浏览器，修复版本号及兼容模式。
                    if (ieCore) {
                        version = ieCore.engineVersion || ieCore.engineMode;
                        mode = ieCore.engineMode;
                    }
                    var v = parseFloat(version);
                    d.engine = {
                        name: name,
                        version: v,
                        fullVersion: version,
                        mode: parseFloat(mode),
                        fullMode: mode,
                        compatible: ieCore ? ieCore.compatible : false
                    };
                    d.engine[name] = v;
                }, d);

                init(ua, BROWSER, function (name, version) {
                    var mode = version;
                    // IE 内核的浏览器，修复浏览器版本及兼容模式。
                    if (ieCore) {
                        // 仅修改 IE 浏览器的版本，其他 IE 内核的版本不修改。
                        if (name === "ie") {
                            version = ieCore.browserVersion;
                        }
                        mode = ieCore.browserMode;
                    }
                    var v = parseFloat(version);
                    d.browser = {
                        name: name,
                        version: v,
                        fullVersion: version,
                        mode: parseFloat(mode),
                        fullMode: mode,
                        compatible: ieCore ? ieCore.compatible : false
                    };
                    d.browser[name] = v;
                }, d);
                return d;
            };

            detector = parse(userAgent + " " + appVersion + " " + vendor);
        })();

        var ArrayProto = Array.prototype,
            FuncProto = Function.prototype,
            ObjProto = Object.prototype,
            slice = ArrayProto.slice,
            toString = ObjProto.toString,
            hasOwnProperty = ObjProto.hasOwnProperty,
            LIB_VERSION = '1.6.18';

        sd.lib_version = LIB_VERSION;

        // 提供错误日志
        var error_msg = [];
        var is_first_visitor = false;

        var just_test_distinctid = 0;
        var just_test_distinctid_2 = 0;
        var just_test_distinctid_detail = 0;
        var just_test_distinctid_detail2 = 0;

        // 标准广告系列来源
        var source_channel_standard = 'utm_source utm_medium utm_campaign utm_content utm_term';

        // 封装console.log
        var logger = (typeof logger === 'undefined' ? 'undefined' : typeof_default()(logger)) === 'object' ? logger : {};
        logger.info = function () {
            if (!sd.para.show_log) {
                return false;
            }

            if ((typeof console === 'undefined' ? 'undefined' : typeof_default()(console)) === 'object' && console.log) {
                try {
                    return console.log.apply(console, arguments);
                } catch (e) {
                    console.log(arguments[0]);
                }
            }
        };

        (function () {
            // var nativeBind = FuncProto.bind,
            var nativeForEach = ArrayProto.forEach,
                nativeIndexOf = ArrayProto.indexOf,
                nativeIsArray = Array.isArray,
                breaker = {};

            var each = _.each = function (obj, iterator, context) {
                if (obj == null) {
                    return false;
                }

                if (nativeForEach && obj.forEach === nativeForEach) {
                    obj.forEach(iterator, context);
                } else if (obj.length === +obj.length) {
                    for (var i = 0, l = obj.length; i < l; i++) {
                        if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) {
                            return false;
                        }
                    }
                } else {
                    for (var key in obj) {
                        if (hasOwnProperty.call(obj, key)) {
                            if (iterator.call(context, obj[key], key, obj) === breaker) {
                                return false;
                            }
                        }
                    }
                }
            };

            _.logger = logger;

            // 普通的extend，不能到二级
            _.extend = function (obj) {
                each(slice.call(arguments, 1), function (source) {
                    for (var prop in source) {
                        if (source[prop] !== void 0) {
                            obj[prop] = source[prop];
                        }
                    }
                });
                return obj;
            };

            // 允许二级的extend
            _.extend2Lev = function (obj) {
                each(slice.call(arguments, 1), function (source) {
                    for (var prop in source) {
                        if (source[prop] !== void 0) {
                            if (_.isObject(source[prop]) && _.isObject(obj[prop])) {
                                _.extend(obj[prop], source[prop]);
                            } else {
                                obj[prop] = source[prop];
                            }
                        }
                    }
                });
                return obj;
            };

            // 如果已经有的属性不覆盖, 如果没有的属性加进来
            _.coverExtend = function (obj) {
                each(slice.call(arguments, 1), function (source) {
                    for (var prop in source) {
                        if (source[prop] !== void 0 && obj[prop] === void 0) {
                            obj[prop] = source[prop];
                        }
                    }
                });
                return obj;
            };

            _.isArray = nativeIsArray || function (obj) {
                return toString.call(obj) === '[object Array]';
            };

            _.isFunction = function (f) {
                try {
                    return (/^\s*\bfunction\b/.test(f)
                    );
                } catch (x) {
                    return false;
                }
            };

            _.isArguments = function (obj) {
                return !!(obj && hasOwnProperty.call(obj, 'callee'));
            };

            _.toArray = function (iterable) {
                if (!iterable) {
                    return [];
                }
                if (iterable.toArray) {
                    return iterable.toArray();
                }
                if (_.isArray(iterable)) {
                    return slice.call(iterable);
                }
                if (_.isArguments(iterable)) {
                    return slice.call(iterable);
                }
                return _.values(iterable);
            };

            _.values = function (obj) {
                var results = [];
                if (obj == null) {
                    return results;
                }
                each(obj, function (value) {
                    results[results.length] = value;
                });
                return results;
            };

            _.include = function (obj, target) {
                var found = false;
                if (obj == null) {
                    return found;
                }
                if (nativeIndexOf && obj.indexOf === nativeIndexOf) {
                    return obj.indexOf(target) != -1;
                }
                each(obj, function (value) {
                    if (found || (found = value === target)) {
                        return breaker;
                    }
                });
                return found;
            };
        })();

        _.detector = detector;

        // 某种继承
        _.inherit = function (subclass, superclass) {
            subclass.prototype = new superclass();
            subclass.prototype.constructor = subclass;
            subclass.superclass = superclass.prototype;

            return subclass;
        };

        _.trim = function (str) {
            return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };

        _.isObject = function (obj) {
            return toString.call(obj) == '[object Object]' && obj != null;
        };

        _.isEmptyObject = function (obj) {
            if (_.isObject(obj)) {
                for (var key in obj) {
                    if (hasOwnProperty.call(obj, key)) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        };

        _.isUndefined = function (obj) {
            return obj === void 0;
        };

        _.isString = function (obj) {
            return toString.call(obj) == '[object String]';
        };

        _.isDate = function (obj) {
            return toString.call(obj) == '[object Date]';
        };

        _.isBoolean = function (obj) {
            return toString.call(obj) == '[object Boolean]';
        };

        _.isNumber = function (obj) {
            return toString.call(obj) == '[object Number]' && /[\d\.]+/.test(String(obj));
        };

        // 是否为可解析JSON字符串
        _.isJSONString = function (str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        };

        // gbk等编码decode报错|Uncaught URIError: URI malformed
        _.decodeURIComponent = function (val) {
            var result = '';
            try {
                result = decodeURIComponent(val);
            } catch (e) {
                result = val;
            };

            return result;
        };

        _.encodeDates = function (obj) {
            _.each(obj, function (v, k) {
                if (_.isDate(v)) {
                    obj[k] = _.formatDate(v);
                } else if (_.isObject(v)) {
                    obj[k] = _.encodeDates(v); // recurse
                }
            });
            return obj;
        };

        _.formatDate = function (d) {
            function pad(n) {
                return n < 10 ? '0' + n : n;
            }

            return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()) + '.' + pad(d.getMilliseconds());
        };

        // 把日期格式全部转化成日期字符串
        _.searchObjDate = function (o) {
            if (_.isObject(o)) {
                _.each(o, function (a, b) {
                    if (_.isObject(a)) {
                        _.searchObjDate(o[b]);
                    } else {
                        if (_.isDate(a)) {
                            o[b] = _.formatDate(a);
                        }
                    }
                });
            }
        };

        // 把字符串格式数据限制字符串长度
        _.formatString = function (str) {
            if (str.length > sd.para.max_string_length) {
                logger.info('字符串长度超过限制，已经做截取--' + str);
                return str.slice(0, sd.para.max_string_length);
            }

            return str;
        };

        // 遍历对象，处理内部字符串，限制长度
        _.searchObjString = function (o) {
            if (_.isObject(o)) {
                _.each(o, function (a, b) {
                    if (_.isObject(a)) {
                        _.searchObjString(o[b]);
                    } else {
                        if (_.isString(a)) {
                            o[b] = _.formatString(a);
                        }
                    }
                });
            }
        };

        // 数组去重复
        _.unique = function (ar) {
            var temp,
                n = [],
                o = {};
            for (var i = 0; i < ar.length; i++) {
                temp = ar[i];
                if (!(temp in o)) {
                    o[temp] = true;
                    n.push(temp);
                }
            }

            return n;
        };

        // 只能是sensors满足的数据格式
        _.strip_sa_properties = function (p) {
            if (!_.isObject(p)) {
                return p;
            }

            _.each(p, function (v, k) {
                // 如果是数组，把值自动转换成string
                if (_.isArray(v)) {
                    var temp = [];
                    _.each(v, function (arrv) {
                        if (_.isString(arrv)) {
                            temp.push(arrv);
                        } else {
                            logger.info('您的数据-', v, '的数组里的值必须是字符串,已经将其删除');
                        }
                    });
                    if (temp.length !== 0) {
                        p[k] = temp;
                    } else {
                        delete p[k];
                        logger.info('已经删除空的数组');
                    }
                }

                // 只能是字符串，数字，日期，布尔，数组
                if (!(_.isString(v) || _.isNumber(v) || _.isDate(v) || _.isBoolean(v) || _.isArray(v))) {
                    logger.info('您的数据-', v, '-格式不满足要求，我们已经将其删除');
                    delete p[k];
                }
            });

            return p;
        };

        // 去掉undefined和null
        _.strip_empty_properties = function (p) {
            var ret = {};
            _.each(p, function (v, k) {
                if (v != null) {
                    ret[k] = v;
                }
            });

            return ret;
        };

        _.utf8Encode = function (string) {
            string = (string + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

            var utftext = '',
                start,
                end;
            var stringl = 0,
                n;

            start = end = 0;
            stringl = string.length;

            for (n = 0; n < stringl; n++) {
                var c1 = string.charCodeAt(n);
                var enc = null;

                if (c1 < 128) {
                    end++;
                } else if (c1 > 127 && c1 < 2048) {
                    enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
                } else {
                    enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
                }
                if (enc !== null) {
                    if (end > start) {
                        utftext += string.substring(start, end);
                    }
                    utftext += enc;
                    start = end = n + 1;
                }
            }

            if (end > start) {
                utftext += string.substring(start, string.length);
            }

            return utftext;
        };

        _.base64Encode = function (data) {
            var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            var o1,
                o2,
                o3,
                h1,
                h2,
                h3,
                h4,
                bits,
                i = 0,
                ac = 0,
                enc = '',
                tmp_arr = [];
            if (!data) {
                return data;
            }
            data = _.utf8Encode(data);
            do {
                o1 = data.charCodeAt(i++);
                o2 = data.charCodeAt(i++);
                o3 = data.charCodeAt(i++);

                bits = o1 << 16 | o2 << 8 | o3;

                h1 = bits >> 18 & 0x3f;
                h2 = bits >> 12 & 0x3f;
                h3 = bits >> 6 & 0x3f;
                h4 = bits & 0x3f;
                tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
            } while (i < data.length);

            enc = tmp_arr.join('');

            switch (data.length % 3) {
                case 1:
                    enc = enc.slice(0, -2) + '==';
                    break;
                case 2:
                    enc = enc.slice(0, -1) + '=';
                    break;
            }

            return enc;
        };

        _.UUID = function () {
            var T = function T() {
                var d = 1 * new Date(),
                    i = 0;
                while (d == 1 * new Date()) {
                    i++;
                }
                return d.toString(16) + i.toString(16);
            };
            var R = function R() {
                return Math.random().toString(16).replace('.', '');
            };
            var UA = function UA(n) {
                var ua = navigator.userAgent,
                    i,
                    ch,
                    buffer = [],
                    ret = 0;

                function xor(result, byte_array) {
                    var j,
                        tmp = 0;
                    for (j = 0; j < byte_array.length; j++) {
                        tmp |= buffer[j] << j * 8;
                    }
                    return result ^ tmp;
                }

                for (i = 0; i < ua.length; i++) {
                    ch = ua.charCodeAt(i);
                    buffer.unshift(ch & 0xFF);
                    if (buffer.length >= 4) {
                        ret = xor(ret, buffer);
                        buffer = [];
                    }
                }

                if (buffer.length > 0) {
                    ret = xor(ret, buffer);
                }

                return ret.toString(16);
            };

            return function () {
                // 有些浏览器取个屏幕宽度都异常...
                var se = String(screen.height * screen.width);
                if (se && /\d{5,}/.test(se)) {
                    se = se.toString(16);
                } else {
                    se = String(Math.random() * 31242).replace('.', '').slice(0, 8);
                }
                var val = T() + '-' + R() + '-' + UA() + '-' + se + '-' + T();
                if (val) {
                    just_test_distinctid_2 = 1;
                    return val;
                } else {
                    just_test_distinctid_2 = 2;
                    return (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15);
                }
            };
        }();

        _.getQueryParam = function (url, param) {
            param = param.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + param + "=([^&#]*)",
                regex = new RegExp(regexS),
                results = regex.exec(url);

            if (results === null || results && typeof results[1] !== 'string' && results[1].length) {
                return '';
            }

            return _.decodeURIComponent(results[1]).replace(/\+/g, ' ');
        };

        // URL解析，识别协议、域名、查询字符等等等
        _.urlParse = function (para) {
            var URLParser = function URLParser(a) {
                this._fields = {
                    Username: 4,
                    Password: 5,
                    Port: 7,
                    Protocol: 2,
                    Host: 6,
                    Path: 8,
                    URL: 0,
                    QueryString: 9,
                    Fragment: 10
                };
                this._values = {};
                this._regex = null;
                this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/;

                if (typeof a != 'undefined') {
                    this._parse(a);
                }
            };
            URLParser.prototype.setUrl = function (a) {
                this._parse(a);
            };
            URLParser.prototype._initValues = function () {
                for (var a in this._fields) {
                    this._values[a] = '';
                }
            };
            URLParser.prototype.getUrl = function () {
                var url = '';
                url += this._values.Origin;
                url += this._values.Port ? ':' + this._values.Port : '';
                url += this._values.Path;
                url += this._values.QueryString ? '?' + this._values.QueryString : '';
                return url;
            };
            URLParser.prototype._parse = function (a) {
                this._initValues();
                var b = this._regex.exec(a);
                if (!b) {
                    throw 'DPURLParser::_parse -> Invalid URL';
                }
                for (var c in this._fields) {
                    if (typeof b[this._fields[c]] != 'undefined') {
                        this._values[c] = b[this._fields[c]];
                    }
                }
                this._values['Hostname'] = this._values['Host'].replace(/:\d+$/, '');
                this._values['Origin'] = this._values['Protocol'] + '://' + this._values['Hostname'];
            };
            return new URLParser(para);
        };

        /* //ulr预置
        _.referringDomain = function (referrer) {
            var split = referrer.split('/');
            if (split.length >= 3) {
                return split[2];
            }
            return '';
        };
         _.getDomainByHost = function (url) {
            if (typeof url === 'string' && url.split('.').length >= 2) {
                var temp = url.match(/[^\.]+\.[^.]+$/);
                if (temp && temp[0]) {
                    return temp[0];
                } else {
                    return '';
                }
            } else {
                return '';
            }
        } */

        // 是否有标准的浏览器环境,如果不是发送$errorEnviroment:{$errorReson:'没有window'}
        _.hasStandardBrowserEnviroment = function () {
            if (!window) {
                return 'window';
            }
            if (!document) {
                return 'document';
            }
            if (!navigator) {
                return 'navigator';
            }
            if (!screen) {
                return 'screen';
            }
        };

        // 兼容DOMContentLoaded，domReady事件
        _.bindReady = function (handler) {
            var called = false;

            function ready() {
                if (called) {
                    return false;
                }
                called = true;
                handler();
            }

            function tryScroll() {
                if (called) return;
                try {
                    document.documentElement.doScroll("left");
                    ready();
                } catch (e) {
                    setTimeout(tryScroll, 10);
                }
            }

            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", ready, false);
            } else if (document.attachEvent) {
                try {
                    var isFrame = window.frameElement != null;
                } catch (e) {}
                if (document.documentElement.doScroll && !isFrame) {
                    tryScroll();
                }
                document.attachEvent("onreadystatechange", function () {
                    if (document.readyState === "complete") {
                        ready();
                    }
                });
            }
            if (window.addEventListener) {
                window.addEventListener('load', ready, false);
            } else if (window.attachEvent) {
                window.attachEvent('onload', ready);
            } else {
                var fn = window.onload;
                window.onload = function () {
                    fn && fn();
                    ready();
                };
            }
        };

        // 兼容事件监听器
        _.addEvent = function () {
            var register_event = function register_event(element, type, handler) {
                if (element.addEventListener) {
                    element.addEventListener(type, handler, false);
                } else {
                    var ontype = 'on' + type;
                    var old_handler = element[ontype];
                    element[ontype] = makeHandler(element, handler, old_handler);
                }
            };

            function makeHandler(element, new_handler, old_handlers) {
                var handler = function handler(event) {
                    event = event || fixEvent(window.event);
                    if (!event) {
                        return undefined;
                    }
                    event.target = event.srcElement;

                    var ret = true;
                    var old_result, new_result;
                    if (_.isFunction(old_handlers)) {
                        old_result = old_handlers(event);
                    }
                    new_result = new_handler.call(element, event);
                    if (false === old_result || false === new_result) {
                        ret = false;
                    }
                    return ret;
                };
                return handler;
            }

            function fixEvent(event) {
                if (event) {
                    event.preventDefault = fixEvent.preventDefault;
                    event.stopPropagation = fixEvent.stopPropagation;
                }
                return event;
            }

            fixEvent.preventDefault = function () {
                this.returnValue = false;
            };
            fixEvent.stopPropagation = function () {
                this.cancelBubble = true;
            };
            register_event.apply(null, arguments);
        };

        _.cookie = {
            get: function get(name) {
                var nameEQ = name + '=';
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1, c.length);
                    }
                    if (c.indexOf(nameEQ) == 0) {
                        return _.decodeURIComponent(c.substring(nameEQ.length, c.length));
                    }
                }
                return null;
            },
            set: function set(name, value, days, cross_subdomain, is_secure) {
                cross_subdomain = typeof cross_subdomain === 'undefined' ? sd.para.cross_subdomain : cross_subdomain;
                var cdomain = '',
                    expires = '',
                    secure = '';
                days = typeof days === 'undefined' ? 730 : days;

                if (cross_subdomain) {
                    var matches = document.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i),
                        domain = matches ? matches[0] : '';

                    cdomain = domain ? '; domain=.' + domain : '';
                }

                // 0 session
                // -1 马上过期
                if (days !== 0) {
                    var date = new Date();
                    // 默认是天，可以是秒
                    if (String(days).slice(-1) === 's') {
                        date.setTime(date.getTime() + Number(String(days).slice(0, -1)) * 1000);
                    } else {
                        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                    }

                    expires = '; expires=' + date.toGMTString();
                }

                if (is_secure) {
                    secure = '; secure';
                }

                document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/' + cdomain + secure;
            },
            remove: function remove(name, cross_subdomain) {
                cross_subdomain = typeof cross_subdomain === 'undefined' ? sd.para.cross_subdomain : cross_subdomain;
                _.cookie.set(name, '', -1, cross_subdomain);
            }
        };

        _.localStorage = {
            get: function get(name) {
                return window.localStorage.getItem(name);
            },
            set: function set(name, value) {
                window.localStorage.setItem(name, value);
            },
            remove: function remove(name) {
                window.localStorage.removeItem(name);
            },
            parse: function parse(name) {
                var storedValue;
                try {
                    storedValue = JSON.parse(_.localStorage.get(name)) || null;
                } catch (err) {}
                return storedValue;
            },
            isSupport: function isSupport() {
                var supported = true;
                try {
                    var key = '__sensorsdatasupport__',
                        val = 'testIsSupportStorage';
                    _.localStorage.set(key, val);
                    if (_.localStorage.get(key) !== val) {
                        supported = false;
                    }
                    _.localStorage.remove(key);
                } catch (err) {
                    supported = false;
                }
                return supported;
            }
        };

        // 兼容XMLHttpRequest
        _.xhr = function (cors) {
            if (cors) {
                var xhr = new XMLHttpRequest();
                if ("withCredentials" in xhr) {
                    return xhr;
                } else if (typeof XDomainRequest != 'undefined') {
                    return new XDomainRequest();
                } else {
                    return xhr;
                }
            } else {
                if (XMLHttpRequest) {
                    return new XMLHttpRequest();
                }
                if (window.ActiveXObject) {
                    try {
                        return new ActiveXObject('Msxml2.XMLHTTP');
                    } catch (d) {
                        try {
                            return new ActiveXObject('Microsoft.XMLHTTP');
                        } catch (d) {}
                    }
                }
            }
        };

        _.ajax = function (para) {
            function getJSON(data) {
                try {
                    return JSON.parse(data);
                } catch (e) {
                    return {};
                }
            }

            var g = _.xhr(para.cors);
            if (!para.type) {
                para.type = para.data ? 'POST' : 'GET';
            }
            para = _.extend({
                success: function success() {},
                error: function error() {}
            }, para);

            g.onreadystatechange = function () {
                if (g.readyState == 4) {
                    if (g.status >= 200 && g.status < 300 || g.status == 304) {
                        para.success(getJSON(g.responseText));
                    } else {
                        para.error(getJSON(g.responseText), g.status);
                    }
                    g.onreadystatechange = null;
                    g.onload = null;
                }
            };

            g.open(para.type, para.url, true);

            try {
                g.withCredentials = true;

                if (_.isObject(para.header)) {
                    for (var i in para.header) {
                        g.setRequestHeader(i, para.header[i]);
                    }
                }

                if (para.data) {
                    g.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    if (para.contentType === 'application/json') {
                        g.setRequestHeader("Content-type", "application/json; charset=UTF-8");
                    } else {
                        g.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    }
                }
            } catch (e) {}

            g.send(para.data || null);
        };

        /**
         * 轻量级javascript-url解析器
         * https://github.com/websanova/js-url
         *
         * http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese
         * url();            // http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese
         * url('tld');       // co.uk
         * url('domain');    // example.co.uk
         * url('hostname');  // www.example.co.uk
         * url('sub');       // www
         * url('.0')         // undefined
         * url('.1')         // www
         * url('.2')         // example
         * url('.-1')        // uk
         * url('auth')       // rob:abcd1234
         * url('user')       // rob
         * url('pass')       // abcd1234
         * url('port');      // 80
         * url('protocol');  // http
         * url('path');      // /path/index.html
         * url('file');      // index.html
         * url('filename');  // index
         * url('fileext');   // html
         * url('1');         // path
         * url('2');         // index.html
         * url('3');         // undefined
         * url('-1');        // index.html
         * url(1);           // path
         * url(2);           // index.html
         * url(-1);          // index.html
         * url('query');     // query1=test&silly=willy
         * url('?');         // {query1: 'test', silly: 'willy', field: ['zero', undefined, 'two']}
         * url('?silly');    // willy
         * url('?poo');      // undefined
         * url('field[0]')   // zero
         * url('field')      // ['zero', undefined, 'two']
         * url('hash');      // test=hash&chucky=cheese
         * url('#');         // {test: 'hash', chucky: 'cheese'}
         * url('#chucky');   // cheese
         * url('#poo');      // undefined
         */
        _.url = function () {
            function _t() {
                return new RegExp(/(.*?)\.?([^\.]*?)\.?(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/);
            }

            function _d(s) {
                return _.decodeURIComponent(s.replace(/\+/g, ' '));
            }

            function _i(arg, str) {
                var sptr = arg.charAt(0),
                    split = str.split(sptr);

                if (sptr === arg) {
                    return split;
                }

                arg = parseInt(arg.substring(1), 10);

                return split[arg < 0 ? split.length + arg : arg - 1];
            }

            function _f(arg, str) {
                var sptr = arg.charAt(0),
                    split = str.split('&'),
                    field = [],
                    params = {},
                    tmp = [],
                    arg2 = arg.substring(1);

                for (var i = 0, ii = split.length; i < ii; i++) {
                    field = split[i].match(/(.*?)=(.*)/);

                    // TODO: regex should be able to handle this.
                    if (!field) {
                        field = [split[i], split[i], ''];
                    }

                    if (field[1].replace(/\s/g, '') !== '') {
                        field[2] = _d(field[2] || '');

                        // If we have a match just return it right away.
                        if (arg2 === field[1]) {
                            return field[2];
                        }

                        // Check for array pattern.
                        tmp = field[1].match(/(.*)\[([0-9]+)\]/);

                        if (tmp) {
                            params[tmp[1]] = params[tmp[1]] || [];

                            params[tmp[1]][tmp[2]] = field[2];
                        } else {
                            params[field[1]] = field[2];
                        }
                    }
                }

                if (sptr === arg) {
                    return params;
                }

                return params[arg2];
            }

            return function (arg, url) {
                var _l = {},
                    tmp;

                if (arg === 'tld?') {
                    return _t();
                }

                url = url || window.location.toString();

                if (!arg) {
                    return url;
                }

                arg = arg.toString();

                if (tmp = url.match(/^mailto:([^\/].+)/)) {
                    _l.protocol = 'mailto';
                    _l.email = tmp[1];
                } else {
                    // Ignore Hashbangs.
                    if (tmp = url.match(/(.*?)\/#\!(.*)/)) {
                        url = tmp[1] + tmp[2];
                    }

                    // Hash.
                    if (tmp = url.match(/(.*?)#(.*)/)) {
                        _l.hash = tmp[2];
                        url = tmp[1];
                    }

                    // Return hash parts.
                    if (_l.hash && arg.match(/^#/)) {
                        return _f(arg, _l.hash);
                    }

                    // Query
                    if (tmp = url.match(/(.*?)\?(.*)/)) {
                        _l.query = tmp[2];
                        url = tmp[1];
                    }

                    // Return query parts.
                    if (_l.query && arg.match(/^\?/)) {
                        return _f(arg, _l.query);
                    }

                    // Protocol.
                    if (tmp = url.match(/(.*?)\:?\/\/(.*)/)) {
                        _l.protocol = tmp[1].toLowerCase();
                        url = tmp[2];
                    }

                    // Path.
                    if (tmp = url.match(/(.*?)(\/.*)/)) {
                        _l.path = tmp[2];
                        url = tmp[1];
                    }

                    // Clean up path.
                    _l.path = (_l.path || '').replace(/^([^\/])/, '/$1').replace(/\/$/, '');

                    // Return path parts.
                    if (arg.match(/^[\-0-9]+$/)) {
                        arg = arg.replace(/^([^\/])/, '/$1');
                    }
                    if (arg.match(/^\//)) {
                        return _i(arg, _l.path.substring(1));
                    }

                    // File.
                    tmp = _i('/-1', _l.path.substring(1));

                    if (tmp && (tmp = tmp.match(/(.*?)\.(.*)/))) {
                        _l.file = tmp[0];
                        _l.filename = tmp[1];
                        _l.fileext = tmp[2];
                    }

                    // Port.
                    if (tmp = url.match(/(.*)\:([0-9]+)$/)) {
                        _l.port = tmp[2];
                        url = tmp[1];
                    }

                    // Auth.
                    if (tmp = url.match(/(.*?)@(.*)/)) {
                        _l.auth = tmp[1];
                        url = tmp[2];
                    }

                    // User and pass.
                    if (_l.auth) {
                        tmp = _l.auth.match(/(.*)\:(.*)/);

                        _l.user = tmp ? tmp[1] : _l.auth;
                        _l.pass = tmp ? tmp[2] : undefined;
                    }

                    // Hostname.
                    _l.hostname = url.toLowerCase();

                    // Return hostname parts.
                    if (arg.charAt(0) === '.') {
                        return _i(arg, _l.hostname);
                    }

                    // Domain, tld and sub domain.
                    if (_t()) {
                        tmp = _l.hostname.match(_t());

                        if (tmp) {
                            _l.tld = tmp[3];
                            _l.domain = tmp[2] ? tmp[2] + '.' + tmp[3] : undefined;
                            _l.sub = tmp[1] || undefined;
                        }
                    }

                    // Set port and protocol defaults if not set.
                    _l.port = _l.port || (_l.protocol === 'https' ? '443' : '80');
                    _l.protocol = _l.protocol || (_l.port === '443' ? 'https' : 'http');
                }

                // Return arg.
                if (arg in _l) {
                    return _l[arg];
                }

                // Return everything.
                if (arg === '{}') {
                    return _l;
                }

                // Default to undefined for no match.
                return undefined;
            };
        }();

        _.dom = {};

        // URL数据及页面预设数据
        _.info = {
            initPage: function initPage() {
                var referrer = document.referrer;
                var referrer_host = referrer ? _.url('hostname', referrer) : referrer;
                var referrer_domain = referrer ? _.url('domain', referrer) : referrer;
                var url = location.href;
                var url_host = url ? _.url('hostname', url) : url;
                var url_domain = url ? _.url('domain', url) : url;
                this.pageProp = {
                    referrer: referrer,
                    referrer_host: referrer_host,
                    referrer_domain: referrer_domain,
                    url: url,
                    url_host: url_host,
                    url_domain: url_domain
                };
            },
            // 当前页面的一些属性，在store初始化时生成
            pageProp: {},
            // Google UTM跟踪模块参数
            campaignParams: function campaignParams() {
                var campaign_keywords = source_channel_standard.split(' '),
                    kw = '',
                    params = {};
                if (_.isArray(sd.para.source_channel) && sd.para.source_channel.length > 0) {
                    campaign_keywords = campaign_keywords.concat(sd.para.source_channel);
                    campaign_keywords = _.unique(campaign_keywords);
                }
                _.each(campaign_keywords, function (kwkey) {
                    kw = _.getQueryParam(location.href, kwkey);
                    if (kw.length) {
                        params[kwkey] = kw;
                    }
                });

                return params;
            },
            // 区分Google定义UTM5参数与自定义参数
            campaignParamsStandard: function campaignParamsStandard(prefix, prefix_add) {
                prefix = prefix || '';
                prefix_add = prefix_add || '';
                var utms = _.info.campaignParams();
                var $utms = {},
                    otherUtms = {};
                for (var i in utms) {
                    if ((' ' + source_channel_standard + ' ').indexOf(' ' + i + ' ') !== -1) {
                        $utms[prefix + i] = utms[i];
                    } else {
                        otherUtms[prefix_add + i] = utms[i];
                    }
                }
                return {
                    $utms: $utms,
                    otherUtms: otherUtms
                };
            },
            // 预置属性
            properties: function properties() {
                return {
                    $os: detector.os.name,
                    $model: detector.device.name,
                    $os_version: String(detector.os.version),
                    $screen_height: Number(screen.height) || 0,
                    $screen_width: Number(screen.width) || 0,
                    $lib: 'js',
                    $lib_version: String(LIB_VERSION),
                    $browser: detector.browser.name,
                    $browser_version: String(detector.browser.version)
                };
            },
            // 保存临时的一些变量，只针对当前页面有效
            currentProps: {},
            register: function register(obj) {
                _.extend(_.info.currentProps, obj);
            }
        };

        // 数据发送状态
        sd.sendState = {};
        // 发送数
        sd.sendState._receive = 0;
        // 成功数
        sd.sendState._complete = 0;
        sd.sendState.getSendCall = function (data, callback) {
            ++this._receive;
            var state = '_state' + this._receive;
            var me = this;
            this[state] = document.createElement('img');
            this[state].onload = this[state].onerror = function (e) {
                me[state].onload = null;
                me[state].onerror = null;
                delete me[state];
                ++me._complete;
                typeof callback === 'function' && callback();
            };

            // 加cache防止缓存
            data._nocache = (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15);

            // ------------->
            // 增加时间，用于后端解析，理论上此处应有后端接收日志时取后端时间打日志，避免前端修改时间等造成误差
            data.time = data.event_time = new Date().getTime();
            // <-------------

            // 打印最终数据至控制台
            if (data.properties.View) {
                logger.info('Event: ' + data.event, '\nView: ' + data.properties.View + '\n', data, '\n\n');
            } else if (data.properties.Click) {
                logger.info('Event: ' + data.event, '\nClick: ' + data.properties.Click + '\n', data, '\n\n');
            } else {
                logger.info(data, '\n\n');
            }

            data = stringify_default()(data);
            if (sd.para.server_url.indexOf('?') !== -1) {
                this[state].src = sd.para.server_url + '&data=' + encodeURIComponent(_.base64Encode(data));
            } else {
                this[state].src = sd.para.server_url + '?data=' + encodeURIComponent(_.base64Encode(data));
            }
        };

        /**
         * 检查是否是新用户[首次、首日]
         *
         * 通过读取cookie值，判断是否为第一次
         * 如未第一次，本次访问为首次且通过cookie设置当天有效值，记录首日
         */
        var saNewUser = {
            is_first_visit_time: false,
            checkIsAddSign: function checkIsAddSign(data) {
                if (data.type === 'track') {
                    if (_.cookie.get('sensorsdata_is_new_user') !== null) {
                        data.properties.$is_first_day = true;
                    } else {
                        data.properties.$is_first_day = false;
                    }
                }
            },
            checkIsFirstTime: function checkIsFirstTime(data) {
                if (data.type === 'track') {
                    if (this.is_first_visit_time) {
                        data.properties.$is_first_time = true;
                        this.is_first_visit_time = false;
                    } else {
                        data.properties.$is_first_time = false;
                    }
                }
            },
            storeInitCheck: function storeInitCheck() {
                // 如果是新用户，种cookie
                if (is_first_visitor) {
                    var date = new Date();
                    var obj = {
                        h: 23 - date.getHours(),
                        m: 59 - date.getMinutes(),
                        s: 59 - date.getSeconds()
                    };
                    _.cookie.set('sensorsdata_is_new_user', 'true', obj.h * 3600 + obj.m * 60 + obj.s + 's');
                    // 如果是is_first_visit_time，且第一次，那就发数据
                    this.is_first_visit_time = true;
                } else {
                    // 如果没有这个cookie，肯定不是首日
                    if (_.cookie.get('sensorsdata_is_new_user') === null) {
                        this.checkIsAddSign = function (data) {
                            if (data.type === 'track') {
                                data.properties.$is_first_day = false;
                            }
                        };
                    }
                    // 如果不是第一次打开的用户，肯定不是首次访问
                    this.checkIsFirstTime = function (data) {
                        if (data.type === 'track') {
                            data.properties.$is_first_time = false;
                        }
                    };
                }
            },
            // 记录最近的站外地址及G渠道、自定义渠道
            checkIsFirstLatest: function checkIsFirstLatest() {
                var url_domain = _.info.pageProp.url_domain;
                var referrer_domain = _.info.pageProp.referrer_domain;

                // 如果域名不一致，就register为latest
                if (url_domain !== '' && url_domain !== referrer_domain) {
                    sd.register({
                        $latest_referrer: _.info.pageProp.referrer,
                        $latest_referrer_host: _.info.pageProp.referrer_host
                    });
                }

                // utm
                var allUtms = _.info.campaignParamsStandard('$latest_', '_latest_');
                var $utms = allUtms.$utms;
                var otherUtms = allUtms.otherUtms;
                if (!_.isEmptyObject($utms)) {
                    sd.register($utms);
                }
                if (!_.isEmptyObject(otherUtms)) {
                    sd.register(otherUtms);
                }
            }
        };

        var saEvent = {};

        saEvent.checkOption = {
            // event和property里的key要是一个合法的变量名，由大小写字母、数字、下划线和$组成，并且首字符不能是数字。
            regChecks: {
                regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i
            },
            checkPropertiesKey: function checkPropertiesKey(obj) {
                var me = this,
                    flag = true;
                _.each(obj, function (content, key) {
                    if (!me.regChecks.regName.test(key)) {
                        flag = false;
                    }
                });
                return flag;
            },
            check: function check(a, b) {
                if (typeof this[a] === 'string') {
                    return this[this[a]](b);
                } else {
                    return this[a](b);
                }
            },
            str: function str(s) {
                if (!_.isString(s)) {
                    logger.info('请检查参数格式,必须是字符串');
                    // return false;
                    return true;
                } else {
                    return true;
                }
            },
            properties: function properties(p) {
                _.strip_sa_properties(p);
                if (p) {
                    if (_.isObject(p)) {
                        if (this.checkPropertiesKey(p)) {
                            return true;
                        } else {
                            logger.info('properties里的key必须是由字符串数字_组成，且不能是系统保留字');
                            // return false;
                            return true;
                        }
                    } else {
                        logger.info('properties可以没有，但有的话必须是对象');
                        return true;
                        // return false;
                    }
                } else {
                    return true;
                }
            },
            propertiesMust: function propertiesMust(p) {
                _.strip_sa_properties(p);
                if (p === undefined || !_.isObject(p) || _.isEmptyObject(p)) {
                    logger.info('properties必须是对象且有值');
                    return true;
                    // return false;
                } else {
                    if (this.checkPropertiesKey(p)) {
                        return true;
                    } else {
                        logger.info('properties里的key必须是由字符串数字_组成，且不能是系统保留字');
                        return true;
                        // return false;
                    }
                }
            },
            // event要检查name
            event: function event(s) {
                if (!_.isString(s) || !this['regChecks']['regName'].test(s)) {
                    logger.info('请检查参数格式,必须是字符串,且eventName必须是字符串_开头,且不能是系统保留字');
                    // return false;
                    return true;
                } else {
                    return true;
                }
            },
            test_id: 'str',
            group_id: 'str',
            distinct_id: function distinct_id(id) {
                if (_.isString(id) && /^.{1,255}$/.test(id)) {
                    return true;
                } else {
                    logger.info('distinct_id必须是不能为空，且小于255位的字符串');
                    return false;
                }
            }
        };

        saEvent.check = function (p) {
            var flag = true;
            for (var i in p) {
                if (!this.checkOption.check(i, p[i])) {
                    return false;
                }
            }
            return flag;
        };

        saEvent.send = function (p, callback) {
            var data = {
                distinct_id: store.getDistinctId(),
                lib: {
                    $lib: 'js',
                    $lib_method: 'code',
                    $lib_version: String(LIB_VERSION)
                },
                properties: {}
            };

            // 测试部分数据没有distinct_id的问题
            if (typeof store.getDistinctId() !== 'string' || typeof store.getDistinctId() === '') {
                var wrong_case = '';
                switch (store.getDistinctId()) {
                    case null:
                        wrong_case = 'null';
                        break;
                    case void 0:
                        wrong_case = 'undefined';
                        break;
                    case '':
                        wrong_case = '空';
                        break;
                    default:
                        wrong_case = String(store.getDistinctId());
                }
                error_msg.push('distinct_id-' + just_test_distinctid + '-' + just_test_distinctid_2 + '-' + wrong_case + '-' + just_test_distinctid_detail + '-' + just_test_distinctid_detail2);
            }

            _.extend(data, p);

            if (error_msg.length > 0) {
                data.jssdk_error = error_msg.join('--');
            }

            // 合并properties里的属性
            if (_.isObject(p.properties) && !_.isEmptyObject(p.properties)) {
                _.extend(data.properties, p.properties);
            }

            // 合并lib里的属性
            if (_.isObject(callback)) {
                _.extend(data.lib, callback);
            }

            // profile时不传公用属性
            if (!p.type || p.type.slice(0, 7) !== 'profile') {
                // 传入的属性 > 当前页面的属性 > session的属性 > cookie的属性 > 预定义属性
                data.properties = _.extend({}, _.info.properties(), store.getProps(), store.getSessionProps(), _.info.currentProps, data.properties);
            }

            // 如果$time是传入的就用，否则使用服务端时间
            if (data.properties.$time && _.isDate(data.properties.$time)) {
                data.time = data.properties.$time * 1;
                delete data.properties.$time;
            } else {
                if (sd.para.use_client_time) {
                    data.time = new Date() * 1;
                }
            }
            _.searchObjDate(data);
            _.searchObjString(data);

            //判断是否要给数据增加新用户属性
            saNewUser.checkIsAddSign(data);
            saNewUser.checkIsFirstTime(data);

            if (sd.para.debug_mode === true) {
                logger.info(data);
                this.debugPath(stringify_default()(data), callback);
            } else {
                sd.sendState.getSendCall(data, callback);
            }
        };

        // 发送debug数据请求
        saEvent.debugPath = function (data, callback) {
            var url = '';
            if (sd.para.debug_mode_url.indexOf('?') !== -1) {
                url = sd.para.debug_mode_url + '&data=' + encodeURIComponent(_.base64Encode(data));
            } else {
                url = sd.para.debug_mode_url + '?data=' + encodeURIComponent(_.base64Encode(data));
            }

            _.ajax({
                url: url,
                type: 'GET',
                cors: true,
                header: {
                    'Dry-Run': String(sd.para.debug_mode_upload)
                }
            });
        };

        // 存储，
        var store = sd.store = {
            _sessionState: {},
            _state: {},
            getProps: function getProps() {
                return this._state.props;
            },
            getSessionProps: function getSessionProps() {
                return this._sessionState;
            },
            getDistinctId: function getDistinctId() {
                return this._state.distinct_id;
            },
            getFirstId: function getFirstId() {
                return this._state.first_id;
            },
            toState: function toState(ds) {
                var state = null;
                if (ds != null && _.isJSONString(ds)) {
                    state = JSON.parse(ds);
                    if (state.distinct_id) {
                        this._state = state;
                    } else {
                        this.set('distinct_id', _.UUID());
                        error_msg.push('toStateParseDistinctError');
                    }
                } else {
                    this.set('distinct_id', _.UUID());
                    error_msg.push('toStateParseError');
                }
            },
            initSessionState: function initSessionState() {
                var ds = _.cookie.get('sensorsdata2015session');
                var state = null;
                if (ds !== null && typeof_default()(state = JSON.parse(ds)) === 'object') {
                    this._sessionState = state;
                }
            },
            setOnce: function setOnce(a, b) {
                if (!(a in this._state)) {
                    this.set(a, b);
                }
            },
            set: function set(name, value) {
                this._state = this._state || {};
                this._state[name] = value;
                this.save();
            },
            // 针对当前页面修改
            change: function change(name, value) {
                this._state[name] = value;
            },
            // 设置session属性 -> 覆盖
            setSessionProps: function setSessionProps(newp) {
                var props = this._sessionState;
                _.extend(props, newp);
                this.sessionSave(props);
            },
            // 设置session属性 -> 非覆盖
            setSessionPropsOnce: function setSessionPropsOnce(newp) {
                var props = this._sessionState;
                _.coverExtend(props, newp);
                this.sessionSave(props);
            },
            setProps: function setProps(newp) {
                var props = this._state.props || {};
                _.extend(props, newp);
                this.set('props', props);
            },
            setPropsOnce: function setPropsOnce(newp) {
                var props = this._state.props || {};
                _.coverExtend(props, newp);
                this.set('props', props);
            },
            sessionSave: function sessionSave(props) {
                this._sessionState = props;
                _.cookie.set('sensorsdata2015session', stringify_default()(this._sessionState), 0);
            },
            save: function save() {
                _.cookie.set('sensorsdata2015jssdkcross', stringify_default()(this._state), 730, sd.para.cross_subdomain);
            },
            init: function init() {
                // 如果不支持cookie，设置新的id，并且带有error_msg
                if (!navigator.cookieEnabled) {
                    error_msg.push('cookieNotEnable');
                    if (!_.localStorage.isSupport) {
                        error_msg.push('localStorageNotEnable');
                    }
                }

                // 初始化session存储
                this.initSessionState();

                var cross = _.cookie.get(sd.para.cross_subdomain ? 'sensorsdata2015jssdkcross' : 'sensorsdata2015jssdk');

                // 判断是否是第一次载入sdk
                if (cross === null) {
                    is_first_visitor = true;
                    just_test_distinctid = 1;

                    this.set('distinct_id', _.UUID());
                } else {
                    just_test_distinctid = 2;
                    just_test_distinctid_detail = stringify_default()(cross);
                    just_test_distinctid_detail2 = navigator.userAgent + '^_^' + document.cookie;

                    // 值存储于_state及异常处理
                    this.toState(cross);
                }

                // 新用户[首次、首日]
                saNewUser.storeInitCheck();
                // 站外、UTM、自定义源
                saNewUser.checkIsFirstLatest();

                // 如果初始化cookie失败，发送错误事件
                /* if (error_msg.length > 0 && sd.para.send_error_event) {
                    sd.track('jssdk_error_msg');
                } */
            }
        };

        var commonWays = {
            // 获取谷歌标准参数
            getUtm: function getUtm() {
                return _.info.campaignParams();
            },
            // 获取当前页面停留时间
            getStayTime: function getStayTime() {
                return (new Date() - sd._t) / 1000;
            },
            // set init referrer
            setInitReferrer: function setInitReferrer() {
                var _referrer = document.referrer.slice(0, sd.para.max_referrer_string_length);
                sd.setOnceProfile({
                    _init_referrer: _referrer,
                    _init_referrer_host: _.info.pageProp.referrer_host
                });
            },
            // set init sessionRegister cookie
            setSessionReferrer: function setSessionReferrer() {
                var _referrer = document.referrer.slice(0, sd.para.max_referrer_string_length);
                store.setSessionPropsOnce({
                    _session_referrer: _referrer,
                    _session_referrer_host: _.info.pageProp.referrer_host
                });
            },
            // set default referrr and pageurl
            setDefaultAttr: function setDefaultAttr() {
                _.info.register({
                    _current_url: location.href,
                    _referrer: document.referrer.slice(0, sd.para.max_referrer_string_length),
                    _referring_host: _.info.pageProp.referrer_host
                });
            },
            allTrack: function allTrack() {
                // 避免没有ready
                if (!document || !document.body) {
                    setTimeout(this.allTrack, 1000);
                    return false;
                }

                if (sd.allTrack === 'has_init') {
                    return false;
                }
                sd.allTrack = 'has_init';

                var trackAll = {
                    getProps: function getProps(tagName, target) {
                        var props = {};

                        props._el_tagname = tagName;
                        props._el_name = target.getAttribute('name');
                        props._el_id = target.getAttribute('id');
                        props._el_classname = typeof target.className === 'string' ? target.className : null;
                        props._el_href = target.getAttribute('href');

                        // 获取内容
                        if (target.textContent) {
                            var textContent = _.trim(target.textContent);
                            if (textContent) {
                                textContent = textContent.replace(/[\r\n]/g, ' ').replace(/[ ]+/g, ' ').substring(0, 255);
                            }
                            props._el_value = textContent;
                        }
                        props = _.strip_empty_properties(props);

                        props.$url = location.href;
                        props.$url_path = location.pathname;

                        return props;
                    },
                    clickEvents: function clickEvents(e) {
                        var props = {};
                        var target = e.target;
                        var tagName = target.tagName.toLowerCase();

                        if (' button a input '.indexOf(' ' + tagName + ' ') !== -1) {

                            if (tagName === 'input') {
                                if (target.getAttribute('type') === 'button' || target.getAttribute('type') === 'submit') {
                                    props._el_value = target.value;
                                } else {
                                    return false;
                                }
                            }

                            _.extend(props, this.getProps(tagName, target));

                            if (tagName === 'a') {
                                _.trackLink({
                                    event: e
                                }, '_web_event', props);
                            } else {
                                sd.track('_web_event', props);
                            }
                        }
                    }
                };

                _.addEvent(document, 'click', function (e) {
                    trackAll.clickEvents(e);
                });
            },
            autoTrackWithoutProfile: function autoTrackWithoutProfile(para) {
                this.autoTrack(_.extend(para, {
                    not_set_profile: true
                }));
            },
            autoTrack: function autoTrack(para, callback) {
                para = _.isObject(para) ? para : {};

                var utms = _.info.campaignParams();
                var $utms = {};
                for (var i in utms) {
                    if ((' ' + source_channel_standard + ' ').indexOf(' ' + i + ' ') !== -1) {
                        $utms['$' + i] = utms[i];
                    } else {
                        $utms[i] = utms[i];
                    }
                }

                // setOnceProfile 如果是新用户，且允许设置profile
                if (is_first_visitor && !para.not_set_profile) {
                    sd.setOnceProfile(_.extend({
                        // 暂时隐藏，等extractor都部署上去 $first_landing_page: _.info.pageProp.url.slice(0, sd.para.max_referrer_string_length),
                        $first_visit_time: new Date(),
                        $first_referrer: document.referrer.slice(0, sd.para.max_referrer_string_length),
                        $first_browser_language: navigator.language,
                        $first_referrer_host: _.info.pageProp.referrer_host
                    }, $utms));
                }

                if (para.not_set_profile) {
                    delete para.not_set_profile;
                }

                // trackpageview
                sd.track('$pageview', _.extend({
                    $referrer: document.referrer.slice(0, sd.para.max_referrer_string_length),
                    $referrer_host: _.info.pageProp.referrer_host,
                    $url: location.href,
                    $url_path: location.pathname,
                    $title: document.title
                }, $utms, para), callback);
            }
        };

        // 一些常见的方法
        sd.quick = function () {
            var arg = slice.call(arguments);
            var arg0 = arg[0];
            var arg1 = arg.slice(1);
            if (typeof arg0 === 'string' && commonWays[arg0]) {
                return commonWays[arg0].apply(commonWays, arg1);
            } else if (typeof arg0 === 'function') {
                arg0.apply(sd, arg1);
            } else {
                logger.info('quick方法中没有这个功能' + arg[0]);
            }
        };

        sd.track = function (e, p, c) {
            if (saEvent.check({ event: e, properties: p })) {
                saEvent.send({
                    type: 'track',
                    event: e,
                    properties: p
                }, c);
            }
        };

        _.trackLink = function (obj, event_name, event_prop) {
            obj = obj || {};
            var link = null;
            if (obj.ele) {
                link = obj.ele;
            }
            if (obj.event) {
                link = obj.event.target;
            }

            event_prop = event_prop || {};
            if (!link || (typeof link === 'undefined' ? 'undefined' : typeof_default()(link)) !== 'object') {
                return false;
            }
            // 如果是非当前页面会跳转的链接，直接track
            if (!link.href || /^javascript/.test(link.href) || link.target) {
                sd.track(event_name, event_prop);
                return false;
            }

            function linkFunc(e) {
                e.preventDefault(); // 阻止默认跳转
                var hasCalled = false;

                function track_a_click() {
                    if (!hasCalled) {
                        hasCalled = true;
                        location.href = link.href; //把 A 链接的点击跳转,改成 location 的方式跳转
                    }
                }
                setTimeout(track_a_click, 1000); //如果没有回调成功，设置超时回调
                sd.track(event_name, event_prop, track_a_click); //把跳转操作加在callback里
            }
            if (obj.event) {
                linkFunc(obj.event);
            }
            if (obj.ele) {
                _.addEvent(obj.ele, 'click', function (e) {
                    linkFunc(e);
                });
            }
        };

        sd.trackLink = function (link, event_name, event_prop) {
            _.trackLink({
                ele: link
            }, event_name, event_prop);
        };

        // 跟踪链接
        sd.trackLinks = function (link, event_name, event_prop) {
            // var ele = link;
            event_prop = event_prop || {};
            if (!link || (typeof link === 'undefined' ? 'undefined' : typeof_default()(link)) !== 'object') {
                return false;
            }
            if (!link.href || /^javascript/.test(link.href) || link.target) {
                return false;
            }
            _.addEvent(link, 'click', function (e) {
                e.preventDefault(); // 阻止默认跳转
                var hasCalled = false;
                setTimeout(track_a_click, 1000); //如果没有回调成功，设置超时回调
                function track_a_click() {
                    if (!hasCalled) {
                        hasCalled = true;
                        location.href = link.href; //把 A 链接的点击跳转,改成 location 的方式跳转
                    }
                }
                sd.track(event_name, event_prop, track_a_click); //把跳转操作加在callback里
            });
        };

        sd.setProfile = function (p, c) {
            if (saEvent.check({ propertiesMust: p })) {
                saEvent.send({
                    type: 'profile_set',
                    properties: p
                }, c);
            }
        };

        sd.setOnceProfile = function (p, c) {
            if (saEvent.check({ propertiesMust: p })) {
                saEvent.send({
                    type: 'profile_set_once',
                    properties: p
                }, c);
            }
        };

        sd.appendProfile = function (p, c) {
            if (saEvent.check({ propertiesMust: p })) {
                _.each(p, function (value, key) {
                    if (_.isString(value)) {
                        p[key] = [value];
                    } else if (_.isArray(value)) {} else {
                        delete p[key];
                        logger.info('appendProfile属性的值必须是字符串或者数组');
                    }
                });
                if (!_.isEmptyObject(p)) {
                    saEvent.send({
                        type: 'profile_append',
                        properties: p
                    }, c);
                }
            }
        };

        sd.incrementProfile = function (p, c) {
            var str = p;
            if (_.isString(p)) {
                p = {};
                p[str] = 1;
            }

            function isChecked(p) {
                for (var i in p) {
                    if (!/-*\d+/.test(String(p[i]))) {
                        return false;
                    }
                }
                return true;
            }

            if (saEvent.check({
                propertiesMust: p
            })) {
                if (isChecked(p)) {
                    saEvent.send({
                        type: 'profile_increment',
                        properties: p
                    }, c);
                } else {
                    logger.info('profile_increment的值只能是数字');
                }
            }
        };

        sd.deleteProfile = function (c) {
            saEvent.send({
                type: 'profile_delete'
            }, c);
            store.set('distinct_id', _.UUID());
        };

        sd.unsetProfile = function (p, c) {
            var str = p;
            var temp = {};
            if (_.isString(p)) {
                p = [];
                p.push(str);
            }
            if (_.isArray(p)) {
                _.each(p, function (v) {
                    if (_.isString(v)) {
                        temp[v] = true;
                    } else {
                        logger.info('profile_unset给的数组里面的值必须时string,已经过滤掉', v);
                    }
                });
                saEvent.send({
                    type: 'profile_unset',
                    properties: temp
                }, c);
            } else {
                logger.info('profile_unset的参数是数组');
            }
        };

        sd.identify = function (id, isSave) {
            var firstId = store.getFirstId();
            if (typeof id === 'undefined') {
                if (firstId) {
                    store.set('first_id', _.UUID());
                } else {
                    store.set('distinct_id', _.UUID());
                }
            } else if (saEvent.check({
                distinct_id: id
            })) {
                if (isSave === true) {
                    if (firstId) {
                        store.set('first_id', id);
                    } else {
                        store.set('distinct_id', id);
                    }
                } else {
                    if (firstId) {
                        store.change('first_id', id);
                    } else {
                        store.change('distinct_id', id);
                    }
                }
            } else {
                logger.info('identify的参数必须是字符串');
            }
        };

        /**
        * 这个接口是一个较为复杂的功能，请在使用前先阅读相关说明:http://www.sensorsdata.cn/manual/track_signup.html，并在必要时联系我们的技术支持人员。
        * @param {string} distinct_id
        * @param {string} event
        * @param {object} properties
        **/
        sd.trackSignup = function (id, e, p, c) {
            if (saEvent.check({
                distinct_id: id,
                event: e,
                properties: p
            })) {
                saEvent.send({
                    original_id: store.getFirstId() || store.getDistinctId(),
                    distinct_id: id,
                    type: 'track_signup',
                    event: e,
                    properties: p
                }, c);
                store.set('distinct_id', id);
            }
        };

        sd.trackAbtest = function (t, g) {
            /* if (saEvent.check({test_id: t, group_id: g})) {
                saEvent.send({
                    type: 'track_abtest',
                    properties: {
                        test_id: t,
                        group_id: g
                    }
                });
            } */
        };

        sd.registerPage = function (obj) {
            if (saEvent.check({ properties: obj })) {
                _.extend(_.info.currentProps, obj);
            } else {
                logger.info('register输入的参数有误');
            }
        };

        //
        sd.register = function (props) {
            if (saEvent.check({ properties: props })) {
                store.setProps(props);
            } else {
                logger.info('register输入的参数有误');
            }
        };

        //
        sd.registerOnce = function (props) {
            if (saEvent.check({ properties: props })) {
                store.setPropsOnce(props);
            } else {
                logger.info('registerOnce输入的参数有误');
            }
        };

        sd.registerSession = function (props) {
            if (saEvent.check({ properties: props })) {
                store.setSessionProps(props);
            } else {
                logger.info('registerSession输入的参数有误');
            }
        };

        sd.registerSessionOnce = function (props) {
            if (saEvent.check({ properties: props })) {
                store.setSessionPropsOnce(props);
            } else {
                logger.info('registerSessionOnce输入的参数有误');
            }
        };

        sd.login = function (id) {
            if (saEvent.check({ distinct_id: id })) {
                var firstId = store.getFirstId();
                var distinctId = store.getDistinctId();
                if (id !== distinctId) {
                    if (firstId) {
                        sd.trackSignup(id, '$SignUp');
                    } else {
                        store.set('first_id', distinctId);
                        sd.trackSignup(id, '$SignUp');
                    }
                }
            } else {
                logger.info('login的参数必须是字符串');
            }
        };

        sd.logout = function (isChangeId) {
            var firstId = store.getFirstId();
            if (firstId) {
                store.set('first_id', '');
                if (isChangeId === true) {
                    store.set('distinct_id', _.UUID());
                } else {
                    store.set('distinct_id', firstId);
                }
            } else {
                logger.info('没有first_id，logout失败');
            }
        };

        /**
         打通APP及JS的distinct_id，实现用户打通
          sa.getAppStatus(function(app_info){
            // 设置 ID
            sa.identify(app_info.distinct_id);
            // 跟踪事件
            sa.track("ViewHomePage");
         });
         **/
        function app_js_bridge() {
            var app_info = null;
            var todo = null;

            function setAppInfo(data) {
                app_info = data;
                if (_.isJSONString(app_info)) {
                    app_info = JSON.parse(app_info);
                }
                if (todo) {
                    todo(app_info);
                }
            }
            // android
            function getAndroid() {
                if (typeof_default()(window.SensorsData_APP_JS_Bridge) === 'object' && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app) {
                    app_info = SensorsData_APP_JS_Bridge.sensorsdata_call_app();
                    if (_.isJSONString(app_info)) {
                        app_info = JSON.parse(app_info);
                    }
                }
            }
            // ios
            window.sensorsdata_app_js_bridge_call_js = function (data) {
                setAppInfo(data);
            };
            // 通知iOS
            function calliOS() {
                if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                    var iframe = document.createElement("iframe");
                    iframe.setAttribute("src", "sensorsanalytics://getAppInfo");
                    document.documentElement.appendChild(iframe);
                    iframe.parentNode.removeChild(iframe);
                    iframe = null;
                }
            }
            sd.getAppStatus = function (func) {
                calliOS();
                // 先获取能直接取到的安卓，ios是异步的不需要操作
                getAndroid();
                // 不传参数，直接返回数据
                if (!func) {
                    return app_info;
                } else {
                    // 如果传参数，保存参数。如果有数据直接执行，没数据时保存
                    if (app_info === null) {
                        todo = func;
                    } else {
                        func(app_info);
                    }
                }
            };
        }

        function start_heatmap() {}
        /* if (!_.isObject(sd.para.heatmap) || !sd.para.heatmap.collect_url || !sd.para.heatmap.collect_elements) {
            return false;
        }
        // 验证url，function成功就行，非function认为都是全部
        if (_.isFunction(sd.para.heatmap.collect_url) && !sd.para.heatmap.collect_url()) {
            return false;
        }
        if (sd.para.heatmap.collect_elements === 'all') {
            document.onclick = function () {
             };
        } else if (sd.para.heatmap.collect_elements === 'interact') {
            document.onclick = function (e) {
                var ev = window.event || e;
             }
        } */


        // 可视化埋点的后初始化
        sd.init = function () {
            if (_.isObject(sd.sdkMain)) {
                sd.sdkMain._init();
            }
        };

        sd._init = function () {
            // 防止爬虫等异常情况
            /* if(!_.hasStandardBrowserEnviroment()){
                return false;
            } */

            // 建立与客户端Bridge
            app_js_bridge();

            // start_heatmap();

            // 初始化referrer|url等属性
            _.info.initPage();

            // 初始化distinct_id
            store.init();

            // 发送数据
            if (sd._q && _.isArray(sd._q) && sd._q.length > 0) {
                _.each(sd._q, function (content) {
                    sd[content[0]].apply(sd, slice.call(content[1]));
                });
            }
        };

        sd._init();
    })(window.sensorsDataAnalytic201505);
} catch (err) {
    (function () {
        var sd = window.sensorsDataAnalytic201505;
        if (typeof sd === 'string') {
            sd = window[sd];
            if (sd != null && (typeof sd === 'function' || (typeof sd === 'undefined' ? 'undefined' : typeof_default()(sd)) === 'object')) {
                sd.track && sd.track('_js_sdk_error', { _js_sdk_error_msg: err, $url: location.href });
            }
        }
    })();
}
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__(69);
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// CONCATENATED MODULE: ./src/utils/index.js




// 类型转换对象
var class2type = {};
'Boolean Number String Function Array Date RegExp Object Error'.replace(/[^ ]+/g, function (name) {
    class2type['[object ' + name + ']'] = name.toLowerCase();
});

/**
 * 返回元素类型
 *
 * @param {*} obj
 * @return {String}
 */
function utils_type(obj) {
    if (obj == null) {
        return obj + '';
    }
    // 部分浏览器typeof正则时会返回function类型
    return (typeof obj === 'undefined' ? 'undefined' : typeof_default()(obj)) === 'object' || typeof obj === 'function' ? class2type[utils_toString.call(obj)] || 'object' : typeof obj === 'undefined' ? 'undefined' : typeof_default()(obj);
}

// 缓存toString
var utils_toString = Object.prototype.toString;

/*
 安卓手机
 */
var IS_IOS_RAW = window.navigator.userAgent.indexOf('iPhone OS') > 0;

/*
 ios手机
 */
var IS_ANDROID_RAW = window.navigator.userAgent.indexOf('Android') > 0;

/*
 客户端内
 */
var OFO_APP = navigator.userAgent.split(/\s+/).map(function (_) {
    return _.match(/OfoApp\/([0-9.]+)/);
}).filter(function (_) {
    return _;
})[0];

/*
 在微信内
 */
var isInWeChat = navigator.userAgent.indexOf('MicroMessenger') >= 0;

/*
 在支付宝内
 */
var isInAlipay = navigator.userAgent.indexOf('AlipayClient') >= 0;

/**
 * 轻量级javascript-url解析器
 * https://github.com/websanova/js-url
 */
var jsUrl = window.sa._.url;

/**
 * 是否在微信小程序中
 */
var isInWxMini = getParam('env') === 'wx_mp';

/**
 * 是否在支付宝小程序中
 */
var isInAliMini = getParam('env') === 'ali_mp';

/**
 * 当前是否为线上环境，用于上报是否分享成功埋点判断
 */
var isOnline = ['common.ofo.so', 'ofo-campaign.ofo.com', 'ofo-misc.ofo.com'].indexOf(window.location.host) >= 0;

/**
 * 存储URL起始参数值，Hash优先级大于Query
 */
var urlParams = extend({}, getQuerys(), getHashs());

/**
 * 当前页面环境，ofo安卓APP、ofo苹果APP、微信小程序、其他当前页面环境，ofo安卓APP、ofo苹果APP、微信小程序、其他
 */
var curEnv = function () {
    if (OFO_APP && IS_IOS_RAW) {
        return 'ofo_ios_app';
    }

    if (OFO_APP && IS_ANDROID_RAW) {
        return 'ofo_android_app';
    }

    if (isInWxMini) {
        return 'wx_mini';
    }

    return 'other';
}();

/**
 * 唯一ID，用于生成单次分享标识
 *
 * 用法：// 无需传参
 * uuid()
 */
function uuid(a) {
    return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
}

/**
 * 获取当前参数对象
 */
function getCurParams() {
    return extend({}, getQuerys(), getHashs());
}

/**
 * 获取初始参数与当前参数merge后的值
 */
function getDealParams() {
    return extend({}, urlParams, getCurParams());
}

/**
 * 获取当前页面event_id，用于埋点上报
 */
function getEventId() {
    return getDealParams().spa_id || '';
}

/**
 * 获取当前用户cid
 */
function getCurCid() {
    return localStorage && localStorage.getItem('ofotrack-localstorage-id_cid') || '';
}

/**
 * 获取url中的cid，为分享链接所携带分享人cid
 */
function getUrlCid() {
    return getDealParams().shr_cid || '';
}

/**
 * 传入参数是否为对象
 *
 * @param {*} obj
 */
function isObject(obj) {
    var type = typeof obj === 'undefined' ? 'undefined' : typeof_default()(obj);
    return type === 'object' && !!obj;
}

/**
 * 统一埋点方法
 *
 * @param {String} type      // 事件类型[view | click]
 * @param {String} eventName // 事件唯一标示
 * @param {String} eventInfo // 事件扩展标识
 * @param {Object} [params]  // 时间扩展对象
 */
function log(type, eventName, eventInfo) {
    var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    if (type.toLowerCase() === 'view') {
        window.saTrackCompat && window.saTrackCompat.viewExt(eventName, eventInfo, params);
    } else {
        window.saTrackCompat && window.saTrackCompat.clickExt(eventName, eventInfo, params);
    }
}

/**
 * 获取参数，兼容查询字符串与片段标识符
 *
 * @param {String} key         // 查询键名
 * @param {Boolean} [priority] // 优先级，默认true为Hash优先，false为query优先
 */
function getParam(key) {
    var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (!key) return;

    if (priority) {
        return getHash(key) || getQuery(key);
    }

    return getQuery(key) || getHash(key);
}

/**
 * 请求发送，用于上报分享成功埋点
 */
function ajax(options) {
    if (options) {
        var xhr = new XMLHttpRequest();
        var formData = new FormData();
        for (var key in options.data) {
            formData.append(key, options.data[key]);
        }
        xhr.open('POST', options.url);
        xhr.onload = function () {
            options.success && options.success(JSON.parse(xhr.responseText));
        };
        xhr.send(formData);
    }
}

/**
 * domReady方法
 *
 * @param {Function} handler // domReady执行事件
 */
function ready(handler) {
    if (document.readyState !== 'loading') {
        handler();
    } else {
        document.addEventListener('DOMContentLoaded', handler);
    }
}

/**
 * 兼容Transition事件名
 */
var transitionEvent = void 0;
ready(function () {
    var t = void 0;
    var el = document.createElement('fakeelement');
    var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
    };
    for (t in transitions) {
        if (el.style[t] !== undefined) {
            transitionEvent = transitions[t];
            return;
        }
    }
});

/**
 * 同jQuery.extend方法，可用于浅拷贝，深拷贝
 *
 * mix([deep ], target, object1 [, objectN ])
 * @param {Boolean} [deep]   // 如果是 true, 合并成为递归（又叫做深拷贝）, 不支持给这个参数传递 false
 * @param {Object} target    // 对象扩展, 这将接收新的属性
 * @param {Object} object1   // 一个对象, 它包含额外的属性合并到第一个参数
 * @param {Object} [objectN] // 包含额外的属性合并到第一个参数
 */
function extend() {
    var n = arguments.length;
    var isDeep = false;
    var i = 0;
    var array = [];

    if (arguments[0] === true) {
        isDeep = true;
        i = 1;
    }
    // 将所有非空对象变成空对象
    for (; i < n; i++) {
        var el = arguments[i];
        el = el && /object|function/.test(typeof el === 'undefined' ? 'undefined' : typeof_default()(el)) ? el : {};
        array.push(el);
    }
    if (array.length === 1) {
        array.unshift(this);
    }
    return innerExtend(isDeep, array);
}

// 传入参数是否为简单javascript对象，非DOM、BOM、自定义类实例
function isPlainObject(obj) {
    return utils_toString.call(obj) === '[object Object]' && get_prototype_of_default()(obj) === Object.prototype;
}

// 深拷贝内部方法
function innerExtend(isDeep, array) {
    var target = array[0];
    var copyIsArray, clone, name;

    for (var i = 1, length = array.length; i < length; i++) {
        // 只处理非空参数
        var options = array[i];
        var noCloneArrayMethod = Array.isArray(options);
        for (name in options) {
            if (noCloneArrayMethod && !options.hasOwnProperty(name)) {
                continue;
            }
            try {
                var src = target[name];
                var copy = options[name]; // 当options为VBS对象时报错
            } catch (e) {
                continue;
            }

            // 防止环引用
            if (target === copy) {
                continue;
            }
            if (isDeep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                if (copyIsArray) {
                    copyIsArray = false;
                    clone = src && Array.isArray(src) ? src : [];
                } else {
                    clone = src && isPlainObject(src) ? src : {};
                }

                target[name] = innerExtend(isDeep, [clone, copy]);
            } else if (copy !== undefined) {
                target[name] = copy;
            }
        }
    }
    return target;
}

// 获取处理后的url
function getFormatUrl(url) {
    var href = url || window.location.href;
    var list = href.split('#');
    if (list.length > 1) {
        var hashList = list[1].split('?');
        if (hashList.length > 1) {
            return list[0] + '#' + hashList[1];
        }

        return list[0];
    }

    return href;
}

/**
 * hash参数对象，片段标识符
 *
 * @param {String} [url]   // 不传url时，解析当前url，传url时解析url
 */
function getHashs(url) {
    return jsUrl('#', getFormatUrl(url)) || {};
}

// 单hash值
function getHash(key) {
    return getHashs()[key];
}

/**
 * query参数对象，查询字符串
 *
 * @param {String} [url] // 不传url时，解析当前url，传url时解析url
 */
function getQuerys(url) {
    return jsUrl('?', url || window.location.href) || {};
}

// 单query值
function getQuery(key) {
    return getQuerys()[key];
}

/**
 * 序列化对象为URL参数
 */
function parseParams(a) {
    var s = [];
    var add = function add(k, v) {
        v = typeof v === 'function' ? v() : v;
        v = v === null ? '' : v === undefined ? '' : v;
        s[s.length] = encodeURIComponent(k) + '=' + encodeURIComponent(v);
    };
    var buildParams = function buildParams(prefix, obj) {
        var i, len, key;

        if (prefix) {
            if (Array.isArray(obj)) {
                for (i = 0, len = obj.length; i < len; i++) {
                    buildParams(prefix + '[' + (typeof_default()(obj[i]) === 'object' && obj[i] ? i : '') + ']', obj[i]);
                }
            } else if (String(obj) === '[object Object]') {
                for (key in obj) {
                    buildParams(prefix + '[' + key + ']', obj[key]);
                }
            } else {
                add(prefix, obj);
            }
        } else if (Array.isArray(obj)) {
            for (i = 0, len = obj.length; i < len; i++) {
                add(obj[i].name, obj[i].value);
            }
        } else {
            for (key in obj) {
                buildParams(key, obj[key]);
            }
        }
        return s;
    };

    return buildParams('', a).join('&');
};

/**
 * merge过扩展参数，处理后的url
 *
 * @param {String} url // 原始url，会添加扩展分享参数
 */
function dealShareUrl(url) {
    var hashs = getHashs(url);
    var querys = getQuerys(url);
    var params = extend({}, querys, hashs);

    var mix = {
        shr_id: uuid(),
        shr_env: curEnv,
        shr_cid: getCurCid(),
        shr_utm: getDealParams().utm_new_medium || '',
        shr_ct: params.shr_ct ? +params.shr_ct + 1 : 1
    };

    // hash参数、query参数、share参数进行merge
    hashs = extend({}, querys, hashs, mix);

    var port = jsUrl('port', url);
    var mergePort = port === '443' || port === '80' ? '' : ':' + port;

    // 序列后的查询字符串
    var mergeQuery = function () {
        // 将Query参数转为Hash参数，因为pay项目中不能添加查询字符串，微信后台路径配置死了。
        return '';

        // let temp = parseParams(querys);
        // return temp ? `?${temp}` : '';
    }();

    // 序列后hash查询字符串
    var mergeHash = function () {
        var temp = parseParams(hashs);

        return temp ? '?' + temp : '';
    }();

    // hash路径
    var hashPath = function () {
        var temp = jsUrl('hash', url);

        return temp ? '#' + temp.split('?')[0] : '#/';
    }();

    return jsUrl('protocol', url) + '://' + jsUrl('hostname', url) + mergePort + jsUrl('path', url) + mergeQuery + hashPath + mergeHash;
}

/**
 * 增加ext参数到url中
 *
 * @param {String} url // 原始url
 * @param {Object} ext // 扩展字段
 */
function dealRouterUrl(url) {
    var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var hashs = getHashs(url);
    var querys = getQuerys(url);

    // hash参数、query参数、share参数进行merge
    hashs = extend({}, ext, hashs);

    var port = jsUrl('port', url);
    var mergePort = port === '443' || port === '80' ? '' : ':' + port;

    // protocol，区分以//开头的地址
    var protocol = function () {
        if (url.startsWith('//')) {
            return location.protocol.slice(0, -1);
        }

        return jsUrl('protocol', url);
    }();

    // 序列后的查询字符串
    var mergeQuery = function () {
        var temp = parseParams(querys);

        return temp ? '?' + temp : '';
    }();

    // 序列后hash查询字符串
    var mergeHash = function () {
        var temp = parseParams(hashs);

        return temp ? '?' + temp : '';
    }();

    // hash路径
    var hashPath = function () {
        var temp = jsUrl('hash', url);

        return temp ? '#' + temp.split('?')[0] : '#/';
    }();

    return protocol + '://' + jsUrl('hostname', url) + mergePort + jsUrl('path', url) + mergeQuery + hashPath + mergeHash;
}
// CONCATENATED MODULE: ./src/common/env.js




/*
 window.OFO_ENV.ENV.UNKNOWN: not belonging to any of the cases below
 window.OFO_ENV.WEBAPP_ITSELF: exactly the webapp page itself
 window.OFO_ENV.ENV.INSIDE_WEBAPP: included via <iframe> inside webapp
 window.OFO_ENV.ENV.INSIDE_NEW_IOS_APP: included via UIWebView in iOS app >= 1.8.2
 window.OFO_ENV.ENV.INSIDE_NEW_ANDROID_APP: included via WebView in Android app >= 1.8
 window.OFO_ENV.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP: likely to be included via UIWebView in iOS app < 1.8.2; false positive or false negative are both possible
 window.OFO_ENV.ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP: likely to be included via WebView in Android app < 1.8; false positive or false negative are both possible
 */
var ENV = {
    UNKNOWN: 'u',
    WEBAPP_ITSELF: 'W',
    INSIDE_WEBAPP: 'w',
    INSIDE_NEW_IOS_APP: 'I',
    INSIDE_NEW_ANDROID_APP: 'A',
    LIKELY_TO_BE_INSIDE_OLD_IOS_APP: 'i',
    LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP: 'a'
};

/*
 window.OFO_ENV.query: window.location.search parsed if no url supplied; otherwise parse the supplied .search section (should begin with "?")
 */
var env_query = function query(queryString) {
    var wls = queryString || window.location.search;
    if (wls.charAt(0) === '?') {
        wls = wls.substr(1);
    }
    var output = {};
    wls.split('&').filter(function (substr) {
        return substr.length > 0;
    }).forEach(function (substr) {
        var keyValue = substr.split('=');
        var key = decodeURIComponent(keyValue.shift());
        output[key] = decodeURIComponent(keyValue.join('='));
    });
    return output;
};

// notice that IS_IOS_RAW and IS_ANDROID_RAW can both be true on Windows Phone machines
var env_IS_IOS_RAW = navigator.userAgent.indexOf('iPhone OS') > 0;
var env_IS_ANDROID_RAW = navigator.userAgent.indexOf('Android') > 0;

/*
 window.OFO_ENV.isInWeChat: whether currently in WeChat
 */
var env_isInWeChat = navigator.userAgent.indexOf('MicroMessenger') >= 0;

/*
 window.OFO_ENV.isInAlipay: whether currently in Alipay
 */
var env_isInAlipay = navigator.userAgent.indexOf('AlipayClient') >= 0;

/*
 window.OFO_ENV.isInICBC: whether currently in ICBC
 */
var isInICBC = navigator.userAgent.indexOf('ICBC') >= 0;

var ofoAppMatched = navigator.userAgent.split(/\s+/).map(function (_) {
    return _.match(/OfoApp\/([0-9.]+)/);
}).filter(function (_) {
    return _;
})[0];

/*
 window.OFO_ENV.iframingAncestorWhichIsWebApp: the window.parent ancestor which is our webapp
 */
var iframingAncestorWhichIsWebApp = function (nextParent) {
    var currWin = void 0;
    try {
        do {
            currWin = nextParent;
            if ('OFO_BUILD_DATE' in currWin) {
                return currWin;
            }
            nextParent = currWin.parent;
        } while (nextParent !== currWin);
    } catch (e) {
        // DOMException might raise here is frame parent is cross-origin
    }
    return null;
}(window);

var compareIosVersions = function compareIosVersions(v1s, v2s) {
    // returns 1 if v1s > v2s, 0 if v1s = v2s, -1 if v1s < v2s
    var toInt = function toInt(r) {
        return parseInt(r);
    };
    var v1 = v1s.split('.').map(toInt);
    var v2 = v2s.split('.').map(toInt);
    var r = void 0;
    for (var i = 0; i < v1.length && i < v2.length; i++) {
        r = v1[i] - v2[i];
        if (r) {
            break;
        }
    }
    var output = r || v1.length - v2.length;
    return output > 0 ? 1 : output < 0 ? -1 : 0;
};

/*
 window.OFO_ENV.currentEnv: indicating where the current page is. will be equal to one of the window.OFO_ENV.ENV constants
 */
var currentEnv = iframingAncestorWhichIsWebApp === window ? ENV.WEBAPP_ITSELF : iframingAncestorWhichIsWebApp ? ENV.INSIDE_WEBAPP : ofoAppMatched ? env_IS_IOS_RAW ? env_IS_ANDROID_RAW ? ENV.UNKNOWN : compareIosVersions('1.8.2', ofoAppMatched[1]) <= 0 ? ENV.INSIDE_NEW_IOS_APP : ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP : env_IS_ANDROID_RAW ? ENV.INSIDE_NEW_ANDROID_APP : ENV.UNKNOWN : 'ofoToken' in window && !env_isInWeChat || env_query()['from'] === 'native' ? env_IS_IOS_RAW ? env_IS_ANDROID_RAW ? ENV.UNKNOWN : ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP : env_IS_ANDROID_RAW ? ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP : ENV.UNKNOWN : ENV.UNKNOWN;

var apiServerInQuery = env_query()['backend'];

/*
 window.OFO_ENV.API_HOST: hostname of the API server to be used
 */
var API_HOST = {
    'common.ofo.so': 'san.ofo.so',
    'qa-common.ofo.so': apiServerInQuery || 'qatest.api.ofo.com',
    'qacommonapi.ofo.so': apiServerInQuery || 'qamaster.api.ofo.com',
    'qatestapi.ofo.so': apiServerInQuery || 'qa-mastertest.ofo.so',
    'ofo-staging.ofo.so': 'san.ofo.so',
    'testcommon.ofo.so': 'testonline.ofo.so',
    'onecommon.ofo.so': 'one.ofo.so',
    'common.ofo.com': 'san.ofo.so',
    'coupon.ofo.com': 'san.ofo.so',
    'market.ofo.com': 'san.ofo.so',
    'brand.ofo.com': 'san.ofo.so',
    'activity.ofo.com': 'san.ofo.so',
    'ofo-campaign.ofo.com': 'san.ofo.so',
    'qatest-ofo-campaign.ofo.com': 'qatest.api.ofo.com',
    'qamaster-ofo-campaign.ofo.com': 'qamaster.api.ofo.com',
    'ofo-misc.ofo.com': 'san.ofo.so',
    'qamaster-ofo-misc.ofo.com': 'qamaster.api.ofo.com',
    'qatest-ofo-misc.ofo.com': 'qatest.api.ofo.com',
    'qatest-ofo-finance.ofo.com': 'qatest.api.ofo.com',
    'qamaster-ofo-finance.ofo.com': 'qamaster.api.ofo.com',
    'finance.ofo.com': 'san.ofo.so'
}[window.location.host] || window.location.host;

/*
 window.OFO_ENV.ofoAppVersion: version of our app, if in our native app. otherwise null
 */
var ofoAppVersion = ofoAppMatched ? ofoAppMatched[1] : null;
/*
 window.OFO_ENV.ofoAppSourceVersion: SourceVersion of our app, if in our native app. otherwise null
 */
var ofoAppSourceVersion = env_IS_ANDROID_RAW ? ofoAppVersion : navigator.userAgent.substring(navigator.userAgent.indexOf('SourceVersion')).split(' ')[0].split('/')[1];
/*
 window.OFO_ENV.isLikelyInApp: whether it is likely to be in old app or new app
 */
var isLikelyInApp = currentEnv === ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP || currentEnv === ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP || currentEnv === ENV.INSIDE_NEW_IOS_APP || currentEnv === ENV.INSIDE_NEW_ANDROID_APP;

/*
 window.OFO_ENV.isInNewApp: whether it is in new app (version >= 1.8)
 */
var isInNewApp = currentEnv === ENV.INSIDE_NEW_IOS_APP || currentEnv === ENV.INSIDE_NEW_ANDROID_APP;

/*
 window.OFO_ENV.sourceForApi: "source" field to be used when requesting our API server
 */
// export const sourceForApi = ((currentEnv === ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP || currentEnv === ENV.INSIDE_NEW_IOS_APP) ? 1 : ((currentEnv === ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP || currentEnv === ENV.INSIDE_NEW_ANDROID_APP) ? 2 : (isInAlipay ? (isInWeChat ? -3 : -2) : (isInWeChat ? -1 : 0))));
var sourceForApi = function () {
    // IOS
    if (currentEnv === ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP || currentEnv === ENV.INSIDE_NEW_IOS_APP) {
        return 1;
    }

    // Android
    if (currentEnv === ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP || currentEnv === ENV.INSIDE_NEW_ANDROID_APP) {
        return 2;
    }

    // 微信小程序
    if (isInWxMini) {
        return -5;
    }

    // 支付宝小程序
    if (isInAliMini) {
        return -4;
    }

    // 微信
    if (env_isInWeChat) {
        return -1;
    }

    return 0;
}();

/*
 window.OFO_ENV.sourceForSa: "source" field to be used when sending data to Sensors Analytics
 */
var sourceForSa = sourceForApi;

/*
 window.OFO_ENV.ofoAppVersionGte: if the current app version is larger than the version numbers supplied. Pass null for a platform if not supported anyway
 */
var ofoAppVersionGte = function ofoAppVersionGte(iosVersion, androidVersion) {
    if (!ofoAppVersion) {
        return false;
    }
    return currentEnv === ENV.INSIDE_NEW_IOS_APP && iosVersion !== null && iosVersion !== undefined && compareIosVersions(iosVersion, ofoAppMatched[1]) <= 0 || currentEnv === ENV.INSIDE_NEW_ANDROID_APP && androidVersion !== null && androidVersion !== undefined && parseInt(ofoAppMatched[1]) >= androidVersion;
};

/*
  window.OFO_ENV.ofoApp: open ofoapp or jump to downloadpage
*/
var ofoApp = function ofoApp(action, appversion) {
    if (env_IS_ANDROID_RAW) {
        if (!env_isInWeChat) {
            var iframe = document.createElement('iframe');
            iframe.src = 'ofoapp://' + action;
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
        }
        if (!isLikelyInApp) {
            setTimeout(function () {
                window.location.href = 'https://common.ofo.so/app/?appversion=' + appversion;
            }, 600);
        }
    } else {
        if (!env_isInWeChat) {
            window.location.href = 'ofoapp://' + action;
        }
        if (!isLikelyInApp) {
            setTimeout(function () {
                window.location.href = 'https://common.ofo.so/app/?appversion=' + appversion;
            }, 25);
        }
    }
};
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__(73);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__(76);
var js_cookie_default = /*#__PURE__*/__webpack_require__.n(js_cookie);

// CONCATENATED MODULE: ./src/common/token.js






var tokenFormat = /^.{16,}$/;

/**
 * Store token into localStorage / Cookie if not present in latter ones
 */
function getToken() {
    if (window.ofoGlobals && window.ofoGlobals.get) {
        try {
            var tempValues = JSON.parse(window.ofoGlobals.get());
            keys_default()(tempValues).forEach(function (key) {
                window[key] = tempValues[key];
            });
        } catch (e) {}
    }

    if (tokenFormat.test(window.ofoToken)) {
        if (window.localStorage) {
            window.localStorage.setItem('ofo-tokened', window.ofoToken);
        }
        js_cookie_default.a.set('ofo-tokened', window.ofoToken);
    }
}
getToken();

/**
 * 获取ofo-tokened
 */
/* harmony default export */ var common_token = (function () {
    getToken();
    var nextParent = window;
    var currWin = void 0;
    var token = void 0;

    // 微信小程序或支付宝小程序中
    if (isInWxMini || isInAliMini) {
        token = getDealParams().token;
        if (tokenFormat.test(token)) {
            localStorage && localStorage.setItem('ofo-tokened', token);
            js_cookie_default.a.set('ofo-tokened', token);
            return token;
        }
    }

    // window注入
    try {
        do {
            currWin = nextParent;
            token = currWin.ofoToken;
            if (tokenFormat.test(token)) {
                return token;
            }
            nextParent = currWin.parent;
        } while (nextParent !== currWin);
    } catch (e) {}

    if (tokenFormat.test(token)) {
        return token;
    }

    localStorage && (token = localStorage.getItem('ofo-tokened'));
    if (tokenFormat.test(token)) {
        return token;
    }

    token = js_cookie_default.a.get('ofo-tokened');
    if (tokenFormat.test(token)) {
        return token;
    }

    return null;
});;
// CONCATENATED MODULE: ./src/common/sendDebug.js








var sendDebug_add = function add(path, value, output) {
    if (value && (typeof value === 'undefined' ? 'undefined' : typeof_default()(value)) === 'object') {
        keys_default()(value).forEach(function (key) {
            add(path + '$' + key, value[key], output);
        });
    } else {
        output[path] = value;
    }
};

var saSendDebug = function () {
    var report = {
        'userAgent': navigator.userAgent,
        'windowLoaded': Date.now()
    };
    return function (type, extra, opt_importantQueryKeys) {
        var output = {
            'token': common_token(),
            'extra': extra,
            'location': {},
            'currentEnv': currentEnv
        };
        keys_default()(report).forEach(function (key) {
            output[key] = report[key];
        });
        ['host', 'protocol', 'pathname', 'search', 'hash'].forEach(function (section) {
            output['location'][section] = window.location[section];
        });
        var importantQueryKeys = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content', 'from'];
        if (opt_importantQueryKeys) {
            importantQueryKeys = importantQueryKeys.concat(opt_importantQueryKeys);
        }
        var queryParams;
        output.query = {};
        queryParams = env_query();
        importantQueryKeys.forEach(function (key) {
            if (key in queryParams) {
                output.query[key] = queryParams[key];
            }
        });
        var saOutput = { 'Source': sourceForSa };
        sendDebug_add('_SD', output, saOutput);
        window.sa.track('_SD$' + type, saOutput);
    };
}();

var sendBoth = function sendBoth(type, extra, opt_importantQueryKeys) {
    if (window.location.hostname.substr(window.location.hostname.length - 6) !== 'ofo.so') {
        console.log('当前域名不是 ofo.so，已跳过统计发送。');
        return;
    }
    saSendDebug(type, extra, opt_importantQueryKeys);
};

if (!window.HAS_OFO_COMMON) {
    window.addEventListener('error', function (ee) {
        if (ee.error === 'NOT_AN_EXCEPTION') {
            return;
        }
        sendBoth('JsError', {
            'message': ee.message,
            'stack': ee.error ? ee.error.stack : ee.filename + ':' + ee.lineno + ':' + ee.colno
        });
    });
}

/* harmony default export */ var sendDebug = (sendBoth);
// CONCATENATED MODULE: ./src/common/bridge.js






var trySetUpWebWxShare = function trySetUpWebWxShare(windowDotTop, params) {
    var wx = windowDotTop.wx;
    if (!wx) {
        return;
    }
    wx.ready(function () {
        wx.showOptionMenu();
        wx.onMenuShareTimeline({
            title: params[0], // 分享标题
            link: params[3], // 分享链接
            imgUrl: params[2] // 分享图标
        });
        wx.onMenuShareAppMessage({
            title: params[0], // 分享标题
            desc: params[1], // 分享描述
            link: params[3], // 分享链接
            imgUrl: params[2] // 分享图标
        });
    });
};

/**
 * Call methods provides by the client app which embeds current page
 * @param {string} name name of method to call
 * @param {*[]} params parameters to pass to the method
 */
var bridge_ofoResponseProxy = function ofoResponseProxy(name, params) {
    if (name === 'saClick') {
        return;
    }
    if (name === 'setTitle' && !isLikelyInApp) {
        window.top.document.title = params[0];
        return;
    }
    if (name === 'setTitle' && isLikelyInApp && !ofoAppVersionGte('1.8.1', 11000)) {
        return;
    }
    if (name === 'shareConfig' && isLikelyInApp && !ofoAppVersionGte('1.8.4', 11000)) {
        return;
    }
    if (name === 'shareConfig') {
        if (env_isInWeChat && currentEnv === ENV.INSIDE_WEBAPP) {
            trySetUpWebWxShare(iframingAncestorWhichIsWebApp, params);
            return;
        } else if (env_isInWeChat && window.wx) {
            trySetUpWebWxShare(window, params);
            return;
        }
    }
    if (name === 'openExternal' && currentEnv === ENV.INSIDE_NEW_IOS_APP) {
        name = 'toSafari';
    }
    if (window.ofoResponse) {
        try {
            window.ofoResponse[name].apply(window.ofoResponse, params);
        } catch (ee) {
            sendDebug('BridgeError', {
                exception: {
                    'message': ee.message,
                    'stack': ee.error ? ee.error.stack : ee.filename + ':' + ee.lineno + ':' + ee.colno
                },
                name: name,
                params: params
            });
        }
    } else if (currentEnv === ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'ofowebviewresponse://' + name + '/' + encodeURI(stringify_default()(params)));
        document.documentElement.appendChild(iframe);
        setTimeout(function () {
            return iframe.parentNode.removeChild(iframe);
        });
    } else if (currentEnv === ENV.INSIDE_NEW_IOS_APP) {
        window.webkit.messageHandlers.ofo_iOS.postMessage({ method: name, params: params });
    }
};

/**
 * Handle deep links
 * @param {string} linkUrl for example, ofoapp://purchase/
 *        if true, webapp will be opened directly if NOT in native app
 *        if false, if in neither webapp nor native app, a page will be opened asking the user to retry native app, download native app or use web app
 */
var bridge_handleLink = function handleLink(linkUrl) {
    if (iframingAncestorWhichIsWebApp) {
        iframingAncestorWhichIsWebApp.ofoHandleDeepLink(linkUrl);
        return;
    }
    if (isLikelyInApp) {
        window.location.replace(linkUrl); // try native app
        if (!isInNewApp) {
            setTimeout(function () {
                return window.alert('您可能需要更新至最新版 ofo app 才能使用此功能。');
            }, 1000);
        }
    } else {
        if (linkUrl === 'ofoapp://use') {
            window.location.replace('/newdist/?Journey');
        } else if (linkUrl === 'ofoapp://purchase') {
            window.location.replace('/newdist/?Purchase');
        } else if (linkUrl === 'ofoapp://bond') {
            window.location.replace('/newdist/?Identification');
        } else if (linkUrl === 'ofoapp://certify') {
            window.location.replace('/newdist/?Identification');
        }
    }
};
// CONCATENATED MODULE: ./src/common/sadecorator.js










// https://www.sensorsdata.cn/manual/app_h5.html
var superProps = {};

/**
 * 获取当前url的utm_new_medium等，兼容初始url参数
 */
var utm_new_medium = '';
var sadecorator_getMedium = function getMedium() {
    var medium = '';
    var params = getDealParams();

    if (params.utm_new_medium) {
        medium = '__' + params.utm_new_medium;
    }

    if (params.channel) {
        medium = medium + '__' + params.channel;
    }

    if (params.utm_location) {
        medium = medium + '__' + params.utm_location;
    }

    return medium;
};
utm_new_medium = sadecorator_getMedium();

function checkObject(obj) {
    var type = typeof obj === 'undefined' ? 'undefined' : typeof_default()(obj);
    return type === 'object' && !!obj;
}

function propsWarn(event, isWarn) {
    isWarn && console.warn('事件 ' + event + ' 扩展参数必须为简单对象类型.');
}

// 匹配berry正则表达式
var berryRE = /^event_info.*;.*event_id/i;
var sadecorator_saTrack = function saTrack(event, extraKey, extraValue) {
    var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var isPropObj = checkObject(props);
    propsWarn(event, !isPropObj);

    var extra = {}; // H5埋点扩展参数
    var berry = function () {
        // 考虑将此处挪到函数外
        var berry = getDealParams().berry;

        if (berryRE.test(berry)) {
            return berry.split(';');
        }

        return [];
    }();

    // 有值情况下或存在berry资源位，添加新埋点参数
    if (stringify_default()(props) !== '{}' || berry.length === 2) {
        if (berry.length === 2) {
            !props.event_id && (props.event_id = berry[1].replace('event_id-', ''));
            !props.event_info && (props.event_info = berry[0].replace('event_info-', ''));
        }

        extra._SD$query$from = props = stringify_default()(props);
    }

    if (ofoAppVersionGte('1.8.8', 11850)) {
        var appVersion = ofoAppVersion;
        var iosGtVersion = '3.5.1';
        var AndGtVersion = 17000;
        var data = void 0;

        if ( // IOS版本大于等于3.5.1
        currentEnv === ENV.INSIDE_NEW_IOS_APP &&
        /* eslint-disable-next-line */
        compareIosVersions(iosGtVersion, appVersion) <= 0 ||
        /* eslint-disable-next-line */
        // Android版本大于17000
        currentEnv === ENV.INSIDE_NEW_ANDROID_APP &&
        /* eslint-disable-next-line */
        parseInt(appVersion) > AndGtVersion) {
            // 新埋点API，第四个参数为扩展JSON串
            data = [event, extraKey, extraValue, utils_type(props) === 'string' ? props : ''];
            bridge_ofoResponseProxy('trackEvent', data);
        } else {
            data = [event, extraKey, extraValue];
            bridge_ofoResponseProxy('trackEvent', data);
        }

        // 打印最终数据至控制台
        if (extraKey === 'View') {
            console.log('Event: ' + event, '\nView: ' + extraValue + '\n', data, '\n\n');
        } else if (extraKey === 'Click') {
            console.log('Event: ' + event, '\nClick: ' + extraValue + '\n', data, '\n\n');
        } else {
            console.log(data, '\n\n');
        }
    } else {
        extra[extraKey] = extraValue;
        extra.$city = localStorage ? localStorage.getItem('satrack-localstorage-index_city') ? localStorage.getItem('satrack-localstorage-index_city') : '' : '';
        extra.Source = sourceForSa;

        keys_default()(superProps).forEach(function (key) {
            extra[key] = superProps[key];
        });

        window.sa.track(event, extra);
    }
};

var saTrackCompat = function saTrackCompat(event) {
    console.warn('Event ' + event + ' dropped. Use new methods instead.');
};

// 展示事件
saTrackCompat.view = saTrackCompat.viewExt = function (event, value, props) {
    sadecorator_saTrack(event.trim().replace(/-/g, '_').replace(/\./g, ''), 'View', value + (sadecorator_getMedium() || utm_new_medium), props);
};

// 点击事件
saTrackCompat.click = saTrackCompat.clickExt = function (event, value, props) {
    sadecorator_saTrack(event.trim().replace(/-/g, '_').replace(/\./g, ''), 'Click', value + (sadecorator_getMedium() || utm_new_medium), props);
};

saTrackCompat.addGlobal = function (key, value) {
    superProps[key] = value;
};

saTrackCompat.addCid = function (value) {
    window.sa.login(value);
};

saTrackCompat.ofoTrack = function (url, action, type, channel, flag, cid, subType) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '//supportda.ofo.so/' + url + '?action=' + action + '&type=' + type + '&channel=' + channel + '&flag=' + flag + '&cid=' + cid + '&subType=' + subType);
    xhr.onload = function () {
        console.log('XHR response', xhr.status, xhr.responseText);
    };
    xhr.onerror = function () {};
    xhr.timeout = 20000; // twenty seconds
    xhr.send(null);
};

if (!window.HAS_OFO_COMMON) {
    if (currentEnv === ENV.INSIDE_NEW_IOS_APP || currentEnv === ENV.INSIDE_NEW_ANDROID_APP) {
        window.sa.getAppStatus(function (app_info) {
            window.sa.identify(app_info.distinct_id);
            keys_default()(app_info).filter(function (key) {
                return key !== 'distinct_id';
            }).forEach(function (key) {
                superProps[key] = app_info[key];
            });
            console.log('Initialized app_info with (app) ', superProps);
            window.sa.quick('autoTrack');
        });
    } else if (currentEnv === ENV.INSIDE_WEBAPP) {
        superProps = iframingAncestorWhichIsWebApp.getSaInfoForFrameContent(); // overwriting directly
        console.log('Initialized app_info with (web) ', superProps);
        window.sa.quick('autoTrack');
    }
}

/* harmony default export */ var sadecorator = (saTrackCompat);
// CONCATENATED MODULE: ./src/common/tip.js
/* harmony default export */ var tip = (function (text, callback) {
    var tipHTML = '';
    var autoHide = true;
    var tipBody;
    console.log(text);
    // 只有文本提示
    tipHTML = "<div style='padding:15px 20px;background:rgba(0,0,0,.75);color:#fff;border-radius:4px;text-align:center;min-width:160px;'><p data-label='tip-text' style='font-size: 14px;line-height:20px;margin:0;'>" + text + '</p></div>';
    if (callback) {
        autoHide = false;
        // 文本加按钮
        tipHTML = "<div style='padding:15px 20px;background:rgba(0,0,0,.75);color:#fff;border-radius:4px;text-align:center;min-width:160px;'><p data-label='tip-text' style='font-size: 14px;line-height:20px;margin:0;'>" + text + "</p><button data-label='tip-ok'>确定,我知道了</button></div>";
    }

    /* eslint-disable-next-line */
    if (tipBody = document.body.querySelector('[data-label="tip"]')) {
        tipBody.querySelector('[data-label="tip-text"]').innerHTML = text;
    } else {
        tipBody = document.createElement('div');
        tipBody.className = 'ofo-iff';
        tipBody.setAttribute('data-label', 'tip');
        document.body.appendChild(tipBody);

        tipBody.setAttribute('style', 'position:fixed;width:100%;height:100%;z-index:9999999; justify-content:center;align-items:center;display: flex;top:0;left:0;opacity:0;padding:0 20px;box-sizing:border-box !important;-webkit-transition: opacity 0.2s linear 0s, height 0s linear 0s;');
    }

    tipBody.innerHTML = tipHTML;
    setTimeout(function () {
        tipBody.style.opacity = 1;
    }, 10);
    if (tipBody.timeoutHandle) {
        clearTimeout(tipBody.timeoutHandle);
    }
    if (autoHide) {
        tipBody.timeoutHandle = setTimeout(function () {
            tipBody.style.opacity = 0;
            tipBody.timeoutHandle = setTimeout(function () {
                document.body.removeChild(tipBody);
            }, 200);
        }, 1500);
    } else {
        tipBody.querySelector('[data-label="tip-ok"]').onclick = function () {
            tipBody.style.opacity = 0;
            setTimeout(function () {
                document.body.removeChild(tipBody);
            }, 200);
            callback();
        };
    }
});;
// CONCATENATED MODULE: ./src/common/loadWxSdk.js





var loadWxSdk_sendWx = function sendWx() {
    var xhr = new XMLHttpRequest();
    xhr.open('post', '//' + API_HOST + '/ofo/wechat/config');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        var config = JSON.parse(xhr.responseText).values.info;
        if (config.url !== window.location.href) {
            sendDebug('WXNonMatch', { config: config });
            return;
        }
        window.wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: config.appid,
            timestamp: config.timestamp, // 必填，生成签名的时间戳
            nonceStr: config.noncestr, // 必填，生成签名的随机串
            signature: config.signature, // 必填，签名，见附录1
            jsApiList: config.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
    };
    xhr.send('url=' + encodeURIComponent(window.location.href));
};

var lastUrl;

var checkAndSendWx = function checkAndSendWx() {
    if (window.location.href === lastUrl) {
        return;
    }
    lastUrl = window.location.href;
    loadWxSdk_sendWx();
};

var wrapper = function wrapper(origin, callback) {
    return function () {
        origin.apply(history, arguments);
        callback();
    };
};

if (window.top === window && env_isInWeChat && !window.HAS_OFO_COMMON) {
    __webpack_require__(77);
    window.wx.error(function (res) {
        sendDebug('WXError', { message: res });
    });
    checkAndSendWx();
    window.addEventListener('popstate', checkAndSendWx); // location might be changed
    window.addEventListener('hashchange', checkAndSendWx); // location might be changed
    history.pushState = wrapper(history.pushState, checkAndSendWx); // hook to pushState
    history.replaceState = wrapper(history.replaceState, checkAndSendWx); // hook to replaceState
    setInterval(checkAndSendWx, 500); // other cases where location might be actively changed
}
// EXTERNAL MODULE: ./node_modules/fastclick/lib/fastclick.js
var fastclick = __webpack_require__(78);
var fastclick_default = /*#__PURE__*/__webpack_require__.n(fastclick);

// CONCATENATED MODULE: ./src/common/index.js
















var w = window;
if (!w.HAS_OFO_COMMON) {
    w.tip = tip;
    w.o_o = utils_namespaceObject;
    w.Cookies = js_cookie_default.a;
    w.OFO_ENV = env_namespaceObject;
    w.sendDebug = sendDebug;
    w.getOfoToken = common_token;
    w.saTrackCompat = sadecorator;
    w.ofoHandleDeepLink = bridge_handleLink;

    document.addEventListener('DOMContentLoaded', function () {
        fastclick_default.a.attach(document.body);
    });

    // 将cid存储于localstorge供埋点使用
    var src_common_token = common_token();
    if (src_common_token) {
        var ofo_cid = '';
        var ofo_tel = '';
        var city_index = '';

        var common_url = '//' + API_HOST + '/ofo/Api/v4/info/user';
        var common_xhr = new XMLHttpRequest();
        var common_data = new FormData();

        common_data.append('token', src_common_token);
        common_data.append('source', sourceForApi + '');
        common_data.append('source-version', '9999');

        common_xhr.open('POST', common_url);
        common_xhr.onload = function () {
            if (common_xhr.status >= 200 && common_xhr.status < 300 || common_xhr.status === 304) {
                var res = JSON.parse(common_xhr.responseText);
                if (res.errorCode === 200) {
                    try {
                        ofo_cid = res.values.info.cid;
                        ofo_tel = res.values.info.tel;
                        city_index = res.values.info.cityIndex;
                    } catch (e) {}
                }
            }

            // 用户触达，分享埋点需上报用户手机号
            // https://wiki.ofo.so/pages/viewpage.action?pageId=34997904
            if (ofo_tel) {
                localStorage && localStorage.setItem('ofotrack-localstorage-id_tel', ofo_tel);
            }

            // ofo-track会主动读取storage中存储的cid进行上报
            if (ofo_cid) {
                localStorage && localStorage.setItem('ofotrack-localstorage-id_cid', ofo_cid);
            }

            // ofo-track会主动读取storage中存储的city_index进行上报
            if (city_index) {
                localStorage && localStorage.setItem('satrack-localstorage-index_city', city_index);
            }
        };
        common_xhr.send(common_data);
    }

    // 去除ga，保留兼容函数，避免过去报错
    w['ga'] = w['GoogleAnalyticsObject'] = function () {};
}
// CONCATENATED MODULE: ./src/bridge/ios.js
function setupIOSWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(window.WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () {
        document.documentElement.removeChild(WVJBIframe);
    }, 0);
}
// CONCATENATED MODULE: ./src/bridge/android.js

function setupAndroidWebViewJavascriptBridge(callback) {
    initBridge();
    if (window.WebViewJavascriptBridge) {
        callback(window.WebViewJavascriptBridge);
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function () {
            console.log('WebViewJavascriptBridgeReady', window.WebViewJavascriptBridge);
            callback(window.WebViewJavascriptBridge);
        }, false);
    }
}

function initBridge() {
    if (window.WebViewJavascriptBridge) {
        return;
    }

    var messagingIframe;
    var sendMessageQueue = [];
    var receiveMessageQueue = [];
    var messageHandlers = {};

    var CUSTOM_PROTOCOL_SCHEME = 'ofo';
    var QUEUE_HAS_MESSAGE = '__QUEUE_MESSAGE__/';

    var responseCallbacks = {};
    var uniqueId = 1;

    // 创建队列iframe
    function _createQueueReadyIframe(doc) {
        messagingIframe = doc.createElement('iframe');
        messagingIframe.style.display = 'none';
        doc.documentElement.appendChild(messagingIframe);
    }

    // set default messageHandler  初始化默认的消息线程
    function init(messageHandler) {
        if (WebViewJavascriptBridge._messageHandler) {
            throw new Error('WebViewJavascriptBridge.init called twice');
        }
        WebViewJavascriptBridge._messageHandler = messageHandler;
        var receivedMessages = receiveMessageQueue;
        receiveMessageQueue = null;
        for (var i = 0; i < receivedMessages.length; i++) {
            _dispatchMessageFromNative(receivedMessages[i]);
        }
    }

    // 发送
    function send(data, responseCallback) {
        _doSend({
            data: data
        }, responseCallback);
    }

    // 注册线程 往数组里面添加值
    function registerHandler(handlerName, handler) {
        messageHandlers[handlerName] = handler;
    }
    // 调用线程
    function callHandler(handlerName, data, responseCallback) {
        _doSend({
            handlerName: handlerName,
            data: data
        }, responseCallback);
    }

    // sendMessage add message, 触发native处理 sendMessage
    function _doSend(message, responseCallback) {
        if (responseCallback) {
            var callbackId = 'cb_' + uniqueId++ + '_' + new Date().getTime();
            responseCallbacks[callbackId] = responseCallback;
            message.callbackId = callbackId;
        }

        sendMessageQueue.push(message);
        messagingIframe.src = CUSTOM_PROTOCOL_SCHEME + '://' + QUEUE_HAS_MESSAGE;
    }

    // 提供给native调用,该函数作用:获取sendMessageQueue返回给native,由于android不能直接获取返回的内容,所以使用url shouldOverrideUrlLoading 的方式返回内容
    function _fetchQueue() {
        var messageQueueString = stringify_default()(sendMessageQueue);
        sendMessageQueue = [];
        // android can't read directly the return data, so we can reload iframe src to communicate with java
        messagingIframe.src = CUSTOM_PROTOCOL_SCHEME + '://return/_fetchQueue/' + encodeURIComponent(messageQueueString);
    }

    // 提供给native使用,
    function _dispatchMessageFromNative(messageJSON) {
        setTimeout(function () {
            var message = JSON.parse(messageJSON);
            console.log(message);
            var responseCallback;
            // java call finished, now need to call js callback function
            if (message.responseId) {
                responseCallback = responseCallbacks[message.responseId];
                if (!responseCallback) {
                    return;
                }
                responseCallback(JSON.parse(message.responseData));
                // delete responseCallbacks[message.responseId];
            } else {
                // 直接发送
                if (message.callbackId) {
                    var callbackResponseId = message.callbackId;
                    responseCallback = function responseCallback(responseData) {
                        _doSend({
                            responseId: callbackResponseId,
                            responseData: responseData
                        });
                    };
                }

                var handler = WebViewJavascriptBridge._messageHandler;
                if (message.handlerName) {
                    handler = messageHandlers[message.handlerName];
                }
                // 查找指定handler
                try {
                    handler(message.data, responseCallback);
                } catch (exception) {
                    if (typeof console !== 'undefined') {
                        console.log('WebViewJavascriptBridge: WARNING: javascript handler threw.', message, exception);
                    }
                }
            }
        });
    }

    // 提供给native调用,receiveMessageQueue 在会在页面加载完后赋值为null,所以
    function _handleMessageFromNative(messageJSON) {
        console.log(messageJSON);
        if (receiveMessageQueue && receiveMessageQueue.length > 0) {
            receiveMessageQueue.push(messageJSON);
        }
        _dispatchMessageFromNative(messageJSON);
    }

    var WebViewJavascriptBridge = window.WebViewJavascriptBridge = {
        init: init,
        send: send,
        registerHandler: registerHandler,
        callHandler: callHandler,
        _fetchQueue: _fetchQueue,
        _handleMessageFromNative: _handleMessageFromNative
    };

    var doc = document;
    _createQueueReadyIframe(doc);
    var readyEvent = doc.createEvent('Events');
    readyEvent.initEvent('WebViewJavascriptBridgeReady');
    readyEvent.bridge = WebViewJavascriptBridge;
    doc.dispatchEvent(readyEvent);
}
// CONCATENATED MODULE: ./src/bridge/setup.js




function setupBridge(callback) {
    if (OFO_APP) {
        if (IS_ANDROID_RAW) {
            setupAndroidWebViewJavascriptBridge(callback);
        } else {
            setupIOSWebViewJavascriptBridge(callback);
        }
    } else {
        callback(null);
    }
}
// CONCATENATED MODULE: ./src/bridge/index.js




var ofoBridge = {
    ofoBridgeMethodId: 0,
    registerHandler: function registerHandler(title, cb) {
        setupBridge(function (bridge) {
            console.log(title);
            if (bridge) {
                bridge.registerHandler(title, function (data, responseCallback) {
                    cb && cb(data, responseCallback);
                });
            }
        });
    },
    // 通用调用方式
    callHandler: function callHandler(title, params, cb) {
        params = params || {};
        console.log(title, 'params============>', params);
        if (title === 'openAPP' && IS_ANDROID_RAW) {
            params.bundleid = 'com.eg.android.AlipayGphone';
        }
        setupBridge(function (bridge) {
            if (bridge) {
                bridge.callHandler(title, params, function (response) {
                    console.log(title, 'ofoBridgeRes============>', response);
                    cb && cb(response);
                });
            }
        });
    },
    setTitle: function setTitle(title) {
        // title: string? (为null则清空之前的UI，不传则保持不变)
        this.callHandler('setTitle', { title: title });
    },
    setLeftItem: function setLeftItem(params, cb) {
        // img: string? 枚举
        // text: string?
        // method: string?
        if (params.method !== null) {
            this.ofoBridgeMethodId += 1;
            window['ofoBridgeMethod' + this.ofoBridgeMethodId] = params.method;
            params.method = 'window["ofoBridgeMethod' + this.ofoBridgeMethodId + '"]()';
        } else {
            params.method = '';
        }
        this.callHandler('setLeftItem', params, cb);
    },
    setRightItem: function setRightItem(params, cb) {
        // img: string? 枚举
        // text: string?
        // method: string?
        if (params.method !== null) {
            this.ofoBridgeMethodId += 1;
            window['ofoBridgeMethod' + this.ofoBridgeMethodId] = params.method;
            params.method = 'window["ofoBridgeMethod' + this.ofoBridgeMethodId + '"]()';
        } else {
            params.method = '';
        }
        this.callHandler('setRightItem', params, function (res) {
            cb && cb(res);
        });
    },
    // 调用端上Toast
    showToast: function showToast(text, duration) {
        duration = duration || 2;
        this.callHandler('showToast', { text: text, duration: duration });
    },
    // 获取定位
    getLocation: function getLocation(immediately, cb) {
        var _success = { code: 200, msg: '成功', value: {} };
        var _fail = { code: 0, msg: '' };

        if (isInWeChat && window.wx) {
            var wx = window.wx;
            wx.ready(function () {
                console.log('wx.ready ======> ', wx.getLocation);
                wx.getLocation({
                    'type': 'wgs84',
                    'success': function success(position) {
                        console.log('wx.getLocation=====>', position);
                        _success.value = { lat: position.latitude, lng: position.longitude };
                        cb && cb(_success);
                    },
                    'fail': function fail(e) {
                        console.log('wx.getLocation  fail=====>', e);
                        cb && cb(_fail);
                    }
                });
            });
        } else if (isInAlipay) {
            window.AlipayJSBridge.call('getLocation', function (position) {
                if (position.latitude && position.longitude) {
                    _success.value = { lat: position.latitude, lng: position.longitude };
                    cb && cb(_success);
                } else {
                    cb && cb(_fail);
                }
            });
        } else if (OFO_APP) {
            // immediately: bool (false: 实时定位, true: 如果有缓存会立马返回缓存，不然实时定位)
            this.callHandler('getLocation', { immediately: immediately }, cb);
        } else {
            console.log('h5  navigator.geolocation.getCurrentPosition ======> ', isInWeChat, window.wx);
            navigator.geolocation.getCurrentPosition(function (position) {
                _success.value = { lat: position.coords.latitude, lng: position.coords.longitude };
                cb && cb(_success);
            }, function (e) {
                cb && cb(_fail);
            }, {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 15000
            });
        }
    },

    // 上传图片
    pickImage: function pickImage(source, cb) {
        // source : (1:相册 2:相机 默认都展示)
        var params = {};
        var _this = this;
        if (+source === 1 || +source === 2) {
            params.source = source;
        }
        this.callHandler('pickImage', params, function (res) {
            if (+res.code === 200) {
                cb && cb(res, _this.dataURItoBlob(res.value.data));
            } else {
                cb && cb(res);
            }
        });
    },
    // 立刻分享
    share: function share(params, cb) {
        /*
            params: {
                title: string      //  分享标题
                type: string       //  'wxFriend' | 'wxCircle' | 'qqFriend' | 'qqZone'
                desc: string       //  分享描述
                imgURL: string,    //  分享icon
                shareURL: string   //  分享链接
            }
        */
        this.callHandler('share', params, cb);
    },
    // 调起分享面板
    showSharePanel: function showSharePanel(params, cb) {
        /*
            params: {
                title: string      //  分享标题
                types: array       //  ['wxFriend', 'wxCircle', 'qqFriend', 'qqZone'],
                desc: string       //  分享描述
                imgURL: string,    //  分享icon
                shareURL: string   //  分享链接
            }
        */
        this.callHandler('showSharePanel', params, cb);
    },
    // 跳转push推送设置
    goPushSetting: function goPushSetting() {
        this.callHandler('goPushSetting');
    },
    // 获取推送状态
    getPushStatus: function getPushStatus(cb) {
        this.callHandler('getPushStatus', {}, cb);
    },
    // 关闭当前页面
    closePage: function closePage() {
        this.callHandler('closePage');
    },
    // 上一页
    goBack: function goBack() {
        this.callHandler('goBack');
    },
    // 下一页
    goNext: function goNext() {
        this.callHandler('goNext');
    },
    // 刷新
    reload: function reload() {
        this.callHandler('reload');
    },
    wxPay: function wxPay(params, cb) {
        // params: {payInfo: {}}
        this.callHandler('wxPay', params, cb);
    },
    aliPay: function aliPay(params, cb) {
        // params: {payInfo: string}
        this.callHandler('aliPay', params, cb);
    },
    applePay: function applePay(params, cb) {
        // params: {payInfo: {}}
        this.callHandler('applePay', params, cb);
    },
    openBrowser: function openBrowser(url) {
        this.callHandler('openBrowser', { url: url });
    },
    copyToClipboard: function copyToClipboard(text) {
        this.callHandler('copyToClipboard', { text: text });
    },
    getNetworkType: function getNetworkType(cb) {
        this.callHandler('getNetworkType', {}, cb);
    },
    makePhoneCall: function makePhoneCall(text) {
        this.callHandler('makePhoneCall', { text: text });
    },
    getSnapshot: function getSnapshot(cb) {
        var _this = this;
        this.callHandler('getSnapshot', {}, function (res) {
            if (+res.code === 200) {
                cb && cb(res, _this.dataURItoBlob(res.value.data));
            } else {
                cb && cb(res);
            }
        });
    },
    saveScreenToLocal: function saveScreenToLocal(cb) {
        this.callHandler('saveScreenToLocal', {}, cb);
    },
    showLoading: function showLoading() {
        this.callHandler('showLoading');
    },
    hideLoading: function hideLoading() {
        this.callHandler('hideLoading');
    },
    info: function info(cb) {
        this.callHandler('info', {}, cb);
    },
    router: function router(key, query) {
        var queryCon = '';
        if (query) {
            keys_default()(query).forEach(function (key) {
                queryCon += key + '=' + encodeURIComponent(query[key]) + '&';
            });

            queryCon = '?' + queryCon.substring(0, queryCon.length - 1);
        }
        var link = 'ofolink://ofo.com/' + key + queryCon;
        console.log(link);
        // 参考 Router路由表 http://wiki.ofo.so:8090/pages/viewpage.action?pageId=22381069  例如：ofolink://ofo.com/scan
        this.callHandler('router', { url: link });
    },
    getToken: function getToken(cb) {
        this.callHandler('getToken', {}, cb);
    },
    // 图片裁剪
    photoCrop: function photoCrop(params, cb) {
        var _this = this;
        this.callHandler('photoCrop', params, function (res) {
            if (+res.code === 200) {
                cb && cb(res, _this.dataURItoBlob(res.value.data));
            } else {
                cb && cb(res);
            }
        });
    },
    // 图片转换为二进制
    dataURItoBlob: function dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString = atob(dataURI.split(',')[1]);
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var blob;
        try {
            blob = new Blob([ia.buffer], { type: mimeString });
        } catch (e) {
            var BlobBuilderCompat = window['BlobBuilder'] || window['WebKitBlobBuilder'] || window['MSBlobBuilder'];
            var bb = new BlobBuilderCompat();
            bb.append(ia.buffer);
            blob = bb.getBlob(mimeString);
        }
        return blob;
    },
    // 获取精确位置
    getDetailLocation: function getDetailLocation(params, cb) {
        this.callHandler('getDetailLocation', params || {}, cb);
    },
    // 获取通讯录
    getContacts: function getContacts(cb) {
        this.callHandler('getContacts', {}, cb);
    },
    // 分享小程序
    shareWXMiniApp: function shareWXMiniApp(params, cb) {
        /*
            params: {
                title: string      //  分享标题
                types: array       //  ['wxFriend', 'wxCircle', 'qqFriend', 'qqZone'],
                desc: string       //  分享描述
                imgURL: string,    //  分享icon
                shareURL: string   //  分享链接
            }
        */
        this.callHandler('shareWXMiniApp', params, cb);
    },
    // 支付宝免密支付
    openAPP: function openAPP(params, cb) {
        /*
            params: {
                url: payInfo      //  支付参数
                bundleid: com.eg.android.AlipayGphone // 安卓
            }
        */
        params = params || {};
        if (IS_ANDROID_RAW) {
            params.bundleid = 'com.eg.android.AlipayGphone';
        }
        this.callHandler('openAPP', params, cb);
    },
    // 云闪付
    unionPay: function unionPay(params, cb) {
        // params: {payInfo: string}
        this.callHandler('unionPay', params, cb);
    },
    // 翼支付
    bestPay: function bestPay(params, cb) {
        // params: {
        //     payInfo: string
        //     type:0 / 1 (0: 支付, 1: 充值)
        // }
        this.callHandler('bestPay', params, cb);
    },
    // 安卓查看支付类型
    checkVendorPay: function checkVendorPay(cb) {
        // seType
        // 02   Samsung Pay
        // 04   Huawei Pay
        // 27   Meizu Pay
        // 30   Le Pay
        // 21   ZTE Pay
        // 25   Mi Pay
        // 33   Vivo Pay
        // 32   Smartisan Pay
        this.callHandler('checkVendorPay', {}, cb);
    },
    //  安卓指定手机Pay支付接口调用
    vendorPay: function vendorPay(params, cb) {
        // params: {
        //     payInfo: string
        //     seType: strings
        // }
        this.callHandler('vendorPay', params, cb);
    }
};
// CONCATENATED MODULE: ./src/core/fix.js


var pathname = location.pathname;
if (pathname !== '/about/foregift_authenticate/' && pathname !== '/ridefinish/') {
    if (!(pathname === '/identification/index.html' && window.location.href.indexOf('pagefrom=wallet') === -1)) {
        ofoBridge.setRightItem({
            text: '',
            method: ''
        });
    }
}
// CONCATENATED MODULE: ./src/core/route.js
/**
 * @file 用户触达 - 通用跳转模块，目的在于统一跳转方式，实现端内拼接渠道参数透传。
 */



/**
 * location跳转
 *
 * @config {String|Object} config
 */
function locationTo(config) {
    var berry = getDealParams().berry;

    function to(url) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var method = type ? 'assign' : 'replace';

        if (berry) {
            location[method](dealRouterUrl(url, { berry: berry }));
        } else {
            location[method](url);
        }
    }

    if (typeof config === 'string') {
        // 必须写绝对路径，看需求可以考虑支持相对路径
        to(config);
        return;
    }

    // 对象模式下，区分push|replace两种状态
    if (config.history === 'push') {
        to(config.location);
    }

    if (config.history === 'replace') {
        to(config.location, false);
    }
}

/**
 * bridge跳转
 *
 * @config {Object} config
 */
function bridgeTo(config) {
    var berry = getDealParams().berry;
    var url = berry ? dealRouterUrl(config.location, { berry: berry }) : config.location;

    if (OFO_APP && IS_ANDROID_RAW) {
        // android
        ofoBridge.router('common-web', { title: config.title, url: url });
    } else if (OFO_APP && IS_IOS_RAW) {
        // ios
        ofoBridge.router('web', { title: config.title, url: url });
    }
}

/**
 * Vue导航跳转
 *
 * @config {Object} config
 */
function routerTo(config) {
    var berry = getDealParams().berry;

    var query = void 0;
    if (berry) {
        query = { query: { berry: berry } };
    } else {
        query = {};
    }

    var router = config.router;
    var history = config.history;
    var location = config.location;

    if (!router || !location) {
        throw new Error('需传入Vue的router实例且location不为空');
    }

    if (typeof location === 'string') {
        router[history](extend({ path: location }, query));
        return;
    }

    location = extend(true, {}, location, query);

    router[history](location, config.onComplete, config.onAbort);
}

/**
 * 封装统一跳转方式
 *
 * @config {String|Object} config // 调用类型 -> shareConfig
 */
function ofoCommonRouter(config) {
    // 直接传入字符串，走location.href = 套路
    if (typeof config === 'string') {
        locationTo(config);
        return;
    }

    // 对象配置模式
    var _default = {
        type: 'location', // ['location' | 'bridge' | 'router']
        location: '', // String | Object，Object同Vue-router的location
        history: 'push', // ['push', 'replace']
        title: '',
        router: null,
        onComplete: null,
        onAbort: null
    };
    var setting = extend({}, _default, config);

    // 三种处理方式
    if (setting.type === 'location') {
        locationTo(setting);
    } else if (setting.type === 'bridge') {
        bridgeTo(setting);
    } else {
        routerTo(setting);
    }
}
// CONCATENATED MODULE: ./src/core/share.js

/**
 * @file 用户触达 - 通用分享模块，目的在于统一分享调用方式，并在关键节点埋点，实现分析标准化、自动化。
 */




// 埋点文档 https://wiki.ofo.so/pages/viewpage.action?pageId=35001467
/* eslint-disable-next-line */
var event_classify = 'usercontact';
/* eslint-disable-next-line */
var share_event_name = 'universal_share';

/**
 * hack原有Proxy，重置shareConfig为新方式
 *
 * @param {String} name // 调用类型 -> shareConfig
 * @param {Array} params // 分享参数 -> [title, desc, imgURL, shareURL]
 * @param {Object} props // 扩展参数 -> {回调,
 */
var share_ofoResponseProxy = function ofoResponseProxy(name, params) {
    var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (name === 'shareConfig' && OFO_APP) {
        ofoBridge.setRightItem({
            img: 'share',
            method: function method() {
                var shareConfig = {
                    title: params[0],
                    types: [0, 1, 2, 3], // (0: wxFriend, 1: wxCircle, 2: qqFriend, 3:qqZone)
                    desc: params[1],
                    imgURL: params[2],
                    shareURL: params[3]
                };

                // 分享面板展示埋点
                flag && log('click', 'std_common_share', 'panel_open', {
                    event_classify: event_classify,
                    event_name: share_event_name,
                    event_id: getEventId(),
                    event_tye: 'click',
                    event_info: {
                        event_status: 'panel_open',
                        cid: getCurCid(),
                        share_url: shareConfig.shareURL,
                        share_source: 'right_item' // 分享来源，右上角还是按钮点击
                    }
                });

                ofoBridge.showSharePanel(shareConfig, function (res) {
                    if (flag && res.value) {
                        // 分享类型及分享去处
                        // const shareType = ['shareWeb', 'shareImage'][+res.value.shareType];
                        // const shareTarget = ['wxFriend', 'wxCircle', 'qqFriend', 'qqZone'][+res.value.type];

                        // 点击
                        if (res.value.status === 1) {
                            log('click', 'std_common_share', 'share_click', {
                                event_classify: event_classify,
                                event_name: share_event_name,
                                event_id: getEventId(),
                                event_tye: 'click',
                                event_info: {
                                    event_status: 'click',
                                    cid: getCurCid(),
                                    share_channel: res.value.type,
                                    share_url: shareConfig.shareURL,
                                    share_type: res.value.shareType, // 分享类型，图片还是web
                                    share_source: 'right_item' // 分享来源，右上角还是按钮点击
                                }
                            });
                        }

                        // 成功
                        if (res.value.status === 2) {
                            shareAjax({
                                share_url: shareConfig.shareURL,
                                share_detail: stringify_default()(shareConfig),
                                share_channel: res.value.type
                            });
                            log('click', 'std_common_share', 'share_success', {
                                event_classify: event_classify,
                                event_name: share_event_name,
                                event_id: getEventId(),
                                event_tye: 'click',
                                event_info: {
                                    event_status: 'success',
                                    cid: getCurCid(),
                                    share_channel: res.value.type,
                                    share_url: shareConfig.shareURL,
                                    share_type: res.value.shareType, // 分享类型，图片还是web
                                    share_source: 'right_item' // 分享来源，右上角还是按钮点击
                                }
                            });
                        }

                        // 取消
                        if (res.value.status === 3) {
                            log('click', 'std_common_share', 'share_cancel', {
                                event_classify: event_classify,
                                event_name: share_event_name,
                                event_id: getEventId(),
                                event_tye: 'click',
                                event_info: {
                                    event_status: 'cancel',
                                    cid: getCurCid(),
                                    share_channel: res.value.type,
                                    share_url: shareConfig.shareURL,
                                    share_type: res.value.shareType, // 分享类型，图片还是web
                                    share_source: 'right_item' // 分享来源，右上角还是按钮点击
                                }
                            });
                        }

                        // 失败
                        if (res.value.status === 4) {
                            log('click', 'std_common_share', 'share_failed', {
                                event_classify: event_classify,
                                event_name: share_event_name,
                                event_id: getEventId(),
                                event_tye: 'click',
                                event_info: {
                                    event_status: 'fail',
                                    cid: getCurCid(),
                                    share_channel: res.value.type,
                                    share_url: shareConfig.shareURL,
                                    share_type: res.value.shareType, // 分享类型，图片还是web
                                    share_source: 'right_item' // 分享来源，右上角还是按钮点击
                                }
                            });
                        }
                    }
                });
            }
        });
    } else {
        bridge_ofoResponseProxy && bridge_ofoResponseProxy(name, params);
    }
};

function miniProgramShare(data) {
    if (isInWxMini) {
        window.wx.miniProgram.postMessage({ data: data });
        console.log('@@@@', data, window.wx.miniProgram);
    } else if (isInAliMini) {
        window.my.postMessage({ data: data });
        console.log('@@@@', data, window.my.postMessage);
    }
}

var ofoCommonShare = {
    /**
     * 统一封装，设置端内右上角及微信、小程序分享
     *
     * @param {Array} config // 分享参数，顺序 -> [name, description, iconUrl, linkUrl]
     */
    setShare: function setShare(config) {
        console.log('分享setShare：\n', config);

        // 处理URL，拼接分享扩展参数
        config[3] = dealShareUrl(config[3]);

        if (isInWxMini || isInAliMini) {
            miniProgramShare({
                data: {
                    title: config[0],
                    desc: config[1],
                    imageUrl: config[2],
                    path: config[3]
                },
                action: 'handleShare' // handlePay支付 handleShare 分享 handleLogin 登录
            });
        } else {
            share_ofoResponseProxy('shareConfig', config, true);
        }

        // 调用分享模块
        log('click', 'std_common_share', 'share_module', {
            event_classify: event_classify,
            event_name: share_event_name,
            event_id: getEventId(),
            event_tye: 'click',
            event_info: {
                event_status: 'share_module',
                cid: getCurCid(),
                share_url: config[3],
                share_type: 0 // 分享类型，图片还是web
            }
        });
    },


    /**
     * 点击展示端内分享组件或分享指引
     *
     * @param {Object} config // 端内分享参数，含标题、描述、类型等
     * @param {Object} params // 分享扩展参数，是否展示
     */
    showShare: function showShare() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        console.log('分享showShare：\n', config);

        if (!isObject(config) || !isObject(params)) {
            throw new Error('showShare两参数均需为对象格式');
        }

        // 仅分享web时做url处理
        if (+config.shareType !== 1 && config.shareURL) {
            config.shareURL = dealShareUrl(config.shareURL);
        }

        var _default = {
            // 端内分享回调
            appCb: null,

            // 是否展示分享引导
            isShowLead: false,
            // 分享引导蒙层颜色
            leadBgColor: 'rgba(0, 0, 0, .75)',
            // 分享引导指引小图
            leadImgUrl: '',
            // 分享指引小图宽度
            leadImgWidth: 0,
            // 分享小图顶部距离
            leadImgTop: 0,
            // 分享小图右侧距离
            leadImgRight: '0.24rem'
        };
        var setting = extend({}, _default, params);

        if (OFO_APP) {
            // 端内展示分享面板
            // 分享面板展示埋点
            log('click', 'std_common_share', 'panel_open', {
                event_classify: event_classify,
                event_name: share_event_name,
                event_id: getEventId(),
                event_tye: 'click',
                event_info: {
                    event_status: 'panel_open',
                    cid: getCurCid(),
                    share_channel: '',
                    share_url: config.shareURL,
                    share_type: '', // 分享类型，图片还是web
                    share_source: 'button_click' // 分享来源，右上角还是按钮点击
                }
            });

            ofoBridge.showSharePanel(config, function (res) {
                if (res.value) {
                    // 分享类型及分享去处
                    // const shareType = ['shareWeb', 'shareImage'][+res.value.shareType];
                    // const shareTarget = ['wxFriend', 'wxCircle', 'qqFriend', 'qqZone'][+res.value.type];

                    // 点击
                    if (res.value.status === 1) {
                        log('click', 'std_common_share', 'share_click', {
                            event_classify: event_classify,
                            event_name: share_event_name,
                            event_id: getEventId(),
                            event_tye: 'click',
                            event_info: {
                                event_status: 'click',
                                cid: getCurCid(),
                                share_channel: res.value.type,
                                share_url: config.shareURL,
                                share_type: res.value.shareType, // 分享类型，图片还是web
                                share_source: 'button_click' // 分享来源，右上角还是按钮点击
                            }
                        });
                    }

                    // 成功
                    if (res.value.status === 2) {
                        shareAjax({
                            share_url: config.shareURL,
                            share_detail: stringify_default()(config),
                            share_channel: res.value.type
                        });
                        log('click', 'std_common_share', 'share_success', {
                            event_classify: event_classify,
                            event_name: share_event_name,
                            event_id: getEventId(),
                            event_tye: 'click',
                            event_info: {
                                event_status: 'success',
                                cid: getCurCid(),
                                share_channel: res.value.type,
                                share_url: config.shareURL,
                                share_type: res.value.shareType, // 分享类型，图片还是web
                                share_source: 'button_click' // 分享来源，右上角还是按钮点击
                            }
                        });
                    }

                    // 取消
                    if (res.value.status === 3) {
                        log('click', 'std_common_share', 'share_cancel', {
                            event_classify: event_classify,
                            event_name: share_event_name,
                            event_id: getEventId(),
                            event_tye: 'click',
                            event_info: {
                                event_status: 'cancel',
                                cid: getCurCid(),
                                share_channel: res.value.type,
                                share_url: config.shareURL,
                                share_type: res.value.shareType, // 分享类型，图片还是web
                                share_source: 'button_click' // 分享来源，右上角还是按钮点击
                            }
                        });
                    }

                    // 失败
                    if (res.value.status === 4) {
                        log('click', 'std_common_share', 'share_failed', {
                            event_classify: event_classify,
                            event_name: share_event_name,
                            event_id: getEventId(),
                            event_tye: 'click',
                            event_info: {
                                event_status: 'fail',
                                cid: getCurCid(),
                                share_channel: res.value.type,
                                share_url: config.shareURL,
                                share_type: res.value.shareType, // 分享类型，图片还是web
                                share_source: 'button_click' // 分享来源，右上角还是按钮点击
                            }
                        });
                    }
                }

                setting.appCb && setting.appCb(res);
            });
        } else if (setting.isShowLead) {
            // 端外展示分享引导
            // TODO 微信小程序分享指引图需要向右侧移动一块适配

            if (!setting.leadImgUrl || !setting.leadImgWidth) {
                throw new Error('leadImgUrl与leadImgWidth为必传项');
            }

            // 构建外层DOM
            var leadOutDOM = document.createElement('div');
            leadOutDOM.className = 'share-common-box';
            leadOutDOM.style = 'position:fixed;z-index:2147483647;top:0;left:0;opacity:0;width:100%;height:100%;background-color:' + setting.leadBgColor + ';-webkit-transition: opacity 300ms;transition: opacity 300ms;';

            // 点击移除DOM元素
            leadOutDOM.onclick = function () {
                var _this = this;

                this.style.opacity = 0;
                var end = function end() {
                    leadOutDOM.onclick = null;
                    _this.removeEventListener(transitionEvent, end);
                    _this.parentNode.removeChild(_this);

                    // 分享指引弹层关闭
                    log('click', 'std_common_share', 'lead_close', {
                        event_classify: event_classify,
                        event_name: share_event_name,
                        event_id: getEventId(),
                        event_tye: 'click',
                        event_info: {
                            event_status: 'lead_close',
                            cid: getCurCid(),
                            share_url: config.shareURL || ''
                        }
                    });
                };
                this.addEventListener(transitionEvent, end);
            };

            // 分享小图添加到外层DOM
            var img = '<img src="' + setting.leadImgUrl + '" style="position:absolute;top:' + setting.leadImgTop + ';width:' + setting.leadImgWidth + ';right:' + setting.leadImgRight + ';" />';
            leadOutDOM.innerHTML = img;

            document.body.appendChild(leadOutDOM);

            /* eslint-disable-next-line */
            leadOutDOM.clientWidth;
            leadOutDOM.style.opacity = 1;

            // 分享指引弹层展示
            log('click', 'std_common_share', 'lead_open', {
                event_classify: event_classify,
                event_name: share_event_name,
                event_id: getEventId(),
                event_tye: 'click',
                event_info: {
                    event_status: 'lead_open',
                    cid: getCurCid(),
                    share_url: config.shareURL || ''
                }
            });
        }
    }
};

/**
 * 创建分享行为埋点上报
 * https://wiki.ofo.so/pages/viewpage.action?pageId=34997904
 *
 * @param {Object} options // 请求对象参数, {url: String, data: Object, success: Function}
 */
function shareAjax(options) {
    // 仅线上环境上报
    isOnline && ajax({
        // url: 'http://10.200.108.56:9301/activity/share/createShare',
        url: 'https://activity.api.ofo.com/activity/share/createShare',
        data: {
            token: window.getOfoToken(),
            tel: localStorage && localStorage.getItem('ofotrack-localstorage-id_tel') || '',
            type: 'worldcupdiy',
            share_url: options.share_url,
            share_detail: options.share_detail,
            share_channel: options.share_channel
        }
    });
}

// 当前页面埋点，统计分享出去页面打开情况
if (getDealParams().shr_id && !OFO_APP) {
    log('view', 'std_common_share', 'share_page', {
        event_classify: event_classify,
        event_name: share_event_name,
        event_id: getEventId(),
        event_tye: 'view',
        event_info: {
            event_status: 'view',
            cid: getCurCid(),

            uuid: getDealParams().shr_id || '', // 当前分享链接唯一ID
            form_cid: getUrlCid(), // 打开当前页面的分享人ID
            share_ct: getDealParams().shr_ct || 1, // 分享层级
            share_to: getDealParams().shr_to || '', // 客户端分享出去渠道
            share_utm: getDealParams().shr_utm || '', // 当前分享页渠道
            share_env: getDealParams().shr_env || '' // 分享页面所处的环境
        }
    });
}
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ofoBridge", function() { return ofoBridge; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ofoCommonRouter", function() { return ofoCommonRouter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ofoResponseProxy", function() { return share_ofoResponseProxy; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ofoCommonShare", function() { return ofoCommonShare; });
/**
 * @file 入口文件，导出对象会挂在到window下。
 */






/***/ })
/******/ ])));
