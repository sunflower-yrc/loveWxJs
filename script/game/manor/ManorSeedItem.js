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
exports.ManorSeedItem = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var FloorsMgr_1 = require("../../Entity/floor/FloorsMgr");
var DataManager_1 = require("../../Global/DataManager");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var GameMgr_1 = require("../common/mgr/GameMgr");
var DataObject_1 = require("../tools/DataObject");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ManorSeedItem = function () {
    var _classDecorators = [ccclass('ManorSeedItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var ManorSeedItem = _classThis = /** @class */ (function (_super) {
        __extends(ManorSeedItem_1, _super);
        function ManorSeedItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.seedData = null;
            _this.aimPlot = 0;
            return _this;
        }
        ManorSeedItem_1.prototype.initData = function (data, aimPlotId) {
            this.seedData = data;
            this.aimPlot = aimPlotId;
        };
        ManorSeedItem_1.prototype.btn_click = function () {
            return __awaiter(this, void 0, void 0, function () {
                var floor, floors;
                return __generator(this, function (_a) {
                    Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                    if (DataManager_1.default.Instance.getManorSeedNumById(this.seedData.id) <= 0) {
                        if (this.seedData.ifBuy)
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorSeedShop);
                        return [2 /*return*/];
                    }
                    // console.log("找到了", FloorsMgr.Instance.getAllPlotFloorMgrs());
                    //console.log("this.aimPlot is",this.aimPlot)
                    //如果当前目标土地已经有农作物了，就随机一个，否则直接种目标土地
                    if (this.aimPlot != 0 && DataManager_1.default.Instance.manorPlotState.get(this.aimPlot).seed_id == 0 && !DataManager_1.default.Instance.manorTempPlantData.has(this.aimPlot)) {
                        //临时种下去
                        DataManager_1.default.Instance.manorTempPlantData.set(this.aimPlot, this.seedData.id);
                        floor = FloorsMgr_1.FloorsMgr.Instance.getAimPlotFloorMgrs(this.aimPlot);
                        floor.plotFurnitureMgr.showTempSeed();
                        DataManager_1.default.Instance.ManorUseSeed(this.seedData.id);
                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateManorSeedBag);
                        GameMgr_1.GameMgr.Instance.mapManager.moveScreenToNode(floor.plotFurnitureMgr.getActiveNode(), 0);
                    }
                    else {
                        floors = FloorsMgr_1.FloorsMgr.Instance.getAllPlotFloorMgrs();
                        if (floors.length > 0) {
                            DataManager_1.default.Instance.manorTempPlantData.set(floors[0].plotFurnitureMgr.plotId, this.seedData.id);
                            floors[0].plotFurnitureMgr.showTempSeed();
                            DataManager_1.default.Instance.ManorUseSeed(this.seedData.id);
                            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateManorSeedBag);
                            GameMgr_1.GameMgr.Instance.mapManager.moveScreenToNode(floors[0].plotFurnitureMgr.getActiveNode(), 0);
                        }
                    }
                    return [2 /*return*/];
                });
            });
        };
        return ManorSeedItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ManorSeedItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ManorSeedItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ManorSeedItem = _classThis;
}();
exports.ManorSeedItem = ManorSeedItem;
