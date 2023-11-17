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
exports.LimitGift = void 0;
var cc_1 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var DataObject_1 = require("../tools/DataObject");
var cc_2 = require("cc");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var PurchaseData_1 = require("../common/tableData/PurchaseData");
var DropMgr_1 = require("../mgr/DropMgr");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var LangData_1 = require("../common/tableData/LangData");
var cc_3 = require("cc");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var GameMgr_1 = require("../common/mgr/GameMgr");
var cc_4 = require("cc");
var GameEvent_1 = require("../common/config/GameEvent");
var HttpPost_1 = require("../tools/HttpPost");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var LimitGift = function () {
    var _classDecorators = [ccclass('LimitGift')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _itemParent_decorators;
    var _itemParent_initializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _tog_decorators;
    var _tog_initializers = [];
    var _anim_decorators;
    var _anim_initializers = [];
    var LimitGift = _classThis = /** @class */ (function (_super) {
        __extends(LimitGift_1, _super);
        function LimitGift_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemParent = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _itemParent_initializers, null));
            _this.item = __runInitializers(_this, _item_initializers, null);
            _this.tog = __runInitializers(_this, _tog_initializers, null);
            _this.anim = __runInitializers(_this, _anim_initializers, null);
            _this.time = null;
            _this.curIdx = null;
            return _this;
        }
        LimitGift_1.prototype.onAdded = function () {
            this.curIdx = 0;
            this.data = [];
            var idx = 0;
            for (var _i = 0, _a = SingletonModuleComp_1.smc.account.AccountModel.timeLimitOrder; _i < _a.length; _i++) {
                var id = _a[_i][0];
                var data = SingletonModuleComp_1.smc.account.AccountModel.timeLimitOrder.get(id);
                this.data.push(data);
                if (!(data === null || data === void 0 ? void 0 : data.isTip)) {
                    this.curIdx = idx;
                    data.isTip = true;
                }
                idx++;
            }
            // this.data = smc.account.AccountModel.timeLimitOrder;
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/page", this.node, (this.data.length > 1));
        };
        LimitGift_1.prototype.start = function () {
            var _this = this;
            this.anim.setCompleteListener(function () {
                _this.anim.setAnimation(0, "idle", true);
            });
            Oops_1.oops.message.on(GameEvent_1.GameEvent.LimitGiftAds, this.updateData, this);
            this.initUI();
        };
        LimitGift_1.prototype.updateData = function () {
            this.data[this.curIdx].adTimes = 10;
            this.initUI();
        };
        LimitGift_1.prototype.onDisable = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.LimitGiftAds, this.updateData, this);
        };
        LimitGift_1.prototype.initUI = function () {
            this.purchase = new PurchaseData_1.PurchaseData(this.data[this.curIdx].id);
            var limitData1 = DropMgr_1.DropMgr.getDropData(this.purchase.reward);
            var str = new LangData_1.LangData(this.purchase.desc).getDesc();
            ViewUtil_1.ViewUtil.setLabelStringByName("root/decBg/Label", this.node, str);
            //金额
            if (this.data[this.curIdx].adTimes < this.purchase.money) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/btn_buy", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/getReward", this.node, false);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/btn_buy", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/getReward", this.node, true);
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("root/btn_buy/num", this.node, Oops_1.oops.language.getLangByID("weekActivity.times", (this.data[this.curIdx].adTimes + "/" + this.purchase.money)));
            // ViewUtil.setLabelStringByName("root/btn_buy/preMoney", this.node, this.purchase.getPreMoney());
            // ViewUtil.setLabelStringByName("root/btn_buy/nowMoney", this.node, this.purchase.getMoney());
            this.setListItem(limitData1, this.itemParent);
            var tipData = Oops_1.oops.storage.get("tipShow");
            var curTime = Oops_1.oops.timer.getServerTime();
            if (tipData && tipData == "1") {
                var tipTime = Oops_1.oops.storage.get("tipTime");
                if (tipTime && curTime <= parseInt(tipTime)) {
                    this.tog.isChecked = true;
                }
                else {
                    this.tog.isChecked = false;
                }
            }
            else {
                this.tog.isChecked = false;
            }
            this.setTimer();
        };
        LimitGift_1.prototype.onDestroy = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.LimitGift);
        };
        LimitGift_1.prototype.leftBtn = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.curIdx == 0) {
                this.curIdx = this.data.length - 1;
            }
            else {
                this.curIdx--;
            }
            var curTime = Oops_1.oops.timer.getServerTime();
            var time = (this.data[this.curIdx].endTime - curTime);
            if (time <= 0) {
                this.leftBtn();
            }
            else {
                this.initUI();
            }
        };
        LimitGift_1.prototype.rightBtn = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.curIdx == this.data.length - 1) {
                this.curIdx = 0;
            }
            else {
                this.curIdx++;
            }
            var curTime = Oops_1.oops.timer.getServerTime();
            var time = (this.data[this.curIdx].endTime - curTime);
            if (time <= 0) {
                this.leftBtn();
            }
            else {
                this.initUI();
            }
        };
        LimitGift_1.prototype.setListItem = function (data, parent) {
            var maxLen = data.length > parent.children.length ? data.length : parent.children.length;
            for (var i = 0; i < maxLen; i++) {
                var item = void 0;
                if (data[i] && !parent.children[i]) {
                    item = (0, cc_2.instantiate)(this.item);
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
            }
        };
        /**创建计时器 */
        LimitGift_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            var curTime = Oops_1.oops.timer.getServerTime();
            this.time = (this.data[this.curIdx].endTime - curTime);
            this.onSecond();
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        LimitGift_1.prototype.onSecond = function () {
            var time;
            if (this.time >= 3600) {
                time = StringUtil_1.StringUtil.formatTimeWithSec(this.time, true);
            }
            else {
                time = StringUtil_1.StringUtil.formatTimeWithSec(this.time);
            }
            this.isShowPage();
            ViewUtil_1.ViewUtil.setLabelStringByName("root/timeBg/Label", this.node, Oops_1.oops.language.getLangByID("common.leftTime") + time);
        };
        LimitGift_1.prototype.onComplete = function () {
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.LimitGift);
        };
        LimitGift_1.prototype.isShowPage = function () {
            var num = 0;
            for (var i = 0, len = this.data.length; i < len; i++) {
                var curTime = Oops_1.oops.timer.getServerTime();
                var time = (this.data[this.curIdx].endTime - curTime);
                if (time > 0) {
                    num++;
                }
            }
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/page", this.node, (num > 1));
        };
        LimitGift_1.prototype.notTip = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.tog.isChecked) {
                Oops_1.oops.storage.set("tipTime", this.getZeroTime());
                Oops_1.oops.storage.set("tipShow", "1");
            }
            else {
                Oops_1.oops.storage.set("tipShow", "2");
            }
        };
        //获取距离当天24点整即下一天的0点整还有多少秒
        LimitGift_1.prototype.getZeroTime = function () {
            var curTime = Oops_1.oops.timer.getServerTime();
            var date = new Date(curTime * 1000);
            date.setHours(0, 0, 0, 0);
            return (date.getTime() / 1000 + 24 * 60 * 60);
        };
        LimitGift_1.prototype.closeView = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (GameMgr_1.GameMgr.Instance.tips[0]) {
                Oops_1.oops.gui.open(GameMgr_1.GameMgr.Instance.tips[0]);
                GameMgr_1.GameMgr.Instance.tips.splice(0, 1);
            }
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.LimitGift);
        };
        LimitGift_1.prototype.btn_buy = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.data[this.curIdx].adTimes < this.purchase.money) {
                SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.LimitGift, function (adsTipType) {
                    HttpPost_1.HttpPost.instance.limitedTimeAdTimes(_this.purchase.id, function (data) {
                        _this.data[_this.curIdx].adTimes = data.adTimes;
                        _this.initUI();
                    });
                });
            }
            else {
                HttpPost_1.HttpPost.instance.purchaseCurrency(DataObject_1.IaaType.LimitGift, this.purchase.id, function (data) {
                    var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                    var dropInfo = new DataObject_1.DropInfo();
                    dropInfo.dropData = dropDatas;
                    dropInfo.dropFrom = DataObject_1.DropFrom.LimitGift;
                    dropInfo.UIID = [GameUIConfig_1.UIID.LimitGift];
                    // DataMgr.updateUserData(data.userGrade, null, data.taskList);
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.LimitGift);
                });
            }
            // SdkPlatform.recharge_click(PayType.LimitGift, this.purchase.id);
            // Payment.Instance.createOrder(this.purchase.id);
        };
        return LimitGift_1;
    }(_classSuper));
    __setFunctionName(_classThis, "LimitGift");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _itemParent_decorators = [property(cc_1.Node)];
        _item_decorators = [property(cc_1.Node)];
        _tog_decorators = [property(cc_3.Toggle)];
        _anim_decorators = [property(cc_4.sp.Skeleton)];
        __esDecorate(null, null, _itemParent_decorators, { kind: "field", name: "itemParent", static: false, private: false, access: { has: function (obj) { return "itemParent" in obj; }, get: function (obj) { return obj.itemParent; }, set: function (obj, value) { obj.itemParent = value; } }, metadata: _metadata }, _itemParent_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _tog_decorators, { kind: "field", name: "tog", static: false, private: false, access: { has: function (obj) { return "tog" in obj; }, get: function (obj) { return obj.tog; }, set: function (obj, value) { obj.tog = value; } }, metadata: _metadata }, _tog_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _anim_decorators, { kind: "field", name: "anim", static: false, private: false, access: { has: function (obj) { return "anim" in obj; }, get: function (obj) { return obj.anim; }, set: function (obj, value) { obj.anim = value; } }, metadata: _metadata }, _anim_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LimitGift = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LimitGift = _classThis;
}();
exports.LimitGift = LimitGift;
