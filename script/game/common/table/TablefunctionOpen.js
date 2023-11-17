"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablefunctionOpen = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablefunctionOpen = /** @class */ (function () {
    function TablefunctionOpen() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TablefunctionOpen.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TablefunctionOpen.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TablefunctionOpen.prototype, "limitId", {
        /** 限制id */
        get: function () {
            return this.data.limitId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablefunctionOpen.prototype, "hideType", {
        /** 未开启时入口处理
    1.隐藏；2.点击提示 */
        get: function () {
            return this.data.hideType;
        },
        enumerable: false,
        configurable: true
    });
    TablefunctionOpen.TableName = "functionOpen";
    return TablefunctionOpen;
}());
exports.TablefunctionOpen = TablefunctionOpen;
