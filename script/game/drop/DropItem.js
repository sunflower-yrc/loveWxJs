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
exports.DropItem = void 0;
var cc_1 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../common/mgr/GameMgr");
var DataMgr_1 = require("../mgr/DataMgr");
var DressData_1 = require("../common/tableData/DressData");
var FurnitureData_1 = require("../common/tableData/FurnitureData");
var TriggerData_1 = require("../common/tableData/TriggerData");
var ButtonPlus_1 = require("../tools/ButtonPlus");
var DataObject_1 = require("../tools/DataObject");
var RedDotMgr_1 = require("../mgr/RedDotMgr");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var DropItem = function () {
    var _classDecorators = [ccclass('DropItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var DropItem = _classThis = /** @class */ (function (_super) {
        __extends(DropItem_1, _super);
        function DropItem_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DropItem_1.prototype.initData = function (data, dropFrom) {
            var _a, _b, _c, _d, _e, _f;
            this.dropData = data;
            (_a = this.getComponent(cc_1.Animation)) === null || _a === void 0 ? void 0 : _a.stop();
            (_b = this.getComponent(cc_1.Animation)) === null || _b === void 0 ? void 0 : _b.play();
            var isNew = false;
            var type = data.type;
            if (type == DataObject_1.DropType.Furniture) {
                //家具
                var furnitureData = new FurnitureData_1.FurnitureData(data.dropId);
                //加数量
                var exist = false;
                var subData = (_c = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData.get(furnitureData.valueType)) === null || _c === void 0 ? void 0 : _c.get(furnitureData.furnitureType);
                if (subData && subData.length > 0) {
                    for (var _i = 0, subData_1 = subData; _i < subData_1.length; _i++) {
                        var i = subData_1[_i];
                        if (i.furnitureData.id == data.dropId) {
                            //已经有了
                            exist = true;
                            i.leftAmount += data.dropAmount;
                            break;
                        }
                    }
                }
                if (subData && !exist) {
                    //没有 添加进去
                    var item = new DataObject_1.DecorateOwnedData();
                    var id = data.dropId;
                    item.furnitureData = new FurnitureData_1.FurnitureData(id);
                    item.lineupCount = 0;
                    item.leftAmount = data.dropAmount;
                    item.isNew = 1;
                    subData === null || subData === void 0 ? void 0 : subData.unshift(item);
                    // //背包物品
                    // smc.account.AccountModel.backpackData.set(id,item);
                    //总
                    var subDataAll = (_d = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData.get(furnitureData.valueType)) === null || _d === void 0 ? void 0 : _d.get(0);
                    subDataAll === null || subDataAll === void 0 ? void 0 : subDataAll.unshift(item);
                    //设置装饰物获得状态
                    isNew = true;
                    DataMgr_1.DataMgr.setDecorateNewState(type, data.dropId, true);
                    //红点
                    RedDotMgr_1.RedDotMgr.setFurnitureRedDot(item, 1);
                    //打点
                    SdkPlatform_1.SdkPlatform.furniture_acquisition(furnitureData.furnitureType, furnitureData.id, dropFrom);
                    //家具套装列表
                    if (item.furnitureData.furnitureSuit > 0) {
                        SingletonModuleComp_1.smc.account.AccountModel.furnitureSuitList.push(id);
                    }
                }
                //更新家具总数量
                SingletonModuleComp_1.smc.account.AccountModel.furnitureTotalAmount += data.dropAmount;
                /**获取家具事件 */
                var triggers = TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.GotFurniture);
                if (triggers && !GameMgr_1.GameMgr.Instance.firstCheck) {
                    for (var _g = 0, triggers_1 = triggers; _g < triggers_1.length; _g++) {
                        var i = triggers_1[_g];
                        i.checkTrigger(data.dropId);
                    }
                }
            }
            else if (type == DataObject_1.DropType.Dress) {
                //装饰
                var dressData = new DressData_1.DressData(data.dropId);
                //加数量
                var exist = false;
                var subData = (_e = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData.get(dressData.classify)) === null || _e === void 0 ? void 0 : _e.get(dressData.dressType);
                if (subData && subData.length > 0) {
                    for (var _h = 0, subData_2 = subData; _h < subData_2.length; _h++) {
                        var i = subData_2[_h];
                        if (i.dressData.id == data.dropId) {
                            //已经有了
                            exist = true;
                            i.leftAmount += data.dropAmount;
                            break;
                        }
                    }
                }
                if (subData && !exist) {
                    //没有 添加进去
                    var item = new DataObject_1.DecorateOwnedData();
                    var id = data.dropId;
                    item.dressData = new DressData_1.DressData(id);
                    item.lineupCount = 0;
                    item.leftAmount = data.dropAmount;
                    item.isNew = 1;
                    subData === null || subData === void 0 ? void 0 : subData.unshift(item);
                    // //背包物品
                    // smc.account.AccountModel.backpackData.set(id,item);
                    //总
                    var subDataAll = (_f = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData.get(dressData.classify)) === null || _f === void 0 ? void 0 : _f.get(0);
                    subDataAll === null || subDataAll === void 0 ? void 0 : subDataAll.unshift(item);
                    //设置装饰物获得状态
                    isNew = true;
                    DataMgr_1.DataMgr.setDecorateNewState(type, data.dropId, true);
                    //红点
                    RedDotMgr_1.RedDotMgr.setDressRedDot(item, 1);
                    //打点
                    SdkPlatform_1.SdkPlatform.furniture_acquisition(dressData.dressType, dressData.id, dropFrom);
                    //装扮套装列表
                    if (item.dressData.dressSuit > 0) {
                        SingletonModuleComp_1.smc.account.AccountModel.dressSuitList.push(id);
                    }
                }
                //更新装饰总数量
                SingletonModuleComp_1.smc.account.AccountModel.dressTotalAmount += data.dropAmount;
                /**获取装扮事件 */
                var triggers = TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.GotDress);
                if (triggers && !GameMgr_1.GameMgr.Instance.firstCheck) {
                    for (var _j = 0, triggers_2 = triggers; _j < triggers_2.length; _j++) {
                        var i = triggers_2[_j];
                        i.checkTrigger(data.dropId);
                    }
                }
            }
            else if (type == DataObject_1.DropType.Coins) {
                //金币
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.coin += data.dropAmount;
            }
            else if (type == DataObject_1.DropType.BoxTimes) {
                //开箱次数
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.giveTimes += data.dropAmount;
                GameMgr_1.GameMgr.Instance.checkCar = true;
            }
            else if (type == DataObject_1.DropType.Exp) {
                //经验值
            }
            else if (type == DataObject_1.DropType.RandomSuit) {
                //随时家具套装1件或随机时装套装1件
            }
            else if (type == DataObject_1.DropType.Power) {
                //体力//加数量
                SingletonModuleComp_1.smc.account.AccountModel.power += data.dropAmount;
            }
            else if (type == DataObject_1.DropType.Jewel) {
                //钻石
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.jewel += data.dropAmount;
            }
            else if (type == DataObject_1.DropType.NoAdsTicket) {
                //免广告券
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.noAdsTicket += data.dropAmount;
            }
            else if (type == DataObject_1.DropType.BoxSpeedupTicket) {
                //开箱加速券
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.openBoxSpeed += data.dropAmount;
            }
            else if (type == DataObject_1.DropType.Prompt) {
                //消除道具-提示
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.prop2 += data.dropAmount;
            }
            else if (type == DataObject_1.DropType.Flip) {
                //消除道具-翻牌
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.prop3 += data.dropAmount;
            }
            else if (type == DataObject_1.DropType.Cancel) {
                //消除道具-翻牌
                //加数量
                SingletonModuleComp_1.smc.account.AccountModel.vm.prop1 += data.dropAmount;
            }
            else if (type == DataObject_1.DropType.PassExp) {
                //通行证
                //加数量
                // smc.account.AccountModel.vm.passExp += data.dropAmount;
            }
            ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getQualityBgPath(data.grade.toString()), BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.node, data.iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("name", this.node, data.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("amount", this.node, data.dropAmount.toString());
            ViewUtil_1.ViewUtil.setNodeActiveByName("new", this.node, isNew);
            //绑定明细
            var btnCom = this.getComponent(ButtonPlus_1.default);
            if (btnCom) {
                btnCom.addLongClick(this.onLongPressThis.bind(this), this.onLongPressEndThis.bind(this), this);
            }
        };
        DropItem_1.prototype.initDataNoSave = function (data) {
            var _a, _b, _c, _d;
            this.dropData = data;
            (_a = this.getComponent(cc_1.Animation)) === null || _a === void 0 ? void 0 : _a.stop();
            (_b = this.getComponent(cc_1.Animation)) === null || _b === void 0 ? void 0 : _b.play();
            var isNew = false;
            var type = data.type;
            if (type == DataObject_1.DropType.Furniture) {
                //家具
                var furnitureData = new FurnitureData_1.FurnitureData(data.dropId);
                //加数量
                var exist = false;
                var subData = (_c = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData.get(furnitureData.valueType)) === null || _c === void 0 ? void 0 : _c.get(furnitureData.furnitureType);
                if (subData && subData.length > 0) {
                    for (var _i = 0, subData_3 = subData; _i < subData_3.length; _i++) {
                        var i = subData_3[_i];
                        if (i.furnitureData.id == data.dropId) {
                            //已经有了
                            exist = true;
                            break;
                        }
                    }
                }
                if (subData && !exist) {
                    //设置装饰物获得状态
                    isNew = true;
                }
            }
            else if (type == DataObject_1.DropType.Dress) {
                //装饰
                var dressData = new DressData_1.DressData(data.dropId);
                //加数量
                var exist = false;
                var subData = (_d = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData.get(dressData.classify)) === null || _d === void 0 ? void 0 : _d.get(dressData.dressType);
                if (subData && subData.length > 0) {
                    for (var _e = 0, subData_4 = subData; _e < subData_4.length; _e++) {
                        var i = subData_4[_e];
                        if (i.dressData.id == data.dropId) {
                            //已经有了
                            exist = true;
                            break;
                        }
                    }
                }
                if (subData && !exist) {
                    //设置装饰物获得状态
                    isNew = true;
                }
            }
            ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getQualityBgPath(data.grade.toString()), BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.node, data.iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("name", this.node, data.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("amount", this.node, data.dropAmount.toString());
            ViewUtil_1.ViewUtil.setNodeActiveByName("new", this.node, isNew);
            //绑定明细
            var btnCom = this.getComponent(ButtonPlus_1.default);
            if (btnCom) {
                btnCom.addLongClick(this.onLongPressThis.bind(this), this.onLongPressEndThis.bind(this), this);
            }
        };
        DropItem_1.prototype.onLongPressThis = function (event) {
            var touchPos = event.getUILocation();
            var itemDetailsData = new DataObject_1.ItemDetailsData();
            itemDetailsData.dropData = this.dropData;
            itemDetailsData.touchPos = touchPos;
            DataMgr_1.DataMgr.OpenItemDetails(itemDetailsData);
        };
        DropItem_1.prototype.onLongPressEndThis = function (event) {
            DataMgr_1.DataMgr.CloseItemDetails();
        };
        return DropItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "DropItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DropItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DropItem = _classThis;
}();
exports.DropItem = DropItem;
