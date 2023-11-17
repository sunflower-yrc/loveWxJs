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
exports.Store = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var Collection_1 = require("../../../../extensions/oops-plugin-framework/assets/libs/collection/Collection");
var BgMove_1 = require("../../comm/BgMove");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var Currency_1 = require("../home/Currency");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var StoreCurrency_1 = require("./StoreCurrency");
var StoreDF_1 = require("./StoreDF");
var StoreWall_1 = require("./StoreWall");
var StorePet_1 = require("./StorePet");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Store = function () {
    var _classDecorators = [ccclass('Store')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _bgMove_decorators;
    var _bgMove_initializers = [];
    var _currencyCoins_decorators;
    var _currencyCoins_initializers = [];
    var _currencyJewels_decorators;
    var _currencyJewels_initializers = [];
    var _leftTime_decorators;
    var _leftTime_initializers = [];
    var _middle_decorators;
    var _middle_initializers = [];
    var _toggles_decorators;
    var _toggles_initializers = [];
    var Store = _classThis = /** @class */ (function (_super) {
        __extends(Store_1, _super);
        function Store_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.bgMove = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _bgMove_initializers, void 0));
            _this.currencyCoins = __runInitializers(_this, _currencyCoins_initializers, null);
            _this.currencyJewels = __runInitializers(_this, _currencyJewels_initializers, null);
            _this.leftTime = __runInitializers(_this, _leftTime_initializers, void 0);
            _this.middle = __runInitializers(_this, _middle_initializers, void 0);
            _this.toggles = __runInitializers(_this, _toggles_initializers, []);
            _this.adsTimes = 0;
            _this.nodeShops = new Collection_1.Collection();
            _this.leftFreeTimes = [0, 0]; //免费随机礼包次数
            _this.refreshAdsLeftTimes = [0, 0, 0, 0, 0, 0]; //刷新剩余广告次数
            _this.refreshConsumes = ["", "", "", "", "", ""]; //刷新需要的货币
            _this.refreshLeftTimes = [-1, -1, -1, -1, -1, -1]; //刷新剩余时间
            _this.storeDatas = new Collection_1.Collection();
            return _this;
        }
        Store_1.prototype.onAdded = function (param) {
            //默认打开的类型
            this.currType = param.storeType;
            this.changeBg();
            //加载默认列表
            this.getShopList();
            //定时器
            this.schedule(this.refreshTime, 1);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.RefreshStoreList, this.onHander, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.RefreshStoreTopTimeState, this.onHander, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.ShowStoreCurrencyAnim, this.onHander, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateStoreCurry, this.onHander, this);
        };
        Store_1.prototype.onLoad = function () {
            this.toggles[this.currType].setIsCheckedWithoutNotify(true);
            SingletonModuleComp_1.smc.account.AccountModel.storeNode = this.node;
            if (!SingletonModuleComp_1.smc.account.AccountModel.isShowPay) {
                //不显示支付 未开启
                this.toggles[DataObject_1.StoreBuyType.Currency].node.active = false;
            }
        };
        Store_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.RefreshStoreList, this.onHander, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.ShowStoreCurrencyAnim, this.onHander, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.RefreshStoreTopTimeState, this.onHander, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdateStoreCurry, this.onHander, this);
            SingletonModuleComp_1.smc.account.AccountModel.storeNode = null;
            this.unschedule(this.refreshTime);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.Store);
        };
        Store_1.prototype.changeBg = function () {
            var _a;
            (_a = this.bgMove.getComponent(BgMove_1.BgMove)) === null || _a === void 0 ? void 0 : _a.changeColor(this.currType);
        };
        Store_1.prototype.onHander = function (event, args) {
            switch (event) {
                case GameEvent_1.GameEvent.RefreshStoreList:
                    this.parseData(args);
                    if (this.currType == DataObject_1.StoreBuyType.WallAndGroud) {
                        //墙面刷新 重置预览
                        this.nodeShops.get(this.currType).getComponent(StoreWall_1.StoreWall).resetPreview();
                    }
                    break;
                case GameEvent_1.GameEvent.ShowStoreCurrencyAnim:
                    this.showCurrencyAnim(args);
                    break;
                case GameEvent_1.GameEvent.RefreshStoreTopTimeState:
                    ViewUtil_1.ViewUtil.setNodeActiveByName("top/time_bg", this.node, args);
                    break;
                case GameEvent_1.GameEvent.UpdateStoreCurry:
                    this.parseData(args);
                    break;
                default:
                    break;
            }
        };
        /**
         * 播放货币获得动画
         * @param type 1 金币  2 钻石
         */
        Store_1.prototype.showCurrencyAnim = function (type) {
            var _a, _b;
            if (type == 1) {
                (_a = this.currencyCoins.getComponent(Currency_1.Currency)) === null || _a === void 0 ? void 0 : _a.shwoAnim();
            }
            else {
                (_b = this.currencyJewels.getComponent(Currency_1.Currency)) === null || _b === void 0 ? void 0 : _b.shwoAnim();
            }
        };
        /**
         * 拉取商店列表
         * @param forceUpdate  强制刷新
         * @param manualRefersh  手动刷新
         * @returns
         */
        Store_1.prototype.getShopList = function (forceUpdate) {
            var _this = this;
            if (forceUpdate === void 0) { forceUpdate = false; }
            if (this.storeDatas.has(this.currType) && !forceUpdate && (this.currType != DataObject_1.StoreBuyType.Currency)) {
                //有数据 直接刷新
                this.refreshTime();
                this.showList();
            }
            else {
                //没数据 加载
                HttpPost_1.HttpPost.instance.getShopList(this.currType + 1, function (data) {
                    if (_this.isValid)
                        _this.parseData(data);
                });
            }
        };
        /**
         * 解析商店数据
         * @param data
         */
        Store_1.prototype.parseData = function (data) {
            this.refreshLeftTimes[this.currType] = data.refreshTime;
            this.refreshAdsLeftTimes[this.currType] = data.surplusTimes;
            this.refreshConsumes[this.currType] = data.consumption;
            if (this.currType == DataObject_1.StoreBuyType.Dress || this.currType == DataObject_1.StoreBuyType.Furniture) {
                //服饰 家具
                this.leftFreeTimes[this.currType] = data.leftFreeTimes;
                var datas = [];
                for (var i = 0; i < data.list.length; i++) {
                    var element = data.list[i];
                    var storeItemData = new DataObject_1.StoreItemData();
                    if (this.currType == DataObject_1.StoreBuyType.Dress) {
                        storeItemData.type = DataObject_1.DropType.Dress;
                    }
                    else if (this.currType == DataObject_1.StoreBuyType.Furniture) {
                        storeItemData.type = DataObject_1.DropType.Furniture;
                    }
                    storeItemData.id = element.id;
                    storeItemData.purchaseType = element.purchaseType;
                    storeItemData.purchaseAmount = element.purchaseAmount;
                    storeItemData.discount = element.discount;
                    storeItemData.inTask = element.inTask == 1;
                    storeItemData.owned = element.owned == 1;
                    storeItemData.leftLimitTimes = element.leftLimitTimes;
                    datas.push(storeItemData);
                }
                this.storeDatas.set(this.currType, datas);
            }
            else if (this.currType == DataObject_1.StoreBuyType.WallAndGroud) {
                //地面
                var datas = new Collection_1.Collection();
                var dataGround = [];
                for (var i = 0; i < data.list.ground.length; i++) {
                    var element = data.list.ground[i];
                    var storeItemData = new DataObject_1.StoreItemData();
                    storeItemData.type = DataObject_1.DropType.Furniture;
                    storeItemData.id = element.id;
                    storeItemData.purchaseType = element.purchaseType;
                    storeItemData.purchaseAmount = element.purchaseAmount;
                    storeItemData.discount = element.discount;
                    storeItemData.inTask = element.inTask == 1;
                    storeItemData.owned = element.owned == 1;
                    storeItemData.leftLimitTimes = element.leftLimitTimes;
                    dataGround.push(storeItemData);
                }
                datas.set("ground", dataGround);
                //墙面
                var dataWall = [];
                for (var i = 0; i < data.list.wall.length; i++) {
                    var element = data.list.wall[i];
                    var storeItemData = new DataObject_1.StoreItemData();
                    storeItemData.type = DataObject_1.DropType.Furniture;
                    storeItemData.id = element.id;
                    storeItemData.purchaseType = element.purchaseType;
                    storeItemData.purchaseAmount = element.purchaseAmount;
                    storeItemData.discount = element.discount;
                    storeItemData.inTask = element.inTask == 1;
                    storeItemData.owned = element.owned == 1;
                    storeItemData.leftLimitTimes = element.leftLimitTimes;
                    dataWall.push(storeItemData);
                }
                datas.set("wall", dataWall);
                this.storeDatas.set(this.currType, datas);
            }
            else if (this.currType == DataObject_1.StoreBuyType.Pet) {
                var datas = new Collection_1.Collection();
                var dataPet = [];
                console.log(data);
                for (var i = 0; i < data.commonShop.list.length; i++) {
                    var element = data.commonShop.list[i];
                    var storeItemData = new DataObject_1.StoreItemData();
                    storeItemData.type = element.rewardType;
                    storeItemData.id = element.id;
                    storeItemData.purchaseType = element.purchaseType;
                    storeItemData.purchaseAmount = element.purchaseAmount;
                    storeItemData.discount = element.discount;
                    storeItemData.inTask = element.inTask == 1;
                    storeItemData.owned = element.owned == 1;
                    storeItemData.leftLimitTimes = element.leftLimitTimes;
                    dataPet.push(storeItemData);
                }
                datas.set("pet", dataPet);
                //套装
                var storeSuitItemDatas = [];
                for (var i = 0; i < data.suitShop.list.length; i++) {
                    var element = data.suitShop.list[i];
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
                    storeSuitItemDatas.push(itemData);
                }
                datas.set("suit", storeSuitItemDatas);
                this.storeDatas.set(this.currType, datas);
            }
            else if (this.currType == DataObject_1.StoreBuyType.Currency) {
                //货币商店
                var datas = [];
                for (var i = 0; i < data.list.length; i++) {
                    var element = data.list[i];
                    var storeItemData = new DataObject_1.StoreCurrencyItemData();
                    storeItemData.type = element.commodityType;
                    storeItemData.amount = element.commodityCount;
                    storeItemData.iconUrl = element.icon;
                    storeItemData.purchaseType = element.purchaseType;
                    storeItemData.purchaseAmount = element.purchaseAmount;
                    storeItemData.firstPurchase = element.firstDouble == 1; //是否首充  1是 未完成   2否 已完成
                    storeItemData.completeTimes = element.completeTimes;
                    storeItemData.leftLimitTimes = element.leftLimitTimes;
                    storeItemData.status = element.status;
                    datas.push(storeItemData);
                }
                this.storeDatas.set(this.currType, datas);
                this.adsTimes = data.adTimes;
                //礼包
                if (data.luckyDraw) {
                    this.storeCurrencyPackData = new DataObject_1.StoreCurrencyPackData();
                    this.storeCurrencyPackData.reward = data.luckyDraw.reward;
                    this.storeCurrencyPackData.leftTimes = data.luckyDraw.freeTimes;
                    this.storeCurrencyPackData.costId = data.luckyDraw.cost;
                }
            }
            //刷新时间
            this.refreshTime();
            this.showList();
        };
        /**
         * 剩余所有切页时间
         */
        Store_1.prototype.refreshTime = function () {
            //如果时间大于1个小时 显示xx时xx分，如果小于1个小时限时xx分xx秒
            for (var i = 0; i < this.refreshLeftTimes.length; i++) {
                if (this.refreshLeftTimes[i] > 0) {
                    if (this.currType == i) {
                        //当前页
                        var time = "00:00";
                        if (this.refreshLeftTimes[this.currType] >= 3600) {
                            time = StringUtil_1.StringUtil.formatTimeWithSec(this.refreshLeftTimes[this.currType], true);
                        }
                        else {
                            time = StringUtil_1.StringUtil.formatTimeWithSec(this.refreshLeftTimes[this.currType]);
                        }
                        ViewUtil_1.ViewUtil.setLabelString(this.leftTime, time);
                    }
                    this.refreshLeftTimes[i]--;
                }
                else if (this.refreshLeftTimes[i] == 0) {
                    if (this.currType == i) {
                        //强制请求刷新
                        this.getShopList(true);
                    }
                }
            }
        };
        Store_1.prototype.btn_toggle = function (event, data) {
            var id = parseInt(data);
            if (this.currType == id) {
                return;
            }
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.currType = id;
            if (this.currType == 3) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.StoreSuit);
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Store);
                return;
            }
            this.changeBg();
            this.getShopList();
        };
        /**
         * 套装商城
         */
        Store_1.prototype.btn_suit = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.StoreSuit);
        };
        /**
         * 显示列表
         */
        Store_1.prototype.showList = function () {
            return __awaiter(this, void 0, void 0, function () {
                var prefabURL, prefabItemURL, shop, shop, shop, shop, shop;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            //显示 隐藏
                            this.nodeShops.forEach(function (value, key) {
                                value.active = key == _this.currType;
                            });
                            ViewUtil_1.ViewUtil.setNodeActiveByName("top/currencyPetCoins", this.node, false);
                            ViewUtil_1.ViewUtil.setNodeActiveByName("top/currencyCoins", this.node, true);
                            ViewUtil_1.ViewUtil.setNodeActiveByName("top/time_bg", this.node, true);
                            this.leftTime.parent.active = this.currType != DataObject_1.StoreBuyType.Currency;
                            if (!this.nodeShops.has(this.currType)) return [3 /*break*/, 1];
                            if (this.currType == DataObject_1.StoreBuyType.Dress) {
                                this.nodeShops.get(this.currType).getComponent(StoreDF_1.StoreDF).initUI(DataObject_1.StoreBuyType.Dress, this.storeDatas.get(this.currType), this.leftFreeTimes[this.currType]);
                            }
                            else if (this.currType == DataObject_1.StoreBuyType.Furniture) {
                                this.nodeShops.get(this.currType).getComponent(StoreDF_1.StoreDF).initUI(DataObject_1.StoreBuyType.Furniture, this.storeDatas.get(this.currType), this.leftFreeTimes[this.currType]);
                            }
                            else if (this.currType == DataObject_1.StoreBuyType.WallAndGroud) {
                                this.nodeShops.get(this.currType).getComponent(StoreWall_1.StoreWall).initUI(this.storeDatas.get(this.currType));
                            }
                            else if (this.currType == DataObject_1.StoreBuyType.Currency) {
                                this.nodeShops.get(this.currType).getComponent(StoreCurrency_1.StoreCurrency).initUI(this.storeDatas.get(this.currType), this.storeCurrencyPackData, this.adsTimes);
                            }
                            else if (this.currType == DataObject_1.StoreBuyType.Pet) {
                                this.nodeShops.get(this.currType).getComponent(StorePet_1.StorePet).initUI(this.storeDatas.get(this.currType));
                                ViewUtil_1.ViewUtil.setNodeActiveByName("top/currencyPetCoins", this.node, true);
                                ViewUtil_1.ViewUtil.setNodeActiveByName("top/currencyCoins", this.node, false);
                            }
                            return [3 /*break*/, 11];
                        case 1:
                            prefabURL = void 0, prefabItemURL = void 0;
                            if (!(this.currType == DataObject_1.StoreBuyType.Dress)) return [3 /*break*/, 3];
                            //时装
                            prefabURL = "prefab/store/storeDress";
                            prefabItemURL = "prefab/store/storeDressItem";
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(prefabURL, BundleConfig_1.default.instance.guiBundle.name)];
                        case 2:
                            shop = _a.sent();
                            shop.parent = this.middle;
                            this.nodeShops.set(this.currType, shop);
                            shop.getComponent(StoreDF_1.StoreDF).initUI(DataObject_1.StoreBuyType.Dress, this.storeDatas.get(this.currType), this.leftFreeTimes[this.currType]);
                            return [3 /*break*/, 11];
                        case 3:
                            if (!(this.currType == DataObject_1.StoreBuyType.Furniture)) return [3 /*break*/, 5];
                            //家具
                            prefabURL = "prefab/store/storeFurniture";
                            prefabItemURL = "prefab/store/storeFurnitureItem";
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(prefabURL, BundleConfig_1.default.instance.guiBundle.name)];
                        case 4:
                            shop = _a.sent();
                            shop.parent = this.middle;
                            this.nodeShops.set(this.currType, shop);
                            shop.getComponent(StoreDF_1.StoreDF).initUI(DataObject_1.StoreBuyType.Furniture, this.storeDatas.get(this.currType), this.leftFreeTimes[this.currType]);
                            return [3 /*break*/, 11];
                        case 5:
                            if (!(this.currType == DataObject_1.StoreBuyType.WallAndGroud)) return [3 /*break*/, 7];
                            //地面 墙面
                            prefabURL = "prefab/store/storeWall";
                            prefabItemURL = "prefab/store/storeWallItem";
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(prefabURL, BundleConfig_1.default.instance.guiBundle.name)];
                        case 6:
                            shop = _a.sent();
                            shop.parent = this.middle;
                            this.nodeShops.set(this.currType, shop);
                            shop.getComponent(StoreWall_1.StoreWall).initUI(this.storeDatas.get(this.currType));
                            return [3 /*break*/, 11];
                        case 7:
                            if (!(this.currType == DataObject_1.StoreBuyType.Currency)) return [3 /*break*/, 9];
                            //金币
                            prefabURL = "prefab/store/storeCurrency";
                            prefabItemURL = "prefab/store/storeCurrencyItem";
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(prefabURL, BundleConfig_1.default.instance.guiBundle.name)];
                        case 8:
                            shop = _a.sent();
                            shop.parent = this.middle;
                            this.nodeShops.set(this.currType, shop);
                            shop.getComponent(StoreCurrency_1.StoreCurrency).initUI(this.storeDatas.get(this.currType), this.storeCurrencyPackData, this.adsTimes);
                            return [3 /*break*/, 11];
                        case 9:
                            if (!(this.currType == DataObject_1.StoreBuyType.Pet)) return [3 /*break*/, 11];
                            ViewUtil_1.ViewUtil.setNodeActiveByName("top/currencyPetCoins", this.node, true);
                            ViewUtil_1.ViewUtil.setNodeActiveByName("top/currencyCoins", this.node, false);
                            //宠物
                            prefabURL = "prefab/store/storePet";
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(prefabURL, BundleConfig_1.default.instance.guiBundle.name)];
                        case 10:
                            shop = _a.sent();
                            shop.parent = this.middle;
                            this.nodeShops.set(this.currType, shop);
                            shop.getComponent(StorePet_1.StorePet).initUI(this.storeDatas.get(this.currType));
                            _a.label = 11;
                        case 11: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 跳转到货币界面
         */
        Store_1.prototype.gotoCurrency = function () {
            if (this.currType == DataObject_1.StoreBuyType.Currency) {
                return;
            }
            this.currType = DataObject_1.StoreBuyType.Currency;
            this.changeBg();
            this.getShopList();
            this.toggles[this.currType].setIsCheckedWithoutNotify(true);
        };
        Store_1.prototype.btn_refresh = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var storeRefreshData = new DataObject_1.StoreRefreshData();
            storeRefreshData.shopType = this.currType;
            storeRefreshData.cost = this.refreshConsumes[this.currType];
            storeRefreshData.adLeftTimes = this.refreshAdsLeftTimes[this.currType];
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.StoreRefresh, storeRefreshData);
        };
        Store_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ItemDetailsDecorate);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Store);
        };
        return Store_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Store");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _bgMove_decorators = [property(cc_1.Node)];
        _currencyCoins_decorators = [property(cc_1.Node)];
        _currencyJewels_decorators = [property(cc_1.Node)];
        _leftTime_decorators = [property(cc_1.Node)];
        _middle_decorators = [property(cc_1.Node)];
        _toggles_decorators = [property(cc_1.Toggle)];
        __esDecorate(null, null, _bgMove_decorators, { kind: "field", name: "bgMove", static: false, private: false, access: { has: function (obj) { return "bgMove" in obj; }, get: function (obj) { return obj.bgMove; }, set: function (obj, value) { obj.bgMove = value; } }, metadata: _metadata }, _bgMove_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _currencyCoins_decorators, { kind: "field", name: "currencyCoins", static: false, private: false, access: { has: function (obj) { return "currencyCoins" in obj; }, get: function (obj) { return obj.currencyCoins; }, set: function (obj, value) { obj.currencyCoins = value; } }, metadata: _metadata }, _currencyCoins_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _currencyJewels_decorators, { kind: "field", name: "currencyJewels", static: false, private: false, access: { has: function (obj) { return "currencyJewels" in obj; }, get: function (obj) { return obj.currencyJewels; }, set: function (obj, value) { obj.currencyJewels = value; } }, metadata: _metadata }, _currencyJewels_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _leftTime_decorators, { kind: "field", name: "leftTime", static: false, private: false, access: { has: function (obj) { return "leftTime" in obj; }, get: function (obj) { return obj.leftTime; }, set: function (obj, value) { obj.leftTime = value; } }, metadata: _metadata }, _leftTime_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _middle_decorators, { kind: "field", name: "middle", static: false, private: false, access: { has: function (obj) { return "middle" in obj; }, get: function (obj) { return obj.middle; }, set: function (obj, value) { obj.middle = value; } }, metadata: _metadata }, _middle_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _toggles_decorators, { kind: "field", name: "toggles", static: false, private: false, access: { has: function (obj) { return "toggles" in obj; }, get: function (obj) { return obj.toggles; }, set: function (obj, value) { obj.toggles = value; } }, metadata: _metadata }, _toggles_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Store = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Store = _classThis;
}();
exports.Store = Store;
