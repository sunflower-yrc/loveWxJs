"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablerole = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablerole = /** @class */ (function () {
    function Tablerole() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablerole.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablerole.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablerole.prototype, "name", {
        /** 备注 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablerole.prototype, "dress", {
        /** 初始穿戴装扮 */
        get: function () {
            return this.data.dress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablerole.prototype, "firstDress", {
        /** 初始携带装扮(男女加起来） */
        get: function () {
            return this.data.firstDress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablerole.prototype, "item", {
        /** 初始货币（只取一个） */
        get: function () {
            return this.data.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablerole.prototype, "furniture", {
        /** 初始家具（只取一个） */
        get: function () {
            return this.data.furniture;
        },
        enumerable: false,
        configurable: true
    });
    Tablerole.TableName = "role";
    return Tablerole;
}());
exports.Tablerole = Tablerole;
