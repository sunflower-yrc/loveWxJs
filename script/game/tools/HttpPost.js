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
exports.HttpPost = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../common/mgr/GameMgr");
var DataObject_1 = require("./DataObject");
var HttpDetect_1 = require("./HttpDetect");
var HttpRequest_1 = require("../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest");
/**
 * 网络请求接口 单例
 */
var HttpPost = /** @class */ (function () {
    function HttpPost() {
        /**请求上报的日志，防止重复请求 */
        this.reportCache = {};
        /**请求队列 */
        this.requestCache = [];
        this.inRequest = false;
        this.httpDetect = new HttpDetect_1.HttpDetect();
        this.MAX_RELOAD_CNT = 3; //接口超时最大重试次数
        this.TIME_RETRY = 2; //重试延时
    }
    Object.defineProperty(HttpPost, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new HttpPost();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    HttpPost.prototype.request = function (name, param, completeCallback, errorCallback) {
        Oops_1.oops.http.post(name, param, completeCallback, errorCallback);
        // const code = this.hashCode(name + JSON.stringify(param));
        // if (!this.checkHasCode(code)) {
        //     const reqInfo: RequestParam = {
        //         code,
        //         name,
        //         param,
        //         completeCallback,
        //         errorCallback
        //     }
        //     this.requestCache.push(reqInfo);
        //     this.postNext();
        // }
    };
    HttpPost.prototype.checkHasCode = function (code) {
        if (this.requestCache.length == 0)
            return false;
        var results = this.requestCache.filter(function (v) {
            return v.code == code;
        });
        return results.length > 0;
    };
    HttpPost.prototype.completeFunc = function (data) {
        if (this.curReqInfo) {
            var _a = this.curReqInfo, code = _a.code, name_1 = _a.name, completeCallback = _a.completeCallback;
            this.curReqInfo = void 0;
            completeCallback && completeCallback(data);
            this.httpDetect.onLoadComplete(null, code, name_1);
        }
        this.inRequest = false;
        this.postNext();
    };
    HttpPost.prototype.errorFunc = function (data) {
        var _this = this;
        var _a;
        var doNext = function () {
            _this.curReqInfo = void 0;
            _this.inRequest = false;
            _this.postNext();
        };
        var isDoNext = true;
        if (this.curReqInfo) {
            var _b = this.curReqInfo, code = _b.code, name_2 = _b.name, param = _b.param, errorCallback = _b.errorCallback;
            errorCallback && errorCallback(data);
            this.httpDetect.onLoadComplete({ message: data.code }, code, name_2);
            if (data.event == HttpRequest_1.HttpEvent.TIMEOUT) { // 接口超时
                var curReqCnt = (_a = this.curReqInfo.curReqCnt) !== null && _a !== void 0 ? _a : 0;
                if (param && param.isNeedRetry) { //如果接口需要重试,重要的接口可以开启，比如领奖，保存装扮
                    if (curReqCnt < this.MAX_RELOAD_CNT) {
                        this.curReqInfo.curReqCnt = (curReqCnt + 1);
                        this.requestCache.unshift(this.curReqInfo);
                        isDoNext = false;
                        Oops_1.oops.timer.scheduleOnce(function () {
                            doNext();
                        }, this.TIME_RETRY);
                    }
                    else {
                        this.httpDetect.showLoadingRes(code);
                    }
                }
            }
        }
        if (isDoNext) {
            doNext();
        }
    };
    HttpPost.prototype.postNext = function () {
        if (!this.inRequest) {
            if (this.requestCache.length > 0) {
                this.inRequest = true;
                var req = this.requestCache.shift();
                if (req) {
                    this.curReqInfo = req;
                    var code = req.code, name_3 = req.name, param = req.param;
                    if (!param.isNeedRetry)
                        this.httpDetect.addSchelude(code);
                    Oops_1.oops.http.post(name_3, param, this.completeFunc.bind(this), this.errorFunc.bind(this));
                }
            }
        }
    };
    /** 预登录 校验登录信息*/
    HttpPost.prototype.preLogin = function (code, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "preLoginWeiXin";
                        param = {};
                        param["code"] = code;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 登录 */
    HttpPost.prototype.login = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "xYLoginUser";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 创建角色 */
    HttpPost.prototype.roleSettings = function (boy, girl, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "roleSettings";
                        param = {};
                        param["boy"] = boy;
                        param["girl"] = girl;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 创建支付订单 */
    HttpPost.prototype.createOrder = function (id, select, completeCallback, errorCallback) {
        if (select === void 0) { select = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "createOrder";
                        param = {};
                        param["id"] = id;
                        if (cc_1.sys.os == cc_1.sys.OS.ANDROID) {
                            param["device"] = cc_1.sys.OS.ANDROID;
                        }
                        else if (cc_1.sys.os == cc_1.sys.OS.IOS) {
                            param["device"] = cc_1.sys.OS.IOS;
                        }
                        param["select"] = select;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 查询订单发货 */
    HttpPost.prototype.queryOrder = function (order_id, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "queryOrder";
                        param = {};
                        param["order_id"] = order_id;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**修改用户头像 昵称 */
    HttpPost.prototype.updateUserInfo = function (avatar_url, nick_name, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "userSettings";
                        param = {};
                        if (avatar_url != "") {
                            //特殊处理下url  /=>@
                            // let avatar = avatar_url.replace(/\//g, "@");
                            param["avatar_url"] = avatar_url;
                        }
                        if (nick_name != "") {
                            param["nick_name"] = nick_name;
                        }
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**获取用户数据
     * 按需拓展返回用户数据
     */
    HttpPost.prototype.getUserInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getUserInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 统计广告次数 */
    HttpPost.prototype.countAdvertisement = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "countAdvertisement";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 保存装扮数据 */
    HttpPost.prototype.upUserDress = function (boy, girl, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "upUserDress";
                        param = {};
                        param["boy"] = boy;
                        param["girl"] = girl;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**保存家具数据 */
    HttpPost.prototype.upUserFurniture = function (guide_id, furnitureData, fromHouseId, hosue_id, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (GameMgr_1.GameMgr.Instance.isOutside) {
                            this.upUserFurnitureGoOut(furnitureData, completeCallback);
                            return [2 /*return*/];
                        }
                        name = "upUserFurniture";
                        param = {};
                        if (guide_id > 0)
                            param["guide_id"] = guide_id;
                        if (+hosue_id > 0)
                            param["house_id"] = hosue_id;
                        if (furnitureData)
                            param["scene"] = furnitureData;
                        param["from_house_id"] = fromHouseId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**外出保存家具数据 */
    HttpPost.prototype.upUserFurnitureGoOut = function (furnitureData, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "upUserFurnitureGoOut";
                        param = {};
                        if (furnitureData)
                            param["scene"] = furnitureData;
                        param["eventId"] = GameMgr_1.GameMgr.Instance.outsideEventData.id;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 切换房子，拉取相应的布局数据
     * @param house_id 房子ID
     */
    HttpPost.prototype.switchRoom = function (house_id, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "switchHouse";
                        param = { house_id: +house_id };
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**获取外出奖励 */
    HttpPost.prototype.getOutReward = function (eventId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getOutReward";
                        param = {};
                        param["eventId"] = eventId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**获取外出家具数据 */
    HttpPost.prototype.getUserFurniture = function (eventId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getUserFurniture";
                        param = {};
                        param["eventId"] = eventId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 开箱 */
    HttpPost.prototype.openBox = function (guide_id, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (GameMgr_1.GameMgr.Instance.isOutside) {
                            return [2 /*return*/, this.openBoxGoOut(completeCallback)];
                        }
                        name = "openBox";
                        param = {};
                        if (guide_id > 0) {
                            param["guide_id"] = guide_id;
                        }
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 外出开箱 */
    HttpPost.prototype.openBoxGoOut = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "openBoxGoOut";
                        param = {};
                        param["eventId"] = GameMgr_1.GameMgr.Instance.outsideEventData.id;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 刷新离线时间 */
    HttpPost.prototype.updateOfflineTime = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "updateOfflineTime";
                        return [4 /*yield*/, this.request(name, { isNeedRetry: 1 }, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 加速开箱
     * @param useTicket 0广告  1用券
     * @param completeCallback
     * @param errorCallback
     * @returns
     */
    HttpPost.prototype.speedUpOpenBox = function (useTicket, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (GameMgr_1.GameMgr.Instance.isOutside) {
                            this.speedUpOpenBoxGoOut(useTicket, completeCallback);
                            return [2 /*return*/];
                        }
                        name = "speedUpOpenBox";
                        param = {};
                        param["noviceBox"] = SingletonModuleComp_1.smc.account.AccountModel.noviceBox;
                        param["useTicket"] = useTicket;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 外出加速开箱
     * @param useTicket 0广告  1用券
     * @param completeCallback
     * @param errorCallback
     * @returns
     */
    HttpPost.prototype.speedUpOpenBoxGoOut = function (useTicket, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "speedUpOpenBoxGoOut";
                        param = {};
                        param["useTicket"] = useTicket;
                        param["eventId"] = GameMgr_1.GameMgr.Instance.outsideEventData.id;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 章节升级 */
    HttpPost.prototype.upUserChapter = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "upUserChapter";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 获取等级礼包
     * type 类型：1 广告领取单个 2 钻石购买全部 prop_id:家具或服装id speedUpType:1未使用广告加速券 2使用广告加速券 注：注：只有type为1的时候才需要传prop_id， speedUpType参数
    */
    HttpPost.prototype.receiveLevelUpGift = function (level, type, prop_id, speedUpType, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "receiveLevelUpGift";
                        param = {};
                        param["level"] = level;
                        param["type"] = type;
                        if (type == 1) {
                            param["prop_id"] = prop_id;
                            param["speedUpType"] = speedUpType;
                        }
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 任务列表 */
    HttpPost.prototype.getTaskList = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getTaskList";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 领取任务奖励 */
    HttpPost.prototype.getTaskReward = function (guide_id, type, taskId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getTaskReward";
                        param = {};
                        if (guide_id > 0) {
                            param["guide_id"] = guide_id;
                        }
                        param["type"] = type;
                        param["taskId"] = taskId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 获取签到数据 */
    HttpPost.prototype.getSignInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getSignInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 签到
     * speedUpType:1未使用广告加速券 2使用广告加速券
     */
    HttpPost.prototype.userSignIn = function (rankDay, speedUpType, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "userSignIn";
                        param = {};
                        param["rankDay"] = rankDay;
                        param["speedUpType"] = speedUpType;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 邮件列表 */
    HttpPost.prototype.getMailList = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getMailList";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 邮件单个领取 */
    HttpPost.prototype.getMailReward = function (mail_id, playerMailId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getMailReward";
                        param = {};
                        param["mail_id"] = mail_id;
                        param["playerMailId"] = playerMailId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 邮件单个删除 */
    HttpPost.prototype.delMail = function (mail_id, playerMailId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "delMail";
                        param = {};
                        param["mail_id"] = mail_id;
                        param["playerMailId"] = playerMailId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 邮件一键操作 */
    HttpPost.prototype.doMailList = function (type, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "doMailList";
                        param = {};
                        param["type"] = type;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 公告列表 */
    HttpPost.prototype.getNoticeList = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getNoticeList";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 公告读取 */
    HttpPost.prototype.readNotice = function (notice_id, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "readNotice";
                        param = {};
                        param["notice_id"] = notice_id;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 公告删除 */
    HttpPost.prototype.delNotice = function (notice_id, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "delNotice";
                        param = {};
                        param["notice_id"] = notice_id;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 商城列表
     * type: 1：服装商城 2：家具商城 3：墙面商城 4：套装商城
    */
    HttpPost.prototype.getShopList = function (type, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getShopList";
                        param = {};
                        param["type"] = type;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 刷新商城
    * type: 1：服装商城 2：家具商城 3：墙面商城
   */
    HttpPost.prototype.refreshShopList = function (type, refresh, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getShopList";
                        param = {};
                        param["type"] = type;
                        param["refresh"] = refresh;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 商城购买
     * shopType: 1：服装商城 2：家具商城 3：墙面商城 4：套装商城  commodityType：非必传，墙面商城 1 2，套装商城 0 1 2  commodityId：对应返回数据列表的key值 0 1 2 3
    */
    HttpPost.prototype.purchaseCommodity = function (shopType, commodityType, commodityId, suitId, completeCallback, errorCallback) {
        if (suitId === void 0) { suitId = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "purchaseCommodity";
                        param = {};
                        param["shopType"] = shopType;
                        param["commodityId"] = commodityId;
                        if (commodityType >= 0) {
                            param["commodityType"] = commodityType;
                        }
                        if (suitId > 0)
                            param["suitId"] = suitId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 时装/家具商城随机宝箱
     */
    HttpPost.prototype.openShopBox = function (storeBuyType, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "openDressShopBox";
                        if (storeBuyType == DataObject_1.StoreBuyType.Furniture) {
                            name = "openFurnitureShopBox";
                        }
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 套装商城宝箱
     * commodityType：对应返回数据list列表的key值 0 1 2   boxType:1:广告箱子 2：三连抽 3：五连抽
     */
    HttpPost.prototype.openSuitShopBox = function (commodityType, boxType, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "openSuitShopBox";
                        param = {};
                        param["commodityType"] = commodityType;
                        param["boxType"] = boxType;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 货币商城礼包
     */
    HttpPost.prototype.openInternalShopBox = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "openInternalShopBox";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 堆叠通关和获得道具
     * type：类型 1：关卡升级 2：获得撤销道具 3：获得提示道具 4：获得洗牌道具  count：数量，获得道具的时候必传
     */
    HttpPost.prototype.upMiniGame = function (guide_id, vo, level, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "upMiniGame";
                        param = {};
                        param["type"] = vo.type;
                        if (guide_id > 0) {
                            param["guide_id"] = guide_id;
                        }
                        if (vo.count && vo.count > 0) {
                            param["count"] = vo.count;
                        }
                        param["level"] = (level + 1);
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 堆叠使用道具
     * 	type：类型 1：获得撤销道具 2：获得提示道具 3：获得洗牌道具
    */
    HttpPost.prototype.expendProp = function (vo, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "expendProp";
                        param = {};
                        param["type"] = vo.type;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 获取体力时间戳
    */
    HttpPost.prototype.recoverPower = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "recoverPower";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**获取minigame数据 */
    HttpPost.prototype.getMiniGame = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getMiniGame";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**获得奖励 */
    HttpPost.prototype.receiveReward = function (guide_id, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "receiveReward";
                        param = {};
                        if (guide_id > 0) {
                            param["guide_id"] = guide_id;
                        }
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**事件记录 */
    HttpPost.prototype.recordEvent = function (eventData, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "recordEvent";
                        param = {};
                        param["triggerId"] = eventData.triggerId;
                        param["eventId"] = eventData.eventId;
                        param["status"] = eventData.status;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**获取事件列表 */
    HttpPost.prototype.getEventList = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getEventList";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**存照片*/
    HttpPost.prototype.uploadPhoto = function (type, _name, pic_url, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "uploadPhoto";
                        param = {};
                        param["type"] = type;
                        param["name"] = _name;
                        param["pic_url"] = pic_url;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**获取图鉴列表 */
    HttpPost.prototype.getCodexList = function (type, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getCodexList";
                        param = {};
                        param["type"] = type;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**领取图鉴糖果 */
    HttpPost.prototype.getCodexSweets = function (sweets_type, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getCodexSweets";
                        param = {};
                        param["sweets_type"] = sweets_type;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**领取图鉴糖果阶段奖励 */
    HttpPost.prototype.collectReward = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "collectReward";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**获取图鉴糖果阶段配置 */
    HttpPost.prototype.getRewardList = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getRewardList";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**回收家具 */
    HttpPost.prototype.recycleFurniture = function (recycleFurniture, eventId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "recycleFurniture";
                        param = {};
                        param["recycleFurniture"] = recycleFurniture;
                        param["eventId"] = eventId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**回收装扮 */
    HttpPost.prototype.recycleDress = function (recycleDress, eventId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "recycleDress";
                        param = {};
                        param["recycleDress"] = recycleDress;
                        param["eventId"] = eventId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**场景互动挂机领取
     * type 1.动物互动
     */
    HttpPost.prototype.interactEntry = function (type, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "interactEntry";
                        param = {};
                        param["type"] = type;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 零点刷新
    */
    HttpPost.prototype.dayRefreshUserInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "dayRefreshUserInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
         * 获取房屋评级数据
        */
    HttpPost.prototype.getHouseDetail = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getHouseDetail";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 完成心愿单
    */
    HttpPost.prototype.completeWish = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "completeWish";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 评级升级
    */
    HttpPost.prototype.houseLevelUp = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "houseLevelUp";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }; //时装家具商人
    HttpPost.prototype.getMerchantDetail = function (eventId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getMerchantDetail";
                        param = {};
                        param["eventId"] = eventId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //看广告获取商人物品，三选一
    HttpPost.prototype.getMerchantReward = function (eventId, times, check, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getMerchantReward";
                        param = {};
                        param["eventId"] = eventId;
                        param["times"] = times;
                        param["check"] = check;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    * 排行榜
    *  type  1：时装数量 2：家具数量 3：房屋评级 4：时装评分 5：家具评分
    */
    HttpPost.prototype.getRankingDetail = function (type, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getRankingDetail";
                        param = {};
                        param["type"] = type;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //记录拍照次数
    HttpPost.prototype.recordsTimes = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "recordsTimes";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
* 出租列表
*/
    HttpPost.prototype.hireInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "hireInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    * 出租上阵下阵
    *hireId 出租id itemId 出租物品id type 1.上阵 2.下阵
    */
    HttpPost.prototype.hireUp = function (hireId, itemId, type, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "hireUp";
                        param = {};
                        param["hireId"] = hireId;
                        param["itemId"] = itemId;
                        param["type"] = type;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    * 开始出租
    *hireId 出租id
    */
    HttpPost.prototype.hireStart = function (hireId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "hireStart";
                        param = {};
                        param["hireId"] = hireId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    *出租加速
    *hireId 出租id speedUpType加速类型（1：广告 2：加速券）
    */
    HttpPost.prototype.hireSpeedUp = function (hireId, speedUpType, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "hireSpeedUp";
                        param = {};
                        param["hireId"] = hireId;
                        param["speedUpType"] = speedUpType;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
 * 出租换一批
 */
    HttpPost.prototype.hireRefresh = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "hireRefresh";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    *领取出租奖励
    *hireId 出租id
    */
    HttpPost.prototype.getHireFinishReward = function (hireId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getHireFinishReward";
                        param = {};
                        param["hireId"] = hireId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //获取问卷配置
    HttpPost.prototype.questionnaireInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "questionnaireInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //问卷提交
    HttpPost.prototype.questionnaireSubmit = function (quesId, answer, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(answer);
                        name = "questionnaireSubmit";
                        param = {};
                        param["questionId"] = quesId;
                        param["answer"] = answer;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
   *广告加速
   */
    HttpPost.prototype.speedAdvertisement = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "speedAdvertisement";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
        *超值礼包奖励获取
        */
    HttpPost.prototype.videoReward = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "videoReward";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }; /** 超级开箱 */
    HttpPost.prototype.superOpenBoxInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "superOpenBoxInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 重新随机 */
    HttpPost.prototype.superDropRefresh = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "superDropRefresh";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 选择套装 */
    HttpPost.prototype.superOpenBox = function (suitId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "superOpenBox";
                        param = {};
                        param["suitId"] = suitId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 获取特权卡数据 */
    HttpPost.prototype.getCardDetail = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getCardDetail";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 领取每日奖励
     * 类型type 1：免广告月卡 2：钻石月卡 3：每日福利 4：终身卡 5.宠物月卡
     */
    HttpPost.prototype.getDayReward = function (type, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getDayReward";
                        param = {};
                        param["type"] = type;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }; /** 宠物藏馆 */
    HttpPost.prototype.petCollectList = function (collectType, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petCollectList";
                        param = {};
                        param["collectType"] = collectType;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 开服7日活动详情
         */
    HttpPost.prototype.new7DayInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "new7DayInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 开服7日活动 领取任务奖励
     * taskId
    */
    HttpPost.prototype.new7DayGetTaskReward = function (taskId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "new7DayGetTaskReward";
                        param = {};
                        param["taskId"] = taskId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 离线收益详情
     */
    HttpPost.prototype.offLineInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "offLineInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 领取离线收益奖励
     * 类型type （1：普通 2：视频领取三倍奖励）
     */
    HttpPost.prototype.getOffLineReward = function (type, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getOffLineReward";
                        param = {};
                        param["type"] = type;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }; /** 宠物二选一 */
    HttpPost.prototype.getNewPet = function (petId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getNewPet";
                        param = {};
                        param["petId"] = petId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 购买宠物*/
    HttpPost.prototype.buyPet = function (petId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "buyPet";
                        param = {};
                        param["petId"] = petId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 宠物列表*/
    HttpPost.prototype.petList = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petList";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 宠物用具列表*/
    HttpPost.prototype.petApplianceList = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petApplianceList";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 开始旅行*/
    HttpPost.prototype.petTravelBegin = function (petId, travelItemId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petTravelBegin";
                        param = {};
                        param["petId"] = petId;
                        param["travelItemId"] = travelItemId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 宠物道具详情*/
    HttpPost.prototype.petTravelBuyInfo = function (petId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petTravelBuyInfo";
                        param = {};
                        param["petId"] = petId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 宠物道具购买*/
    HttpPost.prototype.petTravelBuy = function (travelItemId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petTravelBuy";
                        param = {};
                        param["travelItemId"] = travelItemId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 切换宠物皮肤*/
    HttpPost.prototype.petSetSkin = function (petId, skinId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petSetSkin";
                        param = {};
                        param["petId"] = petId;
                        param["skinId"] = skinId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 获取宠物食物*/
    HttpPost.prototype.petGetFoods = function (getFoodsType, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petGetFoods";
                        param = {};
                        param["getFoodsType"] = getFoodsType;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 获取宠物食物抽取界面详情*/
    HttpPost.prototype.petGetFoodsInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petGetFoodsInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 获取宠物食物详情*/
    HttpPost.prototype.petFoodsInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petFoodsInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 宠物喂食*/
    HttpPost.prototype.petEatFoods = function (petId, foodsId, count, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petEatFoods";
                        param = {};
                        param["petId"] = petId;
                        param["foodsId"] = foodsId;
                        param["count"] = count;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 宠物旅行奖励领取*/
    HttpPost.prototype.petTravelFinish = function (petId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petTravelFinish";
                        param = {};
                        param["petId"] = petId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 加速宠物心情回复*/
    HttpPost.prototype.speedPetMood = function (petId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "speedPetMood";
                        param = {};
                        param["petId"] = petId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 加速宠物心情回复详情*/
    HttpPost.prototype.speedPetMoodInfo = function (petId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "speedPetMoodInfo";
                        param = {};
                        param["petId"] = petId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 宠物用具购买*/
    HttpPost.prototype.petApplianceBuy = function (petId, applianceId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petApplianceBuy";
                        param = {};
                        param["petId"] = petId;
                        param["applianceId"] = applianceId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 宠物用具更换*/
    HttpPost.prototype.petApplianceUse = function (petId, applianceId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petApplianceUse";
                        param = {};
                        param["petId"] = petId;
                        param["applianceId"] = applianceId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 宠物改名*/
    HttpPost.prototype.petChangeName = function (petId, _name, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petChangeName";
                        param = {};
                        param["petId"] = petId;
                        param["name"] = _name;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 宠物藏管新物品奖励*/
    HttpPost.prototype.petCollectRewardNew = function (petRewardId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petCollectRewardNew";
                        param = {};
                        param["petRewardId"] = petRewardId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 宠物藏管进度奖励*/
    HttpPost.prototype.petCollectRewardProgress = function (collectType, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "petCollectRewardProgress";
                        param = {};
                        param["collectType"] = collectType;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 兑换码*/
    HttpPost.prototype.useCdk = function (code, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "useCdk";
                        param = {};
                        param["code"] = code;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** code更新*/
    HttpPost.prototype.updateSessionKey = function (code, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "updateSessionKey";
                        param = {};
                        param["code"] = code;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 米大师订单查询*/
    HttpPost.prototype.mdsQueryOrder = function (order_id, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "mdsQueryOrder";
                        param = {};
                        param["order_id"] = order_id;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 查询红点信息*/
    HttpPost.prototype.getRedDotInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getRedDotInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 埋点统计保存数据*/
    // async saveDynamicData(clue_token: string, gdt_vid:string,completeCallback?: Function, errorCallback?: Function){
    //     let name = "saveDynamicData";
    //     let param: any = {};
    //     if(clue_token!="")
    //     param["clue_token"] = clue_token;
    //     if(gdt_vid!="")
    //     param["gdt_vid"] = gdt_vid;
    //     return await this.request(name, param, completeCallback, errorCallback)
    // }  
    /** 埋点统计保存数据*/
    HttpPost.prototype.reportByte = function (openId, clueToken, adId, creativeId, params, temp, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "reportByte";
                        param = {};
                        param["openId"] = openId;
                        param["clueToken"] = clueToken;
                        param["adId"] = adId;
                        param["creativeId"] = creativeId;
                        param["params"] = params;
                        param["temp"] = temp;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 埋点统计保存数据*/
    HttpPost.prototype.reportConv = function (openId, clickId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "reportConv";
                        param = {};
                        param["openId"] = openId;
                        param["clickId"] = clickId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 动作更新*/
    HttpPost.prototype.upRankingMove = function (boyMoveId, girlMoveId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "upRankingMove";
                        param = {};
                        param["boyMoveId"] = boyMoveId;
                        param["girlMoveId"] = girlMoveId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 通行证详情*/
    HttpPost.prototype.passInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "passInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 通行证领取任务奖励*/
    HttpPost.prototype.passGetTaskReward = function (taskId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "passGetTaskReward";
                        param = {};
                        param["taskId"] = taskId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 通行证领取等级奖励*/
    HttpPost.prototype.passGetLevelReward = function (rewardId, rewardType, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "passGetLevelReward";
                        param = {};
                        param["rewardId"] = rewardId;
                        param["rewardType"] = rewardType;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 首充奖励详情*/
    HttpPost.prototype.firstRechargeInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "firstRechargeInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 领取首充奖励*/
    HttpPost.prototype.getFirstRechargeReward = function (day, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getFirstRechargeReward";
                        param = {};
                        param["day"] = day;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }; /** oss直传签名*/
    HttpPost.prototype.ossSign = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "ossSign";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 周常活动-详情*/
    HttpPost.prototype.weekActivityInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "weekActivityInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 周常活动-领取任务奖励*/
    HttpPost.prototype.getWeekActivityReward = function (taskId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getWeekActivityReward";
                        param = {};
                        param["taskId"] = taskId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** 周常活动-领取免费奖励*/
    HttpPost.prototype.getWeekActivityFreeReward = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getWeekActivityFreeReward";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**部分错误上报自己后台 */
    HttpPost.prototype.eventReport = function (info, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param, extra, hashCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "errorRecord";
                        param = {};
                        param["event"] = info.event;
                        extra = info.extra;
                        extra['extra'] = { os: cc_1.sys.platform, uid: SingletonModuleComp_1.smc.account.AccountModel.userId, time: new Date(Oops_1.oops.timer.getServerTime() * 1000).toLocaleString() };
                        param["report"] = JSON.stringify(extra);
                        hashCode = this.hashCode((info.event + "_" + param["report"]).substring(0, 200));
                        console.log("HttpPost ~ eventReport ~ hashCode:", hashCode);
                        if (!!this.reportCache[hashCode]) return [3 /*break*/, 2];
                        this.reportCache[hashCode] = 1;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HttpPost.prototype.hashCode = function (str, caseSensitive) {
        if (caseSensitive === void 0) { caseSensitive = true; }
        if (!caseSensitive) {
            str = str.toLowerCase();
        }
        var hash = 1315423911, i, ch;
        for (i = str.length - 1; i >= 0; i--) {
            ch = str.charCodeAt(i);
            hash ^= ((hash << 5) + ch + (hash >> 2));
        }
        return (hash & 0x7FFFFFFF);
    };
    /**保存庄园家具数据 */
    HttpPost.prototype.manorFurniture = function (furnitureData, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "manorFurniture";
                        param = {};
                        param["manorFurniture"] = furnitureData;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**初始化庄园 */
    HttpPost.prototype.manorInit = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "manorInit";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //种子商店购买
    HttpPost.prototype.purchaseSeed = function (seedId, seedTotal, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "purchaseSeed";
                        param = {};
                        param["seedId"] = seedId;
                        param["seedTotal"] = seedTotal;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //种子种植
    HttpPost.prototype.plant = function (map, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "plant";
                        param = {};
                        result = [];
                        map.forEach(function (value, key) {
                            result.push({ landId: key, seedId: value });
                        });
                        param["plantList"] = result;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //种子收获
    HttpPost.prototype.harvest = function (land_id, type, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "harvest";
                        param = {};
                        param["landId"] = land_id;
                        param["type"] = type;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //庄园解锁土地
    HttpPost.prototype.landUnlock = function (land_id, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "landUnlock";
                        param = {};
                        param["land_id"] = land_id;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //庄园详情
    HttpPost.prototype.manorDetail = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "manorDetail";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //庄园升级
    HttpPost.prototype.manorUpLevel = function (manorLevel, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "manorUpLevel";
                        param = {};
                        param["manorLevel"] = manorLevel;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //庄园加速升级
    HttpPost.prototype.manorUpLevelSpeed = function (manorLevel, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "manorUpLevelSpeed";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //庄园浇水
    HttpPost.prototype.watering = function (landId, type, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "watering";
                        param = {};
                        param["landId"] = landId;
                        param["type"] = type; //0浇一块土地1一键浇水
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: //0浇一块土地1一键浇水
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //庄园土地详情
    HttpPost.prototype.getLandDetail = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getLandDetail";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //国庆活动-月圆共婵娟，活动订单详情
    HttpPost.prototype.nationalDayOrderInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "nationalDayOrderInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //国庆活动，每日签到-详情
    HttpPost.prototype.nationalDayLoginInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "nationalDayLoginInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //国庆活动，每日签到-选择位置
    HttpPost.prototype.nationalDaySelectLoginReward = function (selectId, day, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "nationalDaySelectLoginReward";
                        param = {};
                        param["selectId"] = selectId;
                        param["day"] = day;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //国庆活动，每日签到-领取奖励
    HttpPost.prototype.nationalDayGetLoginReward = function (day, type, selectId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "nationalDayGetLoginReward";
                        param = {};
                        param["day"] = day;
                        param["type"] = type;
                        param["selectId"] = selectId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //国庆活动，活动订单-领取奖励
    HttpPost.prototype.nationalDayGetOrderReward = function (orderId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "nationalDayGetOrderReward";
                        param = {};
                        param["orderId"] = orderId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //国庆活动，活动订单-视频加速
    HttpPost.prototype.nationalDayOrderVideo = function (orderId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "nationalDayOrderVideo";
                        param = {};
                        param["orderId"] = orderId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //国庆活动-活动珍藏，详情
    HttpPost.prototype.nationalDayExchangeInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "nationalDayExchangeInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //国庆活动，活动珍藏，领取进度奖励
    HttpPost.prototype.nationalDayGetCollectReward = function (id, select, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "nationalDayGetCollectReward";
                        param = {};
                        param["id"] = id;
                        param["select"] = select;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //国庆活动，活动珍藏-兑换
    HttpPost.prototype.nationalDayExchangeReward = function (id, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "nationalDayExchangeReward";
                        param = {};
                        param["id"] = id;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //国庆活动，系列礼包-详情
    HttpPost.prototype.seriesGift = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "seriesGift";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //国庆活动，系列礼包-免费奖励领取
    HttpPost.prototype.getSeriesReward = function (giftId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getSeriesReward";
                        param = {};
                        param["giftId"] = giftId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //国庆活动，活动任务-详情
    HttpPost.prototype.nationalDayTaskInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "nationalDayTaskInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //国庆活动，活动任务-领取奖励
    HttpPost.prototype.nationalDayGetTaskReward = function (taskId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "nationalDayGetTaskReward";
                        param = {};
                        param["taskId"] = taskId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //节日礼包详情
    HttpPost.prototype.festivalGiftInfo = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "festivalGiftInfo";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }; //庄园事件 
    HttpPost.prototype.finishManorEvent = function (landId, eventId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "finishManorEvent";
                        param = {};
                        param["landId"] = landId;
                        param["eventId"] = eventId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //庄园升级土地
    HttpPost.prototype.buffUpLv = function (land_id, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "buffUpLv";
                        param = {};
                        param["land_id"] = land_id;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //庄园播报详情
    HttpPost.prototype.broadcast = function (type, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "broadcast";
                        param = {};
                        param["type"] = type;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //庄园获取土地和种子信息
    HttpPost.prototype.getSeedAndLand = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getSeedAndLand";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //看广告完成心愿单
    HttpPost.prototype.advCompleteWish = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "advCompleteWish";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //庄园摇钱树解锁接口
    HttpPost.prototype.moneyTreeUnlock = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "moneyTreeUnlock";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //庄园摇钱树领取奖励
    HttpPost.prototype.moneyTreeGift = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "moneyTreeGift";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //庄园获取水和庄园币查询接口
    HttpPost.prototype.manorAdTimes = function (type, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "manorAdTimes";
                        param = {};
                        param["type"] = type;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //庄园获取水和庄园币接口
    HttpPost.prototype.getCoinOrPower = function (type, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getCoinOrPower";
                        param = {};
                        param["type"] = type;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //领取免费开箱次数
    HttpPost.prototype.getLvOpenBoxTimes = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "getLvOpenBoxTimes";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //许愿初始化
    HttpPost.prototype.promiseInit = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "promiseInit";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //许愿
    HttpPost.prototype.wish = function (id, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "promise";
                        param = {};
                        param["id"] = id;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //许愿加速
    HttpPost.prototype.promiseUpLevelSpeed = function (id, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "promiseUpLevelSpeed";
                        param = {};
                        param["id"] = id;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //许愿领奖
    HttpPost.prototype.promiseGift = function (completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "promiseGift";
                        param = {};
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //商店内购随机奖励
    HttpPost.prototype.purchaseCurrency = function (shopType, giftId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "purchaseCurrency";
                        param = {};
                        param["shopType"] = shopType;
                        param["giftId"] = giftId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //开服活动看广告
    HttpPost.prototype.new7DaySeeAd = function (giftId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "new7DaySeeAd";
                        param = {};
                        param["giftId"] = giftId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //限时礼包看广告
    HttpPost.prototype.limitedTimeAdTimes = function (giftId, completeCallback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var name, param;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "limitedTimeAdTimes";
                        param = {};
                        param["giftId"] = giftId;
                        return [4 /*yield*/, this.request(name, param, completeCallback, errorCallback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return HttpPost;
}());
exports.HttpPost = HttpPost;
