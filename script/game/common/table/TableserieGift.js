"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableserieGift = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TableserieGift = /** @class */ (function () {
    function TableserieGift() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TableserieGift.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TableserieGift.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TableserieGift.prototype, "reward", {
        /** 礼包奖励内容 */
        get: function () {
            return this.data.reward;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableserieGift.prototype, "giftType", {
        /** 礼包类型 */
        get: function () {
            return this.data.giftType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableserieGift.prototype, "price", {
        /** 价格 */
        get: function () {
            return this.data.price;
        },
        enumerable: false,
        configurable: true
    });
    TableserieGift.TableName = "serieGift";
    return TableserieGift;
}());
exports.TableserieGift = TableserieGift;
