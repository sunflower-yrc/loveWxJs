"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablehouseRate = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablehouseRate = /** @class */ (function () {
    function TablehouseRate() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TablehouseRate.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TablehouseRate.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TablehouseRate.prototype, "rateName", {
        /** 评级名称 */
        get: function () {
            return this.data.rateName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablehouseRate.prototype, "rateScore", {
        /** 评分要求 */
        get: function () {
            return this.data.rateScore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablehouseRate.prototype, "rateValue", {
        /** 进度数量|任务id-任务id
    心愿描述与任务id相同 */
        get: function () {
            return this.data.rateValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablehouseRate.prototype, "rateReward", {
        /** 升级奖励 */
        get: function () {
            return this.data.rateReward;
        },
        enumerable: false,
        configurable: true
    });
    TablehouseRate.TableName = "houseRate";
    return TablehouseRate;
}());
exports.TablehouseRate = TablehouseRate;
