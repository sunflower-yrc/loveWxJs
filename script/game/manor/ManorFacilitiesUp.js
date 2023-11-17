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
exports.ManorFacilitiesUp = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var DataManager_1 = require("../../Global/DataManager");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var ManorFacilitiesData_1 = require("./ManorFacilitiesData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ManorFacilitiesUp = function () {
    var _classDecorators = [ccclass('ManorFacilitiesUp')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _unlcokBtn_decorators;
    var _unlcokBtn_initializers = [];
    var _lockNode_decorators;
    var _lockNode_initializers = [];
    var _upLevelBtn_decorators;
    var _upLevelBtn_initializers = [];
    var _treeGetBtn_decorators;
    var _treeGetBtn_initializers = [];
    var ManorFacilitiesUp = _classThis = /** @class */ (function (_super) {
        __extends(ManorFacilitiesUp_1, _super);
        function ManorFacilitiesUp_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.unlcokBtn = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _unlcokBtn_initializers, null));
            _this.lockNode = __runInitializers(_this, _lockNode_initializers, null);
            _this.upLevelBtn = __runInitializers(_this, _upLevelBtn_initializers, null);
            _this.treeGetBtn = __runInitializers(_this, _treeGetBtn_initializers, null);
            _this.treeNum = 0;
            _this.manorFanciData = null;
            return _this;
        }
        ManorFacilitiesUp_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ManorFacilitiesUp);
        };
        ManorFacilitiesUp_1.prototype.onAdded = function (data) {
            this.manorFanciData = ManorFacilitiesData_1.ManorFacilitiesData.getAllData().find(function (x) { return x.id == data; });
            this.uiRefresh();
        };
        ManorFacilitiesUp_1.prototype.uiRefresh = function () {
            var _a;
            var currLevel = DataManager_1.default.Instance.getManorFanciLevel(this.manorFanciData.id);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/title", this.node, this.manorFanciData.getName() + " " + "lv." + currLevel);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/desc", this.node, this.manorFanciData.getDesc());
            this.unlcokBtn.active = false;
            this.upLevelBtn.active = false;
            this.lockNode.active = false;
            this.treeGetBtn.active = false;
            (_a = ViewUtil_1.ViewUtil.findChildByName("root/bg/show", this.node)) === null || _a === void 0 ? void 0 : _a.children.forEach(function (e) {
                e.active = false;
            });
            if (this.manorFanciData.type == 1) //是农田
             {
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("root/bg/show/ic", this.node, GameResPath_1.GameResPath.getPlotStateSpPath(2), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/show/ic", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/nextLevel", this.node, false);
                this.unlcokBtn.active = this.manorFanciData.manorLevel <= SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel;
                ViewUtil_1.ViewUtil.setLabelStringByName("numLabel", this.lockNode, "x" + this.manorFanciData.openConsume);
                ViewUtil_1.ViewUtil.setLabelStringByName("numLabel", this.unlcokBtn, "x" + this.manorFanciData.openConsume);
            }
            else if (this.manorFanciData.type == 104) {
                this.treeGetBtn.active = true;
                //ViewUtil.setSingleSpriteFrameByName("root/bg/show/ic", this.node, GameResPath.getPlotBuffSpPath(this.manorFanciData.id), BundleConfig.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/show/" + this.manorFanciData.id, this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/nextLevel", this.node, true);
                var curAttrs = StringUtil_1.StringUtil.stringToArray5(this.manorFanciData.attrArray[currLevel]);
                //每x秒生成y个庄园币
                var getCoinNum = Math.floor((Oops_1.oops.timer.getServerTime() - SingletonModuleComp_1.smc.account.AccountModel.manorTreeLastGetTime) / Number(curAttrs[0])) * Number(curAttrs[1]);
                if (getCoinNum > Number(curAttrs[2]))
                    getCoinNum = Number(curAttrs[2]);
                this.treeNum = getCoinNum;
                ViewUtil_1.ViewUtil.setLabelStringByName("numLabel", this.treeGetBtn, getCoinNum.toString());
                for (var i = 0; i < this.manorFanciData.attDescArray.length; i++) {
                    ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/nextLevel/item" + (i + 1) + "/condiLabel", this.node, this.manorFanciData.getCondiDescByIndex(i));
                    ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/nextLevel/item" + (i + 1), this.node, true);
                    //刷新属性显示
                    if (this.manorFanciData.maxLevel > currLevel) {
                        var nextAttrs = StringUtil_1.StringUtil.stringToArray5(this.manorFanciData.attrArray[currLevel + 1]);
                        ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/nextLevel/title", this.node, Oops_1.oops.language.getLangByID("manor.nextLevel"));
                        ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/nextLevel/item" + (i + 1) + "/numLabel", this.node, Oops_1.oops.language.getLangByID("manor.manorTreeAttr" + (i + 1), curAttrs[i], nextAttrs[i]));
                    }
                    else {
                        ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/nextLevel/title", this.node, Oops_1.oops.language.getLangByID("manor.fullLevel"));
                        ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/nextLevel/item" + (i + 1) + "/numLabel", this.node, Oops_1.oops.language.getLangByID("manor.manorTreeAttr" + (i + 1), curAttrs[i], curAttrs[i]));
                    }
                }
                if (this.manorFanciData.manorLevel <= SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel) {
                    if (currLevel == 0) //显示解锁
                     {
                        ViewUtil_1.ViewUtil.setLabelStringByName("numLabel", this.unlcokBtn, "x" + this.manorFanciData.openConsume);
                        this.unlcokBtn.active = true;
                    }
                    else if (currLevel < this.manorFanciData.maxLevel) {
                        ViewUtil_1.ViewUtil.setLabelStringByName("numLabel", this.upLevelBtn, "x" + this.manorFanciData.upConsumeArray[currLevel - 1]);
                        this.upLevelBtn.active = true;
                    }
                }
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/show/" + this.manorFanciData.id, this.node, true);
                //ViewUtil.setSingleSpriteFrameByName("root/bg/show/ic", this.node, GameResPath.getPlotBuffSpPath(this.manorFanciData.id), BundleConfig.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/nextLevel/item1/condiLabel", this.node, this.manorFanciData.getCondiDesc());
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/nextLevel/item2", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/nextLevel/item3", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/nextLevel", this.node, true);
                if (this.manorFanciData.maxLevel > currLevel) {
                    ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/nextLevel/title", this.node, Oops_1.oops.language.getLangByID("manor.nextLevel"));
                    ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/nextLevel/item1/numLabel", this.node, this.manorFanciData.attrArray[currLevel] * 100 + "%  ->  " + this.manorFanciData.attrArray[currLevel + 1] * 100 + "%");
                }
                else {
                    ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/nextLevel/title", this.node, Oops_1.oops.language.getLangByID("manor.fullLevel"));
                    ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/nextLevel/item1/numLabel", this.node, this.manorFanciData.attrArray[currLevel] * 100 + "%");
                }
                if (this.manorFanciData.manorLevel <= SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel) {
                    if (currLevel == 0) //显示解锁
                     {
                        ViewUtil_1.ViewUtil.setLabelStringByName("numLabel", this.unlcokBtn, "x" + this.manorFanciData.openConsume);
                        this.unlcokBtn.active = true;
                    }
                    else if (currLevel < this.manorFanciData.maxLevel) {
                        ViewUtil_1.ViewUtil.setLabelStringByName("numLabel", this.upLevelBtn, "x" + this.manorFanciData.upConsumeArray[currLevel - 1]);
                        this.upLevelBtn.active = true;
                    }
                }
            }
            this.lockNode.active = this.manorFanciData.manorLevel > SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel;
            ViewUtil_1.ViewUtil.setLabelStringByName("numLabel", this.lockNode, "x" + this.manorFanciData.openConsume);
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/unlockTips", this.node, this.manorFanciData.manorLevel > SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/unlockTips", this.node, Oops_1.oops.language.getLangByID("manor.manorUnlockTips", this.manorFanciData.manorLevel));
            //
        };
        ManorFacilitiesUp_1.prototype.btn_unlock = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.manorCoin < Number(this.manorFanciData.openConsume)) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.manorCoinsPoor"));
                HttpPost_1.HttpPost.instance.manorAdTimes(DataObject_1.DropType.ManorCoin, function (data) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.ComBuyPanel, [DataObject_1.DropType.ManorCoin, data]);
                });
                return;
            }
            HttpPost_1.HttpPost.instance.landUnlock(this.manorFanciData.id, function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    SingletonModuleComp_1.smc.account.AccountModel.vm.manorCoin = data.manorCoin;
                    if (data.buffList)
                        DataManager_1.default.Instance.updateManorBuff(data.buffList);
                    DataManager_1.default.Instance.updatePlotState(data.manorLand);
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ManorFacilitiesUp);
                    return [2 /*return*/];
                });
            }); });
        };
        ManorFacilitiesUp_1.prototype.btn_uplevel = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.manorCoin < Number(this.manorFanciData.upConsumeArray[DataManager_1.default.Instance.getManorFanciLevel(this.manorFanciData.id) - 1])) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.manorCoinsPoor"));
                HttpPost_1.HttpPost.instance.manorAdTimes(DataObject_1.DropType.ManorCoin, function (data) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.ComBuyPanel, [DataObject_1.DropType.ManorCoin, data]);
                });
                return;
            }
            HttpPost_1.HttpPost.instance.buffUpLv(this.manorFanciData.id, function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    SingletonModuleComp_1.smc.account.AccountModel.vm.manorCoin = data.manorCoin;
                    DataManager_1.default.Instance.updateManorBuff(data.buffList);
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ManorFacilitiesUp);
                    return [2 /*return*/];
                });
            }); });
        };
        ManorFacilitiesUp_1.prototype.btn_TreeGet = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.treeNum <= 0) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("manor.manorTreeTimePoor"));
                return;
            }
            HttpPost_1.HttpPost.instance.moneyTreeGift(function (data) {
                SingletonModuleComp_1.smc.account.AccountModel.vm.manorCoin = data.manorCoin;
                SingletonModuleComp_1.smc.account.AccountModel.manorTreeLastGetTime = data.moneyTreeTime;
                DataManager_1.default.Instance.updateManorTreeState();
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.CurrencyManorFly);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowHomeCurrencyAnim, 3);
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ManorFacilitiesUp);
            });
        };
        return ManorFacilitiesUp_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ManorFacilitiesUp");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _unlcokBtn_decorators = [property(cc_1.Node)];
        _lockNode_decorators = [property(cc_1.Node)];
        _upLevelBtn_decorators = [property(cc_1.Node)];
        _treeGetBtn_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _unlcokBtn_decorators, { kind: "field", name: "unlcokBtn", static: false, private: false, access: { has: function (obj) { return "unlcokBtn" in obj; }, get: function (obj) { return obj.unlcokBtn; }, set: function (obj, value) { obj.unlcokBtn = value; } }, metadata: _metadata }, _unlcokBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lockNode_decorators, { kind: "field", name: "lockNode", static: false, private: false, access: { has: function (obj) { return "lockNode" in obj; }, get: function (obj) { return obj.lockNode; }, set: function (obj, value) { obj.lockNode = value; } }, metadata: _metadata }, _lockNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _upLevelBtn_decorators, { kind: "field", name: "upLevelBtn", static: false, private: false, access: { has: function (obj) { return "upLevelBtn" in obj; }, get: function (obj) { return obj.upLevelBtn; }, set: function (obj, value) { obj.upLevelBtn = value; } }, metadata: _metadata }, _upLevelBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _treeGetBtn_decorators, { kind: "field", name: "treeGetBtn", static: false, private: false, access: { has: function (obj) { return "treeGetBtn" in obj; }, get: function (obj) { return obj.treeGetBtn; }, set: function (obj, value) { obj.treeGetBtn = value; } }, metadata: _metadata }, _treeGetBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ManorFacilitiesUp = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ManorFacilitiesUp = _classThis;
}();
exports.ManorFacilitiesUp = ManorFacilitiesUp;
