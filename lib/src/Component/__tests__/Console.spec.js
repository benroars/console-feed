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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var enzyme_1 = require("enzyme");
var React = __importStar(require("react"));
var __1 = __importDefault(require(".."));
it("renders", function () {
  var result = (0, enzyme_1.shallow)(
    React.createElement(__1["default"], {
      logs: [
        {
          method: "log",
          id: "id",
          data: ["my-log"],
        },
      ],
    })
  );
  expect(result.html()).toContain("my-log");
});
it("formats messages", function () {
  var result = (0, enzyme_1.shallow)(
    React.createElement(__1["default"], {
      logs: [
        {
          method: "log",
          id: "id",
          data: [
            "%ctest",
            "color: red",
            "foo",
            [2, "__console_feed_remaining__0"],
          ],
        },
      ],
    })
  );
  var html = result.html();
  expect(html).toContain('<span style="color: red;">test</span>');
  expect(html).toContain("foo");
  expect(html).toContain('[<span style="color:rgb(28, 0, 207)">2</span>]');
});
it("various data types", function () {
  var result = (0, enzyme_1.shallow)(
    React.createElement(__1["default"], {
      logs: [
        {
          method: "log",
          id: "id",
          data: [
            1,
            "test",
            { foo: "bar" },
            [1, 2, 3, 4, 5],
            [],
            [{}],
            {},
            null,
          ],
        },
      ],
    })
  );
  var html = result.html();
  expect(html).toContain('<span style="color:rgb(233,63,59)">test</span>');
  expect(html).toContain('<span style="color:rgb(136, 19, 145)">foo</span>:');
  expect(html).toContain(
    '<span style="color:rgb(233,63,59)">&quot;bar&quot;</span>'
  );
});
it("skips non-existent substitution", function () {
  var result = (0, enzyme_1.shallow)(
    React.createElement(__1["default"], {
      logs: [
        {
          method: "log",
          id: "id",
          data: ["%u", "foo"],
        },
      ],
    })
  );
  var html = result.html();
  expect(html).toContain("%u");
  expect(html).toContain("foo");
});
it("displays object names", function () {
  var result = (0, enzyme_1.shallow)(
    React.createElement(__1["default"], {
      logs: [
        {
          method: "log",
          id: "id",
          data: [
            new /** @class */ ((function () {
              function MyObject() {}
              return MyObject;
            })())(),
          ],
        },
      ],
    })
  );
  expect(result.html()).toContain(
    '<span style="font-style:italic">MyObject </span><span style="font-style:italic">{}</span>'
  );
});
it("linkify object", function () {
  var result = (0, enzyme_1.shallow)(
    React.createElement(__1["default"], {
      logs: [
        {
          method: "log",
          id: "id",
          data: ["hello https://example.com"],
        },
      ],
    })
  );
  expect(result.html()).toContain(
    '<a href="https://example.com">https://example.com</a>'
  );
});
it("linkify object and pass options", function () {
  var result = (0, enzyme_1.shallow)(
    React.createElement(__1["default"], {
      logs: [
        {
          method: "log",
          id: "id",
          data: ["hello https://example.com"],
        },
      ],
      linkifyOptions: {
        attributes: function (href, type) {
          return type === "url" ? { rel: "nofollow" } : {};
        },
      },
    })
  );
  expect(result.html()).toContain(
    '<a href="https://example.com" rel="nofollow">https://example.com</a>'
  );
});
it("allows all types methods", function () {
  expect(function () {
    return (0, enzyme_1.shallow)(
      React.createElement(__1["default"], {
        logs: [
          { method: "log", id: "id", data: [] },
          { method: "debug", id: "id", data: [] },
          { method: "info", id: "id", data: [] },
          { method: "warn", id: "id", data: [] },
          { method: "error", id: "id", data: [] },
          { method: "table", id: "id", data: [] },
          { method: "clear", id: "id", data: [] },
          { method: "time", id: "id", data: [] },
          { method: "timeEnd", id: "id", data: [] },
          { method: "count", id: "id", data: [] },
          { method: "assert", id: "id", data: [] },
          { method: "result", id: "id", data: [] },
          { method: "command", id: "id", data: [] },
        ],
      })
    );
  }).not.toThrowError();
});
it("displays limited arrays correctly", function () {
  var result = (0, enzyme_1.shallow)(
    React.createElement(__1["default"], {
      logs: [
        {
          method: "log",
          id: "id",
          data: [
            __spreadArray(
              __spreadArray([], Array.from(Array(100).keys()), true),
              ["__console_feed_remaining__99899"],
              false
            ),
          ],
        },
      ],
    })
  );
  expect(result.html()).toContain("(99999)");
  expect(result.html()).toContain("<span>…</span>]");
});
it("displays nested limited arrays correctly", function () {
  var result = (0, enzyme_1.shallow)(
    React.createElement(__1["default"], {
      logs: [
        {
          method: "log",
          id: "id",
          data: [
            [
              __spreadArray(
                __spreadArray([], Array.from(Array(100).keys()), true),
                ["__console_feed_remaining__99899"],
                false
              ),
              "__console_feed_remaining__0",
            ],
          ],
        },
      ],
    })
  );
  expect(result.html()).toContain("<span>Array(99999)</span>");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc29sZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0NvbXBvbmVudC9fX3Rlc3RzX18vQ29uc29sZS5zcGVjLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWdDO0FBQ2hDLDJDQUE4QjtBQUU5Qix5Q0FBd0I7QUFFeEIsRUFBRSxDQUFDLFNBQVMsRUFBRTtJQUNaLElBQU0sTUFBTSxHQUFHLElBQUEsZ0JBQU8sRUFDcEIsb0JBQUMsY0FBTyxJQUNOLElBQUksRUFBRTtZQUNKO2dCQUNFLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEVBQUUsRUFBRSxJQUFJO2dCQUNSLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUNqQjtTQUNGLEdBQ0QsQ0FDSCxDQUFBO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUMzQyxDQUFDLENBQUMsQ0FBQTtBQUVGLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtJQUNyQixJQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFPLEVBQ3BCLG9CQUFDLGNBQU8sSUFDTixJQUFJLEVBQUU7WUFDSjtnQkFDRSxNQUFNLEVBQUUsS0FBSztnQkFDYixFQUFFLEVBQUUsSUFBSTtnQkFDUixJQUFJLEVBQUU7b0JBQ0osUUFBUTtvQkFDUixZQUFZO29CQUNaLEtBQUs7b0JBQ0wsQ0FBQyxDQUFDLEVBQUUsNkJBQTZCLENBQUM7aUJBQ25DO2FBQ0Y7U0FDRixHQUNELENBQ0gsQ0FBQTtJQUVELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7SUFDL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxL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
