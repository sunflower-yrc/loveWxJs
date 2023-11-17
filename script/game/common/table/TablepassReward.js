"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablepassReward = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablepassReward = /** @class */ (function () {
    function TablepassReward() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TablepassReward.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TablepassReward.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TablepassReward.prototype, "passId", {
        /** 通行证id */
        get: function () {
            return this.data.passId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepassReward.prototype, "pointCondition", {
        /** 经验值 */
        get: function () {
            return this.data.pointCondition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepassReward.prototype, "levelReward1", {
        /** 免费等级奖励 */
        get: function () {
            return this.data.levelReward1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepassReward.prototype, "levelReward2", {
        /** 付费等级奖励 */
        get: function () {
            return this.data.levelReward2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepassReward.prototype, "showLevel", {
        /** 等级预览奖励 */
        get: function () {
            return this.data.showLevel;
        },
        enumerable: false,
        configurable: true
    });
    TablepassReward.TableName = "passReward";
    return TablepassReward;
}());
exports.TablepassReward = TablepassReward;
