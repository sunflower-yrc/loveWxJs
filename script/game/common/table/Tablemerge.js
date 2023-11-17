"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablemerge = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablemerge = /** @class */ (function () {
    function Tablemerge() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablemerge.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablemerge.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablemerge.prototype, "uniqueTiles", {
        /** 随机元素种类 */
        get: function () {
            return this.data.uniqueTiles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablemerge.prototype, "jokersTriplesMaxCountKey", {
        /** 待定 */
        get: function () {
            return this.data.jokersTriplesMaxCountKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablemerge.prototype, "jokersTriplesMinCountKey", {
        /** 待定 */
        get: function () {
            return this.data.jokersTriplesMinCountKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablemerge.prototype, "pointValue", {
        /** 关卡配置 */
        get: function () {
            return this.data.pointValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablemerge.prototype, "maskLen", {
        /** 关卡配置 */
        get: function () {
            return this.data.maskLen;
        },
        enumerable: false,
        configurable: true
    });
    Tablemerge.TableName = "merge";
    return Tablemerge;
}());
exports.Tablemerge = Tablemerge;
