"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
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
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
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
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
              if (t[2]) _.ops.pop();
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
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var __1 = __importDefault(require(".."));
var console_1 = __importDefault(require("./console"));
var Log_1 = __importDefault(require("./Log"));
var __2 = require("../..");
it("hooks the console", function () {
  (0, __1["default"])(console_1["default"], function (log) {
    console_1["default"].logs.push(log);
  });
  expect(console_1["default"].feed).toBeTruthy();
});
it("forwards log events", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, (0, Log_1["default"])("log", "test")];
        case 1:
          result = _a.sent();
          expect(result).toBeTruthy();
          return [2 /*return*/];
      }
    });
  });
});
it("decodes messages", function () {
  var decoded = (0, __2.Decode)(console_1["default"].logs[0]);
  expect(decoded.method).toEqual("log");
  expect(decoded.data).toMatchSnapshot();
});
it("correctly encodes a `bigint`", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var result, decoded;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, (0, Log_1["default"])("warn", BigInt(1))];
        case 1:
          result = _a.sent();
          expect(result).toBeTruthy();
          decoded = (0, __2.Decode)(result);
          expect(decoded.method).toEqual("warn");
          expect(decoded.data).toMatchSnapshot();
          return [2 /*return*/];
      }
    });
  });
});
it("correctly encodes a HTMLElement", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var result, decoded;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4 /*yield*/,
            (0, Log_1["default"])("warn", document.documentElement),
          ];
        case 1:
          result = _a.sent();
          expect(result).toBeTruthy();
          decoded = (0, __2.Decode)(result);
          expect(decoded.method).toEqual("warn");
          expect(decoded.data).toMatchSnapshot();
          return [2 /*return*/];
      }
    });
  });
});
it("correctly encodes Functions", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var result, decoded;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4 /*yield*/,
            (0, Log_1["default"])("error", function myFunc() {}),
          ];
        case 1:
          result = _a.sent();
          decoded = (0, __2.Decode)(result);
          expect(decoded.method).toEqual("error");
          expect(decoded.data).toMatchSnapshot();
          return [2 /*return*/];
      }
    });
  });
});
it("correctly encodes nested values", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var input, result, decoded;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          input = {
            function: function myFunc() {},
            document: document.documentElement,
            nested: [[[new Promise(function () {})]]],
            recursive: null,
          };
          input.recursive = input;
          return [4 /*yield*/, (0, Log_1["default"])("debug", input)];
        case 1:
          result = _a.sent();
          decoded = (0, __2.Decode)(result);
          expect(decoded.method).toEqual("debug");
          expect(decoded.data).toMatchSnapshot();
          return [2 /*return*/];
      }
    });
  });
});
it("disables encoding with a flag", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var input, result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          (0, __1["default"])(
            console_1["default"],
            function (log) {
              console_1["default"].logs.push(log);
            },
            false
          );
          input = {
            function: function myFunc() {},
            document: document.documentElement,
            nested: [[[new Promise(function () {})]]],
            recursive: null,
          };
          input.recursive = input;
          return [4 /*yield*/, (0, Log_1["default"])("debug", input)];
        case 1:
          result = _a.sent();
          expect(result.data).toMatchSnapshot();
          return [2 /*return*/];
      }
    });
  });
});
it("correctly limits a long array", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          (0, __1["default"])(
            console_1["default"],
            function (log) {
              console_1["default"].logs.push(log);
            },
            true,
            100
          );
          return [
            4 /*yield*/,
            (0, Log_1["default"])("log", Array.from(Array(99999).keys())),
          ];
        case 1:
          result = _a.sent();
          expect(result[0].data[0].length).toEqual(101);
          expect(result[0].data[0].pop()).toEqual(
            "__console_feed_remaining__99899"
          );
          return [2 /*return*/];
      }
    });
  });
});
it("correctly limits a long object", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          (0, __1["default"])(
            console_1["default"],
            function (log) {
              console_1["default"].logs.push(log);
            },
            true,
            100
          );
          return [
            4 /*yield*/,
            (0, Log_1["default"])(
              "log",
              __assign({}, Array.from(Array(99999).keys()))
            ),
          ];
        case 1:
          result = _a.sent();
          expect(Object.keys(result[0].data[0]).length).toEqual(101);
          expect(result[0].data[0]["__console_feed_remaining__"]).toEqual(
            99899
          );
          return [2 /*return*/];
      }
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9vay5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0hvb2svX190ZXN0c19fL0hvb2suc3BlYy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFxQjtBQUNyQixzREFBK0I7QUFDL0IsOENBQXVCO0FBQ3ZCLDJCQUE4QjtBQUU5QixFQUFFLENBQUMsbUJBQW1CLEVBQUU7SUFDdEIsSUFBQSxjQUFJLEVBQUMsb0JBQU8sRUFBRSxVQUFDLEdBQUc7UUFDaEIsb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3hCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7QUFDbkMsQ0FBQyxDQUFDLENBQUE7QUFFRixFQUFFLENBQUMscUJBQXFCLEVBQUU7Ozs7b0JBQ1QscUJBQU0sSUFBQSxnQkFBRyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBQTs7Z0JBQWpDLE1BQU0sR0FBRyxTQUF3QjtnQkFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBOzs7O0tBQzVCLENBQUMsQ0FBQTtBQUVGLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtJQUNyQixJQUFNLE9BQU8sR0FBRyxJQUFBLFVBQU0sRUFBQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUE7QUFDeEMsQ0FBQyxDQUFDLENBQUE7QUFFRixFQUFFLENBQUMsOEJBQThCLEVB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
