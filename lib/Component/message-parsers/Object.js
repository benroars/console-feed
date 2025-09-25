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
var emotion_theming_1 = require("emotion-theming");
var React = __importStar(require("react"));
var elements_1 = require("../react-inspector/elements");
var linkify_react_1 = __importDefault(require("linkify-react"));
var react_inspector_1 = __importDefault(require("../react-inspector"));
var ObjectTree = /** @class */ (function (_super) {
  __extends(ObjectTree, _super);
  function ObjectTree() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ObjectTree.prototype.render = function () {
    var _this = this;
    var _a = this.props,
      theme = _a.theme,
      quoted = _a.quoted,
      log = _a.log;
    return log.data.map(function (message, i) {
      if (typeof message === "string") {
        var string =
          !quoted && message.length
            ? "".concat(message, " ")
            : React.createElement(
                "span",
                null,
                React.createElement("span", null, '"'),
                React.createElement(
                  "span",
                  {
                    style: {
                      color: theme.styles.OBJECT_VALUE_STRING_COLOR,
                    },
                  },
                  message
                ),
                React.createElement("span", null, '" ')
              );
        return React.createElement(
          elements_1.Root,
          { "data-type": "string", key: i },
          React.createElement(
            linkify_react_1["default"],
            { options: _this.props.linkifyOptions },
            string
          )
        );
      }
      return React.createElement(react_inspector_1["default"], {
        data: message,
        key: i,
      });
    });
  };
  return ObjectTree;
})(React.PureComponent);
exports["default"] = (0, emotion_theming_1.withTheme)(ObjectTree);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudC9tZXNzYWdlLXBhcnNlcnMvT2JqZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTJDO0FBQzNDLDJDQUE4QjtBQUU5Qix3REFBa0Q7QUFFbEQsZ0VBQW1DO0FBR25DLHVFQUEwQztBQVMxQztJQUF5Qiw4QkFBK0I7SUFBeEQ7O0lBaUNBLENBQUM7SUFoQ0MsMkJBQU0sR0FBTjtRQUFBLGlCQStCQztRQTlCTyxJQUFBLEtBQXlCLElBQUksQ0FBQyxLQUFLLEVBQWpDLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQSxFQUFFLEdBQUcsU0FBZSxDQUFBO1FBRXpDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUFZLEVBQUUsQ0FBUztZQUMxQyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUNoQyxJQUFNLE1BQU0sR0FDVixDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUMxQixVQUFHLE9BQU8sTUFBRyxDQUNkLENBQUMsQ0FBQyxDQUFDLENBQ0Y7b0JBQ0UsdUNBQWM7b0JBQ2QsOEJBQ0UsS0FBSyxFQUFFOzRCQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLHlCQUF5Qjt5QkFDOUMsSUFFQSxPQUFPLENBQ0g7b0JBQ1Asd0NBQWUsQ0FDVixDQUNSLENBQUE7Z0JBRUgsT0FBTyxDQUNMLG9CQUFDLGVBQUksaUJBQVcsUUFBUSxFQUFDLEdBQUcsRUFBRSxDQUFDO29CQUM3QixvQkFBQywwQkFBTyxJQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsSUFBRyxNQUFNLENBQVcsQ0FDMUQsQ0FDUixDQUFBO1lBQ0gsQ0FBQztZQUVELE9BQU8sb0JBQUMsNEJBQVMsSUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUksQ0FBQTtRQUM3QyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFqQ0QsQ0FBeUIsS0FBSyxDQUFDLGFBQWEsR0FpQzNDO0FBRUQscUJBQWUsSUFBQSwyQkFBUyxFQUFDLFVBQVUsQ0FBQyxDQUFBIn0=
