"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablehire = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablehire = /** @class */ (function () {
    function Tablehire() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablehire.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablehire.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablehire.prototype, "limitId", {
        /** 解锁要求 */
        get: function () {
            return this.data.limitId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablehire.prototype, "hireNumber", {
        /** 出租数量 */
        get: function () {
            return this.data.hireNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablehire.prototype, "hireItem", {
        /** 出租要求
    出租类型权重，出租类型-类型参数|出租类型权重，出租类型-类型参数 */
        get: function () {
            return this.data.hireItem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablehire.prototype, "hireTimes", {
        /** 出租时间（秒） */
        get: function () {
            return this.data.hireTimes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablehire.prototype, "hireDaily", {
        /** 每日可完成次数 */
        get: function () {
            return this.data.hireDaily;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablehire.prototype, "hireProfit", {
        /** 加成倍率 */
        get: function () {
            return this.data.hireProfit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablehire.prototype, "hireAd", {
        /** 广告加速比例 */
        get: function () {
            return this.data.hireAd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablehire.prototype, "hireNpc", {
        /** 随机npc */
        get: function () {
            return this.data.hireNpc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablehire.prototype, "hireDesc", {
        /** 随机语录 */
        get: function () {
            return this.data.hireDesc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablehire.prototype, "hireReward", {
        /** 满足所有条件奖励 */
        get: function () {
            return this.data.hireReward;
        },
        enumerable: false,
        configurable: true
    });
    Tablehire.TableName = "hire";
    return Tablehire;
}());
exports.Tablehire = Tablehire;
