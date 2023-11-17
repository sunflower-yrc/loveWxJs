"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablemanorFacilities = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablemanorFacilities = /** @class */ (function () {
    function TablemanorFacilities() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TablemanorFacilities.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TablemanorFacilities.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TablemanorFacilities.prototype, "type", {
        /** 设施类型
    1.农田；
    101.成熟加速；
    102.提高产量；
    103.稻草人；
    104.摇钱树； */
        get: function () {
            return this.data.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorFacilities.prototype, "typeValue", {
        /** 类型参数
    1.0
    101.影响范围x-影响范围y（以自身的长方形）|加速比例
    102.影响范围x-影响范围y（以自身的长方形）|提高比例
    103.影响范围x-影响范围y（以自身的长方形）|降低比例（小鸟事件）
    104.每x秒获得y庄园币累计可获得z */
        get: function () {
            return this.data.typeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorFacilities.prototype, "name", {
        /** 设施名称 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorFacilities.prototype, "desc", {
        /** 设施描述 */
        get: function () {
            return this.data.desc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorFacilities.prototype, "attDesc", {
        /** 属性描述 */
        get: function () {
            return this.data.attDesc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorFacilities.prototype, "manorLevel", {
        /** x级庄园解锁 */
        get: function () {
            return this.data.manorLevel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorFacilities.prototype, "openConsume", {
        /** 解锁消耗 */
        get: function () {
            return this.data.openConsume;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorFacilities.prototype, "maxLevel", {
        /** 最大等级 */
        get: function () {
            return this.data.maxLevel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorFacilities.prototype, "upConsume", {
        /** 升级消耗 */
        get: function () {
            return this.data.upConsume;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablemanorFacilities.prototype, "upAttValue", {
        /** 升级属性 */
        get: function () {
            return this.data.upAttValue;
        },
        enumerable: false,
        configurable: true
    });
    TablemanorFacilities.TableName = "manorFacilities";
    return TablemanorFacilities;
}());
exports.TablemanorFacilities = TablemanorFacilities;
