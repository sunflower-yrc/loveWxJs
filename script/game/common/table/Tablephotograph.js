"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablephotograph = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablephotograph = /** @class */ (function () {
    function Tablephotograph() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablephotograph.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablephotograph.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablephotograph.prototype, "photoType", {
        /** 照片类型 */
        get: function () {
            return this.data.photoType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablephotograph.prototype, "name", {
        /** 照片名称 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablephotograph.prototype, "describe", {
        /** 照片描述 */
        get: function () {
            return this.data.describe;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablephotograph.prototype, "photograph", {
        /** 照片贴图 */
        get: function () {
            return this.data.photograph;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablephotograph.prototype, "rolePoints", {
        /** 角色的ID
    角色坐标点 */
        get: function () {
            return this.data.rolePoints;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablephotograph.prototype, "zooming", {
        /** 镜头的x轴,y轴 */
        get: function () {
            return this.data.zooming;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablephotograph.prototype, "scene", {
        /** 拍照场景 */
        get: function () {
            return this.data.scene;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablephotograph.prototype, "pixel", {
        /** 照片像素 */
        get: function () {
            return this.data.pixel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablephotograph.prototype, "judgement", {
        /** 判断是否可重复获得 */
        get: function () {
            return this.data.judgement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablephotograph.prototype, "rename", {
        /** 是否可以重命名 */
        get: function () {
            return this.data.rename;
        },
        enumerable: false,
        configurable: true
    });
    Tablephotograph.TableName = "photograph";
    return Tablephotograph;
}());
exports.Tablephotograph = Tablephotograph;
