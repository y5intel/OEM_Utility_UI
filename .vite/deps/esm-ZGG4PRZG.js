import {
  PublicKey,
  init_index_browser_esm
} from "./chunk-NXBQG7JS.js";
import "./chunk-4WGNHZQ4.js";
import {
  __commonJS,
  __toESM
} from "./chunk-W7S2ME4R.js";

// node_modules/@solflare-wallet/sdk/node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/@solflare-wallet/sdk/node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// node_modules/@solflare-wallet/sdk/node_modules/base-x/src/index.js
var require_src = __commonJS({
  "node_modules/@solflare-wallet/sdk/node_modules/base-x/src/index.js"(exports, module) {
    "use strict";
    function base(ALPHABET) {
      if (ALPHABET.length >= 255) {
        throw new TypeError("Alphabet too long");
      }
      var BASE_MAP = new Uint8Array(256);
      for (var j = 0; j < BASE_MAP.length; j++) {
        BASE_MAP[j] = 255;
      }
      for (var i = 0; i < ALPHABET.length; i++) {
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
          throw new TypeError(x + " is ambiguous");
        }
        BASE_MAP[xc] = i;
      }
      var BASE = ALPHABET.length;
      var LEADER = ALPHABET.charAt(0);
      var FACTOR = Math.log(BASE) / Math.log(256);
      var iFACTOR = Math.log(256) / Math.log(BASE);
      function encode(source) {
        if (source instanceof Uint8Array) {
        } else if (ArrayBuffer.isView(source)) {
          source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
          source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
          throw new TypeError("Expected Uint8Array");
        }
        if (source.length === 0) {
          return "";
        }
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while (pbegin !== pend && source[pbegin] === 0) {
          pbegin++;
          zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while (pbegin !== pend) {
          var carry = source[pbegin];
          var i2 = 0;
          for (var it1 = size - 1; (carry !== 0 || i2 < length) && it1 !== -1; it1--, i2++) {
            carry += 256 * b58[it1] >>> 0;
            b58[it1] = carry % BASE >>> 0;
            carry = carry / BASE >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          pbegin++;
        }
        var it2 = size - length;
        while (it2 !== size && b58[it2] === 0) {
          it2++;
        }
        var str = LEADER.repeat(zeroes);
        for (; it2 < size; ++it2) {
          str += ALPHABET.charAt(b58[it2]);
        }
        return str;
      }
      function decodeUnsafe(source) {
        if (typeof source !== "string") {
          throw new TypeError("Expected String");
        }
        if (source.length === 0) {
          return new Uint8Array();
        }
        var psz = 0;
        var zeroes = 0;
        var length = 0;
        while (source[psz] === LEADER) {
          zeroes++;
          psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while (source[psz]) {
          var carry = BASE_MAP[source.charCodeAt(psz)];
          if (carry === 255) {
            return;
          }
          var i2 = 0;
          for (var it3 = size - 1; (carry !== 0 || i2 < length) && it3 !== -1; it3--, i2++) {
            carry += BASE * b256[it3] >>> 0;
            b256[it3] = carry % 256 >>> 0;
            carry = carry / 256 >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          psz++;
        }
        var it4 = size - length;
        while (it4 !== size && b256[it4] === 0) {
          it4++;
        }
        var vch = new Uint8Array(zeroes + (size - it4));
        var j2 = zeroes;
        while (it4 !== size) {
          vch[j2++] = b256[it4++];
        }
        return vch;
      }
      function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) {
          return buffer;
        }
        throw new Error("Non-base" + BASE + " character");
      }
      return {
        encode,
        decodeUnsafe,
        decode
      };
    }
    module.exports = base;
  }
});

// node_modules/@solflare-wallet/sdk/node_modules/bs58/index.js
var require_bs58 = __commonJS({
  "node_modules/@solflare-wallet/sdk/node_modules/bs58/index.js"(exports, module) {
    var basex = require_src();
    var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    module.exports = basex(ALPHABET);
  }
});

// node_modules/@solflare-wallet/sdk/node_modules/eventemitter3/index.mjs
var import_index = __toESM(require_eventemitter3(), 1);
var eventemitter3_default = import_index.default;

// node_modules/@solflare-wallet/sdk/lib/esm/adapters/base.js
var __extends = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var WalletAdapter = (
  /** @class */
  function(_super) {
    __extends(WalletAdapter2, _super);
    function WalletAdapter2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return WalletAdapter2;
  }(eventemitter3_default)
);
var base_default = WalletAdapter;

// node_modules/@solflare-wallet/sdk/lib/esm/adapters/WalletProvider.js
init_index_browser_esm();
var import_bs58 = __toESM(require_bs58());
var __extends2 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var Wallet = (
  /** @class */
  function(_super) {
    __extends2(Wallet2, _super);
    function Wallet2(provider, network) {
      var _this = _super.call(this) || this;
      _this._handleMessage = function(e) {
        if (_this._injectedProvider && e.source === window || e.origin === _this._providerUrl.origin && e.source === _this._popup) {
          if (e.data.method === "connected") {
            var newPublicKey = new PublicKey(e.data.params.publicKey);
            if (!_this._publicKey || !_this._publicKey.equals(newPublicKey)) {
              if (_this._publicKey && !_this._publicKey.equals(newPublicKey)) {
                _this._handleDisconnect();
              }
              _this._publicKey = newPublicKey;
              _this._autoApprove = !!e.data.params.autoApprove;
              _this.emit("connect", _this._publicKey);
            }
          } else if (e.data.method === "disconnected") {
            _this._handleDisconnect();
          } else if (e.data.result || e.data.error) {
            if (_this._responsePromises.has(e.data.id)) {
              var _a = __read(_this._responsePromises.get(e.data.id), 2), resolve = _a[0], reject = _a[1];
              if (e.data.result) {
                resolve(e.data.result);
              } else {
                reject(new Error(e.data.error));
              }
            }
          }
        }
      };
      _this._handleConnect = function() {
        if (!_this._handlerAdded) {
          _this._handlerAdded = true;
          window.addEventListener("message", _this._handleMessage);
          window.addEventListener("beforeunload", _this.disconnect);
        }
        if (_this._injectedProvider) {
          return new Promise(function(resolve) {
            _this._sendRequest("connect", {});
            resolve();
          });
        } else {
          window.name = "parent";
          _this._popup = window.open(_this._providerUrl.toString(), "_blank", "location,resizable,width=460,height=675");
          return new Promise(function(resolve) {
            _this.once("connect", resolve);
          });
        }
      };
      _this._handleDisconnect = function() {
        if (_this._handlerAdded) {
          _this._handlerAdded = false;
          window.removeEventListener("message", _this._handleMessage);
          window.removeEventListener("beforeunload", _this.disconnect);
        }
        if (_this._publicKey) {
          _this._publicKey = null;
          _this.emit("disconnect");
        }
        _this._responsePromises.forEach(function(_a, id) {
          var _b = __read(_a, 2), resolve = _b[0], reject = _b[1];
          _this._responsePromises.delete(id);
          reject("Wallet disconnected");
        });
      };
      _this._sendRequest = function(method, params) {
        return __awaiter(_this, void 0, void 0, function() {
          var requestId;
          var _this2 = this;
          return __generator(this, function(_a) {
            if (method !== "connect" && !this.connected) {
              throw new Error("Wallet not connected");
            }
            requestId = this._nextRequestId;
            ++this._nextRequestId;
            return [2, new Promise(function(resolve, reject) {
              _this2._responsePromises.set(requestId, [resolve, reject]);
              if (_this2._injectedProvider) {
                _this2._injectedProvider.postMessage({
                  jsonrpc: "2.0",
                  id: requestId,
                  method,
                  params: __assign({ network: _this2._network }, params)
                });
              } else {
                _this2._popup.postMessage({
                  jsonrpc: "2.0",
                  id: requestId,
                  method,
                  params
                }, _this2._providerUrl.origin);
                if (!_this2.autoApprove) {
                  _this2._popup.focus();
                }
              }
            })];
          });
        });
      };
      _this.connect = function() {
        if (_this._popup) {
          _this._popup.close();
        }
        return _this._handleConnect();
      };
      _this.disconnect = function() {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!this._injectedProvider)
                  return [3, 2];
                return [4, this._sendRequest("disconnect", {})];
              case 1:
                _a.sent();
                _a.label = 2;
              case 2:
                if (this._popup) {
                  this._popup.close();
                }
                this._handleDisconnect();
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      };
      _this.sign = function(data, display) {
        return __awaiter(_this, void 0, void 0, function() {
          var response, signature, publicKey;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!(data instanceof Uint8Array)) {
                  throw new Error("Data must be an instance of Uint8Array");
                }
                return [4, this._sendRequest("sign", {
                  data,
                  display
                })];
              case 1:
                response = _a.sent();
                signature = import_bs58.default.decode(response.signature);
                publicKey = new PublicKey(response.publicKey);
                return [2, {
                  signature,
                  publicKey
                }];
            }
          });
        });
      };
      _this.signTransaction = function(transaction) {
        return __awaiter(_this, void 0, void 0, function() {
          var response, signature, publicKey;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, this._sendRequest("signTransaction", {
                  message: import_bs58.default.encode(transaction.serializeMessage())
                })];
              case 1:
                response = _a.sent();
                signature = import_bs58.default.decode(response.signature);
                publicKey = new PublicKey(response.publicKey);
                transaction.addSignature(publicKey, signature);
                return [2, transaction];
            }
          });
        });
      };
      _this.signAllTransactions = function(transactions) {
        return __awaiter(_this, void 0, void 0, function() {
          var response, signatures, publicKey;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, this._sendRequest("signAllTransactions", {
                  messages: transactions.map(function(tx) {
                    return import_bs58.default.encode(tx.serializeMessage());
                  })
                })];
              case 1:
                response = _a.sent();
                signatures = response.signatures.map(function(s) {
                  return import_bs58.default.decode(s);
                });
                publicKey = new PublicKey(response.publicKey);
                transactions = transactions.map(function(tx, idx) {
                  tx.addSignature(publicKey, signatures[idx]);
                  return tx;
                });
                return [2, transactions];
            }
          });
        });
      };
      if (isInjectedProvider(provider)) {
        _this._injectedProvider = provider;
      } else if (isString(provider)) {
        _this._providerUrl = new URL(provider);
        _this._providerUrl.hash = new URLSearchParams({
          origin: window.location.origin,
          network
        }).toString();
      } else {
        throw new Error("provider parameter must be an injected provider or a URL string.");
      }
      _this._network = network;
      _this._publicKey = null;
      _this._autoApprove = false;
      _this._popup = null;
      _this._handlerAdded = false;
      _this._nextRequestId = 1;
      _this._responsePromises = /* @__PURE__ */ new Map();
      return _this;
    }
    Object.defineProperty(Wallet2.prototype, "publicKey", {
      get: function() {
        return this._publicKey;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Wallet2.prototype, "connected", {
      get: function() {
        return this._publicKey !== null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Wallet2.prototype, "autoApprove", {
      get: function() {
        return this._autoApprove;
      },
      enumerable: false,
      configurable: true
    });
    return Wallet2;
  }(eventemitter3_default)
);
var WalletProvider_default = Wallet;
function isString(a) {
  return typeof a === "string";
}
function isInjectedProvider(a) {
  return isObject(a) && isFunction(a.postMessage);
}
function isObject(a) {
  return typeof a === "object" && a !== null;
}
function isFunction(a) {
  return typeof a === "function";
}

// node_modules/@solflare-wallet/sdk/lib/esm/adapters/web.js
var import_bs582 = __toESM(require_bs58());
var __extends3 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator2 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var WebAdapter = (
  /** @class */
  function(_super) {
    __extends3(WebAdapter2, _super);
    function WebAdapter2(iframe, network, provider) {
      var _this = _super.call(this) || this;
      _this._instance = null;
      _this.handleMessage = function(data) {
      };
      _this._sendRequest = function(method, params) {
        return __awaiter2(_this, void 0, void 0, function() {
          return __generator2(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!this._instance.sendRequest)
                  return [3, 2];
                return [4, this._instance.sendRequest(method, params)];
              case 1:
                return [2, _a.sent()];
              case 2:
                if (!this._instance._sendRequest)
                  return [3, 4];
                return [4, this._instance._sendRequest(method, params)];
              case 3:
                return [2, _a.sent()];
              case 4:
                throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`");
            }
          });
        });
      };
      _this._handleConnect = function() {
        _this.emit("connect");
      };
      _this._handleDisconnect = function() {
        window.clearInterval(_this._pollTimer);
        _this.emit("disconnect");
      };
      _this._network = network;
      _this._provider = provider;
      return _this;
    }
    Object.defineProperty(WebAdapter2.prototype, "publicKey", {
      get: function() {
        return this._instance.publicKey || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(WebAdapter2.prototype, "connected", {
      get: function() {
        return this._instance.connected || false;
      },
      enumerable: false,
      configurable: true
    });
    WebAdapter2.prototype.connect = function() {
      return __awaiter2(this, void 0, void 0, function() {
        var _this = this;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              this._instance = new WalletProvider_default(this._provider, this._network);
              this._instance.on("connect", this._handleConnect);
              this._instance.on("disconnect", this._handleDisconnect);
              this._pollTimer = window.setInterval(function() {
                var _a2, _b;
                if (((_b = (_a2 = _this._instance) === null || _a2 === void 0 ? void 0 : _a2._popup) === null || _b === void 0 ? void 0 : _b.closed) !== false) {
                  _this._handleDisconnect();
                }
              }, 200);
              return [4, this._instance.connect()];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    WebAdapter2.prototype.disconnect = function() {
      return __awaiter2(this, void 0, void 0, function() {
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              this._instance.removeAllListeners("connect");
              this._instance.removeAllListeners("disconnect");
              return [4, this._instance.disconnect()];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    WebAdapter2.prototype.signTransaction = function(message) {
      return __awaiter2(this, void 0, void 0, function() {
        var response;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._sendRequest("signTransaction", {
                message: import_bs582.default.encode(message)
              })];
            case 1:
              response = _a.sent();
              return [2, import_bs582.default.decode(response.signature)];
          }
        });
      });
    };
    WebAdapter2.prototype.signAllTransactions = function(messages) {
      return __awaiter2(this, void 0, void 0, function() {
        var response;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._sendRequest("signAllTransactions", {
                messages: messages.map(function(message) {
                  return import_bs582.default.encode(message);
                })
              })];
            case 1:
              response = _a.sent();
              return [2, response.signatures.map(function(signature) {
                return import_bs582.default.decode(signature);
              })];
          }
        });
      });
    };
    WebAdapter2.prototype.signAndSendTransaction = function(transaction, options) {
      return __awaiter2(this, void 0, void 0, function() {
        var response;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._sendRequest("signAndSendTransaction", {
                transaction: import_bs582.default.encode(transaction),
                options
              })];
            case 1:
              response = _a.sent();
              return [2, response.signature];
          }
        });
      });
    };
    WebAdapter2.prototype.signMessage = function(data, display) {
      if (display === void 0) {
        display = "hex";
      }
      return __awaiter2(this, void 0, void 0, function() {
        var signature;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._instance.sign(data, display)];
            case 1:
              signature = _a.sent().signature;
              return [2, Uint8Array.from(signature)];
          }
        });
      });
    };
    return WebAdapter2;
  }(base_default)
);
var web_default = WebAdapter;

// node_modules/@solflare-wallet/sdk/lib/esm/adapters/iframe.js
init_index_browser_esm();

// node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

// node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/parse.js
function parse(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  let v;
  const arr = new Uint8Array(16);
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 255;
  arr[2] = v >>> 8 & 255;
  arr[3] = v & 255;
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 255;
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 255;
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 255;
  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
  arr[11] = v / 4294967296 & 255;
  arr[12] = v >>> 24 & 255;
  arr[13] = v >>> 16 & 255;
  arr[14] = v >>> 8 & 255;
  arr[15] = v & 255;
  return arr;
}
var parse_default = parse;

// node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = [];
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === "string") {
      value = stringToBytes(value);
    }
    if (typeof namespace === "string") {
      namespace = parse_default(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 15 | version;
    bytes[8] = bytes[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return unsafeStringify(bytes);
  }
  try {
    generateUUID.name = name;
  } catch (err) {
  }
  generateUUID.DNS = DNS;
  generateUUID.URL = URL2;
  return generateUUID;
}

// node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/md5.js
function md5(bytes) {
  if (typeof bytes === "string") {
    const msg = unescape(encodeURIComponent(bytes));
    bytes = new Uint8Array(msg.length);
    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = "0123456789abcdef";
  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 255;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
    output.push(hex);
  }
  return output;
}
function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
function wordsToMd5(x, len) {
  x[len >> 5] |= 128 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;
  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}
function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));
  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 255) << i % 32;
  }
  return output;
}
function safeAdd(x, y) {
  const lsw = (x & 65535) + (y & 65535);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
var md5_default = md5;

// node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v3.js
var v3 = v35("v3", 48, md5_default);

// node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = {
  randomUUID
};

// node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/sha1.js
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
}
function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}
function sha1(bytes) {
  const K = [1518500249, 1859775393, 2400959708, 3395469782];
  const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof bytes === "string") {
    const msg = unescape(encodeURIComponent(bytes));
    bytes = [];
    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(128);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);
  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);
    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }
    M[i] = arr;
  }
  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);
    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }
    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }
    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];
    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }
  return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
}
var sha1_default = sha1;

// node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v5.js
var v5 = v35("v5", 80, sha1_default);

// node_modules/@solflare-wallet/sdk/lib/esm/adapters/iframe.js
var import_bs583 = __toESM(require_bs58());
var __extends4 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var __awaiter3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator3 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var IframeAdapter = (
  /** @class */
  function(_super) {
    __extends4(IframeAdapter2, _super);
    function IframeAdapter2(iframe, publicKey) {
      var _this = this;
      var _a;
      _this = _super.call(this) || this;
      _this._publicKey = null;
      _this._messageHandlers = {};
      _this.handleMessage = function(data) {
        if (_this._messageHandlers[data.id]) {
          var _a2 = _this._messageHandlers[data.id], resolve = _a2.resolve, reject = _a2.reject;
          delete _this._messageHandlers[data.id];
          if (data.error) {
            reject(data.error);
          } else {
            resolve(data.result);
          }
        }
      };
      _this._sendMessage = function(data) {
        if (!_this.connected) {
          throw new Error("Wallet not connected");
        }
        return new Promise(function(resolve, reject) {
          var _a2, _b;
          var messageId = v4_default();
          _this._messageHandlers[messageId] = { resolve, reject };
          (_b = (_a2 = _this._iframe) === null || _a2 === void 0 ? void 0 : _a2.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
            channel: "solflareWalletAdapterToIframe",
            data: __assign2({ id: messageId }, data)
          }, "*");
        });
      };
      _this._iframe = iframe;
      _this._publicKey = new PublicKey((_a = publicKey === null || publicKey === void 0 ? void 0 : publicKey.toString) === null || _a === void 0 ? void 0 : _a.call(publicKey));
      return _this;
    }
    Object.defineProperty(IframeAdapter2.prototype, "publicKey", {
      get: function() {
        return this._publicKey || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(IframeAdapter2.prototype, "connected", {
      get: function() {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    IframeAdapter2.prototype.connect = function() {
      return __awaiter3(this, void 0, void 0, function() {
        return __generator3(this, function(_a) {
          return [
            2
            /*return*/
          ];
        });
      });
    };
    IframeAdapter2.prototype.disconnect = function() {
      return __awaiter3(this, void 0, void 0, function() {
        return __generator3(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this._sendMessage({
                method: "disconnect"
              })];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    IframeAdapter2.prototype.signTransaction = function(message) {
      var _a;
      return __awaiter3(this, void 0, void 0, function() {
        var signature, e_1;
        return __generator3(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, this._sendMessage({
                method: "signTransaction",
                params: {
                  message: import_bs583.default.encode(message)
                }
              })];
            case 2:
              signature = _b.sent().signature;
              return [2, import_bs583.default.decode(signature)];
            case 3:
              e_1 = _b.sent();
              throw new Error(((_a = e_1 === null || e_1 === void 0 ? void 0 : e_1.toString) === null || _a === void 0 ? void 0 : _a.call(e_1)) || "Failed to sign transaction");
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    IframeAdapter2.prototype.signAllTransactions = function(messages) {
      var _a;
      return __awaiter3(this, void 0, void 0, function() {
        var signatures, e_2;
        return __generator3(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, this._sendMessage({
                method: "signAllTransactions",
                params: {
                  messages: messages.map(function(message) {
                    return import_bs583.default.encode(message);
                  })
                }
              })];
            case 2:
              signatures = _b.sent().signatures;
              return [2, signatures.map(function(signature) {
                return import_bs583.default.decode(signature);
              })];
            case 3:
              e_2 = _b.sent();
              throw new Error(((_a = e_2 === null || e_2 === void 0 ? void 0 : e_2.toString) === null || _a === void 0 ? void 0 : _a.call(e_2)) || "Failed to sign transactions");
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    IframeAdapter2.prototype.signAndSendTransaction = function(transaction, options) {
      var _a;
      return __awaiter3(this, void 0, void 0, function() {
        var result, e_3;
        return __generator3(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, this._sendMessage({
                method: "signAndSendTransaction",
                params: {
                  transaction: import_bs583.default.encode(transaction),
                  options
                }
              })];
            case 2:
              result = _b.sent();
              return [2, result];
            case 3:
              e_3 = _b.sent();
              throw new Error(((_a = e_3 === null || e_3 === void 0 ? void 0 : e_3.toString) === null || _a === void 0 ? void 0 : _a.call(e_3)) || "Failed to sign and send transaction");
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    IframeAdapter2.prototype.signMessage = function(data, display) {
      var _a;
      if (display === void 0) {
        display = "hex";
      }
      return __awaiter3(this, void 0, void 0, function() {
        var result, e_4;
        return __generator3(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, this._sendMessage({
                method: "signMessage",
                params: {
                  data,
                  display
                }
              })];
            case 2:
              result = _b.sent();
              return [2, Uint8Array.from(import_bs583.default.decode(result))];
            case 3:
              e_4 = _b.sent();
              throw new Error(((_a = e_4 === null || e_4 === void 0 ? void 0 : e_4.toString) === null || _a === void 0 ? void 0 : _a.call(e_4)) || "Failed to sign message");
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    return IframeAdapter2;
  }(base_default)
);
var iframe_default = IframeAdapter;

// node_modules/@solflare-wallet/sdk/lib/esm/utils.js
function isLegacyTransactionInstance(transaction) {
  return transaction.version === void 0;
}

// node_modules/@solflare-wallet/sdk/lib/esm/index.js
var __extends5 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __awaiter4 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator4 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __values = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Solflare = (
  /** @class */
  function(_super) {
    __extends5(Solflare2, _super);
    function Solflare2(config) {
      var _this = _super.call(this) || this;
      _this._network = "mainnet-beta";
      _this._provider = null;
      _this._adapterInstance = null;
      _this._element = null;
      _this._iframe = null;
      _this._connectHandler = null;
      _this._flutterHandlerInterval = null;
      _this._handleEvent = function(event) {
        var _a, _b, _c, _d;
        switch (event.type) {
          case "connect_native_web": {
            _this._collapseIframe();
            _this._adapterInstance = new web_default(_this._iframe, _this._network, ((_a = event.data) === null || _a === void 0 ? void 0 : _a.provider) || _this._provider || "https://solflare.com/provider");
            _this._adapterInstance.on("connect", _this._webConnected);
            _this._adapterInstance.on("disconnect", _this._webDisconnected);
            _this._adapterInstance.connect();
            _this._setPreferredAdapter("native_web");
            return;
          }
          case "connect": {
            _this._collapseIframe();
            _this._adapterInstance = new iframe_default(_this._iframe, ((_b = event.data) === null || _b === void 0 ? void 0 : _b.publicKey) || "");
            _this._adapterInstance.connect();
            _this._setPreferredAdapter((_c = event.data) === null || _c === void 0 ? void 0 : _c.adapter);
            if (_this._connectHandler) {
              _this._connectHandler.resolve();
              _this._connectHandler = null;
            }
            _this.emit("connect", _this.publicKey);
            return;
          }
          case "disconnect": {
            if (_this._connectHandler) {
              _this._connectHandler.reject();
              _this._connectHandler = null;
            }
            _this._disconnected();
            _this.emit("disconnect");
            return;
          }
          case "accountChanged": {
            if ((_d = event.data) === null || _d === void 0 ? void 0 : _d.publicKey) {
              _this._adapterInstance = new iframe_default(_this._iframe, event.data.publicKey);
              _this._adapterInstance.connect();
              _this.emit("accountChanged", _this.publicKey);
            } else {
              _this.emit("accountChanged", void 0);
            }
            return;
          }
          case "collapse": {
            _this._collapseIframe();
            return;
          }
          default: {
            return;
          }
        }
      };
      _this._handleResize = function(data) {
        if (data.resizeMode === "full") {
          if (data.params.mode === "fullscreen") {
            _this._expandIframe();
          } else if (data.params.mode === "hide") {
            _this._collapseIframe();
          }
        } else if (data.resizeMode === "coordinates") {
          if (_this._iframe) {
            _this._iframe.style.top = isFinite(data.params.top) ? "".concat(data.params.top, "px") : "";
            _this._iframe.style.bottom = isFinite(data.params.bottom) ? "".concat(data.params.bottom, "px") : "";
            _this._iframe.style.left = isFinite(data.params.left) ? "".concat(data.params.left, "px") : "";
            _this._iframe.style.right = isFinite(data.params.right) ? "".concat(data.params.right, "px") : "";
            _this._iframe.style.width = isFinite(data.params.width) ? "".concat(data.params.width, "px") : data.params.width;
            _this._iframe.style.height = isFinite(data.params.height) ? "".concat(data.params.height, "px") : data.params.height;
          }
        }
      };
      _this._handleMessage = function(event) {
        var _a;
        if (((_a = event.data) === null || _a === void 0 ? void 0 : _a.channel) !== "solflareIframeToWalletAdapter") {
          return;
        }
        var data = event.data.data || {};
        if (data.type === "event") {
          _this._handleEvent(data.event);
        } else if (data.type === "resize") {
          _this._handleResize(data);
        } else if (data.type === "response") {
          if (_this._adapterInstance) {
            _this._adapterInstance.handleMessage(data);
          }
        }
      };
      _this._removeElement = function() {
        if (_this._flutterHandlerInterval !== null) {
          clearInterval(_this._flutterHandlerInterval);
          _this._flutterHandlerInterval = null;
        }
        if (_this._element) {
          _this._element.remove();
          _this._element = null;
        }
      };
      _this._removeDanglingElements = function() {
        var e_1, _a;
        var elements = document.getElementsByClassName("solflare-wallet-adapter-iframe");
        try {
          for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
            var element = elements_1_1.value;
            if (element.parentElement) {
              element.remove();
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return))
              _a.call(elements_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      };
      _this._injectElement = function() {
        _this._removeElement();
        _this._removeDanglingElements();
        var iframeUrl = "".concat(Solflare2.IFRAME_URL, "?cluster=").concat(encodeURIComponent(_this._network), "&origin=").concat(encodeURIComponent(window.location.origin), "&version=1");
        var preferredAdapter = _this._getPreferredAdapter();
        if (preferredAdapter) {
          iframeUrl += "&adapter=".concat(encodeURIComponent(preferredAdapter));
        }
        if (_this._provider) {
          iframeUrl += "&provider=".concat(encodeURIComponent(_this._provider));
        }
        _this._element = document.createElement("div");
        _this._element.className = "solflare-wallet-adapter-iframe";
        _this._element.innerHTML = "\n      <iframe src='".concat(iframeUrl, "' referrerPolicy='strict-origin-when-cross-origin' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    ");
        document.body.appendChild(_this._element);
        _this._iframe = _this._element.querySelector("iframe");
        window.fromFlutter = _this._handleMobileMessage;
        _this._flutterHandlerInterval = setInterval(function() {
          window.fromFlutter = _this._handleMobileMessage;
        }, 100);
        window.addEventListener("message", _this._handleMessage, false);
      };
      _this._collapseIframe = function() {
        if (_this._iframe) {
          _this._iframe.style.top = "";
          _this._iframe.style.right = "";
          _this._iframe.style.height = "2px";
          _this._iframe.style.width = "2px";
        }
      };
      _this._expandIframe = function() {
        if (_this._iframe) {
          _this._iframe.style.top = "0px";
          _this._iframe.style.bottom = "0px";
          _this._iframe.style.left = "0px";
          _this._iframe.style.right = "0px";
          _this._iframe.style.width = "100%";
          _this._iframe.style.height = "100%";
        }
      };
      _this._getPreferredAdapter = function() {
        if (localStorage) {
          return localStorage.getItem("solflarePreferredWalletAdapter") || null;
        }
        return null;
      };
      _this._setPreferredAdapter = function(adapter) {
        if (localStorage && adapter) {
          localStorage.setItem("solflarePreferredWalletAdapter", adapter);
        }
      };
      _this._clearPreferredAdapter = function() {
        if (localStorage) {
          localStorage.removeItem("solflarePreferredWalletAdapter");
        }
      };
      _this._webConnected = function() {
        if (_this._connectHandler) {
          _this._connectHandler.resolve();
          _this._connectHandler = null;
        }
        _this.emit("connect", _this.publicKey);
      };
      _this._webDisconnected = function() {
        if (_this._connectHandler) {
          _this._connectHandler.reject();
          _this._connectHandler = null;
        }
        _this._disconnected();
        _this.emit("disconnect");
      };
      _this._disconnected = function() {
        window.removeEventListener("message", _this._handleMessage, false);
        _this._removeElement();
        _this._clearPreferredAdapter();
        _this._adapterInstance = null;
      };
      _this._handleMobileMessage = function(data) {
        var _a, _b;
        (_b = (_a = _this._iframe) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
          channel: "solflareMobileToIframe",
          data
        }, "*");
      };
      if (config === null || config === void 0 ? void 0 : config.network) {
        _this._network = config === null || config === void 0 ? void 0 : config.network;
      }
      if (config === null || config === void 0 ? void 0 : config.provider) {
        _this._provider = config === null || config === void 0 ? void 0 : config.provider;
      }
      return _this;
    }
    Object.defineProperty(Solflare2.prototype, "publicKey", {
      get: function() {
        var _a;
        return ((_a = this._adapterInstance) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Solflare2.prototype, "isConnected", {
      get: function() {
        var _a;
        return !!((_a = this._adapterInstance) === null || _a === void 0 ? void 0 : _a.connected);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Solflare2.prototype, "connected", {
      get: function() {
        return this.isConnected;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Solflare2.prototype, "autoApprove", {
      get: function() {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Solflare2.prototype.connect = function() {
      return __awaiter4(this, void 0, void 0, function() {
        var _this = this;
        return __generator4(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (this.connected) {
                return [
                  2
                  /*return*/
                ];
              }
              this._injectElement();
              return [4, new Promise(function(resolve, reject) {
                _this._connectHandler = { resolve, reject };
              })];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Solflare2.prototype.disconnect = function() {
      return __awaiter4(this, void 0, void 0, function() {
        return __generator4(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this._adapterInstance) {
                return [
                  2
                  /*return*/
                ];
              }
              return [4, this._adapterInstance.disconnect()];
            case 1:
              _a.sent();
              this._disconnected();
              this.emit("disconnect");
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Solflare2.prototype.signTransaction = function(transaction) {
      return __awaiter4(this, void 0, void 0, function() {
        var serializedMessage, signature, signerPubkeys, signerIndex;
        var _this = this;
        return __generator4(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              serializedMessage = isLegacyTransactionInstance(transaction) ? transaction.serializeMessage() : transaction.message.serialize();
              return [4, this._adapterInstance.signTransaction(serializedMessage)];
            case 1:
              signature = _a.sent();
              if (isLegacyTransactionInstance(transaction)) {
                transaction.addSignature(this.publicKey, Buffer.from(signature));
              } else {
                signerPubkeys = transaction.message.staticAccountKeys.slice(0, transaction.message.header.numRequiredSignatures);
                signerIndex = signerPubkeys.findIndex(function(pubkey) {
                  return pubkey.equals(_this.publicKey);
                });
                if (signerIndex >= 0) {
                  transaction.signatures[signerIndex] = signature;
                }
              }
              return [2, transaction];
          }
        });
      });
    };
    Solflare2.prototype.signAllTransactions = function(transactions) {
      return __awaiter4(this, void 0, void 0, function() {
        var serializedMessages, signatures, i, transaction, signerPubkeys, signerIndex;
        var _this = this;
        return __generator4(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              serializedMessages = transactions.map(function(transaction2) {
                return isLegacyTransactionInstance(transaction2) ? transaction2.serializeMessage() : transaction2.message.serialize();
              });
              return [4, this._adapterInstance.signAllTransactions(serializedMessages)];
            case 1:
              signatures = _a.sent();
              for (i = 0; i < transactions.length; i++) {
                transaction = transactions[i];
                if (isLegacyTransactionInstance(transaction)) {
                  transaction.addSignature(this.publicKey, Buffer.from(signatures[i]));
                } else {
                  signerPubkeys = transaction.message.staticAccountKeys.slice(0, transaction.message.header.numRequiredSignatures);
                  signerIndex = signerPubkeys.findIndex(function(pubkey) {
                    return pubkey.equals(_this.publicKey);
                  });
                  if (signerIndex >= 0) {
                    transaction.signatures[signerIndex] = signatures[i];
                  }
                }
              }
              return [2, transactions];
          }
        });
      });
    };
    Solflare2.prototype.signAndSendTransaction = function(transaction, options) {
      return __awaiter4(this, void 0, void 0, function() {
        var serializedTransaction;
        return __generator4(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              serializedTransaction = isLegacyTransactionInstance(transaction) ? transaction.serialize({ verifySignatures: false, requireAllSignatures: false }) : transaction.serialize();
              return [4, this._adapterInstance.signAndSendTransaction(serializedTransaction, options)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    Solflare2.prototype.signMessage = function(data, display) {
      if (display === void 0) {
        display = "utf8";
      }
      return __awaiter4(this, void 0, void 0, function() {
        return __generator4(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._adapterInstance.signMessage(data, display)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    Solflare2.prototype.sign = function(data, display) {
      if (display === void 0) {
        display = "utf8";
      }
      return __awaiter4(this, void 0, void 0, function() {
        return __generator4(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.signMessage(data, display)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    Solflare2.prototype.detectWallet = function(timeout) {
      var _a;
      if (timeout === void 0) {
        timeout = 10;
      }
      return __awaiter4(this, void 0, void 0, function() {
        return __generator4(this, function(_b) {
          if (window.SolflareApp || ((_a = window.solflare) === null || _a === void 0 ? void 0 : _a.isSolflare)) {
            return [2, true];
          }
          return [2, new Promise(function(resolve) {
            var pollInterval, pollTimeout;
            pollInterval = setInterval(function() {
              var _a2;
              if (window.SolflareApp || ((_a2 = window.solflare) === null || _a2 === void 0 ? void 0 : _a2.isSolflare)) {
                clearInterval(pollInterval);
                clearTimeout(pollTimeout);
                resolve(true);
              }
            }, 500);
            pollTimeout = setTimeout(function() {
              clearInterval(pollInterval);
              resolve(false);
            }, timeout * 1e3);
          })];
        });
      });
    };
    Solflare2.IFRAME_URL = "https://connect.solflare.com/";
    return Solflare2;
  }(eventemitter3_default)
);
var esm_default = Solflare;
export {
  esm_default as default
};
//# sourceMappingURL=esm-ZGG4PRZG.js.map
