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
exports.StorePet = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var cc_3 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var SuitData_1 = require("../common/tableData/SuitData");
var Role_1 = require("../dress/Role");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var Pet_1 = require("../pet/Pet");
var PetExcelData_1 = require("../pet/PetExcelData");
var PetRewardData_1 = require("../pet/PetRewardData");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var StoreItem_1 = require("./StoreItem");
var StoreSuitItem_1 = require("./StoreSuitItem");
var ccclass = cc_3._decorator.ccclass, property = cc_3._decorator.property;
var StorePet = function () {
    var _classDecorators = [ccclass('StorePet')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_3.Component;
    var _instanceExtraInitializers = [];
    var _roleNode_decorators;
    var _roleNode_initializers = [];
    var _leftTime_decorators;
    var _leftTime_initializers = [];
    var _furnitureNode_decorators;
    var _furnitureNode_initializers = [];
    var _pet_decorators;
    var _pet_initializers = [];
    var StorePet = _classThis = /** @class */ (function (_super) {
        __extends(StorePet_1, _super);
        function StorePet_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.storeItemDatas = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.storeSuitItemDatas = [];
            _this.currItemDatas = [];
            _this.currData = [];
            _this.roleNode = __runInitializers(_this, _roleNode_initializers, void 0);
            _this.leftTime = __runInitializers(_this, _leftTime_initializers, void 0);
            _this.furnitureNode = __runInitializers(_this, _furnitureNode_initializers, void 0);
            _this.currType = 0; //0 宠物 1套装
            _this.currSelected = -1;
            _this.Toggles = [];
            _this.items = [];
            _this.pet = __runInitializers(_this, _pet_initializers, void 0);
            _this.petInitPos = cc_1.Vec3.ZERO;
            return _this;
        }
        StorePet_1.prototype.onLoad = function () {
            this.items = ViewUtil_1.ViewUtil.findChildByName("bg/items", this.node).children;
            this.Toggles = ViewUtil_1.ViewUtil.findChildByName("bg/ToggleGroup", this.node).children;
            this.petInitPos = this.pet.node.getPosition();
        };
        StorePet_1.prototype.initUI = function (datas) {
            var _a;
            this.storeItemDatas = datas;
            //显示几个页签？
            for (var i = 0; i < this.Toggles.length; i++) {
                if (i > this.storeItemDatas.get("suit").length) {
                    this.Toggles[i].active = false;
                }
                else {
                    this.Toggles[i].active = true;
                }
            }
            //默认选第一个
            this.currType = 0;
            (_a = this.Toggles[0].getComponent(cc_2.Toggle)) === null || _a === void 0 ? void 0 : _a.setIsCheckedWithoutNotify(true);
            this.currData = this.storeItemDatas.get("pet");
            this.storeSuitItemDatas = this.storeItemDatas.get("suit");
            this.showSelected(0);
            this.showList();
            // this.unschedule(this.refreshTime);
            // this.schedule(this.refreshTime, 1);
        };
        StorePet_1.prototype.onDestroy = function () {
            //this.unschedule(this.refreshTime);
        };
        StorePet_1.prototype.btn_selected = function (event, data) {
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
        StorePet_1.prototype.showSelected = function (selectIndex) {
            this.currSelected = selectIndex;
            var selected = ViewUtil_1.ViewUtil.findNode("selected", this.node);
            selected.setWorldPosition(this.items[this.currSelected].getWorldPosition());
            var drop;
            if (this.currType == 0) {
                if (this.currData) {
                    drop = DropMgr_1.DropMgr.getDropInfo(this.currData[this.currSelected].type, this.currData[this.currSelected].id, 1);
                    ViewUtil_1.ViewUtil.setLabelStringByName("btn_buy/name", this.node, drop.name);
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("btn_buy/cost_bg/icon", this.node, GameResPath_1.GameResPath.getDropIconsPath(this.currData[this.currSelected].purchaseType), BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.setLabelStringByName("btn_buy/cost_bg/amount", this.node, this.currData[this.currSelected].purchaseAmount.toString());
                }
            }
            else {
                if (this.currItemDatas) {
                    drop = DropMgr_1.DropMgr.getDropInfo(this.currItemDatas[this.currSelected].type, this.currItemDatas[this.currSelected].id, 1);
                    ViewUtil_1.ViewUtil.setLabelStringByName("btn_buy/name", this.node, drop.name);
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("btn_buy/cost_bg/icon", this.node, GameResPath_1.GameResPath.getDropIconsPath(this.currItemDatas[this.currSelected].purchaseType), BundleConfig_1.default.instance.guiBundle.name);
                    ViewUtil_1.ViewUtil.setLabelStringByName("btn_buy/cost_bg/amount", this.node, this.currItemDatas[this.currSelected].purchaseAmount.toString());
                }
            }
            //名称
            // 
            // //价格
            // //刷新预览
            drop && this.showPreview(drop);
        };
        /**
         * 预览
         */
        StorePet_1.prototype.showPreview = function (drop) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var petData, petData;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (!(this.currType == 0)) return [3 /*break*/, 1];
                            ViewUtil_1.ViewUtil.setNodeActiveByName("bg/petShowNode", this.node, true);
                            ViewUtil_1.ViewUtil.setNodeActiveByName("bg/floor", this.node, false);
                            if (drop.type == DataObject_1.DropType.PetSkin) {
                                petData = PetExcelData_1.PetExcelData.getAllData().find(function (x) { return x.id == Number(PetRewardData_1.PetRewardData.getAllData().find(function (x) { return x.id == drop.dropId; }).rewardRes); });
                                this.pet.initSpin(petData.id, drop.dropId.toString(), petData.travelAm.toString());
                                this.pet.node.setPosition(this.petInitPos);
                            }
                            else if (drop.type == DataObject_1.DropType.PetActAni) {
                                petData = PetExcelData_1.PetExcelData.getAllData().find(function (x) { return x.id == Number(PetRewardData_1.PetRewardData.getAllData().find(function (x) { return x.id == drop.dropId; }).rewardRes); });
                                this.pet.initSpin(petData.id, petData === null || petData === void 0 ? void 0 : petData.firstSkin, drop.dropId.toString());
                                this.pet.node.setPosition(this.petInitPos.x, this.petInitPos.y + PetRewardData_1.PetRewardData.getAllData().find(function (x) { return x.id == drop.dropId; }).yOffset, this.petInitPos.z);
                            }
                            return [3 /*break*/, 4];
                        case 1:
                            ViewUtil_1.ViewUtil.setNodeActiveByName("bg/petShowNode", this.node, false);
                            ViewUtil_1.ViewUtil.setNodeActiveByName("bg/floor", this.node, true);
                            if (!(this.storeSuitItemDatas[this.currType - 1].id < 1000)) return [3 /*break*/, 3];
                            //服装
                            this.roleNode.active = true;
                            this.furnitureNode.parent.active = false;
                            (_a = this.roleNode.getComponent(Role_1.Role)) === null || _a === void 0 ? void 0 : _a.clearDress();
                            return [4 /*yield*/, ((_b = this.roleNode.getComponent(Role_1.Role)) === null || _b === void 0 ? void 0 : _b.showSuitSkin(this.suitData.suitShow))];
                        case 2:
                            _d.sent();
                            (_c = this.roleNode.getComponent(Role_1.Role)) === null || _c === void 0 ? void 0 : _c.changeAnim(DataObject_1.RoleAnimType.Walk);
                            return [3 /*break*/, 4];
                        case 3:
                            //家具
                            this.roleNode.active = false;
                            this.furnitureNode.parent.active = true;
                            ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.furnitureNode, GameResPath_1.GameResPath.getSuitPreviewPath(this.suitData.suitResShow.toString()), BundleConfig_1.default.instance.guiBundle.name);
                            _d.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 重置预览
         */
        StorePet_1.prototype.resetPreview = function () {
        };
        /**
         * 显示当前分类列表
         */
        StorePet_1.prototype.showList = function () {
            var _a, _b;
            if (this.currType == 0) {
                for (var i = 0; i < this.items.length; i++) {
                    var element = this.items[i];
                    (_a = element.getComponent(StoreItem_1.StoreItem)) === null || _a === void 0 ? void 0 : _a.initData(null, DataObject_1.StoreBuyType.Pet, this.currType + 1, i, this.currData[i]);
                }
            }
            else {
                this.suitData = new SuitData_1.SuitData(this.storeSuitItemDatas[this.currType - 1].id);
                this.currItemDatas = this.suitData.getSuitItems(this.storeSuitItemDatas[this.currType - 1].costs);
                //名字
                //列表
                for (var i = 0; i < this.items.length; i++) {
                    var element = this.items[i];
                    (_b = element.getComponent(StoreSuitItem_1.StoreSuitItem)) === null || _b === void 0 ? void 0 : _b.initData(this.currItemDatas[i]);
                }
            }
        };
        /**
         * 刷新列表
         * @param dataList
         */
        StorePet_1.prototype.refreshList = function (dataList) {
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
        /**
         * 刷新列表
         * @param dataList
         */
        StorePet_1.prototype.refreshSuitList = function (dataList) {
            var _a;
            //更新数据
            for (var i = 0; i < dataList.length; i++) {
                var element = dataList[i];
                this.storeSuitItemDatas[this.currType - 1].costs[i].owned = element;
                this.currItemDatas[i].owned = element;
            }
            //刷新界面
            for (var i = 0; i < this.items.length; i++) {
                var element = this.items[i];
                (_a = element.getComponent(StoreSuitItem_1.StoreSuitItem)) === null || _a === void 0 ? void 0 : _a.refreshData(this.currItemDatas[i]);
            }
        };
        /**
             * 剩余时间
             */
        StorePet_1.prototype.refreshTime = function () {
            //如果时间大于1个小时 显示xx时xx分，如果小于1个小时限时xx分xx秒
            for (var i = 0; i < this.storeSuitItemDatas.length; i++) {
                if (this.storeSuitItemDatas[i].leftTime > 0) {
                    if (this.currType - 1 == i) {
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
                    //this.loadData();
                }
            }
        };
        StorePet_1.prototype.btn_toggle = function (event, data) {
            var id = parseInt(data);
            if (this.currType == id) {
                return;
            }
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.currType = id;
            if (this.currType == 0) {
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RefreshStoreTopTimeState, (true));
                this.currData = this.storeItemDatas.get("pet");
            }
            else {
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RefreshStoreTopTimeState, (false));
                this.suitData = this.storeItemDatas.get("suit")[id - 1];
                //刷新时间
                this.refreshTime();
            }
            this.showList();
            this.showSelected(0);
        };
        StorePet_1.prototype.btn_buy = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.currData[this.currSelected].leftLimitTimes == 0) {
                //售罄
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("store.soldOut"));
                return;
            }
            var data;
            var suitId = 0;
            var requestType = 0;
            if (this.currType == 0) {
                data = this.currData[this.currSelected];
                requestType = 1;
            }
            else {
                data = this.currItemDatas[this.currSelected];
                suitId = this.storeSuitItemDatas[this.currType - 1].id;
                requestType = 2;
            }
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.StoreBuyConfirm, {
                "data": data, "callback": function () {
                    HttpPost_1.HttpPost.instance.purchaseCommodity(DataObject_1.StoreBuyType.Pet + 1, requestType, _this.currSelected, suitId, function (data) {
                        //购买成功
                        Oops_1.oops.gui.remove(GameUIConfig_1.UIID.StoreBuyConfirm);
                        var dData = DropMgr_1.DropMgr.getDropData(data.reward);
                        var dropInfo = new DataObject_1.DropInfo();
                        dropInfo.dropData = dData;
                        dropInfo.UIID.push(GameUIConfig_1.UIID.Store);
                        dropInfo.dropFrom = DataObject_1.DropFrom.StorePet;
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                        //货币
                        SingletonModuleComp_1.smc.account.AccountModel.vm.petCoin = data.pet_coin;
                        //金币累计消耗
                        //货币
                        SingletonModuleComp_1.smc.account.AccountModel.vm.coin = data.coin;
                        SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                        //更新数据
                        DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                        if (_this.currType == 0) {
                            //刷新宠物商店
                            _this.refreshList(data.info.list);
                        }
                        else {
                            //刷新套装商店
                            _this.refreshSuitList(data.info.list);
                        }
                    }, function (data) {
                        Oops_1.oops.gui.toast(data.msg);
                    });
                }
            });
        };
        return StorePet_1;
    }(_classSuper));
    __setFunctionName(_classThis, "StorePet");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _roleNode_decorators = [property(cc_3.Node)];
        _leftTime_decorators = [property(cc_3.Node)];
        _furnitureNode_decorators = [property(cc_3.Node)];
        _pet_decorators = [property(Pet_1.Pet)];
        __esDecorate(null, null, _roleNode_decorators, { kind: "field", name: "roleNode", static: false, private: false, access: { has: function (obj) { return "roleNode" in obj; }, get: function (obj) { return obj.roleNode; }, set: function (obj, value) { obj.roleNode = value; } }, metadata: _metadata }, _roleNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _leftTime_decorators, { kind: "field", name: "leftTime", static: false, private: false, access: { has: function (obj) { return "leftTime" in obj; }, get: function (obj) { return obj.leftTime; }, set: function (obj, value) { obj.leftTime = value; } }, metadata: _metadata }, _leftTime_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _furnitureNode_decorators, { kind: "field", name: "furnitureNode", static: false, private: false, access: { has: function (obj) { return "furnitureNode" in obj; }, get: function (obj) { return obj.furnitureNode; }, set: function (obj, value) { obj.furnitureNode = value; } }, metadata: _metadata }, _furnitureNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pet_decorators, { kind: "field", name: "pet", static: false, private: false, access: { has: function (obj) { return "pet" in obj; }, get: function (obj) { return obj.pet; }, set: function (obj, value) { obj.pet = value; } }, metadata: _metadata }, _pet_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StorePet = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StorePet = _classThis;
}();
exports.StorePet = StorePet;
