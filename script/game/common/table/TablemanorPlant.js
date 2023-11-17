"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablemanorPlant = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablemanorPlant = /** @class */ (function () {
    function TablemanorPlant() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TablemanorPlant.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TablemanorPlant.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TablemanorPlant.prototype, "plantType", {
        /** 种子类型
    1.农作物；
    2.花卉 */
        get: function () {
            return this.data.plantType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorPlant.prototype, "rank", {
        /** 种子品质 */
        get: function () {
            return this.data.rank;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorPlant.prototype, "name", {
        /** 种子名称 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorPlant.prototype, "plantPrice", {
        /** 种子售价 */
        get: function () {
            return this.data.plantPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorPlant.prototype, "maturePrice", {
        /** 成熟售价 */
        get: function () {
            return this.data.maturePrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorPlant.prototype, "openLimit", {
        /** 解锁需庄园等级 */
        get: function () {
            return this.data.openLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorPlant.prototype, "ifBuy", {
        /** 是否可购买 */
        get: function () {
            return this.data.ifBuy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorPlant.prototype, "matureTimes", {
        /** 成熟次数 */
        get: function () {
            return this.data.matureTimes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorPlant.prototype, "maturetionTime", {
        /** 成熟时间 */
        get: function () {
            return this.data.maturetionTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorPlant.prototype, "speedConsume", {
        /** 浇水消耗精力 */
        get: function () {
            return this.data.speedConsume;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorPlant.prototype, "speedValue", {
        /** 浇水加速比例 */
        get: function () {
            return this.data.speedValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorPlant.prototype, "plantShow", {
        /** 种植外观改变
    百分比-百分比-百分比 */
        get: function () {
            return this.data.plantShow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorPlant.prototype, "eventConsume", {
        /** 事件消耗精力 */
        get: function () {
            return this.data.eventConsume;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorPlant.prototype, "openDesc", {
        /** 解锁描述 */
        get: function () {
            return this.data.openDesc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorPlant.prototype, "openJump", {
        /** 解锁跳转 */
        get: function () {
            return this.data.openJump;
        },
        enumerable: false,
        configurable: true
    });
    TablemanorPlant.TableName = "manorPlant";
    return TablemanorPlant;
}());
exports.TablemanorPlant = TablemanorPlant;
