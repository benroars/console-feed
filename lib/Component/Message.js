"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var React = __importStar(require("react"));
var emotion_theming_1 = require("emotion-theming");
var react_inline_center_1 = __importDefault(require("react-inline-center"));
var elements_1 = require("./elements");
var Formatted_1 = __importDefault(require("./message-parsers/Formatted"));
var Object_1 = __importDefault(require("./message-parsers/Object"));
var Error_1 = __importDefault(require("./message-parsers/Error"));
// https://developer.mozilla.org/en-US/docs/Web/API/console#Using_string_substitutions
var reSubstitutions = /(%[coOs])|(%(([0-9]*[.])?[0-9]+)?[dif])/g;
var ConsoleMessage = /** @class */ (function (_super) {
  __extends(ConsoleMessage, _super);
  function ConsoleMessage() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.theme = function (theme) {
      return __assign(__assign({}, theme), { method: _this.props.log.method });
    };
    return _this;
  }
  ConsoleMessage.prototype.shouldComponentUpdate = function (nextProps) {
    return this.props.log.amount !== nextProps.log.amount;
  };
  ConsoleMessage.prototype.render = function () {
    var _a = this.props,
      log = _a.log,
      components = _a.components;
    var node = this.getNode();
    var MessageComponent =
      (components === null || components === void 0
        ? void 0
        : components.Message) || elements_1.Message;
    return React.createElement(
      emotion_theming_1.ThemeProvider,
      { theme: this.theme },
      React.createElement(
        MessageComponent,
        { log: log, node: node, "data-method": log.method },
        React.createElement(
          elements_1.IconContainer,
          null,
          React.createElement(
            react_inline_center_1["default"],
            null,
            log.amount > 1
              ? React.createElement(elements_1.AmountIcon, null, log.amount)
              : React.createElement(elements_1.Icon, null)
          )
        ),
        log.timestamp
          ? React.createElement(elements_1.Timestamp, null, log.timestamp)
          : React.createElement("span", null),
        React.createElement(elements_1.Content, null, node)
      )
    );
  };
  ConsoleMessage.prototype.getNode = function () {
    var _a;
    var log = this.props.log;
    // Error handling
    var error = this.typeCheck(log);
    if (error) return error;
    // Chrome formatting
    if (log.data.length > 0 && typeof log.data[0] === "string") {
      var matchLength =
        (_a = log.data[0].match(reSubstitutions)) === null || _a === void 0
          ? void 0
          : _a.length;
      if (matchLength) {
        var restData = log.data.slice(1 + matchLength);
        return React.createElement(
          React.Fragment,
          null,
          React.createElement(Formatted_1["default"], { data: log.data }),
          restData.length > 0 &&
            React.createElement(Object_1["default"], {
              quoted: false,
              log: __assign(__assign({}, log), { data: restData }),
              linkifyOptions: this.props.linkifyOptions,
            })
        );
      }
    }
    // Error panel
    if (
      log.data.every(function (message) {
        return typeof message === "string";
      }) &&
      log.method === "error"
    ) {
      return React.createElement(Error_1["default"], {
        error: log.data.join(" "),
      });
    }
    // Normal inspector
    var quoted = typeof log.data[0] !== "string";
    return React.createElement(Object_1["default"], {
      log: log,
      quoted: quoted,
      linkifyOptions: this.props.linkifyOptions,
    });
  };
  ConsoleMessage.prototype.typeCheck = function (log) {
    if (!log) {
      return React.createElement(Formatted_1["default"], {
        data: [
          "%c[console-feed] %cFailed to parse message! %clog was typeof ".concat(
            typeof log,
            ", but it should've been a log object"
          ),
          "color: red",
          "color: orange",
          "color: cyan",
        ],
      });
    } else if (!(log.data instanceof Array)) {
      return React.createElement(Formatted_1["default"], {
        data: [
          "%c[console-feed] %cFailed to parse message! %clog.data was not an array!",
          "color: red",
          "color: orange",
          "color: cyan",
        ],
      });
    }
    return false;
  };
  return ConsoleMessage;
})(React.Component);
exports["default"] = ConsoleMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnQvTWVzc2FnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQThCO0FBRTlCLG1EQUErQztBQUMvQyw0RUFBOEM7QUFFOUMsdUNBT21CO0FBRW5CLDBFQUFtRDtBQUNuRCxvRUFBaUQ7QUFDakQsa0VBQWdEO0FBRWhELHNGQUFzRjtBQUN0RixJQUFNLGVBQWUsR0FBRywwQ0FBMEMsQ0FBQTtBQUVsRTtJQUE2QixrQ0FBa0M7SUFBL0Q7O1FBS0UsV0FBSyxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsdUJBQ3JCLEtBQUssS0FDUixNQUFNLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUM3QixFQUh3QixDQUd4QixDQUFBOztJQW1HSixDQUFDO0lBMUdDLDhDQUFxQixHQUFyQixVQUFzQixTQUFTO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFBO0lBQ3ZELENBQUM7SUFPRCwrQkFBTSxHQUFOO1FBQ1EsSUFBQSxLQUFzQixJQUFJLENBQUMsS0FBSyxFQUE5QixHQUFHLFNBQUEsRUFBRSxVQUFVLGdCQUFlLENBQUE7UUFDdEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzNCLElBQU0sZ0JBQWdCLEdBQUcsQ0FBQSxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsT0FBTyxLQUFJLGtCQUFPLENBQUE7UUFFdkQsT0FBTyxDQUNMLG9CQUFDLCtCQUFhLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQzlCLG9CQUFDLGdCQUFnQixJQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUs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
