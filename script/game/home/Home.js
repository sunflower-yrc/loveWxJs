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
exports.Home = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataObject_1 = require("../tools/DataObject");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var GameEvent_1 = require("../common/config/GameEvent");
var EventMessage_1 = require("../../../../extensions/oops-plugin-framework/assets/core/common/event/EventMessage");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var HttpPost_1 = require("../tools/HttpPost");
var PlayerData_1 = require("../common/tableData/PlayerData");
var TaskData_1 = require("../common/tableData/TaskData");
var GameResPath_1 = require("../common/config/GameResPath");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var DataManager_1 = require("../../Global/DataManager");
var DataMgr_1 = require("../mgr/DataMgr");
var RedDotMgr_1 = require("../mgr/RedDotMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var TriggerData_1 = require("../common/tableData/TriggerData");
var Currency_1 = require("./Currency");
var TalkData_1 = require("../common/tableData/TalkData");
var GuideData_1 = require("../common/tableData/GuideData");
var GameMgr_1 = require("../common/mgr/GameMgr");
var UnlockItem_1 = require("./UnlockItem");
var EventItem_1 = require("./EventItem");
var Shoot_1 = require("../album/Shoot");
var cc_2 = require("cc");
var LimitMgr_1 = require("../mgr/LimitMgr");
var houseRateData_1 = require("../common/tableData/houseRateData");
var LangData_1 = require("../common/tableData/LangData");
var Role_1 = require("../dress/Role");
var Tablenpc_1 = require("../common/table/Tablenpc");
var TablefunctionOpen_1 = require("../common/table/TablefunctionOpen");
var LimitData_1 = require("../common/tableData/LimitData");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var cc_3 = require("cc");
var cc_4 = require("cc");
var MoveRoomLoading_1 = require("./MoveRoomLoading");
var LimitGiftMgr_1 = require("./LimitGiftMgr");
var ManorLevelData_1 = require("../manor/ManorLevelData");
var MoonActivityMgr_1 = require("./MoonActivityMgr");
var GlobalData_1 = require("../common/tableData/GlobalData");
var ManorTopMsg_1 = require("../manor/ManorTopMsg");
var ManorTradeData_1 = require("../manor/ManorTradeData");
var MoonLimitGiftMgr_1 = require("./MoonLimitGiftMgr");
var cc_5 = require("cc");
var StoryData_1 = require("../common/tableData/StoryData");
var NetDetect_1 = require("../common/net/NetDetect");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Home = function () {
    var _classDecorators = [ccclass('Home')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _currencyCoins_decorators;
    var _currencyCoins_initializers = [];
    var _currencyJewels_decorators;
    var _currencyJewels_initializers = [];
    var _currencyManorCoins_decorators;
    var _currencyManorCoins_initializers = [];
    var _top_decorators;
    var _top_initializers = [];
    var _funcs_decorators;
    var _funcs_initializers = [];
    var _player_decorators;
    var _player_initializers = [];
    var _info_decorators;
    var _info_initializers = [];
    var _nodeScore_decorators;
    var _nodeScore_initializers = [];
    var _outsideScore_decorators;
    var _outsideScore_initializers = [];
    var _furnitureScore_decorators;
    var _furnitureScore_initializers = [];
    var _dressScore_decorators;
    var _dressScore_initializers = [];
    var _mainTask_decorators;
    var _mainTask_initializers = [];
    var _taskEntry_decorators;
    var _taskEntry_initializers = [];
    var _explanation_decorators;
    var _explanation_initializers = [];
    var _outEventTimer_decorators;
    var _outEventTimer_initializers = [];
    var _outFurnitureMarkOut_decorators;
    var _outFurnitureMarkOut_initializers = [];
    var _outUnlockItemsContent_decorators;
    var _outUnlockItemsContent_initializers = [];
    var _outUnlockItem_decorators;
    var _outUnlockItem_initializers = [];
    var _moreAmi_decorators;
    var _moreAmi_initializers = [];
    var _rewardBtn_decorators;
    var _rewardBtn_initializers = [];
    var _eventBtnList_decorators;
    var _eventBtnList_initializers = [];
    var _eventBtnList1_decorators;
    var _eventBtnList1_initializers = [];
    var _houseBtn_decorators;
    var _houseBtn_initializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var _taskNode_decorators;
    var _taskNode_initializers = [];
    var _limitGift_decorators;
    var _limitGift_initializers = [];
    var _moon_decorators;
    var _moon_initializers = [];
    var _moonGift_decorators;
    var _moonGift_initializers = [];
    var _moveSpine_decorators;
    var _moveSpine_initializers = [];
    var _sildLeft_decorators;
    var _sildLeft_initializers = [];
    var _sildRight_decorators;
    var _sildRight_initializers = [];
    var _topRightv_decorators;
    var _topRightv_initializers = [];
    var Home = _classThis = /** @class */ (function (_super) {
        __extends(Home_1, _super);
        function Home_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.currencyCoins = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _currencyCoins_initializers, null));
            _this.currencyJewels = __runInitializers(_this, _currencyJewels_initializers, null);
            _this.currencyManorCoins = __runInitializers(_this, _currencyManorCoins_initializers, null);
            _this.top = __runInitializers(_this, _top_initializers, null);
            _this.funcs = __runInitializers(_this, _funcs_initializers, null);
            _this.player = __runInitializers(_this, _player_initializers, null);
            _this.info = __runInitializers(_this, _info_initializers, null);
            _this.nodeScore = __runInitializers(_this, _nodeScore_initializers, null);
            _this.outsideScore = __runInitializers(_this, _outsideScore_initializers, null);
            _this.furnitureScore = __runInitializers(_this, _furnitureScore_initializers, null);
            _this.dressScore = __runInitializers(_this, _dressScore_initializers, null);
            _this.mainTask = __runInitializers(_this, _mainTask_initializers, null);
            _this.taskEntry = __runInitializers(_this, _taskEntry_initializers, null);
            _this.explanation = __runInitializers(_this, _explanation_initializers, null);
            _this.outEventTimer = __runInitializers(_this, _outEventTimer_initializers, null);
            /**外出评分 */
            _this.outFurnitureMarkOut = __runInitializers(_this, _outFurnitureMarkOut_initializers, null);
            /**外出家具解锁列表 */
            _this.outUnlockItemsContent = __runInitializers(_this, _outUnlockItemsContent_initializers, null);
            /**外出下一个解锁家具 */
            _this.outUnlockItem = __runInitializers(_this, _outUnlockItem_initializers, null);
            /**更多手机动画 */
            _this.moreAmi = __runInitializers(_this, _moreAmi_initializers, null);
            _this.rewardBtn = __runInitializers(_this, _rewardBtn_initializers, null);
            _this.eventBtnList = __runInitializers(_this, _eventBtnList_initializers, null);
            _this.eventBtnList1 = __runInitializers(_this, _eventBtnList1_initializers, null);
            //快乐小屋入口
            _this.houseBtn = __runInitializers(_this, _houseBtn_initializers, null);
            _this.role = __runInitializers(_this, _role_initializers, null);
            // @property(Node)
            // botLeft: Node = null!;
            _this.taskNode = __runInitializers(_this, _taskNode_initializers, null);
            _this.limitGift = __runInitializers(_this, _limitGift_initializers, null);
            _this.moon = __runInitializers(_this, _moon_initializers, null);
            _this.moonGift = __runInitializers(_this, _moonGift_initializers, null);
            //搬家动画
            _this.moveSpine = __runInitializers(_this, _moveSpine_initializers, null);
            _this.sildLeft = __runInitializers(_this, _sildLeft_initializers, null);
            _this.sildRight = __runInitializers(_this, _sildRight_initializers, null);
            _this.topRightv = __runInitializers(_this, _topRightv_initializers, null);
            _this.moreStatus = 0;
            _this.scoreStatus = 0;
            _this.scoreAnimating = false;
            _this.serverTime = 0;
            _this.timeCount = 0;
            _this.currTime = "";
            _this.showingSceneNode = null;
            _this.manorNode = null;
            //功能开启
            _this.funcOpenStore = false;
            _this.funcOpenPhoto = false;
            _this.funcOpenRoomRating = false;
            _this.funcOpenNormalRanklist = false;
            _this.funcOpenPet = false;
            _this.funcOpenFirstRecharge = false;
            _this.funcOpenSurvey = false;
            _this.funcOpenValuePack = false;
            _this.funcOpenPrivilegeCard = false;
            _this.funcOpenOpenServe = false;
            _this.funcOpenPass = false;
            _this.funcWeekActivity = false;
            _this.outsideScoreStatus = 0;
            _this.isShowActivity = false;
            //是否已经初始化场景
            _this.isInit = false;
            //是否从外出返回
            _this.isBackRoom = false;
            //是否从庄园返回
            _this.isBackManor = false;
            return _this;
        }
        Home_1.prototype.start = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            Oops_1.oops.audio.playMusic(DataObject_1.AudioType.Bgm_Menu);
                            Oops_1.oops.message.on(EventMessage_1.EventMessage.GAME_ENTER, this.onHander, this);
                            Oops_1.oops.message.on(EventMessage_1.EventMessage.GAME_EXIT, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.CoinFly, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.ShowFirstRecharge, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.HomeFuncOpen, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.ShowHomeUI, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.ShowLevel, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.HideHomeUI, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.FurnitureRedDotHome, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.DressRedDotHome, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateFurnitureScore, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateDressScore, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateHomeTask, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpUserChapter, this.showScene, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateChapterRedDot, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.ShowLevelGift, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.AutoOpenLevelGift, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.ShowHomeCurrencyAnim, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.EmitGuide, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.CheckStartTrigger, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.RefreshOutsideUnlockList, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.FreshEventBtns, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateHouseGrade, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateValuePack, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.GameMianRed, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdateManorPower, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.NetWeak, this.onHander, this);
                            // this.botLeft.on(Node.EventType.SIZE_CHANGED, this.chageSize, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.ManorBack, this.ManorBack, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.ManorGo, this.showManor, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.IsHideSeedPanel, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.OutRewardRed, this.onHander, this);
                            Oops_1.oops.message.on(GameEvent_1.GameEvent.SetHomeBtn, this.onHander, this);
                            //加载场景
                            return [4 /*yield*/, this.showScene()];
                        case 1:
                            //加载场景
                            _a.sent();
                            this.freshManorUI(false);
                            //显示离线 
                            this.showOffline(0);
                            //功能开启
                            this.checkFuncOpen(DataObject_1.FunctionCheckType.BoxOpen);
                            this.checkFuncOpen(DataObject_1.FunctionCheckType.PlayerLevelup);
                            //初始化房屋评级数据
                            this.initHouseGrade();
                            //是否显示充值
                            this.showPay();
                            //主界面红点
                            this.setMianRed();
                            //动画
                            this.taskTween();
                            //启动定时器
                            this.schedule(function () {
                                _this.startTimer();
                            }, 1);
                            SdkPlatform_1.SdkPlatform.report_loading('homeStart');
                            return [2 /*return*/];
                    }
                });
            });
        };
        Home_1.prototype.showManor = function (event, sceneID) {
            if (event === void 0) { event = null; }
            return __awaiter(this, void 0, void 0, function () {
                var funcOpen;
                var _this = this;
                return __generator(this, function (_a) {
                    funcOpen = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Manor);
                    if (!funcOpen.satisfied) {
                        Oops_1.oops.gui.toast(funcOpen.unSatisfiedDesc);
                        return [2 /*return*/];
                    }
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.LoadAnim);
                    DataManager_1.default.Instance.gotoChapter();
                    HttpPost_1.HttpPost.instance.manorInit(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var needCreate, url, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    GameMgr_1.GameMgr.Instance.manorMode = true;
                                    SingletonModuleComp_1.smc.account.AccountModel.vm.manorCoin = data.manorCoin;
                                    SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel = data.level;
                                    SingletonModuleComp_1.smc.account.AccountModel.manorPower = data.manorPower;
                                    SingletonModuleComp_1.smc.account.AccountModel.manorPowerResumeCdTime = data.restoreTime;
                                    //更新数据
                                    DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                                    DataManager_1.default.Instance.initManor(data);
                                    DataManager_1.default.Instance.updateManorSeedBag(data.seedList);
                                    DataManager_1.default.Instance.curChapter = "manorFurniture";
                                    SingletonModuleComp_1.smc.account.AccountModel.manorCache = data.manorFurniture;
                                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.RefreshRoomFurniture, "manorFurniture");
                                    needCreate = true;
                                    url = GameResPath_1.GameResPath.getManorPath().url;
                                    if (!needCreate) return [3 /*break*/, 2];
                                    this.showingSceneNode.destroy();
                                    _a = this;
                                    return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(url, BundleConfig_1.default.instance.manor.name)];
                                case 1:
                                    _a.manorNode = _b.sent();
                                    this.manorNode.parent = ViewUtil_1.ViewUtil.findChildByName("sceneNode", this.node);
                                    this.scheduleOnce(function () {
                                        Oops_1.oops.gui.remove(GameUIConfig_1.UIID.LoadAnim);
                                    }, 1);
                                    _b.label = 2;
                                case 2:
                                    this.freshManorUI(true);
                                    //判断是否需要展示跑马灯
                                    if (data.broadcast && data.broadcast.broadcastId != 0) {
                                        SingletonModuleComp_1.smc.account.AccountModel.manorMsgId = data.broadcast.broadcastId;
                                        this.showManorTopMsg();
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        };
        Home_1.prototype.ManorBack = function () {
            GameMgr_1.GameMgr.Instance.manorMode = false;
            this.isBackManor = true;
            var lastChapter = DataManager_1.default.Instance.goBack();
            DataManager_1.default.Instance.updateSelectChapter(lastChapter);
            this.showScene();
            if (this.manorNode)
                this.manorNode.destroy();
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.LoadingOut);
            this.freshManorUI(false);
        };
        Home_1.prototype.showScene = function (event, sceneID) {
            var _a;
            if (event === void 0) { event = null; }
            return __awaiter(this, void 0, void 0, function () {
                var needCreate, curChapter, lastChapter, _b, url, bundle, _c, urlNew, bundleNew, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            if (sceneID) {
                                GameMgr_1.GameMgr.Instance.outSceneID = sceneID;
                                DataManager_1.default.Instance.curChapter = sceneID.toString();
                                GameMgr_1.GameMgr.Instance.isOutside = true;
                            }
                            else {
                                GameMgr_1.GameMgr.Instance.isOutside = false;
                                //切换住房搬家动画
                                if (this.isInit && !this.isBackRoom && !this.isBackManor) {
                                    this.showMoveSpine();
                                }
                            }
                            (_a = GameMgr_1.GameMgr.Instance.clickRayCast) === null || _a === void 0 ? void 0 : _a.resetFloorCache();
                            needCreate = true;
                            curChapter = DataManager_1.default.Instance.curChapter;
                            lastChapter = DataManager_1.default.Instance.routers[0];
                            _b = lastChapter != null ? GameResPath_1.GameResPath.getScenePathByName(lastChapter) : { url: null, bundle: null }, url = _b.url, bundle = _b.bundle;
                            _c = GameResPath_1.GameResPath.getScenePathByName(curChapter), urlNew = _c.url, bundleNew = _c.bundle;
                            if (this.showingSceneNode) {
                                DataManager_1.default.Instance.feedbackDataFurnitureOwnedData = null;
                                DataManager_1.default.Instance.outsideFurnitureFeedBackData = null;
                                if (urlNew != url && bundleNew != bundle) {
                                    this.showingSceneNode.destroy();
                                }
                                else {
                                    needCreate = false;
                                    GameMgr_1.GameMgr.Instance.sceneMgr.upgradeUserRoom();
                                }
                            }
                            DataManager_1.default.Instance.gotoChapter();
                            if (!needCreate) return [3 /*break*/, 2];
                            _d = this;
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(urlNew, bundleNew)];
                        case 1:
                            _d.showingSceneNode = _e.sent();
                            this.showingSceneNode.parent = Oops_1.oops.gui.game;
                            _e.label = 2;
                        case 2:
                            this.initUI();
                            //console.log(this.isInit,!GameMgr.Instance.isOutside,!this.isBackRoom)
                            //显示引导
                            if (this.isInit && !GameMgr_1.GameMgr.Instance.isOutside && !this.isBackRoom && !this.isBackManor) {
                                this.showGuide(true);
                                this.hideMoveSpine();
                                // 
                            }
                            else {
                                if (this.isBackRoom) {
                                    this.isBackRoom = false;
                                }
                                if (this.isBackManor)
                                    this.isBackManor = false;
                                this.showGuide();
                                this.isInit = true;
                            }
                            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.LoadAnim, true);
                            return [2 /*return*/];
                    }
                });
            });
        };
        Home_1.prototype.showMoveSpine = function () {
            this.moveSpine.node.active = true;
            this.moveSpine.showMoveSpine();
        };
        Home_1.prototype.hideMoveSpine = function () {
            this.moveSpine.onLoadEnd();
        };
        /**回家按钮 */
        Home_1.prototype.btnOutsideBackHome = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.isBackRoom = true;
            GameMgr_1.GameMgr.Instance.readyGoto = false;
            this.backFromOutside();
        };
        Home_1.prototype.backFromOutside = function () {
            if (GameMgr_1.GameMgr.Instance.isSceneLoaded != true)
                return;
            var lastChapter = DataManager_1.default.Instance.goBack();
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.LoadingIn);
            DataManager_1.default.Instance.updateSelectChapter(lastChapter);
            this.showScene();
        };
        /**
         * 进入游戏显示引导
         */
        Home_1.prototype.showGuide = function (jumpLoad) {
            if (jumpLoad === void 0) { jumpLoad = false; }
            if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide) {
                if (SingletonModuleComp_1.smc.guide.GuideModel.step == 11 || SingletonModuleComp_1.smc.guide.GuideModel.step == 23) {
                    //对话
                    this.showGuideTalk();
                }
                else if (SingletonModuleComp_1.smc.guide.GuideModel.step == 6) {
                    //摆放家具
                    this.openDecorate();
                }
                else if (SingletonModuleComp_1.smc.guide.GuideModel.step == 20) {
                    //引导领取小游戏宝箱奖励
                    this.openTileGame();
                }
            }
            if (!jumpLoad) {
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.LoadingOut);
            }
        };
        /**
         * 连续触发引导
         */
        Home_1.prototype.emitGuide = function () {
            if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide) {
                if ([1, 11, 14, 23, 27, 30].indexOf(SingletonModuleComp_1.smc.guide.GuideModel.step) >= 0) {
                    //打开对话
                    this.showGuideTalk();
                }
                else if (SingletonModuleComp_1.smc.guide.GuideModel.step == 12) {
                    //定位到小游戏
                    GameMgr_1.GameMgr.Instance.mapManager.moveToMiniGame();
                }
                else if (SingletonModuleComp_1.smc.guide.GuideModel.step == 4 || SingletonModuleComp_1.smc.guide.GuideModel.step == 25) {
                    GameMgr_1.GameMgr.Instance.mapManager.moveToCar();
                }
                else if (SingletonModuleComp_1.smc.guide.GuideModel.step == 8) {
                    //提示移动
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FurnitureGuideTis);
                }
            }
        };
        Home_1.prototype.showGuideTalk = function () {
            if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide) {
                var talkData = new TalkData_1.TalkData(parseInt(GuideData_1.GuideData.forceGuideDatas[SingletonModuleComp_1.smc.guide.GuideModel.step].typeValue));
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Dialogue, talkData);
            }
        };
        Home_1.prototype.startTimer = function () {
            //离线
            if (SingletonModuleComp_1.smc.account.AccountModel.isGuideOver) {
                // if (!smc.account.AccountModel.isNewUser && smc.account.AccountModel.isGuideOver) {
                this.timeCount++;
                if (this.timeCount >= 60) {
                    //60秒存一次时间到本地，如果游戏被杀掉，好计算离线用
                    this.timeCount = 0;
                    //给服务器发送心跳请求
                    // HttpPost.instance.updateOfflineTime((data: any) => {
                    // });
                }
            }
            SingletonModuleComp_1.smc.account.AccountModel.eventOnlineTime += 1;
            this.refreshOutTime();
        };
        //启动事件
        Home_1.prototype.checkStartTrigger = function () {
            if (GameMgr_1.GameMgr.Instance.manorMode) {
            }
            else {
                GameMgr_1.GameMgr.Instance.firstCheck = true;
                var eventList = SingletonModuleComp_1.smc.account.AccountModel.eventList;
                for (var _i = 0, eventList_1 = eventList; _i < eventList_1.length; _i++) {
                    var _a = eventList_1[_i], k = _a[0], i = _a[1];
                    if (i.eventStatus == 1) {
                        i.firstCheck = true;
                        i.checkTrigger();
                    }
                }
                GameMgr_1.GameMgr.Instance.firstCheck = false;
            }
        };
        Home_1.prototype.createScheduleOnce = function () {
            var _this = this;
            var now = new Date(Oops_1.oops.timer.getServerTime() * 1000);
            // 要执行的时间列表
            var triggerData = TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.ServerTime);
            var _loop_1 = function (i) {
                var times = StringUtil_1.StringUtil.stringToArray2(i.typeValue + "");
                // const times = ["8:00", "12:00", "16:20", "21:52"];
                var nextTime = null;
                // 查找下一个时间点
                for (var i_1 = 0; i_1 < times.length; i_1++) {
                    var _a = times[i_1].split(":"), hour = _a[0], minute = _a[1];
                    var time = new Date(now);
                    time.setHours(parseInt(hour), parseInt(minute), 0);
                    if (time > now) {
                        nextTime = "".concat(now.getFullYear(), "-").concat(("0" + (now.getMonth() + 1)).slice(-2), "-").concat(("0" + now.getDate()).slice(-2), " ").concat(times[i_1], ":00");
                        break;
                    }
                }
                // 如果没有下一个时间点，则为第二天的第一个时间点
                if (!nextTime) {
                    nextTime = times[0];
                    var tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
                    nextTime = "".concat(tomorrow.getFullYear(), "-").concat(tomorrow.getMonth() + 1, "-").concat(tomorrow.getDate(), " ").concat(nextTime, ":00");
                }
                // 计算下一个时间点和现在时间之间的时间差（秒）
                var nextDate = new Date(Date.parse(nextTime));
                var diffSeconds = Math.floor((nextDate.getTime() - now.getTime()) / 1000);
                Oops_1.oops.logB("\u8DDD\u79BB\u4E0B\u4E00\u4E2A\u65F6\u523B\u8FD8\u6709 ".concat(diffSeconds, " \u79D2"));
                // this.scheduleOnce(this.inTimeEvent.bind(triggerData), 10);
                this_1.scheduleOnce(function () { return _this.inTimeEvent(i); }, diffSeconds);
            };
            var this_1 = this;
            for (var _i = 0, triggerData_1 = triggerData; _i < triggerData_1.length; _i++) {
                var i = triggerData_1[_i];
                _loop_1(i);
            }
        };
        /**到目标时间事件 */
        Home_1.prototype.inTimeEvent = function (triggerData) {
            // const triggerData = smc.account.AccountModel.eventList.get(70001)!;
            var _this = this;
            // debugger
            triggerData.upEvent(function () {
                _this.createScheduleOnce();
            });
        };
        Home_1.prototype.onHander = function (event, args) {
            switch (event) {
                case EventMessage_1.EventMessage.GAME_ENTER:
                    console.log("回到游戏");
                    this.showOffline(1);
                    break;
                case EventMessage_1.EventMessage.GAME_EXIT:
                    console.log("切后台");
                    //给服务器发送心跳请求
                    if (SingletonModuleComp_1.smc.account.AccountModel.isGuideOver) {
                        // if (!smc.account.AccountModel.isNewUser && smc.account.AccountModel.isGuideOver) {
                        // HttpPost.instance.updateOfflineTime((data: any) => {
                        // });
                    }
                    break;
                case GameEvent_1.GameEvent.CoinFly:
                    this.coinsFly(args);
                    break;
                case GameEvent_1.GameEvent.ShowFirstRecharge:
                    this.showFirstRecharge();
                    break;
                case GameEvent_1.GameEvent.HomeFuncOpen:
                    this.checkFuncOpen(args);
                    break;
                case GameEvent_1.GameEvent.IsHideSeedPanel:
                    this.isHideSeedPanel(args);
                    break;
                case GameEvent_1.GameEvent.ShowHomeUI:
                    // ViewUtil.setNodeActiveByName("menu", this.node, true);
                    this.freshUiBtns(GameMgr_1.GameMgr.Instance.isOutside);
                    break;
                case GameEvent_1.GameEvent.FurnitureRedDotHome:
                    this.decorateRedDot();
                    break;
                case GameEvent_1.GameEvent.DressRedDotHome:
                    this.roleRedDot();
                    break;
                case GameEvent_1.GameEvent.ShowLevel:
                    this.showLevel();
                    break;
                case GameEvent_1.GameEvent.HideHomeUI:
                    this.hideUI();
                    break;
                case GameEvent_1.GameEvent.UpdateFurnitureScore:
                    this.updateFurnitureScore(args);
                    break;
                case GameEvent_1.GameEvent.UpdateDressScore:
                    this.updateDressScore(args);
                    break;
                case GameEvent_1.GameEvent.UpdateHomeTask:
                    this.updateHomeTask();
                    break;
                case GameEvent_1.GameEvent.UpdateChapterRedDot:
                    this.chapterRedDot();
                    break;
                case GameEvent_1.GameEvent.ShowLevelGift:
                    this.showLevelGift();
                    break;
                case GameEvent_1.GameEvent.AutoOpenLevelGift:
                    this.autoOpenLevelGift();
                    break;
                case GameEvent_1.GameEvent.ShowHomeCurrencyAnim:
                    this.showCurrencyAnim(args);
                    break;
                case GameEvent_1.GameEvent.EmitGuide:
                    this.emitGuide();
                    break;
                case GameEvent_1.GameEvent.CheckStartTrigger:
                    this.checkStartTrigger();
                    break;
                case GameEvent_1.GameEvent.RefreshOutsideUnlockList:
                    this.setUnlockItemList(args);
                    this.freshOutsideScore();
                    break;
                case GameEvent_1.GameEvent.FreshEventBtns:
                    this.freshEventBtns();
                    // this.fresh();
                    break;
                case GameEvent_1.GameEvent.UpdateHouseGrade:
                    this.updateHouseRate(args);
                    // this.fresh();
                    break;
                case GameEvent_1.GameEvent.UpdateValuePack:
                    this.showValuePack();
                    break;
                case GameEvent_1.GameEvent.GameMianRed:
                    this.mianRedUpdate();
                    break;
                case GameEvent_1.GameEvent.UpdateManorPower:
                    this.updateManorWaterPower();
                    break;
                case GameEvent_1.GameEvent.NetWeak:
                    this.playNetWeakAni(args);
                    break;
                case GameEvent_1.GameEvent.OutRewardRed:
                    this.getOutRewardRed();
                    this.outFurnRed();
                    break;
                case GameEvent_1.GameEvent.SetHomeBtn:
                    this.setHomeBtn(args);
                    break;
                default:
                    break;
            }
        };
        /**
         * 播放货币获得动画
         * @param type 1 金币  2 钻石  3 庄园币
         */
        Home_1.prototype.showCurrencyAnim = function (type) {
            var _a, _b;
            if (type == 1) {
                (_a = this.currencyCoins.getComponent(Currency_1.Currency)) === null || _a === void 0 ? void 0 : _a.shwoAnim();
            }
            else if (type == 2) {
                (_b = this.currencyJewels.getComponent(Currency_1.Currency)) === null || _b === void 0 ? void 0 : _b.shwoAnim();
            }
            else if (type == 3) {
                //需要动画配合
                //this.currencyManorCoins.getComponent(Currency)?.shwoAnim();
            }
        };
        /**
         * 飞金币
         * isHang 是否挂机领取
         */
        Home_1.prototype.coinsFly = function (isHang) {
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.CurrencyFly);
            //播放动画
            this.showCurrencyAnim(1);
            if (isHang)
                return;
            //领取离线之后看看是否有章节礼包
            // this.openLevelGift();
        };
        /**
         * 离线
         * @param type 0登录之后进入游戏  1从后台切回来
         */
        Home_1.prototype.showOffline = function (type) {
            if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver) {
                return;
            }
            if (type == 0) {
                var curTime = Oops_1.oops.timer.getServerTime();
                var tipShow = Oops_1.oops.storage.get("tipShow");
                var tipTime = Oops_1.oops.storage.get("tipTime");
                var haveTime = curTime - SingletonModuleComp_1.smc.account.AccountModel.hangData.offLineRewardAt;
                if (haveTime >= (SingletonModuleComp_1.smc.account.AccountModel.hangData.offLineLimitTime * 60)) {
                    if (SingletonModuleComp_1.smc.account.AccountModel.isShowPay && SingletonModuleComp_1.smc.account.AccountModel.timeLimitOrder.size > 0 && ((!tipShow || tipShow == "2") || (curTime - parseInt(tipTime) > 0))) {
                        GameMgr_1.GameMgr.Instance.tips.push(GameUIConfig_1.UIID.LimitGift);
                    }
                    if (SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length > 0) {
                        GameMgr_1.GameMgr.Instance.tips.push(GameUIConfig_1.UIID.Chapter);
                    }
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Offline, SingletonModuleComp_1.smc.account.AccountModel.hangData);
                }
                else if (SingletonModuleComp_1.smc.account.AccountModel.isShowPay && SingletonModuleComp_1.smc.account.AccountModel.timeLimitOrder.size > 0 && ((!tipShow || tipShow == "2") || (curTime - parseInt(tipTime) > 0))) {
                    if (SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length > 0) {
                        GameMgr_1.GameMgr.Instance.tips.push(GameUIConfig_1.UIID.Chapter);
                    }
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.LimitGift);
                }
                else {
                    //检查是否有等级礼包
                    this.openLevelGift();
                }
            }
            else {
                //切回来检查是否有离线
                var curTime = Oops_1.oops.timer.getServerTime();
                var haveTime = curTime - SingletonModuleComp_1.smc.account.AccountModel.hangData.offLineRewardAt;
                if (haveTime >= (SingletonModuleComp_1.smc.account.AccountModel.hangData.offLineLimitTime * 60)) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Offline, SingletonModuleComp_1.smc.account.AccountModel.hangData);
                }
            }
        };
        Home_1.prototype.initUI = function () {
            //是否显示外出布景
            this.freshUiBtns(GameMgr_1.GameMgr.Instance.isOutside);
            //显示任务信息
            this.updateHomeTask();
            //等级信息
            this.showLevel();
            //等级礼包
            this.showLevelGift();
            //红点
            this.chapterRedDot();
            this.roleRedDot();
            this.decorateRedDot();
            /**立即刷新时间 */
            this.refreshOutTime();
        };
        Home_1.prototype.hideUI = function () {
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu", this.node, false);
            ViewUtil_1.ViewUtil.setNodeActiveByName("outsideMenu", this.node, false);
        };
        //种植界面需要隐藏的ui
        Home_1.prototype.isHideSeedPanel = function (hide) {
            console.log(hide);
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/topLeft", this.node, !hide);
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/info", this.node, !hide);
        };
        /**
         * 显示/隐藏评分
         * @returns
         */
        Home_1.prototype.btnScore = function () {
            var _this = this;
            if (this.scoreAnimating) {
                return;
            }
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var animation = this.outsideScore.getComponent(cc_1.Animation);
            if (this.scoreStatus == 0) {
                //展开
                animation.play("animOutsideMenuScoreOut");
                this.scoreAnimating = true;
                animation.on(cc_1.AnimationComponent.EventType.FINISHED, function () {
                    _this.scoreStatus = 1;
                    _this.scoreAnimating = false;
                }, this);
            }
            else {
                //隐藏
                animation.play("animOutsideMenuScoreIn");
                this.scoreAnimating = true;
                animation.on(cc_1.AnimationComponent.EventType.FINISHED, function () {
                    _this.scoreStatus = 0;
                    _this.scoreAnimating = false;
                }, this);
            }
        };
        Home_1.prototype.btnOusideQ = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.explanation.active = !this.explanation.active;
        };
        Home_1.prototype.initHouseGrade = function () {
            this.updateHouseRate(SingletonModuleComp_1.smc.account.AccountModel.houseRateData);
        };
        /**
         * 更新家具评分
         */
        Home_1.prototype.updateFurnitureScore = function (newScore) {
            if (newScore == SingletonModuleComp_1.smc.account.AccountModel.vm.furnitureScore) {
                //都不显示
                GameMgr_1.GameMgr.Instance.furnitureScoreStatus = DataObject_1.Score.nothing;
            }
            else if (newScore > SingletonModuleComp_1.smc.account.AccountModel.vm.furnitureScore) {
                GameMgr_1.GameMgr.Instance.furnitureScoreStatus = DataObject_1.Score.up;
            }
            else {
                GameMgr_1.GameMgr.Instance.furnitureScoreStatus = DataObject_1.Score.down;
            }
            SingletonModuleComp_1.smc.account.AccountModel.vm.furnitureScore = newScore;
        };
        /**
         * 更新装扮评分
         */
        Home_1.prototype.updateDressScore = function (newScore) {
            if (newScore == SingletonModuleComp_1.smc.account.AccountModel.vm.dressScore) {
                //都不显示
                GameMgr_1.GameMgr.Instance.dressScoreStatus = DataObject_1.Score.nothing;
            }
            else if (newScore > SingletonModuleComp_1.smc.account.AccountModel.vm.dressScore) {
                GameMgr_1.GameMgr.Instance.dressScoreStatus = DataObject_1.Score.up;
            }
            else {
                GameMgr_1.GameMgr.Instance.dressScoreStatus = DataObject_1.Score.down;
            }
            SingletonModuleComp_1.smc.account.AccountModel.vm.dressScore = newScore;
        };
        /**控制显示外出布景UI  true显示外出   false显示默认 */
        Home_1.prototype.freshUiBtns = function (active) {
            if (active === void 0) { active = true; }
            return __awaiter(this, void 0, void 0, function () {
                var trigger, npcTb;
                return __generator(this, function (_a) {
                    ViewUtil_1.ViewUtil.setNodeActiveByName("menu", this.node, !active);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("outsideMenu", this.node, active);
                    this.explanation.active = false;
                    if (active) {
                        trigger = SingletonModuleComp_1.smc.account.AccountModel.eventList.get(GameMgr_1.GameMgr.Instance.outsideEventData.triggerID);
                        ViewUtil_1.ViewUtil.setLabelStringByName("topBg/titleLabel", this.node, trigger.eventData.getTitleName());
                        npcTb = new Tablenpc_1.Tablenpc();
                        npcTb.init(trigger.eventData.eventNpc);
                        this.role.showSuitSkin(npcTb.npcDress);
                    }
                    return [2 /*return*/];
                });
            });
        };
        Home_1.prototype.freshManorUI = function (isManor) {
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/player", this.node, !isManor);
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/currencyCoins", this.node, !isManor);
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/currencyJewels", this.node, !isManor);
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/btn_role", this.node, !isManor);
            // ViewUtil.setNodeActiveByName("menu/top/eventList", this.node, !isManor);
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/btn_house", this.node, !isManor);
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/botLeft/mannorBtn/goBtn", this.node, !isManor);
            this.eventBtnList.active = !isManor;
            /***************************下面的是要显示的部分*/
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/manorMsg", this.node, isManor);
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/manorInfo", this.node, isManor);
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/currencyManorCoin", this.node, isManor);
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/manorWater", this.node, isManor);
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/btn_Seed", this.node, isManor);
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/botLeft/mannorBtn/backBtn", this.node, isManor);
            if (isManor) {
                this.updateManorWaterPower();
                if (DataManager_1.default.Instance.manorFanciData.has(4001) && DataManager_1.default.Instance.getManorFanciLevel(4001) == 0)
                    ViewUtil_1.ViewUtil.setNodeActiveByName("menu/botLeft/manorTreeBtn", this.node, true);
                else
                    ViewUtil_1.ViewUtil.setNodeActiveByName("menu/botLeft/manorTreeBtn", this.node, false);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("menu/botLeft/manorTreeBtn", this.node, false);
            }
        };
        /**刷新恢复庄园精力 */
        Home_1.prototype.updateManorWaterPower = function () {
            ViewUtil_1.ViewUtil.setLabelStringByName("menu/top/manorWater/Label", this.node, SingletonModuleComp_1.smc.account.AccountModel.manorPower + "/" + ManorLevelData_1.ManorLevelData.getAllData().find(function (x) { return x.id == SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel; }).actionPowerMax);
            ViewUtil_1.ViewUtil.findChildByName("menu/top/manorWater/pro", this.node).getComponent(cc_1.Sprite).fillRange = SingletonModuleComp_1.smc.account.AccountModel.manorPower / ManorLevelData_1.ManorLevelData.getAllData().find(function (x) { return x.id == SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel; }).actionPowerMax;
            this.unschedule(this.refreshManorPowerCdTime);
            if (SingletonModuleComp_1.smc.account.AccountModel.manorPower < ManorLevelData_1.ManorLevelData.getAllData().find(function (x) { return x.id == SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel; }).actionPowerMax) //精力不满，开启倒计时
             {
                ViewUtil_1.ViewUtil.findChildByName("menu/top/manorWater/cdLabel", this.node).active = true;
                if (SingletonModuleComp_1.smc.account.AccountModel.manorPowerResumeCdTime == 0)
                    SingletonModuleComp_1.smc.account.AccountModel.manorPowerResumeCdTime = Number(new GlobalData_1.GlobalData(39).value);
                //开启一个倒计时
                this.schedule(this.refreshManorPowerCdTime, 1);
            }
            else {
                SingletonModuleComp_1.smc.account.AccountModel.manorPowerResumeCdTime = 0;
                ViewUtil_1.ViewUtil.findChildByName("menu/top/manorWater/cdLabel", this.node).active = false;
            }
        };
        Home_1.prototype.refreshManorPowerCdTime = function () {
            if (SingletonModuleComp_1.smc.account.AccountModel.manorPowerResumeCdTime > 0) {
                SingletonModuleComp_1.smc.account.AccountModel.manorPowerResumeCdTime -= 1;
                ViewUtil_1.ViewUtil.setLabelStringByName("menu/top/manorWater/cdLabel", this.node, StringUtil_1.StringUtil.formatTime(SingletonModuleComp_1.smc.account.AccountModel.manorPowerResumeCdTime));
                if (SingletonModuleComp_1.smc.account.AccountModel.manorPowerResumeCdTime == 0 && SingletonModuleComp_1.smc.account.AccountModel.manorPower < ManorLevelData_1.ManorLevelData.getAllData().find(function (x) { return x.id == SingletonModuleComp_1.smc.account.AccountModel.vm.manorLevel; }).actionPowerMax) //精力不满，开启倒计时
                    SingletonModuleComp_1.smc.account.AccountModel.manorPower += 1;
            }
            else {
                this.updateManorWaterPower();
            }
        };
        /**
         * 刷新主界面任务进度
         */
        Home_1.prototype.updateHomeTask = function () {
            var _a;
            if (!SingletonModuleComp_1.smc.account.AccountModel.isMainTaskCompleted) {
                //主线任务未完成
                var dec = (_a = this.mainTask.getChildByName("Layout")) === null || _a === void 0 ? void 0 : _a.getChildByName("dec");
                var data = SingletonModuleComp_1.smc.account.AccountModel.mainTaskData;
                this.taskData = new TaskData_1.TaskData(1, data.taskId);
                // ViewUtil.setLabelStringByName("Layout/task", this.mainTask, this.taskData.getMainTaskDesc());
                var c = "<color =#66DA61>";
                if (data.isGetReward == 1) {
                    c = "<color = #DA6161>"; //未完成
                }
                dec.getComponent(cc_5.RichText).string = "<color = #AC8F8A>" + this.taskData.getMainTaskDesc() + c + "(" + data.completed + "/" + this.taskData.getMainTaskValue() + ")" + "</color></color>";
                //ViewUtil.setLabelStringByName("Layout/progress", this.mainTask, "(" + data.completed + "/" + this.taskData.getMainTaskValue() + ")", { color: c });
                ViewUtil_1.ViewUtil.setNodeActiveByName("yes", this.mainTask, data.isGetReward == 2);
            }
            else {
                //主线已完成，显示当前每日任务，第一个未领取的
                // let dailyTask = DataMgr.getHomeDailyTask();
                // if (dailyTask) {
                //     //存在
                //     let taskData = new TaskData(2, dailyTask.taskId);
                //     ViewUtil.setLabelStringByName("Layout/task", this.mainTask, taskData.getDailyTaskDesc());
                //     let c = new Color(102, 218, 97);
                //     if (dailyTask.isGetReward == 1) {
                //         c = new Color(218, 97, 97);//未完成
                //     }
                //     ViewUtil.setLabelStringByName("Layout/progress", this.mainTask, "(" + dailyTask.completed + "/" + taskData.value + ")", { color: c });
                //     ViewUtil.setNodeActiveByName("yes", this.mainTask, dailyTask.isGetReward == 2);
                // } else {
                //     //不存在 全部隐藏
                //     this.mainTask.active = false;
                // }
                //主线任务已完成，隐藏主线任务
                this.mainTask.active = false;
            }
            //红点
            var redDot = RedDotMgr_1.RedDotMgr.getTaskRedDot();
            // ViewUtil.setNodeActiveByName("redDot", this.taskEntry, redDot);
        };
        /**
         * 玩家等级
         */
        Home_1.prototype.showLevel = function () {
            var playerData = new PlayerData_1.PlayerData(SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel);
            this.player.getComponent(cc_1.ProgressBar).progress = SingletonModuleComp_1.smc.account.AccountModel.playerLevelExp / playerData.exp;
        };
        /**
         * 章节红点
         */
        Home_1.prototype.chapterRedDot = function () {
        };
        /**
         * 开服活动
         */
        Home_1.prototype.btnOpenserver = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.new7DayInfo(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.OpenServer, data);
            });
        };
        /**
        * 章节
        */
        Home_1.prototype.btnChapter = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Chapter);
        };
        /**
         * 显示等级礼包
         */
        Home_1.prototype.showLevelGift = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            // ViewUtil.setNodeActiveByName("topNewLeft/level_gift", this.top, smc.account.AccountModel.levelGiftList.length > 0);
            if (SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length > 0) {
                //个数
                //ViewUtil.setLabelStringByName("topNewLeft/level_gift/msg_bg/msg", this.top, smc.account.AccountModel.levelGiftUngetCount.toString());
            }
        };
        /**
         * 弹出等级礼包
         */
        Home_1.prototype.openLevelGift = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length > 0) {
                //弹框显示等级礼包
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Chapter);
            }
        };
        /**
         * 升级后自动弹出等级礼包和超值礼包(夏日清凉)
         */
        Home_1.prototype.autoOpenLevelGift = function () {
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel != DataMgr_1.DataMgr.currLevel) {
                DataMgr_1.DataMgr.currLevel = SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel;
                var funOpen = new TablefunctionOpen_1.TablefunctionOpen();
                funOpen.init(104);
                var limit = new LimitData_1.LimitData(funOpen.limitId);
                if (SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel == parseInt(limit.typeValue) && !SingletonModuleComp_1.smc.account.AccountModel.videoReward) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.ValuePack, { callFun: this.autoOpenLevelGiftPop, target: this });
                }
                else {
                    this.autoOpenLevelGiftPop();
                }
            }
        };
        /**
            * 升级后自动弹出等级礼包
            */
        Home_1.prototype.autoOpenLevelGiftPop = function () {
            GameMgr_1.GameMgr.Instance.showLevel = true;
            this.openLevelGift();
            /**获取升级事件 */
            var triggers = TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.UpLevel);
            if (triggers && !GameMgr_1.GameMgr.Instance.firstCheck) {
                for (var _i = 0, triggers_1 = triggers; _i < triggers_1.length; _i++) {
                    var i = triggers_1[_i];
                    i.checkTrigger(SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel);
                }
            }
            HttpPost_1.HttpPost.instance.getUserInfo(function (data) {
                SingletonModuleComp_1.smc.account.AccountModel.vm.giveTimes = data.giveTimes;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.CheckCarEvent);
            });
        };
        /**
         * 打开等级礼包
         */
        Home_1.prototype.btnLevelGift = function () {
            this.openLevelGift();
        };
        /**
         * 首充
         */
        Home_1.prototype.btnFirstRecharge = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.firstRechargeInfo(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.FirstRecharge, data);
            });
        };
        /**
        * 签到
        */
        Home_1.prototype.btnSign = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getSignInfo(function (data) {
                SingletonModuleComp_1.smc.account.AccountModel.rewardFinal = data.rewardFinal;
                SingletonModuleComp_1.smc.account.AccountModel.signStage = data.signStage;
                SingletonModuleComp_1.smc.account.AccountModel.signedData = data.signedData;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Sign);
            });
        };
        /**
         * 房屋评级
         */
        Home_1.prototype.btnHouseGrade = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var limitConditionData = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.RoomRating);
            if (!limitConditionData.satisfied) {
                //功能未开启
                Oops_1.oops.gui.toast(limitConditionData.unSatisfiedDesc);
                return;
            }
            HttpPost_1.HttpPost.instance.getHouseDetail(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.HouseGrade, data);
            });
            //todo
        };
        /**
         * tilegame
         */
        Home_1.prototype.btnTileGame = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.openTileGame();
        };
        Home_1.prototype.openTileGame = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getMiniGame(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.TileGameHome, data);
            });
        };
        /**
         * 排行榜
         */
        Home_1.prototype.btnRank = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (cc_2.sys.platform === cc_2.sys.Platform.WECHAT_GAME && !SingletonModuleComp_1.smc.account.AccountModel.wxInfoReject) {
                DataMgr_1.DataMgr.getUserInfo(GameUIConfig_1.UIID.Rank);
            }
            else {
                HttpPost_1.HttpPost.instance.getRankingDetail(1, function (data) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Rank, data);
                });
            }
        };
        /**
         * 套装商城
         */
        Home_1.prototype.btnStoreSuit = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.StoreSuit);
        };
        /**
         * 种子背包
         */
        Home_1.prototype.btnSeedBag = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorSeed, { "aimPlotId": 0 });
        };
        /**
         * 商城
         */
        Home_1.prototype.btnStore = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Store, { "storeType": DataObject_1.StoreBuyType.Dress });
        };
        /**
         * 问卷
         */
        Home_1.prototype.btnSurvey = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.questionnaireInfo(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.SurveyPop, data);
            });
        };
        /**
         * 特权卡
         */
        Home_1.prototype.btnPrivilegeCard = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getCardDetail(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.PrivilegeCard, data);
            });
        };
        /**
         * 装扮角色
         */
        Home_1.prototype.btnRole = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var limitConditionData = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Dress);
            if (!limitConditionData.satisfied) {
                //功能未开启
                Oops_1.oops.gui.toast(limitConditionData.unSatisfiedDesc);
                return;
            }
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Dress, { "type": DataObject_1.DecorateType.Dress, "newUser": false, "toggleMainType": 1, "toggleSubType": 0 });
        };
        /**
         * 超值礼包（夏日清凉）
         */
        Home_1.prototype.btnValuePack = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.ValuePack, { callFun: null });
        };
        /**
         * 时装红点
         */
        Home_1.prototype.roleRedDot = function () {
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/btn_role/redDot", this.node, RedDotMgr_1.RedDotMgr.getDressHomeRedDot());
        };
        /**
         * 装修
         */
        Home_1.prototype.btnDecorate = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.openDecorate();
        };
        Home_1.prototype.btnManorDecorate = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            GameMgr_1.GameMgr.Instance.ConstructionState = true;
        };
        Home_1.prototype.openDecorate = function () {
            if (SingletonModuleComp_1.smc.account.AccountModel.guideStep == 6) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Furniture, { "type": DataObject_1.DecorateType.Furniture, "toggleMainType": 1, "toggleSubType": 2 });
            }
            else {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Furniture, { "type": DataObject_1.DecorateType.Furniture, "toggleMainType": 1, "toggleSubType": 0 });
            }
            this.hideUI();
        };
        /**
         * 装修红点
         */
        Home_1.prototype.decorateRedDot = function () {
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/btn_decorate/redDot", this.node, RedDotMgr_1.RedDotMgr.getFurnitureHomeRedDot());
            /**外出红点 */
            ViewUtil_1.ViewUtil.setNodeActiveByName("outsideMenu/btn_decorate/redDot", this.node, false);
        };
        /**
         * 任务
         */
        Home_1.prototype.btnTask = function (event, data) {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var type = parseInt(data);
            if (type == 0) {
                //主线任务
                if (SingletonModuleComp_1.smc.account.AccountModel.mainTaskData.isGetReward == 2) {
                    var guide_id = 0;
                    if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide && SingletonModuleComp_1.smc.guide.GuideModel.step < 31) {
                        guide_id = 31;
                    }
                    //可领取 直接领 领完了刷新
                    HttpPost_1.HttpPost.instance.getTaskReward(guide_id, 1, SingletonModuleComp_1.smc.account.AccountModel.mainTaskData.taskId, function (data) {
                        //打点
                        SdkPlatform_1.SdkPlatform.mainTask(SingletonModuleComp_1.smc.account.AccountModel.mainTaskData.taskId);
                        /**主线事件 */
                        var triggers = TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.MainTask);
                        if (triggers && !GameMgr_1.GameMgr.Instance.firstCheck) {
                            for (var _i = 0, triggers_2 = triggers; _i < triggers_2.length; _i++) {
                                var i = triggers_2[_i];
                                i.checkTrigger();
                            }
                        }
                        /**主线事件 */
                        var triggers2 = TriggerData_1.TriggerData.getAllAimEventList(TriggerData_1.TriggerEnum.UpLevel);
                        if (triggers2) {
                            for (var _a = 0, triggers2_1 = triggers2; _a < triggers2_1.length; _a++) {
                                var i = triggers2_1[_a];
                                i.checkTrigger(SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel);
                            }
                        }
                        //显示掉落
                        var dropDatas = DropMgr_1.DropMgr.getDropData(_this.taskData.item);
                        var dropInfo = new DataObject_1.DropInfo();
                        dropInfo.dropData = dropDatas;
                        dropInfo.dropFrom = DataObject_1.DropFrom.Task;
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                        //更新数据
                        DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                    });
                }
                else {
                    //跳转
                    //引导未完成不进行跳转
                    if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver) {
                        return;
                    }
                    DataMgr_1.DataMgr.gotoFunction([], this.taskData.jump);
                }
            }
            else {
                //任务
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Task, { "type": 1 }); //1 每日任务  2 主线任务
            }
            //刷新房屋评级状态
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateHouseGrade, data.houseRate);
        };
        /**
         * 功能开启
         * 商店  拍照  房屋评分  普通排行榜  首充
         */
        Home_1.prototype.checkFuncOpen = function (functionCheckType) {
            if (functionCheckType == DataObject_1.FunctionCheckType.BoxOpen) {
                if (!this.funcOpenRoomRating) {
                    //开箱的时候检查
                    this.funcOpenRoomRating = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.RoomRating).satisfied;
                }
                //房屋评级入口按钮是否显示
                this.houseBtn.active = this.funcOpenRoomRating && !GameMgr_1.GameMgr.Instance.manorMode;
                if (!this.funcOpenFirstRecharge) {
                    //开箱的时候检查
                    this.funcOpenFirstRecharge = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.FirstRecharge).satisfied;
                    this.showFirstRecharge();
                }
                if (!this.funcOpenOpenServe) {
                    //开箱的时候检查
                    this.funcOpenOpenServe = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.OpenServer).satisfied;
                }
                //开服活动入口按钮是否显示
                ViewUtil_1.ViewUtil.setNodeActiveByName("lay/open_server", this.sildLeft, this.funcOpenOpenServe && Boolean(SingletonModuleComp_1.smc.account.AccountModel.openServerOpen));
            }
            else if (functionCheckType == DataObject_1.FunctionCheckType.PlayerLevelup) {
                if (!this.funcOpenStore) {
                    //升级的时候检查
                    this.funcOpenStore = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Store).satisfied;
                    ViewUtil_1.ViewUtil.setNodeActiveByName("lay/btn_store", this.sildLeft, this.funcOpenStore);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("lay/btn_store_suit", this.node, this.funcOpenStore);
                }
                if (!this.funcOpenPhoto) {
                    //升级的时候检查
                    this.funcOpenPhoto = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Photo).satisfied;
                    ViewUtil_1.ViewUtil.setNodeActiveByName("menu/more/funcs/photo", this.node, this.funcOpenPhoto);
                }
                if (!this.funcOpenNormalRanklist) {
                    //升级的时候检查
                    this.funcOpenNormalRanklist = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.NormalRanklist).satisfied;
                }
                ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/topRight/rank", this.node, this.funcOpenNormalRanklist);
                if (!this.funcOpenSurvey) {
                    this.funcOpenSurvey = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Survey).satisfied;
                }
                ViewUtil_1.ViewUtil.setNodeActiveByName("lay/survey", this.sildLeft, this.funcOpenSurvey && !SingletonModuleComp_1.smc.account.AccountModel.surveyOver);
                if (!this.funcOpenPet) {
                    //升级的时候检查
                    this.funcOpenPet = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Pet).satisfied;
                }
                ViewUtil_1.ViewUtil.setNodeActiveByName("menu/mannorBtn", this.node, this.funcOpenPet);
                if (!this.funcOpenValuePack) {
                    //升级的时候检查
                    this.funcOpenValuePack = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.ValuePack).satisfied;
                }
                ViewUtil_1.ViewUtil.setNodeActiveByName("topNewLeft/value_gift", this.top, this.funcOpenValuePack && !SingletonModuleComp_1.smc.account.AccountModel.videoReward);
                if (!this.funcOpenPass) {
                    //升级的时候检查
                    this.funcOpenPass = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Pass).satisfied;
                }
                ViewUtil_1.ViewUtil.setNodeActiveByName("lay/btn_pass", this.sildLeft, this.funcOpenPass && SingletonModuleComp_1.smc.account.AccountModel.isShowPay);
                if (!this.funcOpenPrivilegeCard) {
                    //升级的时候检查
                    this.funcOpenPrivilegeCard = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.PrivilegeCard).satisfied;
                }
                ViewUtil_1.ViewUtil.setNodeActiveByName("lay/privilege_card", this.sildLeft, SingletonModuleComp_1.smc.account.AccountModel.isShowPay && this.funcOpenPrivilegeCard);
                if (!this.funcWeekActivity) {
                    //升级的时候检查
                    this.funcWeekActivity = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.WeekActivity).satisfied;
                }
                ViewUtil_1.ViewUtil.setNodeActiveByName("lay/btn_week", this.sildLeft, SingletonModuleComp_1.smc.account.AccountModel.isShowPay && this.funcWeekActivity && Boolean(SingletonModuleComp_1.smc.account.AccountModel.weekActivityIsOpen));
            }
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/sildLeft", this.node, this.isCanShow());
        };
        /**
         * 是否显示充值
         */
        Home_1.prototype.showPay = function () {
            //首充
            this.showFirstRecharge();
            //其他
        };
        /**
         * 是否显示超值礼包
         */
        Home_1.prototype.showValuePack = function () {
            ViewUtil_1.ViewUtil.setNodeActiveByName("topNewLeft/value_gift", this.top, this.funcOpenValuePack && !SingletonModuleComp_1.smc.account.AccountModel.videoReward);
        };
        /** 首充 */
        Home_1.prototype.showFirstRecharge = function () {
            ViewUtil_1.ViewUtil.setNodeActiveByName("topNewLeft/first_recharge", this.top, SingletonModuleComp_1.smc.account.AccountModel.isShowPay && SingletonModuleComp_1.smc.account.AccountModel.firstRecharge && this.funcOpenFirstRecharge);
        };
        /**设置列表 */
        Home_1.prototype.setUnlockItemList = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var path, hasSetNext, promises;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = GameResPath_1.GameResPath.getOutUnlockItemPath();
                            this.outUnlockItemsContent.removeAllChildren();
                            hasSetNext = false;
                            promises = data.map(function (i, idx) { return __awaiter(_this, void 0, void 0, function () {
                                var node, UNLOCKITEM, node, UNLOCKITEM, newNodes, discardedNodes, _i, discardedNodes_1, node_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(this.outUnlockItemsContent.children.length < data.length)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(path, BundleConfig_1.default.instance.guiBundle.name)];
                                        case 1:
                                            node = _a.sent();
                                            UNLOCKITEM = node.getComponent(UnlockItem_1.UnlockItem);
                                            node.parent = this.outUnlockItemsContent;
                                            if (!hasSetNext && (i.condition > SingletonModuleComp_1.smc.account.AccountModel.vm.outFurnitureScore || idx == data.length - 1)) {
                                                hasSetNext = true;
                                                this.outUnlockItem.init(i);
                                            }
                                            UNLOCKITEM === null || UNLOCKITEM === void 0 ? void 0 : UNLOCKITEM.init(i, idx == data.length - 1);
                                            return [3 /*break*/, 3];
                                        case 2:
                                            node = this.outUnlockItemsContent.children[idx];
                                            UNLOCKITEM = node.getComponent(UnlockItem_1.UnlockItem);
                                            if (!hasSetNext && (i.condition > SingletonModuleComp_1.smc.account.AccountModel.vm.outFurnitureScore || idx == data.length - 1)) {
                                                hasSetNext = true;
                                                this.outUnlockItem.init(i);
                                            }
                                            UNLOCKITEM === null || UNLOCKITEM === void 0 ? void 0 : UNLOCKITEM.init(i, idx == data.length - 1);
                                            newNodes = this.outUnlockItemsContent.children.slice(0, data.length);
                                            discardedNodes = this.outUnlockItemsContent.children.slice(data.length);
                                            // 删除多余的节点
                                            for (_i = 0, discardedNodes_1 = discardedNodes; _i < discardedNodes_1.length; _i++) {
                                                node_1 = discardedNodes_1[_i];
                                                node_1.destroy();
                                            }
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [4 /*yield*/, Promise.all(promises)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**刷新外出数据 */
        Home_1.prototype.freshOutsideScore = function () {
            this.outFurnitureMarkOut.string = "".concat(SingletonModuleComp_1.smc.account.AccountModel.vm.outFurnitureScore);
            ViewUtil_1.ViewUtil.setLabelStringByName("coins", this.rewardBtn, "x ".concat(SingletonModuleComp_1.smc.account.AccountModel.outAvailableReward));
        };
        /**刷新房屋评级数据*/
        Home_1.prototype.updateHouseRate = function (data) {
            if (!data || data.isOpen == 0) {
                return;
            }
            SingletonModuleComp_1.smc.account.AccountModel.houseRateData.taskConfigKey = data.taskConfigKey;
            SingletonModuleComp_1.smc.account.AccountModel.houseRateData.houseRateConfigKey = data.houseRateConfigKey;
            if (data.isFull) {
                SingletonModuleComp_1.smc.account.AccountModel.houseRateData.isFull = data.isFull;
                ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/btn_house/titleLab", this.node, !Boolean(data.isFull));
                ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/btn_house/rentBg", this.node, !Boolean(data.isFull));
            }
            else {
                var taskData = new TaskData_1.TaskData(3, data.taskConfigKey);
                var itemDropData = DropMgr_1.DropMgr.getSingleDropData(taskData.value > 10000 ? 1 : 2, taskData.value, taskData.value1);
                ViewUtil_1.ViewUtil.setLabelStringByName("menu/top/btn_house/titleLab", this.node, Oops_1.oops.language.getLangByID("houseGrade.wantGet", itemDropData[0].name));
            }
            var houseData = new houseRateData_1.houseRateData(data.houseRateConfigKey);
            var str = new LangData_1.LangData(houseData.rateName).getDesc();
            ViewUtil_1.ViewUtil.setLabelStringByName("menu/top/btn_house/main_icon_fwpj_1/Label", this.node, str);
            this.houseRateRed(Boolean(data.redDot));
        };
        //房屋评级红点
        Home_1.prototype.houseRateRed = function (bol) {
            // ViewUtil.setNodeActiveByName("menu/top/btn_house/main_icon_fwpj_1/redDot", this.node, bol);
        };
        //更多入口红点
        Home_1.prototype.moreRed = function (bol) {
            if (bol === void 0) { bol = false; }
            var has = this.moreStatus & NetDetect_1.MORE_STATUS.PROMPT;
            if ((bol && !has) || (!bol && has))
                this.moreStatus ^= NetDetect_1.MORE_STATUS.PROMPT;
            this.updateMoreAni(this.moreStatus);
        };
        //更多
        Home_1.prototype.openMore = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.More);
        };
        /**
         * 刷新外出时间
         */
        Home_1.prototype.refreshOutTime = function () {
            if (!GameMgr_1.GameMgr.Instance.isOutside) {
                return;
            }
            var trigger = SingletonModuleComp_1.smc.account.AccountModel.eventList.get(GameMgr_1.GameMgr.Instance.outsideEventData.triggerID);
            if (trigger.eventId == "0") {
                return;
            }
            var countTime = (trigger.eventData.eventTime + trigger.startTime) - Math.ceil(Date.now() / 1000);
            //检查是否可以结算
            var canOver = DataManager_1.default.Instance.getOutSideFurnitureNum(SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureCache) == SingletonModuleComp_1.smc.account.AccountModel.openBoxTimesMax;
            ViewUtil_1.ViewUtil.setLabelStringByName("outsideMenu/tips/proLabel", this.node, Oops_1.oops.language.getLangByID("outside.proNum", DataManager_1.default.Instance.getOutSideFurnitureNum(SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureCache), SingletonModuleComp_1.smc.account.AccountModel.openBoxTimesMax));
            if (trigger.eventData.eventTime > 0) {
                if (countTime > 0) {
                    // 显示倒计时
                    this.outEventTimer.node.parent.active = true;
                    var time = StringUtil_1.StringUtil.formatActivityTimeWithSec(countTime);
                    ViewUtil_1.ViewUtil.setLabelString(this.outEventTimer.node, time);
                    var outMenu = ViewUtil_1.ViewUtil.getChildByName("outsideMenu", this.node);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("btn_decorate", outMenu, true);
                }
                else {
                    // 取消倒计时
                    this.outEventTimer.node.parent.active = false;
                    var outMenu = ViewUtil_1.ViewUtil.getChildByName("outsideMenu", this.node);
                    ViewUtil_1.ViewUtil.setNodeActiveByName("btn_decorate", outMenu, false);
                }
            }
            else {
                // 取消倒计时
                this.outEventTimer.node.parent.active = false;
                ViewUtil_1.ViewUtil.setSpriteGray(this.rewardBtn, !canOver);
                var outMenu = ViewUtil_1.ViewUtil.getChildByName("outsideMenu", this.node);
                ViewUtil_1.ViewUtil.setNodeActiveByName("btn_decorate", outMenu, true);
            }
            /**是否限时事件 */
            if (trigger.eventData.eventTime < 0) {
                // 箱子开完
                ViewUtil_1.ViewUtil.setSpriteGray(this.rewardBtn, !canOver);
            }
            else {
                // 箱子开完或者时间已经结束
                var countTime_1 = (GameMgr_1.GameMgr.Instance.outsideEventData.eventTime + trigger.startTime) - Math.ceil(Date.now() / 1000);
                ViewUtil_1.ViewUtil.setSpriteGray(this.rewardBtn, !canOver && countTime_1 > 0);
            }
        };
        Home_1.prototype.outFurnRed = function () {
            var data = SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureOwnedData;
            var dataLen = data.entries();
            var bol = false;
            for (var _i = 0, dataLen_1 = dataLen; _i < dataLen_1.length; _i++) {
                var _a = dataLen_1[_i], key = _a[0], val = _a[1];
                if (bol) {
                    break;
                }
                var value = val.entries();
                for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                    var _c = value_1[_b], k = _c[0], v = _c[1];
                    if (bol) {
                        break;
                    }
                    for (var i = 0, len = v.length; i < len; i++) {
                        if (v[i].leftAmount > 0) {
                            bol = true;
                            break;
                        }
                    }
                }
            }
            ViewUtil_1.ViewUtil.setNodeActiveByName("outsideMenu/tips/redDot", this.node, bol);
        };
        /**可领奖   //判断是否要等待时间结束，或者时间已经结束 */
        Home_1.prototype.getRewardable = function () {
            if (GameMgr_1.GameMgr.Instance.isOutside) {
                var trigger = SingletonModuleComp_1.smc.account.AccountModel.eventList.get(GameMgr_1.GameMgr.Instance.outsideEventData.triggerID);
                var countTime = (GameMgr_1.GameMgr.Instance.outsideEventData.eventTime + trigger.startTime) - Math.ceil(Date.now() / 1000);
                var rewardable = trigger.eventData.eventTime < 0 || countTime < 0;
                return rewardable;
            }
            return false;
        };
        /**获取外出奖励红点 */
        Home_1.prototype.getOutRewardRed = function () {
            if (!GameMgr_1.GameMgr.Instance.isOutside) {
                return;
            }
            var bol = true;
            var trigger = SingletonModuleComp_1.smc.account.AccountModel.eventList.get(GameMgr_1.GameMgr.Instance.outsideEventData.triggerID);
            var countTime = (GameMgr_1.GameMgr.Instance.outsideEventData.eventTime + trigger.startTime) - Math.ceil(Date.now() / 1000);
            var canOver = DataManager_1.default.Instance.getOutSideFurnitureNum(SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureCache) == SingletonModuleComp_1.smc.account.AccountModel.openBoxTimesMax;
            if (trigger.eventData.eventTime < 0) {
                if (!canOver) {
                    bol = false;
                }
            }
            else {
                if (!canOver && countTime > 0) {
                    bol = false;
                }
            }
            ViewUtil_1.ViewUtil.setNodeActiveByName("outsideMenu/rewardBtn/redDot", this.node, bol);
        };
        /**获取外出奖励 */
        Home_1.prototype.getOutReward = function () {
            return __awaiter(this, void 0, void 0, function () {
                var trigger, countTime, canOver;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                            if (!GameMgr_1.GameMgr.Instance.isOutside) {
                                return [2 /*return*/];
                            }
                            trigger = SingletonModuleComp_1.smc.account.AccountModel.eventList.get(GameMgr_1.GameMgr.Instance.outsideEventData.triggerID);
                            countTime = (GameMgr_1.GameMgr.Instance.outsideEventData.eventTime + trigger.startTime) - Math.ceil(Date.now() / 1000);
                            canOver = DataManager_1.default.Instance.getOutSideFurnitureNum(SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureCache) == SingletonModuleComp_1.smc.account.AccountModel.openBoxTimesMax;
                            if (trigger.eventData.eventTime < 0) {
                                if (!canOver) {
                                    Oops_1.oops.gui.toast("".concat(Oops_1.oops.language.getLangByID("outside.needGetAll")));
                                    return [2 /*return*/];
                                }
                            }
                            else {
                                if (!canOver && countTime > 0) {
                                    Oops_1.oops.gui.toast("".concat(Oops_1.oops.language.getLangByID("outside.needGetAll")));
                                    return [2 /*return*/];
                                }
                            }
                            GameMgr_1.GameMgr.Instance.outsideEventData.mapCache.clear();
                            return [4 /*yield*/, GameMgr_1.GameMgr.Instance.mapManager.setScreenToCenter(GameMgr_1.GameMgr.Instance.sceneMgr.node, 1.3)];
                        case 1:
                            _a.sent();
                            // //todo先拍照
                            Shoot_1.Shoot.takePhotoByOther(function () {
                                DataManager_1.default.Instance.getOutReward(GameMgr_1.GameMgr.Instance.outsideEventData.id, function () {
                                    _this.isBackRoom = true;
                                    _this.backFromOutside();
                                });
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        Home_1.prototype.btn_checkOutSide = function () {
            if (DataManager_1.default.Instance.getOutSideFurnitureNum(SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureCache) < SingletonModuleComp_1.smc.account.AccountModel.openBoxTimesMax) {
                //打开装修界面
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                this.openDecorate();
            }
        };
        /**刷新事件按钮 */
        Home_1.prototype.freshEventBtns = function () {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var outsideEventList, outsideList, btnNodes, btnNodes1, i, data, btnComp, node, i, j, data, btnComp, node, k;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            outsideEventList = TriggerData_1.TriggerData.getAllEventTypeList(TriggerData_1.EventTypeEnum.adotPet);
                            outsideEventList = outsideEventList.concat(TriggerData_1.TriggerData.getAllEventTypeList(TriggerData_1.EventTypeEnum.businessEventDress));
                            outsideEventList = outsideEventList.concat(TriggerData_1.TriggerData.getAllEventTypeList(TriggerData_1.EventTypeEnum.businessEventFurniture));
                            outsideList = TriggerData_1.TriggerData.getAllEventTypeList(TriggerData_1.EventTypeEnum.recoverItems);
                            btnNodes = this.eventBtnList.children;
                            btnNodes1 = this.eventBtnList1.getComponentsInChildren(EventItem_1.EventItem);
                            i = 0;
                            _c.label = 1;
                        case 1:
                            if (!(i < outsideEventList.length)) return [3 /*break*/, 5];
                            data = outsideEventList[i].eventData;
                            if (!(i < btnNodes.length)) return [3 /*break*/, 2];
                            btnComp = btnNodes[i].getComponent(EventItem_1.EventItem);
                            btnComp && btnComp.init(data);
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(GameResPath_1.GameResPath.getOutEventItemPath(), BundleConfig_1.default.instance.guiBundle.name)];
                        case 3:
                            node = _c.sent();
                            (_a = node.getComponent(EventItem_1.EventItem)) === null || _a === void 0 ? void 0 : _a.init(data);
                            node.parent = this.eventBtnList;
                            _c.label = 4;
                        case 4:
                            i++;
                            return [3 /*break*/, 1];
                        case 5:
                            // 删除多余的按钮
                            for (i = btnNodes.length - 1; i >= outsideEventList.length; i--) {
                                btnNodes[i].destroy();
                            }
                            j = 0;
                            _c.label = 6;
                        case 6:
                            if (!(j < outsideList.length)) return [3 /*break*/, 10];
                            data = outsideList[j].eventData;
                            if (!(j < btnNodes1.length)) return [3 /*break*/, 7];
                            btnComp = btnNodes1[j];
                            btnComp && btnComp.init(data);
                            return [3 /*break*/, 9];
                        case 7: return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(GameResPath_1.GameResPath.getOutEventItemPath(), BundleConfig_1.default.instance.guiBundle.name)];
                        case 8:
                            node = _c.sent();
                            (_b = node.getComponent(EventItem_1.EventItem)) === null || _b === void 0 ? void 0 : _b.init(data);
                            node.parent = this.eventBtnList1;
                            node.angle = 90;
                            _c.label = 9;
                        case 9:
                            j++;
                            return [3 /*break*/, 6];
                        case 10:
                            btnNodes1 = this.eventBtnList1.getComponentsInChildren(EventItem_1.EventItem); // 将 children 转换为数组
                            // 删除多余的按钮
                            for (k = btnNodes1.length - 1; k >= outsideList.length; k--) {
                                btnNodes1[k].node.destroy();
                            }
                            this.setOutside();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Home_1.prototype.setOutside = function () {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var outsideList, btnNodes, j, data, btnComp, node, k;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            outsideList = TriggerData_1.TriggerData.getAllEventTypeList(TriggerData_1.EventTypeEnum.outside);
                            btnNodes = this.topRightv.getComponentsInChildren(EventItem_1.EventItem);
                            j = 0;
                            _b.label = 1;
                        case 1:
                            if (!(j < outsideList.length)) return [3 /*break*/, 5];
                            data = outsideList[j].eventData;
                            if (!(j < btnNodes.length)) return [3 /*break*/, 2];
                            btnComp = btnNodes[j];
                            btnComp && btnComp.init(data);
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(GameResPath_1.GameResPath.getOutEventItemPath(), BundleConfig_1.default.instance.guiBundle.name)];
                        case 3:
                            node = _b.sent();
                            (_a = node.getComponent(EventItem_1.EventItem)) === null || _a === void 0 ? void 0 : _a.init(data);
                            node.parent = this.topRightv;
                            _b.label = 4;
                        case 4:
                            j++;
                            return [3 /*break*/, 1];
                        case 5:
                            btnNodes = this.topRightv.getComponentsInChildren(EventItem_1.EventItem); // 将 children 转换为数组
                            // 删除多余的按钮
                            for (k = btnNodes.length - 1; k >= outsideList.length; k--) {
                                btnNodes[k].node.destroy();
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        // private showActivity() {
        //     oops.audio.playEffect(AudioType.Sound_Click);
        //     if (!this.isCanShow()) {
        //         return;
        //     }
        //     this.isShowActivity = !this.isShowActivity;
        //     if (this.isShowActivity) {
        //         ViewUtil.setNodeActiveByName("menu/botMask/botLeft/activityLay", this.node, this.isShowActivity);
        //         ViewUtil.setNodeActiveByName("menu/botMask/botLeft/show_activity", this.node, !this.isShowActivity);
        //     } else {
        //         tween(this.botMask).to(0.2, { width: 127 }, { easing: "circOut" }).call(() => {
        //             ViewUtil.setNodeActiveByName("menu/botMask/botLeft/activityLay", this.node, this.isShowActivity);
        //             ViewUtil.setNodeActiveByName("menu/botMask/botLeft/show_activity", this.node, !this.isShowActivity);
        //         }).start();
        //     }
        // }
        //宠物
        Home_1.prototype.btn_pet = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var limitConditionData = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Pet);
            if (!limitConditionData.satisfied) {
                //功能未开启
                Oops_1.oops.gui.toast(limitConditionData.unSatisfiedDesc);
                return;
            }
            if (SingletonModuleComp_1.smc.account.AccountModel.pet.length <= 0) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetChoose);
            }
            else {
                HttpPost_1.HttpPost.instance.petList(function (data) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetMain, data);
                });
            }
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.More);
        };
        Home_1.prototype.openPass = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.passInfo(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Pass, data);
            });
        };
        Home_1.prototype.manorLockTree = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                            if ((DataManager_1.default.Instance.getManorFanciLevel(4001) && DataManager_1.default.Instance.getManorFanciLevel(4001) > 0) || GameMgr_1.GameMgr.Instance.manorTreeLock) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, GameMgr_1.GameMgr.Instance.sceneMgr.setManorTree()];
                        case 1:
                            //先去查找有无位置
                            if (_a.sent()) {
                                HttpPost_1.HttpPost.instance.landUnlock(4001, function (data) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        //刷新摇钱树状态----todo
                                        DataManager_1.default.Instance.updateManorBuff(data.buffList);
                                        //按钮入口关掉
                                        DataManager_1.default.Instance.uploadData();
                                        SingletonModuleComp_1.smc.account.AccountModel.manorTreeLastGetTime = data.moneyTreeTime;
                                        ViewUtil_1.ViewUtil.setNodeActiveByName("menu/botLeft/manorTreeBtn", this.node, false);
                                        return [2 /*return*/];
                                    });
                                }); });
                            }
                            else {
                                GameMgr_1.GameMgr.Instance.manorTreeLock = false;
                                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("manor.plotFull"));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        Home_1.prototype.manorWaterClick = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.manorAdTimes(DataObject_1.DropType.ManorWater, function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.ComBuyPanel, [DataObject_1.DropType.ManorWater, data]);
            });
        };
        Home_1.prototype.manorManorCoinClick = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.manorAdTimes(DataObject_1.DropType.ManorCoin, function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.ComBuyPanel, [DataObject_1.DropType.ManorCoin, data]);
            });
        };
        Home_1.prototype.openWeekActivity = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.weekActivityInfo(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.WeekActivity, data);
            });
        };
        Home_1.prototype.openMoon = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.MoonFestival);
        };
        Home_1.prototype.isCanShow = function () {
            var activity = this.sildLeft.getChildByName("lay");
            var num = 0;
            for (var i = 0, len = activity.children.length; i < len; i++) {
                if (activity.children[i].active) {
                    num++;
                    if (num > 0) {
                        return true;
                    }
                }
            }
            return false;
        };
        Home_1.prototype.setMianRed = function () {
            //签到红点
            ViewUtil_1.ViewUtil.setNodeActiveByName("weather/redDot", this.info, Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.userSignRedDot));
            //房屋评级红点
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/btn_house/main_icon_fwpj_1/redDot", this.node, Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.houseRateRedDot));
            //任务红点
            ViewUtil_1.ViewUtil.setNodeActiveByName("redDot", this.taskEntry, Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.userTaskRedDot));
            //开服7日活动
            ViewUtil_1.ViewUtil.setNodeActiveByName("lay/open_server/redDot", this.sildLeft, Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.new7DayRedDot));
            //月卡红点  特权卡
            ViewUtil_1.ViewUtil.setNodeActiveByName("lay/privilege_card/redDot", this.sildLeft, Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.cardRedDot));
            var activeRed = Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.new7DayRedDot) || Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.cardRedDot);
            //活动入口红点
            // ViewUtil.setNodeActiveByName("menu/botMask/botLeft/show_activity/redDot", this.node, activeRed);
            /**
             * 宠物红点
             */
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/botLeft/petBtn/redDot", this.node, Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.petRedDot));
            //购物红点
            ViewUtil_1.ViewUtil.setNodeActiveByName("currencyJewels/redDot", this.top, Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.shoppingGift));
            //通行证
            ViewUtil_1.ViewUtil.setNodeActiveByName("lay/btn_pass/redDot", this.sildLeft, SingletonModuleComp_1.smc.account.AccountModel.isShowPay && Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.passRedDot));
            //周常活动开启
            ViewUtil_1.ViewUtil.setNodeActiveByName("lay/btn_week", this.sildLeft, SingletonModuleComp_1.smc.account.AccountModel.isShowPay && this.funcWeekActivity && Boolean(SingletonModuleComp_1.smc.account.AccountModel.weekActivityIsOpen));
            //周常活动红点
            ViewUtil_1.ViewUtil.setNodeActiveByName("lay/btn_week/redDot", this.sildLeft, Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.weekActivityRedDot));
            //中秋国庆活动红点
            ViewUtil_1.ViewUtil.setNodeActiveByName("lay/moon/redDot", this.sildLeft, Boolean(SingletonModuleComp_1.smc.account.AccountModel.nationalDay.redDot));
            var moreRed = Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.codexRedDot) || Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.hireRedDot)
                || Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.mailOrNoticeRedDot);
            //手机震动
            this.moreRed(moreRed);
            var leftRed = Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.new7DayRedDot) || Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.passRedDot) ||
                Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.cardRedDot) || Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.weekActivityRedDot ||
                Boolean(SingletonModuleComp_1.smc.account.AccountModel.nationalDay.redDot));
            ViewUtil_1.ViewUtil.setNodeActiveByName("showBg/redDot", this.sildLeft, leftRed);
            var rightRed = Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.userSignRedDot);
            ViewUtil_1.ViewUtil.setNodeActiveByName("showBg/redDot", this.sildRight, rightRed);
            this.moon.setData();
            this.moonGift.setData();
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateActivityBtn);
            this.isChapterRed();
        };
        Home_1.prototype.mianRedUpdate = function () {
            var _this = this;
            HttpPost_1.HttpPost.instance.getRedDotInfo(function (data) {
                //主界面红点
                SingletonModuleComp_1.smc.account.AccountModel.mainRed.new7DayRedDot = data.new7DayRedDot;
                SingletonModuleComp_1.smc.account.AccountModel.mainRed.userTaskRedDot = data.userTaskRedDot;
                SingletonModuleComp_1.smc.account.AccountModel.mainRed.userSignRedDot = data.userSignRedDot;
                SingletonModuleComp_1.smc.account.AccountModel.mainRed.houseRateRedDot = data.houseRateRedDot;
                SingletonModuleComp_1.smc.account.AccountModel.mainRed.cardRedDot = data.cardRedDot;
                SingletonModuleComp_1.smc.account.AccountModel.mainRed.codexRedDot = data.codexRedDot;
                SingletonModuleComp_1.smc.account.AccountModel.mainRed.hireRedDot = data.hireRedDot;
                SingletonModuleComp_1.smc.account.AccountModel.mainRed.mailOrNoticeRedDot = data.mailOrNoticeRedDot;
                SingletonModuleComp_1.smc.account.AccountModel.mainRed.petRedDot = data.petRedDot;
                SingletonModuleComp_1.smc.account.AccountModel.mainRed.powerRedDot = data.powerRedDot;
                SingletonModuleComp_1.smc.account.AccountModel.mainRed.passRedDot = data.passRedDot;
                SingletonModuleComp_1.smc.account.AccountModel.mainRed.weekActivityRedDot = data.weekActivityRedDot;
                SingletonModuleComp_1.smc.account.AccountModel.mainRed.shoppingGift = data.shoppingGift;
                //开服活动是否开启
                SingletonModuleComp_1.smc.account.AccountModel.openServerOpen = data.new7DayIsOpen;
                //周常活动是否已开启
                SingletonModuleComp_1.smc.account.AccountModel.weekActivityIsOpen = data.weekActivityIsOpen;
                //中秋国庆红点开启信息
                SingletonModuleComp_1.smc.account.AccountModel.nationalDay.redDot = data.nationalDay.redDot;
                SingletonModuleComp_1.smc.account.AccountModel.nationalDay.isOpen = data.nationalDay.isOpen;
                SingletonModuleComp_1.smc.account.AccountModel.nationalDay.tagList = data.nationalDay.tagList;
                SingletonModuleComp_1.smc.account.AccountModel.nationalDay.endTime = data.nationalDay.endTime;
                //中秋国庆礼包红点开启信息
                SingletonModuleComp_1.smc.account.AccountModel.festivalGift.endTime = data.festivalGift.endTime;
                SingletonModuleComp_1.smc.account.AccountModel.festivalGift.isOpen = data.festivalGift.isOpen;
                var isTip = false;
                //限时礼包
                if (SingletonModuleComp_1.smc.account.AccountModel.isShowPay) {
                    if (data.timeLimitOrder) {
                        for (var i = 0, len = data.timeLimitOrder.length; i < len; i++) {
                            if (!SingletonModuleComp_1.smc.account.AccountModel.timeLimitOrder.has(data.timeLimitOrder[i].id)) {
                                SingletonModuleComp_1.smc.account.AccountModel.timeLimitOrder.set(data.timeLimitOrder[i].id, data.timeLimitOrder[i]);
                                isTip = true;
                            }
                        }
                        _this.setTipData(data.timeLimitOrder);
                    }
                    _this.limitGift.setData();
                    if (isTip) {
                        if (Oops_1.oops.gui.has(GameUIConfig_1.UIID.ValuePack) || Oops_1.oops.gui.has(GameUIConfig_1.UIID.Chapter)) {
                            GameMgr_1.GameMgr.Instance.tips.push(GameUIConfig_1.UIID.LimitGift);
                        }
                        else {
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.LimitGift);
                        }
                    }
                }
                _this.setMianRed();
                if (SingletonModuleComp_1.smc.account.AccountModel.openServerOpen) {
                    _this.checkFuncOpen(DataObject_1.FunctionCheckType.BoxOpen);
                }
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.tileGameRed);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateMoonRed);
            });
        };
        Home_1.prototype.initMoonData = function () {
        };
        Home_1.prototype.setTipData = function (orderData) {
            var ids = [], haveIds = [];
            for (var j = 0, len = orderData.length; j < len; j++) {
                haveIds.push(orderData[j].id);
            }
            for (var _i = 0, _a = SingletonModuleComp_1.smc.account.AccountModel.timeLimitOrder; _i < _a.length; _i++) {
                var id = _a[_i][0];
                if (haveIds.indexOf(id) == -1) {
                    ids.push(id);
                }
            }
            for (var i = 0; i < ids.length; i++) {
                SingletonModuleComp_1.smc.account.AccountModel.timeLimitOrder.delete(ids[i]);
            }
        };
        Home_1.prototype.taskTween = function () {
            (0, cc_4.tween)(this.taskNode).sequence((0, cc_4.tween)().by(1.5, { position: new cc_1.Vec3(0, -20, 0) }), (0, cc_4.tween)().by(1.5, { position: new cc_1.Vec3(0, 20, 0) })).repeatForever().start();
            (0, cc_4.tween)(this.taskEntry).sequence((0, cc_4.tween)().to(0.2, { scale: new cc_1.Vec3(0.9, 0.9, 1) }), (0, cc_4.tween)().to(0.2, { scale: new cc_1.Vec3(1.1, 1.1, 1), }), (0, cc_4.tween)().to(0.2, { scale: new cc_1.Vec3(1, 1, 1), }), (0, cc_4.tween)().to(0.2, { scale: new cc_1.Vec3(1, 1, 1), }), (0, cc_4.tween)().to(0.2, { scale: new cc_1.Vec3(1, 1, 1), }), (0, cc_4.tween)().to(0.2, { scale: new cc_1.Vec3(0.9, 0.9, 1), }), (0, cc_4.tween)().delay(0.5)).repeatForever().start();
            (0, cc_4.tween)(this.taskEntry).sequence((0, cc_4.tween)().to(0.2, { angle: 15 }), (0, cc_4.tween)().to(0.2, { angle: -15 }), (0, cc_4.tween)().to(0.2, { angle: 15 }), (0, cc_4.tween)().to(0.2, { angle: -15 }), (0, cc_4.tween)().to(0.2, { angle: 15 }), (0, cc_4.tween)().to(0.2, { angle: -15 }), (0, cc_4.tween)().delay(0.5)).repeatForever().start();
        };
        //庄园等级点击
        Home_1.prototype.btn_manorLevel = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.manorDetail(function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorLevel, data);
                    return [2 /*return*/];
                });
            }); });
        };
        //展示跑马灯信息
        Home_1.prototype.showManorTopMsg = function () {
            var _a;
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/manorMsg", this.node, true);
            var infoData = ManorTradeData_1.ManorTradeData.getAllData().find(function (x) { return x.id == SingletonModuleComp_1.smc.account.AccountModel.manorMsgId; });
            (_a = ViewUtil_1.ViewUtil.findChildByName("menu/top/manorMsg", this.node)) === null || _a === void 0 ? void 0 : _a.getComponent(ManorTopMsg_1.ManorTopMsg).init(infoData.getMsg());
        };
        /**播放弱网动画 */
        Home_1.prototype.playNetWeakAni = function (needWeak) {
            var has = (this.moreStatus & NetDetect_1.MORE_STATUS.NETWORK) > 0;
            if (needWeak && !has || (!needWeak && has))
                this.moreStatus ^= NetDetect_1.MORE_STATUS.NETWORK;
            this.updateMoreAni(this.moreStatus);
        };
        Home_1.prototype.updateMoreAni = function (moreStatus) {
            var ani = "idle";
            if (moreStatus & NetDetect_1.MORE_STATUS.PROMPT)
                ani = "prompt";
            else if (moreStatus & NetDetect_1.MORE_STATUS.NETWORK)
                ani = "network";
            this.moreAmi.setAnimation(0, ani, true);
        };
        Home_1.prototype.isChapterRed = function () {
            var allComplete = true;
            var storyData = new StoryData_1.StoryData(SingletonModuleComp_1.smc.account.AccountModel.chapter);
            var condData = storyData.getLimitCondData();
            if (condData.length > 0) {
                for (var i = 0; i < condData.length; i++) {
                    if (!condData[i].status) {
                        allComplete = false;
                    }
                }
            }
            else {
                allComplete = false;
            }
            var levelGift = Boolean(SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length > 0);
            var levelReward = Boolean(SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel > SingletonModuleComp_1.smc.account.AccountModel.lvGift);
            ViewUtil_1.ViewUtil.setNodeActiveByName("redDot", this.player, (allComplete || levelGift || levelReward));
        };
        Home_1.prototype.setHomeBtn = function (bol) {
            this.sildLeft.active = bol;
            this.sildRight.active = bol;
            ViewUtil_1.ViewUtil.setNodeActiveByName("menu/top/topRight", this.node, bol);
            ViewUtil_1.ViewUtil.setNodeActiveByName("topNewLeft", this.top, bol);
        };
        return Home_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Home");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _currencyCoins_decorators = [property(cc_1.Node)];
        _currencyJewels_decorators = [property(cc_1.Node)];
        _currencyManorCoins_decorators = [property(cc_1.Node)];
        _top_decorators = [property(cc_1.Node)];
        _funcs_decorators = [property(cc_1.Node)];
        _player_decorators = [property(cc_1.Node)];
        _info_decorators = [property(cc_1.Node)];
        _nodeScore_decorators = [property(cc_1.Node)];
        _outsideScore_decorators = [property(cc_1.Node)];
        _furnitureScore_decorators = [property(cc_1.Node)];
        _dressScore_decorators = [property(cc_1.Node)];
        _mainTask_decorators = [property(cc_1.Node)];
        _taskEntry_decorators = [property(cc_1.Node)];
        _explanation_decorators = [property(cc_1.Node)];
        _outEventTimer_decorators = [property(cc_1.Label)];
        _outFurnitureMarkOut_decorators = [property(cc_1.Label)];
        _outUnlockItemsContent_decorators = [property(cc_1.Node)];
        _outUnlockItem_decorators = [property(UnlockItem_1.UnlockItem)];
        _moreAmi_decorators = [property(cc_3.sp.Skeleton)];
        _rewardBtn_decorators = [property(cc_1.Node)];
        _eventBtnList_decorators = [property(cc_1.Node)];
        _eventBtnList1_decorators = [property(cc_1.Node)];
        _houseBtn_decorators = [property(cc_1.Node)];
        _role_decorators = [property(Role_1.Role)];
        _taskNode_decorators = [property(cc_1.Node)];
        _limitGift_decorators = [property(LimitGiftMgr_1.LimitGiftMgr)];
        _moon_decorators = [property(MoonActivityMgr_1.MoonActivityMgr)];
        _moonGift_decorators = [property(MoonLimitGiftMgr_1.MoonLimitGiftMgr)];
        _moveSpine_decorators = [property(MoveRoomLoading_1.MoveRoomLoading)];
        _sildLeft_decorators = [property(cc_1.Node)];
        _sildRight_decorators = [property(cc_1.Node)];
        _topRightv_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _currencyCoins_decorators, { kind: "field", name: "currencyCoins", static: false, private: false, access: { has: function (obj) { return "currencyCoins" in obj; }, get: function (obj) { return obj.currencyCoins; }, set: function (obj, value) { obj.currencyCoins = value; } }, metadata: _metadata }, _currencyCoins_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _currencyJewels_decorators, { kind: "field", name: "currencyJewels", static: false, private: false, access: { has: function (obj) { return "currencyJewels" in obj; }, get: function (obj) { return obj.currencyJewels; }, set: function (obj, value) { obj.currencyJewels = value; } }, metadata: _metadata }, _currencyJewels_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _currencyManorCoins_decorators, { kind: "field", name: "currencyManorCoins", static: false, private: false, access: { has: function (obj) { return "currencyManorCoins" in obj; }, get: function (obj) { return obj.currencyManorCoins; }, set: function (obj, value) { obj.currencyManorCoins = value; } }, metadata: _metadata }, _currencyManorCoins_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _top_decorators, { kind: "field", name: "top", static: false, private: false, access: { has: function (obj) { return "top" in obj; }, get: function (obj) { return obj.top; }, set: function (obj, value) { obj.top = value; } }, metadata: _metadata }, _top_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _funcs_decorators, { kind: "field", name: "funcs", static: false, private: false, access: { has: function (obj) { return "funcs" in obj; }, get: function (obj) { return obj.funcs; }, set: function (obj, value) { obj.funcs = value; } }, metadata: _metadata }, _funcs_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _player_decorators, { kind: "field", name: "player", static: false, private: false, access: { has: function (obj) { return "player" in obj; }, get: function (obj) { return obj.player; }, set: function (obj, value) { obj.player = value; } }, metadata: _metadata }, _player_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _info_decorators, { kind: "field", name: "info", static: false, private: false, access: { has: function (obj) { return "info" in obj; }, get: function (obj) { return obj.info; }, set: function (obj, value) { obj.info = value; } }, metadata: _metadata }, _info_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _nodeScore_decorators, { kind: "field", name: "nodeScore", static: false, private: false, access: { has: function (obj) { return "nodeScore" in obj; }, get: function (obj) { return obj.nodeScore; }, set: function (obj, value) { obj.nodeScore = value; } }, metadata: _metadata }, _nodeScore_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _outsideScore_decorators, { kind: "field", name: "outsideScore", static: false, private: false, access: { has: function (obj) { return "outsideScore" in obj; }, get: function (obj) { return obj.outsideScore; }, set: function (obj, value) { obj.outsideScore = value; } }, metadata: _metadata }, _outsideScore_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _furnitureScore_decorators, { kind: "field", name: "furnitureScore", static: false, private: false, access: { has: function (obj) { return "furnitureScore" in obj; }, get: function (obj) { return obj.furnitureScore; }, set: function (obj, value) { obj.furnitureScore = value; } }, metadata: _metadata }, _furnitureScore_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dressScore_decorators, { kind: "field", name: "dressScore", static: false, private: false, access: { has: function (obj) { return "dressScore" in obj; }, get: function (obj) { return obj.dressScore; }, set: function (obj, value) { obj.dressScore = value; } }, metadata: _metadata }, _dressScore_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mainTask_decorators, { kind: "field", name: "mainTask", static: false, private: false, access: { has: function (obj) { return "mainTask" in obj; }, get: function (obj) { return obj.mainTask; }, set: function (obj, value) { obj.mainTask = value; } }, metadata: _metadata }, _mainTask_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _taskEntry_decorators, { kind: "field", name: "taskEntry", static: false, private: false, access: { has: function (obj) { return "taskEntry" in obj; }, get: function (obj) { return obj.taskEntry; }, set: function (obj, value) { obj.taskEntry = value; } }, metadata: _metadata }, _taskEntry_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _explanation_decorators, { kind: "field", name: "explanation", static: false, private: false, access: { has: function (obj) { return "explanation" in obj; }, get: function (obj) { return obj.explanation; }, set: function (obj, value) { obj.explanation = value; } }, metadata: _metadata }, _explanation_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _outEventTimer_decorators, { kind: "field", name: "outEventTimer", static: false, private: false, access: { has: function (obj) { return "outEventTimer" in obj; }, get: function (obj) { return obj.outEventTimer; }, set: function (obj, value) { obj.outEventTimer = value; } }, metadata: _metadata }, _outEventTimer_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _outFurnitureMarkOut_decorators, { kind: "field", name: "outFurnitureMarkOut", static: false, private: false, access: { has: function (obj) { return "outFurnitureMarkOut" in obj; }, get: function (obj) { return obj.outFurnitureMarkOut; }, set: function (obj, value) { obj.outFurnitureMarkOut = value; } }, metadata: _metadata }, _outFurnitureMarkOut_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _outUnlockItemsContent_decorators, { kind: "field", name: "outUnlockItemsContent", static: false, private: false, access: { has: function (obj) { return "outUnlockItemsContent" in obj; }, get: function (obj) { return obj.outUnlockItemsContent; }, set: function (obj, value) { obj.outUnlockItemsContent = value; } }, metadata: _metadata }, _outUnlockItemsContent_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _outUnlockItem_decorators, { kind: "field", name: "outUnlockItem", static: false, private: false, access: { has: function (obj) { return "outUnlockItem" in obj; }, get: function (obj) { return obj.outUnlockItem; }, set: function (obj, value) { obj.outUnlockItem = value; } }, metadata: _metadata }, _outUnlockItem_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _moreAmi_decorators, { kind: "field", name: "moreAmi", static: false, private: false, access: { has: function (obj) { return "moreAmi" in obj; }, get: function (obj) { return obj.moreAmi; }, set: function (obj, value) { obj.moreAmi = value; } }, metadata: _metadata }, _moreAmi_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rewardBtn_decorators, { kind: "field", name: "rewardBtn", static: false, private: false, access: { has: function (obj) { return "rewardBtn" in obj; }, get: function (obj) { return obj.rewardBtn; }, set: function (obj, value) { obj.rewardBtn = value; } }, metadata: _metadata }, _rewardBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _eventBtnList_decorators, { kind: "field", name: "eventBtnList", static: false, private: false, access: { has: function (obj) { return "eventBtnList" in obj; }, get: function (obj) { return obj.eventBtnList; }, set: function (obj, value) { obj.eventBtnList = value; } }, metadata: _metadata }, _eventBtnList_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _eventBtnList1_decorators, { kind: "field", name: "eventBtnList1", static: false, private: false, access: { has: function (obj) { return "eventBtnList1" in obj; }, get: function (obj) { return obj.eventBtnList1; }, set: function (obj, value) { obj.eventBtnList1 = value; } }, metadata: _metadata }, _eventBtnList1_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _houseBtn_decorators, { kind: "field", name: "houseBtn", static: false, private: false, access: { has: function (obj) { return "houseBtn" in obj; }, get: function (obj) { return obj.houseBtn; }, set: function (obj, value) { obj.houseBtn = value; } }, metadata: _metadata }, _houseBtn_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _taskNode_decorators, { kind: "field", name: "taskNode", static: false, private: false, access: { has: function (obj) { return "taskNode" in obj; }, get: function (obj) { return obj.taskNode; }, set: function (obj, value) { obj.taskNode = value; } }, metadata: _metadata }, _taskNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _limitGift_decorators, { kind: "field", name: "limitGift", static: false, private: false, access: { has: function (obj) { return "limitGift" in obj; }, get: function (obj) { return obj.limitGift; }, set: function (obj, value) { obj.limitGift = value; } }, metadata: _metadata }, _limitGift_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _moon_decorators, { kind: "field", name: "moon", static: false, private: false, access: { has: function (obj) { return "moon" in obj; }, get: function (obj) { return obj.moon; }, set: function (obj, value) { obj.moon = value; } }, metadata: _metadata }, _moon_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _moonGift_decorators, { kind: "field", name: "moonGift", static: false, private: false, access: { has: function (obj) { return "moonGift" in obj; }, get: function (obj) { return obj.moonGift; }, set: function (obj, value) { obj.moonGift = value; } }, metadata: _metadata }, _moonGift_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _moveSpine_decorators, { kind: "field", name: "moveSpine", static: false, private: false, access: { has: function (obj) { return "moveSpine" in obj; }, get: function (obj) { return obj.moveSpine; }, set: function (obj, value) { obj.moveSpine = value; } }, metadata: _metadata }, _moveSpine_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _sildLeft_decorators, { kind: "field", name: "sildLeft", static: false, private: false, access: { has: function (obj) { return "sildLeft" in obj; }, get: function (obj) { return obj.sildLeft; }, set: function (obj, value) { obj.sildLeft = value; } }, metadata: _metadata }, _sildLeft_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _sildRight_decorators, { kind: "field", name: "sildRight", static: false, private: false, access: { has: function (obj) { return "sildRight" in obj; }, get: function (obj) { return obj.sildRight; }, set: function (obj, value) { obj.sildRight = value; } }, metadata: _metadata }, _sildRight_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _topRightv_decorators, { kind: "field", name: "topRightv", static: false, private: false, access: { has: function (obj) { return "topRightv" in obj; }, get: function (obj) { return obj.topRightv; }, set: function (obj, value) { obj.topRightv = value; } }, metadata: _metadata }, _topRightv_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Home = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Home = _classThis;
}();
exports.Home = Home;
