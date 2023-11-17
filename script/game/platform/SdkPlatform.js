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
exports.SdkPlatform = void 0;
var cc_1 = require("cc");
var GlobalConfig_1 = require("../tools/GlobalConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var HttpPost_1 = require("../tools/HttpPost");
var DataObject_1 = require("../tools/DataObject");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var GameMgr_1 = require("../common/mgr/GameMgr");
var cc_2 = require("cc");
var cc_3 = require("cc");
/**
 * sdk
 * 数数ta
 */
var SdkPlatform = /** @class */ (function () {
    function SdkPlatform() {
    }
    SdkPlatform.clearCache = function () {
        var wx = window['wx'];
        wx === null || wx === void 0 ? void 0 : wx.showModal({
            title: '提示',
            content: '若长时间无法进入游戏，可尝试清理缓存，不会对您的游戏数据有任何影响。清理后请重新启动小游戏，确定清理吗?',
            success: function (res) {
                var _a;
                if (res.confirm) {
                    (_a = cc_2.assetManager.cacheManager) === null || _a === void 0 ? void 0 : _a.clearCache();
                    cc_3.game.end();
                }
                else if (res.cancel) {
                }
            }
        });
    };
    //初始化
    SdkPlatform.initSdk = function () {
        // TA SDK 配置对象 
        var config = {
            appId: "2d8f4539fbec4f699192819db51a842f",
            serverUrl: "https://thinkdata.swiftjava.com",
            autoTrack: {
                appShow: true,
                appHide: true // 自动采集 ta_mg_hide
            }
        };
        // 创建 TA 实例
        SdkPlatform.ta = new ThinkingAnalyticsAPI(config);
        // 初始化
        SdkPlatform.ta.init();
    };
    //小游戏转化归因接入
    SdkPlatform.Tracking = function (open_id) {
        return __awaiter(this, void 0, void 0, function () {
            var wx;
            return __generator(this, function (_a) {
                wx = window["wx"];
                if (wx) {
                    //获取gdt_vid
                    wx.onShow(function (args) {
                        var gdt_vid = args.gdt_vid;
                        if (gdt_vid) {
                            HttpPost_1.HttpPost.instance.reportConv(open_id, gdt_vid, function (data) {
                                SingletonModuleComp_1.smc.account.AccountModel.channel = data.channel;
                            });
                        }
                        else {
                            HttpPost_1.HttpPost.instance.reportConv(open_id, args.query.gdt_vid, function (data) {
                                SingletonModuleComp_1.smc.account.AccountModel.channel = data.channel;
                            });
                        }
                        // if (gdt_vid) {
                        //     var actions = {
                        //         action_time: oops.timer.getServerTime(),
                        //         user_id: {
                        //             wechat_app_id: "wx526edfd1e9c330f9", //微信小游戏上报必填 且必须通过授权
                        //             wechat_openid: open_id, //openid上报与unionid只能填写其中一个（优先回传openid，仅当获取不到openid时，才考虑回传uionid）
                        //         },
                        //         trace: {
                        //             click_id: gdt_vid//填写实际自归因点击id，点击id必填
                        //         },
                        //         action_type: "REGISTER", // 必填 行为类型       
                        //     };
                        //     HttpPost.instance.request("http://tracking.e.qq.com/conv", actions, (data: any) => {
                        //         console.log("gdt上报成功", data);
                        //         smc.account.AccountModel.gdt_vid=gdt_vid;
                        //         HttpPost.instance.saveDynamicData("",gdt_vid,(data: any) => {
                        //             console.log("server save gdtVid")
                        //         })
                        //     }, (data: any) => {
                        //         console.log("gdt上报失败", data)
                        //     })
                        // }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    //付费埋点
    SdkPlatform.TrackingPurch = function (price) {
        if (price === void 0) { price = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var wx, openId, actions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wx = window["wx"];
                        if (!(wx && SingletonModuleComp_1.smc.account.AccountModel.gdt_vid != "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, SingletonModuleComp_1.smc.initialize.platform.getLoginCode()];
                    case 1:
                        openId = _a.sent();
                        actions = {
                            action_time: Oops_1.oops.timer.getServerTime(),
                            user_id: {
                                wechat_app_id: "wx526edfd1e9c330f9",
                                wechat_openid: openId, //openid上报与unionid只能填写其中一个（优先回传openid，仅当获取不到openid时，才考虑回传uionid）
                            },
                            trace: {
                                click_id: SingletonModuleComp_1.smc.account.AccountModel.gdt_vid //填写实际自归因点击id，点击id必填
                            },
                            action_type: "PURCHASE",
                            action_param: {
                                "value": price //付费金额（单位：分）
                            }
                        };
                        HttpPost_1.HttpPost.instance.request("http://tracking.e.qq.com/conv", actions, function (data) {
                            console.log("gdt上报成功", data);
                        }, function (data) {
                            console.log("gdt上报失败", data);
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    //巨量激活转化接入
    SdkPlatform.TrackingInitByteDance = function (open_id) {
        return __awaiter(this, void 0, void 0, function () {
            var wx, launchOptions;
            return __generator(this, function (_a) {
                wx = window["wx"];
                if (wx) {
                    launchOptions = wx.getLaunchOptionsSync();
                    HttpPost_1.HttpPost.instance.reportByte(open_id, launchOptions.query.clue_token, launchOptions.query.advertiser_id, launchOptions.query.creative_id, launchOptions.query, "2", function (data) {
                        SingletonModuleComp_1.smc.account.AccountModel.channel = data.channel;
                    });
                    // wx.getLaunchOptionsSync((args: any) => {
                    //     if (clue_token) {
                    //         var actions = {
                    //             clue_token: clue_token,
                    //             open_id: openId,
                    //             event_type: "0",
                    //         };
                    //         let nonce=randomRangeInt(1,1000);
                    //         let timestamp=oops.timer.getServerTime();
                    //         let Signature=this.Sign([this.ByteDanceToken,timestamp.toString(),nonce.toString()]);
                    //         HttpPost.instance.request("https://clue.oceanengine.com/outer/wechat/applet/token/1707153017388036?timestamp="+timestamp+"&nonce="+nonce+"&signature="+Signature, actions, (data: any) => {
                    //             console.log("ByteDance上报成功", data);
                    //             smc.account.AccountModel.clue_token=clue_token;
                    //             HttpPost.instance.saveDynamicData(clue_token,"",(data: any) => {
                    //                 console.log("server save clue_token");
                    //             })
                    //         }, (data: any) => {
                    //             console.log("ByteDance上报失败", data)
                    //             HttpPost.instance.saveFrontendLog(data,(data: any) => {
                    //             })
                    //         })
                    //     }
                    // })
                }
                return [2 /*return*/];
            });
        });
    };
    //巨量次留接入  用户激活后次日在互联网环境下打开微信小游戏
    SdkPlatform.TrackingScentedByteDance = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    //巨量行为埋点接入  eventType:0-激活 1-注册 2-付费 6-次留
    SdkPlatform.TrackingPointByteDance = function (price) {
        return __awaiter(this, void 0, void 0, function () {
            var openId, actions, nonce, timestamp, Signature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (Oops_1.oops.timer.getServerTime() - SingletonModuleComp_1.smc.account.AccountModel.registerTime > 691200) //超过7天数据不回传
                            return [2 /*return*/];
                        if (!(SingletonModuleComp_1.smc.account.AccountModel.clue_token != "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, SingletonModuleComp_1.smc.initialize.platform.getLoginCode()];
                    case 1:
                        openId = _a.sent();
                        actions = {
                            clue_token: SingletonModuleComp_1.smc.account.AccountModel.clue_token,
                            open_id: openId,
                            event_type: "2",
                            props: {
                                "pay_amount": price
                            }
                        };
                        nonce = (0, cc_1.randomRangeInt)(1, 1000);
                        timestamp = Oops_1.oops.timer.getServerTime();
                        Signature = this.Sign([this.ByteDanceToken, timestamp.toString(), nonce.toString()]);
                        HttpPost_1.HttpPost.instance.request("https://clue.oceanengine.com/outer/wechat/applet/token/1707153017388036?timestamp=" + timestamp + "&nonce=" + nonce + "&signature=" + Signature, actions, function (data) {
                            console.log("上报成功", data);
                        }, function (data) {
                            console.log("上报失败", data);
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    //sha1加密
    SdkPlatform.Sign = function (stringArr) {
        // stringArr.sort();
        // let buffer="";
        // stringArr.forEach(str=>{
        //     buffer+=str;
        // })
        // return hex_sha1(buffer);
    };
    /**
     * 公共事件属性将会被保存到缓存中，无需每次启动时调用。如果调用 setSuperProperties 上传了先前已设置过的公共事件属性，则会覆盖之前的属性。
        Key 为该属性的名称，为字符串类型，规定只能以字母开头，包含数字，字母和下划线 "_"，长度最大为 50 个字符，对字母大小写不敏感,TA会统一转化为小写字母
        Value 为该属性的值，支持字符串、数字、布尔、时间、对象、对象组、数组
     */
    SdkPlatform.setSuperProperties = function () {
        var date = new Date(SingletonModuleComp_1.smc.account.AccountModel.registerTime * 1000);
        var time = date.toISOString().slice(0, 10);
        var superProperties = {
            channel: Oops_1.oops.http.DefaultParam["platform"],
            gameVersion: GlobalConfig_1.GlobalConfig.version,
            registerTime: time //注册时间
            // age : 1,//数字
            // isSuccess : true,//布尔
            // birthday :  new Date(),//对象
            // object : { key : "value" },//对象
            // object_arr : [ { key : "value" } ],//对象组
            // arr : [ "value" ]//数组
        };
        SdkPlatform.ta.setSuperProperties(superProperties);
    };
    /**
     * 登录成功的时候调用
     * 在用户进行登录时，可调用 login 来设置用户的账号 ID， TA 平台将会以账号 ID 作为身份识别 ID，并且设置的账号 ID 将会在调用 logout 之前一直保留。多次调用 login 将覆盖先前的账号 ID 。
     *  @param account_id
     */
    SdkPlatform.login = function (account_id) {
        // 用户的登录唯一标识，此数据对应上报数据里的#account_id,该方法不会上传登录事件
        SdkPlatform.ta.login(account_id);
    };
    /**
     * 追踪事件
     * @param eventName
     * @param properties
     */
    SdkPlatform.track = function (eventName, properties) {
        SdkPlatform.ta.track(
        // "product_buy", // 事件名称
        // {product_name: "商品名"} //事件属性
        eventName, properties);
    };
    /**
     * 请求观看广告
     * @param callback
     */
    SdkPlatform.showAds = function (adType, complete, failed) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (GameMgr_1.GameMgr.Instance.adsTipType == DataObject_1.AdsTipType.look || SingletonModuleComp_1.smc.account.AccountModel.vm.noAdsTicket <= 0) {
                    this.showAdsFun(adType, DataObject_1.AdsTipType.look, complete, failed);
                }
                else if (GameMgr_1.GameMgr.Instance.adsTipType == DataObject_1.AdsTipType.nothing) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.Advert, { adType: adType, complete: complete, failed: failed });
                }
                else {
                    this.adsSpeed(adType, complete);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * 请求广告加速
     * @param callback
     */
    SdkPlatform.adsSpeed = function (adType, complete) {
        var _this = this;
        this.ad_button_click(adType);
        HttpPost_1.HttpPost.instance.speedAdvertisement(function () {
            _this.ad_speed(adType);
            SingletonModuleComp_1.smc.account.AccountModel.vm.noAdsTicket--;
            if (complete) {
                complete(DataObject_1.AdsTipType.jump);
            }
        });
    };
    /**
     * 请求观看广告
     * @param callback
     */
    SdkPlatform.showAdsFun = function (adType, adsTipType, complete, failed) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.ad_button_click(adType);
                        return [4 /*yield*/, SingletonModuleComp_1.smc.initialize.platform.createRewardedVideoAd(adType)];
                    case 1:
                        ret = _a.sent();
                        if (ret == true) {
                            this.ad_reward(adType);
                            //发送服务器请求保存计数
                            HttpPost_1.HttpPost.instance.countAdvertisement(function () {
                                //计数增加
                                SingletonModuleComp_1.smc.account.AccountModel.vm.adsTimes++;
                                if (complete) {
                                    complete(adsTipType);
                                }
                            });
                        }
                        else {
                            //关闭转圈圈
                            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.NetLoading);
                            if (failed) {
                                failed();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**广告位展示 */
    SdkPlatform.ad_button_show = function (adType) {
        this.track("game_ad_show", { ad_type: "激励视频", rit_id: adType });
    };
    /**广告位请求（点击） */
    SdkPlatform.ad_button_click = function (adType) {
        this.track("game_ad_click", { ad_type: "激励视频", rit_id: adType });
    };
    /**广告位奖励成功 */
    SdkPlatform.ad_reward = function (adType) {
        this.track("game_ad_send", { ad_type: "激励视频", rit_id: adType });
    };
    /**广告加速 */
    SdkPlatform.ad_speed = function (adType) {
        this.track("game_ad_speed", { ad_type: "激励视频", rit_id: adType });
    };
    /**广告加载失败 */
    SdkPlatform.ad_error = function (adType, errCode) {
        this.track("game_ad_error", { ad_type: "激励视频", rit_id: adType, errCode: errCode });
    };
    /**充值展示 */
    SdkPlatform.recharge_show = function (payType) {
        this.track("recharge_show", { recharge_type: payType });
    };
    /**支付点击 */
    SdkPlatform.recharge_click = function (payType, id) {
        if (id === void 0) { id = 0; }
        this.track("recharge_click", { recharge_type: payType, product_id: id, channel: SingletonModuleComp_1.smc.account.AccountModel.channel });
    };
    /**支付完成 */
    SdkPlatform.recharge_over = function (payType, id, money) {
        if (id === void 0) { id = 0; }
        if (money === void 0) { money = 0; }
        this.track("recharge_over", { recharge_type: payType, product_id: id, recharge_money: money, channel: SingletonModuleComp_1.smc.account.AccountModel.channel });
        //this.TrackingPurch(money*100);
    };
    /**
     * 首次获得家具
     * @param type
     * @param id
     * @param source
     */
    SdkPlatform.furniture_acquisition = function (type, id, source) {
        this.track("furniture_acquisition", { furniture_type: type, type_value: id, source: type });
    };
    /**
     * 首次获得时装
     * @param type
     * @param id
     * @param source
     */
    SdkPlatform.dress_acquisition = function (type, id, source) {
        this.track("dress_acquisition", { dress_type: type, type_value: id, source: type });
    };
    /**
     * 闯关进入
     * @param level
     */
    SdkPlatform.tilegame_enter = function (level) {
        this.track("tilegame_enter", { level: level });
    };
    /**
     * 闯关结束
     * @param level
     * @param seconds 关卡秒数
     * @param result 1 通关  2 失败
     */
    SdkPlatform.tilegame_end = function (level, seconds, result) {
        this.track("tilegame_end", { level: level, "seconds": seconds, "result": result });
    };
    /**
     * 新手引导
     * @param guideid
     */
    SdkPlatform.report_guide = function (guideid) {
        this.track("game_guide", { guideid: guideid });
    };
    /**
     * 升级
     * @param level
     */
    SdkPlatform.levelup = function (level) {
        this.track("player_level", { level: level });
    };
    /**
     * 主线任务
     * @param level
     */
    SdkPlatform.mainTask = function (taskId) {
        this.track("task_complete", { taskId: taskId });
    };
    /**加载日志
     * @param step
     */
    SdkPlatform.report_loading = function (step) {
        this.track("loading", { step: step });
    };
    /**玩家点击家具日志 */
    SdkPlatform.furnitureClk = function (result, end) {
        if (end === void 0) { end = 0; }
        if (SingletonModuleComp_1.smc.account.AccountModel.isOpendFurniture) {
            // if (smc.account.AccountModel.furnitureWhiteList.includes(smc.account.AccountModel.userId)) {
            //     if (smc.account.AccountModel.traceCur < smc.account.AccountModel.traceMax) {
            //         this.track("furnitureClk", { "step": result });
            //     }
            // }
            if (SingletonModuleComp_1.smc.account.AccountModel.traceCur < SingletonModuleComp_1.smc.account.AccountModel.traceMax) {
                SingletonModuleComp_1.smc.initialize.platform.reportEvent({ type: "furnitureClk", data: { "step": result } });
                Oops_1.oops.log.trace(" furnitureClk>" + result);
                if (end == 1) {
                    SingletonModuleComp_1.smc.account.AccountModel.traceCur++;
                }
            }
        }
    };
    SdkPlatform.ByteDanceToken = "1CDF86F777F0A41C5E295BC753833DCF";
    return SdkPlatform;
}());
exports.SdkPlatform = SdkPlatform;
