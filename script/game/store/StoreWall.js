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
exports.StoreWall = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var FurnitureData_1 = require("../common/tableData/FurnitureData");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var StoreItem_1 = require("./StoreItem");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var StoreWall = function () {
    var _classDecorators = [ccclass('StoreWall')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _bg_decorators;
    var _bg_initializers = [];
    var _floor_decorators;
    var _floor_initializers = [];
    var _leftWall_decorators;
    var _leftWall_initializers = [];
    var _rightWall_decorators;
    var _rightWall_initializers = [];
    var _ground_decorators;
    var _ground_initializers = [];
    var _groundItem_decorators;
    var _groundItem_initializers = [];
    var StoreWall = _classThis = /** @class */ (function (_super) {
        __extends(StoreWall_1, _super);
        function StoreWall_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.bg = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _bg_initializers, void 0));
            _this.floor = __runInitializers(_this, _floor_initializers, void 0);
            _this.leftWall = __runInitializers(_this, _leftWall_initializers, void 0);
            _this.rightWall = __runInitializers(_this, _rightWall_initializers, void 0);
            _this.ground = __runInitializers(_this, _ground_initializers, void 0);
            _this.groundItem = __runInitializers(_this, _groundItem_initializers, void 0);
            _this.currData = [];
            _this.currType = 0; //0 地砖  1 墙面
            _this.currSelected = -1;
            _this.Toggles = [];
            _this.items = [];
            return _this;
        }
        StoreWall_1.prototype.onLoad = function () {
            this.items = ViewUtil_1.ViewUtil.findNode("items", this.bg).children;
            this.Toggles = ViewUtil_1.ViewUtil.findNode("ToggleGroup", this.bg).children;
            ViewUtil_1.ViewUtil.setNodeScaled(this.floor, 0.35);
        };
        StoreWall_1.prototype.initUI = function (datas) {
            var _a;
            this.storeItemDatas = datas;
            //默认选第一个
            this.currType = 0; //地砖
            (_a = this.Toggles[0].getComponent(cc_1.Toggle)) === null || _a === void 0 ? void 0 : _a.setIsCheckedWithoutNotify(true);
            this.currData = this.storeItemDatas.get("ground");
            this.showSelected(0);
            this.showList();
        };
        StoreWall_1.prototype.btn_selected = function (event, data) {
            var selectIndex = parseInt(data);
            if (this.currSelected == selectIndex) {
                return;
            }
            this.showSelected(selectIndex);
        };
        /**
         * 选中
         * @param selectIndex
         */
        StoreWall_1.prototype.showSelected = function (selectIndex) {
            this.currSelected = selectIndex;
            var selected = ViewUtil_1.ViewUtil.findNode("selected", this.bg);
            selected.setWorldPosition(this.items[this.currSelected].getWorldPosition());
            if (this.currData) {
                //名称
                var furniture = new FurnitureData_1.FurnitureData(this.currData[this.currSelected].id);
                ViewUtil_1.ViewUtil.setLabelStringByName("btn_buy/name", this.bg, furniture.getName());
                //价格
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("btn_buy/cost_bg/icon", this.bg, GameResPath_1.GameResPath.getDropIconsPath(this.currData[this.currSelected].purchaseType), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("btn_buy/cost_bg/amount", this.bg, this.currData[this.currSelected].purchaseAmount.toString());
                //刷新预览
                this.showPreview(furniture);
            }
        };
        /**
         * 预览
         */
        StoreWall_1.prototype.showPreview = function (furniture) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.currType == 0)) return [3 /*break*/, 5];
                            if (!(furniture.furnitureType == 12)) return [3 /*break*/, 2];
                            //地砖
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.ground, GameResPath_1.GameResPath.getFurniturePutIconsPath(furniture.id.toString()), BundleConfig_1.default.instance.furniture.name)];
                        case 1:
                            //地砖
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.groundItem, GameResPath_1.GameResPath.getFurniturePutIconsPath(furniture.id.toString()), BundleConfig_1.default.instance.furniture.name)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [3 /*break*/, 13];
                        case 5:
                            if (!(furniture.furnitureType == 11)) return [3 /*break*/, 8];
                            //墙纸
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.leftWall, GameResPath_1.GameResPath.getFurniturePutIconsPath(furniture.id.toString()), BundleConfig_1.default.instance.furniture.name)];
                        case 6:
                            //墙纸
                            _a.sent();
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.rightWall, GameResPath_1.GameResPath.getFurniturePutIconsPath(furniture.id.toString()), BundleConfig_1.default.instance.furniture.name)];
                        case 7:
                            _a.sent();
                            return [3 /*break*/, 13];
                        case 8:
                            if (!(furniture.furnitureType == 10)) return [3 /*break*/, 10];
                            //墙 放地上
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.groundItem, GameResPath_1.GameResPath.getFurniturePutIconsPath(furniture.id.toString()), BundleConfig_1.default.instance.furniture.name)];
                        case 9:
                            //墙 放地上
                            _a.sent();
                            return [3 /*break*/, 13];
                        case 10: return [4 /*yield*/, ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon1", this.leftWall, GameResPath_1.GameResPath.getFurniturePutIconsPath(furniture.id.toString()), BundleConfig_1.default.instance.furniture.name)];
                        case 11:
                            _a.sent();
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon1", this.rightWall, GameResPath_1.GameResPath.getFurniturePutIconsPath(furniture.id.toString()), BundleConfig_1.default.instance.furniture.name)];
                        case 12:
                            _a.sent();
                            _a.label = 13;
                        case 13: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 重置预览
         */
        StoreWall_1.prototype.resetPreview = function () {
            ViewUtil_1.ViewUtil.clearSpriteFrame(this.ground);
            ViewUtil_1.ViewUtil.clearSpriteFrame(this.groundItem);
            ViewUtil_1.ViewUtil.clearSpriteFrameByName("icon", this.leftWall);
            ViewUtil_1.ViewUtil.clearSpriteFrameByName("icon", this.rightWall);
            ViewUtil_1.ViewUtil.clearSpriteFrameByName("icon1", this.leftWall);
            ViewUtil_1.ViewUtil.clearSpriteFrameByName("icon1", this.rightWall);
        };
        /**
         * 显示当前分类列表
         */
        StoreWall_1.prototype.showList = function () {
            var _a;
            for (var i = 0; i < this.items.length; i++) {
                var element = this.items[i];
                (_a = element.getComponent(StoreItem_1.StoreItem)) === null || _a === void 0 ? void 0 : _a.initData(null, DataObject_1.StoreBuyType.WallAndGroud, this.currType + 1, i, this.currData[i]);
            }
        };
        /**
         * 刷新列表
         * @param dataList
         */
        StoreWall_1.prototype.refreshList = function (dataList) {
            var _a;
            //更新数据
            for (var i = 0; i < dataList.length; i++) {
                var element = dataList[i];
                this.currData[i].owned = element.owned == 1;
                this.currData[i].leftLimitTimes = element.leftLimitTimes;
            }
            //刷新界面
            for (var i = 0; i < this.items.length; i++) {
                var element = this.items[i];
                (_a = element.getComponent(StoreItem_1.StoreItem)) === null || _a === void 0 ? void 0 : _a.refreshData(this.currData[i]);
            }
        };
        StoreWall_1.prototype.btn_toggle = function (event, data) {
            var id = parseInt(data);
            if (this.currType == id) {
                return;
            }
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.currType = id;
            if (this.currType == 0) {
                this.currData = this.storeItemDatas.get("ground");
            }
            else {
                this.currData = this.storeItemDatas.get("wall");
            }
            this.showList();
            this.showSelected(0);
        };
        StoreWall_1.prototype.btn_buy = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.currData[this.currSelected].leftLimitTimes == 0) {
                //售罄
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("store.soldOut"));
                return;
            }
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.StoreBuyConfirm, { "data": this.currData[this.currSelected], "callback": function () {
                    HttpPost_1.HttpPost.instance.purchaseCommodity(DataObject_1.StoreBuyType.WallAndGroud + 1, _this.currType + 1, _this.currSelected, 0, function (data) {
                        //购买成功
                        Oops_1.oops.gui.remove(GameUIConfig_1.UIID.StoreBuyConfirm);
                        //掉落
                        var dropDatas = [];
                        var dropData = DropMgr_1.DropMgr.getDropInfo(DataObject_1.DropType.Furniture, _this.currData[_this.currSelected].id, 1);
                        dropDatas.push(dropData);
                        var dropInfo = new DataObject_1.DropInfo();
                        dropInfo.dropData = dropDatas;
                        dropInfo.UIID.push(GameUIConfig_1.UIID.Store);
                        dropInfo.dropFrom = DataObject_1.DropFrom.StoreWallAndGround;
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                        //货币
                        SingletonModuleComp_1.smc.account.AccountModel.vm.coin = data.coin;
                        SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                        //金币累计消耗
                        SingletonModuleComp_1.smc.account.AccountModel.coinsConsumeAmount = data.coinsConsumeAmount;
                        //更新数据
                        DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                        //刷新商店
                        _this.refreshList(data.shopList);
                    });
                } });
        };
        return StoreWall_1;
    }(_classSuper));
    __setFunctionName(_classThis, "StoreWall");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _bg_decorators = [property(cc_1.Node)];
        _floor_decorators = [property(cc_1.Node)];
        _leftWall_decorators = [property(cc_1.Node)];
        _rightWall_decorators = [property(cc_1.Node)];
        _ground_decorators = [property(cc_1.Node)];
        _groundItem_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _bg_decorators, { kind: "field", name: "bg", static: false, private: false, access: { has: function (obj) { return "bg" in obj; }, get: function (obj) { return obj.bg; }, set: function (obj, value) { obj.bg = value; } }, metadata: _metadata }, _bg_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _floor_decorators, { kind: "field", name: "floor", static: false, private: false, access: { has: function (obj) { return "floor" in obj; }, get: function (obj) { return obj.floor; }, set: function (obj, value) { obj.floor = value; } }, metadata: _metadata }, _floor_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _leftWall_decorators, { kind: "field", name: "leftWall", static: false, private: false, access: { has: function (obj) { return "leftWall" in obj; }, get: function (obj) { return obj.leftWall; }, set: function (obj, value) { obj.leftWall = value; } }, metadata: _metadata }, _leftWall_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rightWall_decorators, { kind: "field", name: "rightWall", static: false, private: false, access: { has: function (obj) { return "rightWall" in obj; }, get: function (obj) { return obj.rightWall; }, set: function (obj, value) { obj.rightWall = value; } }, metadata: _metadata }, _rightWall_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _ground_decorators, { kind: "field", name: "ground", static: false, private: false, access: { has: function (obj) { return "ground" in obj; }, get: function (obj) { return obj.ground; }, set: function (obj, value) { obj.ground = value; } }, metadata: _metadata }, _ground_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _groundItem_decorators, { kind: "field", name: "groundItem", static: false, private: false, access: { has: function (obj) { return "groundItem" in obj; }, get: function (obj) { return obj.groundItem; }, set: function (obj, value) { obj.groundItem = value; } }, metadata: _metadata }, _groundItem_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StoreWall = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StoreWall = _classThis;
}();
exports.StoreWall = StoreWall;
