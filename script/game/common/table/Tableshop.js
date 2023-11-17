"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableshop = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableshop = /** @class */ (function () {
    function Tableshop() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tableshop.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tableshop.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tableshop.prototype, "shopName", {
        /** 商城名称 */
        get: function () {
            return this.data.shopName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableshop.prototype, "shopType", {
        /** 商城类型
    1.金币商城-不带预览
    2.金币商城-带预览和页签
    3.抽奖商城
    4.内购商城
    5.纪念币商城
    6.通行证商城
    7.庄园商店（道具） */
        get: function () {
            return this.data.shopType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableshop.prototype, "typeValue", {
        /** 类型参数
    1.配置商品总数和商品id，商品id链接商品表
    2.配置页签多语言id，商品总数，商品id-商品id
    3.商品id|商品id
    5.配置页签1的8个1商品id|配置页签2的套装，最后一个为默认的当月套装 */
        get: function () {
            return this.data.typeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableshop.prototype, "determineAdv", {
        /** 每日可用广告刷新次数|刷新所需钻石数量
    配0则不可刷新 */
        get: function () {
            return this.data.determineAdv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableshop.prototype, "shopRefresh", {
        /** 每日刷新时间 */
        get: function () {
            return this.data.shopRefresh;
        },
        enumerable: false,
        configurable: true
    });
    Tableshop.TableName = "shop";
    return Tableshop;
}());
exports.Tableshop = Tableshop;
