"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablerewardSource = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablerewardSource = /** @class */ (function () {
    function TablerewardSource() {
        /** 编号【KEY】 */
        this.id = 0;
        /** 编号【KEY】 */
        this.id1 = 0;
    }
    TablerewardSource.prototype.init = function (id, id1) {
        var table = JsonUtil_1.JsonUtil.get(TablerewardSource.TableName);
        this.data = table[id][id1];
        this.id = id;
        this.id1 = id1;
    };
    Object.defineProperty(TablerewardSource.prototype, "name", {
        /** 跳转名字 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablerewardSource.prototype, "desc", {
        /** 跳转描述 */
        get: function () {
            return this.data.desc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablerewardSource.prototype, "jumpId", {
        /** 跳转id */
        get: function () {
            return this.data.jumpId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablerewardSource.prototype, "isRecommend", {
        /** 是否推荐 */
        get: function () {
            return this.data.isRecommend;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablerewardSource.prototype, "sourceBg", {
        /** 跳转背景 */
        get: function () {
            return this.data.sourceBg;
        },
        enumerable: false,
        configurable: true
    });
    TablerewardSource.TableName = "rewardSource";
    return TablerewardSource;
}());
exports.TablerewardSource = TablerewardSource;
