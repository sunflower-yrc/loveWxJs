"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableselectReward = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TableselectReward = /** @class */ (function () {
    function TableselectReward() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TableselectReward.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TableselectReward.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TableselectReward.prototype, "reward", {
        /** X选一奖励池配置 */
        get: function () {
            return this.data.reward;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableselectReward.prototype, "icon", {
        /** 奖励图标名字 */
        get: function () {
            return this.data.icon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableselectReward.prototype, "name", {
        /** 奖励文本名字 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    TableselectReward.TableName = "selectReward";
    return TableselectReward;
}());
exports.TableselectReward = TableselectReward;
