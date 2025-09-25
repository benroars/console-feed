"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
exports.Content = exports.Timestamp = exports.AmountIcon = exports.Icon = exports.IconContainer = exports.Message = exports.Root = void 0;
var theme_1 = __importDefault(require("./theme"));
/**
 * Return themed log-method style
 * @param style The style
 * @param type The method
 */
var Themed = function (style, method, styles) {
  return (
    styles[
      "LOG_".concat(method.toUpperCase(), "_").concat(style.toUpperCase())
    ] || styles["LOG_".concat(style.toUpperCase())]
  );
};
/**
 * console-feed
 */
exports.Root = (0, theme_1["default"])("div")({
  wordBreak: "break-word",
  width: "100%",
});
/**
 * console-message
 */
exports.Message = (0, theme_1["default"])("div")(function (_a) {
  var _b = _a.theme,
    styles = _b.styles,
    method = _b.method;
  return {
    position: "relative",
    display: "flex",
    color: Themed("color", method, styles),
    backgroundColor: Themed("background", method, styles),
    borderTop: "1px solid ".concat(Themed("border", method, styles)),
    borderBottom: "1px solid ".concat(Themed("border", method, styles)),
    marginTop: -1,
    marginBottom: +/^warn|error$/.test(method),
    padding: styles.PADDING,
    boxSizing: "border-box",
    "& *": {
      boxSizing: "border-box",
      fontFamily: styles.BASE_FONT_FAMILY,
      whiteSpace: "pre-wrap",
      fontSize: styles.BASE_FONT_SIZE,
    },
    "& a": {
      color: styles.LOG_LINK_COLOR,
    },
  };
});
/**
 * Icon container
 */
exports.IconContainer = (0, theme_1["default"])("div")(function () {
  return {
    paddingLeft: 10,
  };
});
/**
 * message-icon
 */
exports.Icon = (0, theme_1["default"])("div")(function (_a) {
  var _b = _a.theme,
    styles = _b.styles,
    method = _b.method;
  return {
    width: styles.LOG_ICON_WIDTH,
    height: styles.LOG_ICON_HEIGHT,
    backgroundImage: Themed("icon", method, styles),
    backgroundRepeat: "no-repeat",
    backgroundSize: styles.LOG_ICON_BACKGROUND_SIZE,
    backgroundPosition: "center",
  };
});
/**
 * message-amount
 */
exports.AmountIcon = (0, theme_1["default"])("div")(function (_a) {
  var _b = _a.theme,
    styles = _b.styles,
    method = _b.method;
  return {
    // make it a circle if the amount is one digit
    minWidth: "".concat(16 / 12, "em"),
    height: "".concat(16 / 12, "em"),
    margin: "1px 0",
    whiteSpace: "nowrap",
    fontSize: "".concat(10 / 12, "em!important"),
    padding: "0px 3px",
    background: Themed("amount_background", method, styles),
    color: Themed("amount_color", method, styles),
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});
/**
 * timestamp
 */
exports.Timestamp = (0, theme_1["default"])("div")(function (_a) {
  var _b = _a.theme,
    styles = _b.styles,
    method = _b.method;
  return {
    marginLeft: 5,
    color: "dimgray",
  };
});
/**
 * console-content
 */
exports.Content = (0, theme_1["default"])("div")(function (_a) {
  var styles = _a.theme.styles;
  return {
    clear: "right",
    position: "relative",
    marginLeft: 15,
    flex: 1,
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tcG9uZW50L2VsZW1lbnRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBNEI7QUFFNUI7Ozs7R0FJRztBQUNILElBQU0sTUFBTSxHQUFHLFVBQ2IsS0FBYSxFQUNiLE1BQWMsRUFDZCxNQUFrQztJQUVsQyxPQUFBLE1BQU0sQ0FBQyxjQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUUsQ0FBQztRQUM1RCxNQUFNLENBQUMsY0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUUsQ0FBQztBQURwQyxDQUNvQyxDQUFBO0FBRXRDOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsSUFBQSxrQkFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLEtBQUssRUFBRSxNQUFNO0NBQ2QsQ0FBQyxDQUFBO0FBRUY7O0dBRUc7QUFDVSxRQUFBLE9BQU8sR0FBRyxJQUFBLGtCQUFNLEVBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUE2QjtRQUEzQixhQUF5QixFQUFoQixNQUFNLFlBQUEsRUFBRSxNQUFNLFlBQUE7SUFBUyxPQUFBLENBQUM7UUFDdkUsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3RDLGVBQWUsRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDckQsU0FBUyxFQUFFLG9CQUFhLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFFO1FBQzFELFlBQVksRUFBRSxvQkFBYSxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBRTtRQUM3RCxTQUFT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
