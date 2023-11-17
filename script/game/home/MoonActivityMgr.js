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
exports.MoonActivityMgr = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var MoonActivityMgr = function () {
    var _classDecorators = [ccclass('MoonActivityMgr')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var MoonActivityMgr = _classThis = /** @class */ (function (_super) {
        __extends(MoonActivityMgr_1, _super);
        function MoonActivityMgr_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.time = null;
            _this.curTime = 0;
            _this.isInit = false;
            return _this;
        }
        MoonActivityMgr_1.prototype.start = function () {
            this.setData();
        };
        MoonActivityMgr_1.prototype.onDestroy = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
        };
        MoonActivityMgr_1.prototype.setData = function () {
            if (SingletonModuleComp_1.smc.account.AccountModel.nationalDay.isOpen && SingletonModuleComp_1.smc.account.AccountModel.isShowPay) {
                this.node.active = true;
                if (!this.isInit) {
                    this.curTime = SingletonModuleComp_1.smc.account.AccountModel.nationalDay.endTime;
                    this.setTimer();
                    this.isInit = true;
                }
            }
            else {
                this.node.active = false;
            }
        };
        /**创建计时器 */
        MoonActivityMgr_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            var curTime = Oops_1.oops.timer.getServerTime();
            this.time = (this.curTime - curTime);
            this.onSecond();
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        MoonActivityMgr_1.prototype.onSecond = function () {
            ViewUtil_1.ViewUtil.setLabelStringByName("time", this.node, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.time));
        };
        MoonActivityMgr_1.prototype.onComplete = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
            this.node.active = false;
        };
        MoonActivityMgr_1.prototype.clickBtn = function () {
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.MoonFestival);
        };
        return MoonActivityMgr_1;
    }(_classSuper));
    __setFunctionName(_classThis, "MoonActivityMgr");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MoonActivityMgr = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MoonActivityMgr = _classThis;
}();
exports.MoonActivityMgr = MoonActivityMgr;
