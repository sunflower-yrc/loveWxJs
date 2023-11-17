"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablemanorLevel = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablemanorLevel = /** @class */ (function () {
    function TablemanorLevel() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TablemanorLevel.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TablemanorLevel.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TablemanorLevel.prototype, "name", {
        /** 庄园名称 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorLevel.prototype, "nextLimit", {
        /** 下级解锁所需获得的庄园币总额 */
        get: function () {
            return this.data.nextLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorLevel.prototype, "actionPowerMax", {
        /** 精力上限 */
        get: function () {
            return this.data.actionPowerMax;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorLevel.prototype, "upConsume", {
        /** 升级消耗 */
        get: function () {
            return this.data.upConsume;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorLevel.prototype, "lvUpTimes", {
        /** 升级时间 */
        get: function () {
            return this.data.lvUpTimes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorLevel.prototype, "speedValue1", {
        /** 加速减少时间百分比-cd时间（秒） */
        get: function () {
            return this.data.speedValue1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorLevel.prototype, "speedValue2", {
        /** 加速消耗钻石 */
        get: function () {
            return this.data.speedValue2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorLevel.prototype, "openFacilities", {
        /** 解锁设施 */
        get: function () {
            return this.data.openFacilities;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorLevel.prototype, "getMoney", {
        /** 获得庄园币 */
        get: function () {
            return this.data.getMoney;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorLevel.prototype, "getWater", {
        /** 获得水滴 */
        get: function () {
            return this.data.getWater;
        },
        enumerable: false,
        configurable: true
    });
    TablemanorLevel.TableName = "manorLevel";
    return TablemanorLevel;
}());
exports.TablemanorLevel = TablemanorLevel;
