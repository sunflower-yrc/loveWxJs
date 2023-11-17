"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablecollect = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablecollect = /** @class */ (function () {
    function Tablecollect() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablecollect.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablecollect.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablecollect.prototype, "suitNumber", {
        /** 要求糖果数量 */
        get: function () {
            return this.data.suitNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecollect.prototype, "suitMark", {
        /** 达成奖励 */
        get: function () {
            return this.data.suitMark;
        },
        enumerable: false,
        configurable: true
    });
    Tablecollect.TableName = "collect";
    return Tablecollect;
}());
exports.Tablecollect = Tablecollect;
