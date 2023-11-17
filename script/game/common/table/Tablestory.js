"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablestory = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablestory = /** @class */ (function () {
    function Tablestory() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablestory.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablestory.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablestory.prototype, "limit", {
        /** 升级条件 */
        get: function () {
            return this.data.limit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablestory.prototype, "name", {
        /** 章节名称 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablestory.prototype, "desc", {
        /** 章节描述 */
        get: function () {
            return this.data.desc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablestory.prototype, "scene", {
        /** 章节预设 */
        get: function () {
            return this.data.scene;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablestory.prototype, "sceneValue", {
        /** 当前预设层数 */
        get: function () {
            return this.data.sceneValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablestory.prototype, "offlineCoin", {
        /** 金币收益（分钟） */
        get: function () {
            return this.data.offlineCoin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablestory.prototype, "offlineTimes", {
        /** 单次离线时长限制（分钟） */
        get: function () {
            return this.data.offlineTimes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablestory.prototype, "coefficient", {
        /** 观看广告收益翻倍系数 */
        get: function () {
            return this.data.coefficient;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablestory.prototype, "houseName", {
        /** 房型名称 */
        get: function () {
            return this.data.houseName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablestory.prototype, "housePng", {
        /** 房型缩略图 */
        get: function () {
            return this.data.housePng;
        },
        enumerable: false,
        configurable: true
    });
    Tablestory.TableName = "story";
    return Tablestory;
}());
exports.Tablestory = Tablestory;
