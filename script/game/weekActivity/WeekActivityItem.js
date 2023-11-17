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
exports.WeekActivityItem = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var DataObject_1 = require("../tools/DataObject");
var cc_3 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var WeekActivity_1 = require("./WeekActivity");
var TaskData_1 = require("../common/tableData/TaskData");
var DropMgr_1 = require("../mgr/DropMgr");
var cc_4 = require("cc");
var cc_5 = require("cc");
var PurchaseData_1 = require("../common/tableData/PurchaseData");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var HttpPost_1 = require("../tools/HttpPost");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var cc_6 = require("cc");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var TipCommonItem_1 = require("../../comm/TipCommonItem");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var WeekActivityItem = function () {
    var _classDecorators = [ccclass('WeekActivityItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _taskList_decorators;
    var _taskList_initializers = [];
    var _giftList_decorators;
    var _giftList_initializers = [];
    var _pro_decorators;
    var _pro_initializers = [];
    var WeekActivityItem = _classThis = /** @class */ (function (_super) {
        __extends(WeekActivityItem_1, _super);
        function WeekActivityItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.item = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _item_initializers, null));
            _this.taskList = __runInitializers(_this, _taskList_initializers, null);
            _this.giftList = __runInitializers(_this, _giftList_initializers, null);
            _this.pro = __runInitializers(_this, _pro_initializers, null);
            _this.type = null;
            _this.weekAdTime = 0;
            return _this;
        }
        WeekActivityItem_1.prototype.init = function (data, type, weekAdTimes) {
            this.data = data;
            this.type = type;
            this.weekAdTime = weekAdTimes;
            var bol = Boolean(this.type == WeekActivity_1.WeekActivityType.task);
            ViewUtil_1.ViewUtil.setNodeActiveByName("dec", this.node, bol);
            ViewUtil_1.ViewUtil.setNodeActiveByName("limit", this.node, !bol);
            ViewUtil_1.ViewUtil.setNodeActiveByName("plat", this.node, bol);
            ViewUtil_1.ViewUtil.setNodeActiveByName("btnGift", this.node, !bol);
            ViewUtil_1.ViewUtil.setNodeActiveByName("gfitList", this.node, !bol);
            ViewUtil_1.ViewUtil.setNodeActiveByName("giftLab", this.node, !bol);
            ViewUtil_1.ViewUtil.setNodeActiveByName("taskList", this.node, bol);
            if (bol) {
                this.setTaskUI();
            }
            else {
                this.setGiftPack();
            }
        };
        WeekActivityItem_1.prototype.setGiftPack = function () {
            this.purchase = new PurchaseData_1.PurchaseData(this.data.id);
            var giftData = DropMgr_1.DropMgr.getDropData(this.purchase.reward);
            this.setListItem(giftData, this.giftList);
            ViewUtil_1.ViewUtil.setLabelStringByName("giftLab/dec1", this.node, this.purchase.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("btnGift/btn_buy/num", this.node, Oops_1.oops.language.getLangByID("weekActivity.times", ((this.weekAdTime > this.purchase.money ? this.purchase.money : this.weekAdTime) + "/" + this.purchase.money)));
            ViewUtil_1.ViewUtil.setLabelStringByName("limit", this.node, Oops_1.oops.language.getLangByID("OpenServer.limit", this.data.buyCount + "/" + this.data.limitCount));
            if (this.data.buyCount < this.data.limitCount) {
                var bol = this.weekAdTime < this.purchase.money;
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnGift/btn_buy", this.node, bol);
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnGift/getReward", this.node, !bol);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnGift/btn_buy", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnGift/getReward", this.node, false);
            }
            ViewUtil_1.ViewUtil.setNodeActiveByName("btnGift/getted", this.node, (this.data.buyCount >= this.data.limitCount));
        };
        WeekActivityItem_1.prototype.setTaskUI = function () {
            this.taskData = new TaskData_1.TaskData(this.data.type, this.data.id);
            var itemDropData = DropMgr_1.DropMgr.getDropData(this.taskData.item);
            this.setListItem(itemDropData, this.taskList);
            this.pro.fillRange = this.data.completed / this.data.need;
            ViewUtil_1.ViewUtil.setLabelStringByName("plat/exp", this.node, (this.data.completed > this.data.need ?
                this.data.need : this.data.completed) + "/" + this.data.need);
            ViewUtil_1.ViewUtil.setLabelStringByName("dec", this.node, this.taskData.getMainTaskDesc());
            if (this.data.status == 1) {
                this.taskList.getComponent(cc_4.Sprite).color = new cc_5.Color(255, 255, 255, 255);
                this.taskList.getComponent(cc_6.Button).interactable = false;
            }
            else if (this.data.status == 2) {
                this.taskList.getComponent(cc_6.Button).interactable = true;
                this.taskList.getComponent(cc_4.Sprite).color = new cc_5.Color(255, 255, 255, 255);
            }
            else {
                this.taskList.getComponent(cc_6.Button).interactable = false;
                this.taskList.getComponent(cc_4.Sprite).color = new cc_5.Color(255, 255, 255, 155);
            }
        };
        WeekActivityItem_1.prototype.setListItem = function (data, parent) {
            var _a;
            var maxLen = data.length > parent.children.length ? data.length : parent.children.length;
            for (var i = 0; i < maxLen; i++) {
                var item = void 0;
                if (data[i] && !parent.children[i]) {
                    item = (0, cc_3.instantiate)(this.item);
                    item.parent = parent;
                    item.active = true;
                }
                else if (data[i] && parent.children[i]) {
                    item = parent.children[i];
                    item.active = true;
                }
                else if (!data[i] && parent.children[i]) {
                    parent.children[i].active = false;
                    continue;
                }
                ViewUtil_1.ViewUtil.setLabelStringByName("num", item, "x" + data[i].dropAmount);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", item, data[i].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getQualityBgPath(data[i].grade.toString()), BundleConfig_1.default.instance.guiBundle.name);
                var tip = (_a = item.getChildByName("icon")) === null || _a === void 0 ? void 0 : _a.getComponent(TipCommonItem_1.TipCommonItem);
                tip === null || tip === void 0 ? void 0 : tip.initData(data[i]);
            }
        };
        WeekActivityItem_1.prototype.getReward = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getWeekActivityReward(this.data.id, function (data) {
                //显示掉落
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.WeekActivity;
                dropInfo.UIID = [GameUIConfig_1.UIID.WeekActivity];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateWeekActivity, data);
            });
        };
        //充值
        WeekActivityItem_1.prototype.btn_buy = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.purchase.money > this.weekAdTime) {
                SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.WeekActivity, function (adsTipType) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.WeekActivityBuy);
                });
                return;
            }
            HttpPost_1.HttpPost.instance.purchaseCurrency(DataObject_1.IaaType.WeekActivity, this.purchase.id, function (data) {
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.WeekActivity;
                dropInfo.UIID = [GameUIConfig_1.UIID.WeekActivity];
                // DataMgr.updateUserData(data.userGrade, null, data.taskList);
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.WeekActivityBuy, data);
            });
            // SdkPlatform.recharge_click(PayType.WeekActivity, this.purchase.id);
            // Payment.Instance.createOrder(this.purchase.id);
        };
        return WeekActivityItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "WeekActivityItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _item_decorators = [property(cc_1.Prefab)];
        _taskList_decorators = [property(cc_2.Node)];
        _giftList_decorators = [property(cc_2.Node)];
        _pro_decorators = [property(cc_4.Sprite)];
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _taskList_decorators, { kind: "field", name: "taskList", static: false, private: false, access: { has: function (obj) { return "taskList" in obj; }, get: function (obj) { return obj.taskList; }, set: function (obj, value) { obj.taskList = value; } }, metadata: _metadata }, _taskList_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _giftList_decorators, { kind: "field", name: "giftList", static: false, private: false, access: { has: function (obj) { return "giftList" in obj; }, get: function (obj) { return obj.giftList; }, set: function (obj, value) { obj.giftList = value; } }, metadata: _metadata }, _giftList_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pro_decorators, { kind: "field", name: "pro", static: false, private: false, access: { has: function (obj) { return "pro" in obj; }, get: function (obj) { return obj.pro; }, set: function (obj, value) { obj.pro = value; } }, metadata: _metadata }, _pro_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WeekActivityItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WeekActivityItem = _classThis;
}();
exports.WeekActivityItem = WeekActivityItem;
