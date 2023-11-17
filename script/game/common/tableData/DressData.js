"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DressData = void 0;
var cc_1 = require("cc");
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var StringUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var Collection_1 = require("../../../../../extensions/oops-plugin-framework/assets/libs/collection/Collection");
var Tabledress_1 = require("../table/Tabledress");
var LangData_1 = require("./LangData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var DressData = function () {
    var _classDecorators = [ccclass('DressData')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Tabledress_1.Tabledress;
    var DressData = _classThis = /** @class */ (function (_super) {
        __extends(DressData_1, _super);
        function DressData_1(id) {
            var _this = _super.call(this) || this;
            _this.slots = [
                "hair_1|hair_2|hair_3",
                "headwear",
                "eyebrow",
                "clothes|clothes_L|clothes_R",
                "ornaments",
                "trouser_L|trouser_R|trouser_qunzi",
                "shoe_L|shoe_R",
                "handheld",
                "makeup",
                "faceadorn",
                "eyes",
                "mouth"
            ];
            _this.init(id);
            return _this;
        }
        DressData_1.prototype.getName = function () {
            var lang = new LangData_1.LangData(this.name);
            var result = lang.getDesc();
            return result;
        };
        DressData_1.prototype.getDesc = function () {
            var lang = new LangData_1.LangData(this.desc);
            var result = lang.getDesc();
            return result;
        };
        DressData_1.prototype.getSlotsName = function () {
            return StringUtil_1.StringUtil.stringToArray2(this.slots[this.dressType - 1]);
        };
        DressData_1.getAll = function () {
            if (DressData.allDress.array.length > 0) {
                return DressData.allDress;
            }
            DressData.allDress = new Collection_1.Collection();
            var table = JsonUtil_1.JsonUtil.get(Tabledress_1.Tabledress.TableName);
            for (var key in table) {
                DressData.allDress.set(parseInt(key), new DressData(parseInt(key)));
            }
            ;
            return DressData.allDress;
        };
        return DressData_1;
    }(_classSuper));
    __setFunctionName(_classThis, "DressData");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DressData = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.allDress = new Collection_1.Collection();
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DressData = _classThis;
}();
exports.DressData = DressData;
