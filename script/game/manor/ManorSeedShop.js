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
exports.ManorSeedShop = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var DataManager_1 = require("../../Global/DataManager");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var ManorPlantData_1 = require("./ManorPlantData");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ManorSeedShop = function () {
    var _classDecorators = [ccclass('ManorSeedShop')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _selected_decorators;
    var _selected_initializers = [];
    var _payNumLabel_decorators;
    var _payNumLabel_initializers = [];
    var _pageLabel_decorators;
    var _pageLabel_initializers = [];
    var _previewLabelNodes_decorators;
    var _previewLabelNodes_initializers = [];
    var ManorSeedShop = _classThis = /** @class */ (function (_super) {
        __extends(ManorSeedShop_1, _super);
        function ManorSeedShop_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.useData = (__runInitializers(_this, _instanceExtraInitializers), []);
            _this.selected = __runInitializers(_this, _selected_initializers, null);
            _this.items = [];
            _this.payNumLabel = __runInitializers(_this, _payNumLabel_initializers, null);
            _this.pageLabel = __runInitializers(_this, _pageLabel_initializers, null);
            _this.previewLabelNodes = __runInitializers(_this, _previewLabelNodes_initializers, []);
            _this.selectPlant = null;
            _this.selectNum = 1;
            _this.currentPage = 1;
            _this.maxPage = 1;
            return _this;
        }
        ManorSeedShop_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateManorSeedBag);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ManorSeedShop);
        };
        ManorSeedShop_1.prototype.onAdded = function () {
            this.useData = ManorPlantData_1.ManorPlantData.getAllCrop();
            this.maxPage = Math.ceil(this.useData.length / 6);
            this.items = ViewUtil_1.ViewUtil.findChildByName("root/bg/items", this.node).children;
            this.uiRefresh();
        };
        ManorSeedShop_1.prototype.uiRefresh = function () {
            this.showPreview(0);
            for (var i = 0; i < 6; i++) {
                if (this.useData.length > i + (this.currentPage - 1) * 6) {
                    this.items[i].active = true;
                    var idx = i + (this.currentPage - 1) * 6;
                    ViewUtil_1.ViewUtil.setLabelStringByName("bg/grade/name", this.items[i], this.useData[idx].getName());
                    ViewUtil_1.ViewUtil.setLabelStringByName("hasNumLabel", this.items[i], "");
                    ViewUtil_1.ViewUtil.setLabelStringByName("rootLabel", this.items[i], "");
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("bg/icon", this.items[i], GameResPath_1.GameResPath.getPlantIcSpPath(this.useData[idx].id), BundleConfig_1.default.instance.guiBundle.name);
                    if (this.useData[idx].ifBuy) {
                        if (this.useData[idx].openLimit <= SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel) {
                            ViewUtil_1.ViewUtil.setLabelStringByName("hasNumLabel", this.items[i], Oops_1.oops.language.getLangByID("manor.seedShopHasNum", DataManager_1.default.Instance.getManorSeedNumById(this.useData[idx].id)));
                        }
                        else {
                            ViewUtil_1.ViewUtil.setLabelStringByName("rootLabel", this.items[i], Oops_1.oops.language.getLangByID("manor.seedShopUnlockTips", this.useData[idx].openLimit));
                        }
                    }
                    else {
                        ViewUtil_1.ViewUtil.setLabelStringByName("rootLabel", this.items[i], this.useData[idx].getRootDesc());
                    }
                }
                else {
                    this.items[i].active = false;
                }
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/pageLabel", this.node, this.currentPage + "/" + this.maxPage);
        };
        ManorSeedShop_1.prototype.btn_changePage = function (event, data) {
            var dir = Number(data);
            if (this.currentPage + dir >= 1 && this.currentPage + dir <= this.maxPage) {
                this.currentPage += dir;
                this.uiRefresh();
            }
        };
        ManorSeedShop_1.prototype.btn_addNum = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.selectPlant.ifBuy == 0)
                return;
            var tempPrice = (this.selectNum + 1) * this.selectPlant.plantPrice;
            if (tempPrice <= SingletonModuleComp_1.smc.account.AccountModel.vm.manorCoin) {
                this.selectNum += 1;
                this.payNumLabel.string = this.selectNum.toString();
                //刷新按钮价格
                ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/btn_buy/numLabel", this.node, "x" + tempPrice);
            }
        };
        ManorSeedShop_1.prototype.btn_reduceNum = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.selectPlant.ifBuy == 0)
                return;
            if (this.selectNum > 0)
                this.selectNum -= 1;
            var tempPrice = this.selectNum * this.selectPlant.plantPrice;
            this.payNumLabel.string = this.selectNum.toString();
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/btn_buy/numLabel", this.node, "x" + tempPrice);
        };
        ManorSeedShop_1.prototype.showPreview = function (index) {
            var idx = index + (this.currentPage - 1) * 6;
            this.selected.setWorldPosition(this.items[index].getWorldPosition());
            this.selectPlant = this.useData[idx];
            this.selectNum = 1;
            var tempPrice = this.selectNum * this.selectPlant.plantPrice;
            this.payNumLabel.string = this.selectNum.toString();
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/btn_buy/numLabel", this.node, "x" + tempPrice);
            this.previewLabelNodes[0].string = this.selectPlant.plantPrice.toString();
            this.previewLabelNodes[1].string = this.selectPlant.maturePrice.toString();
            this.previewLabelNodes[2].string = this.selectPlant.maturetionTime.toString();
            this.previewLabelNodes[3].string = this.selectPlant.matureTimes.toString();
            //展示图片---todo，等资源
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("root/bg/top/icon", this.node, GameResPath_1.GameResPath.getPlantIcSpPath(this.selectPlant.id), BundleConfig_1.default.instance.guiBundle.name);
            if (this.selectPlant.ifBuy == 1 && this.selectPlant.openLimit <= SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/btn_buy", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/numBg", this.node, true);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/btn_buy", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/numBg", this.node, false);
            }
        };
        //种子选择
        ManorSeedShop_1.prototype.btn_Choose = function (event, data) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.showPreview(Number(data));
        };
        //购买
        ManorSeedShop_1.prototype.btn_buy = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.selectNum <= 0)
                return;
            HttpPost_1.HttpPost.instance.purchaseSeed(this.selectPlant.id, this.selectNum, function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    SingletonModuleComp_1.smc.account.AccountModel.vm.manorCoin = data.manorCoin;
                    DataManager_1.default.Instance.ManorAddSeed(this.selectPlant.id, this.selectNum);
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("manor.buyOk"));
                    this.uiRefresh();
                    DataMgr_1.DataMgr.updateUserData(null, null, data.taskList);
                    return [2 /*return*/];
                });
            }); });
        };
        //花卉标签点击
        ManorSeedShop_1.prototype.btn_flower = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.useData = ManorPlantData_1.ManorPlantData.getAllFlowers();
            this.currentPage = 1;
            this.maxPage = Math.ceil(this.useData.length / 6);
            this.items = ViewUtil_1.ViewUtil.findChildByName("root/bg/items", this.node).children;
            this.uiRefresh();
        };
        //农作物点击
        ManorSeedShop_1.prototype.btn_Crop = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.useData = ManorPlantData_1.ManorPlantData.getAllCrop();
            this.currentPage = 1;
            this.maxPage = Math.ceil(this.useData.length / 6);
            this.items = ViewUtil_1.ViewUtil.findChildByName("root/bg/items", this.node).children;
            this.uiRefresh();
        };
        return ManorSeedShop_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ManorSeedShop");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _selected_decorators = [property(cc_1.Node)];
        _payNumLabel_decorators = [property(cc_1.Label)];
        _pageLabel_decorators = [property(cc_1.Label)];
        _previewLabelNodes_decorators = [property([cc_1.Label])];
        __esDecorate(null, null, _selected_decorators, { kind: "field", name: "selected", static: false, private: false, access: { has: function (obj) { return "selected" in obj; }, get: function (obj) { return obj.selected; }, set: function (obj, value) { obj.selected = value; } }, metadata: _metadata }, _selected_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _payNumLabel_decorators, { kind: "field", name: "payNumLabel", static: false, private: false, access: { has: function (obj) { return "payNumLabel" in obj; }, get: function (obj) { return obj.payNumLabel; }, set: function (obj, value) { obj.payNumLabel = value; } }, metadata: _metadata }, _payNumLabel_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pageLabel_decorators, { kind: "field", name: "pageLabel", static: false, private: false, access: { has: function (obj) { return "pageLabel" in obj; }, get: function (obj) { return obj.pageLabel; }, set: function (obj, value) { obj.pageLabel = value; } }, metadata: _metadata }, _pageLabel_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _previewLabelNodes_decorators, { kind: "field", name: "previewLabelNodes", static: false, private: false, access: { has: function (obj) { return "previewLabelNodes" in obj; }, get: function (obj) { return obj.previewLabelNodes; }, set: function (obj, value) { obj.previewLabelNodes = value; } }, metadata: _metadata }, _previewLabelNodes_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ManorSeedShop = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ManorSeedShop = _classThis;
}();
exports.ManorSeedShop = ManorSeedShop;
