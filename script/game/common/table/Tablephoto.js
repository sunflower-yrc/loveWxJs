"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablephoto = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablephoto = /** @class */ (function () {
    function Tablephoto() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablephoto.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablephoto.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablephoto.prototype, "photoType", {
        /** 照片类型 */
        get: function () {
            return this.data.photoType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablephoto.prototype, "name", {
        /** 照片名称 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablephoto.prototype, "snapType", {
        /** 拍照类型
    1.纯插画；2.插画配角色；3.外出事件场景自动拍照 */
        get: function () {
            return this.data.snapType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablephoto.prototype, "snapValue", {
        /** 拍照参数
    1.插画资源；2.插画预设；3.角色id-动作名称|角色id-动作名称 */
        get: function () {
            return this.data.snapValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablephoto.prototype, "snapTrigger", {
        /** 触发类型
    1.搬家完成；2.事件完成； */
        get: function () {
            return this.data.snapTrigger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablephoto.prototype, "triggerValue", {
        /** 触发参数
    1.搬家升级到的章节id；2.完成的事件id */
        get: function () {
            return this.data.triggerValue;
        },
        enumerable: false,
        configurable: true
    });
    Tablephoto.TableName = "photo";
    return Tablephoto;
}());
exports.Tablephoto = Tablephoto;
