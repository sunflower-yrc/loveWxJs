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
exports.AccountModelComp = void 0;
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var Collection_1 = require("../../../../../extensions/oops-plugin-framework/assets/libs/collection/Collection");
var ECS_1 = require("../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS");
var ViewModel_1 = require("../../../../../extensions/oops-plugin-framework/assets/libs/model-view/ViewModel");
var GameMgr_1 = require("../../common/mgr/GameMgr");
var TriggerData_1 = require("../../common/tableData/TriggerData");
var DataObject_1 = require("../../tools/DataObject");
/**
 * 游戏帐号数据
 */
var AccountModelComp = function () {
    var _classDecorators = [ECS_1.ecs.register('AccountModel')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = ECS_1.ecs.Comp;
    var AccountModelComp = _classThis = /** @class */ (function (_super) {
        __extends(AccountModelComp_1, _super);
        function AccountModelComp_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 显示数据 */
            _this.vm = null;
            // token
            _this.token = "";
            //openId
            _this.openId = "";
            //user_id
            _this.userId = 0;
            //头像url
            _this.avatarUrl = "";
            // 获取用户信息授权是否被拒
            _this.wxInfoReject = false;
            //是否是新用户
            _this.isNewUser = false;
            //注册时间
            _this.registerTime = 0;
            //是否显示支付
            _this.isShowPay = true;
            //首充状态
            _this.firstRecharge = false;
            //数据统计使用 gitId  clue_token
            _this.gdt_vid = "";
            _this.clue_token = "";
            //=========条件开启用的start
            //登录天数
            _this.loginDays = 1;
            //开箱总次数
            _this.boxOpenTimes = 0;
            //手动拍照次数
            _this.manualPhotoTimes = 0;
            //金币消耗的数量
            _this.coinsConsumeAmount = 0;
            //装扮总数量
            _this.dressTotalAmount = 0;
            //家具总数量
            _this.furnitureTotalAmount = 0;
            //=========条件开启用的end
            //体力
            _this.power = 0;
            //===================
            // 引导步骤  0是未开始
            _this.guideStep = 0;
            // 新手引导结束
            _this.isGuideOver = false;
            //天气
            _this.weatherId = 1;
            //章节
            _this.chapter = 1;
            _this.surveyOver = false;
            //===================
            //装扮
            _this.dressBoy = [];
            _this.dressGirl = [];
            //装扮套装列表
            _this.dressSuitList = [];
            //装扮背包
            _this.dressOwnedData = new Collection_1.Collection();
            //装扮红点
            _this.dressRedData = new Collection_1.Collection();
            //外出开箱最大次数？用来和外出放置家具数量作对比来决定是否可以结算
            _this.openBoxTimesMax = 0;
            //家具
            _this.furnitureCache = null;
            //户外家具
            _this.outsideFurnitureCache = null;
            //庄园家具信息
            _this.manorCache = null;
            //家具套装列表
            _this.furnitureSuitList = [];
            //家具背包
            _this.furnitureOwnedData = new Collection_1.Collection();
            //家具红点
            _this.furnitureRedData = new Collection_1.Collection();
            /**外部背包 */
            _this.outsideFurnitureOwnedData = new Collection_1.Collection();
            _this.outEventOverArray = [];
            //离线
            _this.offlineData = null;
            _this.pet = [];
            //===================
            //开箱时间
            _this.openBoxTime = null;
            //外出开箱时间
            _this.outOpenBoxTime = null;
            //超级开箱进度
            _this.superOpenCount = 0;
            //渠道 1微信2巨量0无
            _this.channel = 0;
            //庄园体力
            _this.manorPower = 0;
            //庄园跑马灯id
            _this.manorMsgId = 0;
            //距离下次回复1点精力的剩余时间
            _this.manorPowerResumeCdTime = 0;
            //庄园摇钱树上次领取时间
            _this.manorTreeLastGetTime = 0;
            //新手箱子状态 0新手箱子 1常规箱子
            _this.noviceBox = null;
            //额外开箱次数
            // private _giveTimes: number = null!;
            // public get giveTimes(): number {
            //     return this._giveTimes;
            // }
            // public set giveTimes(value: number) {
            //     this._giveTimes = value;
            // }
            /**外出当前可得金币奖励*/
            _this.outAvailableReward = 0;
            //todo当前开箱次数
            _this.todayOpenTimes = 0;
            //外出当前开箱次数
            _this.outTodayOpenTimes = 0;
            /**外出最大开箱次数 */
            _this.outSurplusOpenTimes = 0;
            //当前读取开箱第二主键
            _this.boxConfigKey = 0;
            //当前读取外出开箱第二主键
            _this.outBoxConfigKey = 0;
            _this.boxFirstKey = 0;
            //===================
            //玩家等级经验
            _this.playerLevelExp = 0;
            //===================
            //主线任务是否完成
            _this.isMainTaskCompleted = false;
            //主线任务数据
            _this.mainTaskData = null;
            //是否有可以领取的奖励
            _this.isDailyTaskReward = false;
            //每日任务列表
            _this.dailyTaskData = [];
            //===================
            //七日额外奖励  0：不可领 1：可领取 2：已领取
            _this.rewardFinal = 0;
            //签到阶段
            _this.signStage = 1;
            //当前阶段签到情况
            _this.signedData = [];
            //===================
            //商店
            _this.storeNode = null;
            //===================
            //等级礼包
            _this.levelGiftList = [];
            _this.levelGiftUngetCount = 0;
            _this.eventList = new Collection_1.Collection();
            _this.eventInit = false;
            //动物互动次数
            _this.animalInteractCount = 0;
            _this._onlineTime = 0;
            //房屋评级 
            _this.houseRateData = null;
            //超值礼包是否领取(夏日清凉)
            _this.videoReward = 0;
            //用户协议开关（true：开启 false：关闭）
            _this.switchAgreement = false;
            //挂机数据
            _this.hangData = new DataObject_1.HangData();
            //主界面红点
            _this.mainRed = new DataObject_1.MainRed();
            //开服活动是否开启
            _this.openServerOpen = null;
            //周常活动是否已开启
            _this.weekActivityIsOpen = null;
            //限时礼包
            _this.timeLimitOrder = new Collection_1.Collection();
            //中秋国庆红点开启信息
            _this.nationalDay = new DataObject_1.NationalDay();
            //中秋国庆礼包红点开启信息
            _this.festivalGift = new DataObject_1.FestivalGift();
            //家具点击移动log白名单
            _this.furnitureWhiteList = [
                5760, 3520, 7899, 2402, 1083, 12776, 248, 28920, 3306
            ];
            _this.traceMax = 2;
            _this.traceCur = 0;
            _this.isOpendFurniture = false;
            //动作
            _this.rankingMove = new DataObject_1.RankingMove();
            //解锁动作列表
            _this.rankingMoveIds = [];
            //已领取免费开箱最大等级
            _this.lvGift = 0;
            return _this;
        }
        Object.defineProperty(AccountModelComp_1.prototype, "getOpenBoxTime", {
            get: function () {
                if (GameMgr_1.GameMgr.Instance.isOutside)
                    return this.outOpenBoxTime;
                return this.openBoxTime;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AccountModelComp_1.prototype, "setOpenBoxTime", {
            set: function (value) {
                if (GameMgr_1.GameMgr.Instance.isOutside) {
                    this.outOpenBoxTime = value;
                    return;
                }
                this.openBoxTime = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AccountModelComp_1.prototype, "getTodayOpenTimes", {
            get: function () {
                if (GameMgr_1.GameMgr.Instance.isOutside)
                    return this.outTodayOpenTimes;
                return this.todayOpenTimes;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AccountModelComp_1.prototype, "setTodayOpenTimes", {
            set: function (value) {
                if (GameMgr_1.GameMgr.Instance.isOutside) {
                    this.outTodayOpenTimes = value;
                    return;
                }
                this.todayOpenTimes = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AccountModelComp_1.prototype, "getBoxConfigKey", {
            get: function () {
                if (GameMgr_1.GameMgr.Instance.isOutside)
                    return this.outBoxConfigKey;
                return this.boxConfigKey;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AccountModelComp_1.prototype, "setBoxConfigKey", {
            set: function (value) {
                if (GameMgr_1.GameMgr.Instance.isOutside) {
                    this.outBoxConfigKey = value;
                    return;
                }
                this.boxConfigKey = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AccountModelComp_1.prototype, "eventOnlineTime", {
            get: function () {
                // if (!this._onlineTime) {
                //     this._onlineTime = oops.storage.getJson("eventOnlineTime", 0)!;
                // }
                return this._onlineTime;
            },
            set: function (value) {
                this._onlineTime = value;
                Oops_1.oops.storage.set("eventOnlineTime", this._onlineTime);
                //检测是否触发每日在线事件
                var triggers = TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.DailyOnlineTime);
                triggers = triggers.concat(TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.ServerTime), TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.DailyOnlineCircleTime));
                if (triggers && !GameMgr_1.GameMgr.Instance.firstCheck) {
                    for (var _i = 0, triggers_1 = triggers; _i < triggers_1.length; _i++) {
                        var i = triggers_1[_i];
                        i.checkTrigger();
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        AccountModelComp_1.prototype.reset = function () {
            this.vmRemove();
        };
        AccountModelComp_1.prototype.init = function () {
            this.vm = {
                nickName: "",
                coin: 0,
                jewel: 0,
                noAdsTicket: 0,
                openBoxSpeed: 0,
                giveTimes: 0,
                playerLevel: 1,
                furnitureScore: 0,
                dressBoyScore: 0,
                outFurnitureScore: 0,
                dressGirlScore: 0,
                dressScore: 0,
                tileGameLevel: 1,
                petCoin: 0,
                manorCoin: 0,
                manorLevel: 1,
                passExp: 0,
                prop1: 99,
                prop2: 99,
                prop3: 99,
                adsTimes: 0,
                userId: "",
            };
            this.vmAdd();
        };
        AccountModelComp_1.prototype.vmAdd = function () {
            ViewModel_1.VM.add(this.vm, "Account");
        };
        AccountModelComp_1.prototype.vmRemove = function () {
            ViewModel_1.VM.remove("Account");
            this.vm = null;
        };
        return AccountModelComp_1;
    }(_classSuper));
    __setFunctionName(_classThis, "AccountModelComp");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AccountModelComp = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AccountModelComp = _classThis;
}();
exports.AccountModelComp = AccountModelComp;
