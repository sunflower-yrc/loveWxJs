"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablemergeReward = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablemergeReward = /** @class */ (function () {
    function TablemergeReward() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TablemergeReward.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TablemergeReward.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TablemergeReward.prototype, "pointCondition", {
        /** 要求关卡 */
        get: function () {
            return this.data.pointCondition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemergeReward.prototype, "conditionReward", {
        /** 进度奖励 */
        get: function () {
            return this.data.conditionReward;
        },
        enumerable: false,
        configurable: true
    });
    TablemergeReward.TableName = "mergeReward";
    return TablemergeReward;
}());
exports.TablemergeReward = TablemergeReward;
