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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstRecharge = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var DataObject_1 = require("../../tools/DataObject");
var GameUIConfig_1 = require("../../common/config/GameUIConfig");
var ViewUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var cc_2 = require("cc");
var Role_1 = require("../../dress/Role");
var FirstRechargeItem_1 = require("./FirstRechargeItem");
var StringUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var SuitData_1 = require("../../common/tableData/SuitData");
var PurchaseData_1 = require("../../common/tableData/PurchaseData");
var SdkPlatform_1 = require("../../platform/SdkPlatform");
var DropMgr_1 = require("../../mgr/DropMgr");
var BundleConfig_1 = require("../../common/bundle/BundleConfig");
var HttpPost_1 = require("../../tools/HttpPost");
var SingletonModuleComp_1 = require("../../common/ecs/SingletonModuleComp");
var GameEvent_1 = require("../../common/config/GameEvent");
var DataMgr_1 = require("../../mgr/DataMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var FirstRecharge = function () {
    var _classDecorators = [ccclass('FirstRecharge')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _anim_decorators;
    var _anim_initializers = [];
    var _items_decorators;
    var _items_initializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var _reward_decorators;
    var _reward_initializers = [];
    var FirstRecharge = _classThis = /** @class */ (function (_super) {
        __extends(FirstRecharge_1, _super);
        function FirstRecharge_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.anim = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _anim_initializers, void 0));
            _this.items = __runInitializers(_this, _items_initializers, void 0);
            _this.role = __runInitializers(_this, _role_initializers, void 0);
            _this.reward = __runInitializers(_this, _reward_initializers, void 0);
            _this.product_id = 301;
            return _this;
        }
        FirstRecharge_1.prototype.start = function () {
            var _a;
            if (this.anim) {
                this.anim.setAnimation(0, "animation", false);
                this.anim.setCompleteListener(this.onAnimationComplete.bind(this));
            }
            var purchaseData = new PurchaseData_1.PurchaseData(this.product_id);
            var reward = StringUtil_1.StringUtil.stringToArray5(purchaseData.reward);
            this.suitData = new SuitData_1.SuitData(parseInt(reward[1]));
            //套装展示
            this.suitPreview();
            //奖励物品
            var itemChildren = this.items.children;
            var suitIds = StringUtil_1.StringUtil.stringToArray2(this.suitData.suitNumber);
            for (var i = 0; i < itemChildren.length; i++) {
                var element = itemChildren[i];
                (_a = element.getComponent(FirstRechargeItem_1.FirstRechargeItem)) === null || _a === void 0 ? void 0 : _a.initData(parseInt(suitIds[i]));
            }
            this.setRewardItem();
            //金额
            ViewUtil_1.ViewUtil.setLabelStringByName("btn_buy/preMoney", this.node, purchaseData.shamMoney + "");
            ViewUtil_1.ViewUtil.setLabelStringByName("btn_buy/lay/nowMoney", this.node, purchaseData.money + "");
            SdkPlatform_1.SdkPlatform.recharge_show(DataObject_1.PayType.FirstRecharge);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.FirstDataBuyPass, this.updateData, this);
        };
        FirstRecharge_1.prototype.onAdded = function (data) {
            this.data = data;
            ViewUtil_1.ViewUtil.setNodeActiveByName("btn_buy", this.node, !data.isBuy);
        };
        FirstRecharge_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.FirstDataBuyPass, this.updateData, this);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.FirstRecharge);
        };
        FirstRecharge_1.prototype.setRewardItem = function () {
            for (var i = 0; i < 3; i++) {
                var node = this.reward.getChildByName("rewardItem" + (i + 1));
                var data = this.data.rewardList[i];
                var itemDropData = DropMgr_1.DropMgr.getDropData(data.reward);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", node, itemDropData[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("num", node, "" + itemDropData[0].dropAmount);
                ViewUtil_1.ViewUtil.setLabelStringByName("lock/day", node, Oops_1.oops.language.getLangByID("sign.dayn", data.day));
                if (data.status == 4 || data.status == 3) {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("lock", node, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("buy_btn", node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("getted", node, false);
                }
                else if (data.status == 1) {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("lock", node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("buy_btn", node, true);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("getted", node, false);
                }
                else if (data.status == 2) {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("lock", node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("buy_btn", node, false);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("getted", node, true);
                }
            }
        };
        FirstRecharge_1.prototype.getReward = function (ev, day) {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getFirstRechargeReward(day, function (data) {
                _this.onAdded(data.info);
                _this.setRewardItem();
                SingletonModuleComp_1.smc.account.AccountModel.firstRecharge = !data.info.isAllFinish;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowFirstRecharge);
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.FirstRecharge;
                dropInfo.UIID = [GameUIConfig_1.UIID.FirstRecharge];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                if (data.info.isAllFinish) {
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.FirstRecharge);
                }
            });
        };
        FirstRecharge_1.prototype.updateData = function () {
            var _this = this;
            HttpPost_1.HttpPost.instance.firstRechargeInfo(function (data) {
                _this.onAdded(data);
                _this.setRewardItem();
            });
        };
        FirstRecharge_1.prototype.suitPreview = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.role.getComponent(Role_1.Role).showSuitSkin(this.suitData.suitShow)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        FirstRecharge_1.prototype.onAnimationComplete = function (trackEntry) {
            // 判断动画是否播放完毕
            if (trackEntry.animation.name === "animation") {
                // 动画播放完毕，执行相应的操作
                this.anim.setAnimation(0, "idel", true);
            }
        };
        FirstRecharge_1.prototype.btn_buy = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var purchaseData = new PurchaseData_1.PurchaseData(this.product_id);
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.jewel < purchaseData.money) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.JumpTip, { closeView: GameUIConfig_1.UIID.FirstRecharge, type: DataObject_1.JumpTipType.diamond });
                return;
            }
            HttpPost_1.HttpPost.instance.purchaseCurrency(DataObject_1.IaaType.FirstRecharge, this.product_id, function (data) {
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.FirstRecharge;
                dropInfo.UIID = [GameUIConfig_1.UIID.FirstRecharge];
                DataMgr_1.DataMgr.updateUserData(data.userGrade, null, data.taskList);
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.jewel;
                _this.onAdded(data);
                _this.setRewardItem();
            });
        };
        FirstRecharge_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.FirstRecharge);
        };
        return FirstRecharge_1;
    }(_classSuper));
    __setFunctionName(_classThis, "FirstRecharge");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _anim_decorators = [property(cc_2.sp.Skeleton)];
        _items_decorators = [property(cc_1.Node)];
        _role_decorators = [property(cc_1.Node)];
        _reward_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _anim_decorators, { kind: "field", name: "anim", static: false, private: false, access: { has: function (obj) { return "anim" in obj; }, get: function (obj) { return obj.anim; }, set: function (obj, value) { obj.anim = value; } }, metadata: _metadata }, _anim_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _items_decorators, { kind: "field", name: "items", static: false, private: false, access: { has: function (obj) { return "items" in obj; }, get: function (obj) { return obj.items; }, set: function (obj, value) { obj.items = value; } }, metadata: _metadata }, _items_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reward_decorators, { kind: "field", name: "reward", static: false, private: false, access: { has: function (obj) { return "reward" in obj; }, get: function (obj) { return obj.reward; }, set: function (obj, value) { obj.reward = value; } }, metadata: _metadata }, _reward_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FirstRecharge = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FirstRecharge = _classThis;
}();
exports.FirstRecharge = FirstRecharge;
