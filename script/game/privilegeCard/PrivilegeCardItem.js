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
exports.PrivilegeCardItem = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var PrivilegeCard_1 = require("./PrivilegeCard");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var cc_2 = require("cc");
var PurchaseData_1 = require("../common/tableData/PurchaseData");
var cc_3 = require("cc");
var cc_4 = require("cc");
var DropMgr_1 = require("../mgr/DropMgr");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GlobalData_1 = require("../common/tableData/GlobalData");
var DataObject_1 = require("../tools/DataObject");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var HttpPost_1 = require("../tools/HttpPost");
var GameEvent_1 = require("../common/config/GameEvent");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var TipCommonItem_1 = require("../../comm/TipCommonItem");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var PrivilegeCardItem = function () {
    var _classDecorators = [ccclass('PrivilegeCardItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _lay1_decorators;
    var _lay1_initializers = [];
    var _lay2_decorators;
    var _lay2_initializers = [];
    var PrivilegeCardItem = _classThis = /** @class */ (function (_super) {
        __extends(PrivilegeCardItem_1, _super);
        function PrivilegeCardItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.item = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _item_initializers, null));
            _this.lay1 = __runInitializers(_this, _lay1_initializers, null);
            _this.lay2 = __runInitializers(_this, _lay2_initializers, null);
            _this.type = null;
            return _this;
        }
        PrivilegeCardItem_1.prototype.start = function () {
            var payType;
            if (this.type == PrivilegeCard_1.ActiveType.adsFree) {
                payType = DataObject_1.PayType.MonthNoAdCard;
            }
            else if (this.type == PrivilegeCard_1.ActiveType.diamond) {
                payType = DataObject_1.PayType.MonthCard;
            }
            else {
                payType = DataObject_1.PayType.LifttimeCard;
            }
            SdkPlatform_1.SdkPlatform.recharge_show(payType);
        };
        PrivilegeCardItem_1.prototype.update = function (deltaTime) {
        };
        PrivilegeCardItem_1.prototype.onDestroy = function () {
        };
        PrivilegeCardItem_1.prototype.setUI = function (type, data) {
            this.type = type;
            if (type == PrivilegeCard_1.ActiveType.adsFree) {
                this.data = data.advData;
                this.setData();
            }
            else if (type == PrivilegeCard_1.ActiveType.diamond) {
                this.data = data.diamondData;
                this.setData();
            }
            else if (type == PrivilegeCard_1.ActiveType.life) {
                this.data = data.lifelongData;
                this.setData();
            }
            else if (type == PrivilegeCard_1.ActiveType.pet) {
                this.data = data.petCardData;
                this.setData();
            }
            else {
                this.data = data.dayBonusData;
                this.setDayData();
            }
        };
        //充值特权卡
        PrivilegeCardItem_1.prototype.setData = function () {
            var _a, _b;
            ViewUtil_1.ViewUtil.setNodeActiveByName("not", this.node, !this.data.cardStatus);
            ViewUtil_1.ViewUtil.setNodeActiveByName("bg/dayGet", this.node, !this.data.bonusStatus);
            ViewUtil_1.ViewUtil.setNodeActiveByName("have", this.node, this.data.cardStatus);
            ViewUtil_1.ViewUtil.setNodeActiveByName("getted1", this.node, this.data.bonusStatus);
            ViewUtil_1.ViewUtil.setNodeActiveByName("getted2", this.node, this.data.cardStatus);
            ViewUtil_1.ViewUtil.setNodeActiveByName("show/dayGet", this.node, !this.data.cardStatus);
            ViewUtil_1.ViewUtil.setNodeActiveByName("bg/redDot", this.node, (this.data.cardStatus && !this.data.bonusStatus));
            var bg = (_a = this.node.getChildByName("bg")) === null || _a === void 0 ? void 0 : _a.getComponent(cc_2.UIOpacity);
            bg.opacity = this.data.bonusStatus ? 180 : 255;
            var show = (_b = this.node.getChildByName("show")) === null || _b === void 0 ? void 0 : _b.getComponent(cc_2.UIOpacity);
            show.opacity = this.data.cardStatus ? 180 : 255;
            if (this.type != PrivilegeCard_1.ActiveType.life) {
                ViewUtil_1.ViewUtil.setLabelStringByName("have/timeLab", this.node, Oops_1.oops.language.getLangByID("PrivilegeCard.timeLab", this.data.surplusDays));
            }
            var str = this.data.bonusStatus ? Oops_1.oops.language.getLangByID("common.got") : Oops_1.oops.language.getLangByID("common.getReward");
            ViewUtil_1.ViewUtil.setLabelStringByName("have/getLab", this.node, str);
            var purchase = new PurchaseData_1.PurchaseData(this.getPurchaseId(this.type));
            var rate = Math.floor((purchase.shamMoney / purchase.money) * 100);
            ViewUtil_1.ViewUtil.setLabelStringByName("not/num", this.node, purchase.money + "");
            ViewUtil_1.ViewUtil.setLabelStringByName("not/rate", this.node, Oops_1.oops.language.getLangByID("PrivilegeCard.rate", rate));
            var dayReward = DropMgr_1.DropMgr.getDropData(purchase.dailyReward);
            var showReward = DropMgr_1.DropMgr.getDropData(purchase.reward);
            this.onItemList(this.lay1, dayReward);
            this.onItemList(this.lay2, showReward);
        };
        //每日福利
        PrivilegeCardItem_1.prototype.setDayData = function () {
            var _a;
            ViewUtil_1.ViewUtil.setNodeActiveByName("getted1", this.node, this.data.bonusStatus);
            ViewUtil_1.ViewUtil.setNodeActiveByName("bg/dayGet", this.node, !this.data.bonusStatus);
            var bg = (_a = this.node.getChildByName("bg")) === null || _a === void 0 ? void 0 : _a.getComponent(cc_2.UIOpacity);
            bg.opacity = this.data.bonusStatus ? 180 : 255;
            var str = this.data.bonusStatus ? Oops_1.oops.language.getLangByID("common.got") : Oops_1.oops.language.getLangByID("common.getReward");
            ViewUtil_1.ViewUtil.setLabelStringByName("have/getLab", this.node, str);
            ViewUtil_1.ViewUtil.setNodeActiveByName("bg/redDot", this.node, !this.data.bonusStatus);
            var globalTable = new GlobalData_1.GlobalData(21);
            var dayReward = DropMgr_1.DropMgr.getDropData(globalTable.value);
            this.onItemList(this.lay1, dayReward);
        };
        //获取充值id
        PrivilegeCardItem_1.prototype.getPurchaseId = function (type) {
            var id = 0;
            switch (type) {
                case PrivilegeCard_1.ActiveType.adsFree:
                    id = 601;
                    break;
                case PrivilegeCard_1.ActiveType.diamond:
                    id = 501;
                    break;
                case PrivilegeCard_1.ActiveType.life:
                    id = 701;
                    break;
                case PrivilegeCard_1.ActiveType.pet:
                    id = 1001;
                    break;
            }
            return id;
        };
        //物品列表渲染
        PrivilegeCardItem_1.prototype.onItemList = function (parent, data) {
            var _a;
            var len = parent.children.length > data.length ?
                parent.children.length : data.length;
            for (var i = 0; i < len; i++) {
                var itemNode = void 0;
                if (parent.children[i] && data[i]) {
                    parent.children[i].active = true;
                    itemNode = parent.children[i];
                }
                else if (!parent.children[i] && data[i]) {
                    var item = (0, cc_3.instantiate)(this.item);
                    item.parent = parent;
                    itemNode = item;
                }
                else if (parent.children[i] && !data[i]) {
                    parent.children[i].active = false;
                    continue;
                }
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("reward", itemNode, data[i].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("num", itemNode, "x" + data[i].dropAmount);
                var tip = (_a = itemNode.getChildByName("reward")) === null || _a === void 0 ? void 0 : _a.getComponent(TipCommonItem_1.TipCommonItem);
                tip === null || tip === void 0 ? void 0 : tip.initData(data[i]);
            }
        };
        PrivilegeCardItem_1.prototype.btn_click = function () {
            if (this.type != PrivilegeCard_1.ActiveType.dayFree) {
                if (this.data.cardStatus) {
                    if (!this.data.bonusStatus) {
                        this.getDayReward();
                    }
                }
                else {
                    this.btn_buy();
                }
            }
            else {
                if (!this.data.bonusStatus) {
                    this.getDayReward();
                }
            }
        };
        //充值
        PrivilegeCardItem_1.prototype.btn_buy = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var payType;
            if (this.type == PrivilegeCard_1.ActiveType.diamond) {
                payType = DataObject_1.IaaType.MonthCard;
            }
            else if (this.type == PrivilegeCard_1.ActiveType.pet) {
                payType = DataObject_1.IaaType.petCard;
            }
            else {
                payType = DataObject_1.IaaType.LifttimeCard;
            }
            var purchase = new PurchaseData_1.PurchaseData(this.getPurchaseId(this.type));
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.jewel < purchase.money) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.JumpTip, { closeView: GameUIConfig_1.UIID.PrivilegeCard, type: DataObject_1.JumpTipType.diamond });
                return;
            }
            HttpPost_1.HttpPost.instance.purchaseCurrency(payType, purchase.id, function (data) {
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.PrivilegeCard;
                dropInfo.UIID = [GameUIConfig_1.UIID.PrivilegeCard];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.jewel;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePrivilegeCard, data);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePrivilegeCardRed, data);
            });
            // SdkPlatform.recharge_click(payType, purchase.id);
            // SdkPlatform.recharge_click(purchase.type, purchase.id);
            // Payment.Instance.createOrder(purchase.id);
        };
        //每日领取
        PrivilegeCardItem_1.prototype.getDayReward = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getDayReward(this.type, function (data) {
                var dropDatas = [];
                if (_this.type != PrivilegeCard_1.ActiveType.dayFree) {
                    var purchase = new PurchaseData_1.PurchaseData(_this.getPurchaseId(_this.type));
                    dropDatas = DropMgr_1.DropMgr.getDropData(purchase.dailyReward);
                }
                else {
                    var globalTable = new GlobalData_1.GlobalData(21);
                    dropDatas = DropMgr_1.DropMgr.getDropData(globalTable.value);
                }
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.PrivilegeCard;
                dropInfo.UIID = [GameUIConfig_1.UIID.PrivilegeCard];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePrivilegeCard, data);
                _this.setUI(_this.type, data);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePrivilegeCardRed, data);
            });
        };
        return PrivilegeCardItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PrivilegeCardItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _item_decorators = [property(cc_4.Prefab)];
        _lay1_decorators = [property(cc_1.Node)];
        _lay2_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lay1_decorators, { kind: "field", name: "lay1", static: false, private: false, access: { has: function (obj) { return "lay1" in obj; }, get: function (obj) { return obj.lay1; }, set: function (obj, value) { obj.lay1 = value; } }, metadata: _metadata }, _lay1_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lay2_decorators, { kind: "field", name: "lay2", static: false, private: false, access: { has: function (obj) { return "lay2" in obj; }, get: function (obj) { return obj.lay2; }, set: function (obj, value) { obj.lay2 = value; } }, metadata: _metadata }, _lay2_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PrivilegeCardItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PrivilegeCardItem = _classThis;
}();
exports.PrivilegeCardItem = PrivilegeCardItem;
