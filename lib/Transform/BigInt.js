"use strict";
exports.__esModule = true;
/**
 * Serialize a `bigint` to a string
 */
exports["default"] = {
  type: "BigInt",
  shouldTransform: function (_type, obj) {
    return typeof obj === "bigint";
  },
  toSerializable: function (value) {
    return "".concat(value, "n");
  },
  fromSerializable: function (data) {
    return BigInt(data.slice(0, -1));
  },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmlnSW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1RyYW5zZm9ybS9CaWdJbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILHFCQUFlO0lBQ2IsSUFBSSxFQUFFLFFBQVE7SUFDZCxlQUFlLFlBQUMsS0FBVSxFQUFFLEdBQVE7UUFDbEMsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUE7SUFDaEMsQ0FBQztJQUNELGNBQWMsWUFBQyxLQUFhO1FBQzFCLE9BQU8sVUFBRyxLQUFLLE1BQUcsQ0FBQTtJQUNwQixDQUFDO0lBQ0QsZ0JBQWdCLFlBQUMsSUFBWTtRQUMzQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbEMsQ0FBQztDQUNGLENBQUEifQ==
