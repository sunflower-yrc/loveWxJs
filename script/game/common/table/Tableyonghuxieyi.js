"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableyonghuxieyi = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableyonghuxieyi = /** @class */ (function () {
    function Tableyonghuxieyi() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tableyonghuxieyi.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tableyonghuxieyi.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tableyonghuxieyi.prototype, "content", {
        /** 文字内容 */
        get: function () {
            return this.data.content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableyonghuxieyi.prototype, "align", {
        /** 靠左-1
    0居中
    1靠右 */
        get: function () {
            return this.data.align;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableyonghuxieyi.prototype, "bold", {
        /** 是否加粗 */
        get: function () {
            return this.data.bold;
        },
        enumerable: false,
        configurable: true
    });
    Tableyonghuxieyi.TableName = "yonghuxieyi";
    return Tableyonghuxieyi;
}());
exports.Tableyonghuxieyi = Tableyonghuxieyi;
