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
exports.TaskData = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var Tabletask_1 = require("../table/Tabletask");
var DressData_1 = require("./DressData");
var EventData_1 = require("./EventData");
var FurnitureData_1 = require("./FurnitureData");
var LangData_1 = require("./LangData");
var SuitData_1 = require("./SuitData");
var houseRateData_1 = require("./houseRateData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var TaskData = function () {
    var _classDecorators = [ccclass('TaskData')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Tabletask_1.Tabletask;
    var TaskData = _classThis = /** @class */ (function (_super) {
        __extends(TaskData_1, _super);
        function TaskData_1(id, id1) {
            var _this = _super.call(this) || this;
            _this.init(id, id1);
            return _this;
        }
        /**
         * 主线任务描述
         * @returns
         */
        TaskData_1.prototype.getMainTaskDesc = function () {
            var lang = new LangData_1.LangData(this.taskDescription);
            var result = lang.getDesc();
            if (this.taskType == 1) {
                //获得{0}家具{1}件
                var data = new FurnitureData_1.FurnitureData(this.value);
                result = Oops_1.oops.language.getLangString(result, data.getName(), this.value1);
            }
            else if (this.taskType == 3) {
                //获得{0}时装{1}件
                var data = new DressData_1.DressData(this.value);
                result = Oops_1.oops.language.getLangString(result, data.getName(), this.value1);
            }
            else if (this.taskType == 9) {
                //回收id为{0}的家具
                var data = new FurnitureData_1.FurnitureData(this.value);
                result = Oops_1.oops.language.getLangString(result, data.getName());
            }
            else if (this.taskType == 14) {
                //穿戴{0}套装，{1}件
                var data = new SuitData_1.SuitData(this.value);
                result = Oops_1.oops.language.getLangString(result, data.getName(), this.value1);
            }
            else if (this.taskType == 28 || this.taskType == 29) {
                // 外出事件{0}开箱{1}次  外出事件{0}布置{1}次
                var data = new EventData_1.EventData(this.value);
                result = Oops_1.oops.language.getLangString(result, data.getName(), this.value1);
            }
            else if (this.taskType == 30) {
                //房屋评级为{0}
                var data = new houseRateData_1.houseRateData(this.value);
                result = Oops_1.oops.language.getLangString(result, data.getName());
            }
            else {
                result = Oops_1.oops.language.getLangString(result, this.value);
            }
            return result;
        };
        /**
         * 主线任务所需数量
         * @returns
         */
        TaskData_1.prototype.getMainTaskValue = function () {
            if (this.taskType == 1 || this.taskType == 3 || this.taskType == 14 || this.taskType == 28 || this.taskType == 29) {
                return this.value1;
            }
            else {
                return this.value;
            }
        };
        /**
         * 每日任务描述
         * @returns
         */
        TaskData_1.prototype.getDailyTaskDesc = function () {
            var lang = new LangData_1.LangData(this.taskDescription);
            var result = lang.getDesc();
            return Oops_1.oops.language.getLangString(result, this.value);
        };
        return TaskData_1;
    }(_classSuper));
    __setFunctionName(_classThis, "TaskData");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TaskData = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TaskData = _classThis;
}();
exports.TaskData = TaskData;
