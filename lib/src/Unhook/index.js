"use strict";
exports.__esModule = true;
/**
 * Unhook a console constructor and restore back the Native methods
 * @argument console The Console constructor to Hook
 */
function Unhook(console) {
  if (console.feed) {
    for (
      var _i = 0, _a = Object.keys(console.feed.pointers);
      _i < _a.length;
      _i++
    ) {
      var method = _a[_i];
      console[method] = console.feed.pointers[method];
    }
    return delete console.feed;
  } else {
    return false;
  }
}
exports["default"] = Unhook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvVW5ob29rL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7OztHQUdHO0FBQ0gsU0FBUyxNQUFNLENBQUMsT0FBc0I7SUFDcEMsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsS0FBcUIsVUFBa0MsRUFBbEMsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQWxDLGNBQWtDLEVBQWxDLElBQWtDLEVBQUUsQ0FBQztZQUFyRCxJQUFNLE1BQU0sU0FBQTtZQUNmLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNqRCxDQUFDO1FBQ0QsT0FBTyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUE7SUFDNUIsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7QUFDSCxDQUFDO0FBRUQscUJBQWUsTUFBTSxDQUFBIn0=
