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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drop = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../common/mgr/GameMgr");
var DataMgr_1 = require("../mgr/DataMgr");
var DressData_1 = require("../common/tableData/DressData");
var FurnitureData_1 = require("../common/tableData/FurnitureData");
var TriggerData_1 = require("../common/tableData/TriggerData");
var TypeGlobalData_1 = require("../common/tableData/TypeGlobalData");
var ButtonPlus_1 = require("../tools/ButtonPlus");
var DataObject_1 = require("../tools/DataObject");
var List_1 = require("../tools/List");
var DropItem_1 = require("./DropItem");
var RedDotMgr_1 = require("../mgr/RedDotMgr");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var Share_1 = require("../platform/Share");
var ResMgr_1 = require("../mgr/ResMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Drop = function () {
    var _classDecorators = [ccclass('Drop')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _nodeSingle_decorators;
    var _nodeSingle_initializers = [];
    var _nodeMulti_decorators;
    var _nodeMulti_initializers = [];
    var _nodeScrollview_decorators;
    var _nodeScrollview_initializers = [];
    var Drop = _classThis = /** @class */ (function (_super) {
        __extends(Drop_1, _super);
        function Drop_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nodeSingle = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _nodeSingle_initializers, null));
            _this.nodeMulti = __runInitializers(_this, _nodeMulti_initializers, null);
            _this.nodeScrollview = __runInitializers(_this, _nodeScrollview_initializers, null);
            _this.furnitureGotoData = "1-1-0";
            _this.dressGotoData = "2-1-0";
            _this.multiInitDone = false;
            _this.currencyAnims = [];
            return _this;
        }
        Drop_1.prototype.onAdded = function (param) {
            if (param.isOpen) {
                this.dropInfo = param.dropInfo;
            }
            else {
                this.dropInfo = param;
            }
            this.currencyAnims = [0, 0];
            this.initUI();
            if (param.extreData && param.extreData != "") {
                ViewUtil_1.ViewUtil.setNodeActiveByName("extre", this.node, true);
                this.extreData = param.extreData;
                this.setExtreData();
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("extre", this.node, false);
            }
        };
        Drop_1.prototype.setExtreData = function () {
            var itemDropData = DropMgr_1.DropMgr.getDropData(this.extreData);
            ViewUtil_1.ViewUtil.setLabelStringByName("extre/name", this.node, itemDropData[0].name);
            ViewUtil_1.ViewUtil.setLabelStringByName("extre/num", this.node, "x" + itemDropData[0].dropAmount);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("extre/icon", this.node, itemDropData[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            var type = itemDropData[0].type;
            var amount = itemDropData[0].dropAmount;
            if (type == DataObject_1.DropType.Coins) {
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.coin += amount;
            }
            else if (type == DataObject_1.DropType.BoxTimes) {
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.giveTimes += amount;
            }
            else if (type == DataObject_1.DropType.Power) {
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.power += amount;
            }
            else if (type == DataObject_1.DropType.Jewel) {
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.jewel += amount;
            }
            else if (type == DataObject_1.DropType.NoAdsTicket) {
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.noAdsTicket += amount;
            }
            else if (type == DataObject_1.DropType.BoxSpeedupTicket) {
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.openBoxSpeed += amount;
            }
            else if (type == DataObject_1.DropType.Prompt) {
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.prop2 += amount;
            }
            else if (type == DataObject_1.DropType.Flip) {
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.prop3 += amount;
            }
            else if (type == DataObject_1.DropType.Cancel) {
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.prop1 += amount;
            }
        };
        Drop_1.prototype.initUI = function () {
            var _this = this;
            var _a, _b, _c, _d, _e, _f;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Drop);
            GameMgr_1.GameMgr.Instance.checkCar = false;
            if (this.dropInfo.dropData.length == 1) {
                //长度为1  为单个掉落
                this.nodeSingle.active = true;
                this.nodeMulti.active = false;
                var type = this.dropInfo.dropData[0].type;
                var amount = this.dropInfo.dropData[0].dropAmount;
                var isNew = false;
                if (type == DataObject_1.DropType.Furniture) {
                    //家具
                    var furnitureData = new FurnitureData_1.FurnitureData(this.dropInfo.dropData[0].dropId);
                    //跳转数据
                    var typeGlobalData = new TypeGlobalData_1.TypeGlobalData(furnitureData.valueType);
                    this.furnitureGotoData = "1-" + furnitureData.valueType + "-" + typeGlobalData.getDecorateSubIndex(furnitureData.furnitureType);
                    //加数量
                    var exist = false;
                    var subData = !GameMgr_1.GameMgr.Instance.isOutside ?
                        (_a = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData.get(furnitureData.valueType)) === null || _a === void 0 ? void 0 : _a.get(furnitureData.furnitureType) :
                        (_b = SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureOwnedData.get(furnitureData.valueType)) === null || _b === void 0 ? void 0 : _b.get(furnitureData.furnitureType);
                    if (subData && subData.length > 0) {
                        for (var _i = 0, subData_1 = subData; _i < subData_1.length; _i++) {
                            var i = subData_1[_i];
                            if (i.furnitureData.id == this.dropInfo.dropData[0].dropId) {
                                //已经有了
                                exist = true;
                                i.leftAmount += amount;
                                break;
                            }
                        }
                    }
                    if (subData && !exist) {
                        //没有 添加进去
                        var item = new DataObject_1.DecorateOwnedData();
                        var id = this.dropInfo.dropData[0].dropId;
                        item.furnitureData = new FurnitureData_1.FurnitureData(id);
                        item.lineupCount = 0;
                        item.leftAmount = amount;
                        item.isNew = 1;
                        subData === null || subData === void 0 ? void 0 : subData.unshift(item);
                        // //背包物品
                        // smc.account.AccountModel.backpackData.set(id,item);
                        //总
                        var subDataAll = !GameMgr_1.GameMgr.Instance.isOutside ?
                            (_c = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData.get(furnitureData.valueType)) === null || _c === void 0 ? void 0 : _c.get(0) :
                            (_d = SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureOwnedData.get(furnitureData.valueType)) === null || _d === void 0 ? void 0 : _d.get(0);
                        subDataAll === null || subDataAll === void 0 ? void 0 : subDataAll.unshift(item);
                        //设置装饰物获得状态
                        if (!GameMgr_1.GameMgr.Instance.isOutside) {
                            isNew = true;
                            DataMgr_1.DataMgr.setDecorateNewState(type, this.dropInfo.dropData[0].dropId, true);
                            //红点
                            RedDotMgr_1.RedDotMgr.setFurnitureRedDot(item, 1);
                            //home
                            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FurnitureRedDotHome);
                            //排序
                            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SortFurniture);
                            //打点
                            SdkPlatform_1.SdkPlatform.furniture_acquisition(furnitureData.furnitureType, furnitureData.id, this.dropInfo.dropFrom);
                        }
                        //家具套装列表
                        if (item.furnitureData.furnitureSuit > 0) {
                            SingletonModuleComp_1.smc.account.AccountModel.furnitureSuitList.push(id);
                        }
                        ResMgr_1.ResMgr.preloadFurniture(id);
                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OutRewardRed);
                    }
                    //更新家具总数量
                    SingletonModuleComp_1.smc.account.AccountModel.furnitureTotalAmount += amount;
                    /**获取家具事件 */
                    var triggers = TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.GotFurniture);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OutRewardRed);
                    if (triggers && !GameMgr_1.GameMgr.Instance.firstCheck) {
                        for (var _g = 0, triggers_1 = triggers; _g < triggers_1.length; _g++) {
                            var i = triggers_1[_g];
                            i.checkTrigger(this.dropInfo.dropData[0].dropId);
                        }
                    }
                }
                else if (type == DataObject_1.DropType.Dress) {
                    //装饰
                    var dressData = new DressData_1.DressData(this.dropInfo.dropData[0].dropId);
                    //跳转数据
                    var typeGlobalData = new TypeGlobalData_1.TypeGlobalData(dressData.classify);
                    this.dressGotoData = "2-" + (dressData.classify - DataObject_1.DecorateType.Dress) + "-" + typeGlobalData.getDecorateSubIndex(dressData.dressType);
                    //加数量
                    var exist = false;
                    var subData = (_e = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData.get(dressData.classify)) === null || _e === void 0 ? void 0 : _e.get(dressData.dressType);
                    if (subData && subData.length > 0) {
                        for (var _h = 0, subData_2 = subData; _h < subData_2.length; _h++) {
                            var i = subData_2[_h];
                            if (i.dressData.id == this.dropInfo.dropData[0].dropId) {
                                //已经有了
                                exist = true;
                                i.leftAmount += amount;
                                break;
                            }
                        }
                    }
                    if (subData && !exist) {
                        //没有 添加进去
                        var item = new DataObject_1.DecorateOwnedData();
                        var id = this.dropInfo.dropData[0].dropId;
                        item.dressData = new DressData_1.DressData(id);
                        item.lineupCount = 0;
                        item.leftAmount = amount;
                        item.isNew = 1;
                        subData === null || subData === void 0 ? void 0 : subData.unshift(item);
                        // //背包物品
                        // smc.account.AccountModel.backpackData.set(id,item);
                        //总
                        var subDataAll = (_f = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData.get(dressData.classify)) === null || _f === void 0 ? void 0 : _f.get(0);
                        subDataAll === null || subDataAll === void 0 ? void 0 : subDataAll.unshift(item);
                        //设置装饰物获得状态
                        if (!GameMgr_1.GameMgr.Instance.isOutside) {
                            isNew = true;
                            DataMgr_1.DataMgr.setDecorateNewState(type, this.dropInfo.dropData[0].dropId, true);
                            //红点
                            RedDotMgr_1.RedDotMgr.setDressRedDot(item, 1);
                            //home
                            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.DressRedDotHome);
                            //排序
                            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SortDress);
                            //打点
                            SdkPlatform_1.SdkPlatform.furniture_acquisition(dressData.dressType, dressData.id, this.dropInfo.dropFrom);
                        }
                        //装扮套装列表
                        if (item.dressData.dressSuit > 0) {
                            SingletonModuleComp_1.smc.account.AccountModel.dressSuitList.push(id);
                        }
                    }
                    //更新装饰总数量
                    SingletonModuleComp_1.smc.account.AccountModel.dressTotalAmount += amount;
                    /**获取装扮事件 */
                    var triggers = TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.GotDress);
                    if (triggers && !GameMgr_1.GameMgr.Instance.firstCheck) {
                        for (var _j = 0, triggers_2 = triggers; _j < triggers_2.length; _j++) {
                            var i = triggers_2[_j];
                            i.checkTrigger(this.dropInfo.dropData[0].dropId);
                        }
                    }
                }
                else if (type == DataObject_1.DropType.Coins) {
                    //金币
                    this.dropInfo.dropData[0].iconUrl = GameResPath_1.GameResPath.getDropIconsPath(type);
                    //加数量
                    SingletonModuleComp_1.smc.account.AccountModel.vm.coin += amount;
                    //动画
                    this.currencyAnims[0] = 1;
                }
                else if (type == DataObject_1.DropType.BoxTimes) {
                    //开箱次数
                    this.dropInfo.dropData[0].iconUrl = GameResPath_1.GameResPath.getDropIconsPath(type);
                    //加数量
                    SingletonModuleComp_1.smc.account.AccountModel.vm.giveTimes += amount;
                    GameMgr_1.GameMgr.Instance.checkCar = true;
                }
                else if (type == DataObject_1.DropType.Exp) {
                    //经验值
                    this.dropInfo.dropData[0].iconUrl = GameResPath_1.GameResPath.getDropIconsPath(type);
                }
                else if (type == DataObject_1.DropType.RandomSuit) {
                    //随机家具、时装1件
                }
                else if (type == DataObject_1.DropType.Power) {
                    //钻石
                    this.dropInfo.dropData[0].iconUrl = GameResPath_1.GameResPath.getDropIconsPath(type);
                    //加数量
                    SingletonModuleComp_1.smc.account.AccountModel.power += amount;
                }
                else if (type == DataObject_1.DropType.Jewel) {
                    //钻石
                    this.dropInfo.dropData[0].iconUrl = GameResPath_1.GameResPath.getDropIconsPath(type);
                    //加数量
                    SingletonModuleComp_1.smc.account.AccountModel.vm.jewel += amount;
                    //动画
                    this.currencyAnims[1] = 2;
                }
                else if (type == DataObject_1.DropType.NoAdsTicket) {
                    //免广告券
                    this.dropInfo.dropData[0].iconUrl = GameResPath_1.GameResPath.getDropIconsPath(type);
                    //加数量
                    SingletonModuleComp_1.smc.account.AccountModel.vm.noAdsTicket += amount;
                }
                else if (type == DataObject_1.DropType.BoxSpeedupTicket) {
                    //开箱加速券
                    this.dropInfo.dropData[0].iconUrl = GameResPath_1.GameResPath.getDropIconsPath(type);
                    //加数量
                    SingletonModuleComp_1.smc.account.AccountModel.vm.openBoxSpeed += amount;
                }
                else if (type == DataObject_1.DropType.Prompt) {
                    //消除道具-提示
                    this.dropInfo.dropData[0].iconUrl = GameResPath_1.GameResPath.getDropIconsPath(type);
                    //加数量
                    SingletonModuleComp_1.smc.account.AccountModel.vm.prop2 += amount;
                }
                else if (type == DataObject_1.DropType.Flip) {
                    //消除道具-翻牌
                    this.dropInfo.dropData[0].iconUrl = GameResPath_1.GameResPath.getDropIconsPath(type);
                    //加数量
                    SingletonModuleComp_1.smc.account.AccountModel.vm.prop3 += amount;
                }
                else if (type == DataObject_1.DropType.Cancel) {
                    //消除道具-翻牌
                    this.dropInfo.dropData[0].iconUrl = GameResPath_1.GameResPath.getDropIconsPath(type);
                    //加数量
                    SingletonModuleComp_1.smc.account.AccountModel.vm.prop1 += amount;
                }
                else if (type == DataObject_1.DropType.PassExp) {
                    //消除道具-翻牌
                    this.dropInfo.dropData[0].iconUrl = GameResPath_1.GameResPath.getDropIconsPath(type);
                    //加数量
                    // smc.account.AccountModel.vm.passExp += amount;
                }
                var icon = ViewUtil_1.ViewUtil.findNode("icon", this.nodeSingle);
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(icon, this.dropInfo.dropData[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
                //绑定明细
                var btnCom = icon.getComponent(ButtonPlus_1.default);
                if (btnCom) {
                    btnCom.addLongClick(this.onLongPressThis.bind(this), this.onLongPressEndThis.bind(this), this);
                }
                if (type == DataObject_1.DropType.Furniture || type == DataObject_1.DropType.Dress) {
                    //缩放
                    ViewUtil_1.ViewUtil.setIconScaled(icon, 250);
                }
                ViewUtil_1.ViewUtil.setLabelStringByName("name_bg/name", this.nodeSingle, this.dropInfo.dropData[0].name);
                ViewUtil_1.ViewUtil.setNodeActiveByName("name_bg/new", this.nodeSingle, isNew);
                ViewUtil_1.ViewUtil.setLabelStringByName("amount", this.nodeSingle, "x" + amount);
                var btnVisable = (SingletonModuleComp_1.smc.account.AccountModel.isGuideOver || (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide && [21, 26, 29].indexOf(SingletonModuleComp_1.smc.guide.GuideModel.step) < 0)) && (type == DataObject_1.DropType.Furniture || type == DataObject_1.DropType.Dress);
                ViewUtil_1.ViewUtil.setNodeActiveByName("node_btn", this.nodeSingle, btnVisable);
            }
            else if (this.dropInfo.dropData.length > 1) {
                //多个
                this.nodeSingle.active = false;
                this.nodeMulti.active = true;
                this.multiInitDone = false;
                setTimeout(function () {
                    _this.nodeScrollview.numItems = _this.dropInfo.dropData.length;
                }, 500);
            }
        };
        /**
         * render回调
        */
        Drop_1.prototype.renderEventCallback = function (item, idx) {
            var _a;
            (_a = item.getComponent(DropItem_1.DropItem)) === null || _a === void 0 ? void 0 : _a.initData(this.dropInfo.dropData[idx], this.dropInfo.dropFrom);
            //金币 钻石动画
            if (this.dropInfo.dropData[idx].type == DataObject_1.DropType.Coins && this.currencyAnims[0] != 1) {
                this.currencyAnims[0] = 1;
            }
            else if (this.dropInfo.dropData[idx].type == DataObject_1.DropType.Jewel && this.currencyAnims[1] != 1) {
                this.currencyAnims[1] = 1;
            }
            if (idx == this.dropInfo.dropData.length - 1) {
                //背包排序
                var furniture = false;
                var dress = false;
                for (var i = 0; i < this.dropInfo.dropData.length; i++) {
                    var element = this.dropInfo.dropData[i];
                    if (element.type == DataObject_1.DropType.Furniture && !furniture) {
                        furniture = true;
                    }
                    else if (element.type == DataObject_1.DropType.Dress && !dress) {
                        dress = true;
                    }
                }
                if (furniture) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SortFurniture);
                    //home 红点
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FurnitureRedDotHome);
                }
                if (dress) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SortDress);
                    //home 红点
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.DressRedDotHome);
                }
                //加载完成
                this.multiInitDone = true;
            }
        };
        Drop_1.prototype.btn_share = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Share_1.Share.share();
        };
        /**
         * 去装饰
         */
        Drop_1.prototype.btn_decorate = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            // oops.message.dispatchEvent(GameEvent.CarExitAnimation);
            if (this.dropInfo.dropData[0].type == DataObject_1.DropType.Furniture) {
                //如果超值礼包自动打开了 先关闭 避免遮挡
                if (Oops_1.oops.gui.has(GameUIConfig_1.UIID.ValuePack)) {
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ValuePack);
                }
                //如果图鉴打开了，关闭
                if (Oops_1.oops.gui.has(GameUIConfig_1.UIID.Gallery)) {
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Gallery);
                }
                //打开装修
                DataMgr_1.DataMgr.gotoFunction(this.dropInfo.UIID, this.furnitureGotoData);
                // oops.gui.open(UIID.Furniture, { "type": DecorateType.Furniture });
                // oops.message.dispatchEvent(GameEvent.HideHomeUI);
                GameMgr_1.GameMgr.Instance.mapManager.moveScreenToNode(GameMgr_1.GameMgr.Instance.sceneMgr.aimRoomNode, 1.3);
            }
            else if (this.dropInfo.dropData[0].type == DataObject_1.DropType.Dress) {
                //如果超值礼包自动打开了 先关闭 避免遮挡
                if (Oops_1.oops.gui.has(GameUIConfig_1.UIID.ValuePack)) {
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ValuePack);
                }
                //如果图鉴打开了，关闭
                if (Oops_1.oops.gui.has(GameUIConfig_1.UIID.Gallery)) {
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Gallery);
                }
                //打开装扮
                DataMgr_1.DataMgr.gotoFunction(this.dropInfo.UIID, this.dressGotoData);
                // oops.gui.open(UIID.Dress, { "type": DecorateType.Dress, "newUser": false });
            }
            if (GameMgr_1.GameMgr.Instance.checkCar || this.dropInfo.dropFrom == DataObject_1.DropFrom.Box) {
                //来源 开箱
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.CheckCarEvent);
            }
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Drop);
        };
        Drop_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            //防止多个的情况未加载完就点了关闭
            if (this.dropInfo.dropData.length > 1 && !this.multiInitDone) {
                return;
            }
            //引导  下一步
            if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide) {
                if ([21, 26, 29].indexOf(SingletonModuleComp_1.smc.guide.GuideModel.step) >= 0) {
                    SingletonModuleComp_1.smc.guide.GuideView.next();
                }
            }
            if (GameMgr_1.GameMgr.Instance.checkCar || this.dropInfo.dropFrom == DataObject_1.DropFrom.Box) {
                //     //来源 开箱
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.CheckCarEvent);
            }
            var eventName = "";
            if (Oops_1.oops.gui.has(GameUIConfig_1.UIID.Store)) {
                eventName = GameEvent_1.GameEvent.ShowStoreCurrencyAnim;
            }
            else {
                eventName = GameEvent_1.GameEvent.ShowHomeCurrencyAnim;
            }
            if (this.currencyAnims[0] == 1) {
                //金币
                Oops_1.oops.message.dispatchEvent(eventName, 1);
            }
            if (this.currencyAnims[1] == 1) {
                //钻石
                Oops_1.oops.message.dispatchEvent(eventName, 2);
            }
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Drop);
        };
        Drop_1.prototype.onLongPressThis = function (event) {
            var touchPos = event.getUILocation();
            var itemDetailsData = new DataObject_1.ItemDetailsData();
            itemDetailsData.dropData = this.dropInfo.dropData[0];
            itemDetailsData.touchPos = touchPos;
            DataMgr_1.DataMgr.OpenItemDetails(itemDetailsData);
        };
        Drop_1.prototype.onLongPressEndThis = function (event) {
            DataMgr_1.DataMgr.CloseItemDetails();
        };
        return Drop_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Drop");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _nodeSingle_decorators = [property(cc_1.Node)];
        _nodeMulti_decorators = [property(cc_1.Node)];
        _nodeScrollview_decorators = [property(List_1.default)];
        __esDecorate(null, null, _nodeSingle_decorators, { kind: "field", name: "nodeSingle", static: false, private: false, access: { has: function (obj) { return "nodeSingle" in obj; }, get: function (obj) { return obj.nodeSingle; }, set: function (obj, value) { obj.nodeSingle = value; } }, metadata: _metadata }, _nodeSingle_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _nodeMulti_decorators, { kind: "field", name: "nodeMulti", static: false, private: false, access: { has: function (obj) { return "nodeMulti" in obj; }, get: function (obj) { return obj.nodeMulti; }, set: function (obj, value) { obj.nodeMulti = value; } }, metadata: _metadata }, _nodeMulti_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _nodeScrollview_decorators, { kind: "field", name: "nodeScrollview", static: false, private: false, access: { has: function (obj) { return "nodeScrollview" in obj; }, get: function (obj) { return obj.nodeScrollview; }, set: function (obj, value) { obj.nodeScrollview = value; } }, metadata: _metadata }, _nodeScrollview_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Drop = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Drop = _classThis;
}();
exports.Drop = Drop;
