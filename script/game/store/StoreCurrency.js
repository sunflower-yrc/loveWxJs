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
exports.StoreCurrency = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DropMgr_1 = require("../mgr/DropMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var List_1 = require("../tools/List");
var StoreCurrencyItem_1 = require("./StoreCurrencyItem");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var Payment_1 = require("../platform/Payment");
var GameEvent_1 = require("../common/config/GameEvent");
var cc_2 = require("cc");
var DataMgr_1 = require("../mgr/DataMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var StoreCurrency = function () {
    var _classDecorators = [ccclass('StoreCurrency')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _nodeScrollview_decorators;
    var _nodeScrollview_initializers = [];
    var _layout_decorators;
    var _layout_initializers = [];
    var _adsTimes_decorators;
    var _adsTimes_initializers = [];
    var StoreCurrency = _classThis = /** @class */ (function (_super) {
        __extends(StoreCurrency_1, _super);
        function StoreCurrency_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nodeScrollview = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _nodeScrollview_initializers, null));
            _this.layout = __runInitializers(_this, _layout_initializers, null);
            _this.adsTimes = __runInitializers(_this, _adsTimes_initializers, null);
            _this.times = 0;
            _this.storeCurrencyItemDatas = [];
            _this.dropDatas = [];
            return _this;
        }
        StoreCurrency_1.prototype.initUI = function (itemDatas, packData, times) {
            this.times = times;
            if (SingletonModuleComp_1.smc.account.AccountModel.isShowPay) {
                this.storeCurrencyItemDatas = itemDatas;
            }
            else {
                for (var i = 0; i < itemDatas.length; i++) {
                    if (itemDatas[i].purchaseType != DataObject_1.DropType.Purchase) {
                        this.storeCurrencyItemDatas.push(itemDatas[i]);
                    }
                }
            }
            //充值隐藏
            ViewUtil_1.ViewUtil.setNodeActiveByName("package", this.node, SingletonModuleComp_1.smc.account.AccountModel.isShowPay);
            this.storeCurrencyPackData = packData;
            //加载列表
            this.nodeScrollview.numItems = this.storeCurrencyItemDatas.length;
            //礼包
            this.dropDatas = DropMgr_1.DropMgr.getDropData(this.storeCurrencyPackData.reward);
            var items = this.layout.children;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    var element = items[i];
                    if (i < this.dropDatas.length) {
                        element.active = true;
                        ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", element, this.dropDatas[i].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
                        ViewUtil_1.ViewUtil.setSingleSpriteFrame(element, this.dropDatas[i].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
                        ViewUtil_1.ViewUtil.setLabelStringByName("amount", element, "x" + this.dropDatas[i].dropAmount.toString());
                    }
                    else {
                        element.active = false;
                    }
                }
            }
            this.showPackage();
            this.setDayLook();
            Oops_1.oops.message.on(GameEvent_1.GameEvent.PurchaseCurrency, this.payComplete, this);
            SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.StoreCurrency);
            SdkPlatform_1.SdkPlatform.recharge_show(DataObject_1.PayType.CurrencyItem);
            SdkPlatform_1.SdkPlatform.recharge_show(DataObject_1.PayType.CurrencyDailyPack);
        };
        StoreCurrency_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.PurchaseCurrency, this.payComplete, this);
        };
        StoreCurrency_1.prototype.setDayLook = function () {
            this.adsTimes.string = this.times ? this.times + "" : "0";
        };
        StoreCurrency_1.prototype.showPackage = function () {
            //是否购买
            // ViewUtil.setNodeActiveByName("package/btn_buy", this.node, this.storeCurrencyPackData.leftTimes > 0);
            // ViewUtil.setNodeActiveByName("package/purchased", this.node, this.storeCurrencyPackData.leftTimes <= 0);
            // if (this.storeCurrencyPackData.leftTimes > 0) {
            //     //显示购买金额
            //     let purchaseData = new PurchaseData(this.storeCurrencyPackData.costId);
            //     ViewUtil.setLabelStringByName("package/btn_buy/label", this.node, purchaseData.getMoney());
            // }
        };
        /**
         * render回调
        */
        StoreCurrency_1.prototype.renderEventCallback = function (item, idx) {
            var _a;
            (_a = item.getComponent(StoreCurrencyItem_1.StoreCurrencyItem)) === null || _a === void 0 ? void 0 : _a.initData(this.storeCurrencyItemDatas[idx], idx);
        };
        /**
         * 礼包购买
         */
        StoreCurrency_1.prototype.btn_buyPackage = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            SdkPlatform_1.SdkPlatform.recharge_click(DataObject_1.PayType.CurrencyDailyPack, this.storeCurrencyPackData.costId);
            Payment_1.Payment.Instance.createOrder(this.storeCurrencyPackData.costId);
            // HttpPost.instance.openInternalShopBox((data: any) => {
            //     //掉落
            //     let dropInfo = new DropInfo();
            //     dropInfo.dropData = this.dropDatas;
            //     dropInfo.UIID.push(UIID.Store);
            //     oops.gui.open(UIID.Drop, dropInfo);
            //     //刷新
            //     this.storeCurrencyPackData.leftTimes = data.freeTimes;
            //     this.showPackage();
            // });
        };
        StoreCurrency_1.prototype.payComplete = function (event, args) {
            if (args.type == 2) {
                //刷新礼包
                this.storeCurrencyPackData.leftTimes = args.value;
                this.showPackage();
            }
            else {
                //刷新当前购买的item
                var product_id = args.product_id;
                for (var i = 0; i < this.storeCurrencyItemDatas.length; i++) {
                    var element = this.storeCurrencyItemDatas[i];
                    if (element.purchaseType == DataObject_1.DropType.Purchase && product_id == element.purchaseAmount) {
                        //是否首充  1是 未完成   2否 已完成
                        this.storeCurrencyItemDatas[i].firstPurchase = args.value == 1;
                        break;
                    }
                }
                this.nodeScrollview.updateAll();
            }
        };
        StoreCurrency_1.prototype.getReward = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.StoreCurrency, function (adsTipType) {
                HttpPost_1.HttpPost.instance.purchaseCurrency(DataObject_1.IaaType.StoreCurrency, _this.storeCurrencyPackData.costId, function (data) {
                    var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                    var dropInfo = new DataObject_1.DropInfo();
                    dropInfo.dropData = dropDatas;
                    dropInfo.dropFrom = DataObject_1.DropFrom.StoreCurrency;
                    dropInfo.UIID = [GameUIConfig_1.UIID.Store];
                    DataMgr_1.DataMgr.updateUserData(data.userGrade, null, null);
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateStoreCurry, data);
                });
            });
        };
        return StoreCurrency_1;
    }(_classSuper));
    __setFunctionName(_classThis, "StoreCurrency");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _nodeScrollview_decorators = [property(List_1.default)];
        _layout_decorators = [property(cc_1.Node)];
        _adsTimes_decorators = [property(cc_2.Label)];
        __esDecorate(null, null, _nodeScrollview_decorators, { kind: "field", name: "nodeScrollview", static: false, private: false, access: { has: function (obj) { return "nodeScrollview" in obj; }, get: function (obj) { return obj.nodeScrollview; }, set: function (obj, value) { obj.nodeScrollview = value; } }, metadata: _metadata }, _nodeScrollview_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _layout_decorators, { kind: "field", name: "layout", static: false, private: false, access: { has: function (obj) { return "layout" in obj; }, get: function (obj) { return obj.layout; }, set: function (obj, value) { obj.layout = value; } }, metadata: _metadata }, _layout_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _adsTimes_decorators, { kind: "field", name: "adsTimes", static: false, private: false, access: { has: function (obj) { return "adsTimes" in obj; }, get: function (obj) { return obj.adsTimes; }, set: function (obj, value) { obj.adsTimes = value; } }, metadata: _metadata }, _adsTimes_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StoreCurrency = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StoreCurrency = _classThis;
}();
exports.StoreCurrency = StoreCurrency;
