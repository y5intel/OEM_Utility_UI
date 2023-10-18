import {
  __esm,
  __export
} from "./chunk-W7S2ME4R.js";

// node_modules/@ledgerhq/errors/lib-es/helpers.js
function isObject(value) {
  return typeof value === "object";
}
function destroyCircular(from, seen) {
  const to = {};
  seen.push(from);
  for (const key of Object.keys(from)) {
    const value = from[key];
    if (typeof value === "function") {
      continue;
    }
    if (!value || typeof value !== "object") {
      to[key] = value;
      continue;
    }
    if (seen.indexOf(from[key]) === -1) {
      to[key] = destroyCircular(from[key], seen.slice(0));
      continue;
    }
    to[key] = "[Circular]";
  }
  if (typeof from.name === "string") {
    to.name = from.name;
  }
  if (typeof from.message === "string") {
    to.message = from.message;
  }
  if (typeof from.stack === "string") {
    to.stack = from.stack;
  }
  return to;
}
var errorClasses, deserializers, addCustomErrorDeserializer, createCustomErrorClass, deserializeError, serializeError;
var init_helpers = __esm({
  "node_modules/@ledgerhq/errors/lib-es/helpers.js"() {
    errorClasses = {};
    deserializers = {};
    addCustomErrorDeserializer = (name, deserializer) => {
      deserializers[name] = deserializer;
    };
    createCustomErrorClass = (name) => {
      class CustomErrorClass extends Error {
        constructor(message, fields, options) {
          super(message || name, options);
          Object.setPrototypeOf(this, CustomErrorClass.prototype);
          this.name = name;
          if (fields) {
            for (const k in fields) {
              this[k] = fields[k];
            }
          }
          if (options && isObject(options) && "cause" in options && !("cause" in this)) {
            const cause = options.cause;
            this.cause = cause;
            if ("stack" in cause) {
              this.stack = this.stack + "\nCAUSE: " + cause.stack;
            }
          }
        }
      }
      errorClasses[name] = CustomErrorClass;
      return CustomErrorClass;
    };
    deserializeError = (object) => {
      if (object && typeof object === "object") {
        try {
          if (typeof object.message === "string") {
            const msg = JSON.parse(object.message);
            if (msg.message && msg.name) {
              object = msg;
            }
          }
        } catch (e) {
        }
        let error;
        if (typeof object.name === "string") {
          const { name } = object;
          const des = deserializers[name];
          if (des) {
            error = des(object);
          } else {
            let constructor = name === "Error" ? Error : errorClasses[name];
            if (!constructor) {
              console.warn("deserializing an unknown class '" + name + "'");
              constructor = createCustomErrorClass(name);
            }
            error = Object.create(constructor.prototype);
            try {
              for (const prop in object) {
                if (object.hasOwnProperty(prop)) {
                  error[prop] = object[prop];
                }
              }
            } catch (e) {
            }
          }
        } else {
          if (typeof object.message === "string") {
            error = new Error(object.message);
          }
        }
        if (error && !error.stack && Error.captureStackTrace) {
          Error.captureStackTrace(error, deserializeError);
        }
        return error;
      }
      return new Error(String(object));
    };
    serializeError = (value) => {
      if (!value)
        return value;
      if (typeof value === "object") {
        return destroyCircular(value, []);
      }
      if (typeof value === "function") {
        return `[Function: ${value.name || "anonymous"}]`;
      }
      return value;
    };
  }
});

// node_modules/@ledgerhq/errors/lib-es/index.js
var lib_es_exports = {};
__export(lib_es_exports, {
  AccountNameRequiredError: () => AccountNameRequiredError,
  AccountNotSupported: () => AccountNotSupported,
  AmountRequired: () => AmountRequired,
  BluetoothRequired: () => BluetoothRequired,
  BtcUnmatchedApp: () => BtcUnmatchedApp,
  CantOpenDevice: () => CantOpenDevice,
  CantScanQRCode: () => CantScanQRCode,
  CashAddrNotSupported: () => CashAddrNotSupported,
  ClaimRewardsFeesWarning: () => ClaimRewardsFeesWarning,
  CurrencyNotSupported: () => CurrencyNotSupported,
  DBNotReset: () => DBNotReset,
  DBWrongPassword: () => DBWrongPassword,
  DeviceAppVerifyNotSupported: () => DeviceAppVerifyNotSupported,
  DeviceExtractOnboardingStateError: () => DeviceExtractOnboardingStateError,
  DeviceGenuineSocketEarlyClose: () => DeviceGenuineSocketEarlyClose,
  DeviceHalted: () => DeviceHalted,
  DeviceInOSUExpected: () => DeviceInOSUExpected,
  DeviceNameInvalid: () => DeviceNameInvalid,
  DeviceNotGenuineError: () => DeviceNotGenuineError,
  DeviceOnDashboardExpected: () => DeviceOnDashboardExpected,
  DeviceOnDashboardUnexpected: () => DeviceOnDashboardUnexpected,
  DeviceOnboardingStatePollingError: () => DeviceOnboardingStatePollingError,
  DeviceShouldStayInApp: () => DeviceShouldStayInApp,
  DeviceSocketFail: () => DeviceSocketFail,
  DeviceSocketNoBulkStatus: () => DeviceSocketNoBulkStatus,
  DisconnectedDevice: () => DisconnectedDevice,
  DisconnectedDeviceDuringOperation: () => DisconnectedDeviceDuringOperation,
  DustLimit: () => DustLimit,
  ETHAddressNonEIP: () => ETHAddressNonEIP,
  EnpointConfigError: () => EnpointConfigError,
  EthAppPleaseEnableContractData: () => EthAppPleaseEnableContractData,
  FeeEstimationFailed: () => FeeEstimationFailed,
  FeeNotLoaded: () => FeeNotLoaded,
  FeeRequired: () => FeeRequired,
  FeeTooHigh: () => FeeTooHigh,
  FirmwareNotRecognized: () => FirmwareNotRecognized,
  FirmwareOrAppUpdateRequired: () => FirmwareOrAppUpdateRequired,
  GasLessThanEstimate: () => GasLessThanEstimate,
  GenuineCheckFailed: () => GenuineCheckFailed,
  HardResetFail: () => HardResetFail,
  HwTransportError: () => HwTransportError,
  HwTransportErrorType: () => HwTransportErrorType,
  InvalidAddress: () => InvalidAddress,
  InvalidAddressBecauseDestinationIsAlsoSource: () => InvalidAddressBecauseDestinationIsAlsoSource,
  InvalidNonce: () => InvalidNonce,
  InvalidXRPTag: () => InvalidXRPTag,
  LanguageNotFound: () => LanguageNotFound,
  LatestMCUInstalledError: () => LatestMCUInstalledError,
  LedgerAPI4xx: () => LedgerAPI4xx,
  LedgerAPI5xx: () => LedgerAPI5xx,
  LedgerAPIError: () => LedgerAPIError,
  LedgerAPIErrorWithMessage: () => LedgerAPIErrorWithMessage,
  LedgerAPINotAvailable: () => LedgerAPINotAvailable,
  LockedDeviceError: () => LockedDeviceError,
  MCUNotGenuineToDashboard: () => MCUNotGenuineToDashboard,
  ManagerAppAlreadyInstalledError: () => ManagerAppAlreadyInstalledError,
  ManagerAppDepInstallRequired: () => ManagerAppDepInstallRequired,
  ManagerAppDepUninstallRequired: () => ManagerAppDepUninstallRequired,
  ManagerAppRelyOnBTCError: () => ManagerAppRelyOnBTCError,
  ManagerDeviceLockedError: () => ManagerDeviceLockedError,
  ManagerFirmwareNotEnoughSpaceError: () => ManagerFirmwareNotEnoughSpaceError,
  ManagerNotEnoughSpaceError: () => ManagerNotEnoughSpaceError,
  ManagerUninstallBTCDep: () => ManagerUninstallBTCDep,
  MaxFeeTooLow: () => MaxFeeTooLow,
  NetworkDown: () => NetworkDown,
  NoAccessToCamera: () => NoAccessToCamera,
  NoAddressesFound: () => NoAddressesFound,
  NoDBPathGiven: () => NoDBPathGiven,
  NotEnoughBalance: () => NotEnoughBalance,
  NotEnoughBalanceBecauseDestinationNotCreated: () => NotEnoughBalanceBecauseDestinationNotCreated,
  NotEnoughBalanceInParentAccount: () => NotEnoughBalanceInParentAccount,
  NotEnoughBalanceToDelegate: () => NotEnoughBalanceToDelegate,
  NotEnoughGas: () => NotEnoughGas,
  NotEnoughGasSwap: () => NotEnoughGasSwap,
  NotEnoughSpendableBalance: () => NotEnoughSpendableBalance,
  NotSupportedLegacyAddress: () => NotSupportedLegacyAddress,
  OpReturnDataSizeLimit: () => OpReturnDataSizeLimit,
  PairingFailed: () => PairingFailed,
  PasswordIncorrectError: () => PasswordIncorrectError,
  PasswordsDontMatchError: () => PasswordsDontMatchError,
  PeerRemovedPairing: () => PeerRemovedPairing,
  PendingOperation: () => PendingOperation,
  PriorityFeeHigherThanMaxFee: () => PriorityFeeHigherThanMaxFee,
  PriorityFeeTooHigh: () => PriorityFeeTooHigh,
  PriorityFeeTooLow: () => PriorityFeeTooLow,
  RecipientRequired: () => RecipientRequired,
  RecommendSubAccountsToEmpty: () => RecommendSubAccountsToEmpty,
  RecommendUndelegation: () => RecommendUndelegation,
  StatusCodes: () => StatusCodes,
  SyncError: () => SyncError,
  TimeoutTagged: () => TimeoutTagged,
  TransactionHasBeenValidatedError: () => TransactionHasBeenValidatedError,
  TransportError: () => TransportError,
  TransportInterfaceNotAvailable: () => TransportInterfaceNotAvailable,
  TransportOpenUserCancelled: () => TransportOpenUserCancelled,
  TransportRaceCondition: () => TransportRaceCondition,
  TransportStatusError: () => TransportStatusError,
  TransportWebUSBGestureRequired: () => TransportWebUSBGestureRequired,
  UnavailableTezosOriginatedAccountReceive: () => UnavailableTezosOriginatedAccountReceive,
  UnavailableTezosOriginatedAccountSend: () => UnavailableTezosOriginatedAccountSend,
  UnexpectedBootloader: () => UnexpectedBootloader,
  UnknownMCU: () => UnknownMCU,
  UnresponsiveDeviceError: () => UnresponsiveDeviceError,
  UpdateFetchFileFail: () => UpdateFetchFileFail,
  UpdateIncorrectHash: () => UpdateIncorrectHash,
  UpdateIncorrectSig: () => UpdateIncorrectSig,
  UpdateYourApp: () => UpdateYourApp,
  UserRefusedAddress: () => UserRefusedAddress,
  UserRefusedAllowManager: () => UserRefusedAllowManager,
  UserRefusedDeviceNameChange: () => UserRefusedDeviceNameChange,
  UserRefusedFirmwareUpdate: () => UserRefusedFirmwareUpdate,
  UserRefusedOnDevice: () => UserRefusedOnDevice,
  WebsocketConnectionError: () => WebsocketConnectionError,
  WebsocketConnectionFailed: () => WebsocketConnectionFailed,
  WrongAppForCurrency: () => WrongAppForCurrency,
  WrongDeviceForAccount: () => WrongDeviceForAccount,
  addCustomErrorDeserializer: () => addCustomErrorDeserializer,
  createCustomErrorClass: () => createCustomErrorClass,
  deserializeError: () => deserializeError,
  getAltStatusMessage: () => getAltStatusMessage,
  serializeError: () => serializeError
});
function getAltStatusMessage(code) {
  switch (code) {
    case 26368:
      return "Incorrect length";
    case 26624:
      return "Missing critical parameter";
    case 27010:
      return "Security not satisfied (dongle locked or have invalid access rights)";
    case 27013:
      return "Condition of use not satisfied (denied by the user?)";
    case 27264:
      return "Invalid data received";
    case 27392:
      return "Invalid parameter received";
    case 21781:
      return "Locked device";
  }
  if (28416 <= code && code <= 28671) {
    return "Internal error, please report";
  }
}
function TransportStatusError(statusCode) {
  const statusText = Object.keys(StatusCodes).find((k) => StatusCodes[k] === statusCode) || "UNKNOWN_ERROR";
  const smsg = getAltStatusMessage(statusCode) || statusText;
  const statusCodeStr = statusCode.toString(16);
  const message = `Ledger device: ${smsg} (0x${statusCodeStr})`;
  if (statusCode === StatusCodes.LOCKED_DEVICE) {
    throw new LockedDeviceError(message);
  }
  this.name = "TransportStatusError";
  this.message = message;
  this.stack = new Error(message).stack;
  this.statusCode = statusCode;
  this.statusText = statusText;
}
var AccountNameRequiredError, AccountNotSupported, AmountRequired, BluetoothRequired, BtcUnmatchedApp, CantOpenDevice, CashAddrNotSupported, ClaimRewardsFeesWarning, CurrencyNotSupported, DeviceAppVerifyNotSupported, DeviceGenuineSocketEarlyClose, DeviceNotGenuineError, DeviceOnDashboardExpected, DeviceOnDashboardUnexpected, DeviceInOSUExpected, DeviceHalted, DeviceNameInvalid, DeviceSocketFail, DeviceSocketNoBulkStatus, LockedDeviceError, UnresponsiveDeviceError, DisconnectedDevice, DisconnectedDeviceDuringOperation, DeviceExtractOnboardingStateError, DeviceOnboardingStatePollingError, EnpointConfigError, EthAppPleaseEnableContractData, FeeEstimationFailed, FirmwareNotRecognized, HardResetFail, InvalidXRPTag, InvalidAddress, InvalidNonce, InvalidAddressBecauseDestinationIsAlsoSource, LatestMCUInstalledError, UnknownMCU, LedgerAPIError, LedgerAPIErrorWithMessage, LedgerAPINotAvailable, ManagerAppAlreadyInstalledError, ManagerAppRelyOnBTCError, ManagerAppDepInstallRequired, ManagerAppDepUninstallRequired, ManagerDeviceLockedError, ManagerFirmwareNotEnoughSpaceError, ManagerNotEnoughSpaceError, ManagerUninstallBTCDep, NetworkDown, NoAddressesFound, NotEnoughBalance, NotEnoughBalanceToDelegate, NotEnoughBalanceInParentAccount, NotEnoughSpendableBalance, NotEnoughBalanceBecauseDestinationNotCreated, NoAccessToCamera, NotEnoughGas, NotEnoughGasSwap, NotSupportedLegacyAddress, GasLessThanEstimate, PriorityFeeTooLow, PriorityFeeTooHigh, PriorityFeeHigherThanMaxFee, MaxFeeTooLow, PasswordsDontMatchError, PasswordIncorrectError, RecommendSubAccountsToEmpty, RecommendUndelegation, TimeoutTagged, UnexpectedBootloader, MCUNotGenuineToDashboard, RecipientRequired, UnavailableTezosOriginatedAccountReceive, UnavailableTezosOriginatedAccountSend, UpdateFetchFileFail, UpdateIncorrectHash, UpdateIncorrectSig, UpdateYourApp, UserRefusedDeviceNameChange, UserRefusedAddress, UserRefusedFirmwareUpdate, UserRefusedAllowManager, UserRefusedOnDevice, TransportOpenUserCancelled, TransportInterfaceNotAvailable, TransportRaceCondition, TransportWebUSBGestureRequired, TransactionHasBeenValidatedError, DeviceShouldStayInApp, WebsocketConnectionError, WebsocketConnectionFailed, WrongDeviceForAccount, WrongAppForCurrency, ETHAddressNonEIP, CantScanQRCode, FeeNotLoaded, FeeRequired, FeeTooHigh, PendingOperation, SyncError, PairingFailed, PeerRemovedPairing, GenuineCheckFailed, LedgerAPI4xx, LedgerAPI5xx, FirmwareOrAppUpdateRequired, OpReturnDataSizeLimit, DustLimit, LanguageNotFound, NoDBPathGiven, DBWrongPassword, DBNotReset, HwTransportErrorType, HwTransportError, TransportError, StatusCodes;
var init_lib_es = __esm({
  "node_modules/@ledgerhq/errors/lib-es/index.js"() {
    init_helpers();
    AccountNameRequiredError = createCustomErrorClass("AccountNameRequired");
    AccountNotSupported = createCustomErrorClass("AccountNotSupported");
    AmountRequired = createCustomErrorClass("AmountRequired");
    BluetoothRequired = createCustomErrorClass("BluetoothRequired");
    BtcUnmatchedApp = createCustomErrorClass("BtcUnmatchedApp");
    CantOpenDevice = createCustomErrorClass("CantOpenDevice");
    CashAddrNotSupported = createCustomErrorClass("CashAddrNotSupported");
    ClaimRewardsFeesWarning = createCustomErrorClass("ClaimRewardsFeesWarning");
    CurrencyNotSupported = createCustomErrorClass("CurrencyNotSupported");
    DeviceAppVerifyNotSupported = createCustomErrorClass("DeviceAppVerifyNotSupported");
    DeviceGenuineSocketEarlyClose = createCustomErrorClass("DeviceGenuineSocketEarlyClose");
    DeviceNotGenuineError = createCustomErrorClass("DeviceNotGenuine");
    DeviceOnDashboardExpected = createCustomErrorClass("DeviceOnDashboardExpected");
    DeviceOnDashboardUnexpected = createCustomErrorClass("DeviceOnDashboardUnexpected");
    DeviceInOSUExpected = createCustomErrorClass("DeviceInOSUExpected");
    DeviceHalted = createCustomErrorClass("DeviceHalted");
    DeviceNameInvalid = createCustomErrorClass("DeviceNameInvalid");
    DeviceSocketFail = createCustomErrorClass("DeviceSocketFail");
    DeviceSocketNoBulkStatus = createCustomErrorClass("DeviceSocketNoBulkStatus");
    LockedDeviceError = createCustomErrorClass("LockedDeviceError");
    UnresponsiveDeviceError = createCustomErrorClass("UnresponsiveDeviceError");
    DisconnectedDevice = createCustomErrorClass("DisconnectedDevice");
    DisconnectedDeviceDuringOperation = createCustomErrorClass("DisconnectedDeviceDuringOperation");
    DeviceExtractOnboardingStateError = createCustomErrorClass("DeviceExtractOnboardingStateError");
    DeviceOnboardingStatePollingError = createCustomErrorClass("DeviceOnboardingStatePollingError");
    EnpointConfigError = createCustomErrorClass("EnpointConfig");
    EthAppPleaseEnableContractData = createCustomErrorClass("EthAppPleaseEnableContractData");
    FeeEstimationFailed = createCustomErrorClass("FeeEstimationFailed");
    FirmwareNotRecognized = createCustomErrorClass("FirmwareNotRecognized");
    HardResetFail = createCustomErrorClass("HardResetFail");
    InvalidXRPTag = createCustomErrorClass("InvalidXRPTag");
    InvalidAddress = createCustomErrorClass("InvalidAddress");
    InvalidNonce = createCustomErrorClass("InvalidNonce");
    InvalidAddressBecauseDestinationIsAlsoSource = createCustomErrorClass("InvalidAddressBecauseDestinationIsAlsoSource");
    LatestMCUInstalledError = createCustomErrorClass("LatestMCUInstalledError");
    UnknownMCU = createCustomErrorClass("UnknownMCU");
    LedgerAPIError = createCustomErrorClass("LedgerAPIError");
    LedgerAPIErrorWithMessage = createCustomErrorClass("LedgerAPIErrorWithMessage");
    LedgerAPINotAvailable = createCustomErrorClass("LedgerAPINotAvailable");
    ManagerAppAlreadyInstalledError = createCustomErrorClass("ManagerAppAlreadyInstalled");
    ManagerAppRelyOnBTCError = createCustomErrorClass("ManagerAppRelyOnBTC");
    ManagerAppDepInstallRequired = createCustomErrorClass("ManagerAppDepInstallRequired");
    ManagerAppDepUninstallRequired = createCustomErrorClass("ManagerAppDepUninstallRequired");
    ManagerDeviceLockedError = createCustomErrorClass("ManagerDeviceLocked");
    ManagerFirmwareNotEnoughSpaceError = createCustomErrorClass("ManagerFirmwareNotEnoughSpace");
    ManagerNotEnoughSpaceError = createCustomErrorClass("ManagerNotEnoughSpace");
    ManagerUninstallBTCDep = createCustomErrorClass("ManagerUninstallBTCDep");
    NetworkDown = createCustomErrorClass("NetworkDown");
    NoAddressesFound = createCustomErrorClass("NoAddressesFound");
    NotEnoughBalance = createCustomErrorClass("NotEnoughBalance");
    NotEnoughBalanceToDelegate = createCustomErrorClass("NotEnoughBalanceToDelegate");
    NotEnoughBalanceInParentAccount = createCustomErrorClass("NotEnoughBalanceInParentAccount");
    NotEnoughSpendableBalance = createCustomErrorClass("NotEnoughSpendableBalance");
    NotEnoughBalanceBecauseDestinationNotCreated = createCustomErrorClass("NotEnoughBalanceBecauseDestinationNotCreated");
    NoAccessToCamera = createCustomErrorClass("NoAccessToCamera");
    NotEnoughGas = createCustomErrorClass("NotEnoughGas");
    NotEnoughGasSwap = createCustomErrorClass("NotEnoughGasSwap");
    NotSupportedLegacyAddress = createCustomErrorClass("NotSupportedLegacyAddress");
    GasLessThanEstimate = createCustomErrorClass("GasLessThanEstimate");
    PriorityFeeTooLow = createCustomErrorClass("PriorityFeeTooLow");
    PriorityFeeTooHigh = createCustomErrorClass("PriorityFeeTooHigh");
    PriorityFeeHigherThanMaxFee = createCustomErrorClass("PriorityFeeHigherThanMaxFee");
    MaxFeeTooLow = createCustomErrorClass("MaxFeeTooLow");
    PasswordsDontMatchError = createCustomErrorClass("PasswordsDontMatch");
    PasswordIncorrectError = createCustomErrorClass("PasswordIncorrect");
    RecommendSubAccountsToEmpty = createCustomErrorClass("RecommendSubAccountsToEmpty");
    RecommendUndelegation = createCustomErrorClass("RecommendUndelegation");
    TimeoutTagged = createCustomErrorClass("TimeoutTagged");
    UnexpectedBootloader = createCustomErrorClass("UnexpectedBootloader");
    MCUNotGenuineToDashboard = createCustomErrorClass("MCUNotGenuineToDashboard");
    RecipientRequired = createCustomErrorClass("RecipientRequired");
    UnavailableTezosOriginatedAccountReceive = createCustomErrorClass("UnavailableTezosOriginatedAccountReceive");
    UnavailableTezosOriginatedAccountSend = createCustomErrorClass("UnavailableTezosOriginatedAccountSend");
    UpdateFetchFileFail = createCustomErrorClass("UpdateFetchFileFail");
    UpdateIncorrectHash = createCustomErrorClass("UpdateIncorrectHash");
    UpdateIncorrectSig = createCustomErrorClass("UpdateIncorrectSig");
    UpdateYourApp = createCustomErrorClass("UpdateYourApp");
    UserRefusedDeviceNameChange = createCustomErrorClass("UserRefusedDeviceNameChange");
    UserRefusedAddress = createCustomErrorClass("UserRefusedAddress");
    UserRefusedFirmwareUpdate = createCustomErrorClass("UserRefusedFirmwareUpdate");
    UserRefusedAllowManager = createCustomErrorClass("UserRefusedAllowManager");
    UserRefusedOnDevice = createCustomErrorClass("UserRefusedOnDevice");
    TransportOpenUserCancelled = createCustomErrorClass("TransportOpenUserCancelled");
    TransportInterfaceNotAvailable = createCustomErrorClass("TransportInterfaceNotAvailable");
    TransportRaceCondition = createCustomErrorClass("TransportRaceCondition");
    TransportWebUSBGestureRequired = createCustomErrorClass("TransportWebUSBGestureRequired");
    TransactionHasBeenValidatedError = createCustomErrorClass("TransactionHasBeenValidatedError");
    DeviceShouldStayInApp = createCustomErrorClass("DeviceShouldStayInApp");
    WebsocketConnectionError = createCustomErrorClass("WebsocketConnectionError");
    WebsocketConnectionFailed = createCustomErrorClass("WebsocketConnectionFailed");
    WrongDeviceForAccount = createCustomErrorClass("WrongDeviceForAccount");
    WrongAppForCurrency = createCustomErrorClass("WrongAppForCurrency");
    ETHAddressNonEIP = createCustomErrorClass("ETHAddressNonEIP");
    CantScanQRCode = createCustomErrorClass("CantScanQRCode");
    FeeNotLoaded = createCustomErrorClass("FeeNotLoaded");
    FeeRequired = createCustomErrorClass("FeeRequired");
    FeeTooHigh = createCustomErrorClass("FeeTooHigh");
    PendingOperation = createCustomErrorClass("PendingOperation");
    SyncError = createCustomErrorClass("SyncError");
    PairingFailed = createCustomErrorClass("PairingFailed");
    PeerRemovedPairing = createCustomErrorClass("PeerRemovedPairing");
    GenuineCheckFailed = createCustomErrorClass("GenuineCheckFailed");
    LedgerAPI4xx = createCustomErrorClass("LedgerAPI4xx");
    LedgerAPI5xx = createCustomErrorClass("LedgerAPI5xx");
    FirmwareOrAppUpdateRequired = createCustomErrorClass("FirmwareOrAppUpdateRequired");
    OpReturnDataSizeLimit = createCustomErrorClass("OpReturnSizeLimit");
    DustLimit = createCustomErrorClass("DustLimit");
    LanguageNotFound = createCustomErrorClass("LanguageNotFound");
    NoDBPathGiven = createCustomErrorClass("NoDBPathGiven");
    DBWrongPassword = createCustomErrorClass("DBWrongPassword");
    DBNotReset = createCustomErrorClass("DBNotReset");
    (function(HwTransportErrorType2) {
      HwTransportErrorType2["Unknown"] = "Unknown";
      HwTransportErrorType2["LocationServicesDisabled"] = "LocationServicesDisabled";
      HwTransportErrorType2["LocationServicesUnauthorized"] = "LocationServicesUnauthorized";
      HwTransportErrorType2["BluetoothScanStartFailed"] = "BluetoothScanStartFailed";
    })(HwTransportErrorType || (HwTransportErrorType = {}));
    HwTransportError = class _HwTransportError extends Error {
      constructor(type, message) {
        super(message);
        this.name = "HwTransportError";
        this.type = type;
        Object.setPrototypeOf(this, _HwTransportError.prototype);
      }
    };
    TransportError = class extends Error {
      constructor(message, id) {
        const name = "TransportError";
        super(message || name);
        this.name = name;
        this.message = message;
        this.stack = new Error(message).stack;
        this.id = id;
      }
    };
    addCustomErrorDeserializer("TransportError", (e) => new TransportError(e.message, e.id));
    StatusCodes = {
      ACCESS_CONDITION_NOT_FULFILLED: 38916,
      ALGORITHM_NOT_SUPPORTED: 38020,
      CLA_NOT_SUPPORTED: 28160,
      CODE_BLOCKED: 38976,
      CODE_NOT_INITIALIZED: 38914,
      COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 27009,
      CONDITIONS_OF_USE_NOT_SATISFIED: 27013,
      CONTRADICTION_INVALIDATION: 38928,
      CONTRADICTION_SECRET_CODE_STATUS: 38920,
      CUSTOM_IMAGE_BOOTLOADER: 26159,
      CUSTOM_IMAGE_EMPTY: 26158,
      FILE_ALREADY_EXISTS: 27273,
      FILE_NOT_FOUND: 37892,
      GP_AUTH_FAILED: 25344,
      HALTED: 28586,
      INCONSISTENT_FILE: 37896,
      INCORRECT_DATA: 27264,
      INCORRECT_LENGTH: 26368,
      INCORRECT_P1_P2: 27392,
      INS_NOT_SUPPORTED: 27904,
      DEVICE_NOT_ONBOARDED: 27911,
      DEVICE_NOT_ONBOARDED_2: 26129,
      INVALID_KCV: 38021,
      INVALID_OFFSET: 37890,
      LICENSING: 28482,
      LOCKED_DEVICE: 21781,
      MAX_VALUE_REACHED: 38992,
      MEMORY_PROBLEM: 37440,
      MISSING_CRITICAL_PARAMETER: 26624,
      NO_EF_SELECTED: 37888,
      NOT_ENOUGH_MEMORY_SPACE: 27268,
      OK: 36864,
      PIN_REMAINING_ATTEMPTS: 25536,
      REFERENCED_DATA_NOT_FOUND: 27272,
      SECURITY_STATUS_NOT_SATISFIED: 27010,
      TECHNICAL_PROBLEM: 28416,
      UNKNOWN_APDU: 27906,
      USER_REFUSED_ON_DEVICE: 21761,
      NOT_ENOUGH_SPACE: 20738
    };
    TransportStatusError.prototype = new Error();
    addCustomErrorDeserializer("TransportStatusError", (e) => new TransportStatusError(e.statusCode));
  }
});

export {
  DisconnectedDevice,
  DisconnectedDeviceDuringOperation,
  TransportOpenUserCancelled,
  TransportRaceCondition,
  TransportError,
  StatusCodes,
  TransportStatusError,
  lib_es_exports,
  init_lib_es
};
//# sourceMappingURL=chunk-Z7HOM2UX.js.map
