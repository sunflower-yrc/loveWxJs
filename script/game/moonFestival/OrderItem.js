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
exports.OrderItem = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var cc_3 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var DropMgr_1 = require("../mgr/DropMgr");
var cc_4 = require("cc");
var cc_5 = require("cc");
var cc_6 = require("cc");
var cc_7 = require("cc");
var HttpPost_1 = require("../tools/HttpPost");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var DataObject_1 = require("../tools/DataObject");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataMgr_1 = require("../mgr/DataMgr");
var ccclass = cc_3._decorator.ccclass, property = cc_3._decorator.property;
var OrderItem = function () {
    var _classDecorators = [ccclass('OrderItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_3.Component;
    var _instanceExtraInitializers = [];
    var _lay_decorators;
    var _lay_initializers = [];
    var _itemLay_decorators;
    var _itemLay_initializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _rewardItem_decorators;
    var _rewardItem_initializers = [];
    var _getBtn_decorators;
    var _getBtn_initializers = [];
    var OrderItem = _classThis = /** @class */ (function (_super) {
        __extends(OrderItem_1, _super);
        function OrderItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.lay = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _lay_initializers, null));
            _this.itemLay = __runInitializers(_this, _itemLay_initializers, null);
            _this.item = __runInitializers(_this, _item_initializers, null);
            _this.rewardItem = __runInitializers(_this, _rewardItem_initializers, null);
            _this.getBtn = __runInitializers(_this, _getBtn_initializers, null);
            _this.time = null;
            return _this;
        }
        OrderItem_1.prototype.init = function (data) {
            this.data = data;
            if (data.status != 3) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("bg", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getNode", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("not", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("speedBtn", this.node, false);
                this.lay.active = true;
                this.setUI();
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("bg", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getNode", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("not", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("speedBtn", this.node, true);
                this.lay.active = false;
                this.setTimer();
            }
        };
        OrderItem_1.prototype.onDestroy = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
        };
        OrderItem_1.prototype.setUI = function () {
            var itemDropData = DropMgr_1.DropMgr.getDropData(this.data.require);
            this.onItemList(this.lay, itemDropData);
            var rewardData = DropMgr_1.DropMgr.getDropData(this.data.reward);
            this.onItemList(this.itemLay, rewardData, true);
            if (this.data.status == 1) {
                this.getBtn.getComponent(cc_4.Sprite).grayscale = true;
                this.getBtn.getComponent(cc_7.Button).interactable = false;
                this.getBtn.getChildByName("lab").getComponent(cc_5.LabelOutline).color = new cc_6.Color("#B4B2AC");
            }
            else {
                this.getBtn.getComponent(cc_7.Button).interactable = true;
                this.getBtn.getComponent(cc_4.Sprite).grayscale = false;
                this.getBtn.getChildByName("lab").getComponent(cc_5.LabelOutline).color = new cc_6.Color("#89B964");
            }
        };
        //物品列表渲染
        OrderItem_1.prototype.onItemList = function (parent, data, isReward) {
            if (isReward === void 0) { isReward = false; }
            var len = parent.children.length > data.length ?
                parent.children.length : data.length;
            var insItem = isReward ? this.rewardItem : this.item;
            for (var i = 0; i < len; i++) {
                var itemNode = void 0;
                if (parent.children[i] && data[i]) {
                    parent.children[i].active = true;
                    itemNode = parent.children[i];
                }
                else if (!parent.children[i] && data[i]) {
                    var item = (0, cc_1.instantiate)(insItem);
                    item.parent = parent;
                    itemNode = item;
                }
                else if (parent.children[i] && !data[i]) {
                    parent.children[i].active = false;
                    continue;
                }
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", itemNode, data[i].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("num", itemNode, "x" + data[i].dropAmount);
            }
        };
        /**创建计时器 */
        OrderItem_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            var curTime = Oops_1.oops.timer.getServerTime();
            this.time = (this.data.endTime - curTime);
            this.onSecond();
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        OrderItem_1.prototype.onSecond = function () {
            var time;
            time = StringUtil_1.StringUtil.formatActivityTimeWithSec(this.time);
            ViewUtil_1.ViewUtil.setLabelStringByName("not/timeLab", this.node, time);
        };
        OrderItem_1.prototype.onComplete = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
            HttpPost_1.HttpPost.instance.nationalDayOrderInfo(function (data) {
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateOrderData, data);
            });
        };
        OrderItem_1.prototype.getReward = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.nationalDayGetOrderReward(this.data.orderId, function (data) {
                //显示掉落
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.MoonFestival;
                dropInfo.UIID = [GameUIConfig_1.UIID.MoonFestival];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateOrderData, data.info);
                DataMgr_1.DataMgr.updateUserData(data.userGrade, null, null);
            });
        };
        OrderItem_1.prototype.lookSpeed = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.Order, function (adsTipType) {
                HttpPost_1.HttpPost.instance.nationalDayOrderVideo(_this.data.orderId, function (data) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateOrderData, data.info);
                });
            });
        };
        return OrderItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "OrderItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _lay_decorators = [property(cc_3.Node)];
        _itemLay_decorators = [property(cc_3.Node)];
        _item_decorators = [property(cc_2.Prefab)];
        _rewardItem_decorators = [property(cc_2.Prefab)];
        _getBtn_decorators = [property(cc_3.Node)];
        __esDecorate(null, null, _lay_decorators, { kind: "field", name: "lay", static: false, private: false, access: { has: function (obj) { return "lay" in obj; }, get: function (obj) { return obj.lay; }, set: function (obj, value) { obj.lay = value; } }, metadata: _metadata }, _lay_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _itemLay_decorators, { kind: "field", name: "itemLay", static: false, private: false, access: { has: function (obj) { return "itemLay" in obj; }, get: function (obj) { return obj.itemLay; }, set: function (obj, value) { obj.itemLay = value; } }, metadata: _metadata }, _itemLay_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rewardItem_decorators, { kind: "field", name: "rewardItem", static: false, private: false, access: { has: function (obj) { return "rewardItem" in obj; }, get: function (obj) { return obj.rewardItem; }, set: function (obj, value) { obj.rewardItem = value; } }, metadata: _metadata }, _rewardItem_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _getBtn_decorators, { kind: "field", name: "getBtn", static: false, private: false, access: { has: function (obj) { return "getBtn" in obj; }, get: function (obj) { return obj.getBtn; }, set: function (obj, value) { obj.getBtn = value; } }, metadata: _metadata }, _getBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderItem = _classThis;
}();
exports.OrderItem = OrderItem;
