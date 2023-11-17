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
exports.ManorSeed = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var DataManager_1 = require("../../Global/DataManager");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataMgr_1 = require("../mgr/DataMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var ManorPlantData_1 = require("./ManorPlantData");
var ManorSeedItem_1 = require("./ManorSeedItem");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ManorSeed = function () {
    var _classDecorators = [ccclass('ManorSeed')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var ManorSeed = _classThis = /** @class */ (function (_super) {
        __extends(ManorSeed_1, _super);
        function ManorSeed_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.toggleSubType = 0; //序号
            _this.totalPage = 1;
            _this.items = [];
            _this.useData = [];
            _this.currentPage = 1;
            _this.maxPage = 1;
            _this.aimPlot = 0;
            _this.curSelectType = 0;
            return _this;
        }
        ManorSeed_1.prototype.onLoad = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateManorSeedBag, this.dataRefresh, this);
            DataManager_1.default.Instance.manorTempPlantData.clear();
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.IsHideSeedPanel, true);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SetHomeBtn, false);
        };
        ManorSeed_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateManorSeedBag, this.dataRefresh, this);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.IsHideSeedPanel, false);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SetHomeBtn, true);
        };
        ManorSeed_1.prototype.onAdded = function (data) {
            this.curSelectType = 1;
            this.aimPlot = data.aimPlotId;
            this.useData = DataManager_1.default.Instance.getManorSeedBag();
            this.items = ViewUtil_1.ViewUtil.findChildByName("bg/items", this.node).children;
            this.maxPage = Math.ceil(this.useData.length / 10);
            this.uiRefresh();
        };
        ManorSeed_1.prototype.dataRefresh = function () {
            if (this.curSelectType == 1)
                this.useData = DataManager_1.default.Instance.getManorSeedBag();
            else if (this.curSelectType == 2)
                this.useData = DataManager_1.default.Instance.getManorSeedCropBag();
            else
                this.useData = DataManager_1.default.Instance.getManorSeedFlowerBag();
            this.items = ViewUtil_1.ViewUtil.findChildByName("bg/items", this.node).children;
            this.maxPage = Math.ceil(this.useData.length / 10);
            this.uiRefresh();
        };
        ManorSeed_1.prototype.uiRefresh = function () {
            var _this = this;
            var _a, _b;
            var _loop_1 = function () {
                if (this_1.useData.length > i + (this_1.currentPage - 1) * 10) {
                    this_1.items[i].active = true;
                    var idx_1 = i + (this_1.currentPage - 1) * 10;
                    ViewUtil_1.ViewUtil.setLabelStringByName("amount", this_1.items[i], (_a = DataManager_1.default.Instance.getManorSeedNumById(this_1.useData[idx_1])) === null || _a === void 0 ? void 0 : _a.toString());
                    (_b = this_1.items[i].getComponent(ManorSeedItem_1.ManorSeedItem)) === null || _b === void 0 ? void 0 : _b.initData(ManorPlantData_1.ManorPlantData.getAllData().find(function (x) { return x.id == _this.useData[idx_1]; }), this_1.aimPlot);
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon/ic", this_1.items[i], GameResPath_1.GameResPath.getPlantIcSpPath(this_1.useData[idx_1]), BundleConfig_1.default.instance.guiBundle.name);
                }
                else {
                    this_1.items[i].active = false;
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.items.length; i++) {
                _loop_1();
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("bg/btn_page/num", this.node, this.currentPage + "/" + this.maxPage);
        };
        ManorSeed_1.prototype.btn_close = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                    //重置一下状态-=---待修改
                    HttpPost_1.HttpPost.instance.getSeedAndLand(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            DataManager_1.default.Instance.updatePlotState(data.manorLand);
                            DataManager_1.default.Instance.updateManorSeedBag(data.seedList);
                            return [2 /*return*/];
                        });
                    }); });
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ManorSeed);
                    return [2 /*return*/];
                });
            });
        };
        //花卉标签点击
        ManorSeed_1.prototype.btn_flower = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.useData = DataManager_1.default.Instance.getManorSeedFlowerBag();
            this.curSelectType = 3;
            this.currentPage = 1;
            this.maxPage = Math.ceil(this.useData.length / 10);
            this.uiRefresh();
        };
        //农作物点击
        ManorSeed_1.prototype.btn_Crop = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.useData = DataManager_1.default.Instance.getManorSeedCropBag();
            this.curSelectType = 2;
            this.currentPage = 1;
            this.maxPage = Math.ceil(this.useData.length / 10);
            this.uiRefresh();
        };
        //全部点击
        ManorSeed_1.prototype.btn_All = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.useData = DataManager_1.default.Instance.getManorSeedBag();
            this.currentPage = 1;
            this.curSelectType = 1;
            this.maxPage = Math.ceil(this.useData.length / 10);
            this.uiRefresh();
        };
        //种子商店
        ManorSeed_1.prototype.btnSeedBag = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorSeedShop);
        };
        //翻页
        ManorSeed_1.prototype.btn_changePage = function (event, data) {
            var dir = Number(data);
            if (this.currentPage + dir >= 1 && this.currentPage + dir <= this.maxPage) {
                this.currentPage += dir;
                this.uiRefresh();
            }
        };
        //种植确认
        ManorSeed_1.prototype.btn_Plant = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (DataManager_1.default.Instance.manorTempPlantData.size == 0) {
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ManorSeed);
                return;
            }
            HttpPost_1.HttpPost.instance.plant(DataManager_1.default.Instance.manorTempPlantData, function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    DataManager_1.default.Instance.updatePlotState(data.manorLand);
                    DataManager_1.default.Instance.updateManorSeedBag(data.seedList);
                    DataMgr_1.DataMgr.updateUserData(null, null, data.taskList);
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ManorSeed);
                    return [2 /*return*/];
                });
            }); });
        };
        return ManorSeed_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ManorSeed");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ManorSeed = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ManorSeed = _classThis;
}();
exports.ManorSeed = ManorSeed;
