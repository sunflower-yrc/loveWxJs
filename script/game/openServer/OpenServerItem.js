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
exports.OpenServerItem = void 0;
var cc_1 = require("cc");
var OpenServer_1 = require("./OpenServer");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var DataObject_1 = require("../tools/DataObject");
var PurchaseData_1 = require("../common/tableData/PurchaseData");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var TaskData_1 = require("../common/tableData/TaskData");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var cc_2 = require("cc");
var HttpPost_1 = require("../tools/HttpPost");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var cc_3 = require("cc");
var cc_4 = require("cc");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var OpenServerItem = function () {
    var _classDecorators = [ccclass('OpenServerItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _pro_decorators;
    var _pro_initializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _giftParent_decorators;
    var _giftParent_initializers = [];
    var OpenServerItem = _classThis = /** @class */ (function (_super) {
        __extends(OpenServerItem_1, _super);
        function OpenServerItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.data = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.pro = __runInitializers(_this, _pro_initializers, null);
            _this.item = __runInitializers(_this, _item_initializers, null);
            _this.giftParent = __runInitializers(_this, _giftParent_initializers, null);
            return _this;
        }
        OpenServerItem_1.prototype.start = function () {
            SdkPlatform_1.SdkPlatform.recharge_show(DataObject_1.PayType.OpenServerGift);
        };
        OpenServerItem_1.prototype.init = function (type, data) {
            this.data = data;
            if (type == OpenServer_1.OpenType.task) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("giftLab", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("dec", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("plat", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnGift", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("gfitList", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("item", this.node, true);
                this.setTaskData();
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("plat", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("dec", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnGift", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("gfitList", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("item", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("giftLab", this.node, true);
                this.setGiftPack();
            }
        };
        OpenServerItem_1.prototype.setGiftPack = function () {
            this.purchase = new PurchaseData_1.PurchaseData(this.data.id);
            var giftData = DropMgr_1.DropMgr.getDropData(this.purchase.reward);
            this.setListItem(giftData);
            //  ViewUtil.setLabelStringByName("item/num", this.node, "x1");
            ViewUtil_1.ViewUtil.setLabelStringByName("giftLab/dec1", this.node, this.purchase.name);
            //  ViewUtil.setLabelStringByName("btnGift/btn_buy/label", this.node, this.purchase.getMoney());
            ViewUtil_1.ViewUtil.setLabelStringByName("btnGift/btn_buy/num", this.node, Oops_1.oops.language.getLangByID("weekActivity.times", (this.data.adTimes + "/" + this.purchase.money)));
            ViewUtil_1.ViewUtil.setLabelStringByName("giftLab/limit", this.node, Oops_1.oops.language.getLangByID("OpenServer.limit", this.data.buyCount + "/" + this.data.limitCount));
            if (this.data.buyCount < this.data.limitCount) {
                var bol = this.data.adTimes < this.purchase.money;
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnGift/btn_buy", this.node, bol);
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnGift/getReward", this.node, !bol);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnGift/btn_buy", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnGift/getReward", this.node, false);
            }
            ViewUtil_1.ViewUtil.setNodeActiveByName("btnGift/getted", this.node, (this.data.buyCount >= this.data.limitCount));
            //  ViewUtil.setSingleSpriteFrameByName("item/icon", this.node, GameResPath.getStoreCurrencyIconPath(this.purchase.icon), BundleConfig.instance.guiBundle.name);
        };
        OpenServerItem_1.prototype.setListItem = function (data) {
            var maxLen = data.length > this.giftParent.children.length ? data.length : this.giftParent.children.length;
            for (var i = 0; i < maxLen; i++) {
                var item = void 0;
                if (data[i] && !this.giftParent.children[i]) {
                    item = (0, cc_3.instantiate)(this.item);
                    item.parent = this.giftParent;
                    item.active = true;
                }
                else if (data[i] && this.giftParent.children[i]) {
                    item = this.giftParent.children[i];
                    item.active = true;
                }
                else if (!data[i] && this.giftParent.children[i]) {
                    this.giftParent.children[i].active = false;
                    continue;
                }
                ViewUtil_1.ViewUtil.setLabelStringByName("num", item, "x" + data[i].dropAmount);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", item, data[i].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            }
        };
        OpenServerItem_1.prototype.setTaskData = function () {
            this.taskData = new TaskData_1.TaskData(4, this.data.taskId);
            var itemDropData = DropMgr_1.DropMgr.getDropData(this.taskData.item);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("item/icon", this.node, itemDropData[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("item/num", this.node, "x" + itemDropData[0].dropAmount);
            ViewUtil_1.ViewUtil.setLabelStringByName("plat/exp", this.node, (this.data.completed > this.taskData.getMainTaskValue() ?
                this.taskData.getMainTaskValue() : this.data.completed) + "/" + this.taskData.getMainTaskValue());
            ViewUtil_1.ViewUtil.setLabelStringByName("dec", this.node, this.taskData.getMainTaskDesc());
            this.pro.fillRange = this.data.completed / this.taskData.getMainTaskValue();
            if (this.data.isGetReward) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/btn_get", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/btn_goto", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/getted", this.node, true);
            }
            else {
                if (this.data.status == 1) {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/btn_get", this.node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/btn_goto", this.node, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/getted", this.node, false);
                }
                else {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/btn_get", this.node, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/btn_goto", this.node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("btnTask/getted", this.node, false);
                }
            }
        };
        //充值
        OpenServerItem_1.prototype.btn_buy = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.purchase.money > this.data.adTimes) {
                SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.OpenServer, function (adsTipType) {
                    HttpPost_1.HttpPost.instance.new7DaySeeAd(_this.purchase.id, function (data) {
                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateOpenServe, data);
                    });
                });
                return;
            }
            HttpPost_1.HttpPost.instance.purchaseCurrency(DataObject_1.IaaType.OpenServer, this.purchase.id, function (data) {
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.OpenServer;
                dropInfo.UIID = [GameUIConfig_1.UIID.OpenServer];
                // DataMgr.updateUserData(data.userGrade, null, data.taskList);
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateOpenServe, data);
                // this.onAdded(data);
                // this.setRewardItem();
            });
            // SdkPlatform.recharge_click(PayType.OpenServerGift, this.purchase.id);
            // Payment.Instance.createOrder(this.purchase.id);
        };
        //跳转
        OpenServerItem_1.prototype.gotoBtnFun = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            DataMgr_1.DataMgr.gotoFunction([GameUIConfig_1.UIID.OpenServer], this.taskData.jump);
        };
        OpenServerItem_1.prototype.getTaskReward = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.new7DayGetTaskReward(this.data.taskId, function (data) {
                //显示掉落
                var dropDatas = DropMgr_1.DropMgr.getDropData(_this.taskData.item);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.OpenServer;
                dropInfo.UIID = [GameUIConfig_1.UIID.OpenServer];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateOpenServe, data.info);
                DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
            });
        };
        return OpenServerItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "OpenServerItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _pro_decorators = [property(cc_2.Sprite)];
        _item_decorators = [property(cc_4.Prefab)];
        _giftParent_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _pro_decorators, { kind: "field", name: "pro", static: false, private: false, access: { has: function (obj) { return "pro" in obj; }, get: function (obj) { return obj.pro; }, set: function (obj, value) { obj.pro = value; } }, metadata: _metadata }, _pro_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _giftParent_decorators, { kind: "field", name: "giftParent", static: false, private: false, access: { has: function (obj) { return "giftParent" in obj; }, get: function (obj) { return obj.giftParent; }, set: function (obj, value) { obj.giftParent = value; } }, metadata: _metadata }, _giftParent_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OpenServerItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OpenServerItem = _classThis;
}();
exports.OpenServerItem = OpenServerItem;
