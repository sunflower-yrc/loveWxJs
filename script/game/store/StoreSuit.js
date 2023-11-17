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
exports.StoreSuit = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var SuitData_1 = require("../common/tableData/SuitData");
var Role_1 = require("../dress/Role");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var StoreSuitBox_1 = require("./StoreSuitBox");
var StoreSuitItem_1 = require("./StoreSuitItem");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var StoreSuit = function () {
    var _classDecorators = [ccclass('StoreSuit')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _bg_decorators;
    var _bg_initializers = [];
    var _leftTime_decorators;
    var _leftTime_initializers = [];
    var _floor_decorators;
    var _floor_initializers = [];
    var _roleNode_decorators;
    var _roleNode_initializers = [];
    var _furnitureNode_decorators;
    var _furnitureNode_initializers = [];
    var StoreSuit = _classThis = /** @class */ (function (_super) {
        __extends(StoreSuit_1, _super);
        function StoreSuit_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.bg = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _bg_initializers, void 0));
            _this.leftTime = __runInitializers(_this, _leftTime_initializers, void 0);
            _this.floor = __runInitializers(_this, _floor_initializers, void 0);
            _this.roleNode = __runInitializers(_this, _roleNode_initializers, void 0);
            _this.furnitureNode = __runInitializers(_this, _furnitureNode_initializers, void 0);
            _this.currentPage = 0;
            _this.currSelected = -1;
            _this.items = [];
            _this.boxs = [];
            _this.storeSuitItemDatas = [];
            _this.currItemDatas = [];
            return _this;
        }
        StoreSuit_1.prototype.onLoad = function () {
            this.items = ViewUtil_1.ViewUtil.findNode("items", this.bg).children;
            this.boxs = ViewUtil_1.ViewUtil.findNode("boxs", this.node).children;
            ViewUtil_1.ViewUtil.setNodeScaled(this.floor, 1);
        };
        StoreSuit_1.prototype.start = function () {
            this.loadData();
            //定时器
            this.schedule(this.refreshTime, 1);
            SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.StoreSuit);
        };
        StoreSuit_1.prototype.onDestroy = function () {
            this.unschedule(this.refreshTime);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.StoreSuit);
        };
        StoreSuit_1.prototype.initUI = function () {
            //翻页
            ViewUtil_1.ViewUtil.setNodeActiveByName("page", this.node, this.storeSuitItemDatas.length > 1);
            //加载列表
            this.showList();
            this.showBox();
            //默认选中第一个
            this.showSelected(0);
            //当前的效果预设
            this.showPreview();
            //刷新时间
            this.refreshTime();
        };
        StoreSuit_1.prototype.loadData = function () {
            var _this = this;
            HttpPost_1.HttpPost.instance.getShopList(4, function (data) {
                _this.storeSuitItemDatas = [];
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
                    itemData.storeSuitBoxDatas = [];
                    for (var j = 0; j < element.luckyDraw.length; j++) {
                        var box = element.luckyDraw[j];
                        var boxData = new DataObject_1.StoreSuitBoxData();
                        boxData.dropAmount = box.dropAmount;
                        boxData.freeTimes = box.freeTimes;
                        boxData.cost = box.cost;
                        itemData.storeSuitBoxDatas.push(boxData);
                    }
                    _this.storeSuitItemDatas.push(itemData);
                }
                //回到第一页
                _this.currentPage = 0;
                _this.changePage(0);
            });
        };
        /**
         * 预览效果
         */
        StoreSuit_1.prototype.showPreview = function () {
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
                            return [3 /*break*/, 3];
                        case 2:
                            //家具
                            this.roleNode.active = false;
                            this.furnitureNode.parent.active = true;
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
        StoreSuit_1.prototype.showList = function () {
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
         * 刷新列表
         * @param dataList
         */
        StoreSuit_1.prototype.refreshList = function (dataList) {
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
        /**
         * 随机宝箱
         */
        StoreSuit_1.prototype.showBox = function () {
            var _a;
            //宝箱
            for (var i = 0; i < this.boxs.length; i++) {
                var element = this.boxs[i];
                (_a = element.getComponent(StoreSuitBox_1.StoreSuitBox)) === null || _a === void 0 ? void 0 : _a.initData(this.storeSuitItemDatas[this.currentPage].storeSuitBoxDatas[i]);
            }
        };
        /**
         * 翻页
         * @param type -1左 1右
         */
        StoreSuit_1.prototype.btn_turnpage = function (event, data) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.changePage(parseInt(data));
        };
        /**
         * 切页
         * @param added 增量  -1为上一页，1为下一页
         */
        StoreSuit_1.prototype.changePage = function (added) {
            this.currentPage += added;
            if (this.currentPage >= this.storeSuitItemDatas.length) {
                this.currentPage = 0;
            }
            else if (this.currentPage < 0) {
                this.currentPage = this.storeSuitItemDatas.length - 1;
            }
            this.initUI();
        };
        StoreSuit_1.prototype.btn_selected = function (event, data) {
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
        StoreSuit_1.prototype.showSelected = function (selectIndex) {
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
         * 剩余时间
         */
        StoreSuit_1.prototype.refreshTime = function () {
            //如果时间大于1个小时 显示xx时xx分，如果小于1个小时限时xx分xx秒
            for (var i = 0; i < this.storeSuitItemDatas.length; i++) {
                if (this.storeSuitItemDatas[i].leftTime > 0) {
                    if (this.currentPage == i) {
                        //当前有页面
                        var time = "00:00";
                        if (this.storeSuitItemDatas[i].leftTime >= 3600) {
                            time = StringUtil_1.StringUtil.formatTimeWithSec(this.storeSuitItemDatas[i].leftTime, true);
                        }
                        else {
                            time = StringUtil_1.StringUtil.formatTimeWithSec(this.storeSuitItemDatas[i].leftTime);
                        }
                        ViewUtil_1.ViewUtil.setLabelString(this.leftTime, time);
                    }
                    this.storeSuitItemDatas[i].leftTime--;
                }
                else if (this.storeSuitItemDatas[i].leftTime == 0) {
                    //任何一个时间到了，强制请求刷新
                    this.loadData();
                }
            }
        };
        /**
         * 普通购买
         */
        StoreSuit_1.prototype.btn_buy = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.StoreBuyConfirm, { "data": this.currItemDatas[this.currSelected], "callback": function () {
                    HttpPost_1.HttpPost.instance.purchaseCommodity(DataObject_1.StoreBuyType.Suit + 1, _this.currentPage, _this.currSelected, 0, function (data) {
                        //购买成功
                        Oops_1.oops.gui.remove(GameUIConfig_1.UIID.StoreBuyConfirm);
                        //掉落
                        var dropDatas = [];
                        dropDatas.push(_this.dropData);
                        var dropInfo = new DataObject_1.DropInfo();
                        dropInfo.dropData = dropDatas;
                        dropInfo.UIID.push(GameUIConfig_1.UIID.Store);
                        dropInfo.UIID.push(GameUIConfig_1.UIID.StoreSuit);
                        dropInfo.dropFrom = DataObject_1.DropFrom.StoreSuit;
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                        //货币
                        SingletonModuleComp_1.smc.account.AccountModel.vm.coin = data.coin;
                        SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                        //更新数据
                        DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                        //刷新商店
                        _this.refreshList(data.ownedList);
                    });
                } });
        };
        /**
         * 宝箱购买
         * @param event
         * @param data
         */
        StoreSuit_1.prototype.btn_buyBox = function (event, data) {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var box = parseInt(data);
            if (box == 0) {
                //直接看广告
                SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.StoreSuit, function () {
                    _this.openBox(box);
                });
            }
            else {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.StoreBoxConfirm, { "data": this.storeSuitItemDatas[this.currentPage].storeSuitBoxDatas[box], "boxId": box, "callback": function () {
                        _this.openBox(box);
                    } });
            }
        };
        StoreSuit_1.prototype.openBox = function (box) {
            var _this = this;
            HttpPost_1.HttpPost.instance.openSuitShopBox(this.currentPage, box + 1, function (data) {
                var _a;
                //购买成功
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.StoreBoxConfirm);
                //掉落
                var dropDatas = [];
                for (var i = 0; i < data.propId.length; i++) {
                    var element = data.propId[i];
                    var dropType = DataObject_1.DropType.Dress;
                    if (_this.storeSuitItemDatas[_this.currentPage].id < 1000) {
                        //服装
                        dropType = DataObject_1.DropType.Dress;
                    }
                    else {
                        //家具
                        dropType = DataObject_1.DropType.Furniture;
                    }
                    var dropData = DropMgr_1.DropMgr.getDropInfo(dropType, element, 1);
                    dropDatas.push(dropData);
                }
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.UIID.push(GameUIConfig_1.UIID.Store);
                dropInfo.UIID.push(GameUIConfig_1.UIID.StoreSuit);
                dropInfo.dropFrom = DataObject_1.DropFrom.StoreSuit;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                //货币
                SingletonModuleComp_1.smc.account.AccountModel.vm.coin = data.coin;
                SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                //更新数据
                DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                if (box == 0) {
                    //广告
                    _this.storeSuitItemDatas[_this.currentPage].storeSuitBoxDatas[box].freeTimes = data.freeTimes;
                    //刷新宝箱
                    (_a = _this.boxs[box].getComponent(StoreSuitBox_1.StoreSuitBox)) === null || _a === void 0 ? void 0 : _a.initData(_this.storeSuitItemDatas[_this.currentPage].storeSuitBoxDatas[box]);
                }
                //刷新商店
                _this.refreshList(data.ownedList);
            });
        };
        StoreSuit_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.StoreSuit);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Store, { "storeType": DataObject_1.StoreBuyType.Dress });
        };
        return StoreSuit_1;
    }(_classSuper));
    __setFunctionName(_classThis, "StoreSuit");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _bg_decorators = [property(cc_1.Node)];
        _leftTime_decorators = [property(cc_1.Node)];
        _floor_decorators = [property(cc_1.Node)];
        _roleNode_decorators = [property(cc_1.Node)];
        _furnitureNode_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _bg_decorators, { kind: "field", name: "bg", static: false, private: false, access: { has: function (obj) { return "bg" in obj; }, get: function (obj) { return obj.bg; }, set: function (obj, value) { obj.bg = value; } }, metadata: _metadata }, _bg_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _leftTime_decorators, { kind: "field", name: "leftTime", static: false, private: false, access: { has: function (obj) { return "leftTime" in obj; }, get: function (obj) { return obj.leftTime; }, set: function (obj, value) { obj.leftTime = value; } }, metadata: _metadata }, _leftTime_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _floor_decorators, { kind: "field", name: "floor", static: false, private: false, access: { has: function (obj) { return "floor" in obj; }, get: function (obj) { return obj.floor; }, set: function (obj, value) { obj.floor = value; } }, metadata: _metadata }, _floor_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _roleNode_decorators, { kind: "field", name: "roleNode", static: false, private: false, access: { has: function (obj) { return "roleNode" in obj; }, get: function (obj) { return obj.roleNode; }, set: function (obj, value) { obj.roleNode = value; } }, metadata: _metadata }, _roleNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _furnitureNode_decorators, { kind: "field", name: "furnitureNode", static: false, private: false, access: { has: function (obj) { return "furnitureNode" in obj; }, get: function (obj) { return obj.furnitureNode; }, set: function (obj, value) { obj.furnitureNode = value; } }, metadata: _metadata }, _furnitureNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StoreSuit = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StoreSuit = _classThis;
}();
exports.StoreSuit = StoreSuit;
