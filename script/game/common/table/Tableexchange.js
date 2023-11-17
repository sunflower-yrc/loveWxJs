"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableexchange = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableexchange = /** @class */ (function () {
    function Tableexchange() {
        /** 双主键编号【KEY】 */
        this.id = 0;
    }
    Tableexchange.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tableexchange.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tableexchange.prototype, "expend", {
        /** 对应消耗的物品 */
        get: function () {
            return this.data.expend;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableexchange.prototype, "reward", {
        /** 获得的物品 */
        get: function () {
            return this.data.reward;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableexchange.prototype, "times", {
        /** 可兑换次数 */
        get: function () {
            return this.data.times;
        },
        enumerable: false,
        configurable: true
    });
    Tableexchange.TableName = "exchange";
    return Tableexchange;
}());
exports.Tableexchange = Tableexchange;
