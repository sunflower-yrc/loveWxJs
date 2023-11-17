"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablesign = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablesign = /** @class */ (function () {
    function Tablesign() {
        /** 双主键编号【KEY】 */
        this.id = 0;
    }
    Tablesign.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablesign.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablesign.prototype, "stage", {
        /** 阶段 */
        get: function () {
            return this.data.stage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablesign.prototype, "itme", {
        /** 签到奖励 */
        get: function () {
            return this.data.itme;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablesign.prototype, "limitId", {
        /** 限制开启 */
        get: function () {
            return this.data.limitId;
        },
        enumerable: false,
        configurable: true
    });
    Tablesign.TableName = "sign";
    return Tablesign;
}());
exports.Tablesign = Tablesign;
