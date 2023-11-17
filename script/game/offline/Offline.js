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
exports.Offline = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var cc_2 = require("cc");
var PurchaseData_1 = require("../common/tableData/PurchaseData");
var Payment_1 = require("../platform/Payment");
var GameMgr_1 = require("../common/mgr/GameMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Offline = function () {
    var _classDecorators = [ccclass('Offline')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _coins_decorators;
    var _coins_initializers = [];
    var _bigCoins_decorators;
    var _bigCoins_initializers = [];
    var _btnBuy_decorators;
    var _btnBuy_initializers = [];
    var Offline = _classThis = /** @class */ (function (_super) {
        __extends(Offline_1, _super);
        function Offline_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.coins = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _coins_initializers, null));
            _this.bigCoins = __runInitializers(_this, _bigCoins_initializers, null);
            _this.btnBuy = __runInitializers(_this, _btnBuy_initializers, null);
            _this.offlineData = null;
            _this.isShow = false;
            _this.time = null;
            _this.curTime = null;
            return _this;
        }
        // onAdded(param: OfflineData) {
        //     this.offlineData = param;
        //     ViewUtil.setLabelString(this.time, StringUtil.formatTimeWithSec(this.offlineData.leaveTime));
        //     ViewUtil.setLabelString(this.coins, StringUtil.numberTotPermil(this.offlineData.coin));
        //     ViewUtil.setLabelString(this.bigCoins, StringUtil.numberTotPermil(this.offlineData.coinAdvanced));
        //     SdkPlatform.ad_button_show(AdRewardType.Offline);
        // }
        Offline_1.prototype.onAdded = function (data) {
            this.data = data;
        };
        Offline_1.prototype.start = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.OfflineOneBuy, this.updateData, this);
            this.initUI();
        };
        Offline_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.OfflineOneBuy, this.updateData, this);
            Oops_1.oops.timer.unRegister(this.timeId);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.Offline);
            if (GameMgr_1.GameMgr.Instance.tips[0]) {
                Oops_1.oops.gui.open(GameMgr_1.GameMgr.Instance.tips[0]);
                GameMgr_1.GameMgr.Instance.tips.splice(0, 1);
            }
        };
        Offline_1.prototype.initUI = function () {
            var curTime = Oops_1.oops.timer.getServerTime();
            // ViewUtil.setNodeActiveByName("root/bg/timeBg/lx_bg_bt", this.node, smc.account.AccountModel.isShowPay);
            this.curTime = curTime - this.data.offLineRewardAt;
            this.time = (this.data.offLineLimitTime * 60) - this.curTime;
            var timeStr, timeStr1, coin;
            if (this.time <= 0) {
                timeStr = StringUtil_1.StringUtil.formatActivityTimeWithSec(this.data.offLineLimitTime * 60);
                timeStr1 = StringUtil_1.StringUtil.formatActivityTimeWithSec(0);
                coin = this.data.offLineLimitTime * this.data.minuteAddCoin;
            }
            else {
                timeStr = StringUtil_1.StringUtil.formatActivityTimeWithSec(this.curTime);
                timeStr1 = StringUtil_1.StringUtil.formatActivityTimeWithSec(this.time);
                coin = Math.floor(this.curTime / 60) * this.data.minuteAddCoin;
                this.setTimer();
            }
            ViewUtil_1.ViewUtil.setLabelString(this.coins, StringUtil_1.StringUtil.numberTotPermil(coin));
            ViewUtil_1.ViewUtil.setLabelString(this.bigCoins, StringUtil_1.StringUtil.numberTotPermil(coin * 3));
            this.btnBuy.getComponent(cc_2.Button).interactable = !this.data.isBuyAddLimitTime;
            if (this.data.isBuyAddLimitTime) {
                ViewUtil_1.ViewUtil.setLabelStringByName("lab", this.btnBuy, Oops_1.oops.language.getLangByID("offline.addTimed"));
            }
            else {
                ViewUtil_1.ViewUtil.setLabelStringByName("lab", this.btnBuy, Oops_1.oops.language.getLangByID("offline.addTime"));
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/btn_getmore/num", this.node, this.data.multipleRewardCount + "/" + this.data.multipleRewardCountMax);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/time_bg/time", this.node, timeStr);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/timeBg/time", this.node, timeStr1);
            ViewUtil_1.ViewUtil.setLabelStringByName("showTip/time1", this.node, (this.data.offLineLimitTime / 60) + Oops_1.oops.language.getLangByID("common.hour"));
            ViewUtil_1.ViewUtil.setLabelStringByName("showTip/time2", this.node, (this.data.offLineLimitAddBuffTime / 60) + Oops_1.oops.language.getLangByID("common.hour"));
        };
        /**创建计时器 */
        Offline_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        Offline_1.prototype.onSecond = function () {
            this.curTime++;
            var coin = Math.floor(this.curTime / 60) * this.data.minuteAddCoin;
            ViewUtil_1.ViewUtil.setLabelString(this.coins, StringUtil_1.StringUtil.numberTotPermil(coin));
            ViewUtil_1.ViewUtil.setLabelString(this.bigCoins, StringUtil_1.StringUtil.numberTotPermil(coin * 3));
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/time_bg/time", this.node, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.curTime));
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/timeBg/time", this.node, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.time));
        };
        Offline_1.prototype.onComplete = function () {
            var coin = this.data.offLineLimitTime * this.data.minuteAddCoin;
            ViewUtil_1.ViewUtil.setLabelString(this.coins, StringUtil_1.StringUtil.numberTotPermil(coin));
            ViewUtil_1.ViewUtil.setLabelString(this.bigCoins, StringUtil_1.StringUtil.numberTotPermil(coin * 3));
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/time_bg/time", this.node, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.data.offLineLimitTime * 60));
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/timeBg/time", this.node, StringUtil_1.StringUtil.formatActivityTimeWithSec(0));
        };
        Offline_1.prototype.btn_get = function (event, data) {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (parseInt(data) == 1) {
                //普通获取
                this.getReward(1);
            }
            else {
                if (this.data.multipleRewardCountMax <= this.data.multipleRewardCount) {
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("offline.useEnd"));
                    return;
                }
                //看广告获取
                SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.Offline, function () {
                    _this.getReward(2);
                });
            }
        };
        Offline_1.prototype.getReward = function (type) {
            HttpPost_1.HttpPost.instance.getOffLineReward(type, function (data) {
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_OfflineReward);
                SingletonModuleComp_1.smc.account.AccountModel.vm.coin += data.coinAdd;
                //更新数据
                // DataMgr.updateUserData(null, null, data.taskList);
                SingletonModuleComp_1.smc.account.AccountModel.hangData.offLineRewardAt = data.offLineRewardAt;
                SingletonModuleComp_1.smc.account.AccountModel.hangData.offLineLimitTime = data.offLineLimitTime;
                SingletonModuleComp_1.smc.account.AccountModel.hangData.multipleRewardCountMax = data.multipleRewardCountMax;
                SingletonModuleComp_1.smc.account.AccountModel.hangData.multipleRewardCount = data.multipleRewardCount;
                SingletonModuleComp_1.smc.account.AccountModel.hangData.isBuyAddLimitTime = data.isBuyAddLimitTime;
                SingletonModuleComp_1.smc.account.AccountModel.hangData.offLineLimitAddBuffTime = data.offLineLimitAddBuffTime;
                SingletonModuleComp_1.smc.account.AccountModel.hangData.minuteAddCoin = data.minuteAddCoin;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.CoinFly);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateOfflineData);
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Offline);
            });
        };
        Offline_1.prototype.limitUpBtn = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.isShow = !this.isShow;
            ViewUtil_1.ViewUtil.setNodeActiveByName("showTip", this.node, this.isShow);
        };
        Offline_1.prototype.oneBuy = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var purchase = new PurchaseData_1.PurchaseData(901);
            SdkPlatform_1.SdkPlatform.recharge_click(DataObject_1.PayType.Offline, purchase.id);
            Payment_1.Payment.Instance.createOrder(purchase.id);
        };
        Offline_1.prototype.updateData = function () {
            var _this = this;
            HttpPost_1.HttpPost.instance.offLineInfo(function (data) {
                _this.data = data;
                _this.initUI();
                _this.limitUpBtn();
                SingletonModuleComp_1.smc.account.AccountModel.hangData.offLineRewardAt = data.offLineRewardAt;
                SingletonModuleComp_1.smc.account.AccountModel.hangData.offLineLimitTime = data.offLineLimitTime;
                SingletonModuleComp_1.smc.account.AccountModel.hangData.multipleRewardCountMax = data.multipleRewardCountMax;
                SingletonModuleComp_1.smc.account.AccountModel.hangData.multipleRewardCount = data.multipleRewardCount;
                SingletonModuleComp_1.smc.account.AccountModel.hangData.isBuyAddLimitTime = data.isBuyAddLimitTime;
                SingletonModuleComp_1.smc.account.AccountModel.hangData.offLineLimitAddBuffTime = data.offLineLimitAddBuffTime;
                SingletonModuleComp_1.smc.account.AccountModel.hangData.minuteAddCoin = data.minuteAddCoin;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateOfflineData);
            });
        };
        Offline_1.prototype.closeView = function () {
            // oops.gui.remove(UIID.Offline);
            Oops_1.oops.gui.removeByNode(this.node, true);
        };
        return Offline_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Offline");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _coins_decorators = [property(cc_1.Node)];
        _bigCoins_decorators = [property(cc_1.Node)];
        _btnBuy_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _coins_decorators, { kind: "field", name: "coins", static: false, private: false, access: { has: function (obj) { return "coins" in obj; }, get: function (obj) { return obj.coins; }, set: function (obj, value) { obj.coins = value; } }, metadata: _metadata }, _coins_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _bigCoins_decorators, { kind: "field", name: "bigCoins", static: false, private: false, access: { has: function (obj) { return "bigCoins" in obj; }, get: function (obj) { return obj.bigCoins; }, set: function (obj, value) { obj.bigCoins = value; } }, metadata: _metadata }, _bigCoins_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _btnBuy_decorators, { kind: "field", name: "btnBuy", static: false, private: false, access: { has: function (obj) { return "btnBuy" in obj; }, get: function (obj) { return obj.btnBuy; }, set: function (obj, value) { obj.btnBuy = value; } }, metadata: _metadata }, _btnBuy_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Offline = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Offline = _classThis;
}();
exports.Offline = Offline;
