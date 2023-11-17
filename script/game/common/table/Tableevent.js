"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableevent = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableevent = /** @class */ (function () {
    function Tableevent() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tableevent.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tableevent.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tableevent.prototype, "eventType", {
        /** 事件类型
    1.对话；
    2.npc回收；
    3.宠物领养；
    4.外出布景；
    5.时装商人；
    6.家具商人； */
        get: function () {
            return this.data.eventType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableevent.prototype, "typeValue", {
        /** 1.链接对话id；
    2.1家具；2时装；
    3.0；
    4.链接对话id-外出布景id；
    5.3个随机商品类型；
    6.3个随机商品类型；
     */
        get: function () {
            return this.data.typeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableevent.prototype, "eventNpc", {
        /** 事件触发npc */
        get: function () {
            return this.data.eventNpc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableevent.prototype, "eventTime", {
        /** 持续时间（秒） */
        get: function () {
            return this.data.eventTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableevent.prototype, "jumpUi", {
        /** 跳转的界面 */
        get: function () {
            return this.data.jumpUi;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableevent.prototype, "eventName", {
        /** 事件名称 */
        get: function () {
            return this.data.eventName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableevent.prototype, "eventDesc", {
        /** 事件描述 */
        get: function () {
            return this.data.eventDesc;
        },
        enumerable: false,
        configurable: true
    });
    Tableevent.TableName = "event";
    return Tableevent;
}());
exports.Tableevent = Tableevent;
