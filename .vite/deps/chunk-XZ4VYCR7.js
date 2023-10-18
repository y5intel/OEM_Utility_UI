import {
  SolanaSignAndSendTransaction,
  SolanaSignTransaction
} from "./chunk-VIV2VBE4.js";
import {
  require_eventemitter3
} from "./chunk-4WGNHZQ4.js";
import {
  __toESM
} from "./chunk-W7S2ME4R.js";

// node_modules/@solana/wallet-adapter-base/lib/esm/adapter.js
var import_eventemitter3 = __toESM(require_eventemitter3(), 1);

// node_modules/@solana/wallet-adapter-base/lib/esm/errors.js
var WalletError = class extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(message, error) {
    super(message);
    this.error = error;
  }
};
var WalletNotReadyError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletNotReadyError";
  }
};
var WalletLoadError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletLoadError";
  }
};
var WalletConfigError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletConfigError";
  }
};
var WalletConnectionError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletConnectionError";
  }
};
var WalletDisconnectedError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletDisconnectedError";
  }
};
var WalletDisconnectionError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletDisconnectionError";
  }
};
var WalletAccountError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletAccountError";
  }
};
var WalletPublicKeyError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletPublicKeyError";
  }
};
var WalletKeypairError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletKeypairError";
  }
};
var WalletNotConnectedError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletNotConnectedError";
  }
};
var WalletSendTransactionError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletSendTransactionError";
  }
};
var WalletSignTransactionError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletSignTransactionError";
  }
};
var WalletSignMessageError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletSignMessageError";
  }
};
var WalletSignInError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletSignInError";
  }
};
var WalletTimeoutError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletTimeoutError";
  }
};
var WalletWindowBlockedError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletWindowBlockedError";
  }
};
var WalletWindowClosedError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletWindowClosedError";
  }
};

// node_modules/@solana/wallet-adapter-base/lib/esm/adapter.js
var WalletReadyState;
(function(WalletReadyState2) {
  WalletReadyState2["Installed"] = "Installed";
  WalletReadyState2["NotDetected"] = "NotDetected";
  WalletReadyState2["Loadable"] = "Loadable";
  WalletReadyState2["Unsupported"] = "Unsupported";
})(WalletReadyState || (WalletReadyState = {}));
var BaseWalletAdapter = class extends import_eventemitter3.default {
  get connected() {
    return !!this.publicKey;
  }
  async autoConnect() {
    await this.connect();
  }
  async prepareTransaction(transaction, connection, options = {}) {
    const publicKey = this.publicKey;
    if (!publicKey)
      throw new WalletNotConnectedError();
    transaction.feePayer = transaction.feePayer || publicKey;
    transaction.recentBlockhash = transaction.recentBlockhash || (await connection.getLatestBlockhash({
      commitment: options.preflightCommitment,
      minContextSlot: options.minContextSlot
    })).blockhash;
    return transaction;
  }
};
function scopePollingDetectionStrategy(detect) {
  if (typeof window === "undefined" || typeof document === "undefined")
    return;
  const disposers = [];
  function detectAndDispose() {
    const detected = detect();
    if (detected) {
      for (const dispose of disposers) {
        dispose();
      }
    }
  }
  const interval = (
    // TODO: #334 Replace with idle callback strategy.
    setInterval(detectAndDispose, 1e3)
  );
  disposers.push(() => clearInterval(interval));
  if (
    // Implies that `DOMContentLoaded` has not yet fired.
    document.readyState === "loading"
  ) {
    document.addEventListener("DOMContentLoaded", detectAndDispose, { once: true });
    disposers.push(() => document.removeEventListener("DOMContentLoaded", detectAndDispose));
  }
  if (
    // If the `complete` state has been reached, we're too late.
    document.readyState !== "complete"
  ) {
    window.addEventListener("load", detectAndDispose, { once: true });
    disposers.push(() => window.removeEventListener("load", detectAndDispose));
  }
  detectAndDispose();
}
function isIosAndRedirectable() {
  if (!navigator)
    return false;
  const userAgent = navigator.userAgent.toLowerCase();
  const isIos = userAgent.includes("iphone") || userAgent.includes("ipad");
  const isSafari = userAgent.includes("safari");
  return isIos && isSafari;
}

// node_modules/@solana/wallet-adapter-base/lib/esm/transaction.js
function isVersionedTransaction(transaction) {
  return "version" in transaction;
}

// node_modules/@solana/wallet-adapter-base/lib/esm/signer.js
var BaseSignerWalletAdapter = class extends BaseWalletAdapter {
  async sendTransaction(transaction, connection, options = {}) {
    let emit = true;
    try {
      if (isVersionedTransaction(transaction)) {
        if (!this.supportedTransactionVersions)
          throw new WalletSendTransactionError(`Sending versioned transactions isn't supported by this wallet`);
        if (!this.supportedTransactionVersions.has(transaction.version))
          throw new WalletSendTransactionError(`Sending transaction version ${transaction.version} isn't supported by this wallet`);
        try {
          transaction = await this.signTransaction(transaction);
          const rawTransaction = transaction.serialize();
          return await connection.sendRawTransaction(rawTransaction, options);
        } catch (error) {
          if (error instanceof WalletSignTransactionError) {
            emit = false;
            throw error;
          }
          throw new WalletSendTransactionError(error == null ? void 0 : error.message, error);
        }
      } else {
        try {
          const { signers, ...sendOptions } = options;
          transaction = await this.prepareTransaction(transaction, connection, sendOptions);
          (signers == null ? void 0 : signers.length) && transaction.partialSign(...signers);
          transaction = await this.signTransaction(transaction);
          const rawTransaction = transaction.serialize();
          return await connection.sendRawTransaction(rawTransaction, sendOptions);
        } catch (error) {
          if (error instanceof WalletSignTransactionError) {
            emit = false;
            throw error;
          }
          throw new WalletSendTransactionError(error == null ? void 0 : error.message, error);
        }
      }
    } catch (error) {
      if (emit) {
        this.emit("error", error);
      }
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    for (const transaction of transactions) {
      if (isVersionedTransaction(transaction)) {
        if (!this.supportedTransactionVersions)
          throw new WalletSignTransactionError(`Signing versioned transactions isn't supported by this wallet`);
        if (!this.supportedTransactionVersions.has(transaction.version))
          throw new WalletSignTransactionError(`Signing transaction version ${transaction.version} isn't supported by this wallet`);
      }
    }
    const signedTransactions = [];
    for (const transaction of transactions) {
      signedTransactions.push(await this.signTransaction(transaction));
    }
    return signedTransactions;
  }
};
var BaseMessageSignerWalletAdapter = class extends BaseSignerWalletAdapter {
};
var BaseSignInMessageSignerWalletAdapter = class extends BaseMessageSignerWalletAdapter {
};

// node_modules/@wallet-standard/features/lib/esm/connect.js
var StandardConnect = "standard:connect";

// node_modules/@wallet-standard/features/lib/esm/disconnect.js
var StandardDisconnect = "standard:disconnect";

// node_modules/@wallet-standard/features/lib/esm/events.js
var StandardEvents = "standard:events";

// node_modules/@solana/wallet-adapter-base/lib/esm/standard.js
function isWalletAdapterCompatibleStandardWallet(wallet) {
  return StandardConnect in wallet.features && StandardEvents in wallet.features && (SolanaSignAndSendTransaction in wallet.features || SolanaSignTransaction in wallet.features);
}

// node_modules/@solana/wallet-adapter-base/lib/esm/types.js
var WalletAdapterNetwork;
(function(WalletAdapterNetwork2) {
  WalletAdapterNetwork2["Mainnet"] = "mainnet-beta";
  WalletAdapterNetwork2["Testnet"] = "testnet";
  WalletAdapterNetwork2["Devnet"] = "devnet";
})(WalletAdapterNetwork || (WalletAdapterNetwork = {}));

export {
  WalletError,
  WalletNotReadyError,
  WalletLoadError,
  WalletConfigError,
  WalletConnectionError,
  WalletDisconnectedError,
  WalletDisconnectionError,
  WalletAccountError,
  WalletPublicKeyError,
  WalletKeypairError,
  WalletNotConnectedError,
  WalletSendTransactionError,
  WalletSignTransactionError,
  WalletSignMessageError,
  WalletSignInError,
  WalletTimeoutError,
  WalletWindowBlockedError,
  WalletWindowClosedError,
  import_eventemitter3,
  WalletReadyState,
  BaseWalletAdapter,
  scopePollingDetectionStrategy,
  isIosAndRedirectable,
  isVersionedTransaction,
  BaseSignerWalletAdapter,
  BaseMessageSignerWalletAdapter,
  BaseSignInMessageSignerWalletAdapter,
  StandardConnect,
  StandardDisconnect,
  StandardEvents,
  isWalletAdapterCompatibleStandardWallet,
  WalletAdapterNetwork
};
//# sourceMappingURL=chunk-XZ4VYCR7.js.map
