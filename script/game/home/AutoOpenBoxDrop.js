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
exports.AutoOpenBoxDrop = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DropItem_1 = require("../drop/DropItem");
var DropMgr_1 = require("../mgr/DropMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var List_1 = require("../tools/List");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var AutoOpenBoxDrop = function () {
    var _classDecorators = [ccclass('AutoOpenBoxDrop')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _nodeScrollview_decorators;
    var _nodeScrollview_initializers = [];
    var _confirmBtn_decorators;
    var _confirmBtn_initializers = [];
    var _stopBtn_decorators;
    var _stopBtn_initializers = [];
    var AutoOpenBoxDrop = _classThis = /** @class */ (function (_super) {
        __extends(AutoOpenBoxDrop_1, _super);
        function AutoOpenBoxDrop_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.dropInfo = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.nodeScrollview = __runInitializers(_this, _nodeScrollview_initializers, null);
            _this.multiInitDone = false;
            _this.currencyAnims = [];
            _this.confirmBtn = __runInitializers(_this, _confirmBtn_initializers, null);
            _this.stopBtn = __runInitializers(_this, _stopBtn_initializers, null);
            return _this;
        }
        AutoOpenBoxDrop_1.prototype.btn_stop = function () {
            //数据处理一遍
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.unscheduleAllCallbacks();
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.AutoOpenBoxDrop);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, this.dropInfo);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.CheckCarEvent);
        };
        AutoOpenBoxDrop_1.prototype.showDrops = function () {
            var _this = this;
            this.scheduleOnce(function () {
                HttpPost_1.HttpPost.instance.openBox(0, function (data) {
                    SingletonModuleComp_1.smc.account.AccountModel.boxOpenTimes++;
                    SingletonModuleComp_1.smc.account.AccountModel.superOpenCount = data.openBoxCount;
                    //宝箱
                    SingletonModuleComp_1.smc.account.AccountModel.setOpenBoxTime = data.openBoxTime;
                    //当前开箱次数
                    SingletonModuleComp_1.smc.account.AccountModel.setTodayOpenTimes = data.todayOpenTimes;
                    /**刷新第二主键 */
                    SingletonModuleComp_1.smc.account.AccountModel.setBoxConfigKey = data.configKey;
                    //更新数据
                    SingletonModuleComp_1.smc.account.AccountModel.boxFirstKey = data.boxConfigId;
                    SingletonModuleComp_1.smc.account.AccountModel.noviceBox = data.noviceBox;
                    SingletonModuleComp_1.smc.account.AccountModel.vm.giveTimes = data.giveTimes;
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RefreshCarIsSuper);
                    //let dropData: DropData[] = [];
                    for (var i = 0; i < data.prop.length; i++) {
                        var element = data.prop[i];
                        var dropItem = DropMgr_1.DropMgr.getDropInfo(element.type, element.dropId, element.dropAmount);
                        _this.dropInfo.dropData.push(dropItem);
                    }
                    //this.dropInfo.dropData.concat(dropData);
                    _this.dropInfo.dropFrom = DataObject_1.DropFrom.Box;
                    _this.nodeScrollview.numItems = _this.dropInfo.dropData.length;
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.CheckCarEvent);
                });
            }, 0.5);
        };
        /**
         * render回调
        */
        AutoOpenBoxDrop_1.prototype.renderEventCallback = function (item, idx) {
            var _a;
            (_a = item.getComponent(DropItem_1.DropItem)) === null || _a === void 0 ? void 0 : _a.initDataNoSave(this.dropInfo.dropData[idx]);
            //金币 钻石动画
            if (this.dropInfo.dropData[idx].type == DataObject_1.DropType.Coins && this.currencyAnims[0] != 1) {
                this.currencyAnims[0] = 1;
            }
            else if (this.dropInfo.dropData[idx].type == DataObject_1.DropType.Jewel && this.currencyAnims[1] != 1) {
                this.currencyAnims[1] = 1;
            }
            if (idx == this.dropInfo.dropData.length - 1) {
                //背包排序
                var furniture = false;
                var dress = false;
                for (var i = 0; i < this.dropInfo.dropData.length; i++) {
                    var element = this.dropInfo.dropData[i];
                    if (element.type == DataObject_1.DropType.Furniture && !furniture) {
                        furniture = true;
                    }
                    else if (element.type == DataObject_1.DropType.Dress && !dress) {
                        dress = true;
                    }
                }
                if (furniture) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SortFurniture);
                    //home 红点
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FurnitureRedDotHome);
                }
                if (dress) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SortDress);
                    //home 红点
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.DressRedDotHome);
                }
                //加载完成
                this.multiInitDone = true;
            }
        };
        AutoOpenBoxDrop_1.prototype.onAdded = function () {
            var _this = this;
            this.unscheduleAllCallbacks();
            this.showDrops();
            this.dropInfo = new DataObject_1.DropInfo();
            this.dropInfo.dropData = [];
            this.schedule(function () {
                if (SingletonModuleComp_1.smc.account.AccountModel.vm.openBoxSpeed > 0) {
                    HttpPost_1.HttpPost.instance.speedUpOpenBox(1, function (data) {
                        SingletonModuleComp_1.smc.account.AccountModel.setOpenBoxTime = data.openBoxTime;
                        SingletonModuleComp_1.smc.account.AccountModel.vm.openBoxSpeed--;
                        _this.showDrops();
                    });
                }
                else {
                    _this.unscheduleAllCallbacks();
                    _this.confirmBtn.active = true;
                    _this.stopBtn.active = false;
                    ViewUtil_1.ViewUtil.findChildByName("root/bg/runingTips", _this.node).active = false;
                }
            }, 6);
        };
        return AutoOpenBoxDrop_1;
    }(_classSuper));
    __setFunctionName(_classThis, "AutoOpenBoxDrop");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _nodeScrollview_decorators = [property(List_1.default)];
        _confirmBtn_decorators = [property(cc_1.Node)];
        _stopBtn_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _nodeScrollview_decorators, { kind: "field", name: "nodeScrollview", static: false, private: false, access: { has: function (obj) { return "nodeScrollview" in obj; }, get: function (obj) { return obj.nodeScrollview; }, set: function (obj, value) { obj.nodeScrollview = value; } }, metadata: _metadata }, _nodeScrollview_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _confirmBtn_decorators, { kind: "field", name: "confirmBtn", static: false, private: false, access: { has: function (obj) { return "confirmBtn" in obj; }, get: function (obj) { return obj.confirmBtn; }, set: function (obj, value) { obj.confirmBtn = value; } }, metadata: _metadata }, _confirmBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _stopBtn_decorators, { kind: "field", name: "stopBtn", static: false, private: false, access: { has: function (obj) { return "stopBtn" in obj; }, get: function (obj) { return obj.stopBtn; }, set: function (obj, value) { obj.stopBtn = value; } }, metadata: _metadata }, _stopBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AutoOpenBoxDrop = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AutoOpenBoxDrop = _classThis;
}();
exports.AutoOpenBoxDrop = AutoOpenBoxDrop;
