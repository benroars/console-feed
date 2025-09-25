"use strict";
exports.__esModule = true;
console.logs = [];
["log", "warn", "info", "error", "debug", "assert", "time", "timeEnd"].forEach(
  function (method) {
    console["$".concat(method)] = console[method];
    console[method] = function () {};
  }
);
exports["default"] = console;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Ib29rL19fdGVzdHNfXy9jb25zb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQ2hCO0FBQUEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUM3RSxVQUFBLE1BQU07SUFDSixPQUFPLENBQUMsV0FBSSxNQUFNLENBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN2QyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsY0FBTyxDQUFDLENBQUE7QUFDNUIsQ0FBQyxDQUNGLENBQUE7QUFFRCxxQkFBZSxPQUFPLENBQUEifQ==
