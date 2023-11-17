"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablelimits = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablelimits = /** @class */ (function () {
    function Tablelimits() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablelimits.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablelimits.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablelimits.prototype, "limitType", {
        /** 限制类型 */
        get: function () {
            return this.data.limitType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablelimits.prototype, "typeValue", {
        /** 类型参数 */
        get: function () {
            return this.data.typeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablelimits.prototype, "taskDesc", {
        /** 限制描述 */
        get: function () {
            return this.data.taskDesc;
        },
        enumerable: false,
        configurable: true
    });
    Tablelimits.TableName = "limits";
    return Tablelimits;
}());
exports.Tablelimits = Tablelimits;
