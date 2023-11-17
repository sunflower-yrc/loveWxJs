"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableboxReward = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TableboxReward = /** @class */ (function () {
    function TableboxReward() {
        /** 双主键编号【KEY】 */
        this.id = 0;
    }
    TableboxReward.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TableboxReward.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TableboxReward.prototype, "reward", {
        /** 额外掉落奖励 */
        get: function () {
            return this.data.reward;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableboxReward.prototype, "extraProb", {
        /** 额外掉落概率 */
        get: function () {
            return this.data.extraProb;
        },
        enumerable: false,
        configurable: true
    });
    TableboxReward.TableName = "boxReward";
    return TableboxReward;
}());
exports.TableboxReward = TableboxReward;
