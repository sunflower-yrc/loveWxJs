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
exports.LoadingViewComp = void 0;
/*
 * @Author: dgflash
 * @Date: 2021-07-03 16:13:17
 * @LastEditors: dgflash
 * @LastEditTime: 2022-08-29 13:37:08
 */
var cc_1 = require("cc");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var ViewUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var Collection_1 = require("../../../../../extensions/oops-plugin-framework/assets/libs/collection/Collection");
var ECS_1 = require("../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS");
var CCVMParentComp_1 = require("../../../../../extensions/oops-plugin-framework/assets/module/common/CCVMParentComp");
var BundleConfig_1 = require("../../common/bundle/BundleConfig");
var GameEvent_1 = require("../../common/config/GameEvent");
var GameUIConfig_1 = require("../../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../../common/ecs/SingletonModuleComp");
var Tableactivitytime_1 = require("../../common/table/Tableactivitytime");
var Tableadvertising_1 = require("../../common/table/Tableadvertising");
var Tablebox_1 = require("../../common/table/Tablebox");
var Tabledress_1 = require("../../common/table/Tabledress");
var Tableevent_1 = require("../../common/table/Tableevent");
var Tablefurniture_1 = require("../../common/table/Tablefurniture");
var Tableglobal_1 = require("../../common/table/Tableglobal");
var Tableguide_1 = require("../../common/table/Tableguide");
var Tablelanguage_1 = require("../../common/table/Tablelanguage");
var Tablelimits_1 = require("../../common/table/Tablelimits");
var Tablemerge_1 = require("../../common/table/Tablemerge");
var TablemergeReward_1 = require("../../common/table/TablemergeReward");
var Tablemove_1 = require("../../common/table/Tablemove");
var Tablenpc_1 = require("../../common/table/Tablenpc");
var TableoutEvent_1 = require("../../common/table/TableoutEvent");
var Tablephotograph_1 = require("../../common/table/Tablephotograph");
var Tableplayer_1 = require("../../common/table/Tableplayer");
var Tablepurchase_1 = require("../../common/table/Tablepurchase");
var Tablerole_1 = require("../../common/table/Tablerole");
var Tablesign_1 = require("../../common/table/Tablesign");
var Tablestory_1 = require("../../common/table/Tablestory");
var Tablesuit_1 = require("../../common/table/Tablesuit");
var Tabletalk_1 = require("../../common/table/Tabletalk");
var Tabletask_1 = require("../../common/table/Tabletask");
var TabletypeGlobal_1 = require("../../common/table/TabletypeGlobal");
var Tableweather_1 = require("../../common/table/Tableweather");
var GuideData_1 = require("../../common/tableData/GuideData");
var Guide_1 = require("../../guide/Guide");
var SdkPlatform_1 = require("../../platform/SdkPlatform");
var GlobalConfig_1 = require("../../tools/GlobalConfig");
var DataObject_1 = require("../../tools/DataObject");
var Tablecost_1 = require("../../common/table/Tablecost");
var TablefunctionOpen_1 = require("../../common/table/TablefunctionOpen");
var TablehouseRate_1 = require("../../common/table/TablehouseRate");
var Tablerank_1 = require("../../common/table/Tablerank");
var Tablehire_1 = require("../../common/table/Tablehire");
var Tableyonghuxieyi_1 = require("../../common/table/Tableyonghuxieyi");
var Tableyinsixieyi_1 = require("../../common/table/Tableyinsixieyi");
var TablepetReward_1 = require("../../common/table/TablepetReward");
var Tablepet_1 = require("../../common/table/Tablepet");
var TablepetAppliance_1 = require("../../common/table/TablepetAppliance");
var TablepetFoods_1 = require("../../common/table/TablepetFoods");
var TablerewardSource_1 = require("../../common/table/TablerewardSource");
var TableeventTrigger_1 = require("../../common/table/TableeventTrigger");
var GameMgr_1 = require("../../common/mgr/GameMgr");
var GameResPath_1 = require("../../common/config/GameResPath");
var cc_2 = require("cc");
var TablepassReward_1 = require("../../common/table/TablepassReward");
var TablemonthlyPass_1 = require("../../common/table/TablemonthlyPass");
var cc_3 = require("cc");
var Tableactivity_1 = require("../../common/table/Tableactivity");
var TablemanorFacilities_1 = require("../../common/table/TablemanorFacilities");
var TablemanorLevel_1 = require("../../common/table/TablemanorLevel");
var TablemanorPlant_1 = require("../../common/table/TablemanorPlant");
var TableactivityCollect_1 = require("../../common/table/TableactivityCollect");
var TableselectReward_1 = require("../../common/table/TableselectReward");
var TablemanorEvent_1 = require("../../common/table/TablemanorEvent");
var BundleManager_1 = require("../../common/bundle/BundleManager");
var TablemanorTrade_1 = require("../../common/table/TablemanorTrade");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
/** 游戏资源加载 */
var LoadingViewComp = function () {
    var _classDecorators = [ccclass('LoadingViewComp'), ECS_1.ecs.register('LoadingView', false)];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = CCVMParentComp_1.CCVMParentComp;
    var LoadingViewComp = _classThis = /** @class */ (function (_super) {
        __extends(LoadingViewComp_1, _super);
        function LoadingViewComp_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** VM 组件绑定数据 */
            _this.data = {
                /** 加载资源当前进度 */
                finished: 0,
                /** 加载资源最大进度 */
                total: 0,
                /** 加载资源进度比例值 */
                progress: "0",
                /** 加载流程中提示文本 */
                prompt: ""
            };
            _this.progress = 0;
            _this.loadFinished = false;
            _this.loginFinished = false;
            _this.loading_step = 0;
            _this.loading_step_dis = 0.003;
            _this.loading_step_1 = 0.9999;
            _this.loading_step_2 = 1;
            /** bundle 版本号 */
            _this.env = "release";
            _this.bundleVers = new Collection_1.Collection();
            /**热更配置缓存 */
            _this.hotConfigVers = new Collection_1.Collection();
            _this.STORE_RES_KEY = "ResVersion";
            _this.ENTER_TIME_OUT = 10; //检查资源加载完毕到进入游戏如果超过此数值，则上报进入超时
            return _this;
        }
        LoadingViewComp_1.prototype.reset = function () {
            SdkPlatform_1.SdkPlatform.report_loading('enterGame');
            this.off(GameEvent_1.GameEvent.LoginSuccess);
            Oops_1.oops.timer.unscheduleAllCallbacks();
            // 关闭加载界面
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Loading);
            cc_3.dynamicAtlasManager.enabled = true;
            // 打开游戏主界面（自定义逻辑）
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Home);
            this.delEnterCountDownEvent();
            //oops.gui.open(UIID.Test);
        };
        LoadingViewComp_1.prototype.start = function () {
            //loading背景缩放
            ViewUtil_1.ViewUtil.setBgScaled("bg", this.node);
            //版本号
            ViewUtil_1.ViewUtil.setLabelStringByName("anim/version", this.node, "v" + GlobalConfig_1.GlobalConfig.version);
            //是否走测试服
            var useQA = cc_1.sys.localStorage.getItem(DataObject_1.StorageType.UseQA);
            this.env = "release";
            if (useQA == "1") {
                this.env = "qa";
            }
            this.checkDelOldCache();
            // if (!sys.isNative) {
            this.enter();
            // }
        };
        /**判断缓存的资源，与新发布是否一致，不一致则清理 */
        LoadingViewComp_1.prototype.checkDelOldCache = function () {
            var _a;
            var resVersion = Oops_1.oops.storage.get(this.STORE_RES_KEY);
            if (resVersion !== GlobalConfig_1.GlobalConfig.version) {
                (_a = cc_2.assetManager.cacheManager) === null || _a === void 0 ? void 0 : _a.clearLRU(); //按文件时间清理
                Oops_1.oops.storage.set(this.STORE_RES_KEY, GlobalConfig_1.GlobalConfig.version);
            }
        };
        LoadingViewComp_1.prototype.enter = function () {
            this.initSdk();
            this.addEvent();
            this.loadRes();
        };
        /**
         * 数数sdk
         */
        LoadingViewComp_1.prototype.initSdk = function () {
            SdkPlatform_1.SdkPlatform.initSdk();
        };
        LoadingViewComp_1.prototype.addEvent = function () {
            this.on(GameEvent_1.GameEvent.LoginSuccess, this.onHandler, this);
        };
        LoadingViewComp_1.prototype.onHandler = function (event, args) {
            switch (event) {
                case GameEvent_1.GameEvent.LoginSuccess:
                    //登录成功
                    if (SingletonModuleComp_1.smc.account.AccountModel.switchAgreement) { //协议是否开启
                        if (Oops_1.oops.storage.get("switchAgreement")) {
                            GameMgr_1.GameMgr.Instance.isPassUser = true;
                        }
                        else {
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.UserAgreement, { callFun: this.removeLoading, target: this });
                        }
                    }
                    else {
                        GameMgr_1.GameMgr.Instance.isPassUser = true;
                    }
                    SdkPlatform_1.SdkPlatform.report_loading('loginSucc');
                    this.loginFinished = true;
                    this.checkFinished();
                    break;
            }
        };
        /** 加载资源 */
        LoadingViewComp_1.prototype.loadRes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var tid;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // this.data.prompt = oops.language.getLangByID("message.coming");
                            this.data.progress = 0;
                            //加载第1阶段
                            this.loading_step = 1;
                            //总进度
                            this.data.total = 1;
                            tid = Oops_1.oops.timer.schedule(function () {
                                var finished = _this.data.finished;
                                var steps = _this.loading_step == 1 ? _this.loading_step_1 : _this.loading_step_2;
                                _this.data.finished = finished + _this.loading_step_dis;
                                if (_this.data.finished > steps) {
                                    _this.data.finished = steps;
                                }
                                _this.data.progress = (_this.data.finished / _this.data.total * 100).toFixed(2);
                                if (_this.loading_step >= 2) {
                                    Oops_1.oops.timer.unschedule(tid);
                                }
                            }, 0.05);
                            if (!(cc_1.sys.platform === cc_1.sys.Platform.WECHAT_GAME)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.checkBundleVers()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [4 /*yield*/, this.loadConfig()];
                        case 3:
                            _a.sent();
                            SdkPlatform_1.SdkPlatform.report_loading("config");
                            return [4 /*yield*/, this.loadCustom()];
                        case 4:
                            _a.sent();
                            this.loadGameRes();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /** 加载游戏本地JSON数据 */
        LoadingViewComp_1.prototype.loadConfig = function () {
            var _this = this;
            // this.data.prompt = oops.language.getLangByID("loading_load_json");
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var _a, tmpConfigs, promiseArr, i, fileName, version, remoteUrl;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            Oops_1.oops.log.logBusiness("load config start");
                            _a = BundleConfig_1.default.instance;
                            return [4 /*yield*/, Oops_1.oops.res.loadBundle(this.getRemoteBundleAddr("config"))];
                        case 1:
                            _a.configBundle = (_b.sent());
                            tmpConfigs = [
                                Tableactivitytime_1.Tableactivitytime.TableName,
                                Tableadvertising_1.Tableadvertising.TableName,
                                Tablebox_1.Tablebox.TableName,
                                Tabledress_1.Tabledress.TableName,
                                Tablenpc_1.Tablenpc.TableName,
                                Tablefurniture_1.Tablefurniture.TableName,
                                TablemergeReward_1.TablemergeReward.TableName,
                                Tablelanguage_1.Tablelanguage.TableName,
                                Tablemerge_1.Tablemerge.TableName,
                                Tablelimits_1.Tablelimits.TableName,
                                TablefunctionOpen_1.TablefunctionOpen.TableName,
                                Tableglobal_1.Tableglobal.TableName,
                                Tablemove_1.Tablemove.TableName,
                                Tablerole_1.Tablerole.TableName,
                                Tablestory_1.Tablestory.TableName,
                                Tablesuit_1.Tablesuit.TableName,
                                TabletypeGlobal_1.TabletypeGlobal.TableName,
                                Tableplayer_1.Tableplayer.TableName,
                                Tablesign_1.Tablesign.TableName,
                                Tabletalk_1.Tabletalk.TableName,
                                Tabletask_1.Tabletask.TableName,
                                Tablephotograph_1.Tablephotograph.TableName,
                                Tableweather_1.Tableweather.TableName,
                                Tablepurchase_1.Tablepurchase.TableName,
                                Tableguide_1.Tableguide.TableName,
                                Tableevent_1.Tableevent.TableName,
                                TableoutEvent_1.TableoutEvent.TableName,
                                Tablecost_1.Tablecost.TableName,
                                TablehouseRate_1.TablehouseRate.TableName,
                                Tablerank_1.Tablerank.TableName,
                                Tablehire_1.Tablehire.TableName,
                                Tableyonghuxieyi_1.Tableyonghuxieyi.TableName,
                                Tableyinsixieyi_1.Tableyinsixieyi.TableName,
                                TablepetReward_1.TablepetReward.TableName,
                                Tablepet_1.Tablepet.TableName,
                                TablepetAppliance_1.TablepetAppliance.TableName,
                                TablepetFoods_1.TablepetFoods.TableName,
                                TablerewardSource_1.TablerewardSource.TableName,
                                TableeventTrigger_1.TableeventTrigger.TableName,
                                Tablemove_1.Tablemove.TableName,
                                TablepassReward_1.TablepassReward.TableName,
                                TablemonthlyPass_1.TablemonthlyPass.TableName,
                                Tableactivity_1.Tableactivity.TableName,
                                TablemanorFacilities_1.TablemanorFacilities.TableName,
                                TablemanorLevel_1.TablemanorLevel.TableName,
                                TablemanorPlant_1.TablemanorPlant.TableName,
                                TableactivityCollect_1.TableactivityCollect.TableName,
                                TableselectReward_1.TableselectReward.TableName,
                                TablemanorEvent_1.TablemanorEvent.TableName,
                                TablemanorTrade_1.TablemanorTrade.TableName,
                                "polygon", //墙饰的多边形位置点,考虑到这个数据太大，暂时不给所有家具加位置点信息
                            ];
                            promiseArr = [];
                            for (i = 0; i < tmpConfigs.length; i++) {
                                fileName = tmpConfigs[i];
                                if (this.hotConfigVers.has(fileName)) {
                                    version = this.hotConfigVers.get(fileName);
                                    remoteUrl = this.getRemoteAddr() + "hot/".concat(version, "/config/").concat(fileName, ".json");
                                    promiseArr.push(JsonUtil_1.JsonUtil.loadAsyncRemoteSingleFile(fileName, remoteUrl));
                                }
                                else
                                    promiseArr.push(JsonUtil_1.JsonUtil.loadAsyncFromBundle(fileName, BundleConfig_1.default.instance.configBundle.name));
                            }
                            return [4 /*yield*/, Promise.all(promiseArr)];
                        case 2:
                            _b.sent();
                            Oops_1.oops.log.logBusiness("load config done");
                            // 初始化帐号模块
                            SingletonModuleComp_1.smc.account.connect();
                            resolve(null);
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        /** 加载游戏数据（自定义内容） */
        LoadingViewComp_1.prototype.loadCustom = function () {
            var _this = this;
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                return __generator(this, function (_l) {
                    switch (_l.label) {
                        case 0:
                            Oops_1.oops.log.logBusiness("load custom res start");
                            _a = BundleConfig_1.default.instance;
                            return [4 /*yield*/, Oops_1.oops.res.loadBundle(this.getRemoteBundleAddr("common"))];
                        case 1:
                            _a.commonBundle = (_l.sent());
                            SdkPlatform_1.SdkPlatform.report_loading("common");
                            _b = BundleConfig_1.default.instance;
                            return [4 /*yield*/, Oops_1.oops.res.loadBundle(this.getRemoteBundleAddr("gui"))];
                        case 2:
                            _b.guiBundle = (_l.sent());
                            SdkPlatform_1.SdkPlatform.report_loading("gui");
                            _c = BundleConfig_1.default.instance;
                            return [4 /*yield*/, Oops_1.oops.res.loadBundle(this.getRemoteBundleAddr("spine"))];
                        case 3:
                            _c.spineBundle = (_l.sent());
                            SdkPlatform_1.SdkPlatform.report_loading("spine");
                            _d = BundleConfig_1.default.instance;
                            return [4 /*yield*/, Oops_1.oops.res.loadBundle(this.getRemoteBundleAddr("audio"))];
                        case 4:
                            _d.audioBundle = (_l.sent());
                            SdkPlatform_1.SdkPlatform.report_loading("audio");
                            _e = BundleConfig_1.default.instance;
                            return [4 /*yield*/, Oops_1.oops.res.loadBundle(this.getRemoteBundleAddr("furniture"))];
                        case 5:
                            _e.furniture = (_l.sent());
                            SdkPlatform_1.SdkPlatform.report_loading("furniture");
                            _f = BundleConfig_1.default.instance;
                            return [4 /*yield*/, Oops_1.oops.res.loadBundle(this.getRemoteBundleAddr("font"))];
                        case 6:
                            _f.font = (_l.sent());
                            SdkPlatform_1.SdkPlatform.report_loading("font");
                            _g = BundleConfig_1.default.instance;
                            return [4 /*yield*/, Oops_1.oops.res.loadBundle(this.getRemoteBundleAddr("scene1"))];
                        case 7:
                            _g.scene1 = (_l.sent());
                            SdkPlatform_1.SdkPlatform.report_loading("scene1");
                            _h = BundleConfig_1.default.instance;
                            return [4 /*yield*/, Oops_1.oops.res.loadBundle(this.getRemoteBundleAddr("scene2"))];
                        case 8:
                            _h.scene2 = (_l.sent());
                            SdkPlatform_1.SdkPlatform.report_loading("scene2");
                            _j = BundleConfig_1.default.instance;
                            return [4 /*yield*/, Oops_1.oops.res.loadBundle(this.getRemoteBundleAddr("scene4000"))];
                        case 9:
                            _j.scene4000 = (_l.sent());
                            SdkPlatform_1.SdkPlatform.report_loading("scene4000");
                            _k = BundleConfig_1.default.instance;
                            return [4 /*yield*/, Oops_1.oops.res.loadBundle(this.getRemoteBundleAddr("manor"))];
                        case 10:
                            _k.manor = (_l.sent());
                            SdkPlatform_1.SdkPlatform.report_loading("manor");
                            Oops_1.oops.log.logBusiness("load custom res done");
                            this.data.finished = this.loading_step_1;
                            this.onCompleteCallback();
                            resolve(null);
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        /** 加载初始游戏内容资源 */
        LoadingViewComp_1.prototype.loadGameRes = function () {
            // oops.res.loadDir("game", this.onProgressCallback.bind(this), this.onCompleteCallback.bind(this));
            BundleConfig_1.default.instance.guiBundle.preload(GameResPath_1.GameResPath.getRolePrefabPath());
        };
        /** 加载进度事件 */
        LoadingViewComp_1.prototype.onProgressCallback = function (finished, total, item) {
            this.data.finished = finished / total * (1 - this.loading_step_2) + this.loading_step_2;
            var progress = finished / total * (1 - this.loading_step_2) + this.loading_step_2;
            if (progress > this.progress) {
                this.progress = progress;
                this.data.progress = (progress * 100).toFixed(2);
            }
        };
        /** 加载完成事件 */
        LoadingViewComp_1.prototype.onCompleteCallback = function () {
            this.loadFinished = true;
            SdkPlatform_1.SdkPlatform.report_loading("loadingSucc");
            this.checkFinished();
        };
        /** 远程资源路径 */
        LoadingViewComp_1.prototype.getRemoteAddr = function () {
            return Oops_1.oops.config.game.cdnServer + this.env + "/" + GlobalConfig_1.GlobalConfig.version + "/";
        };
        /** 远程bundle的路径 */
        LoadingViewComp_1.prototype.getRemoteBundleAddr = function (bundle) {
            if (cc_1.sys.platform === cc_1.sys.Platform.WECHAT_GAME) {
                var ret = bundle;
                var ver = this.bundleVers.get(bundle);
                if (ver && ver != "" && ver != "0") {
                    ret = this.getRemoteAddr() + "hot/" + ver + "/" + bundle;
                }
                console.log("RemoteBundleAddr", ret);
                return ret;
            }
            return bundle;
        };
        /**
         * 检查bundle配置的版本
         * 配置文件打包热更
         *  "bundleVers": {
         *      "config": "2",//更改此处版本号
         *  }
         * 单个文件热更
         * "configs":{
         *      1:["task","activity"]//1 是版本号，数组是需要更新的文件名称
         * }
         */
        LoadingViewComp_1.prototype.checkBundleVers = function () {
            var _this = this;
            var file = "settings." + this.env + ".json";
            var remoteUrl = this.getRemoteAddr() + file;
            console.log("remoteUrl:", remoteUrl);
            var that = this;
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    Oops_1.oops.res.loadRemote(remoteUrl, { reloadAsset: true, cacheAsset: false }, function (err, ja) {
                        if (err) {
                            console.error("bundle vers \u4E0D\u5B58\u5728");
                            resolve(null);
                            return;
                        }
                        var log = [];
                        var logConfigs = [];
                        var data = Object.freeze(ja.json);
                        if (data && data.bundleVers) {
                            for (var key in data.bundleVers) {
                                if (Object.prototype.hasOwnProperty.call(data.bundleVers, key)) {
                                    var element = data.bundleVers[key];
                                    that.bundleVers.set(key, element);
                                    log.push(key + "=" + element);
                                }
                            }
                        }
                        if (data && data.configs) {
                            for (var version in data.configs) {
                                if (Object.prototype.hasOwnProperty.call(data.configs, version)) {
                                    var tableNames = data.configs[version];
                                    for (var _i = 0, tableNames_1 = tableNames; _i < tableNames_1.length; _i++) {
                                        var tName = tableNames_1[_i];
                                        that.hotConfigVers.set(tName, version);
                                    }
                                    logConfigs.push(version + "=" + tableNames);
                                }
                            }
                        }
                        console.log("load bundle vers: ", log);
                        console.log("load configs vers: ", logConfigs);
                        resolve(null);
                    });
                    return [2 /*return*/];
                });
            }); });
        };
        LoadingViewComp_1.prototype.loadFirstRoom = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, room, bundle;
                return __generator(this, function (_b) {
                    _a = GameResPath_1.GameResPath.getScenePathByName(SingletonModuleComp_1.smc.account.AccountModel.chapter), room = _a.room, bundle = _a.bundle;
                    if (room)
                        return [2 /*return*/, ViewUtil_1.ViewUtil.loadPrefabNodeAsync(room, bundle)];
                    else
                        return [2 /*return*/];
                    return [2 /*return*/];
                });
            });
        };
        LoadingViewComp_1.prototype.checkFinished = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.delEnterCountDownEvent();
                            this.addEnterCountDownEvent();
                            if (!(this.loginFinished && this.loadFinished)) return [3 /*break*/, 5];
                            // 加载流程结束，移除加载提示界面
                            return [4 /*yield*/, this.loadFirstRoom()];
                        case 1:
                            // 加载流程结束，移除加载提示界面
                            _b.sent(); //加载第一个房子，防止出现空的情况,
                            SdkPlatform_1.SdkPlatform.report_loading('houseSucc');
                            this.loading_step = 2;
                            this.data.finished = this.loading_step_2;
                            if (!!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver) return [3 /*break*/, 4];
                            SdkPlatform_1.SdkPlatform.report_loading('prepareGuide');
                            console.log("引导中：", SingletonModuleComp_1.smc.account.AccountModel.guideStep);
                            //引导未结束
                            //加载引导资源
                            _a = BundleConfig_1.default.instance;
                            return [4 /*yield*/, Oops_1.oops.res.loadBundle(this.getRemoteBundleAddr("guide"))];
                        case 2:
                            //引导未结束
                            //加载引导资源
                            _a.guideBundle = (_b.sent());
                            return [4 /*yield*/, this.loadGuideAsset()];
                        case 3:
                            _b.sent();
                            SdkPlatform_1.SdkPlatform.report_loading('loadGuide');
                            // 初始化引导模块
                            SingletonModuleComp_1.smc.guide = ECS_1.ecs.getEntity(Guide_1.Guide);
                            // 引导当前位置
                            SingletonModuleComp_1.smc.guide.GuideModel.step = SingletonModuleComp_1.smc.account.AccountModel.guideStep;
                            // 引导最大步数（最后一步引导完后自动释放引导相关资源）
                            SingletonModuleComp_1.smc.guide.GuideModel.last = GuideData_1.GuideData.forceGuideDatas.length - 1;
                            this.isEnterGame();
                            // 加载引导资源
                            SingletonModuleComp_1.smc.guide.load(function () {
                                // this.removeLoading();
                            });
                            return [3 /*break*/, 5];
                        case 4:
                            console.log("引导完成！！！！！");
                            // this.removeLoading();
                            this.isEnterGame();
                            this.preLoadFiles(BundleConfig_1.default.instance.commonBundle.name);
                            _b.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**进入倒计时，如果超时，上报 */
        LoadingViewComp_1.prototype.addEnterCountDownEvent = function () {
            Oops_1.oops.timer.scheduleOnce(this.reportEnterTimeOut, this.ENTER_TIME_OUT);
        };
        LoadingViewComp_1.prototype.delEnterCountDownEvent = function () {
            Oops_1.oops.timer.unschedule(this.reportEnterTimeOut);
        };
        /**上报进入超时 */
        LoadingViewComp_1.prototype.reportEnterTimeOut = function () {
            SdkPlatform_1.SdkPlatform.report_loading("enterTimeOut");
        };
        /**如果是新手，加入新手资源加载 */
        LoadingViewComp_1.prototype.loadGuideAsset = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!SingletonModuleComp_1.smc.account.AccountModel.isNewUser) return [3 /*break*/, 4];
                            return [4 /*yield*/, BundleManager_1.BundleManager.loadPrefab('gui', 'drop')];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, BundleManager_1.BundleManager.loadPrefab('gui', 'furniture')];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, BundleManager_1.BundleManager.loadPrefab('gui', 'furnitureItem')];
                        case 3:
                            _a.sent();
                            BundleConfig_1.default.instance.guideBundle.preload('guideMove');
                            this.preLoadFiles("gui");
                            _a.label = 4;
                        case 4: return [2 /*return*/, true];
                    }
                });
            });
        };
        LoadingViewComp_1.prototype.preLoadFiles = function (bundleName) {
            var preloads = BundleConfig_1.default.instance.BundleName[bundleName].preloads;
            for (var i = 0; i < preloads.length; i++) {
                var fileName = preloads[i];
                var url = BundleConfig_1.default.instance.BundleName[bundleName].prefab[fileName];
                BundleConfig_1.default.instance["".concat(bundleName, "Bundle")].preload(url); //预加载
            }
        };
        LoadingViewComp_1.prototype.removeLoading = function () {
            return __awaiter(this, void 0, void 0, function () {
                var uic, _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!Oops_1.oops.storage.get("switchAgreement")) {
                                Oops_1.oops.storage.set("switchAgreement", true);
                            }
                            uic = {
                                onAdded: function (node, params) {
                                    GameMgr_1.GameMgr.Instance.isEnterGame = true;
                                    setTimeout(function () {
                                        _this.ent.remove(LoadingViewComp);
                                    }, 100);
                                }
                            };
                            this.scheduleOnce(function () {
                                if (!GameMgr_1.GameMgr.Instance.isEnterGame) {
                                    SdkPlatform_1.SdkPlatform.report_loading("notEnterGame");
                                }
                            }, 11);
                            if (!cc_2.assetManager.getBundle("gui")) return [3 /*break*/, 1];
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.LoadAnim, null, uic);
                            return [3 /*break*/, 3];
                        case 1:
                            //分包没有加载完
                            _a = BundleConfig_1.default.instance;
                            return [4 /*yield*/, Oops_1.oops.res.loadBundle(this.getRemoteBundleAddr("gui"))];
                        case 2:
                            //分包没有加载完
                            _a.guiBundle = (_b.sent());
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.LoadAnim, null, uic);
                            _b.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        LoadingViewComp_1.prototype.isEnterGame = function () {
            GameMgr_1.GameMgr.Instance.isLoadEnd = true;
            if (!GameMgr_1.GameMgr.Instance.isPassUser) {
                SdkPlatform_1.SdkPlatform.report_loading('isPassUser');
            }
            this.removeLoading();
        };
        /**添加一下预加载文件，防止界面加载太久 */
        LoadingViewComp_1.prototype.addPreload = function () {
        };
        LoadingViewComp_1.prototype.clearCache = function () {
            SdkPlatform_1.SdkPlatform.clearCache();
        };
        return LoadingViewComp_1;
    }(_classSuper));
    __setFunctionName(_classThis, "LoadingViewComp");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LoadingViewComp = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LoadingViewComp = _classThis;
}();
exports.LoadingViewComp = LoadingViewComp;
