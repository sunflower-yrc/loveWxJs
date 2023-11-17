"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabledress = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tabledress = /** @class */ (function () {
    function Tabledress() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tabledress.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tabledress.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tabledress.prototype, "name", {
        /** 装扮名称 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabledress.prototype, "desc", {
        /** 装扮描述 */
        get: function () {
            return this.data.desc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabledress.prototype, "classify", {
        /** 筛选页签
    101.头；
    102.上身；
    103.下身；
    104.手持物；
    105.脸； */
        get: function () {
            return this.data.classify;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabledress.prototype, "dressType", {
        /**                   类型
    1：1发型，2头饰；
    2：4上衣，5衣服装饰品；
    3：6下衣，7鞋子；
    4：8手持品；
    5：9妆容，10脸部饰品，11眼睛，12嘴巴，3眉毛 */
        get: function () {
            return this.data.dressType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabledress.prototype, "grade", {
        /** 品质
    1.杏色；2.绿色；3.蓝色；4.黄色 */
        get: function () {
            return this.data.grade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabledress.prototype, "limits", {
        /** 装扮进箱子的解锁条件
    0为无限制 */
        get: function () {
            return this.data.limits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabledress.prototype, "jackpot", {
        /** 是否进入普通掉落奖池 */
        get: function () {
            return this.data.jackpot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabledress.prototype, "dressWeight", {
        /** 权重值 */
        get: function () {
            return this.data.dressWeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabledress.prototype, "skin", {
        /** 皮肤名称 */
        get: function () {
            return this.data.skin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabledress.prototype, "gain", {
        /** 获取途径 */
        get: function () {
            return this.data.gain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabledress.prototype, "exp", {
        /** 经验值 */
        get: function () {
            return this.data.exp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabledress.prototype, "dressMark", {
        /** 评分 */
        get: function () {
            return this.data.dressMark;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabledress.prototype, "dressSuit", {
        /** 装扮所属套装
    套装ID
    0为非套装 */
        get: function () {
            return this.data.dressSuit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabledress.prototype, "collect", {
        /** 图鉴糖果奖励 */
        get: function () {
            return this.data.collect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabledress.prototype, "Frock", {
        /** 是否为连衣裙
    0为否
    1为是 */
        get: function () {
            return this.data.Frock;
        },
        enumerable: false,
        configurable: true
    });
    Tabledress.TableName = "dress";
    return Tabledress;
}());
exports.Tabledress = Tabledress;
