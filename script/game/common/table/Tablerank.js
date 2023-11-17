"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablerank = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablerank = /** @class */ (function () {
    function Tablerank() {
    }
    Tablerank.prototype.init = function () {
        var table = JsonUtil_1.JsonUtil.get(Tablerank.TableName);
        this.data = table;
    };
    Object.defineProperty(Tablerank.prototype, "rank", {
        /** 排行榜类型 */
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    Tablerank.TableName = "charts";
    return Tablerank;
}());
exports.Tablerank = Tablerank;
