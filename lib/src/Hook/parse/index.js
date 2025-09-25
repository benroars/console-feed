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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var GUID_1 = __importDefault(require("./GUID"));
var Timing = __importStar(require("./methods/timing"));
var Count = __importStar(require("./methods/count"));
var Assert = __importStar(require("./methods/assert"));
/**
 * Parses a console log and converts it to a special Log object
 * @argument method The console method to parse
 * @argument data The arguments passed to the console method
 */
function Parse(method, data, staticID) {
  // Create an ID
  var id = staticID || (0, GUID_1["default"])();
  // Parse the methods
  switch (method) {
    case "clear": {
      return {
        method: method,
        id: id,
      };
    }
    case "count": {
      var label = typeof data[0] === "string" ? data[0] : "default";
      if (!label) return false;
      return __assign(__assign({}, Count.increment(label)), { id: id });
    }
    case "time":
    case "timeEnd": {
      var label = typeof data[0] === "string" ? data[0] : "default";
      if (!label) return false;
      if (method === "time") {
        Timing.start(label);
        return false;
      }
      return __assign(__assign({}, Timing.stop(label)), { id: id });
    }
    case "assert": {
      var valid = data.length !== 0;
      if (valid) {
        var assertion = Assert.test.apply(
          Assert,
          __spreadArray([data[0]], data.slice(1), false)
        );
        if (assertion) {
          return __assign(__assign({}, assertion), { id: id });
        }
      }
      return false;
    }
    case "error": {
      var errors = data.map(function (error) {
        try {
          return error.stack || error;
        } catch (e) {
          return error;
        }
      });
      return {
        method: method,
        id: id,
        data: errors,
      };
    }
    default: {
      return {
        method: method,
        id: id,
        data: data,
      };
    }
  }
}
exports["default"] = Parse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvSG9vay9wYXJzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxnREFBeUI7QUFFekIsdURBQTBDO0FBQzFDLHFEQUF3QztBQUN4Qyx1REFBMEM7QUFFMUM7Ozs7R0FJRztBQUNILFNBQVMsS0FBSyxDQUNaLE1BQWUsRUFDZixJQUFXLEVBQ1gsUUFBaUI7SUFFakIsZUFBZTtJQUNmLElBQU0sRUFBRSxHQUFHLFFBQVEsSUFBSSxJQUFBLGlCQUFJLEdBQUUsQ0FBQTtJQUU3QixvQkFBb0I7SUFDcEIsUUFBUSxNQUFNLEVBQUUsQ0FBQztRQUNmLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNiLE9BQU87Z0JBQ0wsTUFBTSxRQUFBO2dCQUNOLEVBQUUsSUFBQTthQUNILENBQUE7UUFDSCxDQUFDO1FBRUQsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBTSxLQUFLLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQTtZQUMvRCxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLEtBQUssQ0FBQTtZQUV4Qiw2QkFDSyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUN6QixFQUFFLElBQUEsSUFDSDtRQUNILENBQUM7UUFFRCxLQUFLLE1BQU0sQ0FBQztRQUNaLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQU0sS0FBSyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7WUFDL0QsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxLQUFLLENBQUE7WUFFeEIsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ25CLE9BQU8sS0FBSyxDQUFBO1lBQ2QsQ0FBQztZQUVELDZCQUNLLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQ3JCLEVBQUUsSUFBQSxJQUNIO1FBQ0gsQ0FBQztRQUVELEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFBO1lBRS9CLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ1YsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksT0FBWCxNQUFNLGlCQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFDLENBQUE7Z0JBQ3hELElBQUksU0FBUyxFQUFFLENBQUM7b0JBQ2QsNkJBQ0ssU0FBUyxLQUNaLEVBQUUsSUFBQSxJQUNIO2dCQUNILENBQUM7WUFDSCxDQUFDO1lBRUQsT0FBTyxLQUFLLENBQUE7UUFDZCxDQUFDO1FBRUQsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7Z0JBQzNCLElBQUksQ0FBQztvQkFDSCxPQUFPLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFBO2dCQUM3QixDQUFDO2dCQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7b0JBQ1gsT0FBTyxLQUFLLENBQUE7Z0JBQ2QsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFBO1lBRUYsT0FBTztnQkFDTCxNQUFNLFFBQUE7Z0JBQ04sRUFBRSxJQUFBO2dCQUNGLElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQTtRQUNILENBQUM7UUFFRCxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1IsT0FBTztnQkFDTCxNQUFNLFFBQUE7Z0JBQ04sRUFBRSxJQUFBO2dCQUNGLElBQUksTUFBQTthQUNMLENBQUE7UUFDSCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxxQkFBZSxLQUFLLENBQUEifQ==
