"use strict";
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
exports.__esModule = true;
exports.initialState = void 0;
exports.initialState = {
  timings: {},
  count: {},
};
var now = function () {
  return typeof performance !== "undefined" && performance.now
    ? performance.now()
    : Date.now();
};
exports["default"] = function (state, action) {
  var _a, _b, _c;
  if (state === void 0) {
    state = exports.initialState;
  }
  switch (action.type) {
    case "COUNT": {
      var times = state.count[action.name] || 0;
      return __assign(__assign({}, state), {
        count: __assign(
          __assign({}, state.count),
          ((_a = {}), (_a[action.name] = times + 1), _a)
        ),
      });
    }
    case "TIME_START": {
      return __assign(__assign({}, state), {
        timings: __assign(
          __assign({}, state.timings),
          ((_b = {}),
          (_b[action.name] = {
            start: now(),
          }),
          _b)
        ),
      });
    }
    case "TIME_END": {
      var timing = state.timings[action.name];
      var end = now();
      var start = timing.start;
      var time = end - start;
      return __assign(__assign({}, state), {
        timings: __assign(
          __assign({}, state.timings),
          ((_c = {}),
          (_c[action.name] = __assign(__assign({}, timing), {
            end: end,
            time: time,
          })),
          _c)
        ),
      });
    }
    default: {
      return state;
    }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Ib29rL3N0b3JlL3JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFYSxRQUFBLFlBQVksR0FBRztJQUMxQixPQUFPLEVBQUUsRUFBRTtJQUNYLEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQTtBQUVELElBQU0sR0FBRyxHQUFHO0lBQ1YsT0FBTyxPQUFPLFdBQVcsS0FBSyxXQUFXLElBQUksV0FBVyxDQUFDLEdBQUc7UUFDMUQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7UUFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNoQixDQUFDLENBQUE7QUFFRCxzQkFBZSxVQUFDLEtBQW9CLEVBQUUsTUFBYzs7SUFBcEMsc0JBQUEsRUFBQSxRQUFRLG9CQUFZO0lBQ2xDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUUzQyw2QkFDSyxLQUFLLEtBQ1IsS0FBSyx3QkFDQSxLQUFLLENBQUMsS0FBSyxnQkFDYixNQUFNLENBQUMsSUFBSSxJQUFHLEtBQUssR0FBRyxDQUFDLFVBRTNCO1FBQ0gsQ0FBQztRQUVELEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNsQiw2QkFDSyxLQUFLLEtBQ1IsT0FBTyx3QkFDRixLQUFLLENBQUMsT0FBTyxnQkFDZixNQUFNLENBQUMsSUFBSSxJQUFHO29CQUNiLEtBQUssRUFBRSxHQUFHLEVBQUU7aUJBQ2IsVUFFSjtRQUNILENBQUM7UUFFRCxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFekMsSUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUE7WUFDVCxJQUFBLEtBQUssR0FBSyxNQUFNLE1BQVgsQ0FBVztZQUV4QixJQUFNLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFBO1lBRXhCLDZCQUNLLEtBQUssS0FDUixPQUFPLHdCQUNGLEtBQUssQ0FBQyxPQUFPLGdCQUNmLE1BQU0sQ0FBQyxJQUFJLDBCQUNQLE1BQU0sS0FDVCxHQUFHLEtBQUEsRUFDSCxJQUFJLE1BQUEsYUFHVDtRQUNILENBQUM7UUFFRCxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1IsT0FBTyxLQUFLLENBQUE7UUFDZCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsRUFBQSJ9
