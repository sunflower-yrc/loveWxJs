"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablelanguage = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablelanguage = /** @class */ (function () {
    function Tablelanguage() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablelanguage.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablelanguage.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablelanguage.prototype, "cn", {
        /** 中文 */
        get: function () {
            return this.data.cn;
        },
        enumerable: false,
        configurable: true
    });
    Tablelanguage.TableName = "language";
    return Tablelanguage;
}());
exports.Tablelanguage = Tablelanguage;
