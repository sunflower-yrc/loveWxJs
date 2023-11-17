"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablemonthlyPass = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablemonthlyPass = /** @class */ (function () {
    function TablemonthlyPass() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TablemonthlyPass.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TablemonthlyPass.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TablemonthlyPass.prototype, "dress", {
        /** 生效时间 */
        get: function () {
            return this.data.dress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemonthlyPass.prototype, "taskType", {
        /** 系列任务类型 */
        get: function () {
            return this.data.taskType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemonthlyPass.prototype, "showReward1", {
        /** 通行证家具套装 */
        get: function () {
            return this.data.showReward1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemonthlyPass.prototype, "showReward2", {
        /** 通行证时装套装 */
        get: function () {
            return this.data.showReward2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemonthlyPass.prototype, "showReward3", {
        /** 通行证宠物皮肤 */
        get: function () {
            return this.data.showReward3;
        },
        enumerable: false,
        configurable: true
    });
    TablemonthlyPass.TableName = "monthlyPass";
    return TablemonthlyPass;
}());
exports.TablemonthlyPass = TablemonthlyPass;
