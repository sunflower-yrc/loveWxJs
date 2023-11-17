"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataMgr = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var JsonUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var DataManager_1 = require("../../Global/DataManager");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../common/mgr/GameMgr");
var Tabledress_1 = require("../common/table/Tabledress");
var Tablefurniture_1 = require("../common/table/Tablefurniture");
var DressData_1 = require("../common/tableData/DressData");
var FurnitureData_1 = require("../common/tableData/FurnitureData");
var TriggerData_1 = require("../common/tableData/TriggerData");
var TypeGlobalData_1 = require("../common/tableData/TypeGlobalData");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var LimitMgr_1 = require("./LimitMgr");
var recycleMgr_1 = require("../recycle/recycleMgr");
/**
 * 数据处理
 */
var DataMgr = /** @class */ (function () {
    function DataMgr() {
    }
    /**
     * 微信获取用户信息
     * @param uiid
     */
    DataMgr.getUserInfo = function (uiid) {
        return __awaiter(this, void 0, void 0, function () {
            var data, nickname;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(SingletonModuleComp_1.smc.account.AccountModel.avatarUrl != "")) return [3 /*break*/, 1];
                        //有值  显示
                        Oops_1.oops.log.logBusiness("用户信息: avatar_url ", SingletonModuleComp_1.smc.account.AccountModel.avatarUrl);
                        if (uiid == GameUIConfig_1.UIID.Settings) {
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Settings);
                        }
                        else if (uiid == GameUIConfig_1.UIID.Rank) {
                            HttpPost_1.HttpPost.instance.getRankingDetail(1, function (data) {
                                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Rank, data);
                            });
                        }
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, SingletonModuleComp_1.smc.initialize.platform.getUserInfo(false)];
                    case 2:
                        data = _a.sent();
                        if (data) {
                            Oops_1.oops.log.logBusiness("用户信息:" + data.userInfo);
                            SingletonModuleComp_1.smc.account.AccountModel.avatarUrl = data.userInfo["avatarUrl"];
                            nickname = StringUtil_1.StringUtil.cleanString(data.userInfo["nickName"]);
                            Oops_1.oops.log.logBusiness(data.userInfo["nickName"] + " => " + nickname);
                            SingletonModuleComp_1.smc.account.AccountModel.vm.nickName = nickname;
                            if (uiid == GameUIConfig_1.UIID.Settings) {
                                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Settings);
                            }
                            else if (uiid == GameUIConfig_1.UIID.Rank) {
                                HttpPost_1.HttpPost.instance.getRankingDetail(1, function (data) {
                                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Rank, data);
                                });
                            }
                            console.log("avatarUrl", SingletonModuleComp_1.smc.account.AccountModel.avatarUrl);
                            //存服务端
                            HttpPost_1.HttpPost.instance.updateUserInfo(SingletonModuleComp_1.smc.account.AccountModel.avatarUrl, SingletonModuleComp_1.smc.account.AccountModel.vm.nickName);
                        }
                        else {
                            //没拿到权限 直接展示
                            Oops_1.oops.log.logBusiness("用户信息: wxInfoReject true");
                            SingletonModuleComp_1.smc.account.AccountModel.wxInfoReject = true;
                            Oops_1.oops.storage.set(DataObject_1.StorageType.WxInfoReject, 1);
                            if (uiid == GameUIConfig_1.UIID.Settings) {
                                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Settings);
                            }
                            else if (uiid == GameUIConfig_1.UIID.Rank) {
                                HttpPost_1.HttpPost.instance.getRankingDetail(1, function (data) {
                                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Rank, data);
                                });
                            }
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 屏幕中心点
     * @returns
     */
    DataMgr.getScreenCenter = function () {
        if (this.screenCenter == cc_1.Vec2.ZERO) {
            var sceenSize = cc_1.view.getDesignResolutionSize();
            var screenWidth = sceenSize.width;
            var screenHeight = sceenSize.height;
            this.screenCenter = new cc_1.Vec2(screenWidth / 2, screenHeight / 2);
        }
        return this.screenCenter;
    };
    /**
     * 更新用户信息 并刷新界面显示
     * @param userGrade 玩家等级
     * @param levelUpGift 等级礼包
     * @param taskList 任务
     */
    DataMgr.updateUserData = function (userGrade, levelUpGift, taskList) {
        if (userGrade) {
            //玩家等级相关
            if (userGrade.grade > SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel) {
                //打点
                SdkPlatform_1.SdkPlatform.levelup(userGrade.grade);
                //升级了
                SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel = userGrade.grade;
                //功能开启检查
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.HomeFuncOpen, DataObject_1.FunctionCheckType.PlayerLevelup);
            }
            SingletonModuleComp_1.smc.account.AccountModel.playerLevelExp = userGrade.empirical;
            //刷新主页等级
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowLevel);
        }
        if (levelUpGift) {
            //等级礼包数据更新
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateLevelGiftData, levelUpGift);
            //刷新主页等级礼包
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowLevelGift);
            //是否需要自动弹出等级礼包
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.AutoOpenLevelGift);
        }
        if (taskList) {
            //任务数据更新
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateTask, taskList);
            //刷新主页任务
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateHomeTask);
        }
    };
    /**
     * 检查装饰物的数据是否正确
     */
    DataMgr.checkDataValidation = function () {
        var _a, _b;
        var table = JsonUtil_1.JsonUtil.get(Tablefurniture_1.Tablefurniture.TableName);
        for (var key in table) {
            var element = table[key];
            if (TypeGlobalData_1.TypeGlobalData.allData.has(element.valueType)) {
                if (((_a = TypeGlobalData_1.TypeGlobalData.allData.get(element.valueType)) === null || _a === void 0 ? void 0 : _a.indexOf(element.furnitureType.toString())) < 0) {
                    console.error("0家具数据错误，错误的id是：", key);
                }
            }
            else {
                console.error("1家具数据错误，错误的id是：", key);
            }
        }
        console.log("家具数据检查完毕！");
        var table1 = JsonUtil_1.JsonUtil.get(Tabledress_1.Tabledress.TableName);
        for (var key in table1) {
            var element = table1[key];
            if (TypeGlobalData_1.TypeGlobalData.allData.has(element.classify)) {
                if (((_b = TypeGlobalData_1.TypeGlobalData.allData.get(element.classify)) === null || _b === void 0 ? void 0 : _b.indexOf(element.dressType.toString())) < 0) {
                    console.error("0服装数据错误，错误的id是：", key);
                }
            }
            else {
                console.error("1服装数据错误，错误的id是：", key);
            }
        }
        console.log("服装数据检查完毕！");
    };
    /**
     * 获取装饰物是否新获得状态
     * @param type
     * @param id
     * @returns
     */
    DataMgr.getDecorateNewState = function (type, id) {
        var result = 0;
        if (type == DataObject_1.DropType.Furniture) {
            result = Oops_1.oops.storage.getNumber(DataObject_1.StorageType.NewFurniture + id, 0);
        }
        else {
            result = Oops_1.oops.storage.getNumber(DataObject_1.StorageType.NewDress + id, 0);
        }
        return result;
    };
    /**
     * 设置装饰物是否新获得状态
     * @param type
     * @param id
     */
    DataMgr.setDecorateNewState = function (type, id, value) {
        var key = "";
        if (type == DataObject_1.DropType.Furniture) {
            key = DataObject_1.StorageType.NewFurniture + id;
        }
        else {
            key = DataObject_1.StorageType.NewDress + id;
        }
        var status = Oops_1.oops.storage.getNumber(key, 0);
        if ((status == 1 && !value) || (status != 1 && value)) {
            var v = value ? 1 : 0;
            Oops_1.oops.storage.set(key, v);
        }
    };
    /**
     * 家具背包排序  新获得＞品质＞id
     * @param a
     * @param b
     * @returns
     */
    DataMgr.furnitureSortFunc = function (a, b) {
        if (a.isNew !== b.isNew) {
            return b.isNew - a.isNew; // isNew 越大越靠前
        }
        else if (a.furnitureData.grade !== b.furnitureData.grade) {
            return b.furnitureData.grade - a.furnitureData.grade; // grade 越大越靠前
        }
        else {
            return a.furnitureData.id - b.furnitureData.id; // id 越小越靠前
        }
    };
    /**
     * 装扮背包排序  新获得＞品质＞id
     * @param a
     * @param b
     * @returns
     */
    DataMgr.dressSortFunc = function (a, b) {
        if (a.isNew !== b.isNew) {
            return b.isNew - a.isNew; // isNew 越大越靠前
        }
        else if (a.dressData.grade !== b.dressData.grade) {
            return b.dressData.grade - a.dressData.grade; // grade 越大越靠前
        }
        else {
            return a.dressData.id - b.dressData.id; // id 越小越靠前
        }
    };
    /**
     * 获取第一个未领奖的每日任务
     * @returns
     */
    DataMgr.getHomeDailyTask = function () {
        for (var i = 0; i < SingletonModuleComp_1.smc.account.AccountModel.dailyTaskData.length; i++) {
            var element = SingletonModuleComp_1.smc.account.AccountModel.dailyTaskData[i];
            if (element.isGetReward == 1 || element.isGetReward == 2) {
                //未领取
                return element;
            }
        }
        return null;
    };
    /**
     * 是否可以替换当前位置的装饰
     * @returns
     */
    DataMgr.isDressable = function (currDress, selectedData) {
        var result = false;
        var pos = selectedData.dressType - 1;
        if (currDress[pos] != selectedData.id) {
            result = true;
        }
        return result;
    };
    /**
     * 掉落类型的名称
     * @param dropType
     */
    DataMgr.getDropItemName = function (dropType) {
        var result = "";
        switch (dropType) {
            case DataObject_1.DropType.Coins:
                result = Oops_1.oops.language.getLangByID("common.coins");
                break;
            case DataObject_1.DropType.BoxTimes:
                result = Oops_1.oops.language.getLangByID("common.boxTimes");
                break;
            case DataObject_1.DropType.Exp:
                result = Oops_1.oops.language.getLangByID("common.exp");
                break;
            case DataObject_1.DropType.RandomSuit:
                result = Oops_1.oops.language.getLangByID("common.randomSuit");
                break;
            case DataObject_1.DropType.Power:
                result = Oops_1.oops.language.getLangByID("common.power");
                break;
            case DataObject_1.DropType.Jewel:
                result = Oops_1.oops.language.getLangByID("common.jewel");
                break;
            case DataObject_1.DropType.NoAdsTicket:
                result = Oops_1.oops.language.getLangByID("common.noAdsTicket");
                break;
            case DataObject_1.DropType.BoxSpeedupTicket:
                result = Oops_1.oops.language.getLangByID("common.boxSpeedupTicket");
                break;
            case DataObject_1.DropType.Prompt:
                result = Oops_1.oops.language.getLangByID("common.prompt");
                break;
            case DataObject_1.DropType.Flip:
                result = Oops_1.oops.language.getLangByID("common.flip");
                break;
            case DataObject_1.DropType.Cancel:
                result = Oops_1.oops.language.getLangByID("common.revoke");
                break;
            case DataObject_1.DropType.PassExp:
                result = Oops_1.oops.language.getLangByID("common.passExp");
                break;
            default:
                break;
        }
        return result;
    };
    /**
     * 跳转
     * @param 1-1-0
     */
    DataMgr.gotoFunction = function (UIIDS, typeData) {
        var _this = this;
        if (typeData == "0") {
            //无跳转
            return;
        }
        //跳转到新界面
        var data = StringUtil_1.StringUtil.stringToArray5(typeData);
        var type = parseInt(data[0]);
        // if (type == 18) {
        //     oops.gui.toast(oops.language.getLangByID("common.waitNew"));
        //     return;
        // }
        //关闭之前打开的页面
        if (UIIDS) {
            for (var _i = 0, UIIDS_1 = UIIDS; _i < UIIDS_1.length; _i++) {
                var i = UIIDS_1[_i];
                if (Oops_1.oops.gui.has(i)) {
                    Oops_1.oops.gui.remove(i);
                }
            }
        }
        switch (type) {
            case DataObject_1.GotoType.DecorateFurniture:
                //家具装饰
                if (Oops_1.oops.gui.has(GameUIConfig_1.UIID.TileGameHome)) {
                    //打开的小游戏界面，点开了商城，购买之后开始装饰
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.TileGameHome);
                }
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Furniture, { "type": DataObject_1.DecorateType.Furniture, "toggleMainType": parseInt(data[1]), "toggleSubType": parseInt(data[2]) });
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.HideHomeUI);
                break;
            case DataObject_1.GotoType.DecorateDress:
                //服装装饰
                if (Oops_1.oops.gui.has(GameUIConfig_1.UIID.TileGameHome)) {
                    //打开的小游戏界面，点开了商城，购买之后开始装饰
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.TileGameHome);
                }
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Dress, { "type": DataObject_1.DecorateType.Dress, "toggleMainType": parseInt(data[1]), "toggleSubType": parseInt(data[2]) });
                break;
            case DataObject_1.GotoType.MainBox:
                //开箱
                if (GameMgr_1.GameMgr.Instance.manorMode) {
                    DataManager_1.default.Instance.goToFuncData = [UIIDS, typeData];
                    //调用返回庄园返回的接口
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ManorBack);
                }
                else {
                    GameMgr_1.GameMgr.Instance.mapManager.moveToCar();
                }
                break;
            case DataObject_1.GotoType.TileGame:
                if (GameMgr_1.GameMgr.Instance.manorMode) {
                    DataManager_1.default.Instance.goToFuncData = [UIIDS, typeData];
                    //调用返回庄园返回的接口
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ManorBack);
                }
                else {
                    //小游戏
                    var tileGameSubType = parseInt(data[1]);
                    if (tileGameSubType == 1) {
                        //定位到游戏机
                        GameMgr_1.GameMgr.Instance.mapManager.moveToMiniGame();
                    }
                    else if (tileGameSubType == 2) {
                        //打开小游戏主界面
                        HttpPost_1.HttpPost.instance.getMiniGame(function (data) {
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.TileGameHome, data);
                        });
                    }
                }
                break;
            case DataObject_1.GotoType.Store:
                //商城
                var storeSubType = parseInt(data[1]);
                if (storeSubType == DataObject_1.StoreBuyType.Suit) {
                    //套装
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.StoreSuit);
                }
                else {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Store, { "storeType": storeSubType });
                }
                break;
            case DataObject_1.GotoType.Chapter:
                //玩家等级
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Chapter);
                break;
            case DataObject_1.GotoType.PhotoCards:
                var param = parseInt(data[1]);
                if (param == 0)
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Album);
                else if (param == 1)
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.PhotoRecord, 1);
                else if (param == 2)
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.PhotoRecord, 2);
                else
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.PhotoRecord, 3);
                break;
            case DataObject_1.GotoType.PhotoView:
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Shoot);
                break;
            case DataObject_1.GotoType.Task:
                //任务
                var taskSubType = parseInt(data[1]);
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Task, { "type": taskSubType }); //1 每日任务  2 主线任务
                break;
            case DataObject_1.GotoType.Outside:
                if (GameMgr_1.GameMgr.Instance.manorMode) {
                    DataManager_1.default.Instance.goToFuncData = [UIIDS, typeData];
                    //调用返回庄园返回的接口
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ManorBack);
                }
                else {
                    var outsideSceneId = parseInt(data[1]);
                    if (TriggerData_1.TriggerData.getTriggerByEventId(outsideSceneId).length == 0 || TriggerData_1.TriggerData.getTriggerByEventId(outsideSceneId)[0].eventStatus != 1) {
                        Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("outside.noOpen"));
                        return;
                    }
                    if (!GameMgr_1.GameMgr.Instance.readyGoto) {
                        DataManager_1.default.Instance.getUserOutSideFurniture(TriggerData_1.TriggerData.getTriggerByEventId(outsideSceneId)[0].eventData);
                        return;
                    }
                    if (!(UIIDS.length > 0)) {
                        UIIDS = [GameUIConfig_1.UIID.Task];
                    }
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.LoadingIn);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpUserChapter, outsideSceneId);
                }
                break;
            case DataObject_1.GotoType.Pet:
                var panelType = parseInt(data[1]);
                var limitConditionData = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Pet);
                if (!limitConditionData.satisfied) {
                    //功能未开启
                    Oops_1.oops.gui.toast(limitConditionData.unSatisfiedDesc);
                    return;
                }
                if (panelType == 0) {
                    if (SingletonModuleComp_1.smc.account.AccountModel.pet.length <= 0) {
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetChoose);
                    }
                    else {
                        HttpPost_1.HttpPost.instance.petList(function (data) {
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetMain, data);
                        });
                    }
                }
                else if (panelType == 1) {
                    HttpPost_1.HttpPost.instance.petApplianceList(function (data) {
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetHome, data);
                    });
                }
                else if (panelType == 2) {
                    HttpPost_1.HttpPost.instance.petCollectList(1, function (data) {
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetLibrary, data);
                    });
                }
                break;
            case DataObject_1.GotoType.Recycle:
                if (GameMgr_1.GameMgr.Instance.manorMode) {
                    DataManager_1.default.Instance.goToFuncData = [UIIDS, typeData];
                    //调用返回庄园返回的接口
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ManorBack);
                }
                else {
                    if (Number(data[2]) == 0) {
                        if (DataMgr.jumpRecycle(70001)) {
                            recycleMgr_1.RecycleMgr.Instance.eventId = parseInt(SingletonModuleComp_1.smc.account.AccountModel.eventList.get(Number(70001)).eventId);
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Recycle, 1);
                        }
                        else if (DataMgr.jumpRecycle(70002)) {
                            recycleMgr_1.RecycleMgr.Instance.eventId = parseInt(SingletonModuleComp_1.smc.account.AccountModel.eventList.get(Number(70002)).eventId);
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Recycle, 2);
                        }
                        else if (DataMgr.jumpRecycle(70011)) {
                            recycleMgr_1.RecycleMgr.Instance.eventId = parseInt(SingletonModuleComp_1.smc.account.AccountModel.eventList.get(Number(70011)).eventId);
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Recycle, 1);
                        }
                        else if (DataMgr.jumpRecycle(70012)) {
                            recycleMgr_1.RecycleMgr.Instance.eventId = parseInt(SingletonModuleComp_1.smc.account.AccountModel.eventList.get(Number(70012)).eventId);
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Recycle, 2);
                        }
                        else {
                            Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("recycle.openTime"));
                            return;
                        }
                    }
                    else {
                        var trigger = SingletonModuleComp_1.smc.account.AccountModel.eventList.get(Number(data[2]));
                        if (!DataMgr.jumpRecycle(Number(data[2])) || (trigger === null || trigger === void 0 ? void 0 : trigger.eventStatus) != 1) {
                            Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("recycle.openTime"));
                            return;
                        }
                        recycleMgr_1.RecycleMgr.Instance.eventId = parseInt(trigger.eventId);
                        var recycleType = parseInt(data[1]);
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.Recycle, recycleType);
                    }
                }
                break;
            case DataObject_1.GotoType.BusinessEventDress:
                //请求
                if (GameMgr_1.GameMgr.Instance.manorMode) {
                    DataManager_1.default.Instance.goToFuncData = [UIIDS, typeData];
                    //调用返回庄园返回的接口
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ManorBack);
                }
                else {
                    HttpPost_1.HttpPost.instance.getMerchantDetail(5001, function (data) {
                        data.type = 2;
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.BusinessEvent, data);
                    });
                }
                break;
            case DataObject_1.GotoType.BusinessEventFurniture:
                if (GameMgr_1.GameMgr.Instance.manorMode) {
                    DataManager_1.default.Instance.goToFuncData = [UIIDS, typeData];
                    //调用返回庄园返回的接口
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ManorBack);
                }
                else {
                    //请求
                    HttpPost_1.HttpPost.instance.getMerchantDetail(6001, function (data) {
                        data.type = 1;
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.BusinessEvent, data);
                    });
                }
                break;
            case DataObject_1.GotoType.Offline:
                //请求
                var dataHang = SingletonModuleComp_1.smc.account.AccountModel.hangData;
                var curTime = Oops_1.oops.timer.getServerTime();
                var curShenTime = curTime - dataHang.offLineRewardAt;
                if (curShenTime < 60) {
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("offline.wait"));
                }
                else {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Offline, SingletonModuleComp_1.smc.account.AccountModel.hangData);
                }
                break;
            case DataObject_1.GotoType.PrivilegeCard:
                //请求
                var funcOpenPrivilegeCard = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.PrivilegeCard).satisfied;
                if (funcOpenPrivilegeCard) {
                    HttpPost_1.HttpPost.instance.getCardDetail(function (data) {
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.PrivilegeCard, data);
                    });
                }
                else {
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("choseRoom.lock"));
                }
                break;
            case DataObject_1.GotoType.Manor:
                var funcOpen = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Manor);
                if (funcOpen.satisfied) {
                    var jumpType = parseInt(data[1]);
                    if (GameMgr_1.GameMgr.Instance.manorMode) {
                        if (jumpType == 1) //打开种植界面
                         {
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorSeed, { "aimPlotId": 0 });
                        }
                        else if (jumpType == 2) //告示板界面
                         {
                            HttpPost_1.HttpPost.instance.broadcast(1, function (data) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorDealPop, data);
                                    return [2 /*return*/];
                                });
                            }); });
                        }
                        else if (jumpType == 3) //庄园升级界面
                         {
                            HttpPost_1.HttpPost.instance.manorDetail(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorLevel, data);
                                    return [2 /*return*/];
                                });
                            }); });
                        }
                        else if (jumpType == 4) //种子商店界面
                         {
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorSeedShop);
                        }
                    }
                    else {
                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ManorGo);
                        DataManager_1.default.Instance.goToFuncData = [UIIDS, typeData];
                    }
                }
                else {
                    Oops_1.oops.gui.toast(funcOpen.unSatisfiedDesc);
                    return;
                }
                break;
            default:
                break;
        }
    };
    DataMgr.jumpRecycle = function (eventId) {
        var trigger = SingletonModuleComp_1.smc.account.AccountModel.eventList.get(eventId);
        if (!trigger) {
            return false;
        }
        var countTime = (trigger.eventData.eventTime + trigger.startTime) - Math.ceil(Date.now() / 1000);
        if (countTime <= 0) {
            return false;
        }
        return true;
    };
    /**
     * 打开明细
     * @param specifyUIID 指定打开的界面
     */
    DataMgr.OpenItemDetails = function (itemDetailsData, specifyUIID) {
        if (specifyUIID) {
            //直接跳转
            this.currDetailsUIID = specifyUIID;
            if (!Oops_1.oops.gui.has(specifyUIID))
                Oops_1.oops.gui.open(specifyUIID, itemDetailsData);
        }
        else {
            //判断条件来跳转
            if (itemDetailsData.dropData.type == DataObject_1.DropType.Furniture) {
                var furniture = new FurnitureData_1.FurnitureData(itemDetailsData.dropData.dropId);
                if (furniture.furnitureSuit > 0) {
                    //套装
                    this.currDetailsUIID = GameUIConfig_1.UIID.ItemDetailsSuit;
                }
                else {
                    //普通
                    this.currDetailsUIID = GameUIConfig_1.UIID.ItemDetailsDecorate;
                }
            }
            else if (itemDetailsData.dropData.type == DataObject_1.DropType.Dress) {
                var dress = new DressData_1.DressData(itemDetailsData.dropData.dropId);
                if (dress.dressSuit > 0) {
                    //套装
                    this.currDetailsUIID = GameUIConfig_1.UIID.ItemDetailsSuit;
                }
                else {
                    //普通
                    this.currDetailsUIID = GameUIConfig_1.UIID.ItemDetailsDecorate;
                }
            }
            else {
                this.currDetailsUIID = GameUIConfig_1.UIID.ItemDetailsCurrency;
            }
            if (!Oops_1.oops.gui.has(this.currDetailsUIID))
                Oops_1.oops.gui.open(this.currDetailsUIID, itemDetailsData);
        }
    };
    /**
     * 关闭明细
     */
    DataMgr.CloseItemDetails = function () {
        if (this.currDetailsUIID != null && Oops_1.oops.gui.has(this.currDetailsUIID))
            Oops_1.oops.gui.remove(this.currDetailsUIID);
    };
    //当前选择的装扮角色
    DataMgr.currDressSex = DataObject_1.RoleMale.girl; //0男  1女
    //当前等级
    DataMgr.currLevel = 0;
    //屏幕中心点
    DataMgr.screenCenter = cc_1.Vec2.ZERO;
    return DataMgr;
}());
exports.DataMgr = DataMgr;
