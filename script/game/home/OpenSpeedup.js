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
exports.OpenSpeedup = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var HttpPost_1 = require("../tools/HttpPost");
var DataObject_1 = require("../tools/DataObject");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var OpenSpeedup = function () {
    var _classDecorators = [ccclass('OpenSpeedup')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _labelTime_decorators;
    var _labelTime_initializers = [];
    var _labelReduce_decorators;
    var _labelReduce_initializers = [];
    var _tickKetLabel_decorators;
    var _tickKetLabel_initializers = [];
    var OpenSpeedup = _classThis = /** @class */ (function (_super) {
        __extends(OpenSpeedup_1, _super);
        function OpenSpeedup_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.labelTime = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _labelTime_initializers, null));
            _this.labelReduce = __runInitializers(_this, _labelReduce_initializers, null);
            _this.tickKetLabel = __runInitializers(_this, _tickKetLabel_initializers, null);
            _this.totalTime = 0;
            return _this;
        }
        OpenSpeedup_1.prototype.onAdded = function (param) {
            this.totalTime = param[0];
            ViewUtil_1.ViewUtil.setLabelString(this.labelReduce, "-" + this.formatTime(param[1]));
            this.showTime();
            SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.BoxSpeedup);
        };
        /**
         * 剩余时间
         */
        OpenSpeedup_1.prototype.showTime = function () {
            this.refreshTime();
            this.schedule(this.refreshTime, 1);
            this.freshTicket();
        };
        /**格式化时间 */
        OpenSpeedup_1.prototype.formatTime = function (remainingSeconds) {
            var hours = Math.floor(remainingSeconds / 3600);
            var minutes = Math.floor((remainingSeconds - (hours * 3600)) / 60);
            var seconds = remainingSeconds % 60;
            var hoursStr = hours.toString().padStart(2, '0');
            var minutesStr = minutes.toString().padStart(2, '0');
            var secondsStr = seconds.toString().padStart(2, '0');
            return hours > 0 ? "".concat(hoursStr, ":").concat(minutesStr, ":").concat(secondsStr) : "".concat(minutesStr, ":").concat(secondsStr);
        };
        OpenSpeedup_1.prototype.onDestroy = function () {
            this.unschedule(this.refreshTime);
        };
        OpenSpeedup_1.prototype.refreshTime = function () {
            if (this.totalTime > 0) {
                this.totalTime--;
                var time = this.formatTime(this.totalTime);
                ViewUtil_1.ViewUtil.setLabelString(this.labelTime, time);
            }
            else {
                //倒计时结束
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.OpenSpeedup);
            }
        };
        OpenSpeedup_1.prototype.btn_speedup = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.totalTime <= 0) {
                return;
            }
            //看广告
            SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.BoxSpeedup, function () {
                HttpPost_1.HttpPost.instance.speedUpOpenBox(0, function (data) {
                    SingletonModuleComp_1.smc.account.AccountModel.setOpenBoxTime = data.openBoxTime;
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SpeedUpOpenBox);
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.OpenSpeedup);
                });
            });
        };
        OpenSpeedup_1.prototype.btn_UseTicket = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.openBoxSpeed <= 0) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("box.notEnoughTicket"));
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.OpenSpeedup);
                HttpPost_1.HttpPost.instance.getMiniGame(function (data) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.TileGameHome, data);
                });
                return;
            }
            if (this.totalTime <= 0) {
                return;
            }
            HttpPost_1.HttpPost.instance.speedUpOpenBox(1, function (data) {
                SingletonModuleComp_1.smc.account.AccountModel.setOpenBoxTime = data.openBoxTime;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SpeedUpOpenBox);
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.OpenSpeedup);
                SingletonModuleComp_1.smc.account.AccountModel.vm.openBoxSpeed--;
            });
        };
        OpenSpeedup_1.prototype.freshTicket = function () {
            this.tickKetLabel.string = "".concat(1, "/").concat(SingletonModuleComp_1.smc.account.AccountModel.vm.openBoxSpeed);
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.openBoxSpeed <= 0) {
                this.tickKetLabel.color = new cc_1.Color(255, 67, 67);
                this.tickKetLabel.getComponent(cc_1.LabelOutline).color = new cc_1.Color(122, 67, 67);
            }
        };
        OpenSpeedup_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.OpenSpeedup);
        };
        return OpenSpeedup_1;
    }(_classSuper));
    __setFunctionName(_classThis, "OpenSpeedup");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _labelTime_decorators = [property(cc_1.Node)];
        _labelReduce_decorators = [property(cc_1.Node)];
        _tickKetLabel_decorators = [property(cc_1.Label)];
        __esDecorate(null, null, _labelTime_decorators, { kind: "field", name: "labelTime", static: false, private: false, access: { has: function (obj) { return "labelTime" in obj; }, get: function (obj) { return obj.labelTime; }, set: function (obj, value) { obj.labelTime = value; } }, metadata: _metadata }, _labelTime_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _labelReduce_decorators, { kind: "field", name: "labelReduce", static: false, private: false, access: { has: function (obj) { return "labelReduce" in obj; }, get: function (obj) { return obj.labelReduce; }, set: function (obj, value) { obj.labelReduce = value; } }, metadata: _metadata }, _labelReduce_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _tickKetLabel_decorators, { kind: "field", name: "tickKetLabel", static: false, private: false, access: { has: function (obj) { return "tickKetLabel" in obj; }, get: function (obj) { return obj.tickKetLabel; }, set: function (obj, value) { obj.tickKetLabel = value; } }, metadata: _metadata }, _tickKetLabel_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OpenSpeedup = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OpenSpeedup = _classThis;
}();
exports.OpenSpeedup = OpenSpeedup;
