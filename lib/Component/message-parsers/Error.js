"use strict";
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
var linkify_react_1 = __importDefault(require("linkify-react"));
var React = __importStar(require("react"));
function splitMessage(message) {
  var breakIndex = message.indexOf("\n");
  // consider that there can be line without a break
  if (breakIndex === -1) {
    return message;
  }
  return message.substr(0, breakIndex);
}
function ErrorPanel(_a) {
  var error = _a.error;
  /* This checks for error logTypes and shortens the message in the console by wrapping
    it a <details /> tag and putting the first line in a <summary /> tag and the other lines
    follow after that. This creates a nice collapsible error message */
  var otherErrorLines;
  var firstLine = splitMessage(error);
  var msgArray = error.split("\n");
  if (msgArray.length > 1) {
    otherErrorLines = msgArray.slice(1);
  }
  if (!otherErrorLines) {
    return React.createElement(linkify_react_1["default"], null, error);
  }
  return React.createElement(
    "details",
    null,
    React.createElement(
      "summary",
      { style: { outline: "none", cursor: "pointer" } },
      firstLine
    ),
    React.createElement(
      linkify_react_1["default"],
      null,
      otherErrorLines.join("\n\r")
    )
  );
}
exports["default"] = ErrorPanel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L21lc3NhZ2UtcGFyc2Vycy9FcnJvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUFtQztBQUNuQywyQ0FBOEI7QUFFOUIsU0FBUyxZQUFZLENBQUMsT0FBZTtJQUNuQyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hDLGtEQUFrRDtJQUNsRCxJQUFJLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7SUFDRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQ3RDLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxFQUE0QjtRQUExQixLQUFLLFdBQUE7SUFDekI7O3VFQUVtRTtJQUNuRSxJQUFJLGVBQWUsQ0FBQTtJQUNuQixJQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDckMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDeEIsZUFBZSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNyQixPQUFPLG9CQUFDLDBCQUFPLFFBQUUsS0FBSyxDQUFXLENBQUE7SUFDbkMsQ0FBQztJQUVELE9BQU8sQ0FDTDtRQUNFLGlDQUFTLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUNuRCxTQUFTLENBQ0Y7UUFDVixvQkFBQywwQkFBTyxRQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQVcsQ0FDekMsQ0FDWCxDQUFBO0FBQ0gsQ0FBQztBQUVELHFCQUFlLFVBQVUsQ0FBQSJ9
