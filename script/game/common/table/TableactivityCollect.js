"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableactivityCollect = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TableactivityCollect = /** @class */ (function () {
    function TableactivityCollect() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TableactivityCollect.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TableactivityCollect.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TableactivityCollect.prototype, "requireType", {
        /** 收集类型 */
        get: function () {
            return this.data.requireType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableactivityCollect.prototype, "enumerationType", {
        /** 枚举类型 */
        get: function () {
            return this.data.enumerationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableactivityCollect.prototype, "requireItem", {
        /** 要求收集物集合 */
        get: function () {
            return this.data.requireItem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableactivityCollect.prototype, "requireNum", {
        /** 要求收集数量 */
        get: function () {
            return this.data.requireNum;
        },
        enumerable: false,
        configurable: true
    });
    TableactivityCollect.TableName = "activityCollect";
    return TableactivityCollect;
}());
exports.TableactivityCollect = TableactivityCollect;
