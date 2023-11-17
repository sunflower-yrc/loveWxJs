"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerData = exports.TriggerEnum = exports.EventTypeEnum = void 0;
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var DataManager_1 = require("../../../Global/DataManager");
var DataObject_1 = require("../../tools/DataObject");
var HttpPost_1 = require("../../tools/HttpPost");
var SingletonModuleComp_1 = require("../ecs/SingletonModuleComp");
var GameMgr_1 = require("../mgr/GameMgr");
// 事件类型
// 1.对话；
// 2.npc回收家具和衣服；
// 3.宠物领养；
// 4.外出布景
var EventTypeEnum;
(function (EventTypeEnum) {
    EventTypeEnum[EventTypeEnum["conversation"] = 1] = "conversation";
    EventTypeEnum[EventTypeEnum["recoverItems"] = 2] = "recoverItems";
    EventTypeEnum[EventTypeEnum["adotPet"] = 3] = "adotPet";
    EventTypeEnum[EventTypeEnum["outside"] = 4] = "outside";
    EventTypeEnum[EventTypeEnum["businessEventDress"] = 5] = "businessEventDress";
    EventTypeEnum[EventTypeEnum["businessEventFurniture"] = 6] = "businessEventFurniture";
})(EventTypeEnum || (exports.EventTypeEnum = EventTypeEnum = {}));
var TriggerEnum;
(function (TriggerEnum) {
    TriggerEnum[TriggerEnum["Guide"] = 1] = "Guide";
    TriggerEnum[TriggerEnum["MainTask"] = 2] = "MainTask";
    TriggerEnum[TriggerEnum["GotFurniture"] = 3] = "GotFurniture";
    TriggerEnum[TriggerEnum["GotDress"] = 4] = "GotDress";
    TriggerEnum[TriggerEnum["UpLevel"] = 5] = "UpLevel";
    TriggerEnum[TriggerEnum["DailyOnlineTime"] = 6] = "DailyOnlineTime";
    TriggerEnum[TriggerEnum["ServerTime"] = 7] = "ServerTime";
    TriggerEnum[TriggerEnum["DailyOnlineCircleTime"] = 8] = "DailyOnlineCircleTime";
})(TriggerEnum || (exports.TriggerEnum = TriggerEnum = {}));
var TriggerData = /** @class */ (function () {
    function TriggerData(id) {
        this.data = {
            triggerType: 1,
            typeValue: 1000,
            triggerLimit: "1-1",
            eventId: 1001,
            startTime: 0,
            eventStatus: 1,
            triggerStatus: 1 //触发状态 1 进行中 2 已完成
        };
        this.firstCheck = true;
        /**设置冷却 */
        this.coolDown = 0;
        /**最多判断次数 */
        this.maxQuestTime = 5;
        this.maxTriggerTimes = 0;
        /**事件 */
        this.eventData = null;
        /** 编号【KEY】 */
        this.id = 0;
        this.id = id;
        this.maxTriggerTimes = Number(StringUtil_1.StringUtil.stringToArray5(this.triggerLimit)[1]);
    }
    /**
     * 检测事件
     * @param checkID 检测id
     * @returns
     */
    TriggerData.prototype.checkTrigger = function (checkID) {
        /**新手引导没有事件 */
        // if (!smc.account.AccountModel.isGuideOver) {
        //     return;
        // }
        var _this = this;
        var _a;
        // console.log("checke Trigger checkId is",checkID);
        if (this.eventData == null)
            return;
        var active = false;
        switch (this.triggerType) {
            case TriggerEnum.ServerTime:
                if (this.eventStatus != 0) {
                    break;
                }
                var now = new Date(Oops_1.oops.timer.getServerTime() * 1000);
                var times = StringUtil_1.StringUtil.stringToArray2(this.typeValue + "");
                var nextTime = null;
                // 查找下一个时间点
                for (var i = 0; i < times.length; i++) {
                    var _b = times[i].split(":"), hour = _b[0], minute = _b[1];
                    var time = new Date(now);
                    time.setHours(parseInt(hour), parseInt(minute), 0);
                    // oops.logB(` ${time.getTime()} ${now.getTime() > time.getTime() ? "<" : ">"} ${now.getTime()}  ${now.getTime() < time.getTime() + (this.eventData.eventTime * 1000)? "<":">"} ${time.getTime() + (this.eventData.eventTime * 1000)}`);
                    if (now.getTime() > time.getTime() && now.getTime() < time.getTime() + (this.eventData.eventTime * 1000)) {
                        nextTime = "".concat(now.getFullYear(), "-").concat(("0" + (now.getMonth() + 1)).slice(-2), "-").concat(("0" + now.getDate()).slice(-2), " ").concat(times[i], ":00");
                        break;
                    }
                }
                this.coolDown--;
                if (nextTime && this.eventStatus == 0 && this.coolDown <= 0 && this.maxQuestTime > 0) {
                    active = true;
                    this.coolDown = 10;
                    this.maxQuestTime--;
                }
                break;
            case TriggerEnum.DailyOnlineTime:
                if (this.eventStatus != 0) {
                    break;
                }
                if (SingletonModuleComp_1.smc.account.AccountModel.eventOnlineTime - Number(this.typeValue) > 0) {
                    this.coolDown--;
                    if (this.coolDown <= 0 && this.maxQuestTime > 0) {
                        active = true;
                        this.coolDown = 10;
                        this.maxQuestTime--;
                    }
                }
                break;
            case TriggerEnum.DailyOnlineCircleTime:
                if (this.eventStatus != 0)
                    break;
                if (SingletonModuleComp_1.smc.account.AccountModel.eventOnlineTime % Number(this.typeValue) == 0) {
                    active = true;
                }
                break;
            case TriggerEnum.GotFurniture:
            case TriggerEnum.GotDress:
            case TriggerEnum.MainTask:
            case TriggerEnum.UpLevel:
                if (checkID && checkID >= Number(this.typeValue) && this.eventStatus === 0) {
                    active = true;
                }
                break;
            case TriggerEnum.Guide:
                if (checkID && checkID > 0)
                    active = true;
                break;
            default:
                break;
        }
        /**进入游戏场景后走一遍检测已有事件，做角色显示 */
        if (this.eventStatus == 1 && this.firstCheck) {
            this.firstCheck = false;
            (_a = GameMgr_1.GameMgr.Instance.sceneMgr) === null || _a === void 0 ? void 0 : _a.showRoleAndBubble(this.eventData, this.eventStatus);
            return;
        }
        /**事件触发后执行 */
        if (active) {
            if (GameMgr_1.GameMgr.Instance.sceneMgr) {
                //this.eventStatus = 1;
                // if (this.triggerType == TriggerEnum.UpLevel) {
                //     //!升级服务端处理，不需要上报,直接获取
                //     HttpPost.instance.getEventList((data: any) => {
                //         this.firstCheck = false;
                //         /**完成后就没事件了 */
                //         this.eventData = null!;
                //         //事件系统
                //         DataManager.Instance.setEventList(data.eventList);
                //         GameMgr.Instance.sceneMgr?.showRoleAndBubble(this.eventData);
                //     });
                //     return;
                // }
                var vo = new DataObject_1.RecordEventVo(this.id + "", this.eventId, "1");
                HttpPost_1.HttpPost.instance.recordEvent(vo, function (data) {
                    var _a;
                    _this.firstCheck = false;
                    /**完成后就没事件了 */
                    _this.eventData = null;
                    //事件系统
                    DataManager_1.default.Instance.setEventList(data.eventList);
                    console.log(_this.eventStatus);
                    (_a = GameMgr_1.GameMgr.Instance.sceneMgr) === null || _a === void 0 ? void 0 : _a.showRoleAndBubble(_this.eventData, _this.eventStatus);
                });
            }
        }
    };
    /**直接上报触发事件 */
    TriggerData.prototype.upEvent = function (cb) {
        var _this = this;
        var vo = new DataObject_1.RecordEventVo(this.id + "", this.eventId, "1");
        HttpPost_1.HttpPost.instance.recordEvent(vo, function (data) {
            var _a;
            _this.firstCheck = false;
            /**完成后就没事件了 */
            _this.eventData = null;
            //事件系统
            DataManager_1.default.Instance.setEventList(data.eventList);
            (_a = GameMgr_1.GameMgr.Instance.sceneMgr) === null || _a === void 0 ? void 0 : _a.showRoleAndBubble(_this.eventData, _this.eventStatus);
            cb && cb();
        });
    };
    Object.defineProperty(TriggerData.prototype, "triggerType", {
        /** 触发类型
    1.新手引导步骤结束
    2.主线任务完成
    3.获得指定家具后回到主界面
    4.获得指定时装后回到主界面
    5.玩家升到x级后触发
    6.每日在线时间触发
    7.服务器每日时间触发 */
        get: function () {
            return this.data.triggerType;
        },
        set: function (val) {
            this.data.triggerType = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TriggerData.prototype, "typeValue", {
        /** 类型参数
    1.步骤id
    2.主线任务id
    3.家具id
    4.时装id
    5.玩家等级
    6.在线秒数
    7.指定时间 */
        get: function () {
            return this.data.typeValue;
        },
        set: function (val) {
            this.data.typeValue = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TriggerData.prototype, "triggerLimit", {
        /** 触发次数限制类型
    终身限制x次填写为1-x
    每日限制x次填写为2-x */
        get: function () {
            return this.data.triggerLimit;
        },
        set: function (val) {
            this.data.triggerLimit = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TriggerData.prototype, "eventId", {
        /** 触发事件id */
        get: function () {
            return this.data.eventId;
        },
        set: function (val) {
            this.data.eventId = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TriggerData.prototype, "eventStatus", {
        /** 事件状态 0 未开始 1 进行中 2 已完成*/
        get: function () {
            return this.data.eventStatus;
        },
        set: function (val) {
            this.data.eventStatus = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TriggerData.prototype, "triggerStatus", {
        /** 事件状态 0 未开始 1 进行中 2 已完成*/
        get: function () {
            return this.data.triggerStatus;
        },
        set: function (val) {
            this.data.triggerStatus = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TriggerData.prototype, "startTime", {
        /** 事件开始时间*/
        get: function () {
            return this.data.startTime;
        },
        set: function (val) {
            this.data.startTime = val;
        },
        enumerable: false,
        configurable: true
    });
    /**获取指定事件触发器列表 */
    TriggerData.getAllAimEventList = function (triggerType) {
        var list = [];
        SingletonModuleComp_1.smc.account.AccountModel.eventList.forEach(function (i, v) {
            if (i.triggerType == triggerType && i.eventStatus != 2) {
                list.push(i);
            }
        });
        return list;
    };
    /**获取指定事件类型列表 */
    TriggerData.getAllEventTypeList = function (eventType) {
        var list = [];
        SingletonModuleComp_1.smc.account.AccountModel.eventList.forEach(function (i, v) {
            if (i.eventStatus == 1) {
                var event_1 = i.eventData;
                if (event_1.eventType == eventType) {
                    list.push(i);
                }
            }
        });
        return list;
    };
    /**由事件id找触发器*/
    TriggerData.getTriggerByEventId = function (eventId) {
        var list = [];
        SingletonModuleComp_1.smc.account.AccountModel.eventList.forEach(function (i, v) {
            if (i.eventId == eventId + "")
                list.push(i);
        });
        return list;
    };
    return TriggerData;
}());
exports.TriggerData = TriggerData;
