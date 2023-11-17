"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablecost = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablecost = /** @class */ (function () {
    function Tablecost() {
        /** 主键编号【KEY】 */
        this.id = 0;
    }
    Tablecost.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablecost.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablecost.prototype, "gold", {
        /** 金币价格 */
        get: function () {
            return this.data.gold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecost.prototype, "diamond", {
        /** 钻石价格 */
        get: function () {
            return this.data.diamond;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecost.prototype, "recoveryGold", {
        /** 回收金币 */
        get: function () {
            return this.data.recoveryGold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecost.prototype, "hireGold", {
        /** 出租金币 */
        get: function () {
            return this.data.hireGold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecost.prototype, "petGold", {
        /** 纪念币价格 */
        get: function () {
            return this.data.petGold;
        },
        enumerable: false,
        configurable: true
    });
    Tablecost.TableName = "cost";
    return Tablecost;
}());
exports.Tablecost = Tablecost;
