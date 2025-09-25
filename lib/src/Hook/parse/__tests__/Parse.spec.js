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
var _ = __importStar(require("lodash"));
var __1 = __importDefault(require(".."));
it("asserts values", function () {
  expect((0, __1["default"])("assert", [2 > 1], "assert-true")).toBe(false);
  expect(
    (0, __1["default"])("assert", [1 > 2], "assert-false")
  ).toMatchSnapshot("assertion failed");
});
describe("count", function () {
  it("counts with label", function () {
    var final;
    _.times(10, function () {
      final = (0, __1["default"])("count", ["count-10"]);
    });
    expect(final && final.data[0]).toBe("count-10: 10");
  });
  it("counts with default label", function () {
    var final;
    _.times(10, function () {
      final = (0, __1["default"])("count", []);
    });
    expect(final && final.data[0]).toBe("default: 10");
  });
});
describe("time", function () {
  it("profile time with label", function () {
    (0, __1["default"])("time", ["timer-test"]);
    setTimeout(function () {
      var result = (0, __1["default"])(
        "timeEnd",
        ["timer-test"],
        "timer-result"
      );
      expect(
        result && +result.data[0].replace(/[^0-9]/g, "") > 100
      ).toBeTruthy();
    }, 100);
  });
  it("non existent label", function () {
    (0, __1["default"])("time", ["timer-test"]);
    var failure = (0, __1["default"])("timeEnd", ["nonExistent"], "timer-fail");
    expect(failure).toMatchSnapshot("non existent timer");
  });
  it("profile time with default label", function () {
    (0, __1["default"])("time", []);
    var result = (0, __1["default"])("timeEnd", [], "timer-result");
    expect(
      result && result.data[0].match(/^default: \d+\.\d+ms$/)
    ).toBeTruthy();
  });
});
it("records errors", function () {
  var result = (0, __1["default"])("error", [new Error("one")], "errors");
  expect(result && result.data[0]).toContain("Error: one");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2Uuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9Ib29rL3BhcnNlL19fdGVzdHNfXy9QYXJzZS5zcGVjLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQTJCO0FBQzNCLHlDQUFzQjtBQUV0QixFQUFFLENBQUMsZ0JBQWdCLEVBQUU7SUFDbkIsTUFBTSxDQUFDLElBQUEsY0FBSyxFQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMzRCxNQUFNLENBQUMsSUFBQSxjQUFLLEVBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUM5RCxrQkFBa0IsQ0FDbkIsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLE9BQU8sRUFBRTtJQUNoQixFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDdEIsSUFBSSxLQUFLLENBQUE7UUFFVCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUNWLEtBQUssR0FBRyxJQUFBLGNBQUssRUFBQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQ3JELENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDJCQUEyQixFQUFFO1FBQzlCLElBQUksS0FBSyxDQUFBO1FBRVQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDVixLQUFLLEdBQUcsSUFBQSxjQUFLLEVBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ3BELENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUE7QUFFRixRQUFRLENBQUMsTUFBTSxFQUFFO0lBQ2YsRUFBRSxDQUFDLHlCQUF5QixFQUFFO1FBQzVCLElBQUEsY0FBSyxFQUFDLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7UUFFN0IsVUFBVSxDQUFDO1lBQ1QsSUFBTSxNQUFNLEdBQUcsSUFBQSxjQUFLLEVBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUE7WUFDL0QsTUFBTSxDQUNKLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQ3ZELENBQUMsVUFBVSxFQUFFLENBQUE7UUFDaEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ1QsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsb0JBQW9CLEVBQUU7UUFDdkIsSUFBQSxjQUFLLEVBQUMsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtRQUU3QixJQUFNLE9BQU8sR0FBRyxJQUFBLGNBQUssRUFBQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQTtRQUMvRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLENBQUE7SUFDdkQsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsaUNBQWlDLEVBQUU7UUFDcEMsSUFBQSxjQUFLLEVBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRWpCLElBQU0sTUFBTSxHQUFHLElBQUEsY0FBSyxFQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUE7UUFDbkQsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDOUUsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQTtBQUVGLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtJQUNuQixJQUFNLE1BQU0sR0FBRyxJQUFBLGNBQUssRUFBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBRTNELE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUMxRCxDQUFDLENBQUMsQ0FBQSJ9
