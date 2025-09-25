"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
exports.Constructor = exports.HTML = exports.Table = exports.Root = void 0;
var theme_1 = __importDefault(require("../theme"));
/**
 * Object root
 */
exports.Root = (0, theme_1["default"])("div")({
  display: "inline-block",
  wordBreak: "break-all",
  "&::after": {
    content: "' '",
    display: "inline-block",
  },
  "& > li, & > ol, & > details": {
    backgroundColor: "transparent !important",
    display: "inline-block",
  },
  "& ol:empty": {
    paddingLeft: "0 !important",
  },
});
/**
 * Table
 */
exports.Table = (0, theme_1["default"])("span")({
  "& > li": {
    display: "inline-block",
    marginTop: 5,
  },
  // override react-inspector/TableInspectorHeaderContainer.base
  '& div[style*="height: 17px"]': {
    height: "".concat(17 / 12, "em!important"),
  },
  // override react-inspector/TableInspectorDataContainer.td
  '& td[style*="height: 16px"]': {
    height: "".concat(16 / 12, "em!important"),
    lineHeight: "1!important",
    verticalAlign: "middle!important",
  },
  '& table[style*="background-size: 128px 32px"]': {
    // = td's fontSize * 2
    backgroundSize: "128px ".concat((16 / 12) * 2, "em!important"),
  },
});
/**
 * HTML
 */
exports.HTML = (0, theme_1["default"])("span")({
  display: "inline-block",
  "& div:hover": {
    backgroundColor: "rgba(255, 220, 158, .05) !important",
    borderRadius: "2px",
  },
});
/**
 * Object constructor
 */
exports.Constructor = (0, theme_1["default"])("span")({
  "& > span > span:nth-child(1)": {
    opacity: 0.6,
  },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L3JlYWN0LWluc3BlY3Rvci9lbGVtZW50cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbURBQTZCO0FBRTdCOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsSUFBQSxrQkFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sRUFBRSxjQUFjO0lBQ3ZCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxLQUFLO1FBQ2QsT0FBTyxFQUFFLGNBQWM7S0FDeEI7SUFDRCw2QkFBNkIsRUFBRTtRQUM3QixlQUFlLEVBQUUsd0JBQXdCO1FBQ3pDLE9BQU8sRUFBRSxjQUFjO0tBQ3hCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLGNBQWM7S0FDNUI7Q0FDRixDQUFDLENBQUE7QUFFRjs7R0FFRztBQUNVLFFBQUEsS0FBSyxHQUFHLElBQUEsa0JBQU0sRUFBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsY0FBYztRQUN2QixTQUFTLEVBQUUsQ0FBQztLQUNiO0lBQ0QsOERBQThEO0lBQzlELDhCQUE4QixFQUFFO1FBQzlCLE1BQU0sRUFBRSxVQUFHLEVBQUUsR0FBRyxFQUFFLGlCQUFjO0tBQ2pDO0lBQ0QsMERBQTBEO0lBQzFELDZCQUE2QixFQUFFO1FBQzdCLE1BQU0sRUFBRSxVQUFHLEVBQUUsR0FBRyxFQUFFLGlCQUFjO1FBQ2hDLFVBQVUsRUFBRSxhQUFhO1FBQ3pCLGFBQWEsRUFBRSxrQkFBa0I7S0FDbEM7SUFDRCwrQ0FBK0MsRUFBRTtRQUMvQyxzQkFBc0I7UUFDdEIsY0FBYyxFQUFFLGdCQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWM7S0FDckQ7Q0FDRixDQUFDLENBQUE7QUFFRjs7R0FFRztBQUNVLFFBQUEsSUFBSSxHQUFHLElBQUEsa0JBQU0sRUFBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxPQUFPLEVBQUUsY0FBYztJQUN2QixhQUFhLEVBQUU7UUFDYixlQUFlLEVBQUUscUNBQXFDO1FBQ3RELFlBQVksRUFBRSxLQUFLO0tBQ3BCO0NBQ0YsQ0FBQyxDQUFBO0FBRUY7O0dBRUc7QUFDVSxRQUFBLFdBQVcsR0FBRyxJQUFBLGtCQUFNLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsOEJBQThCLEVBQUU7UUFDOUIsT0FBTyxFQUFFLEdBQUc7S0FDYjtDQUNGLENBQUMsQ0FBQSJ9
