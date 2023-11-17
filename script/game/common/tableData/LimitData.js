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
exports.LimitData = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var Tablelimits_1 = require("../table/Tablelimits");
var LangData_1 = require("./LangData");
var houseRateData_1 = require("./houseRateData");
var SuitData_1 = require("./SuitData");
var EventData_1 = require("./EventData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var LimitData = function () {
    var _classDecorators = [ccclass('LimitData')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Tablelimits_1.Tablelimits;
    var LimitData = _classThis = /** @class */ (function (_super) {
        __extends(LimitData_1, _super);
        function LimitData_1(id) {
            var _this = _super.call(this) || this;
            _this.init(id);
            return _this;
        }
        LimitData_1.prototype.getDesc = function () {
            var desc = "";
            var lang = new LangData_1.LangData(this.taskDesc);
            var result = lang.getDesc();
            if (this.limitType == 113) {
                //集齐xx套装所有部件
                var suitData = new SuitData_1.SuitData(parseInt(this.typeValue));
                desc = Oops_1.oops.language.getLangString(result, suitData.getName());
            }
            else if (this.limitType == 114) {
                //房屋评级达到xx
                var houseData = new houseRateData_1.houseRateData(parseInt(this.typeValue));
                desc = Oops_1.oops.language.getLangString(result, houseData.getName());
            }
            else if (this.limitType == 115) {
                //完成xx事件
                var eventData = new EventData_1.EventData(parseInt(this.typeValue));
                desc = Oops_1.oops.language.getLangString(result, eventData.getName());
            }
            else {
                desc = Oops_1.oops.language.getLangString(result, this.typeValue);
            }
            return desc;
        };
        return LimitData_1;
    }(_classSuper));
    __setFunctionName(_classThis, "LimitData");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LimitData = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LimitData = _classThis;
}();
exports.LimitData = LimitData;
