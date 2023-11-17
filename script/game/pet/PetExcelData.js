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
exports.PetExcelData = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var JsonUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var Tablepet_1 = require("../common/table/Tablepet");
var LangData_1 = require("../common/tableData/LangData");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var PetExcelData = function () {
    var _classDecorators = [ccclass('PetExcelData')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Tablepet_1.Tablepet;
    var PetExcelData = _classThis = /** @class */ (function (_super) {
        __extends(PetExcelData_1, _super);
        function PetExcelData_1(id) {
            var _this = _super.call(this) || this;
            _this.unlockPay = 0;
            _this.allSkin = [];
            _this.petActArray = [];
            _this.roleActArray = [];
            _this.init(id);
            _this.unlockPay = Number(StringUtil_1.StringUtil.stringToArray5(_this.openConsume)[2]);
            _this.allSkin = StringUtil_1.StringUtil.stringToArray2(_this.skin);
            _this.petActArray = StringUtil_1.StringUtil.stringToArray2(_this.petAm);
            _this.roleActArray = StringUtil_1.StringUtil.stringToArray2(_this.roleAm);
            return _this;
        }
        PetExcelData_1.prototype.getName = function () {
            var lang = new LangData_1.LangData(this.petName);
            var result = lang.getDesc();
            return result;
        };
        //获取随机待机语录
        PetExcelData_1.prototype.getAwaitNagging = function () {
            var awaitNaggingArray = StringUtil_1.StringUtil.stringToArray2(this.petNagging);
            var rand = (0, cc_1.randomRangeInt)(0, awaitNaggingArray.length);
            var lang = new LangData_1.LangData(Number(awaitNaggingArray[rand]));
            return lang.getDesc();
        };
        //获取随机喂食语录
        PetExcelData_1.prototype.getFeedNagging = function () {
            var feedNaggingArray = StringUtil_1.StringUtil.stringToArray2(this.feedNagging);
            var rand = (0, cc_1.randomRangeInt)(0, feedNaggingArray.length);
            var lang = new LangData_1.LangData(Number(feedNaggingArray[rand]));
            return lang.getDesc();
        };
        //获取待机随机动作
        PetExcelData_1.prototype.getAwaitActName = function () {
            var acts = StringUtil_1.StringUtil.stringToArray2(this.openMove);
            var rand = (0, cc_1.randomRangeInt)(0, acts.length);
            return acts[rand];
        };
        //获取随机交互动作  [] index 0-宠物动作，1-人物动作
        PetExcelData_1.prototype.getInteractionAct = function () {
            var rand = (0, cc_1.randomRangeInt)(0, this.petActArray.length);
            return [this.petActArray[rand], this.roleActArray[rand]];
        };
        PetExcelData_1.getAllData = function () {
            if (PetExcelData.allData.length > 0) {
                return PetExcelData.allData;
            }
            PetExcelData.allData = [];
            var table = JsonUtil_1.JsonUtil.get(Tablepet_1.Tablepet.TableName);
            for (var key in table) {
                PetExcelData.allData.push(new PetExcelData(parseInt(key)));
            }
            ;
            return PetExcelData.allData;
        };
        return PetExcelData_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PetExcelData");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PetExcelData = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.allData = [];
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PetExcelData = _classThis;
}();
exports.PetExcelData = PetExcelData;
