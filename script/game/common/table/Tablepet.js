"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablepet = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablepet = /** @class */ (function () {
    function Tablepet() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablepet.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablepet.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablepet.prototype, "petOpen", {
        /** 开启条件
    配置限制id
    999为当前版本封锁 */
        get: function () {
            return this.data.petOpen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepet.prototype, "openConsume", {
        /** 解锁消耗 */
        get: function () {
            return this.data.openConsume;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepet.prototype, "petName", {
        /** 初始名称 */
        get: function () {
            return this.data.petName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepet.prototype, "petNagging", {
        /** 待机语录 */
        get: function () {
            return this.data.petNagging;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepet.prototype, "feedNagging", {
        /** 喂食提示 */
        get: function () {
            return this.data.feedNagging;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepet.prototype, "animation", {
        /** 绑定动画 */
        get: function () {
            return this.data.animation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepet.prototype, "firstSkin", {
        /** 初始皮肤 */
        get: function () {
            return this.data.firstSkin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepet.prototype, "openMove", {
        /** 初始解锁动作 */
        get: function () {
            return this.data.openMove;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepet.prototype, "skin", {
        /** 所有皮肤 */
        get: function () {
            return this.data.skin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepet.prototype, "hungerAm", {
        /** 饿了固定动作 */
        get: function () {
            return this.data.hungerAm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepet.prototype, "travelAm", {
        /** 旅行固定动作 */
        get: function () {
            return this.data.travelAm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepet.prototype, "petAm", {
        /** 与人互动动作 */
        get: function () {
            return this.data.petAm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepet.prototype, "roleAm", {
        /** 匹配角色动作 */
        get: function () {
            return this.data.roleAm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepet.prototype, "showAm", {
        /** 解锁展示动作 */
        get: function () {
            return this.data.showAm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablepet.prototype, "showPos", {
        /** 皮肤展示y偏移 */
        get: function () {
            return this.data.showPos;
        },
        enumerable: false,
        configurable: true
    });
    Tablepet.TableName = "pet";
    return Tablepet;
}());
exports.Tablepet = Tablepet;
