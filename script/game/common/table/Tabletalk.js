"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabletalk = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tabletalk = /** @class */ (function () {
    function Tabletalk() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tabletalk.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tabletalk.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tabletalk.prototype, "talkType", {
        /** 对话类型
    1.纯文本
    2.选项 */
        get: function () {
            return this.data.talkType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabletalk.prototype, "npcId", {
        /** 说话角色
    101，102默认为女主和男主
    其他id在npc表中查找数据 */
        get: function () {
            return this.data.npcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabletalk.prototype, "npcAnimation", {
        /** 角色动作 */
        get: function () {
            return this.data.npcAnimation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabletalk.prototype, "dressReplace", {
        /** 替换皮肤id
    震惊 1111|308|1211|907
    大笑 1112|1212
    委屈 1113|309|1213
    害羞 1114|1214
    呆滞 1115|310|1215 */
        get: function () {
            return this.data.dressReplace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabletalk.prototype, "languageId", {
        /** 对话内容 */
        get: function () {
            return this.data.languageId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabletalk.prototype, "limitId", {
        /** 选项卡限制id */
        get: function () {
            return this.data.limitId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabletalk.prototype, "nextId", {
        /** 下一句 */
        get: function () {
            return this.data.nextId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabletalk.prototype, "talkOver", {
        /** 是否结束 */
        get: function () {
            return this.data.talkOver;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabletalk.prototype, "overReward", {
        /** 结束奖励 */
        get: function () {
            return this.data.overReward;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabletalk.prototype, "jumpUi", {
        /** 跳转的界面 */
        get: function () {
            return this.data.jumpUi;
        },
        enumerable: false,
        configurable: true
    });
    Tabletalk.TableName = "talk";
    return Tabletalk;
}());
exports.Tabletalk = Tabletalk;
