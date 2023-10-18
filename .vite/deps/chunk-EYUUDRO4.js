import {
  init_ed25519
} from "./chunk-NXBQG7JS.js";

// node_modules/@solana/wallet-standard-util/lib/esm/signMessage.js
init_ed25519();

// node_modules/@solana/wallet-standard-util/lib/esm/signIn.js
var DOMAIN = "(?<domain>[^\\n]+?) wants you to sign in with your Solana account:\\n";
var ADDRESS = "(?<address>[^\\n]+)(?:\\n|$)";
var STATEMENT = "(?:\\n(?<statement>[\\S\\s]*?)(?:\\n|$))??";
var URI = "(?:\\nURI: (?<uri>[^\\n]+))?";
var VERSION = "(?:\\nVersion: (?<version>[^\\n]+))?";
var CHAIN_ID = "(?:\\nChain ID: (?<chainId>[^\\n]+))?";
var NONCE = "(?:\\nNonce: (?<nonce>[^\\n]+))?";
var ISSUED_AT = "(?:\\nIssued At: (?<issuedAt>[^\\n]+))?";
var EXPIRATION_TIME = "(?:\\nExpiration Time: (?<expirationTime>[^\\n]+))?";
var NOT_BEFORE = "(?:\\nNot Before: (?<notBefore>[^\\n]+))?";
var REQUEST_ID = "(?:\\nRequest ID: (?<requestId>[^\\n]+))?";
var RESOURCES = "(?:\\nResources:(?<resources>(?:\\n- [^\\n]+)*))?";
var FIELDS = `${URI}${VERSION}${CHAIN_ID}${NONCE}${ISSUED_AT}${EXPIRATION_TIME}${NOT_BEFORE}${REQUEST_ID}${RESOURCES}`;
var MESSAGE = new RegExp(`^${DOMAIN}${ADDRESS}${STATEMENT}${FIELDS}\\n*$`);
function createSignInMessage(input) {
  const text = createSignInMessageText(input);
  return new TextEncoder().encode(text);
}
function createSignInMessageText(input) {
  let message = `${input.domain} wants you to sign in with your Solana account:
`;
  message += `${input.address}`;
  if (input.statement) {
    message += `

${input.statement}`;
  }
  const fields = [];
  if (input.uri) {
    fields.push(`URI: ${input.uri}`);
  }
  if (input.version) {
    fields.push(`Version: ${input.version}`);
  }
  if (input.chainId) {
    fields.push(`Chain ID: ${input.chainId}`);
  }
  if (input.nonce) {
    fields.push(`Nonce: ${input.nonce}`);
  }
  if (input.issuedAt) {
    fields.push(`Issued At: ${input.issuedAt}`);
  }
  if (input.expirationTime) {
    fields.push(`Expiration Time: ${input.expirationTime}`);
  }
  if (input.notBefore) {
    fields.push(`Not Before: ${input.notBefore}`);
  }
  if (input.requestId) {
    fields.push(`Request ID: ${input.requestId}`);
  }
  if (input.resources) {
    fields.push(`Resources:`);
    for (const resource of input.resources) {
      fields.push(`- ${resource}`);
    }
  }
  if (fields.length) {
    message += `

${fields.join("\n")}`;
  }
  return message;
}

// node_modules/@solana/wallet-standard-util/lib/esm/commitment.js
function getCommitment(commitment) {
  switch (commitment) {
    case "processed":
    case "confirmed":
    case "finalized":
    case void 0:
      return commitment;
    case "recent":
      return "processed";
    case "single":
    case "singleGossip":
      return "confirmed";
    case "max":
    case "root":
      return "finalized";
    default:
      return void 0;
  }
}

// node_modules/@solana/wallet-standard-chains/lib/esm/index.js
var SOLANA_MAINNET_CHAIN = "solana:mainnet";
var SOLANA_DEVNET_CHAIN = "solana:devnet";
var SOLANA_TESTNET_CHAIN = "solana:testnet";
var SOLANA_LOCALNET_CHAIN = "solana:localnet";

// node_modules/@solana/wallet-standard-util/lib/esm/endpoint.js
var MAINNET_ENDPOINT = "https://api.mainnet-beta.solana.com";
function getChainForEndpoint(endpoint) {
  if (endpoint.includes(MAINNET_ENDPOINT))
    return SOLANA_MAINNET_CHAIN;
  if (/\bdevnet\b/i.test(endpoint))
    return SOLANA_DEVNET_CHAIN;
  if (/\btestnet\b/i.test(endpoint))
    return SOLANA_TESTNET_CHAIN;
  if (/\blocalhost\b/i.test(endpoint) || /\b127\.0\.0\.1\b/.test(endpoint))
    return SOLANA_LOCALNET_CHAIN;
  return SOLANA_MAINNET_CHAIN;
}

// node_modules/@wallet-standard/wallet/lib/esm/register.js
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
var _RegisterWalletEvent_detail;
function registerWallet(wallet) {
  const callback = ({ register }) => register(wallet);
  try {
    window.dispatchEvent(new RegisterWalletEvent(callback));
  } catch (error) {
    console.error("wallet-standard:register-wallet event could not be dispatched\n", error);
  }
  try {
    window.addEventListener("wallet-standard:app-ready", ({ detail: api }) => callback(api));
  } catch (error) {
    console.error("wallet-standard:app-ready event listener could not be added\n", error);
  }
}
var RegisterWalletEvent = class extends Event {
  constructor(callback) {
    super("wallet-standard:register-wallet", {
      bubbles: false,
      cancelable: false,
      composed: false
    });
    _RegisterWalletEvent_detail.set(this, void 0);
    __classPrivateFieldSet(this, _RegisterWalletEvent_detail, callback, "f");
  }
  get detail() {
    return __classPrivateFieldGet(this, _RegisterWalletEvent_detail, "f");
  }
  get type() {
    return "wallet-standard:register-wallet";
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
_RegisterWalletEvent_detail = /* @__PURE__ */ new WeakMap();

// node_modules/@wallet-standard/wallet/lib/esm/util.js
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
var _ReadonlyWalletAccount_address;
var _ReadonlyWalletAccount_publicKey;
var _ReadonlyWalletAccount_chains;
var _ReadonlyWalletAccount_features;
var _ReadonlyWalletAccount_label;
var _ReadonlyWalletAccount_icon;
var ReadonlyWalletAccount = class _ReadonlyWalletAccount {
  /**
   * Create and freeze a read-only account.
   *
   * @param account Account to copy properties from.
   */
  constructor(account) {
    _ReadonlyWalletAccount_address.set(this, void 0);
    _ReadonlyWalletAccount_publicKey.set(this, void 0);
    _ReadonlyWalletAccount_chains.set(this, void 0);
    _ReadonlyWalletAccount_features.set(this, void 0);
    _ReadonlyWalletAccount_label.set(this, void 0);
    _ReadonlyWalletAccount_icon.set(this, void 0);
    if (new.target === _ReadonlyWalletAccount) {
      Object.freeze(this);
    }
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_address, account.address, "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_publicKey, account.publicKey.slice(), "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_chains, account.chains.slice(), "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_features, account.features.slice(), "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_label, account.label, "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_icon, account.icon, "f");
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.address | WalletAccount::address} */
  get address() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_address, "f");
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.publicKey | WalletAccount::publicKey} */
  get publicKey() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_publicKey, "f").slice();
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.chains | WalletAccount::chains} */
  get chains() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_chains, "f").slice();
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.features | WalletAccount::features} */
  get features() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_features, "f").slice();
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.label | WalletAccount::label} */
  get label() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_label, "f");
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.icon | WalletAccount::icon} */
  get icon() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_icon, "f");
  }
};
_ReadonlyWalletAccount_address = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_publicKey = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_chains = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_features = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_label = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_icon = /* @__PURE__ */ new WeakMap();
function arraysEqual2(a, b) {
  if (a === b)
    return true;
  const length = a.length;
  if (length !== b.length)
    return false;
  for (let i = 0; i < length; i++) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
}
function bytesEqual2(a, b) {
  return arraysEqual2(a, b);
}

export {
  getCommitment,
  SOLANA_MAINNET_CHAIN,
  SOLANA_DEVNET_CHAIN,
  SOLANA_TESTNET_CHAIN,
  getChainForEndpoint,
  createSignInMessage,
  registerWallet,
  ReadonlyWalletAccount,
  arraysEqual2 as arraysEqual,
  bytesEqual2 as bytesEqual
};
//# sourceMappingURL=chunk-EYUUDRO4.js.map
