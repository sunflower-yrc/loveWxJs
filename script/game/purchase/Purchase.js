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
exports.Purchase = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var EventMessage_1 = require("../../../../extensions/oops-plugin-framework/assets/core/common/event/EventMessage");
var Payment_1 = require("../platform/Payment");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var cc_2 = require("cc");
var HttpPost_1 = require("../tools/HttpPost");
var DataObject_1 = require("../tools/DataObject");
var DropMgr_1 = require("../mgr/DropMgr");
var PurchaseData_1 = require("../common/tableData/PurchaseData");
var GameEvent_1 = require("../common/config/GameEvent");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Purchase = function () {
    var _classDecorators = [ccclass('Purchase')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var Purchase = _classThis = /** @class */ (function (_super) {
        __extends(Purchase_1, _super);
        function Purchase_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._inPurchase = false;
            _this.gameshow = false;
            _this.queryTimes = 0;
            _this.timeCount = 0;
            _this._orderId = "";
            return _this;
        }
        Object.defineProperty(Purchase_1.prototype, "inPurchase", {
            get: function () {
                return this._inPurchase;
            },
            set: function (value) {
                this._inPurchase = value;
                if (value) {
                    this.gameshow = false;
                    this.queryTimes = 0;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Purchase_1.prototype, "orderId", {
            get: function () {
                return this._orderId;
            },
            set: function (value) {
                this._orderId = value;
            },
            enumerable: false,
            configurable: true
        });
        Purchase_1.prototype.start = function () {
            Payment_1.Payment.Instance.purchase = this;
            //监听支付发货
            Oops_1.oops.message.on(EventMessage_1.EventMessage.GAME_ENTER, this.onHander, this);
            Oops_1.oops.message.on(EventMessage_1.EventMessage.GAME_EXIT, this.onHander, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.MdsQueryOrder, this.onHander, this);
        };
        Purchase_1.prototype.onHander = function (event, args) {
            switch (event) {
                case EventMessage_1.EventMessage.GAME_ENTER:
                    if (cc_2.sys.os === cc_2.sys.OS.ANDROID || cc_2.sys.os === cc_2.sys.OS.WINDOWS) {
                        return;
                    }
                    if (this.inPurchase) {
                        console.log("回到游戏");
                        this.gameshow = true;
                        if (this.queryTimes == 0) {
                            //轮询发货
                            this.queryOrder();
                        }
                    }
                    break;
                case EventMessage_1.EventMessage.GAME_EXIT:
                    if (this.inPurchase) {
                        console.log("支付中，切后台");
                        this.gameshow = false;
                        if (this.queryTimes == 0) {
                            //转圈圈
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.NetLoading, Oops_1.oops.language.getLangByID("loadingTips.pay"));
                        }
                    }
                    break;
                case GameEvent_1.GameEvent.MdsQueryOrder:
                    if (this.inPurchase) {
                        console.log("回到游戏");
                        this.gameshow = true;
                        if (this.queryTimes == 0) {
                            //轮询发货
                            this.queryOrder();
                        }
                    }
                    break;
            }
        };
        //轮询订单发货
        Purchase_1.prototype.queryOrder = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    console.log("queryOrder ", this.queryTimes);
                    if (cc_2.sys.os === cc_2.sys.OS.ANDROID || cc_2.sys.os === cc_2.sys.OS.WINDOWS) {
                        HttpPost_1.HttpPost.instance.mdsQueryOrder(this.orderId, function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var code;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(data && data.errcode == 90010)) return [3 /*break*/, 2];
                                        this.inPurchase = false;
                                        return [4 /*yield*/, SingletonModuleComp_1.smc.initialize.platform.getLoginCode()];
                                    case 1:
                                        code = _a.sent();
                                        HttpPost_1.HttpPost.instance.updateSessionKey(code.code, function () {
                                            _this.inPurchase = true;
                                            _this.gameshow = true;
                                            _this.queryOrder();
                                        });
                                        return [3 /*break*/, 3];
                                    case 2:
                                        this.queryOrderData(data);
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                    else if (cc_2.sys.os === cc_2.sys.OS.IOS) {
                        HttpPost_1.HttpPost.instance.queryOrder(this.orderId, function (data) {
                            _this.queryOrderData(data);
                        });
                    }
                    return [2 /*return*/];
                });
            });
        };
        Purchase_1.prototype.queryOrderData = function (data) {
            console.log("订单发货 ", data);
            var product_id = data.product_id;
            var purchaseData = new PurchaseData_1.PurchaseData(product_id);
            //一元提升特殊处理
            if (purchaseData.type == 9) {
                if (purchaseData.type == 9) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OfflineOneBuy);
                    SdkPlatform_1.SdkPlatform.recharge_over(DataObject_1.PayType.Offline, product_id, purchaseData.money);
                }
                //关闭转圈圈
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.NetLoading);
                //重置状态
                // this.inPurchase = false;
                // this.gameshow = false;
                // this.queryTimes = 0;
                // this.timeCount = 0;
                // this.orderId = "";
                return;
            }
            //显示掉落
            var dropInfo = new DataObject_1.DropInfo();
            dropInfo.dropData = DropMgr_1.DropMgr.getDropData(data.reward);
            if (purchaseData.type == 1) {
                //货币商城单个购买
                dropInfo.UIID.push(GameUIConfig_1.UIID.Store);
                if (Oops_1.oops.gui.has(GameUIConfig_1.UIID.Store)) {
                    //在当前界面  刷新当前购买的
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.PurchaseCurrency, { "type": purchaseData.type, "value": data.firstDouble, "product_id": product_id });
                }
                SdkPlatform_1.SdkPlatform.recharge_over(DataObject_1.PayType.CurrencyItem, product_id, purchaseData.money);
                console.log("刷新货币商城单个购买");
            }
            else if (purchaseData.type == 2) {
                //货币商城每日礼包
                dropInfo.UIID.push(GameUIConfig_1.UIID.Store);
                if (Oops_1.oops.gui.has(GameUIConfig_1.UIID.Store)) {
                    //在当前界面  刷新礼包
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.PurchaseCurrency, { "type": purchaseData.type, "value": data.freeTimes });
                }
                SdkPlatform_1.SdkPlatform.recharge_over(DataObject_1.PayType.CurrencyDailyPack, product_id, purchaseData.money);
                console.log("刷新货币商城每日礼包");
            }
            else if (purchaseData.type == 3) {
                //首充
                dropInfo.UIID.push(GameUIConfig_1.UIID.FirstRecharge);
                dropInfo.dropFrom = DataObject_1.DropFrom.FirstRecharge;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FirstDataBuyPass);
                DataMgr_1.DataMgr.updateUserData(data.userGrade, null, data.taskList);
                SdkPlatform_1.SdkPlatform.recharge_over(DataObject_1.PayType.FirstRecharge, product_id, purchaseData.money);
                console.log("刷新首充");
            }
            else if (purchaseData.type == 5) {
                dropInfo.dropFrom = DataObject_1.DropFrom.DiamondCard;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePrivilegeCard);
                SdkPlatform_1.SdkPlatform.recharge_over(DataObject_1.PayType.MonthCard, product_id, purchaseData.money);
            }
            else if (purchaseData.type == 6) {
                dropInfo.dropFrom = DataObject_1.DropFrom.AdsFree;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePrivilegeCard);
                SdkPlatform_1.SdkPlatform.recharge_over(DataObject_1.PayType.MonthNoAdCard, product_id, purchaseData.money);
            }
            else if (purchaseData.type == 7) {
                dropInfo.dropFrom = DataObject_1.DropFrom.LifeCard;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePrivilegeCard);
                SdkPlatform_1.SdkPlatform.recharge_over(DataObject_1.PayType.LifttimeCard, product_id, purchaseData.money);
            }
            else if (purchaseData.type == 8) {
                dropInfo.dropFrom = DataObject_1.DropFrom.OpenServer;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateOpenServe);
                SdkPlatform_1.SdkPlatform.recharge_over(DataObject_1.PayType.OpenServerGift, product_id, purchaseData.money);
            }
            else if (purchaseData.type == 10) {
                dropInfo.dropFrom = DataObject_1.DropFrom.petCard;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePrivilegeCard);
                SdkPlatform_1.SdkPlatform.recharge_over(DataObject_1.PayType.MonthCard, product_id, purchaseData.money);
            }
            else if (purchaseData.type == 11) {
                dropInfo.dropFrom = DataObject_1.DropFrom.Pass;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateDataBuyPass);
                SdkPlatform_1.SdkPlatform.recharge_over(DataObject_1.PayType.Pass, product_id, purchaseData.money);
            }
            else if (purchaseData.type == 12) {
                dropInfo.dropFrom = DataObject_1.DropFrom.WeekActivity;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.WeekActivityBuy);
                SdkPlatform_1.SdkPlatform.recharge_over(DataObject_1.PayType.WeekActivity, product_id, purchaseData.money);
            }
            else if (purchaseData.type == 13) {
                dropInfo.dropFrom = DataObject_1.DropFrom.LimitGift;
                dropInfo.UIID.push(GameUIConfig_1.UIID.LevelGift);
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.LimitGift);
                SdkPlatform_1.SdkPlatform.recharge_over(DataObject_1.PayType.LimitGift, product_id, purchaseData.money);
            }
            else if (purchaseData.type == 14) {
                dropInfo.dropFrom = DataObject_1.DropFrom.MoonLimitGift;
                dropInfo.UIID.push(GameUIConfig_1.UIID.MoonLimitGift);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.BuyMoonLimitGift);
                SdkPlatform_1.SdkPlatform.recharge_over(DataObject_1.PayType.MoonLimitGift, product_id, purchaseData.money);
            }
            else if (purchaseData.type == 15) {
                dropInfo.dropFrom = DataObject_1.DropFrom.MoonFestival;
                dropInfo.UIID.push(GameUIConfig_1.UIID.MoonFestival);
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.BuyMoonTour);
                SdkPlatform_1.SdkPlatform.recharge_over(DataObject_1.PayType.MoonTour, product_id, purchaseData.money);
            }
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
            //关闭转圈圈
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.NetLoading);
            //重置状态
            // this.inPurchase = false;
            // this.gameshow = false;
            // this.queryTimes = 0;
            // this.timeCount = 0;
            // this.orderId = "";
        };
        Purchase_1.prototype.update = function (dt) {
            if (this.inPurchase && this.gameshow) {
                console.log("log", this.inPurchase, this.gameshow);
                this.timeCount += dt;
                if (this.timeCount >= 1) {
                    //计数
                    this.timeCount = 0;
                    this.queryTimes++;
                    //每秒轮询发货
                    this.queryOrder();
                    //关闭转圈圈
                    if (this.queryTimes == 2) {
                        Oops_1.oops.gui.remove(GameUIConfig_1.UIID.NetLoading);
                    }
                    if (this.queryTimes >= 9) {
                        this.queryTimes = 0;
                        this.inPurchase = false;
                        this.gameshow = false;
                        this.orderId = "";
                    }
                }
            }
        };
        return Purchase_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Purchase");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Purchase = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Purchase = _classThis;
}();
exports.Purchase = Purchase;
