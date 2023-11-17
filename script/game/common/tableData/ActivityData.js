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
exports.ActivityData = void 0;
var cc_1 = require("cc");
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var StringUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var Tableactivitytime_1 = require("../table/Tableactivitytime");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ActivityData = function () {
    var _classDecorators = [ccclass('ActivityData')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Tableactivitytime_1.Tableactivitytime;
    var ActivityData = _classThis = /** @class */ (function (_super) {
        __extends(ActivityData_1, _super);
        function ActivityData_1(id) {
            var _this = _super.call(this) || this;
            _this.init(id);
            return _this;
        }
        ActivityData_1.getAllData = function () {
            if (ActivityData.allData.length > 0) {
                return ActivityData.allData;
            }
            ActivityData.allData = [];
            var table = JsonUtil_1.JsonUtil.get(Tableactivitytime_1.Tableactivitytime.TableName);
            for (var key in table) {
                ActivityData.allData.push(new ActivityData(parseInt(key)));
            }
            ;
            return ActivityData.allData;
        };
        // 对字符串类型的时间进行转换，转换后返回一个Date对象
        ActivityData_1.parseTime = function (timeStr) {
            var _a = timeStr.split(':'), hour = _a[0], minute = _a[1], second = _a[2];
            var currentDate = new Date();
            return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), parseInt(hour), parseInt(minute), parseInt(second));
        };
        // // 获取当前时间对应的交互日程表数据
        // static getCurrentSchedule(time: string) {
        //     // const schedules = this.getAllSchedules();
        //     const currentDate = this.parseTime(time);
        //     const currentHour = currentDate.getHours();
        //     let currentSchedule = null;
        //     for (let i = 0; i < this.getAllData().length; i++) {
        //         const schedule = this.getAllData()[i];
        //         const startTime = this.parseTime(schedule.startTime);
        //         const endHour = (currentHour < 10) ? 9 : 11; // 特殊情况，早上10点之前的世界都是第一条数据
        //         if (startTime.getHours() >= currentHour && startTime.getHours() <= endHour) {
        //             currentSchedule = schedule;
        //             break;
        //         }
        //     }
        //     return currentSchedule;
        // }
        // // 获取当前时间对应的交互日程表数据
        // static getCurrentSchedule(time: string) {
        //     const schedules = this.getAllData();
        //     const currentDate = this.parseTime(time);
        //     const currentHour = currentDate.getHours();
        //     let currentSchedule = null;
        //     for (let i = 0; i < schedules.length; i++) {
        //         const schedule = schedules[i];
        //         const startTime = this.parseTime(schedule.startTime);
        //         if (startTime.getHours() === currentHour || startTime.getHours() > currentHour) {
        //             currentSchedule = schedule;
        //             break;
        //         }
        //     }
        //     if (!currentSchedule) {
        //         // 特殊情况，早上10点之前的世界都是第一条数据
        //         const firstSchedule = schedules[0];
        //         const firstStartTime = this.parseTime(firstSchedule.startTime);
        //         if (currentHour < firstStartTime.getHours()) {
        //             currentSchedule = firstSchedule;
        //         }
        //     }
        //     return currentSchedule;
        // }
        // 获取当前时间对应的交互日程表数据
        ActivityData_1.getCurrentSchedule = function (time) {
            var schedules = this.getAllData();
            var currentDate = this.parseTime(time);
            var currentHour = currentDate.getHours();
            var currentSchedule = null;
            for (var i = 0; i < schedules.length; i++) {
                var schedule = schedules[i];
                var startTime = this.parseTime(StringUtil_1.StringUtil.formatActivityTimeWithSec(schedule.startTime));
                if (startTime.getHours() === currentHour) {
                    currentSchedule = schedule;
                    break;
                }
                else if (startTime.getHours() > currentHour) {
                    currentSchedule = schedules[i - 1];
                    break;
                }
            }
            if (!currentSchedule) {
                // 如果当前时间在最后一条数据的时间之后，返回最后一条数据
                currentSchedule = schedules[schedules.length - 1];
            }
            return currentSchedule;
        };
        return ActivityData_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ActivityData");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ActivityData = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.allData = [];
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ActivityData = _classThis;
}();
exports.ActivityData = ActivityData;
