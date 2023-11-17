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
exports.StoreCurrencyItem = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var PurchaseData_1 = require("../common/tableData/PurchaseData");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var StoreCurrencyItem = function () {
    var _classDecorators = [ccclass('StoreCurrencyItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var StoreCurrencyItem = _classThis = /** @class */ (function (_super) {
        __extends(StoreCurrencyItem_1, _super);
        function StoreCurrencyItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.index = 0;
            return _this;
        }
        StoreCurrencyItem_1.prototype.initData = function (itemData, idx) {
            this.storeCurrencyItemData = itemData;
            this.index = idx;
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.node, GameResPath_1.GameResPath.getStoreCurrencyIconPath(this.storeCurrencyItemData.iconUrl), BundleConfig_1.default.instance.guiBundle.name);
            if (this.storeCurrencyItemData.purchaseType == DataObject_1.DropType.WatchAd) {
                //随机钻石
                ViewUtil_1.ViewUtil.setLabelStringByName("name", this.node, Oops_1.oops.language.getLangByID("store.randomJewels"));
            }
            else {
                ViewUtil_1.ViewUtil.setLabelStringByName("name", this.node, this.storeCurrencyItemData.amount + DataMgr_1.DataMgr.getDropItemName(this.storeCurrencyItemData.type));
            }
            if (this.storeCurrencyItemData.purchaseType == DataObject_1.DropType.Jewel) {
                //钻石
                ViewUtil_1.ViewUtil.setNodeActiveByName("cost_jewel", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("cost_money", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("double_bg", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("cost_free", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("get_reward", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("look_tip", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getted_reward", this.node, false);
                ViewUtil_1.ViewUtil.setLabelStringByName("cost_jewel/amount", this.node, this.storeCurrencyItemData.purchaseAmount.toString());
            }
            else if (this.storeCurrencyItemData.purchaseType == DataObject_1.DropType.Purchase) {
                //内购
                ViewUtil_1.ViewUtil.setNodeActiveByName("cost_jewel", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("cost_money", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("cost_free", this.node, false);
                var purchaseData = new PurchaseData_1.PurchaseData(this.storeCurrencyItemData.purchaseAmount);
                ViewUtil_1.ViewUtil.setLabelStringByName("look_tip/times", this.node, Oops_1.oops.language.getLangByID("store.dayLook", purchaseData.money));
                // ViewUtil.setLabelStringByName("cost_money/amount", this.node, purchaseData.getMoney());
            }
            else if (this.storeCurrencyItemData.purchaseType == DataObject_1.DropType.WatchAd) {
                //看广告
                ViewUtil_1.ViewUtil.setNodeActiveByName("cost_jewel", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("cost_money", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("double_bg", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("cost_free", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("get_reward", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("look_tip", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getted_reward", this.node, false);
            }
            this.showStatus();
        };
        StoreCurrencyItem_1.prototype.showStatus = function () {
            if (this.storeCurrencyItemData.purchaseType == DataObject_1.DropType.Purchase) {
                // ViewUtil.setNodeActiveByName("double_bg", this.node, this.storeCurrencyItemData.firstPurchase);
                // if (this.storeCurrencyItemData.firstPurchase) {
                //     //双倍赠送
                //     ViewUtil.setLabelStringByName("double_bg/bg/name", this.node, this.storeCurrencyItemData.amount + DataMgr.getDropItemName(this.storeCurrencyItemData.type));
                //     ViewUtil.setSingleSpriteFrameByName("double_bg/bg/icon", this.node, GameResPath.getDropIconsPath(this.storeCurrencyItemData.type));
                //     ViewUtil.setLabelStringByName("double_bg/bg/icon/amount", this.node, this.storeCurrencyItemData.amount.toString());
                // }
                if (this.storeCurrencyItemData.status == 1) {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("get_reward", this.node, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("look_tip", this.node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("getted_reward", this.node, false);
                }
                else if (this.storeCurrencyItemData.status == 2) {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("get_reward", this.node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("look_tip", this.node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("getted_reward", this.node, true);
                }
                else {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("get_reward", this.node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("look_tip", this.node, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("getted_reward", this.node, false);
                }
            }
            else if (this.storeCurrencyItemData.purchaseType == DataObject_1.DropType.WatchAd) {
                var c = this.storeCurrencyItemData.leftLimitTimes > this.storeCurrencyItemData.completeTimes ? new cc_1.Color(136, 200, 215) : new cc_1.Color(243, 83, 83);
                ViewUtil_1.ViewUtil.setLabelStringByName("cost_free/Layout/times", this.node, "(" + (this.storeCurrencyItemData.leftLimitTimes - this.storeCurrencyItemData.completeTimes) + "/" + this.storeCurrencyItemData.leftLimitTimes + ")", { color: c });
                ViewUtil_1.ViewUtil.setButtonEnabledByName("cost_free", this.node, this.storeCurrencyItemData.leftLimitTimes > this.storeCurrencyItemData.completeTimes);
            }
        };
        StoreCurrencyItem_1.prototype.btn_buy = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.storeCurrencyItemData.purchaseType == DataObject_1.DropType.Jewel) {
                //钻石购买  提示
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.StoreCurrencyConfirm, { "data": this.storeCurrencyItemData, "callback": function () {
                        _this.request_buy();
                    } });
            }
            else if (this.storeCurrencyItemData.purchaseType == DataObject_1.DropType.WatchAd) {
                //看完广告
                SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.StoreCurrency, function () {
                    _this.request_buy();
                });
            }
            else if (this.storeCurrencyItemData.purchaseType == DataObject_1.DropType.Purchase) {
                //内购
                this.request_buy();
                // SdkPlatform.recharge_click(PayType.CurrencyItem, this.storeCurrencyItemData.purchaseAmount);
                // Payment.Instance.createOrder(this.storeCurrencyItemData.purchaseAmount);
            }
        };
        StoreCurrencyItem_1.prototype.request_buy = function () {
            var _this = this;
            HttpPost_1.HttpPost.instance.purchaseCommodity(DataObject_1.StoreBuyType.Currency + 1, -1, this.index, 0, function (data) {
                //购买成功
                if (_this.storeCurrencyItemData.purchaseType == DataObject_1.DropType.Jewel) {
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.StoreCurrencyConfirm);
                }
                //掉落
                var dropDatas = [];
                var dropData = DropMgr_1.DropMgr.getDropInfo(data.dropData.type, 0, data.dropData.amount);
                dropDatas.push(dropData);
                //更新数据
                DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.UIID.push(GameUIConfig_1.UIID.Store);
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                //货币
                if (_this.storeCurrencyItemData.purchaseType == DataObject_1.DropType.Jewel) {
                    //消耗钻石
                    SingletonModuleComp_1.smc.account.AccountModel.vm.jewel -= _this.storeCurrencyItemData.purchaseAmount;
                }
                //刷新商店
                _this.storeCurrencyItemData.type = data.commodityInfo.commodityType;
                _this.storeCurrencyItemData.amount = data.commodityInfo.commodityCount;
                _this.storeCurrencyItemData.purchaseType = data.commodityInfo.purchaseType;
                _this.storeCurrencyItemData.purchaseAmount = data.commodityInfo.purchaseAmount;
                _this.storeCurrencyItemData.firstPurchase = data.commodityInfo.firstDouble == 1;
                _this.storeCurrencyItemData.completeTimes = data.commodityInfo.completeTimes;
                _this.storeCurrencyItemData.leftLimitTimes = data.commodityInfo.leftLimitTimes;
                _this.storeCurrencyItemData.status = data.commodityInfo.status || 0;
                _this.showStatus();
            });
        };
        return StoreCurrencyItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "StoreCurrencyItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StoreCurrencyItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StoreCurrencyItem = _classThis;
}();
exports.StoreCurrencyItem = StoreCurrencyItem;
