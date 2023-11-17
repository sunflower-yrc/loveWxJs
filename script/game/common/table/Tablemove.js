"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablemove = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablemove = /** @class */ (function () {
    function Tablemove() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablemove.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablemove.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablemove.prototype, "amName", {
        /** 角色动作剪辑名 */
        get: function () {
            return this.data.amName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablemove.prototype, "name", {
        /** 多语言id */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablemove.prototype, "firstOpen", {
        /** 是否初始解锁
    0否，1是初始解锁 */
        get: function () {
            return this.data.firstOpen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablemove.prototype, "chartsShow", {
        /** 是否可展示在排行榜
    0不展示，1展示 */
        get: function () {
            return this.data.chartsShow;
        },
        enumerable: false,
        configurable: true
    });
    Tablemove.TableName = "move";
    return Tablemove;
}());
exports.Tablemove = Tablemove;
