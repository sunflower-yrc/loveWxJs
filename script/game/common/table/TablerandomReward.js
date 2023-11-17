"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablerandomReward = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablerandomReward = /** @class */ (function () {
    function TablerandomReward() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TablerandomReward.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TablerandomReward.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TablerandomReward.prototype, "reward", {
        /** 随机奖励池配置 */
        get: function () {
            return this.data.reward;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablerandomReward.prototype, "prob", {
        /** 随机权重配置 */
        get: function () {
            return this.data.prob;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablerandomReward.prototype, "icon", {
        /** 随机奖励图标 */
        get: function () {
            return this.data.icon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablerandomReward.prototype, "name", {
        /** 随机奖励名字 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    TablerandomReward.TableName = "randomReward";
    return TablerandomReward;
}());
exports.TablerandomReward = TablerandomReward;
