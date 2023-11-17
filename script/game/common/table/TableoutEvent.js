"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableoutEvent = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TableoutEvent = /** @class */ (function () {
    function TableoutEvent() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TableoutEvent.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TableoutEvent.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TableoutEvent.prototype, "boxId", {
        /** 开箱id */
        get: function () {
            return this.data.boxId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableoutEvent.prototype, "senceWall", {
        /** 匹配墙纸 */
        get: function () {
            return this.data.senceWall;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableoutEvent.prototype, "senceFloor", {
        /** 匹配地板 */
        get: function () {
            return this.data.senceFloor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableoutEvent.prototype, "goldValue", {
        /** 每x评分换取1金币 */
        get: function () {
            return this.data.goldValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableoutEvent.prototype, "giftValue", {
        /** 评分换取的奖励
    评分要求-奖励类型-奖励参数1-奖励参数2 */
        get: function () {
            return this.data.giftValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableoutEvent.prototype, "sceneNpc", {
        /** 场景存在角色 */
        get: function () {
            return this.data.sceneNpc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableoutEvent.prototype, "npcTalk", {
        /** 角色触发对话
    评分要求-角色id-对话id-互动家具|评分要求-角色id-对话id-互动家具 */
        get: function () {
            return this.data.npcTalk;
        },
        enumerable: false,
        configurable: true
    });
    TableoutEvent.TableName = "outEvent";
    return TableoutEvent;
}());
exports.TableoutEvent = TableoutEvent;
