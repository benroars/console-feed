"use strict";
exports.__esModule = true;
// Sandbox HTML elements
var sandbox;
function getSandbox() {
  return (
    sandbox || (sandbox = document.implementation.createHTMLDocument("sandbox"))
  );
}
function objectifyAttributes(element) {
  var data = {};
  for (var _i = 0, _a = element.attributes; _i < _a.length; _i++) {
    var attribute = _a[_i];
    data[attribute.name] = attribute.value;
  }
  return data;
}
/**
 * Serialize a HTML element into JSON
 */
exports["default"] = {
  type: "HTMLElement",
  shouldTransform: function (type, obj) {
    return (
      obj &&
      obj.children &&
      typeof obj.innerHTML === "string" &&
      typeof obj.tagName === "string"
    );
  },
  toSerializable: function (element) {
    return {
      tagName: element.tagName.toLowerCase(),
      attributes: objectifyAttributes(element),
      innerHTML: element.innerHTML,
    };
  },
  fromSerializable: function (data) {
    try {
      var element = getSandbox().createElement(data.tagName);
      element.innerHTML = data.innerHTML;
      for (
        var _i = 0, _a = Object.keys(data.attributes);
        _i < _a.length;
        _i++
      ) {
        var attribute = _a[_i];
        try {
          element.setAttribute(attribute, data.attributes[attribute]);
        } catch (e) {}
      }
      return element;
    } catch (e) {
      return data;
    }
  },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRNTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UcmFuc2Zvcm0vSFRNTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdCQUF3QjtBQUN4QixJQUFJLE9BQWlCLENBQUE7QUFDckIsU0FBUyxVQUFVO0lBQ2pCLE9BQU8sQ0FBQyxPQUFPLEtBQVAsT0FBTyxHQUFLLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQTtBQUM1RSxDQUFDO0FBVUQsU0FBUyxtQkFBbUIsQ0FBQyxPQUFZO0lBQ3ZDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUNmLEtBQXNCLFVBQWtCLEVBQWxCLEtBQUEsT0FBTyxDQUFDLFVBQVUsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRSxDQUFDO1FBQXRDLElBQUksU0FBUyxTQUFBO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQTtJQUN4QyxDQUFDO0lBQ0QsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxxQkFBZTtJQUNiLElBQUksRUFBRSxhQUFhO0lBQ25CLGVBQWUsWUFBQyxJQUFTLEVBQUUsR0FBUTtRQUNqQyxPQUFPLENBQ0wsR0FBRztZQUNILEdBQUcsQ0FBQyxRQUFRO1lBQ1osT0FBTyxHQUFHLENBQUMsU0FBUyxLQUFLLFFBQVE7WUFDakMsT0FBTyxHQUFHLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FDaEMsQ0FBQTtJQUNILENBQUM7SUFDRCxjQUFjLFlBQUMsT0FBb0I7UUFDakMsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUN0QyxVQUFVLEVBQUUsbUJBQW1CLENBQUMsT0FBTyxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztTQUNsQixDQUFBO0lBQ2QsQ0FBQztJQUNELGdCQUFnQixZQUFDLElBQWE7UUFDNUIsSUFBSSxDQUFDO1lBQ0gsSUFBTSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN4RCxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7WUFDbEMsS0FBc0IsVUFBNEIsRUFBNUIsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBNUIsY0FBNEIsRUFBNUIsSUFBNEIsRUFBRSxDQUFDO2dCQUFoRCxJQUFJLFNBQVMsU0FBQTtnQkFDaEIsSUFBSSxDQUFDO29CQUNILE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtnQkFDN0QsQ0FBQztnQkFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNoQixDQUFDO1lBQ0QsT0FBTyxPQUFPLENBQUE7UUFDaEIsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxPQUFPLElBQUksQ0FBQTtRQUNiLENBQUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQSJ9
