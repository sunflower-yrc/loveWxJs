"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablemanorTrade = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablemanorTrade = /** @class */ (function () {
    function TablemanorTrade() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TablemanorTrade.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TablemanorTrade.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TablemanorTrade.prototype, "name", {
        /** 消息描述 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorTrade.prototype, "random1", {
        /** 结果概率 */
        get: function () {
            return this.data.random1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorTrade.prototype, "random2", {
        /** 结果参数
    种植物id1-种植物id2-种植物id3，价格变化 | 种植物id1-种植物id2-种植物id3，价格变化 */
        get: function () {
            return this.data.random2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorTrade.prototype, "random3", {
        /** 结果描述 */
        get: function () {
            return this.data.random3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorTrade.prototype, "tradeWeight", {
        /** 消息权重 */
        get: function () {
            return this.data.tradeWeight;
        },
        enumerable: false,
        configurable: true
    });
    TablemanorTrade.TableName = "manorTrade";
    return TablemanorTrade;
}());
exports.TablemanorTrade = TablemanorTrade;
