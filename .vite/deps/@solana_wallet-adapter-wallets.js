import {
  StatusCodes,
  TransportError,
  TransportRaceCondition,
  TransportStatusError,
  init_lib_es
} from "./chunk-Z7HOM2UX.js";
import {
  require_events
} from "./chunk-IN5HQNY7.js";
import {
  SOLANA_DEVNET_CHAIN,
  SOLANA_MAINNET_CHAIN,
  SOLANA_TESTNET_CHAIN,
  createSignInMessage,
  registerWallet
} from "./chunk-EYUUDRO4.js";
import {
  BaseMessageSignerWalletAdapter,
  BaseSignInMessageSignerWalletAdapter,
  BaseSignerWalletAdapter,
  StandardConnect,
  StandardDisconnect,
  StandardEvents,
  WalletAccountError,
  WalletAdapterNetwork,
  WalletConfigError,
  WalletConnectionError,
  WalletDisconnectedError,
  WalletDisconnectionError,
  WalletError,
  WalletLoadError,
  WalletNotConnectedError,
  WalletNotReadyError,
  WalletPublicKeyError,
  WalletReadyState,
  WalletSendTransactionError,
  WalletSignMessageError,
  WalletSignTransactionError,
  WalletWindowClosedError,
  isIosAndRedirectable,
  isVersionedTransaction,
  scopePollingDetectionStrategy
} from "./chunk-XZ4VYCR7.js";
import {
  SolanaSignAndSendTransaction,
  SolanaSignMessage,
  SolanaSignTransaction
} from "./chunk-VIV2VBE4.js";
import {
  Keypair,
  PublicKey,
  ed25519,
  init_ed25519,
  init_index_browser_esm,
  require_bs58,
  require_buffer
} from "./chunk-NXBQG7JS.js";
import "./chunk-4WGNHZQ4.js";
import {
  __toESM
} from "./chunk-W7S2ME4R.js";

// node_modules/@solana/wallet-adapter-alpha/lib/esm/adapter.js
init_index_browser_esm();
var AlphaWalletName = "Alpha";
var AlphaWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = AlphaWalletName;
    this.url = "https://github.com/alphabatem/alpha-wallet";
    this.icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxMDgwIDEwODAiPjxkZWZzPjxzdHlsZT4ua3tmaWxsOiNmZmY7fS5se2ZpbGw6dXJsKCNjKTt9Lm17aXNvbGF0aW9uOmlzb2xhdGU7fS5ue2ZpbGw6dXJsKCNqKTtvcGFjaXR5Oi42Nzt9Lm4sLm97bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHk7fS5ve2ZpbGw6dXJsKCNpKTtvcGFjaXR5Oi40MTt9LnB7ZmlsbDp1cmwoI2YpO30ucXtmaWxsOiMwMGNlN2M7fS5ye2ZpbGw6IzJhN2RlMTt9LnN7ZmlsbDp1cmwoI2cpO30udHtmaWxsOnVybCgjYik7fS51e2ZpbGw6dXJsKCNoKTt9LnZ7ZmlsbDp1cmwoI2QpO30ud3tmaWxsOnVybCgjZSk7fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iNjYzLjIyIiB5MT0iMTAuNTIyIiB4Mj0iMzIzLjIwMiIgeTI9IjM1OS4zNzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyNGNlN2IiLz48c3RvcCBvZmZzZXQ9Ii44MjgiIHN0b3AtY29sb3I9IiMyNTdjZTEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjMzNi4zNjgiIHkxPSItOTguMjg5IiB4Mj0iODQzLjk1OSIgeTI9IjI4MC41OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iLjQ3NiIgc3RvcC1jb2xvcj0iIzI0Y2U3YiIvPjxzdG9wIG9mZnNldD0iLjgyOCIgc3RvcC1jb2xvcj0iIzI1N2NlMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJkIiB4MT0iMTk2LjU2NCIgeTE9IjIzMS44OTQiIHgyPSI5MzIuODIyIiB5Mj0iMjMxLjg5NCIgeGxpbms6aHJlZj0iI2MiLz48bGluZWFyR3JhZGllbnQgaWQ9ImUiIHgxPSIyMTQuODczIiB5MT0iMjk5LjIwNyIgeDI9IjgwMy44OCIgeTI9IjI5OS4yMDciIHhsaW5rOmhyZWY9IiNjIi8+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4MT0iMjA2LjM4NiIgeTE9IjkzNi4yMDIiIHgyPSI3ODUuNjY0IiB5Mj0iNjMzLjA3IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuMzY3IiBzdG9wLWNvbG9yPSIjMjU3Y2UxIi8+PHN0b3Agb2Zmc2V0PSIuODUiIHN0b3AtY29sb3I9IiMyNGNlN2IiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjIwNC42MTEiIHkxPSI5NTcuMDQzIiB4Mj0iODEyLjQzNiIgeTI9IjYzOC45NzMiIHhsaW5rOmhyZWY9IiNjIi8+PGxpbmVhckdyYWRpZW50IGlkPSJoIiB4MT0iNTc0LjY4NCIgeTE9IjY3NS43MjMiIHgyPSI1NzkuMDU1IiB5Mj0iNjczLjQzNSIgeGxpbms6aHJlZj0iI2MiLz48bGluZWFyR3JhZGllbnQgaWQ9ImkiIHgxPSIxMDQyLjA3IiB5MT0iMTMwOC4zMyIgeDI9IjgzOC43NzciIHkyPSIxNzQ1LjYzIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC01NDAuMTUxIC02MzEuNDg1KSByb3RhdGUoLjM5KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJqIiB4MT0iMjEzOTcuNjU1IiB5MT0iMTE2MC4zOTIiIHgyPSIyMTE5MS4xNjMiIHkyPSIxNjA0LjU3MyIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyMTk3My43NjggLTYzMS40ODUpIHJvdGF0ZSgxNzkuNjEpIHNjYWxlKDEgLTEpIiB4bGluazpocmVmPSIjaSIvPjwvZGVmcz48ZyBjbGFzcz0ibSI+PGcgaWQ9ImEiPjxnPjxnPjxwYXRoIGNsYXNzPSJxIiBkPSJNNTY5LjYyMSw1NDAuMTMxYzQ3LjkzNiwxMDQuNTE0LDk1Ljg3MywyMDkuMDI4LDE0My44MDksMzEzLjU0M2wtMjAyLjcxOSwuMjU4YzE1LjExNCwzNC4xNzUsMzAuMjI5LDY4LjM1LDQ1LjM0MywxMDIuNTI0bDMxNS4zNzIsLjM5OWMtNjYuNDg4LTE0Ni40NTMtMTMyLjk3NS0yOTIuOTA2LTE5OS40NjMtNDM5LjM2LS4wMjEtNjUuOTI5LS4wNDMtMTMxLjg1Ny0uMDY0LTE5Ny43ODYtMzQuMTM2LDE0LjQ0NS02OC4yNzIsMjguODkxLTEwMi40MDgsNDMuMzM2LC4wNDMsNTkuMDI4LC4wODYsMTE4LjA1NywuMTI5LDE3Ny4wODVaIi8+PHBhdGggY2xhc3M9ImsiIGQ9Ik0zNTQuODc0LDg1My41NDVjNDIuMTMyLTEwNC44NTgsODQuMjY1LTIwOS43MTYsMTI2LjM5Ny0zMTQuNTc0LS4wODYtNTguNjQyLS4xNzItMTE3LjI4My0uMjU4LTE3NS45MjQtMzQuMTc5LTE0LjY4Mi02OC4zNTgtMjkuMzY0LTEwMi41MzctNDQuMDQ2LC40Myw2Ni4wNTgsLjg2LDEzMi4xMTUsMS4yOSwxOTguMTczbC0xNzkuNDA3LDQzOS42ODJjMTE4LjU3My0uMTI5LDIzNy4xNDUtLjI1OCwzNTUuNzE4LS4zODctMTUuMDQ3LTM0LjE3OS0zMC4wOTUtNjguMzU4LTQ1LjE0Mi0xMDIuNTM3LTUyLjAyMS0uMTI5LTEwNC4wNDEtLjI1OC0xNTYuMDYyLS4zODdaIi8+PGNpcmNsZSBjbGFzcz0idCIgY3g9IjUyMS40NTgiIGN5PSIxNTUuOTY2IiByPSIzOC43NzIiLz48Y2lyY2xlIGNsYXNzPSJsIiBjeD0iNjU1LjM2NCIgY3k9IjEzOS44MTEiIHI9IjYxLjkyNyIvPjxjaXJjbGUgY2xhc3M9InYiIGN4PSI1ODEuNTkiIGN5PSIyMzEuODk0IiByPSIyOS42MTciLz48Y2lyY2xlIGNsYXNzPSJ3IiBjeD0iNTIyLjg5NCIgY3k9IjI5OS4yMDciIHI9IjIzLjY5NCIvPjxwYXRoIGNsYXNzPSJwIiBkPSJNNTc2LjYxOSw3MzcuNzgxYy0uMzM2LS41OTktMy4zNTctNi4wOS04LjEyNy0xMy4yMTQtMS40MzEtMi4xMzctMy4wNDktNC40NDItNC45MjEtNi45NTItOC43OC0xMS43NjgtNDAuOTY4LTU0LjkxNC02OS45ODctNTEuMDA3LTIuNzY2LC4zNzItNC43MjksLjk3LTYuMzMzLDEuNDgxLTIzLjc1MSw3LjU3Mi0zNC4yNCwzNC41MTUtNDEuMDYsNTEuNTc0LTExLjg0MSwyOS42MTYtMjUuNTM5LDYxLjczMy00Mi4xMzYsMTAwLjMwNSw4NS4zMjcsLjIyOCwxNzAuNjUzLC40NTYsMjU1Ljk4LC42ODQtNTkuOTkzLTU1Ljk4MS04MC4xNTktNzcuMDY1LTgzLjQxNS04Mi44NzFaIi8+PHBhdGggY2xhc3M9InMiIGQ9Ik01MDUuNzc3LDcxNC4zNzljLTEzLjc0Nyw3Ljk5Mi0yNi44OTEsMTEuODU4LTMzLjcwMiwxMy42ODktMTIuNDM0LDMuMzQyLTIzLjIzNCw0LjQ5NC0zMS4wNDUsNC44ODRsLTM2Ljc5Niw4Ny4yNTJjODUuMjY2LC4wNjUsMTcwLjUzMiwuMTI5LDI1NS43OTksLjE5NC0xNC42Ni0zNS45ODQtMjkuMzIxLTcxLjk2OS00My45ODEtMTA3Ljk1NC0xMC41OTgtMjAuNzAyLTIwLjE4NC0zMi4zMTgtMjguNDg4LTM4LjU4NS02LjI4MS00Ljc0LTExLjgyOC02LjQyLTE2LjUyNi02LjY1Ni0uMzQ4LS4wMTgtLjY5Mi0uMDI3LTEuMDMtLjAzLTIwLjc4MS0uMTQ1LTI5LjUwNiwyNy4wMTgtNjQuMjMsNDcuMjA1WiIvPjxwYXRoIGNsYXNzPSJyIiBkPSJNNTM4LjkyNCw5NjguMTgxYzEuNDYzLDAsMS40NjUtMi4yNzMsMC0yLjI3M3MtMS40NjUsMi4yNzMsMCwyLjI3M2gwWiIvPjxsaW5lIGNsYXNzPSJ1IiB4MT0iNTc4LjAwNCIgeTE9IjY3NC42NTQiIHgyPSI1NzUuOTQxIiB5Mj0iNjc0LjM5NiIvPjwvZz48cGF0aCBjbGFzcz0ibyIgZD0iTTM3OS44MzEsNTE3LjEwOWMzMy44MzUsNy4yODcsNjcuNjcsMTQuNTc0LDEwMS41MDUsMjEuODYybC0xMjYuNDUsMzE0LjU2MiwxNTYuMDY2LC4zOTljMTUuMDQ2LDM0LjE3OSwzMC4wOTIsNjguMzU4LDQ1LjEzOCwxMDIuNTM3LTExOC41NzcsLjE1LTIzNy4xNTMsLjMwMS0zNTUuNzMsLjQ1MSw1OS44MjQtMTQ2LjYwNCwxMTkuNjQ4LTI5My4yMDcsMTc5LjQ3MS00MzkuODExWiIvPjxwYXRoIGNsYXNzPSJuIiBkPSJNNjcxLjkyOCw1MTcuNTMyYy0zNC4xMTQsNy41MjktNjguMjI5LDE1LjA1OC0xMDIuMzQzLDIyLjU4Nyw0Ny45NDcsMTA0LjUxNiw5NS44OTQsMjA5LjAzMSwxNDMuODQxLDMxMy41NDctNjcuNDk2LC4wODktMTM0Ljk5MSwuMTc3LTIwMi40ODcsLjI2NiwxNS4wNDksMzQuMTgzLDMwLjA5OSw2OC4zNjcsNDUuMTQ4LDEwMi41NSwxMDUuMTE1LC4xMjYsMjEwLjIzLC4yNTMsMzE1LjM0NSwuMzc5LTY2LjUwMi0xNDYuNDQzLTEzMy4wMDMtMjkyLjg4Ni0xOTkuNTA1LTQzOS4zMjlaIi8+PC9nPjwvZz48L2c+PC9zdmc+";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if ((_a = window.alpha) == null ? void 0 : _a.isAlpha) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.alpha;
      if (!wallet.isConnected) {
        try {
          await wallet.connect();
        } catch (error) {
          throw new WalletConnectionError(error == null ? void 0 : error.message, error);
        }
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(transaction, connection, options = {}) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signers, ...sendOptions } = options;
        transaction = await this.prepareTransaction(transaction, connection, sendOptions);
        (signers == null ? void 0 : signers.length) && transaction.partialSign(...signers);
        sendOptions.preflightCommitment = sendOptions.preflightCommitment || connection.commitment;
        const { signature } = await wallet.signAndSendTransaction(transaction, sendOptions);
        return signature;
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
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-avana/lib/esm/adapter.js
init_index_browser_esm();
var AvanaWalletName = "Avana";
var AvanaWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = AvanaWalletName;
    this.url = "https://www.avanawallet.com";
    this.icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyODkuNzg3ODEgMjg5Ljc4NzgxIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyODkuNzg3ODEgMjg5Ljc4NzgxIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiMxQzFDMUMiIGQ9Ik0yMTguNDM5MDEsMjg5Ljc4NzgxSDcxLjM0ODhDMzEuOTQzOTUsMjg5Ljc4NzgxLDAsMjU3Ljg0Mzg3LDAsMjE4LjQzOTAxVjcxLjM0ODgNCglDMCwzMS45NDM5NSwzMS45NDM5NSwwLDcxLjM0ODgsMGgxNDcuMDkwMjFjMzkuNDA0ODYsMCw3MS4zNDg4LDMxLjk0Mzk1LDcxLjM0ODgsNzEuMzQ4OHYxNDcuMDkwMjENCglDMjg5Ljc4NzgxLDI1Ny44NDM4NywyNTcuODQzODcsMjg5Ljc4NzgxLDIxOC40MzkwMSwyODkuNzg3ODF6Ii8+DQo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjczLjU4NTUzIiB5MT0iMjE3Ljk4MDgzIiB4Mj0iMjA4LjY0NzQ5IiB5Mj0iLTY0LjU5NzU2IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMjkwLjc5MzAzKSI+DQoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzE2RkVBOCIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuNCIgc3R5bGU9InN0b3AtY29sb3I6IzAwREFGRiIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuOTIiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzFGRkYiLz4NCgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojREMxRkZGIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggZmlsbD0idXJsKCNTVkdJRF8xXykiIGQ9Ik0yMzUuNzgxMjIsMjE3LjA0NTMzTDE1Ny43MjQ0Myw0OC40NTUyMmMtNS4wMzU4MS0xMC45MjA1NC0yMC41Mzk3Ni0xMC45MjA1NC0yNS41NzU1OSwwDQoJbC0zOS4xODM4OSw4NC41OTIxNGMtMS4xMDM0MiwyLjQwNDcyLTEuNjQwOTcsNC45NzkzNy0xLjY0MDk3LDcuNDY5MDZjMCw3LjEwMTA3LDQuMjQzNzUsMTMuODkxMTMsMTEuNDAxNDQsMTYuNjYzNjQNCgljOC44ODM2NCwzLjQ1MTY4LDE4LjkyNzEzLTEuMTAzMjMsMjIuOTQ0NjYtOS43NjA0OGw5Ljc4ODgyLTIxLjEzMzk2YzMuNzM0NTEtOC4wOTEzOCwxNS4yMjA5Mi04LjA5MTM4LDE4Ljk1NTQ2LDANCglsMTYuNDQ4MiwzNS41NTM0M2MyLjQxMjAyLDUuMjEzNjctMS43MDg5MiwxMS4wMjA4My03LjQzNzA5LDEwLjU4NzAxYy02Ny42NzI1LTUuMTI0OTQtMTA1LjA3MzAzLDM4LjcwMzA5LTEwNi4xNjQ3Niw0MC4wMDc3NA0KCWMtMC4wMjgxNCwwLjAyODMxLTAuMDI4MTQsMC4wMjgzMS0wLjAyODE0LDAuMDI4MzFjLTMuMDI3MjMsMy4xOTY5OS00Ljg5NDU4LDcuNDY5MDYtNC44OTQ1OCwxMi4yNTAxOA0KCWMwLDkuODE3MzEsNy45NDk5NCwxNy43NjcyNiwxNy43Mzg5MywxNy43NjcyNmM1LjE3NzQzLDAsOS44NDU0NS0yLjIzNDk5LDEzLjA5OTA1LTUuNzcxNDRjMCwwLDAuMDg0NzktMC4xMTMzLDAuMjU0NTMtMC4zMTEzNg0KCWMwLjExMzI4LTAuMTEzMTEsMC4yNTQ3MS0wLjI1NDUzLDAuMzk2MTMtMC40MjQyNmM0Ljk0NjEtNS4zMDEyNSwzNy42MTI0LTM3LjM5MDI3LDkyLjA2NjE1LTI2LjM1OTA3DQoJYzEyLjAxNzc4LDIuNDM0NTQsMjIuMDQ5NjgsMTAuNjgxNywyNy4yMTE2MiwyMS44MDQxNGwwLDBjMy4wMjcyMiw2LjUzNTM3LDkuNTA1OTcsMTEuMDYxOTgsMTYuNzIwMjksMTAuOTc3MDENCglDMjMyLjcyNTY2LDI0Mi4yMjQ4MiwyNDEuMjEzMTcsMjI4Ljc4NjI1LDIzNS43ODEyMiwyMTcuMDQ1MzN6Ii8+DQo8L3N2Zz4NCg==";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a, _b;
        if ((_b = (_a = window.avana) == null ? void 0 : _a.solana) == null ? void 0 : _b.isAvana) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.avana.solana;
      if (!wallet.isConnected) {
        try {
          await wallet.connect();
        } catch (error) {
          throw new WalletConnectionError(error == null ? void 0 : error.message, error);
        }
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(transaction, connection, options = {}) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signers, ...sendOptions } = options;
        transaction = await this.prepareTransaction(transaction, connection, sendOptions);
        (signers == null ? void 0 : signers.length) && transaction.partialSign(...signers);
        sendOptions.preflightCommitment = sendOptions.preflightCommitment || connection.commitment;
        const { signature } = await wallet.signAndSendTransaction(transaction, sendOptions);
        return signature;
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
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-bitkeep/lib/esm/adapter.js
init_index_browser_esm();
var BitKeepWalletName = "BitKeep";
var BitKeepWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = BitKeepWalletName;
    this.url = "https://bitkeep.com";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iNjQiIGZpbGw9IiM3NTI0RjkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMDIgNDUuNjAyN1Y0OS44MjA0QzEwMi4wMDEgNTAuMjI4MyAxMDEuODkzIDUwLjYyOTIgMTAxLjY4NyA1MC45ODI3QzEwMS40ODEgNTEuMzM2MSAxMDEuMTg1IDUxLjYyOTYgMTAwLjgyOCA1MS44MzM1TDg3LjA5MDggNTkuNjgwMUw5OS4zNjMzIDY2LjY3MUMxMDAuMTY1IDY3LjEyOTUgMTAwLjgzMSA2Ny43ODkyIDEwMS4yOTQgNjguNTgzNkMxMDEuNzU3IDY5LjM3OCAxMDIuMDAxIDcwLjI3OTEgMTAyIDcxLjE5NjJWODIuNDQyNEMxMDIuMDAxIDgzLjM2IDEwMS43NTggODQuMjYxNyAxMDEuMjk1IDg1LjA1NjdDMTAwLjgzMiA4NS44NTE2IDEwMC4xNjYgODYuNTExNyA5OS4zNjMzIDg2Ljk3MDVMNjcuMDg2OSAxMDUuM0M2Ni4yODUzIDEwNS43NTkgNjUuMzc1OSAxMDYgNjQuNDUwMiAxMDZDNjMuNTI0NSAxMDYgNjIuNjE1MSAxMDUuNzU5IDYxLjgxMzUgMTA1LjNMNTEuMjUyIDk5LjI2MTFDNTEuMDczNyA5OS4xNTkzIDUwLjkyNTYgOTkuMDEyOCA1MC44MjI3IDk4LjgzNjNDNTAuNzE5OCA5OC42NTk5IDUwLjY2NTYgOTguNDU5NyA1MC42NjU2IDk4LjI1NkM1MC42NjU2IDk4LjA1MjIgNTAuNzE5OCA5Ny44NTIgNTAuODIyNyA5Ny42NzU2QzUwLjkyNTYgOTcuNDk5MSA1MS4wNzM3IDk3LjM1MjcgNTEuMjUyIDk3LjI1MDhMODYuMTE1MiA3Ny4zODM1Qzg2LjIwNCA3Ny4zMzI1IDg2LjI3NzcgNzcuMjU5MyA4Ni4zMjkgNzcuMTcxMkM4Ni4zODAyIDc3LjA4MzIgODYuNDA3MiA3Ni45ODMzIDg2LjQwNzIgNzYuODgxN0M4Ni40MDcyIDc2Ljc4IDg2LjM4MDIgNzYuNjgwMiA4Ni4zMjkgNzYuNTkyMUM4Ni4yNzc3IDc2LjUwNCA4Ni4yMDQgNzYuNDMwOCA4Ni4xMTUyIDc2LjM3OThMNzMuMTcxOSA2OC45NzcxQzcyLjgxNTYgNjguNzczNCA3Mi40MTE0IDY4LjY2NjIgNzIgNjguNjY2MkM3MS41ODg2IDY4LjY2NjIgNzEuMTg0NCA2OC43NzM0IDcwLjgyODEgNjguOTc3MUwzNS40MTcgODkuMTcyMkMzNS4xNDk4IDg5LjMyNSAzNC44NDY3IDg5LjQwNTQgMzQuNTM4MSA4OS40MDU0QzM0LjIyOTUgODkuNDA1NCAzMy45MjY0IDg5LjMyNSAzMy42NTkyIDg5LjE3MjJMMjkuNjQ4NCA4Ni45MDA5QzI4Ljg0MjQgODYuNDQyOCAyOC4xNzI5IDg1Ljc4MiAyNy43MDc4IDg0Ljk4NTNDMjcuMjQyNyA4NC4xODg2IDI2Ljk5ODUgODMuMjg0MyAyNyA4Mi4zNjQxVjc3Ljc2NjRDMjYuOTk5OCA3Ny40NjA3IDI3LjA4MDkgNzcuMTYwMyAyNy4yMzUyIDc2Ljg5NTVDMjcuMzg5NSA3Ni42MzA3IDI3LjYxMTUgNzYuNDEwOSAyNy44Nzg5IDc2LjI1OEw3OC42NTA0IDQ3LjM2OTNDNzguNzM5MiA0Ny4zMTgzIDc4LjgxMjkgNDcuMjQ1MSA3OC44NjQxIDQ3LjE1N0M3OC45MTU0IDQ3LjA2ODkgNzguOTQyMyA0Ni45NjkxIDc4Ljk0MjMgNDYuODY3NEM3OC45NDIzIDQ2Ljc2NTggNzguOTE1NCA0Ni42NjU5IDc4Ljg2NDEgNDYuNTc3OUM3OC44MTI5IDQ2LjQ4OTggNzguNzM5MiA0Ni40MTY2IDc4LjY1MDQgNDYuMzY1Nkw2NS42ODY1IDM4LjkzNjdDNjUuMzMwMiAzOC43MzMxIDY0LjkyNjEgMzguNjI1OCA2NC41MTQ2IDM4LjYyNThDNjQuMTAzMiAzOC42MjU4IDYzLjY5OTEgMzguNzMzMSA2My4zNDI4IDM4LjkzNjdMMjguNzU3OCA1OC42M0MyOC41Nzk4IDU4LjczMTggMjguMzc3OCA1OC43ODU0IDI4LjE3MjIgNTguNzg1NUMyNy45NjY2IDU4Ljc4NTUgMjcuNzY0NiA1OC43MzIgMjcuNTg2NSA1OC42MzAzQzI3LjQwODQgNTguNTI4NiAyNy4yNjA0IDU4LjM4MjMgMjcuMTU3NSA1OC4yMDYxQzI3LjA1NDUgNTguMDI5OSAyNy4wMDAyIDU3LjgzIDI3IDU3LjYyNjRWNDUuNTQ3NkMyNi45OTg5IDQ0LjYzIDI3LjI0MiA0My43MjgzIDI3LjcwNDkgNDIuOTMzNEMyOC4xNjc4IDQyLjEzODQgMjguODM0MSA0MS40NzgzIDI5LjYzNjcgNDEuMDE5NUw2MS45MDcyIDIyLjY5NTRDNjIuNzA3MSAyMi4yMzk4IDYzLjYxMzggMjIgNjQuNTM2NiAyMkM2NS40NTk0IDIyIDY2LjM2NjEgMjIuMjM5OCA2Ny4xNjYgMjIuNjk1NEw5OS4zNjMzIDQxLjA4MzNDMTAwLjE2NSA0MS41NDE0IDEwMC44MyA0Mi4yMDAxIDEwMS4yOTMgNDIuOTkzNEMxMDEuNzU2IDQzLjc4NjcgMTAyIDQ0LjY4NjYgMTAyIDQ1LjYwMjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a, _b;
        if ((_b = (_a = window.bitkeep) == null ? void 0 : _a.solana) == null ? void 0 : _b.isBitKeep) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.bitkeep.solana;
      let account;
      try {
        account = await wallet.getAccount();
      } catch (error) {
        throw new WalletAccountError(error == null ? void 0 : error.message, error);
      }
      let publicKey;
      try {
        publicKey = new PublicKey(account);
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-bitpie/lib/esm/adapter.js
init_index_browser_esm();
var BitpieWalletName = "Bitpie";
var BitpieWalletAdapter = class extends BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = BitpieWalletName;
    this.url = "https://bitpiecn.com";
    this.icon = `data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxZTNkYTAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNzUwZGUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjUyLjU0NTc1JSIgeDI9IjUyLjU0NTc1JSIgeGxpbms6aHJlZj0iI2EiIHkxPSIxMDAlIiB5Mj0iMCUiLz48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSI1MCUiIHgyPSI1MCUiIHkxPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFkM2JhMyIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTczNzkzIiBzdG9wLW9wYWNpdHk9Ii42NTI5MzgiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjUwJSIgeDI9IjUwJSIgeGxpbms6aHJlZj0iI2EiIHkxPSIxMDAlIiB5Mj0iMCUiLz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0xOCAwaDI4YzkuOTQxMTI1NSAwIDE4IDguMDU4ODc0NSAxOCAxOHYyOGMwIDkuOTQxMTI1NS04LjA1ODg3NDUgMTgtMTggMThoLTI4Yy05Ljk0MTEyNTUgMC0xOC04LjA1ODg3NDUtMTgtMTh2LTI4YzAtOS45NDExMjU1IDguMDU4ODc0NS0xOCAxOC0xOHoiIGZpbGw9InVybCgjYikiLz48Y2lyY2xlIGN4PSIzMi4yODU3MTQiIGN5PSIzMi4yODU3MTQiIGZpbGw9IiNmZmYiIHI9IjI0LjI4NTcxNCIvPjxwYXRoIGQ9Im0zMiAwYzE3LjY3MzExMiAwIDMyIDE0LjMyNjg4OCAzMiAzMnMtMTQuMzI2ODg4IDMyLTMyIDMyLTMyLTE0LjMyNjg4OC0zMi0zMiAxNC4zMjY4ODgtMzIgMzItMzJ6bS0uMTQzNDk3OCA3LjYwNTM4MTE3Yy0xMy40NzI3NzU5IDAtMjQuMzk0NjE4NzkgMTAuOTIxODQyODMtMjQuMzk0NjE4NzkgMjQuMzk0NjE4ODNzMTAuOTIxODQyODkgMjQuMzk0NjE4OCAyNC4zOTQ2MTg3OSAyNC4zOTQ2MTg4YzEzLjQ3Mjc3NiAwIDI0LjM5NDYxODktMTAuOTIxODQyOCAyNC4zOTQ2MTg5LTI0LjM5NDYxODhzLTEwLjkyMTg0MjktMjQuMzk0NjE4ODMtMjQuMzk0NjE4OS0yNC4zOTQ2MTg4M3oiIGZpbGw9InVybCgjYykiLz48cGF0aCBkPSJtMjkuMDkwOTA5MSA0NC4zNjM2MzY0YzAgMi4wMDgzMDgxLTEuNjI4MDU1NSAzLjYzNjM2MzYtMy42MzYzNjM2IDMuNjM2MzYzNi0yLjAwODMwODIgMC0zLjYzNjM2MzctMS42MjgwNTU1LTMuNjM2MzYzNy0zLjYzNjM2MzZsLS4wMDAxODE4LTIuMTgyNjM2NC0yLjE4MTYzNjQuMDAwODE4MmMtMi4wMDgzMDgxIDAtMy42MzYzNjM2LTEuNjI4MDU1NS0zLjYzNjM2MzYtMy42MzYzNjM3IDAtMi4wMDgzMDgxIDEuNjI4MDU1NS0zLjYzNjM2MzYgMy42MzYzNjM2LTMuNjM2MzYzNmwyLjE4MTYzNjQtLjAwMDA5MDl2LTUuODE5bC0yLjE4MTYzNjQuMDAwOTA5MWMtMi4wMDgzMDgxIDAtMy42MzYzNjM2LTEuNjI4MDU1NS0zLjYzNjM2MzYtMy42MzYzNjM2IDAtMi4wMDgzMDgyIDEuNjI4MDU1NS0zLjYzNjM2MzcgMy42MzYzNjM2LTMuNjM2MzYzN2wyLjE4MTYzNjQtLjAwMDE4MTguMDAwMTgxOC0yLjE4MTYzNjRjMC0yLjAwODMwODEgMS42MjgwNTU1LTMuNjM2MzYzNiAzLjYzNjM2MzctMy42MzYzNjM2IDIuMDA4MzA4MSAwIDMuNjM2MzYzNiAxLjYyODA1NTUgMy42MzYzNjM2IDMuNjM2MzYzNmwtLjAwMDkwOTEgMi4xODE2MzY0aDUuODE5bC4wMDAwOTA5LTIuMTgxNjM2NGMwLTIuMDA4MzA4MSAxLjYyODA1NTUtMy42MzYzNjM2IDMuNjM2MzYzNi0zLjYzNjM2MzYgMi4wMDgzMDgyIDAgMy42MzYzNjM3IDEuNjI4MDU1NSAzLjYzNjM2MzcgMy42MzYzNjM2bC0uMDAwODE4MiAyLjE4MTYzNjQgMi4xODI2MzY0LjAwMDE4MThjMi4wMDgzMDgxIDAgMy42MzYzNjM2IDEuNjI4MDU1NSAzLjYzNjM2MzYgMy42MzYzNjM3IDAgMi4wMDgzMDgxLTEuNjI4MDU1NSAzLjYzNjM2MzYtMy42MzYzNjM2IDMuNjM2MzYzNmwtMi4xODI2MzY0LS4wMDA5MDkxdjUuODE5bDIuMTgyNjM2NC4wMDAwOTA5YzIuMDA4MzA4MSAwIDMuNjM2MzYzNiAxLjYyODA1NTUgMy42MzYzNjM2IDMuNjM2MzYzNiAwIDIuMDA4MzA4Mi0xLjYyODA1NTUgMy42MzYzNjM3LTMuNjM2MzYzNiAzLjYzNjM2MzdsLTIuMTgyNjM2NC0uMDAwODE4Mi4wMDA4MTgyIDIuMTgyNjM2NGMwIDIuMDA4MzA4MS0xLjYyODA1NTUgMy42MzYzNjM2LTMuNjM2MzYzNyAzLjYzNjM2MzYtMi4wMDgzMDgxIDAtMy42MzYzNjM2LTEuNjI4MDU1NS0zLjYzNjM2MzYtMy42MzYzNjM2bC0uMDAwMDkwOS0yLjE4MjYzNjRoLTUuODE5em0tLjAwMDkwOTEtOS40NTQ2MzY0aDUuODE5di01LjgxOWgtNS44MTl6IiBmaWxsPSJ1cmwoI2QpIiB0cmFuc2Zvcm09Im1hdHJpeCguODY2MDI1NCAtLjUgLjUgLjg2NjAyNTQgLTExLjcxMjgxMyAyMC4yODcxODcpIi8+PC9nPjwvc3ZnPg==`;
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        if (window.bitpie) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.bitpie;
      let account;
      try {
        account = await wallet.getAccount();
      } catch (error) {
        throw new WalletAccountError(error == null ? void 0 : error.message, error);
      }
      let publicKey;
      try {
        publicKey = new PublicKey(account);
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    if (this._wallet) {
      this._wallet = null;
      this._publicKey = null;
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-censo/lib/esm/adapter.js
var CensoWalletName = "Censo";
var CensoWalletAdapter = class extends BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = CensoWalletName;
    this.url = "https://wallet.censocustody.com";
    this.icon = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMTYuNCAyMTAuMiIgdmlld0JveD0iMCAwIDIxNi40IDIxMC4yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNlZDFjMjQiPjxwYXRoIGQ9Im0yMDAuOCAxNDcuOWMuNC0uMi41LS40LjQtLjgtLjMuMi0uNC40LS40Ljh6bS0zLjYgNi40YzEuNy0xLjkgMi44LTQgMy43LTYuNC0xLjggMi0zIDMuOS0zLjcgNi40em0tMS42IDkuM2MtLjIuMy0uNC41LS41LjdzLS4xLjEtLjEuMWMtLjMuMi0uOSAxLS4xLjguMi0uMS40LS4zLjYtLjRzLjUtLjMuNS0uN2MxLjItLjcgMS43LTEuNSAyLTIuOC0xLjEuNS0xLjggMS4zLTIuNCAyLjN6bS0xNzEgOC4xYy0uMi0uMi0uMy0uNC0uNS0uNi4xLjIuMi40LjUuNnptMTIwLjUtMTUwLjJjLTEuOC0xLjctMy43LTEuMy02LTEgLjIuNi41IDEuMSAxIDEuNS0uNi0uMS0xLjMtLjEtMS45IDAgLjQuNS45LjggMS41LjlzMS0uMiAxLjUtLjRjMS4yLjEgMi4yLjEgMy4zLS4yLjIgMCAuMS0uMi4zLS4ycy4zLjIuNi4yLjktLjEgMS4zLS4yYy43LjEgMS4zLjIgMS42LS42LS41LS4xLTEgLjEtMS41IDBzLTEtLjMtMS43IDB6bS0yLjUtNS4zYy0xLjgtLjQtMy40LjEtNS4yLjYgMS45LjQgMy43LjIgNS42LS4xIDEuNS0uMiAzIDAgNC40LS40LTEuNy0uNi0zLjEtMS00LjgtLjF6bS03NS40IDU0LjdjLS4yLjMtLjQuNi0uNy45LjQtLjIuNi0uNC43LS45em02Ny00Ny40YzEgMCAyLS4xIDMtLjEtLjktLjQtMy4zLTEuNy0zIC4xem0tOC0zLjRjLjQtLjIgMS0uMiAxLjItLjJoLjJjMS4zLS4xIDIuMi0uNSAzLjEtMS40LTEuNi0uMS0zLjMtLjEtNC44IDAtLjIgMC0uMi0uMS0uNC0uMS0uMSAwLS4xIDAtLjEgMC0uMS0uMy0uNC0uNi0uOC0uNS0uMy4xLjIuMy0uMS40LS4yLjEtLjYgMC0uOC0uMS0uMiAwIC4xLS4zLjEtLjMtMS4xLS4yLTIuMS4xLTMuMi40cy0yLjIuNS0zLjMgMWMwIDAgLjEgMCAwIDAtLjIgMC0uOC4yLS45LjRzLjMtLjIuMyAwLS4xLjMtLjEuNWMtNSAuNy0xMi4yLjctMTMuOSA2LjMgNS42LTIuMSAxMS4xLTQgMTYuOS00LjkgMS40LS4yIDIuOC0uNSA0LjItLjggMS0uMyAxLjgtLjMgMi40LS43em0tNjkuNyA5MS0uNS0uNGMuOS0uNyAxLjMtMS4yLjMtMiAuOS0yLjggMS4xLTUuNSAxLjEtOC41IDAtMS0uMS0xLjkuMS0yLjkgMC0uMS4yLjIuMi4xLjYtLjcuNy0xLjQuNS0yLjMuNi0xLjYuOC0yLjkuMy00LjUgMi4xLTEuOCAzLTMuNCAxLjktNi4xIDEuNi0xLjMgMi40LTIuNiAyLjgtNC42LjctLjggMS0xLjQuNi0yLjQgMC0uMS4xIDAgLjIgMCAuMi0uMy4yLS42IDAtLjkuOC0uNi42LTEgMC0xLjYuNC0uMi45LS4zIDEuMi0uNi44LS45LjgtMS43LjctMi45LjkuMiAxLjctMS4yIDEuOC0xLjZzLjEtLjQuMS0uNGMuNS0xLjYgMS0zLjEgMS42LTQuNiAwLS4xLjMtLjEuNC0uMi42LS40LjktLjggMS0xLjYgMC0uMi4yIDAgLjMtLjEgMS40LTEuMSAyLjMtMi40IDMuMi0zLjkuMSAwIC40LjEuNiAwIC42LS40IDEuNi0xLjcgMS45LTIuMS4zLS4zLjItLjIuMy0uMy41LS41LjYtLjkuNy0xLjQuMS0uMi4zIDAgLjQgMCAuOS0uNSAxLjUtMSAxLjgtMiAuNC0uMy42LS42LjctMS4xLjUtLjEgMS4xLS4yLjgtLjguNS0uMiAxLS40IDEuNC0uNy40LS4yLjctLjQuOC0uOCAwLS4xLS4yLjEtLjIuMXMtLjEtLjEgMC0uMWMxLjYtLjUgMi45LTEuMyA0LjItMi4zaC4xYy4zLS4xLjUtLjIuOC0uNHMuNi0uNS44LS44Yy4yLjQuNy4xLjgtLjFzLS4xLS4xIDAtLjItLjUgMC0uNS0uMSAwLS4xLjEtLjEuMy4yLjQuMmMuMS0uMS4zLS4xLjQtLjEuMS0uMS4yLS4xLjMtLjEuNy0uNSAxLjMtMSAxLjYtMS44IDItLjQgMy4zLTEuMyA0LjUtMi45LTIuOC0uNC01LjEtLjEtNy42IDEtLjMgMC0uOC4yLTEgLjNzLS4xLjEtLjIuMWMtLjEuMS0uMS4xLS4yLjJzLS4xLjEtLjIuMmMwIC4xLjEtLjEuMSAwIDAgLjItLjEuMy0uMS41LS45LS4yLTEuNyAwLTIuNi0uM3MtMS42LS43LTIuMy4yYy0uMi0uMy0xLS4zLTEuMi0uMy0uMyAwLS4xIDAtLjIgMHMwIDAgMCAwYy0uMy0uNy0xLjUuNC0xLjcuNXMwIDAgMCAwYy0uOC4yLTEuNC40LTIuMi4yLjItLjYuMy0xLjMuNi0xLjguOC0xLjIgMS43LTIuMiAyLjYtMy4zLjEuMy0uMS42LjMuOCAyLjktMi42IDkuMi02LjMgMTEuNy03LjggMS42LS45IDEuNS0uOCAxLjYtLjggMy0xLjEgNi44LTEuNiA2LjctNS4zLTMuMyAxLTYuMiAxLjktOC45IDQuMi0uNS4xLTEuMS4yLTEuNi40LS4xIDAtLjMuMS0uNC4yLTEuNC45LTQuMiAyLjItNS41IDIuNy0yLjEuOC0yLjIuNy0zLjIgMi40LTQuMSAxLjgtNy40IDQuNy0xMi4xIDUuMSAxLjItMS43IDIuNy0zLjMgNC4zLTQuNi4zLS4yLjYtLjUuNy0uNnMwLS4xLjEtLjFjLjEtLjEgMC0uMiAwLS4yLjMuMi44LS4yLjctLjUgMC0uMy0uNi0uMS0uNy0uMXMtLjEgMC0uMSAwLS4xLS4xIDAtLjFjLjQgMCAuOC0uMSAxLjItLjItLjEuMS0uMi4zLS4zLjQuNC0uMS44LS40IDEtLjcuNS0uMSAxLjQtLjkgMS41LTEuMnMuMS0uMi4xLS4yYy44LS43IDEuNS0xLjIgMS43LTIuMi0xIC4xLTEuNy4zLTIuNCAxLjEtLjguMi0xLjguNy0yLjUgMS0xLjEuNS0xLjcuOS0yLjUgMS43LTEuNS43LTIuOCAxLjMtNC40LjkgMS42LS41IDIuNy0xLjMgMy43LTIuNi0uMy0uMS0uNS0uMy0uOC0uNCA1LjUtMi42IDEwLjgtNS41IDE2LTguNy0uMS0uMS0uMy0uMi0uNC0uM3MwLS4xLjEtLjFjMy0uMyA1LjUtMSA3LTMuOCAwLS4xIDAtLjEuMSAwIDEuNi45IDIuOC40IDMuNC0xLjMgMy41LS4xIDYuMi0xLjMgOS4xLTIuOS0uMyAwLS42LS4xLS45LS4xIDUuOS0xLjQgMTEuNy0zLjEgMTcuNS01LjEuMy4xLjYtLjEuNy0uMnMuMy0uMi40LS4yYzEtLjEgMS45LS4zIDIuOC0uOC0uMyAwLS43LS4xLTEtLjEuNS0uMy45LS41IDEuMy0uOC4xLjMuMy41LjQuOC45IDAgMS4zLS4zIDEuNC0xLjIgNS41LjggMTAuMy0uMyAxNS42LTEuOC01LTEuNC05LjktLjktMTUuMi0uNS0uOC4xLTMuNC0xLjMtMy4zLjMtNS4yLS40LTEwLjMtLjItMTUuNS4yLTItLjEtMy4xLjgtNC43IDItMS4zLS4zLTIuNS0uMi0zLjgtLjEtMS0uNi0xLjUtLjMtMi4yLjYtLjkuMy0xLjguNi0yLjYuOS0uMSAwLS4yLS4xLS4yIDAgLjIgMyAxIDUuMSA0LjIgNS4yLjMuMS42LjIuOS4yLjItNy43LTYuOS0zLjktMTAuOS0xLjItMi44IDAtNS4xLjUtNy41IDEuOC0uOC4xLTEuMy4zLTEuNyAxLjEtLjguMS0xLjQuMi0xLjkgMS0uMS0uMS0uNS0uMS0uNiAwLS4xIDAgMCAwLS4xIDBzMCAwLS4xIDAgMCAwLS4xIDAtLjMuMS0uNS4yYy0uMS4xLS4xLjItLjQuMnMtLjkuMy0xIC41Yy0uMi4yLS4xLjEtLjIuMnMtLjQuMy0uNS40Yy0uNi40LTEgLjctMS40IDEuMi0uNy0uMi0xLjEtLjEtMS42LjUtLjEuMS4xLjMuMS4zLTEuOC4yLTMuMS44LTQuMiAyLjMtMS4xLjMtMi4xLjctMS4xIDEuOC4xLjEuNS4xLjUuMy0uMS4yLS40LjMtLjYuMXMtLjUtLjQtLjctLjYtLjMtLjYtLjctLjVjLS40IDAtLjkuMi0xLjEuNnMtLjkgMS4xLTEuMyAxLjItLjIgMC0uMiAwYy0yLjMtLjItMy41LjktNSAyLjUtLjIgMC0uNS4yLS43LjNzLS41LjMtLjUuNGMtLjEuMSAwIC4xLS4xLjEtMS43IDEuMS0zLjcgMS41LTUuNyAyLjEtLjEtLjEtLjEtLjItLjItLjMuOC0uNCAxLjUtMS4xIDItMS43LjItLjMuNC0uMy40LS42LjEtLjMtLjIuMy0uMy4xIDAtLjItLjItLjUtLjItLjdzLjMgMCAuNS0uMWMuMS43LjguMy44IDAgMC0uMi0uNi0uMS0uNi0uMXMzLTEuOCAzLjUtMy44Yy42LS4zIDEuMS0uNyAxLjYtMS4yLS4yIDAtLjItLjEtLjUgMC0uMiAwLS4yLjEtLjMgMC0uMi0uMi0uMS0uMy4yLS4zLjIgMCAuMSAwIC4zLjFzLjQgMCAuNyAwYzEtLjEgMS40LS40IDEuNy0xLjMgMi43LTEuNSA1LjQtMyA3LjktNSAyLjUtMSA0LjctMS44IDYuNS0zLjkuMyAwIC42LS4yLjgtLjJzLS40LjMtLjEuMi41LS4zLjgtLjRjMi0uOSA0LjEtMS45IDYuMS0yLjktLjUtMi4xLTYuNCAxLjYtNy43IDIuMS0uNS4yLS42LjEtLjcuNi4yLS4yLjUtLjQuNy0uNi0uMi4yLS4zLjUtLjUuNnMtLjItLjEtLjMtLjFjLTEuMSAwLTIgLjMtMyAuNiAyLjItMS42IDQuNC0zLjEgNi42LTQuOC04LjQgMi4zLTE1IDYuMS0yMS42IDExLjgtMS45LjMtMy4zLjctNCAyLjYtMSAuMS0xLjguMy0xLjIgMS40LS4zIDAtLjcuMS0uOS4xLS4zIDAgLjEtLjEtLjEtLjJzLS40LjEtLjUuMi4xLjEuMS4xYy0xLjUuNy0yLjQgMS4zLTIuMiAzLTIuMy42LTQgMS41LTUuNSAzLjMuMSAwIC4xLjEuMi4xLTIgMS0zLjIgMS44LTMuNSA0LjItLjkuMi0xLjkgMS41LTIuMyAycy0uMS4yLS4zLjRjLS4zLjEtLjUuNS0uNy43cy0uNS41LS41LjcuMSAwIC4xLjFjLTEuMiAxLjItMiAyLjQtMi42IDQtLjIgMC0uNS4yLS42LjNzLjMtLjMuMS0uMWMtLjMuMS0uNC4zLS41LjZzLS41LjgtLjcgMS4xLS4zLjctLjUuOS0uMS4xLS4xLjFjLTIuNyAxLTIuOCAyLjktMi41IDUuNS0uMyAwLS41LjEtLjguMS0xLjEgMS45LTIuMiAzLjctMi44IDUuOS0uNC4zLS43LjgtLjkgMS4yIDAtLjEtLjEtLjMtLjEtLjQtLjYuNi0xIDEuMi0xIDIgMCAuMS0uMS4xLS4xLjEtMS4zIDEuOC0yLjIgMy4zLTIuMSA1LjYtLjEuMS0uMi4yLS4yLjNzLjEuMi4xLjNjLTEuMS4yLTEuMi45LTEuMSAxLjkuNC4yLjguNCAxLjEuNi0uNS0uNi0xLjEuMS0xLjIuNHMwIC4zIDAgLjNjLS4zLjQtLjQuNi0uNyAxLS4xLS42LS42LS43LS42LTEuNXMuOC0xLjktLjEtMi41Yy4xLS4xLjEtLjQuMy0uNXMuMi40LjMuM2MuNC0uMy40LS43LS4xLS44aC0uMWMuOS0xIDEuMy0xLjkgMS4xLTMuMy4zIDAgLjUgMCAuNy0uMnMuMS0uOC0uMS0xYy0uMS0uMiAwLS4yLjEtLjMuOC0yLjMuOS00LjUtMi4xLTQuMy0uNiAwLS42IDEtLjkgMS40LS4xLS4xLS4zLS4yLS4zLS40cy4xIDAgLjItLjNjMS4yLTIuOSAyLjItNS45IDMtOSAxLjItMi4zIDIuNC00LjUgMy4xLTYuOS0xLjkuNy0yLjcgMS43LTMuMiAzLjctMS4xLjQtMS42IDEtMi40IDEuOS0uNC41LS45IDEuNy0xLjQgMi4xLTIuNiAyLjUtNSA2LjYtNC44IDkuOS4xIDIuMi41LjQuMi44cy0uOS4yLTEuMS42LS4xLjQtLjEuN2MtLjYuNS0uNyAxLjEtLjcgMS45LS42LjctLjkgMS4yLS41IDItLjguOS0xLjEgMS42LTEgMi44LTEgLjEtMS4zIDEuOC0xLjQgMi4zczAgLjMtLjEuM2MtLjEuMSAwIC4xIDAgLjEtMi45IDMuNC00LjYgOC45LTQuNSAxMi41IDAgMS43LjEuNC4xIDEgMCAuNy4xIDAgMCAuM3MtLjEuNSAwIC43YzAgLjItLjEtLjEtLjEgMC0uNyAyLTEuMiAzLjktMSA2LjEgMCAuMS0uMi4xLS4yLjItLjMuOS0uMyAxLjgtLjEgMi43LS45IDQuNi0xIDguOS0uNCAxMy42LS40IDEuOC0uMSAzLjEuOSA0LjctLjIgMC0uMS4zLS4zLjEtLjItLjEtLjQtLjQtLjYtLjYtLjMgMy0uMyA1LjguOCA4LjcgMCAuNS4xLjkuMyAxLjRoLS4xYy0uMy40LjEgMS4yLjMgMS40czAgMCAuMi4xLjUuNC44LjFjMCAwLS4yLS4xIDAtLjEuMS4xLjQtLjEuNS0uM3MuMSAwIC4xLS4xYy4xIDMuNyAxIDcgMi4yIDEwLjUgMCAxLjEuMSAyLjEuNSAzLjEtLjEtLjgtLjYtMS43LTEuMi0yLjEtLjItLjItLjEgMC0uMi0uMS0uNi0uNi0uNi0xLjMtMS0xLjktLjIgMSAwIDEuNiAxIDEuOS0uMyA0LjUgMS42IDcuNiA0LjEgMTEuMiAwIC4xLS4yLS4xLS4xIDAgLjEuMi4zLjQuNC42bC45IDEuNWMwIC4xLjIgMCAuMiAwLS4xLjUtLjIgMS4xLjQgMS4zLjEgMCAwIC4xIDAgLjIuNiAyIDEuNSAzLjggMi43IDUuNiAwIDAtLjEuMS0uMS4xLjIuOS40IDEuNSAxLjEgMi4xLjEuOC41IDEuNyAxIDIuMi41LjYgMSAuOSAxLjYgMS4zLTEuNS41LjEgMS4zLjkgMS43LjIgMy4xIDEuOCA0LjggMy45IDYuOC41IDEgMS4xIDEuOCAyLjIgMi4zLjcuOSAxLjUgMS43IDIuMiAyLjUuMS4xLS40IDAtLjIuMS42LjIgMS4yLjQgMS44LjUtLjMuMS0uNi4zLS45LjUgMS42IDEuNyAzLjIgMy4zIDUuMSA0LjYgMSAxLjIgMiAyIDMuNiAyLjUgMCAuMS0uMS4yLS4xLjNzLjIuMS4yLjItLjItLjMtLjItLjEuNC40LjYuNWMuMiAwLS4yLS4yLS4xLS4yLjYuNSAxLjIuOSAxLjggMS40LS4yLjMtLjQuNC0uNC43LjEuNC40LjUuOC40LjcgMi4zIDIgMy4xIDQuMiAzLjUuMi4yLS4yLjQuMS42cy44IDAgMS4xLS4zYy44IDIgMi4xIDMgNC4xIDMuOSAxLjYgMS40IDMuNCAyLjQgNS40IDMuMi0uMS4xLS4xLjItLjIuMiAxLjkgMS43IDMuNCAzLjEgNiAyLjcuMSAwIC4yLS4xLjMgMCAuNy42IDIgMS41IDIuNSAyLjFzMCAuMy4zLjRjLjYgMS4yIDEuNSAxLjggMi40LjUgMS4yIDEuNSAyLjUgMi4yIDQuNCAyLjcuMSAwIC4zIDAgLjQuMS45LjYgMS42LjggMi4zIDAgMi40IDIuNyA0LjUgMi44IDguMSAzLjYgMS4xLjMgMy42IDEuNSA1LjEgMS42IDEuNi43IDIuNyAxIDQuNC41LTEuMi0uNi0yLjMtMS4xLTMuNi0xLjEtLjEtLjItLjEtLjQtLjItLjYtLjEtLjEtLjMtLjEtLjQtLjIuOCAwIDEuNiAwIDIuNC4xIDEuMi44IDIuMyAxIDMuNy41IDEuMy41IDIuNi43IDQgLjYuMiAwIDAtLjMuMi0uM3MuMy4xLjYuMWMuNSAxLjIgMy41IDEgNC4yIDFzLjEtLjEuNC0uMS40LS4xLjctLjFjLjIgMCAwIC4xIDAgLjEuNi4xIDEgLjIgMS4zLS41IDAgMCAwLS4xLjEgMCAxLjkgMSAzLjIuMyA1LjEtLjUgMi43IDIuMyA5IDEuMSAxMS40LjkgNC40LS4zIDUuMS0uMiA4LjUtMiAuNC4yIDEgLjIgMS41LjItLjQuMy0uOC42LTEuMi45IDQtLjQgNy4yLTEgMTEuMy0xLjkgMy41LS44IDcuNy0xLjYgMTAuNi00LjMuMiAwIC4zLjIuNC4yczAtLjIuMS0uMmMuNS0uMS45IDAgMS4zLjEgMi4xLS41IDMuOS0uOSA0LjQtMy4zLjIuMy40LjcuNCAxLjEgMS41LS4zIDIuNy0uNiAzLjUtMiAuMiAwIC41LS4xLjctLjIgMy44LTIgNy4yLTQuNCAxMC41LTcuMi4xLjEuMy4zLjUuNCA1LTEuOCA4LjQtNC41IDExLjQtOC45IDEuMy0xLjEgMi42LTIuMiAzLjYtMy41IDAgMCAwIC4xLjEgMCAxLjYtMi4xIDMuMi00LjIgNC44LTYuMi41LS41LjktMSAxLjItMS43aC0uMWMuMi0uNC40LS45LjUtMS4zcy4yIDAgLjQtLjFjLjUtLjQuNi0uOS44LTEuNS0xLjEtLjUtMS43IDAtMS43IDEuMi0uNC4xLS44LjItMS4xLjQgMCAwIDAgLjEtLjEuMSAwIDAgLjIgMCAwIDBzLS41LjMtLjYuNS0uMS4xLS4yLjJjLS4yLjEtLjMuMy0uNS41LTEuNSAxLjQtMi44IDIuMS00LjggMS43LTIuNC0xLjItNCAxLjEtNS42IDIuNy0uMy4zLS45LjctMS4yIDEuMXMtMSAuOS0xLjQgMS4zYzAgMCAuMS0uMSAwIDBzLS40LjItLjUuMy4xIDAgLjEuMWMtLjUuNC0uOS45LTEuNSAxLjEtMSAuNC0yIC41LTIuOS44LjUtLjUuOC0xIDEtMS43LjktLjcgMS42LTEuNCAyLjEtMi4zLS4yLS4zLS4zLS42LS41LS45IDEtLjIgMi40LS4yIDItMS42IDMuNS0xLjkgNi00LjEgOC03LjV2LjVjMS0uOCAxLjYtMS41IDEuNi0yLjggMS42LS42IDIuNS0xLjMgMy4yLTIuOSAxLjEtMSAxLjctMS44IDEuNi0zLjMuMi0uMS40LS4xLjYtLjMuMi0uMS4yLS40LjMtLjZzLjEgMCAuMiAwLS4xIDAgLjEtLjEuNS0uNC41LS42Yy4xLS4yLS4xIDAtLjEgMCAxLjEtMS4yIDItMi4yIDEuNy0zLjkgMy41LTIuOCA0LjYtNi4zIDYtMTAuNC00LjIgMS43LTUuMiA2LjYtNy4xIDEwLjMtLjcgMS4zLTEuOSAyLjQtMi4yIDMuOS0uNy4yLTEuMS41LTEuNSAxLjEtLjEuMS0uMy4xLS40LjEgMS4xLTEuNSAyLTIuOCAxLjktNC44LjEgMCAuMi4xLjMuMSAxLjItMS41IDIuMS0zLjEgMi45LTQuOC40LS44LjgtMS4zLjctMi4zLjEuMS4yLjEuMy4yIDEuMS0yIDIuNC0zLjkgMi45LTYuMi41LS4zIDEtLjYgMS41LS43LjEtLjUgMC0uOS0uMi0xLjMuOS0xIDEuMi0xLjkuOS0zLjItLjUuNS0xIC45LTEuNiAxLjIgMS42LTIuMyAyLjMtNC41IDIuNS03LjMuNS0yIC43LTMuOC41LTUuOS4xIDAgLjMuMS40LjEuNS0yIC43LTMuOCAwLTUuOC0xLjQgMS40LTEuOSAyLjYtMS43IDQuNi0xLjQuMy0yLjQgMS0zLjUgMS45di0uMWwxLjEtNi44Yy4xLS42LjEtMS4yIDAtMS44LTIuMi45LTIuNSAyLjktMy41IDQuOC00LjQgMS4yLTQuNiA1LTUuNiA4LjktMS4xLjYtMi4zIDMtMi41IDMuOHMtLjEuNi0uMi43Yy0xLjUgMi4yLTMgMi41LTUuNSAyLjYtLjcuNS0xLjIgMS0xLjUgMS44LS4xLjEtLjEtLjEtLjItLjEtLjUuMi0uOC42LTEuMSAxLTIuNy0uOS00LjQuNy02LjQgMi40IDAtLjIuMS0uNC4xLS42LTIgMS41LTMuNSAyLjgtMy44IDUuNC0xIC44LTIuNiAxLjUtMy4zLjMtLjMtLjUuMS0uNC0uMS0uNCAxLjMtMS43IDIuOS0zLjUgMS01LjMtMS40IDEuMi0yLjUgMi4yLTIuOCA0LS4yLS4xLS41LS4yLS44LS4yLTEtLjEtMS4yLS40LTEuMi0xLjQtLjMuMS0uNi40LS44LjQtLjMgMCAwLS4zLS4xLS40IDEuNi0uOCAyLjQtMS44IDMtMy40LS4yLS4xLS41LS4zLS43LS40LjktLjcgMS42LTEuNCAyLjItMi40IDAgLjEuMS4yLjEuMy44LTEuNSAxLjUtMi43LjgtNC40LjMtLjEuNS0uMy44LS40LjItNC4yLTMtLjctNC40LjkgMCAwIC4xIDAgMCAuMS0uMi4xLS4zLjEtLjUuMy45LTEuNS43LTMuNi0uOC0yLjMtLjkuOC0uMy41LS42LjdzMCAuMS0uMS4yIDAgMCAwIC4xYy0uNC41LS43LjktMS4xIDEuNC0uMS4xLS4xLjMtLjIuNHMtLjIuNS0uMy43Yy0uNy43LTEuMiAxLjUtMS42IDIuNSAwIC4xLjIgMCAuMi4xcy0uMy4zLS4zLjNjLS4xIDAgLjMtLjMuMS0uM3MtLjcuNC0uNy43LjEtLjEuMiAwYzAgLjEtLjEuMS0uMi4yczAgMCAwIDBjLS40LS4xLS43LjUtLjguN3YuMnMwIDAgMCAwIDAgMC0uMSAwYzAgMCAuMi0uMSAwIDBzLS41LjMtLjcuNmMtLjIuMi0uNy43LS45LjlzLS4xLjEtLjIuMi0uMS40LS4yLjVjLS4xLjItLjMuMi0uNC4xcy4yLS4zLS4xLS4zLS42LjMtLjcuNS4yLjEuMS4xYy0xLjUuOC0yLjYgMS44LTMuMyAzLjUtLjEtLjEtLjItLjItLjMtLjItMS44IDEuMS0zLjUgMi4zLTUgMy44LS4xLjItLjQgMC0uNS4xLTEuMSAxIC4yLjggMSAuNy01LjYgMi4yLTExLjUgNC42LTE3IDYuNy0xIC40LS43LjMtMS41LjctMS43LS40LTIuOC4yLTQuMSAxLjEtLjMtLjMtLjctLjUtMS0uOC01LjItLjEtMTAuNC0uNC0xNS42LS4yLTQuNS0uNS04LjYtLjctMTIuOC0yLjYtMi45LTEuMy01LjQtMi43LTguNC0uN2gtLjJjLjEtLjEtMS4yLjYtMS4zLjZzLS40IDAtLjEtLjFjLjItLjIgMS4zLS40IDEuNC0uNXMuNy0uOS4xLS45Yy40LS41LjYtLjkuOC0xLjRoLS4xYy0xLjgtMS4xLTMuNi0yLTUuNS0zLS4zLS44LTItMS43LTIuNS0xLjlzLS40LS4xLS41LS4xYy0xLjItLjgtMi4xLTEuMS0zLjQtLjcuNC0uOC40LTEuMi0uNC0xLjcuMi0uMS4zLS4zLjUtLjQtMS4zLTEuOC0yLjYtMy4xLTQuNi00LjEuNS0yLjEtLjctMy4yLTIuMS00LjctLjEtLjEtLjMtLjQtLjQtLjUtLjIgMCAwLS4xLS4yLS4xcy0uMS4zLS40LjFjMS4yLS41LS43LTIuOS0uOS0zLjMtLjItLjMtLjEgMC0uMi0uMnMuNC41LjIuMi0uMS0uOC0uMy0xYy0uMi0uMS0uMSAwLS4xIDAgMC0uNS0uMi0xLS40LTEuNS0uNC0xLS44LTItMS4yLTMgLjEgMCAuMS4xLjIuMi0uMS0xLjctLjUtMi44LTIuMS0zLjUuMS0uNS4xLS45LjItMS40LjIuMS41LjIuNy4zIDAtLjctLjItMS40LS42LTIgMC0uMS0uMS4zLS40IDAgMS41LS45LTEuOC02LjEtMi44LTYuOG00MS4yLTEwMi43YzAgLjEgMCAuMSAwIDAgMCAuMS0uMSAwLS4xIDB6bS0yMi4yIDExLjdjMCAuMSAwIC4xIDAgMHptLTczLjYgMTAyLjFjMCAuMS4yLS4xLjItLjJzLjEgMCAuMSAwYy0uMS4xLS4zLjItLjMuMnptLjUtLjFzLjEuMSAwIDB6bTEyLjktNjQuMWMtLjEgMC0uMSAwIDAgMHptMjEuMS0yMC43czAgLjEgMCAwYzAgLjEgMCAuMSAwIDB6bTM4LjggMTEzYy4xIDAgLjEgMCAwIDB6bTEyNC43LTUuN2MtLjEgMC0uMSAwIDAgMC0uMSAwIDAgMCAwIDB6bTEyLjktMjIuNWMtMS4xIDItMS42IDQuMi0yLjIgNi41IDIuMi0xLjggMi41LTMuOCAyLjItNi41em0tNS42IDEuNmMtLjkgMS42LTEuNSAzLjEtMS45IDQuOSAyLjEtLjIgMS45LTMuNCAxLjktNC45em0tMTM5LjUtNTMuNWMtLjIuMy0uMy41LS41LjguMy0uMy41LS41LjUtLjh6bTQyLjUtNDAuOWMtMS4xLS40LTEuNi0uMS0xLjkgMSAuNy0uMyAxLjMtLjYgMS45LTF6bTEwNi4yIDkzLjZjLS44IDIuNC0xLjcgNS4xLTIuMyA3LjYtLjMgMS4yLS40IDIuNC0uOCAzLjMtLjIuNC0uMS4yLS4yLjMtLjQuMy0xIDEtLjMgMS4zczEuMS0uNy44LTEuM2MuOS0xIDEuMS0xLjkuNy0zLjIgMi4zLTIuMyAyLjItNC45IDIuMS04em0tMTE4LjQtODguN2MzLjUtMS4xIDYuOS0yLjUgMTAuMy0zLjktNC4zLS42LTcuMSAxLjMtMTAuMyAzLjl6Ii8+PHBhdGggZD0ibTE5Ni44IDExOS4ycy43LTYgLjUtMTEuMmMwLS4zIDAtLjQgMC0uNyAwLS4yIDAgLjEuMSAwIC41LTEuNi41LTMuMi41LTQuOSAxLjEuMyAxLjYgMS4zIDEuNyAyLjMuMiAxIC42IDItLjQgMi41LS45LTIuNy42IDEuOS41IDIuNy0uMS45LS4zIDIuMi0uMiAzLjItLjEtLjItLjEtLjQtLjEtLjUtLjYgMS4zLTEuMiAyLjUtMS43IDMuOXoiLz48cGF0aCBkPSJtODMuMiA1LjljMS40LS40IDIuNy0uOCA0LjEtMS4yLjgtLjMgMS41LS41IDIuMy0uOC45LS4zIDEuOS0uNyAyLjgtMS4xIDEuMS0uNCAyLjItLjkgMy4zLTEuMyAxLjEtLjUgMi4zLTEgMy41LTEuNS0yIC4zLTMuOS43LTUuNyAxLjMtMS43LjUtMy4zIDEuMS00LjkgMS45LTEuOC43LTMuNiAxLjctNS40IDIuN3oiLz48cGF0aCBkPSJtMTU3LjUgMjEuOGMtMS43LS45LTMtMS4xLTUuMS0uMiAxLjYgMS4xIDMgMS4xIDUuMS4yeiIvPjxwYXRoIGQ9Im0xMTguMiAyNi40YzIuMS43IDMuNC4xIDUtMS0yLS41LTMuNC0uMi01IDF6Ii8+PHBhdGggZD0ibTIxMC40IDEwOC4zYy4xLS4xIDAgMCAwIDAgMCAuMS4xLjEgMCAuMi0xLjMgMS40LS43IDIuNy4yIDQuMi4xLS44IDAtMS43LjItMi40LjItLjguMy0xLjIuMi0ycy0uMS0yLjUtLjEtMy4xYy0uMS0uNiAwLS40IDAtLjQuMi0xLjItLjQtMy41LS42LTQuNC0uNS0xLjktLjcgNi45LS42IDguMi4zLS4xLjUtLjIuNy0uM3oiLz48L2c+PC9zdmc+";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.Loadable;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isLoggedIn);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Loadable)
        throw new WalletNotReadyError();
      this._connecting = true;
      let CensoClass;
      try {
        CensoClass = (await import("./esm-HK2GKNHL.js")).CensoWallet;
      } catch (error) {
        throw new WalletLoadError(error == null ? void 0 : error.message, error);
      }
      let wallet;
      try {
        wallet = window.censo || new CensoClass();
      } catch (error) {
        throw new WalletConfigError(error == null ? void 0 : error.message, error);
      }
      let publicKey;
      try {
        publicKey = await wallet.connect(this.url);
      } catch (error) {
        throw new WalletConnectionError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", this._publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      try {
        if (wallet.isLoggedIn)
          await wallet.cleanUp();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(transaction, connection, options = {}) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.sendTransaction(transaction, connection, options);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-clover/lib/esm/adapter.js
init_index_browser_esm();
var CloverWalletName = "Clover";
var CloverWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = CloverWalletName;
    this.url = "https://clv.org";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM2LjQ4IDBIMTEuNTJDNS4xNTc2OCAwIDAgNS4xNTc2OCAwIDExLjUyVjM2LjQ4QzAgNDIuODQyMyA1LjE1NzY4IDQ4IDExLjUyIDQ4SDM2LjQ4QzQyLjg0MjMgNDggNDggNDIuODQyMyA0OCAzNi40OFYxMS41MkM0OCA1LjE1NzY4IDQyLjg0MjMgMCAzNi40OCAwWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzc5MTBfMTYzMzUxKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0LjAwMDYgMzkuMzYwNkMzMi40ODM3IDM5LjM2MDYgMzkuMzYwNiAzMi40ODM3IDM5LjM2MDYgMjQuMDAwNkMzOS4zNjA2IDE1LjUxNzUgMzIuNDgzNyA4LjY0MDYyIDI0LjAwMDYgOC42NDA2MkMxNS41MTc1IDguNjQwNjIgOC42NDA2MiAxNS41MTc1IDguNjQwNjIgMjQuMDAwNkM4LjY0MDYyIDMyLjQ4MzcgMTUuNTE3NSAzOS4zNjA2IDI0LjAwMDYgMzkuMzYwNlpNMjEuMjg5OSAxNS44Njg4SDI2LjcxMVYyMS4zNDdIMjEuMjkwNFYyNi42NTRIMjYuNzExVjMyLjEzMjJIMjEuMjg5OVYyNi44MjUySDE1Ljg2OTNWMjEuMzQ3SDIxLjI4OTlWMTUuODY4OFpNMjYuNzEyIDIxLjM0N0gzMi4xMzMxVjI2LjgyNTJIMjYuNzEyVjIxLjM0N1oiIGZpbGw9ImJsYWNrIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNzkxMF8xNjMzNTEiIHgxPSI0OCIgeTE9Ii0xLjQzMDUxZS0wNiIgeDI9IjEuNDMwNTFlLTA2IiB5Mj0iNDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0E5RkZFMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NkQ1RkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4=";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if ((_a = window.clover_solana) == null ? void 0 : _a.isCloverWallet) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.clover_solana;
      let account;
      try {
        account = await wallet.getAccount();
      } catch (error) {
        throw new WalletAccountError(error == null ? void 0 : error.message, error);
      }
      let publicKey;
      try {
        publicKey = new PublicKey(account);
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    if (this._wallet) {
      this._wallet = null;
      this._publicKey = null;
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return Uint8Array.from(signature);
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-coin98/lib/esm/adapter.js
init_index_browser_esm();
var import_bs58 = __toESM(require_bs58(), 1);
var Coin98WalletName = "Coin98";
var Coin98WalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = Coin98WalletName;
    this.url = "https://coin98.com";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NiA3NSI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMDEuNjgxJSIgeDI9Ii0xLjU1NyUiIHkxPSIxNS4yNjglIiB5Mj0iODQuOTE3JSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGMUQ5NjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQ0RBMTQ2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9Ijc1IiBoZWlnaHQ9Ijc1IiBmaWxsPSIjMDAwIiByeD0iMTYiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYxLjQ0IDBhMTMuNzE0IDEzLjcxNCAwIDAgMSA5LjY4IDQuMDEgMTMuNjYxIDEzLjY2MSAwIDAgMSA0LjAwOCA5LjY2OHY0Ny42NDZhMTMuNjYgMTMuNjYgMCAwIDEtNC4wMDcgOS42NjZBMTMuNzEzIDEzLjcxMyAwIDAgMSA2MS40NCA3NUgxMy42ODZhMTMuNzEzIDEzLjcxMyAwIDAgMS05LjY4LTQuMDFBMTMuNjYgMTMuNjYgMCAwIDEgMCA2MS4zMjRWMTMuNjc4YzAtMy42MjUgMS40NC03LjEwMiA0LjAwNy05LjY2N0ExMy43MTQgMTMuNzE0IDAgMCAxIDEzLjY4NyAwWk0yMC4wNjMgNDYuMjMxaC00LjgyNWExMC4wMzIgMTAuMDMyIDAgMCAwIDIuOTQ2IDcuMDg2IDEwLjA3IDEwLjA3IDAgMCAwIDcuMSAyLjk0MiAxMC4wNjUgMTAuMDY1IDAgMCAwIDcuMTA4LTIuOTM1IDEwLjAzIDEwLjAzIDAgMCAwIDIuOTQ2LTcuMDkzaC00LjgyNGE1LjIwNyA1LjIwNyAwIDAgMS0xLjUzIDMuNjg4IDUuMjI1IDUuMjI1IDAgMCAxLTMuNjk2IDEuNTI4IDUuMjM0IDUuMjM0IDAgMCAxLTMuNjk1LTEuNTI4IDUuMjEzIDUuMjEzIDAgMCAxLTEuNTMtMy42ODhaTTU0LjMzIDMzLjcxNmExMS43NjMgMTEuNzYzIDAgMCAwLTEyLjc5OSAyLjUzOEExMS42OTcgMTEuNjk3IDAgMCAwIDM4Ljk5IDQ5LjAzYTExLjcyMyAxMS43MjMgMCAwIDAgNC4zMjggNS4yNTkgMTEuNzU3IDExLjc1NyAwIDAgMCA2LjUyNiAxLjk3IDExLjc2NiAxMS43NjYgMCAwIDAgOC4yOS0zLjQzNSAxMS43MiAxMS43MiAwIDAgMCAzLjQ0Mi04LjI3NCAxMS43MDIgMTEuNzAyIDAgMCAwLTEuOTc1LTYuNTE0IDExLjczNiAxMS43MzYgMCAwIDAtNS4yNjktNC4zMlptLTQuNDg4IDMuOTJhNi45MzcgNi45MzcgMCAwIDEgNC45IDIuMDI1IDYuOTEgNi45MSAwIDAgMSAyLjAyOCA0Ljg5MiA2Ljg5NyA2Ljg5NyAwIDAgMS0xLjE3IDMuODM0IDYuOTMyIDYuOTMyIDAgMCAxLTEwLjY0MyAxLjA0MiA2LjkwMiA2LjkwMiAwIDAgMS0xLjUtNy41MjIgNi45MDkgNi45MDkgMCAwIDEgMi41NDQtMy4xIDYuOTI4IDYuOTI4IDAgMCAxIDMuODQxLTEuMTY3Wm0uMTcgNC41NTJhMi40MzEgMi40MzEgMCAwIDAtMi4yNDEgMS4xNTQgMi40MTggMi40MTggMCAwIDAtLjM1NiAxLjI1NyAyLjM5NSAyLjM5NSAwIDAgMCAxLjYxOSAyLjI5djEuNzUzaDEuNjE4di0xLjc1NGEyLjQyNyAyLjQyNyAwIDAgMCAxLjU5NC0xLjk1IDIuNDE4IDIuNDE4IDAgMCAwLTEtMi4zMSAyLjQzMSAyLjQzMSAwIDAgMC0xLjIzNC0uNDRabS0yMC4yMi0yMi41NTJhMTEuNzYyIDExLjc2MiAwIDAgMC0xMi43OTYgMi41MzEgMTEuNjk3IDExLjY5NyAwIDAgMC0yLjU1NCAxMi43NjkgMTEuNzIzIDExLjcyMyAwIDAgMCA0LjMyIDUuMjYyIDExLjc1NyAxMS43NTcgMCAwIDAgMTQuODI1LTEuNDQ2IDExLjcxNyAxMS43MTcgMCAwIDAgMy40NDUtOC4yODQgMTEuNzAzIDExLjcwMyAwIDAgMC0xLjk3NC02LjUxMiAxMS43MzYgMTEuNzM2IDAgMCAwLTUuMjY2LTQuMzJabS00LjUxIDMuOTE3YTYuOTQ1IDYuOTQ1IDAgMCAxIDQuODk3IDIuMDI5IDYuOTE4IDYuOTE4IDAgMCAxIDIuMDMyIDQuODg2IDYuOTA2IDYuOTA2IDAgMCAxLTEuMTY4IDMuODQyIDYuOTQgNi45NCAwIDAgMS0xMC42NiAxLjA0OCA2LjkxMSA2LjkxMSAwIDAgMS0xLjUtNy41MzYgNi45MTggNi45MTggMCAwIDEgMi41NS0zLjEwMyA2LjkzNyA2LjkzNyAwIDAgMSAzLjg1LTEuMTY2Wm0yNC41Ni00LjgxYTEwLjA1OSAxMC4wNTkgMCAwIDAtNy4xMDMgMi45NCAxMC4wMiAxMC4wMiAwIDAgMC0yLjk0IDcuMDkgOS45IDkuOSAwIDAgMCAxLjIzIDQuNzk1IDEzLjU3NSAxMy41NzUgMCAwIDEgNC4yMTQtMi4zMjIgNS4wODIgNS4wODIgMCAwIDEtLjYyNS0yLjQ3NyA1LjIwNiA1LjIwNiAwIDAgMSAxLjUwMy0zLjczNiA1LjIyMyA1LjIyMyAwIDAgMSAzLjcyMi0xLjU1NCA1LjIzNCA1LjIzNCAwIDAgMSAzLjcyIDEuNTU0IDUuMjEzIDUuMjEzIDAgMCAxIDEuNTA1IDMuNzM2IDUuMjc5IDUuMjc5IDAgMCAxLS42MjMgMi40NzMgMTMuNTc0IDEzLjU3NCAwIDAgMSA0LjIxMyAyLjMyMiA5LjkwMyA5LjkwMyAwIDAgMCAxLjIzLTQuNzk1IDEwLjAzMiAxMC4wMzIgMCAwIDAtMi45NDYtNy4wODYgMTAuMDcgMTAuMDcgMCAwIDAtNy4xLTIuOTRabS0yMy43NSA3Ljk5aC0xLjYxN3YxLjc1YTIuNDE5IDIuNDE5IDAgMCAwLTEuNTgyIDIuNjg3IDIuNDE0IDIuNDE0IDAgMCAwIDIuMzkgMi4wMDYgMi40NSAyLjQ1IDAgMCAwIDEuNTU1LS41NzQgMi40MTQgMi40MTQgMCAwIDAtLjc0Ni00LjExOXYtMS43NVoiLz4KICA8L2c+Cjwvc3ZnPgo=";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if ((_a = window.coin98) == null ? void 0 : _a.sol) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected());
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.coin98.sol;
      let account;
      try {
        account = (await wallet.connect())[0];
      } catch (error) {
        throw new WalletAccountError(error == null ? void 0 : error.message, error);
      }
      let publicKey;
      try {
        publicKey = new PublicKey(account);
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const response = await wallet.request({ method: "sol_sign", params: [transaction] });
        const publicKey = new PublicKey(response.publicKey);
        const signature = import_bs58.default.decode(response.signature);
        transaction.addSignature(publicKey, signature);
        return transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const response = await wallet.request({ method: "sol_signAllTransactions", params: [transactions] });
        const publicKey = new PublicKey(response.publicKey);
        const signatures = response.signatures;
        return transactions.map((transaction, index) => {
          const signature = import_bs58.default.decode(signatures[index]);
          transaction.addSignature(publicKey, signature);
          return transaction;
        });
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const response = await wallet.request({ method: "sol_signMessage", params: [message] });
        return import_bs58.default.decode(response.signature);
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-coinbase/lib/esm/adapter.js
init_index_browser_esm();
var CoinbaseWalletName = "Coinbase Wallet";
var CoinbaseWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = CoinbaseWalletName;
    this.url = "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI1MTIiIGN5PSI1MTIiIHI9IjUxMiIgZmlsbD0iIzAwNTJGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MiA1MTJDMTUyIDcxMC44MjMgMzEzLjE3NyA4NzIgNTEyIDg3MkM3MTAuODIzIDg3MiA4NzIgNzEwLjgyMyA4NzIgNTEyQzg3MiAzMTMuMTc3IDcxMC44MjMgMTUyIDUxMiAxNTJDMzEzLjE3NyAxNTIgMTUyIDMxMy4xNzcgMTUyIDUxMlpNNDIwIDM5NkM0MDYuNzQ1IDM5NiAzOTYgNDA2Ljc0NSAzOTYgNDIwVjYwNEMzOTYgNjE3LjI1NSA0MDYuNzQ1IDYyOCA0MjAgNjI4SDYwNEM2MTcuMjU1IDYyOCA2MjggNjE3LjI1NSA2MjggNjA0VjQyMEM2MjggNDA2Ljc0NSA2MTcuMjU1IDM5NiA2MDQgMzk2SDQyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        if (window == null ? void 0 : window.coinbaseSolana) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.coinbaseSolana;
      try {
        await wallet.connect();
      } catch (error) {
        throw new WalletConnectionError(error == null ? void 0 : error.message, error);
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(transaction, connection, options = {}) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signers, ...sendOptions } = options;
        transaction = await this.prepareTransaction(transaction, connection, sendOptions);
        (signers == null ? void 0 : signers.length) && transaction.partialSign(...signers);
        sendOptions.preflightCommitment = sendOptions.preflightCommitment || connection.commitment;
        const { signature } = await wallet.signAndSendTransaction(transaction, sendOptions);
        return signature;
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
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-coinhub/lib/esm/adapter.js
init_index_browser_esm();
var CoinhubWalletName = "Coinhub";
var CoinhubWalletAdapter = class extends BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = CoinhubWalletName;
    this.url = "https://coinhub.org";
    this.icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPuefqeW9ojwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLkuIvovb3pobVpb3MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzguMDAwMDAwLCAtOTQuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJDb2luaHViLSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM4LjAwMDAwMCwgOTQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PC9yZWN0PgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4zMzMzMzMsIDMuMzMzMzMzKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTcuOTU2MzU0Miw0MC43MDQ2MzE2IEM1Ny45NTYzNTQyLDQwLjcwNDYzMTYgNjIuNzc2ODc1LDU2LjM0NTIxMDUgODEuNjE1OTg5Niw1OC41MTY2ODQyIEM4NC43MzEzNTQyLDU4Ljg3NTUyNjMgODguMjYwNTIwOCw1OS4yNjM4NDIxIDkxLjg2ODQzNzUsNTguMTg4MDUyNiBDOTIuMDIyMjkxNyw1OC4xOTc2MzE2IDkyLjE3MjUsNTguMjQwNzM2OCA5Mi4zMDgxMjUsNTguMzE0MDUyNiBDOTIuNDQ0MTE0Niw1OC4zODczNjg0IDkyLjU2Mjk2ODgsNTguNDg5MDUyNiA5Mi42NTY2NjY3LDU4LjYxMjg0MjEgQzkyLjc1LDU4LjczNjYzMTYgOTIuODE1OTg5Niw1OC44Nzk1Nzg5IDkyLjg1MDI2MDQsNTkuMDMxMzY4NCBDOTIuODg0NTMxMyw1OS4xODMxNTc5IDkyLjg4NTYyNSw1OS4zNDA0NzM3IDkyLjg1NDI3MDgsNTkuNDkzIEM5Mi4zMjM4MDIxLDYzLjE1MTc4OTUgOTEuMTIzNTkzNyw2Ni42Nzg2ODQyIDg5LjMxNTI2MDQsNjkuODkzNTI2MyBDODQuNzQxMTk3OSw3OC4xMTE4OTQ3IDc0LjY5NTQ2ODgsODguOTgwNjg0MiA1Mi4wMTE4MjI5LDkyLjgwNiBDNTAuODA5MDYyNSw5Mi44MDYgNDguNDMzMDcyOSw5MS43NDAxNTc5IDQ3LjMyOTExNDYsOTEuOTI5NTI2MyBDNDcuMzI5MTE0Niw5MS45MDkyNjMyIDE5Ljk3MjUzMTIsNjcuNjUyMDUyNiA1Ny45NTYzNTQyLDQwLjcwNDYzMTYgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0NGQkZBMyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01Mi4wMTE0NTgzLDkyLjgwNiBDNTIuMDExNDU4Myw5Mi44MDYgMzIuMTk2NSw2NC4xNzUyNjMyIDYzLjMwOTE2NjcsNDkuNTExIEw1OS40MzQ3Mzk2LDQ0LjQxMDU3ODkgQzU5LjQzNDczOTYsNDQuNDEwNTc4OSAxOS4xNDQxOTc5LDY1LjE5MTM2ODQgNTIuMDExNDU4Myw5Mi44MDYgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0I5QTc5OCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05Mi44NTQ2MzU0LDU5LjUzMzE1NzkgQzkyLjIzOTU4MzMsNjMuMzYxMDUyNiA5MC45NDAyMDgzLDY3LjA0Mzc4OTUgODkuMDE5OTQ3OSw3MC40MDE1Nzg5IEw4My4yNjI0NDc5LDU4LjY5NjEwNTMgQzg1LjkzMDEwNDIsNTkuMDU0OTQ3NCA4OC42Mzk2ODc1LDU4LjkxNjQyMTEgOTEuMjU3NzYwNCw1OC4yODc4OTQ3IEM5Mi41MDk3Mzk2LDU3Ljk5OTA1MjYgOTMuMDUxODc1LDU4LjQxNzIxMDUgOTIuODU0NjM1NCw1OS41MzMxNTc5IFoiIGlkPSLot6/lvoQiIGZpbGw9IiM4QzY3NDIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTkuNzk5Njg3NSw2Ny41MzIzMTU4IEM2Mi4wMTU2MjUsNjcuNTMyMzE1OCA2My44MTE5MjcxLDY1LjcxNzEwNTMgNjMuODExOTI3MSw2My40Nzc4NDIxIEM2My44MTE5MjcxLDYxLjIzODU3ODkgNjIuMDE1NjI1LDU5LjQyMzM2ODQgNTkuNzk5Njg3NSw1OS40MjMzNjg0IEM1Ny41ODM3NSw1OS40MjMzNjg0IDU1Ljc4NzQ0NzksNjEuMjM4NTc4OSA1NS43ODc0NDc5LDYzLjQ3Nzg0MjEgQzU1Ljc4NzQ0NzksNjUuNzE3MTA1MyA1Ny41ODM3NSw2Ny41MzIzMTU4IDU5Ljc5OTY4NzUsNjcuNTMyMzE1OCBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMjIyMjIyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYwLjU1OTExNDYsNi44MTQwMjEwNSBMNjMuODkxMDQxNywxLjI3NTEzNDc0IEM1OC4yNzI4MTI1LDIuMjE4NjEzMTYgNTIuNzc3MDgzMywzLjc5NTg0MjExIDQ3LjUwNjY2NjcsNS45NzcxODk0NyBDNDYuMTIzODAyMSw2LjEwODQ5NDc0IDQ0Ljc0ODU5MzcsNi4zMTEzMTA1MyA0My4zODYxNDU4LDYuNTg0ODYzMTYgTDUwLjA2MDIwODMsMy40NjI0NjIyOWUtMTMgQzQzLjQ2MzA3MjksMS42MzEzMDk0NyAzNy40ODkzNzUsNS4xOTM3NDIxMSAzMi44ODcwNTczLDEwLjI0MDkyNjMgQzMyLjIwNjgxNzcsMTAuNTc5NjUyNiAzMS41MzY0NTgzLDEwLjk0ODI1NzkgMzAuOTE1MzkwNiwxMS4zMzY3NTc5IEwzNi4xNTAxMTQ2LDEuNTkzOTI1NzkgQzI5LjA0OTE5NzksNS40NjMyNDIxMSAyMy40ODAzMzMzLDExLjY4MTYzNjggMjAuMzc2OTYzNSwxOS4yMDY3NDc0IEwyMy42MTA0NTMxLDcuODUwMDU3ODkgQzIzLjYxMDQ1MzEsNy44NTAwNTc4OSAxNS40Mzc5ODk2LDE0LjEwNjIxNTggMTMuOTg4ODQzNywyOS41MzczNDc0IEMxMy44MDE1MjA4LDI5LjkxNTkgMTMuNjE0MTk3OSwzMC4yOTQ0NTI2IDEzLjQzNjc1NTIsMzAuNjgyOTUyNiBMMTIuNTQ5NTQxNywxNi44NTU3MDUzIEMxMi41NDk1NDE3LDE2Ljg1NTcwNTMgNC42MDM4MTI1LDI5LjY1Njg2MzIgOS43MTAzNDg5Niw0NC4xMzE2ODQyIEw0LjE2MDE4NzUsMzAuMTg0ODQ3NCBDNC4xNjAxODc1LDMwLjE4NDg0NzQgMC43MTk2NTEwNDIsNDEuMTQzMDUyNiA5LjA4OTI4MTI1LDU1LjM0OSBMLTIuNzYzMjIxNzVlLTE0LDQ0LjcwOTM2ODQgQy0yLjc2MzIyMTc1ZS0xNCw0NC43MDkzNjg0IDAuODc3MzgwNzI5LDYzLjA2OTI2MzIgMTEuMjY3OTU4Myw3My4wMDE1MjYzIEMxMS4yNjc5NTgzLDczLjAwMTUyNjMgMTUuMDA0MjA4Myw3MS44NzYgMTcuMzAxMTkyNyw3NC41NDU1Nzg5IEMyMC45NjAyMjQsNzkuOTIzNDIxMSAyNS44MDI5NDc5LDg0LjM3MSAzMS40NDkxNzcxLDg3LjUzOTQyMTEgQzM3LjA5NTI2MDQsOTAuNzA3NDczNyA0My4zOTE2MTQ2LDkyLjUxMDUyNjMgNDkuODQzMjgxMiw5Mi44MDYgQzUwLjM4NTQxNjcsOTIuODA2IDUxLjQ2OTY4NzUsOTIuODA2IDUxLjQ2OTY4NzUsOTIuODA2IEM1MS40Njk2ODc1LDkyLjgwNiAzMi4xODcwOTM3LDc1Ljk4MDIxMDUgNTAuNzY5Njg3NSw1MS45NjE3MzY4IEM2OS4zNjIzNDM3LDI5Ljg1NjEwNTMgOTMuMzg2OTI3MSw0NS4yMjczNjg0IDkzLjE2MDE1NjIsNDMuMjQ0ODk0NyBDOTIuMDM3NjA0MiwzNC41NDI2Nzg5IDg4LjMxNTU3MjksMjYuMzkzMjA1MyA4Mi40OTA2MjUsMTkuODgzOTc4OSBDNzYuNjY1Njc3MSwxMy4zNzQ3NTI2IDY5LjAxNDg5NTgsOC44MTUzMjEwNSA2MC41NTkxMTQ2LDYuODE0MDIxMDUgTDYwLjU1OTExNDYsNi44MTQwMjEwNSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMjJBMDc5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQzLjM0NjQwNjMsNzguNTgwMTU3OSBDNDMuMzQ2NDA2Myw3OC41ODAxNTc5IDIyLjA2MjQzMjMsODYuMDgxNTc4OSAyLjI4NjgzNDM4LDU3LjAzMjMxNTggQzQuNDA4MTc3MDgsNjQuNjU0MjEwNSA4LjIwNjE1MTA0LDcxLjY5MzI2MzIgMTMuMzk3MDUyMSw3Ny42MjM3MzY4IEMyMC42MjMxMzAyLDg2LjAyMTg5NDcgMzQuOTc2NzM5Niw5My4zMTQwNTI2IDUyLjAxMTgyMjksOTIuNzg2MTA1MyBDNDkuOTUzNzUsOTEuMTc5NDIxMSA0OC4yMzcyOTE3LDg5LjE3MDQyMTEgNDYuOTY0MTY2Nyw4Ni44Nzg0NzM3IEM0NS40OTM4MDIxLDg0LjIzOCA0NC4yODE5MjcxLDgxLjQ1OSA0My4zNDY0MDYzLDc4LjU4MDE1NzkgTDQzLjM0NjQwNjMsNzguNTgwMTU3OSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMUI4MDYxIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if ((_a = window.coinhub) == null ? void 0 : _a.isCoinhubWallet) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.coinhub;
      let account;
      try {
        account = await wallet.getAccount();
      } catch (error) {
        throw new WalletAccountError(error == null ? void 0 : error.message, error);
      }
      let publicKey;
      try {
        publicKey = new PublicKey(account);
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    if (this._wallet) {
      this._wallet = null;
      this._publicKey = null;
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-fractal/lib/esm/adapter.js
init_index_browser_esm();
var FractalWalletName = "Fractal";
var FractalWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = FractalWalletName;
    this.url = "https://developers.fractal.is/wallet-adapters/solana";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxwYXRoIGQ9Ik0zNDIuMjQgNzYzLjkzVjI0My44Mkg3MTV2MTEyLjY5SDQ4MXYxMTUuNThoMTgydjExMi42OUg0ODF2MTc5LjE1WiIgc3R5bGU9ImZpbGw6I2RlMzU5YyIvPjwvc3ZnPg==";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.Loadable;
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Loadable)
        throw new WalletNotReadyError();
      this._connecting = true;
      let FractalWalletClass;
      try {
        FractalWalletClass = (await import("./esm-CGGIZ4GH.js")).FractalWalletAdapterImpl;
      } catch (error) {
        throw new WalletLoadError(error == null ? void 0 : error.message, error);
      }
      let wallet;
      try {
        wallet = new FractalWalletClass();
      } catch (error) {
        throw new WalletConfigError(error == null ? void 0 : error.message, error);
      }
      const account = wallet.getPublicKey();
      if (!account) {
        try {
          await wallet.connect();
        } catch (error) {
          throw new WalletConnectionError(error == null ? void 0 : error.message, error);
        }
      }
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.getPublicKey().toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return wallet.signTransaction(transaction);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return wallet.signAllTransactions(transactions);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return wallet.signMessage(message);
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-huobi/lib/esm/adapter.js
init_index_browser_esm();
var HuobiWalletName = "HuobiWallet";
var HuobiWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = HuobiWalletName;
    this.url = "https://www.huobiwallet.io";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI0IiBoZWlnaHQ9IjIyNCIgdmlld0JveD0iMCAwIDIyNCAyMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAwTDIyNCAwVjIyNEgwTDAgMFoiIGZpbGw9IiMyMTU3RTIiLz4KPHBhdGggZD0iTTEzMS4wNTkgODEuMTc3MUMxMzEuMDU5IDU3Ljc1MzEgMTE5LjQ1OCAzNy42MzE1IDExMC42MjUgMzEuMDcyOEMxMTAuNjI1IDMxLjA3MjggMTA5Ljk1MyAzMC43MDQyIDExMCAzMS42MjU4VjMxLjYyNThDMTA5LjI2NSA3Ni44MzAzIDg1Ljc2NzIgODkuMDg3NSA3Mi44MzggMTA1LjU4NEM0My4wMjQxIDE0My42NzcgNzAuNzU4NyAxODUuNDU2IDk4Ljk5MzUgMTkzLjEzNkMxMTQuNzk5IDE5Ny40NTIgOTUuMzUwOCAxODUuNDU2IDkyLjg0OTQgMTYwLjIzNUM4OS44MDA3IDEyOS43NDUgMTMxLjA1OSAxMDYuNDQ0IDEzMS4wNTkgODEuMTc3MVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xMTAxXzEyNSkiLz4KPHBhdGggZD0iTTE0My41OTcgOTYuMzE3NEMxNDMuNDA5IDk2LjE5NDMgMTQzLjE1OCA5Ni4xMDIgMTQyLjk4NiA5Ni4zOTQzQzE0Mi40ODQgMTAyLjEwMiAxMzYuNTYgMTE0LjI4NiAxMjkuMDM3IDEyNS40ODZDMTAzLjU1MiAxNjMuNDU1IDExOC4wNjUgMTgxLjc2MiAxMjYuMjQ3IDE5MS42MzlDMTMwLjk0OSAxOTcuMzQ3IDEyNi4yNDcgMTkxLjYzOSAxMzguMDk2IDE4NS44MDhDMTUyLjczNSAxNzcuMDkyIDE2Mi4yMzQgMTYyLjAyIDE2My42NDMgMTQ1LjI3QzE2NS4yMzMgMTI2Ljc1OCAxNTcuNzk4IDEwOC42IDE0My41OTcgOTYuMzE3NFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xMTAxXzEyNSkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xMTAxXzEyNSIgeDE9IjEyMi40MDEiIHkxPSIyMDkuMjk1IiB4Mj0iMTc4LjY2MiIgeTI9IjExMC40NDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y3RjZGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xMTAxXzEyNSIgeDE9IjE1Ny44NjEiIHkxPSIyMDMuMTc3IiB4Mj0iMTg5LjAxNCIgeTI9IjE0MC4wMjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y3RjZGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if ((_a = window.huobiWallet) == null ? void 0 : _a.isHuobiWallet) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.huobiWallet;
      try {
        await wallet.connect();
      } catch (error) {
        throw new WalletConnectionError(error == null ? void 0 : error.message, error);
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      this.emit("disconnect");
    }
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-hyperpay/lib/esm/adapter.js
init_index_browser_esm();
var HyperPayWalletName = "HyperPay";
var HyperPayWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = HyperPayWalletName;
    this.url = "https://hyperpay.io";
    this.icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTIwcHgiIGhlaWdodD0iNTIwcHgiIHZpZXdCb3g9IjAgMCA1MjAgNTIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkh5cGVyUGF5PC90aXRsZT4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iue8lue7hC0zMyIgZmlsbD0iIzFBNzJGRSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTI2MCwwIEM0MDMuNTIsMCA1MjAsMTE1Ljk0MTI1NSA1MjAsMjU5LjY1Mjg3IEM1MjAsNDAzLjM2NDQ4NiA0MDMuNTIsNTIwIDI2MCw1MjAgQzExNi40OCw1MjAgMCw0MDQuMDU4NzQ1IDAsMjYwLjM0NzEzIEMwLDExNi42MzU1MTQgMTE2LjQ4LDAgMjYwLDAgWiBNMTIzLjQ2Mzk4NSwxMjIuNjQ3NzM3IEwxMjMuNDEzMzMzLDEyMi42NDc1MyBMMTA2LjA4LDE4My42MjQ4MzMgTDIyMS44NjY2NjcsMTgzLjYyNDgzMyBMMjA4LDI0OC43NTk2OCBMMjc5LjQxMzMzMywyNDguNzU5NjggTDI3OS40MTMzMzMsMjQ4Ljc1OTY4IEwyNzkuNDEzODUzLDI0OC43MDU5NzggQzI3OS40MjM3MzMsMjQ4LjAxNDc4NiAyNzkuNjIxMzMzLDI0MC40NDQ1OTMgMjgzLjU3MzMzMywyMTQuMTEzNDg1IEMyODkuODEzMzMzLDE3MC40NTkyNzkgMzY1LjM4NjY2NywxNjcuNjg3NTgzIDM2NC42OTMzMzMsMjE2Ljg4NTE4IEMzNjQsMjUyLjkxNzIyMyAzMzYuMjY2NjY3LDI1Ny4wNzQ3NjYgMzE4LjI0LDI1Ny43Njc2OSBDMzEyLjQ3MTQ2NywyNTcuOTg5NDI2IDI4Ni4xODQ3MDQsMjU4LjA2OTI1MSAyNTMuMTAyMDc3LDI1OC4wNzUyODIgTDI0My42Mjk3MDcsMjU4LjA3NTA4OSBDMTc0LjA4NzMzMywyNTguMDYwNDUxIDgxLjgxMzMzMzMsMjU3Ljc2NzY5IDgxLjgxMzMzMzMsMjU3Ljc2NzY5IEw4MS44MTMzMzMzLDI1Ny43Njc2OSBMNjEuNzA2NjY2NywzMTguMDUyMDY5IEwxODcuMiwzMTguMDUyMDY5IEwxNjguNDgsMzkxLjUwMjAwMyBMMjQ4LjkwNjY2NywzOTEuNTAyMDAzIEwyNjguMzIsMzE2LjY2NjIyMiBDMjY4LjMyLDMxNi42NjYyMjIgMjgzLjc5NTIsMzE2LjQxNjc2OSAyOTkuOTE5MzYsMzE2LjIxNzIwNyBMMzAyLjM0MDk5OCwzMTYuMTg3Njg0IEMzMTIuMzAxMzkyLDMxNi4wNjgxNTkgMzIyLjIyNjY2NywzMTUuOTczMjk4IDMyOC42NCwzMTUuOTczMjk4IEMzNTkuODQsMzE1Ljk3MzI5OCA0NDIuMzQ2NjY3LDI5NS44Nzg1MDUgNDQyLjM0NjY2NywyMDkuOTU1OTQxIEM0NDIuMzQ2NjY3LDEzMS42NTU1NDEgMzU3LjA2NjY2NywxMjMuMzQwNDU0IDMyNS4xNzMzMzMsMTIzLjM0MDQ1NCBDMjkzLjI4LDEyMy4zNDA0NTQgMTIzLjQxMzMzMywxMjIuNjQ3NTMgMTIzLjQxMzMzMywxMjIuNjQ3NTMgWiIgaWQ9IuW9oueKtue7k+WQiCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a, _b;
        if ((_b = (_a = window.hyperPay) == null ? void 0 : _a.solana) == null ? void 0 : _b.isHyperPay) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.hyperPay.solana;
      try {
        await wallet.connect();
      } catch (error) {
        throw new WalletConnectionError(error == null ? void 0 : error.message, error);
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      this.emit("disconnect");
    }
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-keystone/lib/esm/adapter.js
init_index_browser_esm();
var KeystoneWalletName = "Keystone";
var KeystoneWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = KeystoneWalletName;
    this.url = "https://keyst.one";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSJ3aGl0ZSIvPgogICAgPHJlY3QgeD0iNSIgeT0iNSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjY5NjUgNS40MzQ4N0MxNS4wOTEgNC43NTMxNiAxNi4wNzQ5IDQuNzUyMTEgMTYuNDcwOCA1LjQzMjk5TDE3LjMzOTggNi45MjcxOUMxNy42NDkgNy40NTg5NiAxNy42NDg3IDguMTE1ODggMTcuMzM4OSA4LjY0NzM0TDkuNjMxMjEgMjEuODcxQzkuMjE4NTEgMjIuNTc5MSA4LjE5NjIzIDIyLjU4MTEgNy43ODA3NiAyMS44NzQ2QzcuNzMxMzIgMjEuNzkwNiA3LjY5MzU4IDIxLjcwMDEgNy42Njg1OCAyMS42MDU4TDcuMzcwODggMjAuNDgyOUM3LjA5MjY2IDE5LjQzMzQgNy4yNDE4IDE4LjMxNjQgNy43ODU2MyAxNy4zNzY3TDE0LjY5NjUgNS40MzQ4N1pNMTIuNjYzNiAxOS4yODU4QzEzLjA2MzUgMTguNTk5NyAxNC4wMDM1IDE4LjQ3NTcgMTQuNTY3NyAxOS4wMzQ1TDE3LjQyODggMjEuODY4NkMxOC44NjA1IDIzLjI4NjcgMTguODU2NSAyNS42MDE2IDE3LjQyIDI3LjAxNDlDMTcuMjA0NSAyNy4yMjY5IDE2Ljg3OTggMjcuMjgyNSAxNi42MDYgMjcuMTU0MkwxMS42MDAyIDI0LjgwODFDMTAuNjkwNyAyNC4zODE5IDEwLjM0MyAyMy4yNjcxIDEwLjg0ODcgMjIuMzk5NEwxMi42NjM2IDE5LjI4NThaTTIwLjQzNSAxNi4zMzcyQzIxLjQ4OTcgMTYuMzM3MiAyMi4xNDc0IDE1LjE5MzkgMjEuNjE3MiAxNC4yODIyTDE5Ljc4MjggMTEuMTI4QzE5LjI1NTggMTAuMjIxOCAxNy45NDcxIDEwLjIyMTIgMTcuNDE5MiAxMS4xMjY5TDE1LjQzMDkgMTQuNTM4MUMxNC45NjYgMTUuMzM1OCAxNS41NDE0IDE2LjMzNzIgMTYuNDY0NyAxNi4zMzcyTDIwLjQzNSAxNi4zMzcyWiIgZmlsbD0iYmxhY2siLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNzMwMyAxNy42NDU5QzIyLjg3MTMgMTcuNjQ1OSAyMy45MjYxIDE4LjI1MjcgMjQuNDk5OCAxOS4yMzlWMTkuMjM5QzI0LjY3NjMgMTkuNTQyNyAyNC42MjQ3IDE5LjkyNzQgMjQuMzc0MyAyMC4xNzM3TDIyLjA1MTEgMjIuNDU5QzIxLjQ1MDkgMjMuMDQ5NCAyMC40ODc3IDIzLjA0NzggMTkuODg5NSAyMi40NTUzTDE2LjUxMDEgMTkuMTA3OEMxNS45Njc3IDE4LjU3MDYgMTYuMzQ4MSAxNy42NDU5IDE3LjExMTYgMTcuNjQ1OUwyMS43MzAzIDE3LjY0NTlaIiBmaWxsPSIjMjE2MUZGIi8+Cjwvc3ZnPgo=";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.Loadable;
    this._keyring = null;
    this._publicKey = null;
    this._connecting = false;
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Loadable)
        throw new WalletNotReadyError();
      this._connecting = true;
      let keyring;
      try {
        const { DefaultKeyring } = await import("./dist-NCEABGFB.js");
        keyring = DefaultKeyring.getEmptyKeyring();
      } catch (error) {
        throw new WalletLoadError(error == null ? void 0 : error.message, error);
      }
      let account;
      try {
        await keyring.readKeyring();
        account = keyring.getAccounts()[0].pubKey;
      } catch (error) {
        throw new WalletAccountError(error == null ? void 0 : error.message, error);
      }
      let publicKey;
      try {
        publicKey = new PublicKey(account);
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      this._keyring = keyring;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    if (this._keyring) {
      this._keyring = null;
      this._publicKey = null;
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    var _a;
    try {
      const keyring = this._keyring;
      const publicKey = (_a = this._publicKey) == null ? void 0 : _a.toString();
      if (!keyring || !publicKey)
        throw new WalletNotConnectedError();
      try {
        return await keyring.signTransaction(publicKey, transaction);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    var _a;
    try {
      const keyring = this._keyring;
      const publicKey = (_a = this._publicKey) == null ? void 0 : _a.toString();
      if (!keyring || !publicKey)
        throw new WalletNotConnectedError();
      try {
        return keyring.signMessage(publicKey, message);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-krystal/lib/esm/adapter.js
init_index_browser_esm();
var KrystalWalletName = "Krystal";
var KrystalWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = KrystalWalletName;
    this.url = "https://krystal.app";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBmaWxsPSIjMDEwMTAxIi8+CjxyZWN0IHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiByeD0iMTAwIiBmaWxsPSIjMDEwMTAxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjkxLjg4NyA4MC44NDA3QzI5MS44ODcgNzUuMDgyNiAyOTcuNTg1IDcxLjA1NzYgMzAzLjAxMiA3Mi45ODJMMzc3LjYxOCA5OS40Mzc2QzM4My4wMyAxMDEuMzU3IDM4NC45MjggMTA4LjA0MyAzODEuMzMxIDExMi41MTlMMzA2LjcyNSAyMDUuMzcyQzMwMS43OTQgMjExLjUxIDI5MS44ODcgMjA4LjAyMyAyOTEuODg3IDIwMC4xNVY4MC44NDA3Wk0xNTIuMzUzIDE3Mi4zM0MxNDYuMjg1IDE3NS44NDYgMTQ3LjAwNiAxODQuODI4IDE1My41NTcgMTg3LjMzM0wyNjYuMTEyIDIzMC4zNTNDMjcxLjU3MSAyMzIuNDQgMjc3LjQyNyAyMjguNDA5IDI3Ny40MjcgMjIyLjU2NVYxMTQuMzE5QzI3Ny40MjcgMTA3Ljg5NSAyNzAuNDY3IDEwMy44ODQgMjY0LjkwOCAxMDcuMTA1TDE1Mi4zNTMgMTcyLjMzWk03Mi41MjcyIDI5MC40NzJDNzIuMDY0MSAyOTYuMTg5IDc3LjM3NzUgMzAwLjY1NSA4Mi45Mjk3IDI5OS4yMTdMMjQ5LjkwNyAyNTUuOTQ1QzI1Ny43NjkgMjUzLjkwOCAyNTguMzc1IDI0Mi45NzcgMjUwLjc4NyAyNDAuMDgzTDkyLjIxMiAxNzkuNjEzQzg3LjAxOTEgMTc3LjYzMyA4MS4zNzg5IDE4MS4xOTEgODAuOTMwMiAxODYuNzNMNzIuNTI3MiAyOTAuNDcyWk0yNDkuOTA4IDI4Ni45M0MyNTIuMTQ2IDI4MC42MjcgMjQ2LjQyNCAyNzQuMzg3IDIzOS45NSAyNzYuMDcyTDEyNy42NDkgMzA1LjMwMkMxMjEuMzU3IDMwNi45MzkgMTE5LjI3NyAzMTQuODI5IDEyMy45NDQgMzE5LjM1NkwxOTkuNzYgMzkyLjkwNEMyMDQuMTE5IDM5Ny4xMzIgMjExLjM5MiAzOTUuNDMyIDIxMy40MjQgMzg5LjcwOEwyNDkuOTA4IDI4Ni45M1pNMzExLjk0MyAyNDQuMTQ3QzMwNS44MzEgMjQyLjg5NiAzMDMuMjA4IDIzNS42MjMgMzA3LjExNCAyMzAuNzU4TDM4NS43MDMgMTMyLjg4MkMzOTAuMTMyIDEyNy4zNjUgMzk4Ljk4NyAxMjkuNTI1IDQwMC4zNzkgMTM2LjQ2MUw0MjQuMjI5IDI1NS4zMTJDNDI1LjQwMyAyNjEuMTY0IDQyMC4yMjggMjY2LjMxOCA0MTQuMzgxIDI2NS4xMjFMMzExLjk0MyAyNDQuMTQ3Wk0zMjEuMjA0IDI2NC4wNjhDMzEzLjI5MSAyNjIuNDQyIDMwNy45MjEgMjcxLjg5MiAzMTMuMzY4IDI3Ny44NThMNDE1Ljc3OSAzOTAuMDMxQzQyMC41NDMgMzk1LjI0OSA0MjkuMjMxIDM5Mi41NDggNDMwLjE5NyAzODUuNTQ5TDQ0Mi40MjIgMjk2LjkzMkM0NDMuMDIyIDI5Mi41OCA0NDAuMTQzIDI4OC41MDkgNDM1Ljg0IDI4Ny42MjVMMzIxLjIwNCAyNjQuMDY4Wk0yNzYuMjQ3IDMwMi44MDhDMjc2LjA3NSAyOTMuNTM3IDI2My4xNzEgMjkxLjQyOCAyNjAuMDU2IDMwMC4xNjFMMjE1LjA1MiA0MjYuMzYyQzIxMi44NzUgNDMyLjQ2NSAyMTguMTg4IDQzOC42MTEgMjI0LjU0MyA0MzcuMzM4TDI3MS43MDcgNDI3Ljg5M0MyNzUuNjYgNDI3LjEwMiAyNzguNDgxIDQyMy41OTUgMjc4LjQwNiA0MTkuNTYzTDI3Ni4yNDcgMzAyLjgwOFpNMjkyLjI5NiAzMDQuMDM2QzI5Mi4xNTMgMjk2LjM2OSAzMDEuNTYzIDI5Mi41OTEgMzA2Ljc2MiAyOTguMjI4TDM4MS43NjUgMzc5LjU2QzM4Ni4yMTggMzg0LjM4OCAzODMuNTk5IDM5Mi4yMyAzNzcuMTM5IDM5My40MTRMMzAzLjkgNDA2LjgzM0MyOTguODQxIDQwNy43NiAyOTQuMTU3IDQwMy45MyAyOTQuMDYxIDM5OC43ODdMMjkyLjI5NiAzMDQuMDM2WiIgZmlsbD0iIzFERTlCNiIvPgo8L3N2Zz4K";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if ((_a = window.krystal) == null ? void 0 : _a.solana) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected());
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.krystal.solana;
      let account;
      try {
        account = (await wallet.connect())[0];
      } catch (error) {
        throw new WalletAccountError(error == null ? void 0 : error.message, error);
      }
      let publicKey;
      try {
        publicKey = new PublicKey(account);
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-ledger/lib/esm/polyfills/Buffer.js
var import_buffer = __toESM(require_buffer(), 1);
if (typeof window !== "undefined" && window.Buffer === void 0) {
  window.Buffer = import_buffer.Buffer;
}

// node_modules/@ledgerhq/hw-transport/lib-es/Transport.js
var import_events = __toESM(require_events());
init_lib_es();
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
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
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
var Transport = (
  /** @class */
  function() {
    function Transport2() {
      var _this = this;
      this.exchangeTimeout = 3e4;
      this.unresponsiveTimeout = 15e3;
      this.deviceModel = null;
      this._events = new import_events.default();
      this.send = function(cla, ins, p1, p2, data, statusList) {
        if (data === void 0) {
          data = Buffer.alloc(0);
        }
        if (statusList === void 0) {
          statusList = [StatusCodes.OK];
        }
        return __awaiter(_this, void 0, void 0, function() {
          var response, sw;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (data.length >= 256) {
                  throw new TransportError("data.length exceed 256 bytes limit. Got: " + data.length, "DataLengthTooBig");
                }
                return [4, this.exchange(Buffer.concat([
                  Buffer.from([cla, ins, p1, p2]),
                  Buffer.from([data.length]),
                  data
                ]))];
              case 1:
                response = _a.sent();
                sw = response.readUInt16BE(response.length - 2);
                if (!statusList.some(function(s) {
                  return s === sw;
                })) {
                  throw new TransportStatusError(sw);
                }
                return [2, response];
            }
          });
        });
      };
      this.exchangeAtomicImpl = function(f) {
        return __awaiter(_this, void 0, void 0, function() {
          var resolveBusy, busyPromise, unresponsiveReached, timeout, res;
          var _this2 = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (this.exchangeBusyPromise) {
                  throw new TransportRaceCondition("An action was already pending on the Ledger device. Please deny or reconnect.");
                }
                busyPromise = new Promise(function(r) {
                  resolveBusy = r;
                });
                this.exchangeBusyPromise = busyPromise;
                unresponsiveReached = false;
                timeout = setTimeout(function() {
                  unresponsiveReached = true;
                  _this2.emit("unresponsive");
                }, this.unresponsiveTimeout);
                _a.label = 1;
              case 1:
                _a.trys.push([1, , 3, 4]);
                return [4, f()];
              case 2:
                res = _a.sent();
                if (unresponsiveReached) {
                  this.emit("responsive");
                }
                return [2, res];
              case 3:
                clearTimeout(timeout);
                if (resolveBusy)
                  resolveBusy();
                this.exchangeBusyPromise = null;
                return [
                  7
                  /*endfinally*/
                ];
              case 4:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      };
      this._appAPIlock = null;
    }
    Transport2.prototype.exchange = function(_apdu) {
      throw new Error("exchange not implemented");
    };
    Transport2.prototype.setScrambleKey = function(_key) {
    };
    Transport2.prototype.close = function() {
      return Promise.resolve();
    };
    Transport2.prototype.on = function(eventName, cb) {
      this._events.on(eventName, cb);
    };
    Transport2.prototype.off = function(eventName, cb) {
      this._events.removeListener(eventName, cb);
    };
    Transport2.prototype.emit = function(event) {
      var _a;
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      (_a = this._events).emit.apply(_a, __spreadArray([event], __read(args), false));
    };
    Transport2.prototype.setDebugMode = function() {
      console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.");
    };
    Transport2.prototype.setExchangeTimeout = function(exchangeTimeout) {
      this.exchangeTimeout = exchangeTimeout;
    };
    Transport2.prototype.setExchangeUnresponsiveTimeout = function(unresponsiveTimeout) {
      this.unresponsiveTimeout = unresponsiveTimeout;
    };
    Transport2.create = function(openTimeout, listenTimeout) {
      var _this = this;
      if (openTimeout === void 0) {
        openTimeout = 3e3;
      }
      return new Promise(function(resolve, reject) {
        var found = false;
        var sub = _this.listen({
          next: function(e) {
            found = true;
            if (sub)
              sub.unsubscribe();
            if (listenTimeoutId)
              clearTimeout(listenTimeoutId);
            _this.open(e.descriptor, openTimeout).then(resolve, reject);
          },
          error: function(e) {
            if (listenTimeoutId)
              clearTimeout(listenTimeoutId);
            reject(e);
          },
          complete: function() {
            if (listenTimeoutId)
              clearTimeout(listenTimeoutId);
            if (!found) {
              reject(new TransportError(_this.ErrorMessage_NoDeviceFound, "NoDeviceFound"));
            }
          }
        });
        var listenTimeoutId = listenTimeout ? setTimeout(function() {
          sub.unsubscribe();
          reject(new TransportError(_this.ErrorMessage_ListenTimeout, "ListenTimeout"));
        }, listenTimeout) : null;
      });
    };
    Transport2.prototype.decorateAppAPIMethods = function(self, methods, scrambleKey) {
      var e_1, _a;
      try {
        for (var methods_1 = __values(methods), methods_1_1 = methods_1.next(); !methods_1_1.done; methods_1_1 = methods_1.next()) {
          var methodName = methods_1_1.value;
          self[methodName] = this.decorateAppAPIMethod(methodName, self[methodName], self, scrambleKey);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (methods_1_1 && !methods_1_1.done && (_a = methods_1["return"]))
            _a.call(methods_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    };
    Transport2.prototype.decorateAppAPIMethod = function(methodName, f, ctx, scrambleKey) {
      var _this = this;
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function() {
          var _appAPIlock;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                _appAPIlock = this._appAPIlock;
                if (_appAPIlock) {
                  return [2, Promise.reject(new TransportError("Ledger Device is busy (lock " + _appAPIlock + ")", "TransportLocked"))];
                }
                _a.label = 1;
              case 1:
                _a.trys.push([1, , 3, 4]);
                this._appAPIlock = methodName;
                this.setScrambleKey(scrambleKey);
                return [4, f.apply(ctx, args)];
              case 2:
                return [2, _a.sent()];
              case 3:
                this._appAPIlock = null;
                return [
                  7
                  /*endfinally*/
                ];
              case 4:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      };
    };
    Transport2.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)";
    Transport2.ErrorMessage_NoDeviceFound = "No Ledger device found";
    return Transport2;
  }()
);

// node_modules/@solana/wallet-adapter-ledger/lib/esm/util.js
init_index_browser_esm();
function getDerivationPath(account, change) {
  const length = account !== void 0 ? change === void 0 ? 3 : 4 : 2;
  const derivationPath = Buffer.alloc(1 + length * 4);
  let offset = derivationPath.writeUInt8(length, 0);
  offset = derivationPath.writeUInt32BE(harden(44), offset);
  offset = derivationPath.writeUInt32BE(harden(501), offset);
  if (account !== void 0) {
    offset = derivationPath.writeUInt32BE(harden(account), offset);
    if (change !== void 0) {
      derivationPath.writeUInt32BE(harden(change), offset);
    }
  }
  return derivationPath;
}
var BIP32_HARDENED_BIT = 1 << 31 >>> 0;
function harden(n) {
  return (n | BIP32_HARDENED_BIT) >>> 0;
}
var INS_GET_PUBKEY = 5;
var INS_SIGN_MESSAGE = 6;
var P1_NON_CONFIRM = 0;
var P1_CONFIRM = 1;
var P2_EXTEND = 1;
var P2_MORE = 2;
var MAX_PAYLOAD = 255;
var LEDGER_CLA = 224;
async function getPublicKey(transport, derivationPath) {
  const bytes = await send(transport, INS_GET_PUBKEY, P1_NON_CONFIRM, derivationPath);
  return new PublicKey(bytes);
}
async function signTransaction(transport, transaction, derivationPath) {
  const paths = Buffer.alloc(1);
  paths.writeUInt8(1, 0);
  const message = isVersionedTransaction(transaction) ? transaction.message.serialize() : transaction.serializeMessage();
  const data = Buffer.concat([paths, derivationPath, message]);
  return await send(transport, INS_SIGN_MESSAGE, P1_CONFIRM, data);
}
async function send(transport, instruction, p1, data) {
  let p2 = 0;
  let offset = 0;
  if (data.length > MAX_PAYLOAD) {
    while (data.length - offset > MAX_PAYLOAD) {
      const buffer2 = data.slice(offset, offset + MAX_PAYLOAD);
      const response2 = await transport.send(LEDGER_CLA, instruction, p1, p2 | P2_MORE, buffer2);
      if (response2.length !== 2)
        throw new TransportStatusError(StatusCodes.INCORRECT_DATA);
      p2 |= P2_EXTEND;
      offset += MAX_PAYLOAD;
    }
  }
  const buffer = data.slice(offset);
  const response = await transport.send(LEDGER_CLA, instruction, p1, p2, buffer);
  return response.slice(0, response.length - 2);
}

// node_modules/@solana/wallet-adapter-ledger/lib/esm/adapter.js
var LedgerWalletName = "Ledger";
var LedgerWalletAdapter = class extends BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = LedgerWalletName;
    this.url = "https://ledger.com";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzUgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0ibTIzLjU4OCAwaC0xNnYyMS41ODNoMjEuNnYtMTZhNS41ODUgNS41ODUgMCAwIDAgLTUuNi01LjU4M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5KSIvPjxwYXRoIGQ9Im04LjM0MiAwaC0yLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCAtNS41ODUgNS41ODV2Mi43NTdoOC4zNDJ6Ii8+PHBhdGggZD0ibTAgNy41OWg4LjM0MnY4LjM0MmgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUuNzM5KSIvPjxwYXRoIGQ9Im0xNS4xOCAyMy40NTFoMi43NTdhNS41ODUgNS41ODUgMCAwIDAgNS41ODUtNS42di0yLjY3MWgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS40NzggMTEuNDc4KSIvPjxwYXRoIGQ9Im03LjU5IDE1LjE4aDguMzQydjguMzQyaC04LjM0MnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5IDExLjQ3OCkiLz48cGF0aCBkPSJtMCAxNS4xOHYyLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCA1LjU4NSA1LjU4NWgyLjc1N3YtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDExLjQ3OCkiLz48L2c+PC9zdmc+";
    this.supportedTransactionVersions = /* @__PURE__ */ new Set(["legacy", 0]);
    this._readyState = typeof window === "undefined" || typeof document === "undefined" || typeof navigator === "undefined" || !navigator.hid ? WalletReadyState.Unsupported : WalletReadyState.Loadable;
    this._disconnected = () => {
      const transport = this._transport;
      if (transport) {
        transport.off("disconnect", this._disconnected);
        this._transport = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._derivationPath = config.derivationPath || getDerivationPath(0, 0);
    this._connecting = false;
    this._transport = null;
    this._publicKey = null;
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Loadable)
        throw new WalletNotReadyError();
      this._connecting = true;
      let TransportWebHIDClass;
      try {
        TransportWebHIDClass = (await import("./TransportWebHID-UCORCW2V.js")).default;
      } catch (error) {
        throw new WalletLoadError(error == null ? void 0 : error.message, error);
      }
      let transport;
      try {
        transport = await TransportWebHIDClass.create();
      } catch (error) {
        throw new WalletConnectionError(error == null ? void 0 : error.message, error);
      }
      let publicKey;
      try {
        publicKey = await getPublicKey(transport, this._derivationPath);
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      transport.on("disconnect", this._disconnected);
      this._transport = transport;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const transport = this._transport;
    if (transport) {
      transport.off("disconnect", this._disconnected);
      this._transport = null;
      this._publicKey = null;
      try {
        await transport.close();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const transport = this._transport;
      const publicKey = this._publicKey;
      if (!transport || !publicKey)
        throw new WalletNotConnectedError();
      try {
        const signature = await signTransaction(transport, transaction, this._derivationPath);
        transaction.addSignature(publicKey, signature);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
      return transaction;
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-mathwallet/lib/esm/adapter.js
init_index_browser_esm();
var MathWalletName = "MathWallet";
var MathWalletAdapter = class extends BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = MathWalletName;
    this.url = "https://mathwallet.org";
    this.icon = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJtMCAwaDEyOHYxMjhoLTEyOHoiIG9wYWNpdHk9IjAiLz48cGF0aCBkPSJtOTAuODQ3MDA4NiA1Ny43NjEwMDIzYy0yLjI3NzAzNjMtMi4yNzcwMzYzLTIuMjc3MDM2My01Ljk2ODg0MTYgMC04LjI0NTg3NzggMi4yNzcwMzYyLTIuMjc3MDM2MyA1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2NiAyLjI3NzAzNjIgMi4yNzcwMzY2IDUuOTY4ODQxNSAwIDguMjQ1ODc3OC0yLjI3NzAzNjMgMi4yNzcwMzYyLTUuOTY4ODQxNiAyLjI3NzAzNjItOC4yNDU4Nzc4IDB6bS0xOS41ODM5NTk4IDE5LjU4Mzk1OTdjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMSAwLTYuMTg0NDA4M3M0LjQ3NjYzMTEtMS43MDc3NzcyIDYuMTg0NDA4MyAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTEgMCA2LjE4NDQwODMtNC40NzY2MzExIDEuNzA3Nzc3Mi02LjE4NDQwODMgMHptMzAuOTIyMDQyMi0xMC4zMDczNDcyYy0xLjcwNzc3OC0xLjcwNzc3NzItMS43MDc3NzgtNC40NzY2MzEyIDAtNi4xODQ0MDg0IDEuNzA3Nzc3LTEuNzA3Nzc3MiA0LjQ3NjYzMS0xLjcwNzc3NzIgNi4xODQ0MDggMHMxLjcwNzc3NyA0LjQ3NjYzMTIgMCA2LjE4NDQwODQtNC40NzY2MzEgMS43MDc3NzcyLTYuMTg0NDA4IDB6bS0xMC4zMDczNDc3IDEwLjMwNzM0NzJjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMSAwLTYuMTg0NDA4M3M0LjQ3NjYzMTEtMS43MDc3NzcyIDYuMTg0NDA4MyAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTEgMCA2LjE4NDQwODMtNC40NzY2MzExIDEuNzA3Nzc3Mi02LjE4NDQwODMgMHptMjEuNjQ1NDI4Ny0xLjAzMDczNDdjLTEuMTM4NTE4LTEuMTM4NTE4MS0xLjEzODUxOC0yLjk4NDQyMDggMC00LjEyMjkzODkgMS4xMzg1MTktMS4xMzg1MTgxIDIuOTg0NDIxLTEuMTM4NTE4MSA0LjEyMjkzOSAwIDEuMTM4NTE5IDEuMTM4NTE4MSAxLjEzODUxOSAyLjk4NDQyMDggMCA0LjEyMjkzODktMS4xMzg1MTggMS4xMzg1MTgxLTIuOTg0NDIgMS4xMzg1MTgxLTQuMTIyOTM5IDB6bS0xMC4zMDczNDcgMTAuMzA3MzQ3MmMtMS4xMzg1MTgtMS4xMzg1MTgxLTEuMTM4NTE4LTIuOTg0NDIwNyAwLTQuMTIyOTM4OSAxLjEzODUxOC0xLjEzODUxODEgMi45ODQ0MjEtMS4xMzg1MTgxIDQuMTIyOTM5IDAgMS4xMzg1MTggMS4xMzg1MTgyIDEuMTM4NTE4IDIuOTg0NDIwOCAwIDQuMTIyOTM4OS0xLjEzODUxOCAxLjEzODUxODItMi45ODQ0MjEgMS4xMzg1MTgyLTQuMTIyOTM5IDB6bS0yMi42NzYxNjM3LTE4LjU1MzIyNWMtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE1IDAtOC4yNDU4Nzc4czUuOTY4ODQxNS0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDUuOTY4ODQxNSAwIDguMjQ1ODc3OC01Ljk2ODg0MTUgMi4yNzcwMzYzLTguMjQ1ODc3OCAwem0wLTIwLjYxNDY5NDVjLTIuMjc3MDM2My0yLjI3NzAzNjMtMi4yNzcwMzYzLTUuOTY4ODQxNSAwLTguMjQ1ODc3OHM1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtNS45Njg4NDE1IDIuMjc3MDM2My04LjI0NTg3NzggMHptLTEwLjMwNzM0NzIgMTAuMzA3MzQ3M2MtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE2IDAtOC4yNDU4Nzc4IDIuMjc3MDM2Mi0yLjI3NzAzNjMgNS45Njg4NDE1LTIuMjc3MDM2MyA4LjI0NTg3NzggMCAyLjI3NzAzNjIgMi4yNzcwMzYyIDIuMjc3MDM2MiA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtMi4yNzcwMzYzIDIuMjc3MDM2Mi01Ljk2ODg0MTYgMi4yNzcwMzYyLTguMjQ1ODc3OCAwem0tMjAuNzEwNTA2IDBjLTIuMjc3MDM2Mi0yLjI3NzAzNjMtMi4yNzcwMzYyLTUuOTY4ODQxNiAwLTguMjQ1ODc3OCAyLjI3NzAzNjMtMi4yNzcwMzYzIDUuOTY4ODQxNi0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDIuMjc3MDM2MiAyLjI3NzAzNjMgNS45Njg4NDE1IDAgOC4yNDU4Nzc4LTIuMjc3MDM2MiAyLjI3NzAzNjItNS45Njg4NDE1IDIuMjc3MDM2Mi04LjI0NTg3NzggMHptLTE5LjU4Mzk1OTcgMTkuNTgzOTU5N2MtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzExIDAtNi4xODQ0MDgzczQuNDc2NjMxMS0xLjcwNzc3NzIgNi4xODQ0MDgzIDAgMS43MDc3NzcyIDQuNDc2NjMxMSAwIDYuMTg0NDA4My00LjQ3NjYzMTEgMS43MDc3NzcyLTYuMTg0NDA4MyAwem0zMC45MjIwNDE3LTEwLjMwNzM0NzJjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMiAwLTYuMTg0NDA4NHM0LjQ3NjYzMTItMS43MDc3NzcyIDYuMTg0NDA4NCAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTIgMCA2LjE4NDQwODQtNC40NzY2MzEyIDEuNzA3Nzc3Mi02LjE4NDQwODQgMHptLTEwLjMwNzM0NzIgMTAuMzA3MzQ3MmMtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzExIDAtNi4xODQ0MDgzczQuNDc2NjMxMS0xLjcwNzc3NzIgNi4xODQ0MDgzIDAgMS43MDc3NzcyIDQuNDc2NjMxMSAwIDYuMTg0NDA4My00LjQ3NjYzMTEgMS43MDc3NzcyLTYuMTg0NDA4MyAwem0tNDAuMTk4NjU0My0xLjAzMDczNDdjLTEuMTM4NTE4MTMtMS4xMzg1MTgxLTEuMTM4NTE4MTMtMi45ODQ0MjA4IDAtNC4xMjI5Mzg5IDEuMTM4NTE4MS0xLjEzODUxODEgMi45ODQ0MjA4LTEuMTM4NTE4MSA0LjEyMjkzODkgMHMxLjEzODUxODEgMi45ODQ0MjA4IDAgNC4xMjI5Mzg5LTIuOTg0NDIwOCAxLjEzODUxODEtNC4xMjI5Mzg5IDB6bTEwLjMwNzM0NzMgMTAuMzA3MzQ3MmMtMS4xMzg1MTgyLTEuMTM4NTE4MS0xLjEzODUxODItMi45ODQ0MjA3IDAtNC4xMjI5Mzg5IDEuMTM4NTE4MS0xLjEzODUxODEgMi45ODQ0MjA3LTEuMTM4NTE4MSA0LjEyMjkzODggMCAxLjEzODUxODIgMS4xMzg1MTgyIDEuMTM4NTE4MiAyLjk4NDQyMDggMCA0LjEyMjkzODktMS4xMzg1MTgxIDEuMTM4NTE4Mi0yLjk4NDQyMDcgMS4xMzg1MTgyLTQuMTIyOTM4OCAwem00MS4yMjkzODg5IDBjLTEuMTM4NTE4MS0xLjEzODUxODEtMS4xMzg1MTgxLTIuOTg0NDIwNyAwLTQuMTIyOTM4OSAxLjEzODUxODItMS4xMzg1MTgxIDIuOTg0NDIwOC0xLjEzODUxODEgNC4xMjI5Mzg5IDAgMS4xMzg1MTgyIDEuMTM4NTE4MiAxLjEzODUxODIgMi45ODQ0MjA4IDAgNC4xMjI5Mzg5LTEuMTM4NTE4MSAxLjEzODUxODItMi45ODQ0MjA3IDEuMTM4NTE4Mi00LjEyMjkzODkgMHptLTQyLjI2MDEyMzctMTkuNTgzOTU5N2MtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzEyIDAtNi4xODQ0MDg0czQuNDc2NjMxMi0xLjcwNzc3NzIgNi4xODQ0MDg0IDAgMS43MDc3NzcyIDQuNDc2NjMxMiAwIDYuMTg0NDA4NC00LjQ3NjYzMTIgMS43MDc3NzcyLTYuMTg0NDA4NCAwem0xOS41ODM5NTk4IDEuMDMwNzM0N2MtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE1IDAtOC4yNDU4Nzc4czUuOTY4ODQxNS0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDUuOTY4ODQxNSAwIDguMjQ1ODc3OC01Ljk2ODg0MTUgMi4yNzcwMzYzLTguMjQ1ODc3OCAwem0wLTIwLjYxNDY5NDVjLTIuMjc3MDM2My0yLjI3NzAzNjMtMi4yNzcwMzYzLTUuOTY4ODQxNSAwLTguMjQ1ODc3OHM1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtNS45Njg4NDE1IDIuMjc3MDM2My04LjI0NTg3NzggMHptLTEwLjMwNzM0NzMgMTAuMzA3MzQ3M2MtMi4yNzcwMzYyLTIuMjc3MDM2My0yLjI3NzAzNjItNS45Njg4NDE2IDAtOC4yNDU4Nzc4IDIuMjc3MDM2My0yLjI3NzAzNjMgNS45Njg4NDE2LTIuMjc3MDM2MyA4LjI0NTg3NzggMCAyLjI3NzAzNjMgMi4yNzcwMzYyIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtMi4yNzcwMzYyIDIuMjc3MDM2Mi01Ljk2ODg0MTUgMi4yNzcwMzYyLTguMjQ1ODc3OCAweiIvPjwvZz48L3N2Zz4=";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._messaged = (event) => {
      const data = event.data;
      if (data && data.origin === "mathwallet_internal" && data.type === "lockStatusChanged" && !data.payload) {
        this._disconnected();
      }
    };
    this._disconnected = () => {
      if (this._wallet) {
        window.removeEventListener("message", this._messaged);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if ((_a = window.solana) == null ? void 0 : _a.isMathWallet) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.solana;
      let account;
      try {
        account = await wallet.getAccount();
      } catch (error) {
        throw new WalletAccountError(error == null ? void 0 : error.message, error);
      }
      let publicKey;
      try {
        publicKey = new PublicKey(account);
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      window.addEventListener("message", this._messaged);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    if (this._wallet) {
      window.removeEventListener("message", this._messaged);
      this._wallet = null;
      this._publicKey = null;
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-neko/lib/esm/adapter.js
init_index_browser_esm();
var NekoWalletName = "Neko";
var NekoWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = NekoWalletName;
    this.url = "https://nekowallet.com";
    this.icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNDRweCIgaGVpZ2h0PSIyNjBweCIgdmlld0JveD0iMCAwIDI0NCAyNjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0NCAyNjAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIyNDQiIGhlaWdodD0iMjYwIiB4PSIwIiB5PSIwIgogICAgaHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFQUUFBQUVFQ0FNQUFBQW9GT2xoQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4KQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQjQxQk1WRVVBQUFEL2Z5RC9jQ0QvZ0NyLwpmeXIvZ0VEL2dBRC9iU1QvY0JEM2JCajViUnI0YlJuNGJScjViaHI0YmhuNWJCbjRiaG40YlJyNmJodjNiQmo0YlJyM2NCajRiUm41CmJoci9jUno0Ynh2NWJocjNhQmovY3huNWJocjFhaHYzYkJyL2JSdjNiUnIyYkJ2M2JSdjRiQnI0YmhydmNDRDRiUm40YlJyM2NCajQKYmhmM2JSdjRieG4zYkJyM2JCbjRiQm41YlJyNWJScjRiQm4vZGgzNGJocjZhaHY0YXhuL2RTRDNiaHIzYlJqL2JCMzNhQmowYWh2MwpiUnIvYnhINGJCbjRiUnYvYnhENGJSbjZhaFg0YlJyMWJCbjRiUnI2YmhqNGJScjRiUm40YkJuNGJCcjNiUmo0YmhuNGJCcjRiUnI0CmJodjRiUnY5MnNiN3Y1cjVkaWo2bW1INnJYNzh5S245MGJqOHY1djd0b3o1aUVYKzQ5VCs3T1ArOXZILy8vLzVrVlA1ZGluN28zRDcKdG8zNnBIRDVpRWI1ZnpiKzdlTDdyWC81ZnpmLzl2SCs3ZVA3djV2KzdlSC8vLzcrNU5UN3BIRCs0OVA4dG8zOTJzWDZtMkw1ZnpqLwo5dkQ1Z0RqN3JYNzZwSEg4eUtqKzdPSC8vdjc4djVuNGRpbi85ZkQ4djVyNmlFYjd0b3Y5NDlQOHRveis1TlA5MExmNmtWUDRkeW42CmtWVDZtbUQ0ZGlqOTBiZis3T0Q3dFl2KzlmRDdtbUQ4dnBuOHRZdjgwYmo2bzNEOTVOVDZtbUw3bzNIKzl2RDZpRVg4ckgvNm0ySDcKcllEOTI4WDdtbUg4ckg3N3JIN1dKTE5MQUFBQVQzUlNUbE1BQUFBQUFBQUFBQkJBbjkvdno1QlFiOTlmUWQ0Z3YzOEJqODRnQVlBeApnQUh1a0dIUHpoQncvaUZQWUkrZ29JK2VyNzRCenpCd0FZQmdBU0V3N3hDUWp4QytNTEJRcjErdTNyK3VYNC9Pd0xqT0dBQUFBQUZpClMwZEVYM1BSVVMwQUFBQUpjRWhaY3dBQUN4TUFBQXNUQVFDYW5CZ0FBQUFIZEVsTlJRZm1CaHdHRkNaaGFHR2lBQUFPMTBsRVFWUjQKMnUyZCsyTVVWeFhIbDFacU5vWGF0QW1VaDRhdEJiYUNiVVNMSWxTMFZTeDlPTTAweXo2U3pTNGh6UVBMMGhwVEVaWUVBelZxMGFxawppbS8rVkdkMlp2WTVNK2Q3WnM2ZG05MzAreVBNenIyZm5Edm5mdStkZSsra1Vnd05wWWVmM0dQczJUdWM1dnhLb1hhbG43SXFaT3dkCi9vcXlJcDYyN3U5cTVCbmR2RGJ5c3lQTkNvMnFxZERZUHFOZCszVWpwNTQ3MEZHaGc0Y1VNSThZblJyV3pIeDR1S3RDbytMVVE5M00KdW1QOTJGZDdLalE2SkZ6R0FhTlhPdFBaNDEvenFkQzRiQmxqUGtVWSt6UkNIeG54cVZCR050VFArMEZyRFBXWHZ1NWJJZGxRditCYgp4b2cyYU45QUc4WlJ5VEtPR2Y0NnJvazVJTkJHVnJKOXB3T2c5MGpuUzB5N1h4d0pnSmJzdFlLZ3BmTWxLSi91eW9YK2htQXBKNEtnCnRZUjY5NHRCMWNtZUVDeG1QS2dVNDZRRzZNUGZES3lPWk10N0tiQVVRNEhqSlJRY2FNTjRXYkNjZmNIRkpPOVFRZ0p0VENRRG5iaEQKMmZWc1NHVWtPK3FSa0hLU0R2V1JzTXFNQ2haa2hDblpVQWY1RWtkWnVZTEdRcUgzSmdvZEdtaEpTNVlPaFRhU25Eb0tEN1NrSlNPZwpFM1FvZ1FiVWc1YXpaQ2ZDb1JNMG80RUcxSU9XczJUakJIUmlvUTd6SmRKLy8rZVRLeXBjWWI3RWtad2wreFpWVkVKbWxBNjBvQ1hiClI1YVZ6SHd3SFdqamxGaGhJMlJaaVRnVTN4blFMc2xaTXJxc1JNem90NzlEMXlNalZkZ3h1cXdrUWszNEVrZGlsdXdWQkZwOXFJOEEKVDVtY0pVc0RoYWszbzFDZ2pheFVpNk1NbWFNUnhRNEZDclNjSlJ1SG9CVTdGTXFBZXRDbmhjb2pEWmtqcFdhVUdtazBKV1hKYUVPbQpQdFNBTDNFMElWUWdiY2pjVUtzem80QUJkU1ZseWNDR3BkS013b0VXczJSb2Vlb2NDaDVvS1VzR0dUSkhxaHpLZDlFblRNeVNRWVpNCmFhZ3hYK0pDeXlRV3pKQ3BERFhtUzF4b21iODdac2hjcVRDam5FQkxXYkp4RHJRS004b0p0SlFsQXcyWkszbUhBaHBRVHpLV0REVmsKanNUTktHeEFYVTJJbElwM0YwcENqZnNTUnpLV2pQZUhsamFqREYvaVNNYVNNUXNWTnFQY1FCdVpKd1JLWlJneVY1SU9oUjFvR1V2RwpNV1NPSkIwS3c0QjYwQktQRjhlUWlZZWE1VXRjYUluU1dZWk1PdFFzWCtKQ1MxaXljVDYwOGIwelFqckFMMXZFa3ZFTTJUYVFoQ1hqCkdiSnRvQWtCYUhiNjFDMEpTOFpQSlpvbFljbDBNN0FsWU1uNGhreTNCQ3daMzVEcGxvQWxpMkRJZEVQSHQyUVJESmx1NlBpV2JGdzMKQXg4NnZpWHJPME1tWWNuNnpwQkpXTEsrTTJTV0pkc1Zrem5kZDRiTWNpZnB4Mkl4NzljTkVFblovZC9mSFJsNXFBL2J0cU9EWjZOUwpuK3ZEcHUxcDlPeVhJekUvc3lkKzJmcjA2dkVvRDNaL1BzNHRaZmZ6cWZ1ZDJhWitic2N4V3pwNW1NVThITC9FN2FCaERuV0VtZGZ0CnFXRzhoUTlFMjNaMEVzMW1BOFJzWlRPc3YzNWFkMFZscVk4anc0LytteDhpcU5PMEl4M3JZKy9wcjh4WmFrNTRhT0NZZ2RPckJxYXoKYXRkd2VESWJyQ1RtS1hzODdMRWU2K3VCVmJBeVowT2dCL0NCZG5RdzJLTU1raXZwMG5oUUF4K0xmMjlWZXJkZGs1T1Q3QnNFdnVBaQo5bSthb041ci9XUXFkeWxmc1A0cFh5emxwcm4xdEg4OFU1NnRkR3UyYkJaSzFjdE04SDMrR1p4NmExVUJOZWRWK29yWldkbkMvQlJjCngycHhoaWhtcHZnK2h6dDczTStpa0xZRWhWNXdrV2Q5L2krL0FNWFk5N2U5V3B5L2pGTm5maEFsaTRITVp1UGlwYUJxMDlqTGVReTUKZ1gxbEdhWWU3dzAxbmNYQWV0aXRlOG9NL3YrclMrRlJMc0xFYnJUUlJ1NXp3T1pMNUkvQVdsaVJYUDU1NkJVZmhEemFTM2lVUFYxRApnMzF5Tnp2UUlMUkpNbHM1S0lqNnNnbVYwYVhhRWwxNVd6M2RGaDFvRUhxT1pnNmtmcC8rcGI4K3dKcjQrU2U0Z1FhaEY0enJ3RlY1CnZ3SSs1RGR0VHg5QmFid3JnZjlRQ3JwZy9BSzZ6cWRGWWo4TUVQWmdkeVp3WktRQkZUNVh4U3A1dGFmbmlzVU14anJ6STRZWnc2R24KME1mU2xHV3VWRllBaEk0MU9OQjdhS1RrQWw3M2FzZk5meG1YMmNwbUFNTnJqek9IVjBqQkpieU9IYUZlalo3RG1rSjZydXpyVFdocwoyUlJRN3RVOG81SnR3NjdKcUgxVmh6NEdqUDA0SzQxQjBOVElxRU9sMXExalA5Q09nTWM2NDAzOWc5UDdNaFZyYWJGNTUxOEozUkZvCjRNMkZvK0NpUUdub1p2dVdhZHkyUHFZSDdPZGQ2QmZJSzlWQTMzQnYvR3U1VzVaSWl0SGRyS2t4Y2VpYnJFRFhrSXZvVUx1akRuUngKc3pqMExVNmdiODFEbDVHaGR2MEp1dVJWSExyZUNNc2tOcHk4dlFaZHRrNWkvTGdCamI3VmtJZHU5S3RZNnE3bHNLZWdWcVV3TXZaRApEVy9TRUlldTVlemIzc0d1clU0V29BdnpGRWJqb2Y2SlB1aDVBMDVqOWFsSnpPMlI3YnV4MndGZXVpOFBiZmRadjhHdXJSc0c1dXZyCnBCYzlqNDZ3bEVCWE5xeTdMbUdYV3BuK2hoRDBhNHc4aGtNWDBlazlDeHA4VWl0M0RRUHJzOGptYldjeWZJY2RERDEvandIOUNYYnAKQ2pyay9pM0pZV1V5ZkRFUkRyMkpRLzhPdk5TQy9qMXlYZTBQTlBUcmpNMW1NSFQxVXh3YXpHT1YreUQwSDJrT0szMlBLNEEyd0dIVApCa2hTYWZoMHhNWFFhY3l3SnhLQVdYNCtORGlCc29HUHNERG8rcDhRa0FuR3Zpc0dOSlpvYldpd3g4S2dNV2JqZ2dyb0JXTVpoa1puCkVoRm9rTms0eWxoUXhJQTJzTWxOV2VqUC9neUNqQ3FDeHV5SlpQT3Uvd1ZlMnpIS09QSUFocmF1eGV3Skk1RVZER00xK0g5cm4vMFYKV3RmaEtLc0lHck1uRzR3M0d5Vmo3VUhBUXpPYnorRXJlQlJDWS9hRVlVNHNlMkxGY25xdWFKYmIvN0g4b0xqRlhxdWxDaHF6Snd3YgphdW1xTi8rMU1MM1owSUovazZibkJoVkFOeWJ4SVh1eXdaenpYbHdpbjl5RlMrWXRiZENRUGJHaE9XKy9MSm56d2R6VFczbTc3ZC9YCkJnM1pFOFlrUXB0bThwZXFuZVJUMC9hS1NqZk4xVzVRSUNxZ1AyOWNqZGdUR3hyUFpKMHFtNlpaeU9kTmM2YmMrUjgxTXJHcGdIWmUKUENQMnhJYVdlNUhsaW55a0ZVSWo5bVFEdlpDam14cWhFWHZTZ0VaSDFLRG8xcTBFdXRDNEdyRW5EV2p3dFE0cXVuVXJnWGJmTVFEUAphZ1BhK0pza2MyMk9CbEVJRFhUQURyUm9LZ01DclFUNmpuTTVZRThjYU9QdmNzeElvSlZBdXhZWnNDY3V0T0JUalFSYUpUUmdUMXhvCnVRUU9wRzdGMEhUOFBHandkUzJ0MnhDSUNtalArOUt1b3dtOXhscUFGcWhiMkZ5Q0N1aDU5M3JhbmpTaFJaWkpWaDZDVTBZcW9XbDcKMG9LVzZLeHJINElnS3FCejNnL0kvcmNOV3NDQ2I2QWdLcUNiUzExSWU5SlJ6YmpVTUxOYWFITHBRR2M5NDFIanpHcWgvOEdzNkQragpJOVBUSllxaFd3YUJTc25kMFltOFJlbmhKb05aQ1hTcjQ2RHNTVStUWEgwUWlYbUY4WHBET1RSbHRIeWV3emwrc0djNVRWczk5TC80CjBNWXljMDY0Y3BQMVNrY1ZkT3NYbEQzeHo3Z3M3QUw3cFk1cWFNcWVCSFV6eTNtc2tjL2VZMGM1QVdnaVppRjk2MmFlR29PVWk2eVUKblJ3MFlVL0NEY1Z5cnZUQUxQdjhyRHlUTC9KZXprYUhIaGg5QWIxVDlBWDBUaEVIdXN5Ui95Mm10MHI1d2t6WlRzbmw4b3haS0FWYgppNm5wcldMZTlMbXo5YlBpcFdxTTVLMW16VW1sZDB1NEJWRXRtajJqcnFDNStlb1ZreHFoelJUSmZUbEpRM2VOQWFhMi9DRjhOeFJOClhTbGpoU3plNUkydVZFTjNOTnRxTVNoczlkNVdXbVVOT0ZhaWhGc1I5R0xiejZvaG8rcTczV1h3QjlUTXNiUkM2TmFPc09WUWlxNkYKUU9qcFZKMWlOM0pGME0zOFJCeEYxR20rbzg0V1hadkhJUlJDdTMvN1pXSytxSlpydi8rL295SGJvcmROcTRkMkZsVVpWYXF4dHI5awp2TXlkTWVuUVI1d21yZ2JhZVMxUEw0dGJiMk8rSG9mWmF1SzZsejQ3TTkvQWlSYXQweXBXWXpLenFOVkFnOHl0MThtWEJaYWQ0TlJLCm9HMFBpaXo1Ykw2V21Md2VuNWxCclFUYVlwbEdydk5NNkNUeldNRWdJVWMyS1lPZVJnNmZxN1JNYUl5K3FsUHZZU0NLbGo1ank0WGMKcFVBaXF4QWFvZzlFVUFhZFJ6ZmdPYzFSY3UwY3R1aEVCZlFjMXJnOUV5cld1RzFCRFZ6SnV5elFXemttZEZWMHZUZlV3QlZBZnc1dQp0SFJNS0hjUEJ5WG8wRDE1NkRzb1J0MitLWG9xMXl6WUlKQlFLNENHYy9GZFRxRHo2UDVFSU5TcXBvc1EyVE1JYU9xdTVkQW1VYWNUCnVFYm9oZ2xGNDFlYmZoZHRRZlF5STUzUVZjYWk1enJlbmE5dloyaTdIY0k3TFcvQnA4QUFxVXdqdEIwUmVDUHhDcU52STl1M1J1Z1YKVGllOWdoOGtRT2R2amRDMzhUTjhHanZNWUdneWYrdUR0bDlqNFp1bmJ6TE9uQ1QzTkdpRXJuTDJiakJPVDNET2R0dWUwTFlKeFk5Ngo1a0NUT3puMFFkc21GRDhqbW5IS0ViM0ZWQiswYlVMeFRUb3NhQ3A5NjRObUhRMWdQNlk0OUYwQ1JCOTBUaDAwdFExUEUvVHN6SU9GCkhRTnRMM0RjeWkyNDdtSEFvV2ZOZk1tQzdicWhLdWh0a3NnS3ZqZGtRTi9vUTJqN0tUYUxwYTNxZEljdlZ0UlBVNmU3SkovSUxQcTgKVFcvZkVUZFpuUE9zdHE4ajQ1d0RYR0Y2YjJvamkxNUhwbWlVUlUyZDZJTmVOeml2c1FabFBGM2xwTy83REdqS2hlcWNPV0VkVWNXWgpJeVBQOGRFN1I3Ynpaa1B0UncrZTkxN25YTHFOb1J0dmF0SDJYVitBMzNEb09hVUtsZTBoMWtDVVdnNTlFb0RYbGpxaDdjRVFuSjVLCnFDSFRja3JWOWYrZzBJMnp1RkZIdlhnZHUwN1BLVlVsZENHQ1l4ZUZUeVBUZEVwVkNWeFBWWEdIZ0ZJZkNIUC9rSHBPcVNxQjM4dW8KZUoyTDFMbEZEWkZuaHFxQy9oVHRYSnhFdXlhNHZBZzZzbDhKdElGNkovZWxxdURKaXRoaEowcWcwYzl3ZVBNNllnMGNYQkdyQkJvOAp2TDQ1Q0p5VU9aZ0xYdnVzQmhvOWtNZDd2eWl6YWhBOW1Vc1JOTnkrUFo4c1FWMkRqMGhRQXcxMzFldmV2ZU5UdzZlUktZTkd1K3BXCkZ4T1grdUYvY1JCRjBPZ1hoZG9tTHVOUlgrT2M4WklWL3c2SHN4a09iZDl0bmN4YWpQWEFuN0MyVzJiRW9aMk5hR2dxVzIrZnVmeGYKMUgwTjJNbVpUUjJGUCtXSlFqc2JhbEVyMmpua1g0VzlYRWVZdVNmYm5NSS9kc2lDaGwxV1Y1RDRKM094RCtZeWpKZkZ2NHptUXFQdAp1MmVTbW9jZDVjaW03RS94RDVqeW9OR1BvL204anBpRGQ4dWJqNkljZ21GL1YxNzRFNDhlTkdoRmZWZTZMYytSaDE5WXhQZWlIUU5oCkplOFUvajA0SGpUYVZRZk4yRzQrS3BvQnAyQ1VaL0tQTnFNZmRETEIrUHkwSGkzMEtNNnhMcmFzUnpxVk9nYTM3OEZRcHZIOWFielQKR2doTk5LRHhiNWdPZ3R4dnlqTStlRGdBdXVBdzc2aFFlNEZPcFM3b3JrcHltdkNZVTJNN0pvRm5tb0ZPcFU3cnJreEN5cDVPdFdtSAo1TEkzMnBsVHg1N1VYWjhrZFBGUUIzVHEzQTU0ckROZHpEdWgzOHFlUy9Yb2pPNUtxV1kra2ZKUmVxQmJlQ2FkOHRYWUFHZXppK2RTCkFSb2JXR3QyYWlnVnJOTUQyY1F6cDFPaEdvTm5qL3BIYnh4S1VYcmxUZDJWbE5XYmFSTFppZmJBTlBKWG44S1FiUTJkZVN1VHplcXUKY1R4bHM1bUp0NGRnWkVmbnpyeHo2bWNXZWovcTRzVzMzbms3c0pOSy9SOXZRRFNYcURYRjdRQUFBQ1YwUlZoMFpHRjBaVHBqY21WaApkR1VBTWpBeU1pMHdOaTB5T0ZRd05Eb3lNRG96T0Nzd01qb3dNSmVEK2JFQUFBQWxkRVZZZEdSaGRHVTZiVzlrYVdaNUFESXdNakl0Ck1EWXRNamhVTURRNk1qQTZNemdyTURJNk1ERG0za0VOQUFBQUFFbEZUa1N1UW1DQyIgLz4KPC9zdmc+Cg==";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if ((_a = window.neko) == null ? void 0 : _a.isNeko) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.neko;
      if (!wallet.isConnected) {
        try {
          await wallet.connect();
        } catch (error) {
          throw new WalletConnectionError(error == null ? void 0 : error.message, error);
        }
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-nightly/lib/esm/adapter.js
init_index_browser_esm();
var NightlyWalletName = "Nightly";
var NightlyWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor() {
    super();
    this.name = NightlyWalletName;
    this.url = "https://nightly.app";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ4IDk2Qzc0LjUwOTcgOTYgOTYgNzQuNTA5NyA5NiA0OEM5NiAyMS40OTAzIDc0LjUwOTcgMCA0OCAwQzIxLjQ5MDMgMCAwIDIxLjQ5MDMgMCA0OEMwIDc0LjUwOTcgMjEuNDkwMyA5NiA0OCA5NloiIGZpbGw9IiM2RDczRjgiLz4KPHBhdGggZD0iTTQ4IDg1LjYzNTZDNDggODUuNjM1NiA1Mi40NTMzIDg1LjYzNTYgNTUuNDQgODIuNTg2N0M1OC45MTU1IDc5LjI4MDEgNTcuMzUxMSA3NS40MzEyIDYyLjI3NTUgNzEuNDMxMkM2Ni45ODY2IDY3LjY0NDUgNzIuOTI0NCA3MC4zMzc5IDcyLjkyNDQgNzAuMzM3OUM3Ny4wMjIyIDYyLjEyNDUgNzQuNzkxMSA1Mi41NjkgNzQuNzkxMSA1Mi41NjlDODEuNzY4OCAzNC4yNTc5IDc1Ljk2NDQgMjEuMTU1NyA3NC40NDQ0IDE3LjM2MDFDNjkuNDQ4OCAyNC4zMzc5IDYzLjE5MTEgMjkuMTczNCA1NS43OTU1IDMyLjQwOUM1My4yMjY2IDMxLjcwNjggNTAuNTk1NSAzMS4zMzM0IDQ4IDMxLjM2MDFDNDUuNDEzMyAzMS4zMzM0IDQyLjc3MzMgMzEuNzA2OCA0MC4yMDQ0IDMyLjQwOUMzMi44MTc3IDI5LjE2NDUgMjYuNTUxMSAyNC4zMzc5IDIxLjU1NTUgMTcuMzYwMUMyMC4wMzU1IDIxLjE1NTcgMTQuMjMxMSAzNC4yNTc5IDIxLjIwODkgNTIuNTY5QzIxLjIwODkgNTIuNTY5IDE4Ljk3NzggNjIuMTI0NSAyMy4wNzU1IDcwLjMzNzlDMjMuMDc1NSA3MC4zMzc5IDI5LjAxMzMgNjcuNjQ0NSAzMy43MjQ0IDcxLjQzMTJDMzguNjU3NyA3NS40MzEyIDM3LjA4NDQgNzkuMjgwMSA0MC41NiA4Mi41ODY3QzQzLjU0NjYgODUuNjM1NiA0OCA4NS42MzU2IDQ4IDg1LjYzNTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDIuNDc5OSA2NS4yOThDNDIuMjkzMyA1OS4yMTggMzYuMzAyMSA1Ny4yNjI0IDMyLjIxMzMgNTkuODIyNEMzMi4yMTMzIDU5LjgyMjQgMzIuODUzMyA2Mi40MzU4IDM1LjgzOTkgNjMuNzUxM0MzOC4yNzU1IDY0LjgyNjkgMzkuMzI0NCA2My4zODY5IDQyLjQ3OTkgNjUuMjk4WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNMjIuNDk3NyAyMy4wOTM1QzIwLjA4ODggMzEuNTQ2OCAyMS4xMjg4IDQyLjI0MDIgMjQuOTMzMyA1MC4wMjY5QzI4LjgyNjYgNDcuMjcxMyAzMi45MTU1IDQzLjAxMzUgMzUuMDkzMyAzOC41MDY5QzI5Ljk2NDQgMzQuNzExMyAyNS42NjIyIDMxLjEwMjQgMjIuNDk3NyAyMy4wOTM1WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNTMuNTE5OSA2NS4yOThDNTMuNzA2NiA1OS4yMTggNTkuNjk3NyA1Ny4yNjI0IDYzLjc4NjYgNTkuODIyNEM2My43ODY2IDU5LjgyMjQgNjMuMTQ2NiA2Mi40MzU4IDYwLjE1OTkgNjMuNzUxM0M1Ny43MjQzIDY0LjgyNjkgNTYuNjc1NSA2My4zODY5IDUzLjUxOTkgNjUuMjk4WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNzMuNTAyMiAyMy4wOTM1Qzc1LjkxMTEgMzEuNTQ2OCA3NC44NzExIDQyLjI0MDIgNzEuMDY2NiA1MC4wMjY5QzY3LjE3MzMgNDcuMjcxMyA2My4wODQ0IDQzLjAxMzUgNjAuOTA2NiAzOC41MDY5QzY2LjAzNTUgMzQuNzExMyA3MC4zMzc3IDMxLjEwMjQgNzMuNTAyMiAyMy4wOTM1WiIgZmlsbD0iIzdCODFGOSIvPgo8cGF0aCBkPSJNNDcuOTk5OSA4NS4zMDY5QzUwLjE0MDQgODUuMzA2OSA1MS44NzU1IDgzLjc3ODcgNTEuODc1NSA4MS44OTM2QzUxLjg3NTUgODAuMDA4NCA1MC4xNDA0IDc4LjQ4MDIgNDcuOTk5OSA3OC40ODAyQzQ1Ljg1OTUgNzguNDgwMiA0NC4xMjQ0IDgwLjAwODQgNDQuMTI0NCA4MS44OTM2QzQ0LjEyNDQgODMuNzc4NyA0NS44NTk1IDg1LjMwNjkgNDcuOTk5OSA4NS4zMDY5WiIgZmlsbD0iIzdCODFGOSIvPgo8L3N2Zz4K";
    this.supportedTransactionVersions = /* @__PURE__ */ new Set(["legacy", 0]);
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._connecting = false;
    this._publicKey = null;
    this._wallet = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if ((_a = window == null ? void 0 : window.nightly) == null ? void 0 : _a.solana) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  get publicKey() {
    return this._publicKey;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.nightly.solana;
      try {
        await wallet.connect();
      } catch (error) {
        throw new WalletConnectionError(error == null ? void 0 : error.message, error);
      }
      if (wallet.publicKey.toString() === "11111111111111111111111111111111")
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectedError());
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return wallet.signMessage(new TextDecoder().decode(message));
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-nufi/lib/esm/adapter.js
init_index_browser_esm();
var NufiWalletName = "NuFi";
var NufiWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = NufiWalletName;
    this.url = "https://nu.fi";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMiAyMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzIxMjEyMSIgLz4KPHBhdGggZD0iTTQuMzA5OTkgOS4wMDAwOEM1LjMwODc3IDYuMjA0MDEgNy45ODA2OSA0LjIwMzA4IDExLjEyIDQuMjAzMDhDMTQuMjU5MiA0LjIwMzA4IDE2LjkzMTEgNi4yMDQwMSAxNy45Mjk5IDkuMDAwMDhDMTcuOTc5IDkuMTM3NDcgMTguMTA3NCA5LjIzMjE4IDE4LjI1MzMgOS4yMzIxOEgyMS4wNTk0QzIxLjI3MjUgOS4yMzIxOCAyMS40MzE3IDkuMDM1NzYgMjEuMzc5NCA4LjgyOTE5QzIwLjIxOTUgNC4yNDM2MiAxNi4wNjYgMC44NTAzNDIgMTEuMTIgMC44NTAzNDJDNi4xNzM5MSAwLjg1MDM0MiAyLjAyMDQyIDQuMjQzNjIgMC44NjA0NjggOC44MjkxOEMwLjgwODIxMyA5LjAzNTc2IDAuOTY3NDM0IDkuMjMyMTggMS4xODA1MiA5LjIzMjE4SDMuOTg2NTlDNC4xMzI0OSA5LjIzMjE4IDQuMjYwOTEgOS4xMzc0NyA0LjMwOTk5IDkuMDAwMDhaIiBmaWxsPSIjQzZGRjAwIi8+CjxwYXRoIGQ9Ik0zLjk4NjU5IDEzLjYzMjdDNC4xMzI0OSAxMy42MzI3IDQuMjYwOTEgMTMuNzI3NCA0LjMwOTk5IDEzLjg2NDhDNS4zMDg3NyAxNi42NjA4IDcuOTgwNjkgMTguNjYxOCAxMS4xMiAxOC42NjE4QzE0LjI1OTIgMTguNjYxOCAxNi45MzExIDE2LjY2MDggMTcuOTI5OSAxMy44NjQ4QzE3Ljk3OSAxMy43Mjc0IDE4LjEwNzQgMTMuNjMyNyAxOC4yNTMzIDEzLjYzMjdIMjEuMDU5NEMyMS4yNzI1IDEzLjYzMjcgMjEuNDMxNyAxMy44MjkxIDIxLjM3OTQgMTQuMDM1N0MyMC4yMTk1IDE4LjYyMTIgMTYuMDY2IDIyLjAxNDUgMTEuMTIgMjIuMDE0NUM2LjE3MzkxIDIyLjAxNDUgMi4wMjA0MiAxOC42MjEyIDAuODYwNDY4IDE0LjAzNTdDMC44MDgyMTMgMTMuODI5MSAwLjk2NzQzNCAxMy42MzI3IDEuMTgwNTIgMTMuNjMyN0gzLjk4NjU5WiIgZmlsbD0iI0M2RkYwMCIvPgo8cGF0aCBkPSJNOS4yNTQ5OSA5LjIzMjE4QzkuMDY5ODMgOS4yMzIxOCA4LjkxOTcyIDkuMzgyMjkgOC45MTk3MiA5LjU2NzQ2VjEzLjI5NzRDOC45MTk3MiAxMy40ODI1IDkuMDY5ODMgMTMuNjMyNyA5LjI1NDk5IDEzLjYzMjdIMTIuOTg0OUMxMy4xNzAxIDEzLjYzMjcgMTMuMzIwMiAxMy40ODI1IDEzLjMyMDIgMTMuMjk3NFY5LjU2NzQ2QzEzLjMyMDIgOS4zODIyOSAxMy4xNzAxIDkuMjMyMTggMTIuOTg0OSA5LjIzMjE4SDkuMjU0OTlaIiBmaWxsPSIjQzZGRjAwIi8+Cjwvc3ZnPgo=";
    this.supportedTransactionVersions = /* @__PURE__ */ new Set(["legacy", 0]);
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if ((_a = window.nufiSolana) == null ? void 0 : _a.isNufi) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.nufiSolana;
      if (!wallet.isConnected) {
        try {
          await wallet.connect();
        } catch (error) {
          throw new WalletConnectionError(error == null ? void 0 : error.message, error);
        }
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(transaction, connection, options = {}) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signers, ...sendOptions } = options;
        if (isVersionedTransaction(transaction)) {
          (signers == null ? void 0 : signers.length) && transaction.sign(signers);
        } else {
          transaction = await this.prepareTransaction(transaction, connection, sendOptions);
          (signers == null ? void 0 : signers.length) && transaction.partialSign(...signers);
        }
        sendOptions.preflightCommitment = sendOptions.preflightCommitment || connection.commitment;
        const { signature } = await wallet.signAndSendTransaction(transaction);
        return signature;
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
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-onto/lib/esm/adapter.js
init_index_browser_esm();
var OntoWalletName = "ONTO";
var OntoWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = OntoWalletName;
    this.url = "https://onto.app";
    this.icon = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODggMjg4Ij4KICA8dGl0bGU+T05UTyBMT0dPXzI4OHgyODg8L3RpdGxlPgogIDxnIGlkPSJMT0dPIj4KICAgIDxwYXRoIGlkPSLlvaLnirbnu5PlkIgiIGQ9Ik0zMCwxMS4xNSw3MS4xOSw1Mi4zMkExMTUsMTE1LDAsMCwxLDI1OCwxMzguNjdMMjU4LDE0MlYyNzYuODVsLTQxLjE5LTQxLjE2QTExNSwxMTUsMCwwLDEsMzAuMDUsMTQ5LjM0TDMwLDE0NlptMjguMTcsNjhWMTQ2YTg2Ljc5LDg2Ljc5LDAsMCwwLDEzNS4xNSw3MmwyLjIzLTEuNTVMNjMuNjcsODQuNjVaTTk0LjY4LDcwbC0yLjIzLDEuNTVMMjI0LjMzLDIwMy4zNmw1LjUsNS41VjE0MkE4Ni43OSw4Ni43OSwwLDAsMCw5NC42OCw3MFoiLz4KICA8L2c+Cjwvc3ZnPg==";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a, _b;
        if ((_b = (_a = window.onto) == null ? void 0 : _a.solana) == null ? void 0 : _b.isONTO) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.onto.solana;
      let account;
      try {
        account = await wallet.getAccount();
      } catch (error) {
        throw new WalletAccountError(error == null ? void 0 : error.message, error);
      }
      let publicKey;
      try {
        publicKey = new PublicKey(account);
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-particle/lib/esm/adapter.js
init_index_browser_esm();
var ParticleName = "Particle";
var ParticleAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = ParticleName;
    this.url = "https://particle.network";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHg9IjAiIHk9IjAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPjxmZUltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIiByZXN1bHQ9ImltYWdlIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjNhV1IwYUQwaU1UUXdJaUJvWldsbmFIUTlJakUwTUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREUwTUNBeE5EQWlQZ29nSUR4a1pXWnpQZ29nSUNBZ1BITjBlV3hsUGdvZ0lDQWdJQ0F1WTJ4ekxURWdld29nSUNBZ0lDQWdJR1pwYkd3NklIVnliQ2dqYkdsdVpXRnlMV2R5WVdScFpXNTBLVHNLSUNBZ0lDQWdmUW9nSUNBZ1BDOXpkSGxzWlQ0S0lDQWdJRHhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpYkdsdVpXRnlMV2R5WVdScFpXNTBJaUI0TVQwaU1UUXdJaUI1TVQwaU1UUXdJaUI0TWowaU1DSWdaM0poWkdsbGJuUlZibWwwY3owaWRYTmxjbE53WVdObFQyNVZjMlVpUGdvZ0lDQWdJQ0E4YzNSdmNDQnZabVp6WlhROUlqQWlJSE4wYjNBdFkyOXNiM0k5SWlObE1EUXdaRGNpTHo0S0lDQWdJQ0FnUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJak5qSXlOMlUySWk4K0NpQWdJQ0E4TDJ4cGJtVmhja2R5WVdScFpXNTBQZ29nSUR3dlpHVm1jejRLSUNBOGNtVmpkQ0JqYkdGemN6MGlZMnh6TFRFaUlIZHBaSFJvUFNJeE5EQWlJR2hsYVdkb2REMGlNVFF3SWk4K0Nqd3ZjM1puUGdvPSIvPjxmZUNvbXBvc2l0ZSByZXN1bHQ9ImNvbXBvc2l0ZSIgb3BlcmF0b3I9ImluIiBpbjI9IlNvdXJjZUdyYXBoaWMiLz48ZmVCbGVuZCByZXN1bHQ9ImJsZW5kIiBpbjI9IlNvdXJjZUdyYXBoaWMiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3QgZGF0YS1uYW1lPSLlnIbop5Lnn6nlvaIgMSIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxNDAiIHJ4PSI0MCIgcnk9IjQwIiBmaWx0ZXI9InVybCgjYSkiLz48cGF0aCBkYXRhLW5hbWU9IuakreWchiAzIOaLt+i0nSIgZD0iTTM0LjkxIDMwLjhhNi42MTQgNi42MTQgMCAxIDAgNi41NTMgNi42MTRBNi41ODQgNi41ODQgMCAwIDAgMzQuOTEgMzAuOHptMTMuNjE1LTcuODJhNi41NTIgNi41NTIgMCAwIDAtOC4yNzIgNC4yNTQgNi42MzkgNi42MzkgMCAwIDAgNC4yMTUgOC4zNDkgNi41NTIgNi41NTIgMCAwIDAgOC4yNzItNC4yNTQgNi42MzkgNi42MzkgMCAwIDAtNC4yMTUtOC4zNDl6bTE1LjMxMS0zLjI0OGE2LjUyNSA2LjUyNSAwIDAgMC05LjE3IDEuNDY4IDYuNjY2IDYuNjY2IDAgMCAwIDEuNDUyIDkuMjU1IDYuNTI1IDYuNTI1IDAgMCAwIDkuMTY5LTEuNDY2IDYuNjY2IDYuNjY2IDAgMCAwLTEuNDUxLTkuMjU3em0xNS41NTYgMS42ODdhNi41MjUgNi41MjUgMCAwIDAtOS4xNjktMS40NjYgNi42NjYgNi42NjYgMCAwIDAtMS40NTIgOS4yNTUgNi41MjUgNi41MjUgMCAwIDAgOS4xNjkgMS40NjYgNi42NjYgNi42NjYgMCAwIDAgMS40NTEtOS4yNTZ6bTE0LjI3OCA2LjQ1NWE2LjU1MiA2LjU1MiAwIDAgMC04LjI3LTQuMjU0IDYuNjM5IDYuNjM5IDAgMCAwLTQuMjE1IDguMzQ5IDYuNTUyIDYuNTUyIDAgMCAwIDguMjcyIDQuMjU0IDYuNjM5IDYuNjM5IDAgMCAwIDQuMjEzLTguMzQ5em0xMS42IDEwLjU5NGE2LjU2NCA2LjU2NCAwIDEgMC02LjU2NCA2LjYyNiA2LjYgNi42IDAgMCAwIDYuNTY2LTYuNjI2em03Ljc5MiAxMy42OTRhNi42MzkgNi42MzkgMCAwIDAtNC4yMTQtOC4zNDkgNi41NTIgNi41NTIgMCAwIDAtOC4yNzIgNC4yNTQgNi42MzkgNi42MzkgMCAwIDAgNC4yMTUgOC4zNDkgNi41NTEgNi41NTEgMCAwIDAgOC4yNzMtNC4yNTN6bTMuMjE4IDE1LjQ1NWE2LjY2NiA2LjY2NiAwIDAgMC0xLjQ1Mi05LjI1NSA2LjUyNSA2LjUyNSAwIDAgMC05LjE2OSAxLjQ2NiA2LjY2NiA2LjY2NiAwIDAgMCAxLjQ1MiA5LjI1NSA2LjUyNSA2LjUyNSAwIDAgMCA5LjE3MS0xLjQ2NnptLTEuNjcxIDE1LjdhNi42NjYgNi42NjYgMCAwIDAgMS40NTItOS4yNTUgNi41MjUgNi41MjUgMCAwIDAtOS4xNjktMS40NjYgNi42NjYgNi42NjYgMCAwIDAtMS40NTIgOS4yNTUgNi41MjUgNi41MjUgMCAwIDAgOS4xNzEgMS40Njh6bS02LjQgMTQuNDEyYTYuNjM4IDYuNjM4IDAgMCAwIDQuMjE0LTguMzQ5IDYuNTUxIDYuNTUxIDAgMCAwLTguMjcxLTQuMjU0IDYuNjM5IDYuNjM5IDAgMCAwLTQuMjE1IDguMzQ5IDYuNTUyIDYuNTUyIDAgMCAwIDguMjc4IDQuMjU2em0tMTAuNSAxMS43MTFhNi42MjYgNi42MjYgMCAxIDAtNi41NjQtNi42MjYgNi42IDYuNiAwIDAgMCA2LjU3NSA2LjYyOHptLTEzLjU2NyA3Ljg2NWE2LjU1MiA2LjU1MiAwIDAgMCA4LjI3Mi00LjI1NCA2LjYzOSA2LjYzOSAwIDAgMC00LjIxNS04LjM0OSA2LjU1MiA2LjU1MiAwIDAgMC04LjI3MiA0LjI1NCA2LjYzOSA2LjYzOSAwIDAgMCA0LjIyNSA4LjM1MXptLTE1LjMxMSAzLjI0OEE2LjUyNSA2LjUyNSAwIDAgMCA3OCAxMTkuMDg3YTYuNjY2IDYuNjY2IDAgMCAwLTEuNDUyLTkuMjU1IDYuNTI1IDYuNTI1IDAgMCAwLTkuMTY5IDEuNDY2IDYuNjY2IDYuNjY2IDAgMCAwIDEuNDYyIDkuMjU3em0tMTUuNTU2LTEuNjg2YTYuNTI1IDYuNTI1IDAgMCAwIDkuMTY5IDEuNDY1IDYuNjY2IDYuNjY2IDAgMCAwIDEuNDUyLTkuMjU1IDYuNTI1IDYuNTI1IDAgMCAwLTkuMTY5LTEuNDY2IDYuNjY3IDYuNjY3IDAgMCAwLTEuNDQxIDkuMjU4em0tMTQuMjc4LTYuNDU3YTYuNTUyIDYuNTUyIDAgMCAwIDguMjcyIDQuMjU1IDYuNjQgNi42NCAwIDAgMCA0LjIxNS04LjM1IDYuNTUyIDYuNTUyIDAgMCAwLTguMjcyLTQuMjU0IDYuNjM5IDYuNjM5IDAgMCAwLTQuMjA1IDguMzUxek0yNy40IDEwMS44MTlhNi41NjUgNi41NjUgMCAxIDAgNi41NjQtNi42MjYgNi42IDYuNiAwIDAgMC02LjU2NCA2LjYyNnptMTguNzgtNTYuNDY2YTMuOTY5IDMuOTY5IDAgMSAwIDMuOTMyIDMuOTY4IDMuOTUgMy45NSAwIDAgMC0zLjkzMi0zLjk2OHptOC40NTUtNS4wMjlhMy45MzEgMy45MzEgMCAwIDAtNC45NjMgMi41NTIgMy45ODMgMy45ODMgMCAwIDAgMi41MjkgNS4wMSAzLjkzMSAzLjkzMSAwIDAgMCA0Ljk2My0yLjU1MiAzLjk4NCAzLjk4NCAwIDAgMC0yLjUyOS01LjAxem05LjUzNy0yLjIzMmEzLjkxNSAzLjkxNSAwIDAgMC01LjUuODggNCA0IDAgMCAwIC44NzEgNS41NTMgMy45MTUgMy45MTUgMCAwIDAgNS41LS44OCA0IDQgMCAwIDAtLjg3MS01LjU1M3ptOS43NTMuODUyYTMuOTE1IDMuOTE1IDAgMCAwLTUuNS0uODggNCA0IDAgMCAwLS44NzEgNS41NTMgMy45MTUgMy45MTUgMCAwIDAgNS41Ljg4IDQgNCAwIDAgMCAuODcxLTUuNTUzem05LjAxNiAzLjg1NmEzLjkzMSAzLjkzMSAwIDAgMC00Ljk2My0yLjU1MyAzLjk4NCAzLjk4NCAwIDAgMC0yLjUyOSA1LjAxIDMuOTMxIDMuOTMxIDAgMCAwIDQuOTYzIDIuNTUzIDMuOTg0IDMuOTg0IDAgMCAwIDIuNTI5LTUuMDF6bTcuMzk1IDYuNDc2YTMuOTM5IDMuOTM5IDAgMSAwLTMuOTM2IDMuOTcyIDMuOTU3IDMuOTU3IDAgMCAwIDMuOTM1LTMuOTc2em01LjA1IDguNDY1YTMuOTgzIDMuOTgzIDAgMCAwLTIuNTI5LTUuMDEgMy45MzEgMy45MzEgMCAwIDAtNC45NjMgMi41NTIgMy45ODQgMy45ODQgMCAwIDAgMi41MjkgNS4wMSAzLjkzMSAzLjkzMSAwIDAgMCA0Ljk2Mi0yLjU1NnptMi4yMTQgOS42MjNhNCA0IDAgMCAwLS44NzEtNS41NTMgMy45MTUgMy45MTUgMCAwIDAtNS41Ljg4IDQgNCAwIDAgMCAuODcxIDUuNTUzIDMuOTE1IDMuOTE1IDAgMCAwIDUuNS0uODh6bS0uODQ0IDkuODQ1YTQgNCAwIDAgMCAuODcxLTUuNTUzIDMuOTE1IDMuOTE1IDAgMCAwLTUuNS0uODggNCA0IDAgMCAwLS44NzEgNS41NTMgMy45MTUgMy45MTUgMCAwIDAgNS40OTcuODh6bS0zLjgxNyA5LjFhMy45ODMgMy45ODMgMCAwIDAgMi41MjktNS4wMSAzLjkzMSAzLjkzMSAwIDAgMC00Ljk2OC0yLjU1MyAzLjk4MyAzLjk4MyAwIDAgMC0yLjUyOSA1LjAwOSAzLjkzMSAzLjkzMSAwIDAgMCA0Ljk2NSAyLjU1M3ptLTYuNDE5IDcuNDYzYTMuOTc2IDMuOTc2IDAgMSAwLTMuOTM4LTMuOTcyIDMuOTU3IDMuOTU3IDAgMCAwIDMuOTM4IDMuOTcyem0tOC4zODcgNS4xYTMuOTMxIDMuOTMxIDAgMCAwIDQuOTY3LTIuNTU1IDMuOTgzIDMuOTgzIDAgMCAwLTIuNTI5LTUuMDFBMy45MzEgMy45MzEgMCAwIDAgNzUuNiA5My44NmEzLjk4MyAzLjk4MyAwIDAgMCAyLjUzNCA1LjAxek02OC42IDEwMS4xYTMuOTE1IDMuOTE1IDAgMCAwIDUuNS0uODggNCA0IDAgMCAwLS44NzEtNS41NTMgMy45MTUgMy45MTUgMCAwIDAtNS41Ljg4IDQgNCAwIDAgMCAuODcxIDUuNTUzem0tOS43NTMtLjg1MmEzLjkxNiAzLjkxNiAwIDAgMCA1LjUuODggNCA0IDAgMCAwIC44NzEtNS41NTQgMy45MTUgMy45MTUgMCAwIDAtNS41LS44OCA0IDQgMCAwIDAtLjg3NSA1LjU1NnpNNDkuODI4IDk2LjRhMy45MzEgMy45MzEgMCAwIDAgNC45NjMgMi41NTMgMy45ODQgMy45ODQgMCAwIDAgMi41MjktNS4wMSAzLjkzMSAzLjkzMSAwIDAgMC00Ljk2My0yLjU1MyAzLjk4MyAzLjk4MyAwIDAgMC0yLjUyOSA1LjAxem0tNy4zOTUtNi40NzZhMy45MzkgMy45MzkgMCAxIDAgMy45MzktMy45NzYgMy45NTcgMy45NTcgMCAwIDAtMy45MzggMy45NzR6TTUzLjUxOSA1Ni4yYTIuMTE3IDIuMTE3IDAgMSAwIDIuMSAyLjExNyAyLjEwNyAyLjEwNyAwIDAgMC0yLjEtMi4xMTd6bTQuNjM5LTIuNzIzYTIuMSAyLjEgMCAwIDAtMi42NDcgMS4zNjEgMi4xMjUgMi4xMjUgMCAwIDAgMS4zNDkgMi42NzIgMi4xIDIuMSAwIDAgMCAyLjY0Ny0xLjM2MSAyLjEyNCAyLjEyNCAwIDAgMC0xLjM0OS0yLjY3MnptNS4yLTEuMjUyYTIuMDg4IDIuMDg4IDAgMCAwLTIuOTM0LjQ2OSAyLjEzMyAyLjEzMyAwIDAgMCAuNDY1IDIuOTYyIDIuMDg4IDIuMDg4IDAgMCAwIDIuOTM0LS40NjkgMi4xMzMgMi4xMzMgMCAwIDAtLjQ3LTIuOTYxem01LjMyNC40M2EyLjA4OCAyLjA4OCAwIDAgMC0yLjkzNC0uNDY5IDIuMTMzIDIuMTMzIDAgMCAwLS40NjUgMi45NjIgMi4wODggMi4wODggMCAwIDAgMi45MzQuNDY5IDIuMTMzIDIuMTMzIDAgMCAwIC40Ni0yLjk2MXptNC45MzIgMi4wN2EyLjEgMi4xIDAgMCAwLTIuNjQ3LTEuMzYxIDIuMTI0IDIuMTI0IDAgMCAwLTEuMzQ5IDIuNjcyQTIuMSAyLjEgMCAwIDAgNzIuMjYgNTcuNGEyLjEyNCAyLjEyNCAwIDAgMCAxLjM0OS0yLjY3NHptNC4wNTcgMy41MDdhMi4xIDIuMSAwIDEgMC0yLjEgMi4xMiAyLjExMSAyLjExMSAwIDAgMCAyLjA5NS0yLjEyem0yLjc4NSA0LjZhMi4xMjUgMi4xMjUgMCAwIDAtMS4zNTYtMi42NzEgMi4xIDIuMSAwIDAgMC0yLjY0NyAxLjM2MSAyLjEyNSAyLjEyNSAwIDAgMCAxLjM0NyAyLjY3MiAyLjEgMi4xIDAgMCAwIDIuNjUxLTEuMzYxem0xLjI0IDUuMjQ0YTIuMTMzIDIuMTMzIDAgMCAwLS40NjUtMi45NjIgMi4wODggMi4wODggMCAwIDAtMi45MzQuNDY5IDIuMTMzIDIuMTMzIDAgMCAwIC40NjUgMi45NjIgMi4wODggMi4wODggMCAwIDAgMi45MjktLjQ2OHptLS40MjYgNS4zNzRhMi4xMzMgMi4xMzMgMCAwIDAgLjQ2NS0yLjk2MiAyLjA4OCAyLjA4OCAwIDAgMC0yLjkzNS0uNDY4IDIuMTMzIDIuMTMzIDAgMCAwLS40NjUgMi45NjIgMi4wODggMi4wODggMCAwIDAgMi45MjkuNDY5em0tMi4wNSA0Ljk3OGEyLjEyNSAyLjEyNSAwIDAgMCAxLjM0OS0yLjY3MiAyLjEgMi4xIDAgMCAwLTIuNjUzLTEuMzU2IDIuMTI0IDIuMTI0IDAgMCAwLTEuMzQ5IDIuNjcyIDIuMSAyLjEgMCAwIDAgMi42NDcgMS4zNTd6bS0zLjQ4IDQuMDk1YTIuMTIgMi4xMiAwIDEgMC0yLjEtMi4xMiAyLjExMSAyLjExMSAwIDAgMCAyLjEgMi4xMnptLTQuNTU4IDIuODExYTIuMSAyLjEgMCAwIDAgMi42NDctMS4zNjFBMi4xMjUgMi4xMjUgMCAwIDAgNzIuNDggODEuM2EyLjEgMi4xIDAgMCAwLTIuNjQ3IDEuMzYxIDIuMTI1IDIuMTI1IDAgMCAwIDEuMzQ5IDIuNjczem0tNS4yIDEuMjUyYTIuMDg4IDIuMDg4IDAgMCAwIDIuOTM0LS40NjkgMi4xMzMgMi4xMzMgMCAwIDAtLjQ2NS0yLjk2MiAyLjA4OCAyLjA4OCAwIDAgMC0yLjkzNC40NjkgMi4xMzMgMi4xMzMgMCAwIDAgLjQ3IDIuOTYyem0tNS4zMjQtLjQzYTIuMDg4IDIuMDg4IDAgMCAwIDIuOTM0LjQ2OSAyLjEzMyAyLjEzMyAwIDAgMCAuNDY1LTIuOTYyIDIuMDg4IDIuMDg4IDAgMCAwLTIuOTM0LS40NjkgMi4xMzMgMi4xMzMgMCAwIDAtLjQ2IDIuOTYyem0tNC45MzItMi4wN2EyLjEgMi4xIDAgMCAwIDIuNjQ3IDEuMzYxIDIuMTI1IDIuMTI1IDAgMCAwIDEuMzQ5LTIuNjcyIDIuMSAyLjEgMCAwIDAtMi42NDctMS4zNjEgMi4xMjQgMi4xMjQgMCAwIDAtMS4zNDQgMi42NzJ6bS00LjA1Ny0zLjUwN2EyLjEgMi4xIDAgMSAwIDIuMS0yLjEyIDIuMTExIDIuMTExIDAgMCAwLTIuMDk1IDIuMTJ6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.Loadable;
    this._connecting = false;
    this._publicKey = null;
    this._wallet = null;
    this._config = config;
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    var _a;
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Loadable)
        throw new WalletNotReadyError();
      this._connecting = true;
      let ParticleClass;
      let WalletClass;
      try {
        ({ ParticleNetwork: ParticleClass, SolanaWallet: WalletClass } = await import("./lib-YT4OS7NI.js"));
      } catch (error) {
        throw new WalletLoadError(error == null ? void 0 : error.message, error);
      }
      let wallet;
      try {
        wallet = new WalletClass(new ParticleClass((_a = this._config) == null ? void 0 : _a.config).auth);
      } catch (error) {
        throw new WalletConfigError(error == null ? void 0 : error.message, error);
      }
      try {
        await wallet.connect();
      } catch (error) {
        throw new WalletConnectionError(error == null ? void 0 : error.message, error);
      }
      const account = wallet.publicKey;
      if (!account)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(account.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signMessage(message);
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-phantom/lib/esm/adapter.js
init_index_browser_esm();
var PhantomWalletName = "Phantom";
var PhantomWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = PhantomWalletName;
    this.url = "https://phantom.app";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg==";
    this.supportedTransactionVersions = /* @__PURE__ */ new Set(["legacy", 0]);
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        wallet.off("accountChanged", this._accountChanged);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._accountChanged = (newPublicKey) => {
      const publicKey = this._publicKey;
      if (!publicKey)
        return;
      try {
        newPublicKey = new PublicKey(newPublicKey.toBytes());
      } catch (error) {
        this.emit("error", new WalletPublicKeyError(error == null ? void 0 : error.message, error));
        return;
      }
      if (publicKey.equals(newPublicKey))
        return;
      this._publicKey = newPublicKey;
      this.emit("connect", newPublicKey);
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      if (isIosAndRedirectable()) {
        this._readyState = WalletReadyState.Loadable;
        this.emit("readyStateChange", this._readyState);
      } else {
        scopePollingDetectionStrategy(() => {
          var _a, _b, _c;
          if (((_b = (_a = window.phantom) == null ? void 0 : _a.solana) == null ? void 0 : _b.isPhantom) || ((_c = window.solana) == null ? void 0 : _c.isPhantom)) {
            this._readyState = WalletReadyState.Installed;
            this.emit("readyStateChange", this._readyState);
            return true;
          }
          return false;
        });
      }
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async autoConnect() {
    if (this.readyState === WalletReadyState.Installed) {
      await this.connect();
    }
  }
  async connect() {
    var _a;
    try {
      if (this.connected || this.connecting)
        return;
      if (this.readyState === WalletReadyState.Loadable) {
        const url = encodeURIComponent(window.location.href);
        const ref = encodeURIComponent(window.location.origin);
        window.location.href = `https://phantom.app/ul/browse/${url}?ref=${ref}`;
        return;
      }
      if (this.readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = ((_a = window.phantom) == null ? void 0 : _a.solana) || window.solana;
      if (!wallet.isConnected) {
        try {
          await wallet.connect();
        } catch (error) {
          throw new WalletConnectionError(error == null ? void 0 : error.message, error);
        }
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      wallet.on("accountChanged", this._accountChanged);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      wallet.off("accountChanged", this._accountChanged);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(transaction, connection, options = {}) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signers, ...sendOptions } = options;
        if (isVersionedTransaction(transaction)) {
          (signers == null ? void 0 : signers.length) && transaction.sign(signers);
        } else {
          transaction = await this.prepareTransaction(transaction, connection, sendOptions);
          (signers == null ? void 0 : signers.length) && transaction.partialSign(...signers);
        }
        sendOptions.preflightCommitment = sendOptions.preflightCommitment || connection.commitment;
        const { signature } = await wallet.signAndSendTransaction(transaction, sendOptions);
        return signature;
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
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-safepal/lib/esm/adapter.js
init_index_browser_esm();
var SafePalWalletName = "SafePal";
var SafePalWalletAdapter = class extends BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = SafePalWalletName;
    this.url = "https://safepal.io";
    this.icon = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHdpZHRoPSIyNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJtMjU2IDEyOGMwIDcwLjY5Mzg3My01Ny4zMDc5MzMgMTI4LTEyOCAxMjgtNzAuNjkyMDY2NyAwLTEyOC01Ny4zMDYxMjctMTI4LTEyOCAwLTcwLjY5MjA2NjcgNTcuMzA3OTMzMy0xMjggMTI4LTEyOCA3MC42OTIwNjcgMCAxMjggNTcuMzA3OTMzMyAxMjggMTI4IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0ibTIwMC45OTE0OTkgMTQxLjM4NDM3OXYxMS45MzQ0MDRjMCAzMi40OTcwNzgtNDYuMjA1ODI2IDUxLjQ3NTM0Ni02MS45MzUzOTggNTYuOTg2NTMybC02LjI4OTM3MSAyLjE3NDY4NXYtMjAuNjI5NDAxbDIuNjIxOTE2LS45ODkyOGMyMi43MTQ3NDUtOC41NDg4MzYgNDUuNjMyMjgyLTIzLjI5NTQ2NSA0Ni4wODgzNjEtMzcuMTIzNzg0bC4wMDY5MjItLjQxODc1MnYtMTEuOTM0NDA0em0tNzIuODY1MTcyLTk3Ljg2NDM3OSAxOS42NjExMzUgNi4wNjMzODIydjIxLjA0ODA2N2wtMTkuNjYxMTM1LTYuMDg0Mzk2My0xLjI4NjcxMS4zOTkyNjgzdjQ3LjM1NDUxMzhoMjAuOTQ3ODQ2djE5LjUxMDgwM2gtMjAuOTQ3ODQ2djgwLjM4MDYzbC02LjM2Mjg5Mi0yLjM3NTQ2N2MtMi40NDg2MzUtLjkyODUwMi01Ljk3MzE2Ny0yLjMzOTg4Ni0xMC4yMTU4NzUtNC4yNDkxNDJsLS41NTc0NC0uMjUxODU4LTIuMzc0NTk2LTEuMDg0NjUydi0xNTQuMjkzNzU5N3ptLTI2Ljk2OTIgOC40MDA0NzU4djIwLjk1MTA3ODhsLTI2LjY0MTA1NTggOC4yNjk4NjQ5djMxLjE1OTA5MjVoMjYuNjQxMDU1OHY5MC4yNDI3MThsLTUuOTAwMTE4Mi0zLjAzNDExNWMtMTguMTc2Mjc3My05LjM1NTM5LTM5LjgxMTA4ODItMjUuMDcwMTczLTQwLjI0MTk2NjgtNDYuOTcwMjQ4bC0uMDA2NTQxMS0uNjY1NTMydi0xMC40ODkyOGgxOS41MDc1NzAzdjEwLjQ4OTI4YzAgNC40NjY3MzcgMi4yNTgyODY3IDkuMTU1OCA2LjcxODY5NjMgMTMuOTgyOTQ0bC40MTE1NTY2LjQzOTIwOXYtMzQuNDg0MTczaC0yNi42Mzc4MjMydi02NS42NDY0OTh6bTUyLjU1MjYtLjQ5OTE2NjIgNDcuMjgxNzcyIDE0LjYzMzkxMDZ2NjUuNzU2NDE3OGgtMjcuNzU4MDM3djI4LjQ3NTc1MWwtLjI4NTQ4OS4zNTQyMDZjLTEuMzU1MjUgMS42MzQ0NTUtNy41NjM1NzUgOC42MjI2NTUtMTkuMjIwNDY1IDE0LjU5NDkxNnptMTkuNTIzNzM1IDI3LjA3NzUwMzN2MzMuODAyMDIyMWg4LjI1MDQ2N3YtMzEuMjU0NDY0eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if ((_a = window.safepal) == null ? void 0 : _a.isSafePalWallet) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.safepal;
      let account;
      try {
        account = await wallet.getAccount();
      } catch (error) {
        throw new WalletAccountError(error == null ? void 0 : error.message, error);
      }
      let publicKey;
      try {
        publicKey = new PublicKey(account);
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    if (this._wallet) {
      this._wallet = null;
      this._publicKey = null;
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-saifu/lib/esm/adapter.js
init_index_browser_esm();
var SaifuWalletName = "Saifu";
var SaifuWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = SaifuWalletName;
    this.url = "https://saifuwallet.com";
    this.icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTQxcHgiIGhlaWdodD0iNTQxcHgiIHZpZXdCb3g9IjAgMCA1NDEgNTQxIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkFydGJvYXJkIENvcHkgOTwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjEuNzk5ODcyMTYlIiB5MT0iMCUiIHgyPSI5OC4zOTcxMDUxJSIgeTI9Ijk3Ljk5MDI5MSUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZCOTIzQyIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRUM0ODk5IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkFydGJvYXJkLUNvcHktOSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTIzMi4yNzAwNDQsLTcuODU2NzI5NzFlLTE1IEwzMDcuNzI5OTU2LDcuODU2NzI5NzFlLTE1IEMzNzkuNDY1Mzc2LC01LjMyMDg1MzMyZS0xNSA0MTIuMzM3Mzc5LDguODE4NDMzMDYgNDQzLjMwMDM0MiwyNS4zNzc2MDY5IEM0NzQuMjYzMzA1LDQxLjkzNjc4MDcgNDk4LjU2MzIxOSw2Ni4yMzY2OTUyIDUxNS4xMjIzOTMsOTcuMTk5NjU4MiBDNTMxLjY4MTU2NywxMjguMTYyNjIxIDU0MC41LDE2MS4wMzQ2MjQgNTQwLjUsMjMyLjc3MDA0NCBMNTQwLjUsMzA4LjIyOTk1NiBDNTQwLjUsMzc5Ljk2NTM3NiA1MzEuNjgxNTY3LDQxMi44MzczNzkgNTE1LjEyMjM5Myw0NDMuODAwMzQyIEM0OTguNTYzMjE5LDQ3NC43NjMzMDUgNDc0LjI2MzMwNSw0OTkuMDYzMjE5IDQ0My4zMDAzNDIsNTE1LjYyMjM5MyBDNDEyLjMzNzM3OSw1MzIuMTgxNTY3IDM3OS40NjUzNzYsNTQxIDMwNy43Mjk5NTYsNTQxIEwyMzIuMjcwMDQ0LDU0MSBDMTYwLjUzNDYyNCw1NDEgMTI3LjY2MjYyMSw1MzIuMTgxNTY3IDk2LjY5OTY1ODIsNTE1LjYyMjM5MyBDNjUuNzM2Njk1Miw0OTkuMDYzMjE5IDQxLjQzNjc4MDcsNDc0Ljc2MzMwNSAyNC44Nzc2MDY5LDQ0My44MDAzNDIgQzguMzE4NDMzMDYsNDEyLjgzNzM3OSAtMC41LDM3OS45NjUzNzYgLTAuNSwzMDguMjI5OTU2IEwtMC41LDIzMi43NzAwNDQgQy0wLjUsMTYxLjAzNDYyNCA4LjMxODQzMzA2LDEyOC4xNjI2MjEgMjQuODc3NjA2OSw5Ny4xOTk2NTgyIEM0MS40MzY3ODA3LDY2LjIzNjY5NTIgNjUuNzM2Njk1Miw0MS45MzY3ODA3IDk2LjY5OTY1ODIsMjUuMzc3NjA2OSBDMTI3LjY2MjYyMSw4LjgxODQzMzA2IDE2MC41MzQ2MjQsNS4zMjA4NTMzMmUtMTUgMjMyLjI3MDA0NCwtNy44NTY3Mjk3MWUtMTUgWiIgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgIDxnIGlkPSJMYXllciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA3LjUwMjc2NCwgODcuMDIxNTg5KSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNjEuMzI1MTQ3LDMyMy44NjM0MjEgQzE0Mi44Mjk2OTQsMzIzLjc5NzY1NSAxMjMuMjczNDA1LDMyMy4xODE2MjggMTE1LjYyMDA1NCwzMjIuNDIzNjkzIEMxMDguMjYyNjAyLDMyMS42OTUwNTUgOTYuMTg1MjU1MywzMTkuOTI1MzEgODguNzgxNTA3MywzMTguNDkwODYyIEM4MS4zNzc3NjAzLDMxNy4wNTY0NDQgNzAuNTIyNDg5MywzMTQuMzEyMjczIDY0LjY1ODY4OTMsMzEyLjM5MjcxOCBDNTguNzk0ODg5MywzMTAuNDczMTMxIDUwLjMxNDQ1MTMsMzA3LjEyMTE3MiA0NS44MTMyNzYzLDMwNC45NDM4NjUgQzQxLjMxMjA5MzMsMzAyLjc2NjU4OCAzMy45ODIzODIzLDI5OC4yMzcxMzkgMjkuNTI1MDMwMywyOTQuODc4NDM1IEMyNS4wNjc2NzEzLDI5MS41MTk3MDEgMTkuMTY5NTMxMywyODYuMDA1Njk0IDE2LjQxODA0MzMsMjgyLjYyNTAxNyBDMTMuNjY2NTU1MywyNzkuMjQ0NDAyIDkuNjgzMDk2MjksMjczLjAzNzM3MSA3LjU2NTkwMTI5LDI2OC44MzE2MjEgQzUuNDQ4NzEzMjksMjY0LjYyNTg3MiAyLjg3OTY0NDI5LDI1Ny42NTA4OTYgMS44NTY4NTUyOSwyNTMuMzMxNjIxIEMwLjU0MDkzNzI4NywyNDcuNzc0NDkzIDAsMjQxLjY3NzU2OSAwLDIzMi40Nzg0MTEgQzAsMjIzLjk1Mzc1MyAwLjYyMzY5MzI4NywyMTYuMzgwMDgzIDEuODA2NDE3MjksMjEwLjQ3ODQxMSBDMi43OTg0MjkyOSwyMDUuNTI4Mzk5IDQuOTYyNzg5MjksMTk3LjQyODQyMyA2LjYxNjExNzI5LDE5Mi40Nzg0MTEgQzguMjY5NDQ1MjksMTg3LjUyODM5OSAxMS4zNzA1MjczLDE3OS41MzcwOTYgMTMuNTA3NDIxMywxNzQuNzE5OTI3IEMxNy4zOTI2NjgzLDE2NS45NjE0NDMgMTcuMzkyNjY4MywxNjUuOTYxNDQzIDE0Ljg0OTI0MTMsMTYxLjA1OTA5OSBDMTMuMjU3MzY4MywxNTcuOTkwODMyIDEyLjI0ODA5MDMsMTU0LjMwNjUwNSAxMi4xNTE1MjUzLDE1MS4yMTExODQgQzEyLjA2NjY2MzMsMTQ4LjQ5MTEyMiAxMi42MjU5NTkzLDE0NC41MTM1MDYgMTMuMzk0Mzk5MywxNDIuMzcyMDI3IEMxNC4xNjI4NDAzLDE0MC4yMzA1NDcgMTcuOTQ4MTk0MywxMzQuMjE2NDc5IDIxLjgwNjMwMzMsMTI5LjAwNzQzMyBDMjUuNjY0NDExMywxMjMuNzk4Mzg4IDMzLjEzNTY4NzMsMTE1LjA3NTYwOSAzOC40MDkxMzkzLDEwOS42MjM0OTIgQzQzLjY4MjU5MjMsMTA0LjE3MTM3NCA1MS41OTcyNDIzLDk2LjY3NTczODQgNTUuOTk3MjM2Myw5Mi45NjY0Nzk0IEM2MC4zOTcyMzAzLDg5LjI1NzI1MDQgNjcuODIyMjMzMyw4My42Nzk5MTk0IDcyLjQ5NzIzNjMsODAuNTcyNDM2NCBDNzcuMTcyMjM5Myw3Ny40NjQ5MjI0IDg1LjQwNTkyNzMsNzIuNjU0Mzc1NCA5MC43OTQzMjUzLDY5Ljg4MjMxMTQgQzk2LjE4MjcyMjMsNjcuMTEwMjQ3NCAxMDQuNTg1OTgxLDYzLjM1NzEwNDQgMTA5LjQ2ODIxNCw2MS41NDE5NDk0IEMxMTQuMzUwNDYyLDU5LjcyNjgyNDQgMTIxLjQxNjc2MSw1Ny40MzYzMjc0IDEyNS4xNzExMjUsNTYuNDUxOTgzNCBDMTI4LjkyNTQ4OSw1NS40Njc2MDg0IDEzMi4zNzk0MzgsNTQuMzI4NjYxNCAxMzIuODQ2NTcxLDUzLjkyMDk3NzQgQzEzMy4zMTM3MDMsNTMuNTEzMjkzNCAxMzMuMzkzNDkxLDUyLjIyNjg4NTQgMTMzLjAyMzg2Myw1MS4wNjIzMDQ0IEMxMzIuNjU0MjM0LDQ5Ljg5NzcyMzQgMTMwLjY1NDQzMiw0OC4wNzg5MzY0IDEyOC41Nzk4NDcsNDcuMDIwNTU2NCBDMTI2LjUwNTI2Miw0NS45NjIxNzY0IDEyMy4zMzE2OTMsNDMuNDE0OTY1NCAxMjEuNTI3NDY0LDQxLjM2MDA2NDQgQzExOS43MjMyMzQsMzkuMzA1MTYzNCAxMTcuNjI4MzQsMzYuMTQzMDg0NCAxMTYuODcyMTQ0LDM0LjMzMzI2OTQgQzExNi4xMTU5NDksMzIuNTIzNDI0NCAxMTUuNDk3MjM2LDI4LjMxMzczODQgMTE1LjQ5NzIzNiwyNC45Nzg0MTE0IEMxMTUuNDk3MjM2LDIxLjY0MzA4NDQgMTE2LjE4NjE1NSwxNy4yNjUzMzc0IDExNy4wMjgxODEsMTUuMjUwMTA5NCBDMTE3Ljg3MDE5MSwxMy4yMzQ4ODE0IDExOS42OTgxMDMsMTAuMDkyNzkxNCAxMjEuMDkwMTkzLDguMjY3NjU3NDMgQzEyMi40ODIyNjcsNi40NDI1NTM0MyAxMjUuODI4Mzk3LDMuODMwODI4NDMgMTI4LjUyNTk5OSwyLjQ2MzgyNDQzIEMxMzIuMzM4NDIzLDAuNTMxOTM5NDI1IDEzNC45NDE0MTksLTAuMDE2NzA1NTc0NiAxNDAuMjEzOTg3LDAgQzE0NC42MTc5NDgsMC4wMTQ2MzU0MjU0IDE0OC40MTM4NDcsMC42NjU4MTk0MjUgMTUxLjAzNTk0OCwxLjg1Njg5MDQzIEMxNTMuMjU3MjMxLDIuODY1ODkzNDMgMTU2Ljk2OTc0LDUuODQ0MzQ3NDMgMTU5LjI4NTk0OCw4LjQ3NTcyNTQzIEMxNjMuNDk3MjM2LDEzLjI1OTk5NzQgMTYzLjQ5NzIzNiwxMy4yNTk5OTc0IDE2Ny43MDg1MjQsOC40NzU3MjU0MyBDMTcwLjAyNDczMiw1Ljg0NDM0NzQzIDE3My43MzcyNDEsMi44NjU4OTM0MyAxNzUuOTU4NTI0LDEuODU2ODkwNDMgQzE3OC41ODA2MjUsMC42NjU4MTk0MjUgMTgyLjM3NjUzOSwwLjAxNDYzNTQyNTQgMTg2Ljc4MDQ3LDAgQzE5Mi4wNTMwNTMsLTAuMDE2NzA1NTc0NiAxOTQuNjU2MDQ5LDAuNTMxOTM5NDI1IDE5OC40Njg0NTgsMi40NjM4MjQ0MyBDMjAxLjE2NjA5LDMuODMwODI4NDMgMjA0LjQ3MzAwNSw2LjQxODMyMjQzIDIwNS44MTcxODIsOC4yMTM4MjQ0MyBDMjA3LjE2MTM2LDEwLjAwOTM1NjQgMjA4Ljk4OTI0LDEyLjkxODU2NjQgMjA5Ljg3OTE5NCwxNC42Nzg3NTk0IEMyMTAuODgxODgsMTYuNjYxOTQ0NCAyMTEuNDk3MjM2LDIwLjM4MjIyMDQgMjExLjQ5NzIzNiwyNC40NjA4NjM0IEMyMTEuNDk3MjM2LDI4LjA4MDg1OTQgMjEwLjg3ODUyMywzMi41MjM0MjQ0IDIxMC4xMjIzMjgsMzQuMzMzMjY5NCBDMjA5LjM2NjEzMiwzNi4xNDMwODQ0IDIwNy4yNzEyNTMsMzkuMzA1MTYzNCAyMDUuNDY3MDI0LDQxLjM2MDA2NDQgQzIwMy42NjI3OTQsNDMuNDE0OTY1NCAyMDAuNDg5MjEsNDUuOTYyMTc2NCAxOTguNDE0NjI1LDQ3LjAyMDU1NjQgQzE5Ni4zNDAwNCw0OC4wNzg5MzY0IDE5NC4zNDAyMjMsNDkuODk3NzIzNCAxOTMuOTcwNjI1LDUxLjA2MjMwNDQgQzE5My42MDA5OTYsNTIuMjI2ODg1NCAxOTMuNjgwNzY5LDUzLjUwODI4ODQgMTk0LjE0NzkwMSw1My45MDk4Mzg0IEMxOTQuNjE1MDM0LDU0LjMxMTM4ODQgMTk3LjY5NzI0OCw1NS4zNzA1MzE0IDIwMC45OTcyMzYsNTYuMjYzNDQ1NCBDMjA0LjI5NzIyNCw1Ny4xNTYzNTk0IDIxMC4xNTMwODksNTguOTY5NDM5NCAyMTQuMDEwMjA2LDYwLjI5MjQ5ODQgQzIxNy44NjczNTMsNjEuNjE1NTI2NCAyMjQuMzY0NzI5LDY0LjE2NDYyOTQgMjI4LjQ0ODgzNSw2NS45NTcxNzE0IEMyMzIuNTMyOTQyLDY3Ljc0OTcxMjQgMjQwLjI5MjA2Niw3MS44MzkzNzM0IDI0NS42OTEyOTcsNzUuMDQ1MzM2NCBDMjUxLjA5MDUyOCw3OC4yNTEyOTk0IDI1OC45OTMxNDcsODMuNDY0MjgxNCAyNjMuMjUyNjY4LDg2LjYyOTcxNzQgQzI2Ny41MTIxOSw4OS43OTUxODM0IDI3Ny4xMTY2ODIsOTguNDgxMDk3NCAyODQuNTk2MDIxLDEwNS45MzE3NSBDMjkyLjA3NTM2MSwxMTMuMzgyNDAzIDMwMS40MTI0MjgsMTIzLjgzNTQ2NyAzMDUuMzQ1MDc1LDEyOS4xNjA3ODQgQzMwOS4yNzc2OTMsMTM0LjQ4NjA3MSAzMTIuOTQ1NzUzLDE0MC4wMjc4OCAzMTMuNDk2MjU5LDE0MS40NzU4NzggQzMxNC4wNDY3OTcsMTQyLjkyMzg3NiAzMTQuNDk3MjM2LDE0Ni45MzcyODkgMzE0LjQ5NzIzNiwxNTAuMzk0NTY0IEMzMTQuNDk3MjM2LDE1NS4xMzAxMjkgMzEzLjg5ODExNSwxNTcuODA3Mjk5IDMxMi4wNjgxODksMTYxLjI0ODkxOSBDMzA5LjYzOTE3MywxNjUuODE3MzI0IDMwOS42MzkxNzMsMTY1LjgxNzMyNCAzMTQuNjI4MjE3LDE3Ny41ODk4MzEgQzMxNy4zNzIxNzUsMTg0LjA2NDcxNSAzMjAuNzM4NzUyLDE5My4yMTM0NTcgMzIyLjEwOTQ0OSwxOTcuOTIwMzY3IEMzMjMuNDgwMTc3LDIwMi42MjcyNzYgMzI1LjI5ODAxNywyMTAuOTc4NDExIDMyNi4xNDkwOTEsMjE2LjQ3ODQxMSBDMzI3LjIxNTAwOSwyMjMuMzY2Njg2IDMyNy41MTg4NDIsMjI5LjkwMTMyNCAzMjcuMTI1NTAxLDIzNy40Nzg0MTEgQzMyNi43OTc0MzcsMjQzLjc5NzY4NiAzMjUuNjgwNDY0LDI1MS41OTY4OCAzMjQuNTAwNTYyLDI1NS44MDcwMjQgQzMyMy4zNzA4OTMsMjU5LjgzNzc4NiAzMjEuMTU2ODEyLDI2NS42OTA3ODMgMzE5LjU4MDM5NiwyNjguODEzNjc3IEMzMTguMDAzOTUsMjcxLjkzNjYwMiAzMTQuNTU1NzA4LDI3Ny4zNjMwNTUgMzExLjkxNzY0NiwyODAuODcyNDU0IEMzMDkuMjc5NTU0LDI4NC4zODE4ODQgMzAzLjgyNDc4MSwyODkuODcyNjk4IDI5OS43OTU5NDIsMjkzLjA3NDI5NyBDMjk1Ljc2NzA3MiwyOTYuMjc1ODY2IDI4OS42NjQxOTgsMzAwLjQ2Mzg4NSAyODYuMjMzOTkxLDMwMi4zODA5NjggQzI4Mi44MDM3ODUsMzA0LjI5ODA4MyAyNzUuODc1MDEzLDMwNy40NTc3NTEgMjcwLjgzNjc0NCwzMDkuNDAyNDgzIEMyNjUuNzk4NDc1LDMxMS4zNDcyNDYgMjU3LjI0ODQ1NywzMTQuMDkwNTk0IDI1MS44MzY3NDQsMzE1LjQ5ODgyNyBDMjQ2LjQyNTAwMSwzMTYuOTA3MDYxIDIzNi41OTcyNDIsMzE4LjkxNDY5IDIyOS45OTcyMzYsMzE5Ljk2MDI4NCBDMjIzLjM5NzIzLDMyMS4wMDU4NDYgMjEyLjUxOTc4OCwzMjIuMzM3NjY0IDIwNS44MjUxNDcsMzIyLjkxOTg0OCBDMTk5LjEzMDUwNiwzMjMuNTAyMDYyIDE3OS4xMDU0OTcsMzIzLjkyNjY4NCAxNjEuMzI1MTQ3LDMyMy44NjM0MjEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        if (window.saifu) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.saifu;
      if (!wallet.isConnected) {
        try {
          await wallet.connect();
        } catch (error) {
          throw new WalletConnectionError(error == null ? void 0 : error.message, error);
        }
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(transaction, connection, options = {}) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      if (wallet.signAndSendTransaction) {
        try {
          const { signers, ...sendOptions } = options;
          transaction = await this.prepareTransaction(transaction, connection, sendOptions);
          (signers == null ? void 0 : signers.length) && transaction.partialSign(...signers);
          sendOptions.preflightCommitment = sendOptions.preflightCommitment || connection.commitment;
          const { signature } = await wallet.signAndSendTransaction(transaction, sendOptions);
          return signature;
        } catch (error) {
          if (error instanceof WalletError)
            throw error;
          throw new WalletSendTransactionError(error == null ? void 0 : error.message, error);
        }
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
    return await super.sendTransaction(transaction, connection, options);
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-salmon/lib/esm/adapter.js
init_index_browser_esm();
var SalmonWalletName = "Salmon";
var SalmonWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor({ network = WalletAdapterNetwork.Mainnet } = {}) {
    super();
    this.name = SalmonWalletName;
    this.url = "https://salmonwallet.io";
    this.icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijg4IiBoZWlnaHQ9Ijg4IiByeD0iMzAiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl84NTVfNTgwKSIvPgo8cGF0aCBkPSJNNTkuODA1NSAyNy42M0M1Ni43OTU1IDI1LjgyMzkgNTMuNjIyMiAyNC41Mzg4IDUwLjM1OTcgMjMuODE0NEw0Ni45MDQyIDE2LjEyODdDNDYuNDkzMyAxNC44NTg1IDQ1LjMwMDIgMTQuMDAwMSA0My45NTM3IDE0LjAwMDFINDMuODE1QzQyLjQ2ODUgMTQuMDAwMSA0MS4yNzU0IDE0Ljg2MzUgNDAuODY0NSAxNi4xMjg3TDM3LjQwOSAyMy44MDk1QzM0LjE0MTYgMjQuNTM4OCAzMC45NTgzIDI1LjgyODkgMjcuOTQzNCAyNy42MzQ5QzIxLjk1MzIgMzkuMjYwMyAyMC4zMjk0IDUwLjU5MjggMjEuMTQxMyA2MS43NjY2QzI0LjY1MTMgNjUuMTY1NCAzMi40MzM2IDY5LjM2OCAzNi42MDcgNzEuMDMwMkMzOS4wNTI2IDcyLjAwMjcgMzkuODAwMSA3Mi40OTM5IDQyLjI1MDYgNzIuOTAwN0M0NC40Mjg5IDczLjUxNiA0NS4wODczIDczLjI3NzggNDYuNzU1NyA3My4xMDQyQzQ5LjMyNTEgNzIuNDE5NSA1MC4zOTQ0IDcxLjcyNDggNTEuNDM0IDcxLjE2NDFDNTUuODQ5OSA2OC44NzY4IDYzLjExNzQgNjUuMTcwNCA2Ni42Mjc0IDYxLjc3MTZDNjcuNTc3OSA0OC44MTE2IDY0Ljk5ODYgMzcuNTgzMiA1OS44MDU1IDI3LjYyNVYyNy42M1pNMzcuNTI3OCA1MS4xNDg1QzM1LjY0MTYgNTEuMTQ4NSAzNC4wODIyIDQ4LjkwMDkgMzQuMDgyMiA0Ni4xMzIyQzM0LjA4MjIgNDMuMzYzNiAzNS41ODcxIDQxLjA5NjEgMzcuNTE3OSA0MS4wOTYxQzM5LjQ0ODYgNDEuMDk2MSA0MC45OTgxIDQzLjM2MzYgNDAuOTYzNSA0Ni4xMzIyQzQwLjkyODggNDguOTAwOSAzOS40NDM3IDUxLjE0ODUgMzcuNTIyOCA1MS4xNDg1SDM3LjUyNzhaTTUwLjIzMSA1MS4xNDg1QzQ4LjMzOTkgNTEuMTQ4NSA0Ni43OTAzIDQ4LjkwMDkgNDYuNzkwMyA0Ni4xMzIyQzQ2Ljc5MDMgNDMuMzYzNiA0OC4yOTUzIDQxLjA5NjEgNTAuMjMxIDQxLjA5NjFDNTIuMTY2NyA0MS4wOTYxIDUzLjcwMTQgNDMuMzYzNiA1My42NjY3IDQ2LjEzMjJDNTMuNjMyMSA0OC45MDA5IDUyLjE1MTggNTEuMTQ4NSA1MC4yMzEgNTEuMTQ4NVoiIGZpbGw9IiNGQ0ZDRkMiLz4KPHBhdGggZD0iTTc1LjQwNTEgNTYuMTIwM0w3MC45NzkzIDQyLjE3MjlDNzAuNDM0NyA0MC40NjYxIDY4Ljg1NTUgMzkuMzA1MSA2Ny4wNjMzIDM5LjMwNTFDNjYuNTI4NyAzOS4zMDUxIDY2LjAwODkgMzkuNDA5MiA2NS41Mjg3IDM5LjYwMjhDNjcuNTQ4NSA0Ni4zMjU5IDY4LjM2MDQgNTMuNTc5OSA2Ny43MjY3IDYxLjQ4NEg3MS40ODQyQzc0LjI2NjUgNjEuNDg0IDc2LjI0MTcgNTguNzc0OSA3NS40MDAxIDU2LjEyMDNINzUuNDA1MVoiIGZpbGw9IiNGQ0ZDRkMiLz4KPHBhdGggZD0iTTEyLjE5MDggNTYuMzgzNUwxNi42MTY2IDQyLjQzNjFDMTcuMTYxMiA0MC43MjkyIDE4Ljc0MDUgMzkuNTY4MiAyMC41MzI2IDM5LjU2ODJDMjEuMDY3MiAzOS41NjgyIDIxLjU4NyAzOS42NzI0IDIyLjA2NzMgMzkuODY1OUMyMC4wNDc0IDQ2LjU4OSAxOS4yMzU1IDUzLjg0MzEgMTkuODY5MiA2MS43NDcxSDE2LjExMTdDMTMuMzI5NSA2MS43NDcxIDExLjM1NDIgNTkuMDM4IDEyLjE5NTggNTYuMzgzNUgxMi4xOTA4WiIgZmlsbD0iI0ZDRkNGQyIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzg1NV81ODAiIHgxPSI0NCIgeTE9IjAiIHgyPSI0NCIgeTI9Ijg4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjgxNzAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY1QzQ1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.Loadable;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._network = network;
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        if (window.salmon) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.connected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Loadable && this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      let SalmonClass;
      try {
        SalmonClass = (await import("./esm-HVOQIOFY.js")).default;
      } catch (error) {
        throw new WalletLoadError(error == null ? void 0 : error.message, error);
      }
      let wallet;
      try {
        wallet = new SalmonClass({ network: this._network });
      } catch (error) {
        throw new WalletConfigError(error == null ? void 0 : error.message, error);
      }
      if (!wallet.connected) {
        try {
          await wallet.connect();
        } catch (error) {
          throw new WalletConnectionError(error == null ? void 0 : error.message, error);
        }
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signMessage(message, "utf8");
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-sky/lib/esm/adapter.js
init_index_browser_esm();
var SkyWalletName = "SKY Wallet";
var SkyWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = SkyWalletName;
    this.url = "https://getsky.app";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDY2IDY2IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxpbWFnZSAgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBpZD0iaW1nMSIgaHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUFYTlNSMElCMmNrc2Z3QUFFWGhKUkVGVWVKekZXd2x3RlZVVy9ZRUVRaEx5MTdCbGcwaEVrYzJFZ0d5akFoWUtLb2lvaUN3aUlpaWlvcWdnaTRBb0lBNmhCQUVabGtFREptSGZ3aFlNUzFCUjJVVUUwUUZucG5TbVpzWlNTNjJwS2JsenprdS84TkxwL2dSSndxODYxZjI3KzNmM3ZlOHU1OTczdnNkVGhaOTkrL1pGQXgwT0hEZ3c4cU9QUGxyd3lTZWZGSHo2NmFkSGdYOGRQbnhZamg0OVdvcGp4NDc5RXpnQ2JENSsvUGc4NEZFZ0M2aFZsZTlZcVorZE8zZDZkdTNhbGZEKysrL2ZzM2Z2M29VUS9PakJnd2QvZ09BWERoMDZKT0ZBaFJ3NWNrUXJReUQ0aFJNblRuei8yV2VmSFFMZUJPNEVBamgzdGNVcy95a29LUEJzMjdZdEZRcDR1YWlvNkFRRXZ3REJCU1A5dTZHVlFvVkFFUUxoTDV3OGVmSVFNQTVvaU85WFcyeVBaOU9tVFJHYk4yOU9nL0J6Q3dzTC93dkJCYU45UllLSFV3Z3RBNExMNTU5Ly9pdndHcEFFUkZ3VjRkZXRXeGNMQlV5RThQL1p2MzkvbFFudXBBaGFCYXhBVHAwNjlSMHdHcWhkYllMbjUrZEhyRm16cHQzR2pSdFB3OWZsNDQ4L3JoYkIzU3dDRmtCRkhBTmFBbFVyZkY1ZUhoVXdDV2IvWTNGeGNZVkgvWU1QUHBCbHk1YkpDeSs4SUE4OTlKRGNmZmZkMHFWTEY3bnBwcHNVdU4rN2QyOFpPSENnakI4L1hsYXNXQ0hJR2hXNk4rTUUzZUtMTDc3NEhuaXF5b1IvNzczM1FsREFTcGg4aFY0T0FWR21UWnNtUFh2MmxFYU5Hb25mNzVkQUlGQUtyOWNyb1ZCSWdmczhGZ3dHMVhWRWNuS3kzSFhYWFRKanhnelp2WHYzSlo5SGE0QUNMZ0NMQUc5bEM1K0lrVis5ZmZ2MnNOR2RGckZod3dZWk9YS2t0R3paVWhJU0VrcUZwWEJPd2pvcGhlZjBiK3JWcXlkdDJyU1IwYU5IQ3l3dnJOVXhOc0FOZmp0OSt2UnlLQ0ZRV2NMSDVPYm03dURJaC9OM3BEOTU4c2tuSlRVMVZiMDRFUjhmcjdZVXp1ZnpsUkdZNTdRRmNGOGY1M1dFcVJSOXY3UzBOSG51dWVlRTd1ZjJIdVFTbGhKeW9JU29LeFUrRHNJWFVIaTNrYWM3dlBIR0c1S1NrbEw2b3RxTTlVZzdtWHNnakFYbzY4cmR6L3JldEdsVG1UOS92dXVBV0VvUUtDRVhpUDVkd3E5Y3VaSUtXQWF6Y3pWNzBGd1Z1TFNnNWN5WUx3MFREalpzS0w0R0RjU1BXQkJNVEpRQTRNWDNFUHc4bEp5RS9mbzRobk5KU2VMRHRYNUFYWWZyZVYwd0tWR2Q4OWF2TDBIZWcxdTQxL0RISGhOeUR6Y2x3QUpvQ2JOL3o4aEhBSThqMTdzR3ZLMWJ0MHFuVHAxS0JlY0lxWDBDTHhob25Dcis2NitUbEU0ZHBYblBPNlJ0djN1bDNmMzlKS1B2UFdxLzdYMzNTdWE5ZlNXVCt4WXk4SjNYWk4zSDYvcXFiVnNnczE5ZkJWNlRpZDhuZGV3Z2dmU21Fb1RpdW5YdkpxRGZyakVCQ3JnQTNBOWxYSllDTWhEeGZ5VEJjYnJ4amgwN1ZHRFNKc3l0TWxtTXRpOGxXZnh0V3N2OVk1Nld4ZSt0a2kzSUJqdDNGOHB1Y0liM0t3Rzh6MVlJUEdMeVpBbEF3ZjU2Q1dvZzNONFZOWVdjT1hQbTMxQkNzNG9LVDc4L3pEVG1OdkkzM25oanFYOXFmdzQwYkNEZTY1cEpuMUZQeU5xdFcxVHFBbE5VV2FHeUFSSW1LTFprTUhoRjRKbzBDWVNDMHFGREIxZExJRm1DRW9xZ2hQQ01FY0xYQUo3bFE1ejhuZy90MkxGamFkRFNaay8vam9Qd1kxK2ZoZEd1T3NIdFNzaUJpeVpsdFZWeGh1L1RyVnMzeHd4aHhRTzZ3eU9BZSswQTRhL0Y2SDlEUVoyaVBWbWNFaGhwU2xrQW96VlFCNlB3L096WDFhaFh0ZUFtQ3ZjVVNhdmJlMGdBQTZEZmFjU0lFWTdaZ1JVbHJPQVVGSkRrSmp5UnpkRnpNaU9tT2pPWGN4c0h2NDlxMUVENlAvZXM4cy9xRkY0QjZia0pncXlmbWNZYUdMN2JnZ1VMeXIwL2F3ZkxDbDZHSXB4SEg0SHY3MDZqejVGbDBDdERYUERBNkdCQWtycDBrbUp3Zlpwa2RRcFBiakp4YnJZa0lCQUdrQkpORHNINndpa29NaUJDQVY4Q0RaMFVNSk9qNzBRMVNXMDFPZEYrejlHdjBhaWh2RFJuam16WnN1V1Mva29heSt1dUZBekNaSjEveXN1VnhQYnR3QTNxbGZJUXpTSkp3Y2VPSGV0b0JTQklUSXZqbklMZjF6UmpwOEJIZXF0OVRDc2lLaTVPNWVOdGhZVmhoZWM5VitPbFIwMmZKbzlPbmlURHJ4QkR4bytUTGdNZWxIcXRXNVVRSzd5UG5UTHpYZFBUMHgwNWpCVUxqdGdWMEd2dDJyV09QeGcyYkZnWm5xNGZGZ0hjK2Rod1Y5L25xQmZDZFI1QWZJaEt2MFpxZ2h4RkltZlh4T2h3V3dPcGk5dElqS0RlVitjU1NyWVhyd3VWWEFjLzV6WVdqTkVMcGhpdytiMm15MllkTVdiTUdNZU1ZSkdqVEZNQkt3b0tDc3FaLzU0OWUrVDY2Njh2SXp3ZldpY21Sang0NmFlbnZ5TDhuYU9QYnQ4dTB4Y3VFQjk4MUVlQ0ZNQUw4ajcra3EyWDk3T1lZenlEcTNWT3cydGN4NjM1Rzc4bHNGbEhhQXNOR09jWXQreHBrVzVBWGdBRlpHdmhvNEZUOUN1N3R1YkF2ODJINkJ0SDE2a2pIdERRYWZQbktkOTJVc0FPa0pMdVF4K1dJSmloejRvYjloR3ozN2VVVGhzQzJhOXpPdWEwSmVpdVM1WXNjUXVHbnlJcjFLUUNya1B1LzlYSi9HKysrZWFMMVp0aEJiVnExeFlQbU4rckM5NXlKVDFiUVpmYjN0TUhETEZoR2VzeDcyY1h3aHhGOHpwdDNsb0Jaay9CTkhtN0FuaU9UUlVYTi9nQkNraW1BZ2JULzUwcVBVWlQrNGdRVWJWcWlRZStPM0hPSDEwendDNEV4MzVQajVaZ2s4WXFVSm5sY1VVNlF1WjFadkMxbDhqNnV6MEk2dnV4RzJWbnRSWW5ZUGVvaHljbkoyYzV6WmpzeVFSN2VQYVgwemVPam80V0QzejZFVVJrRmtaT0NxQmljdGF2azRZZDJvc1hwV3dJRmhNQ1kvTnlkQmpBRUJUOTdCaFJ5YXdlY2N4TFFlRmFJWHpudmpvSGFKKzNDOHYzTTRYVlFUQmtaUVk5YVBuNStlWGtZelpBTEpqcFdiNTgrWDZhTVVmY3hJUUpFeHlEREtFVUVCY3JIVkNxTWsyNnBVQXFaMEZPanZ3QmFTc1ZqQzI1WFpZa0kzY250MnNuamRwbVN1cE43U1VGNEQ2UHB3Qkp1SWI4bnRjMnVMR04rSzVObDJCYWs1SitnR0ZCZGtzeDM4K3VsRm16WnBXVGowcEF1YnpKczNEaHdxL3BBdHNSdFUwTUdqVEkxUUxJQkNQZ0JyNldMV1RWaHZVcTVibUJXV0l2V0ZudXBvM3lMb3FYZC9Bc2J0OWRwN2NYOXkrZVd5Y3IxcXlSSmJtNU12UHRSVEpzd2t2U3VsZFBWZjRHazVOVmhqQ3R3VzRCZGpkanE4NHVINE0rNHQ1aER5TDlqeXRYcmhRcXdjU3R0OTVhSnFDWVprY0YxSXlNRkErK0QzeCtyTklveStlcUF0TXgyOTl6VjZ5UXJINTlKUUNyOElFVDJHT0YyVkExQjYxUG56N2w1S1BiNDc3ZmVkaDJYcnAwcVNBV2xFRldWcGFqQmVpSHhzVEdpZ2V1VUFkbDhPNERKWE1FZGorcmJEQjRuVGg1VWg2Wk9FRVNZSDBoVUhGdm1CaWdsZEsrZmZ0eThpSHpLVXZ3VEpreVJlQUdLbCthMEIwZmU0b3lGUkVaRlNXZStMcHl3NTI5NUlzdnY1U3paODlXQzg2ZlB5K3ZMbjViUWkxYXFGTFlMUWJvV0VGWjdQSng4b1V1NnBrOGViTHFzQzVldkxnTStDTTdjZEg3ZWh1SGVxQUdsWkFRa3B1SERKTHozM3lqWHZCTEtLT3FjZTdjT1hucXRWZkZEODdQYkdGeUJmdWdzWU5sbDQ5WmJ2MzY5ZUtaT25XcUxGcTBTQjB3a1pHUlVZNVkyQ2MwVkU4QVNtQkFKRFhPNm5ldjdFQTg0Q3hOVmJzRTczOEloT2EyaDRkSUlEV2xITGt5MzcwZHNvNWR2bmZlZWFmRUFwQWlma0lxRkJDaU1tQVFkTHFaMlJIUzU2aUVtbVNIZnAvVVIvcDZjZlpzMlZxNFM0b1BIRkRGVWlGSUVmdDFsNHRMQlVmMktSYkNuK3UxYVMwK3krK2RCbzN6am5iNTFpRExiTnUyN1Z2UHZIbnp6dkVBbzZLSi92Mzd1L0p1T3pmbmZ0MjZkYVUyYW9TSTJCaFZKNUFBOVIvempMenkxbnhabXBjbmVlQWFhMUVXczJHNmh0aFNndFZiTmdONkMrRForWnRMamhYQm1oaW93cVZaOWlDN3dmMDRkK0JtQVd5VDJlVWpSMEVXT09wQlFOaEhYMkJlTk1GWldwTzZta0hHY2RiR2VtZ3Nza01kSUJLSThJSXZnT0Y1OEhJZW1LbW5jV29aUkZpNHVKK2k0Q0dhcEVwMHE1WXlQbnVPS3F6Y09rNVUwTVRzYlBFMkxxSGNUa1NJbWM0dUgyZXM0VW9iU1lXWDhlYmt5eWFZR3UxcDBPd0k2YmtBblh2MVBLRFptVkhYWUJzREYvSHhPQnVvc0pSNEhtZFh5ZWVWdWpoUGhzZGpNYmdIcjRuSDkwaXlUWlRkRWFnbW41ZzZSYm1Fa3dMSVlwZmw1MG13eFEwbHo3QVJJZTdud1FMdDhsbHJrV2F5R0JwQ2Y3RDNBa2h1ekZFMml4Y3RyT2JpNWtQMXBLZVRVa3lYNFRrV1d3VGRSNWV2NXYzcXNPd0dHRmZXdS9RZE9IaWJZQVh4VUFCckRYUFF1TjhBeDV5S0lhNDVRajF3dXlxSGdWOC8vUEREY2hYaExiZmNVcTd3c1BOdiszUjJ5S3I4N01VTGp5ZFl6Y3R3bFIrdk1mdVBOWkJoSXVFZWI2NzRzM3Q3SENZZHpNeFF4Wlc5R0hJcWg2MUZGVDlBQWFvY3JnT2NjZW9Ic29pdzl3THNOYjA5OTVwVDR2WmVnbm1kM2FMY3Jxc0pDNGhERFVBemQ3T0FIUWlFM3RZdDFWeWgrWDY4TjBtZTA1d2hoRDl5L1BqeFNOMFZXc1Z1cTkwTnFCUTJGKzFLY0dwZ3FIMUw4MzZUTjFpV0V3eFpOWDFwSzh5NnhtcHhCYlQvMHFMNEd6NUQ5UVpEMGhuVjVPNGk5OTVqL3VaTjRnYzE5aHZsTWRFQ1ROR3BQVzZ0UTV4djlnVDdyRjY5V3B6Y1lQRGd3ZVVzb0F6VnBBQ3M3Vkd1Qm1HcVhsUnJiSUlFRUpXNXo2MGZ4MzBrSzV3eFRrMVZXeStDbXlwekFmTTZubGZBOXhpY1MrOXhtNm9XM1ZwdjdEdGtMMXNxUHM0V0c2YlA3YWhSb3h6Tm40c3dvWVNPcGdKcUFuOTFXb3RERXBORTRXeWNnQ1BJR1puQU5kZElzKzdkNUo0blI4blFsOGJMTUJRcWJGMC9iTzBQUlNuTDc5d2ZObWtpam8rVFIzRHNVZXp6ZXA1bnU3dmsydkdsN1crZW16QTNXL1pnQk4yRVYvNlA5Mk81SEtCaURjdmphaEtudFFNMGZ5amc1SkVqWlR2amFscU1OM1NhR0JrNmRHZ1p2MVQ3TU9rWWpDSWJuMFg3OTZrMHhkbWFpb0E5Z29vZ25PRGEvTmZCZGROdStZT3lRdE05MlFOd21oaWgrVU1KTHp2TkRMVkFpZmdQcCs0d3lRYjl5UXlDdGJIZnFsZFBLZHE3dDlxbnhUUm9zU05mbnF3V1M1aWQ1OHpNVE5WRGNHcUdRdmh6MktZNktZQ3JRaGFRRlRwWndmVHAweTkyaEtBQUZqL1B2RHBkamVqVkVKNit2eFNaSVJFY3djOWxORVphelFZenRMKy9ObjhJUHdOeG9QemtxTFlDNEZ1bldFRHF5TTRLSTdscWk5ZXZKNitFbVJlb1NqQmpyZCsrVFpyZDFsMkNLU2txZzJnZXdsYWUwOW9Hamo3d0ZZUlBjNWIrWWpDYzREWk5Sc1d3VEs1TkJTQUlqa1N3Y3VzS1Z3VlV6c2Z6MkMvTTZIMjN5alkrbzB6bjRnMHlXQ2ZmcHdJZy9DZ2cvT0pxS01EUG1TSnEyY21NdUhDS0VaWThQYjNyclZKUTZGNm9WS2JnYWxZWThXWWFxa3RPeXZxNUZpbDRjWmtPR3podTcwemhvWVNEUUd4WTRRMGxkQVIrZGdxSUJGOHFDYWJud1lNeit2U1dkWWpZYWdFVExLUXl3WHZ1Z0lKWklsUHd0RzVkeGQrc21YZzVyMkJNcWpEb3VTMm5aZDdIbG4vYWFGVWg0UzBGTUNDK3lBa0Z0M1Y0SkU1TjhUSWVWSFJzakRhN3ZZZTBlK0IrYVUvMHYzTHdYczN2N0NXTk9uV1VXRkRoZUZoZFBGT2ROVnVsQTE3bnpwMWRSNTZtenkxaXduQ1V2cGYzdjRKVnExWlJDV3RZS1RveFJFMlM3dWpaVTZKUjd0WkM3Yy9VV012dlUxc2lDbG1qZHBESC9GSXI0TGZPbDJ5anpPdlV2dDg2VjNLZXEwL3FjbGFaWklzelNKYXBteDJwQVFNR2lOT0tGZ01YRU12ZXhpQmVsdXltSmZpQS9VeU5ia3BnZG1CbnVZSFZuZFZ0YXI5QlNjMjFSZWF4MG1yUnZNNmxBV3ZXOTJTbU0yZk9ETHRxblgzRDR1TGlBZ2hmTWIrL2hCS0t3eW1CWUhUbVlvckV4TVF5ZlFTemQyanVtK1d5S2FUOWV2TTZya2QrL1BISHhhbHl0UWwvQVVYUVJsaEh6QlVKYnlnaERTaWdFdHhpZ3RZNlhFZmw0bWFJRDA2bGRMajFBZmJxVXYrbWVmUG1Tcm1NTzVmNmt3YXNnc0xuUS9qNmxTSzhvWVJHd0JiR2hFdjRuUUpiVmVQR2pWTnJEUFQvQm9KRzJxTFF1cGxpbnpvbitEOEJMbnljTkdtU3Fnc3U5VHdxNWtCSkZ6b1hDRldxOFBwakJjWnMxQXkvc0Q2bzZOOWFhTEt6Wjg5VzNWbitYYVpyMTY1cXNxSlZxMWJTdW5WcnRVOWh5VFJwNHFTeUZWR3lNZXBzZFA2MGMrZk9xWERGS3BHOTlHT2x5QjdBMzBpS0x1ZEY3U05tVG5MOG5udnd0MlIrRVBvcjFDU2RnZXI3QzUzRkdHY0RQNUtwVmVkZjV5ZzRGUStCdjBjdE1nV0ZVVnkxQ1c1VEF0Y1gzZ0Rrd0MxK295SllobGFWSW1qcWRDY0kvRDg4YXpFWWFUcFE0Nm9JYjFORWhLV0lPY0EzREpRTVhGUkdSZU9FMjBnenNKSG1zdnlGeTUzRnZWOUROa2pIOW1xTDdmeXhyS0lQRzYzc05uTUZHcXRMS29TQzBIUXBGRGtGbGFOQlFrVTNZdjNCZVQrVzJSRHlsN3k4dkZOY3h3amNRVVZmYmZrdTYyTzEzRG52TUFSWUFod0F6a0VwUDNPMnhnU08vUVQ4QmVmM0FXOEREd0xwWE1kWWxlLzRmLzRNQmw2a1JRUjRBQUFBQUVsRlRrU3VRbUNDIi8+PC9kZWZzPjxzdHlsZT48L3N0eWxlPjx1c2UgIGhyZWY9IiNpbWcxIiB4PSIxIiB5PSIxIi8+PC9zdmc+";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if ((_a = window.skySolana) == null ? void 0 : _a.isSkyWallet) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.skySolana;
      try {
        await wallet.connect();
      } catch (error) {
        throw new WalletConnectionError(error == null ? void 0 : error.message, error);
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(transaction, connection, options = {}) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signers, ...sendOptions } = options;
        transaction = await this.prepareTransaction(transaction, connection, sendOptions);
        (signers == null ? void 0 : signers.length) && transaction.partialSign(...signers);
        sendOptions.preflightCommitment = sendOptions.preflightCommitment || connection.commitment;
        const { signature } = await wallet.signAndSendTransaction(transaction, sendOptions);
        return signature;
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
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-solflare/lib/esm/adapter.js
init_index_browser_esm();

// node_modules/@solana/wallet-adapter-solflare/lib/esm/metamask/icon.js
var icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMzEgMzEiIHdpZHRoPSIzMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIwLjI1IiB4Mj0iMjYuNTcxIiB5MT0iMjcuMTczIiB5Mj0iMTkuODU4Ij48c3RvcCBvZmZzZXQ9Ii4wOCIgc3RvcC1jb2xvcj0iIzk5NDVmZiIvPjxzdG9wIG9mZnNldD0iLjMiIHN0b3AtY29sb3I9IiM4NzUyZjMiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjNTQ5N2Q1Ii8+PHN0b3Agb2Zmc2V0PSIuNiIgc3RvcC1jb2xvcj0iIzQzYjRjYSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjMjhlMGI5Ii8+PHN0b3Agb2Zmc2V0PSIuOTciIHN0b3AtY29sb3I9IiMxOWZiOWIiLz48L2xpbmVhckdyYWRpZW50PjxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjA5NCI+PHBhdGggZD0ibTI2LjEwOSAzLjY0My05LjM2OSA2Ljk1OSAxLjczMy00LjEwNSA3LjYzNy0yLjg1M3oiIGZpbGw9IiNlMjc2MWIiIHN0cm9rZT0iI2UyNzYxYiIvPjxnIGZpbGw9IiNlNDc2MWIiIHN0cm9rZT0iI2U0NzYxYiI+PHBhdGggZD0ibTQuNDgxIDMuNjQzIDkuMjk0IDcuMDI0LTEuNjQ4LTQuMTcxem0xOC4yNTggMTYuMTMtMi40OTUgMy44MjMgNS4zMzkgMS40NjkgMS41MzUtNS4yMDctNC4zNzgtLjA4NXptLTE5LjI0Ny4wODUgMS41MjUgNS4yMDcgNS4zMzktMS40NjktMi40OTUtMy44MjN6Ii8+PHBhdGggZD0ibTEwLjA1NSAxMy4zMTMtMS40ODggMi4yNTEgNS4zMDEuMjM1LS4xODgtNS42OTd6bTEwLjQ4IDAtMy42NzItMy4yNzctLjEyMiA1Ljc2MyA1LjI5Mi0uMjM1LTEuNDk3LTIuMjUxem0tMTAuMTc4IDEwLjI4MyAzLjE4My0xLjU1NC0yLjc0OS0yLjE0Ny0uNDMzIDMuNzAxem02LjY5NS0xLjU1NCAzLjE5MiAxLjU1NC0uNDQzLTMuNzAxeiIvPjwvZz48cGF0aCBkPSJtMjAuMjQ0IDIzLjU5Ni0zLjE5Mi0xLjU1NC4yNTQgMi4wODEtLjAyOC44NzZ6bS05Ljg4NyAwIDIuOTY2IDEuNDAzLS4wMTktLjg3Ni4yMzUtMi4wODEtMy4xODMgMS41NTR6IiBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiLz48cGF0aCBkPSJtMTMuMzY5IDE4LjUyMS0yLjY1NS0uNzgxIDEuODc0LS44NTd6bTMuODUxIDAgLjc4MS0xLjYzOCAxLjg4My44NTctMi42NjUuNzgxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTEwLjM1NyAyMy41OTYuNDUyLTMuODIzLTIuOTQ3LjA4NXptOS40MzUtMy44MjMuNDUyIDMuODIzIDIuNDk1LTMuNzM4em0yLjI0MS00LjIwOS01LjI5Mi4yMzUuNDkgMi43MjEuNzgyLTEuNjM4IDEuODgzLjg1N3ptLTExLjMxOCAyLjE3NSAxLjg4My0uODU3Ljc3MiAxLjYzOC40OTktMi43MjEtNS4zMDEtLjIzNXoiIGZpbGw9IiNjZDYxMTYiIHN0cm9rZT0iI2NkNjExNiIvPjxwYXRoIGQ9Im04LjU2NyAxNS41NjQgMi4yMjIgNC4zMzEtLjA3NS0yLjE1NnptMTEuMzI4IDIuMTc1LS4wOTQgMi4xNTYgMi4yMzItNC4zMzEtMi4xMzcgMi4xNzV6bS02LjAyNi0xLjk0LS40OTkgMi43MjEuNjIxIDMuMjExLjE0MS00LjIyOC0uMjY0LTEuNzA0em0yLjg3MiAwLS4yNTQgMS42OTUuMTEzIDQuMjM3LjYzMS0zLjIxMXoiIGZpbGw9IiNlNDc1MWYiIHN0cm9rZT0iI2U0NzUxZiIvPjxwYXRoIGQ9Im0xNy4yMyAxOC41Mi0uNjMxIDMuMjExLjQ1Mi4zMTEgMi43NS0yLjE0Ny4wOTQtMi4xNTZ6bS02LjUxNi0uNzgxLjA3NSAyLjE1NiAyLjc1IDIuMTQ3LjQ1Mi0uMzExLS42MjItMy4yMTF6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48cGF0aCBkPSJtMTcuMjc3IDI0Ljk5OS4wMjgtLjg3Ni0uMjM1LS4yMDdoLTMuNTVsLS4yMTcuMjA3LjAxOS44NzYtMi45NjYtMS40MDMgMS4wMzYuODQ4IDIuMSAxLjQ1OWgzLjYwNmwyLjEwOS0xLjQ1OSAxLjAzNi0uODQ4eiIgZmlsbD0iI2MwYWQ5ZSIgc3Ryb2tlPSIjYzBhZDllIi8+PHBhdGggZD0ibTE3LjA1MSAyMi4wNDItLjQ1Mi0uMzExaC0yLjYwOGwtLjQ1Mi4zMTEtLjIzNSAyLjA4MS4yMTctLjIwN2gzLjU1bC4yMzUuMjA3LS4yNTQtMi4wODF6IiBmaWxsPSIjMTYxNjE2IiBzdHJva2U9IiMxNjE2MTYiLz48cGF0aCBkPSJtMjYuNTA1IDExLjA1My44LTMuODQyLTEuMTk2LTMuNTY5LTkuMDU4IDYuNzIzIDMuNDg0IDIuOTQ3IDQuOTI1IDEuNDQxIDEuMDkyLTEuMjcxLS40NzEtLjMzOS43NTMtLjY4Ny0uNTg0LS40NTIuNzUzLS41NzQtLjQ5OS0uMzc3em0tMjMuMjExLTMuODQxLjggMy44NDItLjUwOC4zNzcuNzUzLjU3NC0uNTc0LjQ1Mi43NTMuNjg3LS40NzEuMzM5IDEuMDgzIDEuMjcxIDQuOTI1LTEuNDQxIDMuNDg0LTIuOTQ3LTkuMDU5LTYuNzIzeiIgZmlsbD0iIzc2M2QxNiIgc3Ryb2tlPSIjNzYzZDE2Ii8+PHBhdGggZD0ibTI1LjQ2IDE0Ljc1NC00LjkyNS0xLjQ0MSAxLjQ5NyAyLjI1MS0yLjIzMiA0LjMzMSAyLjkzOC0uMDM4aDQuMzc4bC0xLjY1Ny01LjEwNHptLTE1LjQwNS0xLjQ0MS00LjkyNSAxLjQ0MS0xLjYzOCA1LjEwNGg0LjM2OWwyLjkyOC4wMzgtMi4yMjItNC4zMzEgMS40ODgtMi4yNTF6bTYuNjg1IDIuNDg2LjMxMS01LjQzMyAxLjQzMS0zLjg3aC02LjM1NmwxLjQxMyAzLjg3LjMyOSA1LjQzMy4xMTMgMS43MTQuMDA5IDQuMjE5aDIuNjFsLjAxOS00LjIxOS4xMjItMS43MTR6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48L2c+PGNpcmNsZSBjeD0iMjMuNSIgY3k9IjIzLjUiIGZpbGw9IiMwMDAiIHI9IjYuNSIvPjxwYXRoIGQ9Im0yNy40NzMgMjUuNTQ1LTEuMzEgMS4zNjhjLS4wMjkuMDMtLjA2My4wNTMtLjEwMS4wN2EuMzEuMzEgMCAwIDEgLS4xMjEuMDI0aC02LjIwOWMtLjAzIDAtLjA1OS0uMDA4LS4wODMtLjAyNGEuMTUuMTUgMCAwIDEgLS4wNTYtLjA2NWMtLjAxMi0uMDI2LS4wMTUtLjA1Ni0uMDEtLjA4NHMuMDE4LS4wNTUuMDM5LS4wNzZsMS4zMTEtMS4zNjhjLjAyOC0uMDMuMDYzLS4wNTMuMTAxLS4wNjlhLjMxLjMxIDAgMCAxIC4xMjEtLjAyNWg2LjIwOGMuMDMgMCAuMDU5LjAwOC4wODMuMDI0YS4xNS4xNSAwIDAgMSAuMDU2LjA2NWMuMDEyLjAyNi4wMTUuMDU2LjAxLjA4NHMtLjAxOC4wNTUtLjAzOS4wNzZ6bS0xLjMxLTIuNzU2Yy0uMDI5LS4wMy0uMDYzLS4wNTMtLjEwMS0uMDdhLjMxLjMxIDAgMCAwIC0uMTIxLS4wMjRoLTYuMjA5Yy0uMDMgMC0uMDU5LjAwOC0uMDgzLjAyNHMtLjA0NC4wMzgtLjA1Ni4wNjUtLjAxNS4wNTYtLjAxLjA4NC4wMTguMDU1LjAzOS4wNzZsMS4zMTEgMS4zNjhjLjAyOC4wMy4wNjMuMDUzLjEwMS4wNjlhLjMxLjMxIDAgMCAwIC4xMjEuMDI1aDYuMjA4Yy4wMyAwIC4wNTktLjAwOC4wODMtLjAyNGEuMTUuMTUgMCAwIDAgLjA1Ni0uMDY1Yy4wMTItLjAyNi4wMTUtLjA1Ni4wMS0uMDg0cy0uMDE4LS4wNTUtLjAzOS0uMDc2em0tNi40MzEtLjk4M2g2LjIwOWEuMzEuMzEgMCAwIDAgLjEyMS0uMDI0Yy4wMzgtLjAxNi4wNzMtLjA0LjEwMS0uMDdsMS4zMS0xLjM2OGMuMDItLjAyMS4wMzQtLjA0Ny4wMzktLjA3NnMuMDAxLS4wNTgtLjAxLS4wODRhLjE1LjE1IDAgMCAwIC0uMDU2LS4wNjVjLS4wMjUtLjAxNi0uMDU0LS4wMjQtLjA4My0uMDI0aC02LjIwOGEuMzEuMzEgMCAwIDAgLS4xMjEuMDI1Yy0uMDM4LjAxNi0uMDcyLjA0LS4xMDEuMDY5bC0xLjMxIDEuMzY4Yy0uMDIuMDIxLS4wMzQuMDQ3LS4wMzkuMDc2cy0uMDAxLjA1OC4wMS4wODQuMDMxLjA0OS4wNTYuMDY1LjA1NC4wMjQuMDgzLjAyNHoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=";

// node_modules/@solana/wallet-adapter-solflare/lib/esm/metamask/wallet.js
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _SolflareMetaMaskWallet_instances;
var _SolflareMetaMaskWallet_listeners;
var _SolflareMetaMaskWallet_version;
var _SolflareMetaMaskWallet_name;
var _SolflareMetaMaskWallet_icon;
var _SolflareMetaMaskWallet_solflareMetaMask;
var _SolflareMetaMaskWallet_on;
var _SolflareMetaMaskWallet_emit;
var _SolflareMetaMaskWallet_off;
var _SolflareMetaMaskWallet_connect;
var _SolflareMetaMaskWallet_disconnect;
var _SolflareMetaMaskWallet_signAndSendTransaction;
var _SolflareMetaMaskWallet_signTransaction;
var _SolflareMetaMaskWallet_signMessage;
var SolflareMetaMaskWallet = class {
  constructor() {
    _SolflareMetaMaskWallet_instances.add(this);
    _SolflareMetaMaskWallet_listeners.set(this, {});
    _SolflareMetaMaskWallet_version.set(this, "1.0.0");
    _SolflareMetaMaskWallet_name.set(this, "MetaMask");
    _SolflareMetaMaskWallet_icon.set(this, icon);
    _SolflareMetaMaskWallet_solflareMetaMask.set(this, null);
    _SolflareMetaMaskWallet_on.set(this, (event, listener) => {
      var _a;
      ((_a = __classPrivateFieldGet(this, _SolflareMetaMaskWallet_listeners, "f")[event]) == null ? void 0 : _a.push(listener)) || (__classPrivateFieldGet(this, _SolflareMetaMaskWallet_listeners, "f")[event] = [listener]);
      return () => __classPrivateFieldGet(this, _SolflareMetaMaskWallet_instances, "m", _SolflareMetaMaskWallet_off).call(this, event, listener);
    });
    _SolflareMetaMaskWallet_connect.set(this, async () => {
      if (!__classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f")) {
        let SolflareMetaMaskClass;
        try {
          SolflareMetaMaskClass = (await import("./esm-VRVF2GQ3.js")).default;
        } catch (error) {
          throw new Error("Unable to load Solflare MetaMask SDK");
        }
        __classPrivateFieldSet(this, _SolflareMetaMaskWallet_solflareMetaMask, new SolflareMetaMaskClass(), "f");
        __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f").on("standard_change", (properties) => __classPrivateFieldGet(this, _SolflareMetaMaskWallet_instances, "m", _SolflareMetaMaskWallet_emit).call(this, "change", properties));
      }
      if (!this.accounts.length) {
        await __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f").connect();
      }
      return { accounts: this.accounts };
    });
    _SolflareMetaMaskWallet_disconnect.set(this, async () => {
      if (!__classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f"))
        return;
      await __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f").disconnect();
    });
    _SolflareMetaMaskWallet_signAndSendTransaction.set(this, async (...inputs) => {
      if (!__classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f"))
        throw new WalletNotConnectedError();
      return await __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f").standardSignAndSendTransaction(...inputs);
    });
    _SolflareMetaMaskWallet_signTransaction.set(this, async (...inputs) => {
      if (!__classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f"))
        throw new WalletNotConnectedError();
      return await __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f").standardSignTransaction(...inputs);
    });
    _SolflareMetaMaskWallet_signMessage.set(this, async (...inputs) => {
      if (!__classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f"))
        throw new WalletNotConnectedError();
      return await __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f").standardSignMessage(...inputs);
    });
  }
  get version() {
    return __classPrivateFieldGet(this, _SolflareMetaMaskWallet_version, "f");
  }
  get name() {
    return __classPrivateFieldGet(this, _SolflareMetaMaskWallet_name, "f");
  }
  get icon() {
    return __classPrivateFieldGet(this, _SolflareMetaMaskWallet_icon, "f");
  }
  get chains() {
    return [SOLANA_MAINNET_CHAIN, SOLANA_DEVNET_CHAIN, SOLANA_TESTNET_CHAIN];
  }
  get features() {
    return {
      [StandardConnect]: {
        version: "1.0.0",
        connect: __classPrivateFieldGet(this, _SolflareMetaMaskWallet_connect, "f")
      },
      [StandardDisconnect]: {
        version: "1.0.0",
        disconnect: __classPrivateFieldGet(this, _SolflareMetaMaskWallet_disconnect, "f")
      },
      [StandardEvents]: {
        version: "1.0.0",
        on: __classPrivateFieldGet(this, _SolflareMetaMaskWallet_on, "f")
      },
      [SolanaSignAndSendTransaction]: {
        version: "1.0.0",
        supportedTransactionVersions: ["legacy", 0],
        signAndSendTransaction: __classPrivateFieldGet(this, _SolflareMetaMaskWallet_signAndSendTransaction, "f")
      },
      [SolanaSignTransaction]: {
        version: "1.0.0",
        supportedTransactionVersions: ["legacy", 0],
        signTransaction: __classPrivateFieldGet(this, _SolflareMetaMaskWallet_signTransaction, "f")
      },
      [SolanaSignMessage]: {
        version: "1.0.0",
        signMessage: __classPrivateFieldGet(this, _SolflareMetaMaskWallet_signMessage, "f")
      }
    };
  }
  get accounts() {
    return __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f") ? __classPrivateFieldGet(this, _SolflareMetaMaskWallet_solflareMetaMask, "f").standardAccounts : [];
  }
};
_SolflareMetaMaskWallet_listeners = /* @__PURE__ */ new WeakMap(), _SolflareMetaMaskWallet_version = /* @__PURE__ */ new WeakMap(), _SolflareMetaMaskWallet_name = /* @__PURE__ */ new WeakMap(), _SolflareMetaMaskWallet_icon = /* @__PURE__ */ new WeakMap(), _SolflareMetaMaskWallet_solflareMetaMask = /* @__PURE__ */ new WeakMap(), _SolflareMetaMaskWallet_on = /* @__PURE__ */ new WeakMap(), _SolflareMetaMaskWallet_connect = /* @__PURE__ */ new WeakMap(), _SolflareMetaMaskWallet_disconnect = /* @__PURE__ */ new WeakMap(), _SolflareMetaMaskWallet_signAndSendTransaction = /* @__PURE__ */ new WeakMap(), _SolflareMetaMaskWallet_signTransaction = /* @__PURE__ */ new WeakMap(), _SolflareMetaMaskWallet_signMessage = /* @__PURE__ */ new WeakMap(), _SolflareMetaMaskWallet_instances = /* @__PURE__ */ new WeakSet(), _SolflareMetaMaskWallet_emit = function _SolflareMetaMaskWallet_emit2(event, ...args) {
  var _a;
  (_a = __classPrivateFieldGet(this, _SolflareMetaMaskWallet_listeners, "f")[event]) == null ? void 0 : _a.forEach((listener) => listener.apply(null, args));
}, _SolflareMetaMaskWallet_off = function _SolflareMetaMaskWallet_off2(event, listener) {
  var _a;
  __classPrivateFieldGet(this, _SolflareMetaMaskWallet_listeners, "f")[event] = (_a = __classPrivateFieldGet(this, _SolflareMetaMaskWallet_listeners, "f")[event]) == null ? void 0 : _a.filter((existingListener) => listener !== existingListener);
};

// node_modules/@solana/wallet-adapter-solflare/lib/esm/metamask/detect.js
var registered = false;
function register() {
  if (registered)
    return;
  registerWallet(new SolflareMetaMaskWallet());
  registered = true;
}
async function detectAndRegisterSolflareMetaMaskWallet() {
  const id = "solflare-detect-metamask";
  function postMessage() {
    window.postMessage({
      target: "metamask-contentscript",
      data: {
        name: "metamask-provider",
        data: {
          id,
          jsonrpc: "2.0",
          method: "wallet_getSnaps"
        }
      }
    }, window.location.origin);
  }
  function onMessage(event) {
    var _a, _b;
    const message = event.data;
    if ((message == null ? void 0 : message.target) === "metamask-inpage" && ((_a = message.data) == null ? void 0 : _a.name) === "metamask-provider") {
      if (((_b = message.data.data) == null ? void 0 : _b.id) === id) {
        window.removeEventListener("message", onMessage);
        if (!message.data.data.error) {
          register();
        }
      } else {
        postMessage();
      }
    }
  }
  window.addEventListener("message", onMessage);
  window.setTimeout(() => window.removeEventListener("message", onMessage), 5e3);
  postMessage();
}

// node_modules/@solana/wallet-adapter-solflare/lib/esm/adapter.js
var SolflareWalletName = "Solflare";
var SolflareWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = SolflareWalletName;
    this.url = "https://solflare.com";
    this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+";
    this.supportedTransactionVersions = /* @__PURE__ */ new Set(["legacy", 0]);
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.Loadable;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._accountChanged = (newPublicKey) => {
      if (!newPublicKey)
        return;
      const publicKey = this._publicKey;
      if (!publicKey)
        return;
      try {
        newPublicKey = new PublicKey(newPublicKey.toBytes());
      } catch (error) {
        this.emit("error", new WalletPublicKeyError(error == null ? void 0 : error.message, error));
        return;
      }
      if (publicKey.equals(newPublicKey))
        return;
      this._publicKey = newPublicKey;
      this.emit("connect", newPublicKey);
    };
    this._connecting = false;
    this._publicKey = null;
    this._wallet = null;
    this._config = config;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if (((_a = window.solflare) == null ? void 0 : _a.isSolflare) || window.SolflareApp) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
      detectAndRegisterSolflareMetaMaskWallet();
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.connected);
  }
  get readyState() {
    return this._readyState;
  }
  async autoConnect() {
    if (!(this.readyState === WalletReadyState.Loadable && isIosAndRedirectable())) {
      await this.connect();
    }
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Loadable && this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      if (this.readyState === WalletReadyState.Loadable && isIosAndRedirectable()) {
        const url = encodeURIComponent(window.location.href);
        const ref = encodeURIComponent(window.location.origin);
        window.location.href = `https://solflare.com/ul/v1/browse/${url}?ref=${ref}`;
        return;
      }
      let SolflareClass;
      try {
        SolflareClass = (await import("./esm-ZGG4PRZG.js")).default;
      } catch (error) {
        throw new WalletLoadError(error == null ? void 0 : error.message, error);
      }
      let wallet;
      try {
        wallet = new SolflareClass({ network: this._config.network });
      } catch (error) {
        throw new WalletConfigError(error == null ? void 0 : error.message, error);
      }
      this._connecting = true;
      if (!wallet.connected) {
        try {
          await wallet.connect();
        } catch (error) {
          throw new WalletConnectionError(error == null ? void 0 : error.message, error);
        }
      }
      if (!wallet.publicKey)
        throw new WalletConnectionError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      wallet.on("accountChanged", this._accountChanged);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      wallet.off("accountChanged", this._accountChanged);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(transaction, connection, options = {}) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signers, ...sendOptions } = options;
        if (isVersionedTransaction(transaction)) {
          (signers == null ? void 0 : signers.length) && transaction.sign(signers);
        } else {
          transaction = await this.prepareTransaction(transaction, connection, sendOptions);
          (signers == null ? void 0 : signers.length) && transaction.partialSign(...signers);
        }
        sendOptions.preflightCommitment = sendOptions.preflightCommitment || connection.commitment;
        return await wallet.signAndSendTransaction(transaction, sendOptions);
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
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signMessage(message, "utf8");
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-solong/lib/esm/adapter.js
init_index_browser_esm();
var SolongWalletName = "Solong";
var SolongWalletAdapter = class extends BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = SolongWalletName;
    this.url = "https://solongwallet.io";
    this.icon = "data:image/png;base64,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";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        if (window.solong) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.currentAccount);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.solong;
      let account;
      try {
        account = await wallet.selectAccount();
      } catch (error) {
        throw new WalletAccountError(error == null ? void 0 : error.message, error);
      }
      let publicKey;
      try {
        publicKey = new PublicKey(account);
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    if (this._wallet) {
      this._wallet = null;
      this._publicKey = null;
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-spot/lib/esm/adapter.js
init_index_browser_esm();
var SpotWalletName = "Spot";
var SpotWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = SpotWalletName;
    this.url = "https://spot-wallet.com";
    this.icon = "data:image/png;base64,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";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        if (window.spotSolWallet) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.spotSolWallet;
      try {
        await wallet.connect();
      } catch (error) {
        throw new WalletConnectionError(error == null ? void 0 : error.message, error);
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-tokenary/lib/esm/adapter.js
init_index_browser_esm();
var TokenaryWalletName = "Tokenary";
var TokenaryWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = TokenaryWalletName;
    this.url = "https://tokenary.io/get";
    this.icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgMzQgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+T3ZhbDwvdGl0bGU+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjMkM3Q0Y1IiBjeD0iMTciIGN5PSIxNyIgcj0iMTciPjwvY2lyY2xlPgogICAgPC9nPgo8L3N2Zz4=";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if ((_a = window.tokenarySolana) == null ? void 0 : _a.isTokenary) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.tokenarySolana;
      try {
        await wallet.connect();
      } catch (error) {
        throw new WalletConnectionError(error == null ? void 0 : error.message, error);
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(transaction, connection, options = {}) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signers, ...sendOptions } = options;
        transaction = await this.prepareTransaction(transaction, connection, sendOptions);
        (signers == null ? void 0 : signers.length) && transaction.partialSign(...signers);
        sendOptions.preflightCommitment = sendOptions.preflightCommitment || connection.commitment;
        const { signature } = await wallet.signAndSendTransaction(transaction, sendOptions);
        return signature;
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
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-tokenpocket/lib/esm/adapter.js
init_index_browser_esm();
var TokenPocketWalletName = "TokenPocket";
var TokenPocketWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = TokenPocketWalletName;
    this.url = "https://tokenpocket.pro";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGc+CjxwYXRoIGQ9Ik0xMDQxLjUyIDBILTI3VjEwMjRIMTA0MS41MlYwWiIgZmlsbD0iIzI5ODBGRSIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDA4XzIyNSkiPgo8cGF0aCBkPSJNNDA2Ljc5NiA0MzguNjQzSDQwNi45MjdDNDA2Ljc5NiA0MzcuODU3IDQwNi43OTYgNDM2Ljk0IDQwNi43OTYgNDM2LjE1NFY0MzguNjQzWiIgZmlsbD0iIzI5QUVGRiIvPgo8cGF0aCBkPSJNNjY3LjYwMiA0NjMuNTMzSDUyMy4yNDlWNzI0LjA3NkM1MjMuMjQ5IDczNi4zODkgNTMzLjIwNCA3NDYuMzQ1IDU0NS41MTcgNzQ2LjM0NUg2NDUuMzMzQzY1Ny42NDcgNzQ2LjM0NSA2NjcuNjAyIDczNi4zODkgNjY3LjYwMiA3MjQuMDc2VjQ2My41MzNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDUzLjU2MyAyNzdINDQ4LjcxNkgxOTAuMjY5QzE3Ny45NTUgMjc3IDE2OCAyODYuOTU1IDE2OCAyOTkuMjY5VjM4OS42NTNDMTY4IDQwMS45NjcgMTc3Ljk1NSA0MTEuOTIyIDE5MC4yNjkgNDExLjkyMkgyNTAuOTE4SDI3NS4wMjFWNDM4LjY0NFY3MjQuNzMxQzI3NS4wMjEgNzM3LjA0NSAyODQuOTc2IDc0NyAyOTcuMjg5IDc0N0gzOTIuMTI4QzQwNC40NDEgNzQ3IDQxNC4zOTYgNzM3LjA0NSA0MTQuMzk2IDcyNC43MzFWNDM4LjY0NFY0MzYuMTU2VjQxMS45MjJINDM4LjQ5OUg0NDguMzIzSDQ1My4xN0M0OTAuMzcyIDQxMS45MjIgNTIwLjYzMSAzODEuNjYzIDUyMC42MzEgMzQ0LjQ2MUM1MjEuMDI0IDMwNy4yNTkgNDkwLjc2NSAyNzcgNDUzLjU2MyAyNzdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNjY3LjczNSA0NjMuNTMzVjY0NS4zNUM2NzIuNzEzIDY0Ni41MjkgNjc3LjgyMSA2NDcuNDQ2IDY4My4wNjEgNjQ4LjIzMkM2OTAuMzk3IDY0OS4yOCA2OTcuOTk0IDY0OS45MzUgNzA1LjU5MiA2NTAuMDY2QzcwNS45ODUgNjUwLjA2NiA3MDYuMzc4IDY1MC4wNjYgNzA2LjkwMiA2NTAuMDY2VjUwNS40NUM2ODUuMDI2IDUwNC4wMDkgNjY3LjczNSA0ODUuODAxIDY2Ny43MzUgNDYzLjUzM1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl80MDhfMjI1KSIvPgo8cGF0aCBkPSJNNzA5Ljc4MSAyNzdDNjA2LjgyMiAyNzcgNTIzLjI0OSAzNjAuNTczIDUyMy4yNDkgNDYzLjUzM0M1MjMuMjQ5IDU1Mi4wODQgNTg0Ljk0NiA2MjYuMjI1IDY2Ny43MzMgNjQ1LjM1VjQ2My41MzNDNjY3LjczMyA0NDAuMzQ3IDY4Ni41OTYgNDIxLjQ4NCA3MDkuNzgxIDQyMS40ODRDNzMyLjk2NyA0MjEuNDg0IDc1MS44MyA0NDAuMzQ3IDc1MS44MyA0NjMuNTMzQzc1MS44MyA0ODMuMDUxIDczOC42IDQ5OS40MjUgNzIwLjUyMyA1MDQuMTRDNzE3LjExNyA1MDUuMDU3IDcxMy40NDkgNTA1LjU4MSA3MDkuNzgxIDUwNS41ODFWNjUwLjA2NkM3MTMuNDQ5IDY1MC4wNjYgNzE2Ljk4NiA2NDkuOTM1IDcyMC41MjMgNjQ5LjgwNEM4MTguNTA1IDY0NC4xNzEgODk2LjMxNCA1NjIuOTU2IDg5Ni4zMTQgNDYzLjUzM0M4OTYuNDQ1IDM2MC41NzMgODEyLjg3MiAyNzcgNzA5Ljc4MSAyNzdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzA5Ljc4IDY1MC4wNjZWNTA1LjU4MUM3MDguNzMzIDUwNS41ODEgNzA3LjgxNiA1MDUuNTgxIDcwNi43NjggNTA1LjQ1VjY1MC4wNjZDNzA3LjgxNiA2NTAuMDY2IDcwOC44NjQgNjUwLjA2NiA3MDkuNzggNjUwLjA2NloiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzQwOF8yMjUiIHgxPSI3MDkuODQ0IiB5MT0iNTU2LjgyNyIgeDI9IjY2Ny43NTMiIHkyPSI1NTYuODI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC45NjY3IiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjMyMzMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MDhfMjI1Ij4KPHJlY3Qgd2lkdGg9IjcyOC40NDgiIGhlaWdodD0iNDcwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY4IDI3NykiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a;
        if ((_a = window.solana) == null ? void 0 : _a.isTokenPocket) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.solana;
      try {
        await wallet.connect();
      } catch (error) {
        throw new WalletConnectionError(error == null ? void 0 : error.message, error);
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      this.emit("disconnect");
    }
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-torus/lib/esm/adapter.js
init_index_browser_esm();
var TorusWalletName = "Torus";
var TorusWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor({ params = { showTorusButton: false } } = { params: { showTorusButton: false } }) {
    super();
    this.name = TorusWalletName;
    this.url = "https://tor.us";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuNSIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzAzNjRGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjIxODYgOS40OTIxOUMxMC40NTM5IDkuNDkyMTkgOS44MzM5OCAxMC4xMTIxIDkuODMzOTggMTAuODc2OFYxMi40ODk4QzkuODMzOTggMTMuMjU0NSAxMC40NTM5IDEzLjg3NDQgMTEuMjE4NiAxMy44NzQ0SDEzLjY2ODRWMjIuODk3NkMxMy42Njg0IDIzLjY2MjMgMTQuMjg4MyAyNC4yODIyIDE1LjA1MyAyNC4yODIySDE2LjY2NkMxNy40MzA3IDI0LjI4MjIgMTguMDUwNiAyMy42NjIzIDE4LjA1MDYgMjIuODk3NlYxMi41MDE1QzE4LjA1MDYgMTIuNDk3NiAxOC4wNTA2IDEyLjQ5MzcgMTguMDUwNiAxMi40ODk4VjEwLjg3NjhDMTguMDUwNiAxMC4xMTIxIDE3LjQzMDcgOS40OTIxOSAxNi42NjYgOS40OTIxOUgxNS4wNTNIMTEuMjE4NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS4zMzc2IDEzLjg3NDRDMjIuNTQ3NyAxMy44NzQ0IDIzLjUyODcgMTIuODkzNCAyMy41Mjg3IDExLjY4MzNDMjMuNTI4NyAxMC40NzMyIDIyLjU0NzcgOS40OTIxOSAyMS4zMzc2IDkuNDkyMTlDMjAuMTI3NSA5LjQ5MjE5IDE5LjE0NjUgMTAuNDczMiAxOS4xNDY1IDExLjY4MzNDMTkuMTQ2NSAxMi44OTM0IDIwLjEyNzUgMTMuODc0NCAyMS4zMzc2IDEzLjg3NDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.Loadable;
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    this._params = params;
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isLoggedIn);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Loadable)
        throw new WalletNotReadyError();
      this._connecting = true;
      let TorusClass;
      try {
        TorusClass = (await import("./solanaEmbed.esm-736MPAWS.js")).default;
      } catch (error) {
        throw new WalletLoadError(error == null ? void 0 : error.message, error);
      }
      let wallet;
      try {
        wallet = window.torus || new TorusClass();
      } catch (error) {
        throw new WalletConfigError(error == null ? void 0 : error.message, error);
      }
      if (!wallet.isInitialized) {
        try {
          await wallet.init(this._params);
        } catch (error) {
          throw new WalletConnectionError(error == null ? void 0 : error.message, error);
        }
      }
      let accounts;
      try {
        accounts = await wallet.login();
      } catch (error) {
        throw new WalletAccountError(error == null ? void 0 : error.message, error);
      }
      let publicKey;
      try {
        publicKey = new PublicKey(accounts[0]);
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      this._wallet = null;
      this._publicKey = null;
      try {
        if (wallet.isLoggedIn)
          await wallet.cleanUp();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(transaction, connection, options = {}) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signers, ...sendOptions } = options;
        transaction = await this.prepareTransaction(transaction, connection, sendOptions);
        (signers == null ? void 0 : signers.length) && transaction.partialSign(...signers);
        sendOptions.preflightCommitment = sendOptions.preflightCommitment || connection.commitment;
        const { signature } = await wallet.signAndSendTransaction(transaction, sendOptions);
        return signature;
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
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signMessage(message);
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-trust/lib/esm/adapter.js
init_index_browser_esm();
var TrustWalletName = "Trust";
var TrustWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = TrustWalletName;
    this.url = "https://trustwallet.com";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAyIiBoZWlnaHQ9IjQwMiIgdmlld0JveD0iMCAwIDQwMiA0MDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cmVjdCB3aWR0aD0iNDAyIiBoZWlnaHQ9IjQwMiIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfMTY5NF8xODk2NyIgdHJhbnNmb3JtPSJzY2FsZSgwLjAwMjQ4NzU2KSIvPgo8L3BhdHRlcm4+CjxpbWFnZSBpZD0iaW1hZ2UwXzE2OTRfMTg5NjciIHdpZHRoPSI0MDIiIGhlaWdodD0iNDAyIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFjRkJRWUZCQWNHQmdZSUJ3Y0lDeElMQ3dvS0N4WVBFQTBTR2hZYkdoa1dHUmdjSUNnaUhCNG1IaGdaSXpBa0ppb3JMUzR0R3lJeU5URXNOU2dzTFN6LzJ3QkRBUWNJQ0FzSkN4VUxDeFVzSFJrZExDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3ovd2dBUkNBR1NBWklEQVNJQUFoRUJBeEVCLzhRQUd3QUJBQUlEQVFFQUFBQUFBQUFBQUFBQUFBRUdCQVVIQXdML3hBQVpBUUVBQXdFQkFBQUFBQUFBQUFBQUFBQUFBUU1FQlFMLzJnQU1Bd0VBQWhBREVBQUFBZWtBQUFFRXhJaEloSWhJaEloSWhJaEloSWhJaEloSWhJaEloSWhJaElJRWdBQUFBQVFrQUFBQUFBQUFBQUFBQUFBQUFBQWlVRWdBQUFRa0FBQUFBQUFBQUFBQUFBQUFBQUFBQWlVRWdBRUVnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWlZa0FJa0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUk1FZ2lZa0FBQUFBQUFBQUFQT29XVjduWFZWdXg5TXllWTNYTG8zSXo2QUFBQUFBQUFBRVNENUV6RWdBQUFBQUFCR0xNWmJSNmUydTVWK3BlT25QazR4cXpCTUFicTE4NlVYOVZjNzNlVFRhV3J6NmJmVWVmUUFBQUFBQUdPSmozbUppUUFBQUFOTlVQckE2Zk95Zm53WFZ6Qk1BZ0EyOXFvdXJtNjNyRnI1cGk5U3JlbWlvc2pIMVpnbUFQdjF4MFRrN0RUUFBycUhyWGJGeStpSGoyQUFBQmppWTk1aVlrQUFBQURtMkhuWVBZNVFzTVRYbCt5cUx1YzdMb0UxV1ZiZTVpaTRLN0FBSTArNWV2TksxWFNtaWpsVHArSGJYenhlNlpkVmppMnE0V1d1V1BsZElLclFBQUFNY1RIdk1URWdBQUFBYzYxK3kxdlg1YTMxQzIxMldnY3pvQUFBQUFBQUFPYTlLNW5yeTR3MzRycFlkRHZ1VjB3cXNBQUFBeHhNZTh4TVNBQUFBQnovVmJuVGRibUxWVmJONTlXOGN2b2dBQUFBQUFBT1lkUDVac3lmSTNZNzF1OVB1T1Qwd3JzQUFBQXh4TWU4eE1TQUFBQUJSOUZZcTcxZWFzVmQzaGVSeXVrQUFBQUFBQUI4OHM2ZHpIZGpEWms2RnM4SE80L1ZEejZBQUFBeHhNZTh4TVNBQUFBQlVxdmNLZjArYzIycHo3UEhSaHlPb0FBQUFBQUFCaGMzNkJ6L29ZUTFaK201RVR4dXFFU0FBQUJqaVk5NWlZa0FBQUFEUlVmb1hQZWpnZTNpMDBkVmVYcnhlcUNRQUFBQUFBTkRTTFpVK2x6M3Y0Ykc2cm9nNC9WQUFBQUF4eE1lOHhNU0FBQUFCNDh3NnJ6TGJreHh0eDlDMmRic25KNllWMkFBQUFBQUFValE1bUgxK1czMmh0dmoxYUJ5K2tBQUFBQmppWTk1aVlrQUFBQUJSYjFYYjZhWU9uenQzZXVXZE53YmZZWk5RQUFBQUFERnlxdlpYVWgxdVk2QlErbjQ5WDBNTzBBQUFBREhFeDd6RXhJQUFBQUR3OXlPV2ZOaHIzWDVpeTFvZFZWeXg4cm9oNTlnQUFBRHhRNXZtNnZwWUEwVWIrN1lHZnl1a0ZWb0FBQUFHT0pqM21KaVFBQUFBQU1mbkhUOVhvbzU4Ky9qcFlHOTBUelBUTW5sdG13N0xZOC9UTG9CSUJyYWpkVFphZGpOK01MYWxrd2I3azFmUXdiUUFBQUFBTWNUSHZNVEVnQUFBQUFBYTZqZEs4NzZlWExQV3VoaCtSNzhlOXRwYXF6cXJudTZ4Yk4vVWRMNTZzNGFNNHpZbkNzTzgzR0xYOC9SajFnQUFBQUFBWTRtUGVZbUpBQUFBQUFBQVl1VW1LUm9lcTYzWGw1NDJXdDI1UW55UHBQemtiKzFaZEdoc01zT3NQUHNBQUFBQUFBUWZEMElpWWxJQUFBQUFBQUFBRVZ1eXZmamxuejB2QjJaYWxkczM2elhoVGNBQUFBQUFBQUFpWUpBaVlKQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFSSUFCRW9KQUFBQUFBQUFBQUFBQUFBQUFBQUFBaVlKQUFBQkVvSkFBQUFBQUFBQUFBQUFBQUFBQUFRRWdBQUFBQkNRUUpSSUFBQUFBQUFBQUFBQUFJSlFKaVFBQUFBQUFBQUErUkhpSkFBQUFBQUFBQUFBQWVub1FCSUFBQUFILzhRQUx4QUFBQVVFQWdFQ0JBVUZBQUFBQUFBQUFBRUNBd1FGRVRBeEVFQVNJRFFURkNGQklpUXpOV0FqTWxCd2dQL2FBQWdCQVFBQkJRTEhZV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVc1di9OTi81TGYrbC92L0FDVDcvd0FLazFOcGhTYTE5V0pEY2h2ckhvRjFsdUpiUk1xaW5PV1hsc09SS2kzSTY5d1d1bXBTVUprVmR0QWVrT3lGZW1OVTNXQXhPWWtkVTlsclBld1ZLWVFIS3RIU0hhdzZvT1BPUEhoWm55R1EzV2lDS2xGV0V1dHI2SjdMV09mUCtWSmN5UXMvbVh3YnpwZ3pNOEVXbHVQQitsTXVOdnhuWTZ2V1Mxa1BtSGg4eStJOVRmYVUyNGwxdkdleTFqbktOYzdDeFRYM2hHZ014dVZJU3RNaWpwTU94M1dEdzBaUm5HeG5zdFk1ZnZmU2xLbEczVHBMZ2FveEJtSXd4NnpJbEU5UzQ3Z2NvN3lRdUsrMTY2TCtqalBaYXh6ZmZjVTZFMUpiS2x4U0NZY2RBSWlJc3FtVzNBcW54VkE2VEZNU0VFMUk0bzN0OFo3TFdPZjcvaWkvcGRPWDd6aWplMHhuc3RZNmorNGNVWCszcHlQZGNVZjJXTTlsckhVLzNIaWlkUjM2dmNVbjJPTTlsckhWZmY4QUZGL1Y2YXZxcmlsL3QrTTlsckhWeS9POFVZL3pQU1VkazgwNHJVL0dleTFqckpmbWVLUWRwdlNmTzBmbUVWb09NOWxySFdpL0Z4VER0VU9sTk8wTG1PVm8yTTlsckhXaS9wY1FUOFozU3FSMnAvSkZaT005bHJIVnl2QzRhVjR2ZEtzS3RENFlUNVNNaDdMV09vcDhvSExTdk5ubzFwWDA0cDZmS2ZrUFpheHZKODJPYWN2emdkR3JyOHBuRklUZVprUFpheVNFZkRrOFVaeTdIUmxyK0pNNG9xUHdaRDJXc2xXYjhKdkZLZCtITTZFbDM0TWJtbXQvRGdaRDJXc2xZYThtT0VxTkMyWENlWnoxaC84QUR3MmczSEVwSktjaDdMV1I1c25tRkpOS3VLVEs4RlpublVzTlBPcWZlNHBEUG5KeW5zdFphdEg4SHVZRlNKd3NqcnFHVVRacXBhK1lVZjVhTmxQWmF5dnNwZlplYVV3N3pGcWJqSVprTnlFNFpWVGFZRDhoeVF2bWxSUE5lWTlsck5OaEpsTnJRcHRmS0ZxYlZHcTRRNGgxUHBrem1Zd2sxQjZSNllNRlVwYVVraE9ZOWxyUExoTnlreUl6a1pmb2FmY1lWRnF5SE9YcERjZEVtcU9PK3FIVEZPaEtTUW5PZXkxMEZvUzRpVlNESUtTYUZlaUxPZGpCK3NGNExjVTZ2MFI0ajBrNHRPYWo5STlscnBQeG1wQlNhVTYxaFpZY2ZWR3BLRUFpSWk2VnV0SmdzeVJKZ3V4dlNTVFVjV2tHWVEybHRQVCt3Ky9WTXJsTHBSS0NrcVFvUllUc280ME5xS25ybjJIb3pNZ0pwY1ZKa1JKTHJmZi9BSnd2M2I5Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN3bkwvQVAvRUFDY1JBQUlCQWdVRkFBSURBQUFBQUFBQUFBRUNBd0FSQkJBd01USVNJQ0ZBUVJSd0lsRlMvOW9BQ0FFREFRRS9BZjBhN2hONk03VkhNRzhIMWIyb3lxS2FjbmF0ODFtWmFXZFRRWUhiMEpKQ1RWejJKQ3pVSWxBdFR3RWNhMnp2UVlpa1BVTDZyYjBxbGpZVitPMUREajdTeHF1M1lWQjNvNGRmbEhEbis2ZU1wdmxGd0dxL0kxRHowc1JzTW8rQTFYNUdvZVkwc1I4eWo0alZsNW1vK1kwc1I4eVhpTldiblNjaHBZamxrTlhFY3RPZm5TK1RyWWdiSEtNM1VhTG03RTFFTHVOYVlYWExEdDR0b08zU3Q4c09QTjlkbDZUYWxicE42Vmd3dU8rV1RxOERLSmVsZGVXUHE4akpXSzdVazRQTHNlVlZwNUMrVU1kLzVIMFpJZzlNaFhmSkpDbTFDZFNQTlBNVzJ5QXZ0U1FmVzlNaTlQQi9taUNOODBnSjNwVkM3ZXN5aHQ2T0hQeWtpQ2ZvL3dEL3hBQWtFUUFDQVFNRUFnTUJBUUFBQUFBQUFBQUJBZ01BQkJFUU1ERXlFaUVnUUVFaWNQL2FBQWdCQWdFQlB3SC9BQTFJeS9GQzNURlNRRmZZK3FBVFN3dWFTMkE3VUJqVjRGYW10M0hGRlNPZm9SUmhWckErRHpxdE5NNU9hUzRCN1VEblhBb29wNUZPdmkyTjFlQlRNRUdUUnVWbzNSL0JUU00zSitDc1Y0b1hMRG1oZEQ5RkpLSDQwbTduZFRxS242YlZyeWRKZTUzWStncWZvZHExL2RKTzUzWXVncVhvZHExL2RIN0hkZzZDbjZuYXR1dWgzYlkveHQyNC9pbU9CbmV0VHlOSlJoenN4akNnVk1jSWQ2QnNQcGNyNzh0aU5mSnNhWFRlZ043aWtieUdhZGZNWU5NaFE0UHpoaThCazZTdjV0bmZobDhEZzhhTW9iMGFlM0k2L0JJV2VraVZOSjVjZnlQb3h6RlBWSTRmalI0bGZtbXQyQndLamdDODZFZ2MxSmNmaWZUQnh4U1hQNDFBZyt4ckpjQWVscG5MYy9XVnluc1VMbGNlNmttTC93Q0gvd0QveEFBM0VBQUJBUVFHQndZR0FnTUFBQUFBQUFBQkFnQURFUklRSUNFaVFGRXhRVkpoY1hLQkV5TXdVR0toQkRJemtaS3hRb0tBa1BELzJnQUlBUUVBQmo4Qy93QkMwcVIyaXR6WG5ObTR0TTdNZkw1bHFDUXhRNXVvejFtbWQyWUZwVlhIbVdmbGtWRUFiMmc1RTV6MU5GNHFOYVZmZUkzNld1cmdySStUM255UHUxMlpmQU4zYVFqM2FMeFpWeDhLeGNSa3ExdTlkZFV0OVNYaTExYVZjRGpwVTJ2RDdORXZsOURCdnJQUHlhMTR2N3RhZkFtZTkyajNMQU8rN1VHZzhURGZxUGdXS0k2dDlWZjVOOVo1K1RYMWRvbmV3V2d4QnhMMG5haDRVU096VG1wb3dtWHRHbVZRQkJ6YUxoVXZwTFFlSUtmQ1duSldKZmN4clFTQ2VEZlRsNXJHNzE1MFMxeDJBYzY4Q0lockIyWjlMWEZKWDdOZmRLSFN1ODVzUzk1cVZLZVJzT3B2a2oxYXh5ajdOWUllTmZkcFZ4RGZSSFJ0Q2gxWjRoT2hKaFN2bXhMM2pTOTQ0Ujl6bWxmUGlYdEwzcGhIdk1hVHo0bDUwL1ZMN3BoRjh4cC9zY1NyZ0tYdkRDRTBvNjRrY3RLeDZjR1RVZGY5cnhLRDZhZUtjRzhQcE5SMXk0bHllTktOOGYxZzMzTFVkREpJeExzNzZYWE5nM25UOTFBTXNUSEpWS0ZaS0J3WUdhcVhhYzFERlBmdlVRck1Sd1RwUEUwdWh2amlscHpTUlVkN3JNRkxzcHBKMlU0dDRqSlZLMFpHT0NlcTMwdlY5TVhOdGlOTXVwWWhnVnZNaFVSNnJjV2w1c0drS0drV3NsNG5Rb1lCTGtjVFNsQTBxTUdDUm9GbUxXN1A4Z3hTZElwN0Jac1Y4dmpsNHMyQmxQRmFUU1hoMEkvZU43WWZLdlR4cUIwK01GNmpuNHBXdFVBMlRzYUJVU2orV2s0MVR0V2dzWGE5SXFCTHkrajNEVE8xUjhLVkhlTDltbWVLalU3ZFl1ajVjZms4R2dzVUxFQ0treUZGSjNNRS9FRCt3YVpDZ29icTBDWmxiSWFFWkVaQ3JFMk9ocExCS1JBRHlDMnhlcFRRZUo2MVpuYWlscFgxeFdlcW1aNHFEU3V1N1Q3MWd0OWRSbHJMQktSQUR5S1ZhUW9NVmZEMmpaTFFVQ0R2cXdqTWpaTGR5bThkclUweTFGUnEzRTJablEweHZyelBrMEhpWTcybWRkNG4zOEdWMmtxYVo4WnpscWFBRUI1VEVpQzlvTkVpS05vVllKRVMwM3hGbnBEU29TRWpkNVpBdFA4QUQzVHN0S29RSW91aUNkb3RkRVZiUjh3N3hFZDdSbEo0bG9KRUIvbkovOFFBS2hBQUFRSUVCQVlEQVFFQkFBQUFBQUFBQVFBUklURmhjUkF3UVZFZ1FJR1JvYkZRNGZEQjhkSC8yZ0FJQVFFQUFUOGh5Q1FFNTI3cGp1bUtnRlFDb0JVQXFBVkFLZ0ZRQ29CVUFxQVZBS2dGUUNvQlVBcUFWQUtnRlFDb0JVQXFBVkFLZ0ZRQ1ltcVZHNlpia0NXVVRPQ0FiNEpta24zaG11OHBib0J2aG9pb1U4cncrSmJVSUY4ancrTEkxRTBJOFJpVzcvR21CZnZ3a3NnR0h4d2hEZ203YjQ4K3NTV0NBWWZJQ0RqQXlmSW1Zd0V6ekI4WUdZSmdPcSsvbFFGV28xRitaSk9XTmhEcVZHWElQNk5pSE1ieW1kamNTczVjQUFGSjVRb0hjeVRCT0Zab2ZaUEg3Um9PbkVPRmlLQ3hUUUJFcG5sWmlrMjVBZ0RrZ0NxbDRwR1U3eE5nZVU1Z2Z1WWs4UjFaVE9Eam9FWkFncVA0SzBtV3drTHduQjVHYmRTYlpnQkRBcnhrRzY4UFFlRi9wRk5GYzBSY2h2a05EMngrR1FnV0xBemU2Y2MyQjREa2VGNUFHUStwZjZSQVFKcWlNOUNtbmpjWmsyNmsyek5FUXV5R1RNcHY3a095WmcvWmh0aVp6YkFFOHZuUjdxOFdhSHJsRkJLRjFHWk51cE5zeUg4VWVKMUYyQjFxME4wQk1YNkg5SzZqQkU5K001Q0pNRUozSnV5N0o2SW51VW9MZUlkK01JOUhyTW0zVW0yWURYV01ieTJITXAwZDVyMzJkN1RLRUd3R2Q0b2txYkJ1STlLUVdpdTFQUWZIOTlNeWJkU2JaZ05peWhVK3VVSi8weHhDSlY2R1pOdXBOc3dHdUQwTVRoMS9ybERjbS91eEJxcGVobVRicVRiTUJxdjhNU2lQN1BsRGQ3K3pFV0d1WVRicVRiTUZxM294S0J1SEtGVkRpTFZEN1prMjZrMnpHaWJpZkp4dlova2NuUVFQd05LaFBsbVRicVRiTXZKdms0d0hjSHJrNkhFOGNEUm9PWk51cE5zeThRSHJHMHdlWEp1YXNjRkRWNHpKdDFKdG1PN2N4NCtzWFRRTzhPVHZ4bmhpQTVZS2xCc3liZFNiWmpmc2o3R1A2NkR5ZEJNZURqUWdlYzJiZFNiWmpHMkE3RHdVWi9Ea3V2eWVNYUVlQVBtemJxVGJNL053T0J5Nmg0bHVTYWRnUDdqWDBQOEFNMmJkU2Jac0FHZUFzK01ZNCtkL25KYThnbUJZUXhZM0pBL3V1Yk51cE5zMXgwQi9qK1l0SkdLNjVqa2Q3b1Y5T0NNSnVQcjlObXpicVRiTmFlYkJzY1Rqc2NBYXJWMEZ1UWFMeFAxNHlDUUNsT0lETm0zVW0yYkxRWXNnSXNSaU1RbGFFY2pvZHM5bVFQdlJUd0Y3WXN5Z3d1L0hPbTNVbTJjY1lmU3hTSzBNUVdYM3pRRWg2bFFDL3dEdHppQVNXRVNuRW03dWROdXBOczZRaXoyTzZEWXhlOWVBYTZHaHFzZFJxTGpLY0dOZ0dDNVZqQU5CYmdza1IxTytmTnVwTnM5NUJoZnFLT2hoaUR3QW9CMUprVVJFZnR3aGtvNmx4T25kcjEyVHZHUDJUcndnSXlSY29FT2dFd0EwejV0MUp0eUdnOUkwVUdRYUJJOEwxWlNSVEdJZDUvNGdRUTRMZzROUmpvTlRaUDdubGY4QUZNOEo0TXpoK2pJZEFaZ0JweUUyNmsyNUUrTU13VTRyVWVqMEtMQlhNQXg0UzREOFNHeVp3ZGlKL0RvME9PcDRlcXJDQk05bklDdzVLYmZsQm5zdEpDT3FlYkNKZW1xSUlMR0J5SE96WFlKbm92Si8xQVFBSkFjbkhIZENaNVVTZTZqN1J1aXBIMXdpNWhwQUJ5VXdtWjF1cFF1QWRBNVF6S1FYdHl3Q0FCQjBLZjJOWFNiYkk3TG5nY0pCT2NqN1U0Uk9ZZVdPZ3drNWdaQ01Ta0k2cDBxV0NoOFFVZ0F3SExpSkhFUWg4ZVN3UURERTc3Zkh6TnVHUnA4YWRoTlNIRE5EWS9Ga3NnTy9HUTZCME0vaVNXUUdwbmtrT25hZmY0ZDlCTkFkOHhtbDJUN3crRGRsRTBVczl0aW5PbzdKbS9PczNUN0JNVE05a0EzS0FBSktvVlVLcUZWQ3FoVlFxb1ZVS3FGVkNxaFZRcW9WVUtxRlZDcWhWUXFvVlVLcUZWQ3FoVlFxb1ZVS2luSE4vOW9BREFNQkFBSUFBd0FBQUJEenp6UlR6enp6enp6enp6enp6enp6VHp6enp6eVJ6enp6enp6enp6enp6enp6enp3elR6enlUenp6enp6enp6enp6enp6enp6enp5anp5aHp6enp6enp6enp6enp6enp6enp6enp4end6enp6enp6enp6enp6enp6enp6enp6enl6enp6enp6enp6enp6OVBmenp6enp6enp6enpEenp6enp6enp6UW9NTU9EN0h6enp6enp6ekx6enp6enl1QUFNTTkrNHNNUE9MM3p6enp3THp6enp6eUVJV1kzenp3MjAwd1A4QTg4ODg4Qzg4ODg4OEtRODg4ODg4ODg4NkQwODg4ODhDODg4ODg4cUU4ODg4ODg4ODhyRGQ4ODg4OEM4ODg4ODhxRzg4ODg4ODg4OGdEVzg4ODg4Qzg4ODg4OGpTODg4ODg4ODg4SkdWODg4ODhDODg4ODg4cEEvODg4ODg4ODhDSDg4ODg4OEM4ODg4ODhNRDE4ODg4ODg4OEpIODg4ODg4Qzg4ODg4OG9EYjg4ODg4ODg1REQ4ODg4ODhDODg4ODg4L0NDLzhBUFBQUFB3UjkvUFBQUFBBdlBQUFBQUE9DQWZ0L1BPOEF5dlBQUFBQUEF2UFBQUFBQUERqUTQwcUF4VDNQUFBQUFBQQXZQUFBQUFBQUExmUUF3RGovQUR6enp6enp6elB6enp6enp6enp6eTJLL3dBODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODhFODhVODg4ODg4ODg4ODg4ODg4ODg4ODg4MGM4OHN3ODg4ODg4ODg4ODg4ODg4ODg4OHM4ODg4ODhjODg4ODg4ODg4ODg4ODg4ODhFODg4ODg4ODg4akJCQkJCQkJCQkJCQkIvOEFQUFBQUFAvRUFDWVJBUUFDQVFNRUFnSURBUUFBQUFBQUFBRUFFU0VRTURGQVFXRnhJS0ZSY0lHUnNmRC8yZ0FJQVFNQkFUOFEvUm8xd2xzYW5ZQjZWSEpuZjc5VEdHb3FyZGNRNUp5V0p5UytnYmw0SjV2aGtPQ1k0dVpUSWlLcDFFY01Xc1pTL251OHZ2U1FkeElMbE9BZkF1aGNaeXFkbkExNzZmWVp4ZFRKajdtZjhQVzF4L2xwOUxkRlFkYlE4ajNvYUR3YnBwUlVuazJuZ2VOQlFHNktMNGcwM0JzdlpWcnhCU2VlZ2l4YlB1amZoZjhBak9saS9IWXVORjYzcUNVeGxVY3g4OUNnV3k3MkRTbUhuZnI5d2lWaGlGcVlUQitvSTVOY0x5emx1UHhvNjdIUTVRd3h1aG9sbGlYREJtT3dORVZDVmY0empvZ0ZNRnovQUVqdEN0Y2ppZmNIbzdWYmg5Q1djc1ROY3Y2UC84UUFKaEVCQUFJQUJRUURBQU1CQUFBQUFBQUFBUUFSRUNFd01WRkJZWEdoSUVDeFlIQ0I4UC9hQUFnQkFnRUJQeEQralg2MmN3bEV1ZFpUNnV3RnpvdGVabVN1QUtESE16Sm5LcHM1UG9ER3JXZHI0WkdOc3BScVpabGZVQVdPS201Q2FoZGNkWDFpZE1VSHNNYjB2aTR0YnFiVUdkU1I5TmZ2V0p2L0FPZnVsNldIdmFydndrRi85ZGRJNXJ4Zzc4anF1L0ZEZmkwaGt2R0N0TzdxdS84QWI5aHN1enBITTk4RmF1cmNqaGlXVkVwclJvTHpMbmdmUUNtZDlIdzVyeXF1K1dGWUhYUXI4RkhKMWhWWkJNOVlLeXFEOGdWb25NRGhjamJwcjh3SU41a0hwdVovbVBjUkduSFBOam1iVHZ6Z1o2N3Y5SFAyWkJyZUJPVFBtYmtEbVp2bmNBYlZFdjhBMG0vMGtWcW1NZnJEYkxNZXJqNmpkdTlLOVJxMk95RzVrZXh4L09qV2ZuLy94QUFxRUFFQUFRSUNDUVVCQVFFQUFBQUFBQUFCRVFBaE1hRVFNRUZSWVhHQmtmRWdRTEhCOEZEUjRmL2FBQWdCQVFBQlB4RFVXUmI3akdwY0ljMVNZdm9SVzhsNXJYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4Vlc0STVNVk13NjE2azRoeVdva2hsYm4yQXFNWGNWR0lodVA5b0JZaitDZ2tKSlU4V09EY292Z1N5ZGJMZGZpMUJnUDRxQ1FralVZTTdqYVVJSkdUVXFCS3dGUTNOdHpmei9rcUhBZHB2b0JicWJ0UVhTNE1PUEgrV2srUlNCSjZ1U0g0ZnpjRndmeDlNUzJMWXF3ZnpyeTlsemw2QzVzV0gzL0FEemFURzRvUkJMam9tVXgyYzZnRGQvUXZibTV5MFhCdXY4QTBiRzMyZEZ6OVAzZjNDUERpWWU1dXZ5R2tTUU51ekE1SmZ1VUV2MkVJWGNObnQ4UjJsKzJqYTcxYy9iWTJvM2c1Y1hoUXEzWE5nNGJtZkxEU2tXeWRvTnliU2pIcXRKZTR2cHZ6OXVSTGNJcktudE1KS2lCMWFMZkd3YUw4NU9kVHFSd2VXTEhxa2dDeFlQNHN6MG9NQlByelk5RjlyTEQydFpWN0JxTllxZ281a1RFRHNGNkhFWmg4aEJ5bzVXNFd2dkJrMWNsTWtxSEl3T21xSi94d2k5em9sRkN2YkRaSHpRUkRPNXZXSXpvc3VtSDBqN0hPcXlyV1JXNkRxVGZ3T0hkS1V1eFE2UUsvYi9kRHdMeFgzVW9EdlUrc0ZZTHRQRmJjUkJjQndjWHRRVVlReU9YdDU0MHpPTEY5eFBveDFHelgzeDhWa3JIOTErMys2ZHgwblFtL0VubkpWMll6OVBFYmF6T3F5cldNVEtUd0xHUnFRUUFWYkFWZkNkZ2lPR042d2NhTWhyWVNqd1lmTGpwTGUwU2cxdkhHUlh5eEhXZVpVMkU0SW5rQ3ozMVN0ek80UUpPNVBYV1oxV1Zhd29IZjV2VURXOXBYWXBzUlBhRU9qZktuRmQrRWZqaFJBbE5sUDFYN2VzSW13TWljUnBGZWJWaTVyZG9wM1laRmw2TnM2ZVlWak4yRW5yNWtEV002ckt0WVFUZjU2UmZaQ2hSQTdxL08zNEpTUXlEQk5uV1ZGaVhBUVphNmF1TzFqTXFSbUg4S0tZZXJuM05PUXBKU3dPM1NTZmF3eTZ6T3F5cldRQ0l2ZTRhWnQwWDg2ZTBCWnVzK21MZkEvZlBXWjFXVmF5RzhidTJtYmQzN24rUGFZM1hkK2ZUTU41eWZyV1oxV1ZheTJON3B1YlJlMDdkWkdNN1dtVWJ4OEgxck02ckt0WktONitIMXBqM3Q5bC8zMmwwcGxjOU1vakhaejYxbWRWbFdzL1djSDFwZzN4N1A5dlo3S3ArdzlIR0R1ays5Wm5WWlZySWZISCsybWQ4bVgxN1B4ano5SEZydkwvZXN6cXNxMWtjVDZaWDNwanV4RHVmWHM3cVJQZEVmZm90NUdUSFdaMVdWYXkwKzJlY3RLNjhUK0p6OW54M0Y2L1JPbERDVllDakp3QWREV1oxV1ZhenlnNTltbTlrWERrSDJkeTd3WEFUNk5OaUp0dk1HdHpxc3Exa0tsek9nL0I2TGd6ZnQ4aCsvWlFCY1F1VUQ1ZE5ucGw3ajZhM09xeXJXUitTa2RVZWlWMlVyaElNZzlsRVRaZzRxL0JOTStscGJpcDhGMXVkVmxXdGUzQVRtUmxHa0c3RVRnSStWMzlrWmpJamZZWkJwbkV4NXlGZmhyYzZyS3RiQVJFejJTWGZCNjZUaHJnQ0grQ2RmWWhKUW5yMnpKU3F5M2RMUVVkOUxaTmF6cXNxMXJuWit6dmNPK25oWXJJTWxZSlFKdmJUb3lkUFlIYzFpTmdXSGVYb2FjMVlCWW9HNENOd0VHdHpxc3ExcmhRc3U5c2VqRDBwTGJ6c1JHRTAzOENCYmE5V3pqejE5eTFFYlZzSEZwRDlqVFlZQWNBZzAzVU1lMnlCMkpkdGRuVlpWcnRpMW9iRSt3bm1Pa1VFVVM0bEFaSFlYQVhaOHVldHhlejRpN2cydkNqb0VMbUw5bnhtNkFRS01BWFZvekppNXY0blFnNmE3T3F5clhCMWdBRjlrT0kxWkVwT3diQndmUWFka0ZiWEJjVGc5eW9LTkd3ZmRpR3FscU8yS2Z4WXlwUzVtSFk5dzJmUG9jcnZzTVA0SHp5MStkVmxXdkpZb0hCUGkrTzhwWU9HdWZ0L293UWdzUjJwelloQmM0N1RtZHF3c3VURGs3bmg2aDRaTFhPcGgxWDRVWTJCVFluYytIRDA3cUZybVptOTJVR2RRMEFOZm5WWlY3QzBrV0RTOENiVGgycVRSSGJ1Vy9XUHBCYlNSZEJNSHJTRFJzSE1tL1ZialFNQUpFWkUwVFlEaXZ1R0xVZmxrS052aS9BNzBxaXFyZFgwOEZCUVAweithZ3ppZUFld3pxc3E5amdxamNsU1EzbFlPRzA1TitMVFRsaFFPWStsMnhOMnNjMjFsd3JFZXdWbnVBeFpjNnhwaHZMeTRIRDB4RjRNWm9iWGdTMDRBSzVlT1J6dSt5MzNhcXdHNjNzNENjUUhaaS9UQ3BTSlhnc2NmbzdVaUJCaEVoSFVRd25FRWN4YkZObURmQWJqdHlIQ2piREFZQTRIc3drNTFXanVaOXJaUjFyZlZzSFB1VS9GTkYzMUdLNTkzMHNkdUZrY0FvcGw3aVhmQnlMOFNzRE9FUS82OGZhT0VNWXRRUUJnV3BzWGNqOW43WU1MUWhJbERHdVZHT2UydUdIS2xHWkE0UjBTT1pRYXpnYjNBNnhVTWpVRW5oRzQ0R2Z0cjNlTTl2eG9HSXhMME1rbUQ3Y1dERUJQSkMvU2pjSFpGUFlSUFdqTzNBd09BZTM0QUxIMys0YWJ6dTRjdjU5NEx1QnpxQU5KYkRITVVJZ2x4L25HUHNzT2ZwTUxhdzRPNythM0V1eU45QUFHQjZVQkRoU1IybXgzL3dBdUJoSzRHK29MdDFpK3NCR0c1M1VrNEh5L2toeExnYjZTY1JaYWtCRFV0K2ZsL3dDTzN3VGtLZ3VzcmJySjduaXcvd0NVR1lFdHp0L2hvc2NkMjJveGJOeGpRQWdJTmNna0pKVXpFT0RjcURhOFZXOWh6dDcxRmhFN3FtNHJ6dFc0QnUvMVFZQ1BhS1VBN3dwdmZOWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxVjQrYWdHUjFYb0FJQURXZi9aIi8+CjwvZGVmcz4KPC9zdmc+Cg==";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a, _b;
        if ((_b = (_a = window.trustwallet) == null ? void 0 : _a.solana) == null ? void 0 : _b.isTrust) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.trustwallet.solana;
      if (!wallet.isConnected) {
        try {
          await wallet.connect();
        } catch (error) {
          throw new WalletConnectionError(error == null ? void 0 : error.message, error);
        }
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async sendTransaction(transaction, connection, options = {}) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signers, ...sendOptions } = options;
        transaction = await this.prepareTransaction(transaction, connection, sendOptions);
        (signers == null ? void 0 : signers.length) && transaction.partialSign(...signers);
        sendOptions.preflightCommitment = sendOptions.preflightCommitment || connection.commitment;
        const { signature } = await wallet.signAndSendTransaction(transaction, sendOptions);
        return signature;
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
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-unsafe-burner/lib/esm/adapter.js
init_ed25519();
init_index_browser_esm();
var UnsafeBurnerWalletName = "Burner Wallet";
var UnsafeBurnerWalletAdapter = class extends BaseSignInMessageSignerWalletAdapter {
  constructor() {
    super();
    this.name = UnsafeBurnerWalletName;
    this.url = "https://github.com/solana-labs/wallet-adapter#usage";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNCAxMC42djIuN2wtOS41IDE2LjVoLTQuNmw2LTEwLjVhMi4xIDIuMSAwIDEgMCAyLTMuNGw0LjgtOC4zYTQgNCAwIDAgMSAxLjMgM1ptLTQuMyAxOS4xaC0uNmw0LjktOC40djQuMmMwIDIuMy0yIDQuMy00LjMgNC4zWm0yLTI4LjRjLS4zLS44LTEtMS4zLTItMS4zaC0xLjlsLTIuNCA0LjNIMzBsMS43LTNabS0zIDVoLTQuNkwxMC42IDI5LjhoNC43TDI4LjggNi40Wk0xOC43IDBoNC42bC0yLjUgNC4zaC00LjZMMTguNiAwWk0xNSA2LjRoNC42TDYgMjkuOEg0LjJjLS44IDAtMS43LS4zLTIuNC0uOEwxNSA2LjRaTTE0IDBIOS40TDcgNC4zaDQuNkwxNCAwWm0tMy42IDYuNEg1LjdMMCAxNi4ydjhMMTAuMyA2LjRaTTQuMyAwaC40TDAgOC4ydi00QzAgMiAxLjkgMCA0LjMgMFoiIGZpbGw9IiM5OTQ1RkYiLz48L3N2Zz4=";
    this.supportedTransactionVersions = /* @__PURE__ */ new Set(["legacy", 0]);
    this._keypair = null;
    console.warn("Your application is presently configured to use the `UnsafeBurnerWalletAdapter`. Find and remove it, then replace it with a list of adapters for wallets you would like your application to support. See https://github.com/solana-labs/wallet-adapter#usage for an example.");
  }
  get connecting() {
    return false;
  }
  get publicKey() {
    return this._keypair && this._keypair.publicKey;
  }
  get readyState() {
    return WalletReadyState.Loadable;
  }
  async connect() {
    this._keypair = new Keypair();
    this.emit("connect", this._keypair.publicKey);
  }
  async disconnect() {
    this._keypair = null;
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    if (!this._keypair)
      throw new WalletNotConnectedError();
    if (isVersionedTransaction(transaction)) {
      transaction.sign([this._keypair]);
    } else {
      transaction.partialSign(this._keypair);
    }
    return transaction;
  }
  async signMessage(message) {
    if (!this._keypair)
      throw new WalletNotConnectedError();
    return ed25519.sign(message, this._keypair.secretKey.slice(0, 32));
  }
  async signIn(input = {}) {
    const { publicKey, secretKey } = this._keypair || (this._keypair = new Keypair());
    const domain = input.domain || window.location.host;
    const address = input.address || publicKey.toBase58();
    const signedMessage = createSignInMessage({
      ...input,
      domain,
      address
    });
    const signature = ed25519.sign(signedMessage, secretKey.slice(0, 32));
    this.emit("connect", publicKey);
    return {
      account: {
        address,
        publicKey: publicKey.toBytes(),
        chains: [],
        features: []
      },
      signedMessage,
      signature
    };
  }
};

// node_modules/@solana/wallet-adapter-walletconnect/lib/esm/adapter.js
var WalletConnectWalletName = "WalletConnect";
var WalletConnectWalletAdapter = class extends BaseSignerWalletAdapter {
  constructor(config) {
    super();
    this.name = WalletConnectWalletName;
    this.url = "https://walletconnect.org";
    this.icon = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4NSIgdmlld0JveD0iMCAwIDMwMCAxODUiIHdpZHRoPSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTYxLjQzODU0MjkgMzYuMjU2MjYxMmM0OC45MTEyMjQxLTQ3Ljg4ODE2NjMgMTI4LjIxMTk4NzEtNDcuODg4MTY2MyAxNzcuMTIzMjA5MSAwbDUuODg2NTQ1IDUuNzYzNDE3NGMyLjQ0NTU2MSAyLjM5NDQwODEgMi40NDU1NjEgNi4yNzY1MTEyIDAgOC42NzA5MjA0bC0yMC4xMzY2OTUgMTkuNzE1NTAzYy0xLjIyMjc4MSAxLjE5NzIwNTEtMy4yMDUzIDEuMTk3MjA1MS00LjQyODA4MSAwbC04LjEwMDU4NC03LjkzMTE0NzljLTM0LjEyMTY5Mi0zMy40MDc5ODE3LTg5LjQ0Mzg4Ni0zMy40MDc5ODE3LTEyMy41NjU1Nzg4IDBsLTguNjc1MDU2MiA4LjQ5MzYwNTFjLTEuMjIyNzgxNiAxLjE5NzIwNDEtMy4yMDUzMDEgMS4xOTcyMDQxLTQuNDI4MDgwNiAwbC0yMC4xMzY2OTQ5LTE5LjcxNTUwMzFjLTIuNDQ1NTYxMi0yLjM5NDQwOTItMi40NDU1NjEyLTYuMjc2NTEyMiAwLTguNjcwOTIwNHptMjE4Ljc2Nzc5NjEgNDAuNzczNzQ0OSAxNy45MjE2OTcgMTcuNTQ2ODk3YzIuNDQ1NTQ5IDIuMzk0Mzk2OSAyLjQ0NTU2MyA2LjI3NjQ3NjkuMDAwMDMxIDguNjcwODg5OWwtODAuODEwMTcxIDc5LjEyMTEzNGMtMi40NDU1NDQgMi4zOTQ0MjYtNi40MTA1ODIgMi4zOTQ0NTMtOC44NTYxNi4wMDAwNjItLjAwMDAxLS4wMDAwMS0uMDAwMDIyLS4wMDAwMjItLjAwMDAzMi0uMDAwMDMybC01Ny4zNTQxNDMtNTYuMTU0NTcyYy0uNjExMzktLjU5ODYwMi0xLjYwMjY1LS41OTg2MDItMi4yMTQwNCAwLS4wMDAwMDQuMDAwMDA0LS4wMDAwMDcuMDAwMDA4LS4wMDAwMTEuMDAwMDExbC01Ny4zNTI5MjEyIDU2LjE1NDUzMWMtMi40NDU1MzY4IDIuMzk0NDMyLTYuNDEwNTc1NSAyLjM5NDQ3Mi04Ljg1NjE2MTIuMDAwMDg3LS4wMDAwMTQzLS4wMDAwMTQtLjAwMDAyOTYtLjAwMDAyOC0uMDAwMDQ0OS0uMDAwMDQ0bC04MC44MTI0MTk0My03OS4xMjIxODVjLTIuNDQ1NTYwMjEtMi4zOTQ0MDgtMi40NDU1NjAyMS02LjI3NjUxMTUgMC04LjY3MDkxOTdsMTcuOTIxNzI5NjMtMTcuNTQ2ODY3M2MyLjQ0NTU2MDItMi4zOTQ0MDgyIDYuNDEwNTk4OS0yLjM5NDQwODIgOC44NTYxNjAyIDBsNTcuMzU0OTc3NSA1Ni4xNTUzNTdjLjYxMTM5MDguNTk4NjAyIDEuNjAyNjQ5LjU5ODYwMiAyLjIxNDAzOTggMCAuMDAwMDA5Mi0uMDAwMDA5LjAwMDAxNzQtLjAwMDAxNy4wMDAwMjY1LS4wMDAwMjRsNTcuMzUyMTAzMS01Ni4xNTUzMzNjMi40NDU1MDUtMi4zOTQ0NjMzIDYuNDEwNTQ0LTIuMzk0NTUzMSA4Ljg1NjE2MS0uMDAwMi4wMDAwMzQuMDAwMDMzNi4wMDAwNjguMDAwMDY3My4wMDAxMDEuMDAwMTAxbDU3LjM1NDkwMiA1Ni4xNTU0MzJjLjYxMTM5LjU5ODYwMSAxLjYwMjY1LjU5ODYwMSAyLjIxNDA0IDBsNTcuMzUzOTc1LTU2LjE1NDMyNDljMi40NDU1NjEtMi4zOTQ0MDkyIDYuNDEwNTk5LTIuMzk0NDA5MiA4Ljg1NjE2IDB6IiBmaWxsPSIjM2I5OWZjIi8+PC9zdmc+";
    this.supportedTransactionVersions = /* @__PURE__ */ new Set(["legacy", 0]);
    this._readyState = typeof window === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.Loadable;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.client.off("session_delete", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._publicKey = null;
    this._connecting = false;
    this._wallet = null;
    this._config = config;
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Loadable)
        throw new WalletNotReadyError();
      this._connecting = true;
      let WalletConnectClass;
      let WCChainID;
      try {
        ({ WalletConnectWallet: WalletConnectClass, WalletConnectChainID: WCChainID } = await import("./esm-JIWEY4MT.js"));
      } catch (error) {
        throw new WalletLoadError(error == null ? void 0 : error.message, error);
      }
      let wallet;
      let publicKey;
      try {
        wallet = new WalletConnectClass({
          network: this._config.network === WalletAdapterNetwork.Mainnet ? WCChainID.Mainnet : WCChainID.Devnet,
          options: this._config.options
        });
        ({ publicKey } = await wallet.connect());
      } catch (error) {
        if (error.constructor.name === "QRCodeModalError")
          throw new WalletWindowClosedError();
        throw new WalletConnectionError(error == null ? void 0 : error.message, error);
      }
      wallet.client.on("session_delete", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.client.off("session_delete", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction);
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signMessage(message);
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};

// node_modules/@solana/wallet-adapter-xdefi/lib/esm/adapter.js
init_index_browser_esm();
var XDEFIWalletName = "XDEFI";
var XDEFIWalletAdapter = class extends BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this.name = XDEFIWalletName;
    this.url = "https://xdefi.io";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjI2MjggMTMuNDAxM0MxMi40MjI4IDE0LjUzMDcgOS45NTk5NyAxNS4xMTI0IDcuNDY1NjkgMTQuOTg4MUM1LjM2ODU1IDE0Ljg4NjUgMy42NDg1NSAxNC4xNDExIDIuNjA4NTUgMTIuOTE1N0MxLjY5NDI2IDExLjgyMDEgMS4zMzk5OCAxMC4zNzQ1IDEuNTc5OTggOC43MTE0M0MxLjY2MTMyIDguMTU4NzQgMS44MjgwMiA3LjYyMTY2IDIuMDc0MjYgNy4xMTg5NkwyLjEwODU1IDcuMDQ4MzdDMi45NzE4IDUuNDA1OTUgNC4yNTI5MyA0LjAxMzk3IDUuODI1ODQgMy4wMDk0MkM3LjM5ODc1IDIuMDA0ODYgOS4yMDkyNCAxLjQyMjM2IDExLjA3OTEgMS4zMTkyNEMxMi45NDkgMS4yMTYxMSAxNC44MTM4IDEuNTk1OTIgMTYuNDkwMSAyLjQyMTI4QzE4LjE2NjMgMy4yNDY2NSAxOS41OTYyIDQuNDg5MTIgMjAuNjM5IDYuMDI2NDFDMjEuNjgxOSA3LjU2MzcxIDIyLjMwMTcgOS4zNDI4NSAyMi40Mzc0IDExLjE4ODdDMjIuNTczMiAxMy4wMzQ2IDIyLjIyMDMgMTQuODgzNiAyMS40MTM0IDE2LjU1MzhDMjAuNjA2NSAxOC4yMjQgMTkuMzczNSAxOS42NTc3IDE3LjgzNTYgMjAuNzE0QzE2LjI5NzggMjEuNzcwMiAxNC41MDgxIDIyLjQxMjYgMTIuNjQyOCAyMi41Nzc4TDEyLjc1NzEgMjMuODczOEMxNC44NTE0IDIzLjY4OTQgMTYuODYxIDIyLjk2OTEgMTguNTg3OCAyMS43ODM3QzIwLjMxNDcgMjAuNTk4NCAyMS42OTkzIDE4Ljk4ODkgMjIuNjA1MiAxNy4xMTM4QzIzLjUxMTEgMTUuMjM4NyAyMy45MDcxIDEzLjE2MjcgMjMuNzU0MiAxMS4wOTA0QzIzLjYwMTIgOS4wMTgwOCAyMi45MDQ2IDcuMDIwODggMjEuNzMyOSA1LjI5NTU1QzIwLjU2MTMgMy41NzAyMiAxOC45NTUgMi4xNzYzIDE3LjA3MjQgMS4yNTExMUMxNS4xODk4IDAuMzI1OTA5IDEzLjA5NTcgLTAuMDk4NjQxMSAxMC45OTY1IDAuMDE5Mjc4N0M4Ljg5NzMzIDAuMTM3MTk4IDYuODY1NDQgMC43OTM1MiA1LjEwMTAyIDEuOTIzNTlDMy4zMzY2IDMuMDUzNjUgMS45MDA1MyA0LjYxODQ4IDAuOTM0MjY0IDYuNDYzOUwwLjg4ODU0OCA2LjU1NzA3QzAuNTgzMDgzIDcuMTgwOSAwLjM3Njg0NyA3Ljg0NzU2IDAuMjc3MTIgOC41MzM1NEMtMC4wMDg1OTQ1IDEwLjU2MDggMC40MzQyNiAxMi4zNjUxIDEuNTkxNCAxMy43NTQyQzIuODU3MTIgMTUuMjczMyA0LjkxNzEyIDE2LjE3NjggNy4zODg1NSAxNi4yOTU0QzEwLjM5NzEgMTYuNDQ1MSAxMy4zODg1IDE1LjYzNDcgMTUuNTExNCAxNC4xNDM5TDE0LjI2MjggMTMuNDAxM1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNi43OCAxNC44NzUxQzE1LjU4MjkgMTUuOTAyOSAxMi44IDE3Ljc2NjQgOC4xODI4NiAxOC4wMjA1QzMuMDE0MjkgMTguMzAyOSAwLjg2MDAwMSAxNi42NDI3IDAuODQwMDAxIDE2LjYyNTdMMC40MjI4NTYgMTcuMTMzOUwwLjg0Mjg1NiAxNi42MzQyTDAgMTcuNjMzN0MwLjA5MTQyODYgMTcuNzA5OSAyLjE1NzE0IDE5LjM1ODkgNy4wMDg1NyAxOS4zNTg5QzcuNDA1NzEgMTkuMzU4OSA3LjgyMjg2IDE5LjM1ODkgOC4yNTcxNCAxOS4zMjVDMTMuODM3MSAxOS4wMTcyIDE2LjkwMjkgMTYuNjExNiAxNy45NzE0IDE1LjU4MzhMMTYuNzggMTQuODc1MVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOS4wMiAxNi4yMTkyQzE4LjMxMjEgMTcuMTM4NyAxNy40NDA4IDE3LjkyMzMgMTYuNDQ4NiAxOC41MzQ1QzEyLjk1MTUgMjAuNzY1IDguNTAyODkgMjEuMDUzIDUuMzg4NiAyMC44OTc4TDUuMzIyODkgMjIuMTk5NEM1Ljg0NTc1IDIyLjIyNDggNi4zNDg2MSAyMi4yMzYxIDYuODM3MTggMjIuMjM2MUMxNS42MiAyMi4yMzYxIDE5LjE2ODYgMTguMjgzMiAyMC4xNiAxNi44NzE0TDE5LjAxNzIgMTYuMjA3OSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE4LjY4NTcgMTEuMjkyMkMxOS4yNjggMTEuMjkyMiAxOS43NCAxMC44MjU3IDE5Ljc0IDEwLjI1MDNDMTkuNzQgOS42NzQ4OSAxOS4yNjggOS4yMDg0MiAxOC42ODU3IDkuMjA4NDJDMTguMTAzNCA5LjIwODQyIDE3LjYzMTQgOS42NzQ4OSAxNy42MzE0IDEwLjI1MDNDMTcuNjMxNCAxMC44MjU3IDE4LjEwMzQgMTEuMjkyMiAxOC42ODU3IDExLjI5MjJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";
    this.supportedTransactionVersions = null;
    this._readyState = typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.NotDetected;
    this._disconnected = () => {
      const wallet = this._wallet;
      if (wallet) {
        wallet.off("disconnect", this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit("error", new WalletDisconnectedError());
        this.emit("disconnect");
      }
    };
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        var _a, _b;
        if ((_b = (_a = window.xfi) == null ? void 0 : _a.solana) == null ? void 0 : _b.isXDEFI) {
          this._readyState = WalletReadyState.Installed;
          this.emit("readyStateChange", this._readyState);
          return true;
        }
        return false;
      });
    }
  }
  get publicKey() {
    return this._publicKey;
  }
  get connecting() {
    return this._connecting;
  }
  get connected() {
    var _a;
    return !!((_a = this._wallet) == null ? void 0 : _a.isConnected);
  }
  get readyState() {
    return this._readyState;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();
      this._connecting = true;
      const wallet = window.xfi.solana;
      if (!wallet.isConnected) {
        try {
          await wallet.connect();
        } catch (error) {
          throw new WalletConnectionError(error == null ? void 0 : error.message, error);
        }
      }
      if (!wallet.publicKey)
        throw new WalletAccountError();
      let publicKey;
      try {
        publicKey = new PublicKey(wallet.publicKey.toBytes());
      } catch (error) {
        throw new WalletPublicKeyError(error == null ? void 0 : error.message, error);
      }
      wallet.on("disconnect", this._disconnected);
      this._wallet = wallet;
      this._publicKey = publicKey;
      this.emit("connect", publicKey);
    } catch (error) {
      this.emit("error", error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
  async disconnect() {
    const wallet = this._wallet;
    if (wallet) {
      wallet.off("disconnect", this._disconnected);
      this._wallet = null;
      this._publicKey = null;
      try {
        await wallet.disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error == null ? void 0 : error.message, error));
      }
    }
    this.emit("disconnect");
  }
  async signTransaction(transaction) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signTransaction(transaction) || transaction;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        return await wallet.signAllTransactions(transactions) || transactions;
      } catch (error) {
        throw new WalletSignTransactionError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
  async signMessage(message) {
    try {
      const wallet = this._wallet;
      if (!wallet)
        throw new WalletNotConnectedError();
      try {
        const { signature } = await wallet.signMessage(message);
        return signature;
      } catch (error) {
        throw new WalletSignMessageError(error == null ? void 0 : error.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};
export {
  AlphaWalletAdapter,
  AlphaWalletName,
  AvanaWalletAdapter,
  AvanaWalletName,
  BitKeepWalletAdapter,
  BitKeepWalletName,
  BitpieWalletAdapter,
  BitpieWalletName,
  CensoWalletAdapter,
  CensoWalletName,
  CloverWalletAdapter,
  CloverWalletName,
  Coin98WalletAdapter,
  Coin98WalletName,
  CoinbaseWalletAdapter,
  CoinbaseWalletName,
  CoinhubWalletAdapter,
  CoinhubWalletName,
  FractalWalletAdapter,
  FractalWalletName,
  HuobiWalletAdapter,
  HuobiWalletName,
  HyperPayWalletAdapter,
  HyperPayWalletName,
  KeystoneWalletAdapter,
  KeystoneWalletName,
  KrystalWalletAdapter,
  KrystalWalletName,
  LedgerWalletAdapter,
  LedgerWalletName,
  MathWalletAdapter,
  MathWalletName,
  NekoWalletAdapter,
  NekoWalletName,
  NightlyWalletAdapter,
  NightlyWalletName,
  NufiWalletAdapter,
  NufiWalletName,
  OntoWalletAdapter,
  OntoWalletName,
  ParticleAdapter,
  ParticleName,
  PhantomWalletAdapter,
  PhantomWalletName,
  SafePalWalletAdapter,
  SafePalWalletName,
  SaifuWalletAdapter,
  SaifuWalletName,
  SalmonWalletAdapter,
  SalmonWalletName,
  SkyWalletAdapter,
  SkyWalletName,
  SolflareWalletAdapter,
  SolflareWalletName,
  SolongWalletAdapter,
  SolongWalletName,
  SpotWalletAdapter,
  SpotWalletName,
  TokenPocketWalletAdapter,
  TokenPocketWalletName,
  TokenaryWalletAdapter,
  TokenaryWalletName,
  TorusWalletAdapter,
  TorusWalletName,
  TrustWalletAdapter,
  TrustWalletName,
  UnsafeBurnerWalletAdapter,
  UnsafeBurnerWalletName,
  WalletConnectWalletAdapter,
  WalletConnectWalletName,
  XDEFIWalletAdapter,
  XDEFIWalletName,
  getDerivationPath
};
//# sourceMappingURL=@solana_wallet-adapter-wallets.js.map
