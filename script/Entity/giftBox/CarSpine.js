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
exports.CarSpine = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../../game/common/bundle/BundleConfig");
var GameEvent_1 = require("../../game/common/config/GameEvent");
var GameUIConfig_1 = require("../../game/common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../../game/common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../../game/common/mgr/GameMgr");
var BoxData_1 = require("../../game/common/tableData/BoxData");
var GlobalData_1 = require("../../game/common/tableData/GlobalData");
var TriggerData_1 = require("../../game/common/tableData/TriggerData");
var DataMgr_1 = require("../../game/mgr/DataMgr");
var DropMgr_1 = require("../../game/mgr/DropMgr");
var ButtonPlus_1 = require("../../game/tools/ButtonPlus");
var DataObject_1 = require("../../game/tools/DataObject");
var HttpPost_1 = require("../../game/tools/HttpPost");
var EventReport_1 = require("../../Global/EventReport");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
// Create an interface with the specified properties
// interface BoxData {
//     type: DropType;
//     dropId: number;
//     dropAmount: number;
//     openBoxTime: number;
//     gradeNow: number;
//     empiricalNow: number;
//     empiricalFull: number;
//     giveTimes: number;
//     time: number;
//     success: boolean;
// }
var TipBubbleState;
(function (TipBubbleState) {
    TipBubbleState[TipBubbleState["getable"] = 0] = "getable";
    TipBubbleState[TipBubbleState["accelerate"] = 1] = "accelerate";
    TipBubbleState[TipBubbleState["giveTimes"] = 2] = "giveTimes";
})(TipBubbleState || (TipBubbleState = {}));
var CarSpine = function () {
    var _classDecorators = [ccclass('CarSpine')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _timer_decorators;
    var _timer_initializers = [];
    var _boxNode_decorators;
    var _boxNode_initializers = [];
    var _openNowNode_decorators;
    var _openNowNode_initializers = [];
    var _reduce_decorators;
    var _reduce_initializers = [];
    var _aniNode_decorators;
    var _aniNode_initializers = [];
    var _timeBtn_decorators;
    var _timeBtn_initializers = [];
    var _useTicketBtn_decorators;
    var _useTicketBtn_initializers = [];
    var _openProSp_decorators;
    var _openProSp_initializers = [];
    var _tipBtn_decorators;
    var _tipBtn_initializers = [];
    var CarSpine = _classThis = /** @class */ (function (_super) {
        __extends(CarSpine_1, _super);
        function CarSpine_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.timeId = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.leftTime = 0;
            _this.playEnd = false;
            _this.btn = null;
            _this.timer = __runInitializers(_this, _timer_initializers, null);
            _this.boxNode = __runInitializers(_this, _boxNode_initializers, null);
            _this.openNowNode = __runInitializers(_this, _openNowNode_initializers, null);
            _this.reduce = __runInitializers(_this, _reduce_initializers, null);
            _this.aniNode = __runInitializers(_this, _aniNode_initializers, null);
            _this.timeBtn = __runInitializers(_this, _timeBtn_initializers, null);
            _this.useTicketBtn = __runInitializers(_this, _useTicketBtn_initializers, null);
            _this.openProSp = __runInitializers(_this, _openProSp_initializers, void 0);
            _this.tipBtn = __runInitializers(_this, _tipBtn_initializers, null);
            _this.twe = null;
            _this.noCar = false;
            _this.isComing = false;
            _this.waitCdNodes = [];
            _this.reduceNodes = [];
            _this.isTip = true;
            /**是否正在开箱 */
            _this.isDroping = false;
            return _this;
        }
        CarSpine_1.prototype.onSecond = function () {
            this.formatTime(this.leftTime);
            // console.log("每秒触发一次");
        };
        CarSpine_1.prototype.onComplete = function () {
            // console.log("倒计时完成触发");
            this.playEnterAnimation();
            this.timer.active = false;
            this.openNowNode.active = true;
            //this.refreshBoxNum();
            // const getableNode = ViewUtil.getChildByName("getableNode", this.node)!;
            // getableNode.active = true;
            // ViewUtil.setNodeActiveByName("getable", this.node, true)!;
            // ViewUtil.setNodeActiveByName("accelerate", this.node, false)!;
        };
        CarSpine_1.prototype.onLoad = function () {
            var _a;
            GameMgr_1.GameMgr.Instance.carSpine = this;
            this.spine = this.node.getComponent(cc_1.sp.Skeleton);
            var btn = ViewUtil_1.ViewUtil.getChildByName("carBtn", this.node);
            this.btn = btn === null || btn === void 0 ? void 0 : btn.getComponent(ButtonPlus_1.default);
            this.btn.node.active = false;
            //判断是否可以直接开
            this.waitCdNodes = this.timer.children;
            this.reduceNodes = this.reduce.children;
            if (GameMgr_1.GameMgr.Instance.isOutside) {
                var trigger = SingletonModuleComp_1.smc.account.AccountModel.eventList.get(GameMgr_1.GameMgr.Instance.outsideEventData.triggerID);
                var countTime = (GameMgr_1.GameMgr.Instance.outsideEventData.eventTime + trigger.startTime) - Math.ceil(Date.now() / 1000);
                if (GameMgr_1.GameMgr.Instance.outsideEventData.eventTime > 0) {
                    if (countTime <= 0) {
                        this.noCar = true;
                        this.noCarComeBack();
                        return;
                    }
                }
                if (SingletonModuleComp_1.smc.account.AccountModel.outSurplusOpenTimes == 0) {
                    this.noCar = true;
                    this.noCarComeBack();
                    return;
                }
            }
            Oops_1.oops.message.on(GameEvent_1.GameEvent.OffBtns, this.offBtns, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.OnBtns, this.onBtns, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.SpeedUpOpenBox, this.setTimer, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.SuperOpenBoxRefresh, this.superOpenBoxDeal, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.CheckCarEvent, this.refreshCarState, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.RefreshCarIsSuper, this.refreshCountPro, this);
            this.timeBtn.on("click", this.openAccelerateUI, this);
            //this.useTicketBtn.on("click", this.openAccelerateUI, this);
            (_a = ViewUtil_1.ViewUtil.getChildByName("accelerate", this.node)) === null || _a === void 0 ? void 0 : _a.on("click", this.openAccelerateUI, this);
            this.refreshCountPro();
            if (!GameMgr_1.GameMgr.Instance.isOutside ? SingletonModuleComp_1.smc.account.AccountModel.vm.giveTimes : 0 > 0) {
                this.timeBtn.active = false;
                this.timer.active = true;
                this.boxNode.active = false;
                this.useTicketBtn.active = false;
                this.spine.enabled = true;
                this.tipBtn.active = false;
                this.switchTipNode(TipBubbleState.giveTimes);
                //this.playSpeedUpNodeAni();
                this.playIdleAnimation();
                return;
            }
            else {
                this.setTimer();
            }
            this.tipBtn.on(cc_1.Node.EventType.TOUCH_END, this.touchEnd, this);
            this.tipBtn.on(cc_1.Node.EventType.TOUCH_MOVE, this.touchMove, this);
            this.tipBtn.on(cc_1.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
            this.node.on(cc_1.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        };
        CarSpine_1.prototype.touchEnd = function () {
            if (this.isTip && !this.isDroping && !this.noCar) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.carTip"));
            }
            this.isTip = true;
        };
        CarSpine_1.prototype.touchMove = function () {
            this.isTip = false;
        };
        CarSpine_1.prototype.touchCancel = function () {
            this.isTip = true;
        };
        CarSpine_1.prototype.refreshBoxNum = function () {
            var times = SingletonModuleComp_1.smc.account.AccountModel.vm.giveTimes.toString().padStart(2, '0');
            ViewUtil_1.ViewUtil.setSingleSpriteFrame(ViewUtil_1.ViewUtil.findChildByName("num1", this.boxNode), "texture/home/no_" + times[0], BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setSingleSpriteFrame(ViewUtil_1.ViewUtil.findChildByName("num2", this.boxNode), "texture/home/no_" + times[1], BundleConfig_1.default.instance.guiBundle.name);
        };
        CarSpine_1.prototype.refreshCountPro = function () {
            var _a, _b, _c;
            if (!GameMgr_1.GameMgr.Instance.isOutside) {
                var globalTable = new GlobalData_1.GlobalData(24);
                this.openProSp.fillRange = SingletonModuleComp_1.smc.account.AccountModel.superOpenCount / Number(globalTable.value);
                if (SingletonModuleComp_1.smc.account.AccountModel.superOpenCount >= Number(globalTable.value))
                    (_a = this.spine) === null || _a === void 0 ? void 0 : _a.setSkin("2");
                else
                    (_b = this.spine) === null || _b === void 0 ? void 0 : _b.setSkin("1");
            }
            else {
                this.openProSp.fillRange = 0;
                (_c = this.spine) === null || _c === void 0 ? void 0 : _c.setSkin("1");
            }
        };
        /** 切换提示泡 */
        CarSpine_1.prototype.switchTipNode = function (nowState) {
            ViewUtil_1.ViewUtil.setNodeActiveByName("getable", this.node, nowState == TipBubbleState.getable);
            ViewUtil_1.ViewUtil.setNodeActiveByName("accelerate", this.node, nowState == TipBubbleState.accelerate);
            //ViewUtil.setNodeActiveByName("giveTimes", this.node, nowState == TipBubbleState.giveTimes)!;
            this.boxNode.active = (nowState == TipBubbleState.giveTimes);
            if (nowState == TipBubbleState.giveTimes) {
                this.timer.active = false;
                this.openNowNode.active = false;
                this.refreshBoxNum();
            }
        };
        /**关闭按钮 */
        CarSpine_1.prototype.offBtns = function () {
            this.node.active = false;
            this.timer.parent.active = false;
        };
        /**关闭按钮 */
        CarSpine_1.prototype.onBtns = function () {
            this.node.active = true;
            this.timer.parent.active = true;
        };
        /**播放气泡浮动 */
        CarSpine_1.prototype.playSpeedUpNodeAni = function () {
            var _this = this;
            var getableNode = ViewUtil_1.ViewUtil.getChildByName("getableNode", this.node);
            this.twe = (0, cc_1.tween)(getableNode)
                .to(0.5, { scale: new cc_1.Vec3(2.2, 2.2, 2.2) })
                .to(0.5, { scale: new cc_1.Vec3(2, 2, 2) })
                .call(function () {
                if (!ViewUtil_1.ViewUtil.getChildByName("getable", getableNode).active && !ViewUtil_1.ViewUtil.getChildByName("giveTimes", getableNode).active)
                    _this.twe.start();
            }).start();
        };
        CarSpine_1.prototype.onDestroy = function () {
            var _a;
            Oops_1.oops.message.off(GameEvent_1.GameEvent.SpeedUpOpenBox, this.setTimer, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.SuperOpenBoxRefresh, this.superOpenBoxDeal, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.CheckCarEvent, this.refreshCarState, this);
            (_a = ViewUtil_1.ViewUtil.getChildByName("accelerate", this.node)) === null || _a === void 0 ? void 0 : _a.off("click", this.openAccelerateUI, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.OffBtns, this.offBtns, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.OnBtns, this.onBtns, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.RefreshCarIsSuper, this.refreshCountPro, this);
            Oops_1.oops.timer.unRegister(this.timeId);
            // this.tipBtn!.off(Node.EventType.TOUCH_END,this.touchEnd,this);
            // this.tipBtn!.off(Node.EventType.TOUCH_MOVE,this.touchMove,this);
            // this.tipBtn!.off(Node.EventType.TOUCH_CANCEL,this.touchCancel,this);
        };
        /**创建计时器 */
        CarSpine_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
                this.timer.active = false;
                this.openNowNode.active = false;
                this.boxNode.active = true;
                this.refreshBoxNum();
            }
            this.leftTime = Math.ceil(SingletonModuleComp_1.smc.account.AccountModel.getOpenBoxTime - Oops_1.oops.timer.getServerTime());
            if (this.leftTime <= 0) {
                this.playEnterAnimation();
                this.openNowNode.active = true;
                this.timer.active = false;
                return;
            }
            this.openNowNode.active = false;
            this.timer.active = true;
            this.boxNode.active = false;
            this.formatReduceTime();
            this.playExitAnimation();
            // this.playSpeedUpNodeAni();
            this.formatTime(this.leftTime);
            this.timeId = Oops_1.oops.timer.register(this, "leftTime", this.onSecond, this.onComplete);
        };
        /**入场动画 */
        CarSpine_1.prototype.playEnterAnimation = function () {
            var _this = this;
            var _a, _b, _c;
            this.spine.timeScale = 1;
            this.isComing = true;
            if (!GameMgr_1.GameMgr.Instance.isOutside ? SingletonModuleComp_1.smc.account.AccountModel.vm.giveTimes : 0 > 0) {
                this.switchTipNode(TipBubbleState.giveTimes);
            }
            else {
                this.switchTipNode(TipBubbleState.getable);
            }
            this.timeBtn.active = false;
            this.tipBtn.active = false;
            this.useTicketBtn.active = false;
            if (((_a = this.spine) === null || _a === void 0 ? void 0 : _a.getState().getCurrent(0).animation.name) == "idle") {
                this.spine.enabled = true;
                this.playIdleAnimation();
                return;
            }
            // const getableNode = ViewUtil.findChildByName("getableNode", this.node)!;
            // getableNode.off("click", this.openBoxBtn, this);
            this.spine.enabled = true;
            (_b = this.spine) === null || _b === void 0 ? void 0 : _b.setAnimation(0, "into", false);
            (_c = this.spine) === null || _c === void 0 ? void 0 : _c.setCompleteListener(function () {
                _this.playIdleAnimation();
            });
        };
        /**
         * 开箱动画
         * @param id  1普通动画  2高级动画
         */
        CarSpine_1.prototype.playTrunkOpenAnimation = function (data) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var fontNode, dropData;
                var _this = this;
                return __generator(this, function (_d) {
                    // play trunk open animation
                    GameMgr_1.GameMgr.Instance.mapManager.moveScreenToNode(this.aniNode, 2);
                    Oops_1.oops.gui.root.once(cc_1.Node.EventType.TOUCH_START, function () {
                        if (_this.spine) {
                            _this.spine.timeScale = 1;
                        }
                    }, this);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.HideHomeUI);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.HideNpcPos);
                    GameMgr_1.GameMgr.Instance.MapClickable = false;
                    fontNode = ViewUtil_1.ViewUtil.getChildByName("font", this.node.parent.parent);
                    if (fontNode)
                        fontNode.active = false;
                    if (data && data.prop && data.prop[0]) {
                        dropData = DropMgr_1.DropMgr.getDropInfo(data.prop[0].type, data.prop[0].dropId, 1);
                        (_a = this.spine) === null || _a === void 0 ? void 0 : _a.setAnimation(0, "open" + dropData.grade, false);
                    }
                    else {
                        (_b = this.spine) === null || _b === void 0 ? void 0 : _b.setAnimation(0, "open" + 1, false);
                    }
                    if (!data) {
                        this.handlerDroping(false);
                        return [2 /*return*/];
                    }
                    (_c = this.spine) === null || _c === void 0 ? void 0 : _c.setCompleteListener(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, this.dealRewardData(data)];
                                case 1:
                                    _c.sent();
                                    if (fontNode)
                                        fontNode.active = true;
                                    if (this.noCar) {
                                        this.playExitAnimation();
                                    }
                                    else {
                                        (_a = this.spine) === null || _a === void 0 ? void 0 : _a.setAnimation(0, "idle", true);
                                    }
                                    this.spine.timeScale = 1;
                                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowHomeUI);
                                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowNpcPos);
                                    GameMgr_1.GameMgr.Instance.mapManager.setScreenToOriginPos();
                                    GameMgr_1.GameMgr.Instance.MapClickable = true;
                                    Oops_1.oops.gui.root.off(cc_1.Node.EventType.TOUCH_START);
                                    this.refreshCountPro();
                                    (_b = this.spine) === null || _b === void 0 ? void 0 : _b.setCompleteListener(function () {
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        };
        /**静态动画 */
        CarSpine_1.prototype.playIdleAnimation = function () {
            var _a, _b;
            this.isComing = false;
            this.spine.timeScale = 1;
            (_a = this.spine) === null || _a === void 0 ? void 0 : _a.setAnimation(0, "idle", true);
            this.spine.enabled = true;
            if (!GameMgr_1.GameMgr.Instance.isOutside ? SingletonModuleComp_1.smc.account.AccountModel.vm.giveTimes : 0 > 0) {
                this.switchTipNode(TipBubbleState.giveTimes);
            }
            else if (this.leftTime <= 0) {
                this.switchTipNode(TipBubbleState.getable);
            }
            else {
                this.switchTipNode(TipBubbleState.accelerate);
            }
            this.btn.node.active = true;
            (_b = this.spine) === null || _b === void 0 ? void 0 : _b.setCompleteListener(function () {
            });
        };
        /**不会有车回来了 */
        CarSpine_1.prototype.noCarComeBack = function () {
            var _this = this;
            var _a, _b;
            this.spine.timeScale = 1;
            this.offBtns();
            (_a = this.spine) === null || _a === void 0 ? void 0 : _a.setAnimation(0, "leave", false);
            this.btn.node.active = false;
            (_b = this.spine) === null || _b === void 0 ? void 0 : _b.setCompleteListener(function () {
                _this.node.parent.active = false;
            });
        };
        CarSpine_1.prototype.playExitAnimation = function () {
            var _this = this;
            var _a, _b, _c;
            /**没有车回来了 */
            if (this.noCar) {
                this.noCarComeBack();
                return;
            }
            this.spine.timeScale = 1;
            // const getableNode = ViewUtil.findChildByName("getableNode", this.node)!;
            // getableNode.off("click", this.openBoxBtn, this);
            this.switchTipNode(TipBubbleState.accelerate);
            if (Math.ceil(SingletonModuleComp_1.smc.account.AccountModel.getOpenBoxTime - Oops_1.oops.timer.getServerTime()) <= 0 ||
                !GameMgr_1.GameMgr.Instance.isOutside ? SingletonModuleComp_1.smc.account.AccountModel.vm.giveTimes : 0 > 0) {
                this.playIdleAnimation();
                return;
            }
            (_a = this.spine) === null || _a === void 0 ? void 0 : _a.setCompleteListener(function () {
                _this.spine.enabled = false;
                _this.timeBtn.active = true;
                _this.tipBtn.active = true;
                _this.useTicketBtn.active = true;
                _this.formatReduceTime();
            });
            if (((_b = this.spine) === null || _b === void 0 ? void 0 : _b.getState().getCurrent(0).animation.name) != "leave") {
                (_c = this.spine) === null || _c === void 0 ? void 0 : _c.setAnimation(0, "leave", false);
            }
            this.btn.node.active = false;
        };
        /**请求奖励数据 */
        CarSpine_1.prototype.generalDrop = function (guide_id) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            HttpPost_1.HttpPost.instance.openBox(guide_id, function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var triggers, _i, triggers_1, i;
                                return __generator(this, function (_a) {
                                    //增加开箱总次数
                                    SingletonModuleComp_1.smc.account.AccountModel.boxOpenTimes++;
                                    SingletonModuleComp_1.smc.account.AccountModel.superOpenCount = data.openBoxCount;
                                    //功能开启检查
                                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.HomeFuncOpen, DataObject_1.FunctionCheckType.BoxOpen);
                                    if (data.start_event == 1) {
                                        triggers = TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.DailyOnlineTime);
                                        if (triggers) {
                                            for (_i = 0, triggers_1 = triggers; _i < triggers_1.length; _i++) {
                                                i = triggers_1[_i];
                                                i.checkTrigger();
                                            }
                                        }
                                    }
                                    resolve(data); // 执行成功时返回 data 数据。
                                    return [2 /*return*/];
                                });
                            }); }, function (data) {
                                HttpPost_1.HttpPost.instance.eventReport({ event: EventReport_1.EVENT_REPORT.carOpenError, extra: { event: data.event, super: "general" } });
                                _this.handlerDroping(false);
                                resolve(false);
                            });
                        })];
                });
            });
        };
        CarSpine_1.prototype.superOpenBoxDeal = function (event, args) {
            var _a;
            if (!args) {
                return;
            }
            if (GameMgr_1.GameMgr.Instance.ConstructionState)
                return;
            if (((_a = this.spine) === null || _a === void 0 ? void 0 : _a.getState().getCurrent(0).animation.name) != "idle") {
                return;
            }
            /**根据服务端数据返回品质播放开箱动画 */
            this.playTrunkOpenAnimation(args);
            this.btn.node.active = false;
        };
        /**处理剩余数据 */
        CarSpine_1.prototype.dealRewardData = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var dropData, i, element, dropItem, dropInfo;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            dropData = [];
                            for (i = 0; i < data.prop.length; i++) {
                                element = data.prop[i];
                                dropItem = DropMgr_1.DropMgr.getDropInfo(element.type, element.dropId, element.dropAmount);
                                dropData.push(dropItem);
                            }
                            dropInfo = new DataObject_1.DropInfo();
                            dropInfo.dropData = dropData;
                            dropInfo.dropFrom = DataObject_1.DropFrom.Box;
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, { dropInfo: dropInfo, extreData: data.extraReward, isOpen: true }, {
                                onRemoved: function () {
                                    _this.handlerDroping(false);
                                }
                            });
                            //宝箱
                            SingletonModuleComp_1.smc.account.AccountModel.setOpenBoxTime = data.openBoxTime;
                            //当前开箱次数
                            SingletonModuleComp_1.smc.account.AccountModel.setTodayOpenTimes = data.todayOpenTimes;
                            /**刷新第二主键 */
                            SingletonModuleComp_1.smc.account.AccountModel.setBoxConfigKey = data.configKey;
                            if (GameMgr_1.GameMgr.Instance.isOutside) {
                                SingletonModuleComp_1.smc.account.AccountModel.outSurplusOpenTimes = data.surplusOpenTimes;
                                if (data.surplusOpenTimes == 0) {
                                    this.noCar = true;
                                }
                            }
                            else {
                                //更新数据
                                SingletonModuleComp_1.smc.account.AccountModel.boxFirstKey = data.boxConfigId;
                                SingletonModuleComp_1.smc.account.AccountModel.noviceBox = data.noviceBox;
                                SingletonModuleComp_1.smc.account.AccountModel.vm.giveTimes = data.giveTimes;
                            }
                            return [4 /*yield*/, DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**刷新车状态 */
        CarSpine_1.prototype.refreshCarState = function () {
            var waitTime = Math.ceil(SingletonModuleComp_1.smc.account.AccountModel.getOpenBoxTime - Oops_1.oops.timer.getServerTime());
            if (waitTime <= 0 || !GameMgr_1.GameMgr.Instance.isOutside ? SingletonModuleComp_1.smc.account.AccountModel.vm.giveTimes : 0 > 0) {
                this.playIdleAnimation();
                return;
            }
            else {
                // 
            }
            this.setTimer();
        };
        /**格式化时间 */
        CarSpine_1.prototype.formatTime = function (remainingSeconds) {
            var hours = Math.floor(remainingSeconds / 3600);
            var minutes = Math.floor((remainingSeconds - (hours * 3600)) / 60);
            var seconds = remainingSeconds % 60;
            var hoursStr = hours.toString().padStart(2, '0');
            var minutesStr = minutes.toString().padStart(2, '0');
            var secondsStr = seconds.toString().padStart(2, '0');
            // if (this.isValid)
            //     this.timer.string = hours > 0 ? `${hoursStr}:${minutesStr}:${secondsStr}` : `${minutesStr}:${secondsStr}`;
            if (this.isValid) {
                //展示倒计时图片
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.waitCdNodes[0], "texture/home/no_" + minutesStr[0], BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.waitCdNodes[1], "texture/home/no_" + minutesStr[1], BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.waitCdNodes[3], "texture/home/no_" + secondsStr[0], BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.waitCdNodes[4], "texture/home/no_" + secondsStr[1], BundleConfig_1.default.instance.guiBundle.name);
            }
        };
        CarSpine_1.prototype.formatReduceTime = function () {
            var boxData;
            if (GameMgr_1.GameMgr.Instance.isOutside) {
                boxData = new BoxData_1.BoxData(GameMgr_1.GameMgr.Instance.outSceneID, SingletonModuleComp_1.smc.account.AccountModel.outBoxConfigKey);
            }
            else {
                boxData = new BoxData_1.BoxData(SingletonModuleComp_1.smc.account.AccountModel.boxFirstKey, SingletonModuleComp_1.smc.account.AccountModel.getBoxConfigKey);
            }
            var remainingSeconds = 0;
            if (boxData.CoolingTime)
                remainingSeconds = boxData.CoolingTime;
            var hours = Math.floor(remainingSeconds / 3600);
            var minutes = Math.floor((remainingSeconds - (hours * 3600)) / 60);
            var seconds = remainingSeconds % 60;
            var hoursStr = hours.toString().padStart(2, '0');
            var minutesStr = minutes.toString().padStart(2, '0');
            var secondsStr = seconds.toString().padStart(2, '0');
            if (this.isValid) {
                //展示倒计时图片
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.reduceNodes[1], "texture/home/no_" + minutesStr[0], BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.reduceNodes[2], "texture/home/no_" + minutesStr[1], BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.reduceNodes[4], "texture/home/no_" + secondsStr[0], BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.reduceNodes[5], "texture/home/no_" + secondsStr[1], BundleConfig_1.default.instance.guiBundle.name);
            }
        };
        /**点击打开箱子动画 */
        CarSpine_1.prototype.openBoxBtn = function () {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var guide_id, data;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (this.isComing) {
                                Oops_1.oops.logB("等车动画结束");
                                return [2 /*return*/];
                            }
                            if (this.isDroping)
                                return [2 /*return*/];
                            this.handlerDroping(true);
                            guide_id = 0;
                            if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide) {
                                if (SingletonModuleComp_1.smc.guide.GuideModel.step < 6) {
                                    guide_id = 6;
                                }
                                else if (SingletonModuleComp_1.smc.guide.GuideModel.step < 28) {
                                    guide_id = 28;
                                }
                            }
                            if (!(SingletonModuleComp_1.smc.account.AccountModel.superOpenCount >= Number(new GlobalData_1.GlobalData(24).value) && !GameMgr_1.GameMgr.Instance.isOutside)) return [3 /*break*/, 1];
                            HttpPost_1.HttpPost.instance.superOpenBoxInfo(function (data) {
                                Oops_1.oops.gui.open(GameUIConfig_1.UIID.SuperOpenBox, data, {
                                    onRemoved: function () {
                                        _this.handlerDroping(false);
                                    }
                                });
                            }, function (data) {
                                HttpPost_1.HttpPost.instance.eventReport({ event: EventReport_1.EVENT_REPORT.carOpenError, extra: { event: data.event, super: "super" } });
                                _this.handlerDroping(false);
                            });
                            return [3 /*break*/, 4];
                        case 1: return [4 /*yield*/, this.generalDrop(guide_id)];
                        case 2:
                            data = _b.sent();
                            if (!data) {
                                this.handlerDroping(false);
                                return [2 /*return*/];
                            }
                            if (GameMgr_1.GameMgr.Instance.ConstructionState) {
                                this.handlerDroping(false);
                                return [2 /*return*/];
                            }
                            if (((_a = this.spine) === null || _a === void 0 ? void 0 : _a.getState().getCurrent(0).animation.name) != "idle") {
                                this.handlerDroping(false);
                                return [2 /*return*/];
                            }
                            /**根据服务端数据返回品质播放开箱动画 */
                            return [4 /*yield*/, this.playTrunkOpenAnimation(data)];
                        case 3:
                            /**根据服务端数据返回品质播放开箱动画 */
                            _b.sent();
                            this.btn.node.active = false;
                            _b.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**重置掉落中状态 */
        CarSpine_1.prototype.handlerDroping = function (bo) {
            this.isDroping = bo;
            console.log("🚀 ~ file: CarSpine.ts:616  handlerDroping ~ this.isDroping:", this.isDroping);
        };
        /**点击加速界面*/
        CarSpine_1.prototype.openAccelerateUI = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var boxData;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (GameMgr_1.GameMgr.Instance.ConstructionState)
                                            return [2 /*return*/];
                                        if (GameMgr_1.GameMgr.Instance.isOutside) {
                                            boxData = new BoxData_1.BoxData(GameMgr_1.GameMgr.Instance.outSceneID, SingletonModuleComp_1.smc.account.AccountModel.outBoxConfigKey);
                                        }
                                        else {
                                            boxData = new BoxData_1.BoxData(SingletonModuleComp_1.smc.account.AccountModel.boxFirstKey, SingletonModuleComp_1.smc.account.AccountModel.getBoxConfigKey);
                                            // if(smc.account.AccountModel.boxFirstKey==3)
                                            //     boxData=new BoxData(3,smc.account.AccountModel.getBoxConfigKey)
                                            // else
                                            //     boxData = new BoxData(smc.account.AccountModel.noviceBox == 0 ?
                                            //         2 : 1,
                                            //         smc.account.AccountModel.getBoxConfigKey);
                                        }
                                        console.log(this.leftTime);
                                        return [4 /*yield*/, Oops_1.oops.gui.openAsync(GameUIConfig_1.UIID.OpenSpeedup, [this.leftTime, boxData.CoolingTime])];
                                    case 1:
                                        _a.sent();
                                        resolve(true);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                });
            });
        };
        return CarSpine_1;
    }(_classSuper));
    __setFunctionName(_classThis, "CarSpine");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _timer_decorators = [property(cc_1.Node)];
        _boxNode_decorators = [property(cc_1.Node)];
        _openNowNode_decorators = [property(cc_1.Node)];
        _reduce_decorators = [property(cc_1.Node)];
        _aniNode_decorators = [property(cc_1.Node)];
        _timeBtn_decorators = [property(cc_1.Node)];
        _useTicketBtn_decorators = [property(cc_1.Node)];
        _openProSp_decorators = [property(cc_1.Sprite)];
        _tipBtn_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _timer_decorators, { kind: "field", name: "timer", static: false, private: false, access: { has: function (obj) { return "timer" in obj; }, get: function (obj) { return obj.timer; }, set: function (obj, value) { obj.timer = value; } }, metadata: _metadata }, _timer_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _boxNode_decorators, { kind: "field", name: "boxNode", static: false, private: false, access: { has: function (obj) { return "boxNode" in obj; }, get: function (obj) { return obj.boxNode; }, set: function (obj, value) { obj.boxNode = value; } }, metadata: _metadata }, _boxNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _openNowNode_decorators, { kind: "field", name: "openNowNode", static: false, private: false, access: { has: function (obj) { return "openNowNode" in obj; }, get: function (obj) { return obj.openNowNode; }, set: function (obj, value) { obj.openNowNode = value; } }, metadata: _metadata }, _openNowNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reduce_decorators, { kind: "field", name: "reduce", static: false, private: false, access: { has: function (obj) { return "reduce" in obj; }, get: function (obj) { return obj.reduce; }, set: function (obj, value) { obj.reduce = value; } }, metadata: _metadata }, _reduce_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _aniNode_decorators, { kind: "field", name: "aniNode", static: false, private: false, access: { has: function (obj) { return "aniNode" in obj; }, get: function (obj) { return obj.aniNode; }, set: function (obj, value) { obj.aniNode = value; } }, metadata: _metadata }, _aniNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _timeBtn_decorators, { kind: "field", name: "timeBtn", static: false, private: false, access: { has: function (obj) { return "timeBtn" in obj; }, get: function (obj) { return obj.timeBtn; }, set: function (obj, value) { obj.timeBtn = value; } }, metadata: _metadata }, _timeBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _useTicketBtn_decorators, { kind: "field", name: "useTicketBtn", static: false, private: false, access: { has: function (obj) { return "useTicketBtn" in obj; }, get: function (obj) { return obj.useTicketBtn; }, set: function (obj, value) { obj.useTicketBtn = value; } }, metadata: _metadata }, _useTicketBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _openProSp_decorators, { kind: "field", name: "openProSp", static: false, private: false, access: { has: function (obj) { return "openProSp" in obj; }, get: function (obj) { return obj.openProSp; }, set: function (obj, value) { obj.openProSp = value; } }, metadata: _metadata }, _openProSp_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _tipBtn_decorators, { kind: "field", name: "tipBtn", static: false, private: false, access: { has: function (obj) { return "tipBtn" in obj; }, get: function (obj) { return obj.tipBtn; }, set: function (obj, value) { obj.tipBtn = value; } }, metadata: _metadata }, _tipBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CarSpine = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CarSpine = _classThis;
}();
exports.CarSpine = CarSpine;
