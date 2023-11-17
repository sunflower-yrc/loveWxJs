"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablesuit = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablesuit = /** @class */ (function () {
    function Tablesuit() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablesuit.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablesuit.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablesuit.prototype, "suitNumber", {
        /** 组成套装
    时装id；
    家具id； */
        get: function () {
            return this.data.suitNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablesuit.prototype, "suitShow", {
        /** 套装展示id */
        get: function () {
            return this.data.suitShow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablesuit.prototype, "suitMark", {
        /** 套装评分加成 */
        get: function () {
            return this.data.suitMark;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablesuit.prototype, "name", {
        /** 套装名称 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablesuit.prototype, "suitWeight", {
        /** 套装掉落权重 */
        get: function () {
            return this.data.suitWeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablesuit.prototype, "suitResShow", {
        /** 套装展示id（家具套装使用） */
        get: function () {
            return this.data.suitResShow;
        },
        enumerable: false,
        configurable: true
    });
    Tablesuit.TableName = "suit";
    return Tablesuit;
}());
exports.Tablesuit = Tablesuit;
