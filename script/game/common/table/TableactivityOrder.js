"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableactivityOrder = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TableactivityOrder = /** @class */ (function () {
    function TableactivityOrder() {
        /** 双主键编号【KEY】 */
        this.id = 0;
    }
    TableactivityOrder.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TableactivityOrder.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TableactivityOrder.prototype, "orderType", {
        /** 订单类型 */
        get: function () {
            return this.data.orderType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableactivityOrder.prototype, "require", {
        /** 订单要求提交内容 */
        get: function () {
            return this.data.require;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableactivityOrder.prototype, "reward", {
        /** 完成获得奖励 */
        get: function () {
            return this.data.reward;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableactivityOrder.prototype, "orderProb", {
        /** 出现权重 */
        get: function () {
            return this.data.orderProb;
        },
        enumerable: false,
        configurable: true
    });
    TableactivityOrder.TableName = "activityOrder";
    return TableactivityOrder;
}());
exports.TableactivityOrder = TableactivityOrder;
