"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableglobal = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableglobal = /** @class */ (function () {
    function Tableglobal() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tableglobal.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tableglobal.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tableglobal.prototype, "format", {
        /** 格式 */
        get: function () {
            return this.data.format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableglobal.prototype, "value", {
        /** 值 */
        get: function () {
            return this.data.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableglobal.prototype, "desc", {
        /** 备注 */
        get: function () {
            return this.data.desc;
        },
        enumerable: false,
        configurable: true
    });
    Tableglobal.TableName = "global";
    return Tableglobal;
}());
exports.Tableglobal = Tableglobal;
