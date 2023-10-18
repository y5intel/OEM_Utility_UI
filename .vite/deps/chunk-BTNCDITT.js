import {
  require_react
} from "./chunk-DZRJWR3Y.js";
import {
  ReadonlyWalletAccount,
  arraysEqual,
  bytesEqual,
  getChainForEndpoint,
  getCommitment
} from "./chunk-EYUUDRO4.js";
import {
  BaseMessageSignerWalletAdapter,
  BaseWalletAdapter,
  StandardConnect,
  StandardDisconnect,
  StandardEvents,
  WalletAccountError,
  WalletConfigError,
  WalletConnectionError,
  WalletDisconnectedError,
  WalletDisconnectionError,
  WalletError,
  WalletNotConnectedError,
  WalletNotReadyError,
  WalletPublicKeyError,
  WalletReadyState,
  WalletSendTransactionError,
  WalletSignInError,
  WalletSignMessageError,
  WalletSignTransactionError,
  isVersionedTransaction,
  isWalletAdapterCompatibleStandardWallet
} from "./chunk-XZ4VYCR7.js";
import {
  SolanaSignAndSendTransaction,
  SolanaSignIn,
  SolanaSignMessage,
  SolanaSignTransaction
} from "./chunk-VIV2VBE4.js";
import {
  Connection,
  PublicKey,
  SIGNATURE_LENGTH_IN_BYTES,
  Transaction,
  VersionedMessage,
  VersionedTransaction,
  init_index_browser_esm,
  require_bs58
} from "./chunk-NXBQG7JS.js";
import {
  __commonJS,
  __toESM
} from "./chunk-W7S2ME4R.js";

// node_modules/@solana-mobile/mobile-wallet-adapter-protocol-web3js/node_modules/base-x/src/index.js
var require_src = __commonJS({
  "node_modules/@solana-mobile/mobile-wallet-adapter-protocol-web3js/node_modules/base-x/src/index.js"(exports, module) {
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

// node_modules/@solana-mobile/mobile-wallet-adapter-protocol-web3js/node_modules/bs58/index.js
var require_bs582 = __commonJS({
  "node_modules/@solana-mobile/mobile-wallet-adapter-protocol-web3js/node_modules/bs58/index.js"(exports, module) {
    var basex = require_src();
    var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    module.exports = basex(ALPHABET);
  }
});

// node_modules/@solana/wallet-adapter-react/lib/esm/ConnectionProvider.js
init_index_browser_esm();
var import_react2 = __toESM(require_react(), 1);

// node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js
var import_react = __toESM(require_react(), 1);
var ConnectionContext = (0, import_react.createContext)({});
function useConnection() {
  return (0, import_react.useContext)(ConnectionContext);
}

// node_modules/@solana/wallet-adapter-react/lib/esm/ConnectionProvider.js
var ConnectionProvider = ({ children, endpoint, config = { commitment: "confirmed" } }) => {
  const connection = (0, import_react2.useMemo)(() => new Connection(endpoint, config), [endpoint, config]);
  return import_react2.default.createElement(ConnectionContext.Provider, { value: { connection } }, children);
};

// node_modules/@solana/wallet-adapter-react/lib/esm/errors.js
var WalletNotSelectedError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletNotSelectedError";
  }
};

// node_modules/@solana/wallet-adapter-react/lib/esm/useAnchorWallet.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js
var import_react3 = __toESM(require_react(), 1);
var EMPTY_ARRAY = [];
var DEFAULT_CONTEXT = {
  autoConnect: false,
  connecting: false,
  connected: false,
  disconnecting: false,
  select() {
    logMissingProviderError("call", "select");
  },
  connect() {
    return Promise.reject(logMissingProviderError("call", "connect"));
  },
  disconnect() {
    return Promise.reject(logMissingProviderError("call", "disconnect"));
  },
  sendTransaction() {
    return Promise.reject(logMissingProviderError("call", "sendTransaction"));
  },
  signTransaction() {
    return Promise.reject(logMissingProviderError("call", "signTransaction"));
  },
  signAllTransactions() {
    return Promise.reject(logMissingProviderError("call", "signAllTransactions"));
  },
  signMessage() {
    return Promise.reject(logMissingProviderError("call", "signMessage"));
  },
  signIn() {
    return Promise.reject(logMissingProviderError("call", "signIn"));
  }
};
Object.defineProperty(DEFAULT_CONTEXT, "wallets", {
  get() {
    logMissingProviderError("read", "wallets");
    return EMPTY_ARRAY;
  }
});
Object.defineProperty(DEFAULT_CONTEXT, "wallet", {
  get() {
    logMissingProviderError("read", "wallet");
    return null;
  }
});
Object.defineProperty(DEFAULT_CONTEXT, "publicKey", {
  get() {
    logMissingProviderError("read", "publicKey");
    return null;
  }
});
function logMissingProviderError(action, property) {
  const error = new Error(`You have tried to ${action} "${property}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`);
  console.error(error);
  return error;
}
var WalletContext = (0, import_react3.createContext)(DEFAULT_CONTEXT);
function useWallet() {
  return (0, import_react3.useContext)(WalletContext);
}

// node_modules/@solana/wallet-adapter-react/lib/esm/useAnchorWallet.js
function useAnchorWallet() {
  const { publicKey, signTransaction, signAllTransactions } = useWallet();
  return (0, import_react4.useMemo)(() => publicKey && signTransaction && signAllTransactions ? { publicKey, signTransaction, signAllTransactions } : void 0, [publicKey, signTransaction, signAllTransactions]);
}

// node_modules/@solana/wallet-adapter-react/lib/esm/useLocalStorage.js
var import_react5 = __toESM(require_react(), 1);
function useLocalStorage(key, defaultState) {
  const state = (0, import_react5.useState)(() => {
    try {
      const value2 = localStorage.getItem(key);
      if (value2)
        return JSON.parse(value2);
    } catch (error) {
      if (typeof window !== "undefined") {
        console.error(error);
      }
    }
    return defaultState;
  });
  const value = state[0];
  const isFirstRenderRef = (0, import_react5.useRef)(true);
  (0, import_react5.useEffect)(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      if (typeof window !== "undefined") {
        console.error(error);
      }
    }
  }, [value, key]);
  return state;
}

// node_modules/@solana-mobile/wallet-adapter-mobile/lib/esm/index.browser.js
init_index_browser_esm();

// node_modules/@solana-mobile/mobile-wallet-adapter-protocol-web3js/lib/esm/index.browser.js
init_index_browser_esm();

// node_modules/@solana-mobile/mobile-wallet-adapter-protocol/lib/esm/index.browser.js
var SolanaMobileWalletAdapterErrorCode = {
  ERROR_ASSOCIATION_PORT_OUT_OF_RANGE: "ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",
  ERROR_FORBIDDEN_WALLET_BASE_URL: "ERROR_FORBIDDEN_WALLET_BASE_URL",
  ERROR_SECURE_CONTEXT_REQUIRED: "ERROR_SECURE_CONTEXT_REQUIRED",
  ERROR_SESSION_CLOSED: "ERROR_SESSION_CLOSED",
  ERROR_SESSION_TIMEOUT: "ERROR_SESSION_TIMEOUT",
  ERROR_WALLET_NOT_FOUND: "ERROR_WALLET_NOT_FOUND"
};
var SolanaMobileWalletAdapterError = class extends Error {
  constructor(...args) {
    const [code, message, data] = args;
    super(message);
    this.code = code;
    this.data = data;
    this.name = "SolanaMobileWalletAdapterError";
  }
};
var SolanaMobileWalletAdapterProtocolError = class extends Error {
  constructor(...args) {
    const [jsonRpcMessageId, code, message, data] = args;
    super(message);
    this.code = code;
    this.data = data;
    this.jsonRpcMessageId = jsonRpcMessageId;
    this.name = "SolanaMobileWalletAdapterProtocolError";
  }
};
function __awaiter(thisArg, _arguments, P, generator) {
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
}
function createHelloReq(ecdhPublicKey, associationKeypairPrivateKey) {
  return __awaiter(this, void 0, void 0, function* () {
    const publicKeyBuffer = yield crypto.subtle.exportKey("raw", ecdhPublicKey);
    const signatureBuffer = yield crypto.subtle.sign({ hash: "SHA-256", name: "ECDSA" }, associationKeypairPrivateKey, publicKeyBuffer);
    const response = new Uint8Array(publicKeyBuffer.byteLength + signatureBuffer.byteLength);
    response.set(new Uint8Array(publicKeyBuffer), 0);
    response.set(new Uint8Array(signatureBuffer), publicKeyBuffer.byteLength);
    return response;
  });
}
var SEQUENCE_NUMBER_BYTES = 4;
function createSequenceNumberVector(sequenceNumber) {
  if (sequenceNumber >= 4294967296) {
    throw new Error("Outbound sequence number overflow. The maximum sequence number is 32-bytes.");
  }
  const byteArray = new ArrayBuffer(SEQUENCE_NUMBER_BYTES);
  const view = new DataView(byteArray);
  view.setUint32(
    0,
    sequenceNumber,
    /* littleEndian */
    false
  );
  return new Uint8Array(byteArray);
}
function generateAssociationKeypair() {
  return __awaiter(this, void 0, void 0, function* () {
    return yield crypto.subtle.generateKey(
      {
        name: "ECDSA",
        namedCurve: "P-256"
      },
      false,
      ["sign"]
      /* keyUsages */
    );
  });
}
function generateECDHKeypair() {
  return __awaiter(this, void 0, void 0, function* () {
    return yield crypto.subtle.generateKey(
      {
        name: "ECDH",
        namedCurve: "P-256"
      },
      false,
      ["deriveKey", "deriveBits"]
      /* keyUsages */
    );
  });
}
var INITIALIZATION_VECTOR_BYTES = 12;
function encryptJsonRpcMessage(jsonRpcMessage, sharedSecret) {
  return __awaiter(this, void 0, void 0, function* () {
    const plaintext = JSON.stringify(jsonRpcMessage);
    const sequenceNumberVector = createSequenceNumberVector(jsonRpcMessage.id);
    const initializationVector = new Uint8Array(INITIALIZATION_VECTOR_BYTES);
    crypto.getRandomValues(initializationVector);
    const ciphertext = yield crypto.subtle.encrypt(getAlgorithmParams(sequenceNumberVector, initializationVector), sharedSecret, new TextEncoder().encode(plaintext));
    const response = new Uint8Array(sequenceNumberVector.byteLength + initializationVector.byteLength + ciphertext.byteLength);
    response.set(new Uint8Array(sequenceNumberVector), 0);
    response.set(new Uint8Array(initializationVector), sequenceNumberVector.byteLength);
    response.set(new Uint8Array(ciphertext), sequenceNumberVector.byteLength + initializationVector.byteLength);
    return response;
  });
}
function decryptJsonRpcMessage(message, sharedSecret) {
  return __awaiter(this, void 0, void 0, function* () {
    const sequenceNumberVector = message.slice(0, SEQUENCE_NUMBER_BYTES);
    const initializationVector = message.slice(SEQUENCE_NUMBER_BYTES, SEQUENCE_NUMBER_BYTES + INITIALIZATION_VECTOR_BYTES);
    const ciphertext = message.slice(SEQUENCE_NUMBER_BYTES + INITIALIZATION_VECTOR_BYTES);
    const plaintextBuffer = yield crypto.subtle.decrypt(getAlgorithmParams(sequenceNumberVector, initializationVector), sharedSecret, ciphertext);
    const plaintext = getUtf8Decoder().decode(plaintextBuffer);
    const jsonRpcMessage = JSON.parse(plaintext);
    if (Object.hasOwnProperty.call(jsonRpcMessage, "error")) {
      throw new SolanaMobileWalletAdapterProtocolError(jsonRpcMessage.id, jsonRpcMessage.error.code, jsonRpcMessage.error.message);
    }
    return jsonRpcMessage;
  });
}
function getAlgorithmParams(sequenceNumber, initializationVector) {
  return {
    additionalData: sequenceNumber,
    iv: initializationVector,
    name: "AES-GCM",
    tagLength: 128
    // 16 byte tag => 128 bits
  };
}
var _utf8Decoder;
function getUtf8Decoder() {
  if (_utf8Decoder === void 0) {
    _utf8Decoder = new TextDecoder("utf-8");
  }
  return _utf8Decoder;
}
function parseHelloRsp(payloadBuffer, associationPublicKey, ecdhPrivateKey) {
  return __awaiter(this, void 0, void 0, function* () {
    const [associationPublicKeyBuffer, walletPublicKey] = yield Promise.all([
      crypto.subtle.exportKey("raw", associationPublicKey),
      crypto.subtle.importKey(
        "raw",
        payloadBuffer,
        { name: "ECDH", namedCurve: "P-256" },
        false,
        []
        /* keyUsages */
      )
    ]);
    const sharedSecret = yield crypto.subtle.deriveBits({ name: "ECDH", public: walletPublicKey }, ecdhPrivateKey, 256);
    const ecdhSecretKey = yield crypto.subtle.importKey(
      "raw",
      sharedSecret,
      "HKDF",
      false,
      ["deriveKey"]
      /* keyUsages */
    );
    const aesKeyMaterialVal = yield crypto.subtle.deriveKey({
      name: "HKDF",
      hash: "SHA-256",
      salt: new Uint8Array(associationPublicKeyBuffer),
      info: new Uint8Array()
    }, ecdhSecretKey, { name: "AES-GCM", length: 128 }, false, ["encrypt", "decrypt"]);
    return aesKeyMaterialVal;
  });
}
function getRandomAssociationPort() {
  return assertAssociationPort(49152 + Math.floor(Math.random() * (65535 - 49152 + 1)));
}
function assertAssociationPort(port) {
  if (port < 49152 || port > 65535) {
    throw new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE, `Association port number must be between 49152 and 65535. ${port} given.`, { port });
  }
  return port;
}
function arrayBufferToBase64String(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let ii = 0; ii < len; ii++) {
    binary += String.fromCharCode(bytes[ii]);
  }
  return window.btoa(binary);
}
function getStringWithURLUnsafeCharactersReplaced(unsafeBase64EncodedString) {
  return unsafeBase64EncodedString.replace(/[/+=]/g, (m) => ({
    "/": "_",
    "+": "-",
    "=": "."
  })[m]);
}
var INTENT_NAME = "solana-wallet";
function getPathParts(pathString) {
  return pathString.replace(/(^\/+|\/+$)/g, "").split("/");
}
function getIntentURL(methodPathname, intentUrlBase) {
  let baseUrl = null;
  if (intentUrlBase) {
    try {
      baseUrl = new URL(intentUrlBase);
    } catch (_a) {
    }
    if ((baseUrl === null || baseUrl === void 0 ? void 0 : baseUrl.protocol) !== "https:") {
      throw new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_FORBIDDEN_WALLET_BASE_URL, "Base URLs supplied by wallets must be valid `https` URLs");
    }
  }
  baseUrl || (baseUrl = new URL(`${INTENT_NAME}:/`));
  const pathname = methodPathname.startsWith("/") ? (
    // Method is an absolute path. Replace it wholesale.
    methodPathname
  ) : (
    // Method is a relative path. Merge it with the existing one.
    [...getPathParts(baseUrl.pathname), ...getPathParts(methodPathname)].join("/")
  );
  return new URL(pathname, baseUrl);
}
function getAssociateAndroidIntentURL(associationPublicKey, putativePort, associationURLBase) {
  return __awaiter(this, void 0, void 0, function* () {
    const associationPort = assertAssociationPort(putativePort);
    const exportedKey = yield crypto.subtle.exportKey("raw", associationPublicKey);
    const encodedKey = arrayBufferToBase64String(exportedKey);
    const url = getIntentURL("v1/associate/local", associationURLBase);
    url.searchParams.set("association", getStringWithURLUnsafeCharactersReplaced(encodedKey));
    url.searchParams.set("port", `${associationPort}`);
    return url;
  });
}
var Browser = {
  Firefox: 0,
  Other: 1
};
function assertUnreachable(x) {
  return x;
}
function getBrowser() {
  return navigator.userAgent.indexOf("Firefox/") !== -1 ? Browser.Firefox : Browser.Other;
}
function getDetectionPromise() {
  return new Promise((resolve, reject) => {
    function cleanup() {
      clearTimeout(timeoutId);
      window.removeEventListener("blur", handleBlur);
    }
    function handleBlur() {
      cleanup();
      resolve();
    }
    window.addEventListener("blur", handleBlur);
    const timeoutId = setTimeout(() => {
      cleanup();
      reject();
    }, 2e3);
  });
}
var _frame = null;
function launchUrlThroughHiddenFrame(url) {
  if (_frame == null) {
    _frame = document.createElement("iframe");
    _frame.style.display = "none";
    document.body.appendChild(_frame);
  }
  _frame.contentWindow.location.href = url.toString();
}
function startSession(associationPublicKey, associationURLBase) {
  return __awaiter(this, void 0, void 0, function* () {
    const randomAssociationPort = getRandomAssociationPort();
    const associationUrl = yield getAssociateAndroidIntentURL(associationPublicKey, randomAssociationPort, associationURLBase);
    if (associationUrl.protocol === "https:") {
      window.location.assign(associationUrl);
    } else {
      try {
        const browser = getBrowser();
        switch (browser) {
          case Browser.Firefox:
            launchUrlThroughHiddenFrame(associationUrl);
            break;
          case Browser.Other: {
            const detectionPromise = getDetectionPromise();
            window.location.assign(associationUrl);
            yield detectionPromise;
            break;
          }
          default:
            assertUnreachable(browser);
        }
      } catch (e) {
        throw new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_WALLET_NOT_FOUND, "Found no installed wallet that supports the mobile wallet protocol.");
      }
    }
    return randomAssociationPort;
  });
}
var WEBSOCKET_CONNECTION_CONFIG = {
  /**
   * 300 milliseconds is a generally accepted threshold for what someone
   * would consider an acceptable response time for a user interface
   * after having performed a low-attention tapping task. We set the initial
   * interval at which we wait for the wallet to set up the websocket at
   * half this, as per the Nyquist frequency, with a progressive backoff
   * sequence from there. The total wait time is 30s, which allows for the
   * user to be presented with a disambiguation dialog, select a wallet, and
   * for the wallet app to subsequently start.
   */
  retryDelayScheduleMs: [150, 150, 200, 500, 500, 750, 750, 1e3],
  timeoutMs: 3e4
};
var WEBSOCKET_PROTOCOL = "com.solana.mobilewalletadapter.v1";
function assertSecureContext() {
  if (typeof window === "undefined" || window.isSecureContext !== true) {
    throw new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_SECURE_CONTEXT_REQUIRED, "The mobile wallet adapter protocol must be used in a secure context (`https`).");
  }
}
function assertSecureEndpointSpecificURI(walletUriBase) {
  let url;
  try {
    url = new URL(walletUriBase);
  } catch (_a) {
    throw new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_FORBIDDEN_WALLET_BASE_URL, "Invalid base URL supplied by wallet");
  }
  if (url.protocol !== "https:") {
    throw new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_FORBIDDEN_WALLET_BASE_URL, "Base URLs supplied by wallets must be valid `https` URLs");
  }
}
function getSequenceNumberFromByteArray(byteArray) {
  const view = new DataView(byteArray);
  return view.getUint32(
    0,
    /* littleEndian */
    false
  );
}
function transact(callback, config) {
  return __awaiter(this, void 0, void 0, function* () {
    assertSecureContext();
    const associationKeypair = yield generateAssociationKeypair();
    const sessionPort = yield startSession(associationKeypair.publicKey, config === null || config === void 0 ? void 0 : config.baseUri);
    const websocketURL = `ws://localhost:${sessionPort}/solana-wallet`;
    let connectionStartTime;
    const getNextRetryDelayMs = (() => {
      const schedule = [...WEBSOCKET_CONNECTION_CONFIG.retryDelayScheduleMs];
      return () => schedule.length > 1 ? schedule.shift() : schedule[0];
    })();
    let nextJsonRpcMessageId = 1;
    let lastKnownInboundSequenceNumber = 0;
    let state = { __type: "disconnected" };
    return new Promise((resolve, reject) => {
      let socket;
      const jsonRpcResponsePromises = {};
      const handleOpen = () => __awaiter(this, void 0, void 0, function* () {
        if (state.__type !== "connecting") {
          console.warn(`Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${state.__type}\`.`);
          return;
        }
        const { associationKeypair: associationKeypair2 } = state;
        socket.removeEventListener("open", handleOpen);
        const ecdhKeypair = yield generateECDHKeypair();
        socket.send(yield createHelloReq(ecdhKeypair.publicKey, associationKeypair2.privateKey));
        state = {
          __type: "hello_req_sent",
          associationPublicKey: associationKeypair2.publicKey,
          ecdhPrivateKey: ecdhKeypair.privateKey
        };
      });
      const handleClose = (evt) => {
        if (evt.wasClean) {
          state = { __type: "disconnected" };
        } else {
          reject(new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_SESSION_CLOSED, `The wallet session dropped unexpectedly (${evt.code}: ${evt.reason}).`, { closeEvent: evt }));
        }
        disposeSocket();
      };
      const handleError = (_evt) => __awaiter(this, void 0, void 0, function* () {
        disposeSocket();
        if (Date.now() - connectionStartTime >= WEBSOCKET_CONNECTION_CONFIG.timeoutMs) {
          reject(new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_SESSION_TIMEOUT, `Failed to connect to the wallet websocket on port ${sessionPort}.`));
        } else {
          yield new Promise((resolve2) => {
            const retryDelayMs = getNextRetryDelayMs();
            retryWaitTimeoutId = window.setTimeout(resolve2, retryDelayMs);
          });
          attemptSocketConnection();
        }
      });
      const handleMessage = (evt) => __awaiter(this, void 0, void 0, function* () {
        const responseBuffer = yield evt.data.arrayBuffer();
        switch (state.__type) {
          case "connected":
            try {
              const sequenceNumberVector = responseBuffer.slice(0, SEQUENCE_NUMBER_BYTES);
              const sequenceNumber = getSequenceNumberFromByteArray(sequenceNumberVector);
              if (sequenceNumber !== lastKnownInboundSequenceNumber + 1) {
                throw new Error("Encrypted message has invalid sequence number");
              }
              lastKnownInboundSequenceNumber = sequenceNumber;
              const jsonRpcMessage = yield decryptJsonRpcMessage(responseBuffer, state.sharedSecret);
              const responsePromise = jsonRpcResponsePromises[jsonRpcMessage.id];
              delete jsonRpcResponsePromises[jsonRpcMessage.id];
              responsePromise.resolve(jsonRpcMessage.result);
            } catch (e) {
              if (e instanceof SolanaMobileWalletAdapterProtocolError) {
                const responsePromise = jsonRpcResponsePromises[e.jsonRpcMessageId];
                delete jsonRpcResponsePromises[e.jsonRpcMessageId];
                responsePromise.reject(e);
              } else {
                throw e;
              }
            }
            break;
          case "hello_req_sent": {
            const sharedSecret = yield parseHelloRsp(responseBuffer, state.associationPublicKey, state.ecdhPrivateKey);
            state = { __type: "connected", sharedSecret };
            const wallet = new Proxy({}, {
              get(target, p) {
                if (target[p] == null) {
                  const method = p.toString().replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`).toLowerCase();
                  target[p] = function(params) {
                    return __awaiter(this, void 0, void 0, function* () {
                      const id = nextJsonRpcMessageId++;
                      socket.send(yield encryptJsonRpcMessage({
                        id,
                        jsonrpc: "2.0",
                        method,
                        params: params !== null && params !== void 0 ? params : {}
                      }, sharedSecret));
                      return new Promise((resolve2, reject2) => {
                        jsonRpcResponsePromises[id] = {
                          resolve(result) {
                            switch (p) {
                              case "authorize":
                              case "reauthorize": {
                                const { wallet_uri_base } = result;
                                if (wallet_uri_base != null) {
                                  try {
                                    assertSecureEndpointSpecificURI(wallet_uri_base);
                                  } catch (e) {
                                    reject2(e);
                                    return;
                                  }
                                }
                                break;
                              }
                            }
                            resolve2(result);
                          },
                          reject: reject2
                        };
                      });
                    });
                  };
                }
                return target[p];
              },
              defineProperty() {
                return false;
              },
              deleteProperty() {
                return false;
              }
            });
            try {
              resolve(yield callback(wallet));
            } catch (e) {
              reject(e);
            } finally {
              disposeSocket();
              socket.close();
            }
            break;
          }
        }
      });
      let disposeSocket;
      let retryWaitTimeoutId;
      const attemptSocketConnection = () => {
        if (disposeSocket) {
          disposeSocket();
        }
        state = { __type: "connecting", associationKeypair };
        if (connectionStartTime === void 0) {
          connectionStartTime = Date.now();
        }
        socket = new WebSocket(websocketURL, [WEBSOCKET_PROTOCOL]);
        socket.addEventListener("open", handleOpen);
        socket.addEventListener("close", handleClose);
        socket.addEventListener("error", handleError);
        socket.addEventListener("message", handleMessage);
        disposeSocket = () => {
          window.clearTimeout(retryWaitTimeoutId);
          socket.removeEventListener("open", handleOpen);
          socket.removeEventListener("close", handleClose);
          socket.removeEventListener("error", handleError);
          socket.removeEventListener("message", handleMessage);
        };
      };
      attemptSocketConnection();
    });
  });
}

// node_modules/@solana-mobile/mobile-wallet-adapter-protocol-web3js/lib/esm/index.browser.js
var import_bs58 = __toESM(require_bs582());
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __awaiter2(thisArg, _arguments, P, generator) {
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
}
function fromUint8Array(byteArray) {
  return window.btoa(String.fromCharCode.call(null, ...byteArray));
}
function toUint8Array(base64EncodedByteArray) {
  return new Uint8Array(window.atob(base64EncodedByteArray).split("").map((c) => c.charCodeAt(0)));
}
function getPayloadFromTransaction(transaction) {
  const serializedTransaction = "version" in transaction ? transaction.serialize() : transaction.serialize({
    requireAllSignatures: false,
    verifySignatures: false
  });
  const payload = fromUint8Array(serializedTransaction);
  return payload;
}
function getTransactionFromWireMessage(byteArray) {
  const numSignatures = byteArray[0];
  const messageOffset = numSignatures * SIGNATURE_LENGTH_IN_BYTES + 1;
  const version = VersionedMessage.deserializeMessageVersion(byteArray.slice(messageOffset, byteArray.length));
  if (version === "legacy") {
    return Transaction.from(byteArray);
  } else {
    return VersionedTransaction.deserialize(byteArray);
  }
}
function transact2(callback, config) {
  return __awaiter2(this, void 0, void 0, function* () {
    const augmentedCallback = (wallet) => {
      const augmentedAPI = new Proxy({}, {
        get(target, p) {
          if (target[p] == null) {
            switch (p) {
              case "signAndSendTransactions":
                target[p] = function(_a) {
                  var { minContextSlot, transactions } = _a, rest = __rest(_a, ["minContextSlot", "transactions"]);
                  return __awaiter2(this, void 0, void 0, function* () {
                    const payloads = transactions.map(getPayloadFromTransaction);
                    const { signatures: base64EncodedSignatures } = yield wallet.signAndSendTransactions(Object.assign(Object.assign(Object.assign({}, rest), minContextSlot != null ? { options: { min_context_slot: minContextSlot } } : null), { payloads }));
                    const signatures = base64EncodedSignatures.map(toUint8Array).map(import_bs58.default.encode);
                    return signatures;
                  });
                };
                break;
              case "signMessages":
                target[p] = function(_a) {
                  var { payloads } = _a, rest = __rest(_a, ["payloads"]);
                  return __awaiter2(this, void 0, void 0, function* () {
                    const base64EncodedPayloads = payloads.map(fromUint8Array);
                    const { signed_payloads: base64EncodedSignedMessages } = yield wallet.signMessages(Object.assign(Object.assign({}, rest), { payloads: base64EncodedPayloads }));
                    const signedMessages = base64EncodedSignedMessages.map(toUint8Array);
                    return signedMessages;
                  });
                };
                break;
              case "signTransactions":
                target[p] = function(_a) {
                  var { transactions } = _a, rest = __rest(_a, ["transactions"]);
                  return __awaiter2(this, void 0, void 0, function* () {
                    const payloads = transactions.map(getPayloadFromTransaction);
                    const { signed_payloads: base64EncodedCompiledTransactions } = yield wallet.signTransactions(Object.assign(Object.assign({}, rest), { payloads }));
                    const compiledTransactions = base64EncodedCompiledTransactions.map(toUint8Array);
                    const signedTransactions = compiledTransactions.map(getTransactionFromWireMessage);
                    return signedTransactions;
                  });
                };
                break;
              default: {
                target[p] = wallet[p];
                break;
              }
            }
          }
          return target[p];
        },
        defineProperty() {
          return false;
        },
        deleteProperty() {
          return false;
        }
      });
      return callback(augmentedAPI);
    };
    return yield transact(augmentedCallback, config);
  });
}

// node_modules/@solana-mobile/wallet-adapter-mobile/lib/esm/index.browser.js
function __awaiter3(thisArg, _arguments, P, generator) {
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
}
function toUint8Array2(base64EncodedByteArray) {
  return new Uint8Array(window.atob(base64EncodedByteArray).split("").map((c) => c.charCodeAt(0)));
}
function getIsSupported() {
  return typeof window !== "undefined" && window.isSecureContext && typeof document !== "undefined" && /android/i.test(navigator.userAgent);
}
var SolanaMobileWalletAdapterWalletName = "Mobile Wallet Adapter";
var SIGNATURE_LENGTH_IN_BYTES2 = 64;
function getPublicKeyFromAddress(address) {
  const publicKeyByteArray = toUint8Array2(address);
  return new PublicKey(publicKeyByteArray);
}
function isVersionedTransaction2(transaction) {
  return "version" in transaction;
}
var SolanaMobileWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config) {
    super();
    this.supportedTransactionVersions = /* @__PURE__ */ new Set(
      // FIXME(#244): We can't actually know what versions are supported until we know which wallet we're talking to.
      ["legacy", 0]
    );
    this.name = SolanaMobileWalletAdapterWalletName;
    this.url = "https://solanamobile.com/wallets";
    this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI4IiB3aWR0aD0iMjgiIHZpZXdCb3g9Ii0zIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0RDQjhGRiI+PHBhdGggZD0iTTE3LjQgMTcuNEgxNXYyLjRoMi40di0yLjRabTEuMi05LjZoLTIuNHYyLjRoMi40VjcuOFoiLz48cGF0aCBkPSJNMjEuNiAzVjBoLTIuNHYzaC0zLjZWMGgtMi40djNoLTIuNHY2LjZINC41YTIuMSAyLjEgMCAxIDEgMC00LjJoMi43VjNINC41QTQuNSA0LjUgMCAwIDAgMCA3LjVWMjRoMjEuNnYtNi42aC0yLjR2NC4ySDIuNFYxMS41Yy41LjMgMS4yLjQgMS44LjVoNy41QTYuNiA2LjYgMCAwIDAgMjQgOVYzaC0yLjRabTAgNS43YTQuMiA0LjIgMCAxIDEtOC40IDBWNS40aDguNHYzLjNaIi8+PC9nPjwvc3ZnPg==";
    this._connecting = false;
    this._connectionGeneration = 0;
    this._readyState = getIsSupported() ? WalletReadyState.Loadable : WalletReadyState.Unsupported;
    this._authorizationResultCache = config.authorizationResultCache;
    this._addressSelector = config.addressSelector;
    this._appIdentity = config.appIdentity;
    this._cluster = config.cluster;
    this._onWalletNotFound = config.onWalletNotFound;
    if (this._readyState !== WalletReadyState.Unsupported) {
      this._authorizationResultCache.get().then((authorizationResult) => {
        if (authorizationResult) {
          this.declareWalletAsInstalled();
        }
      });
    }
  }
  get publicKey() {
    if (this._publicKey == null && this._selectedAddress != null) {
      try {
        this._publicKey = getPublicKeyFromAddress(this._selectedAddress);
      } catch (e) {
        throw new WalletPublicKeyError(e instanceof Error && (e === null || e === void 0 ? void 0 : e.message) || "Unknown error", e);
      }
    }
    return this._publicKey ? this._publicKey : null;
  }
  get connected() {
    return !!this._authorizationResult;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  declareWalletAsInstalled() {
    if (this._readyState !== WalletReadyState.Installed) {
      this.emit("readyStateChange", this._readyState = WalletReadyState.Installed);
    }
  }
  runWithGuard(callback) {
    return __awaiter3(this, void 0, void 0, function* () {
      try {
        return yield callback();
      } catch (e) {
        this.emit("error", e);
        throw e;
      }
    });
  }
  /** @deprecated Use `autoConnect()` instead. */
  autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.autoConnect();
    });
  }
  autoConnect() {
    return __awaiter3(this, void 0, void 0, function* () {
      if (this.connecting || this.connected) {
        return;
      }
      return yield this.runWithGuard(() => __awaiter3(this, void 0, void 0, function* () {
        if (this._readyState !== WalletReadyState.Installed && this._readyState !== WalletReadyState.Loadable) {
          throw new WalletNotReadyError();
        }
        this._connecting = true;
        try {
          const cachedAuthorizationResult = yield this._authorizationResultCache.get();
          if (cachedAuthorizationResult) {
            this.handleAuthorizationResult(cachedAuthorizationResult);
          }
        } catch (e) {
          throw new WalletConnectionError(e instanceof Error && e.message || "Unknown error", e);
        } finally {
          this._connecting = false;
        }
      }));
    });
  }
  connect() {
    return __awaiter3(this, void 0, void 0, function* () {
      if (this.connecting || this.connected) {
        return;
      }
      return yield this.runWithGuard(() => __awaiter3(this, void 0, void 0, function* () {
        if (this._readyState !== WalletReadyState.Installed && this._readyState !== WalletReadyState.Loadable) {
          throw new WalletNotReadyError();
        }
        this._connecting = true;
        try {
          const cachedAuthorizationResult = yield this._authorizationResultCache.get();
          if (cachedAuthorizationResult) {
            this.handleAuthorizationResult(cachedAuthorizationResult);
            return;
          }
          yield this.transact((wallet) => __awaiter3(this, void 0, void 0, function* () {
            const authorizationResult = yield wallet.authorize({
              cluster: this._cluster,
              identity: this._appIdentity
            });
            Promise.all([
              this._authorizationResultCache.set(authorizationResult),
              this.handleAuthorizationResult(authorizationResult)
            ]);
          }));
        } catch (e) {
          throw new WalletConnectionError(e instanceof Error && e.message || "Unknown error", e);
        } finally {
          this._connecting = false;
        }
      }));
    });
  }
  handleAuthorizationResult(authorizationResult) {
    var _a;
    return __awaiter3(this, void 0, void 0, function* () {
      const didPublicKeysChange = (
        // Case 1: We started from having no authorization.
        this._authorizationResult == null || // Case 2: The number of authorized accounts changed.
        ((_a = this._authorizationResult) === null || _a === void 0 ? void 0 : _a.accounts.length) !== authorizationResult.accounts.length || // Case 3: The new list of addresses isn't exactly the same as the old list, in the same order.
        this._authorizationResult.accounts.some((account, ii) => account.address !== authorizationResult.accounts[ii].address)
      );
      this._authorizationResult = authorizationResult;
      this.declareWalletAsInstalled();
      if (didPublicKeysChange) {
        const nextSelectedAddress = yield this._addressSelector.select(authorizationResult.accounts.map(({ address }) => address));
        if (nextSelectedAddress !== this._selectedAddress) {
          this._selectedAddress = nextSelectedAddress;
          delete this._publicKey;
          this.emit(
            "connect",
            // Having just set `this._selectedAddress`, `this.publicKey` is definitely non-null
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.publicKey
          );
        }
      }
    });
  }
  performReauthorization(wallet, authToken) {
    return __awaiter3(this, void 0, void 0, function* () {
      try {
        const authorizationResult = yield wallet.reauthorize({
          auth_token: authToken,
          identity: this._appIdentity
        });
        Promise.all([
          this._authorizationResultCache.set(authorizationResult),
          this.handleAuthorizationResult(authorizationResult)
        ]);
      } catch (e) {
        this.disconnect();
        throw new WalletDisconnectedError(e instanceof Error && (e === null || e === void 0 ? void 0 : e.message) || "Unknown error", e);
      }
    });
  }
  disconnect() {
    return __awaiter3(this, void 0, void 0, function* () {
      this._authorizationResultCache.clear();
      this._connecting = false;
      this._connectionGeneration++;
      delete this._authorizationResult;
      delete this._publicKey;
      delete this._selectedAddress;
      this.emit("disconnect");
    });
  }
  transact(callback) {
    var _a;
    return __awaiter3(this, void 0, void 0, function* () {
      const walletUriBase = (_a = this._authorizationResult) === null || _a === void 0 ? void 0 : _a.wallet_uri_base;
      const config = walletUriBase ? { baseUri: walletUriBase } : void 0;
      const currentConnectionGeneration = this._connectionGeneration;
      try {
        return yield transact2(callback, config);
      } catch (e) {
        if (this._connectionGeneration !== currentConnectionGeneration) {
          yield new Promise(() => {
          });
        }
        if (e instanceof Error && e.name === "SolanaMobileWalletAdapterError" && e.code === "ERROR_WALLET_NOT_FOUND") {
          yield this._onWalletNotFound(this);
        }
        throw e;
      }
    });
  }
  assertIsAuthorized() {
    if (!this._authorizationResult || !this._selectedAddress)
      throw new WalletNotConnectedError();
    return {
      authToken: this._authorizationResult.auth_token,
      selectedAddress: this._selectedAddress
    };
  }
  performSignTransactions(transactions) {
    return __awaiter3(this, void 0, void 0, function* () {
      const { authToken } = this.assertIsAuthorized();
      try {
        return yield this.transact((wallet) => __awaiter3(this, void 0, void 0, function* () {
          yield this.performReauthorization(wallet, authToken);
          const signedTransactions = yield wallet.signTransactions({
            transactions
          });
          return signedTransactions;
        }));
      } catch (error) {
        throw new WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
      }
    });
  }
  sendTransaction(transaction, connection, options) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.runWithGuard(() => __awaiter3(this, void 0, void 0, function* () {
        const { authToken } = this.assertIsAuthorized();
        const minContextSlot = options === null || options === void 0 ? void 0 : options.minContextSlot;
        try {
          return yield this.transact((wallet) => __awaiter3(this, void 0, void 0, function* () {
            function getTargetCommitment() {
              let targetCommitment;
              switch (connection.commitment) {
                case "confirmed":
                case "finalized":
                case "processed":
                  targetCommitment = connection.commitment;
                  break;
                default:
                  targetCommitment = "finalized";
              }
              let targetPreflightCommitment;
              switch (options === null || options === void 0 ? void 0 : options.preflightCommitment) {
                case "confirmed":
                case "finalized":
                case "processed":
                  targetPreflightCommitment = options.preflightCommitment;
                  break;
                case void 0:
                  targetPreflightCommitment = targetCommitment;
                default:
                  targetPreflightCommitment = "finalized";
              }
              const preflightCommitmentScore = targetPreflightCommitment === "finalized" ? 2 : targetPreflightCommitment === "confirmed" ? 1 : 0;
              const targetCommitmentScore = targetCommitment === "finalized" ? 2 : targetCommitment === "confirmed" ? 1 : 0;
              return preflightCommitmentScore < targetCommitmentScore ? targetPreflightCommitment : targetCommitment;
            }
            const [capabilities, _1, _2] = yield Promise.all([
              wallet.getCapabilities(),
              this.performReauthorization(wallet, authToken),
              isVersionedTransaction2(transaction) ? null : (
                /**
                 * Unlike versioned transactions, legacy `Transaction` objects
                 * may not have an associated `feePayer` or `recentBlockhash`.
                 * This code exists to patch them up in case they are missing.
                 */
                (() => __awaiter3(this, void 0, void 0, function* () {
                  var _a;
                  transaction.feePayer || (transaction.feePayer = (_a = this.publicKey) !== null && _a !== void 0 ? _a : void 0);
                  if (transaction.recentBlockhash == null) {
                    const { blockhash } = yield connection.getLatestBlockhash({
                      commitment: getTargetCommitment()
                    });
                    transaction.recentBlockhash = blockhash;
                  }
                }))()
              )
            ]);
            if (capabilities.supports_sign_and_send_transactions) {
              const signatures = yield wallet.signAndSendTransactions({
                minContextSlot,
                transactions: [transaction]
              });
              return signatures[0];
            } else {
              const [signedTransaction] = yield wallet.signTransactions({
                transactions: [transaction]
              });
              if (isVersionedTransaction2(signedTransaction)) {
                return yield connection.sendTransaction(signedTransaction);
              } else {
                const serializedTransaction = signedTransaction.serialize();
                return yield connection.sendRawTransaction(serializedTransaction, Object.assign(Object.assign({}, options), { preflightCommitment: getTargetCommitment() }));
              }
            }
          }));
        } catch (error) {
          throw new WalletSendTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      }));
    });
  }
  signTransaction(transaction) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.runWithGuard(() => __awaiter3(this, void 0, void 0, function* () {
        const [signedTransaction] = yield this.performSignTransactions([transaction]);
        return signedTransaction;
      }));
    });
  }
  signAllTransactions(transactions) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.runWithGuard(() => __awaiter3(this, void 0, void 0, function* () {
        const signedTransactions = yield this.performSignTransactions(transactions);
        return signedTransactions;
      }));
    });
  }
  signMessage(message) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.runWithGuard(() => __awaiter3(this, void 0, void 0, function* () {
        const { authToken, selectedAddress } = this.assertIsAuthorized();
        try {
          return yield this.transact((wallet) => __awaiter3(this, void 0, void 0, function* () {
            yield this.performReauthorization(wallet, authToken);
            const [signedMessage] = yield wallet.signMessages({
              addresses: [selectedAddress],
              payloads: [message]
            });
            const signature = signedMessage.slice(-SIGNATURE_LENGTH_IN_BYTES2);
            return signature;
          }));
        } catch (error) {
          throw new WalletSignMessageError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      }));
    });
  }
};
function createDefaultAddressSelector() {
  return {
    select(addresses) {
      return __awaiter3(this, void 0, void 0, function* () {
        return addresses[0];
      });
    }
  };
}
var CACHE_KEY = "SolanaMobileWalletAdapterDefaultAuthorizationCache";
function createDefaultAuthorizationResultCache() {
  let storage;
  try {
    storage = window.localStorage;
  } catch (_a) {
  }
  return {
    clear() {
      return __awaiter3(this, void 0, void 0, function* () {
        if (!storage) {
          return;
        }
        try {
          storage.removeItem(CACHE_KEY);
        } catch (_a) {
        }
      });
    },
    get() {
      return __awaiter3(this, void 0, void 0, function* () {
        if (!storage) {
          return;
        }
        try {
          return JSON.parse(storage.getItem(CACHE_KEY)) || void 0;
        } catch (_a) {
        }
      });
    },
    set(authorizationResult) {
      return __awaiter3(this, void 0, void 0, function* () {
        if (!storage) {
          return;
        }
        try {
          storage.setItem(CACHE_KEY, JSON.stringify(authorizationResult));
        } catch (_a) {
        }
      });
    }
  };
}
function defaultWalletNotFoundHandler(mobileWalletAdapter) {
  return __awaiter3(this, void 0, void 0, function* () {
    if (typeof window !== "undefined") {
      window.location.assign(mobileWalletAdapter.url);
    }
  });
}
function createDefaultWalletNotFoundHandler() {
  return defaultWalletNotFoundHandler;
}

// node_modules/@solana/wallet-standard-wallet-adapter-base/lib/esm/adapter.js
init_index_browser_esm();
var import_bs582 = __toESM(require_bs58(), 1);
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StandardWalletAdapter_instances;
var _StandardWalletAdapter_account;
var _StandardWalletAdapter_publicKey;
var _StandardWalletAdapter_connecting;
var _StandardWalletAdapter_disconnecting;
var _StandardWalletAdapter_off;
var _StandardWalletAdapter_supportedTransactionVersions;
var _StandardWalletAdapter_wallet;
var _StandardWalletAdapter_readyState;
var _StandardWalletAdapter_connect;
var _StandardWalletAdapter_connected;
var _StandardWalletAdapter_disconnected;
var _StandardWalletAdapter_reset;
var _StandardWalletAdapter_changed;
var _StandardWalletAdapter_signTransaction;
var _StandardWalletAdapter_signAllTransactions;
var _StandardWalletAdapter_signMessage;
var _StandardWalletAdapter_signIn;
var StandardWalletAdapter = class extends BaseWalletAdapter {
  constructor({ wallet }) {
    super();
    _StandardWalletAdapter_instances.add(this);
    _StandardWalletAdapter_account.set(this, void 0);
    _StandardWalletAdapter_publicKey.set(this, void 0);
    _StandardWalletAdapter_connecting.set(this, void 0);
    _StandardWalletAdapter_disconnecting.set(this, void 0);
    _StandardWalletAdapter_off.set(this, void 0);
    _StandardWalletAdapter_supportedTransactionVersions.set(this, void 0);
    _StandardWalletAdapter_wallet.set(this, void 0);
    _StandardWalletAdapter_readyState.set(this, typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.Installed);
    _StandardWalletAdapter_changed.set(this, (properties) => {
      if ("accounts" in properties) {
        const account = __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").accounts[0];
        if (__classPrivateFieldGet(this, _StandardWalletAdapter_account, "f") && !__classPrivateFieldGet(this, _StandardWalletAdapter_disconnecting, "f") && account !== __classPrivateFieldGet(this, _StandardWalletAdapter_account, "f")) {
          if (account) {
            __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_connected).call(this, account);
          } else {
            this.emit("error", new WalletDisconnectedError());
            __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_disconnected).call(this);
          }
        }
      }
      if ("features" in properties) {
        __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_reset).call(this);
      }
    });
    __classPrivateFieldSet(this, _StandardWalletAdapter_wallet, wallet, "f");
    __classPrivateFieldSet(this, _StandardWalletAdapter_account, null, "f");
    __classPrivateFieldSet(this, _StandardWalletAdapter_publicKey, null, "f");
    __classPrivateFieldSet(this, _StandardWalletAdapter_connecting, false, "f");
    __classPrivateFieldSet(this, _StandardWalletAdapter_disconnecting, false, "f");
    __classPrivateFieldSet(this, _StandardWalletAdapter_off, __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features[StandardEvents].on("change", __classPrivateFieldGet(this, _StandardWalletAdapter_changed, "f")), "f");
    __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_reset).call(this);
  }
  get name() {
    return __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").name;
  }
  get url() {
    return "https://github.com/solana-labs/wallet-standard";
  }
  get icon() {
    return __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").icon;
  }
  get readyState() {
    return __classPrivateFieldGet(this, _StandardWalletAdapter_readyState, "f");
  }
  get publicKey() {
    return __classPrivateFieldGet(this, _StandardWalletAdapter_publicKey, "f");
  }
  get connecting() {
    return __classPrivateFieldGet(this, _StandardWalletAdapter_connecting, "f");
  }
  get supportedTransactionVersions() {
    return __classPrivateFieldGet(this, _StandardWalletAdapter_supportedTransactionVersions, "f");
  }
  get wallet() {
    return __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f");
  }
  get standard() {
    return true;
  }
  destroy() {
    __classPrivateFieldSet(this, _StandardWalletAdapter_account, null, "f");
    __classPrivateFieldSet(this, _StandardWalletAdapter_publicKey, null, "f");
    __classPrivateFieldSet(this, _StandardWalletAdapter_connecting, false, "f");
    __classPrivateFieldSet(this, _StandardWalletAdapter_disconnecting, false, "f");
    const off = __classPrivateFieldGet(this, _StandardWalletAdapter_off, "f");
    if (off) {
      __classPrivateFieldSet(this, _StandardWalletAdapter_off, null, "f");
      off();
    }
  }
  async autoConnect() {
    return __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_connect).call(this, { silent: true });
  }
  async connect() {
    return __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_connect).call(this);
  }
  async disconnect() {
    if (StandardDisconnect in __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features) {
      try {
        __classPrivateFieldSet(this, _StandardWalletAdapter_disconnecting, true, "f");
        await __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features[StandardDisconnect].disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      } finally {
        __classPrivateFieldSet(this, _StandardWalletAdapter_disconnecting, false, "f");
      }
    }
    __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_disconnected).call(this);
  }
  async sendTransaction(transaction, connection, options = {}) {
    try {
      const account = __classPrivateFieldGet(this, _StandardWalletAdapter_account, "f");
      if (!account)
        throw new WalletNotConnectedError();
      let feature;
      if (SolanaSignAndSendTransaction in __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features) {
        if (account.features.includes(SolanaSignAndSendTransaction)) {
          feature = SolanaSignAndSendTransaction;
        } else if (SolanaSignTransaction in __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features && account.features.includes(SolanaSignTransaction)) {
          feature = SolanaSignTransaction;
        } else {
          throw new WalletAccountError();
        }
      } else if (SolanaSignTransaction in __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features) {
        if (!account.features.includes(SolanaSignTransaction))
          throw new WalletAccountError();
        feature = SolanaSignTransaction;
      } else {
        throw new WalletConfigError();
      }
      const chain = getChainForEndpoint(connection.rpcEndpoint);
      if (!account.chains.includes(chain))
        throw new WalletSendTransactionError();
      try {
        const { signers, ...sendOptions } = options;
        let serializedTransaction;
        if (isVersionedTransaction(transaction)) {
          (signers == null ? void 0 : signers.length) && transaction.sign(signers);
          serializedTransaction = transaction.serialize();
        } else {
          transaction = await this.prepareTransaction(transaction, connection, sendOptions);
          (signers == null ? void 0 : signers.length) && transaction.partialSign(...signers);
          serializedTransaction = new Uint8Array(transaction.serialize({
            requireAllSignatures: false,
            verifySignatures: false
          }));
        }
        if (feature === SolanaSignAndSendTransaction) {
          const [output] = await __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignAndSendTransaction].signAndSendTransaction({
            account,
            chain,
            transaction: serializedTransaction,
            options: {
              preflightCommitment: getCommitment(sendOptions.preflightCommitment || connection.commitment),
              skipPreflight: sendOptions.skipPreflight,
              maxRetries: sendOptions.maxRetries,
              minContextSlot: sendOptions.minContextSlot
            }
          });
          return import_bs582.default.encode(output.signature);
        } else {
          const [output] = await __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignTransaction].signTransaction({
            account,
            chain,
            transaction: serializedTransaction,
            options: {
              preflightCommitment: getCommitment(sendOptions.preflightCommitment || connection.commitment),
              minContextSlot: sendOptions.minContextSlot
            }
          });
          return await connection.sendRawTransaction(output.signedTransaction, {
            ...sendOptions,
            preflightCommitment: getCommitment(sendOptions.preflightCommitment || connection.commitment)
          });
        }
      } catch (error) {
        if (error instanceof WalletError)
          throw error;
        throw new WalletSendTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};
_StandardWalletAdapter_account = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_publicKey = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_connecting = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_disconnecting = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_off = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_supportedTransactionVersions = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_wallet = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_readyState = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_changed = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_instances = /* @__PURE__ */ new WeakSet(), _StandardWalletAdapter_connect = async function _StandardWalletAdapter_connect2(input) {
  try {
    if (this.connected || this.connecting)
      return;
    if (__classPrivateFieldGet(this, _StandardWalletAdapter_readyState, "f") !== WalletReadyState.Installed)
      throw new WalletNotReadyError();
    __classPrivateFieldSet(this, _StandardWalletAdapter_connecting, true, "f");
    if (!__classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").accounts.length) {
      try {
        await __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features[StandardConnect].connect(input);
      } catch (error) {
        throw new WalletConnectionError(error == null ? void 0 : error.message, error);
      }
    }
    const account = __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").accounts[0];
    if (!account)
      throw new WalletAccountError();
    __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_connected).call(this, account);
  } catch (error) {
    this.emit("error", error);
    throw error;
  } finally {
    __classPrivateFieldSet(this, _StandardWalletAdapter_connecting, false, "f");
  }
}, _StandardWalletAdapter_connected = function _StandardWalletAdapter_connected2(account) {
  let publicKey;
  try {
    publicKey = new PublicKey(account.address);
  } catch (error) {
    throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
  }
  __classPrivateFieldSet(this, _StandardWalletAdapter_account, account, "f");
  __classPrivateFieldSet(this, _StandardWalletAdapter_publicKey, publicKey, "f");
  __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_reset).call(this);
  this.emit("connect", publicKey);
}, _StandardWalletAdapter_disconnected = function _StandardWalletAdapter_disconnected2() {
  __classPrivateFieldSet(this, _StandardWalletAdapter_account, null, "f");
  __classPrivateFieldSet(this, _StandardWalletAdapter_publicKey, null, "f");
  __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_reset).call(this);
  this.emit("disconnect");
}, _StandardWalletAdapter_reset = function _StandardWalletAdapter_reset2() {
  var _a, _b;
  const supportedTransactionVersions = SolanaSignAndSendTransaction in __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features ? __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignAndSendTransaction].supportedTransactionVersions : __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignTransaction].supportedTransactionVersions;
  __classPrivateFieldSet(this, _StandardWalletAdapter_supportedTransactionVersions, arraysEqual(supportedTransactionVersions, ["legacy"]) ? null : new Set(supportedTransactionVersions), "f");
  if (SolanaSignTransaction in __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features && ((_a = __classPrivateFieldGet(this, _StandardWalletAdapter_account, "f")) == null ? void 0 : _a.features.includes(SolanaSignTransaction))) {
    this.signTransaction = __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_signTransaction);
    this.signAllTransactions = __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_signAllTransactions);
  } else {
    delete this.signTransaction;
    delete this.signAllTransactions;
  }
  if (SolanaSignMessage in __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features && ((_b = __classPrivateFieldGet(this, _StandardWalletAdapter_account, "f")) == null ? void 0 : _b.features.includes(SolanaSignMessage))) {
    this.signMessage = __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_signMessage);
  } else {
    delete this.signMessage;
  }
  if (SolanaSignIn in __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features) {
    this.signIn = __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_signIn);
  } else {
    delete this.signIn;
  }
}, _StandardWalletAdapter_signTransaction = async function _StandardWalletAdapter_signTransaction2(transaction) {
  try {
    const account = __classPrivateFieldGet(this, _StandardWalletAdapter_account, "f");
    if (!account)
      throw new WalletNotConnectedError();
    if (!(SolanaSignTransaction in __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features))
      throw new WalletConfigError();
    if (!account.features.includes(SolanaSignTransaction))
      throw new WalletAccountError();
    try {
      const signedTransactions = await __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignTransaction].signTransaction({
        account,
        transaction: isVersionedTransaction(transaction) ? transaction.serialize() : new Uint8Array(transaction.serialize({
          requireAllSignatures: false,
          verifySignatures: false
        }))
      });
      const serializedTransaction = signedTransactions[0].signedTransaction;
      return isVersionedTransaction(transaction) ? VersionedTransaction.deserialize(serializedTransaction) : Transaction.from(serializedTransaction);
    } catch (error) {
      if (error instanceof WalletError)
        throw error;
      throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
    }
  } catch (error) {
    this.emit("error", error);
    throw error;
  }
}, _StandardWalletAdapter_signAllTransactions = async function _StandardWalletAdapter_signAllTransactions2(transactions) {
  try {
    const account = __classPrivateFieldGet(this, _StandardWalletAdapter_account, "f");
    if (!account)
      throw new WalletNotConnectedError();
    if (!(SolanaSignTransaction in __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features))
      throw new WalletConfigError();
    if (!account.features.includes(SolanaSignTransaction))
      throw new WalletAccountError();
    try {
      const signedTransactions = await __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignTransaction].signTransaction(...transactions.map((transaction) => ({
        account,
        transaction: isVersionedTransaction(transaction) ? transaction.serialize() : new Uint8Array(transaction.serialize({
          requireAllSignatures: false,
          verifySignatures: false
        }))
      })));
      return transactions.map((transaction, index) => {
        const signedTransaction = signedTransactions[index].signedTransaction;
        return isVersionedTransaction(transaction) ? VersionedTransaction.deserialize(signedTransaction) : Transaction.from(signedTransaction);
      });
    } catch (error) {
      throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
    }
  } catch (error) {
    this.emit("error", error);
    throw error;
  }
}, _StandardWalletAdapter_signMessage = async function _StandardWalletAdapter_signMessage2(message) {
  try {
    const account = __classPrivateFieldGet(this, _StandardWalletAdapter_account, "f");
    if (!account)
      throw new WalletNotConnectedError();
    if (!(SolanaSignMessage in __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features))
      throw new WalletConfigError();
    if (!account.features.includes(SolanaSignMessage))
      throw new WalletAccountError();
    try {
      const signedMessages = await __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignMessage].signMessage({
        account,
        message
      });
      return signedMessages[0].signature;
    } catch (error) {
      throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
    }
  } catch (error) {
    this.emit("error", error);
    throw error;
  }
}, _StandardWalletAdapter_signIn = async function _StandardWalletAdapter_signIn2(input = {}) {
  try {
    if (!(SolanaSignIn in __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features))
      throw new WalletConfigError();
    let output;
    try {
      [output] = await __classPrivateFieldGet(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignIn].signIn(input);
    } catch (error) {
      throw new WalletSignInError(error == null ? void 0 : error.message, error);
    }
    if (!output)
      throw new WalletSignInError();
    __classPrivateFieldGet(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_connected).call(this, output.account);
    return output;
  } catch (error) {
    this.emit("error", error);
    throw error;
  }
};

// node_modules/@solana/wallet-standard-wallet-adapter-base/lib/esm/types.js
var isWalletAdapterCompatibleWallet = isWalletAdapterCompatibleStandardWallet;

// node_modules/@solana/wallet-standard-wallet-adapter-base/lib/esm/wallet.js
init_index_browser_esm();

// node_modules/@wallet-standard/app/lib/esm/wallets.js
var __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AppReadyEvent_detail;
var wallets = void 0;
var registered = /* @__PURE__ */ new Set();
var listeners = {};
function getWallets() {
  if (wallets)
    return wallets;
  wallets = Object.freeze({ register, get, on });
  if (typeof window === "undefined")
    return wallets;
  const api = Object.freeze({ register });
  try {
    window.addEventListener("wallet-standard:register-wallet", ({ detail: callback }) => callback(api));
  } catch (error) {
    console.error("wallet-standard:register-wallet event listener could not be added\n", error);
  }
  try {
    window.dispatchEvent(new AppReadyEvent(api));
  } catch (error) {
    console.error("wallet-standard:app-ready event could not be dispatched\n", error);
  }
  return wallets;
}
function register(...wallets2) {
  var _a;
  wallets2 = wallets2.filter((wallet) => !registered.has(wallet));
  if (!wallets2.length)
    return () => {
    };
  wallets2.forEach((wallet) => registered.add(wallet));
  (_a = listeners["register"]) == null ? void 0 : _a.forEach((listener) => guard(() => listener(...wallets2)));
  return function unregister() {
    var _a2;
    wallets2.forEach((wallet) => registered.delete(wallet));
    (_a2 = listeners["unregister"]) == null ? void 0 : _a2.forEach((listener) => guard(() => listener(...wallets2)));
  };
}
function get() {
  return [...registered];
}
function on(event, listener) {
  var _a;
  ((_a = listeners[event]) == null ? void 0 : _a.push(listener)) || (listeners[event] = [listener]);
  return function off() {
    var _a2;
    listeners[event] = (_a2 = listeners[event]) == null ? void 0 : _a2.filter((existingListener) => listener !== existingListener);
  };
}
function guard(callback) {
  try {
    callback();
  } catch (error) {
    console.error(error);
  }
}
var AppReadyEvent = class extends Event {
  constructor(api) {
    super("wallet-standard:app-ready", {
      bubbles: false,
      cancelable: false,
      composed: false
    });
    _AppReadyEvent_detail.set(this, void 0);
    __classPrivateFieldSet2(this, _AppReadyEvent_detail, api, "f");
  }
  get detail() {
    return __classPrivateFieldGet2(this, _AppReadyEvent_detail, "f");
  }
  get type() {
    return "wallet-standard:app-ready";
  }
  /** @deprecated */
  preventDefault() {
    throw new Error("preventDefault cannot be called");
  }
  /** @deprecated */
  stopImmediatePropagation() {
    throw new Error("stopImmediatePropagation cannot be called");
  }
  /** @deprecated */
  stopPropagation() {
    throw new Error("stopPropagation cannot be called");
  }
};
_AppReadyEvent_detail = /* @__PURE__ */ new WeakMap();
function DEPRECATED_getWallets() {
  if (wallets)
    return wallets;
  wallets = getWallets();
  if (typeof window === "undefined")
    return wallets;
  const callbacks = window.navigator.wallets || [];
  if (!Array.isArray(callbacks)) {
    console.error("window.navigator.wallets is not an array");
    return wallets;
  }
  const { register: register2 } = wallets;
  const push = (...callbacks2) => callbacks2.forEach((callback) => guard(() => callback({ register: register2 })));
  try {
    Object.defineProperty(window.navigator, "wallets", {
      value: Object.freeze({ push })
    });
  } catch (error) {
    console.error("window.navigator.wallets could not be set");
    return wallets;
  }
  push(...callbacks);
  return wallets;
}

// node_modules/@solana/wallet-standard-wallet-adapter-base/lib/esm/wallet.js
var import_bs583 = __toESM(require_bs58(), 1);
var __classPrivateFieldSet3 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet3 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SolanaWalletAdapterWalletAccount_adapter;
var _SolanaWalletAdapterWallet_instances;
var _SolanaWalletAdapterWallet_listeners;
var _SolanaWalletAdapterWallet_adapter;
var _SolanaWalletAdapterWallet_supportedTransactionVersions;
var _SolanaWalletAdapterWallet_chain;
var _SolanaWalletAdapterWallet_endpoint;
var _SolanaWalletAdapterWallet_account;
var _SolanaWalletAdapterWallet_connected;
var _SolanaWalletAdapterWallet_disconnected;
var _SolanaWalletAdapterWallet_connect;
var _SolanaWalletAdapterWallet_disconnect;
var _SolanaWalletAdapterWallet_on;
var _SolanaWalletAdapterWallet_emit;
var _SolanaWalletAdapterWallet_off;
var _SolanaWalletAdapterWallet_deserializeTransaction;
var _SolanaWalletAdapterWallet_signAndSendTransaction;
var _SolanaWalletAdapterWallet_signTransaction;
var _SolanaWalletAdapterWallet_signMessage;
var _SolanaWalletAdapterWallet_signIn;
var SolanaWalletAdapterWalletAccount = class _SolanaWalletAdapterWalletAccount extends ReadonlyWalletAccount {
  constructor({ adapter, address, publicKey, chains }) {
    const features = [SolanaSignAndSendTransaction];
    if ("signTransaction" in adapter) {
      features.push(SolanaSignTransaction);
    }
    if ("signMessage" in adapter) {
      features.push(SolanaSignMessage);
    }
    if ("signIn" in adapter) {
      features.push(SolanaSignIn);
    }
    super({ address, publicKey, chains, features });
    _SolanaWalletAdapterWalletAccount_adapter.set(this, void 0);
    if (new.target === _SolanaWalletAdapterWalletAccount) {
      Object.freeze(this);
    }
    __classPrivateFieldSet3(this, _SolanaWalletAdapterWalletAccount_adapter, adapter, "f");
  }
};
_SolanaWalletAdapterWalletAccount_adapter = /* @__PURE__ */ new WeakMap();
_SolanaWalletAdapterWallet_listeners = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_adapter = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_supportedTransactionVersions = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_chain = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_endpoint = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_account = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_connect = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_disconnect = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_on = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_signAndSendTransaction = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_signTransaction = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_signMessage = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_signIn = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_instances = /* @__PURE__ */ new WeakSet(), _SolanaWalletAdapterWallet_connected = function _SolanaWalletAdapterWallet_connected2() {
  var _a;
  const publicKey = (_a = __classPrivateFieldGet3(this, _SolanaWalletAdapterWallet_adapter, "f").publicKey) == null ? void 0 : _a.toBytes();
  if (publicKey) {
    const address = __classPrivateFieldGet3(this, _SolanaWalletAdapterWallet_adapter, "f").publicKey.toBase58();
    const account = __classPrivateFieldGet3(this, _SolanaWalletAdapterWallet_account, "f");
    if (!account || account.address !== address || account.chains.includes(__classPrivateFieldGet3(this, _SolanaWalletAdapterWallet_chain, "f")) || !bytesEqual(account.publicKey, publicKey)) {
      __classPrivateFieldSet3(this, _SolanaWalletAdapterWallet_account, new SolanaWalletAdapterWalletAccount({
        adapter: __classPrivateFieldGet3(this, _SolanaWalletAdapterWallet_adapter, "f"),
        address,
        publicKey,
        chains: [__classPrivateFieldGet3(this, _SolanaWalletAdapterWallet_chain, "f")]
      }), "f");
      __classPrivateFieldGet3(this, _SolanaWalletAdapterWallet_instances, "m", _SolanaWalletAdapterWallet_emit).call(this, "change", { accounts: this.accounts });
    }
  }
}, _SolanaWalletAdapterWallet_disconnected = function _SolanaWalletAdapterWallet_disconnected2() {
  if (__classPrivateFieldGet3(this, _SolanaWalletAdapterWallet_account, "f")) {
    __classPrivateFieldSet3(this, _SolanaWalletAdapterWallet_account, void 0, "f");
    __classPrivateFieldGet3(this, _SolanaWalletAdapterWallet_instances, "m", _SolanaWalletAdapterWallet_emit).call(this, "change", { accounts: this.accounts });
  }
}, _SolanaWalletAdapterWallet_emit = function _SolanaWalletAdapterWallet_emit2(event, ...args) {
  var _a;
  (_a = __classPrivateFieldGet3(this, _SolanaWalletAdapterWallet_listeners, "f")[event]) == null ? void 0 : _a.forEach((listener) => listener.apply(null, args));
}, _SolanaWalletAdapterWallet_off = function _SolanaWalletAdapterWallet_off2(event, listener) {
  var _a;
  __classPrivateFieldGet3(this, _SolanaWalletAdapterWallet_listeners, "f")[event] = (_a = __classPrivateFieldGet3(this, _SolanaWalletAdapterWallet_listeners, "f")[event]) == null ? void 0 : _a.filter((existingListener) => listener !== existingListener);
}, _SolanaWalletAdapterWallet_deserializeTransaction = function _SolanaWalletAdapterWallet_deserializeTransaction2(serializedTransaction) {
  const transaction = VersionedTransaction.deserialize(serializedTransaction);
  if (!__classPrivateFieldGet3(this, _SolanaWalletAdapterWallet_supportedTransactionVersions, "f").includes(transaction.version))
    throw new Error("unsupported transaction version");
  if (transaction.version === "legacy" && arraysEqual(__classPrivateFieldGet3(this, _SolanaWalletAdapterWallet_supportedTransactionVersions, "f"), ["legacy"]))
    return Transaction.from(serializedTransaction);
  return transaction;
};

// node_modules/@solana/wallet-standard-wallet-adapter-react/lib/esm/useStandardWalletAdapters.js
var import_react6 = __toESM(require_react(), 1);
function useStandardWalletAdapters(adapters) {
  const warnings = useConstant(() => /* @__PURE__ */ new Set());
  const { get: get2, on: on2 } = useConstant(() => DEPRECATED_getWallets());
  const [standardAdapters, setStandardAdapters] = (0, import_react6.useState)(() => wrapWalletsWithAdapters(get2()));
  (0, import_react6.useEffect)(() => {
    const listeners2 = [
      on2("register", (...wallets2) => setStandardAdapters((standardAdapters2) => [...standardAdapters2, ...wrapWalletsWithAdapters(wallets2)])),
      on2("unregister", (...wallets2) => setStandardAdapters((standardAdapters2) => standardAdapters2.filter((standardAdapter) => wallets2.some((wallet) => wallet === standardAdapter.wallet))))
    ];
    return () => listeners2.forEach((off) => off());
  }, [on2]);
  const prevStandardAdapters = usePrevious(standardAdapters);
  (0, import_react6.useEffect)(() => {
    if (!prevStandardAdapters)
      return;
    const currentAdapters = new Set(standardAdapters);
    const removedAdapters = new Set(prevStandardAdapters.filter((previousAdapter) => !currentAdapters.has(previousAdapter)));
    removedAdapters.forEach((adapter) => adapter.destroy());
  }, [prevStandardAdapters, standardAdapters]);
  (0, import_react6.useEffect)(() => () => standardAdapters.forEach((adapter) => adapter.destroy()), []);
  return (0, import_react6.useMemo)(() => [
    ...standardAdapters,
    ...adapters.filter(({ name }) => {
      if (standardAdapters.some((standardAdapter) => standardAdapter.name === name)) {
        if (!warnings.has(name)) {
          warnings.add(name);
          console.warn(`${name} was registered as a Standard Wallet. The Wallet Adapter for ${name} can be removed from your app.`);
        }
        return false;
      }
      return true;
    })
  ], [standardAdapters, adapters, warnings]);
}
function useConstant(fn) {
  const ref = (0, import_react6.useRef)();
  if (!ref.current) {
    ref.current = { value: fn() };
  }
  return ref.current.value;
}
function usePrevious(state) {
  const ref = (0, import_react6.useRef)();
  (0, import_react6.useEffect)(() => {
    ref.current = state;
  });
  return ref.current;
}
function wrapWalletsWithAdapters(wallets2) {
  return wallets2.filter(isWalletAdapterCompatibleWallet).map((wallet) => new StandardWalletAdapter({ wallet }));
}

// node_modules/@solana/wallet-adapter-react/lib/esm/WalletProvider.js
var import_react8 = __toESM(require_react(), 1);

// node_modules/@solana/wallet-adapter-react/lib/esm/getEnvironment.js
var Environment;
(function(Environment2) {
  Environment2[Environment2["DESKTOP_WEB"] = 0] = "DESKTOP_WEB";
  Environment2[Environment2["MOBILE_WEB"] = 1] = "MOBILE_WEB";
})(Environment || (Environment = {}));
function isWebView(userAgentString) {
  return /(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(userAgentString);
}
function getEnvironment({ adapters, userAgentString }) {
  if (adapters.some((adapter) => adapter.name !== SolanaMobileWalletAdapterWalletName && adapter.readyState === WalletReadyState.Installed)) {
    return Environment.DESKTOP_WEB;
  }
  if (userAgentString && // Step 1: Check whether we're on a platform that supports MWA at all.
  /android/i.test(userAgentString) && // Step 2: Determine that we are *not* running in a WebView.
  !isWebView(userAgentString)) {
    return Environment.MOBILE_WEB;
  } else {
    return Environment.DESKTOP_WEB;
  }
}

// node_modules/@solana/wallet-adapter-react/lib/esm/getInferredClusterFromEndpoint.js
function getInferredClusterFromEndpoint(endpoint) {
  if (!endpoint) {
    return "mainnet-beta";
  }
  if (/devnet/i.test(endpoint)) {
    return "devnet";
  } else if (/testnet/i.test(endpoint)) {
    return "testnet";
  } else {
    return "mainnet-beta";
  }
}

// node_modules/@solana/wallet-adapter-react/lib/esm/WalletProviderBase.js
var import_react7 = __toESM(require_react(), 1);
function WalletProviderBase({ children, wallets: adapters, adapter, isUnloadingRef, onAutoConnectRequest, onConnectError, onError, onSelectWallet }) {
  const isConnectingRef = (0, import_react7.useRef)(false);
  const [connecting, setConnecting] = (0, import_react7.useState)(false);
  const isDisconnectingRef = (0, import_react7.useRef)(false);
  const [disconnecting, setDisconnecting] = (0, import_react7.useState)(false);
  const [publicKey, setPublicKey] = (0, import_react7.useState)(() => (adapter == null ? void 0 : adapter.publicKey) ?? null);
  const [connected, setConnected] = (0, import_react7.useState)(() => (adapter == null ? void 0 : adapter.connected) ?? false);
  const onErrorRef = (0, import_react7.useRef)(onError);
  (0, import_react7.useEffect)(() => {
    onErrorRef.current = onError;
    return () => {
      onErrorRef.current = void 0;
    };
  }, [onError]);
  const handleErrorRef = (0, import_react7.useRef)((error, adapter2) => {
    if (!isUnloadingRef.current) {
      if (onErrorRef.current) {
        onErrorRef.current(error, adapter2);
      } else {
        console.error(error, adapter2);
        if (error instanceof WalletNotReadyError && typeof window !== "undefined" && adapter2) {
          window.open(adapter2.url, "_blank");
        }
      }
    }
    return error;
  });
  const [wallets2, setWallets] = (0, import_react7.useState)(() => adapters.map((adapter2) => ({
    adapter: adapter2,
    readyState: adapter2.readyState
  })).filter(({ readyState }) => readyState !== WalletReadyState.Unsupported));
  (0, import_react7.useEffect)(() => {
    setWallets((wallets3) => adapters.map((adapter2, index) => {
      const wallet2 = wallets3[index];
      return wallet2 && wallet2.adapter === adapter2 && wallet2.readyState === adapter2.readyState ? wallet2 : {
        adapter: adapter2,
        readyState: adapter2.readyState
      };
    }).filter(({ readyState }) => readyState !== WalletReadyState.Unsupported));
    function handleReadyStateChange(readyState) {
      setWallets((prevWallets) => {
        const index = prevWallets.findIndex(({ adapter: adapter3 }) => adapter3 === this);
        if (index === -1)
          return prevWallets;
        const { adapter: adapter2 } = prevWallets[index];
        return [
          ...prevWallets.slice(0, index),
          { adapter: adapter2, readyState },
          ...prevWallets.slice(index + 1)
        ].filter(({ readyState: readyState2 }) => readyState2 !== WalletReadyState.Unsupported);
      });
    }
    adapters.forEach((adapter2) => adapter2.on("readyStateChange", handleReadyStateChange, adapter2));
    return () => {
      adapters.forEach((adapter2) => adapter2.off("readyStateChange", handleReadyStateChange, adapter2));
    };
  }, [adapter, adapters]);
  const wallet = (0, import_react7.useMemo)(() => wallets2.find((wallet2) => wallet2.adapter === adapter) ?? null, [adapter, wallets2]);
  (0, import_react7.useEffect)(() => {
    if (!adapter)
      return;
    const handleConnect2 = (publicKey2) => {
      setPublicKey(publicKey2);
      isConnectingRef.current = false;
      setConnecting(false);
      setConnected(true);
      isDisconnectingRef.current = false;
      setDisconnecting(false);
    };
    const handleDisconnect2 = () => {
      if (isUnloadingRef.current)
        return;
      setPublicKey(null);
      isConnectingRef.current = false;
      setConnecting(false);
      setConnected(false);
      isDisconnectingRef.current = false;
      setDisconnecting(false);
    };
    const handleError = (error) => {
      handleErrorRef.current(error, adapter);
    };
    adapter.on("connect", handleConnect2);
    adapter.on("disconnect", handleDisconnect2);
    adapter.on("error", handleError);
    return () => {
      adapter.off("connect", handleConnect2);
      adapter.off("disconnect", handleDisconnect2);
      adapter.off("error", handleError);
      handleDisconnect2();
    };
  }, [adapter, isUnloadingRef]);
  const didAttemptAutoConnectRef = (0, import_react7.useRef)(false);
  (0, import_react7.useEffect)(() => {
    return () => {
      didAttemptAutoConnectRef.current = false;
    };
  }, [adapter]);
  (0, import_react7.useEffect)(() => {
    if (didAttemptAutoConnectRef.current || isConnectingRef.current || connected || !onAutoConnectRequest || !((wallet == null ? void 0 : wallet.readyState) === WalletReadyState.Installed || (wallet == null ? void 0 : wallet.readyState) === WalletReadyState.Loadable))
      return;
    isConnectingRef.current = true;
    setConnecting(true);
    didAttemptAutoConnectRef.current = true;
    (async function() {
      try {
        await onAutoConnectRequest();
      } catch {
        onConnectError();
      } finally {
        setConnecting(false);
        isConnectingRef.current = false;
      }
    })();
  }, [connected, onAutoConnectRequest, onConnectError, wallet]);
  const sendTransaction = (0, import_react7.useCallback)(async (transaction, connection, options) => {
    if (!adapter)
      throw handleErrorRef.current(new WalletNotSelectedError());
    if (!connected)
      throw handleErrorRef.current(new WalletNotConnectedError(), adapter);
    return await adapter.sendTransaction(transaction, connection, options);
  }, [adapter, connected]);
  const signTransaction = (0, import_react7.useMemo)(() => adapter && "signTransaction" in adapter ? async (transaction) => {
    if (!connected)
      throw handleErrorRef.current(new WalletNotConnectedError(), adapter);
    return await adapter.signTransaction(transaction);
  } : void 0, [adapter, connected]);
  const signAllTransactions = (0, import_react7.useMemo)(() => adapter && "signAllTransactions" in adapter ? async (transactions) => {
    if (!connected)
      throw handleErrorRef.current(new WalletNotConnectedError(), adapter);
    return await adapter.signAllTransactions(transactions);
  } : void 0, [adapter, connected]);
  const signMessage = (0, import_react7.useMemo)(() => adapter && "signMessage" in adapter ? async (message) => {
    if (!connected)
      throw handleErrorRef.current(new WalletNotConnectedError(), adapter);
    return await adapter.signMessage(message);
  } : void 0, [adapter, connected]);
  const signIn = (0, import_react7.useMemo)(() => adapter && "signIn" in adapter ? async (input) => {
    return await adapter.signIn(input);
  } : void 0, [adapter]);
  const handleConnect = (0, import_react7.useCallback)(async () => {
    if (isConnectingRef.current || isDisconnectingRef.current || (wallet == null ? void 0 : wallet.adapter.connected))
      return;
    if (!wallet)
      throw handleErrorRef.current(new WalletNotSelectedError());
    const { adapter: adapter2, readyState } = wallet;
    if (!(readyState === WalletReadyState.Installed || readyState === WalletReadyState.Loadable))
      throw handleErrorRef.current(new WalletNotReadyError(), adapter2);
    isConnectingRef.current = true;
    setConnecting(true);
    try {
      await adapter2.connect();
    } catch (e) {
      onConnectError();
      throw e;
    } finally {
      setConnecting(false);
      isConnectingRef.current = false;
    }
  }, [onConnectError, wallet]);
  const handleDisconnect = (0, import_react7.useCallback)(async () => {
    if (isDisconnectingRef.current)
      return;
    if (!adapter)
      return;
    isDisconnectingRef.current = true;
    setDisconnecting(true);
    try {
      await adapter.disconnect();
    } finally {
      setDisconnecting(false);
      isDisconnectingRef.current = false;
    }
  }, [adapter]);
  return import_react7.default.createElement(WalletContext.Provider, { value: {
    autoConnect: !!onAutoConnectRequest,
    wallets: wallets2,
    wallet,
    publicKey,
    connected,
    connecting,
    disconnecting,
    select: onSelectWallet,
    connect: handleConnect,
    disconnect: handleDisconnect,
    sendTransaction,
    signTransaction,
    signAllTransactions,
    signMessage,
    signIn
  } }, children);
}

// node_modules/@solana/wallet-adapter-react/lib/esm/WalletProvider.js
var _userAgent;
function getUserAgent() {
  var _a;
  if (_userAgent === void 0) {
    _userAgent = ((_a = globalThis.navigator) == null ? void 0 : _a.userAgent) ?? null;
  }
  return _userAgent;
}
function getIsMobile(adapters) {
  const userAgentString = getUserAgent();
  return getEnvironment({ adapters, userAgentString }) === Environment.MOBILE_WEB;
}
function getUriForAppIdentity() {
  const location = globalThis.location;
  if (!location)
    return;
  return `${location.protocol}//${location.host}`;
}
function WalletProvider({ children, wallets: adapters, autoConnect, localStorageKey = "walletName", onError }) {
  const { connection } = useConnection();
  const adaptersWithStandardAdapters = useStandardWalletAdapters(adapters);
  const mobileWalletAdapter = (0, import_react8.useMemo)(() => {
    if (!getIsMobile(adaptersWithStandardAdapters)) {
      return null;
    }
    const existingMobileWalletAdapter = adaptersWithStandardAdapters.find((adapter2) => adapter2.name === SolanaMobileWalletAdapterWalletName);
    if (existingMobileWalletAdapter) {
      return existingMobileWalletAdapter;
    }
    return new SolanaMobileWalletAdapter({
      addressSelector: createDefaultAddressSelector(),
      appIdentity: {
        uri: getUriForAppIdentity()
      },
      authorizationResultCache: createDefaultAuthorizationResultCache(),
      cluster: getInferredClusterFromEndpoint(connection == null ? void 0 : connection.rpcEndpoint),
      onWalletNotFound: createDefaultWalletNotFoundHandler()
    });
  }, [adaptersWithStandardAdapters, connection == null ? void 0 : connection.rpcEndpoint]);
  const adaptersWithMobileWalletAdapter = (0, import_react8.useMemo)(() => {
    if (mobileWalletAdapter == null || adaptersWithStandardAdapters.indexOf(mobileWalletAdapter) !== -1) {
      return adaptersWithStandardAdapters;
    }
    return [mobileWalletAdapter, ...adaptersWithStandardAdapters];
  }, [adaptersWithStandardAdapters, mobileWalletAdapter]);
  const [walletName, setWalletName] = useLocalStorage(localStorageKey, getIsMobile(adaptersWithStandardAdapters) ? SolanaMobileWalletAdapterWalletName : null);
  const adapter = (0, import_react8.useMemo)(() => adaptersWithMobileWalletAdapter.find((a) => a.name === walletName) ?? null, [adaptersWithMobileWalletAdapter, walletName]);
  const changeWallet = (0, import_react8.useCallback)((nextWalletName) => {
    if (walletName === nextWalletName)
      return;
    if (adapter && // Selecting a wallet other than the mobile wallet adapter is not
    // sufficient reason to call `disconnect` on the mobile wallet adapter.
    // Calling `disconnect` on the mobile wallet adapter causes the entire
    // authorization store to be wiped.
    adapter.name !== SolanaMobileWalletAdapterWalletName) {
      adapter.disconnect();
    }
    setWalletName(nextWalletName);
  }, [adapter, setWalletName, walletName]);
  (0, import_react8.useEffect)(() => {
    if (!adapter)
      return;
    function handleDisconnect() {
      if (isUnloadingRef.current)
        return;
      if (walletName === SolanaMobileWalletAdapterWalletName && getIsMobile(adaptersWithStandardAdapters))
        return;
      setWalletName(null);
    }
    adapter.on("disconnect", handleDisconnect);
    return () => {
      adapter.off("disconnect", handleDisconnect);
    };
  }, [adapter, adaptersWithStandardAdapters, setWalletName, walletName]);
  const hasUserSelectedAWallet = (0, import_react8.useRef)(false);
  const handleAutoConnectRequest = (0, import_react8.useMemo)(() => {
    if (!autoConnect || !adapter)
      return;
    return async () => {
      if (autoConnect === true || await autoConnect(adapter)) {
        if (hasUserSelectedAWallet.current) {
          await adapter.connect();
        } else {
          await adapter.autoConnect();
        }
      }
    };
  }, [autoConnect, adapter]);
  const isUnloadingRef = (0, import_react8.useRef)(false);
  (0, import_react8.useEffect)(() => {
    if (walletName === SolanaMobileWalletAdapterWalletName && getIsMobile(adaptersWithStandardAdapters)) {
      isUnloadingRef.current = false;
      return;
    }
    function handleBeforeUnload() {
      isUnloadingRef.current = true;
    }
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [adaptersWithStandardAdapters, walletName]);
  const handleConnectError = (0, import_react8.useCallback)(() => {
    if (adapter && adapter.name !== SolanaMobileWalletAdapterWalletName) {
      changeWallet(null);
    }
  }, [adapter, changeWallet]);
  const selectWallet = (0, import_react8.useCallback)((walletName2) => {
    hasUserSelectedAWallet.current = true;
    changeWallet(walletName2);
  }, [changeWallet]);
  return import_react8.default.createElement(WalletProviderBase, { wallets: adaptersWithMobileWalletAdapter, adapter, isUnloadingRef, onAutoConnectRequest: handleAutoConnectRequest, onConnectError: handleConnectError, onError, onSelectWallet: selectWallet }, children);
}

export {
  ConnectionContext,
  useConnection,
  ConnectionProvider,
  WalletNotSelectedError,
  WalletContext,
  useWallet,
  useAnchorWallet,
  useLocalStorage,
  WalletProvider
};
//# sourceMappingURL=chunk-BTNCDITT.js.map
