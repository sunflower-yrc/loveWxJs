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
exports.Sign = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var SignData_1 = require("../common/tableData/SignData");
var SuitData_1 = require("../common/tableData/SuitData");
var Role_1 = require("../dress/Role");
var ButtonPlus_1 = require("../tools/ButtonPlus");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var SignDay_1 = require("./SignDay");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Sign = function () {
    var _classDecorators = [ccclass('Sign')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _signDays_decorators;
    var _signDays_initializers = [];
    var _progressNode_decorators;
    var _progressNode_initializers = [];
    var _totalRewardNode_decorators;
    var _totalRewardNode_initializers = [];
    var _day7thNode_decorators;
    var _day7thNode_initializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var Sign = _classThis = /** @class */ (function (_super) {
        __extends(Sign_1, _super);
        function Sign_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.signDays = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _signDays_initializers, void 0));
            _this.progressNode = __runInitializers(_this, _progressNode_initializers, void 0);
            _this.totalRewardNode = __runInitializers(_this, _totalRewardNode_initializers, void 0);
            _this.day7thNode = __runInitializers(_this, _day7thNode_initializers, void 0);
            _this.role = __runInitializers(_this, _role_initializers, void 0);
            _this.signedDays = 0;
            _this.dropData = [];
            return _this;
        }
        Sign_1.prototype.start = function () {
            var _a, _b;
            //总进度
            this.showTotalProgress();
            //当前阶段数据
            var stageDatas = SignData_1.SignData.allData.get(SingletonModuleComp_1.smc.account.AccountModel.signStage);
            //总奖励
            var signData = stageDatas[stageDatas.length - 1];
            this.dropData = DropMgr_1.DropMgr.getDropData(signData.itme);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.totalRewardNode, this.dropData[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("name", this.totalRewardNode, this.dropData[0].name);
            //绑定明细
            var btnCom = this.totalRewardNode.getComponent(ButtonPlus_1.default);
            if (btnCom) {
                btnCom.addLongClick(this.onLongPressThis.bind(this), this.onLongPressEndThis.bind(this), this);
            }
            //前面6天
            var days = this.signDays.children;
            for (var i = 0; i < 6; i++) {
                (_a = days[i].getComponent(SignDay_1.SignDay)) === null || _a === void 0 ? void 0 : _a.initData(i);
            }
            //第7天
            var signData7 = stageDatas[stageDatas.length - 2];
            var dropData7 = DropMgr_1.DropMgr.getDropData(signData7.itme);
            var suit = new SuitData_1.SuitData(dropData7[0].dropId);
            ViewUtil_1.ViewUtil.setLabelStringByName("title_bg/day", this.day7thNode, Oops_1.oops.language.getLangByID("sign.dayn", 7));
            ViewUtil_1.ViewUtil.setLabelStringByName("title_bg/reward", this.day7thNode, suit.getRandomName() + "x1");
            //套装明细名字
            var names = suit.getSuitItemNames();
            var length = names.length;
            var items = (_b = ViewUtil_1.ViewUtil.findNode("Layout", this.day7thNode)) === null || _b === void 0 ? void 0 : _b.children;
            for (var i = 0; i < items.length; i++) {
                var element = items[i];
                if (i < length) {
                    ViewUtil_1.ViewUtil.setLabelStringByName("name", element, names[i]);
                }
                else {
                    element.active = false;
                }
            }
            //套装皮肤
            this.showSuitSkin(suit);
            //领取状态
            this.show7thDayStatus();
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateSignTotalProgress, this.showTotalProgress, this);
        };
        Sign_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateSignTotalProgress, this.showTotalProgress, this);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.Sign);
        };
        /**
         * 总进度
         */
        Sign_1.prototype.showTotalProgress = function () {
            this.signedDays = SignData_1.SignData.getSignDays();
            ViewUtil_1.ViewUtil.setLabelStringByName("progress", this.progressNode, this.signedDays + "/7");
            var progressBar = this.progressNode.getComponent(cc_1.ProgressBar);
            progressBar.progress = this.signedDays / 7;
        };
        /**
         * 套装
         * @param suitData
         */
        Sign_1.prototype.showSuitSkin = function (suitData) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, ((_a = this.role.getComponent(Role_1.Role)) === null || _a === void 0 ? void 0 : _a.showSuitSkin(suitData.suitNumber))];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 第七天
         */
        Sign_1.prototype.show7thDayStatus = function () {
            var status = SingletonModuleComp_1.smc.account.AccountModel.signedData[6];
            if (status == -1) {
                //未开始
                ViewUtil_1.ViewUtil.setNodeActiveByName("signDay7/btn_sign", this.day7thNode, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("signDay7/signed", this.day7thNode, false);
            }
            else if (status == 0) {
                //错过了时间 可以补签
                ViewUtil_1.ViewUtil.setNodeActiveByName("signDay7/btn_sign", this.day7thNode, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("signDay7/signed", this.day7thNode, false);
            }
            else if (status == 1) {
                //当前可以签到
                ViewUtil_1.ViewUtil.setNodeActiveByName("signDay7/btn_sign", this.day7thNode, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("signDay7/signed", this.day7thNode, false);
            }
            else if (status == 2) {
                //已完成
                ViewUtil_1.ViewUtil.setNodeActiveByName("signDay7/btn_sign", this.day7thNode, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("signDay7/signed", this.day7thNode, true);
            }
        };
        Sign_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Sign);
        };
        /**
         * 第七天 签到
         */
        Sign_1.prototype.btn_sign = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.userSignIn(7, 1, function (data) {
                SingletonModuleComp_1.smc.account.AccountModel.rewardFinal = data.signData.rewardFinal;
                SingletonModuleComp_1.smc.account.AccountModel.signStage = data.signData.signStage;
                SingletonModuleComp_1.smc.account.AccountModel.signedData = data.signData.signedData;
                //显示掉落  随机一个服饰
                var dData = DropMgr_1.DropMgr.getSingleDropData(DataObject_1.DropType.Dress, data.dropId, 1);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dData;
                dropInfo.UIID.push(GameUIConfig_1.UIID.Sign);
                dropInfo.dropFrom = DataObject_1.DropFrom.Sign;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                //更新数据
                DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                //刷新状态
                _this.show7thDayStatus();
                //刷新进度
                _this.showTotalProgress();
            });
        };
        /**
         * 7天后领取总奖励
         * @returns
         */
        Sign_1.prototype.btn_total_reward = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (SingletonModuleComp_1.smc.account.AccountModel.rewardFinal == 0) {
                //未达到
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("sign.unreached"));
                return;
            }
            if (SingletonModuleComp_1.smc.account.AccountModel.rewardFinal == 2) {
                //已领取
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("sign.rereived"));
                return;
            }
            HttpPost_1.HttpPost.instance.userSignIn(8, 1, function (data) {
                SingletonModuleComp_1.smc.account.AccountModel.rewardFinal = data.signData.rewardFinal;
                SingletonModuleComp_1.smc.account.AccountModel.signStage = data.signData.signStage;
                SingletonModuleComp_1.smc.account.AccountModel.signedData = data.signData.signedData;
                //显示掉落
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = _this.dropData;
                dropInfo.UIID.push(GameUIConfig_1.UIID.Sign);
                dropInfo.dropFrom = DataObject_1.DropFrom.Sign;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                //更新数据
                DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
            });
        };
        Sign_1.prototype.onLongPressThis = function (event) {
            var touchPos = event.getUILocation();
            var itemDetailsData = new DataObject_1.ItemDetailsData();
            itemDetailsData.dropData = this.dropData[0];
            itemDetailsData.touchPos = touchPos;
            DataMgr_1.DataMgr.OpenItemDetails(itemDetailsData);
        };
        Sign_1.prototype.onLongPressEndThis = function (event) {
            DataMgr_1.DataMgr.CloseItemDetails();
        };
        return Sign_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Sign");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _signDays_decorators = [property(cc_1.Node)];
        _progressNode_decorators = [property(cc_1.Node)];
        _totalRewardNode_decorators = [property(cc_1.Node)];
        _day7thNode_decorators = [property(cc_1.Node)];
        _role_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _signDays_decorators, { kind: "field", name: "signDays", static: false, private: false, access: { has: function (obj) { return "signDays" in obj; }, get: function (obj) { return obj.signDays; }, set: function (obj, value) { obj.signDays = value; } }, metadata: _metadata }, _signDays_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _progressNode_decorators, { kind: "field", name: "progressNode", static: false, private: false, access: { has: function (obj) { return "progressNode" in obj; }, get: function (obj) { return obj.progressNode; }, set: function (obj, value) { obj.progressNode = value; } }, metadata: _metadata }, _progressNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _totalRewardNode_decorators, { kind: "field", name: "totalRewardNode", static: false, private: false, access: { has: function (obj) { return "totalRewardNode" in obj; }, get: function (obj) { return obj.totalRewardNode; }, set: function (obj, value) { obj.totalRewardNode = value; } }, metadata: _metadata }, _totalRewardNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _day7thNode_decorators, { kind: "field", name: "day7thNode", static: false, private: false, access: { has: function (obj) { return "day7thNode" in obj; }, get: function (obj) { return obj.day7thNode; }, set: function (obj, value) { obj.day7thNode = value; } }, metadata: _metadata }, _day7thNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Sign = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Sign = _classThis;
}();
exports.Sign = Sign;
