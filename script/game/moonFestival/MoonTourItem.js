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
exports.MoonTourItem = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var cc_3 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var cc_4 = require("cc");
var cc_5 = require("cc");
var cc_6 = require("cc");
var PurchaseData_1 = require("../common/tableData/PurchaseData");
var cc_7 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var DropMgr_1 = require("../mgr/DropMgr");
var DataObject_1 = require("../tools/DataObject");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var Payment_1 = require("../platform/Payment");
var cc_8 = require("cc");
var HttpPost_1 = require("../tools/HttpPost");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataMgr_1 = require("../mgr/DataMgr");
var GameEvent_1 = require("../common/config/GameEvent");
var ccclass = cc_3._decorator.ccclass, property = cc_3._decorator.property;
var MoonTourItem = function () {
    var _classDecorators = [ccclass('MoonTourItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_3.Component;
    var _instanceExtraInitializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _buyBtn_decorators;
    var _buyBtn_initializers = [];
    var _lay_decorators;
    var _lay_initializers = [];
    var _monyLab_decorators;
    var _monyLab_initializers = [];
    var _free_decorators;
    var _free_initializers = [];
    var MoonTourItem = _classThis = /** @class */ (function (_super) {
        __extends(MoonTourItem_1, _super);
        function MoonTourItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.item = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _item_initializers, null));
            _this.buyBtn = __runInitializers(_this, _buyBtn_initializers, null);
            _this.lay = __runInitializers(_this, _lay_initializers, null);
            _this.monyLab = __runInitializers(_this, _monyLab_initializers, null);
            _this.free = __runInitializers(_this, _free_initializers, null);
            _this.isFree = false;
            return _this;
        }
        MoonTourItem_1.prototype.init = function (data) {
            this.data = data;
            var purchaseData = new PurchaseData_1.PurchaseData(this.data.giftId);
            ViewUtil_1.ViewUtil.setLabelStringByName("lbPrice", this.buyBtn, purchaseData.getMoney());
            var itemDropData = DropMgr_1.DropMgr.getDropData(purchaseData.reward);
            this.onItemList(this.lay, itemDropData);
            if (purchaseData.money == 0) {
                this.isFree = true;
            }
            else {
                this.isFree = false;
            }
            //状态0未解锁1已解锁，可领取2已领取
            if (data.status == 1) {
                this.buyBtn.getComponent(cc_4.Sprite).grayscale = false;
                this.buyBtn.getComponent(cc_7.Button).interactable = true;
                this.monyLab.color = new cc_6.Color("#ff8869");
                this.node.getComponent(cc_4.Sprite).color = new cc_6.Color(255, 255, 255, 255);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lock", this.buyBtn, false);
            }
            else if (data.status == 2) {
                this.buyBtn.getComponent(cc_4.Sprite).grayscale = false;
                this.buyBtn.getComponent(cc_7.Button).interactable = false;
                this.node.getComponent(cc_4.Sprite).color = new cc_6.Color(255, 255, 255, 150);
                this.monyLab.color = new cc_6.Color("#ff8869");
                ViewUtil_1.ViewUtil.setNodeActiveByName("lock", this.buyBtn, false);
            }
            else {
                this.free.color = new cc_6.Color("#999999");
                this.node.getComponent(cc_4.Sprite).color = new cc_6.Color(255, 255, 255, 255);
                this.buyBtn.getComponent(cc_4.Sprite).grayscale = true;
                this.buyBtn.getComponent(cc_7.Button).interactable = false;
                this.monyLab.color = new cc_6.Color("#999999");
                ViewUtil_1.ViewUtil.setNodeActiveByName("lock", this.buyBtn, true);
            }
            if (this.isFree) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("lbFree", this.buyBtn, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lbPrice", this.buyBtn, false);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("lbFree", this.buyBtn, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lbPrice", this.buyBtn, true);
            }
        };
        //物品列表渲染
        MoonTourItem_1.prototype.onItemList = function (parent, data) {
            var len = parent.children.length > data.length ?
                parent.children.length : data.length;
            for (var i = 0; i < len; i++) {
                var itemNode = void 0;
                if (parent.children[i] && data[i]) {
                    parent.children[i].active = true;
                    itemNode = parent.children[i];
                }
                else if (!parent.children[i] && data[i]) {
                    var item = (0, cc_1.instantiate)(this.item);
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
        //充值
        MoonTourItem_1.prototype.btn_buy = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.isFree) {
                HttpPost_1.HttpPost.instance.getSeriesReward(this.data.giftId, function (data) {
                    //显示掉落
                    var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                    var dropInfo = new DataObject_1.DropInfo();
                    dropInfo.dropData = dropDatas;
                    dropInfo.dropFrom = DataObject_1.DropFrom.MoonFestival;
                    dropInfo.UIID = [GameUIConfig_1.UIID.MoonFestival];
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateMoonTour, data);
                    DataMgr_1.DataMgr.updateUserData(data.userGrade, null, null);
                });
                return;
            }
            var purchase = new PurchaseData_1.PurchaseData(this.data.giftId);
            SdkPlatform_1.SdkPlatform.recharge_click(DataObject_1.PayType.MoonTour, purchase.id);
            Payment_1.Payment.Instance.createOrder(purchase.id);
        };
        return MoonTourItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "MoonTourItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _item_decorators = [property(cc_2.Prefab)];
        _buyBtn_decorators = [property(cc_3.Node)];
        _lay_decorators = [property(cc_3.Node)];
        _monyLab_decorators = [property(cc_5.Label)];
        _free_decorators = [property(cc_8.LabelOutline)];
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _buyBtn_decorators, { kind: "field", name: "buyBtn", static: false, private: false, access: { has: function (obj) { return "buyBtn" in obj; }, get: function (obj) { return obj.buyBtn; }, set: function (obj, value) { obj.buyBtn = value; } }, metadata: _metadata }, _buyBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lay_decorators, { kind: "field", name: "lay", static: false, private: false, access: { has: function (obj) { return "lay" in obj; }, get: function (obj) { return obj.lay; }, set: function (obj, value) { obj.lay = value; } }, metadata: _metadata }, _lay_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _monyLab_decorators, { kind: "field", name: "monyLab", static: false, private: false, access: { has: function (obj) { return "monyLab" in obj; }, get: function (obj) { return obj.monyLab; }, set: function (obj, value) { obj.monyLab = value; } }, metadata: _metadata }, _monyLab_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _free_decorators, { kind: "field", name: "free", static: false, private: false, access: { has: function (obj) { return "free" in obj; }, get: function (obj) { return obj.free; }, set: function (obj, value) { obj.free = value; } }, metadata: _metadata }, _free_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MoonTourItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MoonTourItem = _classThis;
}();
exports.MoonTourItem = MoonTourItem;
