import {
  SolanaSignAndSendTransaction,
  SolanaSignMessage,
  SolanaSignTransaction
} from "./chunk-VIV2VBE4.js";
import {
  PublicKey,
  VersionedTransaction,
  init_index_browser_esm
} from "./chunk-NXBQG7JS.js";
import "./chunk-4WGNHZQ4.js";
import {
  __commonJS,
  __toESM
} from "./chunk-W7S2ME4R.js";

// node_modules/@solflare-wallet/metamask-sdk/node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/@solflare-wallet/metamask-sdk/node_modules/eventemitter3/index.js"(exports, module) {
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

// node_modules/@solflare-wallet/metamask-sdk/node_modules/base-x/src/index.js
var require_src = __commonJS({
  "node_modules/@solflare-wallet/metamask-sdk/node_modules/base-x/src/index.js"(exports, module) {
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

// node_modules/@solflare-wallet/metamask-sdk/node_modules/bs58/index.js
var require_bs58 = __commonJS({
  "node_modules/@solflare-wallet/metamask-sdk/node_modules/bs58/index.js"(exports, module) {
    var basex = require_src();
    var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    module.exports = basex(ALPHABET);
  }
});

// node_modules/@solflare-wallet/metamask-sdk/lib/esm/index.js
init_index_browser_esm();

// node_modules/@solflare-wallet/metamask-sdk/node_modules/eventemitter3/index.mjs
var import_index = __toESM(require_eventemitter3(), 1);
var eventemitter3_default = import_index.default;

// node_modules/@solflare-wallet/metamask-sdk/lib/esm/index.js
var import_bs58 = __toESM(require_bs58());

// node_modules/@solflare-wallet/metamask-sdk/node_modules/uuid/dist/esm-browser/rng.js
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

// node_modules/@solflare-wallet/metamask-sdk/node_modules/uuid/dist/esm-browser/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/@solflare-wallet/metamask-sdk/node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/@solflare-wallet/metamask-sdk/node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

// node_modules/@solflare-wallet/metamask-sdk/node_modules/uuid/dist/esm-browser/parse.js
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

// node_modules/@solflare-wallet/metamask-sdk/node_modules/uuid/dist/esm-browser/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = [];
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
var URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
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
  generateUUID.URL = URL;
  return generateUUID;
}

// node_modules/@solflare-wallet/metamask-sdk/node_modules/uuid/dist/esm-browser/md5.js
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

// node_modules/@solflare-wallet/metamask-sdk/node_modules/uuid/dist/esm-browser/v3.js
var v3 = v35("v3", 48, md5_default);

// node_modules/@solflare-wallet/metamask-sdk/node_modules/uuid/dist/esm-browser/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = {
  randomUUID
};

// node_modules/@solflare-wallet/metamask-sdk/node_modules/uuid/dist/esm-browser/v4.js
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

// node_modules/@solflare-wallet/metamask-sdk/node_modules/uuid/dist/esm-browser/sha1.js
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

// node_modules/@solflare-wallet/metamask-sdk/node_modules/uuid/dist/esm-browser/v5.js
var v5 = v35("v5", 80, sha1_default);

// node_modules/@solflare-wallet/metamask-sdk/lib/esm/utils.js
function isLegacyTransactionInstance(transaction) {
  return transaction.version === void 0;
}
function serializeTransaction(transaction) {
  return isLegacyTransactionInstance(transaction) ? transaction.serialize({
    verifySignatures: false,
    requireAllSignatures: false
  }) : transaction.serialize();
}
function serializeTransactionMessage(transaction) {
  return isLegacyTransactionInstance(transaction) ? transaction.serializeMessage() : transaction.message.serialize();
}
function addSignature(transaction, publicKey, signature) {
  if (isLegacyTransactionInstance(transaction)) {
    transaction.addSignature(publicKey, Buffer.from(signature));
  } else {
    const signerPubkeys = transaction.message.staticAccountKeys.slice(0, transaction.message.header.numRequiredSignatures);
    const signerIndex = signerPubkeys.findIndex((pubkey) => pubkey.equals(publicKey));
    if (signerIndex >= 0) {
      transaction.signatures[signerIndex] = signature;
    }
  }
}

// node_modules/@solflare-wallet/metamask-sdk/lib/esm/detectProvider.js
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
function isSnapSupported(provider) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      yield provider.request({ method: "wallet_getSnaps" });
      return true;
    } catch (error) {
      return false;
    }
  });
}
function detectProvider() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const provider = window.ethereum;
      if (!provider) {
        return null;
      }
      if (provider.providers && Array.isArray(provider.providers)) {
        const providers = provider.providers;
        for (const provider2 of providers) {
          if (yield isSnapSupported(provider2)) {
            return provider2;
          }
        }
      }
      if (provider.detected && Array.isArray(provider.detected)) {
        const providers = provider.detected;
        for (const provider2 of providers) {
          if (yield isSnapSupported(provider2)) {
            return provider2;
          }
        }
      }
      if (yield isSnapSupported(provider)) {
        return provider;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  });
}

// node_modules/@solflare-wallet/metamask-sdk/lib/esm/standard/solana.js
var SOLANA_MAINNET_CHAIN = "solana:mainnet";
var SOLANA_DEVNET_CHAIN = "solana:devnet";
var SOLANA_TESTNET_CHAIN = "solana:testnet";
var SOLANA_LOCALNET_CHAIN = "solana:localnet";
var SOLANA_CHAINS = [
  SOLANA_MAINNET_CHAIN,
  SOLANA_DEVNET_CHAIN,
  SOLANA_TESTNET_CHAIN,
  SOLANA_LOCALNET_CHAIN
];
function isSolanaChain(chain) {
  return SOLANA_CHAINS.includes(chain);
}

// node_modules/@solflare-wallet/metamask-sdk/lib/esm/standard/account.js
var __classPrivateFieldGet = function(receiver, state, kind, f2) {
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
};
var __classPrivateFieldSet = function(receiver, state, value, kind, f2) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
};
var _StandardSolflareMetaMaskWalletAccount_address;
var _StandardSolflareMetaMaskWalletAccount_publicKey;
var _StandardSolflareMetaMaskWalletAccount_chains;
var _StandardSolflareMetaMaskWalletAccount_features;
var _StandardSolflareMetaMaskWalletAccount_label;
var _StandardSolflareMetaMaskWalletAccount_icon;
var chains = SOLANA_CHAINS;
var features = [SolanaSignAndSendTransaction, SolanaSignTransaction, SolanaSignMessage];
var StandardSolflareMetaMaskWalletAccount = class _StandardSolflareMetaMaskWalletAccount {
  get address() {
    return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_address, "f");
  }
  get publicKey() {
    return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_publicKey, "f").slice();
  }
  get chains() {
    return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_chains, "f").slice();
  }
  get features() {
    return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_features, "f").slice();
  }
  get label() {
    return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_label, "f");
  }
  get icon() {
    return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_icon, "f");
  }
  constructor({ address, publicKey, label, icon }) {
    _StandardSolflareMetaMaskWalletAccount_address.set(this, void 0);
    _StandardSolflareMetaMaskWalletAccount_publicKey.set(this, void 0);
    _StandardSolflareMetaMaskWalletAccount_chains.set(this, void 0);
    _StandardSolflareMetaMaskWalletAccount_features.set(this, void 0);
    _StandardSolflareMetaMaskWalletAccount_label.set(this, void 0);
    _StandardSolflareMetaMaskWalletAccount_icon.set(this, void 0);
    if (new.target === _StandardSolflareMetaMaskWalletAccount) {
      Object.freeze(this);
    }
    __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_address, address, "f");
    __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_publicKey, publicKey, "f");
    __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_chains, chains, "f");
    __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_features, features, "f");
    __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_label, label, "f");
    __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_icon, icon, "f");
  }
};
_StandardSolflareMetaMaskWalletAccount_address = /* @__PURE__ */ new WeakMap(), _StandardSolflareMetaMaskWalletAccount_publicKey = /* @__PURE__ */ new WeakMap(), _StandardSolflareMetaMaskWalletAccount_chains = /* @__PURE__ */ new WeakMap(), _StandardSolflareMetaMaskWalletAccount_features = /* @__PURE__ */ new WeakMap(), _StandardSolflareMetaMaskWalletAccount_label = /* @__PURE__ */ new WeakMap(), _StandardSolflareMetaMaskWalletAccount_icon = /* @__PURE__ */ new WeakMap();

// node_modules/@solflare-wallet/metamask-sdk/lib/esm/index.js
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
var SolflareMetaMask = class _SolflareMetaMask extends eventemitter3_default {
  constructor(config) {
    super();
    this._network = "mainnet-beta";
    this._iframeParams = {};
    this._element = null;
    this._iframe = null;
    this._publicKey = null;
    this._account = null;
    this._isConnected = false;
    this._connectHandler = null;
    this._messageHandlers = {};
    this._handleEvent = (event) => {
      var _a, _b;
      switch (event.type) {
        case "connect": {
          this._collapseIframe();
          if ((_a = event.data) === null || _a === void 0 ? void 0 : _a.publicKey) {
            this._publicKey = event.data.publicKey;
            this._isConnected = true;
            if (this._connectHandler) {
              this._connectHandler.resolve();
              this._connectHandler = null;
            }
            this._connected();
          } else {
            if (this._connectHandler) {
              this._connectHandler.reject();
              this._connectHandler = null;
            }
            this._disconnected();
          }
          return;
        }
        case "disconnect": {
          if (this._connectHandler) {
            this._connectHandler.reject();
            this._connectHandler = null;
          }
          this._disconnected();
          return;
        }
        case "accountChanged": {
          if ((_b = event.data) === null || _b === void 0 ? void 0 : _b.publicKey) {
            this._publicKey = event.data.publicKey;
            this.emit("accountChanged", this.publicKey);
            this._standardConnected();
          } else {
            this.emit("accountChanged", void 0);
            this._standardDisconnected();
          }
          return;
        }
        default: {
          return;
        }
      }
    };
    this._handleResize = (data) => {
      if (data.resizeMode === "full") {
        if (data.params.mode === "fullscreen") {
          this._expandIframe();
        } else if (data.params.mode === "hide") {
          this._collapseIframe();
        }
      } else if (data.resizeMode === "coordinates") {
        this._resizeIframe(data.params);
      }
    };
    this._handleMessage = (event) => {
      var _a;
      if (((_a = event.data) === null || _a === void 0 ? void 0 : _a.channel) !== "solflareIframeToWalletAdapter") {
        return;
      }
      const data = event.data.data || {};
      if (data.type === "event") {
        this._handleEvent(data.event);
      } else if (data.type === "resize") {
        this._handleResize(data);
      } else if (data.type === "response") {
        if (this._messageHandlers[data.id]) {
          const { resolve, reject } = this._messageHandlers[data.id];
          delete this._messageHandlers[data.id];
          if (data.error) {
            reject(data.error);
          } else {
            resolve(data.result);
          }
        }
      }
    };
    this._removeElement = () => {
      if (this._element) {
        this._element.remove();
        this._element = null;
      }
    };
    this._removeDanglingElements = () => {
      const elements = document.getElementsByClassName("solflare-metamask-wallet-adapter-iframe");
      for (const element of elements) {
        if (element.parentElement) {
          element.remove();
        }
      }
    };
    this._injectElement = () => {
      this._removeElement();
      this._removeDanglingElements();
      const params = Object.assign(Object.assign({}, this._iframeParams), { mm: true, v: 1, cluster: this._network || "mainnet-beta", origin: window.location.origin || "", title: document.title || "" });
      const queryString = Object.keys(params).map((key) => `${key}=${encodeURIComponent(params[key])}`).join("&");
      const iframeUrl = `${_SolflareMetaMask.IFRAME_URL}?${queryString}`;
      this._element = document.createElement("div");
      this._element.className = "solflare-metamask-wallet-adapter-iframe";
      this._element.innerHTML = `
      <iframe src='${iframeUrl}' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `;
      document.body.appendChild(this._element);
      this._iframe = this._element.querySelector("iframe");
      window.addEventListener("message", this._handleMessage, false);
    };
    this._collapseIframe = () => {
      if (this._iframe) {
        this._iframe.style.top = "";
        this._iframe.style.right = "";
        this._iframe.style.height = "2px";
        this._iframe.style.width = "2px";
      }
    };
    this._expandIframe = () => {
      if (this._iframe) {
        this._iframe.style.top = "0px";
        this._iframe.style.bottom = "0px";
        this._iframe.style.left = "0px";
        this._iframe.style.right = "0px";
        this._iframe.style.width = "100%";
        this._iframe.style.height = "100%";
      }
    };
    this._resizeIframe = (params) => {
      if (!this._iframe) {
        return;
      }
      this._iframe.style.top = isFinite(params.top) ? `${params.top}px` : "";
      this._iframe.style.bottom = isFinite(params.bottom) ? `${params.bottom}px` : "";
      this._iframe.style.left = isFinite(params.left) ? `${params.left}px` : "";
      this._iframe.style.right = isFinite(params.right) ? `${params.right}px` : "";
      this._iframe.style.width = isFinite(params.width) ? `${params.width}px` : params.width;
      this._iframe.style.height = isFinite(params.height) ? `${params.height}px` : params.height;
    };
    this._sendIframeMessage = (data) => {
      if (!this.connected || !this.publicKey) {
        throw new Error("Wallet not connected");
      }
      return new Promise((resolve, reject) => {
        var _a, _b;
        const messageId = v4_default();
        this._messageHandlers[messageId] = { resolve, reject };
        (_b = (_a = this._iframe) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
          channel: "solflareWalletAdapterToIframe",
          data: Object.assign({ id: messageId }, data)
        }, "*");
      });
    };
    this._connected = () => {
      this._isConnected = true;
      this.emit("connect", this.publicKey);
      this._standardConnected();
    };
    this._disconnected = () => {
      this._publicKey = null;
      this._isConnected = false;
      window.removeEventListener("message", this._handleMessage, false);
      this._removeElement();
      this.emit("disconnect");
      this._standardDisconnected();
    };
    this._standardConnected = () => {
      if (!this.publicKey) {
        return;
      }
      const address = this.publicKey.toString();
      if (!this._account || this._account.address !== address) {
        this._account = new StandardSolflareMetaMaskWalletAccount({
          address,
          publicKey: this.publicKey.toBytes()
        });
        this.emit("standard_change", { accounts: this.standardAccounts });
      }
    };
    this._standardDisconnected = () => {
      if (this._account) {
        this._account = null;
        this.emit("standard_change", { accounts: this.standardAccounts });
      }
    };
    if (config === null || config === void 0 ? void 0 : config.network) {
      this._network = config === null || config === void 0 ? void 0 : config.network;
    }
    if (window.SolflareMetaMaskParams) {
      this._iframeParams = Object.assign(Object.assign({}, this._iframeParams), window.SolflareMetaMaskParams);
    }
    if (config === null || config === void 0 ? void 0 : config.params) {
      this._iframeParams = Object.assign(Object.assign({}, this._iframeParams), config === null || config === void 0 ? void 0 : config.params);
    }
  }
  get publicKey() {
    return this._publicKey ? new PublicKey(this._publicKey) : null;
  }
  get standardAccount() {
    return this._account;
  }
  get standardAccounts() {
    return this._account ? [this._account] : [];
  }
  get isConnected() {
    return this._isConnected;
  }
  get connected() {
    return this.isConnected;
  }
  get autoApprove() {
    return false;
  }
  connect() {
    return __awaiter2(this, void 0, void 0, function* () {
      if (this.connected) {
        return;
      }
      this._injectElement();
      yield new Promise((resolve, reject) => {
        this._connectHandler = { resolve, reject };
      });
    });
  }
  disconnect() {
    return __awaiter2(this, void 0, void 0, function* () {
      yield this._sendIframeMessage({
        method: "disconnect"
      });
      this._disconnected();
    });
  }
  signTransaction(transaction) {
    var _a;
    return __awaiter2(this, void 0, void 0, function* () {
      if (!this.connected || !this.publicKey) {
        throw new Error("Wallet not connected");
      }
      try {
        const serializedMessage = serializeTransactionMessage(transaction);
        const { signature } = yield this._sendIframeMessage({
          method: "signTransaction",
          params: {
            message: import_bs58.default.encode(serializedMessage)
          }
        });
        addSignature(transaction, this.publicKey, import_bs58.default.decode(signature));
        return transaction;
      } catch (e) {
        throw new Error(((_a = e === null || e === void 0 ? void 0 : e.toString) === null || _a === void 0 ? void 0 : _a.call(e)) || "Failed to sign transaction");
      }
    });
  }
  signAllTransactions(transactions) {
    var _a;
    return __awaiter2(this, void 0, void 0, function* () {
      if (!this.connected || !this.publicKey) {
        throw new Error("Wallet not connected");
      }
      try {
        const serializedMessages = transactions.map((transaction) => serializeTransactionMessage(transaction));
        const { signatures } = yield this._sendIframeMessage({
          method: "signAllTransactions",
          params: {
            messages: serializedMessages.map((message) => import_bs58.default.encode(message))
          }
        });
        for (let i = 0; i < transactions.length; i++) {
          addSignature(transactions[i], this.publicKey, import_bs58.default.decode(signatures[i]));
        }
        return transactions;
      } catch (e) {
        throw new Error(((_a = e === null || e === void 0 ? void 0 : e.toString) === null || _a === void 0 ? void 0 : _a.call(e)) || "Failed to sign transactions");
      }
    });
  }
  signAndSendTransaction(transaction, options) {
    var _a;
    return __awaiter2(this, void 0, void 0, function* () {
      if (!this.connected || !this.publicKey) {
        throw new Error("Wallet not connected");
      }
      try {
        const serializedTransaction = serializeTransaction(transaction);
        const { signature } = yield this._sendIframeMessage({
          method: "signAndSendTransaction",
          params: {
            transaction: import_bs58.default.encode(serializedTransaction),
            options
          }
        });
        return signature;
      } catch (e) {
        throw new Error(((_a = e === null || e === void 0 ? void 0 : e.toString) === null || _a === void 0 ? void 0 : _a.call(e)) || "Failed to sign and send transaction");
      }
    });
  }
  signMessage(data, display = "utf8") {
    var _a;
    return __awaiter2(this, void 0, void 0, function* () {
      if (!this.connected || !this.publicKey) {
        throw new Error("Wallet not connected");
      }
      try {
        const { signature } = yield this._sendIframeMessage({
          method: "signMessage",
          params: {
            data: import_bs58.default.encode(data),
            display
          }
        });
        return Uint8Array.from(import_bs58.default.decode(signature));
      } catch (e) {
        throw new Error(((_a = e === null || e === void 0 ? void 0 : e.toString) === null || _a === void 0 ? void 0 : _a.call(e)) || "Failed to sign message");
      }
    });
  }
  sign(data, display = "utf8") {
    return __awaiter2(this, void 0, void 0, function* () {
      return yield this.signMessage(data, display);
    });
  }
  static isSupported() {
    return __awaiter2(this, void 0, void 0, function* () {
      const provider = yield detectProvider();
      return !!provider;
    });
  }
  standardSignAndSendTransaction(...inputs) {
    return __awaiter2(this, void 0, void 0, function* () {
      if (!this.connected)
        throw new Error("not connected");
      const outputs = [];
      if (inputs.length === 1) {
        const { transaction, account, chain, options } = inputs[0];
        const { minContextSlot, preflightCommitment, skipPreflight, maxRetries } = options || {};
        if (account !== this._account)
          throw new Error("invalid account");
        if (!isSolanaChain(chain))
          throw new Error("invalid chain");
        const signature = yield this.signAndSendTransaction(VersionedTransaction.deserialize(transaction), {
          preflightCommitment,
          minContextSlot,
          maxRetries,
          skipPreflight
        });
        outputs.push({ signature: import_bs58.default.decode(signature) });
      } else if (inputs.length > 1) {
        for (const input of inputs) {
          outputs.push(...yield this.standardSignAndSendTransaction(input));
        }
      }
      return outputs;
    });
  }
  standardSignTransaction(...inputs) {
    return __awaiter2(this, void 0, void 0, function* () {
      if (!this.connected)
        throw new Error("not connected");
      const outputs = [];
      if (inputs.length === 1) {
        const { transaction, account, chain } = inputs[0];
        if (account !== this._account)
          throw new Error("invalid account");
        if (chain && !isSolanaChain(chain))
          throw new Error("invalid chain");
        const signedTransaction = yield this.signTransaction(VersionedTransaction.deserialize(transaction));
        outputs.push({ signedTransaction: signedTransaction.serialize() });
      } else if (inputs.length > 1) {
        let chain;
        for (const input of inputs) {
          if (input.account !== this._account)
            throw new Error("invalid account");
          if (input.chain) {
            if (!isSolanaChain(input.chain))
              throw new Error("invalid chain");
            if (chain) {
              if (input.chain !== chain)
                throw new Error("conflicting chain");
            } else {
              chain = input.chain;
            }
          }
        }
        const transactions = inputs.map(({ transaction }) => VersionedTransaction.deserialize(transaction));
        const signedTransactions = yield this.signAllTransactions(transactions);
        outputs.push(...signedTransactions.map((signedTransaction) => ({
          signedTransaction: signedTransaction.serialize()
        })));
      }
      return outputs;
    });
  }
  standardSignMessage(...inputs) {
    return __awaiter2(this, void 0, void 0, function* () {
      if (!this.connected)
        throw new Error("not connected");
      const outputs = [];
      if (inputs.length === 1) {
        const { message, account } = inputs[0];
        if (account !== this._account)
          throw new Error("invalid account");
        const signature = yield this.signMessage(message);
        outputs.push({ signedMessage: message, signature });
      } else if (inputs.length > 1) {
        for (const input of inputs) {
          outputs.push(...yield this.standardSignMessage(input));
        }
      }
      return outputs;
    });
  }
};
SolflareMetaMask.IFRAME_URL = "https://widget.solflare.com/";
var esm_default = SolflareMetaMask;
export {
  StandardSolflareMetaMaskWalletAccount,
  esm_default as default
};
//# sourceMappingURL=esm-VRVF2GQ3.js.map
