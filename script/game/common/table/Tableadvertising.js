"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableadvertising = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableadvertising = /** @class */ (function () {
    function Tableadvertising() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tableadvertising.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tableadvertising.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tableadvertising.prototype, "advType", {
        /** 广告活动类型 */
        get: function () {
            return this.data.advType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableadvertising.prototype, "number", {
        /** 观看广告次数 */
        get: function () {
            return this.data.number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableadvertising.prototype, "reward", {
        /** 奖励 */
        get: function () {
            return this.data.reward;
        },
        enumerable: false,
        configurable: true
    });
    Tableadvertising.TableName = "advertising";
    return Tableadvertising;
}());
exports.Tableadvertising = Tableadvertising;
