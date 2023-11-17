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
exports.Payment = exports.ProductData = void 0;
var HttpPost_1 = require("../tools/HttpPost");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var Singleton_1 = require("../common/base/Singleton");
var PurchaseData_1 = require("../common/tableData/PurchaseData");
var cc_1 = require("cc");
var ProductData = /** @class */ (function () {
    function ProductData() {
        this.cp_order_no = '9527';
        this.order_amt = 1;
        this.role_id = '1';
        this.role_name = '9527';
        this.role_level = 1;
        this.server_id = 1;
        this.server_name = '测试服';
        this.product_id = '1';
        this.product_name = '测试商品';
        this.product_amount = 1;
        this.product_desc = '测试商品';
        this.thumb_url = "https://starcdn.dmogames.com/wechat/static/rechargeUrl.png";
        this.sendMessageImg = "https://starcdn.dmogames.com/wechat/static/rechargeImg.png";
    }
    return ProductData;
}());
exports.ProductData = ProductData;
var Payment = /** @class */ (function (_super) {
    __extends(Payment, _super);
    function Payment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Payment, "Instance", {
        get: function () {
            return _super.GetInstance.call(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 创建支付订单
     * @param product_id 商品id
     * @returns
     */
    Payment.prototype.createOrder = function (product_id, select) {
        if (select === void 0) { select = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var success, failed;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        success = function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var productData, purchase, mdsResult;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log("创建订单成功", data.order_id);
                                        productData = new ProductData();
                                        productData.cp_order_no = data.order_id;
                                        productData.order_amt = data.price;
                                        productData.role_id = SingletonModuleComp_1.smc.account.AccountModel.userId + "";
                                        productData.role_name = SingletonModuleComp_1.smc.account.AccountModel.vm.nickName;
                                        productData.role_level = SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel;
                                        productData.server_name = Oops_1.oops.http.server == Oops_1.oops.config.game.httpServerQA ? "测试服" : "正式服";
                                        productData.product_id = product_id + "";
                                        purchase = new PurchaseData_1.PurchaseData(product_id);
                                        productData.product_name = purchase.name;
                                        productData.product_desc = purchase.name;
                                        this.purchase.inPurchase = true;
                                        this.purchase.orderId = data.order_id;
                                        console.log("支付中");
                                        if (!(cc_1.sys.os === cc_1.sys.OS.ANDROID || cc_1.sys.os === cc_1.sys.OS.WINDOWS)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, SingletonModuleComp_1.smc.initialize.platform.requestPayment(productData)];
                                    case 1:
                                        mdsResult = _a.sent();
                                        console.log("支付下单", mdsResult);
                                        if (mdsResult && mdsResult.isSucceed) {
                                            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.MdsQueryOrder);
                                        }
                                        else {
                                            this.purchase.inPurchase = false;
                                            this.purchase.orderId = "";
                                            this.purchase.queryTimes = 0;
                                            this.purchase.timeCount = 0;
                                            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.NetLoading);
                                        }
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, SingletonModuleComp_1.smc.initialize.platform.requestPayment(productData)];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); };
                        failed = function (data) {
                            console.error("下单出错", data);
                        };
                        return [4 /*yield*/, HttpPost_1.HttpPost.instance.createOrder(product_id, select, success, failed)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Payment;
}(Singleton_1.default));
exports.Payment = Payment;
