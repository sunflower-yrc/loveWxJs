"use strict";
/*
 * @Author: dgflash
 * @Date: 2021-11-23 15:51:15
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-25 17:03:54
 */
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
exports.AccountNetDataSystem = exports.AccountNetDataComp = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ECS_1 = require("../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS");
var DataManager_1 = require("../../../Global/DataManager");
var GameEvent_1 = require("../../common/config/GameEvent");
var SingletonModuleComp_1 = require("../../common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../../common/mgr/GameMgr");
var DataMgr_1 = require("../../mgr/DataMgr");
var DressData_1 = require("../../common/tableData/DressData");
var FurnitureData_1 = require("../../common/tableData/FurnitureData");
var GuideData_1 = require("../../common/tableData/GuideData");
var SignData_1 = require("../../common/tableData/SignData");
var SdkPlatform_1 = require("../../platform/SdkPlatform");
var DataObject_1 = require("../../tools/DataObject");
var GlobalConfig_1 = require("../../tools/GlobalConfig");
var HttpPost_1 = require("../../tools/HttpPost");
var AccountModelComp_1 = require("../model/AccountModelComp");
var RedDotMgr_1 = require("../../mgr/RedDotMgr");
var GameUIConfig_1 = require("../../common/config/GameUIConfig");
var cc_2 = require("cc");
/** 请求玩家游戏数据 */
var AccountNetDataComp = function () {
    var _classDecorators = [ECS_1.ecs.register('AccountNetData')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = ECS_1.ecs.Comp;
    var AccountNetDataComp = _classThis = /** @class */ (function (_super) {
        __extends(AccountNetDataComp_1, _super);
        function AccountNetDataComp_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AccountNetDataComp_1.prototype.reset = function () { };
        return AccountNetDataComp_1;
    }(_classSuper));
    __setFunctionName(_classThis, "AccountNetDataComp");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AccountNetDataComp = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AccountNetDataComp = _classThis;
}();
exports.AccountNetDataComp = AccountNetDataComp;
/** 请求玩家游戏数据 */
var AccountNetDataSystem = /** @class */ (function (_super) {
    __extends(AccountNetDataSystem, _super);
    function AccountNetDataSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountNetDataSystem.prototype.filter = function () {
        return ECS_1.ecs.allOf(AccountNetDataComp, AccountModelComp_1.AccountModelComp);
    };
    AccountNetDataSystem.prototype.entityEnter = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var onComplete, tryTimes, onFailed, success, error, useQA, res, useQA, res, pid, debug;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //服务器地址
                        Oops_1.oops.http.server = Oops_1.oops.config.game.httpServerQA;
                        //版本号
                        Oops_1.oops.http.addDefaultParam("ver", GlobalConfig_1.GlobalConfig.version);
                        //语言
                        Oops_1.oops.http.addDefaultParam("lang", Oops_1.oops.language.current);
                        onComplete = {
                            target: this,
                            callback: function (data) {
                                //xysdk上报角色信息
                                // let param = {
                                //     action: "enter",
                                //     roleId: data.user_id,
                                //     roleLevel: data.userGrade.grade,
                                //     roleName: data.role.nickName == "" ? data.user_id : data.role.nickName,
                                //     serverId: 1,
                                //     serverName: "1服",
                                //     partyName: "⽆",
                                //     timeLevelUp: "-1",
                                //     vip: 0,
                                //     extra: "-1",
                                //     timeCreate: oops.timer.getServerTime() + "",
                                //     balance: 0
                                // };
                                // if (e.AccountModel.isNewUser) {
                                //     param.action = "create";
                                //     param.timeCreate = e.AccountModel.registerTime + "";
                                // }
                                // smc.initialize.platform.reportRoleCreate(param);
                                // console.log("xysdk reportRoleCreate:", param);
                                //xysdk是否显示支付入口
                                // smc.initialize.platform.isShowPay().then((res: boolean) => {
                                //     console.log("platform check isShowPay", res);
                                //     let bol = Boolean(GlobalConfig.version == data.switch.switchIosAuditVer);
                                //     e.AccountModel.isShowPay = (res || !bol);
                                // });
                                var _a, _b, _c, _d;
                                //是否显示支付入口
                                e.AccountModel.isShowPay = Boolean(GlobalConfig_1.GlobalConfig.version != data.switch.switchIosAuditVer);
                                //===========================================
                                //角色数据
                                e.AccountModel.vm.nickName = data.role.nickName;
                                e.AccountModel.avatarUrl = data.role.avatarUrl;
                                if (e.AccountModel.avatarUrl != "") {
                                    //复原地址  @ => /
                                    e.AccountModel.avatarUrl = e.AccountModel.avatarUrl.replace(/@/g, "/");
                                }
                                e.AccountModel.vm.coin = data.role.coin;
                                e.AccountModel.vm.jewel = data.role.diamond;
                                e.AccountModel.guideStep = data.role.guideStatus;
                                GuideData_1.GuideData.getCurrentStep();
                                //首充状态
                                e.AccountModel.firstRecharge = data.firstRecharge;
                                //===========================================
                                //统计
                                e.AccountModel.loginDays = data.userStatistics.loginDays;
                                e.AccountModel.boxOpenTimes = data.userStatistics.boxOpenTimes;
                                e.AccountModel.coinsConsumeAmount = data.userStatistics.coinsConsumeAmount;
                                e.AccountModel.vm.adsTimes = data.userStatistics.adsTimes;
                                //===========================================
                                //天气
                                e.AccountModel.weatherId = data.weatherId;
                                //章节
                                e.AccountModel.chapter = data.role.chapter;
                                //评分
                                e.AccountModel.vm.furnitureScore = data.role.furnitureMark;
                                e.AccountModel.vm.dressBoyScore = data.role.dressMarkBoy;
                                e.AccountModel.vm.dressGirlScore = data.role.dressMarkGirl;
                                e.AccountModel.vm.dressScore = data.role.dressMarkBoy + data.role.dressMarkGirl;
                                //===========================================
                                //装扮
                                e.AccountModel.dressBoy = data.role.dress.boy;
                                e.AccountModel.dressGirl = data.role.dress.girl;
                                /**初始化背包分类和红点数据 */
                                DataManager_1.default.Instance.setGloalClassData();
                                //装扮总数量
                                e.AccountModel.dressTotalAmount = data.role.dressBackpack.length;
                                //装扮背包
                                for (var i = 0; i < data.role.dressBackpack.length; i++) {
                                    var element = data.role.dressBackpack[i];
                                    var item = new DataObject_1.DecorateOwnedData();
                                    var id = element.id;
                                    item.dressData = new DressData_1.DressData(id);
                                    item.lineupCount = element.lineupCount;
                                    item.leftAmount = element.leftAmount;
                                    item.isNew = DataMgr_1.DataMgr.getDecorateNewState(DataObject_1.DropType.Dress, id);
                                    var main = item.dressData.classify;
                                    var second = item.dressData.dressType;
                                    var value = (_a = e.AccountModel.dressOwnedData.get(main)) === null || _a === void 0 ? void 0 : _a.get(second);
                                    value === null || value === void 0 ? void 0 : value.push(item);
                                    var valueAll = (_b = e.AccountModel.dressOwnedData.get(main)) === null || _b === void 0 ? void 0 : _b.get(0);
                                    valueAll === null || valueAll === void 0 ? void 0 : valueAll.push(item);
                                    //装扮套装列表
                                    if (item.dressData.dressSuit > 0) {
                                        e.AccountModel.dressSuitList.push(id);
                                    }
                                }
                                //排序
                                Oops_1.oops.message.on(GameEvent_1.GameEvent.SortDress, _this.onHander, _this);
                                _this.onHander(GameEvent_1.GameEvent.SortDress, null);
                                //红点数据
                                RedDotMgr_1.RedDotMgr.getDressRedDot();
                                //家具总数量
                                e.AccountModel.furnitureTotalAmount = data.role.furnitureBackpack.length;
                                //家具摆放数据
                                e.AccountModel.furnitureCache = data.role.furniture;
                                //console.log(smc.account.AccountModel.furnitureOwnedData);
                                //家具背包
                                for (var i = 0; i < data.role.furnitureBackpack.length; i++) {
                                    var element = data.role.furnitureBackpack[i];
                                    var item = new DataObject_1.DecorateOwnedData();
                                    var id = element.id;
                                    item.furnitureData = new FurnitureData_1.FurnitureData(id);
                                    item.lineupCount = element.lineupCount;
                                    item.leftAmount = element.leftAmount;
                                    item.isNew = DataMgr_1.DataMgr.getDecorateNewState(DataObject_1.DropType.Furniture, id);
                                    //分类
                                    var main = item.furnitureData.valueType;
                                    var second = item.furnitureData.furnitureType;
                                    var value = (_c = e.AccountModel.furnitureOwnedData.get(main)) === null || _c === void 0 ? void 0 : _c.get(second);
                                    value === null || value === void 0 ? void 0 : value.push(item);
                                    var valueAll = (_d = e.AccountModel.furnitureOwnedData.get(main)) === null || _d === void 0 ? void 0 : _d.get(0);
                                    valueAll === null || valueAll === void 0 ? void 0 : valueAll.push(item);
                                    //家具套装列表
                                    if (item.furnitureData.furnitureSuit > 0) {
                                        e.AccountModel.furnitureSuitList.push(id);
                                    }
                                }
                                //排序
                                Oops_1.oops.message.on(GameEvent_1.GameEvent.SortFurniture, _this.onHander, _this);
                                _this.onHander(GameEvent_1.GameEvent.SortFurniture, null);
                                //红点数据
                                RedDotMgr_1.RedDotMgr.getFurnitureRedDot();
                                //===========================================
                                //离线
                                e.AccountModel.offlineData = new DataObject_1.OfflineData();
                                e.AccountModel.offlineData.isOpen = data.offline.isOpen;
                                e.AccountModel.offlineData.coin = data.offline.coin;
                                e.AccountModel.offlineData.coinAdvanced = data.offline.coinAdvanced;
                                e.AccountModel.offlineData.leaveTime = data.offline.leaveTime;
                                e.AccountModel.surveyOver = data.questionnaireIsFinish;
                                //===========================================
                                //玩家等级
                                e.AccountModel.vm.playerLevel = data.userGrade.grade;
                                //记录下当前等级
                                DataMgr_1.DataMgr.currLevel = data.userGrade.grade;
                                e.AccountModel.playerLevelExp = data.userGrade.empirical;
                                //===========================================
                                //任务
                                _this.onHander(GameEvent_1.GameEvent.UpdateTask, data.taskList);
                                Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateTask, _this.onHander, _this);
                                Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateDailyTask, _this.onHander, _this);
                                //===========================================
                                SignData_1.SignData.getAllData(); //根据stage分类
                                //===========================================
                                //等级礼包
                                _this.onHander(GameEvent_1.GameEvent.UpdateLevelGiftData, data.levelUpGift);
                                Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateLevelGiftData, _this.onHander, _this);
                                //===========================================
                                //开箱
                                e.AccountModel.vm.openBoxSpeed = data.role.openBoxSpeed; //加速券
                                e.AccountModel.vm.giveTimes = data.role.giveTimes; //赠送次数
                                e.AccountModel.superOpenCount = data.openBoxCount;
                                // e.AccountModel.vm.openBoxSpeed = data.role.openBoxSpeed;//加速券
                                e.AccountModel.noviceBox = data.noviceBox;
                                e.AccountModel.openBoxTime = data.openBoxTime;
                                e.AccountModel.todayOpenTimes = data.todayOpenTimes;
                                e.AccountModel.boxConfigKey = data.configKey;
                                e.AccountModel.boxFirstKey = data.boxConfigId;
                                //===========================================
                                //堆叠游戏
                                e.AccountModel.vm.tileGameLevel = data.miniGame.pass;
                                e.AccountModel.vm.prop1 = data.miniGame.revocation_prop;
                                e.AccountModel.vm.prop2 = data.miniGame.prompt_prop;
                                e.AccountModel.vm.prop3 = data.miniGame.shuffle_prop;
                                //场景互动
                                e.AccountModel.animalInteractCount = data.sceneInteract.animal_interact_count;
                                //房屋评级
                                e.AccountModel.houseRateData = new DataObject_1.HouseRateData();
                                e.AccountModel.houseRateData.isOpen = data.houseRate.isOpen;
                                e.AccountModel.houseRateData.houseRateConfigKey = data.houseRate.houseRateConfigKey;
                                e.AccountModel.houseRateData.taskConfigKey = data.houseRate.taskConfigKey;
                                e.AccountModel.houseRateData.isFull = data.houseRate.isFull;
                                //外出事件限制
                                if (data.goOutLimits)
                                    e.AccountModel.outEventOverArray = data.goOutLimits;
                                DataManager_1.default.Instance.setEventList(data.eventList);
                                //宠物基础数据
                                if (data.pet) {
                                    e.AccountModel.pet = data.pet.list;
                                    e.AccountModel.vm.petCoin = data.pet.petCoin;
                                }
                                //广告加速券个数
                                e.AccountModel.vm.noAdsTicket = data.role.advSpeed;
                                //超值礼包是否领取(夏日清凉)
                                e.AccountModel.videoReward = data.videoReward;
                                //挂机数据
                                e.AccountModel.hangData.offLineRewardAt = data.offline.offLineRewardAt;
                                e.AccountModel.hangData.offLineLimitTime = data.offline.offLineLimitTime;
                                e.AccountModel.hangData.multipleRewardCountMax = data.offline.multipleRewardCountMax;
                                e.AccountModel.hangData.multipleRewardCount = data.offline.multipleRewardCount;
                                e.AccountModel.hangData.isBuyAddLimitTime = data.offline.isBuyAddLimitTime;
                                e.AccountModel.hangData.offLineLimitAddBuffTime = data.offline.offLineLimitAddBuffTime;
                                e.AccountModel.hangData.minuteAddCoin = data.offline.minuteAddCoin;
                                //用户协议开关
                                e.AccountModel.switchAgreement = data.switch.switchAgreement;
                                if (data.redDot) {
                                    //主界面红点
                                    e.AccountModel.mainRed.new7DayRedDot = data.redDot.new7DayRedDot;
                                    e.AccountModel.mainRed.userTaskRedDot = data.redDot.userTaskRedDot;
                                    e.AccountModel.mainRed.userSignRedDot = data.redDot.userSignRedDot;
                                    e.AccountModel.mainRed.houseRateRedDot = data.redDot.houseRateRedDot;
                                    e.AccountModel.mainRed.cardRedDot = data.redDot.cardRedDot;
                                    e.AccountModel.mainRed.codexRedDot = data.redDot.codexRedDot;
                                    e.AccountModel.mainRed.hireRedDot = data.redDot.hireRedDot;
                                    e.AccountModel.mainRed.mailOrNoticeRedDot = data.redDot.mailOrNoticeRedDot;
                                    e.AccountModel.mainRed.petRedDot = data.redDot.petRedDot;
                                    e.AccountModel.mainRed.powerRedDot = data.redDot.powerRedDot;
                                    e.AccountModel.mainRed.passRedDot = data.redDot.powerRedDot;
                                    e.AccountModel.mainRed.weekActivityRedDot = data.redDot.weekActivityRedDot;
                                    e.AccountModel.mainRed.shoppingGift = data.redDot.shoppingGift;
                                    //开服活动是否开启
                                    e.AccountModel.openServerOpen = data.redDot.new7DayIsOpen;
                                    //周常活动是否已开启
                                    e.AccountModel.weekActivityIsOpen = data.redDot.weekActivityIsOpen;
                                    if (data.redDot.nationalDay) {
                                        //中秋国庆红点开启信息
                                        e.AccountModel.nationalDay.redDot = data.redDot.nationalDay.redDot;
                                        e.AccountModel.nationalDay.isOpen = data.redDot.nationalDay.isOpen;
                                        e.AccountModel.nationalDay.tagList = data.redDot.nationalDay.tagList;
                                        e.AccountModel.nationalDay.endTime = data.redDot.nationalDay.endTime;
                                    }
                                    if (data.redDot.festivalGift) {
                                        //中秋国庆礼包红点开启信息
                                        e.AccountModel.festivalGift.endTime = data.redDot.festivalGift.endTime;
                                        e.AccountModel.festivalGift.isOpen = data.redDot.festivalGift.isOpen;
                                    }
                                    //已领取免费开箱最大等级
                                    e.AccountModel.lvGift = data.role.lvGift;
                                    //限时礼包
                                    var dataOrders = data.redDot.timeLimitOrder;
                                    if (dataOrders) {
                                        for (var i = 0, len = dataOrders.length; i < len; i++) {
                                            var timeLimitOrder = new DataObject_1.TimeLimit();
                                            timeLimitOrder.id = dataOrders[i].id;
                                            timeLimitOrder.endTime = dataOrders[i].endTime;
                                            timeLimitOrder.adTimes = dataOrders[i].adTimes;
                                            timeLimitOrder.isTip = true;
                                            e.AccountModel.timeLimitOrder.set(dataOrders[i].id, timeLimitOrder);
                                        }
                                    }
                                }
                                //埋点
                                if (data.clue_token != "")
                                    e.AccountModel.clue_token = data.clue_token;
                                if (data.gdt_vid != "")
                                    e.AccountModel.gdt_vid = data.gdt_vid;
                                if (data.channel && data.channel != 0)
                                    SingletonModuleComp_1.smc.account.AccountModel.channel = data.channel;
                                //动作
                                data.rankingMove && (e.AccountModel.rankingMove.boy = data.rankingMove.boy);
                                data.rankingMoveIds && (e.AccountModel.rankingMoveIds = data.rankingMoveIds);
                                data.rankingMove && (e.AccountModel.rankingMove.girl = data.rankingMove.girl);
                                //只显示女主
                                GameMgr_1.GameMgr.Instance.justShowGilr = e.AccountModel.dressBoy.length == 0 ? true : false;
                                if (Oops_1.oops.timer.isSameDay(Oops_1.oops.storage.getJson("lastSaveTime", 0))) {
                                    Oops_1.oops.storage.remove("eventOnlineTime");
                                    Oops_1.oops.storage.set("lastSaveTime", Date.now());
                                }
                                e.AccountModel.eventOnlineTime = Oops_1.oops.storage.getJson("eventOnlineTime", 0);
                                // 玩家登录成功事件
                                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.LoginSuccess);
                                //微信用户信息更新
                                _this.getWxUserInfo();
                            }
                        };
                        tryTimes = 3;
                        onFailed = {
                            target: this,
                            callback: function (e) {
                                Oops_1.oops.log.logBusiness("login failed");
                                if (tryTimes > 0) {
                                    tryTimes--;
                                    // 请求登录游戏获取数据
                                    HttpPost_1.HttpPost.instance.login(onComplete.callback.bind(onComplete.target), onFailed.callback.bind(onFailed.target));
                                }
                                else {
                                    //网络异常
                                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Timeout, function () {
                                        tryTimes = 3;
                                        HttpPost_1.HttpPost.instance.login(onComplete.callback.bind(onComplete.target), onFailed.callback.bind(onFailed.target));
                                    });
                                }
                            }
                        };
                        success = function (data) {
                            // token
                            e.AccountModel.token = data.token;
                            //role
                            if (data.openid) {
                                e.AccountModel.openId = data.openid;
                                Oops_1.oops.http.addDefaultParam("pid", data.openid);
                                Oops_1.oops.storage.set("pid", data.openid);
                            }
                            if (data.user_id) {
                                e.AccountModel.userId = data.user_id;
                                e.AccountModel.vm.userId = "ID:" + data.user_id;
                                Oops_1.oops.http.addDefaultParam("user_id", data.user_id);
                                _this.setLocalStorage(data.user_id);
                                //加载音频
                                Oops_1.oops.audio.load();
                                //ta login
                                SdkPlatform_1.SdkPlatform.login(data.user_id.toString());
                                //fps
                                GlobalConfig_1.GlobalConfig.frameRate = Oops_1.oops.storage.getNumber(DataObject_1.StorageType.HighFps, 30);
                                cc_2.game.frameRate = GlobalConfig_1.GlobalConfig.frameRate;
                            }
                            e.AccountModel.registerTime = data.register_time;
                            if (data.novice == 1) {
                                e.AccountModel.isNewUser = true;
                                SdkPlatform_1.SdkPlatform.Tracking(data.openid);
                                SdkPlatform_1.SdkPlatform.TrackingInitByteDance(data.openid);
                                //ta public
                                SdkPlatform_1.SdkPlatform.setSuperProperties();
                            }
                            SingletonModuleComp_1.smc.account.tryLoginTimes = 3;
                            // let day = new Date(smc.account.AccountModel.registerTime * 1000);
                            // console.log(day);
                            // day.setDate(day.getDate() + 1);
                            // console.log(day.getDate());
                            // let now = new Date(oops.timer.getServerTime())
                            // if (day.getDate() == now.getDate()) {
                            //     SdkPlatform.TrackingScentedByteDance();
                            // }
                            // 请求登录游戏获取数据
                            HttpPost_1.HttpPost.instance.login(onComplete.callback.bind(onComplete.target), onFailed.callback.bind(onFailed.target));
                        };
                        error = function (e) {
                            if (e.code == -98888) {
                                //维护中
                                var maintainContent = e.data;
                                Oops_1.oops.gui.open(GameUIConfig_1.UIID.MainTenance, maintainContent);
                            }
                            else {
                                SingletonModuleComp_1.smc.account.connect();
                            }
                        };
                        if (!(cc_1.sys.platform === cc_1.sys.Platform.WECHAT_GAME)) return [3 /*break*/, 2];
                        //微信
                        Oops_1.oops.http.addDefaultParam("platform", GlobalConfig_1.GlobalConfig.platformWeChat);
                        useQA = cc_1.sys.localStorage.getItem(DataObject_1.StorageType.UseQA);
                        console.log("useQA:", useQA);
                        if (useQA == "1") {
                            Oops_1.oops.http.server = Oops_1.oops.config.game.httpServerQA;
                        }
                        else if (useQA == "2") {
                            Oops_1.oops.http.server = Oops_1.oops.config.game.httpServerQAPre;
                        }
                        else if (useQA == "3") {
                            Oops_1.oops.http.server = Oops_1.oops.config.game.httpServerPre;
                        }
                        else {
                            Oops_1.oops.http.server = Oops_1.oops.config.game.httpServer;
                        }
                        //获取登录code
                        Oops_1.oops.log.logBusiness("getLoginCode");
                        console.log("http", Oops_1.oops.http.server);
                        return [4 /*yield*/, SingletonModuleComp_1.smc.initialize.platform.getLoginCode()];
                    case 1:
                        res = _a.sent();
                        console.log("预登录", res);
                        if (res) {
                            // let access_token = res.data.access_token;
                            //预登录
                            HttpPost_1.HttpPost.instance.preLogin(res.code, success, error);
                        }
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(cc_1.sys.platform == cc_1.sys.Platform.BYTEDANCE_MINI_GAME)) return [3 /*break*/, 4];
                        //字节跳动
                        Oops_1.oops.http.addDefaultParam("platform", GlobalConfig_1.GlobalConfig.platformByteDance);
                        useQA = cc_1.sys.localStorage.getItem(DataObject_1.StorageType.UseQA);
                        console.log("useQA:", useQA);
                        Oops_1.oops.http.server = Oops_1.oops.config.game.httpServerByte;
                        //获取登录code
                        Oops_1.oops.log.logBusiness("getLoginCode");
                        console.log("http", Oops_1.oops.http.server);
                        return [4 /*yield*/, SingletonModuleComp_1.smc.initialize.platform.getLoginCode()];
                    case 3:
                        res = _a.sent();
                        console.log("预登录", res);
                        if (res) {
                            // let access_token = res.data.access_token;
                            //预登录
                            HttpPost_1.HttpPost.instance.preLogin(res.code, success, error);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        if (cc_1.sys.platform === cc_1.sys.Platform.ANDROID) {
                            Oops_1.oops.http.addDefaultParam("platform", GlobalConfig_1.GlobalConfig.platformWeAndroid);
                            pid = Oops_1.oops.storage.get("pid");
                            if (pid) {
                                Oops_1.oops.http.addDefaultParam("pid", pid);
                            }
                            Oops_1.oops.http.server = Oops_1.oops.config.game.httpServerQA;
                            HttpPost_1.HttpPost.instance.preLogin("", success, error);
                        }
                        else {
                            Oops_1.oops.http.addDefaultParam("platform", GlobalConfig_1.GlobalConfig.platformWeAndroid);
                            if (Oops_1.oops.config.query.data.openId) {
                                Oops_1.oops.http.addDefaultParam("pid", Oops_1.oops.config.query.data.openId);
                            }
                            else {
                                Oops_1.oops.http.addDefaultParam("pid", '1602');
                            }
                            debug = "false";
                            if (Oops_1.oops.config.query.data.debug) {
                                debug = Oops_1.oops.config.query.data.debug;
                            }
                            if (debug == "true") {
                                Oops_1.oops.http.server = Oops_1.oops.config.game.httpServerQA;
                            }
                            else {
                                Oops_1.oops.http.server = Oops_1.oops.config.game.httpServer;
                            }
                            HttpPost_1.HttpPost.instance.preLogin("", success, error);
                        }
                        _a.label = 5;
                    case 5:
                        Oops_1.oops.log.trace("domain:" + Oops_1.oops.http.server + " ver:" + GlobalConfig_1.GlobalConfig.version);
                        e.remove(AccountNetDataComp);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 更新任务
     * @param taskList
     */
    AccountNetDataSystem.prototype.onHander = function (event, args) {
        switch (event) {
            case GameEvent_1.GameEvent.UpdateTask:
                var taskList = args;
                //主线任务
                var completed = taskList.mainline.status == 2;
                SingletonModuleComp_1.smc.account.AccountModel.isMainTaskCompleted = completed;
                if (completed) {
                    //已完成
                    SingletonModuleComp_1.smc.account.AccountModel.mainTaskData = null;
                }
                else {
                    if (!SingletonModuleComp_1.smc.account.AccountModel.mainTaskData) {
                        SingletonModuleComp_1.smc.account.AccountModel.mainTaskData = new DataObject_1.TaskListData();
                    }
                    SingletonModuleComp_1.smc.account.AccountModel.mainTaskData.taskId = taskList.mainline.detail.taskId;
                    SingletonModuleComp_1.smc.account.AccountModel.mainTaskData.completed = taskList.mainline.detail.completed;
                    SingletonModuleComp_1.smc.account.AccountModel.mainTaskData.isGetReward = taskList.mainline.detail.isGetReward;
                }
                //每日任务红点
                SingletonModuleComp_1.smc.account.AccountModel.isDailyTaskReward = taskList.redDot == 1;
                break;
            case GameEvent_1.GameEvent.UpdateDailyTask:
                var dailyTask = args;
                //每日任务
                SingletonModuleComp_1.smc.account.AccountModel.dailyTaskData = [];
                for (var i = 0; i < dailyTask.daily.length; i++) {
                    var element = dailyTask.daily[i];
                    var dailyData = new DataObject_1.TaskListData();
                    dailyData.taskId = element.taskId;
                    dailyData.completed = element.completed;
                    dailyData.isGetReward = element.isGetReward;
                    SingletonModuleComp_1.smc.account.AccountModel.dailyTaskData.push(dailyData);
                }
                break;
            case GameEvent_1.GameEvent.UpdateLevelGiftData:
                var levelGift = args;
                //等级礼包
                SingletonModuleComp_1.smc.account.AccountModel.levelGiftList = [];
                if (levelGift) {
                    SingletonModuleComp_1.smc.account.AccountModel.levelGiftUngetCount = 0;
                    //有礼包
                    for (var i = 0; i < levelGift.length; i++) {
                        var element = levelGift[i];
                        var giftListData = new DataObject_1.LevelGiftListData();
                        giftListData.level = element.level;
                        giftListData.cost = element.countDiamond;
                        giftListData.giftData = [];
                        for (var j = 0; j < element.list.length; j++) {
                            var item = element.list[j];
                            var giftData = new DataObject_1.LevelGiftData();
                            giftData.dropData = item.prop;
                            giftData.unget = item.status == 0; //0未领取  1已领取
                            giftListData.giftData.push(giftData);
                            if (item.status == 0) {
                                SingletonModuleComp_1.smc.account.AccountModel.levelGiftUngetCount++;
                            }
                        }
                        SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.push(giftListData);
                    }
                }
                break;
            case GameEvent_1.GameEvent.SortDress:
                //装扮背包排序
                for (var _i = 0, _a = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData; _i < _a.length; _i++) {
                    var _b = _a[_i], key = _b[0], value = _b[1];
                    for (var _c = 0, value_1 = value; _c < value_1.length; _c++) {
                        var _d = value_1[_c], key1 = _d[0], value1 = _d[1];
                        value1.sort(DataMgr_1.DataMgr.dressSortFunc);
                    }
                }
                break;
            case GameEvent_1.GameEvent.SortFurniture:
                //家具背包排序
                for (var _e = 0, _f = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData; _e < _f.length; _e++) {
                    var _g = _f[_e], key = _g[0], value = _g[1];
                    for (var _h = 0, value_2 = value; _h < value_2.length; _h++) {
                        var _j = value_2[_h], key1 = _j[0], value1 = _j[1];
                        value1.sort(DataMgr_1.DataMgr.furnitureSortFunc);
                    }
                }
                break;
            default:
                break;
        }
    };
    /**
     * 微信用户信息
     */
    AccountNetDataSystem.prototype.getWxUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, nickname;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SingletonModuleComp_1.smc.account.AccountModel.wxInfoReject = Oops_1.oops.storage.getNumber(DataObject_1.StorageType.WxInfoReject, 0) == 1;
                        if (!(cc_1.sys.platform === cc_1.sys.Platform.WECHAT_GAME && !SingletonModuleComp_1.smc.account.AccountModel.wxInfoReject && SingletonModuleComp_1.smc.account.AccountModel.avatarUrl != "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, SingletonModuleComp_1.smc.initialize.platform.getUserInfo(true)];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            Oops_1.oops.log.logBusiness("登录获取wx用户信息:" + data.userInfo);
                            SingletonModuleComp_1.smc.account.AccountModel.avatarUrl = data.userInfo["avatarUrl"];
                            nickname = StringUtil_1.StringUtil.cleanString(data.userInfo["nickName"]);
                            SingletonModuleComp_1.smc.account.AccountModel.vm.nickName = nickname;
                            console.log("avatarUrl", SingletonModuleComp_1.smc.account.AccountModel.avatarUrl);
                            //存服务端
                            HttpPost_1.HttpPost.instance.updateUserInfo(SingletonModuleComp_1.smc.account.AccountModel.avatarUrl, SingletonModuleComp_1.smc.account.AccountModel.vm.nickName);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /** 设置本地存储的用户标识 */
    AccountNetDataSystem.prototype.setLocalStorage = function (uid) {
        Oops_1.oops.storage.setUser(uid.toString());
        Oops_1.oops.storage.set("account", uid);
    };
    return AccountNetDataSystem;
}(ECS_1.ecs.ComblockSystem));
exports.AccountNetDataSystem = AccountNetDataSystem;
