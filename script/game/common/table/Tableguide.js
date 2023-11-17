"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableguide = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableguide = /** @class */ (function () {
    function Tableguide() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tableguide.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tableguide.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tableguide.prototype, "guideType", {
        /** 引导类型
    1.强引导； */
        get: function () {
            return this.data.guideType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableguide.prototype, "typeValue", {
        /** 类型参数
    对话id
    提示多语言id|位置（0上；1左；2右） */
        get: function () {
            return this.data.typeValue;
        },
        enumerable: false,
        configurable: true
    });
    Tableguide.TableName = "guide";
    return Tableguide;
}());
exports.Tableguide = Tableguide;
