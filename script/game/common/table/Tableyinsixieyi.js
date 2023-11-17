"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableyinsixieyi = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableyinsixieyi = /** @class */ (function () {
    function Tableyinsixieyi() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tableyinsixieyi.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tableyinsixieyi.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tableyinsixieyi.prototype, "content", {
        /** 文字内容 */
        get: function () {
            return this.data.content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableyinsixieyi.prototype, "align", {
        /** 靠左-1
    0居中
    1靠右 */
        get: function () {
            return this.data.align;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableyinsixieyi.prototype, "bold", {
        /** 是否加粗 */
        get: function () {
            return this.data.bold;
        },
        enumerable: false,
        configurable: true
    });
    Tableyinsixieyi.TableName = "yinsixieyi";
    return Tableyinsixieyi;
}());
exports.Tableyinsixieyi = Tableyinsixieyi;
