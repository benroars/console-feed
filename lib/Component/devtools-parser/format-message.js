"use strict";
exports.__esModule = true;
var string_utils_1 = require("./string-utils");
function createAppend(s) {
  var container = document.createDocumentFragment();
  container.appendChild(document.createTextNode(s));
  return container;
}
/**
 * @param {string} format
 * @param {!Array.<!SDK.RemoteObject>} parameters
 * @param {!Element} formattedResult
 */
function formatWithSubstitutionString(format, parameters, formattedResult) {
  var formatters = {};
  function stringFormatter(obj) {
    if (typeof obj !== "string") {
      return "";
    }
    return String(obj);
  }
  function floatFormatter(obj) {
    if (typeof obj !== "number") return "NaN";
    return obj;
  }
  function integerFormatter(obj) {
    if (typeof obj !== "number") return "NaN";
    return Math.floor(obj);
  }
  var currentStyle = null;
  function styleFormatter(obj) {
    currentStyle = {};
    var buffer = document.createElement("span");
    buffer.setAttribute("style", obj);
    for (var i = 0; i < buffer.style.length; i++) {
      var property = buffer.style[i];
      if (isWhitelistedProperty(property))
        currentStyle[property] = buffer.style[property];
    }
  }
  function isWhitelistedProperty(property) {
    var prefixes = [
      "background",
      "border",
      "color",
      "font",
      "line",
      "margin",
      "padding",
      "text",
      "-webkit-background",
      "-webkit-border",
      "-webkit-font",
      "-webkit-margin",
      "-webkit-padding",
      "-webkit-text",
    ];
    for (var i = 0; i < prefixes.length; i++) {
      if (property.startsWith(prefixes[i])) return true;
    }
    return false;
  }
  formatters.s = stringFormatter;
  formatters.f = floatFormatter;
  // Firebug allows both %i and %d for formatting integers.
  formatters.i = integerFormatter;
  formatters.d = integerFormatter;
  // Firebug uses %c for styling the message.
  formatters.c = styleFormatter;
  function append(a, b) {
    if (b instanceof Node) {
      a.appendChild(b);
    } else if (typeof b !== "undefined") {
      var toAppend = createAppend(String(b));
      if (currentStyle) {
        var wrapper = document.createElement("span");
        wrapper.appendChild(toAppend);
        applyCurrentStyle(wrapper);
        for (var i = 0; i < wrapper.children.length; ++i)
          applyCurrentStyle(wrapper.children[i]);
        toAppend = wrapper;
      }
      a.appendChild(toAppend);
    }
    return a;
  }
  /**
   * @param {!Element} element
   */
  function applyCurrentStyle(element) {
    for (var key in currentStyle) element.style[key] = currentStyle[key];
  }
  // String.format does treat formattedResult like a Builder, result is an object.
  return string_utils_1.String.format(
    format,
    parameters,
    formatters,
    formattedResult,
    append
  );
}
exports["default"] = formatWithSubstitutionString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L2RldnRvb2xzLXBhcnNlci9mb3JtYXQtbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUFzRDtBQUV0RCxTQUFTLFlBQVksQ0FBQyxDQUFTO0lBQzdCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO0lBQ25ELFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRWpELE9BQU8sU0FBUyxDQUFBO0FBQ2xCLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBd0IsNEJBQTRCLENBQ2xELE1BQVcsRUFDWCxVQUFlLEVBQ2YsZUFBb0I7SUFFcEIsSUFBTSxVQUFVLEdBQVEsRUFBRSxDQUFBO0lBRTFCLFNBQVMsZUFBZSxDQUFDLEdBQVE7UUFDL0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUM1QixPQUFPLEVBQUUsQ0FBQTtRQUNYLENBQUM7UUFFRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBRUQsU0FBUyxjQUFjLENBQUMsR0FBUTtRQUM5QixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7WUFBRSxPQUFPLEtBQUssQ0FBQTtRQUN6QyxPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7SUFFRCxTQUFTLGdCQUFnQixDQUFDLEdBQVE7UUFDaEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFDekMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3hCLENBQUM7SUFFRCxJQUFJLFlBQVksR0FBUSxJQUFJLENBQUE7SUFDNUIsU0FBUyxjQUFjLENBQUMsR0FBUTtRQUM5QixZQUFZLEdBQUcsRUFBRSxDQUFBO1FB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
