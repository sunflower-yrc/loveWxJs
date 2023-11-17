"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablepurchase = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablepurchase = /** @class */ (function () {
    function Tablepurchase() {
        /** 主键编号【KEY】 */
        this.id = 0;
    }
    Tablepurchase.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablepurchase.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablepurchase.prototype, "type", {
        /** 内购类型
    1.钻石商城；
    2.钻石商城每日礼包；
    3.首充礼包；
    4.周卡；
    5.月卡；
    6.免广告月卡；
    7.终身卡；
    8.新居之旅礼包；
    9.挂机上限礼包；
    10.宠物月卡；
    11.通行证；
    12.周常礼包；
    13.限时礼包； */
        get: function () {
            return this.data.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepurchase.prototype, "name", {
        /** 名称 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepurchase.prototype, "desc", {
        /** 描述 */
        get: function () {
            return this.data.desc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepurchase.prototype, "moneyType", {
        /** 价格类型
    1每日累计广告次数；
    2钻石购买价格；
    3广告次数；
    4每周广告次数；
    5.每月广告次数； */
        get: function () {
            return this.data.moneyType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepurchase.prototype, "money", {
        /** 价格 */
        get: function () {
            return this.data.money;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepurchase.prototype, "reward", {
        /** 内购奖励 */
        get: function () {
            return this.data.reward;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepurchase.prototype, "dailyReward", {
        /** 持续性每日奖励 */
        get: function () {
            return this.data.dailyReward;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepurchase.prototype, "typeValue", {
        /** 内购参数 */
        get: function () {
            return this.data.typeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepurchase.prototype, "firstDouble", {
        /** 首充是否双倍
    0.否
    1.是 */
        get: function () {
            return this.data.firstDouble;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepurchase.prototype, "icon", {
        /** 商品图标 */
        get: function () {
            return this.data.icon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepurchase.prototype, "shamMoney", {
        /** 商品原价
     */
        get: function () {
            return this.data.shamMoney;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepurchase.prototype, "buyLimit", {
        /** 限购次数
    限购类型-限购次数
    类型1为每日限购
    类型2为终身限购
    类型3为每月限购
    类型101为活动限购 */
        get: function () {
            return this.data.buyLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepurchase.prototype, "showLimit", {
        /** 限制出现 */
        get: function () {
            return this.data.showLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepurchase.prototype, "times", {
        /** 倒计时（秒）
    填0则不限制 */
        get: function () {
            return this.data.times;
        },
        enumerable: false,
        configurable: true
    });
    Tablepurchase.TableName = "purchase";
    return Tablepurchase;
}());
exports.Tablepurchase = Tablepurchase;
