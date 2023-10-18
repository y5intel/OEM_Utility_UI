import {
  Message,
  PublicKey,
  SIGNATURE_LENGTH_IN_BYTES,
  Transaction,
  init_esm_browser,
  init_index_browser_esm,
  require_bs58,
  v4_default
} from "./chunk-NXBQG7JS.js";
import {
  require_eventemitter3
} from "./chunk-4WGNHZQ4.js";
import {
  __toESM
} from "./chunk-W7S2ME4R.js";

// node_modules/@censo-custody/solana-wallet-adapter/lib/esm/censocustody.js
init_index_browser_esm();
var import_bs58 = __toESM(require_bs58(), 1);
init_esm_browser();
var import_eventemitter3 = __toESM(require_eventemitter3(), 1);
var DEFAULT_SIGNATURE_BUFFER = Buffer.alloc(SIGNATURE_LENGTH_IN_BYTES).fill(0);
var CensoWallet = class extends import_eventemitter3.EventEmitter {
  constructor() {
    super();
    this.url = "https://wallet.censocustody.com";
    this.cleanUp = () => {
      [...this._timers].forEach((t) => this.clearTimer(t));
      const wallet = this._wallet;
      if (wallet) {
        wallet.close();
      }
      this._wallet = null;
      this.emit("disconnected");
    };
    this.clearTimer = (timer) => {
      this._timers = this._timers.filter((t) => t != timer);
      window.clearInterval(timer);
    };
    this.instructionsToSerializableInstructions = (instructions) => instructions.map((i) => {
      return {
        "programId": i.programId.toBase58(),
        "accountMetas": i.keys.map((k) => {
          return {
            address: k.pubkey.toBase58(),
            signer: k.isSigner,
            writable: k.isWritable
          };
        }),
        "data": window.btoa(String.fromCharCode(...i.data))
      };
    });
    this.handleWalletMessage = (data) => {
      var _a, _b, _c;
      if (data.type == "connected") {
        this._connecting = false;
        if (!data.error) {
          this.isLoggedIn = true;
          if ((_a = data.connected) === null || _a === void 0 ? void 0 : _a.publicKey) {
            this._publicKey = new PublicKey(data.connected.publicKey);
          }
        }
      } else if (["sendTransaction", "sendFinalTransaction"].includes(data.type)) {
        const transactionIdentifier = (_b = data.sendTransaction) === null || _b === void 0 ? void 0 : _b.identifier;
        if (transactionIdentifier && transactionIdentifier in this._pendingTransactions) {
          if (data.error) {
            this._pendingTransactionErrors[transactionIdentifier] = { message: data.error };
          } else {
            this._pendingTransactions[transactionIdentifier] = data.sendTransaction || null;
          }
        }
      } else if (data.type == "signTransaction") {
        const transactionIdentifier = (_c = data.signTransaction) === null || _c === void 0 ? void 0 : _c.identifier;
        if (transactionIdentifier && transactionIdentifier in this._pendingTransactions) {
          if (data.error) {
            this._pendingTransactionErrors[transactionIdentifier] = { message: data.error };
          } else {
            this._pendingTransactions[transactionIdentifier] = data.signTransaction || null;
          }
        }
      }
    };
    this.isLoggedIn = false;
    this._pendingTransactions = {};
    this._pendingTransactionErrors = {};
    this._timers = [];
    this._wallet = null;
    this._connecting = false;
    this._publicKey = null;
    window.addEventListener("message", (e) => {
      this.handleWalletMessage(e.data);
    });
  }
  async connect(url) {
    try {
      this.url = url || this.url;
      const origin = encodeURIComponent(window.location.origin);
      const connectUrl = `${this.url}/connect?origin=${origin}`;
      this._connecting = true;
      this._wallet = window.open(connectUrl, `censo-custody-${origin}`, "height=900,width=800,menubar=no,status=no,toolbar=no");
      if (!this._wallet) {
        this._connecting = false;
        throw new Error("Unable to connect to wallet");
      }
      this._timers.push(window.setInterval(() => {
        if (this._wallet.closed) {
          this.cleanUp();
        } else if (this._wallet) {
          this._wallet.postMessage({ type: "heartbeat" }, this.url);
        }
      }, 100));
      return new Promise((resolve, reject) => {
        const timer = window.setInterval(() => {
          if (this.isLoggedIn && this._publicKey) {
            this.clearTimer(timer);
            resolve(this._publicKey);
          } else if (!this.isLoggedIn && !this._connecting) {
            this.clearTimer(timer);
            reject(new Error("Unable to connect to Censo"));
          }
        }, 100);
        this._timers.push(timer);
      });
    } catch (error) {
      throw error;
    }
  }
  async signTransaction(transaction) {
    this.verifyCanSignRequests([transaction]);
    try {
      return this.signOneTransaction(transaction);
    } catch (error) {
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    this.verifyCanSignRequests(transactions);
    try {
      return this.signMultipleTransactions(transactions);
    } catch (error) {
      throw error;
    }
  }
  async sendTransaction(transaction, connection, options) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new Error("Not Connected");
      const transactionIdentifier = v4_default();
      this._pendingTransactions[transactionIdentifier] = null;
      const signers = options ? options.signers : void 0;
      if (signers && signers.length > 0) {
        return new Promise((resolve, reject) => {
          this.signOneTransaction(transaction, transactionIdentifier).then((walletTransaction) => {
            this._pendingTransactions[transactionIdentifier] = null;
            (signers === null || signers === void 0 ? void 0 : signers.length) && walletTransaction.partialSign(...signers);
            wallet.postMessage({
              type: "sendFinalTransaction",
              sendFinalTransaction: {
                transactionIdentifier,
                signaturePubkeyPairs: walletTransaction.signatures.filter((sp) => sp.signature != null).map((sp) => {
                  return {
                    "pubkey": sp.publicKey.toBase58(),
                    "signature": sp.signature.toString("base64")
                  };
                })
              }
            }, this.url);
            const timer = window.setInterval(() => {
              const pendingTransaction = this._pendingTransactions[transactionIdentifier];
              const pendingTransactionError = this._pendingTransactionErrors[transactionIdentifier];
              if (pendingTransaction != null || pendingTransactionError != null) {
                this.clearTimer(timer);
                pendingTransaction && resolve(pendingTransaction.signature);
                pendingTransactionError && reject(pendingTransactionError);
              }
            }, 100);
            this._timers.push(timer);
          }).catch((error) => {
            reject(error);
            throw error;
          });
        });
      } else {
        const instructions = this.instructionsToSerializableInstructions(transaction.instructions);
        return new Promise((resolve, reject) => {
          wallet.postMessage({
            type: "sendTransaction",
            sendTransaction: { instructions, transactionIdentifier }
          }, this.url);
          const timer = window.setInterval(() => {
            const pendingTransaction = this._pendingTransactions[transactionIdentifier];
            const pendingTransactionError = this._pendingTransactionErrors[transactionIdentifier];
            if (pendingTransaction != null || pendingTransactionError != null) {
              this.clearTimer(timer);
              pendingTransaction && resolve(pendingTransaction.signature);
              pendingTransactionError && reject(pendingTransactionError);
            }
          }, 100);
          this._timers.push(timer);
        });
      }
    } catch (error) {
      throw error;
    }
  }
  buildTransaction(pendingTransaction) {
    let message = Message.from(Buffer.from(Uint8Array.from(window.atob(pendingTransaction.message), (c) => c.charCodeAt(0))));
    return Transaction.populate(message, Array.from({ length: message.header.numRequiredSignatures }, (_v, i) => {
      let sigPubkeyPair = pendingTransaction.signatures.find((s) => s.pubkey == message.accountKeys[i].toBase58());
      return import_bs58.default.encode(sigPubkeyPair ? Buffer.from(Uint8Array.from(window.atob(sigPubkeyPair.signature), (c) => c.charCodeAt(0))) : DEFAULT_SIGNATURE_BUFFER);
    }));
  }
  verifyCanSignRequests(transactions) {
    transactions.forEach((transaction) => {
      if (transaction.signatures.some((s) => s.signature != null)) {
        throw new Error("Censo does not support this signing mode");
      }
    });
  }
  signOneTransaction(transaction, transactionIdentifier = v4_default()) {
    const wallet = this._wallet;
    if (!wallet)
      throw new Error("Not Connected");
    const instructions = this.instructionsToSerializableInstructions(transaction.instructions);
    this._pendingTransactions[transactionIdentifier] = null;
    return new Promise((resolve, reject) => {
      wallet.postMessage({ type: "signTransaction", signTransaction: { instructions, transactionIdentifier } }, this.url);
      const timer = window.setInterval(() => {
        const pendingTransaction = this._pendingTransactions[transactionIdentifier];
        const pendingTransactionError = this._pendingTransactionErrors[transactionIdentifier];
        if (pendingTransaction != null || pendingTransactionError != null) {
          this.clearTimer(timer);
          pendingTransaction && resolve(this.buildTransaction(pendingTransaction));
          pendingTransactionError && reject(pendingTransactionError);
        }
      }, 100);
      this._timers.push(timer);
    });
  }
  signMultipleTransactions(transactions) {
    const wallet = this._wallet;
    if (!wallet)
      throw new Error("Not Connected");
    const serializedTransactions = transactions.map((t) => {
      return {
        instructions: this.instructionsToSerializableInstructions(t.instructions),
        transactionIdentifier: v4_default()
      };
    });
    const transactionIdentifiers = serializedTransactions.map((t) => t.transactionIdentifier);
    transactionIdentifiers.forEach((transactionIdentifier) => this._pendingTransactions[transactionIdentifier] = null);
    return new Promise((resolve, reject) => {
      wallet.postMessage({ type: "signAllTransactions", signAllTransactions: { transactions: serializedTransactions } }, this.url);
      const timer = window.setInterval(() => {
        const pendingTransactions = transactionIdentifiers.map((txId) => this._pendingTransactions[txId]);
        const pendingTransactionErrors = transactionIdentifiers.map((txId) => this._pendingTransactionErrors[txId]);
        if (pendingTransactions.every((t) => t != null)) {
          this.clearTimer(timer);
          resolve(pendingTransactions.map((pt) => this.buildTransaction(pt)));
        } else if (pendingTransactionErrors.some((e) => e != null)) {
          this.clearTimer(timer);
          reject(pendingTransactionErrors.find((e) => e != null));
        }
      }, 100);
      this._timers.push(timer);
    });
  }
};
export {
  CensoWallet
};
//# sourceMappingURL=esm-HK2GKNHL.js.map