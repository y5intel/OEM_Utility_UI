import {
  require_react
} from "./chunk-DZRJWR3Y.js";
import {
  WalletConnectionError,
  WalletError,
  WalletNotConnectedError,
  WalletPublicKeyError,
  WalletSignMessageError,
  WalletSignTransactionError
} from "./chunk-XZ4VYCR7.js";
import "./chunk-VIV2VBE4.js";
import {
  PublicKey,
  Transaction,
  init_index_browser_esm
} from "./chunk-NXBQG7JS.js";
import "./chunk-4WGNHZQ4.js";
import {
  __commonJS,
  __toESM
} from "./chunk-W7S2ME4R.js";

// node_modules/@fractalwagmi/solana-wallet-adapter/node_modules/base-x/src/index.js
var require_src = __commonJS({
  "node_modules/@fractalwagmi/solana-wallet-adapter/node_modules/base-x/src/index.js"(exports, module) {
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

// node_modules/@fractalwagmi/solana-wallet-adapter/node_modules/bs58/index.js
var require_bs58 = __commonJS({
  "node_modules/@fractalwagmi/solana-wallet-adapter/node_modules/bs58/index.js"(exports, module) {
    var basex = require_src();
    var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    module.exports = basex(ALPHABET);
  }
});

// node_modules/@fractalwagmi/popup-connection/dist/esm/core/types.js
var PopupEvent;
(function(PopupEvent2) {
  PopupEvent2["PROJECT_APPROVED"] = "PROJECT_APPROVED";
  PopupEvent2["HANDSHAKE"] = "HANDSHAKE";
  PopupEvent2["HANDSHAKE_ACK"] = "HANDSHAKE_ACK";
  PopupEvent2["SIGNED_TRANSACTION"] = "SIGNED_TRANSACTION";
  PopupEvent2["SIGNED_PARTIAL_TRANSACTION"] = "SIGNED_PARTIAL_TRANSACTION";
  PopupEvent2["FAILED_TO_SIGN_TRANSACTION"] = "FAILED_TO_SIGN_TRANSACTION";
  PopupEvent2["TRANSACTION_DENIED"] = "TRANSACTION_DENIED";
  PopupEvent2["SOLANA_WALLET_ADAPTER_APPROVED"] = "SOLANA_WALLET_ADAPTER_APPROVED";
  PopupEvent2["SOLANA_WALLET_ADAPTER_DENIED"] = "SOLANA_WALLET_ADAPTER_DENIED";
  PopupEvent2["POPUP_CLOSED"] = "POPUP_CLOSED";
  PopupEvent2["TRANSACTION_SIGNATURE_NEEDED"] = "TRANSACTION_SIGNATURE_NEEDED";
  PopupEvent2["TRANSACTION_SIGNATURE_NEEDED_RESPONSE"] = "TRANSACTION_SIGNATURE_NEEDED_RESPONSE";
  PopupEvent2["AUTH_LOADED"] = "AUTH_LOADED";
  PopupEvent2["MESSAGE_SIGNATURE_NEEDED"] = "MESSAGE_SIGNATURE_NEEDED";
  PopupEvent2["MESSAGE_SIGNATURE_NEEDED_RESPONSE"] = "MESSAGE_SIGNATURE_NEEDED_RESPONSE";
  PopupEvent2["ONRAMP_FULFILLMENT_COMPLETE"] = "ONRAMP_FULFILLMENT_COMPLETE";
  PopupEvent2["ONRAMP_REJECTED"] = "ONRAMP_REJECTED";
})(PopupEvent || (PopupEvent = {}));
var Platform;
(function(Platform2) {
  Platform2["UNKNOWN"] = "UNKNOWN";
  Platform2["REACT_SDK"] = "REACT_SDK";
  Platform2["SOLANA_WALLET_ADAPTER"] = "SOLANA_WALLET_ADAPTER";
})(Platform || (Platform = {}));

// node_modules/@fractalwagmi/popup-connection/dist/esm/core/connection.js
var Connection = class {
  constructor(validatedOrigin, targetWindow) {
    this.validatedOrigin = validatedOrigin;
    this.targetWindow = targetWindow;
    this.handlers = /* @__PURE__ */ new Map();
  }
  off(event, callback) {
    const eventCallbacks = this.handlers.get(event);
    eventCallbacks === null || eventCallbacks === void 0 ? void 0 : eventCallbacks.delete(callback);
  }
  on(event, callback) {
    var _a;
    const eventCallbacks = (_a = this.handlers.get(event)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
    eventCallbacks.add(callback);
    this.handlers.set(event, eventCallbacks);
  }
  send({ event, payload }) {
    this.targetWindow.postMessage({
      event,
      payload
    }, this.validatedOrigin);
  }
  runHandlersForEvent(event, payload) {
    const eventCallbacks = this.handlers.get(event);
    if (!eventCallbacks) {
      return;
    }
    for (const callback of eventCallbacks) {
      callback(payload);
    }
  }
  resetHandlers() {
    this.handlers.clear();
  }
  export() {
    return {
      off: this.off.bind(this),
      on: this.on.bind(this),
      send: this.send.bind(this),
      validatedOrigin: this.validatedOrigin
    };
  }
};

// node_modules/@fractalwagmi/popup-connection/dist/esm/core/constants.js
var FRACTAL_DOMAIN_HTTPS = "https://fractal.is";
var FRACTAL_DOMAIN_HTTPS_WWW = "https://www.fractal.is";
var DEFAULT_POPUP_WIDTH_PX = 400;
var DEFAULT_POPUP_HEIGHT_PX = 600;

// node_modules/@fractalwagmi/popup-connection/dist/esm/core/utils.js
function validateOrigin(origin) {
  return origin === FRACTAL_DOMAIN_HTTPS_WWW || origin === FRACTAL_DOMAIN_HTTPS;
}
var TARGET = "fractal:approval:popup";
var STATIC_POPUP_FEATURES = ["resizable", "scrollbars=1", "status=1"];
function openPopup({ left = 0, scope = window, top = 0, width = DEFAULT_POPUP_HEIGHT_PX, height = DEFAULT_POPUP_HEIGHT_PX, url }) {
  return scope.open(url, TARGET, getPopupFeatures({ height, left, top, width }));
}
function getPopupFeatures({ height, left, top, width }) {
  return [
    "popup",
    `left=${left}`,
    `top=${top}`,
    `width=${width}`,
    `height=${height}`,
    ...STATIC_POPUP_FEATURES
  ].join(",");
}

// node_modules/@fractalwagmi/popup-connection/dist/esm/connection-manager.js
var ConnectionManager = class {
  constructor(platform) {
    this.platform = platform;
    this.connection = null;
    this.popupWindow = null;
    this.handleMessage = (e) => {
      var _a, _b;
      if (!validateOrigin(e.origin)) {
        return;
      }
      const validatedOrigin = e.origin;
      if (!this.popupWindow) {
        return;
      }
      if (e.data.event === PopupEvent.HANDSHAKE && !this.connection) {
        if (!this.verifyAndResetNonce((_a = e.data.payload) === null || _a === void 0 ? void 0 : _a.nonce)) {
          return;
        }
        this.popupWindow.postMessage({
          event: PopupEvent.HANDSHAKE_ACK,
          payload: {
            platform: this.platform
          }
        }, validatedOrigin);
        this.connection = new Connection(validatedOrigin, this.popupWindow);
        (_b = this.connectionUpdatedCallback) === null || _b === void 0 ? void 0 : _b.call(this, this.connection);
      }
      if (!this.connection) {
        return;
      }
      this.connection.runHandlersForEvent(e.data.event, e.data.payload);
      if (e.data.event === PopupEvent.POPUP_CLOSED && this.connection) {
        this.resetConnection();
        this.popupWindow = null;
      }
    };
  }
  initialize() {
    window.addEventListener("message", this.handleMessage);
    return this;
  }
  tearDown() {
    window.removeEventListener("message", this.handleMessage);
    this.resetConnection();
    return this;
  }
  async open({ url, widthPx = DEFAULT_POPUP_WIDTH_PX, heightPx = DEFAULT_POPUP_HEIGHT_PX, nonce }) {
    var _a;
    if ((_a = this.popupWindow) === null || _a === void 0 ? void 0 : _a.closed) {
      this.resetConnectionAndPopupWindow();
    }
    if (this.popupWindow) {
      return;
    }
    this.initialize();
    if (nonce) {
      this.nonce = nonce;
    }
    const left = window.screenX + (window.innerWidth - widthPx) / 2;
    const top = window.screenY + (window.innerHeight - heightPx) / 2;
    this.popupWindow = openPopup({
      height: heightPx,
      left,
      top,
      url: typeof url === "string" ? url : void 0,
      width: widthPx
    });
    if (url instanceof Promise) {
      this.setUrl(await url);
    }
  }
  close() {
    if (!this.popupWindow) {
      return;
    }
    this.popupWindow.close();
    this.resetConnectionAndPopupWindow();
  }
  onConnectionUpdated(callback) {
    this.connectionUpdatedCallback = callback;
    return this;
  }
  getConnection() {
    return this.connection;
  }
  setUrl(url) {
    if (!this.popupWindow) {
      return;
    }
    this.popupWindow.location = url;
  }
  resetConnectionAndPopupWindow() {
    this.resetConnection();
    this.popupWindow = null;
  }
  resetConnection() {
    var _a, _b;
    (_a = this.connection) === null || _a === void 0 ? void 0 : _a.resetHandlers();
    this.connection = null;
    (_b = this.connectionUpdatedCallback) === null || _b === void 0 ? void 0 : _b.call(this, this.connection);
  }
  verifyAndResetNonce(uncheckedNonce) {
    if (!this.nonce) {
      return true;
    }
    const result = uncheckedNonce === this.nonce;
    if (result) {
      this.nonce = void 0;
    }
    return result;
  }
};

// node_modules/@fractalwagmi/popup-connection/dist/esm/use-popup-connection.js
var import_react = __toESM(require_react(), 1);

// node_modules/@fractalwagmi/popup-connection/dist/esm/lib/guards.js
function isObject(value) {
  if (value === null) {
    return false;
  }
  if (typeof value !== "object") {
    return false;
  }
  return true;
}

// node_modules/@fractalwagmi/popup-connection/dist/esm/payloads/solana-wallet-adapter-approved.js
function assertPayloadIsSolanaWalletAdapterApproved(payload) {
  if (!isObject(payload)) {
    return false;
  }
  if (!("solanaPublicKey" in payload)) {
    return false;
  }
  if (typeof payload.solanaPublicKey !== "string") {
    return false;
  }
  return true;
}

// node_modules/@fractalwagmi/popup-connection/dist/esm/payloads/transaction-signature-needed-response.js
function assertPayloadIsTransactionSignatureNeededResponsePayload(payload) {
  if (!isObject(payload)) {
    return false;
  }
  if (!("signedB58Transactions" in payload)) {
    return false;
  }
  if (!Array.isArray(payload.signedB58Transactions)) {
    return false;
  }
  return payload.signedB58Transactions.every((value) => typeof value === "string");
}

// node_modules/@fractalwagmi/popup-connection/dist/esm/payloads/message-signature-needed-response.js
function assertPayloadIsMessageSignatureNeededResponsePayload(payload) {
  if (!isObject(payload)) {
    return false;
  }
  if (!("decodedSignature" in payload)) {
    return false;
  }
  return typeof payload.decodedSignature === "string";
}

// node_modules/@fractalwagmi/solana-wallet-adapter/dist/esm/core/fractal-wallet-adapter-impl.js
init_index_browser_esm();
var import_bs58 = __toESM(require_bs58(), 1);

// node_modules/@fractalwagmi/solana-wallet-adapter/dist/esm/core/nonce.js
function createNonce() {
  return `${randomString()}${randomString()}${randomString()}`;
}
function randomString() {
  return (Math.random() + 1).toString(36).substring(7);
}

// node_modules/@fractalwagmi/solana-wallet-adapter/dist/esm/core/fractal-wallet-adapter-impl.js
var UNKNOWN_ERROR_MESSAGE = "Unknown Error";
var FRACTAL_DOMAIN_HTTPS2 = "https://fractal.is";
var APPROVE_PAGE_URL = `${FRACTAL_DOMAIN_HTTPS2}/wallet-adapter/approve`;
var SIGN_PAGE_URL = `${FRACTAL_DOMAIN_HTTPS2}/wallet-adapter/sign`;
var SIGN_MESSAGE_PAGE_URL = `${FRACTAL_DOMAIN_HTTPS2}/wallet-adapter/sign/message`;
var MIN_POPUP_HEIGHT_PX = DEFAULT_POPUP_HEIGHT_PX;
var MAX_POPUP_WIDTH_PX = 850;
var LOCAL_STORAGE_KEY_FOR_PUBLIC_KEY = "RdxqNYxF";
var FractalWalletAdapterImpl = class {
  constructor() {
    this.popupManager = new ConnectionManager(Platform.SOLANA_WALLET_ADAPTER);
    this.publicKey = null;
    this.connecting = false;
  }
  getPublicKey() {
    return this.publicKey;
  }
  async connect() {
    let resolve;
    let reject;
    const publicKeyInLocalStorage = window.localStorage.getItem(LOCAL_STORAGE_KEY_FOR_PUBLIC_KEY);
    if (publicKeyInLocalStorage) {
      this.publicKey = new PublicKey(publicKeyInLocalStorage);
      return Promise.resolve();
    }
    const nonce = createNonce();
    this.popupManager.open({
      nonce,
      url: `${APPROVE_PAGE_URL}/${nonce}`
    });
    const handleSolanaWalletAdapterApproved = (payload) => {
      if (!assertPayloadIsSolanaWalletAdapterApproved(payload)) {
        reject(new WalletConnectionError(`Malformed payload when setting up connection. Expected { solanaPublicKey: string } but received ${JSON.stringify(payload)}`));
        this.popupManager.close();
        return;
      }
      try {
        this.publicKey = new PublicKey(payload.solanaPublicKey);
        window.localStorage.setItem(LOCAL_STORAGE_KEY_FOR_PUBLIC_KEY, payload.solanaPublicKey);
        resolve();
      } catch (error) {
        const publicKeyError = new WalletPublicKeyError(error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE, error);
        reject(publicKeyError);
      }
      this.popupManager.close();
    };
    const handleExplicitDenialByUser = () => {
      reject(new WalletConnectionError("The user denied the connection."));
      this.popupManager.close();
    };
    const handleClosedByUser = () => {
      reject(new WalletConnectionError("The user denied the connection."));
      this.popupManager.close();
    };
    this.popupManager.onConnectionUpdated((connection) => {
      if (!connection) {
        return;
      }
      connection.on(PopupEvent.SOLANA_WALLET_ADAPTER_APPROVED, handleSolanaWalletAdapterApproved);
      connection.on(PopupEvent.SOLANA_WALLET_ADAPTER_DENIED, handleExplicitDenialByUser);
      connection.on(PopupEvent.POPUP_CLOSED, handleClosedByUser);
    });
    return new Promise((promiseResolver, promiseRejector) => {
      resolve = promiseResolver;
      reject = promiseRejector;
    });
  }
  async disconnect() {
    this.popupManager.tearDown();
    this.publicKey = null;
    window.localStorage.removeItem(LOCAL_STORAGE_KEY_FOR_PUBLIC_KEY);
  }
  async signTransaction(transaction) {
    try {
      this.checkWalletReadiness();
      const result = await this.signTransactions([transaction]);
      return result[0];
    } catch (error) {
      let errorToThrow = error;
      if (!(error instanceof WalletError)) {
        errorToThrow = new WalletSignTransactionError(error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE, error);
      }
      throw errorToThrow;
    }
  }
  async signAllTransactions(transactions) {
    try {
      this.checkWalletReadiness();
      const result = await this.signTransactions(transactions);
      return result;
    } catch (error) {
      let errorToThrow = error;
      if (!(error instanceof WalletError)) {
        errorToThrow = new WalletSignTransactionError(error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE, error);
      }
      throw errorToThrow;
    }
  }
  async signMessage(encodedMessage) {
    const decodedMessage = new TextDecoder().decode(encodedMessage);
    let resolve;
    let reject;
    const handleMessageSignatureNeededResponse = (payload) => {
      if (!assertPayloadIsMessageSignatureNeededResponsePayload(payload)) {
        const error = new WalletSignMessageError(`Malformed payload when signing message. Expected { decodedSignature: string } but received ${JSON.stringify(payload)}`);
        reject(error);
        this.popupManager.close();
        return;
      }
      const encodedSignature = Uint8Array.from(payload.decodedSignature.split(",").map((n) => Number(n)));
      resolve(encodedSignature);
      this.popupManager.close();
    };
    const handleClosedOrDeniedByUser = () => {
      reject(new WalletSignMessageError("The user did not approve the message"));
      this.popupManager.close();
    };
    const handleAuthLoaded = () => {
      var _a;
      const payload = {
        decodedMessage
      };
      (_a = this.popupManager.getConnection()) === null || _a === void 0 ? void 0 : _a.send({
        event: PopupEvent.MESSAGE_SIGNATURE_NEEDED,
        payload
      });
    };
    const nonce = createNonce();
    this.popupManager.open({
      heightPx: Math.max(MIN_POPUP_HEIGHT_PX, Math.floor(window.innerHeight * 0.8)),
      nonce,
      url: `${SIGN_MESSAGE_PAGE_URL}/${nonce}`,
      widthPx: Math.min(MAX_POPUP_WIDTH_PX, Math.floor(window.innerWidth * 0.8))
    });
    this.popupManager.onConnectionUpdated((connection) => {
      if (!connection) {
        return;
      }
      connection.on(PopupEvent.MESSAGE_SIGNATURE_NEEDED_RESPONSE, handleMessageSignatureNeededResponse);
      connection.on(PopupEvent.TRANSACTION_DENIED, handleClosedOrDeniedByUser);
      connection.on(PopupEvent.POPUP_CLOSED, handleClosedOrDeniedByUser);
      connection.on(PopupEvent.AUTH_LOADED, handleAuthLoaded);
    });
    return new Promise((promiseResolver, promiseRejector) => {
      resolve = promiseResolver;
      reject = promiseRejector;
    });
  }
  async signTransactions(transactions) {
    let resolve;
    let reject;
    const handleTransactionSignatureNeededResponse = (payload) => {
      if (!assertPayloadIsTransactionSignatureNeededResponsePayload(payload)) {
        const error = new WalletSignTransactionError(`Malformed payload when signing transactions. Expected { signedB58Transactions: string[] } but received ${JSON.stringify(payload)}`);
        reject(error);
        this.popupManager.close();
        return;
      }
      const signedTransactions = payload.signedB58Transactions.map((signedB58Transaction) => {
        return Transaction.from(import_bs58.default.decode(signedB58Transaction));
      });
      resolve(signedTransactions);
      this.popupManager.close();
    };
    const handleClosedOrDeniedByUser = () => {
      reject(new WalletSignTransactionError("The user did not approve the transaction"));
      this.popupManager.close();
    };
    const handleAuthLoaded = () => {
      var _a;
      const payload = {
        unsignedB58Transactions: transactions.map((t) => import_bs58.default.encode(t.serializeMessage()))
      };
      (_a = this.popupManager.getConnection()) === null || _a === void 0 ? void 0 : _a.send({
        event: PopupEvent.TRANSACTION_SIGNATURE_NEEDED,
        payload
      });
    };
    const nonce = createNonce();
    this.popupManager.open({
      heightPx: Math.max(MIN_POPUP_HEIGHT_PX, Math.floor(window.innerHeight * 0.8)),
      nonce,
      url: `${SIGN_PAGE_URL}/${nonce}`,
      widthPx: Math.min(MAX_POPUP_WIDTH_PX, Math.floor(window.innerWidth * 0.8))
    });
    this.popupManager.onConnectionUpdated((connection) => {
      if (!connection) {
        return;
      }
      connection.on(PopupEvent.TRANSACTION_SIGNATURE_NEEDED_RESPONSE, handleTransactionSignatureNeededResponse);
      connection.on(PopupEvent.TRANSACTION_DENIED, handleClosedOrDeniedByUser);
      connection.on(PopupEvent.POPUP_CLOSED, handleClosedOrDeniedByUser);
      connection.on(PopupEvent.AUTH_LOADED, handleAuthLoaded);
    });
    return new Promise((promiseResolver, promiseRejector) => {
      resolve = promiseResolver;
      reject = promiseRejector;
    });
  }
  checkWalletReadiness() {
    if (this.publicKey === null) {
      throw new WalletNotConnectedError("`publicKey` is null. Did you forget to call `.connect()`?");
    }
  }
};
export {
  FractalWalletAdapterImpl
};
//# sourceMappingURL=esm-CGGIZ4GH.js.map
