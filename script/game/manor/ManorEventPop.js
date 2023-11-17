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
exports.ManorEventPop = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var FloorsMgr_1 = require("../../Entity/floor/FloorsMgr");
var DataManager_1 = require("../../Global/DataManager");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var ManorEventData_1 = require("./ManorEventData");
var ManorPlantData_1 = require("./ManorPlantData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ManorEventPop = function () {
    var _classDecorators = [ccclass('ManorEventPop')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var ManorEventPop = _classThis = /** @class */ (function (_super) {
        __extends(ManorEventPop_1, _super);
        function ManorEventPop_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.eventId = 0;
            _this.plotState = null;
            return _this;
        }
        ManorEventPop_1.prototype.onAdded = function (plotData) {
            this.serverData = plotData;
            this.plotState = plotData[0];
            this.eventId = this.serverData[1];
            this.uiRefresh();
        };
        ManorEventPop_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ManorEventPop);
        };
        ManorEventPop_1.prototype.uiRefresh = function () {
            var _this = this;
            var event = ManorEventData_1.ManorEventData.getAllData().find(function (x) { return x.id == _this.serverData[1]; });
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/title/label", this.node, event.getName());
            var curPlant = ManorPlantData_1.ManorPlantData.getAllData().find(function (x) { return x.id == _this.plotState.seed_id; });
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/okBtn/label", this.node, Oops_1.oops.language.getLangByID("manor.eventOp_" + event.id));
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("root/bg/eventSp", this.node, GameResPath_1.GameResPath.getPlotEventStateSpPath(event.id), BundleConfig_1.default.instance.guiBundle.name);
            if (event.id == 2) {
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/descLabel", this.node, Oops_1.oops.language.getLangByID("manor.eventDesc_" + event.id));
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/consumeLabel", this.node, Oops_1.oops.language.getLangByID("manor.eventConsume", event.actionPowerMax, Oops_1.oops.language.getLangByID("manor.eventOp_" + event.id)));
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/funcDesc", this.node, Oops_1.oops.language.getLangByID("manor.eventFunc_" + event.id));
            }
            else {
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/descLabel", this.node, Oops_1.oops.language.getLangByID("manor.eventDesc_" + event.id, curPlant.getName()));
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/consumeLabel", this.node, Oops_1.oops.language.getLangByID("manor.eventConsume", curPlant.eventConsume, Oops_1.oops.language.getLangByID("manor.eventOp_" + event.id)));
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/funcDesc", this.node, Oops_1.oops.language.getLangByID("manor.eventFunc_" + event.id, Number(event.getFuncNum()) * 100 + "%"));
            }
        };
        ManorEventPop_1.prototype.btn_giveUp = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.serverData[1] == 1) {
                HttpPost_1.HttpPost.instance.harvest(this.plotState.id, 0, function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        SingletonModuleComp_1.smc.account.AccountModel.vm.manorCoin = data.manorCoin;
                        DataManager_1.default.Instance.updatePlotState(data.manorLand);
                        Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("manor.harvest"));
                        // this.updatePlotState();
                        DataMgr_1.DataMgr.updateUserData(null, null, data.taskList);
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.CurrencyManorFly);
                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowHomeCurrencyAnim, 3);
                        Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ManorEventPop);
                        return [2 /*return*/];
                    });
                }); });
            }
            else {
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ManorEventPop);
            }
        };
        ManorEventPop_1.prototype.btn_op = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var event = ManorEventData_1.ManorEventData.getAllData().find(function (x) { return x.id == _this.serverData[1]; });
            if (event.id == 2) {
                if (SingletonModuleComp_1.smc.account.AccountModel.manorPower < Number(event.actionPowerMax)) {
                    HttpPost_1.HttpPost.instance.manorAdTimes(DataObject_1.DropType.ManorWater, function (data) {
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.ComBuyPanel, [DataObject_1.DropType.ManorWater, data]);
                    });
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.manorWaterPoor"));
                    return;
                }
            }
            else {
                var curPlant = ManorPlantData_1.ManorPlantData.getAllData().find(function (x) { return x.id == _this.plotState.seed_id; });
                if (SingletonModuleComp_1.smc.account.AccountModel.manorPower < curPlant.eventConsume) {
                    HttpPost_1.HttpPost.instance.manorAdTimes(27, function (data) {
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.ComBuyPanel, [27, data]);
                    });
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.manorWaterPoor"));
                    return;
                }
            }
            HttpPost_1.HttpPost.instance.finishManorEvent(this.plotState.id, this.eventId, function (data) { return __awaiter(_this, void 0, void 0, function () {
                var spineId;
                return __generator(this, function (_a) {
                    spineId = 0;
                    if (this.eventId == 3)
                        spineId = 1;
                    else if (this.eventId == 1)
                        spineId = 3;
                    else if (this.eventId == 2)
                        spineId = 2;
                    FloorsMgr_1.FloorsMgr.Instance.getAimPlotFloorMgrs(this.plotState.id).plotFurnitureMgr.playOpSpin(spineId);
                    DataManager_1.default.Instance.updatePlotState(data.manorLand);
                    //FloorsMgr.Instance.getAimPlotFloorMgrs(this.plotState.id).plotFurnitureMgr.updatePlotState();
                    SingletonModuleComp_1.smc.account.AccountModel.manorPower = data.manorPower;
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateManorPower);
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ManorEventPop);
                    return [2 /*return*/];
                });
            }); });
        };
        return ManorEventPop_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ManorEventPop");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ManorEventPop = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ManorEventPop = _classThis;
}();
exports.ManorEventPop = ManorEventPop;
