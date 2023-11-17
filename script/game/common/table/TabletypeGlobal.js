"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabletypeGlobal = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TabletypeGlobal = /** @class */ (function () {
    function TabletypeGlobal() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TabletypeGlobal.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TabletypeGlobal.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TabletypeGlobal.prototype, "name", {
        /** 大类名称 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TabletypeGlobal.prototype, "subclass", {
        /** 包含子类 */
        get: function () {
            return this.data.subclass;
        },
        enumerable: false,
        configurable: true
    });
    TabletypeGlobal.TableName = "typeGlobal";
    return TabletypeGlobal;
}());
exports.TabletypeGlobal = TabletypeGlobal;
