"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablepetFoods = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablepetFoods = /** @class */ (function () {
    function TablepetFoods() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TablepetFoods.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TablepetFoods.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TablepetFoods.prototype, "foodName", {
        /** 食物名称 */
        get: function () {
            return this.data.foodName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetFoods.prototype, "foodRank", {
        /** 食物品质 */
        get: function () {
            return this.data.foodRank;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetFoods.prototype, "pet1", {
        /** 宠物1
    增加饱食度|增加心情值 */
        get: function () {
            return this.data.pet1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetFoods.prototype, "pet2", {
        /** 宠物2
    增加饱食度|增加心情值 */
        get: function () {
            return this.data.pet2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetFoods.prototype, "pet3", {
        /** 宠物3
    增加饱食度|增加心情值 */
        get: function () {
            return this.data.pet3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetFoods.prototype, "pet4", {
        /** 宠物4
    增加饱食度|增加心情值 */
        get: function () {
            return this.data.pet4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetFoods.prototype, "pet5", {
        /** 宠物5
    增加饱食度|增加心情值 */
        get: function () {
            return this.data.pet5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetFoods.prototype, "pet6", {
        /** 宠物6
    增加饱食度|增加心情值 */
        get: function () {
            return this.data.pet6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetFoods.prototype, "foodIcon", {
        /** 食物图标 */
        get: function () {
            return this.data.foodIcon;
        },
        enumerable: false,
        configurable: true
    });
    TablepetFoods.TableName = "petFoods";
    return TablepetFoods;
}());
exports.TablepetFoods = TablepetFoods;
