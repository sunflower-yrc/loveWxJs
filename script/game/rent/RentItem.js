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
exports.RentItem = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var RentData_1 = require("../common/tableData/RentData");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var Tablenpc_1 = require("../common/table/Tablenpc");
var LangData_1 = require("../common/tableData/LangData");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var Role_1 = require("../dress/Role");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var DataObject_1 = require("../tools/DataObject");
var RentFurniture_1 = require("./RentFurniture");
var cc_3 = require("cc");
var LimitData_1 = require("../common/tableData/LimitData");
var DropMgr_1 = require("../mgr/DropMgr");
var HttpPost_1 = require("../tools/HttpPost");
var GameEvent_1 = require("../common/config/GameEvent");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var cc_4 = require("cc");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var Rent_1 = require("./Rent");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../common/mgr/GameMgr");
var DressData_1 = require("../common/tableData/DressData");
var FurnitureData_1 = require("../common/tableData/FurnitureData");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var RentItem = function () {
    var _classDecorators = [ccclass('RentItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _rentFurniture_decorators;
    var _rentFurniture_initializers = [];
    var _npcRole_decorators;
    var _npcRole_initializers = [];
    var _parentNode_decorators;
    var _parentNode_initializers = [];
    var RentItem = _classThis = /** @class */ (function (_super) {
        __extends(RentItem_1, _super);
        function RentItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rentFurniture = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _rentFurniture_initializers, null));
            _this.npcRole = __runInitializers(_this, _npcRole_initializers, null);
            _this.parentNode = __runInitializers(_this, _parentNode_initializers, null);
            _this.time = null;
            _this.reTime = null;
            _this.rentData = null;
            _this.rentNum = 0;
            return _this;
        }
        RentItem_1.prototype.init = function (data, reTime) {
            this.data = data;
            this.reTime = reTime;
            this.rentData = new RentData_1.RentData(data.hireId);
            this.setStatus();
            this.setShow();
            this.onItemList();
        };
        RentItem_1.prototype.start = function () {
        };
        RentItem_1.prototype.setStatus = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
            if (this.data.status == DataObject_1.RentStatus.wait) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("startBtn", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("speedBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lockBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("tip", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("warn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("rentDec", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("speedTime", this.node, false);
                ViewUtil_1.ViewUtil.setLabelStringByName("timeLab", this.node, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.data.hireTimes));
            }
            else if (this.data.status == DataObject_1.RentStatus.running) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("startBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("speedBtn", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lockBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("tip", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("speedTime", this.node, true);
                this.setTimer();
            }
            else if (this.data.status == DataObject_1.RentStatus.unlock) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("startBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("speedBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lockBtn", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("tip", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("speedTime", this.node, false);
                var str = new LimitData_1.LimitData(this.data.limitId).getDesc();
                ViewUtil_1.ViewUtil.setLabelStringByName("lockBtn/label", this.node, new LimitData_1.LimitData(this.data.limitId).getDesc());
                ViewUtil_1.ViewUtil.setNodeActiveByName("warn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("rentDec", this.node, true);
                ViewUtil_1.ViewUtil.setLabelStringByName("timeLab", this.node, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.data.hireTimes));
            }
            else if (this.data.status == DataObject_1.RentStatus.timesMax) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("startBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("speedBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lockBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("tip", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("warn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("rentDec", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("speedTime", this.node, false);
                ViewUtil_1.ViewUtil.setLabelStringByName("tip/proLab", this.node, "(" + 0 + "/" + this.rentData.hireDaily + ")");
                ViewUtil_1.ViewUtil.setLabelStringByName("timeLab", this.node, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.data.hireTimes));
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("startBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("speedBtn", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lockBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("tip", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("speedTime", this.node, false);
            }
        };
        RentItem_1.prototype.setShow = function () {
            var npc = new Tablenpc_1.Tablenpc();
            npc.init(parseInt(this.data.npc));
            var name = new LangData_1.LangData(npc.npcName).getDesc();
            ViewUtil_1.ViewUtil.setLabelStringByName("npcName", this.node, name);
            this.npcRole.showSuitSkin(npc.npcDress);
            this.getGetnum();
            ViewUtil_1.ViewUtil.setLabelStringByName("rentDec", this.node, new LangData_1.LangData(this.data.hireDesc).getDesc());
            ViewUtil_1.ViewUtil.setLabelStringByName("need", this.node, this.data.validGold + "/" + this.data.goldAll, this.rentNum == this.data.itemMaxCount ? { color: new cc_4.Color("#80B857") } : { color: new cc_4.Color("#a38986") });
            var itemDropData = DropMgr_1.DropMgr.getDropData(this.data.hireReward);
            ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.node, itemDropData[0].iconUrl, BundleConfig_1.default.instance.guiBundle.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("num", this.node, "x" + itemDropData[0].dropAmount, this.rentNum == this.data.itemMaxCount ?
                { color: new cc_4.Color("#80B857") } : { color: new cc_4.Color("#a38986") });
            var timeStr = StringUtil_1.StringUtil.formatActivityTimeWithSec(this.data.hireAd);
            ViewUtil_1.ViewUtil.setLabelStringByName("speedTime/timeLab", this.node, "-" + timeStr);
        };
        //设置上阵数量
        RentItem_1.prototype.getGetnum = function () {
            this.rentNum = 0;
            for (var i = 0, len = this.data.itemList.length; i < len; i++) {
                if (this.data.itemList[i].status == 2) {
                    this.rentNum++;
                }
            }
        };
        /**创建计时器 */
        RentItem_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            var curTime = Oops_1.oops.timer.getServerTime();
            this.time = this.data.finishAt - curTime;
            ViewUtil_1.ViewUtil.setLabelStringByName("timeLab", this.node, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.time));
            if (this.reTime < this.data.finishAt) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("warn", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("rentDec", this.node, false);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("warn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("rentDec", this.node, true);
            }
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        RentItem_1.prototype.onSecond = function () {
            ViewUtil_1.ViewUtil.setLabelStringByName("timeLab", this.node, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.time));
        };
        RentItem_1.prototype.onComplete = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
            HttpPost_1.HttpPost.instance.hireInfo(function (data) {
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateRentList, data);
            });
        };
        //出租物品列表
        RentItem_1.prototype.onItemList = function () {
            var len = this.parentNode.children.length > this.data.itemList.length ?
                this.parentNode.children.length : this.data.itemList.length;
            for (var i = 0; i < len; i++) {
                var itemSprcit = void 0;
                if (this.parentNode.children[i] && this.data.itemList[i]) {
                    this.parentNode.children[i].active = true;
                    itemSprcit = this.parentNode.children[i].getComponent(RentFurniture_1.RentFurniture);
                }
                else if (!this.parentNode.children[i] && this.data.itemList[i]) {
                    var item = (0, cc_3.instantiate)(this.rentFurniture);
                    item.parent = this.parentNode;
                    itemSprcit = item.getComponent(RentFurniture_1.RentFurniture);
                }
                else if (this.parentNode.children[i] && !this.data.itemList[i]) {
                    this.parentNode.children[i].active = false;
                    continue;
                }
                itemSprcit.init(this.data.itemList[i], this.data.hireId, this.data.status);
            }
        };
        //开始出租
        RentItem_1.prototype.startRnet = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.rentNum > 0) {
                HttpPost_1.HttpPost.instance.hireStart(this.data.hireId, function (data) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateRentList, data);
                    if (data.recoverItem) {
                        _this.setRycleFuniture(data.recoverItem, 1);
                    }
                });
            }
            else {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("rent.rentItem"));
            }
        };
        //看广告加速
        RentItem_1.prototype.speedRent = function () {
            var _this = this;
            //重复点击处理
            if (Rent_1.Rent.clickNum == 0) {
                Rent_1.Rent.clickNum++;
            }
            else {
                return;
            }
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (GameMgr_1.GameMgr.Instance.adsTipType == DataObject_1.AdsTipType.nothing && SingletonModuleComp_1.smc.account.AccountModel.vm.noAdsTicket > 0) {
                Rent_1.Rent.clickNum = 0;
            }
            SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.Rent, function (adsTipType) {
                Rent_1.Rent.clickNum = 0;
                HttpPost_1.HttpPost.instance.hireSpeedUp(_this.data.hireId, adsTipType, function (data) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateRentList, data);
                });
            }, function () {
                Rent_1.Rent.clickNum = 0;
            });
        };
        //领取奖励
        RentItem_1.prototype.getReward = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getHireFinishReward(this.data.hireId, function (data) {
                //显示掉落
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.Rent;
                dropInfo.UIID = [GameUIConfig_1.UIID.Rent];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateRentList, data);
                _this.setRycleFuniture(data.recoverItem, 2);
            });
        };
        RentItem_1.prototype.setRycleFuniture = function (dropString, type) {
            var array = StringUtil_1.StringUtil.stringToArray2(dropString);
            for (var i = 0; i < array.length; i++) {
                this.setRentFurniture(array[i], type);
            }
        };
        RentItem_1.prototype.setRentFurniture = function (dropString, rentType) {
            var _a, _b;
            var drop = StringUtil_1.StringUtil.stringToArray5(dropString);
            var type = parseInt(drop[0]);
            if (type == DataObject_1.DropType.Furniture) {
                //家具
                var data = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData;
                var furnitureData = new FurnitureData_1.FurnitureData(parseInt(drop[1]));
                var subData = (_a = data.get(furnitureData.valueType)) === null || _a === void 0 ? void 0 : _a.get(furnitureData.furnitureType);
                if (subData && subData.length > 0) {
                    for (var _i = 0, subData_1 = subData; _i < subData_1.length; _i++) {
                        var i = subData_1[_i];
                        if (i.furnitureData.id == parseInt(drop[1])) {
                            if (rentType == 1) {
                                i.leftAmount--;
                                i.lineupCount++;
                            }
                            else {
                                i.leftAmount++;
                                i.lineupCount--;
                            }
                            break;
                        }
                    }
                }
            }
            else if (type == DataObject_1.DropType.Dress) {
                //装饰
                var data = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData;
                var dressData = new DressData_1.DressData(parseInt(drop[1]));
                var subData = (_b = data.get(dressData.classify)) === null || _b === void 0 ? void 0 : _b.get(dressData.dressType);
                if (subData && subData.length > 0) {
                    for (var _c = 0, subData_2 = subData; _c < subData_2.length; _c++) {
                        var i = subData_2[_c];
                        if (i.dressData.id == parseInt(drop[1])) {
                            i.leftAmount++;
                            i.lineupCount--;
                            break;
                        }
                    }
                }
            }
        };
        RentItem_1.prototype.onDestroy = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
        };
        return RentItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "RentItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _rentFurniture_decorators = [property(cc_1.Prefab)];
        _npcRole_decorators = [property(Role_1.Role)];
        _parentNode_decorators = [property(cc_2.Node)];
        __esDecorate(null, null, _rentFurniture_decorators, { kind: "field", name: "rentFurniture", static: false, private: false, access: { has: function (obj) { return "rentFurniture" in obj; }, get: function (obj) { return obj.rentFurniture; }, set: function (obj, value) { obj.rentFurniture = value; } }, metadata: _metadata }, _rentFurniture_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _npcRole_decorators, { kind: "field", name: "npcRole", static: false, private: false, access: { has: function (obj) { return "npcRole" in obj; }, get: function (obj) { return obj.npcRole; }, set: function (obj, value) { obj.npcRole = value; } }, metadata: _metadata }, _npcRole_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _parentNode_decorators, { kind: "field", name: "parentNode", static: false, private: false, access: { has: function (obj) { return "parentNode" in obj; }, get: function (obj) { return obj.parentNode; }, set: function (obj, value) { obj.parentNode = value; } }, metadata: _metadata }, _parentNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RentItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RentItem = _classThis;
}();
exports.RentItem = RentItem;
