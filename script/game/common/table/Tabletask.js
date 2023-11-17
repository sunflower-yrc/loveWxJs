"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabletask = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tabletask = /** @class */ (function () {
    function Tabletask() {
        /** 编号【KEY】 */
        this.id = 0;
        /** 双主键【KEY】 */
        this.id1 = 0;
    }
    Tabletask.prototype.init = function (id, id1) {
        var table = JsonUtil_1.JsonUtil.get(Tabletask.TableName);
        this.data = table[id][id1];
        this.id = id;
        this.id1 = id1;
    };
    Object.defineProperty(Tabletask.prototype, "taskType", {
        /** 任务类型 */
        get: function () {
            return this.data.taskType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabletask.prototype, "value", {
        /** 参数1 */
        get: function () {
            return this.data.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabletask.prototype, "value1", {
        /** 参数2 */
        get: function () {
            return this.data.value1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabletask.prototype, "taskDescription", {
        /** 任务描述 */
        get: function () {
            return this.data.taskDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabletask.prototype, "item", {
        /** 任务奖励 */
        get: function () {
            return this.data.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabletask.prototype, "jump", {
        /** 跳转配置 */
        get: function () {
            return this.data.jump;
        },
        enumerable: false,
        configurable: true
    });
    Tabletask.TableName = "task";
    return Tabletask;
}());
exports.Tabletask = Tabletask;
