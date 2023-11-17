"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablecharts = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablecharts = /** @class */ (function () {
    function Tablecharts() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablecharts.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablecharts.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablecharts.prototype, "format", {
        /** 排行榜名称 */
        get: function () {
            return this.data.format;
        },
        enumerable: false,
        configurable: true
    });
    Tablecharts.TableName = "charts";
    return Tablecharts;
}());
exports.Tablecharts = Tablecharts;
