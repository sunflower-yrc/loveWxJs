"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablenpc = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablenpc = /** @class */ (function () {
    function Tablenpc() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablenpc.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablenpc.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablenpc.prototype, "npcName", {
        /** npc名称 */
        get: function () {
            return this.data.npcName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablenpc.prototype, "npcDress", {
        /** npc服装 */
        get: function () {
            return this.data.npcDress;
        },
        enumerable: false,
        configurable: true
    });
    Tablenpc.TableName = "npc";
    return Tablenpc;
}());
exports.Tablenpc = Tablenpc;
