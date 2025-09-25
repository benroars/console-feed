"use strict";
exports.__esModule = true;
// Const
var TRANSFORMED_TYPE_KEY = "@t";
var CIRCULAR_REF_KEY = "@r";
var KEY_REQUIRE_ESCAPING_RE = /^#*@(t|r)$/;
var REMAINING_KEY = "__console_feed_remaining__";
var GLOBAL = (function getGlobal() {
  // NOTE: see http://www.ecma-international.org/ecma-262/6.0/index.html#sec-performeval step 10
  var savedEval = eval;
  return savedEval("this");
})();
var ARRAY_BUFFER_SUPPORTED = typeof ArrayBuffer === "function";
var MAP_SUPPORTED = typeof Map === "function";
var SET_SUPPORTED = typeof Set === "function";
var TYPED_ARRAY_CTORS = [
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Uint16Array",
  "Int32Array",
  "Uint32Array",
  "Float32Array",
  "Float64Array",
];
// Saved proto functions
var arrSlice = Array.prototype.slice;
// Default serializer
var JSONSerializer = {
  serialize: function (val) {
    return JSON.stringify(val);
  },
  deserialize: function (val) {
    return JSON.parse(val);
  },
};
// EncodingTransformer
var EncodingTransformer = /** @class */ (function () {
  function EncodingTransformer(val, transforms, limit) {
    this.references = val;
    this.transforms = transforms;
    this.transformsMap = this._makeTransformsMap();
    this.circularCandidates = [];
    this.circularCandidatesDescrs = [];
    this.circularRefCount = 0;
    this.limit = limit !== null && limit !== void 0 ? limit : Infinity;
  }
  EncodingTransformer._createRefMark = function (idx) {
    var obj = Object.create(null);
    obj[CIRCULAR_REF_KEY] = idx;
    return obj;
  };
  EncodingTransformer.prototype._createCircularCandidate = function (
    val,
    parent,
    key
  ) {
    this.circularCandidates.push(val);
    this.circularCandidatesDescrs.push({
      parent: parent,
      key: key,
      refIdx: -1,
    });
  };
  EncodingTransformer.prototype._applyTransform = function (
    val,
    parent,
    key,
    transform
  ) {
    var result = Object.create(null);
    var serializableVal = transform.toSerializable(val);
    if (typeof serializableVal === "object")
      this._createCircularCandidate(val, parent, key);
    result[TRANSFORMED_TYPE_KEY] = transform.type;
    result.data = this._handleValue(
      function () {
        return serializableVal;
      },
      parent,
      key
    );
    return result;
  };
  EncodingTransformer.prototype._handleArray = function (arr) {
    var result = [];
    var arrayLimit = Math.min(arr.length, this.limit);
    var remaining = arr.length - arrayLimit;
    var _loop_1 = function (i) {
      result[i] = this_1._handleValue(
        function () {
          return arr[i];
        },
        result,
        i
      );
    };
    var this_1 = this;
    for (var i = 0; i < arrayLimit; i++) {
      _loop_1(i);
    }
    result[arrayLimit] = REMAINING_KEY + remaining;
    return result;
  };
  EncodingTransformer.prototype._handlePlainObject = function (obj) {
    var _a, _b;
    var result = Object.create(null);
    var counter = 0;
    var total = 0;
    var _loop_2 = function (key) {
      if (Reflect.has(obj, key)) {
        if (counter >= this_2.limit) {
          total++;
          return "continue";
        }
        var resultKey = KEY_REQUIRE_ESCAPING_RE.test(key)
          ? "#".concat(key)
          : key;
        result[resultKey] = this_2._handleValue(
          function () {
            return obj[key];
          },
          result,
          resultKey
        );
        counter++;
        total++;
      }
    };
    var this_2 = this;
    for (var key in obj) {
      _loop_2(key);
    }
    var remaining = total - counter;
    var name =
      (_b =
        (_a = obj === null || obj === void 0 ? void 0 : obj.__proto__) ===
          null || _a === void 0
          ? void 0
          : _a.constructor) === null || _b === void 0
        ? void 0
        : _b.name;
    if (name && name !== "Object") {
      result.constructor = { name: name };
    }
    if (remaining) {
      result[REMAINING_KEY] = remaining;
    }
    return result;
  };
  EncodingTransformer.prototype._handleObject = function (obj, parent, key) {
    this._createCircularCandidate(obj, parent, key);
    return Array.isArray(obj)
      ? this._handleArray(obj)
      : this._handlePlainObject(obj);
  };
  EncodingTransformer.prototype._ensureCircularReference = function (obj) {
    var circularCandidateIdx = this.circularCandidates.indexOf(obj);
    if (circularCandidateIdx > -1) {
      var descr = this.circularCandidatesDescrs[circularCandidateIdx];
      if (descr.refIdx === -1)
        descr.refIdx = descr.parent ? ++this.circularRefCount : 0;
      return EncodingTransformer._createRefMark(descr.refIdx);
    }
    return null;
  };
  EncodingTransformer.prototype._handleValue = function (getVal, parent, key) {
    try {
      var val = getVal();
      var type = typeof val;
      var isObject = type === "object" && val !== null;
      if (isObject) {
        var refMark = this._ensureCircularReference(val);
        if (refMark) return refMark;
      }
      var transform = this._findTransform(type, val);
      if (transform) {
        return this._applyTransform(val, parent, key, transform);
      }
      if (isObject) return this._handleObject(val, parent, key);
      return val;
    } catch (e) {
      try {
        return this._handleValue(
          function () {
            return e instanceof Error ? e : new Error(e);
          },
          parent,
          key
        );
      } catch (_a) {
        return null;
      }
    }
  };
  EncodingTransformer.prototype._makeTransformsMap = function () {
    if (!MAP_SUPPORTED) {
      return;
    }
    var map = new Map();
    this.transforms.forEach(function (transform) {
      if (transform.lookup) {
        map.set(transform.lookup, transform);
      }
    });
    return map;
  };
  EncodingTransformer.prototype._findTransform = function (type, val) {
    if (MAP_SUPPORTED) {
      if (val && val.constructor) {
        var transform = this.transformsMap.get(val.constructor);
        if (
          transform === null || transform === void 0
            ? void 0
            : transform.shouldTransform(type, val)
        )
          return transform;
      }
    }
    for (var _i = 0, _a = this.transforms; _i < _a.length; _i++) {
      var transform = _a[_i];
      if (transform.shouldTransform(type, val)) return transform;
    }
  };
  EncodingTransformer.prototype.transform = function () {
    var _this = this;
    var references = [
      this._handleValue(
        function () {
          return _this.references;
        },
        null,
        null
      ),
    ];
    for (var _i = 0, _a = this.circularCandidatesDescrs; _i < _a.length; _i++) {
      var descr = _a[_i];
      if (descr.refIdx > 0) {
        references[descr.refIdx] = descr.parent[descr.key];
        descr.parent[descr.key] = EncodingTransformer._createRefMark(
          descr.refIdx
        );
      }
    }
    return references;
  };
  return EncodingTransformer;
})();
// DecodingTransform
var DecodingTransformer = /** @class */ (function () {
  function DecodingTransformer(references, transformsMap) {
    this.activeTransformsStack = [];
    this.visitedRefs = Object.create(null);
    this.references = references;
    this.transformMap = transformsMap;
  }
  DecodingTransformer.prototype._handlePlainObject = function (obj) {
    var unescaped = Object.create(null);
    if ("constructor" in obj) {
      if (!obj.constructor || typeof obj.constructor.name !== "string") {
        obj.constructor = {
          name: "Object",
        };
      }
    }
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        this._handleValue(obj[key], obj, key);
        if (KEY_REQUIRE_ESCAPING_RE.test(key)) {
          // NOTE: use intermediate object to avoid unescaped and escaped keys interference
          // E.g. unescaped "##@t" will be "#@t" which can overwrite escaped "#@t".
          unescaped[key.substring(1)] = obj[key];
          delete obj[key];
        }
      }
    }
    for (var unsecapedKey in unescaped)
      obj[unsecapedKey] = unescaped[unsecapedKey];
  };
  DecodingTransformer.prototype._handleTransformedObject = function (
    obj,
    parent,
    key
  ) {
    var transformType = obj[TRANSFORMED_TYPE_KEY];
    var transform = this.transformMap[transformType];
    if (!transform)
      throw new Error(
        "Can't find transform for \"".concat(transformType, '" type.')
      );
    this.activeTransformsStack.push(obj);
    this._handleValue(obj.data, obj, "data");
    this.activeTransformsStack.pop();
    parent[key] = transform.fromSerializable(obj.data);
  };
  DecodingTransformer.prototype._handleCircularSelfRefDuringTransform = function (
    refIdx,
    parent,
    key
  ) {
    // NOTE: we've hit a hard case: object reference itself during transformation.
    // We can't dereference it since we don't have resulting object yet. And we'll
    // not be able to restore reference lately because we will need to traverse
    // transformed object again and reference might be unreachable or new object contain
    // new circular references. As a workaround we create getter, so once transformation
    // complete, dereferenced property will point to correct transformed object.
    var references = this.references;
    Object.defineProperty(parent, key, {
      // @ts-ignore
      val: void 0,
      configurable: true,
      enumerable: true,
      get: function () {
        if (this.val === void 0) this.val = references[refIdx];
        return this.val;
      },
      set: function (value) {
        this.val = value;
      },
    });
  };
  DecodingTransformer.prototype._handleCircularRef = function (
    refIdx,
    parent,
    key
  ) {
    if (this.activeTransformsStack.includes(this.references[refIdx]))
      this._handleCircularSelfRefDuringTransform(refIdx, parent, key);
    else {
      if (!this.visitedRefs[refIdx]) {
        this.visitedRefs[refIdx] = true;
        this._handleValue(this.references[refIdx], this.references, refIdx);
      }
      parent[key] = this.references[refIdx];
    }
  };
  DecodingTransformer.prototype._handleValue = function (val, parent, key) {
    if (typeof val !== "object" || val === null) return;
    var refIdx = val[CIRCULAR_REF_KEY];
    if (refIdx !== void 0) this._handleCircularRef(refIdx, parent, key);
    else if (val[TRANSFORMED_TYPE_KEY])
      this._handleTransformedObject(val, parent, key);
    else if (Array.isArray(val)) {
      for (var i = 0; i < val.length; i++) this._handleValue(val[i], val, i);
    } else this._handlePlainObject(val);
  };
  DecodingTransformer.prototype.transform = function () {
    this.visitedRefs[0] = true;
    this._handleValue(this.references[0], this.references, 0);
    return this.references[0];
  };
  return DecodingTransformer;
})();
// Transforms
var builtInTransforms = [
  {
    type: "[[NaN]]",
    shouldTransform: function (type, val) {
      return type === "number" && isNaN(val);
    },
    toSerializable: function () {
      return "";
    },
    fromSerializable: function () {
      return NaN;
    },
  },
  {
    type: "[[undefined]]",
    shouldTransform: function (type) {
      return type === "undefined";
    },
    toSerializable: function () {
      return "";
    },
    fromSerializable: function () {
      return void 0;
    },
  },
  {
    type: "[[Date]]",
    lookup: Date,
    shouldTransform: function (type, val) {
      return val instanceof Date;
    },
    toSerializable: function (date) {
      return date.getTime();
    },
    fromSerializable: function (val) {
      var date = new Date();
      date.setTime(val);
      return date;
    },
  },
  {
    type: "[[RegExp]]",
    lookup: RegExp,
    shouldTransform: function (type, val) {
      return val instanceof RegExp;
    },
    toSerializable: function (re) {
      var result = {
        src: re.source,
        flags: "",
      };
      if (re.global) result.flags += "g";
      if (re.ignoreCase) result.flags += "i";
      if (re.multiline) result.flags += "m";
      return result;
    },
    fromSerializable: function (val) {
      return new RegExp(val.src, val.flags);
    },
  },
  {
    type: "[[Error]]",
    lookup: Error,
    shouldTransform: function (type, val) {
      return val instanceof Error;
    },
    toSerializable: function (err) {
      var _a, _b;
      if (!err.stack) {
        (_b = (_a = Error).captureStackTrace) === null || _b === void 0
          ? void 0
          : _b.call(_a, err);
      }
      return {
        name: err.name,
        message: err.message,
        stack: err.stack,
      };
    },
    fromSerializable: function (val) {
      var Ctor = GLOBAL[val.name] || Error;
      var err = new Ctor(val.message);
      err.stack = val.stack;
      return err;
    },
  },
  {
    type: "[[ArrayBuffer]]",
    lookup: ARRAY_BUFFER_SUPPORTED && ArrayBuffer,
    shouldTransform: function (type, val) {
      return ARRAY_BUFFER_SUPPORTED && val instanceof ArrayBuffer;
    },
    toSerializable: function (buffer) {
      var view = new Int8Array(buffer);
      return arrSlice.call(view);
    },
    fromSerializable: function (val) {
      if (ARRAY_BUFFER_SUPPORTED) {
        var buffer = new ArrayBuffer(val.length);
        var view = new Int8Array(buffer);
        view.set(val);
        return buffer;
      }
      return val;
    },
  },
  {
    type: "[[TypedArray]]",
    shouldTransform: function (type, val) {
      if (ARRAY_BUFFER_SUPPORTED) {
        return ArrayBuffer.isView(val) && !(val instanceof DataView);
      }
      for (
        var _i = 0, TYPED_ARRAY_CTORS_1 = TYPED_ARRAY_CTORS;
        _i < TYPED_ARRAY_CTORS_1.length;
        _i++
      ) {
        var ctorName = TYPED_ARRAY_CTORS_1[_i];
        if (
          typeof GLOBAL[ctorName] === "function" &&
          val instanceof GLOBAL[ctorName]
        )
          return true;
      }
      return false;
    },
    toSerializable: function (arr) {
      return {
        ctorName: arr.constructor.name,
        arr: arrSlice.call(arr),
      };
    },
    fromSerializable: function (val) {
      return typeof GLOBAL[val.ctorName] === "function"
        ? new GLOBAL[val.ctorName](val.arr)
        : val.arr;
    },
  },
  {
    type: "[[Map]]",
    lookup: MAP_SUPPORTED && Map,
    shouldTransform: function (type, val) {
      return MAP_SUPPORTED && val instanceof Map;
    },
    toSerializable: function (map) {
      var flattenedKVArr = [];
      map.forEach(function (val, key) {
        flattenedKVArr.push(key);
        flattenedKVArr.push(val);
      });
      return flattenedKVArr;
    },
    fromSerializable: function (val) {
      if (MAP_SUPPORTED) {
        // NOTE: new Map(iterable) is not supported by all browsers
        var map = new Map();
        for (var i = 0; i < val.length; i += 2) map.set(val[i], val[i + 1]);
        return map;
      }
      var kvArr = [];
      // @ts-ignore
      for (var j = 0; j < val.length; j += 2) kvArr.push([val[i], val[i + 1]]);
      return kvArr;
    },
  },
  {
    type: "[[Set]]",
    lookup: SET_SUPPORTED && Set,
    shouldTransform: function (type, val) {
      return SET_SUPPORTED && val instanceof Set;
    },
    toSerializable: function (set) {
      var arr = [];
      set.forEach(function (val) {
        arr.push(val);
      });
      return arr;
    },
    fromSerializable: function (val) {
      if (SET_SUPPORTED) {
        // NOTE: new Set(iterable) is not supported by all browsers
        var set = new Set();
        for (var i = 0; i < val.length; i++) set.add(val[i]);
        return set;
      }
      return val;
    },
  },
];
// Replicator
var Replicator = /** @class */ (function () {
  function Replicator(serializer) {
    this.transforms = [];
    this.transformsMap = Object.create(null);
    this.serializer = serializer || JSONSerializer;
    this.addTransforms(builtInTransforms);
  }
  Replicator.prototype.addTransforms = function (transforms) {
    transforms = Array.isArray(transforms) ? transforms : [transforms];
    for (
      var _i = 0, transforms_1 = transforms;
      _i < transforms_1.length;
      _i++
    ) {
      var transform = transforms_1[_i];
      if (this.transformsMap[transform.type])
        throw new Error(
          'Transform with type "'.concat(transform.type, '" was already added.')
        );
      this.transforms.push(transform);
      this.transformsMap[transform.type] = transform;
    }
    return this;
  };
  Replicator.prototype.removeTransforms = function (transforms) {
    transforms = Array.isArray(transforms) ? transforms : [transforms];
    for (
      var _i = 0, transforms_2 = transforms;
      _i < transforms_2.length;
      _i++
    ) {
      var transform = transforms_2[_i];
      var idx = this.transforms.indexOf(transform);
      if (idx > -1) this.transforms.splice(idx, 1);
      delete this.transformsMap[transform.type];
    }
    return this;
  };
  Replicator.prototype.encode = function (val, limit) {
    var transformer = new EncodingTransformer(val, this.transforms, limit);
    var references = transformer.transform();
    return this.serializer.serialize(references);
  };
  Replicator.prototype.decode = function (val) {
    var references = this.serializer.deserialize(val);
    var transformer = new DecodingTransformer(references, this.transformsMap);
    return transformer.transform();
  };
  return Replicator;
})();
exports["default"] = Replicator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvVHJhbnNmb3JtL3JlcGxpY2F0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxRQUFRO0FBQ1IsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUE7QUFDakMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUE7QUFDN0IsSUFBTSx1QkFBdUIsR0FBRyxZQUFZLENBQUE7QUFFNUMsSUFBTSxhQUFhLEdBQUcsNEJBQTRCLENBQUE7QUFFbEQsSUFBTSxNQUFNLEdBQUcsQ0FBQyxTQUFTLFNBQVM7SUFDaEMsOEZBQThGO0lBQzlGLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQTtJQUV0QixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUMxQixDQUFDLENBQUMsRUFBRSxDQUFBO0FBRUosSUFBTSxzQkFBc0IsR0FBRyxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUE7QUFDaEUsSUFBTSxhQUFhLEdBQUcsT0FBTyxHQUFHLEtBQUssVUFBVSxDQUFBO0FBQy9DLElBQU0sYUFBYSxHQUFHLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQTtBQUUvQyxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsY0FBYztDQUNmLENBQUE7QUFFRCx3QkFBd0I7QUFDeEIsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUE7QUFFdEMscUJBQXFCO0FBQ3JCLElBQU0sY0FBYyxHQUFHO0lBQ3JCLFNBQVMsWUFBQyxHQUFRO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsV0FBVyxZQUFDLEdBQVE7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FB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
