"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablebox = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablebox = /** @class */ (function () {
    function Tablebox() {
        /** 编号【KEY】 */
        this.id = 0;
        /** 双主键【KEY】 */
        this.SecondaryKey = 0;
    }
    Tablebox.prototype.init = function (id, SecondaryKey) {
        var table = JsonUtil_1.JsonUtil.get(Tablebox.TableName);
        this.data = table[id][SecondaryKey];
        this.id = id;
        this.SecondaryKey = SecondaryKey;
    };
    Object.defineProperty(Tablebox.prototype, "value", {
        /** 参数 */
        get: function () {
            return this.data.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablebox.prototype, "dropType", {
        /** 掉落判断时装或家具
    1.随机类型家具，可重复（需已解锁）
    2.随机类型时装，可重复（需已解锁）
    3.随机类型家具，查仓库不重复（需已解锁）
    4.随机类型时装，查仓库不重复（需已解锁）
    5.指定家具
    6.指定装扮 */
        get: function () {
            return this.data.dropType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablebox.prototype, "typeWeight", {
        /** 权重 */
        get: function () {
            return this.data.typeWeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablebox.prototype, "drop", {
        /** 掉落类型 */
        get: function () {
            return this.data.drop;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablebox.prototype, "weight", {
        /** 类型权重 */
        get: function () {
            return this.data.weight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablebox.prototype, "CoolingTime", {
        /** 广告减少箱子的CD（秒） */
        get: function () {
            return this.data.CoolingTime;
        },
        enumerable: false,
        configurable: true
    });
    Tablebox.TableName = "box";
    return Tablebox;
}());
exports.Tablebox = Tablebox;
