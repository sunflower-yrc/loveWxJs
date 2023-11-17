"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablefurniture1 = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablefurniture1 = /** @class */ (function () {
    function Tablefurniture1() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablefurniture1.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablefurniture1.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablefurniture1.prototype, "name", {
        /** 名称 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "ps", {
        /** 备注 */
        get: function () {
            return this.data.ps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "desc", {
        /** 描述 */
        get: function () {
            return this.data.desc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "valueType", {
        /** 家具类型 */
        get: function () {
            return this.data.valueType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "furnitureType", {
        /** 筛选类型 */
        get: function () {
            return this.data.furnitureType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "grade", {
        /** 家具品质
    1.杏色；
    2.绿色；
    3.蓝色；
    4.黄色; */
        get: function () {
            return this.data.grade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "limits", {
        /** 家具
    解锁条件 */
        get: function () {
            return this.data.limits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "jackpot", {
        /** 是否
    出现在开箱 */
        get: function () {
            return this.data.jackpot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "furnitureWeight", {
        /** 家具权重 */
        get: function () {
            return this.data.furnitureWeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "exp", {
        /** 经验值 */
        get: function () {
            return this.data.exp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "pixel", {
        /** 规格
    X轴-Y轴
    X轴=最大的数字
    Y轴=最小的数字 */
        get: function () {
            return this.data.pixel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "interaction", {
        /** 家具是否可互动
    0为不可互动
    1为单人互动
    2为双人互动 */
        get: function () {
            return this.data.interaction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "furnitureMark", {
        /** 评分 */
        get: function () {
            return this.data.furnitureMark;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "furnitureSuit", {
        /** 家具所属套装
    套装ID
    0为非套装 */
        get: function () {
            return this.data.furnitureSuit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "collect", {
        /** 图鉴糖果奖励 */
        get: function () {
            return this.data.collect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "metopeHigh", {
        /** 上墙高度
    0~9
    仅用于6 7 8 9类型家具 */
        get: function () {
            return this.data.metopeHigh;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "opposite", {
        /** 是否有反面
    0正面
    1正反面 */
        get: function () {
            return this.data.opposite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "interacationPos", {
        /** 互动点位 */
        get: function () {
            return this.data.interacationPos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablefurniture1.prototype, "animationName", {
        /** 动作名称
      0：StandIdle
      1：idle hot
      2: idle laugh
      3: idle phone
      4: sit idle
      5: sit sing
      6: sit tired
      7: sleep idle
      8: walk
    9：sit_cola
    10：sit_sweet
    11:active
    12:disco */
        get: function () {
            return this.data.animationName;
        },
        enumerable: false,
        configurable: true
    });
    Tablefurniture1.TableName = "furniture1";
    return Tablefurniture1;
}());
exports.Tablefurniture1 = Tablefurniture1;
