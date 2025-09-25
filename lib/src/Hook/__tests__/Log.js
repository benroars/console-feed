"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var console_1 = __importDefault(require("./console"));
function Log(type) {
  var data = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    data[_i - 1] = arguments[_i];
  }
  return new Promise(function (resolve, reject) {
    var length = console_1["default"].logs.length;
    console_1["default"][type].apply(console_1["default"], data);
    setTimeout(function () {
      if (console_1["default"].logs.length !== length) {
        resolve(
          console_1["default"].logs[console_1["default"].logs.length - 1]
        );
      }
      reject();
    });
  });
}
exports["default"] = Log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0hvb2svX190ZXN0c19fL0xvZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBK0I7QUFHL0IsU0FBUyxHQUFHLENBQUMsSUFBWTtJQUFFLGNBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQsNkJBQWM7O0lBQ3ZDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxJQUFNLE1BQU0sR0FBRyxvQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDbEMsb0JBQU8sQ0FBQyxJQUFJLENBQUMsT0FBYixvQkFBTyxFQUFVLElBQUksRUFBQztRQUV0QixVQUFVLENBQUM7WUFDVCxJQUFJLG9CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUUsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2hELENBQUM7WUFDRCxNQUFNLEVBQUUsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRUQscUJBQWUsR0FBRyxDQUFBIn0=
