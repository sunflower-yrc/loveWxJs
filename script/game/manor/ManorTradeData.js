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
exports.ManorTradeData = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var JsonUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var TablemanorTrade_1 = require("../common/table/TablemanorTrade");
var LangData_1 = require("../common/tableData/LangData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ManorTradeData = function () {
    var _classDecorators = [ccclass('ManorTradeData')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = TablemanorTrade_1.TablemanorTrade;
    var ManorTradeData = _classThis = /** @class */ (function (_super) {
        __extends(ManorTradeData_1, _super);
        function ManorTradeData_1(id) {
            var _this = _super.call(this) || this;
            _this.rateArray = [];
            _this.seedArray = [];
            _this.resultDesc = [];
            _this.init(id);
            var strs = StringUtil_1.StringUtil.stringToArray2(_this.random2);
            strs.forEach(function (e) {
                var i = StringUtil_1.StringUtil.stringToArray1(e);
                _this.rateArray.push(Number(i[1]));
                _this.seedArray.push(i[0]);
            });
            var str = StringUtil_1.StringUtil.stringToArray2(_this.random3);
            str.forEach(function (e) {
                _this.resultDesc.push(Number(e));
            });
            return _this;
        }
        ManorTradeData_1.getAllData = function () {
            if (ManorTradeData.allData.length > 0) {
                return ManorTradeData.allData;
            }
            ManorTradeData.allData = [];
            var table = JsonUtil_1.JsonUtil.get(TablemanorTrade_1.TablemanorTrade.TableName);
            for (var key in table) {
                ManorTradeData.allData.push(new ManorTradeData(parseInt(key)));
            }
            ;
            return ManorTradeData.allData;
        };
        //跑马灯消息
        ManorTradeData_1.prototype.getMsg = function () {
            var lang = new LangData_1.LangData(this.name);
            var result = lang.getDesc();
            return result;
        };
        //获取结果描述
        ManorTradeData_1.prototype.getResultDescByIndex = function (index) {
            var lang = new LangData_1.LangData(this.resultDesc[index]);
            var result = lang.getDesc();
            return result;
        };
        //获取百分比
        ManorTradeData_1.prototype.getPercentDesc = function (index) {
            if (this.rateArray[index] > 1)
                return Oops_1.oops.language.getLangByID("manor.dealUp", this.rateArray[index] * 100);
            else
                return Oops_1.oops.language.getLangByID("manor.dealDown", (1 - this.rateArray[index]) * 100);
        };
        //获取种植数组
        ManorTradeData_1.prototype.getPlantArray = function (index) {
            return StringUtil_1.StringUtil.stringToArray5(this.seedArray[index]);
        };
        return ManorTradeData_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ManorTradeData");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ManorTradeData = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.allData = [];
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ManorTradeData = _classThis;
}();
exports.ManorTradeData = ManorTradeData;
