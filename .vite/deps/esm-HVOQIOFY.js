import {
  PublicKey,
  init_index_browser_esm,
  require_bs58
} from "./chunk-NXBQG7JS.js";
import {
  require_eventemitter3
} from "./chunk-4WGNHZQ4.js";
import {
  __toESM
} from "./chunk-W7S2ME4R.js";

// node_modules/salmon-adapter-sdk/lib/esm/index.js
var import_eventemitter33 = __toESM(require_eventemitter3());

// node_modules/salmon-adapter-sdk/lib/esm/adapters/base.js
var import_eventemitter3 = __toESM(require_eventemitter3());
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
  }(import_eventemitter3.default)
);
var base_default = WalletAdapter;

// node_modules/@project-serum/sol-wallet-adapter/dist/esm/index.js
var import_eventemitter32 = __toESM(require_eventemitter3());
init_index_browser_esm();
var import_bs58 = __toESM(require_bs58());
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
var Wallet = class extends import_eventemitter32.default {
  constructor(provider, _network) {
    super();
    this._network = _network;
    this._publicKey = null;
    this._popup = null;
    this._handlerAdded = false;
    this._nextRequestId = 1;
    this._autoApprove = false;
    this._responsePromises = /* @__PURE__ */ new Map();
    this.handleMessage = (e) => {
      var _a;
      if (this._injectedProvider && e.source === window || e.origin === ((_a = this._providerUrl) === null || _a === void 0 ? void 0 : _a.origin) && e.source === this._popup) {
        if (e.data.method === "connected") {
          const newPublicKey = new PublicKey(e.data.params.publicKey);
          if (!this._publicKey || !this._publicKey.equals(newPublicKey)) {
            if (this._publicKey && !this._publicKey.equals(newPublicKey)) {
              this.handleDisconnect();
            }
            this._publicKey = newPublicKey;
            this._autoApprove = !!e.data.params.autoApprove;
            this.emit("connect", this._publicKey);
          }
        } else if (e.data.method === "disconnected") {
          this.handleDisconnect();
        } else if (e.data.result || e.data.error) {
          const promises = this._responsePromises.get(e.data.id);
          if (promises) {
            const [resolve, reject] = promises;
            if (e.data.result) {
              resolve(e.data.result);
            } else {
              reject(new Error(e.data.error));
            }
          }
        }
      }
    };
    this._beforeUnload = () => {
      void this.disconnect();
    };
    if (isInjectedProvider(provider)) {
      this._injectedProvider = provider;
    } else if (isString(provider)) {
      this._providerUrl = new URL(provider);
      this._providerUrl.hash = new URLSearchParams({
        origin: window.location.origin,
        network: this._network
      }).toString();
    } else {
      throw new Error("provider parameter must be an injected provider or a URL string.");
    }
  }
  handleConnect() {
    var _a;
    if (!this._handlerAdded) {
      this._handlerAdded = true;
      window.addEventListener("message", this.handleMessage);
      window.addEventListener("beforeunload", this._beforeUnload);
    }
    if (this._injectedProvider) {
      return new Promise((resolve) => {
        void this.sendRequest("connect", {});
        resolve();
      });
    } else {
      window.name = "parent";
      this._popup = window.open((_a = this._providerUrl) === null || _a === void 0 ? void 0 : _a.toString(), "_blank", "location,resizable,width=460,height=675");
      return new Promise((resolve) => {
        this.once("connect", resolve);
      });
    }
  }
  handleDisconnect() {
    if (this._handlerAdded) {
      this._handlerAdded = false;
      window.removeEventListener("message", this.handleMessage);
      window.removeEventListener("beforeunload", this._beforeUnload);
    }
    if (this._publicKey) {
      this._publicKey = null;
      this.emit("disconnect");
    }
    this._responsePromises.forEach(([, reject], id) => {
      this._responsePromises.delete(id);
      reject(new Error("Wallet disconnected"));
    });
  }
  sendRequest(method, params) {
    return __awaiter(this, void 0, void 0, function* () {
      if (method !== "connect" && !this.connected) {
        throw new Error("Wallet not connected");
      }
      const requestId = this._nextRequestId;
      ++this._nextRequestId;
      return new Promise((resolve, reject) => {
        var _a, _b, _c, _d;
        this._responsePromises.set(requestId, [resolve, reject]);
        if (this._injectedProvider) {
          this._injectedProvider.postMessage({
            jsonrpc: "2.0",
            id: requestId,
            method,
            params: Object.assign({ network: this._network }, params)
          });
        } else {
          (_a = this._popup) === null || _a === void 0 ? void 0 : _a.postMessage({
            jsonrpc: "2.0",
            id: requestId,
            method,
            params
          }, (_c = (_b = this._providerUrl) === null || _b === void 0 ? void 0 : _b.origin) !== null && _c !== void 0 ? _c : "");
          if (!this.autoApprove) {
            (_d = this._popup) === null || _d === void 0 ? void 0 : _d.focus();
          }
        }
      });
    });
  }
  get publicKey() {
    return this._publicKey;
  }
  get connected() {
    return this._publicKey !== null;
  }
  get autoApprove() {
    return this._autoApprove;
  }
  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._popup) {
        this._popup.close();
      }
      yield this.handleConnect();
    });
  }
  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._injectedProvider) {
        yield this.sendRequest("disconnect", {});
      }
      if (this._popup) {
        this._popup.close();
      }
      this.handleDisconnect();
    });
  }
  sign(data, display) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!(data instanceof Uint8Array)) {
        throw new Error("Data must be an instance of Uint8Array");
      }
      const response = yield this.sendRequest("sign", {
        data,
        display
      });
      const signature = import_bs58.default.decode(response.signature);
      const publicKey = new PublicKey(response.publicKey);
      return {
        signature,
        publicKey
      };
    });
  }
  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.sendRequest("signTransaction", {
        message: import_bs58.default.encode(transaction.serializeMessage())
      });
      const signature = import_bs58.default.decode(response.signature);
      const publicKey = new PublicKey(response.publicKey);
      transaction.addSignature(publicKey, signature);
      return transaction;
    });
  }
  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.sendRequest("signAllTransactions", {
        messages: transactions.map((tx) => import_bs58.default.encode(tx.serializeMessage()))
      });
      const signatures = response.signatures.map((s) => import_bs58.default.decode(s));
      const publicKey = new PublicKey(response.publicKey);
      transactions = transactions.map((tx, idx) => {
        tx.addSignature(publicKey, signatures[idx]);
        return tx;
      });
      return transactions;
    });
  }
  diffieHellman(publicKey) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!(publicKey instanceof Uint8Array)) {
        throw new Error("Data must be an instance of Uint8Array");
      }
      const response = yield this.sendRequest("diffieHellman", {
        publicKey
      });
      return response;
    });
  }
};
function isString(a) {
  return typeof a === "string";
}
function isInjectedProvider(a) {
  return isObject(a) && "postMessage" in a && typeof a.postMessage === "function";
}
function isObject(a) {
  return typeof a === "object" && a !== null;
}

// node_modules/salmon-adapter-sdk/lib/esm/adapters/web.js
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
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
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
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var WebAdapter = (
  /** @class */
  function(_super) {
    __extends2(WebAdapter2, _super);
    function WebAdapter2(provider, network) {
      var _this = _super.call(this) || this;
      _this._instance = null;
      _this._handleConnect = function() {
        _this.emit("connect");
      };
      _this._handleDisconnect = function() {
        window.clearInterval(_this._pollTimer);
        _this.emit("disconnect");
      };
      _this._provider = provider;
      _this._network = network;
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
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this._instance = new Wallet(this._provider, this._network);
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
        return __generator(this, function(_a) {
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
    WebAdapter2.prototype.signTransaction = function(transaction) {
      return __awaiter2(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._instance.signTransaction(transaction)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    WebAdapter2.prototype.signAllTransactions = function(transactions) {
      return __awaiter2(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._instance.signAllTransactions(transactions)];
            case 1:
              return [2, _a.sent()];
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
        return __generator(this, function(_a) {
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

// node_modules/salmon-adapter-sdk/lib/esm/adapters/extension.js
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
var __generator2 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
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
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var ExtensionAdapter = (
  /** @class */
  function(_super) {
    __extends3(ExtensionAdapter2, _super);
    function ExtensionAdapter2(provider, network) {
      var _this = _super.call(this) || this;
      _this._provider = provider;
      _this._network = network;
      return _this;
    }
    Object.defineProperty(ExtensionAdapter2.prototype, "publicKey", {
      get: function() {
        return this._provider.publicKey;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ExtensionAdapter2.prototype, "connected", {
      get: function() {
        return this._provider.isConnected;
      },
      enumerable: false,
      configurable: true
    });
    ExtensionAdapter2.prototype.connect = function() {
      return __awaiter3(this, void 0, void 0, function() {
        var e_1;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              if (this.connected) {
                throw new Error("Wallet already connected");
              }
              return [4, this._provider.connect()];
            case 1:
              _a.sent();
              this.emit("connect");
              return [3, 3];
            case 2:
              e_1 = _a.sent();
              this.emit("disconnect");
              throw e_1;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    ExtensionAdapter2.prototype.disconnect = function() {
      return __awaiter3(this, void 0, void 0, function() {
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._provider.disconnect()];
            case 1:
              _a.sent();
              this.emit("disconnect");
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    ExtensionAdapter2.prototype.signTransaction = function(transaction) {
      return __awaiter3(this, void 0, void 0, function() {
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._provider.signTransaction(transaction, this._network)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    ExtensionAdapter2.prototype.signAllTransactions = function(transactions) {
      return __awaiter3(this, void 0, void 0, function() {
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._provider.signAllTransactions(transactions, this._network)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    ExtensionAdapter2.prototype.signMessage = function(data) {
      return __awaiter3(this, void 0, void 0, function() {
        var signature;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              if (!(data instanceof Uint8Array)) {
                throw new Error("Data must be an instance of Uint8Array");
              }
              return [4, this._provider.signMessage(data)];
            case 1:
              signature = _a.sent().signature;
              return [2, signature];
          }
        });
      });
    };
    return ExtensionAdapter2;
  }(base_default)
);
var extension_default = ExtensionAdapter;

// node_modules/salmon-adapter-sdk/lib/esm/index.js
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
var __generator3 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
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
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var Salmon = (
  /** @class */
  function(_super) {
    __extends4(Salmon2, _super);
    function Salmon2(config) {
      var _this = _super.call(this) || this;
      _this._network = "mainnet-beta";
      _this._adapterInstance = null;
      _this._connectHandler = null;
      _this._connected = function() {
        if (_this._connectHandler) {
          _this._connectHandler.resolve();
          _this._connectHandler = null;
        }
        _this.emit("connect", _this.publicKey);
      };
      _this._disconnected = function() {
        if (_this._connectHandler) {
          _this._connectHandler.reject();
          _this._connectHandler = null;
        }
        _this._adapterInstance = null;
        _this.emit("disconnect");
      };
      if (config === null || config === void 0 ? void 0 : config.network) {
        _this._network = config === null || config === void 0 ? void 0 : config.network;
      }
      if (config === null || config === void 0 ? void 0 : config.provider) {
        _this._provider = config === null || config === void 0 ? void 0 : config.provider;
      } else if (window.salmon) {
        _this._provider = window.salmon;
      } else {
        _this._provider = "https://app.salmonwallet.io";
      }
      return _this;
    }
    Object.defineProperty(Salmon2.prototype, "publicKey", {
      get: function() {
        var _a;
        return ((_a = this._adapterInstance) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Salmon2.prototype, "isConnected", {
      get: function() {
        var _a;
        return !!((_a = this._adapterInstance) === null || _a === void 0 ? void 0 : _a.connected);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Salmon2.prototype, "connected", {
      get: function() {
        return this.isConnected;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Salmon2.prototype, "autoApprove", {
      get: function() {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Salmon2.prototype.connect = function() {
      return __awaiter4(this, void 0, void 0, function() {
        var _this = this;
        return __generator3(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (this.connected) {
                return [
                  2
                  /*return*/
                ];
              }
              if (typeof this._provider === "string") {
                this._adapterInstance = new web_default(this._provider, this._network);
              } else {
                this._adapterInstance = new extension_default(this._provider, this._network);
              }
              this._adapterInstance.on("connect", this._connected);
              this._adapterInstance.on("disconnect", this._disconnected);
              this._adapterInstance.connect();
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
    Salmon2.prototype.disconnect = function() {
      return __awaiter4(this, void 0, void 0, function() {
        return __generator3(this, function(_a) {
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
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Salmon2.prototype.signTransaction = function(transaction) {
      return __awaiter4(this, void 0, void 0, function() {
        return __generator3(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._adapterInstance.signTransaction(transaction)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    Salmon2.prototype.signAllTransactions = function(transactions) {
      return __awaiter4(this, void 0, void 0, function() {
        return __generator3(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.connected) {
                throw new Error("Wallet not connected");
              }
              return [4, this._adapterInstance.signAllTransactions(transactions)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    Salmon2.prototype.signMessage = function(data, display) {
      if (display === void 0) {
        display = "utf8";
      }
      return __awaiter4(this, void 0, void 0, function() {
        return __generator3(this, function(_a) {
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
    Salmon2.prototype.sign = function(data, display) {
      if (display === void 0) {
        display = "utf8";
      }
      return __awaiter4(this, void 0, void 0, function() {
        return __generator3(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.signMessage(data, display)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    return Salmon2;
  }(import_eventemitter33.default)
);
var esm_default = Salmon;
export {
  esm_default as default
};
//# sourceMappingURL=esm-HVOQIOFY.js.map
