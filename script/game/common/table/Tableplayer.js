"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableplayer = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableplayer = /** @class */ (function () {
    function Tableplayer() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tableplayer.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tableplayer.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tableplayer.prototype, "exp", {
        /** 经验值 */
        get: function () {
            return this.data.exp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableplayer.prototype, "freeBox", {
        /** 赠送开箱次数 */
        get: function () {
            return this.data.freeBox;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableplayer.prototype, "lvUpGift", {
        /** 升级礼包 */
        get: function () {
            return this.data.lvUpGift;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableplayer.prototype, "showFunction", {
        /** 当前等级预览功能id */
        get: function () {
            return this.data.showFunction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableplayer.prototype, "showItem", {
        /** 当前等级预览家具和时装 */
        get: function () {
            return this.data.showItem;
        },
        enumerable: false,
        configurable: true
    });
    Tableplayer.TableName = "player";
    return Tableplayer;
}());
exports.Tableplayer = Tableplayer;
