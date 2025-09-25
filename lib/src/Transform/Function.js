"use strict";
exports.__esModule = true;
/**
 * Serialize a function into JSON
 */
exports["default"] = {
  type: "Function",
  lookup: Function,
  shouldTransform: function (type, obj) {
    return typeof obj === "function";
  },
  toSerializable: function (func) {
    var body = "";
    try {
      body = func
        .toString()
        .substring(body.indexOf("{") + 1, body.lastIndexOf("}"));
    } catch (e) {}
    return {
      name: func.name,
      body: body,
      proto: Object.getPrototypeOf(func).constructor.name,
    };
  },
  fromSerializable: function (data) {
    try {
      var tempFunc = function () {};
      if (typeof data.name === "string") {
        Object.defineProperty(tempFunc, "name", {
          value: data.name,
          writable: false,
        });
      }
      if (typeof data.body === "string") {
        Object.defineProperty(tempFunc, "body", {
          value: data.body,
          writable: false,
        });
      }
      if (typeof data.proto === "string") {
        // @ts-ignore
        tempFunc.constructor = {
          name: data.proto,
        };
      }
      return tempFunc;
    } catch (e) {
      return data;
    }
  },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvVHJhbnNmb3JtL0Z1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUE7O0dBRUc7QUFDSCxxQkFBZTtJQUNiLElBQUksRUFBRSxVQUFVO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLGVBQWUsWUFBQyxJQUFTLEVBQUUsR0FBUTtRQUNqQyxPQUFPLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQTtJQUNsQyxDQUFDO0lBQ0QsY0FBYyxZQUFDLElBQWM7UUFDM0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2IsSUFBSSxDQUFDO1lBQ0gsSUFBSSxHQUFHLElBQUk7aUJBQ1IsUUFBUSxFQUFFO2lCQUNWLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDNUQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDO1FBRWQsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksTUFBQTtZQUNKLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJO1NBQ3BELENBQUE7SUFDSCxDQUFDO0lBQ0QsZ0JBQWdCLFlBQUMsSUFBYTtRQUM1QixJQUFJLENBQUM7WUFDSCxJQUFNLFFBQVEsR0FBRyxjQUFhLENBQUMsQ0FBQTtZQUUvQixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztnQkFDbEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFO29CQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2lCQUNoQixDQUFDLENBQUE7WUFDSixDQUFDO1lBRUQsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRTtvQkFDdEMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNoQixRQUFRLEVBQUUsS0FBSztpQkFDaEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUVELElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUNuQyxhQUFhO2dCQUNiLFFBQVEsQ0FBQyxXQUFXLEdBQUc7b0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztpQkFDakIsQ0FBQTtZQUNILENBQUM7WUFFRCxPQUFPLFFBQVEsQ0FBQTtRQUNqQixDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLE9BQU8sSUFBSSxDQUFBO1FBQ2IsQ0FBQztJQUNILENBQUM7Q0FDRixDQUFBIn0=
