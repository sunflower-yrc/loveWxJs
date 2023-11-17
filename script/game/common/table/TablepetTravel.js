"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablepetTravel = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablepetTravel = /** @class */ (function () {
    function TablepetTravel() {
        /** 编号【KEY】 */
        this.id = 0;
        /** 双主键【KEY】 */
        this.travelId = 0;
    }
    TablepetTravel.prototype.init = function (id, travelId) {
        var table = JsonUtil_1.JsonUtil.get(TablepetTravel.TableName);
        this.data = table[id][travelId];
        this.id = id;
        this.travelId = travelId;
    };
    Object.defineProperty(TablepetTravel.prototype, "travelReward", {
        /** 旅行奖励 */
        get: function () {
            return this.data.travelReward;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetTravel.prototype, "petCoin", {
        /** 转化纪念币 */
        get: function () {
            return this.data.petCoin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetTravel.prototype, "satiety", {
        /** 最低饱食度要求 */
        get: function () {
            return this.data.satiety;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetTravel.prototype, "travelTimes", {
        /** 旅行时间
    （分钟） */
        get: function () {
            return this.data.travelTimes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetTravel.prototype, "travelRandom", {
        /** 旅行事件随机权重 */
        get: function () {
            return this.data.travelRandom;
        },
        enumerable: false,
        configurable: true
    });
    TablepetTravel.TableName = "petTravel";
    return TablepetTravel;
}());
exports.TablepetTravel = TablepetTravel;
