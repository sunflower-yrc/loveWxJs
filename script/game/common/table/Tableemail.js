"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableemail = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableemail = /** @class */ (function () {
    function Tableemail() {
        /** 【KEY】 */
        this.id = 0;
    }
    Tableemail.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tableemail.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tableemail.prototype, "title", {
        /** 标题多语言 */
        get: function () {
            return this.data.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableemail.prototype, "desc", {
        /** 描述多语言 */
        get: function () {
            return this.data.desc;
        },
        enumerable: false,
        configurable: true
    });
    Tableemail.TableName = "email";
    return Tableemail;
}());
exports.Tableemail = Tableemail;
