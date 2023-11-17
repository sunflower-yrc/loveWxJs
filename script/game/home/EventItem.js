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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventItem = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var DataManager_1 = require("../../Global/DataManager");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var TriggerData_1 = require("../common/tableData/TriggerData");
var recycleMgr_1 = require("../recycle/recycleMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var TalkData_1 = require("../common/tableData/TalkData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var EventItem = function () {
    var _classDecorators = [ccclass('EventItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _time_decorators;
    var _time_initializers = [];
    var _timeBg_decorators;
    var _timeBg_initializers = [];
    var EventItem = _classThis = /** @class */ (function (_super) {
        __extends(EventItem_1, _super);
        function EventItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.event = (__runInitializers(_this, _instanceExtraInitializers), null);
            _this.time = __runInitializers(_this, _time_initializers, null);
            _this.timeBg = __runInitializers(_this, _timeBg_initializers, null);
            return _this;
        }
        EventItem_1.prototype.init = function (event) {
            this.event = event;
            this.schedule(this.showTime, 1);
            this.showTime();
            switch (event.eventType) {
                case TriggerData_1.EventTypeEnum.businessEventDress:
                case TriggerData_1.EventTypeEnum.businessEventFurniture:
                case TriggerData_1.EventTypeEnum.outside:
                    //默认图标已经是外出的图标了
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("bg", this.node, GameResPath_1.GameResPath.getEventItemSpritePath(event.eventType), BundleConfig_1.default.instance.guiBundle.name);
                    break;
                case TriggerData_1.EventTypeEnum.recoverItems:
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("bg", this.node, GameResPath_1.GameResPath.getEventItemSpritePath(event.eventType), BundleConfig_1.default.instance.guiBundle.name);
                    break;
                case TriggerData_1.EventTypeEnum.adotPet:
                    break;
                default:
                    break;
            }
        };
        /**显示时间 */
        EventItem_1.prototype.showTime = function () {
            if (!this.node.active) {
                return;
            }
            var trigger = SingletonModuleComp_1.smc.account.AccountModel.eventList.get(Number(this.event.triggerID));
            var time = StringUtil_1.StringUtil.formatActivityTimeWithSec((this.event.eventTime + trigger.startTime) - Math.ceil(Date.now() / 1000));
            ViewUtil_1.ViewUtil.setLabelString(this.time, time);
            var countTime = (this.event.eventTime + trigger.startTime) - Math.ceil(Date.now() / 1000);
            if (countTime > 0) {
                this.time.active = true;
                this.timeBg.active = true;
                var time_1 = StringUtil_1.StringUtil.formatActivityTimeWithSec(countTime);
                ViewUtil_1.ViewUtil.setLabelString(this.time, time_1);
            }
            else {
                this.time.active = false;
                this.timeBg.active = false;
                if (this.event.eventType != TriggerData_1.EventTypeEnum.outside) {
                    this.node.active = false;
                }
            }
        };
        /**点击事件 */
        EventItem_1.prototype.clickEvent = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            switch (this.event.eventType) {
                case TriggerData_1.EventTypeEnum.outside:
                    //判断是否是首次有对话？
                    var hastalk = this.event.mapCache.get("hasTalk");
                    if (hastalk)
                        this.event.hasTalk = hastalk;
                    if (!this.event.hasTalk) {
                        var talkTb = new TalkData_1.TalkData(parseInt(this.event.typeValue), this.event);
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.Dialogue, talkTb);
                        this.event.mapCache.set("hasTalk", true);
                        return;
                    }
                    var trigger = SingletonModuleComp_1.smc.account.AccountModel.eventList.get(this.event.triggerID);
                    if (trigger.eventId == "0") {
                        return;
                    }
                    var countTime = (this.event.eventTime + trigger.startTime) - Math.ceil(Date.now() / 1000);
                    if (countTime > 0 || this.event.eventTime <= 0) {
                        DataManager_1.default.Instance.getUserOutSideFurniture(this.event);
                        return;
                    }
                    else {
                        DataManager_1.default.Instance.getUserOutSideFurniture(this.event);
                    }
                    break;
                case TriggerData_1.EventTypeEnum.recoverItems:
                    recycleMgr_1.RecycleMgr.Instance.eventId = this.event.id;
                    DataMgr_1.DataMgr.gotoFunction([], this.event.jumpUi);
                    break;
                case TriggerData_1.EventTypeEnum.businessEventDress:
                    //请求
                    HttpPost_1.HttpPost.instance.getMerchantDetail(5001, function (data) {
                        data.type = 2;
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.BusinessEvent, data);
                    });
                    break;
                case TriggerData_1.EventTypeEnum.businessEventFurniture:
                    //请求
                    HttpPost_1.HttpPost.instance.getMerchantDetail(6001, function (data) {
                        data.type = 1;
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.BusinessEvent, data);
                    });
                    break;
                default:
                    break;
            }
        };
        return EventItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "EventItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _time_decorators = [property(cc_1.Node)];
        _timeBg_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _time_decorators, { kind: "field", name: "time", static: false, private: false, access: { has: function (obj) { return "time" in obj; }, get: function (obj) { return obj.time; }, set: function (obj, value) { obj.time = value; } }, metadata: _metadata }, _time_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _timeBg_decorators, { kind: "field", name: "timeBg", static: false, private: false, access: { has: function (obj) { return "timeBg" in obj; }, get: function (obj) { return obj.timeBg; }, set: function (obj, value) { obj.timeBg = value; } }, metadata: _metadata }, _timeBg_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EventItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EventItem = _classThis;
}();
exports.EventItem = EventItem;
