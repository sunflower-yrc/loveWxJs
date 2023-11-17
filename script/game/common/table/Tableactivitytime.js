"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableactivitytime = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableactivitytime = /** @class */ (function () {
    function Tableactivitytime() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tableactivitytime.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tableactivitytime.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tableactivitytime.prototype, "startTime", {
        /** 开启时间 */
        get: function () {
            return this.data.startTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableactivitytime.prototype, "furnitureId", {
        /** 随机互动的家具id库 */
        get: function () {
            return this.data.furnitureId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableactivitytime.prototype, "furnitureWeight", {
        /** 家具随机权重 */
        get: function () {
            return this.data.furnitureWeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableactivitytime.prototype, "talk", {
        /** 对话id */
        get: function () {
            return this.data.talk;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableactivitytime.prototype, "exchange", {
        /** 动作切换时间（s） */
        get: function () {
            return this.data.exchange;
        },
        enumerable: false,
        configurable: true
    });
    Tableactivitytime.TableName = "activitytime";
    return Tableactivitytime;
}());
exports.Tableactivitytime = Tableactivitytime;
