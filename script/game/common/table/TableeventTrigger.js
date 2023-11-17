"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableeventTrigger = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TableeventTrigger = /** @class */ (function () {
    function TableeventTrigger() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TableeventTrigger.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TableeventTrigger.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TableeventTrigger.prototype, "triggerType", {
        /** 触发类型
    1.新手引导步骤结束
    2.主线任务完成
    3.获得指定家具后回到主界面
    4.获得指定时装后回到主界面
    5.玩家升到x级后触发
    6.每日在线时间触发
    7.服务器每日时间触发
    8.每日在线循环触发 */
        get: function () {
            return this.data.triggerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableeventTrigger.prototype, "typeValue", {
        /** 类型参数
    1.步骤id
    2.主线任务id
    3.家具id
    4.时装id
    5.玩家等级
    6.在线秒数
    7.指定时间
    8.在线秒数 */
        get: function () {
            return this.data.typeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableeventTrigger.prototype, "triggerLimit", {
        /** 触发次数限制类型
    终身限制x次填写为1-x
    每日限制x次填写为2-x */
        get: function () {
            return this.data.triggerLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableeventTrigger.prototype, "eventId", {
        /** 触发事件id */
        get: function () {
            return this.data.eventId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableeventTrigger.prototype, "eventIWeight", {
        /** 事件权重 */
        get: function () {
            return this.data.eventIWeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableeventTrigger.prototype, "eventLimits", {
        /** 触发开启限制 */
        get: function () {
            return this.data.eventLimits;
        },
        enumerable: false,
        configurable: true
    });
    TableeventTrigger.TableName = "eventTrigger";
    return TableeventTrigger;
}());
exports.TableeventTrigger = TableeventTrigger;
