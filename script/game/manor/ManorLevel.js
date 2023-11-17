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
exports.ManorLevel = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var FloorsMgr_1 = require("../../Entity/floor/FloorsMgr");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var ManorLevelData_1 = require("./ManorLevelData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ManorLevel = function () {
    var _classDecorators = [ccclass('ManorLevel')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _upLevelNode_decorators;
    var _upLevelNode_initializers = [];
    var _speedBtn_decorators;
    var _speedBtn_initializers = [];
    var _speedCullBtn_decorators;
    var _speedCullBtn_initializers = [];
    var _upDisBtn_decorators;
    var _upDisBtn_initializers = [];
    var ManorLevel = _classThis = /** @class */ (function (_super) {
        __extends(ManorLevel_1, _super);
        function ManorLevel_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //     "level": 5,
            // "cumTime": 780414, //庄园创建时长
            // "cumCoin": 106, //累计获取的庄园币
            // "needCoin": 394 //升下一级所需庄园币
            _this.serverData = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.levelData = null;
            _this.upLevelNode = __runInitializers(_this, _upLevelNode_initializers, null);
            _this.speedBtn = __runInitializers(_this, _speedBtn_initializers, null);
            _this.speedCullBtn = __runInitializers(_this, _speedCullBtn_initializers, null);
            _this.upDisBtn = __runInitializers(_this, _upDisBtn_initializers, null);
            return _this;
        }
        ManorLevel_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ManorLevel);
            FloorsMgr_1.FloorsMgr.Instance.getAllPlotFloorsMgrs().forEach(function (e) {
                e.plotFurnitureMgr.updatePlotState();
            });
        };
        ManorLevel_1.prototype.onAdded = function (data) {
            var _this = this;
            this.serverData = data;
            this.levelData = ManorLevelData_1.ManorLevelData.getAllData().find(function (x) { return x.id == _this.serverData.level; });
            SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel = this.serverData.level;
            this.uiRefresh();
            DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
            //刷新精力显示
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateManorPower);
        };
        ManorLevel_1.prototype.uiRefresh = function () {
            this.unschedule(this.refreshupLevelTime);
            this.unschedule(this.refreshaddCullTime);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/des1/time", this.node, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.serverData.cumTime));
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/cas_title/title", this.node, Oops_1.oops.language.getLangByID("manor.levelTitle", this.serverData.level));
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/des2/numLabel", this.node, Oops_1.oops.language.getLangByID("manor.levelManorNumDesc", this.serverData.cumCoin));
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/des3/numLabel", this.node, Oops_1.oops.language.getLangByID("manor.levelManorNumDesc", this.serverData.needCoin));
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/timeTips", this.node, "");
            this.speedCullBtn.active = false;
            this.speedBtn.active = false;
            this.upLevelNode.active = false;
            this.upDisBtn.active = false;
            if (this.serverData.level < ManorLevelData_1.ManorLevelData.getAllData()[ManorLevelData_1.ManorLevelData.getAllData().length - 1].id) {
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/centerBg/condi1/numLabel", this.node, this.levelData.getWaterPowerLimitDescByLevel(this.serverData.level));
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/centerBg/condi2/numLabel", this.node, this.levelData.getPlotLockDescByLevel(this.serverData.landTotal, this.serverData.level));
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/centerBg/condi3/numLabel", this.node, this.levelData.getlockPlantDescByLevel(this.serverData.level));
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/upLevelBtn/numLabel", this.node, "x" + this.levelData.consumeNum);
                if (this.serverData.manorLevelStatus == 1) {
                    this.schedule(this.refreshupLevelTime, 1);
                    ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/timeTips", this.node, Oops_1.oops.language.getLangByID("manor.uplevelTips", StringUtil_1.StringUtil.formatActivityTimeWithSec(this.serverData.upLevelTime)));
                    if (this.serverData.addSpeedTime == 0) //可以加速用钻
                     {
                        ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/btn_speedup/consume", this.node, "x" + this.levelData.speedValue2);
                        ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/btn_speedup/reduceNumlabel", this.node, "-" + StringUtil_1.StringUtil.formatTime(this.serverData.reduceTime));
                        this.speedBtn.active = true;
                    }
                    else {
                        ViewUtil_1.ViewUtil.setLabelStringByName("cdTime", this.speedCullBtn, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.serverData.addSpeedTime));
                        this.speedCullBtn.active = true;
                        this.schedule(this.refreshaddCullTime, 1);
                    }
                }
                else {
                    //判断是否是在升级过程中？
                    if (SingletonModuleComp_1.smc.account.AccountModel.vm.manorCoin < this.levelData.consumeNum) {
                        this.upDisBtn.active = true;
                        ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/upLevelBtnDis/numLabel", this.node, "x" + this.levelData.consumeNum);
                    }
                    else {
                        this.upLevelNode.active = true;
                    }
                }
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/centerBg", this.node, true);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/centerBg", this.node, false);
                this.upLevelNode.active = false;
            }
        };
        ManorLevel_1.prototype.refreshupLevelTime = function () {
            var _this = this;
            if (this.serverData.upLevelTime > 0) {
                this.serverData.upLevelTime -= 1;
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/timeTips", this.node, Oops_1.oops.language.getLangByID("manor.uplevelTips", StringUtil_1.StringUtil.formatActivityTimeWithSec(this.serverData.upLevelTime)));
            }
            else {
                this.unschedule(this.refreshupLevelTime);
                HttpPost_1.HttpPost.instance.manorDetail(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.onAdded(data);
                        return [2 /*return*/];
                    });
                }); });
            }
        };
        ManorLevel_1.prototype.refreshaddCullTime = function () {
            var _this = this;
            if (this.serverData.addSpeedTime > 0) {
                this.serverData.addSpeedTime -= 1;
                ViewUtil_1.ViewUtil.setLabelStringByName("cdTime", this.speedCullBtn, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.serverData.addSpeedTime));
            }
            else {
                this.unschedule(this.refreshaddCullTime);
                HttpPost_1.HttpPost.instance.manorDetail(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.onAdded(data);
                        return [2 /*return*/];
                    });
                }); });
            }
        };
        ManorLevel_1.prototype.btn_uplevel = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.manorUpLevel(this.serverData.level + 1, function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.onAdded(data);
                    SingletonModuleComp_1.smc.account.AccountModel.vm.manorCoin = data.manorCoin;
                    return [2 /*return*/];
                });
            }); });
        };
        ManorLevel_1.prototype.btn_addSpeed = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.manorUpLevelSpeed(this.serverData.level + 1, function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.onAdded(data);
                    SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                    return [2 /*return*/];
                });
            }); });
        };
        ManorLevel_1.prototype.onDestroy = function () {
            this.unschedule(this.refreshupLevelTime);
            this.unschedule(this.refreshaddCullTime);
        };
        //打开玩法说明
        ManorLevel_1.prototype.btn_openHelpNode = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            ViewUtil_1.ViewUtil.setNodeActiveByName("helpNode", this.node, true);
            ViewUtil_1.ViewUtil.findChildByName("helpNode", this.node).getComponent(cc_1.Animation).play();
        };
        //关闭玩法说明
        ManorLevel_1.prototype.btn_closeHelpNode = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            ViewUtil_1.ViewUtil.setNodeActiveByName("helpNode", this.node, false);
        };
        return ManorLevel_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ManorLevel");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _upLevelNode_decorators = [property(cc_1.Node)];
        _speedBtn_decorators = [property(cc_1.Node)];
        _speedCullBtn_decorators = [property(cc_1.Node)];
        _upDisBtn_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _upLevelNode_decorators, { kind: "field", name: "upLevelNode", static: false, private: false, access: { has: function (obj) { return "upLevelNode" in obj; }, get: function (obj) { return obj.upLevelNode; }, set: function (obj, value) { obj.upLevelNode = value; } }, metadata: _metadata }, _upLevelNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _speedBtn_decorators, { kind: "field", name: "speedBtn", static: false, private: false, access: { has: function (obj) { return "speedBtn" in obj; }, get: function (obj) { return obj.speedBtn; }, set: function (obj, value) { obj.speedBtn = value; } }, metadata: _metadata }, _speedBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _speedCullBtn_decorators, { kind: "field", name: "speedCullBtn", static: false, private: false, access: { has: function (obj) { return "speedCullBtn" in obj; }, get: function (obj) { return obj.speedCullBtn; }, set: function (obj, value) { obj.speedCullBtn = value; } }, metadata: _metadata }, _speedCullBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _upDisBtn_decorators, { kind: "field", name: "upDisBtn", static: false, private: false, access: { has: function (obj) { return "upDisBtn" in obj; }, get: function (obj) { return obj.upDisBtn; }, set: function (obj, value) { obj.upDisBtn = value; } }, metadata: _metadata }, _upDisBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ManorLevel = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ManorLevel = _classThis;
}();
exports.ManorLevel = ManorLevel;
