"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablemanorEvent = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablemanorEvent = /** @class */ (function () {
    function TablemanorEvent() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TablemanorEvent.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TablemanorEvent.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TablemanorEvent.prototype, "name", {
        /** 事件名称 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorEvent.prototype, "timeValue1", {
        /** 事件时间参数1 */
        get: function () {
            return this.data.timeValue1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorEvent.prototype, "timeValue2", {
        /** 事件时间参数2 */
        get: function () {
            return this.data.timeValue2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorEvent.prototype, "actionPowerMax", {
        /** 事件效果参数 */
        get: function () {
            return this.data.actionPowerMax;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorEvent.prototype, "timesLimit", {
        /** 事件数量上限
    1.已有农田数量百分比； */
        get: function () {
            return this.data.timesLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorEvent.prototype, "lvUpTimes", {
        /** 出现概率 */
        get: function () {
            return this.data.lvUpTimes;
        },
        enumerable: false,
        configurable: true
    });
    TablemanorEvent.TableName = "manorEvent";
    return TablemanorEvent;
}());
exports.TablemanorEvent = TablemanorEvent;
