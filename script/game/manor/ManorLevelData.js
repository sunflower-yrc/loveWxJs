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
exports.ManorLevelData = void 0;
var cc_1 = require("cc");
var JsonUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var TablemanorLevel_1 = require("../common/table/TablemanorLevel");
var ManorFacilitiesData_1 = require("./ManorFacilitiesData");
var ManorPlantData_1 = require("./ManorPlantData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ManorLevelData = function () {
    var _classDecorators = [ccclass('ManorLevelData')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = TablemanorLevel_1.TablemanorLevel;
    var ManorLevelData = _classThis = /** @class */ (function (_super) {
        __extends(ManorLevelData_1, _super);
        function ManorLevelData_1(id) {
            var _this = _super.call(this) || this;
            _this.consumeNum = 0;
            _this.init(id);
            var consume = StringUtil_1.StringUtil.stringToArray5(_this.upConsume);
            if (consume.length > 0) {
                _this.consumeNum = Number(consume[2]);
            }
            return _this;
        }
        ManorLevelData_1.getAllData = function () {
            if (ManorLevelData.allData.length > 0) {
                return ManorLevelData.allData;
            }
            ManorLevelData.allData = [];
            var table = JsonUtil_1.JsonUtil.get(TablemanorLevel_1.TablemanorLevel.TableName);
            for (var key in table) {
                ManorLevelData.allData.push(new ManorLevelData(parseInt(key)));
            }
            ;
            return ManorLevelData.allData;
        };
        ManorLevelData_1.prototype.getWaterPowerLimitDescByLevel = function (level) {
            var _a;
            var result = this.actionPowerMax + "->" + ((_a = ManorLevelData.getAllData().find(function (x) { return x.id == (level + 1); })) === null || _a === void 0 ? void 0 : _a.actionPowerMax);
            return result;
        };
        ManorLevelData_1.prototype.getPlotLockDescByLevel = function (curNum, level) {
            var nextNum = 0;
            ManorFacilitiesData_1.ManorFacilitiesData.getAllPlotData().forEach(function (e) {
                if (e.manorLevel == (level + 1))
                    nextNum += 1;
            });
            return curNum + "->" + (curNum + nextNum);
        };
        ManorLevelData_1.prototype.getlockPlantDescByLevel = function (level) {
            var result = "";
            ManorPlantData_1.ManorPlantData.getAllData().forEach(function (e) {
                if (e.openLimit == (level + 1))
                    result += e.getName() + ",";
            });
            return result;
        };
        return ManorLevelData_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ManorLevelData");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ManorLevelData = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.allData = [];
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ManorLevelData = _classThis;
}();
exports.ManorLevelData = ManorLevelData;
