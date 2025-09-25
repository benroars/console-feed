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
var emotion_theming_1 = require("emotion-theming");
var React = __importStar(require("react"));
var react_inspector_1 = require("react-inspector");
var Error_1 = __importDefault(require("../message-parsers/Error"));
var elements_1 = require("./elements");
var REMAINING_KEY = "__console_feed_remaining__";
// copied from react-inspector
function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }
  return arr.slice(1).reduce(
    function (xs, x) {
      return xs.concat([sep, x]);
    },
    [arr[0]]
  );
}
var getArrayLength = function (array) {
  if (!array || array.length < 1) {
    return 0;
  }
  var remainingKeyCount = array[array.length - 1]
    .toString()
    .split(REMAINING_KEY);
  if (remainingKeyCount[1] === undefined) {
    return array.length;
  } else {
    var remaining = parseInt(
      array[array.length - 1].toString().split(REMAINING_KEY)[1]
    );
    return array.length - 1 + remaining;
  }
};
var CustomObjectRootLabel = function (_a) {
  var name = _a.name,
    data = _a.data;
  var rootData = data;
  if (typeof data === "object" && !Array.isArray(data) && data !== null) {
    var object = {};
    for (var propertyName in data) {
      if (data.hasOwnProperty(propertyName)) {
        var propertyValue = data[propertyName];
        if (Array.isArray(propertyValue)) {
          var arrayLength = getArrayLength(propertyValue);
          object[propertyName] = new Array(arrayLength);
        } else {
          object[propertyName] = propertyValue;
        }
      }
    }
    rootData = Object.assign(
      Object.create(Object.getPrototypeOf(data)),
      object
    );
  }
  if (typeof name === "string") {
    return React.createElement(
      "span",
      null,
      React.createElement(react_inspector_1.ObjectName, { name: name }),
      React.createElement("span", null, ": "),
      React.createElement(react_inspector_1.ObjectPreview, { data: rootData })
    );
  } else {
    return React.createElement(react_inspector_1.ObjectPreview, {
      data: rootData,
    });
  }
};
var CustomObjectLabel = function (_a) {
  var name = _a.name,
    data = _a.data,
    _b = _a.isNonenumerable,
    isNonenumerable = _b === void 0 ? false : _b;
  return name === REMAINING_KEY
    ? data > 0
      ? React.createElement("span", null, data, " more...")
      : null
    : React.createElement(
        "span",
        null,
        typeof name === "string"
          ? React.createElement(react_inspector_1.ObjectName, {
              name: name,
              dimmed: isNonenumerable,
            })
          : React.createElement(react_inspector_1.ObjectPreview, {
              data: name,
            }),
        React.createElement("span", null, ": "),
        React.createElement(react_inspector_1.ObjectValue, { object: data })
      );
};
var CustomInspector = /** @class */ (function (_super) {
  __extends(CustomInspector, _super);
  function CustomInspector() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  CustomInspector.prototype.render = function () {
    var _a = this.props,
      data = _a.data,
      theme = _a.theme;
    var styles = theme.styles,
      method = theme.method;
    var dom = data instanceof HTMLElement;
    var table = method === "table";
    return React.createElement(
      elements_1.Root,
      { "data-type": table ? "table" : dom ? "html" : "object" },
      table
        ? React.createElement(
            elements_1.Table,
            null,
            React.createElement(
              react_inspector_1.Inspector,
              __assign({}, this.props, { theme: styles, table: true })
            ),
            React.createElement(
              react_inspector_1.Inspector,
              __assign({}, this.props, {
                theme: styles,
                nodeRenderer: this.nodeRenderer.bind(this),
              })
            )
          )
        : dom
        ? React.createElement(
            elements_1.HTML,
            null,
            React.createElement(
              react_inspector_1.DOMInspector,
              __assign({}, this.props, { theme: styles })
            )
          )
        : React.createElement(
            react_inspector_1.Inspector,
            __assign({}, this.props, {
              theme: styles,
              nodeRenderer: this.nodeRenderer.bind(this),
            })
          )
    );
  };
  CustomInspector.prototype.getCustomNode = function (data) {
    var _a;
    var styles = this.props.theme.styles;
    var constructor =
      (_a = data === null || data === void 0 ? void 0 : data.constructor) ===
        null || _a === void 0
        ? void 0
        : _a.name;
    if (constructor === "Function")
      return React.createElement(
        "span",
        { style: { fontStyle: "italic" } },
        React.createElement(react_inspector_1.ObjectPreview, { data: data }),
        " {",
        React.createElement(
          "span",
          { style: { color: "rgb(181, 181, 181)" } },
          data.body
        ),
        "}"
      );
    if (data instanceof Error && typeof data.stack === "string") {
      return React.createElement(Error_1["default"], { error: data.stack });
    }
    if (constructor === "Promise")
      return React.createElement(
        "span",
        { style: { fontStyle: "italic" } },
        "Promise ",
        "{",
        React.createElement("span", { style: { opacity: 0.6 } }, "<pending>"),
        "}"
      );
    if (data instanceof HTMLElement)
      return React.createElement(
        elements_1.HTML,
        null,
        React.createElement(react_inspector_1.DOMInspector, {
          data: data,
          theme: styles,
        })
      );
    if (Array.isArray(data)) {
      var arrayLength = getArrayLength(data);
      var maxProperties = styles.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES;
      if (
        typeof data[data.length - 1] === "string" &&
        data[data.length - 1].includes(REMAINING_KEY)
      ) {
        data = data.slice(0, -1);
      }
      var previewArray = data
        .slice(0, maxProperties)
        .map(function (element, index) {
          if (Array.isArray(element)) {
            return React.createElement(react_inspector_1.ObjectValue, {
              key: index,
              object: new Array(getArrayLength(element)),
            });
          } else {
            return React.createElement(react_inspector_1.ObjectValue, {
              key: index,
              object: element,
            });
          }
        });
      if (arrayLength > maxProperties) {
        previewArray.push(
          React.createElement("span", { key: "ellipsis" }, "\u2026")
        );
      }
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "span",
          { style: styles.objectDescription },
          arrayLength === 0 ? "" : "(".concat(arrayLength, ")\u00A0")
        ),
        React.createElement(
          "span",
          { style: styles.preview },
          "[",
          intersperse(previewArray, ", "),
          "]"
        )
      );
    }
    return null;
  };
  CustomInspector.prototype.nodeRenderer = function (props) {
    var depth = props.depth,
      name = props.name,
      data = props.data,
      isNonenumerable = props.isNonenumerable;
    // Root
    if (depth === 0) {
      var customNode_1 = this.getCustomNode(data);
      return (
        customNode_1 ||
        React.createElement(CustomObjectRootLabel, { name: name, data: data })
      );
    }
    if (typeof data === "string" && data.includes(REMAINING_KEY)) {
      name = REMAINING_KEY;
      data = data.split(REMAINING_KEY)[1];
    }
    if (name === "constructor")
      return React.createElement(
        elements_1.Constructor,
        null,
        React.createElement(react_inspector_1.ObjectLabel, {
          name: "<constructor>",
          data: data.name,
          isNonenumerable: isNonenumerable,
        })
      );
    var customNode = this.getCustomNode(data);
    return customNode
      ? React.createElement(
          elements_1.Root,
          null,
          React.createElement(react_inspector_1.ObjectName, { name: name }),
          React.createElement("span", null, ": "),
          customNode
        )
      : React.createElement(CustomObjectLabel, {
          name: name,
          data: data,
          isNonenumerable: isNonenumerable,
        });
  };
  return CustomInspector;
})(React.PureComponent);
exports["default"] = (0, emotion_theming_1.withTheme)(CustomInspector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L3JlYWN0LWluc3BlY3Rvci9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTJDO0FBQzNDLDJDQUE4QjtBQUM5QixtREFPd0I7QUFHeEIsbUVBQWlEO0FBQ2pELHVDQUEyRDtBQU8zRCxJQUFNLGFBQWEsR0FBRyw0QkFBNEIsQ0FBQTtBQUVsRCw4QkFBOEI7QUFDOUIsU0FBUyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUc7SUFDM0IsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQztJQUVELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLEVBQUUsQ0FBQyxJQUFLLE9BQUEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUN0RSxDQUFDO0FBRUQsSUFBTSxjQUFjLEdBQUcsVUFBQyxLQUFpQjtJQUN2QyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLENBQUE7SUFDVixDQUFDO0lBRUQsSUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDOUMsUUFBUSxFQUFFO1NBQ1YsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBRXZCLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUM7UUFD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
