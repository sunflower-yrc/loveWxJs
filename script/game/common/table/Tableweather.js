"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableweather = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableweather = /** @class */ (function () {
    function Tableweather() {
        /** 双主键编号【KEY】 */
        this.id = 0;
    }
    Tableweather.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tableweather.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tableweather.prototype, "icon", {
        /** 天气icon */
        get: function () {
            return this.data.icon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableweather.prototype, "temperature", {
        /** 温度 */
        get: function () {
            return this.data.temperature;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableweather.prototype, "weight", {
        /** 权重 */
        get: function () {
            return this.data.weight;
        },
        enumerable: false,
        configurable: true
    });
    Tableweather.TableName = "weather";
    return Tableweather;
}());
exports.Tableweather = Tableweather;
