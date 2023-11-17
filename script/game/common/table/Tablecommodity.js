"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablecommodity = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablecommodity = /** @class */ (function () {
    function Tablecommodity() {
        /** 主键编号【KEY】 */
        this.id = 0;
    }
    Tablecommodity.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablecommodity.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablecommodity.prototype, "type", {
        /** 商品类型
    1.随机单个已解锁家具售卖
    2.随机单个已解锁时装售卖
    3.指定一个家具售卖
    4.指定一个时装售卖
    5.指定一组套装售卖
    6.已解锁家具中未获得的随机一个
    7.已解锁时装中未获得的随机一个
    8.钻石商城广告获得钻石
    9.钻石商城钻石购买金币
    10.指定宠物皮肤随机；
    11.指定宠物动作随机；
    12.指定价值物
     */
        get: function () {
            return this.data.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecommodity.prototype, "typeValue", {
        /** 类型参数
    1.家具类型-随机权重|家具类型-随机权重
    2.时装类型-随机权重|时装类型-随机权重
    3.家具id
    4.时装id
    5.生效时间戳-结束时间戳|套装id
    6.家具类型-随机权重|家具类型-随机权重
    7.时装类型-随机权重|时装类型-随机权重
    8.获得钻石数量
    9.金币数量-售卖价格参数
    10.宠物id,皮肤id-权重|皮肤id-权重
    11.宠物id,动作id-权重|动作id-权重
    12.价值物枚举|价格数目 */
        get: function () {
            return this.data.typeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecommodity.prototype, "price", {
        /** 价格类型与概率 */
        get: function () {
            return this.data.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecommodity.prototype, "discount", {
        /** 打折概率
    消耗价值物类型1打折概率-打折区间下限-打折区间上限|消耗价值物类型2打折概率-打折区间下限-打折区间上限
    配置概率对应价格类型字段 */
        get: function () {
            return this.data.discount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecommodity.prototype, "quota", {
        /** 限购类型
    不限购；
    限购{0}次; */
        get: function () {
            return this.data.quota;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecommodity.prototype, "icon", {
        /** 商品图标 */
        get: function () {
            return this.data.icon;
        },
        enumerable: false,
        configurable: true
    });
    Tablecommodity.TableName = "commodity";
    return Tablecommodity;
}());
exports.Tablecommodity = Tablecommodity;
