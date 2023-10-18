import {
  require_lru_cache
} from "./chunk-MZFZXF4O.js";
import {
  DisconnectedDevice,
  DisconnectedDeviceDuringOperation,
  StatusCodes,
  TransportError,
  TransportOpenUserCancelled,
  TransportRaceCondition,
  TransportStatusError,
  init_lib_es,
  lib_es_exports
} from "./chunk-Z7HOM2UX.js";
import {
  require_events
} from "./chunk-IN5HQNY7.js";
import {
  __commonJS,
  __toCommonJS,
  __toESM
} from "./chunk-W7S2ME4R.js";

// node_modules/@ledgerhq/devices/lib/hid-framing.js
var require_hid_framing = __commonJS({
  "node_modules/@ledgerhq/devices/lib/hid-framing.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var errors_1 = (init_lib_es(), __toCommonJS(lib_es_exports));
    var Tag = 5;
    function asUInt16BE(value) {
      var b = Buffer.alloc(2);
      b.writeUInt16BE(value, 0);
      return b;
    }
    var initialAcc = {
      data: Buffer.alloc(0),
      dataLength: 0,
      sequence: 0
    };
    var createHIDframing = function(channel, packetSize) {
      return {
        makeBlocks: function(apdu) {
          var data = Buffer.concat([asUInt16BE(apdu.length), apdu]);
          var blockSize = packetSize - 5;
          var nbBlocks = Math.ceil(data.length / blockSize);
          data = Buffer.concat([
            data,
            Buffer.alloc(nbBlocks * blockSize - data.length + 1).fill(0)
          ]);
          var blocks = [];
          for (var i = 0; i < nbBlocks; i++) {
            var head = Buffer.alloc(5);
            head.writeUInt16BE(channel, 0);
            head.writeUInt8(Tag, 2);
            head.writeUInt16BE(i, 3);
            var chunk = data.slice(i * blockSize, (i + 1) * blockSize);
            blocks.push(Buffer.concat([head, chunk]));
          }
          return blocks;
        },
        reduceResponse: function(acc, chunk) {
          var _a2 = acc || initialAcc, data = _a2.data, dataLength = _a2.dataLength, sequence = _a2.sequence;
          if (chunk.readUInt16BE(0) !== channel) {
            throw new errors_1.TransportError("Invalid channel", "InvalidChannel");
          }
          if (chunk.readUInt8(2) !== Tag) {
            throw new errors_1.TransportError("Invalid tag", "InvalidTag");
          }
          if (chunk.readUInt16BE(3) !== sequence) {
            throw new errors_1.TransportError("Invalid sequence", "InvalidSequence");
          }
          if (!acc) {
            dataLength = chunk.readUInt16BE(5);
          }
          sequence++;
          var chunkData = chunk.slice(acc ? 5 : 7);
          data = Buffer.concat([data, chunkData]);
          if (data.length > dataLength) {
            data = data.slice(0, dataLength);
          }
          return {
            data,
            dataLength,
            sequence
          };
        },
        getReducedResult: function(acc) {
          if (acc && acc.dataLength === acc.data.length) {
            return acc.data;
          }
        }
      };
    };
    exports["default"] = createHIDframing;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/internal/constants.js"(exports, module) {
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/internal/debug.js"(exports, module) {
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module.exports = debug;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/internal/re.js"(exports, module) {
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports = module.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/internal/parse-options.js"(exports, module) {
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module.exports = parseOptions;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/internal/identifiers.js"(exports, module) {
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/classes/semver.js"(exports, module) {
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof _SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id2) => {
            if (/^[0-9]+$/.test(id2)) {
              const num = +id2;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id2;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (!identifier && identifierBase === false) {
              throw new Error("invalid increment argument: identifier is empty");
            }
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module.exports = SemVer;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/parse.js"(exports, module) {
    var SemVer = require_semver();
    var parse = (version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module.exports = parse;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/valid.js"(exports, module) {
    var parse = require_parse();
    var valid = (version, options) => {
      const v = parse(version, options);
      return v ? v.version : null;
    };
    module.exports = valid;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/clean.js"(exports, module) {
    var parse = require_parse();
    var clean = (version, options) => {
      const s = parse(version.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    };
    module.exports = clean;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/inc.js"(exports, module) {
    var SemVer = require_semver();
    var inc = (version, release, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version instanceof SemVer ? version.version : version,
          options
        ).inc(release, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    };
    module.exports = inc;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/diff.js
var require_diff = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/diff.js"(exports, module) {
    var parse = require_parse();
    var diff = (version1, version2) => {
      const v1 = parse(version1, null, true);
      const v2 = parse(version2, null, true);
      const comparison = v1.compare(v2);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v2;
      const lowVersion = v1Higher ? v2 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        if (!lowVersion.patch && !lowVersion.minor) {
          return "major";
        }
        if (highVersion.patch) {
          return "patch";
        }
        if (highVersion.minor) {
          return "minor";
        }
        return "major";
      }
      const prefix = highHasPre ? "pre" : "";
      if (v1.major !== v2.major) {
        return prefix + "major";
      }
      if (v1.minor !== v2.minor) {
        return prefix + "minor";
      }
      if (v1.patch !== v2.patch) {
        return prefix + "patch";
      }
      return "prerelease";
    };
    module.exports = diff;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/major.js
var require_major = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/major.js"(exports, module) {
    var SemVer = require_semver();
    var major = (a, loose) => new SemVer(a, loose).major;
    module.exports = major;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/minor.js"(exports, module) {
    var SemVer = require_semver();
    var minor = (a, loose) => new SemVer(a, loose).minor;
    module.exports = minor;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/patch.js"(exports, module) {
    var SemVer = require_semver();
    var patch = (a, loose) => new SemVer(a, loose).patch;
    module.exports = patch;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/prerelease.js"(exports, module) {
    var parse = require_parse();
    var prerelease = (version, options) => {
      const parsed = parse(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module.exports = prerelease;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/compare.js"(exports, module) {
    var SemVer = require_semver();
    var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module.exports = compare;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/rcompare.js"(exports, module) {
    var compare = require_compare();
    var rcompare = (a, b, loose) => compare(b, a, loose);
    module.exports = rcompare;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/compare-loose.js"(exports, module) {
    var compare = require_compare();
    var compareLoose = (a, b) => compare(a, b, true);
    module.exports = compareLoose;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/compare-build.js"(exports, module) {
    var SemVer = require_semver();
    var compareBuild = (a, b, loose) => {
      const versionA = new SemVer(a, loose);
      const versionB = new SemVer(b, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module.exports = compareBuild;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/sort.js"(exports, module) {
    var compareBuild = require_compare_build();
    var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
    module.exports = sort;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/rsort.js"(exports, module) {
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
    module.exports = rsort;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/gt.js"(exports, module) {
    var compare = require_compare();
    var gt = (a, b, loose) => compare(a, b, loose) > 0;
    module.exports = gt;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/lt.js"(exports, module) {
    var compare = require_compare();
    var lt = (a, b, loose) => compare(a, b, loose) < 0;
    module.exports = lt;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/eq.js"(exports, module) {
    var compare = require_compare();
    var eq = (a, b, loose) => compare(a, b, loose) === 0;
    module.exports = eq;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/neq.js"(exports, module) {
    var compare = require_compare();
    var neq = (a, b, loose) => compare(a, b, loose) !== 0;
    module.exports = neq;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/gte.js"(exports, module) {
    var compare = require_compare();
    var gte = (a, b, loose) => compare(a, b, loose) >= 0;
    module.exports = gte;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/lte.js"(exports, module) {
    var compare = require_compare();
    var lte = (a, b, loose) => compare(a, b, loose) <= 0;
    module.exports = lte;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/cmp.js"(exports, module) {
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module.exports = cmp;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/coerce.js"(exports, module) {
    var SemVer = require_semver();
    var parse = require_parse();
    var { safeRe: re, t } = require_re();
    var coerce = (version, options) => {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === "number") {
        version = String(version);
      }
      if (typeof version !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version.match(re[t.COERCE]);
      } else {
        let next;
        while ((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
        }
        re[t.COERCERTL].lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      return parse(`${match[2]}.${match[3] || "0"}.${match[4] || "0"}`, options);
    };
    module.exports = coerce;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/classes/range.js"(exports, module) {
    var Range = class _Range {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.format();
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().split(/\s+/).join(" ");
        this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.format();
      }
      format() {
        this.range = this.set.map((comps) => comps.join(" ").trim()).join("||").trim();
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module.exports = Range;
    var LRU = require_lru_cache();
    var cache = new LRU({ max: 1e3 });
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var isNullSet = (c) => c.value === "<0.0.0-0";
    var isAny = (c) => c.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id2) => !id2 || id2.toLowerCase() === "x" || id2 === "*";
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set, version, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug(set[i].semver);
          if (set[i].semver === Comparator.ANY) {
            continue;
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/classes/comparator.js"(exports, module) {
    var ANY = Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/functions/satisfies.js"(exports, module) {
    var Range = require_range();
    var satisfies = (version, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module.exports = satisfies;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/ranges/to-comparators.js"(exports, module) {
    var Range = require_range();
    var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
    module.exports = toComparators;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/ranges/max-satisfying.js"(exports, module) {
    var SemVer = require_semver();
    var Range = require_range();
    var maxSatisfying = (versions, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!max || maxSV.compare(v) === -1) {
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    };
    module.exports = maxSatisfying;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/ranges/min-satisfying.js"(exports, module) {
    var SemVer = require_semver();
    var Range = require_range();
    var minSatisfying = (versions, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!min || minSV.compare(v) === 1) {
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    };
    module.exports = minSatisfying;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/ranges/min-version.js"(exports, module) {
    var SemVer = require_semver();
    var Range = require_range();
    var gt = require_gt();
    var minVersion = (range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module.exports = minVersion;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/ranges/valid.js"(exports, module) {
    var Range = require_range();
    var validRange = (range, options) => {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    };
    module.exports = validRange;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/ranges/outside.js"(exports, module) {
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range();
    var satisfies = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = (version, range, hilo, options) => {
      version = new SemVer(version, options);
      range = new Range(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version, range, options)) {
        return false;
      }
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    };
    module.exports = outside;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/ranges/gtr.js"(exports, module) {
    var outside = require_outside();
    var gtr = (version, range, options) => outside(version, range, ">", options);
    module.exports = gtr;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/ranges/ltr.js"(exports, module) {
    var outside = require_outside();
    var ltr = (version, range, options) => outside(version, range, "<", options);
    module.exports = ltr;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/ranges/intersects.js"(exports, module) {
    var Range = require_range();
    var intersects = (r1, r2, options) => {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2, options);
    };
    module.exports = intersects;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/ranges/simplify.js"(exports, module) {
    var satisfies = require_satisfies();
    var compare = require_compare();
    module.exports = (versions, range, options) => {
      const set = [];
      let first = null;
      let prev = null;
      const v = versions.sort((a, b) => compare(a, b, options));
      for (const version of v) {
        const included = satisfies(version, range, options);
        if (included) {
          prev = version;
          if (!first) {
            first = version;
          }
        } else {
          if (prev) {
            set.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/ranges/subset.js"(exports, module) {
    var Range = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies = require_satisfies();
    var compare = require_compare();
    var subset = (sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;
      OUTER:
        for (const simpleSub of sub.set) {
          for (const simpleDom of dom.set) {
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
              continue OUTER;
            }
          }
          if (sawNonNull) {
            return false;
          }
        }
      return true;
    };
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = (sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c of sub) {
        if (c.operator === ">" || c.operator === ">=") {
          gt = higherGT(gt, c, options);
        } else if (c.operator === "<" || c.operator === "<=") {
          lt = lowerLT(lt, c, options);
        } else {
          eqSet.add(c.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq of eqSet) {
        if (gt && !satisfies(eq, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
          return null;
        }
        for (const c of dom) {
          if (!satisfies(eq, String(c), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c of dom) {
        hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
        hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c.operator === ">" || c.operator === ">=") {
            higher = higherGT(gt, c, options);
            if (higher === c && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c.operator === "<" || c.operator === "<=") {
            lower = lowerLT(lt, c, options);
            if (lower === c && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
            return false;
          }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };
    var higherGT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
    };
    var lowerLT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
    };
    module.exports = subset;
  }
});

// node_modules/@ledgerhq/devices/node_modules/semver/index.js
var require_semver2 = __commonJS({
  "node_modules/@ledgerhq/devices/node_modules/semver/index.js"(exports, module) {
    var internalRe = require_re();
    var constants = require_constants();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse = require_parse();
    var valid = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq = require_eq();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce = require_coerce();
    var Comparator = require_comparator();
    var Range = require_range();
    var satisfies = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module.exports = {
      parse,
      valid,
      clean,
      inc,
      diff,
      major,
      minor,
      patch,
      prerelease,
      compare,
      rcompare,
      compareLoose,
      compareBuild,
      sort,
      rsort,
      gt,
      lt,
      eq,
      neq,
      gte,
      lte,
      cmp,
      coerce,
      Comparator,
      Range,
      satisfies,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});

// node_modules/@ledgerhq/hw-transport-webhid/node_modules/@ledgerhq/hw-transport/lib-es/Transport.js
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
var Transport = class {
  constructor() {
    this.exchangeTimeout = 3e4;
    this.unresponsiveTimeout = 15e3;
    this.deviceModel = null;
    this._events = new import_events.default();
    this.send = (cla, ins, p1, p2, data = Buffer.alloc(0), statusList = [StatusCodes.OK]) => __awaiter(this, void 0, void 0, function* () {
      if (data.length >= 256) {
        throw new TransportError("data.length exceed 256 bytes limit. Got: " + data.length, "DataLengthTooBig");
      }
      const response = yield this.exchange(Buffer.concat([Buffer.from([cla, ins, p1, p2]), Buffer.from([data.length]), data]));
      const sw = response.readUInt16BE(response.length - 2);
      if (!statusList.some((s) => s === sw)) {
        throw new TransportStatusError(sw);
      }
      return response;
    });
    this.exchangeAtomicImpl = (f) => __awaiter(this, void 0, void 0, function* () {
      if (this.exchangeBusyPromise) {
        throw new TransportRaceCondition("An action was already pending on the Ledger device. Please deny or reconnect.");
      }
      let resolveBusy;
      const busyPromise = new Promise((r) => {
        resolveBusy = r;
      });
      this.exchangeBusyPromise = busyPromise;
      let unresponsiveReached = false;
      const timeout = setTimeout(() => {
        unresponsiveReached = true;
        this.emit("unresponsive");
      }, this.unresponsiveTimeout);
      try {
        const res = yield f();
        if (unresponsiveReached) {
          this.emit("responsive");
        }
        return res;
      } finally {
        clearTimeout(timeout);
        if (resolveBusy)
          resolveBusy();
        this.exchangeBusyPromise = null;
      }
    });
    this._appAPIlock = null;
  }
  /**
   * Send data to the device using a low level API.
   * It's recommended to use the "send" method for a higher level API.
   * @param {Buffer} apdu - The data to send.
   * @returns {Promise<Buffer>} A promise that resolves with the response data from the device.
   */
  exchange(_apdu) {
    throw new Error("exchange not implemented");
  }
  /**
   * Send apdus in batch to the device using a low level API.
   * The default implementation is to call exchange for each apdu.
   * @param {Array<Buffer>} apdus - array of apdus to send.
   * @param {Observer<Buffer>} observer - an observer that will receive the response of each apdu.
   * @returns {Subscription} A Subscription object on which you can call ".unsubscribe()" to stop sending apdus.
   */
  exchangeBulk(apdus, observer) {
    let unsubscribed = false;
    const unsubscribe = () => {
      unsubscribed = true;
    };
    const main = () => __awaiter(this, void 0, void 0, function* () {
      if (unsubscribed)
        return;
      for (const apdu of apdus) {
        const r = yield this.exchange(apdu);
        if (unsubscribed)
          return;
        const status = r.readUInt16BE(r.length - 2);
        if (status !== StatusCodes.OK) {
          throw new TransportStatusError(status);
        }
        observer.next(r);
      }
    });
    main().then(() => !unsubscribed && observer.complete(), (e) => !unsubscribed && observer.error(e));
    return { unsubscribe };
  }
  /**
   * Set the "scramble key" for the next data exchanges with the device.
   * Each app can have a different scramble key and it is set internally during instantiation.
   * @param {string} key - The scramble key to set.
   * @deprecated This method is no longer needed for modern transports and should be migrated away from.
   */
  setScrambleKey(_key) {
  }
  /**
   * Close the connection with the device.
   * @returns {Promise<void>} A promise that resolves when the transport is closed.
   */
  close() {
    return Promise.resolve();
  }
  /**
   * Listen for an event on the transport instance.
   * Transport implementations may have specific events. Common events include:
   * "disconnect" : triggered when the transport is disconnected.
   * @param {string} eventName - The name of the event to listen for.
   * @param {(...args: Array<any>) => any} cb - The callback function to be invoked when the event occurs.
   */
  on(eventName, cb) {
    this._events.on(eventName, cb);
  }
  /**
   * Stop listening to an event on an instance of transport.
   */
  off(eventName, cb) {
    this._events.removeListener(eventName, cb);
  }
  emit(event, ...args) {
    this._events.emit(event, ...args);
  }
  /**
   * Enable or not logs of the binary exchange
   */
  setDebugMode() {
    console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.");
  }
  /**
   * Set a timeout (in milliseconds) for the exchange call. Only some transport might implement it. (e.g. U2F)
   */
  setExchangeTimeout(exchangeTimeout) {
    this.exchangeTimeout = exchangeTimeout;
  }
  /**
   * Define the delay before emitting "unresponsive" on an exchange that does not respond
   */
  setExchangeUnresponsiveTimeout(unresponsiveTimeout) {
    this.unresponsiveTimeout = unresponsiveTimeout;
  }
  /**
   * create() allows to open the first descriptor available or
   * throw if there is none or if timeout is reached.
   * This is a light helper, alternative to using listen() and open() (that you may need for any more advanced usecase)
   * @example
  TransportFoo.create().then(transport => ...)
   */
  static create(openTimeout = 3e3, listenTimeout) {
    return new Promise((resolve, reject) => {
      let found = false;
      const sub = this.listen({
        next: (e) => {
          found = true;
          if (sub)
            sub.unsubscribe();
          if (listenTimeoutId)
            clearTimeout(listenTimeoutId);
          this.open(e.descriptor, openTimeout).then(resolve, reject);
        },
        error: (e) => {
          if (listenTimeoutId)
            clearTimeout(listenTimeoutId);
          reject(e);
        },
        complete: () => {
          if (listenTimeoutId)
            clearTimeout(listenTimeoutId);
          if (!found) {
            reject(new TransportError(this.ErrorMessage_NoDeviceFound, "NoDeviceFound"));
          }
        }
      });
      const listenTimeoutId = listenTimeout ? setTimeout(() => {
        sub.unsubscribe();
        reject(new TransportError(this.ErrorMessage_ListenTimeout, "ListenTimeout"));
      }, listenTimeout) : null;
    });
  }
  decorateAppAPIMethods(self, methods, scrambleKey) {
    for (const methodName of methods) {
      self[methodName] = this.decorateAppAPIMethod(methodName, self[methodName], self, scrambleKey);
    }
  }
  decorateAppAPIMethod(methodName, f, ctx, scrambleKey) {
    return (...args) => __awaiter(this, void 0, void 0, function* () {
      const { _appAPIlock } = this;
      if (_appAPIlock) {
        return Promise.reject(new TransportError("Ledger Device is busy (lock " + _appAPIlock + ")", "TransportLocked"));
      }
      try {
        this._appAPIlock = methodName;
        this.setScrambleKey(scrambleKey);
        return yield f.apply(ctx, args);
      } finally {
        this._appAPIlock = null;
      }
    });
  }
};
Transport.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)";
Transport.ErrorMessage_NoDeviceFound = "No Ledger device found";
var Transport_default = Transport;

// node_modules/@ledgerhq/hw-transport-webhid/lib-es/TransportWebHID.js
var import_hid_framing = __toESM(require_hid_framing());

// node_modules/@ledgerhq/devices/lib-es/index.js
var import_semver = __toESM(require_semver2());
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
var _a;
var DeviceModelId;
(function(DeviceModelId2) {
  DeviceModelId2["blue"] = "blue";
  DeviceModelId2["nanoS"] = "nanoS";
  DeviceModelId2["nanoSP"] = "nanoSP";
  DeviceModelId2["nanoX"] = "nanoX";
  DeviceModelId2["nanoFTS"] = "nanoFTS";
})(DeviceModelId || (DeviceModelId = {}));
var devices = (_a = {}, _a[DeviceModelId.blue] = {
  id: DeviceModelId.blue,
  productName: "Ledger Blue",
  productIdMM: 0,
  legacyUsbProductId: 0,
  usbOnly: true,
  memorySize: 480 * 1024,
  masks: [822083584, 822149120],
  getBlockSize: function(_firwareVersion) {
    return 4 * 1024;
  }
}, _a[DeviceModelId.nanoS] = {
  id: DeviceModelId.nanoS,
  productName: "Ledger Nano S",
  productIdMM: 16,
  legacyUsbProductId: 1,
  usbOnly: true,
  memorySize: 320 * 1024,
  masks: [823132160],
  getBlockSize: function(firmwareVersion) {
    var _a2;
    return import_semver.default.lt((_a2 = import_semver.default.coerce(firmwareVersion)) !== null && _a2 !== void 0 ? _a2 : "", "2.0.0") ? 4 * 1024 : 2 * 1024;
  }
}, _a[DeviceModelId.nanoSP] = {
  id: DeviceModelId.nanoSP,
  productName: "Ledger Nano S Plus",
  productIdMM: 80,
  legacyUsbProductId: 5,
  usbOnly: true,
  memorySize: 1536 * 1024,
  masks: [856686592],
  getBlockSize: function(_firmwareVersion) {
    return 32;
  }
}, _a[DeviceModelId.nanoX] = {
  id: DeviceModelId.nanoX,
  productName: "Ledger Nano X",
  productIdMM: 64,
  legacyUsbProductId: 4,
  usbOnly: false,
  memorySize: 2 * 1024 * 1024,
  masks: [855638016],
  getBlockSize: function(_firwareVersion) {
    return 4 * 1024;
  },
  bluetoothSpec: [
    {
      serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
      notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
      writeUuid: "13d63400-2c97-0004-0002-4c6564676572",
      writeCmdUuid: "13d63400-2c97-0004-0003-4c6564676572"
    }
  ]
}, _a[DeviceModelId.nanoFTS] = {
  id: DeviceModelId.nanoFTS,
  productName: "Ledger Nano FTS",
  productIdMM: 96,
  legacyUsbProductId: 6,
  usbOnly: false,
  memorySize: 2 * 1024 * 1024,
  masks: [857735168],
  getBlockSize: function(_firwareVersion) {
    return 4 * 1024;
  },
  bluetoothSpec: [
    {
      serviceUuid: "13d63400-2c97-6004-0000-4c6564676572",
      notifyUuid: "13d63400-2c97-6004-0001-4c6564676572",
      writeUuid: "13d63400-2c97-6004-0002-4c6564676572",
      writeCmdUuid: "13d63400-2c97-6004-0003-4c6564676572"
    }
  ]
}, _a);
var productMap = {
  Blue: DeviceModelId.blue,
  "Nano S": DeviceModelId.nanoS,
  "Nano S Plus": DeviceModelId.nanoSP,
  "Nano X": DeviceModelId.nanoX,
  "Nano FTS": DeviceModelId.nanoFTS
};
var devicesList = Object.values(devices);
var ledgerUSBVendorId = 11415;
var identifyUSBProductId = function(usbProductId) {
  var legacy = devicesList.find(function(d) {
    return d.legacyUsbProductId === usbProductId;
  });
  if (legacy)
    return legacy;
  var mm = usbProductId >> 8;
  var deviceModel = devicesList.find(function(d) {
    return d.productIdMM === mm;
  });
  return deviceModel;
};
var bluetoothServices = [];
var serviceUuidToInfos = {};
for (id2 in devices) {
  deviceModel = devices[id2];
  bluetoothSpec = deviceModel.bluetoothSpec;
  if (bluetoothSpec) {
    for (i = 0; i < bluetoothSpec.length; i++) {
      spec = bluetoothSpec[i];
      bluetoothServices.push(spec.serviceUuid);
      serviceUuidToInfos[spec.serviceUuid] = serviceUuidToInfos[spec.serviceUuid.replace(/-/g, "")] = __assign({ deviceModel }, spec);
    }
  }
}
var deviceModel;
var bluetoothSpec;
var spec;
var i;
var id2;

// node_modules/@ledgerhq/logs/lib-es/index.js
var id = 0;
var subscribers = [];
var log = function(type, message, data) {
  var obj = {
    type,
    id: String(++id),
    date: /* @__PURE__ */ new Date()
  };
  if (message)
    obj.message = message;
  if (data)
    obj.data = data;
  dispatch(obj);
};
var listen = function(cb) {
  subscribers.push(cb);
  return function() {
    var i = subscribers.indexOf(cb);
    if (i !== -1) {
      subscribers[i] = subscribers[subscribers.length - 1];
      subscribers.pop();
    }
  };
};
function dispatch(log2) {
  for (var i = 0; i < subscribers.length; i++) {
    try {
      subscribers[i](log2);
    } catch (e) {
      console.error(e);
    }
  }
}
if (typeof window !== "undefined") {
  window.__ledgerLogsListen = listen;
}

// node_modules/@ledgerhq/hw-transport-webhid/lib-es/TransportWebHID.js
init_lib_es();
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
var ledgerDevices = [
  {
    vendorId: ledgerUSBVendorId
  }
];
var isSupported = function() {
  return Promise.resolve(!!(window.navigator && window.navigator.hid));
};
var getHID = function() {
  var hid = navigator.hid;
  if (!hid)
    throw new TransportError("navigator.hid is not supported", "HIDNotSupported");
  return hid;
};
function requestLedgerDevices() {
  return __awaiter2(this, void 0, void 0, function() {
    var device;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, getHID().requestDevice({
            filters: ledgerDevices
          })];
        case 1:
          device = _a2.sent();
          if (Array.isArray(device))
            return [2, device];
          return [2, [device]];
      }
    });
  });
}
function getLedgerDevices() {
  return __awaiter2(this, void 0, void 0, function() {
    var devices2;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, getHID().getDevices()];
        case 1:
          devices2 = _a2.sent();
          return [2, devices2.filter(function(d) {
            return d.vendorId === ledgerUSBVendorId;
          })];
      }
    });
  });
}
function getFirstLedgerDevice() {
  return __awaiter2(this, void 0, void 0, function() {
    var existingDevices, devices2;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, getLedgerDevices()];
        case 1:
          existingDevices = _a2.sent();
          if (existingDevices.length > 0)
            return [2, existingDevices[0]];
          return [4, requestLedgerDevices()];
        case 2:
          devices2 = _a2.sent();
          return [2, devices2[0]];
      }
    });
  });
}
var TransportWebHID = (
  /** @class */
  function(_super) {
    __extends(TransportWebHID2, _super);
    function TransportWebHID2(device) {
      var _this = _super.call(this) || this;
      _this.channel = Math.floor(Math.random() * 65535);
      _this.packetSize = 64;
      _this.inputs = [];
      _this.read = function() {
        if (_this.inputs.length) {
          return Promise.resolve(_this.inputs.shift());
        }
        return new Promise(function(success) {
          _this.inputCallback = success;
        });
      };
      _this.onInputReport = function(e) {
        var buffer = Buffer.from(e.data.buffer);
        if (_this.inputCallback) {
          _this.inputCallback(buffer);
          _this.inputCallback = null;
        } else {
          _this.inputs.push(buffer);
        }
      };
      _this._disconnectEmitted = false;
      _this._emitDisconnect = function(e) {
        if (_this._disconnectEmitted)
          return;
        _this._disconnectEmitted = true;
        _this.emit("disconnect", e);
      };
      _this.exchange = function(apdu) {
        return __awaiter2(_this, void 0, void 0, function() {
          var b;
          var _this2 = this;
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                return [4, this.exchangeAtomicImpl(function() {
                  return __awaiter2(_this2, void 0, void 0, function() {
                    var _a3, channel, packetSize, framing, blocks, i, result, acc, buffer;
                    return __generator(this, function(_b) {
                      switch (_b.label) {
                        case 0:
                          _a3 = this, channel = _a3.channel, packetSize = _a3.packetSize;
                          log("apdu", "=> " + apdu.toString("hex"));
                          framing = (0, import_hid_framing.default)(channel, packetSize);
                          blocks = framing.makeBlocks(apdu);
                          i = 0;
                          _b.label = 1;
                        case 1:
                          if (!(i < blocks.length))
                            return [3, 4];
                          return [4, this.device.sendReport(0, blocks[i])];
                        case 2:
                          _b.sent();
                          _b.label = 3;
                        case 3:
                          i++;
                          return [3, 1];
                        case 4:
                          if (!!(result = framing.getReducedResult(acc)))
                            return [3, 6];
                          return [4, this.read()];
                        case 5:
                          buffer = _b.sent();
                          acc = framing.reduceResponse(acc, buffer);
                          return [3, 4];
                        case 6:
                          log("apdu", "<= " + result.toString("hex"));
                          return [2, result];
                      }
                    });
                  });
                })["catch"](function(e) {
                  if (e && e.message && e.message.includes("write")) {
                    _this2._emitDisconnect(e);
                    throw new DisconnectedDeviceDuringOperation(e.message);
                  }
                  throw e;
                })];
              case 1:
                b = _a2.sent();
                return [2, b];
            }
          });
        });
      };
      _this.device = device;
      _this.deviceModel = typeof device.productId === "number" ? identifyUSBProductId(device.productId) : void 0;
      device.addEventListener("inputreport", _this.onInputReport);
      return _this;
    }
    TransportWebHID2.request = function() {
      return __awaiter2(this, void 0, void 0, function() {
        var _a2, device;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, requestLedgerDevices()];
            case 1:
              _a2 = __read.apply(void 0, [_b.sent(), 1]), device = _a2[0];
              return [2, TransportWebHID2.open(device)];
          }
        });
      });
    };
    TransportWebHID2.openConnected = function() {
      return __awaiter2(this, void 0, void 0, function() {
        var devices2;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, getLedgerDevices()];
            case 1:
              devices2 = _a2.sent();
              if (devices2.length === 0)
                return [2, null];
              return [2, TransportWebHID2.open(devices2[0])];
          }
        });
      });
    };
    TransportWebHID2.open = function(device) {
      return __awaiter2(this, void 0, void 0, function() {
        var transport, onDisconnect;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, device.open()];
            case 1:
              _a2.sent();
              transport = new TransportWebHID2(device);
              onDisconnect = function(e) {
                if (device === e.device) {
                  getHID().removeEventListener("disconnect", onDisconnect);
                  transport._emitDisconnect(new DisconnectedDevice());
                }
              };
              getHID().addEventListener("disconnect", onDisconnect);
              return [2, transport];
          }
        });
      });
    };
    TransportWebHID2.prototype.close = function() {
      return __awaiter2(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.exchangeBusyPromise];
            case 1:
              _a2.sent();
              this.device.removeEventListener("inputreport", this.onInputReport);
              return [4, this.device.close()];
            case 2:
              _a2.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TransportWebHID2.prototype.setScrambleKey = function() {
    };
    TransportWebHID2.isSupported = isSupported;
    TransportWebHID2.list = getLedgerDevices;
    TransportWebHID2.listen = function(observer) {
      var unsubscribed = false;
      getFirstLedgerDevice().then(function(device) {
        if (!device) {
          observer.error(new TransportOpenUserCancelled("Access denied to use Ledger device"));
        } else if (!unsubscribed) {
          var deviceModel = typeof device.productId === "number" ? identifyUSBProductId(device.productId) : void 0;
          observer.next({
            type: "add",
            descriptor: device,
            deviceModel
          });
          observer.complete();
        }
      }, function(error) {
        observer.error(new TransportOpenUserCancelled(error.message));
      });
      function unsubscribe() {
        unsubscribed = true;
      }
      return {
        unsubscribe
      };
    };
    return TransportWebHID2;
  }(Transport_default)
);
var TransportWebHID_default = TransportWebHID;
export {
  TransportWebHID_default as default
};
//# sourceMappingURL=TransportWebHID-UCORCW2V.js.map