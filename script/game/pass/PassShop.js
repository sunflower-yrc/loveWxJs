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
exports.PassShop = void 0;
var cc_1 = require("cc");
var DataObject_1 = require("../tools/DataObject");
var SuitData_1 = require("../common/tableData/SuitData");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var StoreSuitItem_1 = require("../store/StoreSuitItem");
var DropMgr_1 = require("../mgr/DropMgr");
var GameResPath_1 = require("../common/config/GameResPath");
var Role_1 = require("../dress/Role");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var HttpPost_1 = require("../tools/HttpPost");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var PassShop = function () {
    var _classDecorators = [ccclass('PassShop')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _bg_decorators;
    var _bg_initializers = [];
    var _floor_decorators;
    var _floor_initializers = [];
    var _roleNode_decorators;
    var _roleNode_initializers = [];
    var _furnitureNode_decorators;
    var _furnitureNode_initializers = [];
    var PassShop = _classThis = /** @class */ (function (_super) {
        __extends(PassShop_1, _super);
        function PassShop_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.bg = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _bg_initializers, void 0));
            _this.floor = __runInitializers(_this, _floor_initializers, void 0);
            _this.roleNode = __runInitializers(_this, _roleNode_initializers, void 0);
            _this.furnitureNode = __runInitializers(_this, _furnitureNode_initializers, void 0);
            _this.currentPage = 0;
            _this.currSelected = -1;
            _this.items = [];
            _this.storeSuitItemDatas = [];
            _this.currItemDatas = [];
            return _this;
        }
        PassShop_1.prototype.onLoad = function () {
            this.items = ViewUtil_1.ViewUtil.findNode("items", this.bg).children;
            ViewUtil_1.ViewUtil.setNodeScaled(this.floor, 1);
        };
        PassShop_1.prototype.init = function (data) {
            this.storeSuitItemDatas = [];
            for (var i = 0; i < data.list.length; i++) {
                var element = data.list[i];
                var itemData = new DataObject_1.StoreSuitItemData();
                itemData.id = element.id;
                itemData.leftTime = element.leftTime;
                itemData.costs = [];
                for (var j = 0; j < element.costs.length; j++) {
                    var e = element.costs[j];
                    var data_1 = new DataObject_1.SuitItemData();
                    data_1.owned = e.owned == 1;
                    data_1.price = e.price;
                    itemData.costs.push(data_1);
                }
                this.storeSuitItemDatas.push(itemData);
            }
            //回到第一页
            this.currentPage = 0;
            this.changePage(0);
        };
        /**
         * 切页
         * @param added 增量  -1为上一页，1为下一页
         */
        PassShop_1.prototype.changePage = function (added) {
            this.currentPage += added;
            if (this.currentPage >= this.storeSuitItemDatas.length) {
                this.currentPage = 0;
            }
            else if (this.currentPage < 0) {
                this.currentPage = this.storeSuitItemDatas.length - 1;
            }
            this.initUI();
        };
        PassShop_1.prototype.initUI = function () {
            //翻页
            ViewUtil_1.ViewUtil.setNodeActiveByName("page", this.node, this.storeSuitItemDatas.length > 1);
            //加载列表
            this.showList();
            //默认选中第一个
            this.showSelected(0);
            //当前的效果预设
            this.showPreview();
        };
        /**
         * 翻页
         * @param type -1左 1右
         */
        PassShop_1.prototype.btn_turnpage = function (event, data) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.changePage(parseInt(data));
        };
        PassShop_1.prototype.btn_selected = function (event, data) {
            var selectIndex = parseInt(data);
            if (this.currSelected == selectIndex) {
                return;
            }
            if (!this.currItemDatas[selectIndex]) {
                return;
            }
            this.showSelected(selectIndex);
        };
        /**
         * 选中
         * @param selectIndex
         */
        PassShop_1.prototype.showSelected = function (selectIndex) {
            this.currSelected = selectIndex;
            var selected = ViewUtil_1.ViewUtil.findNode("selected", this.bg);
            selected.setWorldPosition(this.items[this.currSelected].getWorldPosition());
            //名称
            this.dropData = DropMgr_1.DropMgr.getDropInfo(this.currItemDatas[this.currSelected].type, this.currItemDatas[this.currSelected].id, 1);
            ViewUtil_1.ViewUtil.setLabelStringByName("btn_buy/name", this.bg, this.dropData.name);
            //价格
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("btn_buy/cost_bg/icon", this.bg, GameResPath_1.GameResPath.getDropIconsPath(this.currItemDatas[this.currSelected].purchaseType), BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("btn_buy/cost_bg/amount", this.bg, this.currItemDatas[this.currSelected].purchaseAmount.toString());
        };
        /**
         * 预览效果
         */
        PassShop_1.prototype.showPreview = function () {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (!(this.storeSuitItemDatas[this.currentPage].id < 1000)) return [3 /*break*/, 2];
                            //服装
                            this.roleNode.active = true;
                            this.furnitureNode.parent.active = false;
                            (_a = this.roleNode.getComponent(Role_1.Role)) === null || _a === void 0 ? void 0 : _a.clearDress();
                            return [4 /*yield*/, ((_b = this.roleNode.getComponent(Role_1.Role)) === null || _b === void 0 ? void 0 : _b.showSuitSkin(this.suitData.suitShow))];
                        case 1:
                            _d.sent();
                            (_c = this.roleNode.getComponent(Role_1.Role)) === null || _c === void 0 ? void 0 : _c.changeAnim(DataObject_1.RoleAnimType.Walk);
                            ViewUtil_1.ViewUtil.setNodeActiveByName("storeTile/dress", this.node, true);
                            ViewUtil_1.ViewUtil.setNodeActiveByName("storeTile/furniture", this.node, false);
                            return [3 /*break*/, 3];
                        case 2:
                            //家具
                            this.roleNode.active = false;
                            this.furnitureNode.parent.active = true;
                            ViewUtil_1.ViewUtil.setNodeActiveByName("storeTile/dress", this.node, false);
                            ViewUtil_1.ViewUtil.setNodeActiveByName("storeTile/furniture", this.node, true);
                            ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.furnitureNode, GameResPath_1.GameResPath.getSuitPreviewPath(this.suitData.suitResShow.toString()), BundleConfig_1.default.instance.guiBundle.name);
                            _d.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 显示当前列表
         */
        PassShop_1.prototype.showList = function () {
            var _a;
            this.suitData = new SuitData_1.SuitData(this.storeSuitItemDatas[this.currentPage].id);
            this.currItemDatas = this.suitData.getSuitItems(this.storeSuitItemDatas[this.currentPage].costs);
            //名字
            ViewUtil_1.ViewUtil.setLabelStringByName("title_bg/name", this.bg, this.suitData.getName());
            //列表
            for (var i = 0; i < this.items.length; i++) {
                var element = this.items[i];
                (_a = element.getComponent(StoreSuitItem_1.StoreSuitItem)) === null || _a === void 0 ? void 0 : _a.initData(this.currItemDatas[i]);
            }
        };
        /**
         * 普通购买
         */
        PassShop_1.prototype.btn_buy = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.StoreBuyConfirm, { "data": this.currItemDatas[this.currSelected], "callback": function () {
                    HttpPost_1.HttpPost.instance.purchaseCommodity(DataObject_1.StoreBuyType.Pass + 1, _this.currentPage, _this.currSelected, 0, function (data) {
                        //购买成功
                        Oops_1.oops.gui.remove(GameUIConfig_1.UIID.StoreBuyConfirm);
                        //掉落
                        var dropDatas = [];
                        dropDatas.push(_this.dropData);
                        var dropInfo = new DataObject_1.DropInfo();
                        dropInfo.dropData = dropDatas;
                        dropInfo.UIID.push(GameUIConfig_1.UIID.Pass);
                        dropInfo.dropFrom = DataObject_1.DropFrom.StoreSuit;
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                        //货币
                        SingletonModuleComp_1.smc.account.AccountModel.vm.coin = data.coin;
                        SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                        //更新数据
                        DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                        // //刷新商店
                        _this.refreshList(data.ownedList);
                    });
                } });
        };
        /**
        * 刷新列表
        * @param dataList
        */
        PassShop_1.prototype.refreshList = function (dataList) {
            var _a;
            //更新数据
            for (var i = 0; i < dataList.length; i++) {
                var element = dataList[i];
                this.storeSuitItemDatas[this.currentPage].costs[i].owned = element;
                this.currItemDatas[i].owned = element;
            }
            //刷新界面
            for (var i = 0; i < this.items.length; i++) {
                var element = this.items[i];
                (_a = element.getComponent(StoreSuitItem_1.StoreSuitItem)) === null || _a === void 0 ? void 0 : _a.refreshData(this.currItemDatas[i]);
            }
        };
        return PassShop_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PassShop");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _bg_decorators = [property(cc_1.Node)];
        _floor_decorators = [property(cc_1.Node)];
        _roleNode_decorators = [property(cc_1.Node)];
        _furnitureNode_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _bg_decorators, { kind: "field", name: "bg", static: false, private: false, access: { has: function (obj) { return "bg" in obj; }, get: function (obj) { return obj.bg; }, set: function (obj, value) { obj.bg = value; } }, metadata: _metadata }, _bg_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _floor_decorators, { kind: "field", name: "floor", static: false, private: false, access: { has: function (obj) { return "floor" in obj; }, get: function (obj) { return obj.floor; }, set: function (obj, value) { obj.floor = value; } }, metadata: _metadata }, _floor_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _roleNode_decorators, { kind: "field", name: "roleNode", static: false, private: false, access: { has: function (obj) { return "roleNode" in obj; }, get: function (obj) { return obj.roleNode; }, set: function (obj, value) { obj.roleNode = value; } }, metadata: _metadata }, _roleNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _furnitureNode_decorators, { kind: "field", name: "furnitureNode", static: false, private: false, access: { has: function (obj) { return "furnitureNode" in obj; }, get: function (obj) { return obj.furnitureNode; }, set: function (obj, value) { obj.furnitureNode = value; } }, metadata: _metadata }, _furnitureNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PassShop = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PassShop = _classThis;
}();
exports.PassShop = PassShop;
